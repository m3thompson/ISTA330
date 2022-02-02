/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

// 1. create new array for nbigger/even
// 2. iterate through each element of the array
// 3. iterate thrugh each element of the array again, escluding the element in the first for loop
// 4. have a count based on the index for each element of the new array
// 5. if the number in the array % 2 === 0 AND thenumber in the array is bigger than the one already on, add 1 to the count

var biggerAndEven = function(input) {
    let outputArray = [];
    let count = 0;

    for(let i = 0; i < input.length - 1; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if ( (input[j] > input[i]) && (input[j] % 2 === 0) ) {
                count++;
                outputArray.push(count);
                count = 0;
            }
        }
    }

    return(outputArray);

    let test8_01 = biggerAndEven([23, 44, 12, 4]);
    console.log(test8_01);
};