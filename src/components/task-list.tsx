"use client"
import Link from "next/link";
import TaskListItem from "./task-list-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function TaskList({ tasks }: {
  tasks: any
}) {
  const [data, setData] = useState([]);
  const headerLabels = ["ID", "TASK", "PRIORITY", "STATUS", ""];

  useEffect(() => {
    fetch('/api/task-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [data])

  return (
    <div className="flex flex-col mt-4">
      <div className="flex px-2 border-2 rounded-t-md">
        {headerLabels.map((label) => (
          <div key={label} className="flex-1 font-bold">
            {label}
          </div>
        ))}
      </div>
      <div className="mt-2 border-2">
        {data.map((task: any) => (
          <TaskListItem
            key={task._id}
            id={task._id}
            tag={task.tag}
            task={task.title}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </div>

      <Link href={"/new-task"}>
        <div className="flex gap-x-2 p-2 text-sm text-neutral-400 font-semibold justify-center items-center">
          <p>Add New Task</p>
          <FontAwesomeIcon icon={faPlus} className="w-2" />
        </div>
      </Link>
    </div>
  );
}
