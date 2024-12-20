import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/auth.js';
import productRouter from './routes/products.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/products', productRouter);

// Default route
app.get('/', (_req, res) => {
  res.send(`
    <h1>🚀 My Commerce Backend</h1>
    <p>🌐 API is running successfully!</p>
    <p>Available routes:</p>
    <ul>
      <li><a href="/auth">/auth</a> - Authentication routes</li>
      <li><a href="/products">/products</a> - Product routes</li>
    </ul>
  `);
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('--------------------------------------------');
  console.log('🚀 My Commerce Backend is Running!');
  console.log(`🌐 API available at: http://localhost:${PORT}`);
  console.log('--------------------------------------------');
});
