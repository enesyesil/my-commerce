import express from 'express';
import { getAllProducts, addProduct } from '../controllers/productController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getAllProducts);           // Public route
router.post('/', authenticate, addProduct); // Admin-protected route

export default router;
