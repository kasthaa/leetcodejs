var isPalindrome = function( inputNumber ) {
// input validation should come here
const reversestring = inputNumber.toString().split("").reverse().join("");
return reversestring === inputNumber.toString(); 
};

console.log (109, isPalindrome(109));
console.log (121, isPalindrome(121));
console.log (-121, isPalindrome(-121));
console.log (10, isPalindrome(10));