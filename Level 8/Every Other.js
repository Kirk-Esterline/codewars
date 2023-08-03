/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/


// My Solution

// initialize new array
// iterate every other starting from 0
// push arr[i] to newArr and return

function removeEveryOther(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i += 2) {
     newArr.push(arr[i])
    }
    return newArr
  }