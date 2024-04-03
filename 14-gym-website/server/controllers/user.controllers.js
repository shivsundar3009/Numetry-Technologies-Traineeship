import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { username, email, password, age, role } = req.body;

        // Check if all required fields are provided
        if (!username || !email || !password || !age || !role) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        // Check if user is above 16 years old
        if (age < 16) {
            return res.status(400).json({ message: 'User must be at least 16 years old to register' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword, age, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If user exists and passwords match, return true in the response
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        // Check if any required fields are missing
        if (Object.keys(req.body).some(field => ['username', 'email', 'password', 'age', 'role'].includes(field) && !req.body[field])) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        // If the password is provided, hash it
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};