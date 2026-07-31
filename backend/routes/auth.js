const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const { rateLimit } = require('../middleware/security');

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function issueToken(user) {
  return jwt.sign(
    { id: user._id.toString(), role: user.role },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h', issuer: 'valorant-marketplace', audience: 'valorant-marketplace-api' }
  );
}

function validPassword(password) {
  return typeof password === 'string' && password.length >= 12 && password.length <= 128;
}

router.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 15, message: 'Too many authentication attempts. Please try again later.' }));

router.post('/register', async (req, res, next) => {
  const { name, email, password } = req.body || {};
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80 || !emailPattern.test(normalizedEmail) || !validPassword(password)) {
    return res.status(400).json({ message: 'Provide a name, valid email, and password of at least 12 characters' });
  }

  try {
    const existing = await User.exists({ email: normalizedEmail });
    if (existing) return res.status(409).json({ message: 'Unable to create account with these details' });

    const user = await User.create({
      name: name.trim(), email: normalizedEmail, password: await bcrypt.hash(password, 12), role: 'seller'
    });
    res.status(201).json({ token: issueToken(user), user: { id: user._id, name: user.name, role: user.role, isVerified: user.isVerified } });
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: 'Unable to create account with these details' });
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body || {};
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (!emailPattern.test(normalizedEmail) || typeof password !== 'string') return res.status(400).json({ message: 'Invalid credentials' });

  try {
    const user = await User.findOne({ email: normalizedEmail }).select('+password');
    const isMatch = user && await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ token: issueToken(user), user: { id: user._id, name: user.name, role: user.role, isVerified: user.isVerified } });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
