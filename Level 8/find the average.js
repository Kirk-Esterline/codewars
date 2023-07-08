/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//My Solution

//add all the numbers together
//  use a for loop
//divide by numbers
//check for NaN
//return 'average'

function findAverage(array) {
    if (array.length === 0) {
      return 0;
    } else {
      let totalSum = 0;
      for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
      }
      return totalSum/array.length
    }
  }