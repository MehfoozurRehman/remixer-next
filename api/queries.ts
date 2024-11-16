import prisma from "@/lib/prisma";

const queries = {
  allTodos: () => {
    return prisma.todo.findMany();
  },
  todoById: (id: string) => {
    return prisma.todo.findUnique({
      where: { id },
    });
  },
};

export default queries;
