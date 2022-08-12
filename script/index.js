// Scroll Bar Change Color
function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 30) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeBg);

// -----------------------------------------------------------------------------------
//Filters DropDown Search Section
var x, i, j, l, ll, selElmnt, a, b, c;
/*Find class with 'selector'*/
x = document.getElementsByClassName("selector");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*For all element, create new div to choose*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*For all element, Create new Div to fill with option*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*For every option in Select element real
     Create new Div as option item*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*If it click, Update the real box select and item has been choose*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*If select box has clicked, close the other select box,
       and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*Function will close all the select box in document, except the curent select box*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*If user click anyewhere out of select box, then close all the select box*/
document.addEventListener("click", closeAllSelect);

// -----------------------------------------------------------------------------------
// Chart Transaction Start
var xValues = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var yValues = [
  6.4, 6.6, 6.2, 6.1, 5.8, 5.5, 4.9, 5.3, 5.5, 6.7, 6, 5.4, 5.9, 5.3,
];

new Chart("chartTransaction", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
        backgroundColor: "rgba(217, 83, 79, 1)",
        borderColor: "rgba(217, 83, 79, 1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 4, max: 7 } }],
    },
  },
});
// Chart Transaction End

// -----------------------------------------------------------------------------------
// TVL/TVC Section Start
var xValues = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var yValues = [
  10.7, 10.8, 10.9, 11, 11.2, 11, 11.2, 11.4, 11.3, 11.3, 11.2, 11.1, 11.1,
  10.8,
];

var x2Values = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var y2Values = [
  46.7, 46.8, 46.7, 47, 46.7, 47.2, 47, 47.1, 47.1, 47.3, 47.2, 47.3, 46.8,
  46.9,
];

// TVL Elemenet Chart
new Chart("chartTVL", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
        backgroundColor: "rgb(37, 94, 240)",
        borderColor: "rgb(37, 94, 240)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 9.6, max: 12 } }],
    },
  },
});

// TVC Element Chart
new Chart("chartTVC", {
  type: "line",
  data: {
    labels: x2Values,
    datasets: [
      {
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
        backgroundColor: "rgb(217, 83, 79)",
        borderColor: "rgb(217, 83, 79)",
        data: y2Values,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 45.6, max: 48 } }],
    },
  },
});

// Hide/Show Toggle TVL/TVC
function hideTVC() {
  var x = document.getElementById("tvc2-section");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function showTVC() {
  var y = document.getElementById("tvc2-section");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "block";
  }
}

// TVL/TVC Section End

// -----------------------------------------------------------------------------------
// Stablecoins Section Start
var chartStablecoins = document
  .getElementById("chartStablecoins")
  .getContext("2d");
