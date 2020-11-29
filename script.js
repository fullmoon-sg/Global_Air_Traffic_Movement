//Display a map with center position as 0,0
let map = L.map('map').setView([0,0], 3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 4,
    maxZoom: 10,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

//To display 10 icons to indicate airport location in the map
axios.get("admin/airport_location.json").then(function(response){
  airportLoc= response.data;
 for (let i=0; i < airportLoc.length; i++)
 {
  L.marker([airportLoc[i]["lat"],airportLoc[i]["long"]]).addTo(map).bindPopup(airportLoc[i]["airport"]); 
 }
})

//Extract flightdata from the API
async function getFlightData(){
    let response = await axios.get("https://fullmoon_sg:sfh2298g@opensky-network.org/api/states/all");
    return response.data.states
}

//Display airplane marker on map and also to display the flight data when clicked upon
async function addFlightMarkers(map)
{
 let flight = await getFlightData();
//Loading time about 10seconds
        let fDate = document.querySelector("#f-date");
        let fStatus = document.querySelector("#f-status");
        let fNumber = document.querySelector("#f-number");
        let fDepAirport = document.querySelector("#f-De-airport");
        let fArrAirport = document.querySelector("#f-Arr-airport");
        let fAlt = document.querySelector("#f-Alt");
        let fSpeed = document.querySelector("#f-speed");
        let fDirection = document.querySelector("#f-Dir");  
        
//restricted to 20 aircraft to avoid overall the network during development phase
 for (let i = 0; i < 20; i++)
   {   
         let marker = L.marker([flight[i][6],flight[i][5]],{rotationAngle : 180,
         icon : L.icon({
         iconUrl: "images/aircraft.png",
         iconSize : [50,40],
         iconAnchor : [25,16],
         iconAngle : 180,
        })}) 
        marker.addTo(map).bindPopup(flight[i][1]);   
       
      //Click on any icon will display on the icon flight details into the flight label
        marker.addEventListener('click',function(){ 
        fDate.value = departureDate(flight[i][3]);
        fStatus.value = currentTimeOverPosition(flight[i][3])
        fDepAirport.value = flight[i][2]; //Display departure country
        fArrAirport.value = "Inform not available"
        fNumber.value = flight[i][1]; //assign flight number
        fAlt.value = ((flight[i][13] * 3.3).toFixed(0) + " Ft");    //convert metres to feet for height
        fSpeed.value = (((flight[i][9])*3600/1000).toFixed(0) + " km/h"); //convert speed to km/h  
        fDirection.value = (((flight[i][10]).toFixed(0)) + " Degree"); //Display current heading
   })
   }
  }

addFlightMarkers(map);

function currentTimeOverPosition(x){
  // The unix time stamp is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix time stamp is merely the number of seconds between a particular date and the Unix Epoch.
  let unix_timestamp = x;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();     
  // Will display time in 10:30:23 format
  return formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

function departureDate(x){
  //Similar function to get currentTimeOverPosition
  var a = new Date(x * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  return time = date + ' ' + month + ' ' + year ;
}
//---------------- Login query-------------
//Display login menu
document.querySelector("#login").addEventListener('click', function(){
document.querySelector(".login-form").style.display = "flex";
})
// Click the 'X' to close the login menu
document.querySelector(".close").addEventListener('click',function(){
document.querySelector(".login-form").style.display = "none";
})
//Authenticate userid and password.
let subMit = document.querySelector("#submit");
let validation = {};
subMit.addEventListener('click', function(){
let userId = document.querySelector("#name").value;
let passWord = document.querySelector("#password").value;
let signIn = document.querySelector("#login")
axios.get("admin/users.json").then(function(response)
{
    validation = response.data;
    
    if ( ((validation.index1.userid === userId) && (validation.index1.password === passWord)) ||
       ((validation.index2.userid === userId) && (validation.index2.password === passWord)))
      {         
        document.querySelector(".login-form").style.display = "none";
        signIn.innerHTML = "Hello" + " " + userId;
      }
       else
       {
        
        document.querySelector("#submit").style.backgroundColor = "red";
        document.querySelector("#remarks").innerHTML = "Unable to Check-In. Try again.";
       }
})
})

