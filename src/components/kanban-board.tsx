import React from 'react'
import KanbanColumn from './kanban-column'
import { exampleTasks } from '@/lib/testData'

export default function KanbanBoard() {
  return (
    <div className='flex gap-x-2'>
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
    </div>
  )
}
