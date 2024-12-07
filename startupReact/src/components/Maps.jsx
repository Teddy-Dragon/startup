import React, {useState} from 'react';
import "react-bootstrap"
import './MapsCSS.css'
import {NavLink} from "react-router-dom";

function Maps({user, setMap}) {

    const [mapName, setMapName] = useState('');
    const [mapInfo, setMapInfo] = useState('');
    const [mapImage, setMapImage] = useState(null);
    const [display, setDisplay] = useState(null);

    const images = {
        image1: "https://github.com/Teddy-Dragon/startup/blob/main/simpleAfrica.jpg?raw=true",
        image2: "https://github.com/Teddy-Dragon/startup/blob/main/simpleAsia.jpg?raw=true",
        image3: "https://github.com/Teddy-Dragon/startup/blob/main/simpleNorthAmerica.png?raw=true"
    }

  async function handleSessionStart(map){
        //get map information from database and send over to the session function
        console.log("You clicked on the host button. When I get access to a database, this will send over the map information to my Session component :)");
        setMap(null);
        setMap(map);
    }

    function showDisplay(event){
        const pic = event.target.files[0];
        const picURL = URL.createObjectURL(pic);
        setDisplay(picURL);

    }

    function showPlayerMaps(){
        const callDB = fetch('/maps').then((res) => {res = res.json;
        console.log(res);});

        return <>
        <h1 className='text-center'> Show maps that player has in database </h1>
        </>
    }

    function handleUpload(){
        const name =  document.getElementById('mapName').value
        setMapName(name)
        const Info = document.getElementById('mapInfo').value;
       setMapInfo(Info)
        const image = document.getElementById('mapImage').value;
       setMapImage(image)
        console.log("in handleUpload");
        fetch('/api/maps/upload', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({mapName: name, mapInfo: Info,mapImage: image})
        }).then(res => console.log(res));
      console.log(name);

    }


    return <>
        <div className="text-center">
        <h2 className="title">Your Maps</h2>
        </div>
        <div className="everything">
            <p/>
                <table className = "Please">

                    <tbody>
                    <tr className="heading">

                        <th className="text-center">Map name</th>
                        <th className="text-center">Map Information</th>
                        <th className="text-center">Map Image</th>
                        <th className="text-center"> Host Game</th>

                    </tr>
                    </tbody>
                    {showPlayerMaps()}

                        <tbody>
                            <tr>
                                <td > <label> Map Name:</label> <input type={"text"} id={'mapName'}/></td>
                                <td><label>Information: </label><input type={"text"} id={'mapInfo'}/></td>
                                <td><label>Map Image:</label><input type={"file"} onChange={showDisplay} id={'mapImage'}/>{display && <img src={display} alt="Preview"/>}</td>
                                <td><input type={"submit"} onClick={handleUpload}></input></td>
                            </tr>
                        </tbody>

                </table>



        </div>


    </>


}

export default Maps;