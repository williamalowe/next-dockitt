"use client";

import { useTask } from "@/context/task-context";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function NewTaskForm() {
  const [task, setTask] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("backlog");

  const { addTask } = useTask();

  const handleSubmit = () => {
    const newTask = {
      id: Date.now(),
      task: task,
      tag: tag,
      description: description,
      priority: priority,
      status: status,
    };
    addTask(newTask);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-y-2 max-w-[600px]"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task Title"
        className="border rounded-md px-1 dark:bg-zinc-800"
      />
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Task Tag"
        className="border rounded-md px-1 dark:bg-zinc-800"
      />
      <textarea
        name="taskDesc"
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
        placeholder="Task Description"
        className="border rounded-md px-1 dark:bg-zinc-800"
      />
      <div>
        <label htmlFor="priority">Priority: </label>
        <select
          name="priority"
          id="priority"
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-md bg-white dark:bg-zinc-800"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div>
        <label htmlFor="status">Status: </label>
        <select
          name="status"
          id="status"
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md bg-white dark:bg-zinc-800"
        >
          <option value="backlog">Backlog</option>
          <option value="in progress">In Progress</option>
          <option value="under review">Under Review</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-sm rounded-md dark:bg-zinc-200 dark:text-zinc-900/80 hover:scale-[1.025] transition"
      >
        <BsPlus /> Add Task
      </button>
    </form>
  );
}
