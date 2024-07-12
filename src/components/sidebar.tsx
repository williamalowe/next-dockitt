"use client"
import Link from "next/link";
import {
  BsGraphDown,
  BsGrid,
  BsKanban,
  BsListCheck,
  BsPlus,
} from "react-icons/bs";
import { useTask } from "@/context/task-context";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { tasks } = useTask();
  const pathname = usePathname();
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
      count: tasks.filter((task) => task.status === "in progress")
        .length,
    },
    {
      href: "/under-review",
      title: "Under Review",
      color: "bg-purple-800",
      textColor: "text-purple-800",
      count: tasks.filter((task) => task.status === "under review")
        .length,
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
    <div
      className="m-2 bg-zinc-100/80 p-2 rounded-md w-[240px] flex flex-col gap-y-4 dark: 
    dark:bg-zinc-800/80"
    >
      <div className="flex items-center">
        <Link href="/">
          <h5 className="font-bold text-lg p-2 border rounded-md bg-zinc-900 text-zinc-50">
            dockitt.
          </h5>
        </Link>
        <button className="font-bold ml-auto opacity-80">
          <BsGrid />
        </button>
      </div>
      <div>
        <h5 className="font-bold text-sm opacity-80">Views</h5>
        <ul className="mt-2 flex flex-col gap-y-2">
          {listLinks.map((link) => (
            <li
              key={link.href}
              className={`${pathname === link.href ? "opacity-100 font-bold bg-zinc-300 dark:bg-zinc-900" : "opacity-80"} px-2 py-1 text-sm rounded-md hover:bg-zinc-300 
              dark:hover:bg-zinc-900 transition`}
            >
              <Link
                href={link.href}
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
              className={`${pathname === link.href ? "opacity-100 font-bold bg-zinc-300 dark:bg-zinc-900" : "opacity-80"} px-2 py-1 opacity-80 text-sm rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-900 
              transition`}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
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
    </div>
  );
}
