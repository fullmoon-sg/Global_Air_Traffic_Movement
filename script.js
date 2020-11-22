
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


async function getFlightData(){
    let response = await axios.get("https://fullmoon_sg:sfh2298g@opensky-network.org/api/states/all");
    return response.data.states
}

async function addFlightMarkers(map)
{
let flight = await getFlightData();

//restricted to 10 aircraft to avoid overall the network during development phase
 for (i = 0; i < 10; i++)
 {
       L.marker([flight[i][6],flight[i][5]], {
         icon : myIcon = L.icon({
          iconUrl: "images/aircraft.png",
          iconSize : [50,40],
          iconAnchor : [25,16]
          })}).addTo(map).bindPopup(flight[i][1]);  
        
      //  console.log([flight[i][6],flight[i][5]]);
      
 }
  
   //  console.log(flight.length);
   let fNumber = document.querySelector("#f-number");
   let fAlt = document.querySelector("#f-Alt");
   let fSpeed = document.querySelector("#f-speed");

   function onMapClick(e) {
    console.log("Activited")
   fNumber.value = flight[1][1]; //assign flight number
   fAlt.value = ((flight[1][13] * 3.3).toFixed(0) + " Ft");    //convert metres to feet for height
   fSpeed.value = (((flight[i][9])*3600/1000).toFixed(0) + " km/h"); //convert speed to km/h
   console.log("Still Aviation")
  }  

   map.on('click', onMapClick);
   
    // console.log(flight[10][10]);
}
addFlightMarkers(map);

//---------------- Login query-------------

document.querySelector("#login").addEventListener('click', function(){
document.querySelector(".login-form").style.display = "flex";
})

document.querySelector(".close").addEventListener('click',function(){
  document.querySelector(".login-form").style.display = "none";
})

