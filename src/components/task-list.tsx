import { BsCaretLeft, BsCaretRight, BsX } from "react-icons/bs";
import TaskUpdateButtons from "./task-update-btns";

export default function TaskList({ tasks }: {
  tasks: any
}) {
  return (
    <div className="flex flex-col border border-zinc-900/20 w-full rounded-md p-2 gap-y-1 dark:border-zinc-50/20">
      <div className="flex">
        <div className="flex-1 uppercase font-bold">Task</div>
        <div className="flex-1 uppercase font-bold">Priority</div>
        <div className="w-32 uppercase font-bold">Status</div>
        <div className="flex-1"></div>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="flex hover:bg-zinc-200 px-2 py-1 rounded-md dark:hover:bg-zinc-800 transition">
          <div className="flex-1 capitalize">{task.task}</div>
          <div className="flex-1 capitalize">{task.priority}</div>
          <div
            className={`${
              task.status === "backlog"
                ? "bg-rose-800"
                : task.status === "in progress"
                ? "bg-orange-800"
                : task.status === "under review"
                ? "bg-purple-800"
                : task.status === "completed"
                ? "bg-green-800"
                : "bg-red-800"
            } w-32 capitalize text-center text-zinc-50 italic rounded-md`}
          >
            {task.status}
          </div>
          <TaskUpdateButtons 
            status={task.status}
            id={task.id}
          />
        </div>
      ))}
    </div>
  );
}
