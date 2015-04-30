"Returns an instance of [[Random]] backed by a platform
 specific random number generator.

 For the JVM, this function returns a new [[LCGRandom]]
 instance. For the JavaScript VM, a [[Random]] that uses
 `Math.random()` for random values is returned."
shared native
Random platformRandom();

"Returns an instance of [[Random]] backed by a platform
 specific random number generator.

 For the JVM, this function returns a new [[LCGRandom]]
 instance. For the JavaScript VM, a [[Random]] that uses
 `Math.random()` for random values is returned."
shared native("jvm")
Random platformRandom() => LCGRandom();

"Returns an instance of [[Random]] backed by a platform
 specific random number generator.

 For the JVM, this function returns a new [[LCGRandom]]
 instance. For the JavaScript VM, a [[Random]] that uses
 `Math.random()` for random values is returned."
shared native("js")
Random platformRandom() => object
        satisfies Random {

    value two32 = 2^32;
    value two53 = 2^53;

    Integer next("must be in 1..32" Integer bits) {
        dynamic {
            return (Math.random() * two53).integer / 2^(53 - bits);
        }
    }

    shared actual
    Integer nextBits(Integer bits) {
        if (bits <= 0) {
            return 0;
        }
        else if (bits <= 32) {
            return next(bits);
        }
        else if (bits <= 53) {
            return next(bits - 32) * two32 + next(32);
        }
        else {
            throw Exception(
                "bits cannot be greater than \
                 ``randomLimits.maxBits`` on this platform");
        }
    }
};
