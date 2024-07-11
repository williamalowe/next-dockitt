import TaskList from "@/components/task-list";
import Link from "next/link";
import { exampleTasks } from "@/lib/testData";
import { BsPlus } from "react-icons/bs";
import { useEffect } from "react";

export default function Status({
  params,
}: {
  params: {
    status: string;
  };
}) {
  let displayTasks = exampleTasks.filter(
    (task) => task.status === params.status
  );

  if (params.status === "in-progress") {
    displayTasks = exampleTasks.filter((task) => task.status === "in progress");
  }
  if (params.status === "under-review") {
    displayTasks = exampleTasks.filter(
      (task) => task.status === "under review"
    );
  }

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold capitalize">
        {params.status} Tasks{" "}
        <span className="ml-8 font-normal">{displayTasks.length}</span>
      </h1>
      <TaskList tasks={displayTasks} />
      <Link
        href="/new-task"
        className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-xl rounded-md dark:bg-zinc-50 dark:text-zinc-900/80 hover:scale-[1.025] transition"
      >
        <BsPlus />
      </Link>
    </main>
  );
}
