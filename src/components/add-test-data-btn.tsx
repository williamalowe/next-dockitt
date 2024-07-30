"use client"

import { useTask } from "@/context/task-context";

export default function AddTestDataBtn() {
  const { addTestTasks } = useTask();

  return (
    <button onClick={addTestTasks}>
      test
    </button>
  )
}
