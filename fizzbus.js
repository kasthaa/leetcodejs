var fizzBuzz = function(inputNumber) {
    // validation
    if( !Number.isInteger(inputNumber) || inputNumber <= 0) {
        throw new Error("Input must be a postive integer"); 
    }   
    const result = [];

    // console.log(inputNumber); 

    for ( let i =1; i<= inputNumber; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz"); 
        } else if (i % 3 === 0) {
                 result.push("Buzz");
            } else if (i % 3 ===0){
            result.push("Fizz");
} else if(i % 5 === 0) {
    result.push("Buzz");
   }   else {
    result.push(i.toString());
   }
  }
  return result;
}; 

const result = fizzBuzz(15);
console.log( 15, result);

 