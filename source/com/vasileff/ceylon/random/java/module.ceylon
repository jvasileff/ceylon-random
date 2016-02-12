"This module has been deprecated and will soon be replaced with a new JVM specific
 utility module based on `ceylon.random`."
license("http://opensource.org/licenses/MIT")
by("John Vasileff")
native("jvm")
deprecated
module com.vasileff.ceylon.random.java "0.0.6" {
    shared import java.base "7";
    shared import ceylon.math "1.2.1";
    shared import com.vasileff.ceylon.random.api "0.0.6";
    import ceylon.interop.java "1.2.1";
}
