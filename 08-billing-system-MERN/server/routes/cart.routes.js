import express from 'express';
import { addToCart, removeFromCart, getAllCartItems, calculateTotalAmount, updateCartItem } from '../controllers/cart.controller.js';

const router = express.Router();

// Add a product to the cart
router.post('/cart/add', addToCart);

// Update quantity of a product in the cart
router.put('/cart/update/:productId', updateCartItem);

// Remove a product from the cart
router.delete('/cart/remove/:productId', removeFromCart);

// Get all items in the cart
router.get('/cart/items', getAllCartItems);

// Calculate total payable amount with 1.8% GST
router.get('/cart/total', calculateTotalAmount);

export default router;