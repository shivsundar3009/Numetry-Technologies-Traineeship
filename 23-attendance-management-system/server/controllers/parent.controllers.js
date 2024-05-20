// controllers/parentController.js
import Parent from '../models/parent.model.js';

// Create new parent
const createParent = async (req, res) => {
  try {
    const { userName, fullName, email, password, role } = req.body;
    const newParent = new Parent({ userName, fullName, email, password, role });
    const savedParent = await newParent.save();
    res.status(201).json(savedParent);
  } catch (error) {
    console.error("Error creating parent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all parents
const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.status(200).json(parents);
  } catch (error) {
    console.error("Error fetching parents:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get parent by ID
const getParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const parent = await Parent.findById(id);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(parent);
  } catch (error) {
    console.error("Error fetching parent by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update parent by ID
const updateParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, fullName, email, password, role } = req.body;
    const updatedParent = await Parent.findByIdAndUpdate(id, { userName, fullName, email, password, role }, { new: true });
    if (!updatedParent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(updatedParent);
  } catch (error) {
    console.error("Error updating parent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete parent by ID
const deleteParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedParent = await Parent.findByIdAndDelete(id);
    if (!deletedParent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json({ message: "Parent deleted successfully" });
  } catch (error) {
    console.error("Error deleting parent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createParent, getAllParents, getParentById, updateParentById, deleteParentById };
