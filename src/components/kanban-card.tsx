import TaskUpdateButtons from "./task-update-btns";

export default function KanbanCard({
  color,
  id,
  task,
  tag,
  description,
  priority,
  status,
}: {
  color: string;
  id: string;
  task: string;
  tag: string;
  description: string;
  priority: string;
  status: string;
}) {
  return (
    <div className="border border-zinc-200 rounded-md flex overflow-hidden max-h-36 dark:border-zinc-600 hover:translate-x-2 transition">
      <div className={`${color} w-1`}></div>
      <div className="relative flex-1 p-2 flex flex-col gap-y-1">
        <h3 className="font-bold">{task}</h3>
        <p className="flex-1 overflow-y-scroll no-scrollbar text-sm">
          {description}
        </p>
        <div className="flex items-center">
          <h5 className="font-semibold text-sm">
            Priority:{" "}
            <span
              className={`${
                priority === "critical"
                  ? "uppercase text-red-800 font-semibold"
                  : "capitalize"
              } font-normal`}
            >
              {priority}
            </span>
          </h5>
          <TaskUpdateButtons status={status} />
        </div>
        <div className="absolute top-0 right-0 text-xs uppercase px-2 rounded-bl-md bg-zinc-200 dark:bg-zinc-600">{tag}</div>
      </div>
    </div>
  );
}
