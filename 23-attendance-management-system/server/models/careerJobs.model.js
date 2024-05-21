// models/CareerJob.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const careerJobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  requirements: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, { timestamps: true });

const CareerJob = model('CareerJob', careerJobSchema);

export default CareerJob;
