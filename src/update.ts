import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

const updates =async()=>{

    
// const singleUpdate = await prisma.post.update({
//     where:{
//         id:5
//     },
//     data:{
//         title:"Title dadf     555555555555555555555555555555555555"
//     }
// })
// const updateMany = await prisma.post.updateMany({
//     where:{
//         published:true
//     },
//     data:{
//         title:"Title dadf  dd   555555555555555555555555555555555555"
//     }
// })



const upsertData = await prisma.post.upsert





// console.log(updateMany);
}

updates();