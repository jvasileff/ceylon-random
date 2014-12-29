import com.vasileff.ceylon.random.api {
    Random
}

import java.util {
    JRandom=Random
}

"Adapts `java.util.Random` to [[com.vasileff.ceylon.random.api::Random]]."
by("John Vasileff")
shared abstract class JavaRandomAdapter<Delegate>() satisfies Random
        given Delegate satisfies JRandom {

    "The backing delegate."
    shared formal Delegate delegate;

    shared actual Integer nextBits(Integer numBits) {
        if (numBits == 0) {
            return 0;
        } else if (numBits < 31) {
            return delegate.nextInt(2 ^ numBits);
        } else {
            return delegate.nextLong().rightLogicalShift(64 - numBits);
        }
    }
}
