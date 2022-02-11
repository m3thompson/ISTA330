/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.

Example 2:
input: n = 24
output: 5
The groups are: [1, 10], [2, 11, 20], [3, 12, 21], [4, 13, 22], [5, 14, 23], [6, 15, 24], [7, 16], [8, 17], ...
*/

var largestGroupsCount = function (n) {
    /*
        consider all possible groups:
            for each group:
                calculate the size of the group
        calclate the max size of any group (the largest size)
        calculate the numbr of groups that have the largest size
    */

    // first step: iterate over all possible groups:
    let alreadyConsidered = [];
    let groups = [];
    for (let i = 1; i <= n; i++) {
        // check if i is in alreadyConsidered. If it is the skip the iteration and go to the next iteration
        let found = alreadyConsidered.find((x) => x == i);  // for a fxn, {} needed only if there is > 1 line of code, if you do not have {}, you do not need 'return'
        if (found == i) {
            continue; // if found = true, ignore the rest of the code in the main loop you are in, go to the next iteration of the main loop
        }

        let group = [];
        group.push(i);
        for (let j = i + 1; j <= n; j++) {
            // check if j is in alreadyConsidered. If it is then skip the iteration and go to the next iteration
            let found = alreadyConsidered.find((x) => x == j);  // for a fxn, {} needed only if there is > 1 line of code, if you do not have {}, you do not need 'return'
            if (found == j) {
                continue;
            }

            // check whether the sum of the digits of j is equal to i or not
            let digits = j.toString(); // turn each j to a string
            let sum = 0;
            for (let k = 0; k < digits.length; k++) {
                sum += Number(digits[k]);
            }
            if (sum == i) {
                group.push(j);
                alreadyConsidered.push(j);
            }
        }
        groups.push(group);
    }
    // DELETE this test when all is done
    // let's test what we have so far
    /*
    for(let group of groups) {
        console.log(group);
    }
    */

    // calculate the largest size
    let maxSize = 0;
    for (let group of groups) {
        let size = group.length;
        if(size > maxSize) {
            maxSize = size;
        }
    }
    //console.log(maxSize);

    // calculate the numbr of groups that have the largest size
    let count = 0;
    for(let group of groups) {
        let size = group.length;
        if(size == maxSize) {
            count = count + 1;
        }
    }

    return count;
};

q9_test1 = largestGroupsCount(24);
console.log(q9_test1);