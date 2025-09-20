import { ca } from 'zod/locales';
import {createUser} from '../services/userService.js';
import bcrypt from 'bcrypt';

export const addUser = async (req, res) =>{
    //try{
        const {first_name, last_name, email, password, corporate_id, roleId, profile_picture}= req.body;
        
        if(!first_name || !last_name || !password || !corporate_id || !roleId){
           return res.status(400).json({message:"Missing required fields"}); 
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser({
            first_name,
            last_name,
            email:email,
            password:hashedPassword,
            roleId,
            corporate_id,
            profile_picture: profile_picture || null,
        });
         res.status(201).json({message:"User created successfully", data:user});
    // }catch(error){
    //     res.status(500).json({ message: error.message });
    // }
}