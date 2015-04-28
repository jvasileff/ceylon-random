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
        =>  package.testAverageAndVarianceOfIntegers(random());

    test shared
    void testAverageAndVarianceOfFloats()
        =>  package.testAverageAndVarianceOfFloats(random());

    test shared
    void testAverageAndVarianceOfBytes()
        =>  package.testAverageAndVarianceOfBytes(random());

    test shared
    void testAverageAndVarianceOfBooleans()
        =>  package.testAverageAndVarianceOfBooleans(random());

    test shared
    void testChiSquaredBytes()
        =>  package.testChiSquaredBytes(random());

    test shared
    void testChiSquaredBooleans()
        =>  package.testChiSquaredBooleans(random());

    test shared
    void testChiSquaredBits()
        =>  package.testChiSquaredBits(random());
}
