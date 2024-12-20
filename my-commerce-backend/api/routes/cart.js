import express from 'express';
import { addToCart, removeFromCart, viewCart } from '../controllers/cartController.js';

const router = express.Router();

// Add item to cart
router.post('/add', addToCart);

// Remove item from cart
router.delete('/remove/:id', removeFromCart);

// View cart
router.get('/', viewCart);

export default router;
