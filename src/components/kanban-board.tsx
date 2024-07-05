import KanbanColumn from "./kanban-column";

export default function KanbanBoard({ tasks }: {
  tasks: any
}) {
  return (
    <div className="flex-1 flex gap-x-2">
    <KanbanColumn 
      header="Cancelled"
      headerColor="text-red-400"
      taskList={tasks.filter((task: any) => task.status === 'cancelled')}
    />
      <KanbanColumn 
        header="Backlog"
        headerColor="text-neutral-400"
        taskList={tasks.filter((task: any) => task.status === 'backlog')}
      />
      <KanbanColumn 
        header="In Progress"
        headerColor="text-blue-400"
        taskList={tasks.filter((task: any) => task.status === 'in progress')}
      />
      <KanbanColumn 
        header="Under Review"
        headerColor="text-orange-400"
        taskList={tasks.filter((task: any) => task.status === 'under review')}
      />
      <KanbanColumn 
        header="Completed"
        headerColor="text-emerald-600"
        taskList={tasks.filter((task: any) => task.status === 'completed')}
      />
    </div>
  )
}
