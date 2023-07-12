/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/


//My Solution

//initilize an empty array
//str to lowercase
//iterate through the string
//  if letter is not included in the array 
//  push the letter into the array
//  if array .includes() letter = return false
//  else return true

function isIsogram(str){
    let string = str.toLowerCase();
    let array = [];
    let result = true;
    for (let i = 0; i < string.length; i++) {
      if (array.includes(string[i])) {
        result = false;
        break;
      } else {
        array.push(string[i])
      }
    }
    return result;
  }

//The thing to learn and wrap my head around was to start off assuming that result was true.  Otherwise I was assigning true at the end which made the logic backwards.