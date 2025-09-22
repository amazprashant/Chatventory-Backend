import prisma from '../prisma/client.js';

export const createUser = async(data)=>{
    return await prisma.user.create({data});
}
