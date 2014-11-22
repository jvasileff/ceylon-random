shared {Element+} stream<Element>(Element() f) {
  object iterable satisfies {Element+} {
    object it satisfies Iterator<Element> {
      shared actual Element next() => f();
    }
    shared actual Iterator<Element> iterator() => it;
  }
  return iterable;
}
