// gymMembership.controller.js
import GymMembership from '../models/gymMembership.model.js';

export const createGymMembership = async (req, res) => {
    try {
        const { ageGroup, prices } = req.body;

        const existingMembership = await GymMembership.findOne({ ageGroup });
        if (existingMembership) {
            return res.status(400).json({ message: 'Membership for this age group already exists' });
        }

        const newMembership = new GymMembership({ ageGroup, prices });
        await newMembership.save();
        
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getGymMembershipByAgeGroup = async (req, res) => {
    try {
        const { ageGroup } = req.params;

        const membership = await GymMembership.findOne({ ageGroup });
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found for this age group' });
        }

        res.status(200).json(membership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllGymMemberships = async (req, res) => {
    try {
        const memberships = await GymMembership.find();
        res.status(200).json(memberships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Other controller functions for gym memberships can be added here
