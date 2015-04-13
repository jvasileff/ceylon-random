import com.vasileff.ceylon.xmath.float {
    sum
}
import com.vasileff.ceylon.xmath.integer {
    smallest
}

Float|Absent average<Absent>(
        Iterable<Float|Integer, Absent> xs)
        given Absent satisfies Null {

    // Kahan algorithm is 40% slower on Javascript
    // and likely not worth the improved accuracy.

    variable value sum = 0.0;
    variable value count = 0;

    value floats = if (is {Float*} xs)
                   then xs
                   else xs.map(impreciseFloat);

    for (x in floats) {
        count++;
        sum += x;
    }

    if (count > 0) {
        return sum / count;
    }
    else {
        assert (is Absent null);
        return null;
    }
}

"Return the mean and standard deviation of [[xs]], or [[null]]
 if `xs` has fewer than two elements."
[Float, Float]? meanAndStdDev({<Float|Integer>*} xs) {
    variable value k = 0;
    variable value m = 0.0;
    variable value s = 0.0;

    value floats = if (is {Float*} xs)
                   then xs
                   else xs.map(impreciseFloat);

    // Welford’s method
    for (x in floats) {
        value prev = m;
        m += (x - m) / ++k;        // m = x first iter
        s += (x - m) * (x - prev); // s = 0 first iter
    }

    return (k > 1)
    then [m, (s / (k - 1)) ^ 0.5];
}

Float chiSquared(
        Integer|Float max,
        "Number of buckets. For [[Integer]] samples, `max + 1` should be evenly
         divisible by `buckets` to ensure an even distribution of samples."
        Integer buckets,
        "`samples.count` should be greater than or equal to `5 * buckets`."
        {<Integer|Float>*} samples) {

    value maxFloat = impreciseFloat(max);
    value floats = if (is {Float*} samples)
                   then samples
                   else samples.map(impreciseFloat);
    value counts = Array.OfSize(buckets, 0);
    value lastIndex = buckets - 1;
    variable value sampleCount = 0;
    for (x in floats) {
        // use `smallest to protect against miniscule
        // chance of IOOBE due to float imprecision
        value bucket = smallest(lastIndex,
            (x / maxFloat * lastIndex + 0.5).integer);
        counts.set(bucket, (counts[bucket] else 0) + 1);
        sampleCount++;
    }
    value expected = sampleCount.float / buckets;
    return sum(*counts.map((count)
        =>  (count.float - expected) ^ 2)) / expected;
}

Float chiSquaredDeviations(
        Integer|Float max,
        Integer buckets,
        {<Integer|Float>*} samples)
    // approximately correct for large # of buckets
    =>  let (mean = buckets - 1,
             variance = mean * 2,
             stdDev = variance.float ^ 0.5)
        (mean - chiSquared(max, buckets, samples)) / stdDev;

Boolean realInts = runtime.integerAddressableSize == 64;
Float impreciseFloat(Integer|Float i)
    =>  if (is Float i) then
            i
        else if (realInts
                    && (i >= 9007199254740992 ||
                        i <= -9007199254740992)) then
            (i / 9007199254740992).float
                * 9007199254740992
                + i % 9007199254740992
        else
            i.float;
