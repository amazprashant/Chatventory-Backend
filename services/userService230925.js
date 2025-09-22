import prisma from '../prisma/client.js';

export const createUser = async (data) =>{
    return await prisma.user.create({data});
}

export const fetchUsers = async () =>{
    return await prisma.user.findMany();
}

export const fetchUserById =async (id) =>{
    return await prisma.user.findUnique({where:{id}});
}

export const updateUser = async (id,data)=>{
    return await prisma.user.update({where:{id}, data});
}

export const deleteUser = async (id) =>{
    return await prisma.user.delete({where:{id}});
}