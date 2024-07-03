import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import TaskTableItem from "./task-table-item";

export default function TaskTable() {
  const tableLabels = [
    {
      label: "ID",
    },
    {
      label: "Task",
    },
    {
      label: "Priority",
    },
    {
      label: "Status",
    },
    {
      label: "",
    },
  ];
  return (
    <div className="border mt-4">
      <div className="flex px-2 bg-emerald-600 rounded-t">
        {tableLabels.map((label) => {
          return (
            <div key={label.label} className="flex-1 text-white font-bold">
              {label.label}
            </div>
          );
        })}
      </div>
      <div>
        {/* map task items */}
        <p className="text-center">No Tasks Pending!</p>
        {/* <TaskTableItem 
          id='1234567890'
          task='Do Stuff'
          priority='Low'
          status='Backlog'
        />
        <TaskTableItem 
          id='2345678901'
          task='Do Other Stuff'
          priority='Medium'
          status='In Progress'
        />
        <TaskTableItem 
          id='3456789012'
          task='Do More Stuff'
          priority='High'
          status='Under Review'
        />
        <TaskTableItem 
          id='4567890123'
          task='Do Even More Stuff'
          priority='Critical'
          status='Completed'
        /> */}
      </div>
      <Link href="/new-task">
        <div className="flex bg-emerald-600 rounded-b justify-center p-1">
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-white" />
        </div>
      </Link>
    </div>
  );
}
