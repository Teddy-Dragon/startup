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


How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What does the following code using map with an array output?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
What is valid javascript syntax for if, else, for, while, switch statements?
What will the following code using Promises output when executed?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?




- Which of the following is true when the -la parameter is specified for the ls console command?
-   la lists all attributes of items in a directory

  -  Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  -  Top = click Root = Bozo Subdomains: 2nd banana, 1st fruit


- Is a web certificate is necessary to use HTTPS.
- Yes? duh?

- Can a DNS A record can point to an IP address or another A record.
  - A record points to an ip address a cname can point to an A record
    
- Port 443, 80, 22 is reserved for which protocol?
  - Port 443: Https 80: HTTP 22: ssh 21: ftp



MISC 
What does the following code output using getElementByID and addEventListener?
