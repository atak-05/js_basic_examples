/*shift+alt+a */

/* 
find palindrome
palindrome("abba") === true
palindrome("abcdefg") === false
*/

/* 
1.reverse the string
2.chech with original if they are same 
*/
//*Solution 1:
const palindrome = (str) => {
    const isPalindrome =str.split('').reverse().join('');
    console.log(str === isPalindrome);
}
//palindrome('gizem');

//*Solution 2:
(function(str){
    let  reversed = '';
    for(let x of str)
    {
        reversed = x + reversed;
    }
    console.log(reversed===str);
})('gizem')

