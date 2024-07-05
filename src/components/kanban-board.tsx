import KanbanColumn from "./kanban-column";

export default function KanbanBoard() {
  return (
    <div className="flex-1 flex gap-x-2">
    <KanbanColumn 
      header="Cancelled"
      headerColor="text-red-400"
    />
      <KanbanColumn 
        header="Backlog"
        headerColor="text-neutral-400"
      />
      <KanbanColumn 
        header="In Progress"
        headerColor="text-blue-400"
      />
      <KanbanColumn 
        header="Under Review"
        headerColor="text-orange-400"
      />
      <KanbanColumn 
        header="Completed"
        headerColor="text-emerald-600"
      />
    </div>
  )
}
