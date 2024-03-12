import mongoose from 'mongoose';

const deskSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  occupied: {
    type: Boolean,
    default: false
  }
});

const Desk = mongoose.model('Desk', deskSchema);

export default Desk;