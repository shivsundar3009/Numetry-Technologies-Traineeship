// models/Institution.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const institutionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['School', 'College'],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Institution = model('Institution', institutionSchema);

export default Institution;
