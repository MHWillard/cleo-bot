//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

//require dayjs and plugins
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const duration = require('dayjs/plugin/duration');
const dayOfYear = require('dayjs/plugin/dayOfYear')

//Extend plugins
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(dayOfYear);

let now = dayjs();
let future = dayjs('2525-01-01');
//let countdown = dayjs().to(dayjs('2525-01-01').format('MM/DD/YYYY'), true);

//let nowString = now.format('MM/DD/YYYY').toString();
//let futureString = future.format('MM/DD/YYYY').toString();
//let countdownString = countdown.format('MM/DD/YYYY');
//et countdownString = countdown;

//get current day of year
let currentDay = dayjs(now).dayOfYear()

let currentYear = dayjs(now).year().toString();

let lastDayOfCurrentYear = dayjs(currentYear + '-12-31').dayOfYear()

const date = future.diff(now, 'day');
const years_left = Math.round((date / 365));
//count number of days of current year and subtract current passed days to get days left
const days_left = (lastDayOfCurrentYear - currentDay)

console.log('Years left:' + years_left);
console.log('days left:' + days_left);
console.log(currentDay);
console.log(currentYear);

module.exports = {years_left, days_left}