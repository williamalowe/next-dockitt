"use client";

import { useTask } from "@/context/task-context";

export default function Tally() {
  const { tasks } = useTask();
  return (
    <div className="w-full h-full flex flex-col md:grid grid-cols-3 gap-2">
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-blue-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">Total Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.length}</h3>
        </div>
      </div>
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-rose-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">Backlog Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.filter((task) => task.status === "backlog").length}</h3>
        </div>
      </div>
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-orange-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">In Progress Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.filter((task) => task.status === "in progress").length}</h3>
        </div>
      </div>
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-purple-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">Under Review Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.filter((task) => task.status === "under review").length}</h3>
        </div>
      </div>
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-green-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">Completed Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.filter((task) => task.status === "completed").length}</h3>
        </div>
      </div>
      <div className="flex border rounded-md overflow-hidden hover:scale-105 transition dark:border-zinc-800">
        <div className="h-full w-4 bg-red-600"></div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h5 className="opacity-60">Cancelled Tasks</h5>
          <h3 className="text-4xl font-bold">{tasks.filter((task) => task.status === "cancelled").length}</h3>
        </div>
      </div>
    </div>
  );
}
function useTasks(): { tasks: any; } {
  throw new Error("Function not implemented.");
}

