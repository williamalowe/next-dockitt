import React from 'react'
import KanbanColumn from './kanban-column'

export default function KanbanBoard() {
  return (
    <div className='flex gap-x-2'>
      <KanbanColumn 
        header="Backlog"
        textColor="text-rose-800"
      />
      <KanbanColumn 
        header="In Progress"
        textColor="text-orange-800"
      />
      <KanbanColumn 
        header="Under Review"
        textColor="text-purple-800"
      />
      <KanbanColumn 
        header="Completed"
        textColor="text-green-800"
      />
    </div>
  )
}
