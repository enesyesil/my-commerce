import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import cartRoutes from './routes/cart';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Export as a serverless function for Vercel


export default (req: Request, res: Response) => {
  app(req, res);
};
