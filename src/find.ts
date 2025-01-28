import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all data from the database
  const getAllFromDb = await prisma.post.findMany({});
  //find fast or find fast ot throw.
//   const findFirst = await prisma.post.findFirstOrThrow({
//     where: {
//       published: false,
//     },
//   });

const findUnique =await prisma.post.findUniqueOrThrow({
    where:{
        id:1
    }
})
console.log(findUnique);

};

main();
