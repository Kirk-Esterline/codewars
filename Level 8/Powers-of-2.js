/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/


// My Solution

// initialize numbers array
// loop while <= to n
// return array

function powersOfTwo(n){
    let nums = []
    for (let i = 0; i <= n; i++) {
      nums.push(Math.pow(2,i))
    }
    return nums
  }

