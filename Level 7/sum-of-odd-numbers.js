/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/


// My solution

// n * pow(n, 2)

function rowSumOddNumbers(n) {
	return n * Math.pow(n,2)
}

// I feel like a stumbled onto the elegant mathmatical solution.  I was trying to build the pyrimid withh loops with minimal success and on a hunch found the answer.
