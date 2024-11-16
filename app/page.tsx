import queries from "@/api/queries";

export default async function Page() {
  const totos = await queries.allTodos();

  console.log(totos);
  return <div>Page</div>;
}
