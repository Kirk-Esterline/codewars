/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/


// My Solutions

// ---- Attempt One ----
// initialize a new array 
// iterate though given array
// check value type
// if number push to new array
// return new array

function filter_list(l) {
    let newArray = []
    l.forEach( n => {
      if (Number.isInteger(n)) {
        newArray.push(n)
      }
    })
    return newArray
  }


  //---- Attempt two ----

// use filter() method on array
// use .isInteger() as the parameter
// return result

function filter_list(l) {
    return l.filter( n => Number.isInteger(n))
  }