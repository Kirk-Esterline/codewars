/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/


//My Solution

//Iterate through the array
//double the number
//push to new array
//return new array

function maps(x){
    let newArr = []
    for (let i = 0; i < x.length; i++) {
      let num = x[i] * 2
      newArr.push(num)
    }
    return newArr
  }

//Learned that 'maps' isn't the array, but 'x' is the array that needed to be iterated through