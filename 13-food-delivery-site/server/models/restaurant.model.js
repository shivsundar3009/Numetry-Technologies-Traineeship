import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true }, // Change the type to String
  overallRating: { type: Number, default: 0 },
  categories: [{ type: String }],
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
  image: { type: String } // Assuming image will be stored as a URL string
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant