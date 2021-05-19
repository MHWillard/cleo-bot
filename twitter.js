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
var Twit = require('twit');

//var T = new Twit({});

//prepare scheduled tweet object

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })

  //T.post/get(path, param, callback)
T.get('search/tweets', {q: 'batman', count: 100}, function(err, data, response) {
    console.log(data);
});

//https://ads-api.twitter.com/9/accounts/:account_id/scheduled_tweets
//account_id: ID for account used
//scheduled_at
//test: search for tweets to log to console and test connection through main account