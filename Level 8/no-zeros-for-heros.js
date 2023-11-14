// Had to check the solutions.  The track I was going down started returning NaN with negative numbers

/*
Remove only ending zeros
*/

// split number into array 
// from end push if


// Frist attempt that was not working
function noBoringZeros(n) {
    let digits = Array.from(String(n), Number)
    let resultArr = []
    for (let i = digits.length-1; i>-1; i--) {
      if(resultArr.length === 0 && digits[i] > 0) {
        resultArr.unshift(digits[i])
      } else {
        resultArr.unshift(digits[i])
      }
    }
    return Number(resultArr.join(''))
  }

  // A very elegant solution dividing the number by 10 for as long as the number is a multiple of 10 and not 0

  function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

// Here is a solution a long the lines of what I was trying to do, but pops the zeros off the end and 'breaks' at the first number > 0.

function noBoringZeros(x) {
  let a = `${x}`.split('');
  for(let i = a.length -1; i >= 0; i--){
    if (a[i] == 0){
        a.pop()
    }else{
        break
    }
  }
return Number(a.join(''))
}