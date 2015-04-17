import ceylon.test {
    test,
    assertTrue
}

import com.vasileff.ceylon.random.api {
    LCGRandom,
    randomLimits,
    Random
}

abstract class RandomTests(Random random) {
        
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
            value random = LCGRandom();
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

    
}