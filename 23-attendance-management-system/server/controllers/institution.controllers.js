// controllers/institutionController.js
import Institution from '../models/institution.model.js';

// Create a new institution
export const createInstitution = async (req, res) => {
  try {
    const { name, type, rating, location, phone, image } = req.body;
    const newInstitution = new Institution({ name, type, rating, location, phone, image });
    const savedInstitution = await newInstitution.save();
    res.status(201).json(savedInstitution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all institutions
export const getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.status(200).json(institutions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get institution by ID
export const getInstitutionById = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }
    res.status(200).json(institution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update institution by ID
export const updateInstitutionById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, rating, location, phone, image } = req.body;
    const updatedInstitution = await Institution.findByIdAndUpdate(id, { name, type, rating, location, phone, image }, { new: true });
    if (!updatedInstitution) {
      return res.status(404).json({ message: "Institution not found" });
    }
    res.status(200).json(updatedInstitution);
  } catch (error) {
    res.status500.json({ message: error.message });
  }
};

// Delete institution by ID
export const deleteInstitutionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInstitution = await Institution.findByIdAndDelete(id);
    if (!deletedInstitution) {
      return res.status(404).json({ message: "Institution not found" });
    }
    res.status(200).json({ message: "Institution deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
