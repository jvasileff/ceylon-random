(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/vasileff/ceylon/random/api/0.0.3/com.vasileff.ceylon.random.api-0.0.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'com.vasileff.ceylon.random.api/0.0.3');
function LCGRandom($2,lCGRandom$){
    $init$LCGRandom();
    if(lCGRandom$===undefined)lCGRandom$=new LCGRandom.$$;
    if($2===undefined){$2=m$1.getSystem().nanoseconds.plus(m$1.getSystem().milliseconds);}
    lCGRandom$.$2_=$2;
    Random(lCGRandom$);
    m$1.asrt$(((m$1.getRuntime().maxIntegerValue>=(2).power(48))),"Assertion failed: \'runtime.maxIntegerValue >= 2^48\' at LCGRandom.ceylon (29:10-29:42)",'29:4-29:43','LCGRandom.ceylon');
    lCGRandom$.$3_=(25214903917);
    lCGRandom$.$prop$get$3={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','a$2llt0s']};}};
    lCGRandom$.$prop$get$3.get=function(){return $3};
    lCGRandom$.$4_=(11);
    lCGRandom$.$prop$get$4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','c$2llv4u']};}};
    lCGRandom$.$prop$get$4.get=function(){return $4};
    lCGRandom$.$5_=(2).power(48);
    lCGRandom$.$prop$get$5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m$2lm5p4']};}};
    lCGRandom$.$prop$get$5.get=function(){return $5};
    lCGRandom$.$6_=lCGRandom$.$5.minus(1);
    lCGRandom$.$prop$get$6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m64$50b6zq']};}};
    lCGRandom$.$prop$get$6.get=function(){return $6};
    lCGRandom$.$7_=undefined;
    lCGRandom$.$prop$get$7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','xn$2oncah']};}};
    lCGRandom$.$prop$get$7.get=function(){return $7};
    lCGRandom$.reseed(lCGRandom$.$2);
    return lCGRandom$;
}
LCGRandom.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'seed',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$at:seed$bejtmk')];}}],sts:[{t:Random}],pa:33,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom')];},d:['com.vasileff.ceylon.random.api','LCGRandom']};};
ex$.LCGRandom=LCGRandom;
function $init$LCGRandom(){
    if(LCGRandom.$$===undefined){
        m$1.initTypeProto(LCGRandom,'com.vasileff.ceylon.random.api::LCGRandom',m$1.Basic,$init$Random());
        (function(lCGRandom$){
            m$1.atr$(lCGRandom$,'$3',function(){return this.$3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','a$2llt0s']};});
            m$1.atr$(lCGRandom$,'$4',function(){return this.$4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','c$2llv4u']};});
            m$1.atr$(lCGRandom$,'$5',function(){return this.$5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m$2lm5p4']};});
            m$1.atr$(lCGRandom$,'$6',function(){return this.$6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m64$50b6zq']};});
            m$1.atr$(lCGRandom$,'$7',function(){if(this.$7_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$7»');return this.$7_;},function($8){return this.$7_=$8;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','xn$2oncah']};});
            lCGRandom$.reseed=function($9){
                var lCGRandom$=this;
                if(getRealInts()){
                    lCGRandom$.$7=$9.xor(lCGRandom$.$3).and(lCGRandom$.$6);
                }else {
                    lCGRandom$.$7=$9.magnitude.remainder(lCGRandom$.$5);
                }
            };lCGRandom$.reseed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSeed',mt:'prm',$t:{t:m$1.Integer}}],$cont:LCGRandom,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:reseed')];},d:['com.vasileff.ceylon.random.api','LCGRandom','$m','reseed']};};
            lCGRandom$.nextBits=function($a){
                var lCGRandom$=this;
                if(($a>getRandomLimits().maxBits)){
                    throw m$1.wrapexc(m$1.Exception("numBits cannot be greater than\n".plus(getRandomLimits().maxBits.string).plus(" on this platform")),'63:12-64:72','com/vasileff/ceylon/random/api/LCGRandom.ceylon');
                }else {
                    if(($a<=0)){
                        return 0;
                    }else {
                        if(($a<=32)){
                            return lCGRandom$.$b().divided((2).power((48).minus($a)));
                        }else {
                            return lCGRandom$.nextBits($a.minus(32)).times((2).power(32)).plus(lCGRandom$.nextBits(32));
                        }
                    }
                }
            };lCGRandom$.nextBits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'numBits',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:nextBits:$at:numBits$bvg77f')];}}],$cont:LCGRandom,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:nextBits'),m$1.$_throws(m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Exception),"if [[numBits]] is greater than [[randomLimits.maxBits]].")];},d:['com.vasileff.ceylon.random.api','LCGRandom','$m','nextBits']};};
            lCGRandom$.$b=function(){
                var lCGRandom$=this;
                if(getRealInts()){
                    return (lCGRandom$.$7=lCGRandom$.$3.times(lCGRandom$.$7).plus(lCGRandom$.$4).and(lCGRandom$.$6));
                }else {
                    var $c=lCGRandom$.$3.times(lCGRandom$.$7).plus(lCGRandom$.$4);
                    m$1.asrt$((!$c.negative),"Assertion failed: \'!step1.negative\' at LCGRandom.ceylon (85:18-85:34)",'85:12-85:35','LCGRandom.ceylon');
                    return (lCGRandom$.$7=$c.remainder(lCGRandom$.$5));
                }
            };lCGRandom$.$b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$m','next$81mvhq']};};
            m$1.atr$(lCGRandom$,'$2',function(){return this.$2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$at:seed$bejtmk')];},d:['com.vasileff.ceylon.random.api','LCGRandom','$at','seed$bejtmk']};});
        })(LCGRandom.$$.prototype);
    }
    return LCGRandom;
}
ex$.$init$LCGRandom=$init$LCGRandom;
$init$LCGRandom();
var $d;function $valinit$$d(){if($d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'realInts\' before it was set"),'92:0-92:55','LCGRandom.ceylon');
if($d===undefined){$d=m$1.INIT$;$d=((m$1.getRuntime().integerAddressableSize).valueOf()==(64).valueOf())};return $d;};$valinit$$d();
function getRealInts(){return $valinit$$d();}
ex$.getRealInts=getRealInts;
var $prop$getRealInts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},d:['com.vasileff.ceylon.random.api','realInts']};}};
ex$.$prop$getRealInts=$prop$getRealInts;
$prop$getRealInts.get=getRealInts;
getRealInts.$crtmm$=$prop$getRealInts.$crtmm$;
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
            random$.nextBits={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'numBits',mt:'prm',$t:{t:m$1.Integer}}],$cont:Random,pa:5,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:Random:$m:nextBits'),m$1.$_throws("Exception","if [[numBits]] is greater than [[randomLimits.maxBits]].")];},d:['com.vasileff.ceylon.random.api','Random','$m','nextBits']};}};random$.nextInteger=function($e){
                var random$=this;
                if((($e<1)||($e>getRandomLimits().maxIntegerBound))){
                    throw m$1.wrapexc(m$1.Exception("bound must be a positive value less than runtime.maxIntegerValue"),'19:12-20:83','com/vasileff/ceylon/random/api/Random.ceylon');
                }else {
                    if((($e.and($e.minus(1))).valueOf()==(0).valueOf())){
                        return random$.nextBits(bitLength($e).minus(1));
                    }else {
                        var $f;
                        function set$f($g){return $f=$g;};
                        var $h=bitLength($e);
                        while((($f=random$.nextBits($h))>=$e)){}
                        return $f;
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
var $i;function $valinit$$i(){if($i===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'floatUnit\' before it was set"),'45:0-45:28','Random.ceylon');
if($i===undefined){$i=m$1.INIT$;$i=m$1.Float(1.0).divided((2).power(53))};return $i;};$valinit$$i();
function getFloatUnit(){return $valinit$$i();}
ex$.getFloatUnit=getFloatUnit;
var $prop$getFloatUnit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},d:['com.vasileff.ceylon.random.api','floatUnit']};}};
ex$.$prop$getFloatUnit=$prop$getFloatUnit;
$prop$getFloatUnit.get=getFloatUnit;
getFloatUnit.$crtmm$=$prop$getFloatUnit.$crtmm$;
function bitLength($j){
    m$1.asrt$(((($j>=0)&&($j<=m$1.getRuntime().maxIntegerValue))),"Assertion failed: \'number >= 0 && number <= runtime.maxIntegerValue\' at Random.ceylon (49:10-49:59)",'49:4-49:60','Random.ceylon');
    var $k=(0);
    function set$k($l){return $k=$l;};
    while(($j>0)){
        ($m=$k,$k=$m.successor,$m);
        var $m;
        ($j=$j.divided(2));
    }
    return $k;
};bitLength.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer},pa:1024}],d:['com.vasileff.ceylon.random.api','bitLength']};};
function randomize($n,$o,$$$mptypes){
    if($o===undefined){$o=LCGRandom();}
    var $p=m$1.$_Array($n,{Element$Array:$$$mptypes.Elements$randomize});
    randomizeInPlace($p,$o,{Element$randomizeInPlace:$$$mptypes.Elements$randomize});
    return $p;
}
ex$.randomize=randomize;
randomize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Elements$randomize'}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Elements$randomize'}}},{nm:'random',mt:'prm',def:1,$t:{t:Random}}],tp:{Elements$randomize:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomize')];},d:['com.vasileff.ceylon.random.api','randomize']};};
function randomizeInPlace($q,$r,$$$mptypes){
    if($r===undefined){$r=LCGRandom();}
    var $s=$q.size;
    var $u=(0),$v=$s.minus(1);for(var $w=0;$w<$v;$w++,($u=$u.successor)){
        var $x=$r.nextInteger($s.minus($u)).plus($u);
        var $y;
        m$1.asrt$((m$1.nn$(($y=$q.getFromFirst($u)))),"Assertion failed: \'exists oldi = elements.getFromFirst(i)\' at randomizeInPlace.ceylon (8:14-8:53)",'8:8-8:54','randomizeInPlace.ceylon');
        var $z;
        m$1.asrt$((m$1.nn$(($z=$q.getFromFirst($x)))),"Assertion failed: \'exists oldj = elements.getFromFirst(j)\' at randomizeInPlace.ceylon (9:14-9:53)",'9:8-9:54','randomizeInPlace.ceylon');
        $q.set($u,$z);
        $q.set($x,$y);
    }
}
ex$.randomizeInPlace=randomizeInPlace;
randomizeInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:'Element$randomizeInPlace'}}},{nm:'random',mt:'prm',def:1,$t:{t:Random}}],tp:{Element$randomizeInPlace:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomizeInPlace')];},d:['com.vasileff.ceylon.random.api','randomizeInPlace']};};
function $10(){
    var randomLimits$=new $10.$$;randomLimits$.$prop$getMaxIntegerBound={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};}};
    randomLimits$.$prop$getMaxBits={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};}};
    randomLimits$.$11_=m$1.getRuntime().maxIntegerValue;
    randomLimits$.$prop$get$11={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};}};
    randomLimits$.$prop$get$11.get=function(){return $11};
    randomLimits$.$12_=(0);
    randomLimits$.$prop$get$12={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};}};
    randomLimits$.$prop$get$12.get=function(){return $12};
    while((randomLimits$.$11>0)){
        ($13=randomLimits$.$12,randomLimits$.$12=$13.successor,$13);
        var $13;
        (randomLimits$.$11=randomLimits$.$11.divided(2));
    }
    if(((2).power(randomLimits$.$12).minus(1)>m$1.getRuntime().maxIntegerValue)){
        ($14=randomLimits$.$12,randomLimits$.$12=$14.predecessor,$14);
        var $14;
    }
    var maxBits=m$1.largest(randomLimits$.$12,m$1.getRuntime().integerAddressableSize,{Element$largest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxBits',function(){return maxBits;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};});
    var maxIntegerBound=m$1.smallest(m$1.getRuntime().maxIntegerValue,(2).power(m$1.smallest(63,randomLimits$.maxBits,{Element$smallest:{t:m$1.Integer}})).minus(1),{Element$smallest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxIntegerBound',function(){return maxIntegerBound;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};});
    return randomLimits$;
};$10.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by("John Vasileff")];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
function $init$getRandomLimits(){
    if($10.$$===undefined){
        m$1.initTypeProto($10,'com.vasileff.ceylon.random.api::randomLimits',m$1.Basic);
        (function(randomLimits$){
            m$1.atr$(randomLimits$,'$11',function(){return this.$11_;},function($15){return this.$11_=$15;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};});
            m$1.atr$(randomLimits$,'$12',function(){return this.$12_;},function($16){return this.$12_=$16;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};});
        })($10.$$.prototype);
    }
    return $10;
}
ex$.$init$getRandomLimits=$init$getRandomLimits;
$init$getRandomLimits();
var $17;
function getRandomLimits(){
    if($17===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'randomLimits\' before it was set"),'1:0-46:0','randomLimits.ceylon');
    if($17===undefined){$17=m$1.INIT$;$17=$init$getRandomLimits()();$17.$crtmm$=getRandomLimits.$crtmm$;}
    return $17;
}
ex$.getRandomLimits=getRandomLimits;
getRandomLimits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$10},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
$prop$getRandomLimits={get:getRandomLimits,$crtmm$:getRandomLimits.$crtmm$};
getRandomLimits=getRandomLimits;$prop$getRandomLimits=getRandomLimits;
ex$.$prop$getRandomLimits=$prop$getRandomLimits;
function stream($18,$$$mptypes){
    var $19=m$1.JsCallable(0,$18);
    function $1a($$targs$$){
        var $1a$=new $1a.$$;$1a$.$$targs$$=$$targs$$;
        m$1.Iterable({Absent$Iterable:{t:m$1.Nothing},Element$Iterable:$$$mptypes.Element$stream},$1a$);
        m$1.Iterator({Element$Iterator:$$$mptypes.Element$stream},$1a$);
        return $1a$;
    };$1a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:stream,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}}],d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l']};};
    function $init$$1a(){
        if($1a.$$===undefined){
            m$1.initTypeProto($1a,'com.vasileff.ceylon.random.api::it',m$1.Basic,m$1.Iterator,m$1.Iterable);
            (function($1a$){
                $1a$.iterator=function(){
                    var $1a$=this;
                    return $1a$;
                };
                $1a$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}},ps:[],$cont:$1a,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','iterator']};};
                $1a$.next=function(){
                    var $1a$=this;
                    return $19();
                };
                $1a$.next.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$stream',ps:[],$cont:$1a,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','next']};};
            })($1a.$$.prototype);
        }
        return $1a;
    }
    $init$$1a();
    var $1b;
    function get$1b(){
        if($1b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'12:4-15:4','stream.ceylon');
        if($1b===undefined){$1b=m$1.INIT$;$1b=$init$$1a()({Absent$Iterable:{t:m$1.Nothing},Element$Iterator:$$$mptypes.Element$stream,Element$Iterable:$$$mptypes.Element$stream});$1b.$crtmm$=get$1b.$crtmm$;}
        return $1b;
    }
    get$1b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1a},$cont:stream,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1k']};};
    $prop$get$1b={get:get$1b,$crtmm$:get$1b.$crtmm$};
    get$1a=get$1b;$prop$get$1a=get$1b;
    return get$1b();
}
ex$.stream=stream;
stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},ps:[{nm:'next',mt:'prm',$pt:'f',$t:'Element$stream',an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream:$m:next$7vlz3x')];}}],tp:{Element$stream:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream')];},d:['com.vasileff.ceylon.random.api','stream']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
