import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
      const { name, email, number, password, role } = req.body;
      // Yaha pe validation check kar sakte ho
      if (!name || !email || !number || !password) {
        return res.status(400).json({ error: "Please provide all required fields" });
      }
      // Yaha pe MongoDB mein user save karne se pehle additional validation checks bhi kar sakte ho
      const existingUser = await User.findOne({ $or: [{ email }, { number }] });
      if (existingUser) {
        return res.status(400).json({ error: "User with this email or number already exists" });
      }
      const user = new User({ name, email, number, password, role });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      // Verify password
      if (user.password !== password) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      // Send success message
      res.json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  