(function(define) { define(function(require, ex$, module) {
ex$.$CCMM$={"$mod-deps":["ceylon.language\/1.1.0"],"$mod-name":"com.vasileff.ceylon.random.api","$mod-version":"0.0.1","$mod-bin":"7.0","com.vasileff.ceylon.random.api":{"$pkg-shared":1,stream:{$t:{md:"$",tp:[{mt:"tp",nm:"Element"},{mt:"tp",pk:".",nm:"Nothing"}],pk:"$",nm:"Iterable"},pa:1,mt:"m",an:{doc:["Produces the [[stream|ceylon.language::Iterable]] that results from repeated\ncalls to the given [[function|next]]. The stream is infinite."],by:["John Vasileff"]},tp:[{nm:"Element"}],$m:{next$7vlz3x:{$t:{nm:"Element"},mt:"m",an:{doc:["The function that produces the next element of the stream."]},nm:"next"}},$o:{it$d7hs1l:{super:{md:"$",pk:"$",nm:"Basic"},mt:"o",sts:[{md:"$",tp:[{mt:"tp",nm:"Element"},{mt:"tp",pk:".",nm:"Nothing"}],pk:"$",nm:"Iterable"},{md:"$",tp:[{mt:"tp",nm:"Element"}],pk:"$",nm:"Iterator"}],$m:{iterator:{$t:{md:"$",tp:[{mt:"tp",nm:"Element"}],pk:"$",nm:"Iterator"},pa:3,mt:"m",nm:"iterator"},next:{$t:{nm:"Element"},pa:3,mt:"m",nm:"next"}},nm:"it"}},ps:[[{$t:{nm:"Element"},mt:"prm",an:{doc:["The function that produces the next element of the stream."]},$pt:"f",nm:"next"}]],nm:"stream"},floatUnit:{$t:{md:"$",pk:"$",nm:"Float"},mt:"a",nm:"floatUnit"},randomLimits:{super:{md:"$",pk:"$",nm:"Basic"},pa:1,mt:"o",an:{doc:["Provides limits relevant to generating random numbers on the current runtime."],by:["John Vasileff"]},$at:{maxIntegerBound:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1,mt:"a",an:{doc:["The largest value that may be used as an argument to [[Random.nextInteger]]."]},nm:"maxIntegerBound"},maxValue$5s4h5b:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1024,mt:"a",nm:"maxValue"},numBits$92hft6:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1024,mt:"a",nm:"numBits"},maxBits:{$t:{md:"$",pk:"$",nm:"Integer"},pa:3,mt:"a",an:{doc:["The largest value that may be used as an argument to [[Random.nextBits]]. `maxBits`\nwill be the number of bits required to represent [[maxIntegerBound]], if the value\nof `maxIntegerBound` can be represented by 2<sup>n<\/sup>-1 for some `n`. Otherwise,\n`maxBits` will be one less than the number of bits required to represent\n`maxIntegerBound`. `maxBits` is `63` for the Java runtime and `53` for the\nJavaScript runtime."]},nm:"maxBits"}},nm:"randomLimits"},Random:{pa:1,mt:"i",an:{doc:["An interface for random number generators. Satisfying classes must implement\n[[nextBits]], which is used by the default implementaitons of the methods of this\ninterface."],by:["John Vasileff"]},$m:{nextByte:{$t:{md:"$",pk:"$",nm:"Byte"},pa:9,mt:"m",an:{doc:["Returns the next pseudorandom `Byte`."]},nm:"nextByte"},nextBits:{$t:{md:"$",pk:"$",nm:"Integer"},pa:5,mt:"m",an:{throws:["Exception","if [[numBits]] is greater than [[randomLimits.maxBits]]."],doc:["Generates an Integer holding `numBits` pseudorandom bits. This method returns\n`0` for `numBits <= 0`."]},ps:[[{$t:{md:"$",pk:"$",nm:"Integer"},mt:"prm",nm:"numBits"}]],nm:"nextBits"},nextBoolean:{$t:{md:"$",pk:"$",nm:"Boolean"},pa:9,mt:"m",an:{doc:["Returns the next pseudorandom `Boolean`."]},nm:"nextBoolean"},nextFloat:{$t:{md:"$",pk:"$",nm:"Float"},pa:9,mt:"m",an:{doc:["Returns the next pseudorandom `Float` between `0.0` and `1.0`."]},nm:"nextFloat"},nextInteger:{$t:{md:"$",pk:"$",nm:"Integer"},pa:9,mt:"m",an:{throws:["Exception","if [[bound]] is less than `1` or greater than `randomLimits.maxIntegerBound`"],doc:["Returns the next pseudorandom `Integer` between `0` (inclusive)\nand [[bound]] (exclusive)."]},ps:[[{$t:{md:"$",pk:"$",nm:"Integer"},mt:"prm",an:{doc:["The upper bound (exclusive)."]},nm:"bound"}]],nm:"nextInteger"}},nm:"Random"},bitLength:{$t:{md:"$",pk:"$",nm:"Integer"},mt:"m",ps:[[{$t:{md:"$",pk:"$",nm:"Integer"},pa:1024,mt:"prm",nm:"number"}]],nm:"bitLength"}}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
