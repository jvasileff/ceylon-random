shared List<T> randomize<T>({T*} xs, Random random) {
    value result = Array(xs);
    randomizeInPlace<T>(result, random);
    return result;
}
