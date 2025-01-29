import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset and cursor based pagination

  const offsetData = await prisma.post.findMany({
    skip: 10,
    take: 10,
  });
  // console.log("Offset Data",offsetData);

  const cursorData = await prisma.post.findMany({
    cursor: {
      id: 100,
    },
    skip: 10,
    take: 10,
  });
  //   console.log("Cursor Data", cursorData);

  const sortingData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
    select: {
      title: true,
    },
  });
  console.log(sortingData);
};
paginationSorting();
