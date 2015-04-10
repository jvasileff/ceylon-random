import ceylon.test {
    test,
    assertTrue
}

import com.vasileff.ceylon.random.api {
    LCGRandom,
    randomLimits
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
    for (bound in (0..mib).by(mib/100).skip(1)) {
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
                (bound - 1).float,
                () => random.nextInteger(bound).float);
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
        =>  random.nextByte().unsigned
                .leftLogicalShift(8)
                .or(random.nextByte().unsigned)
                .float;

    testAverageAndVariance(65535.0, generate);
}

test shared
void testAverageAndVarianceOfBooleans() {
    // don't *just* use booleans, 0..1 range
    // is too small for variance test
    value random = LCGRandom();
    function generate()
        =>  0.set(0, random.nextBoolean())
            .set(1, random.nextBoolean())
            .set(2, random.nextBoolean())
            .set(3, random.nextBoolean())
            .set(4, random.nextBoolean())
            .set(5, random.nextBoolean())
            .set(6, random.nextBoolean())
            .set(7, random.nextBoolean())
            .set(8, random.nextBoolean())
            .set(9, random.nextBoolean())
            .set(10, random.nextBoolean())
            .set(11, random.nextBoolean())
            .set(12, random.nextBoolean())
            .set(13, random.nextBoolean())
            .set(14, random.nextBoolean())
            .set(15, random.nextBoolean())
            .float;

    testAverageAndVariance(65535.0, generate);
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
