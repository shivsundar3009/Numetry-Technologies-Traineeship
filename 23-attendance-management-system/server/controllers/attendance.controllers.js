// controllers/attendanceController.js
import Attendance from '../models/attendence.model.js';

const getAllAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.status(200).json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createAttendanceRecord = async (req, res) => {
  try {
    const { name, standard, date, status } = req.body;
    const newAttendanceRecord = new Attendance({ name, standard, date, status });
    await newAttendanceRecord.save();
    res.status(201).json({ message: 'Attendance record created successfully' });
  } catch (error) {
    console.error('Error creating attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, standard, date, status } = req.body;
    const updatedAttendanceRecord = await Attendance.findByIdAndUpdate(id, { name, standard, date, status }, { new: true });
    if (!updatedAttendanceRecord) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }
    res.status(200).json({ message: 'Attendance record updated successfully', updatedAttendanceRecord });
  } catch (error) {
    console.error('Error updating attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAttendanceRecord = await Attendance.findByIdAndDelete(id);
    if (!deletedAttendanceRecord) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }
    res.status(200).json({ message: 'Attendance record deleted successfully', deletedAttendanceRecord });
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { getAllAttendanceRecords, createAttendanceRecord, updateAttendanceRecord, deleteAttendanceRecord };
