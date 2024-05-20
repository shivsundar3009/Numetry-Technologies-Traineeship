// routes/attendanceRoutes.js
import express from 'express';
import { createAttendance, getAllAttendance, getAttendanceById, updateAttendanceById, deleteAttendanceById } from '../controllers/attendance.controllers.js';

const router = express.Router();

// Routes for Attendance CRUD operations
router.post('/', createAttendance); // Create new attendance record
router.get('/', getAllAttendance); // Get all attendance records
router.get('/:id', getAttendanceById); // Get attendance record by ID
router.put('/:id', updateAttendanceById); // Update attendance record by ID
router.delete('/:id', deleteAttendanceById); // Delete attendance record by ID

export default router;
