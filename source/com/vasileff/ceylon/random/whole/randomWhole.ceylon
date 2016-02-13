import ceylon.random {
    Random,
    DefaultRandom
}
import ceylon.whole {
    Whole,
    one,
    zero
}

"Generate a pseudorandom [[ceylon.whole::Whole]] number in the range `origin`
 (inclusive) to `bound` (exclusive)."
throws (`class Exception`, "if origin <= bound")
shared Whole randomWhole(
        "The lower bound, inclusive. May be negative."
        Whole origin,
        "The upper bound, exclusive. Must be greater than `origin`."
        Whole bound,
        "The entropy source."
        Random random = DefaultRandom()) {
    value magnitude = bound - origin - one;

    if (magnitude.negative) {
        throw Exception("origin must be less than bound");
    } else if (magnitude.zero) {
        return origin;
    } else {
        value bits = bitLength(magnitude);
        variable Whole x;
        while ((x = randomWholeBits(bits, random)) > magnitude) { }
        return x - origin;
    }
}

Integer bitLength(variable Whole number) {
    assert(!number.negative);
    variable value bits = 0;
    while (number > zero) {
        bits++;
        number = number.rightArithmeticShift(1);
    }
    return bits;
}
