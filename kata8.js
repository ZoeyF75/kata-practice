const repeatNumbers = function(data) {
  let string = "";
  let count = 0;
  data.forEach(element => {
    if (count >= 1) {
      string += ", "
    }
    for (let i = 0; i < element[1]; i++) { //for number of iterations specified
      string += element[0];
    }
    count ++;
  });
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));