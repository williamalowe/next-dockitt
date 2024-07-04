import Link from "next/link";
import TaskListItem from "./task-list-item";

export default function TaskList() {
  const headerLabels = ["ID", "TASK", "PRIORITY", "STATUS", ""];
  return (
    <div className="flex flex-col mt-4">
      <div className="flex px-2 border-2 rounded-t-md">
        {headerLabels.map((label) => (
          <div key={label} className="flex-1 font-bold">
            {label}
          </div>
        ))}
      </div>
      <div className="mt-2 border-2">
        {
          // Map DB Tasks
        }
        <TaskListItem
          id="123456789"
          tag="fix"
          task="Do some stuff"
          priority="low"
          status="backlog"
        />
        <TaskListItem
          id="234567891"
          tag="bug"
          task="Do other stuff"
          priority="low"
          status="in progress"
        />
        <TaskListItem
          id="345678912"
          tag="fix"
          task="Do more stuff"
          priority="high"
          status="under review"
        />
        <TaskListItem
          id="456789123"
          tag="feat"
          task="Do even more stuff"
          priority="low"
          status="completed"
        />
        <TaskListItem
          id="567891234"
          tag="fix"
          task="Do extra stuff"
          priority="low"
          status="cancelled"
        />
      </div>
      <div className="flex justify-center mt-2 border-2 rounded-b-md font-bold">
        <Link href="new-task">Add New Task</Link>
      </div>
    </div>
  );
}
