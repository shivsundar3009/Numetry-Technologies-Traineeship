// controllers/attendanceController.js
import Attendance from '../models/attendance.model.js';

// Create new attendance record
const createAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;
    const newAttendance = new Attendance({ studentId, date, status });
    const savedAttendance = await newAttendance.save();
    res.status(201).json(savedAttendance);
  } catch (error) {
    console.error("Error creating attendance:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all attendance records
const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate('studentId');
    console.log(attendanceRecords)
    res.status(200).json(attendanceRecords);

  } catch (error) {
    console.error("Error fetching attendance records:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get attendance record by ID
const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const attendanceRecord = await Attendance.findById(id).populate('studentId');
    if (!attendanceRecord) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json(attendanceRecord);
  } catch (error) {
    console.error("Error fetching attendance record by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update attendance record by ID
const updateAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId, date, status } = req.body;
    const updatedAttendance = await Attendance.findByIdAndUpdate(id, { studentId, date, status }, { new: true }).populate('studentId');
    if (!updatedAttendance) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json(updatedAttendance);
  } catch (error) {
    console.error("Error updating attendance record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete attendance record by ID
const deleteAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAttendance = await Attendance.findByIdAndDelete(id);
    if (!deletedAttendance) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json({ message: "Attendance record deleted successfully" });
  } catch (error) {
    console.error("Error deleting attendance record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createAttendance, getAllAttendance, getAttendanceById, updateAttendanceById, deleteAttendanceById };
