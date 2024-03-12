import User from "../Models/user-model.js";

const Register = async (req,res) => {
    try {
       const {name,email,password} = req.body

       const user = await User.create({name,email,password})
        
       res.status(200).json({
        msg: "user registerd",
        data: user

    })
    } catch (error) {

        return res.status(500).json({
            msg: "user not registerd",
            error: error
    
           })
    }
}

export default Register