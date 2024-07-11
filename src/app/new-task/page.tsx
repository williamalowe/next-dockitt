import NewTaskForm from "@/components/new-task-form";

export default function NewTask() {
  return (
    <main className="flex-1 pt-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">New Task</h1>
      <NewTaskForm />
    </main>
  )
}
