"use client";
import { exampleTasks } from "@/lib/testData";
import { createContext, useContext, useEffect, useState, useRef } from "react";

type Task = {
  id: number;
  task: string;
  tag: string;
  description: string;
  priority: string;
  status: string;
};

type TaskContextProviderProps = {
  children: React.ReactNode;
};

type TaskContextType = {
  tasks: Task | any;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateStatus: (id: number, update: string) => void;
  addTestTasks: () => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [tasks, setTasks] = useState([] as Task[]);
  const initialRender = useRef(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || `{id: 1,
    task: "Implement lightmode/darkmode",
    tag: "feat",
    description: "Implement lightmode/darkmode toggle + switch component.",
    priority: "high",
    status: "completed",}`);
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) =>
    setTasks(tasks.filter((task: Task) => task.id !== taskId));

  const updateStatus = (taskID: number, newStatus: string) => {
    let target = tasks.filter((task: Task) => task.id === taskID);
    let updatedList = tasks.filter((task: Task) => task.id !== taskID);

    let updatedTask = {
      id: target[0].id,
      task: target[0].task,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: newStatus,
    };
    setTasks([...updatedList, updatedTask]);
  };

  const addTestTasks = () => {
    setTasks(exampleTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateStatus, addTestTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  if (context === null) {
    throw new Error("useTask must be used within a TaskContextProvider");
  }

  return context;
}
