const express = require('express');
const app = express();
const cron = require('node-cron')

require('dotenv').config()
const port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.get('/', (req, res) => {
    res.send('Backend online.');
    //run date countdown
    //if countdown is good: build and fire tweet to API as POST request
    //this cron job, when finished, will run every 24 hours and create the scheduled tweet
    cron.schedule('* * * * *', () => {
        console.log('This cron task will run a Tweet job every day. Currently it\'s running every minute or so.');
    })
});

app.listen(port, (req, res)=> {
    console.log('Backend running on port ' + port + '.');
});

//tweet object: json object
//detect time
//form json tweet object = actual OOP object (text, user)
//POST tweet to API to hit certain account

//hosted on Heroku
//has to routinely check for time
//when time is hit: then it builds post and pings Twitter API with it

//docs to use: Node, Heroku