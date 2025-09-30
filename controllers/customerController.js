import { createCustomer, fetchCustomerById, fetchCustomer, updateCustomer,deleteCustomer } from '../services/customerService.js';

export const addCustomer = async(req, res)=>{
    try{
        const {first_name,last_name,email,subscription,experience,traded,acknowledgement  } = req.body;

        if(!first_name || !last_name || !email  || !subscription || !experience || !traded || !acknowledgement){
                return res.status(400).json({message:"All fields are required"});
        }

        const newCustomer = {
            first_name,
            last_name,
            email,
            subscription,
            experience,
            traded,
            acknowledgement 
        }
        await createCustomer(newCustomer);
        res.status(201).json({message:"Customer created successfully"});
    }catch(err){
        res.status(500).json({message:"",error:err.message});
    }

}
export const fetchAllCustomer =async(req,res)=>{
    try{
        const fetchAll = await fetchCustomer();
        res.status(200).json({data:fetchAll});
    }catch(err){
        res.status(500).json({message:"Error fetching customer",error:err.message});
    }
}

export const getCustomerById = async(req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({message:"ID parameter is required"});
    }

    const customer = await fetchCustomerById(id);
    if(!customer){
        return res.status(404).json({message:"Customer not found"});
    }
    res.status(200).json({data:customer});
}

export const updateCustomerById = async(req,res)=>{
    try{
        const {id} = req.params;
        const {first_name,last_name,email,subscriptions,experience,traded,acknowledgement} = req.body;
        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }

        const updateData = {
            first_name,
            last_name,
            email,
            subscriptions,
            experience,
            traded,
            acknowledgement
        };
        const customer = await updateCustomer(id,updateData);
        if(!customer){
            return res.status(404).json({message:"Customer not found"});
        }
        res.status(200).json({message:"Customer updated successfully",data:updateData});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const deleteCustomerById = async(req,res)=>{
    try{
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message:"ID parameter is required"});
        }

        const customer = await deleteCustomer(id);
        if(!customer){
            return res.status(404).json({message:"Customer not found"});
        }
        res.status(200).json({message:"Customer deleted successfully"});
    }catch(err){
        res.status(500).json({message:"Error deleting customer",error:err.message});
    }
}