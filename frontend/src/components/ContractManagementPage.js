// ContractManagementPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ContractManagementPage.css';

const ContractManagementPage = () => {
    const [contracts, setContracts] = useState([]);
    const [editedContract, setEditedContract] = useState(null);

    useEffect(() => {
        // Fetch contract information from backend
        axios.get('http://localhost:5000/api')
            .then(response => {
                setContracts(response.data);
            })
            .catch(error => {
                console.error('Error fetching contracts:', error);
            });
    }, []);

    const handleEditContract = (contract) => {
        setEditedContract(contract);
    };

    const handleSaveContract = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/contracts/${editedContract.id}`, editedContract);
            console.log('Contract saved:', response.data);
            setEditedContract(null);
        } catch (error) {
            console.error('Error saving contract:', error);
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

    const handleApproveRejectContract = async (contractId, status) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/contracts/${contractId}`, { status });
            console.log('Contract updated:', response.data);
            setContracts(contracts.map(contract => {
                if (contract.id === contractId) {
                    return {
                        ...contract,
                        status: status === 'approved' ? 'Approved' : 'Rejected'
                    };
                }
                return contract;
            }));
        } catch (error) {
            console.error('Error updating contract:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedContract({
            ...editedContract,
            [name]: value
        });
    };

    return (
        <div className="contract-management-page">
            <h2>Contract Management Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map(contract => (
                        <tr key={contract.id}>
                            <td>{contract.name}</td>
                            <td>{contract.email}</td>
                            <td>{contract.status}</td>
                            <td>
                                {editedContract && editedContract.id === contract.id ? (
                                    <>
                                        <input type="text" name="status" value={editedContract.status} onChange={handleInputChange} />
                                        <button onClick={handleSaveContract}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditContract(contract)}>Edit</button>
                                        <button onClick={() => handleDeleteContract(contract.id)}>Delete</button>
                                        <button onClick={() => handleApproveRejectContract(contract.id, 'approved')}>Approve</button>
                                        <button onClick={() => handleApproveRejectContract(contract.id, 'rejected')}>Reject</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContractManagementPage;
