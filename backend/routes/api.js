const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');


const authMiddleware = require('../middleware/authMiddleware');

// Import product controller functions
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Import bidding controller functions
const { getAllBiddings, createBidding, updateBidding, deleteBidding } = require('../controllers/biddingController');

// Import contract controller functions
const {  getAllContracts, createContract, updateContract, deleteContract } = require('../controllers/contractController');

// // Authentication routes
router.post('/login', async (req, res) => {{authRoutes.login}});
router.post('/register', async (req, res) => {{ authRoutes.register}});

// // Product routes
router.get('/product', async (req, res) => {{authMiddleware.authenticate, getAllProducts}});
// router.get('/product', authMiddleware.authenticate, getAllProduct);

// router.route('/product').get(authMiddleware.authenticate, getAllProduct)

router.post('/product', async (req, res ) => {{authMiddleware.authenticate, createProduct}});
router.put('/product/:id', async (req, res ) => {{authMiddleware.authenticate, updateProduct}});
router.delete('/product/:id', async (req, res) => { { authMiddleware.authenticate, deleteProduct} });

// Bidding routes
router.get('/biddings', async (req, res) => { {authMiddleware.authenticate, getAllBiddings} });
router.post('/biddings', async (req, res) => { {authMiddleware.authenticate, createBidding}});
router.put('/biddings/:id', async  (req, res) => { {authMiddleware.authenticate, updateBidding}});
router.delete('/biddings/:id', async (req, res) => { {authMiddleware.authenticate, deleteBidding} });

// Contract routes
router.get('/contracts', async (req, res) => { {authMiddleware.authenticate, getAllContracts} });
router.post('/contracts', async (req, res) => { {authMiddleware.authenticate, createContract} });
router.put('/contracts/:id', async (req, res) => { {authMiddleware.authenticate, updateContract} });
router.delete('/contracts/:id', async (req, res) => { {authMiddleware.authenticate, deleteContract} });


// Product routes
// router.get('/product', authMiddleware.authenticate, async (req, res) => {
//     await getAllProducts(req, res);
// });

// router.post('/product', authMiddleware.authenticate, async (req, res) => {
//     await createProduct(req, res);
// });

// router.put('/product/:id', authMiddleware.authenticate, async (req, res) => {
//     await updateProduct(req, res);
// });

// router.delete('/product/:id', authMiddleware.authenticate, async (req, res) => {
//     await deleteProduct(req, res);
// });

// // Bidding routes
// router.get('/biddings', authMiddleware.authenticate, async (req, res) => {
//     await getAllBiddings(req, res);
// });

// router.post('/biddings', authMiddleware.authenticate, async (req, res) => {
//     await createBidding(req, res);
// });

// router.put('/biddings/:id', authMiddleware.authenticate, async (req, res) => {
//     await updateBidding(req, res);
// });

// router.delete('/biddings/:id', authMiddleware.authenticate, async (req, res) => {
//     await deleteBidding(req, res);
// });

// // Contract routes
// router.get('/contracts', authMiddleware.authenticate, async (req, res) => {
//     await getAllContracts(req, res);
// });

// router.post('/contracts', authMiddleware.authenticate, async (req, res) => {
//     await createContract(req, res);
// });

// router.put('/contracts/:id', authMiddleware.authenticate, async (req, res) => {
//     await updateContract(req, res);
// });

// router.delete('/contracts/:id', authMiddleware.authenticate, async (req, res) => {
//     await deleteContract(req, res);
// });

// Include authentication routes
router.use(authRoutes);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const authRoutes = require('./authRoutes');
// const authMiddleware = require('../middleware/authMiddleware');
// const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
// const { getAllBiddings, createBidding, updateBidding, deleteBidding } = require('../controllers/biddingController');
// const { getAllContracts, createContract, updateContract, deleteContract } = require('../controllers/contractController');

// // Authentication routes
// router.use(authRoutes);

// // Product routes
// router.get('/product', authMiddleware.authenticate, getAllProducts);
// router.post('/product', authMiddleware.authenticate, createProduct);
// router.put('/product/:id', authMiddleware.authenticate, updateProduct);
// router.delete('/product/:id', authMiddleware.authenticate, deleteProduct);

// // Bidding routes
// router.get('/biddings', authMiddleware.authenticate, getAllBiddings);
// router.post('/biddings', authMiddleware.authenticate, createBidding);
// router.put('/biddings/:id', authMiddleware.authenticate, updateBidding);
// router.delete('/biddings/:id', authMiddleware.authenticate, deleteBidding);

// // Contract routes
// router.get('/contracts', authMiddleware.authenticate, getAllContracts);
// router.post('/contracts', authMiddleware.authenticate, createContract);
// router.put('/contracts/:id', authMiddleware.authenticate, updateContract);
// router.delete('/contracts/:id', authMiddleware.authenticate, deleteContract);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const authRoutes = require('./authRoutes');

// const authMiddleware = require('../middleware/authMiddleware');

// // Import product controller functions
// const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// // Import bidding controller functions
// const { getAllBiddings, createBidding, updateBidding, deleteBidding } = require('../controllers/biddingController');

// // Import contract controller functions
// const { getAllContracts, createContract, updateContract, deleteContract } = require('../controllers/contractController');

// // Authentication routes
// router.use(authRoutes);

// // Product routes
// // router.get('/products', authMiddleware.authenticate, getAllProducts);
// // router.post('/products', authMiddleware.authenticate, createProduct);
// // router.put('/products/:id', authMiddleware.authenticate, updateProduct);
// // router.delete('/products/:id', authMiddleware.authenticate, deleteProduct);


// router.get('/products', authenticate, async (req, res) => {
//     try {
//       const products = await getAllProducts(req);
//       res.json(products);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error fetching products' });
//     }
//   });
  
//   router.post('/products', authenticate, async (req, res) => {
//     try {
//       const product = await createProduct(req.body);
//       res.json(product);
//     } catch (error) {
//       console.error(error);
//       res.status(400).json({ message: 'Error creating product' });
//     }
//   });
  
//   router.put('/products/:id', authenticate, async (req, res) => {
//     try {
//       const product = await updateProduct(req.params.id, req.body);
//       res.json(product);
//     } catch (error) {
//       console.error(error);
//       res.status(400).json({ message: 'Error updating product' });
//     }
//   });
  
//   router.delete('/products/:id', authenticate, async (req, res) => {
//     try {
//       await deleteProduct(req.params.id);
//       res.json({ message: 'Product deleted' });
//     } catch (error) {
//       console.error(error);
//       res.status(400).json({ message: 'Error deleting product' });
//     }
//   });

// // Bidding routes
// router.get('/biddings', authMiddleware.authenticate, getAllBiddings);
// router.post('/biddings', authMiddleware.authenticate, createBidding);
// router.put('/biddings/:id', authMiddleware.authenticate, updateBidding);
// router.delete('/biddings/:id', authMiddleware.authenticate, deleteBidding);

// // Contract routes
// router.get('/contracts', authMiddleware.authenticate, getAllContracts);
// router.post('/contracts', authMiddleware.authenticate, createContract);
// router.put('/contracts/:id', authMiddleware.authenticate, updateContract);
// router.delete('/contracts/:id', authMiddleware.authenticate, deleteContract);

// module.exports = router;

