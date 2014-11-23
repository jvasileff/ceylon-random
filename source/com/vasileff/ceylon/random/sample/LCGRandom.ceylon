import com.vasileff.ceylon.random.api {
  Random,
  randomLimits
}

"A [Linear Congruential Generator](http://en.wikipedia.org/wiki/Linear_congruential_generator)
 (LCG) pseudorandom number generator,
 defined by the recurrence relation:

     Xₙ₊₁ ≡ (a Xₙ + x) (mod m)

 Adapted from <https://groups.google.com/forum/#!topic/ceylon-users/sjFYN6bJRTQ>

 See <http://en.wikipedia.org/wiki/Linear_congruential_generator>
 "
shared final class LCGRandom (
  "The seed"
  Integer seed = system.nanoseconds + system.milliseconds)
    satisfies Random {

  if (runtime.maxIntegerValue < 2^48) {
    throw Exception("unsupported platform; insufficient runtime.maxIntegerValue");
  }

  // Same parameters as java.util.Random, apparently
  value a = 25214903917;
  value c = 11;
  value m = 2^48;
  value m64 = m - 1;

  // initialized later by reseed(seed)
  late variable Integer xn;

  shared void reseed(Integer newSeed) {
    if (realInts) {
      xn = newSeed.xor(a).and(m64);
    } else {
      // TODO: good enough?
      xn = newSeed.magnitude % m;
    }
  }

  reseed(seed);

  shared actual Integer nextBits(Integer numBits) {
    if (numBits > randomLimits.maxBits) {
      throw Exception("numBits cannot be greater than
                       ``randomLimits.maxBits`` on this platform");
    }
    else if (numBits <= 0) {
      return 0;
    }
    else if (numBits <= 32) {
      // next will never be negative; it's masked to the lower 48 bits
      return next() / (2^(48 - numBits));
    }
    else {
      return nextBits(numBits - 32) * 2^32 + nextBits(32);
    }
  }

  Integer next() {
    // TODO: document loss of entropy on Javascript due to 53 bit precision
    if (realInts) {
      return xn = (a * xn + c).and(m64);
    } else {
      // x % 2^n == x & (2^n - 1) for x >= 0
      value step1 = a * xn + c;
      assert(!step1.negative);
      return xn = step1 % m;
    }
  }
}

// true for Java (64 bit bitwise operators supported)
Boolean realInts = runtime.integerAddressableSize == 64;
