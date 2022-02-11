
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */


// Kadane Algorithm: linear way to do it, one for loop, faster computational speed

 var largestSubarray = function(input) {
     let max = 0;
     let currentMax = 0;
     for (let n of input) {
             currentMax += n;
             if (currentMax < 0) {
                     currentMax = 0;
             }
             if (max < currentMax) {
                     max = currentMax;
             }
     }
     return max;
    
 };

 
 // O(n^2) computation speed

 var largestSubarray_Brute_Force = function(input) {
        let max = input[0]; // max is 1st element of input array
        let bestStart = 0, bestEnd = 0;
        // loop through the input index at each element with startIndex, goes through the input array once, element by element
        for (let startIndex = 0; startIndex < input.length; startIndex++) {
                // loop through the input endex again, startIndex is the same, endIndex changes
                // starts at the index the first for loop is at
                for (let endIndex = startIndex; endIndex < input.length; endIndex++) {
                        let sumOfSubarray = input.slice(startIndex, endIndex + 1).reduce((total, n) => total + n);
                        if (max < sumOfSubarray) {
                                max = sumOfSubarray;
                                bestStart = startIndex;
                                bestEnd = endIndex;
                        }
                }
        }
        console.log('The best subarray:');
        console.log(input.slice(bestStart, bestEnd + 1));
        return max;
       
    };


 let q2_test1 = largestSubarray_Brute_Force([-12,3,-1,5,-2,1,-7]);
 console.log(q2_test1);

 let q2_test2 = largestSubarray([-12,3,-1,5,-2,1,-7]);
 console.log(q2_test2);
