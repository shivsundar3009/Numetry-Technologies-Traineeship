// models/Weather.js
import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  },
  windDirection: {
    type: String,
    required: true
  },
  observationTime: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Weather', weatherSchema);
