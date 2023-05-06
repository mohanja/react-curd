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
      text: "DOSHBORD OF TEACHER"
    }
  }
};

const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "Teacher %",
      data: [10, 15, 5, 40, 22, 45],
      backgroundColor: "red"
    }
  ]
};

export function Dash(){
  return <Bar options={options} data={data} />;
}