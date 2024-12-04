const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');
const {response} = require("express");
const maps = require("../src/components/Maps");

 function main(number, user) {
    // 1: returning user. Check database to see if user already exists
    // 2: new user, Add information to database
    // 3: user maps, upload file to database under individual user.

    const UserScheme = {
        username: user.username,
        password: user.password,
    }
    const newUserScheme = {
        username: user.username,
        password: user.password,
        email: user.email,
        token: user.token,
        maps: user.maps
    }

    const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;

    const client = new MongoClient(url);
    const database = client.db('User_Info');
    const playerCollection = database.collection('Players');

    if(number === 1){
        return  checkUser();
    }
    if(number === 2){
        return submitUser();
    }


    function checkUser() {
       return playerCollection.findOne(UserScheme);
    }

    async function submitUser() {
        return playerCollection.insertOne(newUserScheme);

    }

}

function submitmap(user, map){
    const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;
    const client = new MongoClient(url);
    const database = client.db('User_Info');
    const playerCollection = database.collection('Players');
    const person = playerCollection.findOne(user.username);

    return person.maps.insertOne(map);

 }

 function getmap(user){
     const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;
     const client = new MongoClient(url);
     const database = client.db('User_Info');
     const playerCollection = database.collection('Players');
     const person = playerCollection.findOne(user.username);

     return person.maps;

 }
module.exports = {main, submitmap, getmap};