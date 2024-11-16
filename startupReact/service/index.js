const express = require('express');
const uuid = require('uuid');
const app = express();


let users = {}
let currentUser={}

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/newPlayer', async (req, res) => {
    const user = users[req.body.username];
    const currentUser = users[req.body.username];
    if (user) {
        console.log("You are already logged in");
    }
    else {
        const user = { username: req.body.username, email: req.body.email, password: req.body.password, token: uuid.v4(), maps: {} };
        users[user.username] = user;

        res.send({ token: user.token });
    }


});

apiRouter.post('auth/returning', async (req, res) => {
    const user = users[req.body.username];
    if(user){
        if(req.body.password === user.password){
            user.token = uuid.v4();
            res.send({ token: user.token });

        }
        else{
            console.log("I don't know you? Try creating an account")
        }
    }
})

apiRouter.delete('/auth/signout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if(user){
        delete user.token;
        currentUser = null;
    }
    else{
        console.log("Sign out Failed- Were you even logged in?")
    }
})
apiRouter.get('/maps', (_req, res) => {
    res.send(currentUser.maps);
})

apiRouter.post('maps/upload', (req, res) => {
    if(submitMap(req.body.mapName, req.body.mapInfo, req.body.mapImage)){
     console.log("Upload Successful");
    }
    else {
        console.log("Upload Failed");
    }
})


function submitMap(mapName, mapInfo, mapImage){
    currentUser.maps[mapName] = {name: mapName, info: mapInfo, image: mapImage};
    if(currentUser.maps[mapName]){
        console.log("You've just submitted a map named:")
        console.log(mapName);
        console.log("Here is some information about it: ", mapInfo);
        return true;

    }
    else{
        console.log("Issue with the upload");
        return false;
    }


}
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});