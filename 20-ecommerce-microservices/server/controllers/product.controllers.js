// controllers/productController.js
import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newProduct = new Product({ name, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const { productId } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, image }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
