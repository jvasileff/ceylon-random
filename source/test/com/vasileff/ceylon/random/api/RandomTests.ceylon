import ceylon.test {
    test,
    assertTrue,
    assertEquals
}

import com.vasileff.ceylon.random.api {
    randomLimits,
    Random
}

abstract class RandomTests(Random() getRandom) {
    
    value random = getRandom();
    
    test shared
    void testRange() {
        
        // don't check 64 bit random numbers, which produce negative integers
        // nextBits range tests
        for (bits in 1..smallest(63, randomLimits.maxBits)) {
            value maxInclusive = 2^bits-1;
            for (_ in 0:1k) {
                value val = random.nextBits(bits);
                assertTrue(0 <= val <= maxInclusive,
                    "nextBits(``bits``); 0 <= ``val`` <= ``maxInclusive``");
            }
        }
        
        // nextInteger range tests
        value mib = randomLimits.maxIntegerBound;
        for (bound in (0..mib).by(mib/100).skip(1)) {
            for (_ in 0:100) {
                value val = random.nextInteger(bound);
                assertTrue(0 <= val < bound,
                    "nextInteger(``bound``); 0 <= ``val`` < ``bound``");
            }
        }
    }
    
    test shared
    void testAverageOfFloats() {
        // make sure the mean of samples # of random numbers is within
        // `devs` standard deviations of (0+1.0)/2.
        
        "number of random numbers to average"
        value count = 1k;
        
        "expected variance for uniform distribution = `1/12 * (b-a)^2`"
        value uniformStdDev = (1.0 ^ 2 / 12) ^ 0.5;
        
        "expected standard devation of the average
         of count samples = `sampleStandardDev / sqrt(count)`"
        value oneStdDevOfAvg = uniformStdDev / count ^ 0.5;
        
        "Number of standard devations to allow. With 3.89
         std deviations, 1 test in 10000 should fail"
        value devs = 3.89;
        
        value low = 0.5 - devs * oneStdDevOfAvg;
        value high = 0.5 + devs * oneStdDevOfAvg;
        
        // run multiple tests so we can try out different seeds
        for (i in 0:10) {
            value random = getRandom();
            assert (exists mean = average {
                for (_ in 0:count) random.nextFloat()
            });
            
            if (! low <= mean <= high) {
                print(i);
                value offset = mean - 0.5;
                value stdDevs = offset/oneStdDevOfAvg;
                assertTrue(low <= mean <= high,
                    "average ``mean`` outside " +
                            "of expected range " +
                            "(``stdDevs`` standard deviations)");
            }
        }
    }

    function nextInts(Integer count, Integer bits)
            => let (random = getRandom()) (1..count).collect((_) => random.nextBits(bits));
    
    test shared
    void testUniformDistribution() {
        assertEquals(uniformDistribution(nextInts(250k, 16), 0, 2^16 / 16), success);
        assertEquals(uniformDistribution(nextInts(250k, 32), 0, 2^32 / 16), success);
        assertEquals(uniformDistribution(nextInts(250k, 48), 0, 2^48 / 16), success);
        assertEquals(uniformDistribution(nextInts(1M, randomLimits.maxBits),
            runtime.minIntegerValue, runtime.maxIntegerValue / 16, 32), success);
    }
    
    test shared
    void testNaturalDistributionBetweenDifferences() {
        assertEquals(naturalDistribution(successiveDiff(nextInts(250k, 16)), -2^16, 2^16 / 8), success);
        assertEquals(naturalDistribution(successiveDiff(nextInts(250k, 32)), -2^32, 2^32 / 8), success);
        assertEquals(naturalDistribution(successiveDiff(nextInts(250k, 48)), -2^48, 2^48 / 8), success);
    }

}