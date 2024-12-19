import express from 'express';
import { addToCart, getCart, clearCart } from '../controllers/cartController';
import { authenticate } from '../middlewares/authMiddleware';
const router = express.Router();
router.post('/', authenticate, addToCart);
router.get('/', authenticate, getCart);
router.delete('/', authenticate, clearCart);
export default router;
//# sourceMappingURL=cart.js.map