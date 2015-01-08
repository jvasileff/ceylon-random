import com.vasileff.ceylon.random.api {
    Random,
    randomLimits
}

"A [Linear Congruential Generator](http://en.wikipedia.org/wiki/Linear_congruential_generator)
 (LCG) pseudorandom number generator,
 defined by the recurrence relation:

     Xₙ₊₁ ≡ (a Xₙ + c) (mod m)

 Using the parameters:

     a = 25214903917
     c = 11
     m = 2^48

 *Note:* for the JavaScript runtime, there is a loss of precision for Integers greater
 than 2<sup>53</sup> which may result in decreased quality of random numbers produced by
 this class.

 See <http://en.wikipedia.org/wiki/Linear_congruential_generator>"
shared final class LCGRandom (
        "The seed. The value is processed by [[reseed]] prior to use."
        Integer seed = system.nanoseconds + system.milliseconds)
        satisfies Random {

    // we at least need (x % 2^48) to work
    assert(runtime.maxIntegerValue >= 2^48);

    // Same parameters as java.util.Random, apparently
    value a = 25214903917;
    value c = 11;
    value m = 2^48;
    value m64 = m - 1;

    // initialized later by reseed(seed)
    late variable Integer xn;

    "Reseed this random number generator. For the Java runtime, the seed value is
     processed using `newSeed.xor(a).and(m - 1)` prior to use, and for the JavaScript
     runtime, `newSeed.magnitude % m`."
    shared void reseed(Integer newSeed) {
        if (realInts) {
            xn = newSeed.xor(a).and(m64);
        } else {
            // TODO: good enough?
            xn = newSeed.magnitude % m;
        }
    }

    reseed(seed);

    shared actual Integer nextBits(
        "The number of random bits to generate. Must not be greater than
         [[com.vasileff.ceylon.random.api::randomLimits.maxBits]]"
        Integer bits) {

        if (bits > randomLimits.maxBits) {
            throw Exception("bits cannot be greater than
                             ``randomLimits.maxBits`` on this platform");
        }
        else if (bits <= 0) {
            return 0;
        }
        else if (bits <= 32) {
            // next will never be negative; it's masked to the lower 48 bits
            return next() / (2^(48 - bits));
        }
        else {
            return nextBits(bits - 32) * 2^32 + nextBits(32);
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

// true for Java (64 bit bitwise operations supported)
Boolean realInts = runtime.integerAddressableSize == 64;
