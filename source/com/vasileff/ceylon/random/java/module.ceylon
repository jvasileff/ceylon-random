license("http://opensource.org/licenses/MIT")
by("John Vasileff")
native("jvm")
module com.vasileff.ceylon.random.java "0.0.5" {
    shared import java.base "7";
    shared import ceylon.math "1.2.0";
    shared import com.vasileff.ceylon.random.api "0.0.5";
    import ceylon.interop.java "1.2.0";
}
