import dbConnect from "@/_lib/db";
import { getTasks } from "@/actions/action";
import TaskList from "@/components/task-list";
import Image from "next/image";

export default async function Home() {
  await dbConnect();
  const tasks = getTasks();
  console.table(tasks);

  return (
    <main className="pt-8 px-5 flex flex-col">
      <h1 className="text-2xl font-bold">Welcome Back!</h1>
      <p>You have x tasks pending.</p>
      <TaskList />
    </main>
  );
}
