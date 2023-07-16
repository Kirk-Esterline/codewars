/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


// My Solution

//initialize sum to 0
//Check if the array is an array
//check if the array is empty
//iterate through the array
//sum positive numbers
//return sum (or 0)

function positiveSum(arr) {
    let sum = 0
    if (!Array.isArray(arr)) {
      return sum
    } else if (arr.length < 1) {
      return sum
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          sum += arr[i]
        }
      }
      return sum
    }
  }