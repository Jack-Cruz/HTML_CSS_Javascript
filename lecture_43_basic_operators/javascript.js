// ***** String concatination
// var string = "Hello";
// // string += " World";
// string = string + " beautiful";
// string = string + " World";
// console.log(string + "!");




// // ***** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//   console.log(a / 5);
// }
// test1(5);




// // ***** Equality 
// var x = 5, y = 5;
// if (x == y) {
//   console.log("x=5 is equal to y=5");
// }

// x = "5";
// if (x == y) {
//   console.log("x='5' is equal to y=5");
// }


// // ***** Strict equality
// if (x === y) {
//   console.log("Strict: x='5' is equal to y=5");
// }
// else {
//   console
//   .log("Strict: x='5' is NOT equal to y=5");
// }






// // ***** If statement (all false)
// if ( false || null || 
//      undefined || "" || 0 || NaN) {
//   console.log("This line won't ever execute");
// }
// else {
//   console.log ("All false");
// }

// // ***** If statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// }





// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
// function a() 
// {
//   return 
//   { 
//     name: "Jack"
//   };
// }

// function b() {
//   return { 
//       name: "Jack"
//   };
// }

// console.log(a());
// console.log(b());




// For loop
var sum = 0;
for (var i = 0; i < 9; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);