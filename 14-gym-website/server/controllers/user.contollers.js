import User from '../models/User';
import bcrypt from 'bcrypt';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { username, email, password, age, role } = req.body;

        // Check if all required fields are provided
        if (!username || !email || !password || !age || !role) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        let ageGroup;
        if (age < 18) {
            ageGroup = "Children";
        } else if (age >= 18 && age <= 50) {
            ageGroup = "Adult";
        } else {
            ageGroup = "Older";
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword, age, ageGroup, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if username/email and password are provided
        if ((!username && !email) || !password) {
            return res.status(400).json({ message: 'Username/email and password are required' });
        }

        let user;
        if (username) {
            // Find user by username
            user = await User.findOne({ username });
        } else {
            // Find user by email
            user = await User.findOne({ email });
        }

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If user exists and passwords match, return user data
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