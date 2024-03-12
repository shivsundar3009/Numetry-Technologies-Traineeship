import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  checkedIn: {
    type: Boolean,
    default: false
  },
  checkInTime: {
    type: Date,
    default: null
  },
  checkOutTime: {
    type: Date,
    default: null
  },
  stayDuration: {
    type: Number,
    default: null
  }
});

const Guest = mongoose.model('Guest', guestSchema);

export default Guest;