// Modal.js

import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ showModal, closeModal, updateContracts }) => {
    const [contractData, setContractData] = useState({
        name: '',
        email: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContractData({ ...contractData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contracts', contractData);
            console.log('Contract created:', response.data);
            updateContracts(); // Fetch updated contracts after creating a new one
            closeModal(); // Close the modal
        } catch (error) {
            console.error('Error creating contract:', error);
        }
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Create Contract</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={contractData.name} onChange={handleChange} required />
                    <label>Email:</label>
                    <input type="email" name="email" value={contractData.email} onChange={handleChange} required />
                    <label>Status:</label>
                    <input type="text" name="status" value={contractData.status} onChange={handleChange} required />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
