//get current date/time from external API
//convert
//subtract from time in show: 01/01/2525
//create and return print out: number of years and days

const dayjs = require('dayjs');

let now = dayjs();
let future = dayjs(new Date(2525,1,1));