const whereCanIPark = function (spots, vehicle) {
  let coordinates = [];
  for (let outer = 0; outer < spots.length; outer++) {
    for (let inner = 0; inner < spots[outer].length; inner++) {
      if (vehicle === "regular") {
        if (spots[outer][inner] === 'R') {
          coordinates.push(inner, outer);
          return coordinates;
        }
      } else if (vehicle === "small") {
        if (spots[outer][inner] === 'R' || spots[outer][inner] === 'S') {
          coordinates.push(inner, outer);
          return coordinates;
        } else {
          return false;
        }
      } else if (vehicle === "motorcycle") {
        if (spots[outer][inner] === 'R' || spots[outer][inner] === 'S' || spots[outer][inner] === 'M') {
          coordinates.push(inner, outer);
          return coordinates;
        }
      }
    }
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
// [4, 0]

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));
// false

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
// [3, 1]