/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

// 1. convert the input to an array with commas seperating
// 2. assign the 

var suffleString = function(input, shuffleIndices) {

    let inputArray = input.split('');
    let outputArray = [];

    for(let i = 0; i < shuffleIndices.length; i++) {
        for(let j = 0; j < input.length; j++) {
            outputArray.push(inputArray[j]); // not sure what to do here and next
        }
        
    }

    return outputArray;

let test9_01 = suffleString('llheo', [2, 3, 0, 1, 4]);
console.log(test9_01);
    

};
