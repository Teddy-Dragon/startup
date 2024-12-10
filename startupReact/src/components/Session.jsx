import React, {useState} from 'react';
import './SessionCSS.css'

function Session({user, map}){
    const [sessionName, setSessionName] = React.useState('');
    const [code, setCode] = React.useState(null);


    function saveName(){
        const name = document.getElementById('sessionname').value;
        setSessionName(name);
        setCode(generateCode());

    }

    function generateCode(){
        const number = Math.floor(Math.random() * 999999).toString();
        if(number < 100000){
            return '0' + number.toString();
        }
        else{
            return number.toString();
        }


    }


    function handleName() {

        if (!sessionName) {
            return <>
                <form onSubmit={saveName}>
                    <label> Session name</label>
                    <input type="text" id="sessionname"/>
                    <input type="submit" value="Start Game"/>

                </form>
            </>
        }
        else{
            return <><h3 className={'chosenName'}>{sessionName}</h3></>;
        }

    }


//display image
    return <>
        <div className="text-center">
            <div className="sessionname1">
                {handleName()}
            </div>
        </div>
        <div className={"text-center"}>
        <div className="sessioninfo1">
            <table className="sessioninfo">

                <tbody>
                <tr>
                    <th> Host: {user} </th>
                    <th> Map Name: Map1</th>
                    <th> Icons</th>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        <div className="anotherone">
            <div className="mapinterface">
                <img src="https://github.com/Teddy-Dragon/startup/blob/main/simpleAfrica.jpg?raw=true"
                     className="picture"/>
            </div>
            <div className="players_andcode">
                <br/>
                    <h3>Current Players</h3>
                    <li> Player 1</li>
                    <li> Player 2</li>
                    <h4> Session Code</h4>
                    <p> {code}</p>
                <h4>Chat</h4>
            </div>
        </div>
</>

}


export default Session;