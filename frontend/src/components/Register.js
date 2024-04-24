// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom'; // Import Redirect component
// import axios from 'axios';
// import '../styles/Register.css';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         role: 'staff',
//         redirectToLogin: false // Add redirectToLogin state to manage redirection
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/register', formData);
//             setFormData({
//                 ...formData,
//                 redirectToLogin: true // Set redirectToLogin to true upon successful registration
//             });
//         } catch (error) {
//             console.error('Registration failed:', error.message);
//         }
//     };

//     // If redirectToLogin state is true, redirect to the login page
//     if (formData.redirectToLogin) {
//         return <Redirect to="/login" />;
//     }

//     return (
//         <div className="register-container">
//             <div className="register-box">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="role">Select Role:</label>
//                         <select id="role" name="role" value={formData.role} onChange={handleChange}>
//                             <option value="staff">Staff</option>
//                             <option value="siteManager">Site Manager</option>
//                             <option value="supplier">Supplier</option>
//                         </select>
//                     </div>
//                     <button type="submit" className="register-button">Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;






import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
        username: '',
        email: '', // Add email field to state
        password: '',
        role: 'staff'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/register', formData);
            navigate('/login'); // Redirect to login page upon successful registration
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label> {/* Add email input field */}
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role">Select Role:</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="staff">Staff</option>
                            <option value="siteManager">Site Manager</option>
                            <option value="supplier">Supplier</option>
                        </select>
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;


