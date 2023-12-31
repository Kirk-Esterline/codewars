/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

// My Solution

// use n%2
// turnery operator

function testEven(n) {
    return n % 2 === 0 ? true : false
}

// Amazing.  Solution can be even simpiler:

function testEven(n) {
    return n % 2 === 0;
}