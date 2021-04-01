const urlDecode = function(text) {
  let encodedObj = {};
  let key;
  let value;
  let splicePoint;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === "=") {
      key = text.slice(0, i);
      splicePoint = i;
    }
    if (text.charAt(i) === "%20") {
      
      encodedObj[key] = text.slice(splicePoint + 1, i);
    }
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