//create new Twit object with API connection
let Twit = require('twit');

let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.SECRET_ACCESS
});

module.exports = {T}