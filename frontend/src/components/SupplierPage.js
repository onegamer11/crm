import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/SupplierPage.css';

const SupplierPage = () => {
    const [biddings, setBiddings] = useState([]);
    const [products, setProducts] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [editedBidding, setEditedBidding] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
        image: '',
    });

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData = async () => {
        try {
            const biddingsResponse = await axios.get('http://localhost:5000/api/biddings');
            setBiddings(biddingsResponse.data);

            const productsResponse = await axios.get('http://localhost:5000/api/product');
            setProducts(productsResponse.data);

            const contractsResponse = await axios.get('http://localhost:5000/api/contracts');
            setContracts(contractsResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/product', newProduct);
            console.log('Product added:', response.data);
            setProducts([...products, response.data]);
            setShowAddProductModal(false);
            setNewProduct({ name: '', description: '', price: 0, image: '' });
        } catch (error) {
            console.error('Error adding product:', error);
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
        } catch (error) {
            console.error('Error approving contract:', error);
        }
    };

    const handleRejectContract = async (contractId) => {
        try {
            await axios.put(`http://localhost:5000/api/contracts/${contractId}`, { approved: false });
            const updatedContracts = contracts.map(contract => {
                if (contract.id === contractId) {
                    return { ...contract, approved: false };
                }
                return contract;
            });
            setContracts(updatedContracts);
        } catch (error) {
            console.error('Error rejecting contract:', error);
        }
    };

    const handleEditBidding = (bidding) => {
        setEditedBidding(bidding);
    };

    const handleEditProduct = (product) => {
        setEditedProduct(product);
    };

    const handleSaveBidding = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/biddings/${editedBidding.id}`, editedBidding);
            console.log('Bidding saved:', response.data);
            setEditedBidding(null);
        } catch (error) {
            console.error('Error saving bidding:', error);
        }
    };

    const handleSaveProduct = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/product/${editedProduct.id}`, editedProduct);
            console.log('Product saved:', response.data);
            setEditedProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
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

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/product/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleInputChange = (event, type) => {
        const { name, value } = event.target;
        if (type === 'bidding') {
            setEditedBidding({
                ...editedBidding,
                [name]: value
            });
        } else if (type === 'product') {
            setEditedProduct({
                ...editedProduct,
                [name]: value
            });
        }
    };

    return (
        <div className="supplier-page">
            <h2>Supplier Dashboard</h2>
            <div className="navigation-buttons">
                <Link to="/biddings" className="button">Biddings</Link>
                <Link to="/products" className="button">Products</Link>
                <Link to="/contracts" className="button">Contract Management</Link>
            </div>
            <div className="biddings-section">
                <h3>Biddings</h3>
                <ul>
                    {biddings.map(bidding => (
                        <li key={bidding.id}>
                            {editedBidding && editedBidding.id === bidding.id ? (
                                <>
                                    <input type="text" name="title" value={editedBidding.title} onChange={(event) => handleInputChange(event, 'bidding')} />
                                    <button onClick={handleSaveBidding}>Save</button>
                                </>
                            ) : (
                                <>
                                    {bidding.title}
                                    <button onClick={() => handleEditBidding(bidding)}>Edit</button>
                                    <button onClick={() => handleDeleteBidding(bidding.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="products-section">
                <h3>Products</h3>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {editedProduct && editedProduct.id === product.id ? (
                                <>
                                    <input type="text" name="name" value={editedProduct.name} onChange={(event) => handleInputChange(event, 'product')} />
                                    <button onClick={handleSaveProduct}>Save</button>
                                </>
                            ) : (
                                <>
                                    {product.name}
                                    <button onClick={() => handleEditProduct(product)}>Edit</button>
                                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="contracts-section">
                <h3>Contract Management</h3>
                <ul>
                    {contracts.map(contract => (
                        <li key={contract.id}>
                            Contract ID: {contract.id}<br />
                            Details: {contract.details}<br />
                            Status: {contract.approved ? 'Approved' : 'Rejected'}
                            {!contract.approved && (
                                <>
                                    <button onClick={() => handleApproveContract(contract.id)}>Approve</button>
                                    <button onClick={() => handleRejectContract(contract.id)}>Reject</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Add Product Modal */}
            {showAddProductModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Add Product</h3>
                        <label>Name:</label>
                        <input type="text" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                        <label>Description:</label>
                        <textarea name="description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}></textarea>
                        <label>Price:</label>
                        <input type="number" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                        <label>Image:</label>
                        <input type="file" name="image" onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })} />
                        <button onClick={handleAddProduct}>Add Product</button>
                        <button onClick={() => setShowAddProductModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>

       
    );
};

export default SupplierPage;
