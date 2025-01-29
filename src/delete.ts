import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



const deleteData =async()=>{
    const deleteOne = await prisma.post.deleteMany({
        where:{
            published:true
        }
    })
    console.log(deleteOne);
}

deleteData()