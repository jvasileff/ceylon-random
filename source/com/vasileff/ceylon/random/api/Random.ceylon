// FIXME cannot use shift w/javascript
Float floatUnit = 1.0 / 1.leftLogicalShift(53);
shared interface Random {

  shared formal Integer nextBits(Integer numBits);

  shared default Integer nextInteger(Integer? bound = null) {
    if (exists bound) {
      if (bound < 1 || bound > runtime.maxIntegerValue) {
        throw Exception(
          "bound must be a positive value less than runtime.maxIntegerValue");
      }
      else if (bound.and(bound - 1) == 0) {
        // bound is an exact power of two
        return nextBits(bitLength(bound) - 1);
      }
      else {
        variable Integer result;
        value numBits = bitLength(bound);
        while ((result = nextBits(numBits)) >= bound) { }
        return result;
      }
    }
    else {
      return nextBits(64);
    }
  }

  shared default Boolean nextBoolean()
      => nextBits(1) == 1;

  shared default Byte nextByte()
      => nextBits(8).byte;

  shared default Float nextFloat()
      => nextBits(53).float * floatUnit;
}

Integer bitLength(variable Integer number) {
  // avoid right shift on JS, only works for 32 bit numbers
  assert(number >= 0 && number <= runtime.maxIntegerValue);
  variable value numBits = 0;
  while (number > 0) {
    numBits++;
    number /= 2;
  }
  return numBits;
}
