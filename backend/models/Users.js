const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['seller', 'admin'], default: 'seller' },
    isVerified: { type: Boolean, default: false } // Admin must set this to true
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('User', UserSchema);
