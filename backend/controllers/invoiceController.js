const Invoice = require('../models/Invoice');

// Fetch invoice data
exports.getInvoiceData = async (req, res) => {
  try {
    const invoiceData = await Invoice.findOne({ status: 'pending' });
    res.json(invoiceData);
  } catch (error) {
    console.error('Error fetching invoice data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Approve invoice
exports.approveInvoice = async (req, res) => {
  try {
    await Invoice.updateOne({ status: 'pending' }, { status: 'approved' });
    res.sendStatus(204); // No Content
  } catch (error) {
    console.error('Error approving invoice:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
