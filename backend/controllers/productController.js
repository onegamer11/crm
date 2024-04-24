// Import necessary modules
const Product= require('../models/Product');


// Controller for handling product-related operations

// Function to fetch all products
// exports.getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const getAllProduct = async (req, res) => {
//     try {
//         // Implementation code to fetch products from the database
//         res.status(200).json({ message: 'Products fetched successfully' });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// Function to fetch all products
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to create a new product
const createProduct = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to update an existing product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.remove();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { Product, getAllProduct, createProduct, updateProduct, deleteProduct};


