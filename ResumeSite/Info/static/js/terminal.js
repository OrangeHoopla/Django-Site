
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Hours of My Life"
    },
    legend: {
      maxWidth: 500,
      itemWidth: 80
    },
    data: [
    {
      type: "pie",
      showInLegend: true,
      radius: 120,
      legendText: "{indexLabel}",
      dataPoints: [
        { y: 200, indexLabel: "Work" },
        { y: 350, indexLabel: "Sleep" },
        { y: 150, indexLabel: "Internet" },
        { y: 100, indexLabel: "Chores"},
        { y: 80, indexLabel: "Driving" },
        { y: 300, indexLabel: "Coding"},
        { y: 12, indexLabel: "Bathroom"},
        { y: 6, indexLabel: "Misc."}
      ]
    }
    ]
  });
chart.render();

var chart2 = new CanvasJS.Chart("Time", {
  animationEnabled: true,
  
  title:{
    text:" Locations of My Life"
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
      
      { y: 28, label: "Class" },
      { y: 29, label: "Misc" },
      { y: 52, label: "The Booth(APO)" },
      { y: 103, label: "Library(Marston)" },
      { y: 134, label: "Apartment" }
    ]
  }]
});
chart2.render();

var value = Math.floor(Math.random() * PhotoData.length);
document.getElementById("what").innerHTML = `${PhotoData[value].what}`
document.getElementById("context").innerHTML = `${PhotoData[value].context}`
document.getElementById("context2").innerHTML = `<img id="image" src="/static/images/${PhotoData[value].image}" style="width:100%" >`
}







                                  


