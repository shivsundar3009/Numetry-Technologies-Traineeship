// controllers/careerJobController.js
import CareerJob from '../models/careerJobs.model.js';

// Create a new career job
export const createCareerJob = async (req, res) => {
  try {
    const { jobTitle, salary, requirements, location } = req.body;
    const newCareerJob = new CareerJob({ jobTitle, salary, requirements, location });
    const savedCareerJob = await newCareerJob.save();
    res.status(201).json(savedCareerJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all career jobs
export const getAllCareerJobs = async (req, res) => {
  try {
    const careerJobs = await CareerJob.find();
    res.status(200).json(careerJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get career job by ID
export const getCareerJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const careerJob = await CareerJob.findById(id);
    if (!careerJob) {
      return res.status(404).json({ message: "Career job not found" });
    }
    res.status(200).json(careerJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update career job by ID
export const updateCareerJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const { jobTitle, salary, requirements, location } = req.body;
    const updatedCareerJob = await CareerJob.findByIdAndUpdate(id, { jobTitle, salary, requirements, location }, { new: true });
    if (!updatedCareerJob) {
      return res.status(404).json({ message: "Career job not found" });
    }
    res.status(200).json(updatedCareerJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete career job by ID
export const deleteCareerJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCareerJob = await CareerJob.findByIdAndDelete(id);
    if (!deletedCareerJob) {
      return res.status(404).json({ message: "Career job not found" });
    }
    res.status(200).json({ message: "Career job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
