import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
  try {
      const { name, email, password, age } = req.body;

      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // If email doesn't exist, create a new user with hashed password
      const newUser = await User.create({ name, email, password: hashedPassword, age });
      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ message: "Internal server error" });
  }
}

export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Create JWT token
      const token = jwt.sign({ userId: user._id, email: user.email }, "ab8d3f7aefc48f4b59e5b9b6e3af1c842d5c5a89a4e4a2e0c396d7a3d046c1fb", { expiresIn: "12h" });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }