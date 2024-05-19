// models/Admin.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const adminSchema = new Schema({
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
    default: 'admin'
  }
}, { timestamps: true });

const Admin = model('Admin', adminSchema);

export default Admin;
