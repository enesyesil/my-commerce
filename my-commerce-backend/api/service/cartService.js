import prisma from '../prisma/prismaClient.js';


// Add item to cart
export const addCartItem = async (userId, productId, quantity) => {
  const existingCartItem = await prisma.cart.findFirst({
    where: { userId, productId },
  });

  if (existingCartItem) {
    return prisma.cart.update({
      where: { id: existingCartItem.id },
      data: { quantity: existingCartItem.quantity + quantity },
    });
  }

  return prisma.cart.create({
    data: { userId, productId, quantity },
  });
};

// Remove item from cart
export const removeCartItem = async (cartItemId) => {
  return prisma.cart.delete({ where: { id: cartItemId } });
};

// Get all items in a user's cart
export const getCartItems = async (userId) => {
  return prisma.cart.findMany({
    where: { userId },
    include: { product: true },
  });
};
