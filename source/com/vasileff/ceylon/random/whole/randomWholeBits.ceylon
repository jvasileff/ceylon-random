import ceylon.whole {
    zero,
    Whole
}
import ceylon.random {
    Random,
    randomLimits,
    DefaultRandom
}

// positive Integer's only
Integer maxBits = smallest(randomLimits.maxBits, 62);

"Generate a [[ceylon.whole::Whole]] number holding `bits` pseudorandom bits.
 This method returns [[ceylon.whole::zero]] if `bits <= 0`."
shared Whole randomWholeBits(
        "The number of bits."
        variable Integer bits,
        "The entropy source."
        Random random = DefaultRandom()) {
    variable Whole result = zero;
    while (bits > 0) {
        value x = smallest(bits, maxBits);
        result = result.leftLogicalShift(x);
        result = result.plusInteger(random.nextBits(x));
        bits -= x;
    }
    return result;
}
