// FizzyBuzz Problems
/* 
Write a problem to print to the screen numbers 1 to n.
For multiple of 2, print 'fizz', for multiple of 5 , print 'buzz',
for multiples of boyh 3 and 5 print 'fizzbuzz'
*/

/* 
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
*/
((num) => {
  for (let i = 1; i <= 15; i++) {
    //check for 15
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      ++i;
    }
    //check for 3
    if (i % 3 === 0) {
      console.log("fizz");
      ++i;
    }
    //check for 5
    if (i % 5 === 0) {
      console.log("buzz");
      ++i;
    }
    if (i > num) break;
    //check for again
    else {
      console.log(i);
    }
  }
})(15);
