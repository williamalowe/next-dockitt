"use client"

import { useTask } from '@/context/task-context';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { tasks } = useTask();

  const data = {
    labels: ['Backlog', 'In Progress', 'Under Review', 'Completed'],
    datasets: [
      {
        label: '# of Tasks',
        data: [
          tasks.filter((task) => task.status === 'backlog').length,
          tasks.filter((task) => task.status === 'in progress').length,
          tasks.filter((task) => task.status === 'under review').length,
          tasks.filter((task) => task.status === "completed").length,
        ],
        backgroundColor: [
          '#e11d489a',
          '#ea580c9a',
          '#9333ea9a',
          '#16a34a9a'
        ],
        borderWidth: 0,
        hoverOffset: 10
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Doughnut 
        data={data}
        width={"100%"}
        options={{ 
          maintainAspectRatio: false,
          responsive: true
        }}
      />
    </div>
  )
}

export default DoughnutChart