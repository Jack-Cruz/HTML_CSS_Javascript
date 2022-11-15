// Arrays
// var array = new Array();
// array[0] = "Jack";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = { course: " HTML, CSS & JS"};

// console.log(array);
// console.log(array[2]);
// console.log(array[3].course);


// Short hand array creation
// var names = ["Yack", "Jhon", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++){
//   console.log("Hello " + names[i]);
// }

// names[100] = "Abel";
// for (var i = 0; i < names.length; i++){
//   console.log("Hello " + names[i]);
// }



// var myObj = {
//   name: "Jack",
//   course: "HTML/CSS/JS",
//   plataform: "Coursera"
// };

// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }

var names2 = ["Jack", "Jhon", "Joe"];
    
for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for(var name in names2){
  console.log("Hello " + names2[name]);
}








