import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'], // This will be dynamic based on data
  datasets: [
    {
      label: 'Weight Progress',
      data: [65, 59, 80, 81, 56], // This will be dynamic based on data
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const ProgressChart = () => {
  return <Line data={data} />;
};

export default ProgressChart;