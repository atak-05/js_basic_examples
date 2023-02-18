//* =======================================================================================
//*DATE BUILT-IN OBJECT ================================================================


//* prototype.getTime() ===================================================================
// The getTime() method returns the number of milliseconds since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.


const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25"); // if data parameter be taking no arguments, return the date in now time const d = new Date()
let month = months[d.getMonth()];
console.log(month); //output: March


const now = new Date();
console.log(now.getDate());
