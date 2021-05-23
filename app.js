const express = require('express');
//const app = express();
require('dotenv').config()
const {years_left, days_left} = require('./timer.js');
const {T} = require('./twitter')

const port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
console.log('There are ' + years_left + ' years and ' + days_left + ' days left until the events of Cleopatra 2525!\nhttps://www.youtube.com/watch?v=e2ZRSwul7cE');

T.get('search/tweets', {q: 'batman', count: 1}, function(err, data, response) {
    console.log(data);
});

T.post('statuses/update', { status: 'Testing Twitter Dev API...' }, function(err, data, response) {
    console.log(data)
  })