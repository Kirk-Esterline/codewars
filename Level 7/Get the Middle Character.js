/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/


//My Solution

//check if s is only one char - if so return that char
//if s is odd - return middle char
//else return middle two chars
//try and use ternary operators

function getMiddle(s)
{
  return s.length === 1 ? s : s.length % 2 !=0 ? s.slice(s.length/2, s.length/2 + 1) : s.slice(s.length/2 - 1, s.length/2 + 1);
}

// Originally completed the challenge with if / else, but figured out how to get the ternary to return for me.