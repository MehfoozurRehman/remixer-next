import prisma from "@/lib/prisma";

const allTodos = () => {
  return prisma.todo.findMany();
};
const todoById = (id: string) => {
  return prisma.todo.findUnique({
    where: { id },
  });
};

export default {
  allTodos,
  todoById,
};
