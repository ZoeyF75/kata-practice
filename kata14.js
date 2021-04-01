const subtract = function(key, amount, container) {
    container.changeObj[key] = Math.floor(container.change / amount); //adds keys to change object and value
    container.change -= container.changeObj[key] * amount; //updates change
    return container;
}

//following function check divisibility and pass key name and change value to subtract, subtract does the actual calculation
const tens = function(container) {
  if (container.change / 2000 >= 1) { //change is divisible by $20
    subtract("twentyDollars", 2000, container);
  }
  if (container.change / 1000 >= 1) { //change is divisible by $10
    subtract("tenDollars", 1000, container);
  } 
  return container;
}

const ones = function (container) {
  if (container.change / 500 >= 1) {
    subtract("fiveDollars", 500, container); //change is divisible by $5
  }
  if (container.change / 200 >= 1) { //change is divisible by $2
    subtract("twoDollars", 200, container);
  } 
  if (container.change / 100 >= 1) { //change is divisible by $1
    subtract("oneDollar", 100, container);
  }
  return container;
}

const tenths = function(container) {
  if (container.change / 25 >= 1) { //change is divisible by quarter
    subtract("quarter", 25, container);
  }
  if (container.change / 10 >= 1) { //change is divisible by dime
    subtract("dime", 10, container);
  } 
  return container;
}

const hundreths = function(container) {
  if (container.change / 5 >= 1) { //change is divisible by nickel
    subtract("nickel", 5, container);
  }
  if (container.change / 1 >= 1) { //change is divisible by penny
    subtract("penny", 1, container);
  } 
  return container;
}

const calculateChange = function(total, cash) {
  let container = {};
  container.changeObj = {};
  container.change = cash - total;
  if (container.change.toString().length >= 4) { //4 digits or more twenty's and ten's
    tens(container);
  }
  if (container.change.toString().length === 3) { //3 digits toony or loony
    ones(container);
  }
  if (container.change.toString().length === 2) { //2 digits quarter or dime
    tenths(container);
  }
  if (container.change.toString().length === 1) { //1 digit nickel or penny
    hundreths(container);
  }
  return container.changeObj;
};

console.log(calculateChange(1787, 2000)); 
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// Twenty dollars 2000
// Ten dollars  1000
// Five dollars 500
// Two dollars  200
// One dollar 100
// Quarter (25¢)  25
// Dime (10¢) 10
// Nickel (5¢) 5
// Penny (1¢) 1