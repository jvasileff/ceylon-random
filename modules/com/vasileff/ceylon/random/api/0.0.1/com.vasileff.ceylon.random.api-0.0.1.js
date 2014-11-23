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
    var randomLimits$=new $o.$$;randomLimits$.$p_=m$1.getRuntime().maxIntegerValue;
    randomLimits$.$prop$getMaxIntegerBound={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};}};
    randomLimits$.$prop$getMaxIntegerBound.get=function(){return maxIntegerBound};
    randomLimits$.$prop$getMaxBits={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};}};
    randomLimits$.$q_=m$1.getRuntime().maxIntegerValue;
    randomLimits$.$prop$get$q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};}};
    randomLimits$.$prop$get$q.get=function(){return $q};
    randomLimits$.$r_=(0);
    randomLimits$.$prop$get$r={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};}};
    randomLimits$.$prop$get$r.get=function(){return $r};
    while((randomLimits$.$q>0)){
        ($s=randomLimits$.$r,randomLimits$.$r=$s.successor,$s);
        var $s;
        (randomLimits$.$q=randomLimits$.$q.divided(2));
    }
    if(((2).power(randomLimits$.$r).minus(1)>m$1.getRuntime().maxIntegerValue)){
        ($t=randomLimits$.$r,randomLimits$.$r=$t.predecessor,$t);
        var $t;
    }
    var maxBits=randomLimits$.$r;
    m$1.atr$(randomLimits$,'maxBits',function(){return maxBits;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};});
    return randomLimits$;
};$o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by("John Vasileff")];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
function $init$getRandomLimits(){
    if($o.$$===undefined){
        m$1.initTypeProto($o,'com.vasileff.ceylon.random.api::randomLimits',m$1.Basic);
        (function(randomLimits$){
            m$1.atr$(randomLimits$,'maxIntegerBound',function(){return this.$p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};});
            m$1.atr$(randomLimits$,'$q',function(){return this.$q_;},function($u){return this.$q_=$u;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};});
            m$1.atr$(randomLimits$,'$r',function(){return this.$r_;},function($v){return this.$r_=$v;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};});
        })($o.$$.prototype);
    }
    return $o;
}
ex$.$init$getRandomLimits=$init$getRandomLimits;
$init$getRandomLimits();
var $w;
function getRandomLimits(){
    if($w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'randomLimits\' before it was set"),'1:0-29:0','randomLimits.ceylon');
    if($w===undefined){$w=m$1.INIT$;$w=$init$getRandomLimits()();$w.$crtmm$=getRandomLimits.$crtmm$;}
    return $w;
}
ex$.getRandomLimits=getRandomLimits;
getRandomLimits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$o},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
$prop$getRandomLimits={get:getRandomLimits,$crtmm$:getRandomLimits.$crtmm$};
getRandomLimits=getRandomLimits;$prop$getRandomLimits=getRandomLimits;
ex$.$prop$getRandomLimits=$prop$getRandomLimits;
function stream($x,$$$mptypes){
    var $y=m$1.JsCallable(0,$x);
    function $z($$targs$$){
        var $z$=new $z.$$;$z$.$$targs$$=$$targs$$;
        m$1.Iterable({Absent$Iterable:{t:m$1.Nothing},Element$Iterable:$$$mptypes.Element$stream},$z$);
        m$1.Iterator({Element$Iterator:$$$mptypes.Element$stream},$z$);
        return $z$;
    };$z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:stream,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}}],d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l']};};
    function $init$$z(){
        if($z.$$===undefined){
            m$1.initTypeProto($z,'com.vasileff.ceylon.random.api::it',m$1.Basic,m$1.Iterator,m$1.Iterable);
            (function($z$){
                $z$.iterator=function(){
                    var $z$=this;
                    return $z$;
                };
                $z$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}},ps:[],$cont:$z,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','iterator']};};
                $z$.next=function(){
                    var $z$=this;
                    return $y();
                };
                $z$.next.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$stream',ps:[],$cont:$z,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','next']};};
            })($z.$$.prototype);
        }
        return $z;
    }
    $init$$z();
    var $10;
    function get$10(){
        if($10===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'8:2-11:2','stream.ceylon');
        if($10===undefined){$10=m$1.INIT$;$10=$init$$z()({Absent$Iterable:{t:m$1.Nothing},Element$Iterator:$$$mptypes.Element$stream,Element$Iterable:$$$mptypes.Element$stream});$10.$crtmm$=get$10.$crtmm$;}
        return $10;
    }
    get$10.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$z},$cont:stream,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1k']};};
    $prop$get$10={get:get$10,$crtmm$:get$10.$crtmm$};
    get$z=get$10;$prop$get$z=get$10;
    return get$10();
}
ex$.stream=stream;
stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},ps:[{nm:'next',mt:'prm',$pt:'f',$t:'Element$stream',an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream:$m:next$7vlz3x')];}}],tp:{Element$stream:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','stream']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
