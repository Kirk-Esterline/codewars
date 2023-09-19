/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]


*/

// My Solution

// newArray
// for loop, i = a and <= b
// push i into array and return

function between(a, b) {
    let newArray = []
    for (let i = a; i <= b; i++) {
      newArray.push(i)
    }
    return newArray
  }