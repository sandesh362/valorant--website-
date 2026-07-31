const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rank: String,
    price: Number,
    skins: [String],
    whatsappLink: String,
    imageUrl: String,
    isApproved: { type: Boolean, default: false }, // Admin approves each ID
    sold: { type: Boolean, default: false }
});

module.exports = mongoose.model('Listing', ListingSchema);