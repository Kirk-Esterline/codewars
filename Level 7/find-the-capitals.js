/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]

*/

// My Solution

// split into an array
// reduce word array 
// check if capital, and push index into new array
// return new array

var capitals = function (word) {
	return word.split('').reduce((arr,cur,idx) => {
    if (cur === cur.toUpperCase()) arr.push(idx)
    return arr
  }, [])
};