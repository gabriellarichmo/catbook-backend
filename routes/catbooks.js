const express = require('express');
const router = express.Router();
const Catbook = require('../models/Catbook');
const upload = require('../middleware/multer');
const { authMiddleware } = require('./users'); 

router.post('/', authMiddleware, upload.array('photos', 10), async (req, res) => {
    try {
        const photos = req.files.map(file => ({ image: `/uploads/${file.filename}` }));
        const newCatbook = new Catbook({ title: req.body.title, photos });
        await newCatbook.save();
        res.status(201).json(newCatbook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create catbook' });
    }
});

module.exports = router;
