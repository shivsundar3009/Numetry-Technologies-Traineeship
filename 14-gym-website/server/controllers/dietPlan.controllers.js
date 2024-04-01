import DietPlan from '../models/DietPlan';

// Create a new diet plan
export const createDietPlan = async (req, res) => {
    try {
        const { name, description, ageGroup, menu } = req.body;
        const newDietPlan = new DietPlan({ name, description, ageGroup, menu });
        await newDietPlan.save();
        res.status(201).json(newDietPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all diet plans
export const getDietPlans = async (req, res) => {
    try {
        const dietPlans = await DietPlan.find();
        res.status(200).json(dietPlans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific diet plan by ID
export const getDietPlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const dietPlan = await DietPlan.findById(id);
        if (!dietPlan) {
            return res.status(404).json({ message: 'Diet plan not found' });
        }
        res.status(200).json(dietPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a diet plan by ID
export const updateDietPlan = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedDietPlan = await DietPlan.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDietPlan) {
            return res.status(404).json({ message: 'Diet plan not found' });
        }
        res.status(200).json(updatedDietPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a diet plan by ID
export const deleteDietPlan = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDietPlan = await DietPlan.findByIdAndDelete(id);
        if (!deletedDietPlan) {
            return res.status(404).json({ message: 'Diet plan not found' });
        }
        res.status(200).json({ message: 'Diet plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};