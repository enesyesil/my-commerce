import express from 'express';
import { viewSalesHistory, manageInventory, manageUsers } from '../controllers/adminController.js';

const router = express.Router();

// Route to view sales history
router.get('/sales', viewSalesHistory);

// Route to manage inventory
router.put('/inventory/:productId', manageInventory);

// Route to manage users
router.put('/users/:userId', manageUsers);

export default router;
