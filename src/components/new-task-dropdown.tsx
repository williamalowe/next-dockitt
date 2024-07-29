"use client";

import { useEffect, useState } from "react";
import { BsDashLg, BsPlus } from "react-icons/bs";
import NewTaskForm from "./new-task-form";
import { AnimatePresence, motion } from "framer-motion";
import { useTask } from "@/context/task-context";

export default function NewTaskDropdown({ status }: { status: string }) {
  const [showForm, setShowForm] = useState(false);
  const { tasks } = useTask();

  useEffect(() => {
    setShowForm(false);
  }, [tasks]);

  return (
    <>
      <button
        className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-xl rounded-md dark:bg-zinc-200 dark:text-zinc-900/80 hover:scale-[1.025] transition"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? <BsDashLg /> : <BsPlus />}
      </button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{
              opacity: 0,
              y: -16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
          >
            <NewTaskForm taskStatus={status} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
