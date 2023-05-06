import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" 
    },
    title: {
      display: true,
      text: "DOSHBORD OF SUTDENT"
    }
  }
};

const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sudent %",
      data: [40, 50, 35, 80, 55, 90],
      backgroundColor: "#1976d2"
    }
  ]
};

export function DashBord(){
  return <Bar options={options} data={data} />;
}
