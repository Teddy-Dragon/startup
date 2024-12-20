import {NavLink} from "react-router-dom";
import "./navigation.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';



function navigation({user, setUser, authState, setState}) {

   function handleSignout(){
       localStorage.removeItem("currentUser");
       localStorage.removeItem("authState");

       fetch("api/auth/signout", {
            method: "DELETE",
            headers: {'dataType': 'application/json'},
            body: JSON.stringify({user})
        }).then(setState(null), setUser(null));
        console.log("You signed out");
    }
    return <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>

        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={"/"} className="navbar-brand link-dark">Home</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {!authState &&
                            <li className="nav-item">
                                <NavLink to={"/login"} className="nav-link link-dark"
                                         aria-current="page">Login</NavLink>
                            </li>
                            }
                            <li className="nav-item">
                                <NavLink to={"/join game"} className="nav-link link-dark" aria-current="page">Join a
                                    Game</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {localStorage.getItem('authState') &&
                <NavDropdown id="dropdownMenu" className="navbar-nav" title={user}>
                    <NavDropdown.Item href="/maps"><NavLink to={'/maps'} className="nav-link link-dark">Maps</NavLink></NavDropdown.Item>
                    <NavDropdown.Item href="/signup"><NavLink to={'/session'} className="nav-link link-dark">Start A Session</NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login" onClick={handleSignout}><NavLink to={"/"} className="nav-link link-dark">Sign out</NavLink></NavDropdown.Item>

                </NavDropdown>
                }


            </nav>
        </header>
    </>
}


export default navigation;