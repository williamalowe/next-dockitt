"use client"
import TaskList from "@/components/task-list";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { useTask } from "@/context/task-context";

export default function Home() {
  const { tasks } = useTask();

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">All Tasks <span className="ml-8 font-normal">{tasks.length}</span></h1>
      <TaskList 
        tasks={tasks}
      />
      <Link href="/new-task" className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-xl rounded-md dark:bg-zinc-200 dark:text-zinc-900/80 hover:scale-[1.025] transition"><BsPlus /></Link>
    </main>
  );
}
