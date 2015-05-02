import com.vasileff.ceylon.random.api {
    Random,
    randomLimits
}

shared
class BooleanBackedRandom(
        Boolean() generate)
        satisfies Random {

    shared actual
    Integer nextBits(Integer bits) {
        if (bits > randomLimits.maxBits) {
            throw Exception("bits cannot be greater than \
                             ``randomLimits.maxBits`` on this platform");
        }
        else {
            variable value result = 0;
            for (bit in 0:bits) {
                result = result.set(bit, generate());
            }
            return result;
        }
    }
}
