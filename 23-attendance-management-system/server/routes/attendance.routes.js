// routes/attendanceRoutes.js
import express from 'express';
import {
  createStudentAttendance,
  createStaffAttendance,
  getAllAttendance,
  getStudentAttendance,
  getStaffAttendance
} from '../controllers/attendance.controllers.js';

const router = express.Router();

// Routes for student attendance
router.post('/students', createStudentAttendance);
router.get('/students/:studentId', getStudentAttendance);

// Routes for staff attendance
router.post('/staff', createStaffAttendance);
router.get('/staff/:staffId', getStaffAttendance);

// Route to get all attendance records
router.get('/', getAllAttendance);

export default router;
