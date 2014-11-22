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
        // exact power of two
        return nextBits(bitLengthInteger(bound) - 1);
      }
      else {
        value bits = bitLengthInteger(bound);
        while (true) {
          value candidate = nextBits(bits);
          if (candidate < bound) {
            return candidate;
          }
        }
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
      => (nextBits(26).leftLogicalShift(27) + nextBits(27)).float * floatUnit;
}

Integer bitLengthInteger(variable Integer x) {
  // work within 53 bits for JavaScript & Java VMs
  assert(x >= 0 && x <= runtime.maxIntegerValue);
  variable value bits = 0;
  while (x > 0) {
    bits++;
    x = x.rightLogicalShift(1);
  }
  return bits;
}
