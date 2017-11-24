let lineChart;

function hourly(){
  lineChart.destroy();
  const ctx = document.getElementById('line-chart');
  lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['00:00-02:59', '03:00-05:59', '06:00-08:59', '09:00-11:59', '12:00-14:59', '15:00-17:59', '18:00-20:59', '21:00-23:59'],
    datasets: [{
      label: 'Hourly',
      data: [70, 5, 3, 20, 15, 30, 60, 70],
      backgroundColor : 'rgba(149, 86, 160, .2)',
      lineTension: 0, 
      borderColor: 'rgb(149, 86, 160)',
      borderWidth: 1,
      pointStyle: 'circle',
      radius: 5,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2
    }]

  },
  options:{
            scales: {
                yAxes : [{
                    ticks : {
                        max: 100,
                    min: 0,
                    stepSize: 10
                    }
                }]
            },
            legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
            },
            responsive: true

        }
});

}

function daily(){
    lineChart.destroy();
    const ctx = document.getElementById('line-chart');
    lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Daily',
        data: [40, 50, 70, 30, 120, 90, 150],
        backgroundColor : 'rgba(149, 86, 160, .2)',
        lineTension: 0, 
        borderColor: 'rgb(149, 86, 160)',
        borderWidth: 1,
        pointStyle: 'circle',
        radius: 5,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2
      }]

    },
    options:{
              scales: {
                  yAxes : [{
                      ticks : {
                          max: 200,
                      min: 0,
                      stepSize: 20
                      }
                  }]
              },
              legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          responsive: true
          }
  }); 
}

function weekly(){
  const ctx = document.getElementById('line-chart');
  lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['', '16-22', '23-29', '30-5', '6-12', '13-29', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      label: 'Weekly',
      data: [500, 1000, 1500, 1250, 1750, 1250, 1500, 1250, 1630, 2000, 1750, 2000],
      backgroundColor : 'rgba(149, 86, 160, .2)',
      lineTension: 0, 
      borderColor: 'rgb(149, 86, 160)',
      borderWidth: 1,
      pointStyle: 'circle',
      radius: 5,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2
    }]

  },
  options:{
            scales: {
                yAxes : [{
                    ticks : {
                        max: 2500,
                    min: 500,
                    stepSize: 500
                    }
                }]
            },
            legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        responsive: true
        }
  }); 
}

function monthly(){
    lineChart.destroy();
    const ctx = document.getElementById('line-chart');
    lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Monthly',
        data: [200, 300, 100, 400, 600, 900, 500, 1300, 1500, 800, 400, 200],
        backgroundColor : 'rgba(149, 86, 160, .2)',
        lineTension: 0, 
        borderColor: 'rgb(149, 86, 160)',
        borderWidth: 1,
        pointStyle: 'circle',
        radius: 5,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2
      }]

    },
    options:{
              scales: {
                  yAxes : [{
                      ticks : {
                          max: 2000,
                      min: 0,
                      stepSize: 200
                      }
                  }]
              },
              legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          responsive: true
          }
  }); 
}

weekly();

//Removes or adds active class to chart selector buttons
  const divChartButtons = document.getElementById("line-chart-buttons");
  const buttons = divChartButtons.children;
  divChartButtons.addEventListener('click', (event) => {
    for(let i=0; i<buttons.length; i++){
      buttons[i].classList.remove("active");
    }
    event.target.className = "active";
  });

