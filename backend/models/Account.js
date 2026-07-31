const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rank: { type: String, required: true }, // e.g., "Radiant"
    skins: [String], // Array of skin names
    price: { type: Number, required: true },
    screenshotUrl: String,
    status: { type: String, enum: ['available', 'sold'], default: 'available' },
    isVerifiedByAdmin: { type: Boolean, default: false }, // Security check
    whatsappGroupLink: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', AccountSchema);