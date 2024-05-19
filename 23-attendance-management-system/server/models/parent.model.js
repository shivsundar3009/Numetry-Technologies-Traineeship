// models/Parent.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const parentSchema = new Schema({
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
    default: 'parent'
  }
}, { timestamps: true });

const Parent = model('Parent', parentSchema);

export default Parent;
