/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/


//My Solution

//find total cost (days * 40)
//compare trip length to discount options and deduct discount if applicable
//return discounted rate or original rate

function rentalCarCost(d) {
    let baseRate = d * 40;
    let newRate = 0;
    if (d >= 7) {
      newRate = baseRate - 50;
      return newRate;
    } else if (d >= 3) {
      newRate = baseRate - 20;
      return newRate;
    } else {
      return baseRate;
    }
  }