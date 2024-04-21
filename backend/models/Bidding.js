// bidding.js

const mongoose = require('mongoose');

const biddingSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

const Bidding = mongoose.model('Bidding', biddingSchema);

module.exports = Bidding;
