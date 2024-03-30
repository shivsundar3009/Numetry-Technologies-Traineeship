import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: String } // Assuming image will be stored as a URL string
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;