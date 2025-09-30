import prisma from "../prisma/client.js";

export const createProspect =async(prospectData)=>{
    return await prisma.prospect.create({
        data:prospectData
    })
}

export const fetchProspectById = async(id)=>{
    return await prisma.prospect.findUnique({
        where:{id:parseInt(id)}
    })
}

export const fetchProspect = async()=>{
    return await prisma.prospect.findMany();
}

export const updateProspect = async(id,updateData)=>{
    return await prisma.prospect.update({
        where:{id:parseInt(id)},
        data:updateData
    });
}

export const deleteProspect = async(id)=>{
    return await prisma.prospect.update({
        where:{id:parseInt(id)},
        data:{deleted:true}
    })
}