// controllers/studentController.js
import Student from '../models/student.model.js';

// Create new student
const createStudent = async (req, res) => {
  try {
    const { userName, fullName, email, password, role, standard, fees } = req.body;
    const newStudent = new Student({ userName, fullName, email, password, role, standard, fees });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update student by ID
const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, fullName, email, password, role, standard, fees } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, { userName, fullName, email, password, role, standard, fees }, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete student by ID
const deleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById };
