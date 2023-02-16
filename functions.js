// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 29 -  Functions  //
console.log("------Exercise 29-Answer ---------");

function printName() {
  console.log("Gizem");
}
printName();

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 30 -  Functions  //
console.log("------Exercise 30-Answer ---------");

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("gizem");

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 31 -  Callbacks  //
console.log("------Exercise 31-Answer ---------");

function sayHelloName(callback) {
  console.log("Hello ");
  callback();
}

sayHelloName(printName);

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 32 -  Callbacks  //
console.log("------Exercise 32-Answer ---------");
function sayHelloName1(callback) {
  setTimeout(function () {
    console.log("Hello ");
    callback();
  }, 1000);
}
sayHelloName1(printName);

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 33 -  Arrow Functions  //
console.log("------Exercise 33-Answer ---------");

const sum = () => {
  return 5 + 5;
};

console.log(sum());

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 34 -  Arrow Functions  //
console.log("------Exercise 34-Answer ---------");
//Starting from the exercise 33, create an arrow function that takes in two numbers as parameters and returns the sum.

const sum1 = (a, b) => {
  return a + b;
};

console.log(sum1(2, 4));

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 35 -  Scope  //
console.log("------Exercise 35-Answer ---------");
/*If you run this function, you'll get an error.
 Fix the function and explain briefly what's wrong.*/

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}
canPlay();

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 36 -  Scope  //
console.log("------Exercise 36-Answer ---------");

function canPlay() {
  var sport = " Football";  
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

canPlay();
