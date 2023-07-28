/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

//My Solution

//initialize string with words[0]
//iterate through the array and push elements to string
//return string

function smash (words) {
    if (words.length < 1) {
      return ''
    }
    let string = `${words[0]}`
    for (let i = 1; i < words.length; i++) {
      string += ` ${words[i]}`
    }
    
    return string
  };