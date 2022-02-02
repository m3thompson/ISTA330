/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

// one grouping: (4,3) , (8,0)  3 + 0
// another grouping: (4,8) , (3,0)  4 + 0
// another grouping: (4,0) , (3,8)  0 + 3
// ...

// 1. sort the input => [0,3,4,8]
// 2. we create the pairs as follows: first and second will be a pair, third and fourth will be a pair, and so on
// 3. for each pair find the min
// 4. calculate the sum of the mins you calculated in step 3

var maxSumOfMins = function(input) {

       let sumOfMins = 0; // var for stored sum

       input.sort((a, b) => a - b);
       for(let i = 0; i < input.length; i++) {
              if(i % 2 === 0) {
                     sumOfMins += input[i];
              }
       }
       return sumOfMins;
}


/*
This was my 1st attempt at the question. 

var maxSumOfMins = function(input) {

       let sortedInput = [];
       sortedInput = input.sort((a, b) => a - b);
       arrayLength = input.length;
       let listOfMins = [];
       let sum = 0;
       
       for (let i = 0, j = arrayLength - 1; i <= j; i++, j--) {
              listOfMins.push[i];
       }

       for (let minElement of listOfMins) {
              sum = sum + minElement;
       }

       return listOfMins
};

let test1 = maxSumOfMins([4, 3, 8, 0]);
console.log(test1);
*/