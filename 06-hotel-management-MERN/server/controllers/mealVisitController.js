import MealVisit from '../models/Meal-Visit-model.js';

// Controller function to record a meal visit
export const recordMealVisit = async (req, res) => {
  try {
    const { guestId, mealType } = req.body;
    const mealVisit = await MealVisit.create({ guest: guestId, mealType });
    res.status(201).json(mealVisit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};