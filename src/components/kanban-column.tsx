import Link from "next/link";
import KanbanCard from "./kanban-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
        <h3 className="ml-auto">{taskList.length}</h3>
      </div>
      <div className="flex flex-col py-2 gap-y-2">
        {taskList.map((task: any) => (
          <KanbanCard
            key={task._id}
            id={task._id}
            title={task.title}
            tag={task.tag}
            description={task.description}
            priority={task.priority}
            status={task.status}
            points={task.points}
          />
        ))}
        <Link href={'/new-task'}>
          <div className="flex gap-x-2 p-2 text-xs text-neutral-400 font-semibold">
            <p>Add Card</p>
            <FontAwesomeIcon icon={faPlus} className="w-2"/>
          </div>
        </Link>
      </div>
    </div>
  );
}
