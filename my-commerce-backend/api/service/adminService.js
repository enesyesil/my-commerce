import prisma from '../prisma/prismaClient';

// Get all sales history
export const getSalesHistory = async () => {
  return prisma.order.findMany({
    include: { user: true, product: true },
  });
};

// Get sales history filtered by customer, product, or date
export const getFilteredSalesHistory = async (filter) => {
  return prisma.order.findMany({
    where: filter,
    include: { user: true, product: true },
  });
};

// Update inventory levels
export const updateInventory = async (productId, quantity) => {
  return prisma.product.update({
    where: { id: productId },
    data: { quantity },
  });
};
