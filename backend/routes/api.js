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

// // Authentication routes
router.post('/login', function (req, res) {authRoutes.login});
router.post('/register', function (req, res) {authRoutes.register});

// Product routes
router.get('/product', function (req, res){authMiddleware.authenticate, getAllProduct});
// router.get('/product', authMiddleware.authenticate, getAllProduct);

router.post('/product', function (req, res ) {authMiddleware.authenticate, createProduct});
router.put('/product/:id', function (req, res ) {authMiddleware.authenticate, updateProduct});
router.delete('/product/:id', function(req, res) { authMiddleware.authenticate, deleteProduct});

// Bidding routes
router.get('/biddings', function (req, res) {authMiddleware.authenticate, getAllBiddings});
router.post('/biddings', function (req, res) {authMiddleware.authenticate, createBidding});
router.put('/biddings/:id', function (req, res) {authMiddleware.authenticate, updateBidding});
router.delete('/biddings/:id', function (req, res) {authMiddleware.authenticate, deleteBidding});

// Contract routes
router.get('/contracts', function (req, res) {authMiddleware.authenticate, getAllContracts});
router.post('/contracts', function (req, res) {authMiddleware.authenticate, createContract});
router.put('/contracts/:id', function (req, res) {authMiddleware.authenticate, updateContract});
router.delete('/contracts/:id', function (req, res) {authMiddleware.authenticate, deleteContract});

// Include authentication routes
router.use(authRoutes);

module.exports = router;
