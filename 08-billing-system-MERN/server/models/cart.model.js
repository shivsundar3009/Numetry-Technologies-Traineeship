import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, // Assuming image path or URL is stored as a string
    required: true
  },
  price: {
    type: Number,
    required: true
  },
   quantity: {
    type: Number,
    required: true
  },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;