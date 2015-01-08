import com.vasileff.ceylon.random.api {
    Random
}

import java.util {
    JRandom=Random
}

"Adapts `java.util.Random` to [[com.vasileff.ceylon.random.api::Random]]."
by("John Vasileff")
shared class JavaRandomAdapter<Delegate>(delegate) satisfies Random
        given Delegate satisfies JRandom {

    "The backing delegate."
    shared Delegate delegate;

    shared actual Integer nextBits(Integer bits) {
        if (bits == 0) {
            return 0;
        } else if (bits < 31) {
            return delegate.nextInt(2 ^ bits);
        } else {
            return delegate.nextLong().rightLogicalShift(64 - bits);
        }
    }
}
