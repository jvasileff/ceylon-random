Float|Absent average<Absent>(
        Iterable<Float, Absent> xs)
        given Absent satisfies Null {

    // Kahan algorithm is 40% slower on Javascript
    // and likely not worth the improved accuracy.

    variable value sum = 0.0;
    variable value count = 0;

    for (x in xs) {
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
[Float, Float]? meanAndStdDev({Float*} xs) {
    variable value k = 0;
    variable value m = 0.0;
    variable value s = 0.0;

    // Welford’s method
    for (x in xs) {
        value prev = m;
        m += (x - m) / ++k;        // m = x first iter
        s += (x - m) * (x - prev); // s = 0 first iter
    }

    return (k > 1)
    then [m, (s / (k - 1)) ^ 0.5];
}
