// models/Attendance.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const attendanceSchema = new Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: true
  }
}, { timestamps: true });

const Attendance = model('Attendance', attendanceSchema);

export default Attendance;
