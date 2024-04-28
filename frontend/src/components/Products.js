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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import '../styles/ProductsPage.css';

// const ProductsPage = ({ userRole }) => {
//     const navigate = useNavigate(); // Initialize useNavigate hook
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
//             setAccessDenied(true); // Set accessDenied to true if user's role is not 'siteManager' or 'supplier'
//         }
//     }, [userRole]);

//     // Redirect to login page if access is denied
//     useEffect(() => {
//         if (accessDenied) {
//             navigate('/login'); // Use navigate to redirect to login page if access is denied
//         }
//     }, [accessDenied, navigate]);

//     if (accessDenied) {
//         return null; // Return null if access is denied to prevent rendering of the component
//     }

//     return (
        // <div className="products-page">
        //     <h2>Products</h2>
        //     <div className="product-cards">
        //         {products.map(product => (
        //             <div key={product.id} className="product-card">
        //                 <h3>Product ID: {product.id}</h3>
        //                 <p>Number: {product.number}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
//     );
// };

// export default ProductsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import '../styles/ProductsPage.css';

// const ProductsPage = () => {
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     const [products, setProducts] = useState([]);
//     const [accessDenied, setAccessDenied] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/products');
//             setProducts(response.data);
//         } catch (error) {
//             setError(error);
//             console.error('Error fetching products:', error);
//         }
//     };

//     // Redirect to login page if access is denied
//     useEffect(() => {
//         if (accessDenied) {
//             navigate('/login'); // Use navigate to redirect to login page if access is denied
//         }
//     }, [accessDenied, navigate]);

//     if (accessDenied) {
//         return null; // Return null if access is denied to prevent rendering of the component
//     }

//     return (
//         <div className="products-page">
//         <h2>Products</h2>
//         {error ? (
//             <p>Error fetching products. Please try again later.</p>
//         ) : (
//             <div className="product-cards">
//                 {Array.isArray(products) && products.length > 0 ? (
//                     products.map(product => (
//                         <div key={product.id} className="product-card">
//                             <h3>Product ID: {product.id}</h3>
//                             <p>Number: {product.number}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products available.</p>
//                 )}
//             </div>
//         )}
//     </div>
//     );
// };

// export default ProductsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/ProductsPage.css';

const ProductsPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [products, setProducts] = useState([]);
    const [accessDenied, setAccessDenied] = useState(false);
    const [error, setError] = useState(null);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product');
            setProducts(response.data);
        } catch (error) {
            setError(error);
            console.error('Error fetching products:', error);
        }
    };

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/product', newProduct);
            console.log('Product added:', response.data);
            setProducts([...products, response.data]);
            setShowAddProductModal(false);
            setNewProduct({ name: '', description: '', price: '', image: '' }); // Reset newProduct state
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

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
        // <div className="products-page">
        //     <h2>Products</h2>
        //     <button onClick={() => setShowAddProductModal(true)}>Add Product</button>
        //     <div className="product-cards">
        //         {error ? (
        //             <p>Error fetching products. Please try again later.</p>
        //         ) : (
        //             {Array.isArray(products) && products.length > 0 ? (
        //             products.map(product => (
        //                 <div key={product.id} className="product-card">
        //                     <h3>Product ID: {product.id}</h3>
        //                     <p>Name: {product.name}</p>
        //                     <p>Description: {product.description}</p>
        //                     <p>Price: {product.price}</p>
        //                     <img src={product.image} alt={product.name} />
        //                 </div>

                    
        //             ))
                    

                
                    
        //         )}
            
        //     </div>

        <div className="products-page">
        <h2>Products</h2>
        <button onClick={() => setShowAddProductModal(true)}>Add Product</button>
        <div className="product-cards">
            {error ? (
                <p>Error fetching products. Please try again later.</p>
            ) : (
                Array.isArray(products) && products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <h3>Product ID: {product.id}</h3>
                            <p>Name: {product.name}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                            <img src={product.image} alt={product.name} />
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )
            )}
        </div>
        {showAddProductModal && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowAddProductModal(false)}>&times;</span>
                    <h3>Add Product</h3>
                    <label>Name:</label>
                    <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                    <label>Description:</label>
                    <input type="text" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                    <label>Price:</label>
                    <input type="text" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                    <label>Image:</label>
                    <input type="text" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                    <button onClick={handleAddProduct}>Add Product</button>
                </div>
            </div>
        )}
    </div>
    

                
    );
};

export default ProductsPage;



