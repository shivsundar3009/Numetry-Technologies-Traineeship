import mongoose from 'mongoose';

const dietPlanSchema = new mongoose.Schema({
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
    menu: [{
        mealName: {
            type: String,
            required: true
        },
        items: [String] // Array of strings representing menu items
    }]
});

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

export default DietPlan;