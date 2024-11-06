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

return <>
<div className="information">
  <h3 className="infotitle">Returning Player?</h3>
  <li>
    <label>Username</label>
    <input type="text" required value={username} onSubmit={(e) => setUsername(e.target.value)} />
    <button onClick={() => setUsername('')}>Submit</button>
  </li>

</div>
</>
}

function Maps(){
  return <>
  <h1> I did something </h1>
  </>

}

function Session(){

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
