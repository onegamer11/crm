// // authController.js

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Register a new user
// exports.registerUser = async (req, res) => {
//     const { username, password, role } = req.body;

//     try {
//         // Check if user already exists
//         let user = await User.findOne({ username });

//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         // Create a new user
//         user = new User({ username, password, role });

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         // Save user to database
//         await user.save();

//         res.status(201).json({ msg: 'User registered successfully' });
//     } catch (error) {
//         console.error('Registration failed:', error);
//         res.status(500).send('Server Error');
//     }
// };

// // Login user
// exports.loginUser = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user exists
//         let user = await User.findOne({ username });

//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Create JWT token
//         const payload = {
//             user: {
//                 id: user.id,
//                 role: user.role
//             }
//         };

//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (error, token) => {
//             if (error) throw error;
//             res.json({ token });
//         });
//     } catch (error) {
//         console.error('Login failed:', error);
//         res.status(500).send('Server Error');
//     }
// };

// module.exports = exports;


// authController.js

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Register a new user
// const registerUser = async (req, res) => {
//     const { username, email, password, role } = req.body; // Include email in request body

//     try {
//         // Check if user already exists
//         let user = await User.findOne({ username });

//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         // Create a new user
//         user = new User({ username, email, password, role }); // Include email when creating user

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         // Save user to database
//         await user.save();

//         res.status(201).json({ msg: 'User registered successfully' });
//     } catch (error) {
//         console.error('Registration failed:', error);
//         res.status(500).send('Server Error');
//     }
// };

// // Login user
// const loginUser = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user exists
//         let user = await User.findOne({ username });

//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Create JWT token
//         const payload = {
//             user: {
//                 id: user.id,
//                 role: user.role
//             }
//         };

//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (error, token) => {
//             if (error) throw error;
//             res.json({ token });
//         });
//     } catch (error) {
//         console.error('Login failed:', error);
//         res.status(500).send('Server Error');
//     }
// };

// module.exports = {registerUser, loginUser};


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body; // Include email in request body

    try {
        // Check if user already exists
        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Create a new user
        user = new User({ username, email, password, role }); // Include email when creating user

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Create JWT token
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (error, token) => {
            if (error) throw error;
            res.json({ success: true, token });
        });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { registerUser, loginUser };
