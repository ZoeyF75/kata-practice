const camelCase = function(input) {
  input = input.split(' ');
  for (let i = 1; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1, input[i].length);
  }
  return input.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious