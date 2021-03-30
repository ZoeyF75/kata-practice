const urlEncode = function(text) {
  return text.trim().replace(/\s/g, "%20");
};

// function w/o using replace method
// const urlEncode = function(text) {
//   let newString = "";
//   text.trim().split('').forEach(letter => {
//     letter === " " ? letter = "%20" : letter;
//     newString += letter;
//   });
//   return newString
// };

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));