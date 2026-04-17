 const brackets = {
    "(": ")",
    "[":"]",
    "{":"}",
};

 var isValid = function(inputString) {
    // inputString should only have brackets
    
    const bracketsArray = [];
    for ( let char of inputString) {
         if(brackets[char]) {
            bracketsArray.push(char);
        } else if ( char ===")"  || char === "]" || char ==="}") {
            const lastOpeningBracket = bracketsArray.pop();
            if (brackets[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }

    return bracketsArray.length === 0;
};

console.log("()",  isValid("()")); 
console.log("() [] {}",  isValid("() [] {}"));
console.log("(]",  isValid("(]"));
console.log("([]])",  isValid("([])"));
console.log("()]",  isValid("()]"));