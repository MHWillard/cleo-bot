//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const duration = require('dayjs/plugin/duration');
dayjs.extend(relativeTime);
dayjs.extend(duration);

let now = dayjs();
let future = dayjs('2525-01-01');
//let countdown = dayjs().to(dayjs('2525-01-01').format('MM/DD/YYYY'), true);

//let nowString = now.format('MM/DD/YYYY').toString();
//let futureString = future.format('MM/DD/YYYY').toString();
//let countdownString = countdown.format('MM/DD/YYYY');
//et countdownString = countdown;

const date = future.diff(now, 'day');
const years_left = Math.round((date / 365));
const days_left = (years_left % 365)

console.log('Years left:' + years_left);
console.log('days left:' + days_left);

module.exports = {years_left, days_left}