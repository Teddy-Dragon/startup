import {NavLink} from "react-router-dom";
import "./navigation.css"


function navigation() {
    return <>
        <link href="navigation.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>

        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={"/"} className="navbar-brand link-dark">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/login"} className="nav-link link-dark"
                                         aria-current="page">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/join game"} className="nav-link link-dark" aria-current="page">Join a
                                    Game</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                <li className="nav-item dropstart">
                    <a className="nav-link dropdown-toggle link-dark" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        Sign in
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="nav-item dropdown-item link-dark" href="maps.html">Your Maps</a></li>
                        <li><a className="dropdown-item link-dark" href="session.html">Start A Session</a></li>
                        <li><a className="dropdown-item link-dark" href="index.html">Sign Out</a></li>
                    </ul>
                </li>

            </nav>
        </header>
    </>
}


export default navigation;