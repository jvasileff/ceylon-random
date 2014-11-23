import ceylon.math.whole {
  zero,
  Whole
}
import com.vasileff.ceylon.random.api {
  Random
}

Integer maxBits = smallest(runtime.integerAddressableSize, 62);
shared Whole randomWholeBits(Random rng, variable Integer numBits) {
  variable Whole result = zero;
  while (numBits > 0) {
    value x = smallest(numBits, maxBits);
    result = result.timesInteger(2^x);
    result = result.plusInteger(rng.nextInteger(2^x));
    numBits -= x;
  }
  return result;
}