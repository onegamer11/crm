const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secretKey = process.env.JWT_SECRET;

// Middleware function to verify JWT token
const authMiddleware = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, secretKey);

        // Attach user data to request object
        req.user = decoded.user;

        // Call next middleware
        next();   
    } catch (error) {
        // Return error if token is invalid
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = authMiddleware;
