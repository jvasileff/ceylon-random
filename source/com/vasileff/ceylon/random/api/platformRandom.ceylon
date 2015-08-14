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

    Integer next(bits) {
        "must be in 1..32; lower 21 bits are 0 on some JS VMs."
        Integer bits;

        dynamic {
            return (Math.random() * 2^bits).integer;
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
