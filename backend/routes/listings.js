const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Listing = require('../models/Listing');
const User = require('../models/Users');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();
const cloudinaryKeys = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
if (cloudinaryKeys.some((key) => !process.env[key])) throw new Error('Cloudinary credentials are required');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'valorant_ids', resource_type: 'image', allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => cb(null, /^image\/(jpeg|png|webp)$/.test(file.mimetype))
});

const validId = (id) => mongoose.isObjectIdOrHexString(id);
const whatsappHosts = new Set(['wa.me', 'api.whatsapp.com', 'chat.whatsapp.com', 'www.whatsapp.com']);

async function removeUploadedFile(file) {
  if (!file?.filename) return;
  try { await cloudinary.uploader.destroy(file.filename, { resource_type: 'image' }); }
  catch (err) { console.error('Unable to remove rejected upload:', err.message); }
}

function parseListing(body) {
  const rank = typeof body.rank === 'string' ? body.rank.trim() : '';
  const price = Number(body.price);
  const skins = (Array.isArray(body.skins) ? body.skins : String(body.skins || '').split(','))
    .map((skin) => String(skin).trim()).filter(Boolean);
  let whatsapp;
  try { whatsapp = new URL(body.whatsappLink); } catch { return null; }
  if (!rank || rank.length > 80 || !Number.isFinite(price) || price < 1 || price > 10000000 || skins.length > 30 || skins.some((skin) => skin.length > 80) || whatsapp.protocol !== 'https:' || !whatsappHosts.has(whatsapp.hostname)) return null;
  return { rank, price, skins, whatsappLink: whatsapp.toString() };
}

router.get('/active', async (req, res, next) => {
  try {
    const listings = await Listing.find({ isApproved: true, sold: false })
      .select('rank price skins whatsappLink imageUrl seller createdAt')
      .populate('seller', 'name')
      .sort({ createdAt: -1 }).lean();
    res.json(listings);
  } catch (err) { next(err); }
});

router.post('/add', auth, requireRole('seller'), upload.single('image'), async (req, res, next) => {
  const input = parseListing(req.body || {});
  if (!input) {
    await removeUploadedFile(req.file);
    return res.status(400).json({ message: 'Invalid listing details' });
  }
  if (!req.file) return res.status(400).json({ message: 'A JPG, PNG, or WebP image under 5 MB is required' });

  try {
    const seller = await User.findOne({ _id: req.user.id, role: 'seller', isVerified: true });
    if (!seller) {
      await removeUploadedFile(req.file);
      return res.status(403).json({ message: 'Only verified sellers can create listings' });
    }
    await Listing.create({ seller: seller._id, ...input, imageUrl: req.file.path, imagePublicId: req.file.filename, isApproved: false });
    res.status(201).json({ message: 'Listing submitted for approval' });
  } catch (err) {
    await removeUploadedFile(req.file);
    next(err);
  }
});

router.delete('/sold/:id', auth, async (req, res, next) => {
  if (!validId(req.params.id)) return res.status(400).json({ message: 'Invalid listing ID' });
  try {
    const query = req.user.role === 'admin' ? { _id: req.params.id } : { _id: req.params.id, seller: req.user.id };
    const listing = await Listing.findOneAndUpdate(query, { sold: true }, { new: true });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json({ message: 'Listing marked as sold' });
  } catch (err) { next(err); }
});

module.exports = router;
