import java.util {
    JRandom=Random
}

"A pseudorandom number generator backed by `java.util.Random`."
by("John Vasileff")
shared final class JavaRandom(
        "The seed, if provided, will be used to construct the
         `java.util.Random` delegate."
        Integer? seed = null)
        extends JavaRandomAdapter<JRandom>(newJRandom(seed)) {

    "Delegates to `java.util.Random.setSeed(long)`."
    shared void reseed(Integer newSeed) {
        delegate.setSeed(newSeed);
    }
}

JRandom newJRandom(Integer? seed) {
    if (exists seed) {
        return JRandom(seed);
    } else {
        return JRandom();
    }
}