const instructorWithLongestName = function(instructors) {
  let indexOfLongestName = 0;
  for (let i = 1; i < instructors.length; i++) {
    instructors[i].name.length > instructors[indexOfLongestName].name.length ? indexOfLongestName = i : indexOfLongestName;
  }
  return instructors[indexOfLongestName];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));