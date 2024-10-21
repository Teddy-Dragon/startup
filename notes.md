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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> Boot strap script for navigation bar functionality
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









In the following code, what does the link element do? # links an external source to the current html file
In the following code,  what does a div tag do? # It wraps other content up, think of it like fancy pareenthesises
In the following code, what is the difference between the #title and .grid selector? # One is referencing an ID and the other is referencing a class
In the following code, what is the difference between padding and margin? # padding is the distance between the item and its border and margin is the distance between other elements [!image](https://static-kb.siteground.com/wp-content/uploads/sites/2/2023/10/what-is-padding.jpg)
Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?
