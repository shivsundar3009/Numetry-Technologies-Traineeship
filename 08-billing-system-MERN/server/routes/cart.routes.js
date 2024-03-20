import express from 'express';
import { addToCart, updateCartItem, removeFromCart, calculateTotalAmount } from '../controllers/cartController.js';

const router = express.Router();

// Route to add a product to the cart
router.post('/cart/add', addToCart);

// Route to update quantity of a product in the cart
router.put('/cart/update/:productId', updateCartItem);

// Route to remove a product from the cart
router.delete('/cart/remove/:productId', removeFromCart);

// Route to calculate total payable amount with GST
router.get('/cart/total', calculateTotalAmount);

export default router;
