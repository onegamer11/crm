const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
