//Calculate the nth fibbonaci number
let sequence = [1];
let lastTerm;
let secondLast;
let nth = 1;
let nthTerm;

const fibbonaci = (n) => {
  lastTerm = sequence[sequence.length - 1];
  sequence[sequence.length - 2] === undefined ? secondLast = 0 : secondLast = sequence[sequence.length - 2];
  if (nth === n) {
    nthTerm = sequence[nth - 1];
  } else {
    sequence.push(lastTerm + secondLast);
    nth++;
    fibbonaci(n);
  }
  return nthTerm;
}

//ex.
console.log(fibbonaci(10));