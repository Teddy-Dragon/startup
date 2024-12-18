#Notes for the 2024 Fall Semester

I didn't know that VS had git functionality, I thought everything I had to do with git would need to be done through the command prompt. It's a nice addition

## Midterm Study guide

# HTML

Basic structure:

<!DOCTYPE HTML>
<html lang = "en">
  <head> Information about the website that's not displayed to everyone </head>
  <body>
    <header> The head of the page visually displayed here </header>
    <a href> A link goes here </a>
    <h1> A heading goes here </h1>
    <p> A paragraph goes here and there is a line break here <br> it breaks things up </p>
    <div> divides things up so you can reference it later with css </div>
    <div class = "Name" > This lets you refer to this in CSS with .Name{} think of them like named brackets or parathesises</div>
    <img src = "#" height = "500" width = "300" alt = "Alternative name for image no workie" > Displays an image. You can modify it with other attributes
    <p title = "Title"> This lets you mouse over things and have a little box pop up with words </p>
    <table class = "This defines a table">
      <tr> This is a rable row</tr>
        <th> This is a table header </th>
      <tr> This is another table row</tr>
        <td> This is some table data </td>
    </table>
    <ul> This begins a list
    <li> This is a list item. It naturally comes with bullets unless you remove the style type </li>
    </ul>
  </body>
  <footer></footer>
</html>

Example of HTML with my start up:

# My login page 

[<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link href="LoginCSS.css" rel="stylesheet"> All of these links link to style sheets, both my personal CSS and Bootstrap
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> Boot strap javascript for navigation bar functionality
</head>


<body>
<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand link-dark" href="index.html">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"> ID must be unique within the document and is referred to in CSS with a # symbol
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link link-dark" aria-current="page" href="login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-dark" href="game.html">Join a Game</a>
                    </li>
                </ul>
            </div>
        </div>
        <li class="nav-item dropstart">
            <a class="nav-link dropdown-toggle link-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sign in
                <!--Display username if signed in -->
            </a>
            <ul class="dropdown-menu">
                <li><a class="nav-item dropdown-item link-dark" href="maps.html">Your Maps</a></li>
                <li><a class="dropdown-item link-dark" href="session.html">Start A Session</a></li>
                <li><a class="dropdown-item link-dark" href="index.html">Sign Out</a></li>
            </ul>
        </li>
    </nav>
</header>

<div class="image">
<div class = "information">
    <div class = "returning">
        <h3 class = "infotitle"> Returning Player?</h3>
        <li>
        <label for="username"> Username: </label>
        <input class = "return_info" type="text" id="username" name="username" required pattern="[A-z]{5,24}"/>
            <!--Verify username presence in database. If present, verify against password. If not, wrong username or password error-->
        </li>
        <li>
            <label for="password"> Password: </label>
            <input class = "return_info" type="password" id="password" name="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}">
            <!--verify password against username. If mismatched, display wrong username or password error -->
        </li>
<br>
        <input class = "submit" type="submit" value="Login">
<br>
    <h3 class = "infotitle"> New player? </h3>
    <li>
        <label for="newusername"> New Username: </label>
        <input class = "new_info" type="text" id="newusername" name="newusername" required pattern="[A-z]{5,24}">
        <!-- Save Username in Database-->
    </li>
    <li>
        <label for="newpassword"> New Password:</label>
        <input class = "new_info" type="password" id="newpassword" name="newpassword" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}">
    </li>
    <li>
        <!-- Make sure passwords match before making it User Password and saving to database-->
        <label> Confirm Password:</label>
        <input class = "new_info" type="password" id="confirmpassword" required>
    </li>
    <li>
        <label for="useremail"> Enter Email:</label>
        <input class = "new_info" type="email" id="useremail" name="useremail" required pattern="[A-z0-9]{1,}@[A-z0-9]{1,}[.][A-z]{3}">
        <!-- save user email in database. Used for account recovery and information -->
    </li>
    <br>
    <input class = "submit" type="submit" value = "Sign up">
</div>
</div>

</body>
<footer>
    <a href="https://github.com/Teddy-Dragon/startup"> Kaylee's Github </a>

</footer>
</div>
</html>
]#

All the different input types for HTML:
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">


## CSS

