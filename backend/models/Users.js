const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['seller', 'admin'], default: 'seller' },
    isVerified: { type: Boolean, default: false } // Admin must set this to true
});

module.exports = mongoose.model('User', UserSchema);