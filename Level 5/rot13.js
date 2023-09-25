/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

// My Solution

// check if a-z or A-Z
// if alpha char change for the appropriate char
// push into new array

function rot13(message){
    let newArr = []
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let rot13 = message.split('').forEach(function(item){
      if (chars.includes(item)){
        const charSwitch = {
            a: 'n', b: 'o', c:'p', d:'q', e:'r',f:'s',g:'t',h:'u',i:'v',j:'w',k:'x',l:'y',m:'z',n:'a',o:'b',p:'c',q:'d',r:'e',s:'f', t:'g',u:'h',v:'i',w:'j',x:'k',y:'l',z:'m',A:'N',B:'O',C:'P',D:'Q',E:'R',F:'S',G:'T',H:'U',I:'V',J:'W',K:'X',L:'Y',M:'Z',N:'A',O:'B',P:'C',Q:'D',R:'E',S:'F',T:'G',U:'H',V:'I',W:'J',X:'K',Y:'L',Z:'M'
        }
        newArr.push(charSwitch[item])
      } else {
        newArr.push(item)
      }
    })
    return newArr.join('')
  }

  //  Refactored to have only one object rather than an object and an array.

  function rot13(message){
    let newArr = []
    const charSwitch = {
              a: 'n', b: 'o', c:'p', d:'q', e:'r',f:'s',g:'t',h:'u',i:'v',j:'w',k:'x',l:'y',m:'z',n:'a',o:'b',p:'c',q:'d',r:'e',s:'f', t:'g',u:'h',v:'i',w:'j',x:'k',y:'l',z:'m',A:'N',B:'O',C:'P',D:'Q',E:'R',F:'S',G:'T',H:'U',I:'V',J:'W',K:'X',L:'Y',M:'Z',N:'A',O:'B',P:'C',Q:'D',R:'E',S:'F',T:'G',U:'H',V:'I',W:'J',X:'K',Y:'L',Z:'M'
          }
    
    message.split('').forEach(function(item){
      if(charSwitch.hasOwnProperty(item)){
         newArr.push(charSwitch[item])
         } else {
           newArr.push(item)
         }
    })
    return newArr.join('')
  }