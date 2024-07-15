import BarChart from "@/components/bar-chart";
import DoughnutChart from "@/components/donut-chart";
import Tally from "@/components/tally";
import UpdatesDemo from "@/components/updates-demo";

export default function Dashboard() {
  return (
    <main className="flex-1 py-8 px-5 flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex-1 flex flex-col md:grid grid-cols-2 grid-rows-2 gap-2">
        <div className="rounded-md">
          <Tally />
        </div>
        <div className="min-h-[200px] border rounded-md dark:border-zinc-800">
          <DoughnutChart />
        </div>
        <div className="min-h-[200px] border rounded-md dark:border-zinc-800 flex overflow-hidden">
          <BarChart />
        </div>
        <div className="border rounded-md dark:border-zinc-800">
          <UpdatesDemo />
        </div>
      </div>
    </main>
  )
}
