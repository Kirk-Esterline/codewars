/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// My Solution

// split string into array
// map the array if/else less than 5
// return mapped array

function fakeBin(x){
    return x.split('').map(i => i < 5 ? 0 : 1).join('')
    }
