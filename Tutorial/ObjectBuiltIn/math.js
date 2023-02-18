//* =======================================================================================
//*MATH BUILT-IN OBJECT ================================================================

//* =======================================================================================
//*Math.random() 
//* =======================================================================================

/*The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1,
 with approximately uniform distribution over that range — which you can then scale to your desired range.
 The implementation selects the initial seed to the random number generation algorithm; 
it cannot be chosen or reset by the user.*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1


//* =======================================================================================
//*Math.random() 
//* =======================================================================================
// The Math.round() static method returns the value of a number rounded to the nearest integer.

console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

//* =======================================================================================
//*Math.pow()
//* =======================================================================================

//The Math.pow() static method returns the value of a base raised to a power. That is math.pow(x,y)= x^y

console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, 2));
// Expected output: 49

console.log(Math.pow(-7, 0.5));
// Expected output: NaN



//* =======================================================================================
//*Math.floor()
//* =======================================================================================
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6


//* =======================================================================================
//*Math.max()
//* =======================================================================================
// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3

//* =======================================================================================
//*Math.min()
//* =======================================================================================
// The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array11 = [2, 3, 1];

console.log(Math.min(...array11));
// Expected output: 1

// const array12 = [...array11 ]
// array12.push(-6);
// console.log(Math.min(...array12));
// console.log(Math.min(...array11));

