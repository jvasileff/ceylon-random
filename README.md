ceylon-random
=============

Random Number Generator API for Ceylon

### Module Documentation

- [com.vasileff.ceylon.random.api](http://jvasileff.github.io/ceylon-random/modules/com/vasileff/ceylon/random/api/0.0.1/module-doc/api/index.html)
- [com.vasileff.ceylon.random.sample](http://jvasileff.github.io/ceylon-random/modules/com/vasileff/ceylon/random/sample/0.0.1/module-doc/api/index.html)
- [com.vasileff.ceylon.random.java](http://jvasileff.github.io/ceylon-random/modules/com/vasileff/ceylon/random/java/0.0.1/module-doc/api/index.html)

### Repository Setup

The modules are currently available at the URL:

    http://jvasileff.github.io/ceylon-random/modules

and can be added can be imported with the following in `module.ceylon`:

```ceylon
import "com.vasileff.ceylon.random.api" "0.0.1";
import "com.vasileff.ceylon.random.sample" "0.0.1";
import "com.vasileff.ceylon.random.java" "0.0.1";
```

### Usage Example

```ceylon
shared void run() {
  // Create a native Ceylon RNG
  //(supported on both Java and JavaScript runtimes)
  value rng = LCGRandom();

  // Print a pseudorandom Float in the range 0.0 to 1.0:
  print (rng.nextFloat());

  // Print a dozen pseudorandom Integers from 0 to 99:
  print ("\n".join(stream(() => rng.nextInteger(100)).take(12)));

  // Print the outcome of five coin tosses:
  value coinFlipStream =
      stream(rng.nextBoolean).map((b) => b then "heads" else "tails");

  print (", ".join(coinFlipStream.take(5)));
}
```

### Disclaimer

Please note, as the version would imply, this api is subject to change, and may not even work.
