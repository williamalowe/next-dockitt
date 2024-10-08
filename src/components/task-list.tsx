import TaskUpdateButtons from "./task-update-btns";

export default function TaskList({ tasks }: { tasks: any }) {
  return (
    <>
      <div className="hidden md:flex flex-col border border-zinc-900/20 w-full rounded-md p-2 gap-y-1 dark:border-zinc-50/20">
        <div className="flex">
          <div className="flex-1 uppercase font-bold">Task</div>
          <div className="flex-1 uppercase font-bold">Priority</div>
          <div className="w-32 uppercase font-bold">Status</div>
          <div className="flex-1"></div>
        </div>
        {tasks.map((task: any) => (
          <div
            key={task.id}
            className="flex hover:bg-zinc-200 px-2 py-1 rounded-md dark:hover:bg-zinc-800 transition"
          >
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
              } w-32 capitalize text-center text-zinc-50 italic rounded-md flex items-center justify-center`}
            >
              {task.status}
            </div>
            <TaskUpdateButtons status={task.status} id={task.id} />
          </div>
        ))}
        {tasks.length === 0 && (
          <>
            <p className="text-center font-bold">No Tasks Remaining!</p>
          </>
        )}
      </div>
      <div className="flex md:hidden flex-col border border-zinc-900/20 w-full rounded-md p-2 gap-y-1 dark:border-zinc-50/20">
        <div className="uppercase font-bold">Tasks List</div>
        {tasks.map((task: any) => (
          <div
            key={task.id}
            className="flex flex-col hover:bg-zinc-200 px-2 py-1 rounded-md dark:hover:bg-zinc-800 transition"
          >
            <div className="flex-1 capitalize font-semibold">{task.task}</div>
            <div className="flex-1 capitalize">Priority: {task.priority}</div>
            <div className="flex items-center">
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
              <TaskUpdateButtons status={task.status} id={task.id} />
            </div>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-center font-bold">No Tasks Remaining!</p>
        )}
      </div>
    </>
  );
}
