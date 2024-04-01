import Exercise from '../models/Exercise';

// Create a new exercise plan
export const createExercisePlan = async (req, res) => {
    try {
        const { name, description, ageGroup, exercises } = req.body;
        const newExercisePlan = new Exercise({ name, description, ageGroup, exercises });
        await newExercisePlan.save();
        res.status(201).json(newExercisePlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all exercise plans
export const getExercisePlans = async (req, res) => {
    try {
        const exercisePlans = await Exercise.find();
        res.status(200).json(exercisePlans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific exercise plan by ID
export const getExercisePlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const exercisePlan = await Exercise.findById(id);
        if (!exercisePlan) {
            return res.status(404).json({ message: 'Exercise plan not found' });
        }
        res.status(200).json(exercisePlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an exercise plan by ID
export const updateExercisePlan = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedExercisePlan = await Exercise.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedExercisePlan) {
            return res.status(404).json({ message: 'Exercise plan not found' });
        }
        res.status(200).json(updatedExercisePlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an exercise plan by ID
export const deleteExercisePlan = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExercisePlan = await Exercise.findByIdAndDelete(id);
        if (!deletedExercisePlan) {
            return res.status(404).json({ message: 'Exercise plan not found' });
        }
        res.status(200).json({ message: 'Exercise plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};