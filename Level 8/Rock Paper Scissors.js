/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):
*/


// My Solution

// if p1 and p2 equal then 'draw'
// initilize winning message
// check for winning conditions

const rps = (p1, p2) => {
  let n = 1
  if (p1 === p2) {
    return 'Draw!'
  } else if (p1 === 'paper' && p2 === 'scissors') {
    n = 2
  } else if (p1 === 'rock' && p2 === 'paper') {
    n = 2
  } else if (p1 === 'scissors' && p2 === 'rock') {
    n = 2
  }
  return `Player ${n} won!`
};