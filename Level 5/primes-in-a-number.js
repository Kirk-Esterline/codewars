/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


*/

// My Solution in progress - This needs to be optimized since some tests time out

// for each divisor push into divisors array
// reduce each divisor into number and number of times
// concatinate into string and return

function primeFactors(n){
    let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,71,73,79,83,89,97]
    let divisors = []
    let dividedNumber = n
    let i = 0
    while (dividedNumber > 1) {
      while (dividedNumber % primes[i] === 0) {
        dividedNumber = dividedNumber / primes[i]
        divisors.push(primes[i])
      }
      i++
      }
    let divisorsObj = divisors.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    }, {})
    let result = ""
    for (const number in divisorsObj) {
      if (divisorsObj[number] > 1) {
        result += `(${number}**${divisorsObj[number]})`
      } else {
        result += `(${number})`
      }
    }
  return result
    }
