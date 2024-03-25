import mongoose from 'mongoose';

const { Schema } = mongoose;

const parkingLotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    hourlyRate: {
        type: Number,
        default: 100
    },
    slots: [{
        type: Schema.Types.ObjectId,
        ref: 'ParkingSlot'
    }]
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

export default ParkingLot;