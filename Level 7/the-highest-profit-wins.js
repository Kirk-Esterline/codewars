/*
Write a function that returns both the minimum and maximum number of the given list/array.
Examples (Input --> Output)

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

// My Solution

// initialize result
// push min and max

function minMax(arr){
    let result = []
    result.push(Math.max(...arr))
    result.unshift(Math.min(...arr))
    return result
  }

  // Here is a clever solution from the solutions

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

  //  This is clever because it returns the answer in the form of an array without needing to move values around. 