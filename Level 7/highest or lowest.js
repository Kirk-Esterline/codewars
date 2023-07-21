/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/


//My Solution
function highAndLow(numbers){
    let arr = numbers.split(' ')
    let high = 0
    let low = 0
    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i])
      if ( high === 0 && low === 0 ) {
        high = num
        low = num
      } else if (num > high) {
        high = num
      } else if (num < low) {
        low = num
      }
    }
    return `${high} ${low}`
    }