import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //  const createUser = await prisma.user.create({
  //   data:{
  //     username: "user2",
  //     email:"user2@aak.com",
  //     role: 'user'
  //   }
  //  })

  //  const createProfile = await prisma.profile.create({
  //    data:{
  //      bio: "this is my bio",
  //      userId:6,

  //    }
  //  })

  const createCategory = await prisma.category.create({
    data: {
      name: "software engineering",
    },
  });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 4 ",
      content: "this is content 4" ,
      authorId: 1,
      PostCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 11,
          },
          {
            categoryId: 13,
          },
        ],
      },
    },
    include: {
      PostCategory: true,
    },
  });

  console.log(createPost);
};

// main();
