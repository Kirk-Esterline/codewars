/*
When given a name in a string, return the name with the last name first.
*/

// My Solution

// split str
// reverse 
// join

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }