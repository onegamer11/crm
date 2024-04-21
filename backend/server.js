const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import your backend API routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// API routes
app.use('/api', apiRoutes); // Mount your API routes

// Serve the frontend index.html file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
