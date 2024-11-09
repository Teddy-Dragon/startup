import React, {useState} from 'react';
import "./LoginCSS.css"
import App from "../App.jsx";
import 'react-bootstrap'


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
        console.log(username + "is trying to log in. They are a returning player so verify with the database/authentication people that they are who they say they are")

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
        console.log(username + "is trying to log in. They are a new user, welcome! We will store you momentarily :)");


    }

    return (
        <div className="information">

            <div className="both">
                <h3 className="infotitle">Returning Player?</h3>
                <div className="returning">
                    <li>
                        <div className="return_info">
                            <form onSubmit={handleReturn} className="returning">
                                <li>
                                    <label className="label">Username</label>
                                    <br/>
                                    <input className = "inputs" type="text" id={'username'} required/>
                                </li>
                                <li>
                                    <label className="label"> Password </label>
                                    <br/>
                                    <input className="inputs" type="password" id={'password'} required/>
                                </li>
                                <button type="submit" className="submit btn btn-secondary">Login</button>
                            </form>
                        </div>
                    </li>
                </div>
                <br/>
                <h3> New Player? </h3>
                <div className="newplayer">
                    <li>
                        <form onSubmit={handleNew}>
                            <label className="label">Username</label>
                            <input className="inputs" type="text" id={'newUsername'} required/>
                            <br/>
                            <label className="label">Password</label>
                            <br/>
                            <input className="inputs"  type="password" id={'newPassword'} required/>
                            <br/>
                            <label className="label">Confirm Password</label>
                            <br/>
                            <input className="inputs"  type="password" id={'confirmPassword'} required/>
                            <br/>
                            <label className="label">Email</label>
                            <br/>
                            <input className="inputs"  type="email" id={'email'} required/>
                            <br/>
                            <button type="submit" className="submit btn btn-secondary">Sign Up</button>

                        </form>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Login;