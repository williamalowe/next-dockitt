import KanbanBoard from "@/components/kanban-board";

export default function page() {
  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Kanban Board</h1>
      <KanbanBoard />
    </main>
  )
}
