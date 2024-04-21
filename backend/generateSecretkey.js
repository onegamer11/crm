const fs = require('fs');
const crypto = require('crypto');

// Generate a random string
const secretKey = crypto.randomBytes(32).toString('hex');

// Write the secret key to the .env file
fs.writeFileSync('.env', `JWT_SECRET=${secretKey}\n`);
