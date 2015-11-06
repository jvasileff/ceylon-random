ceylon-random
=============

Ceylon Random provides pseudorandom number generators for Ceylon on both the JVM and
JavaScript virtual machine, as well as an easy to use API for use by third party random
number generators. Two modules are available:

The **api** module provides the main `Random` interface, the default `LCGRandom`
pseudorandom number generator, and access to platform default random number generators.

The **java** module provides JVM specific functionality including `JavaRandomAdapter` to
wrap `java.util.Random` generators, and `randomWhole()` and `randomWholeBits()` utility
functions for use with `ceylon.math.whole`.

## Module Documentation

- [com.vasileff.ceylon.random.api](https://modules.ceylon-lang.org/repo/1/com/vasileff/ceylon/random/api/0.0.5/module-doc/api/index.html)
- [com.vasileff.ceylon.random.java](https://modules.ceylon-lang.org/repo/1/com/vasileff/ceylon/random/java/0.0.5/module-doc/api/index.html)

## Getting Started

These modules are available on [Ceylon Herd](https://modules.ceylon-lang.org),
which is automatically enabled by the Ceylon build tool. Simply add one or both
of the following to your module's `module.ceylon`:

```ceylon
import com.vasileff.ceylon.random.api "0.0.5";
import com.vasileff.ceylon.random.java "0.0.5";
```

## Usage Examples

Creating and using the default random number generator is easy:

```ceylon
shared void run() {
    // Create a random number generator
    value random = LCGRandom();

    // Print a pseudorandom Float in the range 0.0 to 1.0:
    print (random.nextFloat());
}
```

Other simple methods include `nextBits()`, `nextBoolean()`, `nextByte()`, and
`nextInteger()`.

More convenient is `nextElement()`, which can be used to generate a random number
within a `Range`:

```ceylon
print(random.nextElement(1..100));
// Sample output: 27
```

or select a random element from a `Sequence`:

```ceylon
print(random.nextElement(["heads", "tails"]));
// Sample output: heads
```

It is also possible to obtain an infinite stream of random values using corresponding
functions `bits()`, `booleans()`, `bytes()`, `elements()`, `floats()`, and `integers()`.

For example, to
simulate multiple rolls of a die:

```ceylon
value diceStream => random.elements([*('⚀':6)]);
print(diceStream.take(10));
// Sample output: { ⚂, ⚀, ⚀, ⚂, ⚀, ⚅, ⚁, ⚅, ⚅, ⚁ }
```

Finally, `randomize()` and `randomizeInPlace()` can be used to shuffle a list:

```ceylon
print(randomize {
    for (suit in {"♠", "♥", "♦", "♣"})
    for (rank in {"Ace", "King", "Queen", "Jack",
                  *(10..2)*.string})
    suit + rank
}.take(5));
// sample output: { ♥6, ♣Queen, ♦King, ♥King, ♣10 }
```

## Changes

### v0.0.5

- Compiled for Ceylon 1.2.0
- Added utility methods that return infinite streams of random values.
- Added `platformRandom()` that returns a `Random` instance that uses the platform
  default random number generator. On the JVM, `java.util.Random` is used as the backing
  generator, and on the JavaScript VM, `Math.random()`.
- Added `platformSecureRandom()` that returns a `Random` instance that uses the platform
  default *secure* random number generator, if available. On the JVM,
  `java.util.SecureRandom` is used as the backing generator. `null` is currently returned
  on the JavaScript VM.
- Changed `Random.nextElement(Iterable)` to require the `Iterable`s element type to
  be non-`Null` (**breaking change**)
- Significantly improved testing for quality of the included pseudorandom number
  generators.
- Introduced experimental `InfiniteStream` and `InfiniteIterator` utility interfaces.  

### v0.0.4

- Added `Random.nextElement(Iterable)`
- Renamed the parameter `numBits` to `bits` for `Random.nextBits` and
  `randomWholeBits`
- Deprecated `{Element+} stream(Element next())`; use `Iterable.cycled` instead

### v0.0.3

- Removed support for `randomizeInPlace(MutableList)`
- Removed dependency on `ceylon.collection`

### v0.0.2

- Added `randomize` and `randomizeInPlace` functions
- Made `JavaRandomAdapter` concrete
- Combined `api` and `sample` modules
- First version available on Ceylon Herd

## License

The content of this repository is released under the MIT License as provided in
the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to this repository,
you agree to license your contribution under the license mentioned above.
