shared object randomLimits {
  shared Integer maxIntegerBound = runtime.maxIntegerValue;
  shared Integer maxBits;

  // calculate maxBits:
  variable value maxValue = runtime.maxIntegerValue;
  variable value numBits = 0;
  while (maxValue > 0) {
    numBits++;
    maxValue /= 2;
  }
  // reduce by one if not "all 1's"
  // (only a theoretical concern, JS will be 53, Java 63)
  if ((2^numBits-1) > runtime.maxIntegerValue) {
    numBits--;
  }
  maxBits = numBits;
}