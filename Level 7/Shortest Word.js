/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/


// My Solution

// split on spaces
// iterate and compare to 'shortest'

function findShort(s){
    let newArr = s.split(' ')
    let shortest = 10
    newArr.forEach(word => word.length < shortest ? shortest = word.length : shortest += 0)
    return shortest
  }


// Other given solutions I liked

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}