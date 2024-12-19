import prisma from '../prisma/prismaClient';

// Add to Cart
export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  // Ensure the authenticated user is modifying their own cart
  if (req.user.id !== userId) {
    return res.status(403).json({ message: 'You are not authorized to modify this cart.' });
  }

  try {
    const existingCartItem = await prisma.cart.findFirst({
      where: { userId, productId },
    });

    if (existingCartItem) {
      const updatedCartItem = await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
      return res.status(200).json(updatedCartItem);
    }

    const newCartItem = await prisma.cart.create({
      data: { userId, productId, quantity },
    });

    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get Cart
export const getCart = async (req, res) => {
  const { userId } = req.query;

  // Ensure the authenticated user is accessing their own cart
  if (req.user.id !== Number(userId)) {
    return res.status(403).json({ message: 'You are not authorized to access this cart.' });
  }

  try {
    const cartItems = await prisma.cart.findMany({
      where: { userId: Number(userId) },
      include: { product: true },
    });

    if (cartItems.length === 0) {
      return res.status(404).json({ message: 'Cart is empty.' });
    }

    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    res.status(200).json({ items: cartItems, total });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Clear Cart
export const clearCart = async (req, res) => {
  const { userId } = req.query;

  // Ensure the authenticated user is clearing their own cart
  if (req.user.id !== Number(userId)) {
    return res.status(403).json({ message: 'You are not authorized to clear this cart.' });
  }

  try {
    await prisma.cart.deleteMany({
      where: { userId: Number(userId) },
    });
    res.status(200).json({ message: 'Cart cleared successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
