let changeObj = {};

const tens = function(change) {
  if (change / 2000 > 1) {
    changeObj.twentyDollars = Math.floor(change / 2000);
    change -= changeObj.twentyDollars * 2000;
  }
  if (change / 1000 > 1) {
    changeObj.tenDollars = Math.floor(change / 1000);
    change -= changeObj.tenDollars * 1000;
  } 
  return change;
}

const ones = function (change) {
  if (change / 500 > 1) {
    changeObj.fiveDollars = Math.floor(change / 500);
    change -= changeObj.fiveDollars * 500;
  }
  if (change / 200 > 1) {
    changeObj.twoDollars = Math.floor(change / 200);
    change -= changeObj.twoDollars * 200;
  } 
  if (change / 100 > 1) {
    changeObj.oneDollar = 1;
    change -= changeObj.oneDollar * 100;
  }
  return change;
}

const tenths = function(change) {
  if (change / 25 > 1) {
    changeObj.quarter = Math.floor(change / 25);
    change -= changeObj.quarter * 25;
  }
  if (change / 10 > 1) {
    changeObj.dime = Math.floor(change / 10);
    change -= changeObj.dime * 10;
  } 
  return change;
}

const hundreths = function(change) {
  if (change / 5 > 1) {
    changeObj.nickel = Math.floor(change / 5);
    change -= changeObj.nickel * 5;
  }
  if (change / 1 > 1) {
    changeObj.penny = Math.floor(change / 1);
    change -= changeObj.penny * 1;
  } 
  return change;
}

const calculateChange = function(total, cash) {
  let change = cash - total;
  if (change.toString().length >= 4) { //4 digits or more twenty's and ten's
    change = tens(change);
  }
  console.log(changeObj);
  if (change.toString().length === 3) { //3 digits toony or loony
      change = ones(change);
  }
  console.log(changeObj);
  if (change.toString().length === 2) { //2 digits quarter or dime
    change = tenths(change);
  }
  console.log(changeObj);
  if (change.toString().length === 1) { //1 digit nickel or penny
    change = hundreths(change);
  }
  console.log(changeObj);
  return changeObj;
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