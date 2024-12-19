const jwt = require('jsonwebtoken');

// Ensure this matches your actual secret used in your app
// Replace with your actual JWT_SECRET
require('dotenv').config();
// Define the payload for an admin user
const payload = {
  id: 1,            // Unique ID for the admin
  role: 'admin'     // Assign the 'admin' role
};

const secret = process.env.JWT_SECRET;
// Generate the token
if (!secret) {
    console.error('JWT_SECRET is not defined in .env');
    process.exit(1); // Exit the script if JWT_SECRET is missing
  }
  
  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Token valid for 1 hour
  console.log('Generated Admin Token:', token);
