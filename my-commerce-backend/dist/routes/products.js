import express from 'express';
import { getAllProducts, addProduct } from '../controllers/productController';
import { authenticate } from '../middlewares/authMiddleware';
const router = express.Router();
router.get('/', getAllProducts);
router.post('/', authenticate, addProduct);
export default router;
//# sourceMappingURL=products.js.map