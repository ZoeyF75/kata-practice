const formulateSquare = function(message) {
  message = message.replace(/\s/g, ""); //remove all spaces
  let sections = [];
  let lettersPerRow = Math.ceil(Math.sqrt(message.length));
  let splitPoints = [];
  for (let i = lettersPerRow; i < message.length; i += lettersPerRow) {
   splitPoints.push(i); //adds multiple of letters per column to split message intro rows
  }
  splitPoints.push(message.length); //adds last split point for the complete message
  let prev = 0;
  splitPoints.forEach(point => {
    sections.push(message.slice(prev, point));
    prev = point;
  })
  return sections;
}

const squareCode = function(message) {
  let column = Math.ceil(Math.sqrt(message.length));
  const square = formulateSquare(message);
  let encodedMessage = "";
  for (let i = 0; i < column; i++) {
    square.forEach(section => {
      if (section[i]) encodedMessage += section[i]; //for each section if column exists add to ecoded message
    })
    encodedMessage += " ";
  }
  return encodedMessage;
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