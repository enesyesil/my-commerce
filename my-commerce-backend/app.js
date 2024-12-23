import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import authRoutes from './api/routes/auth.js';
import catalogRoutes from './api/routes/catalog.js';
import cartRoutes from './api/routes/cart.js';
import orderRoutes from './api/routes/order.js';
import adminRoutes from './api/routes/admin.js';
import userRoutes from './api/routes/user.js';


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
app.use('/user', userRoutes);


// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the My-Commerce API');
});

// Create an HTTP server
const server = http.createServer(app);

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
