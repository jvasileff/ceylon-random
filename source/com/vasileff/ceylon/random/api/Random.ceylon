"An interface for random number generators. Satisfying classes must implement
 [[nextBits]], which is used by the default implementaitons of the methods of this
 interface."
by("John Vasileff")
suppressWarnings("deprecation")
shared interface Random {

    "Generates an Integer holding `bits` pseudorandom bits. This method returns
     `0` for `bits <= 0`."
    throws (`class Exception`, "if [[bits]] is greater than [[randomLimits.maxBits]].")
    shared formal Integer nextBits(Integer bits);

    "Returns the next pseudorandom `Integer` between `0` (inclusive)
     and [[bound]] (exclusive)."
    throws (`class Exception`,
        "if [[bound]] is less than `1` or greater \
         than [[randomLimits.maxIntegerBound]]")
    shared default Integer nextInteger(
            "The upper bound (exclusive)."
            Integer bound) {
        if (bound < 1 || bound > randomLimits.maxIntegerBound) {
            throw Exception(
                "bound must be a positive value less than \
                 randomLimits.maxIntegerBound");
        } else if (bound.and(bound - 1) == 0) {
            // bound is an exact power of two
            return nextBits(bitLength(bound) - 1);
        } else {
            variable Integer result;
            value bits = bitLength(bound);
            while ((result = nextBits(bits)) >= bound) { }
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

    "Returns a random element from the supplied [[Iterable]]. Useful
     argument types include [[Sequence]]s, such as `[\"heads\", \"tails\"]`,
     and [[Range]]s, such as `[1:100]` or `['A'..'Z']`."
    shared default Element|Absent
            nextElement<Element, Absent>
                (Iterable<Element, Absent> stream)
                given Absent satisfies Null {
        value size = stream.size;
        if (size == 0, is Absent null) {
            return null;
        }
        else if (size < 1) {
            throw OverflowException(
                "Invalid size ``size``; number of elements \
                 must be less than 'runtime.maxIntegerValue'.");
        }
        assert (exists element = stream.getFromFirst(nextInteger(size)));
        return element;
    }

    shared default deprecated("experimental")
    InfiniteStream<Integer> bits
            (Integer bits)
        =>  stream(() => nextBits(bits));

    shared default deprecated("experimental")
    InfiniteStream<Integer> integers(
            "The upper bound (exclusive)."
            Integer bound)
        =>  stream(() => nextInteger(bound));

    shared default deprecated("experimental")
    InfiniteStream<Boolean> booleans
        =>  stream(nextBoolean);

    shared default deprecated("experimental")
    InfiniteStream<Byte> bytes
        =>  stream(nextByte);

    shared default deprecated("experimental")
    InfiniteStream<Float> floats
        =>  stream(nextFloat);

    shared default deprecated("experimental")
    InfiniteStream<Element|Absent> elements<Element, Absent>
            (Iterable<Element, Absent> elements)
            given Absent satisfies Null
        =>  stream(() => nextElement(elements));
}

Float floatUnit = 1.0 / 2^53; // avoid left shift on JS

Integer bitLength(variable Integer number) {
    // avoid right shift on JS
    assert(number >= 0 && number <= runtime.maxIntegerValue);
    variable value bits = 0;
    while (number > 0) {
        bits++;
        number /= 2;
    }
    return bits;
}
