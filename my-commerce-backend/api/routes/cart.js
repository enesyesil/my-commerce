import express from 'express';
import { addToCart, getCart, clearCart } from '../controllers/cartController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const cartRouter = express.Router();

cartRouter.post('/', authenticate, addToCart); // Protect POST route
cartRouter.get('/', authenticate, getCart);    // Protect GET route
cartRouter.delete('/', authenticate, clearCart); // Protect DELETE route

export default cartRouter;
