/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// My Solution (had to look at the solutions to solve.  The peice I needed help figuring out was the for(prop in obj) syntax to check the value of each keys property)

// if length == 0 return A[0]
// reduce A into an onject
// search the object for the odd property
// return the key of the odd property

function findOdd(A) {
    if (A.length === 1) {
    return A[0];
      } else {
        let numsObj = A.reduce((acc, item) => {
          if (!acc[item]){
            acc[item] = 0
          } 
          acc[item]++
          return acc
        }, {})
        
        for (key in numsObj) {
          if (numsObj[key] % 2 !== 0) return Number(key)
        }
      }
    }

// Note: the checking for A.length === 1 isn't nessecary.  I added it to get some coding momentum with this challenge.