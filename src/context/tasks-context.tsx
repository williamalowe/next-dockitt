"use client"

import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.date !== taskId));

  const updateStatus = (taskID) => {
    let target = tasks.filter((task) => task.date === taskID);
    let updatedList = tasks.filter((task) => task.date !== taskID);
    let status = "";

    if (target[0].status === "completed") {
      setTasks([...updatedList]);
    } else if (target[0].status === "backlog") {
      status = "in progress";
    } else if (target[0].status === "in progress") {
      status = "under review";
    } else if (target[0].status === "under review") {
      status = "completed";
    }

    let updatedTask = {
      date: target[0].date,
      title: target[0].title,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: status,
    };
    setTasks([...updatedList, updatedTask]);
  };

  const rollbackStatus = (taskID) => {
    let target = tasks.filter((task) => task.date === taskID);
    let updatedList = tasks.filter((task) => task.date !== taskID);
    let status = "";

    if (target[0].status === "backlog") {
      status = "cancelled";
    } else if (target[0].status === "in progress") {
      status = "backlog";
    } else if (target[0].status === "under review") {
      status = "in progress";
    } else if (target[0].status === "completed") {
      status = "under review";
    } else if (target[0].status === "cancelled") {
      status = "backlog";
    }

    let updatedTask = {
      date: target[0].date,
      title: target[0].title,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: status,
    };
    setTasks([...updatedList, updatedTask]);
  };

  const cancelTask = (taskID) => {
    let target = tasks.filter((task) => task.date === taskID);
    let updatedList = tasks.filter((task) => task.date !== taskID);

    let updatedTask = {
      date: target[0].date,
      title: target[0].title,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: 'cancelled',
    };
    setTasks([...updatedList, updatedTask]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateStatus, rollbackStatus, cancelTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => useContext(TaskContext);

export { TaskProvider, useTaskContext };