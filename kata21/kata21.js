let prompt = require("prompt-sync")();

const genRandomNumber = () => Math.floor(Math.random() * 10);
const getAnswer = () => parseInt(prompt("Guess a number: "));

const compare = () => {
  number = genRandomNumber();
  let answer = getAnswer();
  let guessed = [];
  let count = 0;

  while (answer !== number) {
    if (!Number.isInteger(answer)) {
      console.log("Please enter a number, and try again.")
      answer = getAnswer();
    } else {
      if (guessed.includes(answer)) {
        console.log("You already guessed this number!");
        answer = getAnswer();
      } else {
        guessed.push(answer); //adds new answer to list of previous guesses
        count++; //increases number of guesses
        if (answer < number) {
          console.log("Too low!");
        } else {
          console.log("Too high!");
        }
        answer = getAnswer();
      }
    }
    
    if (answer === number) {
      count++; //ensures last guess gets counted if its right
      console.log(`You got it! It took you ${count} attempts!`);
    } 
  }
  
}
 
compare();