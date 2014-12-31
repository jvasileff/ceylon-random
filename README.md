ceylon-random
=============

Random Number Generator API for Ceylon

### Module Documentation

- [com.vasileff.ceylon.random.api](http://jvasileff.github.io/ceylon-random/modules/com/vasileff/ceylon/random/api/0.0.3/module-doc/api/index.html)
- [com.vasileff.ceylon.random.java](http://jvasileff.github.io/ceylon-random/modules/com/vasileff/ceylon/random/java/0.0.3/module-doc/api/index.html)

### Repository Setup

The modules are currently available at the URL:

    http://jvasileff.github.io/ceylon-random/modules

and can be added can be imported with the following in `module.ceylon`:

```ceylon
import com.vasileff.ceylon.random.api "0.0.3";
import com.vasileff.ceylon.random.java "0.0.3";
```

### Usage Examples

```ceylon
shared void run() {
    // Create a random number generator
    value rng = LCGRandom();

    // Print a pseudorandom Float in the range 0.0 to 1.0:
    print (rng.nextFloat());

    // Print a dozen pseudorandom Integers from 0 to 99:
    print (", ".join({ rng.nextInteger(100) }.cycled.take(12)));

    // Print the outcome of five coin tosses:
    value coinFlipStream =
            { rng.nextBoolean() then "heads" else "tails" }.cycled;

    print (", ".join(coinFlipStream.take(5)));

    // Print a stream of elements in random order:
    print (randomize({ "a", "b", "c", "d"}));
}
```

### License

The content of this repository is released under the MIT License as provided in
the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to this repository,
you agree to license your contribution under the license mentioned above.
