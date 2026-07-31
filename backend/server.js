const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { setSecurityHeaders, rateLimit } = require('./middleware/security');
require('dotenv').config();

const required = ['MONGO_URI', 'JWT_SECRET'];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
if (process.env.JWT_SECRET.length < 32) throw new Error('JWT_SECRET must be at least 32 characters long');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const origins = (process.env.CORS_ORIGINS || (isProduction ? '' : 'http://localhost:5173,http://localhost:3000'))
  .split(',').map((origin) => origin.trim()).filter(Boolean);
if (isProduction && !origins.length) throw new Error('CORS_ORIGINS must be set in production');

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(setSecurityHeaders);
app.use(cors({
  origin(origin, callback) {
    if (!origin || origins.includes(origin)) return callback(null, true);
    callback(new Error('Origin is not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
  maxAge: 86400
}));
app.use(express.json({ limit: '100kb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300, message: 'Too many requests. Please try again later.' }));

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/listings', require('./routes/listings'));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((err, req, res, next) => {
  if (err.message === 'Origin is not allowed by CORS') return res.status(403).json({ message: err.message });
  if (err.name === 'MulterError') return res.status(400).json({ message: err.message });
  console.error(err);
  res.status(err.status || 500).json({ message: 'Internal server error' });
});

const PORT = Number(process.env.PORT) || 5000;
async function start() {
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

start().catch((err) => {
  console.error('Unable to start server:', err.message);
  process.exit(1);
});

module.exports = app;
