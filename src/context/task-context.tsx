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
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateStatus: (id: string, update: string) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {

  let value: any;

  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("tasks") || []);
  }


  const [tasks, setTasks] = useState(value);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const [tasks, setTasks] = useState([
  //   {
  //     id: "100",
  //     task: "Test Task 1",
  //     tag: "test",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto voluptas ipsam doloremque non qui quod consequuntur nulla explicabo accusantium?",
  //     priority: "low",
  //     status: "backlog",
  //   },
  // ]);



  const addTask = (newTask: Task) => setTasks([...tasks, newTask]);

  const deleteTask = (taskId: string) =>
    setTasks(tasks.filter((task: Task) => task.id !== taskId));

  const updateStatus = (taskID: string, newStatus: string) => {
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

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateStatus }}>
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