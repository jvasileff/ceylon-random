(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/vasileff/ceylon/random/api/0.0.1/com.vasileff.ceylon.random.api-0.0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'com.vasileff.ceylon.random.api/0.0.1');
ex$.$mod$ans$=function(){return[m$1.license("http://opensource.org/licenses/MIT"),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];};
ex$.$pkg$ans$com$vasileff$ceylon$random$api=function(){return[m$1.shared()];};
function Random(random$){
}
Random.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:Random'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','Random']};};
ex$.Random=Random;
function $init$Random(){
    if(Random.$$===undefined){
        m$1.initTypeProtoI(Random,'com.vasileff.ceylon.random.api::Random');
        (function(random$){
            random$.nextBits={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'numBits',mt:'prm',$t:{t:m$1.Integer}}],$cont:Random,pa:5,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:Random:$m:nextBits'),m$1.$_throws("Exception","if [[numBits]] is greater than [[randomLimits.maxBits]].")];},d:['com.vasileff.ceylon.random.api','Random','$m','nextBits']};}};random$.nextInteger=function($f){
                var random$=this;
                if((($f<1)||($f>getRandomLimits().maxIntegerBound))){
                    throw m$1.wrapexc(m$1.Exception("bound must be a positive value less than runtime.maxIntegerValue"),'19:6-20:75','com/vasileff/ceylon/random/api/Random.ceylon');
                }else {
                    if((($f.and($f.minus(1))).valueOf()==(0).valueOf())){
                        return random$.nextBits(bitLength($f).minus(1));
                    }else {
                        var $g;
                        function set$g($h){return $g=$h;};
                        var $i=bitLength($f);
                        while((($g=random$.nextBits($i))>=$f)){}
                        return $g;
                    }
                }
            };random$.nextInteger.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'bound',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("The upper bound (exclusive).")];}}],$cont:Random,pa:9,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:Random:$m:nextInteger'),m$1.$_throws(m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Exception),"if [[bound]] is less than `1` or greater than `randomLimits.maxIntegerBound`")];},d:['com.vasileff.ceylon.random.api','Random','$m','nextInteger']};};
            random$.nextBoolean=function(){
                var random$=this;
                return ((random$.nextBits(1)).valueOf()==(1).valueOf());
            };
            random$.nextBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Random,pa:9,an:function(){return[m$1.doc("Returns the next pseudorandom `Boolean`.")];},d:['com.vasileff.ceylon.random.api','Random','$m','nextBoolean']};};
            random$.nextByte=function(){
                var random$=this;
                return random$.nextBits(8).$_byte;
            };
            random$.nextByte.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Byte},ps:[],$cont:Random,pa:9,an:function(){return[m$1.doc("Returns the next pseudorandom `Byte`.")];},d:['com.vasileff.ceylon.random.api','Random','$m','nextByte']};};
            random$.nextFloat=function(){
                var random$=this;
                return random$.nextBits(53).$_float.times(getFloatUnit());
            };
            random$.nextFloat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Float},ps:[],$cont:Random,pa:9,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:Random:$m:nextFloat')];},d:['com.vasileff.ceylon.random.api','Random','$m','nextFloat']};};
        })(Random.$$.prototype);
    }
    return Random;
}
ex$.$init$Random=$init$Random;
$init$Random();
var $j;function $valinit$$j(){if($j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'floatUnit\' before it was set"),'47:0-47:28','Random.ceylon');
if($j===undefined){$j=m$1.INIT$;$j=m$1.Float(1.0).divided((2).power(53))};return $j;};$valinit$$j();
function getFloatUnit(){return $valinit$$j();}
ex$.getFloatUnit=getFloatUnit;
var $prop$getFloatUnit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},d:['com.vasileff.ceylon.random.api','floatUnit']};}};
ex$.$prop$getFloatUnit=$prop$getFloatUnit;
$prop$getFloatUnit.get=getFloatUnit;
getFloatUnit.$crtmm$=$prop$getFloatUnit.$crtmm$;
function bitLength($k){
    m$1.asrt$(((($k>=0)&&($k<=m$1.getRuntime().maxIntegerValue))),"Assertion failed: \'number >= 0 && number <= runtime.maxIntegerValue\' at Random.ceylon (51:8-51:57)",'51:2-51:58','Random.ceylon');
    var $l=(0);
    function set$l($m){return $l=$m;};
    while(($k>0)){
        ($n=$l,$l=$n.successor,$n);
        var $n;
        ($k=$k.divided(2));
    }
    return $l;
};bitLength.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer},pa:1024}],d:['com.vasileff.ceylon.random.api','bitLength']};};
function $o(){
    var randomLimits$=new $o.$$;randomLimits$.$prop$getMaxIntegerBound={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};}};
    randomLimits$.$prop$getMaxBits={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};}};
    randomLimits$.$p_=m$1.getRuntime().maxIntegerValue;
    randomLimits$.$prop$get$p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};}};
    randomLimits$.$prop$get$p.get=function(){return $p};
    randomLimits$.$q_=(0);
    randomLimits$.$prop$get$q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};}};
    randomLimits$.$prop$get$q.get=function(){return $q};
    while((randomLimits$.$p>0)){
        ($r=randomLimits$.$q,randomLimits$.$q=$r.successor,$r);
        var $r;
        (randomLimits$.$p=randomLimits$.$p.divided(2));
    }
    if(((2).power(randomLimits$.$q).minus(1)>m$1.getRuntime().maxIntegerValue)){
        ($s=randomLimits$.$q,randomLimits$.$q=$s.predecessor,$s);
        var $s;
    }
    var maxBits=m$1.largest(randomLimits$.$q,m$1.getRuntime().integerAddressableSize,{Element$largest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxBits',function(){return maxBits;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};});
    var maxIntegerBound=m$1.smallest(m$1.getRuntime().maxIntegerValue,(2).power(m$1.smallest(63,randomLimits$.maxBits,{Element$smallest:{t:m$1.Integer}})).minus(1),{Element$smallest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxIntegerBound',function(){return maxIntegerBound;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};});
    return randomLimits$;
};$o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by("John Vasileff")];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
function $init$getRandomLimits(){
    if($o.$$===undefined){
        m$1.initTypeProto($o,'com.vasileff.ceylon.random.api::randomLimits',m$1.Basic);
        (function(randomLimits$){
            m$1.atr$(randomLimits$,'$p',function(){return this.$p_;},function($t){return this.$p_=$t;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};});
            m$1.atr$(randomLimits$,'$q',function(){return this.$q_;},function($u){return this.$q_=$u;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};});
        })($o.$$.prototype);
    }
    return $o;
}
ex$.$init$getRandomLimits=$init$getRandomLimits;
$init$getRandomLimits();
var $v;
function getRandomLimits(){
    if($v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'randomLimits\' before it was set"),'1:0-47:0','randomLimits.ceylon');
    if($v===undefined){$v=m$1.INIT$;$v=$init$getRandomLimits()();$v.$crtmm$=getRandomLimits.$crtmm$;}
    return $v;
}
ex$.getRandomLimits=getRandomLimits;
getRandomLimits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$o},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
$prop$getRandomLimits={get:getRandomLimits,$crtmm$:getRandomLimits.$crtmm$};
getRandomLimits=getRandomLimits;$prop$getRandomLimits=getRandomLimits;
ex$.$prop$getRandomLimits=$prop$getRandomLimits;
function stream($w,$$$mptypes){
    var $x=m$1.JsCallable(0,$w);
    function $y($$targs$$){
        var $y$=new $y.$$;$y$.$$targs$$=$$targs$$;
        m$1.Iterable({Absent$Iterable:{t:m$1.Nothing},Element$Iterable:$$$mptypes.Element$stream},$y$);
        m$1.Iterator({Element$Iterator:$$$mptypes.Element$stream},$y$);
        return $y$;
    };$y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:stream,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}}],d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l']};};
    function $init$$y(){
        if($y.$$===undefined){
            m$1.initTypeProto($y,'com.vasileff.ceylon.random.api::it',m$1.Basic,m$1.Iterator,m$1.Iterable);
            (function($y$){
                $y$.iterator=function(){
                    var $y$=this;
                    return $y$;
                };
                $y$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}},ps:[],$cont:$y,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','iterator']};};
                $y$.next=function(){
                    var $y$=this;
                    return $x();
                };
                $y$.next.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$stream',ps:[],$cont:$y,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','next']};};
            })($y.$$.prototype);
        }
        return $y;
    }
    $init$$y();
    var $z;
    function get$z(){
        if($z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'8:2-11:2','stream.ceylon');
        if($z===undefined){$z=m$1.INIT$;$z=$init$$y()({Absent$Iterable:{t:m$1.Nothing},Element$Iterator:$$$mptypes.Element$stream,Element$Iterable:$$$mptypes.Element$stream});$z.$crtmm$=get$z.$crtmm$;}
        return $z;
    }
    get$z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$y},$cont:stream,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1k']};};
    $prop$get$z={get:get$z,$crtmm$:get$z.$crtmm$};
    get$y=get$z;$prop$get$y=get$z;
    return get$z();
}
ex$.stream=stream;
stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},ps:[{nm:'next',mt:'prm',$pt:'f',$t:'Element$stream',an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream:$m:next$7vlz3x')];}}],tp:{Element$stream:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','stream']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
