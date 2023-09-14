/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:


*******************************************************************************/

let multiMap = function(value, n, cb) {
  let count = 0;
  let newvalue = value;
  while (count < n) {
    newvalue = cb(newvalue);
    count++
  }
  return newvalue;
};

// run value through cb
// keep newvalue
// run newvalue through cb
// keep newvalue
// when n is reached
// return newvalue




let result1 = multiMap(7, 2, function (n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function (n) {
  return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function (s) {
  return s + "!";
});
console.log(result3); // hi!!!!!

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
