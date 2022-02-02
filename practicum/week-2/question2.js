
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
     let lenCookies = cookies.length; //length of the array cookies
     let numberOfCookies = 0; //initial count of array cookies befor looping through it

     for(let i of cookies) {
             numberOfCookies = numberOfCookies + i;
     }

     if ( ((numberOfCookies + extraCookies) % lenCookies ) == 0) {
             return 'true';
     } else {
             return 'false';
     }
 };

let test1 = canGetEqualCookies([3 ,5, 8], [8]);
console.log(test1);


 /* 
 Pseudocode:
 If the total of all elements of cookies + extraCookies int is divisible by the number of elements in the 
 array with 0 remainder --> output = true, if not output = false
 */