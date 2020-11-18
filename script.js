
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
    let response = await axios.get("https://fullmoon_sg:sfh2298g@opensky-network.org/api/states/all");
    return response.data.states
}
//change the aircraft icon from original pointer icon
const myIcon = L.icon({
iconUrl: "images/aircraft.png",
iconSize : [80,50],
iconAnchor : [25,16]
});

async function addFlightMarkers(map)
{
let flight = await getFlightData();
//restricted to 10 aircraft to avoid overall the network during development phase
  for (i = 0; i < 10; i++){
         L.marker([flight[i][6],flight[i][5]],{icon:myIcon}).addTo(map);
         console.log(flight[i][6],flight[i][5]);

        let callsign = document.querySelector("#f-Alt");
       //callsign.value = ((flight[0][13] * 3.3).toFixed(0) + " FT");
       if (flight[i][6],flight[i][5] == null)
       {
         callsign.value = "no information available"
       }
       else
       {
       callsign.value = ((flight[0][13] * 3.3).toFixed(0) + " Ft");    //convert metres to feet for height
       }
  }
}


addFlightMarkers(map);

