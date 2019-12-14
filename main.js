const BASE_URL = "https://zagster-service.herokuapp.com"

//$(updateView)
$(updateView)

var extractData=[] 


function updateView() {
 $.when ($.getJSON(BASE_URL + "/rides/count/per_hour" , processData),
 ).then (updateGraph);
}
//this function extracts information from the JSON object called Data and puts the result in the extractData array
function processData(data) {



  
  extractData.push(data[0])
  extractData.push(data[1])
  extractData.push(data[2])
  extractData.push(data[3])
  extractData.push(data[4])
  extractData.push(data[5])
  extractData.push(data[6])
  extractData.push(data[7])
  extractData.push(data[8])
  extractData.push(data[9])
  extractData.push(data[10])
  extractData.push(data[11])
  extractData.push(data[12])
  extractData.push(data[13])    
  extractData.push(data[14])
  extractData.push(data[15])
  extractData.push(data[16])
  extractData.push(data[17])
  extractData.push(data[18])
  extractData.push(data[19])
  extractData.push(data[20])
  extractData.push(data[21])
  extractData.push(data[22])
  extractData.push(data[23])
  extractData.push(data[24])


  console.log("my data is "+extractData)  
}

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides); 
//   console.log
// }

function updateGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM' , '7:00 PM' , '8:00 PM' , '9:00 PM', '10:00 PM', '11:00 PM' ],
        datasets: [{
            label: 'Frequency of rentals',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: extractData
        }]
    },

    // Configuration options go here
    options: {}
});
}
