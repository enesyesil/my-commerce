import prisma from '../prisma/prismaClient.js';



export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Ensure the authenticated user modifies their own cart
    const userId = req.user.id;

    const existingCartItem = await prisma.cart.findFirst({
      where: { userId, productId },
    });

    if (existingCartItem) {
      // Update the quantity of an existing item
      const updatedCartItem = await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
      return res.status(200).json(updatedCartItem);
    }

    // Create a new cart item
    const newCartItem = await prisma.cart.create({
      data: { userId, productId, quantity },
    });

    res.status(201).json(newCartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Get Cart
export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cartItems = await prisma.cart.findMany({
      where: { userId },
      include: { product: true }, // Fetch product details for each cart item
    });

    if (cartItems.length === 0) {
      return res.status(404).json({ message: 'Cart is empty.' });
    }

    // Calculate the total cart value
    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    res.status(200).json({ items: cartItems, total });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Clear Cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    await prisma.cart.deleteMany({
      where: { userId },
    });

    res.status(200).json({ message: 'Cart cleared successfully.' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
