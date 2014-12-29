import ceylon.math.whole {
    Whole,
    one,
    zero,
    two
}

import com.vasileff.ceylon.random.api {
    Random,
    LCGRandom
}

"Generate a pseudorandom [[ceylon.math.whole::Whole]] number in the range `origin`
 (inclusive) to `bound` (exclusive)."
throws (`class Exception`, "if origin <= bound")
shared Whole randomWhole(
        "The lower bound, inclusive. May be negative."
        Whole origin,
        "The upper bound, exclusive. Must be greater than `origin`."
        Whole bound,
        "The entropy source."
        Random random = LCGRandom()) {
    value magnitude = bound - origin - one;

    if (magnitude.negative) {
        throw Exception("origin must be less than bound");
    } else if (magnitude.zero) {
        return origin;
    } else {
        value numBits = bitLength(magnitude);
        variable Whole x;
        while ((x = randomWholeBits(numBits, random)) > magnitude) { }
        return x - origin;
    }
}

Integer bitLength(variable Whole number) {
    // TODO use right shift when available, or Whole.bitLength
    assert(!number.negative);
    variable value numBits = 0;
    while (number > zero) {
        numBits++;
        number /= two;
    }
    return numBits;
}
