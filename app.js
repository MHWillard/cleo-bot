const express = require('express');
const app = express();
require('dotenv').config()
const cron = require('node-cron');
const {years_left, days_left} = require('./timer.js');
const {T} = require('./twitter')

const port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
res.send('Backend online.');
console.log('There are ' + years_left + ' years and ' + days_left + ' days left until the events of Cleopatra 2525! https://www.youtube.com/watch?v=e2ZRSwul7cE');
T.get('search/tweets', {q: 'batman', count: 1}, function(err, data, response) {
    console.log(data);
});

//app.listen(port, (req, res)=> {
    //console.log('Backend running on port ' + port + '.');
//});


//app.get('/', (req, res) => {
//
//});

//cron.schedule('* * * * *', () => {
    //console.log('There are ' + years_left + ' years and ' + days_left + ' days left until the events of Cleopatra 2525! https://www.youtube.com/watch?v=e2ZRSwul7cE');
    //T.get('search/tweets', {q: 'superman', count: 1}, function(err, data, response) {
      //  console.log(data);
    //});
//})