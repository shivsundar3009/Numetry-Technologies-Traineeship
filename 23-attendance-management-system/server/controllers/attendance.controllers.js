// controllers/attendanceController.js
import Attendance from '../models/attendance.model.js';
import Student from '../models/student.model.js';
import Staff from '../models/staff.model.js';

// Create attendance for students
export const createStudentAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    // Validate student
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const attendance = new Attendance({
      studentId,
      date,
      status
    });

    await attendance.save();

    // Update student's attendance array
    student.attendance.push(attendance._id);
    await student.save();

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create attendance for staff
export const createStaffAttendance = async (req, res) => {
  try {
    const { staffId, date, status } = req.body;

    // Validate staff
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    const attendance = new Attendance({
      staffId,
      date,
      status
    });

    await attendance.save();

    // Update staff's attendance array
    staff.attendance.push(attendance._id);
    await staff.save();

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all attendance records
export const getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.find()
      .populate('studentId')
      .populate('staffId');
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get attendance records for a specific student
export const getStudentAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const attendances = await Attendance.find({ studentId }).populate('studentId');
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get attendance records for a specific staff
export const getStaffAttendance = async (req, res) => {
  try {
    const { staffId } = req.params;
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    const attendances = await Attendance.find({ staffId }).populate('staffId');
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
