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