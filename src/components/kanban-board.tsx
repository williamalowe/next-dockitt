"use client";
import { useState } from "react";
import KanbanColumn from "./kanban-column";
import { useTask } from "@/context/task-context";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import AddTestDataBtn from "./add-test-data-btn";

export default function KanbanBoard() {
  const { tasks } = useTask();
  const [showCancelled, setShowCancelled] = useState(false);

  return (
    <div className="flex flex-col gap-x-2">
      <button
        className="absolute top-2 right-2 flex items-center gap-x-2 p-1 sm:p-2 bg-zinc-900 border rounded text-zinc-50 uppercase text-xs hover:scale-105 active:scale-95 transition"
        onClick={() => setShowCancelled(!showCancelled)}
      >
        Cancelled
        {showCancelled ? <BsFillEyeSlashFill /> : <BsEyeFill />}
      </button>
      <div className="flex-1 flex flex-col md:flex-row gap-y-4">
        <KanbanColumn
          header="Backlog"
          textColor="text-rose-800"
          cardColor="bg-rose-800"
          taskList={tasks.filter((task: any) => task.status === "backlog")}
        />
        <KanbanColumn
          header="In Progress"
          textColor="text-orange-800"
          cardColor="bg-orange-800"
          taskList={tasks.filter((task: any) => task.status === "in progress")}
        />
        <KanbanColumn
          header="Under Review"
          textColor="text-purple-800"
          cardColor="bg-purple-800"
          taskList={tasks.filter((task: any) => task.status === "under review")}
        />
        <KanbanColumn
          header="Completed"
          textColor="text-green-800"
          cardColor="bg-green-800"
          taskList={tasks.filter((task: any) => task.status === "completed")}
        />
        {showCancelled && (
          <KanbanColumn
            header="Cancelled"
            textColor="text-red-800"
            cardColor="bg-red-800"
            taskList={tasks.filter((task: any) => task.status === "cancelled")}
          />
        )}
      </div>

      {tasks.length === 0 && <AddTestDataBtn />}
    </div>
  );
}
