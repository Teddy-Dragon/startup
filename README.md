### **DND Map Startup**

## Elevator Pitch:
  Have you ever wanted to have a DND session with your friends, but you didn’t have the physical maps and resources to really visualize what your world would look like? My DND live map application would allow it so you and your friends would be able to upload and play on maps of your creation! Simply upload a PNG or JPEG map, and then create a secure session with that map so that your players can join. Once everyone’s online, you can select an icon shape, color, and size and each player can move their respective icon however they like. All player movements will be shown in real time so everyone can know where everyone else is, making it easier for the dungeon master to spin a tale of fantasy and adventure! 

## Design:

![Display of the "Your Maps" Page](https://github.com/Teddy-Dragon/startup/blob/main/Screenshot%202024-09-13%20221131.png?raw=true)

![A demonstration of a session](https://github.com/Teddy-Dragon/startup/blob/main/Screenshot%202024-09-13%20221207.png?raw=true)

## Key Features
- Secure login
- Ability to upload and store PNG and JPEG images
- Ability to write and store text information about maps
- Ability to host and join passcode secured sessions
- Display of player icons with real time movement
- User maps will be saved and can be accessed only by user

## Technologies
  I am going to use the following technologies in this project:

  **HTML:** Use correct HTML structure for the application. Three HTML pages, one for login, one for map storage, and another for session display. Links to move between items will be made.
  **CSS:** Two styles will be used, the first will be fit for a basic computer webpage, the second will be more slimmed down to make it mobile compatible. Both will have a consistent color scheme and design. 
  **React:** Would provide ability for icon movement to be seen by all parties in session and be used for the security framework ex. login, signout, session management.
  **Service:** Background service would contain endpoints for login, basic user information, user icon location, stored map and image information, and known active sessions. 
  **DB/Login:** Used to contain encoded user passwords, usernames, will give validation to users so users have access to previously submitted maps.
  **Websocket:** As players move their icon across the screen, their movement will be broadcast to other users, and if players modify their icons, this will also be broadcast to other users. 

## HTML Deliverable
For this deliverable, I built the HTML stucture of my website. More HTML pages were needed than the three originally expected.

- [x] 5 HTML Pages that represent a users pathway through the site. Example 'user' is available temporarily from the home page.
- [x] Each page links to the other, future methods will be implemented in order to put restrictions on pages depending on user sign-in.
- [x] Each page and its interactive elements has text explaining their purpose.
- [x] Example images were used in order to display placeholder maps in both maps.html and session.html
- [x] Input boxes for both login and sign up are displayed on login.html. This will refer back to the website's database to verify existing users and add new ones.
- [ ]  The websocket functionality cannot be represented in pure HTML, as it requires live updated icons over the shared page's picture.

## CSS Deliverable
For this deliverable I styled my website to match as closely as possible the final appearance

- [x] Navigation bar styled with a drop down menu
- [x] Each page contains a consistent background
- [x] Each page has flex components to help appearance adjust with resizing
- [x] Consistent fonts and design throughout the 5 HTML pages
- [ ] maps.html is not in its final design stage but a rough idea that will be modified once other elements are added

  ##React Deliverable
  For this deliverable, I converted my HTML and CSS pages to React and added some functionality
- [x] Login: For the Login page it now accepts values submitted and stores them for later use with login functionality
- [x] Maps: Displays three Mock maps, however now new map information is submitted and stored in variables, a preview of the map image is also displayed before submission.
- [x] Join a Game: Game code is now stored in a variable and after submission a mock loading screen is now displayed for later use with websocket
- [ ] Session: The ability to name a session and to store said name in a variable was introduced, however much of this page will need a databse/websocket for further improvement
- [x] Navigation: The navigation bar was updated to use Route to switch between different components. Sign out now displays a message to console before sending user back to home page for later use with login.
- [x] Hooks are used throughout to find and set different variables and track user input and changes   
