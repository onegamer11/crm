import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="logo">Procurement</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>

            <div className="content">
                <h1>Welcome to Procurement Website</h1>
                <p>Your one-stop solution for procurement needs.</p>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Procurement. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
