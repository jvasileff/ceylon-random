import com.vasileff.ceylon.random.api {
    LCGRandom
}

shared
class LCGRandomTests() extends StandardTests(
        LCGRandom,
        if (realInts) then 32 else 15) {}

// The seed tests fail on JS (due to 32 bits/shorter cycle?)
//shared
//class DefaultRandomSeedTests() extends StandardTests(
//        () => RandomBackedRandom(DefaultRandom),
//        if (realInts) then 32 else 15) {}
