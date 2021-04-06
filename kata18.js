const formulateSquare = function(message) {
  message = message.replace(/\s/g, ""); //remove all spaces
  let sections = "";
  let lettersPerRow = Math.ceil(Math.sqrt(message.length));
  let splitPoints = [lettersPerRow, ];
  for (let i = 0; i < message/length; i++) {
   

  splitPoints.fo
  // for (let i = 0; i < lpc; i++) {
  //   for (let line = 0; line < lpr; line++) {
  //     row += message[index];
  //     index++;
  //     // if (i === lpc - 1) line += 1; //if last row add difference of missing letters
  //   }
  //   row += "\n";
  // }
  // return row;
}

const squareCode = function(message) {
  // let lettersPerRow = Math.ceil(Math.sqrt(message.length));
  // let numberOfRows = Math.ceil(message.length / lettersPerRow);
  const square = formulateSquare(message);
  // const rows = square.split("\n");
  // rows.pop(); //gets rid of added space
  // console.log(square, rows);
  // let encodedMessage = "";
  
  // for (let i = 0; i < rows[0].length; i++) { //runs 4 times 
  //   for (let j = 0; j < rows.length; j++) { //needs to run 3, 3, 2, 2
  //     if (rows[j][i]) encodedMessage += rows[j][i];
  //   }
  //   encodedMessage += " ";
  // }
  // return encodedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

//output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau