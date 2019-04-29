module.exports = function() {

  // Convert arguments object to an array
  console.time('Execution Time for prime:');
  let args = Array.prototype.slice.call(arguments);
  
  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError('prime() expects only numbers.')
  }
  
  //Checks if prime or not
  var isPrime = function(n){
    let range = n;	
    for (let i = 2; i < range; i++){
      if (n%i == 0){
        return false;
      }
      range = n / i;
    }	
    return true;
  }  
  
  let sum = 0;

  // while primes is less than the sought after number
  if (args.length === 1) {
    let i = args[0];
    while (i >= 2) {
      if (isPrime(i) === true) {
        sum += i;
      }
      i--;
    }
  }
  console.timeEnd('Execution Time for prime:');
  return sum;
}