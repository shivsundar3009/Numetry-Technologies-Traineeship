import express from "express";
import {
  createUser,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Route for creating a new user
router.post("/signup", createUser);

router.post("/login", login);

// Route for getting all users
router.get("/users", getAllUsers);

// Route for getting a single user by ID
router.get("/users/:id", getUserById);

// Route for updating a user by ID
router.put("/users/:id", updateUser);

// Route for deleting a user by ID
router.delete("/users/:id", deleteUser);

export default router;
