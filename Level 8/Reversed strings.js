/*Complete the solution so that it reverses the string passed into it. */

//My Solution

//no reverse on strings only on arrays, so split string into an array
//reverse the array
//use join() to recreate string

function solution(str){
    let arr = str.split('');
    let revArr = arr.reverse();
    let revString = revArr.join('');
    return revString;
  }
  
  //Learned that .split() and .join)() need to be told where to split and join.  In this case it was on the blank spaces.


// A very elegant solution from the 'solutions'
/*
function solution(str){
  return str.split('').reverse().join('');  
}
*/