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
  shared Integer a = 25214903917;
  shared Integer c = 11;
  shared Integer m = 2^48 - 1;

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
      return nextX().rightLogicalShift(48 - numBits);
    }
    else {
      return nextX().leftLogicalShift(32)
          .plus(nextX().rightLogicalShift(16))
          .rightLogicalShift(64 - numBits);
    }
  }

  Integer nextX() {
    // TODO: determine & document loss of entropy on Javascript due to 53 bit precision
    return xn = (a * xn + c).and(m);
  }

}
