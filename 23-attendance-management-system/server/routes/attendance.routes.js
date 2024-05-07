// routes/attendanceRoutes.js
import express from 'express';
import { getAllAttendanceRecords, createAttendanceRecord, updateAttendanceRecord, deleteAttendanceRecord } from '../controllers/attendance.controllers.js';

const router = express.Router();

router.get('/', getAllAttendanceRecords);
router.post('/', createAttendanceRecord);
router.put('/:id', updateAttendanceRecord);
router.delete('/:id', deleteAttendanceRecord);

export default router;
