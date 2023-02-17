// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 44 -  Array  //
console.log("------Exercise 44- Answer ---------");
// Given the following array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print the first element of the array.
// Print the last element of the array.
// Print the array length.
// Print the twentieth element of the array and explain the output.
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers.length);
console.log(numbers[20]);

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 45 -  Array  //
console.log("------Exercise 45-Answer ---------");

// Create an array called students. This array must have 3 objects literals with the following properties:
// id
// name
// surname
// age
// Print the first element of the array.

const studentsArray = [
  { id: 1, name: "Gizem", surname: "Çırıkka", age: "18" },
  { id: 1, name: "Cenk", surname: "Çırıkka", age: "20" },
  { id: 1, name: "Atak", surname: "Çırıkka", age: "15" },
];

console.log(studentsArray[0]);

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 46 -  Array  //
console.log("------Exercise 46-Answer ---------");

// Given the following array:
const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
// Print all the elements of the array.

// Suggestion Use a for loop.

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 47 -  Array  Methods  //
console.log("------Exercise 47-Answer ---------");

// Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Remove the element Giovanni.
// Add a new element called Pippo at the end of the array.
// Add the element Giovanni to the beginning of the array.
// Suggestion

// Look at the official documentation to find the right methods

// This code removes the last item from the "names" array and then prints the array to the console.
names.pop();
console.log(names);
// names.forEach(name => console.log(name));
names.map(name => console.log(name));
console.log(names);
// This code adds the string "Pippo" to the end of the array "names" and then prints the array to the console.

// names.push("Pippo");
// console.log(names);

// This code adds the string "Pippo" to the beginning of the array "names" and then prints the updated array to the console.

// names.unshift("Pippo");
// console.log(names);




// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 48 -  Array  Methods//
console.log("------Exercise 48-Answer ---------");

// Given the following array:

const names1 = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Add a hyphen after each element of the array. The output should something like this: Luca-Marco-Vittorio-Giovanni

// Suggestion Look at the official documentation to find the right method.

const newNames = names1.join("-");
console.log(newNames);


// * ---------------------------------------------------------------------------------------------------//
//  *Exercise 49 -  Array  Methods//
console.log("------Exercise 49-Answer ---------");

//Given the following array:

const studentS = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
/*Remove the last element of the array and add the following one at the end of the array:
 { id: 3, name: "Francesco", surname: "Verdi", age: 41 }*/


studentS.pop();
console.log(studentS);
studentS.push({id : 3, name:"Francesco",surname: "Verdi", age: 41 } ,) 
console.log(studentS);
console.log(studentS);







