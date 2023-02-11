// // Copy by value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b updates:");
// console.log("a: " + a);
// console.log("b: " + b);


// // Copy value by reference
// var a = { x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(b);
// console.log(a);



// // Pass by value
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive() function, orig value:");
// console.log(value);


// Pass by reference
function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);

  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = {x: 7};
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);


