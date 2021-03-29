// Use some sort of looping. Do Not use Array.prototype.filter()

const conditionalSum = function(values, condition) {
  let sum = 0;
  values.forEach(element => {
    element % 2 === 0 && condition === "even" ? sum += element : element % 2 !== 0 && condition === "odd" ? sum += element : sum += 0;
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));