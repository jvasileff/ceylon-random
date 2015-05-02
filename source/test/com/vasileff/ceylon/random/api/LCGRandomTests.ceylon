import com.vasileff.ceylon.random.api {
    LCGRandom
}

shared
class LCGRandomTests() extends StandardTests(
        LCGRandom,
        if (realInts) then 32 else 15) {}
