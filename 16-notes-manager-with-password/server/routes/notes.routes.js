import express from "express";
import { getNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notes.controllers.js";

const router = express.Router();

router.get("/get/notes", getNotes);
router.post("/create/note", createNote);
router.put("/update/note/:id", updateNote);
router.delete("/delete/note/:id", deleteNote);
router.get("/get/note/:id", getNoteById); // New route for getting a single note by ID

export default router;