// gymMembership.model.js
import mongoose from 'mongoose';

const gymMembershipSchema = new mongoose.Schema({
    ageGroup: {
        type: String,
        enum: ['Children', 'Adult', 'Older'],
        required: true
    },
    prices: {
        oneMonth: Number,
        threeMonths: Number,
        sixMonths: Number,
        oneYear: Number
    }
});

const GymMembership = mongoose.model('GymMembership', gymMembershipSchema);

export default GymMembership;
