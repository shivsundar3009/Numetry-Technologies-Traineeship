import {User} from "../models/user.model.js"
import bcrypt from "bcrypt"

const signUP = async (req,res) => {
    
    try {
        const {fullname, username, email, password, gender, profilepic} = req.body 

        if(!fullname || !username || !email || !password || !gender || !profilepic) {
           return res.send('all fields are required')
        }

        const user1 = await User.findOne({username})
        const user2 = await User.findOne({email})

        if(user1){
            return res.status(400).send('username already exists')
        }

        if(user2){
            return res.status(400).send('email already registered')
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User(
            {
                fullname,username,email,password:hashedPassword,gender,
                profilepic: gender === "Male" ? boyprofilepic : girlprofilepic
            }
        )

       await newUser.save()

        res.send(newUser)

    } catch (error) {
        res.send({message :'error in signup', error})
    }
}

const login = async (req,res) => {

   try {
    const {usernameORemail, password} = req.body
 
    if(!usernameORemail){

       return res.send("please enter username or email properly")
    } 

    const user = await User.findOne({
        $or:[
            { username: usernameORemail },
            { email: usernameORemail }
        ]
    
    })

     if(!user){
        return res.send("username or email not found")
     }

    const comparePassword = await bcrypt.compare(password,user.password)

    if(!comparePassword) {
     return res.send("password did not matched")
    } 
        

    return res.status(200).send("logged in successfully")

   } catch (error) {
      
    return res.send(error)
    
   }
}


export {signUP, login}