import ceylon.random {
    Random,
    randomLimits,
    DefaultRandom
}

import com.vasileff.ceylon.integer64 {
    Integer64,
    zero
}

// positive Integer's only
Integer maxBits = smallest(randomLimits.maxBits, 62);

"Generate a [[Integer64]] number holding `bits` pseudorandom bits.
 This method returns [[zero]] if `bits <= 0`."
throws(`class AssertionError`, "if `bits > 64`")
shared Integer64 randomInteger64Bits(
        "The number of bits."
        variable Integer bits,
        "The entropy source."
        Random random = DefaultRandom()) {
    assert (bits <= 64);
    variable Integer64 result = zero;
    while (bits > 0) {
        value x = smallest(bits, maxBits);
        result = result.leftLogicalShift(x);
        result = result.plusInteger(random.nextBits(x));
        bits -= x;
    }
    return result;
}
