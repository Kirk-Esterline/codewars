/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// My Solution

// indexOf #
// slice from start to index

function removeUrlAnchor(url){
    let end = url.indexOf('#')
    return end == -1 ? url : url.slice(0, end)
  }

// The .indexOf() method is interesting since it returns -1 when no element was found.  So, when combined with the .slice()  method it would return the whole string without the last char, which was interesting to figure out.