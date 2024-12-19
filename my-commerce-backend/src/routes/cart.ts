import express from 'express';
import { addToCart, getCart, clearCart } from '../controllers/cartController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate, addToCart); // Protect POST route
router.get('/', authenticate, getCart);    // Protect GET route
router.delete('/', authenticate, clearCart); // Protect DELETE route

export default router;
