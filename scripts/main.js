import { data } from './data.js';
const ctx = document.getElementById('chart-canvas');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(row => row.day),
    datasets: [
      {
        data: data.map(row => row.amount),
        backgroundColor: '#ec775f',
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        showLine: false,
        line: { pointRadius: 0}
      }
    ]
  },
  options: {
    showLine: false,
    layout: {
      autoPadding: true
    },
    elements: {
      point: {
        radius: 0 // default to disabled in all datasets
      }
    },
    scales: {
      x: {},
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#ec775f',
          font: 18
        }
      }
    }
  }
});