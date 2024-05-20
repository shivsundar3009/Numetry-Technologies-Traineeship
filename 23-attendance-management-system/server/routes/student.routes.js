// routes/studentRoutes.js
import express from 'express';
import { createStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById } from '../controllers/student.controllers.js';

const router = express.Router();

// Routes for Student CRUD operations
router.post('/', createStudent); // Create new student
router.get('/', getAllStudents); // Get all students
router.get('/:id', getStudentById); // Get student by ID
router.put('/:id', updateStudentById); // Update student by ID
router.delete('/:id', deleteStudentById); // Delete student by ID

export default router;
