/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

// My Solution

// check if string or array
// if string then split ''
// new array
// reduce if item != previous item push to newArray
// return reduced array

var uniqueInOrder=function(iterable){
    let checkArray
    if(typeof iterable === 'string') {
      checkArray = iterable.split('')
    } else {
      checkArray = iterable
    }
    let newArray = checkArray.reduce((arr, item) => {
      if(arr.length < 1) {
        arr.push(item)
      } else if (item != arr[arr.length-1])
        arr.push(item)
      return arr
    }, [])
    return newArray
  }