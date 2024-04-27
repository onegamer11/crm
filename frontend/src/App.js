// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import SupplierPage from './components/SupplierPage';
// import StaffPage from './components/StaffPage';
// import SiteManagerPage from './components/SiteManagerPage';
// import ProductsPage from './components/ProductsPage';
// import BiddingPage from './components/BiddingPage';
// import ContractManagementPage from './components/ContractManagementPage';
// import InvoicePage from './components/InvoicePage';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SupplierPage from './components/SupplierPage';
import StaffPage from './components/StaffPage';
import SiteManagerPage from './components/SiteManagerPage';
import ProductsPage from './components/Products';
import BiddingPage from './components/Bidding';
import ContractManagementPage from './components/ContractManagementPage';
import InvoicePage from './components/Invoice';




function App() {
  // Assuming userRole is defined here
  const userRole = 'site-manager'; // Example user role

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/supplier" element={<SupplierPage />} />
          <Route path="/staff" element={<StaffPage />} />
          {/* <Route path="/site-manager" element={<SiteManagerPage />} /> */}
          <Route path="/site-manager" element={<SiteManagerPage />} />

          <Route path="/products" element={<ProductsPage userRole={userRole} />} />
          <Route path="/biddings" element={<BiddingPage />} />
          <Route path="/contracts" element={<ContractManagementPage />} />
          <Route path="/invoices" element={<InvoicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
