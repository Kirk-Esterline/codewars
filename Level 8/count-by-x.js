/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
*/

// My Solution

// initialize counter variable
// for loop i <= n
// push into z

function countBy(x, n) {
    let z = [];
    let num = 0
    for(let i = 1; i <= n; i++){
      z.push( num += x)
    }
    return z;
  }