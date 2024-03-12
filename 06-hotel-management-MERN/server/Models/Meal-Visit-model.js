import mongoose from 'mongoose';

const mealVisitSchema = new mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest',
    required: true
  },
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner'],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const MealVisit = mongoose.model('MealVisit', mealVisitSchema);

export default MealVisit;