const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  image: { type: String, required: true }
});

const catbookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photos: [photoSchema]
});

module.exports = mongoose.model('Catbook', catbookSchema);
