import com.vasileff.ceylon.random.api {
    Random
}
import ceylon.test {
    test
}

shared abstract
class StandardTests(
        Random() random,
        "Allowable number of standard devations from expected
         value for each iteration of each test; with 3.89 std
         deviations, expected failure rate is 1 in 10k."
        Float stdDevs = 3.890592) {

    test shared
    void testRange()
        =>  package.testRange(random());

    test shared
    void testAverageAndVarianceOfIntegers()
        =>  package.testAverageAndVarianceOfIntegers(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testAverageAndVarianceOfFloats()
        =>  package.testAverageAndVarianceOfFloats(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testAverageAndVarianceOfBytes()
        =>  package.testAverageAndVarianceOfBytes(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testAverageAndVarianceOfBooleans()
        =>  package.testAverageAndVarianceOfBooleans(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testChiSquaredBytes()
        =>  package.testChiSquaredBytes(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testChiSquaredBooleans()
        =>  package.testChiSquaredBooleans(
                RangeCheckingRandom(random()), stdDevs);

    test shared
    void testChiSquaredBits()
        =>  package.testChiSquaredBits(
                RangeCheckingRandom(random()), stdDevs);
}
