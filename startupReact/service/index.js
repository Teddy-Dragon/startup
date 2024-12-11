const express = require('express');
const uuid = require('uuid');
const app = express();
const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');
const database = require('./myMongo.js')
const mapDatabase = require('./Mongo2');



let users = {};
let currentUser= {
    'username': null,
    'password': null,
    'email': null
}
let sessions = {}

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/newPlayer', async (req, res) => {

    if (currentUser.username !== null) {
        console.log("You are already logged in");
        res.status(400).send({msg: "You are already logged in my friend"});
    }
    else {
        const newUser = { username: req.body.username, email: req.body.email, password: req.body.password, token: uuid.v4() };
        currentUser = newUser;
        await database(2, newUser);
        res.status(201).json({"token": newUser.token});
    }


});

apiRouter.post('/auth/returning', async (req, res) => {
    const person = {
        username: req.body.username,
        password: req.body.password,
        token: null
    }
    database(1, person).then(result => {
        let newRes = null;
        if(result !== null) {
            newRes = result.token;
        }
        else {
            console.log("Did not find a match");
        }
        return newRes
    }).then(newRes => {
        person.token = newRes;
        currentUser = person;
        res.status(201).json({"token": newRes});
    });


})

apiRouter.delete('/auth/signout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if(user){
        delete user.token;
        currentUser = {username: null, password: null, email: null};
        res.status(204).end();
    }
    else{
        res.status(204).end();
    }
})
apiRouter.get('/maps', (_req, res) => {
    const mapDBCall = mapDatabase(4, currentUser.token, null);
    console.log(mapDBCall);
    res.send(mapDBCall);

})

apiRouter.post('/maps/upload', (req, res) => {
    if(submitMap(req.body.mapName, req.body.mapInfo, req.body.mapImage)){
        console.log("Upload Successful");
    }
    else {
        res.status(401).send({ msg: 'The upload failed' });
    }
})
apiRouter.post('/game', (req, res) => {
    const session = sessions[req.body.code];
    if(session){
        res.send("There is a session with that code");
    }
    else{
        res.send("There is no session with that code");
    }

})


function submitMap(mapName, mapInfo, mapImage){
    const mapScheme =
        {
            mapName: mapName,
            mapInfo: mapInfo,
            mapImage: mapImage
        };
    if(mapScheme.mapName !== null){
        mapDatabase(1, currentUser.token, mapScheme);
        return true;

    }
    else{
        console.log("Issue with the upload");
        return false;
    }


}
app.listen(port, "localhost", 10, () => {
    console.log(`Listening on port ${port}`);
});