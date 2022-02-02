/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    let presentInBoth = [];
    let upperA = A.toUpperCase();
    let upperB = B.toUpperCase();
    let usingSplitA = Array.from(upperA);
    let usingSplitB = Array.from(upperB);

    for(let i of usingSplitB) {
        for(let j of usingSplitA) {
            if (i == j) {
                presentInBoth.push(i);
            }
        }
    }

    for(let i = 0; i < presentInBoth.length - 1; i++) {
        for(let j = i + 1; j < presentInBoth.length; j++) {
            if ( (presentInBoth[i] == presentInBoth[j]) ) {
                presentInBoth = presentInBoth.slice(i, j);
            }
        }
    }

    return presentInBoth.length;
};

let firstParam = 'gtY';
let secondParam = 'iTygrtg';
let test1 = howManyCommon(firstParam, secondParam);
console.log(test1);


/* 
Pseudocode:
empty array for the same. convert both to array. Iterate through b, then iterate through a, checking if any are the same. 
append the same to a list. check for repeats in the list. print length of the new array
*/
