"use client";

import { updateTodoStatus } from "@/api/actions";
import { useTransition } from "react";

export function Todo({
  todo,
}: {
  todo: {
    id: string;
    title: string;
    content: string | null;
    completed: boolean;
  };
}) {
  const [isPendingStatusChange, startTransitionStatusChange] = useTransition();

  return (
    <li
      style={{
        display: "flex",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={(event) => {
          startTransitionStatusChange(() => {
            updateTodoStatus({
              id: todo.id,
              completed: event.target.checked,
            });
          });
        }}
        disabled={isPendingStatusChange}
        style={{
          opacity: isPendingStatusChange ? 0.5 : 1,
        }}
      />
      <div>
        <b>{todo.title}</b>
      </div>
      <div>{todo.content}</div>
    </li>
  );
}
