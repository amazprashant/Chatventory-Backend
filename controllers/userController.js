import {createUser} from "../services/userService.js";

export const addUser = async(req, res) =>{
    try{
        const {first_name,last_name,email_id,corporate_id,roleId,profile_image,status} = req.body;

        if(!first_name || !last_name || !email_id || !corporate_id || !roleId){
            return res.status(400).json({message: "Missing required fields"});
        }

        const userData ={
            first_name,
            last_name,
            email_id,
            corporate_id,
            roleId,
            profile_image,
            status
        }
        res.status(201).json({
            message: "User created successfully",
            data:userData,
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}