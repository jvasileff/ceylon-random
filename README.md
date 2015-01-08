ceylon-random
=============

Random Number Generator API for Ceylon

## Module Documentation

- [com.vasileff.ceylon.random.api](https://modules.ceylon-lang.org/repo/1/com/vasileff/ceylon/random/api/0.0.4/module-doc/api/index.html)
- [com.vasileff.ceylon.random.java](https://modules.ceylon-lang.org/repo/1/com/vasileff/ceylon/random/java/0.0.4/module-doc/api/index.html)

## Getting Started

These modules are available on [Ceylon Herd](https://modules.ceylon-lang.org),
which is automatically enabled by the Ceylon build tool. Simply add one or both
of the following to your module's `module.ceylon`:

```ceylon
import com.vasileff.ceylon.random.api "0.0.4";
import com.vasileff.ceylon.random.java "0.0.4";
```

The `api` module provides the main `Random` interface and related functions
along with a default implementation, `LCGRandom`. The `api` module is available
for both the Java Virtual Machine and the JavaScript Virtual Machine.

The `java` module provides easy to use wrappers for `java.util.Random` and
`java.util.SecureRandom` (`JavaRandom` and `JavaSecureRandom`), as well as an
adapter that can be used for instances of any subclass of `java.util.Random`
(`JavaRandomAdapter`).

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

Other simple methods include `nextBits`, `nextInteger`, `nextBoolean`, and
`nextByte`.

More convenient is `nextElement`, which can be used to generate a random number
within a `Range`:

```ceylon
print(random.nextElement(1..100));
// Sample output: 27
```

or select a random element from a sequence:

```ceylon
print(random.nextElement(["heads", "tails"]));
// Sample output: heads
```

or from any other `Iterable` with fewer than `runtime.maxIntegerValue`
elements.

One interesting usage is to create a random stream of elements. For example, to
simulate multiple rolls of a die:

```ceylon
function dieRoll() => random.nextElement([*('⚀':6)]);
value diceStream = { dieRoll() }.cycled;
print(diceStream.take(10));
// Sample output: { ⚂, ⚀, ⚀, ⚂, ⚀, ⚅, ⚁, ⚅, ⚅, ⚁ }
```


Finally, `randomize` and `randomizeInPlace` can be used to shuffle a list. For
example, to deal a hand of poker:

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

### v0.0.4

- Added `Random.nextElement(Iterable)`
- Renamed the parameter `numBits` to `bits` for `Random.nextBits` and
  `randomWholeBits`
- Deprecated `{Element+} stream(Element next())`; use `Iterable.cycled` instead

### v0.0.3

- Removed support for `randomizeInPlace(MutableList)`
- Removed dependency on `ceylon.collection`

### v0.0.2

- Add `randomize` and `randomizeInPlace` functions
- Make `JavaRandomAdapter` concrete
- Combine `api` and `sample` modules
- First version available on Ceylon Herd

## License

The content of this repository is released under the MIT License as provided in
the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to this repository,
you agree to license your contribution under the license mentioned above.
