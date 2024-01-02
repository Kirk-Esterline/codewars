/*
Write a function that returns the number of significant figures in a given number. You can read about significant figures below.
*/
 
// My Solution

// split string into array
// if includes('.') slice from first significant number to the end
// findIndex of first significant number
// if no '.' findLastIndex > 0 slice between first and last
// declare first and last
// return array.length as a number

function numberOfSigfigs(n) {
    let numArray = n.split('')
    const first = numArray.findIndex(num => Number(num) > 0)
    const last = numArray.findLastIndex(num => Number(num) > 0) + 1
    if (numArray.includes('.')) {
      return numArray.slice(first) - 1
    } else {
    return numArray.slice(first, last); 
    }
  }