/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// My Solution - This has flumuxed me thus far

// figure out what the function is looking for
// use this. to access the test string and split into an array
// split each word into chars
// char[0].toUpperCase
// char.splice(1,0)

String.prototype.toJadenCase = function () {
    let words = this.split(' ')
    let newWords = []
    words.forEach( word => {
      let chars = word.split('')
      newWords.push(`${chars[0].toUpperCase()} ${chars.slice(1).join('')})
    })
    return newWords.join(' ')
  };