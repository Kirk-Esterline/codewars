/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

*/

// My Solution

// while number > 6 - 6
// switch statements based on number
// return phrase

function howMuchILoveYou(nbPetals) {
    let number = nbPetals
    while (number > 6) {
      number -= 6
    }
    switch(number) {
        case 1 :
          return 'I love you';
          break;
        case 2:
          return 'a little';
          break;
        case 3:
          return 'a lot';
          break;
        case 4:
          return 'passionately';
          break;
        case 5:
          return 'madly';
          break;
        default:
          return 'not at all';
    }
}

// Here is an interesting solution from the solutions. The interesting part is how it controls for pettal counts greater than 6.  It uses % which is something I didn't expect.

function howMuchILoveYou(nbPetals) {
  let phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]  
  return phrases[(nbPetals - 1) % 6]
}
