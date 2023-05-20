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