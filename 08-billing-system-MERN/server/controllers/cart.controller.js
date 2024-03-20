import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

// Add a product to the cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id; // Assuming user is authenticated and user ID is available in req.user

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the user already has a cart
    let cart = await Cart.findOne({ userId });

    // If the user doesn't have a cart, create a new one
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update quantity of a product in the cart
export const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the index of the product in the cart
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Update the quantity of the product
    cart.items[itemIndex].quantity = quantity;

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user._id;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Filter out the item to remove
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Calculate total payable amount with 1.8% GST
export const calculateTotalAmount = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Calculate total amount without GST
    let totalAmount = 0;
    for (const item of cart.items) {
      const product = await Product.findById(item.productId);
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }

    // Calculate GST amount (1.8% of total amount)
    const gstAmount = totalAmount * 0.018;

    // Calculate total payable amount including GST
    const totalPayableAmount = totalAmount + gstAmount;

    res.status(200).json({ totalPayableAmount });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};