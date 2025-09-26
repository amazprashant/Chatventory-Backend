import prisma from '../prisma/client.js';

export const createCustomer = async(data)=>{
    return await prisma.customer.create({data});
}

export const fetchCustomer = async()=>{
    return await prisma.customer.findMany();
}

export const fetchCustomerById = async(id)=>{
    return await prisma.customer.findUnique({where:{id}});
}

export const updateCustomer = async(id,data)=>{
    return await prisma.customer.update({where:{id},data});
}

export const deleteCustomer = async(id)=>{
    return await prisma.customer.delete({where:{id}});
}