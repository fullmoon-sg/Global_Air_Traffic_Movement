Strategy
Since the starts of aviation travelling industry, air travel has been the most preferred travellers’ choices for travelling from one destination to another. 
Depending on the travellers’ destination, some travellers would need to be on a flight for as long as 16 hours before reaching their destination. During these 
long hours, the travellers’ loved ones technically have no information on their current flight position. With the development of Global Air Travel web-based 
application, the users can easily fill up this “missing information” gap by using this application to monitor and search for a particular aircraft flying around 
the world. This application provides features like close to real-time of a selected aircraft location and flight parameters, and have it displayed on their 
computer console.
UX
The opening page is partition into 3 sections. There are menu bar, map and flight data menu occupying 10%, 75% and 15% of the whole page respectively. The 
concept of this layout is to give users a good bird-view of both South America and African continents, and allow them to quickly orient and scroll to the 
region of interest without spending too much time. For the menu bar, it is located at the top of the page which are similar to popular applications like 
powerpoint and photoshop. This will allows users to instinctively know where to look for functionality selection. As for the flight data menu, it is on-purposed 
to locate it at the bottom so that users can look from top-down sequence. i.e. look at the map, select the aircraft and look down for the flight data parameters.
 For the color, the default map of light blue for sea and light green for landmass cannot be changed. As such, I have selected black menu bar and flight data 
 menu to match with light blue and sea. As for the text, I chose luminous green to represent LCD display while black colour to distinct the number from white 
 background. 
UI
The font type and size on the map cannot be change as it is part of a suite of information received from the external API leaflet map. This makes selection of
 font for the menu bar and flight data menu becomes a challenge. After doing some researches and browsing some of the popular websites, I find that the ‘Roboto’ 
 font seems to match reasonable well with leaflet map font style. In addition, the robot also represents a digital age while feature friendly and open. As a 
 backup to this font, I used the san serif font as it is commonly available on all Windows, Apple and Android platforms.

For the login page, I am trying to emulate the form to look like a First Class ticket. As most airlines would use for their first class ticket, I picked the gold 
and silver color as layout so as to make it look more elegance.  In addition, the A380 in the background represent the mightiest civilian aircraft in the world.

Scope

• To provide users with close to real-time air movement around the world.
Automatic depend surveillance-broadcast (ADS-B) is a surveillance technology in which an aircraft determines its position via satellite navigation and
 periodically broadcasts, enabling it to be tracked. Due to the long time-lapse, between ADS-B to host server and then broadcast to this application, the 
 presentation of the selected aircraft position can only be estimated location with up to 15second delay; subject to the host server traffic loading.

• To allow the users to monitor the selected aircraft parameters, these include aircraft call-sign, destination, arrival aerodrome, location and etc.
The application will leverage on the JSON data received from the host server. Using the JSON like latitude and longitude, aircraft speed, aircraft heading 
and etc, these data can be pulled and display it on the HTML. For this project, the intention to provide up to 8 data pointers for the users to consume. The 
data details are “Flight Date”, “Last Updated Position”, “Flight Number”, “Departure Airport ”, “Arrival Airport,” “Current Altitude”, “Current Speed” and 
”Current Direction”.

• To provide users with the capability to search for a particular traffic flying over a particular region
Within the JSON data file, the information on current latitude and longitudes, and current aircraft heading information, can be extracted and display it on 
the map. The HTML will then zoom in to the aircraft over a particular region.

• To provide users to search for airport information
An icon will be available on the left panel in inhibit mode. When the user login in as a member, this icon will then be active for selection. Upon selecting 
the icon, the icon will link another web page that display with a few airport names and pictures. The user can then select the airport information that they 
want to search, the airport link will connect to the actual airport website.

Structure
The application designed is based on simple and elegance. The intention is not to cluster the users with too many details or selection. As such, the application 
is split into 3 partition sections, the top panel section for menu, center select for the map and flight data menu for the bottom. For the menu panel, the 
navigation is done through a “tree-branches” method. The menu will allows the user to “login in” and “view airport information”. On the map, it will consist 
of a map and display of aircraft icon that receiving the latitude and longitude from the external API JSON data file. In addition, a separate icon JSON file 
was created to display 8 major airport around the world. At the bottom of the page, it will display all the available parameters reading from the external API 
file. 

The Skeleton Plane Travelling is fun, entertaining and stress relieving activity. As such, the application designed is based on simple and elegance. The skeleton 
plane will focus primarily on “sky and cloud” and “Light Gold” theme. The choices of “sky and cloud” theme is to represent freedom and sky the limit, while 
the “light gold” theme for luxury and pose feeling. In the menu panel, the user can choose to login a member or remain as anonymous. Being a member, the user
 can have the privileges to view all the flight details on the bottom panel as compared to only 3 flight details for being an anonymous. Below the flight 
 display panel, the user can search for a particular flight details. Once selected, the HTML will display the flight parameters the selected aircraft at the 
 flight data menu. On the top of the panel, the user can select the airport menu. Upon selecting the airport icon, the HTML will change to another website.
  The user can then select the airport information that they want to search.

