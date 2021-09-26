const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  yop: {
    type: String
  },
  doi: {
    type: String
  },
  description: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  },
  sepractice: {
    type: String
  },
});

module.exports = Book = mongoose.model('book', BookSchema);