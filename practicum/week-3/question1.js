/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {

        let result = true;

        
        // the next fxn is to find the maximum. you can do 1) this way, 2) a for loop 3) sort the array
        let maxOfElements = input.reduce((max, n) => { 
                if (n > max) {
                        max = n
                }
                return max;    
        });

        for(let n of input) {
                if(n != maxOfElements) {
                        if(maxOfElements < 2 * n) {
                                result = false;
                                break;
                        }
                }
        }
        return result;
};

let q1_test1 = largestNumberIsAtLeastTwice([3,2,21,40]);
console.log(q1_test1);


/*
I tried doing this before we learned the reduce function

var largestNumberIsAtLeastTwice = function(input) {
        let maxInput = Math.max(input);
        let i = 0;
        let moreThanHalf = [];

        while ( (input[i] != maxInput) && (i < input.length) ) {
                if ( (input[i] * 2) > (maxInput) ) {
                        moreThanHalf.push(input[i]);
                }
                i++
        }

        if (moreThanHalf.length > 0) {
                return false;
        }
        else {
                return true;
        }
};

let test1_01 = largestNumberIsAtLeastTwice([3,40,40,50]); //should return false, but returns true for all arrays
console.log(test1_01);

*/