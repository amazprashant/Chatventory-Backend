import {createUser} from '../services/userService.js';
import bcrypt from 'bcrypt';

const export addUser = async(req,res)=>{
    const{first_name,last_name,email,password,corporate_id,roleId,profile_picture}= req.body;

    if(!first_name || !last_name || !email || !password || !corporate_id || !roleId || !profile_picture ){
        retrun res.status(400).json({message:"Missing required Field"});
    }
    const hashedPassword = await bcrypt.hash(password ,10 );

    const user = await createUser({
        first_name,
        last_name,
        email:email,
        password:hashedPassword,
        corporate_id,
        roleId,
        profile_picture:profile_picture || null
    });
    res.status(201).json({message:"User Created Successfully"})
}

