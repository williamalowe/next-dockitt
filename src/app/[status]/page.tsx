"use client";
import NewTaskDropdown from "@/components/new-task-dropdown";
import TaskList from "@/components/task-list";
import { useTask } from "@/context/task-context";

export default function Status({
  params,
}: {
  params: {
    status: string;
  };
}) {
  const { tasks } = useTask();
  let displayTasks = tasks.filter((task) => task.status === params.status);

  if (params.status === "in-progress") {
    displayTasks = tasks.filter((task) => task.status === "in progress");
  }
  if (params.status === "under-review") {
    displayTasks = tasks.filter((task) => task.status === "under review");
  }

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold capitalize">
        {params.status} Tasks{" "}
        <span className="ml-8 font-normal">{displayTasks.length}</span>
      </h1>
      <TaskList tasks={displayTasks} />
      {/* <Link
        // href="/new-task"
        href={`/${params.status}/new-task`}
        className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-xl rounded-md dark:bg-zinc-200 dark:text-zinc-900/80 hover:scale-[1.025] transition"
      >
        <BsPlus />
      </Link> */}
      {params.status !== "cancelled" && (
        <NewTaskDropdown
          status={
            params.status === "in-progress"
              ? "in progress"
              : params.status === "under-review"
              ? "under review"
              : params.status
          }
        />
      )}
    </main>
  );
}
