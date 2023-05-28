//5/15/23
    
    //Messi is a soccer player with goals in 3 leagues. Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

//5/20/23

    //We need a function that can transform a string into a number. What ways of achieving this do you know?

function stringToNumber(str) {
    return Number(str)
  }

    //Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

    //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    return s.repeat(n)
  }

    //Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
    //"I love you"
    //"a little"
    //"a lot"
    //"passionately"
    //"madly"
    //"not at all"
    //If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

function howMuchILoveYou(nbPetals) {
  if (nbPetals > 6) {
    while (nbPetals >6) {
      nbPetals -= 6
    }
  }
  if (nbPetals === 1) {
    return "I love you"  
    }
  else if (nbPetals === 2) {
    return "a little"  
    }
  else if (nbPetals === 3) {
    return "a lot"  
    }
  else if (nbPetals === 4) {
    return "passionately"  
    }
  else if (nbPetals === 5) {
    return "madly"  
    }
  else {
    return "not at all"  
    }
}

//5/27/23

//In this kata you will create a function that takes a list of non-negative integers and string and returns a new list with the strings filtered out.

function filter_list(l) {
  let numArray = []
  for (let i = 0; i < l.length; i++) {
  const element = l[i];
  if (typeof element === 'number') {
    numArray.push(element)
  }
} return numArray
}

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//Example: "ATTGC" --> "TAACG"

function DNAStrand(dna){
  let compDNAStrand = ""
  for (let i = 0; i < dna.length; i++) {
    const element = dna[i].toLowerCase()
    if (element === "a") {
      compDNAStrand += 'T'
    }
    else if (element === "t") {
      compDNAStrand += 'A'
    }
    else if (element === "c") {
      compDNAStrand += 'G'
    }
    else if (element === "g") {
      compDNAStrand += 'C'
    }
  }
  return compDNAStrand
}

//Write a function that takes in a string of onew or more words, and returns the same string, but with all fiver or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be uncluded only  when more than one word is present.

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//5/28/23

//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

function countBits(n) {
  let binary = n.toString(2)
  let numCount = 0
  for (i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      numCount += 1
    }
  } return numCount
}