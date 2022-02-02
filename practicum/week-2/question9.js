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

    var dictionary = {};
    for (let i = 0; i < input.length; i++) {
      dictionary[shuffleIndices[i]] = input[i];
    }

    var output = "";

    for (let j = 0; j < shuffleIndices.length; j++) {
      output += dictionary[j];
    }
    return output;

};
