import com.vasileff.ceylon.random.api {
  Random
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
  Integer seed = system.nanoseconds)
    satisfies Random {

  // Same parameters as java.util.Random, apparently
  value a = 25214903917;
  value c = 11;
  value m = 2^48;
  value m64 = m - 1;
  value realInts = runtime.integerAddressableSize == 64;

  // initialized by reseed(seed)
  variable Integer xn = 0;

  shared void reseed(Integer newSeed) {
    xn = newSeed.xor(a).and(m);
  }

  reseed(seed);

  shared actual Integer nextBits(Integer numBits) {
    if (numBits <= 0) {
      return 0;
    }
    else if (numBits <= 32) {
      if (realInts) {
        return nextX().rightLogicalShift(48 - numBits);
      }
      else {
        // TODO: review/test
        // the higher order bits have more entropy
        value r = nextX();
        value d = 2 ^ (48 - numBits);
        assert(r <= runtime.maxIntegerValue); // fine for JS
        assert(d <= runtime.maxIntegerValue); // fine for JS
        return r / d;
      }
    }
    else {
      if (realInts) {
        return nextX().leftLogicalShift(32)
            .plus(nextX().rightLogicalShift(16))
            .rightLogicalShift(64 - numBits);
      }
      else {
        // TODO: review/test
        value r = nextX();
        assert(r <= runtime.maxIntegerValue);
        value high = nextBits(numBits - 32) * 2^32; // loss of precision possible
        value low = nextBits(32);
        value result = high + low;
        assert(result <= 2^numBits-1); // this may not be true....
        return result;
      }
    }
  }

  Integer nextX() {
    // TODO: determine & document loss of entropy on Javascript due to 53 bit precision
    if (realInts) {
      return xn = (a * xn + c).and(m64);
    } else {
      // TODO: review/test
      // x % 2^n == x & (2^n - 1) for x >= 0
      value step1 = a * xn + c;
      assert(!step1.negative);
      return xn = step1 % m;
    }
  }
}
