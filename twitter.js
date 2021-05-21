//fetch current EST from API
//convert
//compare with set timeframe (probably like 7 PM EST)
//if true: build and post scheduled tweet (or use twitter API for this)

//TWITTER API CONNECTION:
//first, establish twitter API connection object

//TWITTER API ENDPOINTS:
//POST accounts/:account_id/scheduled_tweets (create a new Scheduled Tweet)
//build the tweet post object and send it out at scheduled time
//use twitter connection object

//last: if needed, close connection


//create new Twit object with API connection
let Twit = require('twit');

let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    app_only_auth: true
});

//connect and authenticate with Twitter API app
//run get search from Twiter
//dump to console

//can I get this into an object?
//T.get('search/tweets', {q: 'batman', count: 1}, function(err, data, response) {
    //console.log(data);
//});

//https://ads-api.twitter.com/9/accounts/:account_id/scheduled_tweets
//account_id: ID for account used
//scheduled_at
//test: search for tweets to log to console and test connection through main account

//prepare scheduled tweet object

module.exports = {T}