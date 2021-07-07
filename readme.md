# Cleopatra 2525 Countdown Bot
This is a simple bot I wrote for my personal 100 Days of Code project. It took me a little over a week to whip up, but it taught me more about using Node and working with APIs. In this case, this bot communicates with the Twitter API and posts a simple countdown of today's date until 01/01/2525, and for fun, posts a link to the Cleopatra 2525 theme song. (It's very catchy.) I also assigned it to a Heroku dyno and used Heroku Scheulder to run it every day. Not super complex, but it taught me some good practical applications of working with Node, and I feel like it can easily be extended.

## Dependencies
* Twit
* DayJS
* Dotenv

## Installation
1. Clone the repo.
``` sh
git clone https://github.com/MHWillard/cleo-bot.git
```

2. Install npm packages.
``` sh
npm install
```

3. Add your own Twitter API keys to your .env file: twitter.js uses API_KEY, API_SECRET_KEY, ACCESS_TOKEN, and SECRET_ACCESS.

From there you can add functionality or run it straight.


## Usage
Since this is a fairly basic Twitter bot skeleton, it can be extended in various ways. I was able to use it to grab search data during my testing. 

For formal testing, I didn't run any on this project (I'm going to do so on my next one) so use whichever suite you like.

## Contributing
Contributions are welcome, just fork the project and add your own branches.

## License
This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.
