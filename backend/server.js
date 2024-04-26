// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const apiRoutes = require('./routes/api'); // Import your backend API routes

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Configure CORS
// const allowedOrigins = ['http://localhost:3000']; // Add more origins if needed
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(corsOptions));

// // Serve static files from the frontend build directory
// app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// // API routes
// app.use('/api', apiRoutes); // Mount your API routes

// // Serve the frontend index.html file for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// });


// const fs = require('fs');

// const filePath = path.join(__dirname, 'frontend', 'build', 'index.html');
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.error(`Error accessing file: ${err}`);
//   } else {
//     console.log('File exists!');
//   }
// });





// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import your backend API routes
const authRoutes = require('./routes/authRoutes');

const app = express();

const mongoose = require('mongoose');

const invoiceRoutes = require('./routes/invoiceRoutes');


// Middleware
app.use(bodyParser.json());

app.use("*", cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Serve static files from the frontend build directory
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(frontendBuildPath));

// API routes
app.use('/api', apiRoutes); // Mount your API routes
app.use('/api', authRoutes);

// Routes
app.use('/api', invoiceRoutes);

// Serve the frontend index.html file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});



mongoose.connect('mongodb://localhost:27017/crm-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
