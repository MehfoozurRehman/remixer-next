import Form from "next/form";
import { Todo } from "./Todo";
import { createTodo } from "@/api/actions";
import queries from "@/api/queries";

export default async function Page() {
  const totos = await queries.allTodos();

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {totos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>

      <Form action={createTodo}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
