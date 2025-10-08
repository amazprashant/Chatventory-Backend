import { ca } from 'zod/locales';
import{addRole, fetchRoleById, fetchRoles, updateRole, deleteRole} from '../services/roleService.js';

export const createRole = async(req,res)=>{
    try{
        const {name, permissions} = req.body;
        
        if(!name || !permissions){
            return res.status(400).json({message:"Name and permissions are required"});
        }

        if (!Array.isArray(permissions) || permissions.length === 0) {
      return res.status(400).json({ message: "Permissions array is required" });
    }
        
    const result = await addRole(name, permissions);

        res.status(201).json({message:"Role created successfully",data:newRole});
    }catch(err){
        res.status(500).json({message:"Error creating role",error:err.message});
    }
}

export const getRoleById = async(req,res)=>{
    const {id} = req.params;
    try{
        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }
        const role = await fetchRoleById(id);
        if(!role){
            return res.status(404).json({message:"Role not found"});
        }
        res.status(200).json({data:role});
    }catch(err){
        res.status(500).json({message:"",error:err.message})
    }
}