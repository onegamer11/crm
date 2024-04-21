// Import necessary modules
const Bidding = require('../models/Bidding');

// Controller for handling bidding-related operations

// Function to fetch all biddings
const getAllBiddings = async (req, res) => {
    try {
        const biddings = await Bidding.find();
        res.json(biddings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new bidding
const createBidding = async (req, res) => {
    const { title, description, price } = req.body;

    try {
        const newBidding = new Bidding({ title, description, price });
        await newBidding.save();
        res.status(201).json(newBidding);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to update an existing bidding
const updateBidding = async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;

    try {
        const bidding = await Bidding.findById(id);
        if (!bidding) {
            return res.status(404).json({ message: 'Bidding not found' });
        }
        bidding.title = title;
        bidding.description = description;
        bidding.price = price;
        await bidding.save();
        res.json(bidding);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete a bidding
const deleteBidding = async (req, res) => {
    const { id } = req.params;

    try {
        const bidding = await Bidding.findById(id);
        if (!bidding) {
            return res.status(404).json({ message: 'Bidding not found' });
        }
        await bidding.remove();
        res.json({ message: 'Bidding deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllBiddings, updateBidding,createBidding, deleteBidding};