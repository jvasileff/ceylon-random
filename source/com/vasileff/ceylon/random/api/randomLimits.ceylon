"Provides limits relevant to generating random numbers on the current runtime."
by ("John Vasileff")
shared object randomLimits {
  // FIXME maxIntegerBound should be 2^(maxBits+1) - 1, so they are in sync.
  "The largest value that may be used as an argument to [[Random.nextInteger]]."
  shared Integer maxIntegerBound = runtime.maxIntegerValue;

  "The largest value that may be used as an argument to [[Random.nextBits]]. `maxBits`
   will be the number of bits required to represent [[maxIntegerBound]], if the value
   of `maxIntegerBound` can be represented by 2<sup>n</sup>-1 for some `n`. Otherwise,
   `maxBits` will be one less than the number of bits required to represent
   `maxIntegerBound`. `maxBits` is `63` for the Java runtime and `53` for the
   JavaScript runtime."
  shared Integer maxBits;

  // calculate maxBits
  variable value maxValue = runtime.maxIntegerValue;
  variable value numBits = 0;
  while (maxValue > 0) {
    numBits++;
    maxValue /= 2;
  }
  // reduce by one if not "all 1's"
  // which is a theoretical concern; JS will be 53, Java 63
  if ((2^numBits-1) > runtime.maxIntegerValue) {
    numBits--;
  }
  maxBits = numBits;
}
