const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/Users');
const Listing = require('../models/Listing');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();
router.use(auth, requireRole('admin'));

const validId = (id) => mongoose.isObjectIdOrHexString(id);

router.get('/pending', async (req, res, next) => {
  try {
    const listings = await Listing.find({ isApproved: false, sold: false })
      .populate('seller', 'name email isVerified')
      .sort({ createdAt: 1 });
    res.json(listings);
  } catch (err) { next(err); }
});

router.patch('/verify-seller/:userId', async (req, res, next) => {
  if (!validId(req.params.userId)) return res.status(400).json({ message: 'Invalid user ID' });
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId, role: 'seller' }, { isVerified: true }, { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'Seller not found' });
    res.json({ message: 'Seller verified', seller: { id: user._id, name: user.name, isVerified: user.isVerified } });
  } catch (err) { next(err); }
});

router.patch('/approve-listing/:id', async (req, res, next) => {
  if (!validId(req.params.id)) return res.status(400).json({ message: 'Invalid listing ID' });
  try {
    const listing = await Listing.findOneAndUpdate(
      { _id: req.params.id, sold: false }, { isApproved: true }, { new: true, runValidators: true }
    );
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json({ message: 'Listing approved', listing });
  } catch (err) { next(err); }
});

module.exports = router;
