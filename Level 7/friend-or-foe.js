/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

*/

// My Solutions

// new array
// forEach
// if length == 4
// push into new array
// return new array

function friend(friends){
    let trueFriends = []
    friends.forEach(name => {
      if(name.length === 4) {
        trueFriends.push(name)
      }
    })
    return trueFriends
  }

// Another attempt using .filter method
// friends.filter()
// filter based on length
// return new filter array

function friend(friends){
    return friends.filter(item =>{
      if(item.length === 4){
      return item
        }
    })
  }


