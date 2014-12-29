"An interface for random number generators. Satisfying classes must implement
 [[nextBits]], which is used by the default implementaitons of the methods of this
 interface."
by("John Vasileff")
shared interface Random {
    "Generates an Integer holding `numBits` pseudorandom bits. This method returns
     `0` for `numBits <= 0`."
    throws (`class Exception`, "if [[numBits]] is greater than [[randomLimits.maxBits]].")
    shared formal Integer nextBits(Integer numBits);

    "Returns the next pseudorandom `Integer` between `0` (inclusive)
     and [[bound]] (exclusive)."
    throws (`class Exception`,
        "if [[bound]] is less than `1` or greater than `randomLimits.maxIntegerBound`")
    shared default Integer nextInteger(
            "The upper bound (exclusive)."
            Integer bound) {
        if (bound < 1 || bound > randomLimits.maxIntegerBound) {
            throw Exception(
                "bound must be a positive value less than runtime.maxIntegerValue");
        } else if (bound.and(bound - 1) == 0) {
            // bound is an exact power of two
            return nextBits(bitLength(bound) - 1);
        } else {
            variable Integer result;
            value numBits = bitLength(bound);
            while ((result = nextBits(numBits)) >= bound) { }
            return result;
        }
    }

    "Returns the next pseudorandom `Boolean`."
    shared default Boolean nextBoolean()
        => nextBits(1) == 1;

    "Returns the next pseudorandom `Byte`."
    shared default Byte nextByte()
        => nextBits(8).byte;

    "Returns the next pseudorandom `Float` between `0.0` and `1.0`."
    shared default Float nextFloat()
        => nextBits(53).float * floatUnit;
}

Float floatUnit = 1.0 / 2^53; // avoid left shift on JS

Integer bitLength(variable Integer number) {
    // avoid right shift on JS
    assert(number >= 0 && number <= runtime.maxIntegerValue);
    variable value numBits = 0;
    while (number > 0) {
        numBits++;
        number /= 2;
    }
    return numBits;
}
