window.onload = function () {
      
    var chart = new CanvasJS.Chart("TimeSpent", {
      animationEnabled: true,
      
      title:{
        text:"Where I Spend My Time"
      },
      axisX:{
        interval: 1
      },
      axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Hours"
      },
      data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
          { y: 3, label: "Sweden" },
          { y: 7, label: "Taiwan" },
          { y: 5, label: "Russia" },
          { y: 9, label: "Spain" },
          { y: 7, label: "Brazil" },
          { y: 7, label: "India" },
          { y: 9, label: "Italy" },
          { y: 8, label: "Australia" },
          { y: 11, label: "Canada" },
          { y: 15, label: "South Korea" },
          { y: 12, label: "Netherlands" },
          { y: 15, label: "Switzerland" },
          { y: 25, label: "Britain" },
          { y: 28, label: "Germany" },
          { y: 29, label: "The Booth" },
          { y: 52, label: "Library" },
          { y: 103, label: "Home" },
          { y: 134, label: "Apartment" }
        ]
      }]
    });
    chart.render();
     
    }