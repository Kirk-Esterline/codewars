/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

*/

// My Solution

// initialize total
// loop through busStops
// total += busStops[i][0] - busStops[i][1]
// return total

var number = function(busStops){
    let total = 0
    for (let i = 0; i < busStops.length; i++) {
      total = total + busStops[i][0] - busStops[i][1]
    }
    return total
  }

// The Reduce Method continues to amaze me!  Here a solution from the solutions

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Here is my second attempt.  I refactored my code to use the reduce method in the manor of the example above.

var number = function(busStops){
    return busStops.reduce((total, [on, off]) => total + on - off, 0)
  }

// Attempt number 3 using reduce but passing 'stops' through as a whole argement not breaking into peices.

// Reduce Method

var number = function(busStops){
    return busStops.reduce((total, stops) => total + stops[0] - stops[1], 0)
  }