import ceylon.test {
    assertTrue
}

import com.vasileff.ceylon.random.api {
    randomLimits,
    Random,
    stream
}

shared suppressWarnings("deprecation")
void testRange(Random random) {

    // don't check 64 bit random numbers, which produce negative integers
    // nextBits range tests
    for (bits in 1..smallest(63, randomLimits.maxBits)) {
        value maxInclusive = 2^bits-1;
        for (val in random.bits(bits).take(1k)) {
            assertTrue(0 <= val <= maxInclusive,
                "nextBits(``bits``); 0 <= ``val`` <= ``maxInclusive``");
        }
    }

    // nextInteger range tests
    value mib = randomLimits.maxIntegerBound;
    //workaround https://github.com/ceylon/ceylon.language/issues/656
    //for (bound in (0:mib).by(mib/100).skip(1)) {
    for (bound in (2..mib-mib/100).by(mib/100)) {
        for (val in random.integers(bound).take(100)) {
            assertTrue(0 <= val < bound,
                "nextInteger(``bound``); 0 <= ``val`` < ``bound``");
        }
    }
}

shared suppressWarnings("deprecation")
void testAverageAndVarianceOfIntegers
        (Random random, Float stdDevs) {
    void test(Integer bound) {
        testAverageAndVariance(
                impreciseFloat(bound - 1),
                random.integers(bound)
                      .map(impreciseFloat)
                      .take(1k),
                stdDevs);
    }

    // be sure to include 32-bits
    for (exp in (22..52).by(10)) {
        value bound = 2^exp;
        test(bound); // exact power of two
        test(bound + bound/3);
        test(bound - bound/3);
    }
}

shared suppressWarnings("deprecation")
void testAverageAndVarianceOfFloats
        (Random random, Float stdDevs)
    =>  testAverageAndVariance(1.0, random.floats.take(1k), stdDevs);

shared suppressWarnings("deprecation")
void testAverageAndVarianceOfBytes
        (Random random, Float stdDevs) {
    value bytes = random.bytes;
    value twoBytes = zipPairs(bytes, bytes).map((pair)
        =>  let ([a, b] = pair)
            a.unsigned
                .leftLogicalShift(8)
                .or(b.unsigned));

    testAverageAndVariance(65535.0,
        twoBytes.map(impreciseFloat).take(1k),
        stdDevs);
}

shared
void testAverageAndVarianceOfBooleans
        (Random random, Float stdDevs) {
    // don't use just 1 boolean per sample; 0..1 range
    // is too small for variance test
    testAverageAndVariance(65535.0,
            bitsFromBooleans(random, 16)
                    .map(impreciseFloat)
                    .take(1k),
                    stdDevs);
}

[Float, Float]? meanAndVarianceStdDevs(max, uniformSamples) {

    "upper bound, inclusive"
    Float max;

    "generate a sample with uniform distribution"
    {Float*} uniformSamples;

    function validateSample(Float sample) {
        assert (0.0 <= sample <= max);
        return sample;
    }

    if (exists [averageMeasured, stdDevMeasured, count] =
            meanAndStdDev(uniformSamples.map(validateSample))) {

        "expected variance for uniform distribution = `1/12 * (b-a)^2`"
        value uniformVariance = max ^ 2 / 12;
        value uniformStdDev = uniformVariance ^ 0.5;

        "expected standard devation of the average
         of count samples = `sampleStdDev / sqrt(count)`"
        value stdDevOfSampleAverage = uniformStdDev / count ^ 0.5;

        "variance of the sample variance for a uniform distribution.
         See <http://en.wikipedia.org/wiki/Variance#Distribution_of_the_sample_variance>"
        value varianceOfSampleVariance =
                let (n = count.float)
                let (κ = -1.2)
                uniformStdDev ^ 4 * (2 / (n - 1) + κ / n );
        value stdDevOfSampleVariance = varianceOfSampleVariance ^ 0.5;

        // measured
        value averageStdDevsMeasured =
                (max / 2 - averageMeasured) / stdDevOfSampleAverage;

        value varianceStdDevsMeasured =
                (uniformVariance - stdDevMeasured ^ 2) / stdDevOfSampleVariance;

        return [averageStdDevsMeasured, varianceStdDevsMeasured];
    }
    else {
        return null;
    }
}

shared
void testAverageAndVariance(max, uniformSamples, stdDevs) {
    "upper bound, inclusive"
    Float max;

    "generate a sample with uniform distribution"
    {Float*} uniformSamples;

    "allowable number of standard devations from mean;
     with 3.89 std deviations, 1 test in 10k should fail"
    Float stdDevs;

    assert (exists [meanStdDevs, varianceStdDevs] =
            meanAndVarianceStdDevs(max, uniformSamples));

    // mean should be close to max/2
    assertTrue(meanStdDevs.magnitude < stdDevs,
            "average of random numbers outside \
             expected value by ``meanStdDevs`` \
             standard deviations");

    assertTrue(varianceStdDevs.magnitude < stdDevs,
            "variance of random numbers outside \
             expected range by ``varianceStdDevs`` \
             standard deviations");
}

shared suppressWarnings("deprecation")
Float chiSquaredBytes(Random random)
    =>  chiSquaredDeviations {
            max = 255;
            buckets = 256;
            samples = random.bytes
                .map(Byte.unsigned).take(256*5);
        };

shared
void testChiSquaredBytes
        (Random random, Float stdDevs) {
    value stdDevsMeasured = chiSquaredBytes(random);
    assertTrue(stdDevsMeasured.magnitude < stdDevs,
            "chi squared outside of expected value \
             by ``stdDevsMeasured`` standard deviations");
}

shared
Float chiSquaredBooleans(Random random)
    =>  chiSquaredDeviations {
            max = 2^16 - 1;
            buckets = 2^10;
            samples = bitsFromBooleans(random, 16)
                .take(2^10 * 5);
        };

shared
void testChiSquaredBooleans
        (Random random, Float stdDevs) {
    value stdDevsMeasured = chiSquaredBooleans(random);
    assertTrue(stdDevsMeasured.magnitude < stdDevs,
            "chi squared outside of expected value \
             by ``stdDevsMeasured`` standard deviations");
}

shared suppressWarnings("deprecation")
Float chiSquaredBits(Random random, Integer bits)
    =>  if (bits < 64) then
            chiSquaredDeviations {
                max = 2^bits - 1;
                buckets = 2^10;
                samples = random.bits(bits)
                    .take(2^10 * 5);
            }
        else
            // for the 64 bit test, only test the 63 most
            // significant digits to avoid sign issues,
            // which is fine; the lsb would be ignored anyway
            chiSquaredDeviations {
                max = 2^63 - 1;
                buckets = 2^10;
                samples = random.bits(64)
                    .map((i) => i.rightLogicalShift(1))
                    .take(2^10 * 5);
            };

shared
void testChiSquaredBits(Random random, Float stdDevs) {
    for (bits in 10..runtime.integerAddressableSize) {
        value stdDevsMeasured = chiSquaredBits(random, bits);
        assertTrue(stdDevsMeasured.magnitude < stdDevs,
                "chi squared outside of expected value \
                 by ``stdDevsMeasured`` standard deviations
                 for nextBits(``bits``)");
    }
}

suppressWarnings("deprecation")
{Integer*} bitsFromBooleans(Random random, Integer bits)
    =>  stream(() {
            variable value result = 0;
            for (bit in 0:bits) {
                result = result.set(bit, random.nextBoolean());
            }
            return result;
        });
