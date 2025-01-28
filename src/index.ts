import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const main = async()=>{
// const result = await prisma.post.create({
//     data:{
//         title:"Hello World",
//         content:"This is a test post",
//         published:true,
//         author:'Abdullah Al Kafi',

//     }
// })
// console.log(result);
const getAllFromDb = await prisma.post.findMany({})
console.log(getAllFromDb);
}

main()
