// //  *Exercise 01 - Variable Naming // 
// // Create four variables (brand, model, production year, owner's name) and assign them a value. Use let and const where appropriate.
// // Create a variable to define if a car is new or not new.
// // Use the number, boolean and string data type to create the variables.
// // If you use a name with more than one word, remember to use the camel case naming convention.

// const brand = "brand";
// const model = "model";
// const productionYear = 2022;
// let ownersName = "ownersName";
// let isNew = true;

// // * ---------------------------------------------------------------------------------------------------//
// //  *Exercise 02 - Variable Naming //
// // Write a better names for variables where it's necessary.
// // let _name = 'mario';
// // let *surname = 'Rossi';
// // let 1age = 20;
// // let ?isMarried = false;
// // let job? = 'developer';
// // let isGraduated2 = false;

// let _name = 'gizem';
// let surname = 'Tuncer';
// let age = 20;
// let isStudent = true;
// let job = 'developer';
// let isGraduated = true;

// // * ---------------------------------------------------------------------------------------------------//
// //  *Exercise 03 - Numbers //
// // Create 3 variables: area, x, y
// // Use the variable called area to print in console the area of the rectangle.

// let x,y,area;
// x = 4;
// y = 5;
// area = x*y;
// console.log(area);


// // * ---------------------------------------------------------------------------------------------------//
// //  *Exercise 04 - String //
// // Create the variables firstName, lastName and fullName.
// // Assign them a value and print in the console the full name

// const firstName = "Gizem";
// const lastName  = "Tuncer";
// const fullName  = firstName + " " + lastName;
// console.log(fullName);



// // * ---------------------------------------------------------------------------------------------------//
// //  *Exercise 05 - Boolean //
// // Create the variables isDoorClosed and isDogOutside. Set the isDoorClosed variable to true and isDogOutside variable to false.
// // Run the script.
// // Try to invert the variables values and see what happens.

// // Create the variables here
// let isDoorClosed , isDogOutside ; 

// isDoorClosed = true;
// isDogOutside = false;

// // Don't modify this block. This is an if statement, you'll study it later in this course.
// if (isDoorClosed == true && isDogOutside == false) {
//     console.log("the door is closed and the dog is inside");
//     } else if (isDoorClosed == false && isDogOutside == true) {
//     console.log("The door is open and the dog is outside");
//     } else console.log("Modify the variables values");


// // * ---------------------------------------------------------------------------------------------------//    
// // * Exercise 06 - Type Conversion//
// // Convert the hello variable to a boolean data type.
// // Convert the age variable to a string data type.
// // Convert the isGraduated variable to a numeric data type
// let hello = 'Ciao'; //boolean 
// let age = 18; //string
// let isGraduated = false; //number

// hello = Boolean(hello);
// age = String(age);
// isGraduated = Number(isGraduated);

// console.log(typeof hello);
// console.log(typeof age);
// console.log(typeof isGraduated);

// // * ---------------------------------------------------------------------------------------------------//    
// // * Exercise 07 - Type Conversion//
// // Convert the hello variable to a numeric data type and print it in the console.
// // Convert the age variable to a boolean data type and print it in the console.
// // Convert the isGraduated variable to a string data type and print it in the console.
// // Try to explain the output of the hello variable casting.

// let hello = 'Ciao';     // number
// let age = 18;       // boolean
// let isGraduated = false;     // string

// console.log(Number(hello));
// console.log(Boolean(age)); //output NaN(Not a Number)
// console.log(String(isGraduated));



// // * ---------------------------------------------------------------------------------------------------//    
// // * Exercise 08 - Type Conversion//

// // Create a variable and set it to true.
// // Print the value in the console and the data type.
// // Convert it to a numeric data type, print the value and the data type.
// // Convert it to string data type, print the value and the data type.
// // Finally, convert it to a boolean data type, print the value and the data type.

// let x = true;
// console.log(x);
// console.log(typeof x); 
// console.log("--------");

// x = Number(x);
// console.log(x);
// console.log(typeof x);
// console.log("--------");

// x = String(x);
// console.log(x);
// console.log(typeof x);
// console.log("--------");



// // * ---------------------------------------------------------------------------------------------------//    
// // * Exercise 09 - Variable Comparison//

// // Try to predict the output of the comparisons before printing them in the console
// const firstName = "Mario";
// const lastname = "Rossi";
// const age = 27;
// const isGraduated = false;
// const average = 27;
// const examsCompleted = 10;
// const firstYearCompleted = true;
// const yearsCompleted = 1;

// // * =================================================================================================//
// /* Notice ; "==" vs "===" The most fundamental difference between two equals and three equals-
// is the type and value comparison. When you use three equals, it compares both the type and -
// value of two values, while if two equals equalizes the types of the values, it only compares values. */
// // * =================================================================================================//

// console.log (firstName == lastname); //output: Mario not equal to Rossi so result is false
// console.log(age <= average); //output: 27 equal to 27 so result is true
// console.log(firstYearCompleted == lastname);//output: true  not equal to Rossi  so result is false
// console.log(yearsCompleted == firstYearCompleted);//output: true  equal to true  so result is true
// console.log(firstYearCompleted === yearsCompleted);//output: false because they have different data types
// console.log(examsCompleted < age);//output: 10 less than 27 so result is true
// console.log(isGraduated > yearsCompleted);//output: false



// * ---------------------------------------------------------------------------------------------------//    
// * Exercise 10 - Variable Comparison//

// Explain the difference between the double and the triple equals operator.
const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

/* Notice ; "==" vs "===" The most fundamental difference between two equals and three equals-
is the type and value comparison. When you use three equals, it compares both the type and -
value of two values, while if two equals equalizes the types of the values, it only compares values. */
// * =================================================================================================//

// * ---------------------------------------------------------------------------------------------------//    
// * Exercise 11 - Variable Comparison//

// Modify the second term of the expression in order to get true as result.
10 < 9
45 == 34
true === 1
false === 0
1 == 0
4 <= 2
4 >= 8
//Answers//
console.log(10 < 20);
console.log(45 == 45);
console.log(true === true);
console.log(false === false);
console.log(1 == 1);
console.log(4 <= 4);
console.log(4 >= 4);