import com.vasileff.ceylon.random.api {
  Random
}

import java.util {
  JRandom=Random
}

"A pseudorandom number generator backed by `java.util.Random`."
by("John Vasileff")
shared final class JavaRandom(
    "The seed, if provided, will be used to construct the wrapped `java.util.Random`."
    Integer? seed = null)
    satisfies Random {

  JRandom javaRNG;
  if (exists seed) {
    javaRNG = JRandom(seed);
  } else {
    javaRNG = JRandom();
  }

  "Delegates to `java.util.Random.setSeed(long)`."
  shared void reseed(Integer newSeed) {
    javaRNG.setSeed(newSeed);
  }

  shared actual Integer nextBits(Integer numBits) {
    if (numBits == 0) {
      return 0;
    }
    else if (numBits < 31) {
      return javaRNG.nextInt(2 ^ numBits);
    }
    else {
      return javaRNG.nextLong().rightLogicalShift(64 - numBits);
    }
  }

}
