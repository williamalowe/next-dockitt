import KanbanCard from "./kanban-card";

export default function KanbanColumn({
  header,
  headerColor,
  taskList,
}: {
  header: string;
  headerColor: string;
  taskList: any;
}) {
  return (
    <div className="flex-1 px-2">
      <div className="flex">
        <h3 className={`${headerColor} text-xl uppercase`}>{header}</h3>
        <h3 className="ml-auto">1</h3>
      </div>
      <div className="flex flex-col py-2 gap-y-4">
        {taskList.map((task) => (
          <KanbanCard
            key={task._id}
            id={task._id.toString().slice(0, 8)}
            title={task.title}
            tag={task.tag}
            description={task.description}
            priority={task.priority}
            status={task.status}
            points={task.points}
          />
        ))}
      </div>
    </div>
  );
}
