// models/Attendance.js
import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    standard: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, // Include date field
    status: {
        type: String,
        enum: ['present', 'absent'],
        required: true
    }
}, {
    timestamps: true
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
