(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/vasileff/ceylon/random/api/0.0.2/com.vasileff.ceylon.random.api-0.0.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'com.vasileff.ceylon.random.api/0.0.2');
var m$2=require('ceylon/collection/1.1.0/ceylon.collection-1.1.0');
m$1.$addmod$(m$2,'ceylon.collection/1.1.0');
function LCGRandom($3,lCGRandom$){
    $init$LCGRandom();
    if(lCGRandom$===undefined)lCGRandom$=new LCGRandom.$$;
    if($3===undefined){$3=m$1.getSystem().nanoseconds.plus(m$1.getSystem().milliseconds);}
    lCGRandom$.$3_=$3;
    Random(lCGRandom$);
    m$1.asrt$(((m$1.getRuntime().maxIntegerValue>=(2).power(48))),"Assertion failed: \'runtime.maxIntegerValue >= 2^48\' at LCGRandom.ceylon (29:10-29:42)",'29:4-29:43','LCGRandom.ceylon');
    lCGRandom$.$4_=(25214903917);
    lCGRandom$.$prop$get$4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','a$2llt0s']};}};
    lCGRandom$.$prop$get$4.get=function(){return $4};
    lCGRandom$.$5_=(11);
    lCGRandom$.$prop$get$5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','c$2llv4u']};}};
    lCGRandom$.$prop$get$5.get=function(){return $5};
    lCGRandom$.$6_=(2).power(48);
    lCGRandom$.$prop$get$6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m$2lm5p4']};}};
    lCGRandom$.$prop$get$6.get=function(){return $6};
    lCGRandom$.$7_=lCGRandom$.$6.minus(1);
    lCGRandom$.$prop$get$7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m64$50b6zq']};}};
    lCGRandom$.$prop$get$7.get=function(){return $7};
    lCGRandom$.$8_=undefined;
    lCGRandom$.$prop$get$8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','xn$2oncah']};}};
    lCGRandom$.$prop$get$8.get=function(){return $8};
    lCGRandom$.reseed(lCGRandom$.$3);
    return lCGRandom$;
}
LCGRandom.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'seed',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$at:seed$bejtmk')];}}],sts:[{t:Random}],pa:33,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom')];},d:['com.vasileff.ceylon.random.api','LCGRandom']};};
ex$.LCGRandom=LCGRandom;
function $init$LCGRandom(){
    if(LCGRandom.$$===undefined){
        m$1.initTypeProto(LCGRandom,'com.vasileff.ceylon.random.api::LCGRandom',m$1.Basic,$init$Random());
        (function(lCGRandom$){
            m$1.atr$(lCGRandom$,'$4',function(){return this.$4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','a$2llt0s']};});
            m$1.atr$(lCGRandom$,'$5',function(){return this.$5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','c$2llv4u']};});
            m$1.atr$(lCGRandom$,'$6',function(){return this.$6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m$2lm5p4']};});
            m$1.atr$(lCGRandom$,'$7',function(){return this.$7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','m64$50b6zq']};});
            m$1.atr$(lCGRandom$,'$8',function(){if(this.$8_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$8»');return this.$8_;},function($9){return this.$8_=$9;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.api','LCGRandom','$at','xn$2oncah']};});
            lCGRandom$.reseed=function($a){
                var lCGRandom$=this;
                if(getRealInts()){
                    lCGRandom$.$8=$a.xor(lCGRandom$.$4).and(lCGRandom$.$7);
                }else {
                    lCGRandom$.$8=$a.magnitude.remainder(lCGRandom$.$6);
                }
            };lCGRandom$.reseed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSeed',mt:'prm',$t:{t:m$1.Integer}}],$cont:LCGRandom,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:reseed')];},d:['com.vasileff.ceylon.random.api','LCGRandom','$m','reseed']};};
            lCGRandom$.nextBits=function($b){
                var lCGRandom$=this;
                if(($b>getRandomLimits().maxBits)){
                    throw m$1.wrapexc(m$1.Exception("numBits cannot be greater than\n".plus(getRandomLimits().maxBits.string).plus(" on this platform")),'63:12-64:72','com/vasileff/ceylon/random/api/LCGRandom.ceylon');
                }else {
                    if(($b<=0)){
                        return 0;
                    }else {
                        if(($b<=32)){
                            return lCGRandom$.$c().divided((2).power((48).minus($b)));
                        }else {
                            return lCGRandom$.nextBits($b.minus(32)).times((2).power(32)).plus(lCGRandom$.nextBits(32));
                        }
                    }
                }
            };lCGRandom$.nextBits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'numBits',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:nextBits:$at:numBits$bvg77f')];}}],$cont:LCGRandom,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$m:nextBits'),m$1.$_throws(m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Exception),"if [[numBits]] is greater than [[randomLimits.maxBits]].")];},d:['com.vasileff.ceylon.random.api','LCGRandom','$m','nextBits']};};
            lCGRandom$.$c=function(){
                var lCGRandom$=this;
                if(getRealInts()){
                    return (lCGRandom$.$8=lCGRandom$.$4.times(lCGRandom$.$8).plus(lCGRandom$.$5).and(lCGRandom$.$7));
                }else {
                    var $d=lCGRandom$.$4.times(lCGRandom$.$8).plus(lCGRandom$.$5);
                    m$1.asrt$((!$d.negative),"Assertion failed: \'!step1.negative\' at LCGRandom.ceylon (85:18-85:34)",'85:12-85:35','LCGRandom.ceylon');
                    return (lCGRandom$.$8=$d.remainder(lCGRandom$.$6));
                }
            };lCGRandom$.$c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LCGRandom,d:['com.vasileff.ceylon.random.api','LCGRandom','$m','next$81mvhq']};};
            m$1.atr$(lCGRandom$,'$3',function(){return this.$3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:LCGRandom:$at:seed$bejtmk')];},d:['com.vasileff.ceylon.random.api','LCGRandom','$at','seed$bejtmk']};});
        })(LCGRandom.$$.prototype);
    }
    return LCGRandom;
}
ex$.$init$LCGRandom=$init$LCGRandom;
$init$LCGRandom();
var $e;function $valinit$$e(){if($e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'realInts\' before it was set"),'92:0-92:55','LCGRandom.ceylon');
if($e===undefined){$e=m$1.INIT$;$e=((m$1.getRuntime().integerAddressableSize).valueOf()==(64).valueOf())};return $e;};$valinit$$e();
function getRealInts(){return $valinit$$e();}
ex$.getRealInts=getRealInts;
var $prop$getRealInts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},d:['com.vasileff.ceylon.random.api','realInts']};}};
ex$.$prop$getRealInts=$prop$getRealInts;
$prop$getRealInts.get=getRealInts;
getRealInts.$crtmm$=$prop$getRealInts.$crtmm$;
ex$.$mod$ans$=function(){return[m$1.license("http://opensource.org/licenses/MIT"),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.1.0':function(){return[m$1.shared()];}
};};
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
                    throw m$1.wrapexc(m$1.Exception("bound must be a positive value less than runtime.maxIntegerValue"),'19:12-20:83','com/vasileff/ceylon/random/api/Random.ceylon');
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
var $j;function $valinit$$j(){if($j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'floatUnit\' before it was set"),'45:0-45:28','Random.ceylon');
if($j===undefined){$j=m$1.INIT$;$j=m$1.Float(1.0).divided((2).power(53))};return $j;};$valinit$$j();
function getFloatUnit(){return $valinit$$j();}
ex$.getFloatUnit=getFloatUnit;
var $prop$getFloatUnit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},d:['com.vasileff.ceylon.random.api','floatUnit']};}};
ex$.$prop$getFloatUnit=$prop$getFloatUnit;
$prop$getFloatUnit.get=getFloatUnit;
getFloatUnit.$crtmm$=$prop$getFloatUnit.$crtmm$;
function bitLength($k){
    m$1.asrt$(((($k>=0)&&($k<=m$1.getRuntime().maxIntegerValue))),"Assertion failed: \'number >= 0 && number <= runtime.maxIntegerValue\' at Random.ceylon (49:10-49:59)",'49:4-49:60','Random.ceylon');
    var $l=(0);
    function set$l($m){return $l=$m;};
    while(($k>0)){
        ($n=$l,$l=$n.successor,$n);
        var $n;
        ($k=$k.divided(2));
    }
    return $l;
};bitLength.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer},pa:1024}],d:['com.vasileff.ceylon.random.api','bitLength']};};
function randomize($o,$p,$$$mptypes){
    if($p===undefined){$p=LCGRandom();}
    var $q=m$1.$_Array($o,{Element$Array:$$$mptypes.Elements$randomize});
    randomizeInPlace($q,$p,{Element$randomizeInPlace:$$$mptypes.Elements$randomize});
    return $q;
}
ex$.randomize=randomize;
randomize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Elements$randomize'}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Elements$randomize'}}},{nm:'random',mt:'prm',def:1,$t:{t:Random}}],tp:{Elements$randomize:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomize')];},d:['com.vasileff.ceylon.random.api','randomize']};};
function randomizeInPlace($r,$s,$$$mptypes){
    if($s===undefined){$s=LCGRandom();}
    function $t($t$){
        $init$$t();
        if($t$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class com.vasileff.ceylon.random.api::randomizeInPlace.Setter"),'?','?')
        m$1.set_type_args($t$,$$$mptypes);
        return $t$;
    }
    $t.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],$cont:randomizeInPlace,pa:256,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$c','Setter$90y02d']};};
    function $init$$t(){
        if($t.$$===undefined){
            m$1.initTypeProto($t,'com.vasileff.ceylon.random.api::Setter',m$1.Basic);
            (function($t$){
                $t$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'item',mt:'prm',$t:'Element$randomizeInPlace'}],$cont:$t,pa:5,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$c','Setter$90y02d','$m','set']};}};
            })($t.$$.prototype);
        }
        return $t;
    }
    $init$$t();
    var $u;
    var $v=$r;
    if(m$1.is$($r,{t:m$1.$_Array,a:{Element$Array:$$$mptypes.Element$randomizeInPlace}})) {
        var $w=false;
        var $y=false;
        var $x=(function(){
            function $z(){
                var $z$=new $z.$$;$t($z$);
                return $z$;
            };$z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:$t},$cont:randomizeInPlace,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$etmd2x']};};
            function $init$$z(){
                if($z.$$===undefined){
                    m$1.initTypeProto($z,'com.vasileff.ceylon.random.api::o',$init$$t());
                    (function($z$){
                        $z$.set=function($10,$11){
                            var $z$=this;
                            return $v.set($10,$11);
                        };
                        $z$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'item',mt:'prm',$t:'Element$randomizeInPlace'}],$cont:$z,pa:3,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$etmd2x','$m','set']};};
                    })($z.$$.prototype);
                }
                return $z;
            }
            $init$$z();
            var $12;
            function get$12(){
                if($12===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'o\' before it was set"),'20:8-23:8','randomizeInPlace.ceylon');
                if($12===undefined){$12=m$1.INIT$;$12=$init$$z()();$12.$crtmm$=get$12.$crtmm$;}
                return $12;
            }
            get$12.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$z},$cont:randomizeInPlace,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$etmd2y']};};
            $prop$get$12={get:get$12,$crtmm$:get$12.$crtmm$};
            get$z=get$12;$prop$get$z=get$12;
            $u=get$12();
        }());if($x!==undefined){return $x;}
    }
    else if(m$1.is$($r,{t:m$2.MutableList,a:{Element$MutableList:$$$mptypes.Element$randomizeInPlace}})) {
        var $13=false;
        var $15=false;
        var $14=(function(){
            function $16(){
                var $16$=new $16.$$;$t($16$);
                return $16$;
            };$16.$crtmm$=function(){return{mod:$CCMM$,'super':{t:$t},$cont:randomizeInPlace,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$eurm9z']};};
            function $init$$16(){
                if($16.$$===undefined){
                    m$1.initTypeProto($16,'com.vasileff.ceylon.random.api::o',$init$$t());
                    (function($16$){
                        $16$.set=function($17,$18){
                            var $16$=this;
                            return $v.set($17,$18);
                        };
                        $16$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'item',mt:'prm',$t:'Element$randomizeInPlace'}],$cont:$16,pa:3,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$eurm9z','$m','set']};};
                    })($16.$$.prototype);
                }
                return $16;
            }
            $init$$16();
            var $19;
            function get$19(){
                if($19===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'o\' before it was set"),'27:8-30:8','randomizeInPlace.ceylon');
                if($19===undefined){$19=m$1.INIT$;$19=$init$$16()();$19.$crtmm$=get$19.$crtmm$;}
                return $19;
            }
            get$19.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$16},$cont:randomizeInPlace,d:['com.vasileff.ceylon.random.api','randomizeInPlace','$o','o$eurma0']};};
            $prop$get$19={get:get$19,$crtmm$:get$19.$crtmm$};
            get$16=get$19;$prop$get$16=get$19;
            $u=get$19();
        }());if($14!==undefined){return $14;}
    }
    var $1a=$r.size;
    var $1c=(0),$1d=$1a.minus(1);for(var $1e=0;$1e<$1d;$1e++,($1c=$1c.successor)){
        var $1f=$s.nextInteger($1a.minus($1c)).plus($1c);
        var $1g;
        m$1.asrt$((m$1.nn$(($1g=$r.getFromFirst($1c)))),"Assertion failed: \'exists oldi = elements.getFromFirst(i)\' at randomizeInPlace.ceylon (38:14-38:53)",'38:8-38:54','randomizeInPlace.ceylon');
        var $1h;
        m$1.asrt$((m$1.nn$(($1h=$r.getFromFirst($1f)))),"Assertion failed: \'exists oldj = elements.getFromFirst(j)\' at randomizeInPlace.ceylon (39:14-39:53)",'39:8-39:54','randomizeInPlace.ceylon');
        $u.set($1c,$1h);
        $u.set($1f,$1g);
    }
}
ex$.randomizeInPlace=randomizeInPlace;
randomizeInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:'u',l:[{t:m$1.$_Array,a:{Element$Array:'Element$randomizeInPlace'}},{t:m$2.MutableList,a:{Element$MutableList:'Element$randomizeInPlace'}}]}},{nm:'random',mt:'prm',def:1,$t:{t:Random}}],tp:{Element$randomizeInPlace:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomizeInPlace')];},d:['com.vasileff.ceylon.random.api','randomizeInPlace']};};
function $1i(){
    var randomLimits$=new $1i.$$;randomLimits$.$prop$getMaxIntegerBound={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};}};
    randomLimits$.$prop$getMaxBits={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};}};
    randomLimits$.$1j_=m$1.getRuntime().maxIntegerValue;
    randomLimits$.$prop$get$1j={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};}};
    randomLimits$.$prop$get$1j.get=function(){return $1j};
    randomLimits$.$1k_=(0);
    randomLimits$.$prop$get$1k={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};}};
    randomLimits$.$prop$get$1k.get=function(){return $1k};
    while((randomLimits$.$1j>0)){
        ($1l=randomLimits$.$1k,randomLimits$.$1k=$1l.successor,$1l);
        var $1l;
        (randomLimits$.$1j=randomLimits$.$1j.divided(2));
    }
    if(((2).power(randomLimits$.$1k).minus(1)>m$1.getRuntime().maxIntegerValue)){
        ($1m=randomLimits$.$1k,randomLimits$.$1k=$1m.predecessor,$1m);
        var $1m;
    }
    var maxBits=m$1.largest(randomLimits$.$1k,m$1.getRuntime().integerAddressableSize,{Element$largest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxBits',function(){return maxBits;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxBits')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxBits']};});
    var maxIntegerBound=m$1.smallest(m$1.getRuntime().maxIntegerValue,(2).power(m$1.smallest(63,randomLimits$.maxBits,{Element$smallest:{t:m$1.Integer}})).minus(1),{Element$smallest:{t:m$1.Integer}});
    m$1.atr$(randomLimits$,'maxIntegerBound',function(){return maxIntegerBound;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits:$at:maxIntegerBound')];},d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxIntegerBound']};});
    return randomLimits$;
};$1i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by("John Vasileff")];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
function $init$getRandomLimits(){
    if($1i.$$===undefined){
        m$1.initTypeProto($1i,'com.vasileff.ceylon.random.api::randomLimits',m$1.Basic);
        (function(randomLimits$){
            m$1.atr$(randomLimits$,'$1j',function(){return this.$1j_;},function($1n){return this.$1j_=$1n;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','maxValue$5s4h5b']};});
            m$1.atr$(randomLimits$,'$1k',function(){return this.$1k_;},function($1o){return this.$1k_=$1o;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1i,pa:1024,d:['com.vasileff.ceylon.random.api','randomLimits','$at','numBits$92hft6']};});
        })($1i.$$.prototype);
    }
    return $1i;
}
ex$.$init$getRandomLimits=$init$getRandomLimits;
$init$getRandomLimits();
var $1p;
function getRandomLimits(){
    if($1p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'randomLimits\' before it was set"),'1:0-46:0','randomLimits.ceylon');
    if($1p===undefined){$1p=m$1.INIT$;$1p=$init$getRandomLimits()();$1p.$crtmm$=getRandomLimits.$crtmm$;}
    return $1p;
}
ex$.getRandomLimits=getRandomLimits;
getRandomLimits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1i},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:randomLimits'),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];},d:['com.vasileff.ceylon.random.api','randomLimits']};};
$prop$getRandomLimits={get:getRandomLimits,$crtmm$:getRandomLimits.$crtmm$};
getRandomLimits=getRandomLimits;$prop$getRandomLimits=getRandomLimits;
ex$.$prop$getRandomLimits=$prop$getRandomLimits;
function stream($1q,$$$mptypes){
    var $1r=m$1.JsCallable(0,$1q);
    function $1s($$targs$$){
        var $1s$=new $1s.$$;$1s$.$$targs$$=$$targs$$;
        m$1.Iterable({Absent$Iterable:{t:m$1.Nothing},Element$Iterable:$$$mptypes.Element$stream},$1s$);
        m$1.Iterator({Element$Iterator:$$$mptypes.Element$stream},$1s$);
        return $1s$;
    };$1s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:stream,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}}],d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l']};};
    function $init$$1s(){
        if($1s.$$===undefined){
            m$1.initTypeProto($1s,'com.vasileff.ceylon.random.api::it',m$1.Basic,m$1.Iterator,m$1.Iterable);
            (function($1s$){
                $1s$.iterator=function(){
                    var $1s$=this;
                    return $1s$;
                };
                $1s$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$stream'}},ps:[],$cont:$1s,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','iterator']};};
                $1s$.next=function(){
                    var $1s$=this;
                    return $1r();
                };
                $1s$.next.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$stream',ps:[],$cont:$1s,pa:3,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1l','$m','next']};};
            })($1s.$$.prototype);
        }
        return $1s;
    }
    $init$$1s();
    var $1t;
    function get$1t(){
        if($1t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'12:4-15:4','stream.ceylon');
        if($1t===undefined){$1t=m$1.INIT$;$1t=$init$$1s()({Absent$Iterable:{t:m$1.Nothing},Element$Iterator:$$$mptypes.Element$stream,Element$Iterable:$$$mptypes.Element$stream});$1t.$crtmm$=get$1t.$crtmm$;}
        return $1t;
    }
    get$1t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1s},$cont:stream,d:['com.vasileff.ceylon.random.api','stream','$o','it$d7hs1k']};};
    $prop$get$1t={get:get$1t,$crtmm$:get$1t.$crtmm$};
    get$1s=get$1t;$prop$get$1s=get$1t;
    return get$1t();
}
ex$.stream=stream;
stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Nothing},Element$Iterable:'Element$stream'}},ps:[{nm:'next',mt:'prm',$pt:'f',$t:'Element$stream',an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream:$m:next$7vlz3x')];}}],tp:{Element$stream:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.api:stream')];},d:['com.vasileff.ceylon.random.api','stream']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
