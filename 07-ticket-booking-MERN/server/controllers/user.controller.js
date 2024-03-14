import { User } from "../models/user.model.js";

export const Register = async (req,res) => {


    try {
        const {name,email,password,age} = req.body
        
      const user = await User.create({name,email,password,age})

      res.status(201).json(user)

        
    } catch (error) {
        
    }
   

}