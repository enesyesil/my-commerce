import { addCartItem, removeCartItem, getCartItems } from '../services/cartService';

export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cartItem = await addCartItem(userId, productId, quantity);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await removeCartItem(id);
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewCart = async (req, res) => {
  const { userId } = req.query;
  try {
    const cartItems = await getCartItems(userId);
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
