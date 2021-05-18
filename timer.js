//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

const dayjs = require('dayjs');

let now = dayjs();
let future = dayjs('2525-01-01');

let nowString = now.format('MM/DD/YYYY').toString();
let futureString = future.format('MM/DD/YYYY').toString();

//console.log(nowString);
//console.log(futureString);

module.exports = {nowString, futureString}