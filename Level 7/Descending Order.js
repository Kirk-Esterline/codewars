/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/


//My Solution (had to look at the solutions to get past a mental block)

//Use a seriese so methods()
//.split('') and .toSorted().reverse

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''));
    }

// My original logic was on the right track.  I had to look at the solutions to get the parseInt() and join() correct.