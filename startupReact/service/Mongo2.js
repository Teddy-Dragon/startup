const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');
const {response} = require("express");

function submitMapDB(code, userToken, mapInformation){
    const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;
    const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
    const database = client.db('playerMaps');
    const mapCollection = database.collection('Maps');

        const mapScheme = {
            'mapOwner': userToken,
            'mapName': mapInformation.mapName,
            'mapInfo': mapInformation.mapInfo,
            'mapImage': mapInformation.mapImage,
        }
        const owner = {'mapOwner': userToken};


    //1: add a new map
    //2: update an existing map
    //3: delete a map
    //4: get maps
    if(code === 1){
        addMap(mapScheme);
    }
    if(code === 2){
        updateMap(mapScheme);
    }
    if(code === 3){
        deleteMap(mapScheme);
    }
    if(code === 4){
        return getMaps();
    }


    function addMap(mapScheme){
        mapCollection.insertOne(mapScheme).then(r => (console.log(r)));
        return true;
    }
    function updateMap(mapScheme){
        mapCollection.findOneAndUpdate(mapScheme);
        return false;
    }
    function deleteMap(mapScheme){
        mapCollection.findOneAndDelete(mapScheme);
        return false;
    }
    function getMaps(){
        console.log("This is in the mongo2 thing and its supposed to be what I'm getting back so help me "+ mapCollection.find(owner));
        return mapCollection.find(owner);

    }

}
module.exports = submitMapDB;