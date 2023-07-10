/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


//My Solution

//iterate through the string
//test each character to see if it is a vowel
//increment total count
//might need to split the string into an array to iterate through.

function getCount(str) {
    let total = 0;
    let strArray = str.split('');
    for (let i = 0; i < str.length; i++) {
      if (strArray[i] === 'a' || strArray[i] === 'A') {
        total++
      } else if (strArray[i] === 'e' || strArray[i] === 'E') {
        total++
      } else if (strArray[i] === 'i' || strArray[i] === 'I') {
        total++
      } else if (strArray[i] === 'o' || strArray[i] === 'O') {
        total++
      } else if (strArray[i] === 'u' || strArray[i] === 'U') {
        total++
      }
    }
    
    return total;
  }
