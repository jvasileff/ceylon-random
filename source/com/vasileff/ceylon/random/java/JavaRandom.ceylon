import com.vasileff.ceylon.random.api {
  Random
}

import java.util {
  JRandom=Random
}

shared class JavaRandom(Integer? seed = null) satisfies Random {

  value javaRNG = JRandom();

  if (exists seed) {
    javaRNG.setSeed(seed);
  }

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
