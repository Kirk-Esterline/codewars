/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/


// My Solution

//initialize a new array
//iterate through array and * -1
//push to new array
//return new array

function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
      newArr.push(array[i] * -1)
    }
     return newArr;
  }