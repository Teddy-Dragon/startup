import React, {useState} from 'react';
import "react-bootstrap"
import './MapsCSS.css'
import {NavLink} from "react-router-dom";

function Maps() {

    const [mapName, setMapName] = useState('');
    const [mapInfo, setMapInfo] = useState('');
    const [mapImage, setMapImage] = useState(null);
    const [display, setDisplay] = useState(null);

    function handleSessionStart(){
        //get map information from database and send over to the session function
        console.log("You clicked on the host button. When I get access to a database, this will send over the map information to my Session component :)");

    }

    function showDisplay(event){
        const pic = event.target.files[0];
        console.log(pic);
        const picURL = URL.createObjectURL(pic);
        setDisplay(picURL);
        console.log(display);

    }

    function handleUpload(){
        const name =  document.getElementById('mapName').value
        setMapName(name)
        const Info = document.getElementById('mapInfo').value;
       setMapInfo(Info)
        const image = document.getElementById('mapImage').value;
       setMapImage(image)
    }

    return <>
        <div className="text-center">
        <h2 className="title">Your Maps</h2>
        </div>
        <div className="everything">
            <p/>
            <form>
                <table className = "Please">

                    <tbody>
                    <tr className="heading">

                        <th className="text-center">Map name</th>
                        <th className="text-center">Map Information</th>
                        <th className="text-center">Map Image</th>
                        <th className="text-center"> Host Game</th>

                    </tr>
                    </tbody>


                        <tbody>
                        <tr className="map1">
                            <td className="text-center">Map1</td>
                            <td className="text-center"> This is the first map and here is some information about it
                            </td>
                            <td className="text-center"><img
                                src="https://github.com/Teddy-Dragon/startup/blob/main/simpleAfrica.jpg?raw=true"
                                width="400px"/></td>
                            <td className="text-center link-dark"><button type={"button"} className="btn btn-outline-dark" onClick={handleSessionStart}>Host</button> </td>

                        </tr>
                        </tbody>

                    <tbody>
                    <tr className="map2">
                        <td className="text-center"> Map 2</td>
                        <td className="text-center"> This is the second map and here is some information on it</td>
                        <td className="text-center"><img
                            src="https://github.com/Teddy-Dragon/startup/blob/main/simpleAsia.jpg?raw=true"
                            width="400px"/></td>
                        <td className="text-center link-dark">
                            <button type={"button"} className="btn btn-outline-dark" onClick={handleSessionStart}>Host
                            </button>
                        </td>

                    </tr>
                    </tbody>

                    <tbody>
                    <tr className="map3">
                        <td className="text-center"> Map 3</td>
                        <td className="text-center"> This is the third map and here is some information. This is going
                            to be longer than the usual amount of information to see how it deals with formating
                        </td>
                        <td className="text-center"><img
                            src="https://github.com/Teddy-Dragon/startup/blob/main/simpleNorthAmerica.png?raw=true"
                            width="400px"/></td>
                        <td className="text-center link-dark">
                            <button type={"button"} className="btn btn-outline-dark" onClick={handleSessionStart}>Host
                            </button>
                        </td>

                    </tr>
                    </tbody>


                        <tbody>
                            <tr onSubmit={handleUpload}>
                                <td > <label> Map Name:</label> <input type={"text"} id={'mapName'}/></td>
                                <td><label>Information: </label><input type={"text"} id={'mapInfo'}/></td>
                                <td><label>Map Image:</label><input type={"file"} onChange={showDisplay} id={'mapImage'}/>{display && <img src={display} alt="Preview"/>}</td>
                                <td><input type={"submit"}></input></td>
                            </tr>
                        </tbody>

                </table>
            </form>



        </div>


    </>


}

export default Maps;