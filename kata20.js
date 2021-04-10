const coordCalculations = function(d, angle, coordinates) {
  if (angle === -90) angle = 270; //resets angle
  if (angle === 360) angle = 0; //rests angle
  if (angle === 0) {
    //right, x++
    coordinates.east += d;
  } else if (angle === 90) {
    //up, y++
    coordinates.north += d;
  } else if (angle === 180) {
    //left, x--
    coordinates.east -= d;
  } else if (angle === 270) {
    //down, y--
    coordinates.north -= d;
  } else {
    console.log("This direction parameter does not exsist");
  }
  return { coordinates, angle };
}

const blocksAway = function(directions) {
  let angle;
  let coordinates = {
    east: 0,
    north: 0
  }
  directions[0] === "right" ? angle = 90 : angle = 0; //starting angle ensures taxicab stays on 'map'
  directions.forEach(d => {
    d === "right" || d === "left" ? d === "right" ? angle -= 90 : angle += 90: angle = coordCalculations(d, angle, coordinates).angle;
  });
  return coordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

//expected output, for the purposes of this excercise taxicab starts at 0,0 most southwest position
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}