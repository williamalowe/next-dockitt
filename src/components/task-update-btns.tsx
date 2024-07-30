"use client";
import { useTask } from "@/context/task-context";
import {
  BsArrowCounterclockwise,
  BsCaretLeft,
  BsCaretRight,
  BsCheck,
  BsTrash,
  BsX,
} from "react-icons/bs";

export default function TaskUpdateButtons({
  status,
  id,
}: {
  status: string;
  id: number;
}) {
  const { updateStatus, deleteTask } = useTask();
  return (
    <div className="flex-1 flex justify-end gap-x-2">
      {status == "backlog" ? (
        <>
          <button
            onClick={() => updateStatus(id, "cancelled")}
            className="text-red-800"
          >
            <BsX />
          </button>
          <button
            onClick={() => updateStatus(id, "in progress")}
            className="text-green-800"
          >
            <BsCaretRight />
          </button>
        </>
      ) : status === "completed" ? (
        <>
          <button
            onClick={() => updateStatus(id, "under review")}
            className="text-purple-800"
          >
            <BsCaretLeft />
          </button>
          <button onClick={() => deleteTask(id)} className="text-green-800">
            <BsCheck />
          </button>
        </>
      ) : status === "cancelled" ? (
        <>
          <button onClick={() => deleteTask(id)} className="text-red-800">
            <BsTrash />
          </button>
          <button
            onClick={() => updateStatus(id, "backlog")}
            className="text-green-800"
          >
            <BsArrowCounterclockwise />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => updateStatus(id, "cancelled")}
            className="text-red-800"
          >
            <BsX />
          </button>
          {status === "in progress" ? (
            <>
              <button
                onClick={() => updateStatus(id, "backlog")}
                className="text-purple-800"
              >
                <BsCaretLeft />
              </button>
              <button
                onClick={() => updateStatus(id, "under review")}
                className="text-green-800"
              >
                <BsCaretRight />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => updateStatus(id, "in progress")}
                className="text-purple-800"
              >
                <BsCaretLeft />
              </button>
              <button
                onClick={() => updateStatus(id, "completed")}
                className="text-green-800"
              >
                <BsCaretRight />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
