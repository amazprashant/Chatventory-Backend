import prisma from '../prisma/client.js';

export const createUser = async(data)=>{
    return await prisma.user.create({data});
}

export const fetchUser = async(data)=>{
    return await prisma.user.findMany();
}

export const fetchUserById = async(id)=>{
    return await prisma.user.findUnique({where:{id}});
}

export const updateUser = async(req,res) =>{
    return await prisma.user.update({where:{id},data})
}