const express = require('express');
const app = express();
const cron = require('node-cron');
const {years_left, days_left} = require('./timer.js');
const {T} = require('./twitter')

require('dotenv').config()
const port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.get('/', (req, res) => {
    res.send('Backend online.');
    T.get('search/tweets', {q: 'batman', count: 1}, function(err, data, response) {
        console.log(data);
    });
    //run date countdown
    //if countdown is good: build and fire tweet to API as POST request
    //this cron job, when finished, will run every 24 hours and create the scheduled tweet
    cron.schedule('* * * * *', () => {
        console.log('There are ' + years_left + ' years and ' + days_left + ' days left until the events of Cleopatra 2525! https://www.youtube.com/watch?v=e2ZRSwul7cE');
        console.log('Years left: ' + years_left);
        console.log('Days left: ' + days_left);
        T.get('search/tweets', {q: 'superman', count: 1}, function(err, data, response) {
            console.log(data);
        });
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