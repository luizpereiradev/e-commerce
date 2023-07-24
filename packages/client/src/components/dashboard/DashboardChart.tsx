import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
};

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels: months,
  datasets: [
    {
      label: "Sales",
      data: [120, 140, 160, 180, 200, 220, 240],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Visitors",
      data: [2000, 2200, 2500, 2300, 2400, 2700, 2600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function DashboardChart() {
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="py-3 px-4 w-max mt-4 mb-4 flex items-center bg-gray-100 rounded-xl">
          <p className="text-xs font-medium leading-none text-center text-gray-500">
            Show:
          </p>
          <div className="px-2 border-r border-gray-300 cursor-pointer">
            <p className="text-xs leading-none text-gray-800">Hour</p>
          </div>
          <div className="px-2 border-r border-gray-300 cursor-pointer">
            <p className="text-xs leading-none text-gray-800">Day</p>
          </div>
          <div className="px-2 border-r border-gray-300 cursor-pointer">
            <p className="text-xs leading-none text-gray-800">Week</p>
          </div>
          <div className="px-2 border-r border-gray-300 cursor-pointer">
            <p className="text-xs leading-none text-gray-800">Month</p>
          </div>
          <div className="px-2 cursor-pointer">
            <p className="text-xs font-bold leading-none text-indigo-700">
              Year
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-400" />
            <p className="w-20 text-xs leading-none ml-1.5">Visitors</p>
          </div>
          <div className="flex items-center ml-4">
            <div className="w-4 h-4 bg-red-400 rounded-full" />
            <p className="w-20 text-xs leading-none ml-1.5">Sales</p>
          </div>
        </div>
      </div>
      <div>
        <Line options={options} data={data} />
      </div>
    </>
  );
}
