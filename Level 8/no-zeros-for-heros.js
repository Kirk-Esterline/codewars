// Not Complete yet

// split number into array 
// from end push if

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