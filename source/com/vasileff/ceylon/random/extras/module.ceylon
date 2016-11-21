"""
   This "extras" package provides the following utilities to complement `ceylon.random`:

   - [[platformRandom]]: Returns an instance of [[ceylon.random::Random]] that delegates
     the platform default random number generator.
   - [[platformSecureRandom]]: Returns an instance of [[ceylon.random::Random]] that
     delegates the platform default secure random number generator, or `null` if a
     secure random number generator is not available.
"""
license("http://opensource.org/licenses/MIT")
by("John Vasileff")
module com.vasileff.ceylon.random.extras "1.0.4-SNAPSHOT" {
    shared import ceylon.random "1.3.1";
    native("jvm") import java.base "7";
    native("dart") import dart.math "1.3.1";
}
