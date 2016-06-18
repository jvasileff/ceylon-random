shared
void run() {
    value iters = 1;
    for (i in 0:iters) {
        PlatformRandomTests().runTests();
        PlatformSecureRandomTests().runTests();
    }
}
