//* ====================================================================
//* ========================== A PURE FUNCTION =========================


/*A pure function is a function (a block of code) that always return same result 
 if the same arguments are passed. It does not depend on any state or data change during a program execution.
 Rather, its depends on its input arguments */


 function calculateGST( productPrice ) {
    return productPrice * 0.05;
    }
    // function will always return the same result if we pass the same product price
    console.log(calculateGST(15)) // output : 0.75
    console.log(calculateGST(15)) // output : 0.75 same input arguments and same result 

