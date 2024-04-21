// contract.js

const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // Add more fields as needed
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
