/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/


// My Solution

// split into appay
// new array with new and additional letters
// for each push 'char' to upper plus index
// return joined with - 

function accum(s) {
	let arr = s.split('')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]
    newArr.push(`${char.toUpperCase()}${char.toLowerCase().repeat(i)}`)
  }
  return newArr.join('-')
}

// An elegant solution from Codewars
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}