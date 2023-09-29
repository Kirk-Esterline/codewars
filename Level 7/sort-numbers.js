/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
*/


// My solution 

// check if empty
// nums.sort()

function solution(nums){
    if (!nums || nums.length < 1) {
      return []
    } else {
      return nums.sort((a,b) => a - b)
    }
  }