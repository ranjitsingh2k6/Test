var power = require('../src/power');
var expect = require('chai').expect;

describe('#Euler Problem 6: Sum square difference', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(power()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of power of arguments with input 100', function() {
      expect(power(100)).to.equal(25164150)
    })
    
    it('should return sum of power of arguments with input 10', function() {
      expect(power(10)).to.equal(2640)
    })
	
	it('should return sum of power of arguments with negavtie numbers -100', function() {
      expect(power(-100)).to.equal(0)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        power(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'power() expects only numbers.')
    })
  })
  
})