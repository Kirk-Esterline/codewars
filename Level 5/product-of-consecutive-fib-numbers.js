/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/




// My First Attempt

// while number <= prod
// declare 2 numbers n1 and n2
// number = n1 * n2
// if (n1 * n2 < prod) {n1 = n2 & n2 += n1}
// let tOrF if number === prod ? true : false
// return [n1, n2, tOrF]

function productFib(prod){
    let number = 1
    let n1 = 1
    let n2 = 2
    let answerArray = []
    let tOrF
    let increment = n1
    while (number <= prod) {
      increment = n1
      n1 = n2
      n2 += increment
      number = increment * n1
    }
    number === prod ? tOrF = true : tOrF = false
    answerArray.push(increment, n1, tOrF)
    return answerArray
  }


  // My second attempt is planned to use an existig array of fib numbers rather than trying to calculated the numbers on the fly. 
  

  // initialize an array of fib numbers
// initialize number
// while loop: number <= prod 
// number = fib[i] * fib[i + 1]
// if number === prod ? true : false
// return array of numbers and tOrF

function productFib(prod){
    let fibNums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
    let number = 1
    let i = 1
    let n1 
    let n2
    let answerArray = []
    let tOrF
    while (number < prod) {
      number = fibNums[i] * fibNums[i - 1]
      n1 = fibNums[i - 1]
      n2 = fibNums[i]
      i++
    }
    number === prod ? tOrF = true : tOrF = false
    answerArray.push(n1, n2, tOrF)
    return answerArray
  }

  // *** On the right track.  As long as the numbers are small enough to end up within the declared array the tests work.  However, the test go beyoud my array and thus declarring an array is a bit impractical.


// ######### Here is the solution that finally worked.  It is 99% the same as the first solution, except that the while loop only runs while the number is < prod.  Realized on attempt number 2 that the logic of '<=' what flawed and would cause the loop to run one more time than needed.  Must also admit that I don't fully understand how this ended up working.  In testing the function found this combination of n1, n2, increment to produce the correct answers.  But as yet don't quite understand my own logic of how it got there.  I'll keep pondering on it. 

  // while number <= prod
// declare 2 numbers n1 and n2
// number = n1 * n2
// if (n1 * n2 < prod) {n1 = n2 & n2 += n1}
// let tOrF if number === prod ? true : false
// return [n1, n2, tOrF]

function productFib(prod){
    let number = 1
    let n1 = 1
    let n2 = 2
    let answerArray = []
    let tOrF
    let increment = n1
    while (number <= prod) {
      increment = n1
      n1 = n2
      n2 += increment
      number = increment * n1
    }
    number === prod ? tOrF = true : tOrF = false
    answerArray.push(increment, n1, tOrF)
    return answerArray
  }

