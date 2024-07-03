import TaskTable from "@/components/task-table";

export default function Home() {
  return (
    <main className="pt-8 px-5 flex flex-col">
      <h1 className="font-bold text-xl">Welcome back!</h1>
      <p className="italic">You have X tasks pending.</p>
      <TaskTable />
    </main>
  );
}
