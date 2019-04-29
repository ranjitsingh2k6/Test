var factorial = require('../src/factorial');
var expect = require('chai').expect;

describe('#Euler Problem 20: Factorial digit sum', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(factorial()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of factorial of arguments with input 100', function() {
      expect(factorial(100)).to.equal(648)
    })
    
    it('should return sum of factorial of arguments with input 10', function() {
      expect(factorial(10)).to.equal(27)
    })
	
	it('should return sum of factorial of arguments with negavtie numbers -10', function() {
      expect(factorial(-10)).to.equal(0)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        factorial(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'factorial() expects only numbers.')
    })
  })
  
})