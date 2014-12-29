import ceylon.math.whole {
    zero,
    Whole
}
import com.vasileff.ceylon.random.api {
    Random,
    randomLimits,
    LCGRandom
}

// positive Integer's only
Integer maxBits = smallest(randomLimits.maxBits, 62);

"Generate a [[ceylon.math.whole::Whole]] number holding `numBits` pseudorandom bits.
 This method returns [[ceylon.math.whole::zero]] if `numBits <= 0`."
shared Whole randomWholeBits(
        "The number of bits."
        variable Integer numBits,
        "The entropy source."
        Random random = LCGRandom()) {
    variable Whole result = zero;
    while (numBits > 0) {
        value x = smallest(numBits, maxBits);
        result = result.timesInteger(2^x);
        result = result.plusInteger(random.nextInteger(2^x));
        numBits -= x;
    }
    return result;
}
