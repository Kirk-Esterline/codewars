/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/


//My Solution

//calculate bmi from weight and height
//with if statements compare the 4 circumstances 
//Return appropriate responce

function bmi(weight, height) {
    let calcBmi = weight / (height * height)
    if (calcBmi <= 18.5) {
      return 'Underweight'
    } else if (calcBmi <= 25.0) {
      return 'Normal'
    } else if (calcBmi <= 30.0) {
      return 'Overweight'
    } else {
      return "Obese";
      }
  }