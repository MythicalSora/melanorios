var DateDiff = require('date-diff');

var date1 = new Date(2017, 11, 30); // 2015-12-1
var date2 = new Date(2018, 0, 1); // 2014-01-1
 
var diff = new DateDiff(date1, date2);

console.log(diff.hours());

if(diff.hours() == -24 || diff.hours() < -24) {
    console.log('Succes')
} else {
    console.log('Failure')
}