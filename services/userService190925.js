import { ca } from "zod/locales";
import prisma from "../prisma/client.js";

export const createUser = async(data) => {
    try{
        const newUser = await prisma.user.create({
            data:{
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                corporate_id: data.corporate_id,
                roleId: data.roleId,
                profile_image: data.profile_image,
            },
        });
        return newUser;
    }catch(error){
        if(error.code === "P2002"){
            throw new Error("User with this email already exists");
        }
        throw error;
    }   
};
