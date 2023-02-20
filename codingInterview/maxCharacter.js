// How to find the maximum character in a string and how many times it appear
/* 
32eddseew3
#%he3#33ll#l#o
*/

/* 
1.create an object 
2.if the characterof str does not exist in obj,then set its value  to 1
3.if does,do an increment
*/


const maxChar = (str) => {
    let obj = {};

    for(let char of str) {
        (!obj[char])?obj[char] = 1: obj[char]++;
    }
    // console.log(obj);

//* other ways
/*     let maxNum = 0 ;
    let maximumChar  = '';
    
    for (let char in obj){
        if (obj[char]>= maxNum){
            console.log(obj[char]);
            maxNum = obj[char];
            maximumChar = char;
            console.log(maximumChar);
            console.log(maxNum);
        }
    }
    console.log(`${maximumChar} appears ${maxNum} times`); // it says directly maximum char


}//  we can find the maximum character
maxChar('cenkkk') */

}
let the ;
let num = 0
const a = "88811999";
const a1 = a.split('');
console.log(a1);
for (let i of a1){
    console.log(a1[i]);

    /* if (a1[i] >= num){
        console.log(a1[i]);

} */
}console.log({"en çok tekrarlanan karakter " : + num  });
