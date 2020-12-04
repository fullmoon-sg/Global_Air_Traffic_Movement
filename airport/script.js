let airport = document.querySelector("#airport");
let airportName = document.querySelector("#airport-title");
let changeText = document.querySelector("#airport-info");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let home = document.querySelector("#middle");

let backgroundImage = new Array(
    "images/changi-airport.jpg",
    "images/hk-airport.jpg",
    "images/narita-airport.jpg",
    "images/sfo-airport.jpg",
);

let i = 0;
let airportTitle;
let textLinkToImage;
//on the start, the scroll left icon should not appear so that user knows there is no scrolling to the left
prev.style.display = "none";
//Retrieve data from both json files
axios.get("airport_details/airportName.json").then(function(response){
    airportTitle = response.data;
    axios.get("airport_details/airportDesc.json").then(function(response){
    textLinkToImage = response.data;
    })
})
//click prev to change picture, airport name and description
prev.addEventListener('click', function(){
  if (i > 0)
  {
        airport.style.backgroundImage = 'url("' + backgroundImage[i-1] +'")';
        airportName.innerHTML = airportTitle[i-1];
        changeText.innerHTML = textLinkToImage[i-1];
        next.style.display = "block";
        i--;
  }
  if (i===0)
  {
        prev.style.display = "none";
  }
})
//Click home icon to return back to homepage
home.addEventListener('click', function(){
        window.location.assign("../index.html");
})

//Click next to change picture, airport name and description
next.addEventListener('click', function(){
  if(i < 3)
  {
        airport.style.backgroundImage = 'url("' + backgroundImage[i+1] +'")';
        airportName.innerHTML = airportTitle[i+1];
        changeText.innerHTML = textLinkToImage[i+1];
        prev.style.display = "block";
        i++;
  }
  if( i=== 3)
  {
        next.style.display = "none";
  }
})



