import { useState } from 'react'
import {BrowserRouter, createBrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import "./components/navigation.css"
import Login from "./components/Login.jsx";
import Maps from "./components/Maps.jsx";
import Game from "./components/Game.jsx";
import Session from "./components/Session.jsx";
import './index.css'
import Home from "./components/home.jsx";


const router = createBrowserRouter([
  {path: "/home", name: 'Home', element: <App/>},
  {path: "/login", name: 'Login', element: <Login/>},
  {path: "/maps", name: 'Maps',element: <Maps/>},
  {path: "/session", name: 'Session', element: <Session/>},
  {path:"/join game", name:'Join_Game', element: <Game/>}


])


function App() {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <div className='image'>
                    <div className={'gap'}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>,
                            <Route path="/login" element={<Login/>}/>,
                            <Route path='/maps' element={<Maps/>}/>,
                            <Route path="/session" element={<Session/>}/>
                            <Route path="/join game" element={<Game/>}/>
            </Routes>
            <footer>

            </footer>
              </div>
          </div>
        </BrowserRouter>
      </>
  )
}

export default App
