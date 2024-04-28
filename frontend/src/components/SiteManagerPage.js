// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../styles/SiteManagerPage.css';

// const SiteManagerPage = () => {
//     const [products, setProducts] = useState([]);
//     const [biddings, setBiddings] = useState([]);
//     const [loginData, setLoginData] = useState([]);
//     const [contracts, setContracts] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const productsResponse = await axios.get('http://localhost:5000/api/product');
//             console.log('Products:' , productsResponse.data)
//             setProducts(productsResponse.data);

//             const biddingsResponse = await axios.get('http://localhost:5000/api/biddings')
//             console.log('Biddings:' , biddingsResponse.data)
//             setBiddings(biddingsResponse.data);

//             const loginDataResponse = await axios.get('http://localhost:5000/api/login-data');
//             console.log('Login Data:' , loginDataResponse.data)
//             setLoginData(loginDataResponse.data);

//             const contractsResponse = await axios.get('http://localhost:5000/api/contracts');
//             console.log('Contracts: ', contractsResponse.data)
//             setContracts(contractsResponse.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleDeleteProduct = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/products/${productId}`);
//             setProducts(products.filter(product => product.id !== productId));
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     const handleDeleteBidding = async (biddingId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/biddings/${biddingId}`);
//             setBiddings(biddings.filter(bidding => bidding.id !== biddingId));
//         } catch (error) {
//             console.error('Error deleting bidding:', error);
//         }
//     };

//     const handleDeleteContract = async (contractId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/contracts/${contractId}`);
//             setContracts(contracts.filter(contract => contract.id !== contractId));
//         } catch (error) {
//             console.error('Error deleting contract:', error);
//         }
//     };

//     const handleApproveContract = async (contractId) => {
//         try {
//             await axios.put(`http://localhost:5000/api/contracts/${contractId}`, { approved: true });
//             const updatedContracts = contracts.map(contract => {
//                 if (contract.id === contractId) {
//                     return { ...contract, approved: true };
//                 }
//                 return contract;
//             });
//             setContracts(updatedContracts);
//             // Generate invoice
//             // This logic depends on how invoices are generated and saved in your backend
//             // You can call an endpoint to generate the invoice
//         } catch (error) {
//             console.error('Error approving contract:', error);
//         }
//     };

//     return (
//         <div className="site-manager-page">
//             <h2>Site Manager Dashboard</h2>
//             <div className="dashboard">
//                 <div className="navigation-buttons">
//                     <Link to="/products" className="button">Products</Link>
//                     <Link to="/biddings" className="button">Biddings</Link>
//                 </div>
//                 <div className="products-section">
//                     <h3>Products</h3>
//                     <ul>
//                         {products.map(product => (
//                             <li key={product.id}>
//                                 {product.name}
//                                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="biddings-section">
//                     <h3>Biddings</h3>
//                     <ul>
//                         {biddings.map(bidding => (
//                             <li key={bidding.id}>
//                                 {bidding.title}
//                                 <button onClick={() => handleDeleteBidding(bidding.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="login-data-section">
//                     <h3>Login Data</h3>
//                     <ul>
//                         {loginData.map(data => (
//                             <li key={data.id}>
//                                 Username: {data.username}<br />
//                                 Login Time: {data.loginTime}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="contracts-section">
//                     <h3>Contract Management</h3>
//                     <ul>
//                         {contracts.map(contract => (
//                             <li key={contract.id}>
//                                 Contract ID: {contract.id}<br />
//                                 Details: {contract.details}<br />
//                                 Approved: {contract.approved ? 'Yes' : 'No'}
//                                 {!contract.approved && (
//                                     <button onClick={() => handleApproveContract(contract.id)}>Approve</button>
//                                 )}
//                                 <button onClick={() => handleDeleteContract(contract.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SiteManagerPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/SiteManagerPage.css';

const SiteManagerPage = () => {
    const [products, setProducts] = useState([]);
    const [biddings, setBiddings] = useState([]);
    const [loginData, setLoginData] = useState([]);
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const productsResponse = await axios.get('http://localhost:5000/api/product');
            console.log('Products:', productsResponse.data);
            setProducts(productsResponse.data);

            const biddingsResponse = await axios.get('http://localhost:5000/api/biddings');
            console.log('Biddings:', biddingsResponse.data);
            setBiddings(biddingsResponse.data);

            const loginDataResponse = await axios.get('http://localhost:5000/api/login-data');
            console.log('Login Data:', loginDataResponse.data);
            setLoginData(loginDataResponse.data);

            const contractsResponse = await axios.get('http://localhost:5000/api/contracts');
            console.log('Contracts:', contractsResponse.data);
            setContracts(contractsResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/product/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleDeleteBidding = async (biddingId) => {
        try {
            await axios.delete(`http://localhost:5000/api/biddings/${biddingId}`);
            setBiddings(biddings.filter(bidding => bidding.id !== biddingId));
        } catch (error) {
            console.error('Error deleting bidding:', error);
        }
    };

    const handleDeleteContract = async (contractId) => {
        try {
            await axios.delete(`http://localhost:5000/api/contracts/${contractId}`);
            setContracts(contracts.filter(contract => contract.id !== contractId));
        } catch (error) {
            console.error('Error deleting contract:', error);
        }
    };

    const handleApproveContract = async (contractId) => {
        try {
            await axios.put(`http://localhost:5000/api/contracts/${contractId}`, { approved: true });
            const updatedContracts = contracts.map(contract => {
                if (contract.id === contractId) {
                    return { ...contract, approved: true };
                }
                return contract;
            });
            setContracts(updatedContracts);
            // Generate invoice
            // This logic depends on how invoices are generated and saved in your backend
            // You can call an endpoint to generate the invoice
        } catch (error) {
            console.error('Error approving contract:', error);
        }
    };

    return (
        <div className="site-manager-page">
            <h2>Site Manager Dashboard</h2>
            <div className="dashboard">
                <div className="navigation-buttons">
                    <Link to="/products" className="button">Products</Link>
                    <Link to="/biddings" className="button">Biddings</Link>
                </div>
                <div className="products-section">
                    <h3>Products</h3>
                    <ul>
                        {Array.isArray(products) && products.length > 0 && products.map(product => (
                            <li key={product.id}>
                                {product.name}
                                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="biddings-section">
                    <h3>Biddings</h3>
                    <ul>
                        {Array.isArray(biddings) && biddings.length > 0 && biddings.map(bidding => (
                            <li key={bidding.id}>
                                {bidding.title}
                                <button onClick={() => handleDeleteBidding(bidding.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="login-data-section">
                    <h3>Login Data</h3>
                    <ul>
                        {Array.isArray(loginData) && loginData.length > 0 && loginData.map(data => (
                            <li key={data.id}>
                                Username: {data.username}<br />
                                Login Time: {data.loginTime}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contracts-section">
                    <h3>Contract Management</h3>
                    <ul>
                        {Array.isArray(contracts) && contracts.length > 0 && contracts.map(contract => (
                            <li key={contract.id}>
                                Contract ID: {contract.id}<br />
                                Details: {contract.details}<br />
                                Approved: {contract.approved ? 'Yes' : 'No'}
                                {!contract.approved && (
                                    <button onClick={() => handleApproveContract(contract.id)}>Approve</button>
                                )}
                                <button onClick={() => handleDeleteContract(contract.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteManagerPage;
