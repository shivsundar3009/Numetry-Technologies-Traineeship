// models/product.model.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  previewImage: {
    type: String,
    required: true
  },
  productImages: {
    type: [String],
    validate: {
      validator: function(images) {
        return images.length <= 5;
      },
      message: 'Maximum of 5 product images allowed'
    }
  },
  price: {
    type: Number,
    required: true
  },
  ratings: {
    type: Number,
    default: 0
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;