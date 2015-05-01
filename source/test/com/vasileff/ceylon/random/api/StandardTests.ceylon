import com.vasileff.ceylon.random.api {
    Random
}
import ceylon.test {
    test
}

shared abstract
class StandardTests(Random() random) {

    test shared
    void testRange()
        =>  package.testRange(random());

    test shared
    void testAverageAndVarianceOfIntegers()
        =>  package.testAverageAndVarianceOfIntegers(
                RangeCheckingRandom(random()));

    test shared
    void testAverageAndVarianceOfFloats()
        =>  package.testAverageAndVarianceOfFloats(
                RangeCheckingRandom(random()));

    test shared
    void testAverageAndVarianceOfBytes()
        =>  package.testAverageAndVarianceOfBytes(
                RangeCheckingRandom(random()));

    test shared
    void testAverageAndVarianceOfBooleans()
        =>  package.testAverageAndVarianceOfBooleans(
                RangeCheckingRandom(random()));

    test shared
    void testChiSquaredBytes()
        =>  package.testChiSquaredBytes(
                RangeCheckingRandom(random()));

    test shared
    void testChiSquaredBooleans()
        =>  package.testChiSquaredBooleans(
                RangeCheckingRandom(random()));

    test shared
    void testChiSquaredBits()
        =>  package.testChiSquaredBits(
                RangeCheckingRandom(random()));
}
