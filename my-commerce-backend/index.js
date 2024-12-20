// File: index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
// Updated imports for moved routes
import authRoutes from './api/routes/auth';
import catalogRoutes from './api/routes/catalog';
import cartRoutes from './api/routes/cart';
import orderRoutes from './api/routes/order';
import adminRoutes from './api/routes/admin';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/auth', authRoutes);
app.use('/catalog', catalogRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/admin', adminRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the My-Commerce API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));