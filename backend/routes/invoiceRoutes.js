const express = require('express');
const router = express.Router();
const { getInvoiceData, approveInvoice } = require('../controllers/invoiceController');

router.get('/invoice', getInvoiceData);
router.put('/approveInvoice', approveInvoice);

module.exports = router;
