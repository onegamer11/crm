// // BiddingPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/BiddingPage.css';

// const BiddingPage = () => {
//     const [bids, setBids] = useState([]);
//     const [editedBid, setEditedBid] = useState(null);

//     useEffect(() => {
//         // Fetch bidding information from backend
//         axios.get('http://localhost:5000/api')
//             .then(response => {
//                 setBids(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching bids:', error);
//             });
//     }, []);

//     const handleEditBid = (bid) => {
//         setEditedBid(bid);
//     };

//     const handleSaveBid = async () => {
//         try {
//             const response = await axios.put(`http://localhost:5000/api${editedBid.id}`, editedBid);
//             console.log('Bid saved:', response.data);
//             setEditedBid(null);
//         } catch (error) {
//             console.error('Error saving bid:', error);
//         }
//     };

//     const handleDeleteBid = async (bidId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api${bidId}`);
//             setBids(bids.filter(bid => bid.id !== bidId));
//         } catch (error) {
//             console.error('Error deleting bid:', error);
//         }
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setEditedBid({
//             ...editedBid,
//             [name]: value
//         });
//     };

//     return (
//         <div className="bidding-page">
//             <h2>Bidding Page</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User</th>
//                         <th>Time</th>
//                         <th>Amount</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bids.map(bid => (
//                         <tr key={bid.id}>
//                             <td>{bid.user}</td>
//                             <td>{bid.time}</td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <input type="text" name="amount" value={editedBid.amount} onChange={handleInputChange} />
//                                 ) : (
//                                     bid.amount
//                                 )}
//                             </td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <button onClick={handleSaveBid}>Save</button>
//                                 ) : (
//                                     <>
//                                         <button onClick={() => handleEditBid(bid)}>Edit</button>
//                                         <button onClick={() => handleDeleteBid(bid.id)}>Delete</button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default BiddingPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/BiddingPage.css';

// const BiddingPage = () => {
//     const [bids, setBids] = useState([]);
//     const [editedBid, setEditedBid] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // const fetchData = async () => {
//     //     try {
//     //         const response = await axios.get('http://localhost:5000/api/bids');
//     //         setBids(response.data);
//     //     } catch (error) {
//     //         console.error('Error fetching bids:', error);
//     //     }
//     // };

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bids');
//             if (Array.isArray(response.data)) {
//                 setBids(response.data);
//             } else {
//                 console.error('Bids data is not an array:', response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching bids:', error);
//         }
//     };


//     console.log('Bids:', bids);

//     const handleEditBid = (bid) => {
//         setEditedBid({ ...bid }); // Make a copy of the bid to edit
//     };

//     const handleSaveBid = async () => {
//         try {
//             const response = await axios.put(`http://localhost:5000/api/bids/${editedBid.id}`, editedBid);
//             console.log('Bid saved:', response.data);
//             setEditedBid(null);
//             fetchData(); // Refresh bids after saving
//         } catch (error) {
//             console.error('Error saving bid:', error);
//         }
//     };

//     const handleDeleteBid = async (bidId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/bids/${bidId}`);
//             setBids(bids.filter(bid => bid.id !== bidId));
//         } catch (error) {
//             console.error('Error deleting bid:', error);
//         }
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setEditedBid({
//             ...editedBid,
//             [name]: value
//         });
//     };

//     return (
//         <div className="bidding-page">
//             <h2>Bidding Page</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User</th>
//                         <th>Time</th>
//                         <th>Amount</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bids && bids.map(bid => (
//                         <tr key={bid.id}>
//                             <td>{bid.user}</td>
//                             <td>{bid.time}</td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <input type="text" name="amount" value={editedBid.amount} onChange={handleInputChange} />
//                                 ) : (
//                                     bid.amount
//                                 )}
//                             </td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <button onClick={handleSaveBid}>Save</button>
//                                 ) : (
//                                     <>
//                                         <button onClick={() => handleEditBid(bid)}>Edit</button>
//                                         <button onClick={() => handleDeleteBid(bid.id)}>Delete</button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default BiddingPage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/BiddingPage.css';

// const BiddingPage = () => {
//     const [bids, setBids] = useState([]);
//     const [editedBid, setEditedBid] = useState(null);
//     const [newBid, setNewBid] = useState({
//         user: '',
//         time: '',
//         amount: ''
//     });

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bids');
//             if (Array.isArray(response.data)) {
//                 setBids(response.data);
//             } else {
//                 console.error('Bids data is not an array:', response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching bids:', error);
//         }
//     };

//     const handleEditBid = (bid) => {
//         setEditedBid({ ...bid });
//     };

//     const handleSaveBid = async () => {
//         try {
//             const response = await axios.put(`http://localhost:5000/api/bids/${editedBid.id}`, editedBid);
//             console.log('Bid saved:', response.data);
//             setEditedBid(null);
//             fetchData(); // Refresh bids after saving
//         } catch (error) {
//             console.error('Error saving bid:', error);
//         }
//     };

//     const handleDeleteBid = async (bidId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/bids/${bidId}`);
//             setBids(bids.filter(bid => bid.id !== bidId));
//         } catch (error) {
//             console.error('Error deleting bid:', error);
//         }
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setEditedBid({
//             ...editedBid,
//             [name]: value
//         });
//     };

//     const handleNewBidChange = (event) => {
//         const { name, value } = event.target;
//         setNewBid({
//             ...newBid,
//             [name]: value
//         });
//     };

//     const handleAddBid = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/biddings', newBid);
//             console.log('Bid added:', response.data);
//             setNewBid({
//                 user: '',
//                 time: '',
//                 amount: ''
//             });
//             fetchData(); // Refresh bids after adding
//         } catch (error) {
//             console.error('Error adding bid:', error);
//         }
//     };

//     return (
//         <div className="bidding-page">
//             <h2>Bidding Page</h2>
//             <div className="new-bid-form">
//                 <input type="text" name="user" placeholder="User" value={newBid.user} onChange={handleNewBidChange} />
//                 <input type="text" name="time" placeholder="Time" value={newBid.time} onChange={handleNewBidChange} />
//                 <input type="text" name="amount" placeholder="Amount" value={newBid.amount} onChange={handleNewBidChange} />
//                 <button onClick={handleAddBid}>Add Bid</button>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User</th>
//                         <th>Time</th>
//                         <th>Amount</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bids.map(bid => (
//                         <tr key={bid.id}>
//                             <td>{bid.user}</td>
//                             <td>{bid.time}</td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <input type="text" name="amount" value={editedBid.amount} onChange={handleInputChange} />
//                                 ) : (
//                                     bid.amount
//                                 )}
//                             </td>
//                             <td>
//                                 {editedBid && editedBid.id === bid.id ? (
//                                     <button onClick={handleSaveBid}>Save</button>
//                                 ) : (
//                                     <>
//                                         <button onClick={() => handleEditBid(bid)}>Edit</button>
//                                         <button onClick={() => handleDeleteBid(bid.id)}>Delete</button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default BiddingPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BiddingPage.css';

const BiddingPage = () => {
    const [bids, setBids] = useState([]);
    const [editedBid, setEditedBid] = useState(null);
    const [newBid, setNewBid] = useState({
        productId: '',
        userId: '',
        amount: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bids');
            if (Array.isArray(response.data)) {
                setBids(response.data);
            } else {
                console.error('Bids data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching bids:', error);
        }
    };

    const handleEditBid = (bid) => {
        setEditedBid({ ...bid });
    };

    const handleSaveBid = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/bids/${editedBid._id}`, editedBid);
            console.log('Bid saved:', response.data);
            setEditedBid(null);
            fetchData(); // Refresh bids after saving
        } catch (error) {
            console.error('Error saving bid:', error);
        }
    };

    const handleDeleteBid = async (bidId) => {
        try {
            await axios.delete(`http://localhost:5000/api/bids/${bidId}`);
            setBids(bids.filter(bid => bid._id !== bidId));
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

    const handleNewBidChange = (event) => {
        const { name, value } = event.target;
        setNewBid({
            ...newBid,
            [name]: value
        });
    };

    const handleAddBid = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/bids', newBid);
            console.log('Bid added:', response.data);
            setNewBid({
                productId: '',
                userId: '',
                amount: ''
            });
            fetchData(); // Refresh bids after adding
        } catch (error) {
            console.error('Error adding bid:', error);
        }
    };

    return (
        <div className="bidding-page">
            <h2>Bidding Page</h2>
            <div className="new-bid-form">
                <input type="text" name="productId" placeholder="Product ID" value={newBid.productId} onChange={handleNewBidChange} />
                <input type="text" name="userId" placeholder="User ID" value={newBid.userId} onChange={handleNewBidChange} />
                <input type="text" name="amount" placeholder="Amount" value={newBid.amount} onChange={handleNewBidChange} />
                <button onClick={handleAddBid}>Add Bid</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Product ID</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map(bid => (
                        <tr key={bid._id}>
                            <td>{bid.userId}</td>
                            <td>{bid.productId}</td>
                            <td>
                                {editedBid && editedBid._id === bid._id ? (
                                    <input type="text" name="amount" value={editedBid.amount} onChange={handleInputChange} />
                                ) : (
                                    bid.amount
                                )}
                            </td>
                            <td>
                                {editedBid && editedBid._id === bid._id ? (
                                    <button onClick={handleSaveBid}>Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditBid(bid)}>Edit</button>
                                        <button onClick={() => handleDeleteBid(bid._id)}>Delete</button>
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
