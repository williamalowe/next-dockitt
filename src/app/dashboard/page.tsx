import Tally from "@/components/tally";

export default function Dashboard() {
  return (
    <main className="flex-1 py-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="rounded-md"><Tally /></div>
        <div className="border rounded-md   dark:border-zinc-800"></div>
        <div className="border rounded-md   dark:border-zinc-800"></div>
        <div className="border rounded-md   dark:border-zinc-800"></div>
      </div>
    </main>
  )
}
