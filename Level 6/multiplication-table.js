/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

// My Solution

// need two different loops.  One looping for each line of multiples
// initilize finalAnswer
// for Loop i <= n, i++ 
// for loop j <= n
// push j * i into result array
// i loop pushes array into finalAnswer
// return finalAnswer

multiplicationTable = function(size) {
    let finalAnswer = []
    for (let i = 1; i <= size; i++) {
      let array = []
      for (let j = 1; j <= size; j++) {
        array.push(i * j)
      }
      finalAnswer.push(array)
    }
    return finalAnswer
  }
  