"use client"
import TaskList from "@/components/task-list";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { useTask } from "@/context/task-context";
import NewTaskDropdown from "@/components/new-task-dropdown";

export default function Home() {
  const { tasks } = useTask();

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">All Tasks <span className="ml-8 font-normal">{tasks.length}</span></h1>
      <TaskList 
        tasks={tasks}
      />
      <NewTaskDropdown 
        status=""
      />
    </main>
  );
}
