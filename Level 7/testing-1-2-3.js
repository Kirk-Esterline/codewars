/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

// My Solution

// forEach let n = 1 & n++
// use template literal add the number, colon, and space
// return array

var number=function(array){
    let numberedArray = []
    let n = 1
    array.forEach(string => {
      numberedArray.push(`${n}: ${string}`)
      n++
    })
    return numberedArray
  }

  // Here is a more elegant solution using map method seen in the solutions (I had thought of using .map() but got distracted and used forEach instead.)

  // map array
// return index + 1 and string

var number=function(array){
    return array.map((string, index) => {
      return `${index + 1}: ${string}`
    })
  }