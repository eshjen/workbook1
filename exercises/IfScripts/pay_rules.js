"use strict";
var payRate = 17.3;
var overtimePayRate = payRate * 1.5;
var regularPay = 0;
var overtimePay = 0;
var totalHours = 45;
var regularHours = 40;
var overtimeHours = 0;
var grossPay = 0;

overtimeHours = totalHours - regularHours;

console.log(overtimeHours);
if (totalHours <= 40) {
  grossPay = payRate * totalHours;
} else {
  regularPay = regularHours * payRate;
  overtimePay = overtimeHours * overtimePayRate;
  grossPay = regularPay + overtimePay;
}
console.log(grossPay);
