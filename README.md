Strategy

Since the starts of aviation industry, air travel has been the most preferred choice of travellers travelling from one destination to another. Depending on the travellers’ 
destination, some travellers would need to be on a flight as long as 16 hours before reaching their destination. During these long hours, the travellers’ loved ones technically 
has no information on their current position. With the development of Global Air Travel web-based application, the users can easily fill up the “missing information” gap by using the application to monitor and search for a particular aircraft flying around the world. This application provides features like close to real-time of a selected aircraft location and flight parameters, and display it on their computer console.

Scope 

•	To provide users with close to real-time air movement around the world.

Automatic depend surveillance-broadcast (ADS-B) is a surveillance technology in which an aircraft determines its position via satellite navigation and periodically broadcasts, enabling it to be tracked. Due to the long time lapse, between ADS-B to host server and then broadcast to this application, the presentation of the selected aircraft position can only be estimated location with up to 15second delay; subject to the host server traffic loading.

•	To allow the users to monitor the selected aircraft parameters, these include aircraft call-sign, destination, arrival aerodrome, location and etc.

The application will leverage on the JSON data received from the host server. Using the JSON like latitude and longitude, aircraft speed, aircraft heading and etc, these data can be pull and display it on the HTML. For this project, the intention to provide up to 10 data pointers for the users to consume. The data details are “Flight Date”, “Flight Status,” “Flight Number”, “Departure Airport”, “Estimated Departure Time”, “Arrival Airport,” “Estimated Arrival Time”, “Current Altitude”, “Current Speed” and ”Current Direction”.

•	To provide users with the capability to search for a particular traffic flying over a particular region

Within the JSON data file, the information on current latitude and longitudes, and current aircraft heading information, can be extracted and display it on the map.  The HTML will then zoom in to the aircraft over a particular region.

•	To provide users to search for airport information

An icon will be available on the left panel in inhibit mode. When the user login in as a member, this icon will then be active for selection. Upon selecting the icon, the icon will link another  web page that display with a few airport names and pictures. The user can then select the airport information that they want to search, the airport link will connect to the actual airport website. 


Structure

The application designed is based on simple and elegance. The intention is not to cluster the users with too much details or selection. As such, the application is split into two sections, the left panel section for menu and right panel select for the map. For the menu panel, the navigation is done through a “tree-branches” method.  The left menu will allows the user to “login in”, “viewing the flight details”, “search for a flight” and “view airport information”. On the right of the map, it will consist of a map and display of aircraft icon that receiving the latitude and longitude from the JSON data file. 

The Skeleton Plane
Travelling is fun, entertaining and stress relieving activity. As such, the application designed is based on simple and elegance. The skeleton plane will focus primarily on “sky and cloud” and “Light Gold” theme. The choices of “sky and cloud” theme is to represent freedom and sky the limit, while the “light gold” theme for luxury and pose feeling. In the menu panel, the user can choose to login a member or remain as anonymous. Being a member, the user can have the privileges to view all the flight details on the left panel as compared to only 5 flight details for being an anonymous. Below the flight display panel, the user can search for a particular flight details. Once selected, the HTML will zoom to the selected aircraft on the map. On the bottom of the panel, the user can select the airport icon. Upon selecting the airport icon, the HTML will change to another website. The user can then select the airport information that they want to search, the airport link will connect to the actual airport website. On the right panel, there will be an “aircraft” icon display to represent the location of a selected aircraft. 
