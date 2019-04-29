module.exports = function() {

  // Convert arguments object to an array
  console.time('Execution Time for power:');
  let args = Array.prototype.slice.call(arguments);
  
  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError('power() expects only numbers.')
  }
  let result = 0;
  if (args.length == 1) {	
    let a = args[0];
	if (a > 1) {
     // found the methods at this link http://www.math.com/tables/expansion/power.htm
	  result = Math.pow(((Math.pow(a, 2) + a)/2), 2) - ((1/6) * (a * (a + 1) * ((2 * a) + 1)))
	}    
  }
  console.timeEnd('Execution Time for power:');
  return result;
}