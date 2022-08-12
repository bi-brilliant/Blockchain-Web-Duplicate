var barChartData = {
  labels: [
    "18 Jul",
    "19 Jul",
    "20 Jul",
    "21 Jul",
    "22 Jul",
    "23 Jul",
    "24 Jul",
    "25 Jul",
    "26 Jul",
    "27 Jul",
    "28 Jul",
    "29 Jul",
    "30 Jul",
    "31 Jul",
  ],

  datasets: [
    {
      label: "Total TRX Staked",
      backgroundColor: "#d9534f",
      data: [
        92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4, 92.4,
        92.4, 92.4,
      ],
    },
    {
      label: "TRX Circulating Supply",
      backgroundColor: "#6610f2",
      data: [
        44.3, 44.4, 44.4, 44.3, 44.3, 44.3, 44.7, 47, 49, 44.2, 43, 44.2, 50,
        39,
      ],
    },
  ],
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "top",
  },
  title: {
    display: true,
    text: "Chart.js Bar Chart",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var ctx = document.getElementById("chartsStakingHome").getContext("2d");
window.myBar = new Chart(ctx, {
  type: "bar",
  data: barChartData,
  options: chartOptions,
});
