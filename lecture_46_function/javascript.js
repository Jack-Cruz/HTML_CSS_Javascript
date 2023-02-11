// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y){
    return x * y;
}
multiply.version = "v1.0.0";
console.log(multiply);

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;  
  }

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log("multiplyBy3: ", multiplyBy3(10));
var multiplyBy2 = makeMultiplier(2);
console.log("multiplyBy2: ", multiplyBy2(199));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, (multiplyBy3));
console.log("1st result: ", result);
result = doOperationOn(100, multiplyBy2);
console.log("2nd result: ", result);
result = doOperationOn(9, (x) => x**2);
console.log("3rd result: ", result);