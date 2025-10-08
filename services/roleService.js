import prisma from "../prisma/client.js";

export const addRole = async(data)=>{
    return await prisma.role.create({data});
}

export const fetchRoleById = async(id)=>{
    return await prisma.role.findUnique({where:{id}});
}

export const fetchRoles = async() =>{
    return await prisma.role.findMany();
}

export const updateRole = async(id,data)=>{
    return await prisma.role.update({where:{id},data});
}

export const deleteRole = async(id)=>{
    return await prisma.role.delete({where:{id}});
}