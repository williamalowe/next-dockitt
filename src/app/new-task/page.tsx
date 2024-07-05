import { addTask } from "@/actions/action";
import NewTaskForm from "@/components/new-task-form";
import dbConnect from "@/lib/db";

export default async function NewTask() {
  await dbConnect();
  
  return (
    <main className="pt-8 px-5 flex flex-col">
      <h1 className="text-2xl font-bold">Add New Card</h1>
      <NewTaskForm 
        handleSubmit={addTask}
      />
    </main>
  )
}
