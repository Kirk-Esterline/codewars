/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/


// My Solution

//string to uppercase and split
//iterate through array
//push any char into array
//push repeated chars into counting array
//return the counting array length

function duplicateCount(text){
    let duplicateArray = []
    let countArray = []
    let stringArray = text.toUpperCase().split('')
    for (let i = 0; i < stringArray.length; i++) {
      if (!duplicateArray.includes(stringArray[i])) {
        duplicateArray.push(stringArray[i])
      } else if (duplicateArray.includes(stringArray[i]) && !countArray.includes(stringArray[i])) {
        countArray.push(stringArray[i])
      }
    }
    return countArray.length
  }
  
  

