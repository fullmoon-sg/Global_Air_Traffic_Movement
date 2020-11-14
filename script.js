
//set deafault map as centre
let map = L.map('map').setView([0,0], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

async function getFlightData(){
    let response = await axios.get("https://opensky-network.org/api/states/all");
    return response.data.states
}
//change the aircraft icon from original pointer icon
const myIcon = L.icon({
    iconUrl: "images/aircraft.png",
    iconSize : [50,30],
    iconAnchor : [25,16]
});

async function addFlightMarkers(map)
{
let flight = await getFlightData();
// let lat = flight[0][6];
//let long = flight[0][5];
//console.log(lat,long);
 //   for (let f of flight)
  //  {
       // for (let i =0; i < flight.length;i++)
     //   {
         L.marker([flight[1][6],flight[1][5]],{icon: myIcon}).addTo(map);
  
     //   }
 //   }
}



addFlightMarkers(map);