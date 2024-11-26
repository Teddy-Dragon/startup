const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

async function main(number, user) {
    // 1: returning user. Check database to see if user already exists
    // 2: new user, Add information to database
    // 3: user maps, upload file to database under individual user.

    const UserScheme = {
        username: user.username,
        password: user.password,
        email: user.email,
        token: user.token,
        maps: user.maps,
    }

    const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;

    const client = new MongoClient(url);
    const database = client.db('User_Info');
    const playerCollection = database.collection('Players');

    if(number === 1){
        await checkUser(user);
    }
    if(number === 2){
        await submitUser(user);
    }


    async function checkUser(){
        return playerCollection.findOne(UserScheme);
    }

    async function submitUser(){
        await playerCollection.insertOne(UserScheme);

    }

}
module.exports = main;