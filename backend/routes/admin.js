// server/routes/admin.js
const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const Listing = require('../models/Listing');

// ADMIN: Verify a new seller
router.patch('/verify-seller/:userId', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.userId, { isVerified: true });
        res.json({ message: "Seller verified. They can now post listings." });
    } catch (err) {
        res.status(500).json({ error: "Verification failed" });
    }
});

// ADMIN: Approve a listing to go live
router.patch('/approve-listing/:id', async (req, res) => {
    try {
        await Listing.findByIdAndUpdate(req.params.id, { isApproved: true });
        res.json({ message: "Listing is now live on the website!" });
    } catch (err) {
        res.status(500).json({ error: "Approval failed" });
    }
});

module.exports = router;