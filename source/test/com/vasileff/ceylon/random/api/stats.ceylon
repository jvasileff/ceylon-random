alias Failure => String;
Null success = null;

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

[Integer[]+] partition({Integer+} ints, Integer partitionsCount, variable Integer low, Integer partitionWidth) {
    variable value high = low + partitionWidth;
    
    function geANDlt(Integer i) => low <= i < high;
    function geANDle(Integer i) => low <= i <= high;
    
    value partitions = (1..partitionsCount).collect((index) {
        value p = ints.select(index < partitionsCount then geANDlt else geANDle);
        low += partitionWidth;
        high += partitionWidth;
        if (high < low) { // must be overflow
            high = runtime.maxIntegerValue;
        }
        return p;
    });
    return partitions;
}

Failure? naturalDistribution({Integer+} ints, Integer min, Integer partitionWidth, Integer parts = 16) {
    value partitions = partition(ints, parts, min, partitionWidth);
    variable Integer left = 0;
    variable Integer right = partitions.size - 1;
    
    while (left < right) {
        value rightPartitionSize = (partitions[right]?.size else (-1)).float;
        value leftPartitionSize = (partitions[left]?.size else (-1)).float;
        
        if (rightPartitionSize < 0.9*leftPartitionSize ||
            rightPartitionSize > 1.1*leftPartitionSize) {
            return "Natural distribution: Partitions not naturally distributed: ``partitions.map((it) => it.size)``";
        }
        left++;
        right--;
    }
    
    value partitionsItems = sum(partitions*.size);
    if (partitionsItems != ints.size) {
        return "Natural distribution: Expected ``ints.size`` total integers in all partitions but found ``partitionsItems``";
    }
    return success;
}

Failure? uniformDistribution({Integer+} ints, Integer min, Integer width, Integer parts = 16) {
    value partitions = partition(ints, parts, min, width);
    
    value tolerance = 0.05;
    value minPartitionSize = (1.0 - tolerance) * partitions.first.size;
    value maxPartitionSize = (1.0 + tolerance) * partitions.first.size;
    
    for (partition in partitions.rest) {
        if (partition.size.float < minPartitionSize ||
            partition.size.float > maxPartitionSize) {
            return "Uniform distribution: Partitions not uniformly distributed: ``partitions.map((it) => it.size)``";
        }
    }
    value partitionsItems = sum(partitions*.size);
    if (partitionsItems != ints.size) {
        return "Uniform distribution: Expected ``ints.size`` total integers in all partitions but found ``partitionsItems``";
    }
    return success;
}

{Integer+} successiveDiff({Integer+} ints) {
    variable value prev = ints.first;
    value result = ints.rest.map((it) {
        value result = it - prev;
        prev = it;
        return result;
    });
    assert (is {Integer+} result);
    return result;
}
