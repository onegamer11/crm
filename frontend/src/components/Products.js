// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/ProductsPage.css';

// const ProductsPage = ({ userRole }) => {
//     const [products, setProducts] = useState([]);
//     const [accessDenied, setAccessDenied] = useState(false);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     // Check if the user is authorized to access the page
//     useEffect(() => {
//         if (userRole !== 'siteManager' && userRole !== 'supplier') {
//             setAccessDenied(true);
//         }
//     }, [userRole]);

//     // Redirect to login page if access is denied
//     if (accessDenied) {
//         return <Redirect to="/login" />;
//     }

//     return (
//         <div className="products-page">
//             <h2>Products</h2>
//             <div className="product-cards">
//                 {products.map(product => (
//                     <div key={product.id} className="product-card">
//                         <h3>Product ID: {product.id}</h3>
//                         <p>Number: {product.number}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/ProductsPage.css';

const ProductsPage = ({ userRole }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [products, setProducts] = useState([]);
    const [accessDenied, setAccessDenied] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Check if the user is authorized to access the page
    useEffect(() => {
        if (userRole !== 'siteManager' && userRole !== 'supplier') {
            setAccessDenied(true); // Set accessDenied to true if user's role is not 'siteManager' or 'supplier'
        }
    }, [userRole]);

    // Redirect to login page if access is denied
    useEffect(() => {
        if (accessDenied) {
            navigate('/login'); // Use navigate to redirect to login page if access is denied
        }
    }, [accessDenied, navigate]);

    if (accessDenied) {
        return null; // Return null if access is denied to prevent rendering of the component
    }

    return (
        <div className="products-page">
            <h2>Products</h2>
            <div className="product-cards">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>Product ID: {product.id}</h3>
                        <p>Number: {product.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;

