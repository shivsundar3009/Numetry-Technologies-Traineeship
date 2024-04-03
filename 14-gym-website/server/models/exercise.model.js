import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String,
        enum: ['Children', 'Adult', 'Older'],
        required: true
    },
    exercises: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            duration: {
                type: String,
                required: true
            },
            intensity: {
                type: String,
                required: true
            },
            equipment: {
                type: String
            }
        }
    ],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
