import {createUser, fetchUsers, fetchUserById, updateUser, deleteUser} from '../services/userService.js';
import bcrypt from 'bcrypt';

export const addUser = async (req,res) =>{
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
}

export const getUsers = async (req,res)=>{
    const users = await fetchUsers();
    res.status(200).json({data:users});
}

export const getUserById = async(req,res)=>{
    const { id } = req.params;

    if(!id){
        return res.status(400).json({message:"ID parameter is required"});
    }
    const user = await fetchUserById(parseInt(id));
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({data:user});
    
}

export const updateUserById =  async (req,res)=>{
    const {id} = req.params;
    const {first_name, last_name, email, password, corporate_id, roleId, profile_picture} = req.body;

    if(!id){
        return res.status(400).json({message:"ID parameter is required"});
    }

    const updateData = {
        first_name,
        last_name,
        email,
        corporate_id,
        roleId,
        profile_picture,

    };
    if(password){
        updateData.password = await bcrypt.hash(password,10);
    }
    const updatedUser = await updateUser(parseInt(id), updateData);
    if(!updatedUser){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User updated successfully", data:updatedUser});
}
export const deleteUserById = async (req, res) =>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({message:"ID parameter is required"});
    }
    const deletedUser = await deleteUser(parseInt(id));
    if(!deletedUser){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User deleted successfully", data:deletedUser});
}