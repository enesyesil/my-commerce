"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = exports.addToCart = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const existingCartItem = await prismaClient_1.default.cart.findFirst({
            where: { userId, productId },
        });
        if (existingCartItem) {
            const updatedCartItem = await prismaClient_1.default.cart.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity },
            });
            return res.json(updatedCartItem);
        }
        const newCartItem = await prismaClient_1.default.cart.create({
            data: { userId, productId, quantity },
        });
        res.json(newCartItem);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.addToCart = addToCart;
const getCart = async (req, res) => {
    const { userId } = req.query;
    try {
        const cartItems = await prismaClient_1.default.cart.findMany({
            where: { userId: Number(userId) },
            include: { product: true },
        });
        res.json(cartItems);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getCart = getCart;
//# sourceMappingURL=cartController.js.map