"Produces the [[stream|ceylon.language::Iterable]] that results from repeated
 calls to the given [[function|next]]. The stream is infinite.

 This function produces a result similar to:

     { next() }.cycled
 "
shared {Element+} stream<Element>(
        "The function that produces the next element of the stream."
        Element next()) {
    value paramNext = next;
    object it satisfies {Element+} & Iterator<Element> {
        shared actual Iterator<Element> iterator() => this;
        shared actual Element next() => paramNext();
    }
    return it;
}
