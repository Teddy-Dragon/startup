import React, {useState} from 'react';
import "./LoginCSS.css"
import App from "../App.jsx";
import 'react-bootstrap'



function Login({setUser, currentState, setAuthState}){

  function handleReturn(){
        const user = document.getElementById('username').value;


        const pass = document.getElementById('password').value;
        console.log(user + " and password:" + pass + "\n");
        console.log(JSON.stringify({username: user, password: pass}));

        // if username and password is equivalent to database, login
        const returning = fetch('/api/auth/returning',{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({username: user, password: pass}),
        }).then(res => (currentState = res));
        console.log(currentState);
        console.log(setAuthState);
        if(currentState != null){
            setUser(user);
        }
    }

  function handleNew(){
        const email = document.getElementById('email').value;

        const username = document.getElementById('newUsername').value;
        const pass = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmPassword').value;
        if (pass === confirm) {
            const response = fetch('/api/auth/newPlayer', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({username: username, password: pass, email: email}),
            }).then(res=> (setAuthState(res)));
            setUser(username);
            console.log("This is the user Token", response);
        }
       else{
           console.log("Do your passwords match?")
        }


    }

    return (
        <div className="information">

            <div className="both">
                <h3 className="infotitle">Returning Player?</h3>
                <div className="returning">
                    <li>
                        <div className="return_info">
                            <div className="returning">
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
                                <button onClick={handleReturn} type="submit" className="submit btn btn-secondary">Login</button>
                            </div>
                        </div>
                    </li>
                </div>
                <br/>
                <h3> New Player? </h3>
                <div className="newplayer">
                    <li>

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
                            <button type="submit" onClick={handleNew} className="submit btn btn-secondary">Sign Up</button>

                    </li>
                </div>
            </div>
        </div>
    )
}

export default Login;