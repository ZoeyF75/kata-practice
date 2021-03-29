// In this exercise, we will be given an array of 2 or more numbers. 
// We will then have to find the two largest numbers in that array, 
// and sum them together.

function largestSum (array) {
  if (array.length < 2) { //if theres less than 2 numbers edge case
    console.log("The given array is not big enough");
    return null;
  } else { //sort array descendingly and return sum of first two numbers
    const sortedArray = array.sort((a, b) => b - a)
    return sortedArray[0] + sortedArray[1];
  }
}

console.log(largestSum([1]));
console.log(largestSum([1, 10])); //11
console.log(largestSum([1, 2, 3])); //5
console.log(largestSum([10, 4, 34, 6, 92, 2])); //126