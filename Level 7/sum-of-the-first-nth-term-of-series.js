/*
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

// My Solution

// initialize result
// specify return for 0 and 1
// for loop keep adding n number of times
// let denom = 4
// count < n

function SeriesSum(n) {
    let result = 1
    let denom = 4
    if (n === 1) {
      return (Math.round(result * 100) / 100).toFixed(2)
    } else if (n === 0) {
      return '0.00'
    } else {
      for (let i = 1; i < n; i++) {
        result += 1/denom
        denom += 3
      }
      return (Math.round(result * 100) / 100).toFixed(2)
      }
  }