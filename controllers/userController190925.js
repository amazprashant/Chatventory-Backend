import { createUser } from "../services/userService.js";

export const addUser = async (req, res) =>{

    try{
        const {first_name, last_name,email,password,roleId,corporate_id,user_type,profile_image} = req.body;

        if(!first_name || !last_name || !email ||  !password || !roleId || !corporate_id || !user_type){
            return res.json({message:"Missing required fields"})
        }
        const user = await createUser({
            first_name,
            last_name,
            email,
            password,
            roleId,
            corporate_id,
            user_type,
            profile_image: profile_image || null,
        });
        

        res.send(201).json({
            message: "User created successfully",
            data: user,
        })
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}