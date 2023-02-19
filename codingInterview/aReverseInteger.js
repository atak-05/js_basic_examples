// Algorithm to reverse an integer 
/* 
51 -> 15
500 -> 5 
-15 -> -51
-900 -> -9
*/


/* 
1.convert to a string
2.turn into array
3.reverse method
4.back to string
5.back to int
*/


const revInt = (n) => {
    if(n < 0){
        return -1*parseInt(n.toString().split('').reverse().join(''));
    }
   return parseInt(n.toString().split('').reverse().join(''));

}
console.log({
    testcase1 : revInt(51),
    testcase2 : revInt(500),
    testcase3 : revInt(-58),
});
