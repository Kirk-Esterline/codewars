/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.
*/

// My solution - And I maintain that this should work

// while 1 and 2 are both > 0
// subtract 1 damage from 2 health
// subtract 2 damage from 1 health
// repeat
// return 'fighter' whos health > 0

function declareWinner(fighter1, fighter2, firstAttacker) {
    let first
    let second
    let round = 1
    if (fighter1.name === firstAttacker) {
      first = fighter1
      second = fighter2
    } else if (fighter2.name === firstAttacker) {
      first = fighter2
      second = fighter1
    }
    while (fighter1.health > 0 && fighter2.health > 0) {
      if (!round % 2 === 0) {
        second.health -= first.damagePerAttack
      } else {
        first.health -= second.damagePerAttack
      }
      round++
    }
    if(second.health > 0) {
      return second.name
      } else {
        return first.name
      }
  }

  //  After looking at the solutions I found this solutions which is the closest to what I was trying to do.  I have to assume that my attempt didn't properly account for who attacked first dispite my best attempt.

  // while 1 and 2 are both > 0
// subtract 1 damage from 2 health
// subtract 2 damage from 1 health
// repeat
// return 'fighter' whos health > 0

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack
        fighter1.health -= fighter2.damagePerAttack
      }
    if(fighter1.health <= 0 && fighter2.health <= 0) {
      return firstAttacker;
      } else if (fighter1.health <= 0) {
        return fighter2.name
      } else {
        return fighter1.name;
      }
    }
  