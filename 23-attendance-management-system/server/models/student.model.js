// models/Student.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'student'
  },
  standard: {
    type: String,
    required: true
  },
  fees: {
    type: Number,
    required: true
  },
  attendance: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance'
  }]
}, { timestamps: true });

const Student = model('Student', studentSchema);

export default Student;
