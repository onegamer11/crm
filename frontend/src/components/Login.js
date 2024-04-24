// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom'; // Import Redirect component
// import axios from 'axios';
// import '../styles/Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         role: 'staff',
//         redirectTo: null // Add redirectTo state to manage redirection
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', formData);
//             const { role } = formData;
//             setFormData({
//                 ...formData,
//                 redirectTo: `/${role}` // Set redirectTo to desired role path
//             });
//         } catch (error) {
//             console.error('Login failed:', error.message);
//         }
//     };

//     // If redirectTo state is set, redirect to the specified path
//     if (formData.redirectTo) {
//         return <Redirect to={formData.redirectTo} />;
//     }

//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <h2>Login</h2>
//                 <form onSubmit={handleLogin}>
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
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import '../styles/Login.css';

// // const Login = ({ setUserRole }) => {
// //     const [formData, setFormData] = useState({
// //         username: '',
// //         password: '',
// //         role: 'staff'
// //     });

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value,
// //         });
// //     };

// //     const handleLogin = async (event) => {
// //         event.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/login', formData);
// //             const { role } = formData;
// //             setUserRole(role);
// //             window.location.href = `/${role}`; // Redirect to role-specific page
// //         } catch (error) {
// //             console.error('Login failed:', error.message);
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <div className="login-box">
// //                 <h2>Login</h2>
// //                 <form onSubmit={handleLogin}>
// //                     <div className="input-group">
// //                         <label htmlFor="username">Username:</label>
// //                         <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
// //                     </div>
// //                     <div className="input-group">
// //                         <label htmlFor="password">Password:</label>
// //                         <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
// //                     </div>
// //                     <div className="input-group">
// //                         <label htmlFor="role">Select Role:</label>
// //                         <select id="role" name="role" value={formData.role} onChange={handleChange}>
// //                             <option value="staff">Staff</option>
// //                             <option value="siteManager">Site Manager</option>
// //                             <option value="supplier">Supplier</option>
// //                         </select>
// //                     </div>
// //                     <button type="submit" className="login-button">Login</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
        username: '', 
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

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            const { role } = formData;
            navigate(`/${role}`); // Use navigate to redirect to the specified path
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
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
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;





