// routes/product.routes.js

import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

// Create a new product
router.post('/products', createProduct);

// Get all products
router.get('/products', getProducts);

// Get a single product by ID
router.get('/products/:id', getProductById);

// Update a product by ID
router.put('/products/:id', updateProduct);

// Delete a product by ID
router.delete('/products/:id', deleteProduct);

export default router;