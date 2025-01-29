import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
      data:{
          title:"Hello World",
          content:"This is a test post",
          published:true,
          author:'Abdullah Al Kafi',

      }
  })
  console.log(result);
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "This is a test post 1",
        published: true,
        author: "Abdullah Al Kafi 1",
      },
      {
        title: "Title 2",
        content: "This is a test post 2",
        published: true,
        author: "Abdullah Al Kafi 2",
      },
      {
        title: "Title 3",
        content: "This is a test post 3",
        published: true,
        author: "Abdullah Al Kafi 3",
      },
      {
        title: "Title 4",
        content: "This is a test post 4",
        published: true,
        author: "Abdullah Al Kafi 4",
      },
    ],
  });
  console.log({ createMany });
};

main();
