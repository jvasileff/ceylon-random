import java.security {
    JSecureRandom=SecureRandom
}
import ceylon.random {
    Random,
    randomLimits
}
import dart.math {
    DartRandom = Random_C
}

"Returns an instance of [[Random]] backed by a platform
 specific secure random number generator.

 For the JVM, this function returns a [[Random]] that
 uses `java.security.SecureRandom` for random values.

 For the JavaScript VM, this function returns [[null]]."
shared native
Random? platformSecureRandom();

shared native("jvm")
Random? platformSecureRandom() => object
        satisfies Random {

    "The backing delegate."
    JSecureRandom delegate = JSecureRandom();

    shared actual Integer nextBits(Integer bits) {
        if (bits == 0) {
            return 0;
        } else if (bits < 31) {
            return delegate.nextInt(2 ^ bits);
        } else {
            return delegate.nextLong().rightLogicalShift(64 - bits);
        }
    }
};

native("js")
Integer()? nextIntegerNodeJS = (() {
    dynamic {
        try {
            dynamic crypto = require("crypto");
            return () => crypto.pseudoRandomBytes(4).readUInt32BE();
        } catch (Throwable _) {
            return null;
        }
    }
})();

"See https://developer.mozilla.org/en-US/docs/Web/API/RandomSource"
native("js")
Integer()? nextIntegerWindowCrypto = (() {
    dynamic {
        if (!eval("typeof(window) === 'undefined'")) {
             if (window.crypto?.getRandomValues exists) {
                 return () {
                    dynamic intArray = Uint32Array(1);
                    window.crypto.getRandomValues(intArray);
                    return intArray[0];
                };
            }
        }
        return null;
    }
})();

native("js")
Integer()? nextIntegerJS
    =   nextIntegerNodeJS else nextIntegerWindowCrypto;

shared native("js")
Random? platformSecureRandom()
        => if (exists nextIntegerJS) then object
        satisfies Random {

    value two32 = 2^32;

    Integer next(bits) {
        "must be in 1..32."
        Integer bits;

        // don't risk returning a negative number
        if (bits == 32) {
            return nextIntegerJS();
        }
        else {
            return nextIntegerJS().rightLogicalShift(32 - bits);
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
} else null;

shared native("dart")
Random? platformSecureRandom() => object
        satisfies Random {

    value two32 = 2^32;

    value rng = DartRandom.secure();

    Integer next(bits) {
        "must be in 1..32."
        Integer bits;

        value result = rng.nextInt(2^bits);
        return result;
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
