/*

*/

// My Solution

// positiom + roll * 2

function move (position, roll) {
    return position + roll * 2
  }

// possibly a better way to do this (from the other solutions is this)

let move = (position, roll) => position + roll * 2

// This way might make 'move' more useable within a boardgame setting