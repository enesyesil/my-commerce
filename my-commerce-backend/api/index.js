const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../src/routes/auth');
const productRoutes = require('../src/routes/products');
const cartRoutes = require('../src/routes/cart');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Export as a serverless function
module.exports = (req, res) => {
  app(req, res);
};
