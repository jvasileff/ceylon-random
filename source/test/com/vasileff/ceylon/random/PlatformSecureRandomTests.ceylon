import ceylon.random {
    Random
}
import ceylon.test.engine {
    TestSkippedException
}

import com.vasileff.ceylon.random.extras {
    platformSecureRandom
}

import test.ceylon.random {
    StandardTests
}

Random platformSecureOrSkip() {
    if (exists result = platformSecureRandom()) {
        return result;
    }
    throw TestSkippedException("platformSecureRandom not available");
}

shared
class PlatformSecureRandomTests() extends StandardTests(platformSecureOrSkip, 32) {}
