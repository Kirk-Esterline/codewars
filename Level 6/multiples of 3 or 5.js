/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/


//My Solution

//for loop starting at 0 and less than 'number'
//if number is less than 0 return 0
//test if divisible by both 3 and 5
//test if divisible by 3 or 5
//add each number to 'total'
//return total

function solution(number){
  let total = 0;
  if (number < 0) {
    return total   
  } else {
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      total += i;
      } else if (i % 3 === 0) {
        total += i;
      } else if (i % 5 === 0) {
        total += i;
      }
    }
  }
  return total
}