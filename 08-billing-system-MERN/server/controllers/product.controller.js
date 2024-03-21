// controllers/product.controller.js

import Product from '../models/product.model.js';

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const {
      category,
      name,
      previewImage,
      productImages,
      price,
      ratings
    } = req.body;

    // Create a new product document using the create method
    const savedProduct = await Product.create({
      category,
      name,
      previewImage,
      productImages,
      price,
      ratings
    });

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      category,
      name,
      previewImage,
      productImages,
      price,
      ratings
    } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      category,
      name,
      previewImage,
      productImages,
      price,
      ratings
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};