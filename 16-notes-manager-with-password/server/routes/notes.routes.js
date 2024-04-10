import express from "express"
import { getNotes , createNote, updateNote, deleteNote} from "../controllers/notes.controllers.js"

const router = express.Router()

router.get("/get/notes",getNotes)
router.post("/create/note",createNote)
router.put("/update/note/:id",updateNote)
router.delete("/delete/note/:id",deleteNote)

export default router