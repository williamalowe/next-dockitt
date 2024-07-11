import { exampleTasks } from "@/lib/testData";
import { BsCaretLeft, BsCaretRight, BsX } from "react-icons/bs";
import TaskUpdateButtons from "./task-update-btns";

export default function TaskList() {
  return (
    <div className="flex flex-col border w-full rounded-md p-2">
      <div className="flex">
        <div className="flex-1 uppercase font-bold">Task</div>
        <div className="flex-1 uppercase font-bold">Priority</div>
        <div className="flex-1 uppercase font-bold">Status</div>
        <div className="flex-1"></div>
      </div>
      {exampleTasks.map((task) => (
        <div key={task.id} className="flex">
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
            } flex-1 capitalize rounded-md`}
          >
            {task.status}
          </div>
          <TaskUpdateButtons 
            status={task.status}
          />
        </div>
      ))}
    </div>
  );
}
