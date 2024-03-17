import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

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