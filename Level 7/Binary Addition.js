/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))
*/


//My Solution
//add two numbers
//use .toString(2) to be a base of two which should be binary
//return new number as a string

function addBinary(a,b) {
    return (a + b).toString(2);
  }

//Learned that the .toString() method accepts a 'base' as a parameter