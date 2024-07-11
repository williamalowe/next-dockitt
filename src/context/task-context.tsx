"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Task = {
  id: string,
  task: string,
  tag: string,
  description: string,
  priority: string,
  status: string,
};

type TaskContextProviderProps = {
  children: React.ReactNode;
};

type TaskContextType = {
  tasks: Task | any;
  // toggleTheme: () => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || "";
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks }}>
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