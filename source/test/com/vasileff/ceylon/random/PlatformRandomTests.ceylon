import test.ceylon.random {
    StandardTests
}
import com.vasileff.ceylon.random.extras {
    platformRandom
}

shared
class PlatformRandomTests() extends StandardTests(platformRandom, 32) {}
