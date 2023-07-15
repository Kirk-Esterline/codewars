/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/


//My Solution

//If null or empty array return empty array
//Iterate through the array
//ternary:  > 0 count else add
//return two numbers

function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if (!Array.isArray(input)) {
      return [];
    } else if (!input.length) {
      return [];
    } else {
      for (let i = 0; i < input.length; i++) {
        input[i] > 0 ? count++ : sum += input[i];
      } 
      return [count, sum];
    }
  }

//It took a minute to realize that I needed to check if it 'input' was a valid array first before performing the other checks.
