"use strict";
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../src/routes/auth');
const productRoutes = require('../src/routes/products');
const cartRoutes = require('../src/routes/cart');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
module.exports = (req, res) => {
    app(req, res);
};
//# sourceMappingURL=index.js.map