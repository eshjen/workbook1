"use strict";
var number = 4;
var condition = number > 5;
console.log(condition)
if (condition) {
    console.log("The number is greater than 5.");
}else{
    console.log("The number is less than 5.");
}

// simpler example than yesterdays exercise //


var number = 9;
var remainder =  number % 2;
console.log(remainder);

var condition = remainder == 0;
if (condition) {
    console.log("The number is even.");
}else{
    console.log("The number is odd.");
}