/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

// My Solution

// check if begin is less than end
// for loop to define the sequence
// start at start, increment by step, stop at or before end
// reduce sequence down into sum
// return result

const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0
    } else {
      let sequence = []
      for (let i = begin; i <= end; i += step) {
        sequence.push(i)
      }
      return sequence.reduce((acc,c) => acc + c, 0)
    }
  };