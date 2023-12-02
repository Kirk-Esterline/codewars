/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

// My Solution

// for loop starting at 1
// if n % i == 0 than counter ++
// return counter

function getDivisorsCnt(n){
    let count = 2
    let mod = 2
    if (n === 1) {
      return 1
    }
    while (mod * mod <= n) {
      if (n % mod === 0) {
        if (mod * mod < n) {
          count += 2
        }
        else {
          count ++
        }
      }
      mod++
    }
  return count
    }