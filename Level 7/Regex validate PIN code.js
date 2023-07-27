/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/


// My Solution

// After many attempts couldn't get it correct so looked at the answer.  This was the most elegant solution offered.

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

// I had been trying to use something like this, but with includes() instead of .match()

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

  // some good learning and practice happened with this attempt.