Example of CSS from my startup:
[ This is here for me to know where it starts and ends, this is not in CSS
*{
    box-sizing: border-box;
    list-style: none;
}
nav{
    display: flex;

}
footer{
    padding-top: 1000px;
}
.image{
    background-image: url("editedoldmap2.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.information{
    padding-top: 30px;
    display: flex;
    column-gap: 50px;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.returning{
    border-radius: 25px;
    background: white;
    padding: 20px;

}
.newplayer{
    border-radius: 25px;
    background: white;
    padding: 20px;
}
.information .returning .submit {
    width: 100%;
}
.information .returning .return_info{
    width: 100%;
}
.infotitle{
    padding-top: 30px;
}
.information .returning .new_info{
    width: 100%;
}

]

[Here is another example that uses flex more often
nav{
    background-color: #dc8676;
}
main {
    flex: 1;
    display: flex;
    flex-direction: row;
}
h2 {
    font-family: sans-serif;
}
.Title{
    text-alignment: center;
    flex:1;
    display: flex;
    background-color: #f9b5a8;
    justify-content: center;
}
.Examples{
    text-alignment: center;
    flex: 1;
    display: flex;
    background-color: #ffe5e5;
    justify-content: center;
}
]

[example of animation
.fly-in {
  animation;
}
footer{
  background-color:black;
  font-family:sans-serif;
  font-style:italic;
  font-size: 25px;
  color:white;
  text-align: right;
}
@keyframes flying {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translatex(0%);
  }
}
]


- In the following code, what does the link element do?
  - links an external source to the current html file
    
- In the following code,  what does a div tag do?
  - It wraps other content up, think of it like fancy pareenthesises

- In the following code, what is the difference between the #title and .grid selector? 
  - One is referencing an ID and the other is referencing a class
    
-In the following code, what is the difference between padding and margin? What does the following padding CSS do?
  - padding is the distance between the item and its border and margin is the distance between other elements
  - ![image of padding](https://static-kb.siteground.com/wp-content/uploads/sites/2/2023/10/what-is-padding.jpg)
  - ![image of margin](https://static-kb.siteground.com/wp-content/uploads/sites/2/2023/10/what-is-margin.jpg)
    

- Given this HTML and this CSS how will the images be displayed using flex?
  - Flex can change direction depending on if its flex-direction: row or column

- How would you display an image with a hyperlink in HTML?
  -  <a href="link"> <img src="image"> </a>

- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
  - ![image](https://imgs.search.brave.com/0hZYiscNRonmZhrRuw2mf6hAHZrRsyYM6ns7MZp7EHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cm5ldGluZ2lzaGFy/ZC5uZXRsaWZ5LmFw/cC9jc3MtYm94LW1v/ZGVsLTczYTUyNS4y/M2IyZDY0Yi5wbmc)

- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
  - [<p>, <ol>, <ul>, <h2> <h1>, <h3>]

- How do you declare the document type to be html?
  - [<!DOCTYPE HTML>]

- Which of the following console command creates a remote shell session?
  - ssh

- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
  - chmod:  changes file permissions for you, groups, and global
  - pwd: lists current location in files
  - cd: lets you navigate through files and directories
  - ls: lists all items in a directory
  - vim: console editor- has syntax highlighting
  - nano: consolde editor- basic editor
  - mkdir: make directory
  - rm: remove
  - man: Gives documentation for commands
  - ssh: Secure shell session
  - ps: Looks at running processes
  - wget: a way to download things from the internet in the console
  - sudo: Super user do, get admin privs. 

- By default, the HTML span element has a default CSS display property value of:
  - inline

- Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
  - text-color: green

- How would you use CSS to change all the div elements to have a background color of red?
  - div{background-color: red}

- If you want to include JavaScript on an HTML page, which tag do you use?
  - <script> </script>


## Javascript

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.
Which of the following correctly describes JSON?: "JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats."

To see how many times a block of code is called you can use the count function.
  console.count('a');
  // OUTPUT: a: 1
  console.count('a');
  // OUTPUT: a: 2
  console.count('b');
  // OUTPUT: b: 1
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEndcalls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms

You can even specify CSS declarations in order to style the log output.
  console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
  // OUTPUT: JavaScript Demo //in large green text

Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.
Types: 
Boolean	true or false.
Number	A 64-bit signed number.
BigInt	A number of arbitrary magnitude.
String	A textual sequence of characters.
Symbol	A unique value.

Object types: 
Object	A collection of properties represented by name-value pairs. Values can be of any type.	{a:3, b:'fish'}
Function	An object that has the ability to be called.	function a() {}
Date	Calendar dates and times.	new Date('1995-12-17')
Array	An ordered sequence of any type.	[3, 'fish']
Map	A collection of key-value pairs that support efficient lookups.	new Map()
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}

JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality

You can also use the ternary operator. This provides a compact if else representation.

a === 1 ? console.log(1) : console.log('not 1');

What will the following code output when executed using a for loop and console.log? 
Looping Constructs: 
### for

for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1

### do while
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1

### while
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
### for in
The for in statement iterates over an object's property names.

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b

### For arrays the object's name is the array index.

const arr = ['a', 'b'];

for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1

### for of
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'



What is valid javascript syntax for if, else, for, while, switch statements?
if ()
else ()



String Functions:
length:	The number of characters in the string
indexOf():	The starting index of a given substring
split():	Split the string into an array on the given delimiter string
startsWith():	True if the string has a given prefix
endsWith():	True if the string has a given suffix
toLowerCase():	Converts all characters to lowercase

## Arrows
### What does the following code using arrow syntax function declaration do?

These return the same thing :

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2)

## Return values

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3


- Is it possible to add new properties to javascript objects?
  -   Yes, with object.property(Define property here)

-   What is the correct syntax for creating a javascript object?
  -   const object = New Object(stuff) or const obj = {stuff}


What does the following code using map with an array output?
- Javascript Arrays:
  - push:	Add an item to the end of the array	a.push(4)
  - pop:	Remove an item from the end of the array	x = a.pop()
  - slice:	Return a sub-array	a.slice(1,-1)
  - sort:	Run a function to sort an array in place	a.sort((a,b) => b-a)
  - values:	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
  - find:	Find the first item satisfied by a test function	a.find(i => i < 2)
  - forEach:	Run a function on each array item	a.forEach(console.log)
  - reduce:	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
  - map:	Run a function to map an array to a new array	a.map(i => i+i)
  - filter:	Run a function to remove items	a.filter(i => i%2)
  - every:	Run a function to test if all items match	a.every(i => i < 3)
  - some:	Run a function to test if any items match	a.some(i => i < 1)

Modules:
![module image](https://samanthaming.gumlet.io/tidbits/79-module-cheatsheet.jpg.gz)


- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
  - element = document.getElementById("Byu"); element.style.color = "greeen"

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)
  Tree structure: The DOM is a hierarchical structure, with the document element at the root and other elements as its children.
  Nodes: Nodes are the basic building blocks of the DOM. They can represent elements, attributes, text, comments, and other types of content.
  Properties: Nodes have properties that provide information about the node, such as its name, type, and parent node.
  Methods: Nodes also have methods that allow you to manipulate the node, such as creating new nodes, deleting nodes, and changing node attributes.
  Traversal: You can traverse the DOM tree to access different nodes and their properties.
  Events: The DOM allows you to attach event handlers to nodes, which can be used to respond to user interactions and other events.
  Dynamic content: The DOM can be used to create and manipulate dynamic content on a web page, such as updating elements based on user input or loading data from a server.
  The DOM is a powerful 


What will the following code using Promises output when executed?

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
1. Accessing Elements
getElementById: Directly access an element by its ID.
getElementsByTagName: Retrieve a collection of elements by their tag name.
getElementsByClassName: Get a collection of elements by their class name.
querySelector: Selects the first element that matches a CSS selector.
querySelectorAll: Selects all elements that match a CSS selector.   
2. Changing Text Content
textContent: Sets or gets the text content of an element.
innerHTML: Sets or gets the HTML content of an element.
3. Modifying Attributes
setAttribute: Sets the value of an attribute.
getAttribute: Gets the value of an attribute.
removeAttribute: Removes an attribute.
4. Creating Elements
createElement: Creates a new element.
appendChild: Adds a new child element to an existing element.
insertBefore: Inserts a new child element before a specified reference node.
5. Removing Elements
removeChild: Removes a child element from its parent.
6. Changing Styles
style: Directly accesses the element's style properties.
classList: Adds, removes, or toggles classes on an element.



- Which of the following is true when the -la parameter is specified for the ls console command?
  -   la lists all attributes of items in a directory

-  Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  -  Top = click Root = Bozo Subdomains: 2nd banana, 1st fruit


- Is a web certificate is necessary to use HTTPS.
  - Yes? duh?

- Can a DNS A record can point to an IP address or another A record.
  - A record points to an ip address a cname can point to an A record
    
- Port 443, 80, 22 is reserved for which protocol?
  - Port 443: Https
  -  80: HTTP
  -   22: ssh
  -   21: ftp




MISC 
What does the following code output using getElementByID and addEventListener?


What does an HTTP status code in the range of 300/400/500 indicate?:

http status code in the 300 means redirection, 400 means Client error, 500 means server error

What does the HTTP header content-type allow you to do?:

it details what kind of information is being sent to the server in the body

What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies:
 - A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily
 - A cookie with the HttpOnly attribute can't be accessed by JavaScript, for example using Document.cookie; it can only be accessed when it reaches the server.
 - The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests — i.e. third-party cookies. Cross-site requests are requests where the site (the registrable domain) and/or the scheme (http or https) do not match the site the user is currently visiting. This includes requests sent when links are clicked on other sites to navigate to your site, and any request sent by embedded third-party content.

Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?

Given the following Express service code: What does the following front end JavaScript that performs a fetch return?


Given the following MongoDB query, select all of the matching documents {name:Mark}




How should user passwords be stored?:
Hashed


Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
What is the websocket protocol intended to provide?
What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
Given a set of React components that include each other, what will be generated


What does a React component with React.useState do:
 - Manage Internal Data: It allows the component to hold and update its own internal data. This data can be anything: numbers, strings, arrays, objects, etc.
 - Trigger Re-renders: Whenever the internal data (the "state") is updated using the function returned by useState, React efficiently re-renders only the necessary parts of the component and its children. This ensures the user interface (UI) reflects the latest data changes.   


What are React Hooks used for?

What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks:
 - State lets a component “remember” information like user input.
 - Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
 - Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs
 - Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
 - A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.


Given React Router code, select statements that are true.
What does the package.json file do?
 -  It's a JSON file that acts as a manifest for your project, containing metadata and configuration information.
 -  
What does the fetch function do?
 - fetches a resource from the network or api

What does node.js do?

 - Node. js is not a programming language; it is a runtime environment allowing you to execute JavaScript code on the server side, outside a web browser.
What does pm2 do?

- PM2 allows you to quickly start, stop, or control your Node processes. 

What does Vite do?

- Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.




 ## Kahoot Answers:


Question: For the request GET /fav/george what is logged?
![kahoot](https://images-cdn.kahoot.it/907074b0-266a-4d57-82c3-9dcf71190893?auto=webp&dpr=1&quality=50)
Answer: Paul George John


Question: Given the following code what will console.log print?
![kahoot2](https://images-cdn.kahoot.it/f696d33d-3ee4-4937-be45-50513792defc?auto=webp&dpr=1&quality=50)
answer: "Client: Server: Hello"

Question: What will component A display initially?
![kahoot3](https://images-cdn.kahoot.it/eb05f83b-27b1-42ed-9c43-27e5705fe3fc?auto=webp&dpr=1&quality=50)
answer: tacofish

Question: What component will the URL /burger render?
![kahoot4](https://images-cdn.kahoot.it/7e2b94e0-40d7-4a94-bc2b-d8bcdd40b6aa?auto=webp&dpr=1&quality=50)
answer: B

![kahoot5](https://github.com/Teddy-Dragon/Misc-Files/blob/main/Screenshot%202024-12-18%20124430.png?raw=true)

![kahoot6](https://github.com/Teddy-Dragon/Misc-Files/blob/main/Screenshot%202024-12-18%20123806.png?raw=true)

![kahoot7](https://github.com/Teddy-Dragon/Misc-Files/blob/main/Screenshot%202024-12-18%20123557.png?raw=true)

![kahoot8](https://github.com/Teddy-Dragon/Misc-Files/blob/main/Screenshot%202024-12-18%20123255.png?raw=true)

![kahoot9](https://github.com/Teddy-Dragon/Misc-Files/blob/main/Screenshot%202024-12-18%20123226.png?raw=true)

