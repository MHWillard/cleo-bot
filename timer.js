//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

let now = dayjs();
let future = dayjs('2525-01-01');
let countdown = dayjs().from(dayjs('2525-01-01'));

let nowString = now.format('MM/DD/YYYY').toString();
let futureString = future.format('MM/DD/YYYY').toString();
let countdownString = countdown.format('MM/DD/YYYY').toString();

//relativetime day.js plugin

module.exports = {nowString, futureString, countdownString}