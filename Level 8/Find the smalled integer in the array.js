/*
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/


// My Solution 

// Sort array
// return first value in array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArr = args.sort((a, b) => a > b ? 1 : -1)
      return sortedArr[0]
    }
  }

// attempt number two trying to get everything on one line

//return Math.min

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }