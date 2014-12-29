import ceylon.collection {
    MutableList
}

"Shuffle the given elements. This operation modifies the `Array|MutableList`."
shared void randomizeInPlace<Element>(
        Array<Element>|MutableList<Element> elements,
        Random random = LCGRandom()) {

    // using objects rather than functions due to the Integer
    // boxing inherent with ceylon.language.Callables
    abstract class Setter() {
        shared formal void set(Integer index, Element item);
    }

    Setter setter;

    switch(elements)
    case (is Array<Element>) {
        object o extends Setter() {
            shared actual void set(Integer index, Element item)
                => elements.set(index, item);
        }
        setter = o;
    }
    case (is MutableList<Element>) {
        object o extends Setter() {
            shared actual void set(Integer index, Element item)
                => elements.set(index, item);
        }
        setter = o;
    }

    // Fisher-Yates Shuffle
    value size = elements.size;
    for (i in 0:size - 1) {
        value j = random.nextInteger(size - i) + i;
        assert(exists oldi = elements.getFromFirst(i));
        assert(exists oldj = elements.getFromFirst(j));
        setter.set(i, oldj);
        setter.set(j, oldi);
    }
}
