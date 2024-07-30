"use client"

import { useTask } from "@/context/task-context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { tasks } = useTask();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["Backlog", "In Progress", "Under Review", "Completed"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tasks Overview",
        data: [
          tasks.filter((task: any) => task.status === "backlog").length,
          tasks.filter((task: any) => task.status === "in progress").length,
          tasks.filter((task: any) => task.status === "under review").length,
          tasks.filter((task: any) => task.status === "completed").length,
        ],
        backgroundColor: [
          '#e11d489a',
          '#ea580c9a',
          '#9333ea9a',
          '#16a34a9a'
        ],
        borderColor: [
          '#e11d48',
          '#ea580c',
          '#9333ea',
          '#16a34a'
        ],
      },
    ],
  };
  return (
    <div className="flex-1 flex items-center justify-center ">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;