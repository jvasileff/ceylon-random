import ceylon.test {
    test,
    assertTrue
}

import com.vasileff.ceylon.random.api {
    LCGRandom,
    randomLimits,
    Random
}

test shared
void testRange() {
    value lcgRandom = LCGRandom();

    // don't check 64 bit random numbers, which produce negative integers
    // nextBits range tests
    for (bits in 1..smallest(63, randomLimits.maxBits)) {
        value maxInclusive = 2^bits-1;
        for (_ in 0:1k) {
            value val = lcgRandom.nextBits(bits);
            assertTrue(0 <= val <= maxInclusive,
                "nextBits(``bits``); 0 <= ``val`` <= ``maxInclusive``");
        }
    }

    // nextInteger range tests
    value mib = randomLimits.maxIntegerBound;
    //workaround https://github.com/ceylon/ceylon.language/issues/656
    //for (bound in (0..mib).by(mib/100).skip(1)) {
    for (bound in (2..mib).by(mib/100)) {
        for (_ in 0:100) {
            value val = lcgRandom.nextInteger(bound);
            assertTrue(0 <= val < bound,
                "nextInteger(``bound``); 0 <= ``val`` < ``bound``");
        }
    }
}

test shared
void testAverageAndVarianceOfIntegers() {
    void test(Integer bound) {
        value random = LCGRandom();
        testAverageAndVariance(
                impreciseFloat(bound - 1),
                () => impreciseFloat(random.nextInteger(bound)));
    }

    // be sure to include 32-bits
    for (exp in (22..52).by(10)) {
        value bound = 2^exp;
        test(bound); // exact power of two
        test(bound + bound/3);
        test(bound - bound/3);
    }
}

test shared
void testAverageAndVarianceOfFloats() {
    value random = LCGRandom();
    testAverageAndVariance(1.0, random.nextFloat);
}

test shared
void testAverageAndVarianceOfBytes() {
    value random = LCGRandom();
    function generate()
        =>  impreciseFloat(random.nextByte().unsigned
                .leftLogicalShift(8)
                .or(random.nextByte().unsigned));

    testAverageAndVariance(65535.0, generate);
}

test shared
void testAverageAndVarianceOfBooleans() {
    // don't *just* use booleans, 0..1 range
    // is too small for variance test
    value random = LCGRandom();
    testAverageAndVariance(65535.0,
        () => impreciseFloat(bitsFromBooleans(random, 16)));
}

void testAverageAndVariance(
        max, generateSample,
        devs = 3.89,
        count = 1k) {

    "upper bound, inclusive"
    Float max;

    "generate a sample with uniform distribution"
    Float() generateSample;

    "allowable number of standard devations from mean;
     with 3.89 std deviations, 1 test in 10k should fail"
    Float devs;

    "number of samples to test"
    Integer count;

    function validatedSample() {
        value sample = generateSample();
        assert (0.0 <= sample <= max);
        return sample;
    }

    "expected variance for uniform distribution = `1/12 * (b-a)^2`"
    value uniformVariance = max ^ 2 / 12;
    value uniformStdDev = uniformVariance ^ 0.5;

    "expected standard devation of the average
     of count samples = `sampleStandardDev / sqrt(count)`"
    value stdDevOfSampleAverage = uniformStdDev / count ^ 0.5;

    "variance of the sample variance for a uniform distribution.
     See <http://en.wikipedia.org/wiki/Variance#Distribution_of_the_sample_variance>"
    value varianceOfSampleVariance =
            let (n = count.float)
            let (κ = -1.2)
            uniformStdDev ^ 4 * (2 / (n - 1) + κ / n );
    value stdDevOfSampleVariance = varianceOfSampleVariance ^ 0.5;

    value minAverage = max / 2 - devs * stdDevOfSampleAverage;
    value maxAverage = max / 2 + devs * stdDevOfSampleAverage;

    value minVariance = uniformVariance - devs * stdDevOfSampleVariance;
    value maxVariance = uniformVariance + devs * stdDevOfSampleVariance;

    assert (exists [mean, stdDev] = meanAndStdDev {
        for (_ in 0:count) validatedSample()
    });

    // mean should be close to max/2
    if (! minAverage <= mean <= maxAverage) {
        value offset = mean - 0.5;
        value stdDevs = offset/stdDevOfSampleAverage;
        assertTrue(minAverage <= mean <= maxAverage,
            "average of random numbers ``mean`` outside " +
            "expected range by ``stdDevs`` standard deviations");
    }

    // variance should be close to expected variance
    value variance = stdDev ^ 2;
    if (! minVariance <= variance <= maxVariance) {
        value offset = uniformVariance - variance;
        value stdDevs = offset/stdDevOfSampleVariance;
        assertTrue(minVariance <= variance <= maxVariance,
            "variance of random numbers ``variance`` outside " +
            "expected range by ``stdDevs`` standard deviations");
    }
}

test shared
void testChiSquaredBytes() {
    value random = LCGRandom();
    value stdDevs = chiSquaredDeviations {
        max = 255;
        buckets = 256;
        *{random.nextByte().unsigned}
                .cycled.take(256 * 5)
    };
    assertTrue(stdDevs.magnitude < 3.89,
            "chi squared outside of expected value " +
            "by ``stdDevs`` standard deviations");
}

test shared
void testChiSquaredBooleans() {
    value random = LCGRandom();
    value stdDevs = chiSquaredDeviations {
        max = 2^16 - 1;
        buckets = 2^10;
        *{bitsFromBooleans(random, 16)}
                .cycled.take(2^10 * 5)
    };
    assertTrue(stdDevs.magnitude < 3.89,
            "chi squared outside of expected value " +
            "by ``stdDevs`` standard deviations");
}

test shared
void testChiSquaredBits() {
    value random = LCGRandom();
    for (bits in 10..smallest(63, runtime.integerAddressableSize)) {
        value stdDevs = chiSquaredDeviations {
            max = 2^bits - 1;
            buckets = 2^10;
            *{random.nextBits(bits)}
                    .cycled.take(2^10 * 5)
        };
        assertTrue(stdDevs.magnitude < 3.89,
                "chi squared outside of expected value " +
                "by ``stdDevs`` standard deviations");
    }

    // for the 64 bit test, only test the 63 most
    // significant digits to avoid sign issues,
    // which is fine; the lsb would be ignored anyway
    if (runtime.integerAddressableSize == 64) {
        value stdDevs = chiSquaredDeviations {
            max = 2^63 - 1;
            buckets = 2^10;
            *{random.nextBits(64).rightLogicalShift(1)}
                    .cycled.take(2^10 * 5)
        };
        assertTrue(stdDevs.magnitude < 3.89,
                "chi squared outside of expected value " +
                "by ``stdDevs`` standard deviations");
    }
}

Integer bitsFromBooleans(Random random, Integer bits) {
    variable value result = 0;
    for (bit in 0:bits) {
        result = result.set(bit, random.nextBoolean());
    }
    return result;
}
