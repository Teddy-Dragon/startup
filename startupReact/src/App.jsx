import React, { useState } from 'react'
import {BrowserRouter, createBrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import "./components/navigation.css"
import Login from "./components/Login.jsx";
import Maps from "./components/Maps.jsx";
import Game from "./components/Game.jsx";
import Session from "./components/Session.jsx";
import './index.css'
import Home from "./components/home.jsx";
import 'react-bootstrap'


const router = createBrowserRouter([
  {path: "/", name: 'Home', element: <App/>},
  {path: "/login", name: 'Login', element: <Login/>},
  {path: "/maps", name: 'Maps',element: <Maps/>},
  {path: "/session", name: 'Session', element: <Session/>},
  {path:"/join game", name:'Join_Game', element: <Game/>}


])


function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [authState, setAuthState] = useState(null);
    const [currentMap, setCurrentMap] = useState(null);

    function getStates(search){
        if(search === 'auth'){
            return authState;
        }
        if(search === 'user'){
            return currentUser;
        }
    }
    function setStates(type, information){
        if(type === 'user'){
            setCurrentUser(information);
        }
        if(type === 'auth'){
            console.log(information);
            setAuthState(information);
            console.log(authState);
        }
        if(type === 'maps'){
            setCurrentMap(information);
        }
    }



    return (
        <>
            <BrowserRouter>
                <Navigation user={currentUser} setUser = {setCurrentUser} authState={authState} setState = {setAuthState} />
                <div className='image'>
                    <div className={'gap'}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>,
                            <Route path="/login" element={<Login getStates = {getStates} setStates = {setStates} />}/>,
                            <Route path='/maps' element={<Maps user = {currentUser} setMap={setCurrentMap} />}/>,
                            <Route path="/session" element={<Session user = {currentUser} map = {currentMap}/>}/>
                            <Route path="/join game" element={<Game/>}/>
            </Routes>
            <footer>
                <div className="text-center nav-link link-dark">
                <a href={'https://github.com/Teddy-Dragon/startup'} >Kaylee's Github</a>
                </div>
            </footer>
              </div>
          </div>
        </BrowserRouter>
      </>
  )
}

export default App
