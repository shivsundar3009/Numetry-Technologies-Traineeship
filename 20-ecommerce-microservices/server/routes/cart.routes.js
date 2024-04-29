// routes/cartRoutes.js
import express from 'express';
import { addToCart, updateCartItem, deleteCartItem, getAllProductsInCart } from '../controllers/cart.controllers.js';

const router = express.Router();

router.post('/:userId', addToCart);
router.put('/:cartId/:itemId', updateCartItem);
router.delete('/:cartId/:itemId', deleteCartItem);
router.get('/:cartId/products', getAllProductsInCart); // Add route for getting all products in cart

export default router;
