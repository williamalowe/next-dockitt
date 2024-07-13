import KanbanCard from "./kanban-card"

export default function KanbanColumn({ header, textColor, taskList, cardColor }: {
  header: string
  textColor: string,
  taskList: any,
  cardColor: string
}) {
  return (
    <div className="flex-1">
      <h5 className={`${textColor} uppercase italic text-xl`}>{header} - {taskList.length}</h5>
      <div className="flex p-1 gap-2 md:flex-col flex-wrap">
        {
          taskList.map((task) => 
          <KanbanCard 
            key={task.id}
            color={cardColor}
            id={task.id}
            task={task.task}
            tag={task.tag}
            description={task.description}
            priority={task.priority}
            status={task.status}
          />
          )
        }
        {
          taskList.length === 0 && 
          <p className="italic">No Tasks</p>
        }
      </div>
    </div>
  )
}
