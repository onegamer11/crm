// BiddingPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BiddingPage.css';

const BiddingPage = () => {
    const [bids, setBids] = useState([]);
    const [editedBid, setEditedBid] = useState(null);

    useEffect(() => {
        // Fetch bidding information from backend
        axios.get('http://localhost:5000/api')
            .then(response => {
                setBids(response.data);
            })
            .catch(error => {
                console.error('Error fetching bids:', error);
            });
    }, []);

    const handleEditBid = (bid) => {
        setEditedBid(bid);
    };

    const handleSaveBid = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api${editedBid.id}`, editedBid);
            console.log('Bid saved:', response.data);
            setEditedBid(null);
        } catch (error) {
            console.error('Error saving bid:', error);
        }
    };

    const handleDeleteBid = async (bidId) => {
        try {
            await axios.delete(`http://localhost:5000/api${bidId}`);
            setBids(bids.filter(bid => bid.id !== bidId));
        } catch (error) {
            console.error('Error deleting bid:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedBid({
            ...editedBid,
            [name]: value
        });
    };

    return (
        <div className="bidding-page">
            <h2>Bidding Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map(bid => (
                        <tr key={bid.id}>
                            <td>{bid.user}</td>
                            <td>{bid.time}</td>
                            <td>
                                {editedBid && editedBid.id === bid.id ? (
                                    <input type="text" name="amount" value={editedBid.amount} onChange={handleInputChange} />
                                ) : (
                                    bid.amount
                                )}
                            </td>
                            <td>
                                {editedBid && editedBid.id === bid.id ? (
                                    <button onClick={handleSaveBid}>Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditBid(bid)}>Edit</button>
                                        <button onClick={() => handleDeleteBid(bid.id)}>Delete</button>
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

export default BiddingPage;
