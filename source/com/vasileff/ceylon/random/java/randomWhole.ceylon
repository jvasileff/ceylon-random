import ceylon.math.whole {
  Whole,
  one,
  zero,
  two
}

import com.vasileff.ceylon.random.api {
  Random
}

shared Whole randomWhole(Random rng, Whole origin, Whole bound) {
  value magnitude = bound - origin - one;

  if (magnitude.negative) {
    throw Exception("origin must be less than bound");
  }
  else if (magnitude.zero) {
    return origin;
  }
  else {
    value numBits = bitLength(magnitude);
    variable Whole x;
    while ((x = randomWholeBits(rng, numBits)) > magnitude) { }
    return x - origin;
  }
}

Integer bitLength(variable Whole number) {
  assert(!number.negative);
  variable value numBits = 0;
  while (number > zero) {
    numBits++;
    number /= two;
  }
  return numBits;
}
