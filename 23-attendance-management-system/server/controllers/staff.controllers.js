// controllers/staffController.js
import Staff from '../models/staff.model.js';

// Create new staff
const createStaff = async (req, res) => {
  try {
    const { userName, fullName, email, password, role, work, salary } = req.body;
    const newStaff = new Staff({ userName, fullName, email, password, role, work, salary });
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    console.error("Error creating staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all staff
const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get staff by ID
const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    console.error("Error fetching staff by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update staff by ID
const updateStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, fullName, email, password, role, work, salary } = req.body;
    const updatedStaff = await Staff.findByIdAndUpdate(id, { userName, fullName, email, password, role, work, salary }, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error("Error updating staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete staff by ID
const deleteStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStaff = await Staff.findByIdAndDelete(id);
    if (!deletedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createStaff, getAllStaff, getStaffById, updateStaffById, deleteStaffById };
