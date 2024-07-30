"use client"

import { useTask } from "@/context/task-context";

export default function AddTestDataBtn() {
  const { addTestTasks } = useTask();

  return (
    <button 
      onClick={addTestTasks}
      className="w-fit p-1 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md text-sm font-bold"
    >
      Load Example Data
    </button>
  )
}
