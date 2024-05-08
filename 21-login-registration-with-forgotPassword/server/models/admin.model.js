import mongoose from 'mongoose';

// Define the schema for admin
const AdminSchema = {
  username: {
    type: String,
    required: true,
    unique: true
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
  },
  token: {
    type: String,
    default: null
  }
};

// Create model for admin
const Admin = mongoose.model('Admin', new mongoose.Schema(AdminSchema));

// Export the admin model
export default Admin;
