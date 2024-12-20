import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import cartRouter from './routes/cart.js';
import productRouter from './routes/products.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/cart', cartRouter);
app.use('/products', productRouter);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
