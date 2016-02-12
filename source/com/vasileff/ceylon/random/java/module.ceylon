license("http://opensource.org/licenses/MIT")
by("John Vasileff")
native("jvm")
module com.vasileff.ceylon.random.java "1.0.0-SNAPSHOT" {
    shared import java.base "7";
    shared import ceylon.random "1.2.1";
    import ceylon.interop.java "1.2.1";
}
