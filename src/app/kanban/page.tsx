import { getTasks } from "@/actions/action";
import KanbanBoard from "@/components/kanban-board";
import dbConnect from "@/lib/db";

export default async function Kanban() {
  await dbConnect();
  const tasks = await getTasks();
  
  return (
    <main className="flex-1 py-8 px-5 flex flex-col">
      <KanbanBoard tasks={tasks} />
    </main>
  );
}
