// models/Staff.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const staffSchema = new Schema({
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
    default: 'staff'
  },
  work: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Staff = model('Staff', staffSchema);

export default Staff;
