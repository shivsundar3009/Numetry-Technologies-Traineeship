// routes/productRoutes.js
import express from 'express';
import { createProduct, updateProduct, getAllProducts } from '../controllers/product.controllers.js';

const router = express.Router();

router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.get('/', getAllProducts); // Add route for getting all products

export default router;
