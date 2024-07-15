import { BsPersonFill } from "react-icons/bs"

export default function UpdatesDemo() {
  const updates = [
    {
      header: "User01 has updated a task",
      desc: `Task: 'Implement responsive stylings for sidebar component' has been moved to 'In Progress' state.`
    },
    {
      header: "User03 has cancelled a task",
      desc: `Task: 'Update component layout styling' has been moved to 'Cancelled' state.`
    },
    {
      header: "User02 has completed a task",
      desc: `Task: 'Implement update-demo component' has been moved to 'Completed' state.`
    },
  ]
  return (
    <div className="p-2 flex flex-col gap-y-4">
      <h3 className="font-bold">Updates (demo)</h3>
      <ul className="border p-2 rounded-md flex flex-col gap-y-2 dark:border-zinc-800">
        {
          updates.map((update, index) => 
          <li key={index} className="flex gap-x-2 items-center">
            <div className="bg-zinc-800 w-8 h-8 flex items-center justify-center text-xl text-zinc-50 rounded-full p-2 dark:bg-zinc-50 dark:text-zinc-800"><BsPersonFill /></div>
            <div className="flex-1">
              <h5 className="text-sm font-bold">{update.header}</h5>
              <p className="text-sm italic">{update.desc}</p>
            </div>
          </li>
          )
        }
      </ul>
    </div>
  )
}
