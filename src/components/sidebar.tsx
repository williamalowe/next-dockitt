"use client";
import Link from "next/link";
import {
  BsGraphDown,
  BsGrid,
  BsKanban,
  BsListCheck,
  BsPlus,
  BsX,
} from "react-icons/bs";
import { useTask } from "@/context/task-context";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const { tasks } = useTask();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  const listLinks = [
    {
      href: "/",
      title: "All Tasks",
      icon: <BsListCheck />,
    },
    {
      href: "/kanban",
      title: "Kanban View",
      icon: <BsKanban />,
    },
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <BsGraphDown />,
    },
    {
      href: "/new-task",
      title: "Add Task",
      icon: <BsPlus />,
    },
  ];
  const taskLists = [
    {
      href: "/backlog",
      title: "Backlog",
      color: "bg-rose-800",
      textColor: "text-rose-800",
      count: tasks.filter((task) => task.status === "backlog").length,
    },
    {
      href: "/in-progress",
      title: "In Progress",
      color: "bg-orange-800",
      textColor: "text-orange-800",
      count: tasks.filter((task) => task.status === "in progress").length,
    },
    {
      href: "/under-review",
      title: "Under Review",
      color: "bg-purple-800",
      textColor: "text-purple-800",
      count: tasks.filter((task) => task.status === "under review").length,
    },
    {
      href: "/completed",
      title: "Completed",
      color: "bg-green-800",
      textColor: "text-green-800",
      count: tasks.filter((task) => task.status === "completed").length,
    },
    {
      href: "/cancelled",
      title: "Cancelled",
      color: "bg-red-800",
      textColor: "text-red-800",
      count: tasks.filter((task) => task.status === "cancelled").length,
    },
  ];
  return (
    <>
      <AnimatePresence mode="popLayout">
        {!hidden && (
          <motion.div
            className="absolute md:static top-0 left-0 z-[999] w-screen md:w-[240px] h-full bg-zinc-100 p-2 rounded-md  flex flex-col gap-y-4 dark: 
      dark:bg-zinc-800"
            initial={{
              opacity: 0,
              x: -268,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -268,
            }}
            transition={{
              type: "tween",
            }}
          >
            <div className="flex items-center">
              <Link href="/">
                <h5 className="font-bold text-lg p-2 border rounded-md bg-zinc-900 text-zinc-50">
                  dockitt.
                </h5>
              </Link>
              <button
                onClick={() => setHidden(!hidden)}
                className="flex items-center justify-center font-bold ml-auto opacity-80 text-xl w-6 h-6 
                            rounded hover:bg-zinc-300 dark:hover:bg-zinc-900 transition"
              >
                <BsX />
              </button>
            </div>
            <div>
              <h5 className="font-bold text-sm opacity-80">Views</h5>
              <ul className="mt-2 flex flex-col gap-y-2">
                {listLinks.map((link) => (
                  <li
                    key={link.href}
                    className={`${
                      pathname === link.href
                        ? "opacity-100 font-bold bg-zinc-300 dark:bg-zinc-900"
                        : "opacity-80"
                    } px-2 py-1 text-sm rounded-md hover:bg-zinc-300 
                    dark:hover:bg-zinc-900 transition`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setHidden(true)}
                      className="flex items-center justify-between"
                    >
                      {link.icon} {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm opacity-80">Task List</h5>
              <ul className="mt-2 flex flex-col gap-y-2">
                {taskLists.map((link) => (
                  <li
                    key={link.href}
                    className={`${
                      pathname === link.href
                        ? "opacity-100 font-bold bg-zinc-300 dark:bg-zinc-900"
                        : "opacity-80"
                    } px-2 py-1 opacity-80 text-sm rounded-md hover:bg-zinc-300 
                   dark:hover:bg-zinc-900 
                transition`}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-x-2"
                      onClick={() => setHidden(true)}
                    >
                      <div className={`${link.color} h-4 w-4 rounded-md`}></div>{" "}
                      {link.title}{" "}
                      <span className={`${link.textColor} ml-auto`}>
                        {link.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {hidden && (
        <button
          onClick={() => setHidden(!hidden)}
          className="absolute top-1 left-1 flex items-center justify-center font-bold ml-auto opacity-80 text-xl w-6 h-6 
                            rounded hover:bg-zinc-300 dark:hover:bg-zinc-900 transition"
        >
          <BsGrid />
        </button>
      )}
    </>
  );
}
