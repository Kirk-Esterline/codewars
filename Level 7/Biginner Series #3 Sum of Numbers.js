/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/


// My Solution

// check if a and b are the same
// while loops for a less than b and b less than a
// a or b += next number
// return final number

function getSum(a, b){
    if (a === b) {
      return a
    } else if (a < b) {
      let i = a
    while (i < b) {
      i++
      a += i
    }
    return a
      } else {
        let i = b
    while (i < a) {
      i++
      b += i
      }
        return b
        }
  }

  // An elegant solution 

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }