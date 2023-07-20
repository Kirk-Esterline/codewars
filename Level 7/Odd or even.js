/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/


//My Solution
// initilize new variable = 0
// check if array is empty
// check if even or odd
// return appropriate string

function oddOrEven(array) {
    let sum = 0
    array.forEach( n => sum += n )
    return (sum % 2 === 0) ? 'even' : 'odd';
  }

  //refactored to use ternay operator