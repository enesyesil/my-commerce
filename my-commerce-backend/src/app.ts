import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import cartRoutes from './routes/cart';

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Export the app for Vercel as a serverless function
export default (req: Request, res: Response) => {
  app(req, res); // Directly call the app with req and res
};
