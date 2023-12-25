/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

*/

// My Solution

// afterHealth = health - damage
// if afterHealth < 0 return 0
// return afterHealth

function combat(health, damage) {
    let afterHealth = health - damage
    return afterHealth < 0 ? 0 : afterHealth
   }