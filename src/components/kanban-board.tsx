"use client"
import React, { useState } from 'react'
import KanbanColumn from './kanban-column'
import { exampleTasks } from '@/lib/testData'
import { useTask } from '@/context/task-context';

export default function KanbanBoard() {
  const [showCancelled, setShowCancelled] = useState(false);

  return (
    <div className='flex gap-x-2'>
      <button className='absolute top-4 right-4 p-2 bg-zinc-900 border rounded text-zinc-50 uppercase text-xs hover:scale-105 active:scale-95 transition' onClick={() => setShowCancelled(!showCancelled)}>
        {
          showCancelled ? "Hide Cancelled Tasks" : "Show Cancelled Tasks"
        } 
      </button>
      <KanbanColumn 
        header="Backlog"
        textColor="text-rose-800"
        cardColor="bg-rose-800"
        taskList={exampleTasks.filter((task) => task.status === "backlog")}
      />
      <KanbanColumn 
        header="In Progress"
        textColor="text-orange-800"
        cardColor="bg-orange-800"
        taskList={exampleTasks.filter((task) => task.status === "in progress")}
      />
      <KanbanColumn 
        header="Under Review"
        textColor="text-purple-800"
        cardColor="bg-purple-800"
        taskList={exampleTasks.filter((task) => task.status === "under review")}
      />
      <KanbanColumn 
        header="Completed"
        textColor="text-green-800"
        cardColor="bg-green-800"
        taskList={exampleTasks.filter((task) => task.status === "completed")}
      />
      {
        showCancelled && 
        <KanbanColumn 
          header="Cancelled"
          textColor="text-red-800"
          cardColor="bg-red-800"
          taskList={exampleTasks.filter((task) => task.status === "cancelled")}
        />
      }
    </div>
  )
}
