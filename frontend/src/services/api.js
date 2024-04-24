// src/services/api.js

// this is the get method to connect frontend and backend 

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Your backend API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Functions to interact with backend API endpoints
export const getProducts = () => api.get('/product');
export const createProduct = (productData) => api.post('/products', productData);

export const getBiddings = () => api.get('/biddings');
export const createBidding = (biddingData) => api.post('/biddings', biddingData);

export const getContracts = () => api.get('/contracts');
export const createContract = (contractData) => api.post('/contracts', contractData);

export const getLoginData = () => api.get('/login-data');
export const createLoginData = (loginData) => api.post('/login-data', loginData);

// You can add more functions for other endpoints as needed

export default api;
