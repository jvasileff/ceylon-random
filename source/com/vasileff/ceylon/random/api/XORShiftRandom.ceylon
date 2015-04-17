"A [XorShift+](https://en.wikipedia.org/wiki/Xorshift)
 pseudorandom number generator.

 The algorithm was adapted to work equally well in the Java and JavaScript
 backends by using smaller bitwise shifts and considering only the lower
 32 bits (due to the JavaScript 32-bit bitwise operations limitation) of
 each iteration (and appending the required bits from two iterations if necessary).
 
 See <https://en.wikipedia.org/wiki/Xorshift> and <http://xorshift.di.unimi.it/>"
shared class XORShiftRandom(
    "The seed to use for this random generator."
    Integer seed = system.nanoseconds + system.milliseconds) satisfies Random {
    
    Integer lower32(Integer int) => int % 2^32;
    
    value s = Array { lower32(seed), lower32(seed / 2) };
    
    Integer next32bits() {
        variable value s1 = s[0] else 0;
        value s0 = s[1] else 0;
        s.set(0, s0);
        s1 = lower32(s1.xor(s1.leftLogicalShift(11)));
        s1 = s1.xor(s1.rightLogicalShift(9));
        s1 = lower32(s1.xor(s0.xor(s0.rightLogicalShift(13))));
        s.set(1, s1);
        return lower32(s1 + s0);
    }
    
    shared actual Integer nextBits(Integer bits) {
        if (bits > randomLimits.maxBits) {
            throw Exception("bits cannot be greater than
                             ``randomLimits.maxBits`` on this platform");
        }
        else if (bits <= 0) {
            return 0;
        }
        
        value firstBits = next32bits();
        
        if (bits < 33) {
            return (firstBits % 2^bits).magnitude;
        }
        
        value high = firstBits * 2^32; // shifts 32 bits to the left
        value low = next32bits(); // take only 32 bits as JS bitwise ops use only 32 bits
        
        // "concatenate" low bits to high bits, take only n bits
        value result = (high + low) % 2^bits;
        return if (bits == randomLimits.maxBits)
            then result // with the sign bit included
            else result.magnitude;
    }
    
}