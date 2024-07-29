"use client";

import { useState } from "react";
import { BsDashLg, BsPlus } from "react-icons/bs";
import NewTaskForm from "./new-task-form";
import { AnimatePresence, motion } from "framer-motion";

export default function NewTaskDropdown() {
  const [showForm, setShowForm] = useState(false);
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
          <motion.div>
            <NewTaskForm taskStatus="" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
