/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    let sortedInput = [];
    sortedInput = input.sort((a, b) => a - b);

    let lengthInput = input.length;

    if (lengthInput % 2 == 1) {
        return sortedInput[(lengthInput / 2) - 0.5];
    }

    else {
        return (sortedInput[lengthInput / 2] + sortedInput[(lengthInput / 2) - 1]) / 2;
    }

};
