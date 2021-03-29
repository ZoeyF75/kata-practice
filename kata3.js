// For this exercise, consider the following to be vowels: a, e, i, o, and u

const numberOfVowels = function(string) {
  let count = 0;
  string.split('').forEach(e => {
    e === "a" || e === "e" || e === "i" || e === "o" || e === "u" ? count ++ : count;
  });
  return count;
 };

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));