"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getAllProducts = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAllProducts = async (req, res) => {
    try {
        const products = await prismaClient_1.default.product.findMany();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllProducts = getAllProducts;
const addProduct = async (req, res) => {
    const { name, description, price, image } = req.body;
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized to add products.' });
    }
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'Invalid product name.' });
    }
    if (!description || typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ message: 'Invalid product description.' });
    }
    if (!price || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ message: 'Invalid product price.' });
    }
    if (!image || typeof image !== 'string' || image.trim() === '') {
        return res.status(400).json({ message: 'Invalid product image.' });
    }
    try {
        const product = await prismaClient_1.default.product.create({
            data: { name, description, price, image },
        });
        res.status(201).json(product);
    }
    catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.addProduct = addProduct;
//# sourceMappingURL=productController.js.map