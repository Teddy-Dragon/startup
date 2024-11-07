import React, {useState} from 'react';
import "react-bootstrap"
import './MapsCSS.css'
import {NavLink} from "react-router-dom";

function Maps() {

    function handleSessionStart(){
        //get map information from database and send over to the session function
        const [selectedMap, setSelectedMap] = useState(null);

        return <></>
    }
function display(){
        const [display, setDisplay] = useState(null);
        const im = document.getElementById('mapImage').value;
        setDisplay(URL.createObjectURL(im));

        return <>
                <img src={display}/>
            </>
}

    function handleUpload(){
        const [mapName, setMapName] = useState('');
        const [mapInfo, setMapInfo] = useState('');
        const [mapImage, setMapImage] = useState(null);

       const name =  document.getElementById('mapName').value
        setMapName(name)
        const Info = document.getElementById('mapInfo').value;
       setMapInfo(Info)
        const image = document.getElementById('mapImage').value;
       setMapImage(image)
    }

    return <>
        <h2 className="title text-center">Your Maps</h2>
        <div className="everything">
            <p/>
            <form>
                <table className = "Please">

                    <tr className="heading">

                        <th className="text-center">Map name</th>
                        <th className="text-center">Map Information</th>
                        <th className="text-center">Map Image</th>
                        <th className="text-center"> Host Game</th>

                    </tr>


                        <tr className="map1">
                            <td className="text-center">Map1</td>
                            <td className="text-center"> This is the first map and here is some information about it
                            </td>
                            <td className="text-center"><img
                                src="https://github.com/Teddy-Dragon/startup/blob/main/simpleAfrica.jpg?raw=true"
                                width="400px"/></td>
                            <td className="text-center link-dark"><button type={"button"} className="btn btn-outline-dark" onClick={handleSessionStart}>Host</button> </td>

                        </tr>

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


                        <tr onSubmit={handleUpload}>
                        <td > <label> Map Name:</label> <input type={"text"} id={'mapName'}/></td>
                        <td><label>Information: </label><input type={"text"} id={'mapInfo'}/></td>
                        <td><label>Map Image:</label><input type={"file"} onChange={display} id={'mapImage'}/></td>
                        <td><input type={"submit"}></input></td>
                        </tr>

                </table>
            </form>



        </div>


    </>


}

export default Maps;