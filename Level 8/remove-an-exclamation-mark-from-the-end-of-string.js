/* 
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

// My Solution
// slice length - 1

function remove (string) {
    if (string[string.length - 1] === '!'){
    return string.slice(0,string.length-1);
      } else {
        return string
      }
  }

// Here is a clever and clean way of achiveing the same result

function remove (string) {
    return string.endsWith('!') ? string.slice(0, -1) : string
}