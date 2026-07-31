const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    rank: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    price: { type: Number, required: true, min: 1, max: 10000000 },
    skins: { type: [{ type: String, trim: true, maxlength: 80 }], default: [] },
    whatsappLink: { type: String, required: true, trim: true, maxlength: 500 },
    imageUrl: { type: String, required: true, maxlength: 1000 },
    imagePublicId: { type: String, required: true, select: false },
    isApproved: { type: Boolean, default: false }, // Admin approves each ID
    sold: { type: Boolean, default: false }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Listing', ListingSchema);
