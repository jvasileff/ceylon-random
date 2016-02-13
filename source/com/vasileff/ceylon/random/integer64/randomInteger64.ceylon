import ceylon.random {
    Random,
    DefaultRandom
}

import com.vasileff.ceylon.integer64 {
    Integer64,
    one
}

"Generate a pseudorandom [[Integer64]] number in the range `origin`
 (inclusive) to `bound` (exclusive)."
throws (`class Exception`, "if origin <= bound")
shared Integer64 randomInteger64(
        "The lower bound, inclusive. May be negative."
        Integer64 origin,
        "The upper bound, exclusive. Must be greater than `origin`."
        Integer64 bound,
        "The entropy source."
        Random random = DefaultRandom()) {

    "`bound` must be greater than `origin`"
    assert (bound > origin);

    value magnitude = bound - origin - one;

    if (magnitude.negative) {
        // range is greater than maxInteger64Value; generate 64 bits of randomess
        variable Integer64 result;
        while (!(origin <= (result = randomInteger64Bits(64, random)) < bound)) {}
        return result;
    }

    if (magnitude.zero) {
        return origin;
    }

    // else, find a suitable positive value, then subtract origin
    value bits = bitLength(magnitude);
    variable Integer64 result;
    while ((result = randomInteger64Bits(bits, random)) > magnitude) { }
    return result - origin;
}

Integer bitLength(variable Integer64 number) {
    assert(!number.negative);
    variable value bits = 0;
    while (number.positive) {
        bits++;
        number = number.rightArithmeticShift(1);
    }
    return bits;
}
