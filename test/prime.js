var prime = require('../src/prime');
var expect = require('chai').expect;

describe('#Euler Problem 10: Summation of primes', function() {

  context('with number arguments', function() {
    it('should return sum of prime of arguments with input 2 millon', function() {
       this.timeout(10000);
	   expect(prime(2000000)).to.equal(142913828922)
    })
	
	it('should return sum of prime of arguments with input 10', function() {
      expect(prime(10)).to.equal(17)
    })
	
	it('should return sum of prime of arguments with negavtie numbers -1000', function() {
      expect(prime(-1000)).to.equal(0)
    })
  })
  
  context('without arguments', function() {
    it('should return 0', function() {
      expect(prime()).to.equal(0)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        prime(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'prime() expects only numbers.')
    })
  })
  
})