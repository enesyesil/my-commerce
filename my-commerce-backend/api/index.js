const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../dist/routes/auth').default;
const productRoutes = require('../dist/routes/products').default;
const cartRoutes = require('../dist/routes/cart').default;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Ensure you use `.default` for default exports
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

module.exports = (req, res) => {
  app(req, res);
};
