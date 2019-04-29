module.exports = function() {

  // Convert arguments object to an array
  console.time('Execution Time for factorial:');
  let args = Array.prototype.slice.call(arguments);
  
  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError('factorial() expects only numbers.')
  } 
 
  let sum = 0; 
  var rebalanceDigitArray = function(digits, index){
    let digit = digits[index];
    while(digit > 9){
        //Update the current index
        digits[index] = digit % 10;
        
        //Update the next index
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
  };
  
  var digitArrayMultiply = function(digits1, digits2) {
    let productDigits = [];
    for (let i = 0; i < digits1.length; i++) {
       let digit1 = digits1[i];
        for (let j = 0; j < digits2.length; j++) {
            digit2 = digits2[j];
            let product = digit1 * digit2;
            let productIndex = i + j;
            
            productDigits[productIndex] = (productDigits[productIndex] || 0) + product;
            rebalanceDigitArray(productDigits, productIndex);
        }
    }
    
    return productDigits;
  };
  
  if (args.length === 1) {
    let num = args[0];
	if (num > 1) {
      let multiplier = 2;
      let factorial = [1];
      while(num >= multiplier){
        factorial = digitArrayMultiply(factorial, [multiplier]);
        multiplier++;
      }
      for(var i = 0; i < factorial.length; i++){
        sum += factorial[i];
      }
	}
  }
  
  console.timeEnd('Execution Time for factorial:');
  return sum;
}