import { NOTE } from "../models/notes.model.js";
import bcrypt from "bcrypt"


export const createNote = async (req,res) => {

    try {
        const {title, content, password} = req.body
    
       const hashedPassword = await bcrypt.hash(password,10)
    
        const newNote = await NOTE.create({title,content,password:hashedPassword})
    
        res.status(201).send({
           message: "note successfully created",
           newNote
        })
    } catch (error) {
        res.status(500).send({
            message:"error in creating notes",
            error
        })
    }
    
}

export const getNotes = async (req,res) => {

    try {
        const notes = await NOTE.find({})
    
        res.send(notes)
    } catch (error) {
        res.status(500).send({
            message:"error in getting notes",
            error
        })
        
    }

}

export const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await NOTE.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Error in retrieving note", error });
    }
}


export const updateNote = async (req,res) => {

    try {
    
        const {id} = req.params

        const {title,content,password} = req.body 

        const note = await NOTE.findById(id)

        if(!note) {
            return res.status(500).send({
                message:"note not found"
            })
        }

        const passwordMatched = await bcrypt.compare(password,note.password)

        if(!passwordMatched){
            return res.status(500).send({
                message:"password did not matched"
            })
        }
        
        if(title){
            note.title = title
        }
        
        if(content){
            note.content = content
        }

        await note.save()

        return res.status(200).send({
            message:"note updated successfully",
            note
        })
    } catch (error) {
        
    }

}
export const deleteNote = async (req,res) => {


    try {
        const {id} = req.params
    
        const {password} = req.body
    
        const note = await NOTE.findById(id)
    
        if(!note){
            return res.status(400).send({
                message:"note not found"
            })
        }
    
        const passwordMatched = await bcrypt.compare(password,note.password)
    
        if(!passwordMatched){
            return res.status(400).send({
                message:"password did not matched"
            })
        }
    
        await NOTE.findByIdAndDelete(id)
    
        return res.status(200).send(
            {
                message:"note deleted successfully"
            }
        )
    } catch (error) {

        return res.status(500).send({
            message: "error in deleting note",
            error
        })
        
    }




}