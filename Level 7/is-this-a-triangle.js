/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

// My Solution

// Math theory: sum of two sides will always be greater than the third side
// if three conditionals are true, return turn else false

function isTriangle(a,b,c) {
    if(a+b > c && b+c > a && c+a > b) {
      return true
    } else {
     return false;
    }
  }