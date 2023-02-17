
//*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

//* Array.prototype.at()
//* ====================================================================
/* The at() method takes an integer value and returns the item at that index, 
allowing for positive and negative integers.
Negative integers count back from the last item in the array.*/

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"


//*Array.prototype.concat()
//* ====================================================================
/*The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.*/
const array11 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//*Array.prototype.copyWithin()
//* ====================================================================
/*The copyWithin() method shallow copies part of an array to another location-
 in the same array and returns it without modifying its length. */ 

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"] 

//*Array.prototype.entries() 
//* ====================================================================
/*The entries() method returns a new Array Iterator object-
 that contains the key/value pairs for each index in the array.*/

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]


//Iterating with index and element
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'


//Using a for...of loop
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

// The entries() method reads the length property of this and then accesses each integer index.
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]


//*Array.prototype.every()
/*The every() method tests whether all elements in the array pass the test implemented by the provided function.
 It returns a Boolean value.*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true





