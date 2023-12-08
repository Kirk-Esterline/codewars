/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

*/

// My First solution - I like it be cause it is one line and really clean.  But it isn't the most transparent.

// can this be short circuted?
// backup plan is an if statment

function setAlarm(employed, vacation){
    return employed && !vacation
  }

// Second Solution - this code is a much more transparet as to what it is looking for.  And if abstracted away it might be just as good.

// usimg if statements

function setAlarm(employed, vacation){
    if (employed && !vacation) {
        return true
    } else {
        return false 
    }
  }