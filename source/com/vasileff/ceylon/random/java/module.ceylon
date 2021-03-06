"""
   This module provides [[java.util::Random]] to [[ceylon.random::Random]] adapters.
"""
license("http://opensource.org/licenses/MIT")
by("John Vasileff")
native("jvm")
module com.vasileff.ceylon.random.java "1.0.4-SNAPSHOT" {
    shared import java.base "7";
    shared import ceylon.random "1.3.1";
    import ceylon.interop.java "1.3.1";
}
