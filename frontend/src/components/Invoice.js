import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Invoice.css';

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const fetchInvoiceData = async () => {
    try {
      const response = await axios.get('/api/invoice');
      setInvoiceData(response.data);
    } catch (error) {
      console.error('Error fetching invoice data:', error);
    }
  };

  const approveInvoice = async () => {
    try {
      await axios.put('/api/approveInvoice');
      alert('Invoice approved successfully!');
    } catch (error) {
      console.error('Error approving invoice:', error);
      alert('Failed to approve invoice');
    }
  };
  

  return (
    <div>
      <h2>Invoice</h2>
      {invoiceData ? (
        <div>
          <p>Product Name: {invoiceData.productName}</p>
          <p>Price: ${invoiceData.price}</p>
          <p>User Name: {invoiceData.userName}</p>
          <button onClick={approveInvoice}>Approve Invoice</button>
        </div>
      ) : (
        <p>Loading invoice data...</p>
      )}
    </div>
  );
};

export default Invoice;
