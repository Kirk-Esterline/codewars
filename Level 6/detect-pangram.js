/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// My Solution

// set alpha string to compare to
// if alpha string contains char and test string ! contain char
// push into test array
// sort test and compare to alpha string

function isPangram(string){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let test = []
    string.toLowerCase().split('').forEach(char => {
      if (alpha.includes(char) && !test.includes(char)){
          test.push(char)
          }
      })
    let result = Array.from(test.sort()).join('')
    return result === alpha
    }
    