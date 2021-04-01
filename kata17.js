const urlDecode = function(text) {
  let encodedObj = {};
  let key;
  let splicePoint;
  let keyStart = 0;
  text = text.replace(/%20/g, " "); //replaces %20 with space ahead of time
  for (let i = 0; i < text.length; i++) {
    //sets key value
    if (text.charAt(i) === "=") {
      key = text.slice(keyStart, i);
      splicePoint = i;
    }

    //sets value of current key, new key start point
    if (text.charAt(i) === "&") {
      encodedObj[key] = text.slice(splicePoint + 1, i);
      keyStart = i + 1;
    }

    //sets value for single key: value pair or last set
    if (i === text.length - 1) {
      encodedObj[key] = text.slice(splicePoint + 1);
    }
  }
  return encodedObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//expected output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"