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

//get current day of year, current year, and the last numerical day of the current year
let currentDay = dayjs(now).dayOfYear()
let currentYear = dayjs(now).year().toString();
let lastDayOfCurrentYear = dayjs(currentYear + '-12-31').dayOfYear()

const date = future.diff(now, 'day');
const years_left = Math.round((date / 365));
//count number of days of current year and subtract current passed days to get days left
const days_left = (lastDayOfCurrentYear - currentDay)

module.exports = {years_left, days_left}