/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

// My Solution

// for loop of cc length - 4
// slice off last 4
// concatinate the #s and the last 4

function maskify(cc) {
    let lastFour = cc.slice(-4)
    let hash = '#'
    for (let i = 0; i < cc.length-5; i++) {
      hash +='#'
    }
    if (cc.length < 5) {
      return cc
    } else {
    return hash + lastFour
      }
  }

  // I have since learned that this is not an optimized solution
  