// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 12 - Logical Operators // 

// Complete the expression inside the console.log(), by using the correct logical operator. The output must be true.
// console.log("testing" == "testing" ... "Mario" == "Cool Guy") //the result must be true
//Answer
console.log("------Exercise 12-Answer ---------");
console.log("testing" == "testing" || "Mario" == "Cool Guy") 


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 13 - Logical Operators // 
console.log("------Exercise 13-Answer ---------");
// Complete the expression inside the console.log(), by using the correct logical operator. The output must be false.
// console.log("testing" == "testing" ... "Mario" == "Cool Guy") //the result must be false
console.log("testing" == "testing" && "Mario" == "Cool Guy") //the result must be false


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 14 - Logical Operators // 

// Complete the expressions inside the console.log(), by using the correct logical operator.
// const question1 = 101 < 67;
// const question2 = 1 == true;
// const question3 = true != 1
// const question4 = 4 <= 4
// console.log(question1 ... question2) //the result must be true
// console.log(question1 ... question2) //the result must be false
// console.log(question3 ... question2) //the result must be true
// console.log(question4 ... question4) //the result must be false
// console.log(question2 ... question4) //the result must be false

//Answer
const question1 = 101 < 67; //false
const question2 = 1 == true; //true
const question3 = true != 1 //false
const question4 = 4 <= 4  //true
console.log("------Exercise 14-Answer ---------");
console.log(question1 ||  question2) //the result must be true
console.log(question1 && question2) //the result must be false
console.log(question3 || question2) //the result must be true
console.log(question4 && !question4) //the result must be false
console.log(question2 && !question4) //the result must be false


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 15 - Conditional Operators // 

console.log("------Exercise 15-Answer ---------");
/*Create a variable called age and assign it a numeric value. 
 Use the Conditional (ternary) operator. If the variable is grater or equal to 18, print You can drive a car.
 If the variable is less than 18, print You are too young to drive*/
const age  = 25 
age >= 18 ? console.log("You can drive a car"): console.log("You are too young to drive a car"); 




// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 16 - Conditional Operators // 

console.log("------Exercise 16-Answer ---------");
/*Create two boolean variables called isSunnyDay and isHomeworkCompleted. Assign them a value.
 Use the Ternary Operator in order to print Jesse can go out to play, if both variables are true.
 If one of them or both are false print Jesse stays at home.*/

const isSunnyDay = true
const isHomeworkCompleted = true
isSunnyDay && isHomeworkCompleted ? console.log("Jesse can go out to play"): console.log("Jesse stays at home.");



// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 17 -  if Statement // 

console.log("------Exercise 17-Answer ---------");
//Rewrite the exercise number 15, by using the if else statement.
const _age = 15;
if (_age >= 18){
    console.log("You can drive a car");
}else{
    console.log("You are too young to drive a car");
};


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 18 -  if Statement // 

console.log("------Exercise 18-Answer ---------");

// Rewrite the code, by using the ternary operator.

// let number = 7;

// if (number > 0) {

// console.log("The number is positive");

// } else console.log("The number is negative");

let number = -1;
number > 0 ? console.log("The number is positive") : console.log("The number is negative");


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 19 -  if Statement // 

console.log("------Exercise 19-Answer ---------");
/* Given the variables name and surname, create an if else statement to print the full name.
 The full name must be printed only if name and surname are truthy, otherwise print the message: Full name is invalid.*/

let _name;
let surname = 'Rossi';
let fullName = _name + ' ' + surname
if(_name && surname){
    console.log(fullName);
}else{
    console.log("Full name is invalid.");
}


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 20 -  if Statement // 

console.log("------Exercise 20-Answer ---------");
// Create a variable called primitive and assign it a value. Check if the value is number, string or boolean type and print it in the console.
let primitive = 2;
let type = typeof primitive ; 
if (typeof primitive ==="string"){
    console.log("Type is string");
}else if (typeof primitive ==="number"){console.log("Type is number")
}else if (typeof primitive ==="boolen"){console.log("Type is boolen")
}else {
    // console.log("Variable type not studied yet");
}

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 21 -  if Statement // 
console.log("------Exercise 21-Answer ---------");
/* Create a variable called password.
 If the password length is between 4 and 6, print the message Password length is correct, otherwise print the message Password not valid. */

let password = "1aa1"
if(password.length < 4 || password.length > 6){
    console.log("Password not valid");
}else{
    console.log("Password length is correct");
}


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 22 -  switch Statement // 
console.log("------Exercise 22-Answer ---------");

// Rewrite the exercise 20, by using a Switch statement.

let primitive2 = 2;
switch(primitive2){
    case 1 :
        typeof primitive2 == "string";
        console.log("String value");
        break;
    case 2:
        typeof primitive2 == "number";
        console.log("Number value");
        break;
    case 3:
        typeof primitive2 == "boolean";
        console.log("Boolean value");
        break;
}

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 23 -  switch Statement // 
console.log("------Exercise 23-Answer ---------");
let roomType = "Basic Room";
switch (roomType) {
    case "Basic Room":
        console.log("Price of Basic Room --> 50€");
        break;
    case "Junior Suite Room":
        console.log("Price of Junior Suite Room --> 80€");
        break;
    case "Master Suite Room":
        console.log("Price of Master Suite Room --> 100€");
        break;
}

// * ---------------------------------------------------------------------------------------------------//

//  *Exercise 24 -  Loops  // 
console.log("------Exercise 24-Answer ---------");

for(let i = 1 ; i < 11 ; i++){
    console.log(i);
}


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 25 -  Loops  // 
console.log("------Exercise 25-Answer ---------");
for (let i = 0 ; i >= -10 ; i--){
    console.log(i);
};

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 26 -  Loops  // 
console.log("------Exercise 26-Answer ---------");
let i = 0 ;
while (i <= 10 ){
    console.log(i);
    i++;
}


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 27 -  Loops  // 
console.log("------Exercise 27-Answer ---------");
for (let index = 0; index <= 20; index++) {
        if(index %2 == 0 ){
            console.log(index);
        }
}


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 28 -  Loops  // 
console.log("------Exercise 28-Answer ---------");
let sum= 0;
for (let index = 0; index <= 10 ; index++) {
    sum = index +sum; 
    console.log(sum);
}




