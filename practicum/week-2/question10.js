/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let array = n.toString().split(''); // convert input integer to a string so we can split it into array
    let arrayInt = array.map(Number); // convert the array of strings to an array of integers

    arrayInt.sort((a,b) => a - b); // sort the array in incr order

    let lengthOfArray = arrayInt.length; // get the length of the integer array to tell
    let difference = arrayInt[lengthOfArray - 1] - arrayInt[0];
    return difference;
 
};

let test = maxMinusMin(472);
console.log(test);

let test2 = maxMinusMin(1029);
console.log(test2);