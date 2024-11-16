"use server";

import prisma from "@/lib/prisma";

const actions = {
  createTodo: async (data: { title: string; content: string }) => {
    return await prisma.todo.create({
      data,
    });
  },
  updateTodo: async (id: string, data: { title: string; content: string }) => {
    return await prisma.todo.update({
      where: { id },
      data,
    });
  },
  deleteTodo: async (id: string) => {
    return await prisma.todo.delete({
      where: { id },
    });
  },
};

export default actions;
