/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
*/


// My Solution

// initialize count to 0
// iterate through the array, if true count +1
// return count

function countSheeps(arrayOfSheep) {
    let total = 0
    arrayOfSheep.forEach(sheep => sheep === true ? total++ : total += 0)
    return total
  }