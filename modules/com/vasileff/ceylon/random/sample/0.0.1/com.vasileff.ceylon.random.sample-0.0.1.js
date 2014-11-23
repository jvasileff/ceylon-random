(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/vasileff/ceylon/random/sample/0.0.1/com.vasileff.ceylon.random.sample-0.0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'com.vasileff.ceylon.random.sample/0.0.1');
var m$2=require('com/vasileff/ceylon/random/api/0.0.1/com.vasileff.ceylon.random.api-0.0.1');
m$1.$addmod$(m$2,'com.vasileff.ceylon.random.api/0.0.1');
function LCGRandom($3,lCGRandom$){
    $init$LCGRandom();
    if(lCGRandom$===undefined)lCGRandom$=new LCGRandom.$$;
    if($3===undefined){$3=m$1.getSystem().nanoseconds.plus(m$1.getSystem().milliseconds);}
    lCGRandom$.$3_=$3;
    m$2.Random(lCGRandom$);
    m$1.asrt$(((m$1.getRuntime().maxIntegerValue>=(2).power(48))),"Assertion failed: \'runtime.maxIntegerValue >= 2^48\' at LCGRandom.ceylon (29:8-29:40)",'29:2-29:41','LCGRandom.ceylon');
    lCGRandom$.$4_=(25214903917);
    lCGRandom$.$prop$get$4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','a$lq9ntg']};}};
    lCGRandom$.$prop$get$4.get=function(){return $4};
    lCGRandom$.$5_=(11);
    lCGRandom$.$prop$get$5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','c$lq9lpe']};}};
    lCGRandom$.$prop$get$5.get=function(){return $5};
    lCGRandom$.$6_=(2).power(48);
    lCGRandom$.$prop$get$6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','m$lq9b54']};}};
    lCGRandom$.$prop$get$6.get=function(){return $6};
    lCGRandom$.$7_=lCGRandom$.$6.minus(1);
    lCGRandom$.$prop$get$7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','m64$jbk9ui']};}};
    lCGRandom$.$prop$get$7.get=function(){return $7};
    lCGRandom$.$8_=undefined;
    lCGRandom$.$prop$get$8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','xn$ln84jr']};}};
    lCGRandom$.$prop$get$8.get=function(){return $8};
    lCGRandom$.reseed(lCGRandom$.$3);
    return lCGRandom$;
}
LCGRandom.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'seed',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The seed. The value is processed by [[reseed]] prior to use.")];}}],sts:[{t:m$2.Random}],pa:33,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.sample:LCGRandom')];},d:['com.vasileff.ceylon.random.sample','LCGRandom']};};
ex$.LCGRandom=LCGRandom;
function $init$LCGRandom(){
    if(LCGRandom.$$===undefined){
        m$1.initTypeProto(LCGRandom,'com.vasileff.ceylon.random.sample::LCGRandom',m$1.Basic,m$2.Random);
        (function(lCGRandom$){
            m$1.atr$(lCGRandom$,'$4',function(){return this.$4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','a$lq9ntg']};});
            m$1.atr$(lCGRandom$,'$5',function(){return this.$5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','c$lq9lpe']};});
            m$1.atr$(lCGRandom$,'$6',function(){return this.$6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','m$lq9b54']};});
            m$1.atr$(lCGRandom$,'$7',function(){return this.$7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','m64$jbk9ui']};});
            m$1.atr$(lCGRandom$,'$8',function(){if(this.$8_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$8»');return this.$8_;},function($9){return this.$8_=$9;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,pa:1155,d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','xn$ln84jr']};});
            lCGRandom$.reseed=function($a){
                var lCGRandom$=this;
                if(getRealInts()){
                    lCGRandom$.$8=$a.xor(lCGRandom$.$4).and(lCGRandom$.$7);
                }else {
                    lCGRandom$.$8=$a.magnitude.remainder(lCGRandom$.$6);
                }
            };lCGRandom$.reseed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newSeed',mt:'prm',$t:{t:m$1.Integer}}],$cont:LCGRandom,pa:1,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.sample:LCGRandom:$m:reseed')];},d:['com.vasileff.ceylon.random.sample','LCGRandom','$m','reseed']};};
            lCGRandom$.nextBits=function($b){
                var lCGRandom$=this;
                if(($b>m$2.getRandomLimits().maxBits)){
                    throw m$1.wrapexc(m$1.Exception("numBits cannot be greater than\n".plus(m$2.getRandomLimits().maxBits.string).plus(" on this platform")),'63:6-64:66','com/vasileff/ceylon/random/sample/LCGRandom.ceylon');
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
            };lCGRandom$.nextBits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'numBits',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.sample:LCGRandom:$m:nextBits:$at:numBits$c0gl1h')];}}],$cont:LCGRandom,pa:3,an:function(){return[m$1.doc$($CCMM$,'com.vasileff.ceylon.random.sample:LCGRandom:$m:nextBits'),m$1.$_throws(m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Exception),"if [[numBits]] is greater than [[randomLimits.maxBits]].")];},d:['com.vasileff.ceylon.random.sample','LCGRandom','$m','nextBits']};};
            lCGRandom$.$c=function(){
                var lCGRandom$=this;
                if(getRealInts()){
                    return (lCGRandom$.$8=lCGRandom$.$4.times(lCGRandom$.$8).plus(lCGRandom$.$5).and(lCGRandom$.$7));
                }else {
                    var $d=lCGRandom$.$4.times(lCGRandom$.$8).plus(lCGRandom$.$5);
                    m$1.asrt$((!$d.negative),"Assertion failed: \'!step1.negative\' at LCGRandom.ceylon (85:12-85:28)",'85:6-85:29','LCGRandom.ceylon');
                    return (lCGRandom$.$8=$d.remainder(lCGRandom$.$6));
                }
            };lCGRandom$.$c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LCGRandom,d:['com.vasileff.ceylon.random.sample','LCGRandom','$m','next$ga8lci']};};
            m$1.atr$(lCGRandom$,'$3',function(){return this.$3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LCGRandom,an:function(){return[m$1.doc("The seed. The value is processed by [[reseed]] prior to use.")];},d:['com.vasileff.ceylon.random.sample','LCGRandom','$at','seed$cxbn7o']};});
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
var $prop$getRealInts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},d:['com.vasileff.ceylon.random.sample','realInts']};}};
ex$.$prop$getRealInts=$prop$getRealInts;
$prop$getRealInts.get=getRealInts;
getRealInts.$crtmm$=$prop$getRealInts.$crtmm$;
ex$.$mod$ans$=function(){return[m$1.license("http://opensource.org/licenses/MIT"),m$1.by(["John Vasileff"].rt$({t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'com.vasileff.ceylon.random.api/0.0.1':function(){return[m$1.shared()];}
};};
ex$.$pkg$ans$com$vasileff$ceylon$random$sample=function(){return[m$1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
