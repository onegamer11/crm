// product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String, // Assuming you'll store the image URL as a string
    required: true
},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
