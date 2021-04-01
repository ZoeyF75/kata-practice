//combined pascal and camel only difference is where capitalization starts, hence startIndex perameter
const camelPascalCase = function(input, startIndex) {
  input = input.split(' ');
  for (let i = startIndex; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1, input[i].length);
  }
  return input.join('');
};

const snakeKebabCase = function(input, spaceholder) {
  return input.replace(/\s/g, spaceholder);
}

const makeCase = function(input, type) {
  switch(type) {
    case "camel":
      return camelPascalCase(input, 1);
    case "pascal":
      return camelPascalCase(input, 0);
    case "snake":
      return snakeKebabCase(input, "_");
    case "kebab":
      return snakeKebabCase(input, "-");
    case "title":
      return titleCase(input);
  }
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
// console.log(makeCase("this is a string", "title")); // This Is A String
// console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
// console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
// console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING








