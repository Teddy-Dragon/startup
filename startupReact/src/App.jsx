import { useState } from 'react'
import {BrowserRouter, createBrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import './App.css'


const router = createBrowserRouter([
  {path: '/', name: 'Home', element: <App/>},
  {path: "/login", name: 'Login', element: <Login/>},
  {path: "/maps", name: 'Maps',element: <Maps/>},
  {path: "/session", name: 'Session', element: <Session/>},


])

function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    function handleReturn(){
      const user = document.getElementById(username).value;
      setUsername(user);

      const pass = document.getElementById(password).value;
      setPassword(pass);
      // if username and password is equivalent to database, login
    }
    function handleNew(){
      const email = document.getElementById(email).value;
      setEmail(email);
      const username = document.getElementById(username).value;
      setUsername(username);

      const pass = document.getElementById(password).value;
      const confirm = document.getElementById(confirmPassword).value;
      if (pass === confirm) {
        setConfirmPassword(pass);
        //confirm the password and store new user in database
      }

    }

return <>
<div className="information">
  <h3 className="infotitle">Returning Player?</h3>
  <li>
    <form onSubmit={handleReturn}>
      <label>Username</label>
      <input type="text" id={username} required value={username}/>
        <label> Password </label>
        <input type="password" id={password} required value={password}/>
        <button type="submit">Submit</button>
    </form>

  </li>
  <h3> New Player? </h3>
  <li>
    <form onSubmit={handleNew}>
      <label>Username</label>
      <input type="text" id={username} required value={username}/>
      <label>Password</label>
      <input type="password" id={password} required value={password}/>
      <label>Confirm Password</label>
      <input type="password" id={confirmPassword} required value={password}/>
      <label>Email</label>
      <input type="email" id={email} required value={email}/>
      <button type="submit">Submit</button>

    </form>
  </li>

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


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <BrowserRouter>
      <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/maps"}>Maps</NavLink>
      <NavLink to={"/session"}>Session</NavLink>
      </nav>
        <Routes>
          <Route path="/login" element={<Login/>} />,
          <Route path='/maps' element={<Maps/>} />,
          <Route path="/session" element={<Session />} />
        </Routes>
    <div className='image'>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
