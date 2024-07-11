import TaskList from "@/components/task-list";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { exampleTasks } from "@/lib/testData";

export default function Home() {

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">All Tasks <span className="ml-8 font-normal">{exampleTasks.length}</span></h1>
      <TaskList 
        tasks={exampleTasks}
      />
      <Link href="/new-task" className="flex items-center justify-center bg-zinc-900 text-zinc-50/80 p-1 text-xl rounded-md dark:bg-zinc-50 dark:text-zinc-900/80 hover:scale-[1.025] transition"><BsPlus /></Link>
    </main>
  );
}
