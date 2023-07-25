/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/


// My Solution

// Split the number into an array
// Iterate through the array and square each number
// push each squared number into array
// join the new array
// return the new array as a number

function squareDigits(num){
    let array = num.toString().split('')
    let newArray = []
    array.forEach( e => {
      let squrNum = Number(e) * Number(e)
      newArray.push(squrNum)
    })
    return Number(newArray.join(''));
  }