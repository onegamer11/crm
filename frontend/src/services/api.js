import axios from 'axios';


const baseURL = 'http://localhost:5000/api'; // Update with your backend API base URL



const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Initialize useNavigate hook

// Functions to interact with backend API endpoints
export const getProducts = async () => {
  try {
    const response = await api.get('/product');
    return response.data;
  } catch (error) {
    throw new Error('Failed to get products:', error);
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products', productData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create product:', error);
  }
};

// ... other functions for GET, POST, PUT, and DELETE requests (similar structure)

export const registerUser = async (userData) => {
    
  try {
    const response = await api.post('/register', userData);
    if (!response.ok) {
      throw new Error('Registration failed: ' + response.statusText);
    }
    
    return response.data;
  } catch (error) {
    throw new Error('Registration failed:', error);
  }
};

export default api;
