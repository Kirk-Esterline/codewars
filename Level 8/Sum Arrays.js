/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/


//My Solution

// Initialize total to 0
// if array is empty return 0
// else, for loop iterating through the array and add each number to total
// return total

// Sum Numbers
function sum (numbers) {
    "use strict";
    let total = 0;
    if (numbers.length === 0) {
      return total;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
      }
    }
    return total
  };

  //After looking at the solutions I realized that checking for an empty array was unnessecary.  By initializing total = 0 the for loop would have returned 0 if the array was empty.