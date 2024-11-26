const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

async function main(number, user) {
    // 1: returning user. Check database to see if user already exists
    // 2: new user, Add information to database
    // 3: user maps, upload file to databse under individual user.


    const url = `mongodb+srv://${config.userName}:${config.password}${config.hostName}`;

    const client = new MongoClient(url);

    if(number === 1){
        await checkUser(user);
    }
    if(number === 2){
        await submitUser(user);
    }


    async function checkUser(user){
        const toCheckName = user.username;
       const check = client.db().User_Info.find(toCheckName);
        if(check){
            const verify = client.db().User_Info.toCheckName.find(user.password);
            if(verify){
                console.log("Successfully logged in");
                return true;
            }
            else{
                console.log("Wrong password");
                return false;
            }
        }
        else{
            console.log("Username not found");
            return false;
        }
        console.error("Inside the checkUser function, something went wrong.");
    }

    async function submitUser(user){
        client.db().User_Info.insertOne(user);

    }

}
module.exports = main;