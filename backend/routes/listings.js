const express = require('express');
const router = express.Router(); // <--- THIS WAS MISSING
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Storage Setup for Images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: 'valorant_ids' },
});
const upload = multer({ storage: storage });

// PUBLIC: Get all approved listings
router.get('/active', async (req, res) => {
    try {
        const listings = await Listing.find({ isApproved: true, sold: false }).populate('seller', 'name');
        res.json(listings);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
});

// SELLER: Upload new ID (Requires Auth + Image)
router.post('/add', auth, upload.single('image'), async (req, res) => {
    try {
        const { rank, price, skins, whatsappLink } = req.body;
        
        // Validation: Ensure file exists
        if (!req.file) {
            return res.status(400).json({ msg: "Image is required" });
        }

        const newListing = new Listing({
            seller: req.user.id,
            rank, 
            price, 
            skins: skins ? skins.split(',') : [], // Convert comma string to array
            whatsappLink,
            imageUrl: req.file.path, // Cloudinary URL
            isApproved: false 
        });
        
        await newListing.save();
        res.json({ msg: "Sent for Admin approval!" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Upload failed");
    }
});

// SELLER: Delete listing (Mark as Sold)
router.delete('/sold/:id', auth, async (req, res) => {
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.json({ message: "Account deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: "Delete failed" });
    }
});

module.exports = router;