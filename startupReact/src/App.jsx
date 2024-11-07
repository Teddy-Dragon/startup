import { useState } from 'react'
import {BrowserRouter, createBrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import './App.css'
import Navigation from "./components/navigation.jsx";


const router = createBrowserRouter([
  {path: '/', name: 'Home', element: <App/>},
  {path: "/login", name: 'Login', element: <Login/>},
  {path: "/maps", name: 'Maps',element: <Maps/>},
  {path: "/session", name: 'Session', element: <Session/>},
  {path:"/join game", name:'Join_Game', element: <Game/>}


])

function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

    function handleReturn(){
      const user = document.getElementById('username').value;
      setUsername(user);

      const pass = document.getElementById('password').value;
      setPassword(pass);
      // if username and password is equivalent to database, login


    }
    function handleNew(){
      const email = document.getElementById('email').value;
      setEmail(email);
      const username = document.getElementById('newUsername').value;
      setUsername(username);

      const pass = document.getElementById('newPassword').value;
      const confirm = document.getElementById('confirmPassword').value;
      if (pass === confirm) {
        setPassword(pass);
        //confirm the password and store new user in database
      }


    }

return <>
  <link rel="stylesheet" href="/components/LoginCSS.css" />
<div className="information">
  <h3 className="infotitle">Returning Player?</h3>
  <div className = "returning">
  <li>
    <form onSubmit={handleReturn} className= "returning">
      <label>Username</label>
      <input type="text" id={'username'} required/>
        <label> Password </label>
        <input type="password" id={'password'} required/>
        <button type="submit">Submit</button>
    </form>

  </li>
  </div>
  <br/>
  <h3> New Player? </h3>
  <div className="newplayer">
  <li>
    <form onSubmit={handleNew}>
      <label>Username</label>
      <input type="text" id={'newUsername'} required/>
      <label>Password</label>
      <input type="password" id={'newPassword'} required/>
      <label>Confirm Password</label>
      <input type="password" id={'confirmPassword'} required/>
      <label>Email</label>
      <input type="email" id={'email'} required/>
      <button type="submit">Submit</button>

    </form>
  </li>
  </div>

</div>
</>
}

function Maps() {
  return <>
    <h1> I did something </h1>
  </>

}

function Session() {

}

function Game(){

}


function App() {
 const [currentUser, setCurrentUser] = useState(null);
  return (
      <>
        <BrowserRouter>
          <Navigation/>
          <div className='image'>
            <Routes>
              <Route path="/login" element={<Login/>}/>,
              <Route path='/maps' element={<Maps/>}/>,
              <Route path="/session" element={<Session/>}/>
              <Route path="/join game" element={<Game/>}/>
            </Routes>
            <footer>
              <a href="https://github.com/Teddy-Dragon/startup"> Kaylee's Github </a>
            </footer>
          </div>
        </BrowserRouter>
      </>
  )
}

export default App
