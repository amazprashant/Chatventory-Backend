import {createProspect,fetchProspectById,fetchProspect,updateProspect} from "../services/prospectService.js";

export const addProspect = async(req, res)=>{
    try{
        const {first_name,last_name,email} = req.body;

        if(!first_name || !last_name || !email ){
            return res.status(400).json({message:"All fields are required"});
        }
        const newProspect ={
            first_name,
            last_name,
            email
        }
        await createProspect(newProspect);
        res.status(201).json({message:"Prospect created successfully"});
        
    }catch(err){
        res.status(500).json({message:"",error:err.message});
    }
}

export const getProspectById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }
    
        const prospect = await fetchProspectById(id);   
        if(!prospect){
            return res.status(404).json({message:"Prospect not found"});
        }
        res.status(200).json({data:prospect});
    }catch(err){
        res.status(500).json({message:"Error fetching prospect",error:err.message});
    }
}
export const getAllProspect = async(req,res)=>{
    try{
        const fetchAll = await fetchProspect();
        res.status(200).json({data:fetchAll});
    }catch(err){
        res.status(500).json({message:"Error fetching prospect",error:err.message});
    }
}

export const updateProspectById = async(req,res)=>{
    try{
        const {id} =req.params;
        console.log(id);
        const {first_name,last_name,email} = req.body;
        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }
        const updateData ={
            first_name,
            last_name,
            email
        }
        await updateProspect(id,updateData);
        res.status(200).json({message:"Prospect updated successfully"});
    }catch(err){
        res.status(500).json({message:"Error updating prospect",error:err.message});
    }
}

export const deleteProspectById = async(req,res)=>{
    try{
        const{id} = req.params;
        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }
        await deleteProspect(id);
        res.status(200).json({message:"Prospect deleted successfully"});
    }catch(err){
        
    }
}