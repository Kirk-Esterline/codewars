/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/


//My Solution

// sort the array
// if array[0] = [1] return the last element
// otherwise return the first element

function findUniq(arr) {
    let arrange = arr.sort((a, b) => a > b ? -1 : 1)
    if (arrange[0] === arrange[1]) {
      return arrange[arrange.length-1]
    } else {
      return arrange[0]
    }
  }