var myChart = new Chart(chartStablecoins, {
  type: "bar",
  data: {
    labels: [
      "14 Jul",
      "15 Jul",
      "16 Jul",
      "17 Jul",
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
    ],
    datasets: [
      {
        label: "USDT",
        data: [
          6.5, 7.1, 4.8, 4.3, 8.1, 8.1, 7.6, 7.3, 5, 4, 7.5, 7.8, 7.1, 4.9,
        ],
        backgroundColor: "rgb(77,191,161)",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
// Stablecoins Section End

// -----------------------------------------------------------------------------------
// Account Section Start
// Function Toggle Button Accounts
function hideNewAccount() {
  var xNewAccount = document.getElementById("newAccountSection");
  if (xNewAccount.style.display === "block") {
    xNewAccount.style.display = "none";
  } else {
    xNewAccount.style.display = "none";
  }
}

function showNewAccount() {
  var yNewAccount = document.getElementById("newAccountSection");
  if (yNewAccount.style.display === "none") {
    yNewAccount.style.display = "block";
  } else {
    yNewAccount.style.display = "block";
  }
}

var xValuesAccounts = [
  "14 Jul",
  "15 Jul",
  "16 Jul",
  "17 Jul",
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
];

// Chart New Accounts
new Chart("chartAccountsNew", {
  type: "line",
  data: {
    labels: xValuesAccounts,
    datasets: [
      {
        data: [
          2.8, 2.8, 2.6, 2.3, 2.6, 2.7, 3.5, 2.8, 2.7, 2.7, 2.6, 2.9, 2.8, 2.9,
        ],
        borderColor: "rgb(217, 83, 79)",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
      {
        data: [
          0.14, 0.15, 0.14, 0.15, 0.13, 0.13, 0.14, 0.144, 0.16, 0.13, 0.13,
          0.15, 0.14, 0.14,
        ],
        borderColor: "blue",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

// Chart Total Accounts
new Chart("chartAccountsTotal", {
  type: "line",
  data: {
    labels: xValuesAccounts,
    datasets: [
      {
        data: [
          102, 103, 103.2, 103.4, 103, 103, 103.1, 103.7, 104, 104.2, 104.4,
          104, 104.3, 104,
        ],
        borderColor: "rgb(217, 83, 79)",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});
// Account Section End

// -----------------------------------------------------------------------------------
// Resources Section Start\
// Function Toggle Button Resources
function hideConsumeResources() {
  var xNewResources = document.getElementById("consumeResourcesSection");
  if (xNewResources.style.display === "block") {
    xNewResources.style.display = "none";
  } else {
    xNewResources.style.display = "none";
  }
}

function showConsumeResources() {
  var xNewResources = document.getElementById("consumeResourcesSection");
  if (xNewResources.style.display === "none") {
    xNewResources.style.display = "block";
  } else {
    xNewResources.style.display = "block";
  }
}

var xValuesResources = [
  "14 Jul",
  "15 Jul",
  "16 Jul",
  "17 Jul",
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
];

// Chart Consumption Resources
new Chart("chartResourcesConsume", {
  type: "line",
  data: {
    labels: xValuesResources,
    datasets: [
      {
        data: [
          32.6, 30.2, 28, 35.3, 34.9, 33.1, 32.7, 32.6, 30.9, 29.4, 35.8, 35.1,
          33.9, 33.3,
        ],
        borderColor: "rgb(217, 83, 79)",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
      {
        data: [
          2, 1.9, 1.7, 1.9, 1.9, 2.3, 2.1, 1.9, 2, 1.8, 1.9, 1.9, 1.9, 1.7,
        ],
        borderColor: "blue",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

// Chart Cost Resources
new Chart("chartResourcesTotal", {
  type: "line",
  data: {
    labels: xValuesResources,
    datasets: [
      {
        data: [
          0.013, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003, 0.003,
          0.003, 0.005, 0.004, 0.004,
        ],
        borderColor: "rgb(217, 83, 79)",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
      {
        data: [
          0.46, 0.47, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46,
          0.44, 0.46, 0.46, 0.45, 0.46,
        ],
        borderColor: "blue",
        fill: false,
        lineTension: 0.4,
        borderWidth: 7,
        pointBorderWidth: 1,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});
// Resources Section End

// -----------------------------------------------------------------------------------
// Triggers Section Start
// Function Toggle Button Triggers
function hideCallsTriggers() {
  var xNewResources = document.getElementById("callsTriggersSection");
  if (xNewResources.style.display === "block") {
    xNewResources.style.display = "none";
  } else {
    xNewResources.style.display = "none";
  }
}

function showCallsTriggers() {
  var xNewResources = document.getElementById("callsTriggersSection");
  if (xNewResources.style.display === "none") {
    xNewResources.style.display = "block";
  } else {
    xNewResources.style.display = "block";
  }
}

// Chart Calls Triggers
var myChartTriggersCalls = document
  .getElementById("chartTriggersCalls")
  .getContext("2d");
var chartsTriggerCall = new Chart(myChartTriggersCalls, {
  type: "bar",
  data: {
    labels: [
      "14 Jul",
      "15 Jul",
      "16 Jul",
      "17 Jul",
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
    ],
    datasets: [
      {
        label: "Number of Calls",
        data: [
          1.5, 1.3, 1.2, 1.6, 1.6, 1.5, 1.5, 1.4, 1.3, 1.6, 1.6, 1.5, 1.5, 1.3,
        ],
        backgroundColor: "#d9534f",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Chart Triggers Accounts
var myChartTriggersAccs = document
  .getElementById("chartTriggersAccs")
  .getContext("2d");
var chartsTriggerAccs = new Chart(myChartTriggersAccs, {
  type: "bar",
  data: {
    labels: [
      "14 Jul",
      "15 Jul",
      "16 Jul",
      "17 Jul",
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
    ],
    datasets: [
      {
        label: "Calling Accounts",
        data: [372, 335, 390, 390, 393, 395, 385, 371, 345, 406, 405, 383, 365],
        backgroundColor: "#d9534f",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
// Triggers Section End

// Staking Section Start
var barChartStaking = {
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

var chartOptionsStaking = {
  responsive: true,
  legend: {
    position: "top",
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

var chartShowStaking = document
  .getElementById("chartsStakingHome")
  .getContext("2d");
window.myBar = new Chart(chartShowStaking, {
  type: "bar",
  data: barChartStaking,
  options: chartOptionsStaking,
});
// Staking Section End
