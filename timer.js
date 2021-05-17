//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

const dayjs = require('dayjs');

let now = dayjs().format('MM/DD/YYYY');
let future = dayjs('2525-01-01').format('MM/DD/YYYY');

let nowString = now.toString();
let futureString = future.toString();