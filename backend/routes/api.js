const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');

const authMiddleware = require('../middleware/authMiddleware');

// Import product controller functions
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Import bidding controller functions
const { getAllBiddings, createBidding, updateBidding, deleteBidding } = require('../controllers/biddingController');

// Import contract controller functions
const {  getAllContracts, createContract, updateContract, deleteContract } = require('../controllers/contractController');

// Authentication routes
// router.post('/login', authRoutes.login);
// router.post('/register', authRoutes.register);

// Product routes
router.get('/product'  ,authMiddleware.authenticate, getAllProduct);
router.post('/product', authMiddleware.authenticate, createProduct);
router.put('/product/:id', authMiddleware.authenticate, updateProduct);
router.delete('/product/:id', authMiddleware.authenticate, deleteProduct);

// Bidding routes
router.get('/biddings', authMiddleware.authenticate, getAllBiddings);
router.post('/biddings', authMiddleware.authenticate, createBidding);
router.put('/biddings/:id', authMiddleware.authenticate, updateBidding);
router.delete('/biddings/:id', authMiddleware.authenticate, deleteBidding);

// Contract routes
router.get('/contracts', authMiddleware.authenticate, getAllContracts);
router.post('/contracts', authMiddleware.authenticate, createContract);
router.put('/contracts/:id', authMiddleware.authenticate, updateContract);
router.delete('/contracts/:id', authMiddleware.authenticate, deleteContract);

// Include authentication routes
router.use(authRoutes);

module.exports = router;
