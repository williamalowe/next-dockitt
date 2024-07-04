import TaskList from "@/components/task-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-8 px-5 flex flex-col">
      <h1 className="text-2xl font-bold">Welcome Back!</h1>
      <p>You have x tasks pending.</p>
      <TaskList />
    </main>
  );
}
