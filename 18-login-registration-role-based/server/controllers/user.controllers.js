import { User } from "../models/user.model.js";

export const createUser = async (req,res) => {

    const {email, fullName, password, role, profilePicture} = req.body

    if (!email || !fullName || !password || !role || !profilePicture) {
        return res.send({message:"please enter all the details correctly"})
    }

    const existingUser = User.findById({email})

    if(existingUser) {
        return res.send({message:"user already exists"})
    }

    
    
}

export const getUsers = async (req,res) => {

}

export const getUserById = async (req,res) => {

}