import prisma from '../prisma/prismaClient';

export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const existingCartItem = await prisma.cart.findFirst({
      where: { userId, productId },
    });

    if (existingCartItem) {
      const updatedCartItem = await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
      return res.json(updatedCartItem);
    }

    const newCartItem = await prisma.cart.create({
      data: { userId, productId, quantity },
    });

    res.json(newCartItem);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.query;

  try {
    const cartItems = await prisma.cart.findMany({
      where: { userId: Number(userId) },
      include: { product: true },
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
