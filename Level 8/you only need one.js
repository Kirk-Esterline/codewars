/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


//My Solution

//Find method for value incuded in array, or use a loop
//if incuded return true, else return false

function check(a, x) {
    // your code here
    return a.includes(x) ? true :  false;
  }


  // After learned that my solution was overly complicated since .includes() will return true or false on its own