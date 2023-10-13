/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
*/

// My solution

// split into array
// filter array if vowel array does not include item return item
// return joined array 

function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let strArray = string.split('').filter(item => {
      if(!vowels.includes(item)) {
        return item
      }
    })
    return strArray.join('');
  }