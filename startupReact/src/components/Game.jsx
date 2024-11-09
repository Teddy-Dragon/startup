import react from 'react';
import {useState} from "react";

import './GameCSS.css'
import React from "react";

function findGame(){

    return<>
    </>
}

function searching(){

    return<>
    </>
}




function Game(){
    const [gameCode, setGameCode] = React.useState(null);
    function setCode(){
        const code = document.getElementById('code').value;
        setGameCode(code);

    }

   function handleCode(){
       if(!gameCode) {
           return <>
               <form onSubmit={setCode}>
                   <ul className="code">
                       <li><label> Game Code:</label></li>
                       <li><input type="text" id={'code'} required pattern="[0-9]{6}"/></li>
                       <li><br/> <input className="submit" type="submit" value="Find Game"/></li>
                   </ul>
               </form>

           </>
       }
       else{
           return <> <h2> Searching for game with code {gameCode}...</h2></>
       }
   }


    return <>
        <div className="text-center">
            {handleCode()}
    </div>
</>

}

export default Game;