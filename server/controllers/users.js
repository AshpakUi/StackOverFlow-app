import mangoose from "mongoose"
import Users from "../models/auth.js"

export const getAllUsers=async(req,res)=>{
try {
    const allUsers=await Users.find()
    const allUsersDetails=[]
    allUsers.forEach(users => {
        allUsersDetails.push({_id:users._id,name:users.name,about:users.about,tags:users.tags,joinedOn:users.joinedOn})
    });
   res.status(200).json(allUsersDetails)

} catch (error) {
    res.status(404).json({message:error.message})
}
}