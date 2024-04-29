// controllers/cartController.js
import Cart from '../models/cart.model.js';

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const { userId } = req.params;
    
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $addToSet: { items: { product: productId, quantity } } },
      { new: true }
    ).populate('items.product');
    
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;
    const { quantity } = req.body;
    
    const cart = await Cart.findOneAndUpdate(
      { _id: cartId, 'items._id': itemId },
      { $set: { 'items.$.quantity': quantity } },
      { new: true }
    ).populate('items.product');
    
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;
    
    const cart = await Cart.findByIdAndUpdate(
      cartId,
      { $pull: { items: { _id: itemId } } },
      { new: true }
    ).populate('items.product');
    
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProductsInCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findById(cartId).populate('items.product');
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
