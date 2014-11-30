import java.util {
  JRandom=Random
}

"A pseudorandom number generator backed by `java.util.Random`."
by("John Vasileff")
shared final class JavaRandom(
  "The seed, if provided, will be used to construct the `java.util.Random` delegate."
  Integer? seed = null)
    extends JavaRandomAdapter<JRandom>() {

  shared actual JRandom delegate;

  if (exists seed) {
    delegate = JRandom(seed);
  } else {
    delegate = JRandom();
  }

  "Delegates to `java.util.Random.setSeed(long)`."
  shared void reseed(Integer newSeed) {
    delegate.setSeed(newSeed);
  }

}
