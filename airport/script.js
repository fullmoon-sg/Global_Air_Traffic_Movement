let airport = document.querySelector("#airport");
let airportName = document.querySelector("#airport-title");
let changeText = document.querySelector("#airport-info");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let home = document.querySelector("#middle")

let backgroundImage = new Array(
 "images/changi-airport.jpg",
 "images/hk-airport.jpg",
 "images/narita-airport.jpg",
 "images/sfo-airport.jpg",
);

let airportTitle = new Array("Changi International Airport", "Hong Kong International Airport","Narita International Airport","San Francisco International Airport");

let textLinkToImage = new Array(
  "Changi Airport serves more than 100 airlines flying to 380 cities in around 100 countries and territories worldwide, as of 31 December 2019. About 7,400 flights arrive or depart at Changi each week – about one every 80 seconds.<br><br>For the 2019 full-year figures published by the airport, the airport handled 68,300,000 passengers (a 4.0% increase over the previous year), the most in its 38-year history.This made it the seventh busiest airport by international passenger traffic in the world and the third busiest in Asia. In December 2019, Changi Airport registered a total of 6.41 million passenger movements, the highest the airport has ever achieved in a month since it opened in 1981. <br><br>Its daily traffic movement record was also broken on 20 December 2019, with 226,692 passengers passing through during that day. In addition to being an important passenger hub, the airport is also one of the busiest cargo airports in the world, handling 2.01 million tonnes of cargo in 2019. The total number of commercial aircraft movements decreased by 1.0% from the previous year to 382,000 in 2019.The airport has won over 620 awards since its opening, including 28 Best Airport awards in 2019 alone. Changi Airport's efforts to mitigate the effects of ageing infrastructure include continual physical upgrades to its existing terminals and building new facilities to maintain its high standards in airport service quality.", "Hong Kong International Airport is Hong Kong's main airport, built on reclaimed land on the island of Chek Lap Kok. The airport is also referred to as Chek Lap Kok International Airport or Chek Lap Kok Airport, to distinguish it from its predecessor, the former Kai Tak Airport. Having been in commercial operation since 1998, Hong Kong International Airport is an important regional trans-shipment centre, passenger hub and gateway for destinations in China (with 45 destinations) and the rest of Asia. <br><br>The airport is the world's busiest cargo gateway and one of the world's busiest passenger airports. It is also home to one of the world's largest passenger terminal buildings (the largest when opened in 1998). The airport is operated by the Airport Authority Hong Kong 24 hours a day and is the primary hub for Cathay Pacific , Hong Kong Airlines, HK Express and Air Hong Kong (cargo carrier). The airport is one of the hubs of Oneworld alliance, and also one of the Asia-Pacific cargo hubs for UPS Airlines.<br><br> It is a focus city for many airlines, including China Airlines and China Eastern Airlines. Singapore Airlines and Ethiopian Airlines both utilise Hong Kong as a stopover point for their flights. HKIA is an important contributor to Hong Kong's economy, with approximately 65,000 employees. More than 100 airlines operate flights from the airport to over 180 cities across the globe. In 2015, HKIA handled 68.5 million passengers, making it the 8th busiest airport worldwide by passenger traffic and the 3rd busiest airport worldwide by international passenger traffic.", "Narita International Airport (成田国際空港, Narita Kokusai Kūkō) (IATA: NRT, ICAO: RJAA), also known as Tokyo-Narita, formerly and originally known as New Tokyo International Airport (新東京国際空港, Shin Tōkyō Kokusai Kūkō), is an international airport serving the Greater Tokyo Area of Japan. It is located approximately 60 kilometers (37 mi) east of central Tokyo in Narita, Chiba. <br><br>Narita is the busiest airport in Japan by international passenger and international cargo traffic.In 2018, Narita had 33.4 million international passengers and 2.2 million tonnes of international cargo.[5] In 2018, Narita was also the second-busiest airport in Japan in terms of aircraft movements (after Haneda Airport in Tokyo)and the tenth-busiest air freight hub in the world.Its 4,000-meter (13,123 ft) main runway shares the record for longest runway in Japan with the second runway at Kansai International Airport in Osaka. <br><br>Narita serves as the main international hub of Japan Airlines, All Nippon Airways and Nippon Cargo Airlines, and as a hub for low-cost carriers Jetstar Japan and Peach.At Narita, air traffic movements have been controlled under various noise related operating restrictions. As a result, the airport must be closed from 00:00 (12:00am) to 06:00 (6:00am) the next day to minimize noise pollution impact around the airport.", "San Francisco International Airport (IATA: SFO, ICAO: KSFO, FAA LID: SFO) is an international airport 13 miles (21 km) south of downtown San Francisco, California, United States.It has flights to points throughout North America and is a major gateway <br>to Europe and Asia.<br><br>SFO is the largest airport in the San Francisco Bay Area and the second busiest in California, after LAX. In 2017, it was the seventh-busiest airport in the United States and the 24th-busiest in the world by passenger count.It is the fifth-largest hub for United Airlines, and it is operated in Terminal 3 and the International Terminal. SFO functions as United's primary transpacific gateway. It also serves as a hub for Alaska Airlines, which operates in Terminal 2. It is a major maintenance hub for United Airlines and houses the Louis A. Turpen Aviation Museum and Library.<br><br>The airport is owned and operated by the City and County of San Francisco, although it is technically located outside of San Francisco in unincorporated San Mateo County. Between 1999 and 2004, the San Francisco Airport Commission operated city-owned SFO Enterprises, Inc., to oversee its business purchases and operations of ventures"
)

let i = 0;

airportName.innerHTML = airportTitle[i]
changeText.innerHTML = textLinkToImage[i]

next.addEventListener('click', function(){
  if(i < 3)
  {
  airport.style.backgroundImage = 'url("' + backgroundImage[i+1] +'")';
  airportName.innerHTML = airportTitle[i+1];
  changeText.innerHTML = textLinkToImage[i+1];
  i++;

  }
})

prev.addEventListener('click', function(){
  if (i > 0)
  {
  airport.style.backgroundImage = 'url("' + backgroundImage[i-1] +'")';
  airportName.innerHTML = airportTitle[i-1];
  changeText.innerHTML = textLinkToImage[i-1];
  i--;
  }
})