import KanbanCard from "./kanban-card"

export default function KanbanColumn({ header, textColor, taskList, cardColor }: {
  header: string
  textColor: string,
  taskList: any,
  cardColor: string
}) {
  return (
    <div className="flex-1">
      <h5 className={`${textColor} uppercase italic text-xl`}>{header}</h5>
      <div className="flex flex-col p-1 gap-y-2">
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
      </div>
    </div>
  )
}
