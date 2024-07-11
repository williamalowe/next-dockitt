import TaskList from "@/components/task-list";

export default function Home() {

  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">All Tasks <span className="ml-8 font-normal">0</span></h1>
      <TaskList />
    </main>
  );
}
