const jwt = require('jsonwebtoken');

// Create JWT token
const generateToken = (userId, role) => {
    const payload = {
        user: {
            id: userId,
            role: role
        }
    };

    // Sign the token with a secret key and set an expiration time
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Expires in 1 hour
};

module.exports = generateToken;
