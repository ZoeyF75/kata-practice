//combined pascal and camel only difference is where capitalization starts, hence startIndex perameter
//title is the same as Pascal except with spaces
const camelPascalCase = function(input, startIndex, spaces) {
  input = input.split(' ');
  for (let i = startIndex; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1, input[i].length);
  }
  return spaces? input.join(' ') : input.join('');
};

const snakeKebabCase = function(input, spaceholder) {
  return input.replace(/\s/g, spaceholder);
}

const vowelConsonantCase = function(input, regrex) {
  let returnInput = "";
  for (i = 0; i < input.length; i++) {
    if (input.charAt(i).match(regrex)) {
      returnInput += input.charAt(i).toUpperCase();
    } else {
      returnInput += input.charAt(i);
    }
  }
  return returnInput;
}


const functionCalls = function(input, type) {
  switch(type) {
    case "camel":
      return camelPascalCase(input, 1, false);
    case "pascal":
      return camelPascalCase(input, 0, false);
    case "snake":
      return snakeKebabCase(input, "_");
    case "kebab":
      return snakeKebabCase(input, "-");
    case "title":
      return camelPascalCase(input, 0, true);
    case "vowel":
      return vowelConsonantCase(input, /[aeiou]/gi);
    case "consonant":
      return vowelConsonantCase(input, /[BCDFGHJKLMNPQRSTVWXYZ]/gi);
    case "upper":
      return input.toUpperCase();
  }
}

const makeCase = function(input, type) {
  if (Array.isArray(type)) {
    type.forEach(t => {
      input = functionCalls(input, t);
    })
    return input;
  } else {
    return functionCalls(input, type)
  }
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING








