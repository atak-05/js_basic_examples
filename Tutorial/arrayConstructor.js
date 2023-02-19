// Arrays can be created using the literal notation:
const fruits1 = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
//* ====================================================================


/*Arrays can be created using a constructor with a single number parameter. 
An array with its length property set to that number and the array elements are empty slots.*/
const fruits2 = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]); // undefined

//* ====================================================================

// If more than one argument is passed to the constructor, a new Array with the given elements is created.

const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

//* ====================================================================
