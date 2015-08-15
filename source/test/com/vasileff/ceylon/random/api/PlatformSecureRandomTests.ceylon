import com.vasileff.ceylon.random.api {
    platformSecureRandom,
    Random
}
import ceylon.test.core {
    IgnoreException
}

shared
class PlatformSecureRandomTests() extends StandardTests(
        newSecureRandom, 32, 3.890592) {}

Random newSecureRandom() {
    if (exists result = platformSecureRandom()) {
        return result;
    }
    else {
        throw IgnoreException("Platform secure random not available");
    }
}
