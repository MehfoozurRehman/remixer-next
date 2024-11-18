"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (data: FormData) => {
  console.log(data);

  const title = data.get("title") || "";
  const content = data.get("content") || "";

  await prisma.todo.create({
    data: {
      title: title.toString(),
      content: content.toString(),
    },
  });

  revalidatePath("/");
};

export const updateTodoStatus = async (data: {
  id: string;
  completed: boolean;
}) => {
  await prisma.todo.update({
    where: { id: data.id },
    data: {
      completed: data.completed,
    },
  });

  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  return await prisma.todo.delete({
    where: { id },
  });
};
