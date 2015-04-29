import com.vasileff.ceylon.random.api {
    Random,
    randomLimits
}
import com.vasileff.ceylon.xmath.long {
    longNumber,
    Long,
    zero,
    one,
    two
}

"A [Linear Congruential Generator](http://en.wikipedia.org/wiki/Linear_congruential_generator)
 (LCG) pseudorandom number generator,
 defined by the recurrence relation:

     Xₙ₊₁ ≡ (a Xₙ + c) (mod m)

 Using the parameters:

     a = 25214903917
     c = 11
     m = 2^48

 This class uses an abstraction for 64 bit integers to produce identical results
 on both Java and JavaScript VMs, which entails a 6x (JVM) to 10x (JS VM)
 performance penalty.

 See <http://en.wikipedia.org/wiki/Linear_congruential_generator>"
shared final
class LCGRandomLong (
        "The seed. The value is processed by [[reseed]] prior to use."
        Integer seed = system.nanoseconds + system.milliseconds)
        satisfies Random {

    // Same parameters as java.util.Random, apparently
    value a = longNumber(25214903917);
    value c = longNumber(11);
    value m = two.powerOfInteger(48);
    value mask = m - one;

    // initialized later by reseed(seed)
    late variable Long xn;

    "Reseed this random number generator. The seed value is
     processed using `seed.xor(a).and(m - 1)` prior to use.
     On the JavaScript runtime, seed values outside of the range
     `runtime.minIntegerValue` and `runtime.maxIntegerValue`
     are reduced to fit within this range."
    shared
    void reseed(Integer seed) {
        Long longSeed;
        if (!realInts && seed > runtime.maxIntegerValue) {
            value mivMod = runtime.maxIntegerValue + 1;
            longSeed = longNumber(seed % mivMod)
                    .xor(longNumber((seed / mivMod) % mivMod));
        }
        else if (!realInts && seed < runtime.minIntegerValue) {
            value mivMod = runtime.minIntegerValue - 1;
            longSeed = longNumber(seed % mivMod)
                    .xor(longNumber((seed / mivMod) % mivMod));
        }
        else {
            longSeed = longNumber(seed);
        }
        xn = longSeed.xor(a).and(mask);
    }

    reseed(seed);

    shared actual
    Integer nextBits(Integer bits)
        =>  nextBitsLong(bits).preciseInteger;

    Long nextBitsLong(
        "The number of random bits to generate. Must not be greater than
         [[com.vasileff.ceylon.random.api::randomLimits.maxBits]]"
        Integer bits) {

        // NOTE: only using the high-order 32 bits; the low-order
        // bits have shorter cycles, with the lowest order bit
        // simply alternating

        if (bits > randomLimits.maxBits) {
            throw Exception("bits cannot be greater than \
                             ``randomLimits.maxBits`` on this platform");
        }

        return if (bits <= 0) then
            zero
        else if (bits <= 32) then
            next().rightLogicalShift(48 - bits)
        else
            // request minimal number of bits on each call to
            // nextBitsLong in order to prefer higher-order bits
            let (firstCount = bits / 2)
            let (secondCount =  bits - firstCount)
            nextBitsLong(firstCount).leftLogicalShift(secondCount)
                + nextBitsLong(secondCount);
    }

    Long next() => xn = (a * xn + c).and(mask);
}
