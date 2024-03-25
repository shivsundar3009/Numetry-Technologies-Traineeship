import mongoose from 'mongoose';

const { Schema } = mongoose;

const parkingSlotSchema = new Schema({
    slotNumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'booked'],
        default: 'available'
    },
    bookedBy: {
        type: String,
        default: null
    }
});

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);

export default ParkingSlot;