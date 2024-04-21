// Import necessary modules
const Contract = require('../models/Contract');
const asyncHandler = require("express-async-handler");

// Controller for handling contract-related operations

// Function to fetch all contracts
const getAllContracts = asyncHandler(async (req, res) => {
    try {
        const contracts = await Contract.find();
        res.json(contracts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Function to create a new contract
const createContract = asyncHandler (async (req, res) => {
    const { name, email, details } = req.body;

    try {
        const newContract = new Contract({ name, email, details });
        await newContract.save();
        res.status(201).json(newContract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Function to update an existing contract
const updateContract = asyncHandler (async (req, res) => {
    const { id } = req.params;
    const { name, email, details } = req.body;

    try {
        const contract = await Contract.findById(id);
        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        contract.name = name;
        contract.email = email;
        contract.details = details;
        await contract.save();
        res.json(contract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Function to delete a contract
const deleteContract = asyncHandler (async (req, res) => {
    const { id } = req.params;

    try {
        const contract = await Contract.findById(id);
        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        await contract.remove();
        res.json({ message: 'Contract deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { getAllContracts, createContract,updateContract,deleteContract};