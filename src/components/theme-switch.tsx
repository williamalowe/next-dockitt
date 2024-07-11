"use client";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-md text-bold bg-zinc-900 
      text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
      whileHover={{
        scale: 1.2
      }}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </motion.button>
    
  );
}
