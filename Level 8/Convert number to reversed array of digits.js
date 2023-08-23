/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

*/


// My solution

// toString and .split()
// map to Number and .reverese()

function digitize(n) {
    let arr = n.toString().split('')
    return arr.map(Number).reverse()
  }