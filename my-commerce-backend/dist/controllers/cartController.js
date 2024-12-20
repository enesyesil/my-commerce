"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCart = exports.getCart = exports.addToCart = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    if (req.user.id !== userId) {
        return res.status(403).json({ message: 'You are not authorized to modify this cart.' });
    }
    try {
        const existingCartItem = await prismaClient_1.default.cart.findFirst({
            where: { userId, productId },
        });
        if (existingCartItem) {
            const updatedCartItem = await prismaClient_1.default.cart.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity },
            });
            return res.status(200).json(updatedCartItem);
        }
        const newCartItem = await prismaClient_1.default.cart.create({
            data: { userId, productId, quantity },
        });
        res.status(201).json(newCartItem);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.addToCart = addToCart;
const getCart = async (req, res) => {
    const { userId } = req.query;
    if (req.user.id !== Number(userId)) {
        return res.status(403).json({ message: 'You are not authorized to access this cart.' });
    }
    try {
        const cartItems = await prismaClient_1.default.cart.findMany({
            where: { userId: Number(userId) },
            include: { product: true },
        });
        if (cartItems.length === 0) {
            return res.status(404).json({ message: 'Cart is empty.' });
        }
        const total = cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
        res.status(200).json({ items: cartItems, total });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getCart = getCart;
const clearCart = async (req, res) => {
    const { userId } = req.query;
    if (req.user.id !== Number(userId)) {
        return res.status(403).json({ message: 'You are not authorized to clear this cart.' });
    }
    try {
        await prismaClient_1.default.cart.deleteMany({
            where: { userId: Number(userId) },
        });
        res.status(200).json({ message: 'Cart cleared successfully.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.clearCart = clearCart;
//# sourceMappingURL=cartController.js.map