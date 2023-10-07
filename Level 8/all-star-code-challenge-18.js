/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
*/

// My Solution

// split into array
// forEach check equality
// return count

function strCount(str, letter){  
    let count = 0;
    str.split('').forEach(char => {
      if (char === letter) {
        count++
      }
    })
    return count
  }

  // Another potentially better way to solve this challenge

  function strCount(str, letter){
    return str.split('').filter(c => c == letter).length;
  }

  // And a very clever way to solve the challenge

  function strCount(str, letter) {
    return str.split(letter).length-1
  }