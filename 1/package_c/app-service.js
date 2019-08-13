/*v0.5vv_20190514_syb_scopedata*/global.__wcc_version__='v0.5vv_20190514_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx2=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx2:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx2 || [];
function gz$gwx2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_1)return __WXML_GLOBAL__.ops_cached.$gwx2_1
__WXML_GLOBAL__.ops_cached.$gwx2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'addressItem'])
Z([3,'chooseAddress'])
Z([a,[3,'addresses-list-item '],[[2,'?:'],[[2,'=='],[[7],[3,'isTop']],[1,1]],[1,'addresses-list-item-top'],[1,'']]])
Z([[7],[3,'index']])
Z([3,'address_info'])
Z([[2,'||'],[[2,'=='],[[7],[3,'deliveryType']],[1,'NOT_ALLOWED']],[[2,'=='],[[7],[3,'deliveryType']],[1,'DIFFER_AMOUNT']]])
Z([[2,'&&'],[[7],[3,'showUseBtn']],[[2,'=='],[[7],[3,'deliveryType']],[1,'SUPPORT_USE']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_1);return __WXML_GLOBAL__.ops_cached.$gwx2_1
}
function gz$gwx2_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_2)return __WXML_GLOBAL__.ops_cached.$gwx2_2
__WXML_GLOBAL__.ops_cached.$gwx2_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'addresses-main'])
Z([[2,'!'],[[7],[3,'visible']]])
Z([[2,'?:'],[[6],[[7],[3,'addressData']],[3,'editAddressWindowVisible']],[1,false],[1,true]])
Z([[2,'&&'],[[7],[3,'addressList']],[[2,'>'],[[6],[[7],[3,'addressList']],[3,'length']],[1,0]]])
Z([[7],[3,'addressList']])
Z([3,'addressId'])
Z([[9],[[9],[[10],[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]],[[8],'showUseBtn',[[7],[3,'showUseBtn']]]])
Z([3,'addressItem'])
Z([[2,'!'],[[7],[3,'showError']]])
Z([[7],[3,'showWechatChooseAddr']])
Z([[7],[3,'displayQuickEntry']])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
Z([[10],[[7],[3,'addressData']]])
Z([3,'editAddress'])
Z([[7],[3,'displayToast']])
Z([[7],[3,'toastMessage']])
Z([[7],[3,'topValueInFixedPosition']])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([[7],[3,'showError']])
Z([3,'reLoad'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_2);return __WXML_GLOBAL__.ops_cached.$gwx2_2
}
function gz$gwx2_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_3)return __WXML_GLOBAL__.ops_cached.$gwx2_3
__WXML_GLOBAL__.ops_cached.$gwx2_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'collectionCouponModal'])
Z([[7],[3,'showColCouponModal']])
Z([3,'preventTouchMove'])
Z([3,'col_coupon_modal'])
Z([a,[3,'col_coupon_container '],[[2,'?:'],[[7],[3,'getColCouponSuccess']],[1,'col_coupon_success_container'],[1,'']]])
Z([[7],[3,'getColCouponSuccess']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'mallLogo']],[[7],[3,'mallName']]],[[7],[3,'salesTip']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_3);return __WXML_GLOBAL__.ops_cached.$gwx2_3
}
function gz$gwx2_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_4)return __WXML_GLOBAL__.ops_cached.$gwx2_4
__WXML_GLOBAL__.ops_cached.$gwx2_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'depositRuleTip'])
Z([3,'hideDepositRuleTip'])
Z([3,'deposit-rule-tip-bg'])
Z([[2,'!'],[[7],[3,'depositRuleTipVisible']]])
Z([3,'depositRuleTipDefaultClick'])
Z([a,[[7],[3,'mainDepositRuleTipClass']],[3,' '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-ipx-deposit-rule-tip-main'],[1,'']]])
Z([[7],[3,'isIpx']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_4);return __WXML_GLOBAL__.ops_cached.$gwx2_4
}
function gz$gwx2_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_5)return __WXML_GLOBAL__.ops_cached.$gwx2_5
__WXML_GLOBAL__.ops_cached.$gwx2_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'duoduoToast'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_5);return __WXML_GLOBAL__.ops_cached.$gwx2_5
}
function gz$gwx2_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_6)return __WXML_GLOBAL__.ops_cached.$gwx2_6
__WXML_GLOBAL__.ops_cached.$gwx2_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'editAddress'])
Z([3,'hideAllPicker'])
Z([3,'preventTouchMove'])
Z([3,'edit-address-container'])
Z([[2,'!'],[[7],[3,'editAddressWindowVisible']]])
Z([3,'m-addr-address'])
Z([[2,'||'],[[7],[3,'inputAddressDetail']],[[7],[3,'showClearBtn']]])
Z([[7],[3,'showLocationBtn']])
Z([[8],'loadingVisible',[[7],[3,'loadingVisible']]])
Z([3,'loading-tpl'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_6);return __WXML_GLOBAL__.ops_cached.$gwx2_6
}
function gz$gwx2_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_7)return __WXML_GLOBAL__.ops_cached.$gwx2_7
__WXML_GLOBAL__.ops_cached.$gwx2_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'groupGuide'])
Z([3,'timeLine'])
Z([3,'time_line'])
Z([[2,'||'],[[2,'=='],[[7],[3,'timeLinestatus']],[1,1]],[[2,'=='],[[7],[3,'timeLinestatus']],[1,3]]])
Z([[7],[3,'timeLineDescSub']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_7);return __WXML_GLOBAL__.ops_cached.$gwx2_7
}
function gz$gwx2_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_8)return __WXML_GLOBAL__.ops_cached.$gwx2_8
__WXML_GLOBAL__.ops_cached.$gwx2_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderCheckoutAddress'])
Z([3,'oc-address'])
Z(z[1])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'addressInfo']],[[2,'!'],[[6],[[7],[3,'addressInfo']],[3,'canReceived']]]],[[2,'>'],[[6],[[7],[3,'addressInfo']],[3,'addressId']],[1,0]]])
Z([3,'oc-address-container'])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'addressInfo']]],[[2,'!'],[[6],[[7],[3,'addressInfo']],[3,'addressId']]]],[[2,'<='],[[6],[[7],[3,'addressInfo']],[3,'addressId']],[1,0]]])
Z([[2,'||'],[[2,'||'],[[2,'&&'],[[7],[3,'showWechatAddAddress']],[[2,'!'],[[7],[3,'addressInfo']]]],[[2,'!'],[[6],[[7],[3,'addressInfo']],[3,'addressId']]]],[[2,'<='],[[6],[[7],[3,'addressInfo']],[3,'addressId']],[1,0]]])
Z([[2,'&&'],[[7],[3,'addressInfo']],[[2,'>'],[[6],[[7],[3,'addressInfo']],[3,'addressId']],[1,0]]])
Z([3,'editAddress'])
Z([3,'oc-address-info-form'])
Z([3,'true'])
Z([[6],[[7],[3,'addressVo']],[3,'labels']])
Z([3,'title'])
Z([[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'addressVo']],[[6],[[7],[3,'addressVo']],[3,'labels']]],[[2,'>'],[[6],[[6],[[7],[3,'addressVo']],[3,'labels']],[3,'length']],[1,0]]],[[6],[[6],[[6],[[7],[3,'addressVo']],[3,'labels']],[1,0]],[3,'title']]],[[6],[[7],[3,'skuVo']],[3,'stockEmpty']]])
Z([[6],[[7],[3,'realNameAuthData']],[3,'needNameAuth']])
Z([[9],[[8],'realNameAuthData',[[7],[3,'realNameAuthData']]],[[8],'addressInfo',[[7],[3,'addressInfo']]]])
Z([3,'realNameAuthInfo'])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx2_8);return __WXML_GLOBAL__.ops_cached.$gwx2_8
}
function gz$gwx2_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_9)return __WXML_GLOBAL__.ops_cached.$gwx2_9
__WXML_GLOBAL__.ops_cached.$gwx2_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderCheckoutCoupons'])
Z([3,'hideCouponsList'])
Z([3,'mall-coupons-list'])
Z([[2,'!'],[[7],[3,'showCouponsList']]])
Z([3,'defaultClick'])
Z([[7],[3,'mainClass']])
Z([3,'oc-coupons-content'])
Z([3,'oc-coupons'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'hasCoupons']]],[[2,'==='],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]])
Z([3,'oc-coupons-promotion'])
Z([[2,'<'],[[7],[3,'goodsNumber']],[[6],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[1,'goods_number']]])
Z([[6],[[7],[3,'promotionEventVo']],[3,'itemList']])
Z([3,'itemList'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z([3,'selectCouponItem'])
Z([a,[3,'promotion-item '],[[2,'?:'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'merchantCouponVo']],[3,'promotionStatus']],[1,1]],[[2,'=='],[[6],[[7],[3,'merchantCouponVo']],[3,'eventId']],[[6],[[7],[3,'promotionEventVo']],[3,'eventId']]]],[1,'oc-m-coupons-selected'],[1,'oc-m-coupons-unselected']]])
Z([3,'0'])
Z([[6],[[7],[3,'promotionEventVo']],[3,'eventId']])
Z([[7],[3,'isMallCoupon']])
Z(z[12])
Z(z[13])
Z(z[14])
Z([[2,'>='],[[7],[3,'goodsNumber']],[[6],[[7],[3,'item']],[3,'goods_number']]])
Z([3,'oc-coupon-container'])
Z([[2,'&&'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'maxAvailableNum']],[1,0]]])
Z([3,'oc-coupon-super-num'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'selectedNum']],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'maxAvailableNum']]],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'isReachUsedLimit']]])
Z([[6],[[7],[3,'enableSuperpositionCoupons']],[3,'showSuperEditBtn']])
Z([[2,'>'],[[6],[[7],[3,'enableCoupons']],[3,'length']],[1,0]])
Z([3,'coupon-container-item'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableCoupons']],[3,'length']],[1,0]],[[2,'!'],[[7],[3,'isMallCoupon']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]]],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]])
Z([3,'coupon'])
Z([[7],[3,'enableCoupons']])
Z([[6],[[7],[3,'coupon']],[3,'couponId']])
Z(z[15])
Z([3,'oc-coupon-form'])
Z(z[34])
Z(z[19])
Z([3,'true'])
Z([a,[3,'oc-m-coupon '],[[2,'?:'],[[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'merchantCouponVo']],[3,'promotionStatus']],[1,1]],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'couponId']],[[6],[[7],[3,'merchantCouponVo']],[3,'couponId']]]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'platformCouponVo']],[3,'promotionStatus']],[1,1]],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'couponId']],[[6],[[7],[3,'platformCouponVo']],[3,'couponId']]]]],[1,'oc-m-coupons-selected'],[1,'oc-m-coupons-unselected']]])
Z([3,'oc-m-coupon-left'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,35]],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,38]]])
Z([[6],[[7],[3,'coupon']],[3,'maxDiscountDesc']])
Z([[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,31]])
Z([[7],[3,'showCouponLoadMore']])
Z([3,'oc-coupon-donot-use'])
Z([[2,'||'],[[2,'||'],[[2,'!='],[[6],[[7],[3,'enableCoupons']],[3,'length']],[1,0]],[[2,'&&'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'maxAvailableNum']],[1,0]]]],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionEventVo']],[[2,'>'],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]]],[[2,'>='],[[7],[3,'goodsNumber']],[[6],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[1,'goods_number']]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableCoupons']],[3,'length']],[1,0]],[[7],[3,'isMallCoupon']]],[[7],[3,'showMoreCouponBtn']]])
Z([[2,'&&'],[[2,'!'],[[2,'||'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableCoupons']],[3,'length']],[1,0]],[[2,'!'],[[7],[3,'isMallCoupon']]]]]],[[2,'!'],[[7],[3,'isMallCoupon']]]])
Z([[2,'&&'],[[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]],[[2,'>'],[[6],[[7],[3,'disableCoupons']],[3,'length']],[1,0]]],[[2,'!'],[[7],[3,'isMallCoupon']]]])
Z([[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]],[[2,'>'],[[6],[[7],[3,'disableCoupons']],[3,'length']],[1,0]]])
Z([3,'oc-coupon-disable-container'])
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]])
Z([3,'disCoupon'])
Z([[7],[3,'disableCoupons']])
Z([[6],[[7],[3,'disCoupon']],[3,'couponId']])
Z([[2,'=='],[[6],[[7],[3,'disCoupon']],[3,'disableReason']],[1,'ORDER_AMOUNT_BELOW_LIMITATION']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_9);return __WXML_GLOBAL__.ops_cached.$gwx2_9
}
function gz$gwx2_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_10)return __WXML_GLOBAL__.ops_cached.$gwx2_10
__WXML_GLOBAL__.ops_cached.$gwx2_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderCheckoutGoods'])
Z([3,'oc-goods'])
Z([[2,'?:'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']],[1,'min-height:238rpx;'],[1,'']])
Z([[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'mallVo']],[3,'labels']],[[6],[[6],[[7],[3,'mallVo']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[7],[3,'mallVo']],[3,'labels']],[1,0]],[3,'label_url']]])
Z([[2,'&&'],[[7],[3,'serviceVoObj']],[[6],[[7],[3,'serviceVoObj']],[3,'labelsTitle']]])
Z([[2,'!='],[[6],[[7],[3,'goodsVo']],[3,'limitNumber']],[1,1]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'category']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_10);return __WXML_GLOBAL__.ops_cached.$gwx2_10
}
function gz$gwx2_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_11)return __WXML_GLOBAL__.ops_cached.$gwx2_11
__WXML_GLOBAL__.ops_cached.$gwx2_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mallCouponsList'])
Z([3,'hideMallCouponsList'])
Z([3,'mall-coupons-list rei-mall-coupons-list'])
Z([[2,'!'],[[7],[3,'showMallCouponsList']]])
Z([3,'defaultClick'])
Z([[7],[3,'mallMainClass']])
Z([3,'mall-coupon-container'])
Z([[2,'>'],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]])
Z([[2,'?:'],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'promotionStatus']],[1,1]],[[2,'>'],[[7],[3,'eventId']],[1,0]]],[[7],[3,'notUse']]],[1,'selectCouponItem'],[1,'']])
Z([3,'promotion-item promotion-item_container'])
Z([[6],[[7],[3,'promotionEventVo']],[3,'eventId']])
Z([1,true])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'promotionStatus']],[1,1]],[[2,'>'],[[7],[3,'eventId']],[1,0]]],[[2,'&&'],[[7],[3,'notUse']],[[2,'>='],[[7],[3,'goodsNumber']],[[6],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]]]])
Z([[6],[[7],[3,'promotionEventVo']],[3,'itemList']])
Z([3,'itemList'])
Z([[2,'&&'],[[2,'>='],[[7],[3,'goodsNumber']],[[6],[[7],[3,'item']],[3,'goods_number']]],[[2,'<='],[[7],[3,'index']],[1,2]]])
Z(z[13])
Z(z[14])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z([[7],[3,'coupons']])
Z([[6],[[7],[3,'item']],[3,'couponId']])
Z([[6],[[7],[3,'item']],[3,'hasCountStr']])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx2_11);return __WXML_GLOBAL__.ops_cached.$gwx2_11
}
function gz$gwx2_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_12)return __WXML_GLOBAL__.ops_cached.$gwx2_12
__WXML_GLOBAL__.ops_cached.$gwx2_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderCheckoutPayBar'])
Z([3,'oc-pay-final'])
Z([[2,'>'],[[2,'+'],[[6],[[6],[[7],[3,'orderVo']],[3,'payPriceStd']],[3,'length']],[[6],[[6],[[7],[3,'orderVo']],[3,'payContent']],[3,'length']]],[1,11]])
Z([[6],[[7],[3,'orderVo']],[3,'payContent']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_12);return __WXML_GLOBAL__.ops_cached.$gwx2_12
}
function gz$gwx2_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_13)return __WXML_GLOBAL__.ops_cached.$gwx2_13
__WXML_GLOBAL__.ops_cached.$gwx2_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderCheckoutPayWin'])
Z([3,'preventMove'])
Z([3,'pay_window'])
Z([[2,'!'],[[7],[3,'showPayWindow']]])
Z([a,[3,'container '],[[2,'?:'],[[7],[3,'showPayContainer']],[1,'container_show'],[1,'container_hide']],[3,' '],[[2,'?:'],[[7],[3,'isIpx']],[[2,'?:'],[[2,'!=='],[[7],[3,'eventType']],[1,1]],[1,'normal_goods_ipx_show'],[1,'fix_ipx_container_show']],[1,'']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isVirtualGoods']]],[[6],[[7],[3,'orderCheckoutAddressData']],[3,'addressInfo']]],[[6],[[6],[[7],[3,'orderCheckoutAddressData']],[3,'addressInfo']],[3,'addressId']]])
Z([[9],[[9],[[10],[[7],[3,'payVo']]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'usePapPay',[[7],[3,'usePapPay']]]])
Z([3,'payChanne'])
Z([3,'item pay'])
Z([[2,'>'],[[7],[3,'discountAmount']],[1,0]])
Z([[6],[[7],[3,'realNameAuthData']],[3,'needNameAuth']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_13);return __WXML_GLOBAL__.ops_cached.$gwx2_13
}
function gz$gwx2_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_14)return __WXML_GLOBAL__.ops_cached.$gwx2_14
__WXML_GLOBAL__.ops_cached.$gwx2_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'piccInfoModal'])
Z([[8],'showPiccModal',[[7],[3,'showPiccModal']]])
Z([3,'piccModal'])
Z(z[2])
Z([[7],[3,'showPiccModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_14);return __WXML_GLOBAL__.ops_cached.$gwx2_14
}
function gz$gwx2_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_15)return __WXML_GLOBAL__.ops_cached.$gwx2_15
__WXML_GLOBAL__.ops_cached.$gwx2_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'realNameAuthInfo'])
Z([[10],[[7],[3,'realNameAuthData']]])
Z([3,'realNameAuthWin'])
Z(z[2])
Z([[7],[3,'showNameAuthWin']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_15);return __WXML_GLOBAL__.ops_cached.$gwx2_15
}
function gz$gwx2_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_16)return __WXML_GLOBAL__.ops_cached.$gwx2_16
__WXML_GLOBAL__.ops_cached.$gwx2_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'screenShotShare'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_16);return __WXML_GLOBAL__.ops_cached.$gwx2_16
}
function gz$gwx2_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_17)return __WXML_GLOBAL__.ops_cached.$gwx2_17
__WXML_GLOBAL__.ops_cached.$gwx2_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'serviceVoModule'])
Z([[8],'serviceVo',[[7],[3,'serviceVo']]])
Z([3,'serviceVoBlock'])
Z([[10],[[7],[3,'serviceVoObj']]])
Z([3,'serviceVoWin'])
Z(z[2])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'serviceVo']],[[6],[[7],[3,'serviceVo']],[3,'displayTitle']]],[[6],[[7],[3,'serviceVo']],[3,'displayContent']]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx2_17);return __WXML_GLOBAL__.ops_cached.$gwx2_17
}
function gz$gwx2_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_18)return __WXML_GLOBAL__.ops_cached.$gwx2_18
__WXML_GLOBAL__.ops_cached.$gwx2_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'cellBarVo']],[[6],[[7],[3,'cellBarVo']],[3,'protocolTitle']]],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'goodsVo']],[3,'goodsType']],[1,3]],[[2,'=='],[[6],[[7],[3,'goodsVo']],[3,'goodsType']],[1,4]]],[[2,'=='],[[6],[[7],[3,'goodsVo']],[3,'goodsType']],[1,18]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_18);return __WXML_GLOBAL__.ops_cached.$gwx2_18
}
function gz$gwx2_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_19)return __WXML_GLOBAL__.ops_cached.$gwx2_19
__WXML_GLOBAL__.ops_cached.$gwx2_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showColCouponModal']])
Z([3,'_preventTouchMove'])
Z([3,'col_coupon_modal'])
Z([a,[3,'col_coupon_container '],[[2,'?:'],[[7],[3,'getColCouponSuccess']],[1,'col_coupon_success_container'],[1,'']]])
Z([[7],[3,'getColCouponSuccess']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'mallLogo']],[[7],[3,'mallName']]],[[7],[3,'salesTip']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_19);return __WXML_GLOBAL__.ops_cached.$gwx2_19
}
function gz$gwx2_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_20)return __WXML_GLOBAL__.ops_cached.$gwx2_20
__WXML_GLOBAL__.ops_cached.$gwx2_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAddress']])
Z([3,'oc-address'])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'addressVo']]],[[2,'!'],[[6],[[7],[3,'addressVo']],[3,'addressId']]]],[[2,'<='],[[6],[[7],[3,'addressVo']],[3,'addressId']],[1,0]]])
Z([[7],[3,'showWechatAddAddress']])
Z([[2,'&&'],[[7],[3,'addressVo']],[[2,'>'],[[6],[[7],[3,'addressVo']],[3,'addressId']],[1,0]]])
Z([3,'editAddress'])
Z([3,'oc-address-info-form'])
Z([3,'true'])
Z([[6],[[7],[3,'addressVo']],[3,'labels']])
Z([3,'title'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'addressVo']],[[6],[[7],[3,'addressVo']],[3,'labels']]],[[2,'>'],[[6],[[6],[[7],[3,'addressVo']],[3,'labels']],[3,'length']],[1,0]]],[[6],[[6],[[6],[[7],[3,'addressVo']],[3,'labels']],[1,0]],[3,'title']]])
Z([[7],[3,'actionDisable']])
Z([[7],[3,'addressVo']])
Z([3,'showNameAuthWinClick'])
Z([3,'submitIdCardInfo'])
Z([3,'realNameAuth'])
Z([[7],[3,'realNameAuthData']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx2_20);return __WXML_GLOBAL__.ops_cached.$gwx2_20
}
function gz$gwx2_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_21)return __WXML_GLOBAL__.ops_cached.$gwx2_21
__WXML_GLOBAL__.ops_cached.$gwx2_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_hideCouponsWin'])
Z([3,'mall-coupons-list'])
Z([[2,'!'],[[6],[[7],[3,'couponsWinData']],[3,'showCouponsWin']]])
Z([3,'defaultClick'])
Z([[6],[[7],[3,'couponsWinData']],[3,'mainClass']])
Z([[6],[[7],[3,'couponsWinData']],[3,'coupons']])
Z([3,'oc-coupons-content'])
Z([[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[3,'length']],[1,0]])
Z([[2,'?:'],[[2,'>='],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'goodsList']],[1,0]],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventItems']],[1,0]],[3,'goods_number']]],[1,'selectCouponItem'],[1,'']])
Z([a,[3,'multi_goods_events '],[[2,'?:'],[[2,'>='],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'goodsList']],[1,0]],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventItems']],[1,0]],[3,'goods_number']]],[[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventId']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'merchantCouponVo']],[3,'eventId']]],[1,'oc-m-coupons-selected oc-m-coupons-selected-multi'],[1,'oc-m-coupons-unselected oc-m-coupons-unselected-multi']],[1,'']]])
Z([[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventId']])
Z([[6],[[7],[3,'couponsWinData']],[3,'type']])
Z([[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventItems']])
Z([3,'displayName'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z([3,'coupon-container-content'])
Z([3,'coupon'])
Z([[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableGoodsCoupons']])
Z([[6],[[7],[3,'coupon']],[3,'couponId']])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableGoodsCoupons']]])
Z([3,'selectCouponItem'])
Z([3,'oc-coupon-form'])
Z(z[18])
Z(z[11])
Z([3,'true'])
Z([[9],[[9],[[9],[[8],'coupon',[[7],[3,'coupon']]],[[8],'couponsWinData',[[7],[3,'couponsWinData']]]],[[8],'isGoodsCoupons',[1,true]]],[[8],'isSelected',[[2,'==='],[[6],[[7],[3,'coupon']],[3,'couponId']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCouponVo']],[3,'couponId']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'merchantCouponVo']],[3,'couponId']]]]]])
Z([3,'couponItem'])
Z(z[16])
Z([[2,'?:'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableCouponList']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableShopCoupons']]])
Z(z[18])
Z(z[20])
Z(z[21])
Z(z[18])
Z(z[11])
Z(z[24])
Z([[9],[[9],[[8],'coupon',[[7],[3,'coupon']]],[[8],'couponsWinData',[[7],[3,'couponsWinData']]]],[[8],'isSelected',[[2,'==='],[[6],[[7],[3,'coupon']],[3,'couponId']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCouponVo']],[3,'couponId']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'merchantCouponVo']],[3,'couponId']]]]]])
Z(z[26])
Z([3,'oc-coupon-donot-use'])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableCouponList']],[3,'length']],[1,0]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableShopCoupons']],[3,'length']],[1,0]]],[[2,'&&'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'maxAvailableNum']],[1,0]]]],[[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[3,'length']],[1,0]],[[2,'>='],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'goodsList']],[1,0]],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'events']],[1,0]],[3,'eventItems']],[1,0]],[3,'goods_number']]]]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,0]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'mallCouponsListData']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'merchantCouponVo']],[3,'mallId']]],[3,'usableMallBatchDisplayVos']],[3,'length']],[1,0]]])
Z([[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]])
Z([[2,'!'],[[2,'||'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'usableCouponList']],[3,'length']],[1,0]]]])
Z([[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'unUsableCouponList']],[3,'length']],[1,0]]])
Z([[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'coupons']],[3,'unUsableCouponList']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'couponId']],[1,0]],[[2,'!'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']]]],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'userPossessNum']],[1,0]]])
Z(z[6])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]],[[2,'>='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]]])
Z([[2,'?:'],[[2,'>='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]],[1,'selectCouponItem'],[1,'']])
Z([a,[3,'normal_multi_goods_events '],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]],[[2,'?:'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'promotionStatus']],[1,1]],[[2,'=='],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'eventId']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'eventId']]]],[1,'oc-m-coupons-selected oc-m-coupons-selected-multi'],[1,'oc-m-coupons-unselected oc-m-coupons-unselected-multi']],[1,'']]])
Z([[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'eventId']])
Z(z[11])
Z([[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']])
Z(z[13])
Z(z[14])
Z(z[16])
Z([[2,'?:'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCoupons']],[3,'enableCoupons']],[[6],[[6],[[7],[3,'couponsWinData']],[3,'mallCoupons']],[3,'enableCoupons']]])
Z(z[18])
Z(z[20])
Z(z[21])
Z(z[18])
Z(z[11])
Z(z[24])
Z([[9],[[9],[[8],'coupon',[[7],[3,'coupon']]],[[8],'couponsWinData',[[7],[3,'couponsWinData']]]],[[8],'isSelected',[[2,'==='],[[6],[[7],[3,'coupon']],[3,'couponId']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'couponId']],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'couponId']]]]]])
Z(z[26])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCoupons']],[3,'showCouponLoadMore']]])
Z(z[37])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCoupons']],[3,'enableCoupons']],[3,'length']],[1,0]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'mallCoupons']],[3,'enableCoupons']],[3,'length']],[1,0]]],[[2,'&&'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'usable']],[[2,'>'],[[6],[[7],[3,'enableSuperpositionCoupons']],[3,'maxAvailableNum']],[1,0]]]],[[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]],[[2,'>='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]]]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,0]],[[2,'>'],[[6],[[6],[[7],[3,'mallCouponsListData']],[3,'reiMallCoupons']],[3,'length']],[1,0]]])
Z([[2,'||'],[[2,'||'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCoupons']],[3,'disableCoupons']],[3,'length']],[[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]],[[2,'<'],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]]]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'mallCoupons']],[3,'disableCoupons']],[3,'length']],[1,0]]])
Z([3,'normal-coupon-unusable'])
Z([[2,'||'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,1]],[[2,'<='],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'platformCoupons']],[3,'enableCoupons']],[3,'length']],[1,0]]],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponsWinData']],[3,'type']],[1,0]],[[2,'!'],[[2,'||'],[[2,'>='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'mallCoupons']],[3,'enableCoupons']],[3,'length']],[1,0]]]]]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]],[[2,'<'],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[[6],[[6],[[6],[[6],[[7],[3,'couponsWinData']],[3,'promotionEventVo']],[3,'itemList']],[1,0]],[3,'goods_number']]]])
Z(z[51])
Z(z[13])
Z(z[14])
Z(z[26])
Z([a,[3,'oc-m-coupon '],[[2,'?:'],[[7],[3,'isSelected']],[1,'oc-m-coupons-selected'],[1,'oc-m-coupons-unselected']]])
Z([3,'oc-m-coupon-left'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,35]],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,38]]])
Z([[6],[[7],[3,'coupon']],[3,'maxDiscountDesc']])
Z([[2,'=='],[[6],[[7],[3,'coupon']],[3,'displayType']],[1,31]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_21);return __WXML_GLOBAL__.ops_cached.$gwx2_21
}
function gz$gwx2_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_22)return __WXML_GLOBAL__.ops_cached.$gwx2_22
__WXML_GLOBAL__.ops_cached.$gwx2_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'oc-goods'])
Z([[2,'?:'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']],[1,'min-height:238rpx;'],[1,'']])
Z([[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'mallVo']],[3,'labels']],[[6],[[6],[[7],[3,'mallVo']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[7],[3,'mallVo']],[3,'labels']],[1,0]],[3,'label_url']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'goodsVo']],[3,'labels']],[[6],[[6],[[7],[3,'goodsVo']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[7],[3,'goodsVo']],[3,'labels']],[1,0]],[3,'title']]])
Z([[2,'!='],[[6],[[7],[3,'goodsVo']],[3,'limitNumber']],[1,1]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'category']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_22);return __WXML_GLOBAL__.ops_cached.$gwx2_22
}
function gz$gwx2_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_23)return __WXML_GLOBAL__.ops_cached.$gwx2_23
__WXML_GLOBAL__.ops_cached.$gwx2_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_hideMallCouponsList'])
Z([3,'mall-coupons-list rei-mall-coupons-list'])
Z([[2,'!'],[[6],[[7],[3,'mallCouponsListData']],[3,'showMallCouponsList']]])
Z([3,'defaultClick'])
Z([[6],[[7],[3,'mallCouponsListData']],[3,'mallMainClass']])
Z([3,'mall-coupon-container'])
Z([[6],[[7],[3,'mallCouponsListData']],[3,'mallVo']])
Z([[2,'>'],[[6],[[6],[[6],[[7],[3,'mallCouponsListData']],[[6],[[6],[[7],[3,'mallCouponsListData']],[3,'mallVo']],[3,'id']]],[3,'usableMultiGoodsEvents']],[3,'length']],[1,0]])
Z([[6],[[6],[[7],[3,'mallCouponsListData']],[[6],[[6],[[7],[3,'mallCouponsListData']],[3,'mallVo']],[3,'id']]],[3,'usableMultiGoodsEvents']])
Z([3,'displayName'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z([[6],[[6],[[7],[3,'mallCouponsListData']],[[6],[[6],[[7],[3,'mallCouponsListData']],[3,'mallVo']],[3,'id']]],[3,'usableGoodsBatchDisplayVos']])
Z([3,'batchId'])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'isGoodsBatch',[1,true]]])
Z([3,'usable-promotion-item'])
Z([[6],[[6],[[7],[3,'mallCouponsListData']],[[6],[[6],[[7],[3,'mallCouponsListData']],[3,'mallVo']],[3,'id']]],[3,'usableMallBatchDisplayVos']])
Z(z[12])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'isGoodsBatch',[1,false]]])
Z(z[14])
Z([[2,'>'],[[6],[[6],[[7],[3,'promotionEventVo']],[3,'itemList']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'promotionEventVo']],[3,'itemList']])
Z(z[9])
Z(z[10])
Z([[6],[[7],[3,'mallCouponsListData']],[3,'reiMallCoupons']])
Z(z[12])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'isGoodsBatch',[[2,'=='],[[6],[[7],[3,'item']],[3,'displayType']],[1,29]]]])
Z(z[14])
Z(z[14])
Z([[6],[[7],[3,'item']],[3,'hasCountStr']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_23);return __WXML_GLOBAL__.ops_cached.$gwx2_23
}
function gz$gwx2_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_24)return __WXML_GLOBAL__.ops_cached.$gwx2_24
__WXML_GLOBAL__.ops_cached.$gwx2_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'oc-bottom-bar '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-ipx-oc-bottom-bar'],[1,'']]])
Z([3,'oc-pay-final'])
Z([[2,'>'],[[2,'+'],[[6],[[6],[[7],[3,'orderVo']],[3,'payPriceStd']],[3,'length']],[[6],[[6],[[7],[3,'orderVo']],[3,'payContent']],[3,'length']]],[1,11]])
Z([[6],[[7],[3,'orderVo']],[3,'payContent']])
Z([3,'payEvent'])
Z([3,'true'])
Z([[6],[[7],[3,'orderVo']],[3,'subPayText']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_24);return __WXML_GLOBAL__.ops_cached.$gwx2_24
}
function gz$gwx2_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_25)return __WXML_GLOBAL__.ops_cached.$gwx2_25
__WXML_GLOBAL__.ops_cached.$gwx2_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPiccModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_25);return __WXML_GLOBAL__.ops_cached.$gwx2_25
}
function gz$gwx2_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_26)return __WXML_GLOBAL__.ops_cached.$gwx2_26
__WXML_GLOBAL__.ops_cached.$gwx2_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'serviceVo']],[[6],[[7],[3,'serviceVo']],[3,'displayTitle']]],[[6],[[7],[3,'serviceVo']],[3,'displayContent']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_26);return __WXML_GLOBAL__.ops_cached.$gwx2_26
}
function gz$gwx2_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_27)return __WXML_GLOBAL__.ops_cached.$gwx2_27
__WXML_GLOBAL__.ops_cached.$gwx2_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'bottomNotice']])
Z([[7],[3,'minLeftTimeLocalGroup']])
Z([[7],[3,'bestPlatformCouponInfo']])
Z([[2,'&&'],[[7],[3,'zoneTips']],[[6],[[7],[3,'zoneTips']],[3,'text']]])
Z([[6],[[7],[3,'zoneTips']],[3,'action']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_27);return __WXML_GLOBAL__.ops_cached.$gwx2_27
}
function gz$gwx2_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_28)return __WXML_GLOBAL__.ops_cached.$gwx2_28
__WXML_GLOBAL__.ops_cached.$gwx2_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'showMoreTpl'])
Z([[7],[3,'isShowMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_28);return __WXML_GLOBAL__.ops_cached.$gwx2_28
}
function gz$gwx2_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_29)return __WXML_GLOBAL__.ops_cached.$gwx2_29
__WXML_GLOBAL__.ops_cached.$gwx2_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'couponsModalInfo']])
Z([3,'hideCouponsModal'])
Z([3,'preventTouchMove'])
Z([a,[3,'coupons-modal-mask '],[[2,'?:'],[[7],[3,'couponFadeOut']],[1,'coupon-bg-hide'],[1,'']]])
Z([[2,'=='],[[7],[3,'showCouponsModalType']],[[2,'-'],[1,1]]])
Z([3,'defaultClick'])
Z(z[2])
Z([a,[3,'coupons-modal-container '],[[2,'?:'],[[7],[3,'isIpx']],[1,'coupons-modal-fixed-ipx'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isShowCouponsModal']],[1,'coupons-modal-show'],[1,'coupons-modal-hide']]])
Z([3,'coupons-modal-list'])
Z([1,true])
Z([[2,'&&'],[[6],[[7],[3,'displayCoupons']],[3,'fullBackCoupons']],[[2,'=='],[[7],[3,'showCouponsModalType']],[1,2]]])
Z([[6],[[7],[3,'couponsModalInfo']],[3,'fullBackInfo']])
Z([[6],[[7],[3,'couponsModalInfo']],[3,'couponTitle']])
Z([3,'listIndex'])
Z([3,'listInfo'])
Z([[6],[[7],[3,'couponsModalInfo']],[3,'couponInfoList']])
Z([a,[3,'coupons-list-'],[[7],[3,'index']]])
Z([3,'coupons-list-container'])
Z([[6],[[7],[3,'listInfo']],[3,'couponList']])
Z([a,[3,'coupons-item-'],z[16][2]])
Z([a,[3,'coupons-item-container '],[[2,'?:'],[[2,'=='],[[7],[3,'showCouponsModalType']],[1,2]],[1,'coupons-item-container-mall'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'rules_desc']])
Z([[2,'?:'],[[2,'!='],[[7],[3,'showCouponsModalType']],[1,2]],[1,'onCouponItemClicked'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'display_type']],[1,36]],[[6],[[7],[3,'item']],[3,'can_take']]],[1,'showColCouponModal'],[1,'getCoupon']]])
Z([3,'true'])
Z([[6],[[7],[3,'item']],[3,'has_taken_count']])
Z([[6],[[7],[3,'listInfo']],[3,'couponTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_29);return __WXML_GLOBAL__.ops_cached.$gwx2_29
}
function gz$gwx2_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_30)return __WXML_GLOBAL__.ops_cached.$gwx2_30
__WXML_GLOBAL__.ops_cached.$gwx2_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'displayCoupons']],[[2,'||'],[[6],[[7],[3,'displayCoupons']],[3,'fullBackCoupons']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'displayCoupons']],[3,'mallCoupons']],[3,'couponList']],[3,'length']],[1,0]]]],[[2,'!'],[[7],[3,'showError']]]])
Z([3,'g-mall-coupons-container'])
Z([a,[3,'padding-top: '],[[2,'?:'],[[7],[3,'promotionCoupons']],[1,'24rpx;'],[1,'0;']]])
Z([3,'showCouponsDetail'])
Z([3,'true'])
Z([3,'display-container'])
Z([[2,'&&'],[[6],[[7],[3,'displayCoupons']],[3,'mallCoupons']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'displayCoupons']],[3,'mallCoupons']],[3,'couponList']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'displayCoupons']],[3,'mallCoupons']],[3,'couponList']])
Z([a,[3,'coupons-item-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'takenOut']]])
Z([[6],[[7],[3,'displayCoupons']],[3,'fullBackCoupons']])
Z([[10],[[7],[3,'colCouponModal']]])
Z([3,'collectionCouponModal'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_30);return __WXML_GLOBAL__.ops_cached.$gwx2_30
}
function gz$gwx2_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_31)return __WXML_GLOBAL__.ops_cached.$gwx2_31
__WXML_GLOBAL__.ops_cached.$gwx2_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'promotionCoupons']])
Z([3,'onPromotionCouponsClicked'])
Z([3,'promotion-coupons-container'])
Z([[6],[[7],[3,'promotionCoupons']],[3,'style']])
Z([[6],[[7],[3,'promotionCoupons']],[3,'fullBackDisplay']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_31);return __WXML_GLOBAL__.ops_cached.$gwx2_31
}
function gz$gwx2_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_32)return __WXML_GLOBAL__.ops_cached.$gwx2_32
__WXML_GLOBAL__.ops_cached.$gwx2_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[6],[[7],[3,'detailGallery']],[3,'goodsDesc']],[[6],[[7],[3,'detailGallery']],[3,'list']]])
Z([3,'goods-details'])
Z([[6],[[7],[3,'detailGallery']],[3,'brandSection']])
Z([[2,'&&'],[[6],[[7],[3,'detailGallery']],[3,'goodsProperty']],[[2,'>'],[[6],[[6],[[7],[3,'detailGallery']],[3,'goodsProperty']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'detailGallery']],[3,'goodsProperty']],[3,'length']],[1,6]],[[2,'!'],[[7],[3,'showAllProperty']]]])
Z([[6],[[7],[3,'detailGallery']],[3,'goodsDesc']])
Z([a,[3,'g-image-detail '],[[2,'?:'],[[2,'&&'],[[7],[3,'shouldDetailFold']],[[2,'!'],[[7],[3,'isUnfoldClicked']]]],[1,'folded'],[1,'']]])
Z([[7],[3,'isShowTitle']])
Z([[7],[3,'isShowContent']])
Z([[2,'&&'],[[7],[3,'shouldDetailFold']],[[2,'!'],[[7],[3,'isUnfoldClicked']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_32);return __WXML_GLOBAL__.ops_cached.$gwx2_32
}
function gz$gwx2_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_33)return __WXML_GLOBAL__.ops_cached.$gwx2_33
__WXML_GLOBAL__.ops_cached.$gwx2_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'top-gallery-container'])
Z([a,[3,'height:'],[[6],[[7],[3,'topGallery']],[3,'height']],[3,'px;']])
Z([3,'onGalleryChange'])
Z([1,true])
Z([3,'top-gallery-swiper'])
Z([[7],[3,'current']])
Z([3,'280'])
Z([[6],[[7],[3,'topGallery']],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'goods_id']])
Z([3,'onImageLoaded'])
Z([3,'touchEnd'])
Z([3,'touchMove'])
Z([3,'touchStart'])
Z([3,'onGalleryClicked'])
Z([3,'top-gallery-item'])
Z([[6],[[7],[3,'item']],[3,'downloadUrl']])
Z([[7],[3,'index']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,6]])
Z([[6],[[7],[3,'item']],[3,'poster']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'!'],[[7],[3,'isShowImg']]])
Z([3,'aspectFill'])
Z([[2,'?:'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'type']],[1,6]],[[6],[[7],[3,'item']],[3,'url']],[[6],[[7],[3,'item']],[3,'poster']]])
Z([a,z[1][1],z[1][2],z[1][3]])
Z([[2,'&&'],[[2,'&&'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'type']],[1,6]],[[6],[[7],[3,'item']],[3,'thumbLoaded']]],[[7],[3,'pageReady']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'index']],[1,0]],[[7],[3,'preloadImgUrl']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'goodsInfo']],[3,'images']],[3,'id']],[1,1]],[[6],[[6],[[7],[3,'goodsInfo']],[3,'images']],[3,'url']]],[[2,'!'],[[6],[[6],[[7],[3,'topGallery']],[3,'banner']],[3,'festival_end_time']]]])
Z(z[17])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isShowImg']]],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,6]]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'topGallery']],[3,'banner']],[3,'url']],[[7],[3,'isImageLoaded']]])
Z([[6],[[6],[[7],[3,'topGallery']],[3,'banner']],[3,'festival_end_time']])
Z([[2,'&&'],[[7],[3,'isImageLoaded']],[[7],[3,'isShowImg']]])
Z([[7],[3,'isSoldOut']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_33);return __WXML_GLOBAL__.ops_cached.$gwx2_33
}
function gz$gwx2_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_34)return __WXML_GLOBAL__.ops_cached.$gwx2_34
__WXML_GLOBAL__.ops_cached.$gwx2_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isSupportCustomNav']])
Z([3,'goods-back-icon'])
Z([[7],[3,'bgStyle']])
Z([3,'onNavBack'])
Z([1,false])
Z([[7],[3,'navTitle']])
Z(z[4])
Z([[2,'!'],[[7],[3,'isGoodsExisted']]])
Z([[10],[[7],[3,'actionSheet']]])
Z([3,'pdd-action-sheet'])
Z([[10],[[7],[3,'popupModel']]])
Z([3,'popup-modal'])
Z([[7],[3,'isShowShareBubble']])
Z([[7],[3,'bubble']])
Z([[7],[3,'isClosed']])
Z([[7],[3,'isSimple']])
Z([[7],[3,'bubbleTop']])
Z([[2,'?:'],[[7],[3,'showGoodsDetailsContainer']],[1,''],[1,'catchtouchmove']])
Z([3,'goods-container'])
Z([[7],[3,'showError']])
Z([[2,'?:'],[[7],[3,'showGoodsDetailsContainer']],[1,'background-color: transparent;'],[1,'']])
Z([3,'onTopImageLoaded'])
Z([3,'startVideoMode'])
Z([3,'trackingEvent'])
Z([[6],[[7],[3,'goodsInfo']],[3,'isSoldOut']])
Z([[7],[3,'isPageReady']])
Z([[7],[3,'preloadImgUrl']])
Z([[7],[3,'topGallery']])
Z([[7],[3,'CreateGoodsDetailsContainer']])
Z([[2,'?:'],[[7],[3,'showGoodsDetailsContainer']],[1,'goods-details-container'],[1,'goods-details-container-hidden']])
Z([[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'eventType']],[1,6]])
Z([[2,'!='],[[7],[3,'duoduoType']],[1,2]])
Z([3,'handleCardSeleceGoods'])
Z([3,'localGroupSelectedEvent'])
Z(z[23])
Z([[7],[3,'localGroups']])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'isSoldOut']]],[[2,'!'],[[7],[3,'showError']]]])
Z([3,'toGoodsReviewsEvent'])
Z(z[23])
Z([[7],[3,'reviews']])
Z([[2,'&&'],[[7],[3,'answer']],[[2,'!'],[[7],[3,'showError']]]])
Z([[7],[3,'answer']])
Z([3,'toGoodsQaListEvent'])
Z(z[23])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'isSoldOut']]],[[2,'!'],[[7],[3,'showError']]]],[[2,'!'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'isOnSale']]],[[2,'==='],[[6],[[7],[3,'goodsInfo']],[3,'offSaleType']],[1,1]]]]])
Z(z[23])
Z([[7],[3,'detailGallery']])
Z([[7],[3,'shouldDetailFold']])
Z([[2,'>'],[[6],[[7],[3,'recommendList']],[3,'length']],[1,0]])
Z([3,'goods-recommend-container'])
Z([[7],[3,'recommendList']])
Z([a,[3,'rec-'],[[7],[3,'index']]])
Z([[2,'?:'],[[7],[3,'clickEnable']],[1,''],[1,'catchtap']])
Z([[2,'!'],[[7],[3,'showError']]])
Z([[2,'||'],[[2,'||'],[[7],[3,'renderRecommendComplete']],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'recommendList']],[3,'length']],[1,1]]]],[[2,'!=='],[[2,'%'],[[7],[3,'index']],[1,2]],[1,0]]])
Z([3,'gotoGoodsDetail'])
Z([3,'imprTracking'])
Z([[7],[3,'item']])
Z(z[51][2])
Z([[7],[3,'showPromotionIcon']])
Z([1,true])
Z(z[60])
Z([[7],[3,'loadingMoreText']])
Z([[2,'||'],[[7],[3,'renderRecommendComplete']],[[2,'=='],[[6],[[7],[3,'recommendList']],[3,'length']],[1,0]]])
Z([a,[3,'goods-recommend-bottom  '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-ipx-recommend-bottom'],[1,'']]])
Z(z[48])
Z(z[48])
Z([[7],[3,'bestPlatformCouponInfo']])
Z([3,'bottomNoticeEvent'])
Z([3,'dealZoneFavCancel'])
Z([3,'leftTimeGroupEvent'])
Z(z[33])
Z(z[23])
Z([[6],[[7],[3,'goodsInfo']],[3,'userNoticeDynamic']])
Z([[2,'?:'],[[7],[3,'hideMinLeftTimeLocalGroup']],[1,''],[[6],[[7],[3,'localGroups']],[3,'leftTimeList']]])
Z([[7],[3,'zoneTips']])
Z([3,'goTop'])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'!'],[[7],[3,'hideMinLeftTimeLocalGroup']]],[[7],[3,'hasMinLeftTimeLocalGroup']]],[[7],[3,'bestPlatformCouponInfo']]],[[7],[3,'hasBottomNotice']]],[[2,'?:'],[[7],[3,'isIpx']],[1,278],[1,220]],[[2,'?:'],[[7],[3,'isIpx']],[1,198],[1,168]]])
Z([[7],[3,'displayGoTop']])
Z(z[60])
Z([[7],[3,'voucherCenterCoupon']])
Z([[2,'?:'],[[6],[[7],[3,'voucherCenterCoupon']],[3,'isCoupon']],[1,''],[1,'onTakeVoucherCenterCouponClicked']])
Z([a,[3,'voucher-center-coupon-container '],[[2,'?:'],[[7],[3,'isIpx']],[1,'voucher-center-coupon-fix-ipx'],[1,'']]])
Z([[6],[[7],[3,'voucherCenterCoupon']],[3,'batchId']])
Z([[6],[[7],[3,'voucherCenterCoupon']],[3,'isCoupon']])
Z([[9],[[9],[[8],'shareMainClass',[[7],[3,'shareMainClass']]],[[8],'canShowShare',[[7],[3,'canShowShare']]]],[[8],'screenShotDesc',[1,'推荐商品给好友']]])
Z([3,'screenShotShare'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showError']]],[[7],[3,'showGoodsDetailsContainer']]])
Z([3,'submitFormEvent'])
Z(z[23])
Z([[7],[3,'bottomBarData']])
Z([3,'goods-bottom-bar-query'])
Z([3,'confirmOrderEvent'])
Z([3,'hideSkuSelectorEvent'])
Z([3,'selectedSkuChangedEvent'])
Z(z[88])
Z(z[23])
Z([[7],[3,'currentSelect']])
Z([[7],[3,'goodsNumber']])
Z([[7],[3,'showSkuFlag']])
Z([[7],[3,'skuData']])
Z([[7],[3,'isShowTagModal']])
Z([[7],[3,'isShowVirtualDisable']])
Z([[7],[3,'isShowLikeGoodsCoupons']])
Z([[7],[3,'showDuoduoToast']])
Z([[9],[[9],[[8],'toastIcon',[[7],[3,'toastIcon']]],[[8],'toastText',[[7],[3,'toastText']]]],[[8],'subToastText',[[7],[3,'subToastText']]]])
Z([3,'duoduoToast'])
Z([[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'isDeposit']],[[6],[[7],[3,'goodsInfo']],[3,'depositOn']]])
Z([[9],[[9],[[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'depositRuleTipVisible',[[7],[3,'depositRuleTipVisible']]]],[[8],'mainDepositRuleTipClass',[[7],[3,'mainDepositRuleTipClass']]]],[[8],'depositTipParagraphs',[[7],[3,'depositTipParagraphs']]]])
Z([3,'depositRuleTip'])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
Z([[10],[[7],[3,'mallCouponToastData']]])
Z([3,'mallCouponToast'])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([3,'onModalCancel'])
Z([3,'onModalConfirm'])
Z([[7],[3,'confirmText']])
Z([[7],[3,'content']])
Z([[7],[3,'contentAlign']])
Z([[7],[3,'contentColor']])
Z([[7],[3,'showCancel']])
Z([[7],[3,'displayDialog']])
Z(z[19])
Z([3,'reLoad'])
Z([[7],[3,'displayToast']])
Z([[7],[3,'toastMessage']])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'!'],[[7],[3,'hideMinLeftTimeLocalGroup']]],[[7],[3,'hasMinLeftTimeLocalGroup']]],[[7],[3,'bestPlatformCouponInfo']]],[[7],[3,'hasBottomNotice']]],[[2,'?:'],[[7],[3,'isIpx']],[[2,'?:'],[[7],[3,'displayGoTop']],[1,374],[1,278]],[[2,'?:'],[[7],[3,'displayGoTop']],[1,306],[1,210]]],[[2,'?:'],[[7],[3,'isIpx']],[[2,'?:'],[[7],[3,'displayGoTop']],[1,294],[1,198]],[[2,'?:'],[[7],[3,'displayGoTop']],[1,264],[1,168]]]])
Z([[6],[[7],[3,'resourcePlaceConfig']],[3,'floating_goods_detail']])
Z([3,'float'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_34);return __WXML_GLOBAL__.ops_cached.$gwx2_34
}
function gz$gwx2_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_35)return __WXML_GLOBAL__.ops_cached.$gwx2_35
__WXML_GLOBAL__.ops_cached.$gwx2_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'answers']],[3,'merchant_qa_list']])
Z([3,'index'])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_35);return __WXML_GLOBAL__.ops_cached.$gwx2_35
}
function gz$gwx2_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_36)return __WXML_GLOBAL__.ops_cached.$gwx2_36
__WXML_GLOBAL__.ops_cached.$gwx2_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'collage-container'])
Z([[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_36);return __WXML_GLOBAL__.ops_cached.$gwx2_36
}
function gz$gwx2_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_37)return __WXML_GLOBAL__.ops_cached.$gwx2_37
__WXML_GLOBAL__.ops_cached.$gwx2_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'deposit-container'])
Z([a,[3,'deposit-content '],[[2,'?:'],[[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']],[1,''],[1,'deposit-content-without-salestip']]])
Z([[6],[[7],[3,'goodsInfo']],[3,'showGoodsExpansionPrice']])
Z([[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']])
Z([[6],[[7],[3,'goodsInfo']],[3,'depositPackagedTime']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_37);return __WXML_GLOBAL__.ops_cached.$gwx2_37
}
function gz$gwx2_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_38)return __WXML_GLOBAL__.ops_cached.$gwx2_38
__WXML_GLOBAL__.ops_cached.$gwx2_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'duoduo-container'])
Z([[2,'&&'],[[7],[3,'duoduoType']],[[7],[3,'duodouDiscountPrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_38);return __WXML_GLOBAL__.ops_cached.$gwx2_38
}
function gz$gwx2_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_39)return __WXML_GLOBAL__.ops_cached.$gwx2_39
__WXML_GLOBAL__.ops_cached.$gwx2_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'?:'],[[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'isSpike']],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'spikeOver']]]],[1,'has-spike-g-base'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'isSpike']],[[6],[[7],[3,'goodsInfo']],[3,'spikeOver']]],[1,'spike-over-mar-botttom'],[1,'']]])
Z([3,'g-base'])
Z([[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'isDeposit']],[[6],[[7],[3,'goodsInfo']],[3,'depositOn']]])
Z([[6],[[7],[3,'goodsInfo']],[3,'isSpike']])
Z([[6],[[7],[3,'goodsInfo']],[3,'isYardSoldOut']])
Z([[6],[[7],[3,'goodsInfo']],[3,'isCollage']])
Z([[6],[[7],[3,'goodsInfo']],[3,'isSubsidy']])
Z([[2,'&&'],[[7],[3,'duoduoType']],[[7],[3,'duodouDiscountPrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_39);return __WXML_GLOBAL__.ops_cached.$gwx2_39
}
function gz$gwx2_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_40)return __WXML_GLOBAL__.ops_cached.$gwx2_40
__WXML_GLOBAL__.ops_cached.$gwx2_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'goodsInfo']],[3,'bottomSalesTip']])
Z([3,'touchEndGoodsName'])
Z([3,'touchMoveGoodsName'])
Z([3,'touchStartGoodsName'])
Z([3,'g-name-text'])
Z([[2,'&&'],[[6],[[7],[3,'preTag']],[3,'icon']],[[6],[[6],[[7],[3,'preTag']],[3,'icon']],[3,'url']]])
Z([[7],[3,'afterTag']])
Z([a,[3,'gicon'],[[7],[3,'index']]])
Z([3,'onTagClicked'])
Z([a,[3,'g-icon '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'style']],[[6],[[7],[3,'item']],[3,'style']],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[2,'&&'],[[7],[3,'isShowTips']],[[6],[[7],[3,'item']],[3,'showTips']]])
Z(z[11])
Z([[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'userNoticeDynamic']],[[2,'=='],[[6],[[6],[[7],[3,'goodsInfo']],[3,'userNoticeDynamic']],[3,'notice_type']],[1,2]]])
Z([[2,'&&'],[[7],[3,'showActive']],[[2,'!=='],[[6],[[7],[3,'goodsInfo']],[3,'eventType']],[1,13]]])
Z([[7],[3,'showGoodsNameCopyToast']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_40);return __WXML_GLOBAL__.ops_cached.$gwx2_40
}
function gz$gwx2_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_41)return __WXML_GLOBAL__.ops_cached.$gwx2_41
__WXML_GLOBAL__.ops_cached.$gwx2_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'goodsPropertyType']],[1,1]],[[2,'>'],[[6],[[6],[[7],[3,'goodsInfo']],[3,'goodsPropertyTop']],[3,'length']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_41);return __WXML_GLOBAL__.ops_cached.$gwx2_41
}
function gz$gwx2_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_42)return __WXML_GLOBAL__.ops_cached.$gwx2_42
__WXML_GLOBAL__.ops_cached.$gwx2_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'general-goods-detail-box'])
Z([3,'g-price-group general-goods-price-group'])
Z([3,'g-price-info-line-one'])
Z([[2,'||'],[[2,'!'],[[7],[3,'duoduoType']]],[[2,'!'],[[7],[3,'duodouDiscountPrice']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'discount']]],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'multiDiscount']]]],[[2,'!'],[[7],[3,'pickNum']]]],[[2,'||'],[[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'priceStyle']],[1,0]],[[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'priceStyle']],[1,2]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'showActive']]],[[6],[[7],[3,'goodsInfo']],[3,'multiDiscount']]],[[2,'!'],[[2,'&&'],[[7],[3,'duoduoType']],[[7],[3,'duodouDiscountPrice']]]]])
Z([[2,'&&'],[[7],[3,'showActive']],[[7],[3,'pickNum']]])
Z([[2,'||'],[[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_42);return __WXML_GLOBAL__.ops_cached.$gwx2_42
}
function gz$gwx2_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_43)return __WXML_GLOBAL__.ops_cached.$gwx2_43
__WXML_GLOBAL__.ops_cached.$gwx2_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'goodsInfo']],[3,'isSpike']])
Z([3,'spike-goods-box'])
Z([[2,'!'],[[6],[[7],[3,'spikeInfo']],[3,'spikeOver']]])
Z([[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']])
Z([[6],[[7],[3,'spikeInfo']],[3,'spikeOver']])
Z([[2,'&&'],[[6],[[7],[3,'goodsInfo']],[3,'isSpike']],[[2,'!'],[[6],[[7],[3,'spikeInfo']],[3,'spikeOver']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_43);return __WXML_GLOBAL__.ops_cached.$gwx2_43
}
function gz$gwx2_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_44)return __WXML_GLOBAL__.ops_cached.$gwx2_44
__WXML_GLOBAL__.ops_cached.$gwx2_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']])
Z([[2,'&&'],[[6],[[7],[3,'subsidyInfo']],[3,'linedPrefix']],[[6],[[7],[3,'subsidyInfo']],[3,'linedPrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_44);return __WXML_GLOBAL__.ops_cached.$gwx2_44
}
function gz$gwx2_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_45)return __WXML_GLOBAL__.ops_cached.$gwx2_45
__WXML_GLOBAL__.ops_cached.$gwx2_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'yard-container'])
Z([3,'price-container'])
Z([[6],[[7],[3,'yardSoldOutInfo']],[3,'discount_desc']])
Z([[6],[[7],[3,'goodsInfo']],[3,'sideSalesTip']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_45);return __WXML_GLOBAL__.ops_cached.$gwx2_45
}
function gz$gwx2_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_46)return __WXML_GLOBAL__.ops_cached.$gwx2_46
__WXML_GLOBAL__.ops_cached.$gwx2_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[6],[[7],[3,'reviews']],[3,'detailList']],[[2,'>'],[[6],[[6],[[7],[3,'reviews']],[3,'detailList']],[3,'length']],[1,0]]])
Z([3,'toGoodsReviewsPage'])
Z([3,'goods-reviews-container'])
Z([[9],[[8],'showMoreTitle',[[6],[[7],[3,'reviews']],[3,'numberTxt']]],[[8],'isShowMore',[1,true]]])
Z([3,'showMoreTpl'])
Z([[6],[[7],[3,'reviews']],[3,'isShow']])
Z([[6],[[7],[3,'reviews']],[3,'tagList']])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'positive']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_46);return __WXML_GLOBAL__.ops_cached.$gwx2_46
}
function gz$gwx2_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_47)return __WXML_GLOBAL__.ops_cached.$gwx2_47
__WXML_GLOBAL__.ops_cached.$gwx2_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'swiperItems']],[[2,'>'],[[6],[[7],[3,'swiperItems']],[3,'length']],[1,0]]])
Z([3,'g-local-groups'])
Z([[9],[[9],[[9],[[8],'cls',[1,'padding-cls']],[[8],'showMoreTitle',[[7],[3,'localGroupDesc']]]],[[8],'isShowMore',[[2,'>'],[[7],[3,'totalNum']],[1,2]]]],[[8],'submitFunc',[1,'showGroupModel']]])
Z([3,'showMoreTpl'])
Z([3,'$uploadFormId'])
Z([3,'true'])
Z([[2,'>'],[[6],[[7],[3,'groupList']],[3,'length']],[1,1]])
Z([3,'stopDetailMove'])
Z([3,'model-group-container'])
Z([[2,'!'],[[7],[3,'groupWindowVisible']]])
Z([3,'onListScroll'])
Z([3,'onScrollToLower'])
Z([3,'m-group-list'])
Z(z[5])
Z([[2,'>'],[[7],[3,'totalNum']],[1,10]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_47);return __WXML_GLOBAL__.ops_cached.$gwx2_47
}
function gz$gwx2_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_48)return __WXML_GLOBAL__.ops_cached.$gwx2_48
__WXML_GLOBAL__.ops_cached.$gwx2_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mallInfo']])
Z([3,'navigationToMallPage'])
Z([a,[3,'goods-mall'],[[2,'?:'],[[7],[3,'mallInfo']],[1,' show'],[1,'']]])
Z([3,'grid-item-hover'])
Z([3,'50'])
Z([3,'500'])
Z([3,'goods-mall-info'])
Z([[6],[[7],[3,'mallInfo']],[3,'brandTagLink']])
Z([3,'goods-mall-sub-name'])
Z([[6],[[7],[3,'mallInfo']],[3,'goodsNumDesc']])
Z([[6],[[7],[3,'mallInfo']],[3,'salesTip']])
Z([[6],[[7],[3,'mallInfo']],[3,'dsr']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'mallRecommendList']],[3,'length']],[1,0]],[[2,'!=='],[[6],[[7],[3,'mallInfo']],[3,'mallShowType']],[1,1]]])
Z([[7],[3,'mallRecommendList']])
Z([a,[3,'mall-rec-'],[[7],[3,'index']]])
Z([3,'gotoGoodsDetail'])
Z([3,'mall-recommend-item'])
Z([[6],[[7],[3,'item']],[3,'goodsId']])
Z(z[14][2])
Z([1,true])
Z([[6],[[7],[3,'item']],[3,'salesTip']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'mallRecommendList']],[3,'length']],[1,0]],[[2,'==='],[[6],[[7],[3,'mallInfo']],[3,'mallShowType']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_48);return __WXML_GLOBAL__.ops_cached.$gwx2_48
}
function gz$gwx2_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_49)return __WXML_GLOBAL__.ops_cached.$gwx2_49
__WXML_GLOBAL__.ops_cached.$gwx2_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'showServiceDetail'])
Z([3,'true'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showError']]],[[6],[[7],[3,'mallService']],[3,'isShowService']]])
Z([a,[3,'g-mall-service '],[[2,'?:'],[[2,'&&'],[[7],[3,'promotionCoupons']],[[2,'!'],[[7],[3,'displayCoupons']]]],[1,' mall-service-promotion'],[1,'']]])
Z([3,'submit'])
Z([[2,'||'],[[2,'&&'],[[2,'||'],[[2,'!='],[[6],[[7],[3,'mallCoupons']],[3,'length']],[1,0]],[[6],[[7],[3,'goodsInfo']],[3,'isHaitao']]],[[2,'!'],[[7],[3,'promotionCoupons']]]],[[7],[3,'displayCoupons']]])
Z([[2,'&&'],[[6],[[7],[3,'mallService']],[3,'service']],[[2,'>'],[[6],[[6],[[7],[3,'mallService']],[3,'service']],[3,'length']],[1,0]]])
Z([a,[3,'g-service-item-list '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'goodsInfo']],[3,'isSpike']]],[[2,'==='],[[6],[[6],[[7],[3,'goodsInfo']],[3,'channelSign']],[3,'tag']],[[2,'-'],[1,1]]]],[1,'g-service-item-list-height'],[1,'']]])
Z([[6],[[7],[3,'goodsInfo']],[3,'isHaitao']])
Z([[6],[[7],[3,'mallService']],[3,'service']])
Z([a,[3,'service-item-'],[[7],[3,'index']]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'top']],[1,1]])
Z([[2,'||'],[[2,'&&'],[[2,'>'],[[7],[3,'index']],[1,0]],[[2,'<'],[[7],[3,'index']],[[6],[[6],[[7],[3,'mallService']],[3,'service']],[3,'length']]]],[[6],[[7],[3,'goodsInfo']],[3,'isHaitao']]])
Z([3,'hideServiceDetail'])
Z([3,'stopDetailMove'])
Z([a,[3,'service-detail-bg '],[[2,'?:'],[[7],[3,'serviceFadeOut']],[1,'service-bg-hide'],[1,'']]])
Z([[2,'!'],[[7],[3,'serviceDetailVisible']]])
Z([3,'defaultClick'])
Z([a,[3,'service-detail-main '],[[7],[3,'serviceMainClass']]])
Z([3,'service-list'])
Z([1,true])
Z(z[8])
Z([3,'country-logo-container'])
Z([[6],[[7],[3,'mallService']],[3,'goodsWarehouse']])
Z(z[23])
Z(z[9])
Z([a,[3,'service-detail-'],z[10][2]])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'navigation']],[[6],[[7],[3,'item']],[3,'navigation_url']]],[1,'onServiceItemNavigationClicked'],[1,'']])
Z([3,'service-item'])
Z([[6],[[7],[3,'item']],[3,'navigation_url']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'navigation']],[[6],[[7],[3,'item']],[3,'navigation_url']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_49);return __WXML_GLOBAL__.ops_cached.$gwx2_49
}
function gz$gwx2_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_50)return __WXML_GLOBAL__.ops_cached.$gwx2_50
__WXML_GLOBAL__.ops_cached.$gwx2_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goodsPlayRules'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_50);return __WXML_GLOBAL__.ops_cached.$gwx2_50
}
function gz$gwx2_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_51)return __WXML_GLOBAL__.ops_cached.$gwx2_51
__WXML_GLOBAL__.ops_cached.$gwx2_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'popupModel']]])
Z([3,'popup-modal'])
Z([[2,'=='],[[7],[3,'curTabIndex']],[1,0]])
Z([[7],[3,'bubble']])
Z([[7],[3,'isClosed']])
Z([[7],[3,'isSimple']])
Z([[7],[3,'bubbleTop']])
Z([3,'onReachBottom'])
Z([[6],[[6],[[7],[3,'tabStatus']],[[7],[3,'curTabIndex']]],[3,'canLoadMore']])
Z([[7],[3,'displayLoadMore']])
Z([[2,'?:'],[[6],[[6],[[7],[3,'tabStatus']],[[7],[3,'curTabIndex']]],[3,'canLoadMore']],[1,'正在加载中...'],[1,'没有更多了...']])
Z([1,800])
Z([3,'header'])
Z([[2,'?:'],[[7],[3,'showOvershadow']],[1,'catchTapPage'],[1,'']])
Z([3,'group-container'])
Z([[6],[[7],[3,'groupInfo']],[3,'showSoldOutStyle']])
Z([3,'notOnsaleClick'])
Z([[6],[[7],[3,'groupInfo']],[3,'isLotteryOrFreeTrial']])
Z([[7],[3,'userInfo']])
Z([[7],[3,'showSuccessView']])
Z([3,'viewGoodsDetail'])
Z([3,'goOrderDetail'])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'groupInfo']])
Z([[7],[3,'showPaySuccessStyle']])
Z(z[18])
Z([3,'full'])
Z([3,'groupFullRoute'])
Z([3,'groupFullTrack'])
Z([[7],[3,'mallInfo']])
Z([[7],[3,'mallFullBackInfo']])
Z([[7],[3,'monthCard']])
Z([[7],[3,'platformFullBack']])
Z([3,'btn'])
Z([3,'didSuccessJump'])
Z([3,'goBackActivity'])
Z([3,'goChargeCenter'])
Z([3,'goHomePage'])
Z([3,'goLotteryPage'])
Z([3,'reLoad'])
Z([[7],[3,'bizTagInfo']])
Z([[7],[3,'buttonInfo']])
Z([[7],[3,'hasLogin']])
Z([[7],[3,'groupStatus']])
Z([[2,'&&'],[[7],[3,'timeLine']],[[6],[[7],[3,'timeLine']],[3,'isOpenTimeline']]])
Z([3,'timeline'])
Z([3,'clickTimeLine'])
Z([[7],[3,'timeLine']])
Z([3,'zone'])
Z([[7],[3,'zoneInfo']])
Z([3,'zoneTracking'])
Z([[6],[[7],[3,'goodsInfo']],[3,'goodsId']])
Z(z[49])
Z([[2,'&&'],[[2,'==='],[[7],[3,'groupStatus']],[1,0]],[[2,'>'],[[7],[3,'groupRole']],[1,0]]])
Z(z[20])
Z([3,'didShareHintButton'])
Z(z[35])
Z(z[39])
Z(z[40])
Z([[7],[3,'expireTime']])
Z(z[22])
Z(z[24])
Z(z[18])
Z([[2,'&&'],[[7],[3,'showOvershadow']],[[2,'!'],[[6],[[7],[3,'popupModel']],[3,'showPopupModel']]]])
Z(z[44])
Z(z[45])
Z([3,'margin-top:20rpx;'])
Z(z[44])
Z(z[46])
Z(z[47])
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[49])
Z([[7],[3,'showNormalView']])
Z(z[20])
Z(z[22])
Z(z[23])
Z(z[42])
Z([[7],[3,'groupRole']])
Z(z[43])
Z(z[18])
Z(z[33])
Z([3,'clickGroupBtn'])
Z(z[38])
Z([3,'didClickLoginBtn'])
Z([3,'signInHandler'])
Z(z[41])
Z(z[42])
Z([1,true])
Z([[6],[[7],[3,'userInfo']],[3,'leftUserNum']])
Z(z[43])
Z([[2,'&&'],[[7],[3,'localGroups']],[[2,'>'],[[6],[[7],[3,'localGroups']],[3,'length']],[1,0]]])
Z([3,'local'])
Z([3,'joinLocalGroup'])
Z([[7],[3,'localGroups']])
Z([3,'group-big-sales'])
Z([[7],[3,'showMainPage']])
Z([3,'handleResourceVisible'])
Z([[6],[[7],[3,'resourcePlaceConfig']],[3,'anomalous_group']])
Z([3,'banner'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'isShowResourceBanner']],[[7],[3,'showOvershadow']]],[[2,'!'],[[6],[[7],[3,'popupModel']],[3,'showPopupModel']]]])
Z([3,'catchTapPage'])
Z([3,'group-list-container'])
Z([3,'items'])
Z([3,'position:relative;min-height:800rpx'])
Z(z[63])
Z(z[98])
Z(z[19])
Z([3,'didClickSegmentTab'])
Z([[7],[3,'segmentConfig']])
Z([[7],[3,'segmentRenderObj']])
Z([[2,'<='],[[6],[[7],[3,'groupGoodsList']],[3,'length']],[1,0]])
Z([1,2])
Z([[2,'>'],[[6],[[7],[3,'groupGoodsList']],[3,'length']],[1,0]])
Z([[7],[3,'groupGoodsList']])
Z([3,'index'])
Z([3,'gotoGoodsDetail'])
Z([3,'imprTracking'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'tabKey']])
Z(z[90])
Z(z[98])
Z([[2,'?:'],[[7],[3,'displayGoTop']],[1,188],[1,92]])
Z([[6],[[7],[3,'resourcePlaceConfig']],[3,'floating_group_detail']])
Z([3,'float'])
Z([[9],[[8],'loadingVisible',[[7],[3,'loadingVisible']]],[[8],'loadingStyle',[[7],[3,'loadingStyle']]]])
Z([3,'loading-tpl'])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([[7],[3,'displayQuickEntry']])
Z([[7],[3,'showError']])
Z(z[39])
Z([[7],[3,'display']])
Z([[7],[3,'toastMessage']])
Z([3,'84'])
Z([[7],[3,'displayGoTop']])
Z(z[39])
Z([3,'pdd-container'])
Z([3,'confirmOrderEvent'])
Z([3,'hideSkuSelectorEvent'])
Z([3,'submitFormEvent'])
Z([3,'groupSkuTrackingEvent'])
Z([[7],[3,'currentSelect']])
Z([[7],[3,'showSkuFlag']])
Z([[7],[3,'skuData']])
Z([3,'onModalCancel'])
Z([3,'onModalConfirm'])
Z([[7],[3,'cancelText']])
Z([[7],[3,'confirmText']])
Z([[7],[3,'contentAlign']])
Z(z[90])
Z([[7],[3,'dialogTitle']])
Z([[7],[3,'displayDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_51);return __WXML_GLOBAL__.ops_cached.$gwx2_51
}
function gz$gwx2_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_52)return __WXML_GLOBAL__.ops_cached.$gwx2_52
__WXML_GLOBAL__.ops_cached.$gwx2_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isNormal']])
Z([[7],[3,'hasLogin']])
Z([a,[[2,'?:'],[[6],[[7],[3,'button']],[3,'groupStatusTips']],[1,'tip-text'],[1,'']],[3,' group-detail-buy-icon']])
Z([[6],[[7],[3,'button']],[3,'groupStatusTips']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,0]],[[2,'>'],[[7],[3,'leftUser']],[1,0]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,0]],[[2,'>'],[[7],[3,'groupLeftTime']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_52);return __WXML_GLOBAL__.ops_cached.$gwx2_52
}
function gz$gwx2_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_53)return __WXML_GLOBAL__.ops_cached.$gwx2_53
__WXML_GLOBAL__.ops_cached.$gwx2_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'mallFull']],[[6],[[7],[3,'mallFull']],[3,'mallGoodsVoList']]],[[2,'>'],[[6],[[6],[[7],[3,'mallFull']],[3,'mallGoodsVoList']],[3,'length']],[1,0]]])
Z([3,'mall-back-goods'])
Z([[2,'>'],[[6],[[6],[[7],[3,'mallFull']],[3,'mallGoodsVoList']],[3,'length']],[1,1]])
Z([3,'onMallGoodsScoll'])
Z([3,'mall-goods-scroll'])
Z([[6],[[7],[3,'mallFull']],[3,'mallGoodsVoList']])
Z([3,'goodsId'])
Z([[2,'<='],[[7],[3,'index']],[1,11]])
Z([[2,'==='],[[6],[[6],[[7],[3,'mallFull']],[3,'mallGoodsVoList']],[3,'length']],[1,1]])
Z([[2,'&&'],[[7],[3,'platformFull']],[[6],[[7],[3,'platformFull']],[3,'needAmount']]])
Z([[2,'&&'],[[7],[3,'monthCard']],[[6],[[7],[3,'monthCard']],[3,'url']]])
Z([3,'clickMonthCard'])
Z([3,'month-card'])
Z([[6],[[7],[3,'monthCard']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_53);return __WXML_GLOBAL__.ops_cached.$gwx2_53
}
function gz$gwx2_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_54)return __WXML_GLOBAL__.ops_cached.$gwx2_54
__WXML_GLOBAL__.ops_cached.$gwx2_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'goods']],[3,'goodsId']])
Z([3,'didTap'])
Z([3,'group-detail-goods'])
Z(z[0])
Z([3,'group-detail-goods-info'])
Z([3,'group-detail-goods-title'])
Z([[6],[[7],[3,'goods']],[3,'actTagIcon']])
Z([[6],[[7],[3,'goods']],[3,'country']])
Z([3,'group-detail-goods-sales-info'])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]])
Z([[2,'&&'],[[6],[[7],[3,'goods']],[3,'salesTip']],[[2,'&&'],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]]])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx2_54);return __WXML_GLOBAL__.ops_cached.$gwx2_54
}
function gz$gwx2_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_55)return __WXML_GLOBAL__.ops_cached.$gwx2_55
__WXML_GLOBAL__.ops_cached.$gwx2_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'group-v2-head'])
Z([3,'group-v2-count-down'])
Z([[7],[3,'groupLeftTransferedTime']])
Z(z[2])
Z([[7],[3,'user']])
Z([3,'group-detail-joined-info group-detail-joined-v2'])
Z([[2,'&&'],[[6],[[7],[3,'bizTagInfo']],[3,'isShowActivity']],[[6],[[7],[3,'bizTagInfo']],[3,'activityTitle']]])
Z([3,'timeline'])
Z([[2,'!'],[[2,'&&'],[[6],[[7],[3,'bizTagInfo']],[3,'isShowActivity']],[[6],[[7],[3,'bizTagInfo']],[3,'activityTitle']]]])
Z([3,'group-detail-joined-detail'])
Z([3,'shadow'])
Z([3,'zone'])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx2_55);return __WXML_GLOBAL__.ops_cached.$gwx2_55
}
function gz$gwx2_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_56)return __WXML_GLOBAL__.ops_cached.$gwx2_56
__WXML_GLOBAL__.ops_cached.$gwx2_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'group-detail'])
Z([3,'clickGoods'])
Z([[6],[[7],[3,'group']],[3,'copyWriting']])
Z([[7],[3,'goods']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'==='],[[7],[3,'status']],[1,2]]])
Z([[6],[[7],[3,'group']],[3,'comments']])
Z([[6],[[7],[3,'goods']],[3,'mallServices']])
Z([[7],[3,'user']])
Z([3,'btn'])
Z([3,'local'])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'!=='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_56);return __WXML_GLOBAL__.ops_cached.$gwx2_56
}
function gz$gwx2_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_57)return __WXML_GLOBAL__.ops_cached.$gwx2_57
__WXML_GLOBAL__.ops_cached.$gwx2_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'comments']],[[2,'>'],[[6],[[7],[3,'comments']],[3,'length']],[1,0]]])
Z([3,'showServiceDetail'])
Z([3,'true'])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'!'],[[7],[3,'comments']]],[[2,'<='],[[6],[[7],[3,'comments']],[3,'length']],[1,0]]],[[7],[3,'mallServices']]],[[2,'>'],[[6],[[7],[3,'mallServices']],[3,'length']],[1,0]]])
Z([[7],[3,'showServiceDetail']])
Z([3,'hideServiceDetail'])
Z([3,'preventTouchMove'])
Z([3,'group-detail-goods-services-detail'])
Z([3,'fade'])
Z(z[6])
Z(z[4])
Z([[7],[3,'mallServices']])
Z([a,[3,'pop-service-item-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'desc']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_57);return __WXML_GLOBAL__.ops_cached.$gwx2_57
}
function gz$gwx2_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_58)return __WXML_GLOBAL__.ops_cached.$gwx2_58
__WXML_GLOBAL__.ops_cached.$gwx2_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'group-detail-nostore'])
Z([[7],[3,'isLotteryOrFreeTrial']])
Z([[7],[3,'user']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx2_58);return __WXML_GLOBAL__.ops_cached.$gwx2_58
}
function gz$gwx2_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_59)return __WXML_GLOBAL__.ops_cached.$gwx2_59
__WXML_GLOBAL__.ops_cached.$gwx2_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'groupNoticeBarText']],[[2,'>'],[[6],[[6],[[7],[3,'groupNoticeBarText']],[3,'textArr']],[3,'length']],[1,0]]])
Z([3,'clickGroupNotice'])
Z([3,'group-detail-notice-view'])
Z([[7],[3,'groupNoticePopupVisible']])
Z([3,'hideGroupNoticePopup'])
Z([3,'preventTouchMove'])
Z([3,'notice-pop-container'])
Z([3,'fade'])
Z(z[5])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx2_59);return __WXML_GLOBAL__.ops_cached.$gwx2_59
}
function gz$gwx2_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_60)return __WXML_GLOBAL__.ops_cached.$gwx2_60
__WXML_GLOBAL__.ops_cached.$gwx2_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'group-detail-success-base-info'])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]],[[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,7]]])
Z([3,'clickGoods'])
Z([[7],[3,'goods']])
Z([[2,'==='],[[6],[[7],[3,'goods']],[3,'eventType']],[1,1]])
Z([[7],[3,'user']])
Z([[7],[3,'showHintToast']])
Z([[6],[[7],[3,'group']],[3,'depositBeginTime']])
Z([[6],[[7],[3,'group']],[3,'successDesc']])
Z([3,'timeline'])
Z([1,true])
Z(z[5])
Z([3,'full'])
Z([3,'btn'])
Z([3,'true'])
Z([[7],[3,'paySuccess']])
Z([3,'zone'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_60);return __WXML_GLOBAL__.ops_cached.$gwx2_60
}
function gz$gwx2_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_61)return __WXML_GLOBAL__.ops_cached.$gwx2_61
__WXML_GLOBAL__.ops_cached.$gwx2_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'group-detail-user-wrapper '],[[2,'?:'],[[7],[3,'isSuccess']],[1,'group-detail-user-success-wrapper'],[1,'']]])
Z([3,'showUserListPop'])
Z([a,[3,'group-detail-users '],[[2,'?:'],[[2,'>'],[[2,'+'],[[6],[[6],[[7],[3,'user']],[3,'usersList']],[3,'length']],[[6],[[7],[3,'user']],[3,'leftUserNum']]],[1,6]],[1,'small-icons'],[1,'']]])
Z([3,'user'])
Z([[6],[[7],[3,'user']],[3,'usersList']])
Z([3,'avatar'])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([[7],[3,'userListPopVisible']])
Z([3,'group-detail-users-list'])
Z([3,'fade'])
Z([3,'preventTouchMove'])
Z(z[7])
Z([3,'group-member'])
Z([3,'group-users-pop'])
Z([3,'true'])
Z([[2,'==='],[[6],[[6],[[7],[3,'user']],[3,'usersList']],[3,'length']],[1,1]])
Z(z[3])
Z(z[4])
Z([3,'avater'])
Z([[2,'!=='],[[7],[3,'index']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_61);return __WXML_GLOBAL__.ops_cached.$gwx2_61
}
function gz$gwx2_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_62)return __WXML_GLOBAL__.ops_cached.$gwx2_62
__WXML_GLOBAL__.ops_cached.$gwx2_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'zoneInfo']],[[6],[[7],[3,'zoneInfo']],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_62);return __WXML_GLOBAL__.ops_cached.$gwx2_62
}
function gz$gwx2_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_63)return __WXML_GLOBAL__.ops_cached.$gwx2_63
__WXML_GLOBAL__.ops_cached.$gwx2_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'localGroups']],[[2,'>'],[[6],[[7],[3,'localGroups']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_63);return __WXML_GLOBAL__.ops_cached.$gwx2_63
}
function gz$gwx2_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_64)return __WXML_GLOBAL__.ops_cached.$gwx2_64
__WXML_GLOBAL__.ops_cached.$gwx2_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'time_line'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'timeLine']],[3,'status']],[1,1]],[[2,'=='],[[6],[[7],[3,'timeLine']],[3,'status']],[1,3]]])
Z([[6],[[7],[3,'timeLine']],[3,'timeLineDescSub']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_64);return __WXML_GLOBAL__.ops_cached.$gwx2_64
}
function gz$gwx2_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_65)return __WXML_GLOBAL__.ops_cached.$gwx2_65
__WXML_GLOBAL__.ops_cached.$gwx2_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'couponDiscountTips'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'realNameAuthData']],[3,'needNameAuth']]],[[7],[3,'showDiscountTips']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_65);return __WXML_GLOBAL__.ops_cached.$gwx2_65
}
function gz$gwx2_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_66)return __WXML_GLOBAL__.ops_cached.$gwx2_66
__WXML_GLOBAL__.ops_cached.$gwx2_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'virtualGoods'])
Z([3,'oc-virtual-goods-area'])
Z([3,'clickMobileInput'])
Z([3,'oc-virtual-goods'])
Z([[2,'?:'],[[7],[3,'hasMobile']],[1,'margin-bottom: 0;'],[1,'']])
Z([[2,'!'],[[7],[3,'hasMobile']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'disableUserAction']]],[[2,'!'],[[7],[3,'hasMobile']]]])
Z([[7],[3,'hasMobile']])
Z([[2,'>'],[[6],[[7],[3,'records']],[3,'length']],[1,0]])
Z([[7],[3,'records']])
Z([3,'mobile'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_66);return __WXML_GLOBAL__.ops_cached.$gwx2_66
}
function gz$gwx2_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_67)return __WXML_GLOBAL__.ops_cached.$gwx2_67
__WXML_GLOBAL__.ops_cached.$gwx2_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'stepPrepay'])
Z([[2,'<'],[[7],[3,'depositPrice']],[[7],[3,'inflatePrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_67);return __WXML_GLOBAL__.ops_cached.$gwx2_67
}
function gz$gwx2_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_68)return __WXML_GLOBAL__.ops_cached.$gwx2_68
__WXML_GLOBAL__.ops_cached.$gwx2_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'stepProtocol'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_68);return __WXML_GLOBAL__.ops_cached.$gwx2_68
}
function gz$gwx2_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_69)return __WXML_GLOBAL__.ops_cached.$gwx2_69
__WXML_GLOBAL__.ops_cached.$gwx2_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onNavBack'])
Z([3,'customNavitionBar'])
Z([[7],[3,'navTitle']])
Z([1,true])
Z([[2,'!'],[[7],[3,'isSupportCustomNav']]])
Z([[2,'!'],[[7],[3,'isVirtualGoods']]])
Z([[7],[3,'bubble']])
Z([[7],[3,'isClosed']])
Z([[7],[3,'isSimple']])
Z([[7],[3,'bubbleTop']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showReqError']]],[[7],[3,'showPage']]])
Z([[2,'?:'],[[6],[[7],[3,'$loadingData']],[3,'loadingVisible']],[1,'catchtap'],[1,'']])
Z([3,'container container_picc'])
Z([a,[3,'min-height: calc(100% - '],[[7],[3,'navTop']],[3,'px)']])
Z([[2,'||'],[[2,'&&'],[[7],[3,'isVirtualGoods']],[[2,'||'],[[2,'!'],[[7],[3,'virtualGoodsData']]],[[2,'&&'],[[7],[3,'virtualGoodsData']],[[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'isVideoMember']]]]]],[[2,'&&'],[[2,'&&'],[[7],[3,'virtualGoodsData']],[[6],[[7],[3,'virtualGoodsData']],[3,'isVideoMember']]],[[6],[[7],[3,'virtualGoodsData']],[3,'showVideoAccountInput']]]])
Z([[9],[[10],[[7],[3,'virtualGoodsData']]],[[8],'disableUserAction',[[7],[3,'disableUserAction']]]])
Z([3,'virtualGoods'])
Z(z[5])
Z([[9],[[9],[[9],[[9],[[10],[[7],[3,'orderCheckoutAddressData']]],[[8],'addressVo',[[7],[3,'addressVo']]]],[[8],'skuVo',[[7],[3,'skuVo']]]],[[8],'shippingVo',[[7],[3,'shippingVo']]]],[[8],'realNameAuthData',[[7],[3,'realNameAuthData']]]])
Z([3,'orderCheckoutAddress'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[10],[[7],[3,'orderCheckoutGoodsData']]],[[8],'serviceVoObj',[[7],[3,'serviceVoObj']]]],[[8],'goodsVo',[[7],[3,'goodsVo']]]],[[8],'mallVo',[[7],[3,'mallVo']]]],[[8],'skuVo',[[7],[3,'skuVo']]]],[[8],'promotionVo',[[7],[3,'promotionVo']]]],[[8],'virtualGoodsData',[[7],[3,'virtualGoodsData']]]])
Z([3,'orderCheckoutGoods'])
Z([[7],[3,'isDepositGoods']])
Z([[10],[[7],[3,'stepVo']]])
Z([3,'stepPrepay'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'category']]])
Z([[9],[[8],'serviceVo',[[7],[3,'serviceVo']]],[[8],'serviceVoObj',[[7],[3,'serviceVoObj']]]])
Z([3,'serviceVoModule'])
Z([[7],[3,'showFreeCoupon']])
Z([[9],[[9],[[10],[[7],[3,'payVo']]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'usePapPay',[[7],[3,'usePapPay']]]])
Z([3,'payChanne'])
Z(z[22])
Z([[10],[[7],[3,'stepProtocolVo']]])
Z([3,'stepProtocol'])
Z([3,'selCellBar'])
Z([[7],[3,'cellBarVo']])
Z([[7],[3,'goodsVo']])
Z([[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'showPiccModal',[[7],[3,'showPiccModal']]]])
Z([3,'piccInfoModal'])
Z([[9],[[9],[[9],[[9],[[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'subPayText',[[7],[3,'subPayText']]]],[[8],'payText',[[7],[3,'payText']]]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'orderCheckoutAddressData',[[7],[3,'orderCheckoutAddressData']]]],[[8],'orderVo',[[7],[3,'orderVo']]]])
Z([3,'orderCheckoutPayBar'])
Z([[9],[[9],[[9],[[9],[[10],[[7],[3,'mallCouponsListData']]],[[8],'promotionEventVo',[[7],[3,'promotionEventVo']]]],[[10],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']]]],[[8],'mallVo',[[7],[3,'mallVo']]]],[[10],[[7],[3,'goodsVo']]]])
Z([3,'mallCouponsList'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[7],[3,'myMallCouponsData']]],[[10],[[7],[3,'orderCheckoutGoodsData']]]],[[10],[[7],[3,'mallCouponsListData']]]],[[8],'showMoreCouponBtn',[[7],[3,'showMoreCouponBtn']]]],[[10],[[7],[3,'promotionVo']]]],[[8],'promotionEventVo',[[7],[3,'promotionEventVo']]]],[[8],'mallVo',[[7],[3,'mallVo']]]],[[10],[[7],[3,'goodsVo']]]])
Z([3,'orderCheckoutCoupons'])
Z([[9],[[9],[[9],[[10],[[7],[3,'myPlatformCouponsData']]],[[8],'showCouponLoadMore',[[7],[3,'showCouponLoadMore']]]],[[10],[[7],[3,'promotionVo']]]],[[8],'showSuperEditBtn',[[7],[3,'showSuperEditBtn']]]])
Z(z[44])
Z(z[5])
Z([[10],[[7],[3,'addressData']]])
Z([3,'editAddress'])
Z([[9],[[9],[[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'realNameAuthData',[[7],[3,'realNameAuthData']]]],[[8],'showDiscountTips',[[7],[3,'showDiscountTips']]]],[[8],'totalDiscountStd',[[7],[3,'totalDiscountStd']]]])
Z([3,'couponDiscountTips'])
Z([[10],[[7],[3,'colCouponModal']]])
Z([3,'collectionCouponModal'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'isVirtualGoods',[[7],[3,'isVirtualGoods']]],[[8],'isIpx',[[7],[3,'isIpx']]]],[[10],[[7],[3,'goodsVo']]]],[[8],'showPayWindow',[[7],[3,'showPayWindow']]]],[[8],'showPayContainer',[[7],[3,'showPayContainer']]]],[[8],'orderTimeTitle',[[7],[3,'orderTimeTitle']]]],[[8],'orderTimeList',[[7],[3,'orderTimeList']]]],[[8],'orderTimeMini',[[7],[3,'orderTimeMini']]]],[[8],'payVo',[[7],[3,'payVo']]]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'discountAmount',[[7],[3,'discountAmount']]]],[[8],'discountAmountStd',[[7],[3,'discountAmountStd']]]],[[8],'orderVo',[[7],[3,'orderVo']]]],[[8],'orderCheckoutAddressData',[[7],[3,'orderCheckoutAddressData']]]],[[8],'realNameAuthData',[[7],[3,'realNameAuthData']]]])
Z([3,'orderCheckoutPayWin'])
Z([[7],[3,'displayQuickEntry']])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
Z([[10],[[7],[3,'mallCouponToastData']]])
Z([3,'mallCouponToast'])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([[7],[3,'showReqError']])
Z([3,'reLoad'])
Z([[7],[3,'displayToast']])
Z([[7],[3,'toastMessage']])
Z([[7],[3,'topValueInFixedPosition']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_69);return __WXML_GLOBAL__.ops_cached.$gwx2_69
}
function gz$gwx2_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_70)return __WXML_GLOBAL__.ops_cached.$gwx2_70
__WXML_GLOBAL__.ops_cached.$gwx2_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'realNameAuthData']],[3,'needNameAuth']]],[[6],[[7],[3,'discountTipsData']],[3,'showDiscountTips']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_70);return __WXML_GLOBAL__.ops_cached.$gwx2_70
}
function gz$gwx2_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_71)return __WXML_GLOBAL__.ops_cached.$gwx2_71
__WXML_GLOBAL__.ops_cached.$gwx2_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'goodsVo']],[3,'isVirtualGoods']],[[2,'||'],[[2,'!'],[[7],[3,'virtualGoodsData']]],[[2,'&&'],[[7],[3,'virtualGoodsData']],[[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'isVideoMember']]]]]],[[2,'&&'],[[2,'&&'],[[7],[3,'virtualGoodsData']],[[6],[[7],[3,'virtualGoodsData']],[3,'isVideoMember']]],[[6],[[7],[3,'virtualGoodsData']],[3,'showVideoAccountInput']]]])
Z([3,'oc-virtual-goods-area'])
Z([3,'_clickMobileInput'])
Z([3,'oc-virtual-goods'])
Z([[2,'?:'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']],[1,'margin-bottom: 0;'],[1,'']])
Z([[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'actionDisable']]],[[2,'!'],[[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']]]])
Z([[6],[[7],[3,'virtualGoodsData']],[3,'hasMobile']])
Z([[2,'>'],[[6],[[6],[[7],[3,'virtualGoodsData']],[3,'records']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'virtualGoodsData']],[3,'records']])
Z([3,'mobile'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_71);return __WXML_GLOBAL__.ops_cached.$gwx2_71
}
function gz$gwx2_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_72)return __WXML_GLOBAL__.ops_cached.$gwx2_72
__WXML_GLOBAL__.ops_cached.$gwx2_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'stepVo']],[3,'depositPrice']],[[6],[[7],[3,'stepVo']],[3,'inflatePrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_72);return __WXML_GLOBAL__.ops_cached.$gwx2_72
}
function gz$gwx2_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_73)return __WXML_GLOBAL__.ops_cached.$gwx2_73
__WXML_GLOBAL__.ops_cached.$gwx2_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_73);return __WXML_GLOBAL__.ops_cached.$gwx2_73
}
function gz$gwx2_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_74)return __WXML_GLOBAL__.ops_cached.$gwx2_74
__WXML_GLOBAL__.ops_cached.$gwx2_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'bubble']])
Z([[6],[[7],[3,'goodsVo']],[3,'isVirtualGoods']])
Z([[7],[3,'isSimple']])
Z([[7],[3,'bubbleTop']])
Z([3,'onNavBack'])
Z([3,'customNavitionBar'])
Z([[7],[3,'navTitle']])
Z([1,true])
Z([[2,'!'],[[7],[3,'isSupportCustomNav']]])
Z([[2,'?:'],[[6],[[7],[3,'$loadingData']],[3,'loadingVisible']],[1,'catchtap'],[1,'']])
Z([3,'container'])
Z([[2,'!'],[[7],[3,'showPage']]])
Z([a,[3,'min-height: calc(100% - '],[[7],[3,'navTop']],[3,'px)']])
Z([[7],[3,'actionDisable']])
Z([3,'setVirtualGoodsData'])
Z([[7],[3,'goodsVo']])
Z([3,'virtualGoods'])
Z([[7],[3,'virtualGoodsData']])
Z(z[13])
Z([[7],[3,'addressVo']])
Z([3,'addAddress'])
Z([3,'addressEditAddress'])
Z([3,'loadRefresh'])
Z([3,'showNameAuthWinClick'])
Z([3,'submitIdCardInfo'])
Z([3,'wechatAddAddress'])
Z([3,'orderCheckoutAddress'])
Z([[7],[3,'realNameAuthData']])
Z([[2,'!'],[[6],[[7],[3,'goodsVo']],[3,'isVirtualGoods']]])
Z(z[13])
Z([3,'clickMallCouponBar'])
Z([3,'goodsRefresh'])
Z([[7],[3,'confirmMessage']])
Z([[7],[3,'disableEditNum']])
Z(z[15])
Z([[7],[3,'mallVo']])
Z([[7],[3,'promotionVo']])
Z([[2,'<='],[[6],[[7],[3,'goodsVo']],[3,'goodsNumber']],[1,1]])
Z([[7],[3,'serviceVoObj']])
Z([[7],[3,'skuVo']])
Z(z[17])
Z([[2,'&&'],[[7],[3,'stepVo']],[[6],[[7],[3,'stepVo']],[3,'isDepositGoods']]])
Z([[7],[3,'stepVo']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'category']]])
Z(z[20])
Z(z[22])
Z([3,'updateServiceVo'])
Z([[7],[3,'serviceVo']])
Z([3,'selectPayType'])
Z([[7],[3,'payVo']])
Z(z[41])
Z([3,'selStepProtocal'])
Z(z[42])
Z([3,'selCellBar'])
Z([[7],[3,'cellBarVo']])
Z(z[15])
Z([[7],[3,'isIpx']])
Z(z[19])
Z([3,'payBarPay'])
Z(z[56])
Z([[7],[3,'orderVo']])
Z([3,'hideMallCouponsList'])
Z([3,'showColCouponModal'])
Z([3,'takeMerchantCoupon'])
Z(z[15])
Z([[7],[3,'mallCouponsListData']])
Z(z[35])
Z([[7],[3,'promotionEventVo']])
Z(z[36])
Z([3,'hideCouponsWin'])
Z([3,'loadMorePlatCoupons'])
Z(z[22])
Z([3,'showMallCouponsList'])
Z([[7],[3,'couponsWinData']])
Z(z[15])
Z([[7],[3,'mallCoupons']])
Z(z[65])
Z(z[35])
Z(z[36])
Z(z[28])
Z([[10],[[7],[3,'addressData']]])
Z([3,'editAddress'])
Z([[7],[3,'discountTipsData']])
Z(z[56])
Z(z[27])
Z([3,'closeColCoupon'])
Z([3,'doLikeMall'])
Z([3,'getColCoupon'])
Z([3,'showColCoupon'])
Z(z[63])
Z([3,'collectionCoupon'])
Z(z[35])
Z(z[19])
Z([3,'closePayWindow'])
Z([3,'payWinEditAddress'])
Z([3,'payWinPay'])
Z(z[48])
Z([[7],[3,'countTimeData']])
Z(z[15])
Z(z[56])
Z(z[60])
Z(z[49])
Z([[7],[3,'payWindowData']])
Z(z[27])
Z([[10],[[7],[3,'mallCouponToastData']]])
Z([3,'mallCouponToast'])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
Z([[7],[3,'display']])
Z([[7],[3,'toastMessage']])
Z([[7],[3,'showError']])
Z([3,'reLoad'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_74);return __WXML_GLOBAL__.ops_cached.$gwx2_74
}
function gz$gwx2_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_75)return __WXML_GLOBAL__.ops_cached.$gwx2_75
__WXML_GLOBAL__.ops_cached.$gwx2_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPage']])
Z([3,'container container_picc'])
Z([3,'pay_info'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'serviceVo']],[[6],[[7],[3,'serviceVo']],[3,'displayTitle']]],[[6],[[7],[3,'serviceVo']],[3,'displayContent']]])
Z([3,'info_option coupon_info'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']],[3,'category']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'promotionVo']],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'displayName']]],[[6],[[6],[[7],[3,'promotionVo']],[3,'platformCouponVo']],[3,'category']]])
Z([[9],[[9],[[9],[[10],[[7],[3,'payVo']]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'hideHelpPay',[1,true]]],[[8],'usePapPay',[[7],[3,'usePapPay']]]])
Z([3,'payChanne'])
Z([[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'showPiccModal',[[7],[3,'showPiccModal']]]])
Z([3,'piccInfoModal'])
Z([[9],[[9],[[9],[[9],[[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[8],'subPayText',[[7],[3,'subPayText']]]],[[8],'payText',[[7],[3,'payText']]]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'orderCheckoutAddressData',[[7],[3,'orderCheckoutAddressData']]]],[[8],'orderVo',[[7],[3,'orderVo']]]])
Z([3,'orderCheckoutPayBar'])
Z([[9],[[9],[[9],[[9],[[10],[[7],[3,'mallCouponsListData']]],[[8],'promotionEventVo',[[7],[3,'promotionEventVo']]]],[[10],[[6],[[7],[3,'promotionVo']],[3,'merchantCouponVo']]]],[[8],'mallVo',[[7],[3,'mallVo']]]],[[10],[[7],[3,'stepGoodsVo']]]])
Z([3,'mallCouponsList'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[7],[3,'myMallCouponsData']]],[[10],[[7],[3,'orderCheckoutGoodsData']]]],[[10],[[7],[3,'mallCouponsListData']]]],[[8],'showMoreCouponBtn',[[7],[3,'showMoreCouponBtn']]]],[[10],[[7],[3,'promotionVo']]]],[[8],'promotionEventVo',[[7],[3,'promotionEventVo']]]],[[8],'mallVo',[[7],[3,'mallVo']]]],[[10],[[7],[3,'stepGoodsVo']]]])
Z([3,'orderCheckoutCoupons'])
Z([[9],[[9],[[9],[[10],[[7],[3,'myPlatformCouponsData']]],[[8],'showCouponLoadMore',[[7],[3,'showCouponLoadMore']]]],[[10],[[7],[3,'promotionVo']]]],[[8],'showSuperEditBtn',[[7],[3,'showSuperEditBtn']]]])
Z(z[16])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'isIpx',[[7],[3,'isIpx']]],[[10],[[7],[3,'stepGoodsVo']]]],[[8],'showPayWindow',[[7],[3,'showPayWindow']]]],[[8],'showPayContainer',[[7],[3,'showPayContainer']]]],[[8],'orderTimeTitle',[[7],[3,'orderTimeTitle']]]],[[8],'orderTimeList',[[7],[3,'orderTimeList']]]],[[8],'orderTimeMini',[[7],[3,'orderTimeMini']]]],[[8],'payVo',[[7],[3,'payVo']]]],[[8],'selectedAppId',[[7],[3,'selectedAppId']]]],[[8],'discountAmount',[[7],[3,'discountAmount']]]],[[8],'discountAmountStd',[[7],[3,'discountAmountStd']]]],[[8],'orderVo',[[7],[3,'orderVo']]]],[[8],'usePapPay',[[7],[3,'usePapPay']]]])
Z([3,'orderCheckoutPayWin'])
Z([[10],[[7],[3,'mallCouponToastData']]])
Z([3,'mallCouponToast'])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_75);return __WXML_GLOBAL__.ops_cached.$gwx2_75
}
function gz$gwx2_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_76)return __WXML_GLOBAL__.ops_cached.$gwx2_76
__WXML_GLOBAL__.ops_cached.$gwx2_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'status']],[1,'complete']])
Z([[2,'==='],[[7],[3,'status']],[1,'going']])
Z([[7],[3,'leftTimeStr']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_76);return __WXML_GLOBAL__.ops_cached.$gwx2_76
}
function gz$gwx2_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_77)return __WXML_GLOBAL__.ops_cached.$gwx2_77
__WXML_GLOBAL__.ops_cached.$gwx2_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'group'])
Z([[7],[3,'list']])
Z([3,'groupOrderId'])
Z([3,'click'])
Z([3,'group-item'])
Z([[7],[3,'index']])
Z([[7],[3,'group']])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'group']],[3,'isOnSale']]],[[2,'<='],[[6],[[7],[3,'group']],[3,'quantity']],[1,0]]])
Z([3,'group-detail-users'])
Z([3,'user'])
Z([[6],[[7],[3,'group']],[3,'users']])
Z([3,'index'])
Z([[2,'||'],[[2,'<='],[[6],[[7],[3,'group']],[3,'customerNum']],[1,3]],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'group']],[3,'customerNum']],[1,3]],[[2,'<'],[[7],[3,'index']],[1,2]]]])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'group']],[3,'customerNum']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_77);return __WXML_GLOBAL__.ops_cached.$gwx2_77
}
function gz$gwx2_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_78)return __WXML_GLOBAL__.ops_cached.$gwx2_78
__WXML_GLOBAL__.ops_cached.$gwx2_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onReachBottom'])
Z([[6],[[6],[[7],[3,'tabStatus']],[[7],[3,'curTabIndex']]],[3,'canLoadMore']])
Z([[7],[3,'displayLoadMore']])
Z([[2,'?:'],[[6],[[6],[[7],[3,'tabStatus']],[[7],[3,'curTabIndex']]],[3,'canLoadMore']],[1,'正在加载中...'],[1,'没有更多了...']])
Z([1,800])
Z([[7],[3,'showMainPage']])
Z([3,'team-header'])
Z([3,'header'])
Z([[7],[3,'leftTime']])
Z([[7],[3,'status']])
Z([3,'clickItem'])
Z([[7],[3,'groupOrderList']])
Z([3,'items'])
Z([3,'position:relative;min-height:800rpx'])
Z(z[5])
Z([3,'didClickSegmentTab'])
Z([[7],[3,'segmentConfig']])
Z([[7],[3,'segmentRenderObj']])
Z([[2,'>'],[[6],[[7],[3,'groupGoodsList']],[3,'length']],[1,0]])
Z([[7],[3,'groupGoodsList']])
Z([3,'index'])
Z([3,'gotoGoodsDetail'])
Z([3,'imprTracking'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'tabKey']])
Z([1,true])
Z([3,'onModalCancel'])
Z([3,'onModalConfirm'])
Z([[7],[3,'cancelText']])
Z([[7],[3,'confirmText']])
Z([[7],[3,'content']])
Z([[7],[3,'contentAlign']])
Z([[7],[3,'showCancel']])
Z([[7],[3,'title']])
Z([[7],[3,'displayDialog']])
Z([[9],[[8],'loadingVisible',[[7],[3,'loadingVisible']]],[[8],'loadingStyle',[[7],[3,'loadingStyle']]]])
Z([3,'loading-tpl'])
Z([[7],[3,'displayQuickEntry']])
Z([[7],[3,'showError']])
Z([3,'reLoad'])
Z([[7],[3,'display']])
Z([[7],[3,'toastMessage']])
Z([3,'84'])
Z([[7],[3,'displayGoTop']])
Z(z[40])
Z([3,'pdd-container'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_78);return __WXML_GLOBAL__.ops_cached.$gwx2_78
}
function gz$gwx2_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_79)return __WXML_GLOBAL__.ops_cached.$gwx2_79
__WXML_GLOBAL__.ops_cached.$gwx2_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'invalidGoodsList']])
Z([[6],[[7],[3,'item']],[3,'goodsId']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'labels']],[[6],[[6],[[7],[3,'item']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[7],[3,'item']],[3,'labels']],[1,0]],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_79);return __WXML_GLOBAL__.ops_cached.$gwx2_79
}
function gz$gwx2_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_80)return __WXML_GLOBAL__.ops_cached.$gwx2_80
__WXML_GLOBAL__.ops_cached.$gwx2_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'goodsVo']],[3,'labels']],[[6],[[6],[[7],[3,'goodsVo']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[7],[3,'goodsVo']],[3,'labels']],[1,0]],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_80);return __WXML_GLOBAL__.ops_cached.$gwx2_80
}
function gz$gwx2_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_81)return __WXML_GLOBAL__.ops_cached.$gwx2_81
__WXML_GLOBAL__.ops_cached.$gwx2_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cartItem'])
Z([[7],[3,'cartItemList']])
Z([[6],[[6],[[7],[3,'cartItem']],[3,'mallVo']],[3,'id']])
Z([3,'oc-goods'])
Z([[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'cartItem']],[3,'mallVo']],[3,'labels']],[[6],[[6],[[6],[[7],[3,'cartItem']],[3,'mallVo']],[3,'labels']],[1,0]]],[[6],[[6],[[6],[[6],[[7],[3,'cartItem']],[3,'mallVo']],[3,'labels']],[1,0]],[3,'label_url']]])
Z([[6],[[7],[3,'cartItem']],[3,'goodsList']])
Z([[6],[[7],[3,'item']],[3,'goodsId']])
Z([[7],[3,'actionDisable']])
Z([3,'refreshGoodsNumber'])
Z([[7],[3,'confirmMessage']])
Z([[6],[[7],[3,'item']],[3,'goodsNumber']])
Z([[7],[3,'item']])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'limitStatus']],[1,1]],[[6],[[7],[3,'item']],[3,'orderlimit']]])
Z([[2,'==='],[[7],[3,'index']],[[2,'-'],[[6],[[6],[[7],[3,'cartItem']],[3,'goodsList']],[3,'length']],[1,1]]])
Z([[6],[[7],[3,'cartItem']],[3,'mallVo']])
Z([[7],[3,'orderVo']])
Z([[2,'<='],[[6],[[7],[3,'item']],[3,'goodsNumber']],[1,1]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'cartItem']],[3,'merchantCouponVo']],[[6],[[6],[[7],[3,'cartItem']],[3,'merchantCouponVo']],[3,'displayName']]],[[2,'!='],[[6],[[6],[[7],[3,'cartItem']],[3,'merchantCouponVo']],[3,'promotionStatus']],[1,4]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_81);return __WXML_GLOBAL__.ops_cached.$gwx2_81
}
function gz$gwx2_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_82)return __WXML_GLOBAL__.ops_cached.$gwx2_82
__WXML_GLOBAL__.ops_cached.$gwx2_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[6],[[7],[3,'$loadingData']],[3,'loadingVisible']],[1,'catchtap'],[1,'']])
Z([3,'container order-checkout-container'])
Z([[2,'!'],[[7],[3,'showPage']]])
Z([[7],[3,'addressVo']])
Z([3,'addAddress'])
Z([3,'editAddress'])
Z([3,'loadRefresh'])
Z([3,'wechatAddAddress'])
Z([1,true])
Z([[7],[3,'actionDisable']])
Z([3,'clickMallCouponBar'])
Z(z[6])
Z([[7],[3,'cartItemList']])
Z([[7],[3,'confirmMessage']])
Z([[7],[3,'orderVo']])
Z([[7],[3,'invalidGoodsList']])
Z([[2,'&&'],[[7],[3,'platformCouponVo']],[[6],[[7],[3,'platformCouponVo']],[3,'displayName']]])
Z([3,'selectPayType'])
Z([[7],[3,'payVo']])
Z([[7],[3,'isIpx']])
Z(z[3])
Z([3,'payBarEvent'])
Z(z[12])
Z(z[19])
Z(z[14])
Z([3,'hideMallCouponsList'])
Z([3,'takeMerchantCoupon'])
Z([[7],[3,'goodsVo']])
Z([[7],[3,'mallCouponsListData']])
Z([[7],[3,'mallVo']])
Z([[7],[3,'promotionEventVo']])
Z([[7],[3,'promotionVo']])
Z([3,'hideCouponsWin'])
Z(z[6])
Z([3,'showMallCouponsList'])
Z([[7],[3,'couponsWinData']])
Z([[7],[3,'mallCoupons']])
Z(z[28])
Z([[10],[[7],[3,'addressData']]])
Z(z[5])
Z(z[3])
Z([3,'closePayWindow'])
Z(z[5])
Z([3,'payWinEvent'])
Z(z[17])
Z([[7],[3,'countTimeData']])
Z(z[27])
Z(z[19])
Z(z[14])
Z(z[18])
Z([[7],[3,'payWindowData']])
Z([[10],[[7],[3,'mallCouponToastData']]])
Z([3,'mallCouponToast'])
Z([[10],[[7],[3,'$modalData']]])
Z([3,'model_dialog'])
Z([[10],[[7],[3,'$loadingData']]])
Z([3,'loading-tpl'])
Z([[7],[3,'display']])
Z([[7],[3,'toastMessage']])
Z([[7],[3,'showError']])
Z([3,'reLoad'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_82);return __WXML_GLOBAL__.ops_cached.$gwx2_82
}
__WXML_GLOBAL__.ops_set.$gwx2=z;
__WXML_GLOBAL__.ops_init.$gwx2=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./package_c/addresses/address_item.wxml','./package_c/addresses/addresses.wxml','/package_c/components/edit_address/edit_address.wxml','./address_item.wxml','/components/modal_dialog/modal_dialog.wxml','/components/loading/loading.wxml','./package_c/components/collection_coupon/collection_coupon.wxml','./package_c/components/deposit_rule_tip/deposit_rule_tip.wxml','./package_c/components/duoduo_toast/duoduo_toast.wxml','./package_c/components/edit_address/edit_address.wxml','./package_c/components/group_guide/group_guide.wxml','./package_c/components/order_checkout_address/order_checkout_address.wxml','/package_c/components/real_name_auth/real_name_auth.wxml','./package_c/components/order_checkout_coupons/order_checkout_coupons.wxml','./package_c/components/order_checkout_goods/order_checkout_goods.wxml','./package_c/components/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml','./package_c/components/order_checkout_pay/order_checkout_pay.wxml','./package_c/components/order_checkout_pay_win/order_checkout_pay_win.wxml','/components/help_pay/help_pay.wxml','./package_c/components/order_checkout_picc/order_checkout_picc.wxml','./package_c/components/real_name_auth/real_name_auth.wxml','./package_c/components/screen_shot_share/screen_shot_share.wxml','./package_c/components/service_vo/service_vo.wxml','./package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.wxml','./package_c/components_order_checkout/collection_coupon/collection_coupon.wxml','./package_c/components_order_checkout/order_checkout_address/order_checkout_address.wxml','./package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml','./package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.wxml','./package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml','./package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.wxml','./package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.wxml','./package_c/components_order_checkout/service_vo/service_vo.wxml','./package_c/goods/bottom_notice/bottom_notice_component.wxml','./package_c/goods/common/show_more_tpl.wxml','./package_c/goods/coupons/coupons_modal.wxml','./package_c/goods/coupons/mall_coupons.wxml','/package_c/components/collection_coupon/collection_coupon.wxml','./package_c/goods/coupons/promotion_coupons.wxml','./package_c/goods/gallery/detail_gallery_component.wxml','./package_c/goods/gallery/top_gallery_component.wxml','./package_c/goods/goods.wxml','/components/mall_coupon_toast/mall_coupon_toast.wxml','/package_c/components/deposit_rule_tip/deposit_rule_tip.wxml','/package_c/components/screen_shot_share/screen_shot_share.wxml','/components/pdd_action_sheet/pdd_action_sheet.wxml','/components/popup_modal/popup_modal.wxml','/package_c/components/group_guide/group_guide.wxml','/package_c/components/duoduo_toast/duoduo_toast.wxml','./goods_info/goods_info.wxml','./goods_info/goods_property.wxml','./coupons/promotion_coupons.wxml','./coupons/mall_coupons.wxml','./mall_service/mall_service.wxml','./coupons/coupons_modal.wxml','./mall_recommend/mall_recommend.wxml','./package_c/goods/goods_answer/answer_component.wxml','./package_c/goods/goods_info/collage.wxml','./goods_name.wxml','./package_c/goods/goods_info/deposit.wxml','./package_c/goods/goods_info/duoduo.wxml','./package_c/goods/goods_info/goods_info.wxml','./deposit.wxml','./spike.wxml','./yard_sold_out.wxml','./collage.wxml','./subsidy.wxml','./duoduo.wxml','./normal.wxml','./package_c/goods/goods_info/goods_name.wxml','./package_c/goods/goods_info/goods_property.wxml','./package_c/goods/goods_info/normal.wxml','./package_c/goods/goods_info/spike.wxml','./package_c/goods/goods_info/subsidy.wxml','./package_c/goods/goods_info/yard_sold_out.wxml','./package_c/goods/goods_reviews/reviews_component.wxml','../common/show_more_tpl.wxml','./package_c/goods/local_group/local_group_component.wxml','./package_c/goods/mall_recommend/mall_recommend.wxml','./package_c/goods/mall_service/mall_service.wxml','./package_c/goods/play_rules.wxml','./package_c/group/group.wxml','./package_c/group/group_button/group_button.wxml','./package_c/group/group_fullback/group_fullback.wxml','./package_c/group/group_goods/group_goods.wxml','./package_c/group/group_join/group_join.wxml','./package_c/group/group_normal/group_normal.wxml','./package_c/group/group_normal/group_service/group_service.wxml','./package_c/group/group_not_sale/group_not_sale.wxml','./package_c/group/group_notice/group_notice.wxml','./package_c/group/group_success/group_success.wxml','./package_c/group/group_users/group_users.wxml','./package_c/group/group_zone_tips/group_zone_tips.wxml','./package_c/group/local_groups/local_groups.wxml','./package_c/group/time_line/time_line.wxml','./package_c/order_checkout/component/coupon_discount_tips/coupon_discount_tips.wxml','./package_c/order_checkout/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml','./package_c/order_checkout/component/step_prepay/step_prepay.wxml','./package_c/order_checkout/component/step_protocol/step_protocol.wxml','./package_c/order_checkout/order_checkout.wxml','/package_c/components/order_checkout_address/order_checkout_address.wxml','/package_c/components/order_checkout_goods/order_checkout_goods.wxml','/package_c/components/order_checkout_coupons/order_checkout_coupons.wxml','./component/step_prepay/step_prepay.wxml','./component/step_protocol/step_protocol.wxml','/package_c/components/order_checkout_pay/order_checkout_pay.wxml','/package_c/components/order_checkout_picc/order_checkout_picc.wxml','./component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml','/package_c/components/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml','/package_c/components/order_checkout_pay_win/order_checkout_pay_win.wxml','/package_c/components/service_vo/service_vo.wxml','./component/coupon_discount_tips/coupon_discount_tips.wxml','./package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.wxml','./package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml','./package_c/order_checkout_new/component/step_vo/step_vo.wxml','./package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.wxml','./package_c/order_checkout_new/order_checkout_new.wxml','/package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml','./package_c/order_checkout_step/order_checkout_step.wxml','../../wx_components/common_template/common_template.wxml','./package_c/team_list/group_header/group_header.wxml','./package_c/team_list/group_list/group_list.wxml','./package_c/team_list/team_list.wxml','./package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.wxml','./package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.wxml','./package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.wxml','./package_c/transac_batch_checkout/transac_batch_checkout.wxml'];d_[x[0]]={}
d_[x[0]]["addressItem"]=function(e,s,r,gg){
var z=gz$gwx2_1()
var b=x[0]+':addressItem'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/addresses/address_item.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtap',1,'class',1,'data-index',2],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',4,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_2()
var xC=e_[x[1]].i
_ai(xC,x[2],e_,x[1],8,2)
_ai(xC,x[3],e_,x[1],9,2)
_ai(xC,x[4],e_,x[1],10,2)
_ai(xC,x[5],e_,x[1],11,2)
var cF=_mz(z,'scroll-view',['class',0,'hidden',1,'scrollY',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,3,e,s,gg)){hG.wxVkey=1
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
var bO=_oz(z,7,lK,oJ,gg)
var oP=_gd(x[1],bO,e_,d_)
if(oP){
var xQ=_1z(z,6,lK,oJ,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[1],18,66)
return aL
}
oH.wxXCkey=2
_2z(z,4,cI,e,s,gg,oH,'item','index','addressId')
}
else{hG.wxVkey=2
}
hG.wxXCkey=1
_(r,cF)
var oD=_v()
_(r,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
var oR=_v()
_(oD,oR)
if(_oz(z,9,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
}
var fS=_n('quick-entry-forward-index')
_rz(z,fS,'display',10,e,s,gg)
_(r,fS)
var cT=_v()
_(r,cT)
var hU=_oz(z,12,e,s,gg)
var oV=_gd(x[1],hU,e_,d_)
if(oV){
var cW=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[1],50,14)
var oX=_v()
_(r,oX)
var lY=_oz(z,14,e,s,gg)
var aZ=_gd(x[1],lY,e_,d_)
if(aZ){
var t1=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[1],52,14)
var e2=_mz(z,'toast',['display',15,'toastMessage',1,'topValueInFixedPosition',2],[],e,s,gg)
_(r,e2)
var b3=_v()
_(r,b3)
var o4=_oz(z,19,e,s,gg)
var x5=_gd(x[1],o4,e_,d_)
if(x5){
var o6=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[1],58,14)
var fE=_v()
_(r,fE)
if(_oz(z,20,e,s,gg)){fE.wxVkey=1
var f7=_n('wifi-error')
_rz(z,f7,'bind:reloadTap',21,e,s,gg)
_(fE,f7)
}
oD.wxXCkey=1
fE.wxXCkey=1
fE.wxXCkey=3
xC.pop()
xC.pop()
xC.pop()
xC.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2],x[3],x[4],x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["collectionCouponModal"]=function(e,s,r,gg){
var z=gz$gwx2_3()
var b=x[6]+':collectionCouponModal'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/collection_coupon/collection_coupon.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'view',['catchtouchmove',2,'class',1],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
else{fE.wxVkey=2
var cF=_v()
_(fE,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
fE.wxXCkey=1
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx2_3()
return r
}
e_[x[6]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["depositRuleTip"]=function(e,s,r,gg){
var z=gz$gwx2_4()
var b=x[7]+':depositRuleTip'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/deposit_rule_tip/deposit_rule_tip.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtap',1,'class',1,'hidden',2],[],e,s,gg)
var xC=_mz(z,'view',['catchtap',4,'class',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx2_4()
return r
}
e_[x[7]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["duoduoToast"]=function(e,s,r,gg){
var z=gz$gwx2_5()
var b=x[8]+':duoduoToast'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/duoduo_toast/duoduo_toast.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx2_5()
return r
}
e_[x[8]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["editAddress"]=function(e,s,r,gg){
var z=gz$gwx2_6()
var b=x[9]+':editAddress'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/edit_address/edit_address.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtap',1,'catchtouchmove',1,'class',2,'hidden',3],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',5,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var cF=_v()
_(oB,cF)
var hG=_oz(z,9,e,s,gg)
var oH=_gd(x[9],hG,e_,d_)
if(oH){
var cI=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[9],78,22)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx2_6()
var oBB=e_[x[9]].i
_ai(oBB,x[5],e_,x[9],1,1)
oBB.pop()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[10]]={}
d_[x[10]]["groupGuide"]=function(e,s,r,gg){
var z=gz$gwx2_7()
var b=x[10]+':groupGuide'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/group_guide/group_guide.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[10]]["timeLine"]=function(e,s,r,gg){
var z=gz$gwx2_7()
var b=x[10]+':timeLine'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/group_guide/group_guide.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',2,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx2_7()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
d_[x[11]]["orderCheckoutAddress"]=function(e,s,r,gg){
var z=gz$gwx2_8()
var b=x[11]+':orderCheckoutAddress'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_address/order_checkout_address.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,6,e,s,gg)){cI.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
_(oB,hG)
var oD=_v()
_(oB,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
var oJ=_mz(z,'form',['bindsubmit',8,'class',1,'reportSubmit',2],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_v()
_(bO,xQ)
if(_oz(z,13,eN,tM,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return bO
}
lK.wxXCkey=2
_2z(z,11,aL,e,s,gg,lK,'item','index','title')
_(oD,oJ)
}
var fE=_v()
_(oB,fE)
if(_oz(z,14,e,s,gg)){fE.wxVkey=1
var oR=_v()
_(fE,oR)
var fS=_oz(z,16,e,s,gg)
var cT=_gd(x[11],fS,e_,d_)
if(cT){
var hU=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[11],63,22)
}
var cF=_v()
_(oB,cF)
if(_oz(z,17,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx2_8()
var tEB=e_[x[11]].i
_ai(tEB,x[12],e_,x[11],7,2)
tEB.pop()
return r
}
e_[x[11]]={f:m7,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["orderCheckoutCoupons"]=function(e,s,r,gg){
var z=gz$gwx2_9()
var b=x[13]+':orderCheckoutCoupons'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_coupons/order_checkout_coupons.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtap',1,'class',1,'hidden',2],[],e,s,gg)
var xC=_mz(z,'scroll-view',['catchtap',4,'class',1],[],e,s,gg)
var oD=_mz(z,'view',['class',6,'id',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
else if(_oz(z,9,e,s,gg)){fE.wxVkey=2
var cI=_n('view')
_rz(z,cI,'class',10,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_v()
_(bO,xQ)
if(_oz(z,14,eN,tM,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return bO
}
lK.wxXCkey=2
_2z(z,12,aL,e,s,gg,lK,'item','index','itemList')
}
else{oJ.wxVkey=2
var oR=_mz(z,'view',['catchtap',15,'class',1,'data-coupon-id',2,'data-event-id',3,'data-is-mall-coupon',4],[],e,s,gg)
var fS=_v()
_(oR,fS)
var cT=function(oV,hU,cW,gg){
var lY=_v()
_(cW,lY)
if(_oz(z,22,oV,hU,gg)){lY.wxVkey=1
var aZ=_v()
_(lY,aZ)
if(_oz(z,23,oV,hU,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
}
lY.wxXCkey=1
return cW
}
fS.wxXCkey=2
_2z(z,20,cT,e,s,gg,fS,'item','index','itemList')
_(oJ,oR)
}
oJ.wxXCkey=1
_(fE,cI)
}
var t1=_n('view')
_rz(z,t1,'class',24,e,s,gg)
var b3=_n('view')
var o4=_v()
_(b3,o4)
if(_oz(z,25,e,s,gg)){o4.wxVkey=1
var o6=_n('view')
_rz(z,o6,'class',26,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,27,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,28,e,s,gg)){c8.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
_(o4,o6)
}
var x5=_v()
_(b3,x5)
if(_oz(z,29,e,s,gg)){x5.wxVkey=1
var h9=_n('view')
_rz(z,h9,'class',30,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,31,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_mz(z,'form',['bindsubmit',35,'class',1,'data-coupon-id',2,'data-is-mall-coupon',3,'reportSubmit',4],[],aDB,lCB,gg)
var oHB=_n('view')
_rz(z,oHB,'class',40,aDB,lCB,gg)
var oJB=_n('view')
_rz(z,oJB,'class',41,aDB,lCB,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,42,aDB,lCB,gg)){fKB.wxVkey=1
var cLB=_v()
_(fKB,cLB)
if(_oz(z,43,aDB,lCB,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
}
else{fKB.wxVkey=2
}
fKB.wxXCkey=1
_(oHB,oJB)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,44,aDB,lCB,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
_(bGB,oHB)
_(tEB,bGB)
return tEB
}
cAB.wxXCkey=2
_2z(z,33,oBB,e,s,gg,cAB,'coupon','index','{{coupon.couponId}}')
o0.wxXCkey=1
_(x5,h9)
}
o4.wxXCkey=1
x5.wxXCkey=1
_(t1,b3)
var e2=_v()
_(t1,e2)
if(_oz(z,45,e,s,gg)){e2.wxVkey=1
}
var hMB=_n('view')
_rz(z,hMB,'class',46,e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,47,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(hMB,cOB)
if(_oz(z,48,e,s,gg)){cOB.wxVkey=1
}
oNB.wxXCkey=1
cOB.wxXCkey=1
_(t1,hMB)
e2.wxXCkey=1
_(oD,t1)
var cF=_v()
_(oD,cF)
if(_oz(z,49,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,50,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(oD,oH)
if(_oz(z,51,e,s,gg)){oH.wxVkey=1
var oPB=_n('view')
_rz(z,oPB,'class',52,e,s,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,53,e,s,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(oPB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_v()
_(oVB,oXB)
if(_oz(z,57,bUB,eTB,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
return oVB
}
aRB.wxXCkey=2
_2z(z,55,tSB,e,s,gg,aRB,'disCoupon','index','{{disCoupon.couponId}}')
lQB.wxXCkey=1
_(oH,oPB)
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,oD)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx2_9()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["orderCheckoutGoods"]=function(e,s,r,gg){
var z=gz$gwx2_10()
var b=x[14]+':orderCheckoutGoods'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_goods/order_checkout_goods.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
var hG=_v()
_(xC,hG)
if(_oz(z,4,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_oz(z,7,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx2_10()
return r
}
e_[x[14]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["mallCouponsList"]=function(e,s,r,gg){
var z=gz$gwx2_11()
var b=x[15]+':mallCouponsList'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtap',1,'class',1,'hidden',2],[],e,s,gg)
var xC=_mz(z,'scroll-view',['catchtap',4,'class',1],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',6,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
var hG=_mz(z,'view',['catchtap',8,'class',1,'data-event-id',2,'data-is-mall-coupon',3],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
var cI=_v()
_(oH,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,15,aL,lK,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return tM
}
cI.wxXCkey=2
_2z(z,13,oJ,e,s,gg,cI,'item','index','itemList')
}
else{oH.wxVkey=2
var oP=_v()
_(oH,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_v()
_(cT,oV)
if(_oz(z,18,fS,oR,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
return cT
}
oP.wxXCkey=2
_2z(z,16,xQ,e,s,gg,oP,'item','index','itemList')
}
oH.wxXCkey=1
_(fE,hG)
}
var cW=_v()
_(oD,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_v()
_(t1,b3)
if(_oz(z,21,aZ,lY,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
return t1
}
cW.wxXCkey=2
_2z(z,19,oX,e,s,gg,cW,'item','index','{{item.couponId}}')
var cF=_v()
_(oD,cF)
if(_oz(z,22,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(xC,oD)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx2_11()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["orderCheckoutPayBar"]=function(e,s,r,gg){
var z=gz$gwx2_12()
var b=x[16]+':orderCheckoutPayBar'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_pay/order_checkout_pay.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
else{xC.wxVkey=2
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx2_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
d_[x[17]]["orderCheckoutPayWin"]=function(e,s,r,gg){
var z=gz$gwx2_13()
var b=x[17]+':orderCheckoutPayWin'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_pay_win/order_checkout_pay_win.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catchtouchmove',1,'class',1,'hidden',2],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',4,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
var cF=_oz(z,7,e,s,gg)
var hG=_gd(x[17],cF,e_,d_)
if(hG){
var oH=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[17],34,30)
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(xC,cI)
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx2_13()
var fKB=e_[x[17]].i
_ai(fKB,x[18],e_,x[17],1,1)
fKB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["piccInfoModal"]=function(e,s,r,gg){
var z=gz$gwx2_14()
var b=x[19]+':piccInfoModal'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_picc/order_checkout_picc.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[19],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[19],9,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[19]]["piccModal"]=function(e,s,r,gg){
var z=gz$gwx2_14()
var b=x[19]+':piccModal'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/order_checkout_picc/order_checkout_picc.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,4,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx2_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
d_[x[20]]["realNameAuthInfo"]=function(e,s,r,gg){
var z=gz$gwx2_15()
var b=x[20]+':realNameAuthInfo'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/real_name_auth/real_name_auth.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[20],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[20],25,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[20]]["realNameAuthWin"]=function(e,s,r,gg){
var z=gz$gwx2_15()
var b=x[20]+':realNameAuthWin'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/real_name_auth/real_name_auth.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,4,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx2_15()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
d_[x[21]]["screenShotShare"]=function(e,s,r,gg){
var z=gz$gwx2_16()
var b=x[21]+':screenShotShare'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/screen_shot_share/screen_shot_share.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx2_16()
return r
}
e_[x[21]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
d_[x[22]]["serviceVoModule"]=function(e,s,r,gg){
var z=gz$gwx2_17()
var b=x[22]+':serviceVoModule'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/service_vo/service_vo.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[22],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[22],3,18)
var cF=_v()
_(r,cF)
var hG=_oz(z,4,e,s,gg)
var oH=_gd(x[22],hG,e_,d_)
if(oH){
var cI=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[22],5,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["serviceVoBlock"]=function(e,s,r,gg){
var z=gz$gwx2_17()
var b=x[22]+':serviceVoBlock'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/service_vo/service_vo.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,6,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["serviceVoWin"]=function(e,s,r,gg){
var z=gz$gwx2_17()
var b=x[22]+':serviceVoWin'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components/service_vo/service_vo.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx2_17()
return r
}
e_[x[22]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx2_18()
var lQB=_v()
_(r,lQB)
if(_oz(z,0,e,s,gg)){lQB.wxVkey=1
}
lQB.wxXCkey=1
return r
}
e_[x[23]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx2_19()
var tSB=_v()
_(r,tSB)
if(_oz(z,0,e,s,gg)){tSB.wxVkey=1
var eTB=_mz(z,'view',['catchtouchmove',1,'class',1],[],e,s,gg)
var bUB=_n('view')
_rz(z,bUB,'class',3,e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,4,e,s,gg)){oVB.wxVkey=1
}
else{oVB.wxVkey=2
var xWB=_v()
_(oVB,xWB)
if(_oz(z,5,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
}
oVB.wxXCkey=1
_(eTB,bUB)
_(tSB,eTB)
}
tSB.wxXCkey=1
return r
}
e_[x[24]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx2_20()
var fYB=_v()
_(r,fYB)
if(_oz(z,0,e,s,gg)){fYB.wxVkey=1
var cZB=_n('view')
_rz(z,cZB,'class',1,e,s,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,2,e,s,gg)){h1B.wxVkey=1
var o4B=_v()
_(h1B,o4B)
if(_oz(z,3,e,s,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,4,e,s,gg)){o2B.wxVkey=1
var l5B=_mz(z,'form',['bindsubmit',5,'class',1,'reportSubmit',2],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_v()
_(o0B,oBC)
if(_oz(z,10,b9B,e8B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
return o0B
}
a6B.wxXCkey=2
_2z(z,8,t7B,e,s,gg,a6B,'item','index','title')
_(o2B,l5B)
}
var fCC=_mz(z,'real-name-auth',['actionDisable',11,'addressVo',1,'bind:showNameAuthWinClick',2,'bind:submitIdCardInfo',3,'id',4,'realNameAuthData',5],[],e,s,gg)
_(cZB,fCC)
var c3B=_v()
_(cZB,c3B)
if(_oz(z,17,e,s,gg)){c3B.wxVkey=1
}
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
_(fYB,cZB)
}
fYB.wxXCkey=1
fYB.wxXCkey=3
return r
}
e_[x[25]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
d_[x[26]]["couponItem"]=function(e,s,r,gg){
var z=gz$gwx2_21()
var b=x[26]+':couponItem'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',76,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',77,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,78,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
if(_oz(z,79,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
else{fE.wxVkey=2
}
fE.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,80,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx2_21()
var hEC=_mz(z,'view',['catchtap',0,'class',1,'hidden',1],[],e,s,gg)
var oFC=_mz(z,'scroll-view',['catchtap',3,'class',1],[],e,s,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,5,e,s,gg)){cGC.wxVkey=1
var oHC=_n('view')
_rz(z,oHC,'class',6,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,7,e,s,gg)){lIC.wxVkey=1
var tKC=_mz(z,'view',['catchtap',8,'class',1,'data-event-id',2,'data-type',3],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
var bMC=function(xOC,oNC,oPC,gg){
var cRC=_v()
_(oPC,cRC)
if(_oz(z,14,xOC,oNC,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
return oPC
}
eLC.wxXCkey=2
_2z(z,12,bMC,e,s,gg,eLC,'item','index','displayName')
_(lIC,tKC)
}
var hSC=_n('view')
_rz(z,hSC,'class',15,e,s,gg)
var oTC=_v()
_(hSC,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_v()
_(aXC,eZC)
if(_oz(z,19,lWC,oVC,gg)){eZC.wxVkey=1
var b1C=_mz(z,'form',['bindsubmit',20,'class',1,'data-coupon-id',2,'data-type',3,'reportSubmit',4],[],lWC,oVC,gg)
var o2C=_v()
_(b1C,o2C)
var x3C=_oz(z,26,lWC,oVC,gg)
var o4C=_gd(x[26],x3C,e_,d_)
if(o4C){
var f5C=_1z(z,25,lWC,oVC,gg) || {}
var cur_globalf=gg.f
o2C.wxXCkey=3
o4C(f5C,f5C,o2C,gg)
gg.f=cur_globalf
}
else _w(x3C,x[26],38,38)
_(eZC,b1C)
}
eZC.wxXCkey=1
return aXC
}
oTC.wxXCkey=2
_2z(z,17,cUC,e,s,gg,oTC,'coupon','index','{{coupon.couponId}}')
var c6C=_v()
_(hSC,c6C)
var h7C=function(c9C,o8C,o0C,gg){
var aBD=_mz(z,'form',['bindsubmit',30,'class',1,'data-coupon-id',2,'data-type',3,'reportSubmit',4],[],c9C,o8C,gg)
var tCD=_v()
_(aBD,tCD)
var eDD=_oz(z,36,c9C,o8C,gg)
var bED=_gd(x[26],eDD,e_,d_)
if(bED){
var oFD=_1z(z,35,c9C,o8C,gg) || {}
var cur_globalf=gg.f
tCD.wxXCkey=3
bED(oFD,oFD,tCD,gg)
gg.f=cur_globalf
}
else _w(eDD,x[26],49,38)
_(o0C,aBD)
return o0C
}
c6C.wxXCkey=2
_2z(z,28,h7C,e,s,gg,c6C,'coupon','index','{{coupon.couponId}}')
_(oHC,hSC)
var xGD=_n('view')
_rz(z,xGD,'class',37,e,s,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,38,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,39,e,s,gg)){fID.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
_(oHC,xGD)
var aJC=_v()
_(oHC,aJC)
if(_oz(z,40,e,s,gg)){aJC.wxVkey=1
var cJD=_v()
_(aJC,cJD)
if(_oz(z,41,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(aJC,hKD)
if(_oz(z,42,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(aJC,oLD)
if(_oz(z,43,e,s,gg)){oLD.wxVkey=1
var cMD=_v()
_(oLD,cMD)
if(_oz(z,44,e,s,gg)){cMD.wxVkey=1
}
cMD.wxXCkey=1
}
cJD.wxXCkey=1
hKD.wxXCkey=1
oLD.wxXCkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(cGC,oHC)
}
else{cGC.wxVkey=2
var oND=_n('view')
_rz(z,oND,'class',45,e,s,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,46,e,s,gg)){lOD.wxVkey=1
var eRD=_mz(z,'view',['catchtap',47,'class',1,'data-event-id',2,'data-type',3],[],e,s,gg)
var bSD=_v()
_(eRD,bSD)
var oTD=function(oVD,xUD,fWD,gg){
var hYD=_v()
_(fWD,hYD)
if(_oz(z,53,oVD,xUD,gg)){hYD.wxVkey=1
}
hYD.wxXCkey=1
return fWD
}
bSD.wxXCkey=2
_2z(z,51,oTD,e,s,gg,bSD,'item','index','displayName')
_(lOD,eRD)
}
var oZD=_v()
_(oND,oZD)
var c1D=function(l3D,o2D,a4D,gg){
var e6D=_mz(z,'form',['bindsubmit',57,'class',1,'data-coupon-id',2,'data-type',3,'reportSubmit',4],[],l3D,o2D,gg)
var b7D=_v()
_(e6D,b7D)
var o8D=_oz(z,63,l3D,o2D,gg)
var x9D=_gd(x[26],o8D,e_,d_)
if(x9D){
var o0D=_1z(z,62,l3D,o2D,gg) || {}
var cur_globalf=gg.f
b7D.wxXCkey=3
x9D(o0D,o0D,b7D,gg)
gg.f=cur_globalf
}
else _w(o8D,x[26],143,38)
_(a4D,e6D)
return a4D
}
oZD.wxXCkey=2
_2z(z,55,c1D,e,s,gg,oZD,'coupon','index','{{coupon.couponId}}')
var aPD=_v()
_(oND,aPD)
if(_oz(z,64,e,s,gg)){aPD.wxVkey=1
}
var fAE=_n('view')
_rz(z,fAE,'class',65,e,s,gg)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,66,e,s,gg)){cBE.wxVkey=1
}
var hCE=_v()
_(fAE,hCE)
if(_oz(z,67,e,s,gg)){hCE.wxVkey=1
}
cBE.wxXCkey=1
hCE.wxXCkey=1
_(oND,fAE)
var tQD=_v()
_(oND,tQD)
if(_oz(z,68,e,s,gg)){tQD.wxVkey=1
var oDE=_n('view')
_rz(z,oDE,'class',69,e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,70,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,71,e,s,gg)){oFE.wxVkey=1
var lGE=_v()
_(oFE,lGE)
var aHE=function(eJE,tIE,bKE,gg){
var xME=_v()
_(bKE,xME)
if(_oz(z,74,eJE,tIE,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
return bKE
}
lGE.wxXCkey=2
_2z(z,72,aHE,e,s,gg,lGE,'item','index','displayName')
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(tQD,oDE)
}
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
_(cGC,oND)
}
cGC.wxXCkey=1
_(hEC,oFC)
_(r,hEC)
return r
}
e_[x[26]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx2_22()
var fOE=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var cPE=_v()
_(fOE,cPE)
if(_oz(z,2,e,s,gg)){cPE.wxVkey=1
var oTE=_v()
_(cPE,oTE)
if(_oz(z,3,e,s,gg)){oTE.wxVkey=1
}
oTE.wxXCkey=1
}
var hQE=_v()
_(fOE,hQE)
if(_oz(z,4,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(fOE,oRE)
if(_oz(z,5,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(fOE,cSE)
if(_oz(z,6,e,s,gg)){cSE.wxVkey=1
}
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
cSE.wxXCkey=1
_(r,fOE)
return r
}
e_[x[27]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
d_[x[28]]["usable-promotion-item"]=function(e,s,r,gg){
var z=gz$gwx2_23()
var b=x[28]+':usable-promotion-item'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,28,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx2_23()
var aVE=_mz(z,'view',['catchtap',0,'class',1,'hidden',1],[],e,s,gg)
var tWE=_mz(z,'scroll-view',['catchtap',3,'class',1],[],e,s,gg)
var eXE=_n('view')
_rz(z,eXE,'class',5,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,6,e,s,gg)){bYE.wxVkey=1
var oZE=_v()
_(bYE,oZE)
if(_oz(z,7,e,s,gg)){oZE.wxVkey=1
var x1E=_v()
_(oZE,x1E)
var o2E=function(c4E,f3E,h5E,gg){
var c7E=_v()
_(h5E,c7E)
if(_oz(z,10,c4E,f3E,gg)){c7E.wxVkey=1
}
c7E.wxXCkey=1
return h5E
}
x1E.wxXCkey=2
_2z(z,8,o2E,e,s,gg,x1E,'item','index','displayName')
}
else{oZE.wxVkey=2
}
var o8E=_v()
_(bYE,o8E)
var l9E=function(tAF,a0E,eBF,gg){
var oDF=_v()
_(eBF,oDF)
var xEF=_oz(z,14,tAF,a0E,gg)
var oFF=_gd(x[28],xEF,e_,d_)
if(oFF){
var fGF=_1z(z,13,tAF,a0E,gg) || {}
var cur_globalf=gg.f
oDF.wxXCkey=3
oFF(fGF,fGF,oDF,gg)
gg.f=cur_globalf
}
else _w(xEF,x[28],26,24)
return eBF
}
o8E.wxXCkey=2
_2z(z,11,l9E,e,s,gg,o8E,'item','index','batchId')
var cHF=_v()
_(bYE,cHF)
var hIF=function(cKF,oJF,oLF,gg){
var aNF=_v()
_(oLF,aNF)
var tOF=_oz(z,18,cKF,oJF,gg)
var ePF=_gd(x[28],tOF,e_,d_)
if(ePF){
var bQF=_1z(z,17,cKF,oJF,gg) || {}
var cur_globalf=gg.f
aNF.wxXCkey=3
ePF(bQF,bQF,aNF,gg)
gg.f=cur_globalf
}
else _w(tOF,x[28],31,24)
return oLF
}
cHF.wxXCkey=2
_2z(z,15,hIF,e,s,gg,cHF,'item','index','batchId')
oZE.wxXCkey=1
}
else{bYE.wxVkey=2
var oRF=_v()
_(bYE,oRF)
if(_oz(z,19,e,s,gg)){oRF.wxVkey=1
var xSF=_v()
_(oRF,xSF)
var oTF=function(cVF,fUF,hWF,gg){
var cYF=_v()
_(hWF,cYF)
if(_oz(z,22,cVF,fUF,gg)){cYF.wxVkey=1
}
cYF.wxXCkey=1
return hWF
}
xSF.wxXCkey=2
_2z(z,20,oTF,e,s,gg,xSF,'item','index','displayName')
}
else{oRF.wxVkey=2
}
var oZF=_v()
_(bYE,oZF)
var l1F=function(t3F,a2F,e4F,gg){
var o6F=_v()
_(e4F,o6F)
var x7F=_oz(z,26,t3F,a2F,gg)
var o8F=_gd(x[28],x7F,e_,d_)
if(o8F){
var f9F=_1z(z,25,t3F,a2F,gg) || {}
var cur_globalf=gg.f
o6F.wxXCkey=3
o8F(f9F,f9F,o6F,gg)
gg.f=cur_globalf
}
else _w(x7F,x[28],50,24)
return e4F
}
oZF.wxXCkey=2
_2z(z,23,l1F,e,s,gg,oZF,'item','index','batchId')
oRF.wxXCkey=1
}
bYE.wxXCkey=1
_(tWE,eXE)
_(aVE,tWE)
_(r,aVE)
return r
}
e_[x[28]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx2_24()
var hAG=_n('view')
_rz(z,hAG,'class',0,e,s,gg)
var oBG=_n('view')
_rz(z,oBG,'class',1,e,s,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,2,e,s,gg)){cCG.wxVkey=1
}
else{cCG.wxVkey=2
var oDG=_v()
_(cCG,oDG)
if(_oz(z,3,e,s,gg)){oDG.wxVkey=1
}
oDG.wxXCkey=1
}
cCG.wxXCkey=1
_(hAG,oBG)
var lEG=_mz(z,'form',['bindsubmit',4,'reportSubmit',1],[],e,s,gg)
var aFG=_v()
_(lEG,aFG)
if(_oz(z,6,e,s,gg)){aFG.wxVkey=1
}
aFG.wxXCkey=1
_(hAG,lEG)
_(r,hAG)
return r
}
e_[x[29]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx2_25()
var eHG=_v()
_(r,eHG)
if(_oz(z,0,e,s,gg)){eHG.wxVkey=1
}
eHG.wxXCkey=1
return r
}
e_[x[30]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx2_26()
var oJG=_v()
_(r,oJG)
if(_oz(z,0,e,s,gg)){oJG.wxVkey=1
}
oJG.wxXCkey=1
return r
}
e_[x[31]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx2_27()
var oLG=_v()
_(r,oLG)
if(_oz(z,0,e,s,gg)){oLG.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){oLG.wxVkey=2
}
else if(_oz(z,2,e,s,gg)){oLG.wxVkey=3
}
else if(_oz(z,3,e,s,gg)){oLG.wxVkey=4
var fMG=_v()
_(oLG,fMG)
if(_oz(z,4,e,s,gg)){fMG.wxVkey=1
}
fMG.wxXCkey=1
}
oLG.wxXCkey=1
return r
}
e_[x[32]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
d_[x[33]]["showMoreTpl"]=function(e,s,r,gg){
var z=gz$gwx2_28()
var b=x[33]+':showMoreTpl'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/goods/common/show_more_tpl.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx2_28()
return r
}
e_[x[33]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx2_29()
var oPG=_v()
_(r,oPG)
if(_oz(z,0,e,s,gg)){oPG.wxVkey=1
var cQG=_mz(z,'view',['catchtap',1,'catchtouchmove',1,'class',2,'hidden',3],[],e,s,gg)
var oRG=_mz(z,'view',['catchtap',5,'catchtouchmove',1,'class',2],[],e,s,gg)
var lSG=_mz(z,'scroll-view',['id',8,'scrollY',1],[],e,s,gg)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,10,e,s,gg)){aTG.wxVkey=1
}
var tUG=_v()
_(lSG,tUG)
if(_oz(z,11,e,s,gg)){tUG.wxVkey=1
}
var eVG=_v()
_(lSG,eVG)
if(_oz(z,12,e,s,gg)){eVG.wxVkey=1
}
var bWG=_v()
_(lSG,bWG)
var oXG=function(oZG,xYG,f1G,gg){
var h3G=_n('view')
_rz(z,h3G,'class',17,oZG,xYG,gg)
var c5G=_v()
_(h3G,c5G)
var o6G=function(a8G,l7G,t9G,gg){
var bAH=_n('view')
_rz(z,bAH,'class',20,a8G,l7G,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,21,a8G,l7G,gg)){oBH.wxVkey=1
}
var xCH=_mz(z,'form',['bindsubmit',22,'reportSubmit',1],[],a8G,l7G,gg)
var oDH=_v()
_(xCH,oDH)
if(_oz(z,24,a8G,l7G,gg)){oDH.wxVkey=1
}
oDH.wxXCkey=1
_(bAH,xCH)
oBH.wxXCkey=1
_(t9G,bAH)
return t9G
}
c5G.wxXCkey=2
_2z(z,18,o6G,oZG,xYG,gg,c5G,'item','index','coupons-item-{{index}}')
var o4G=_v()
_(h3G,o4G)
if(_oz(z,25,oZG,xYG,gg)){o4G.wxVkey=1
}
o4G.wxXCkey=1
_(f1G,h3G)
return f1G
}
bWG.wxXCkey=2
_2z(z,15,oXG,e,s,gg,bWG,'listInfo','listIndex','coupons-list-{{index}}')
aTG.wxXCkey=1
tUG.wxXCkey=1
eVG.wxXCkey=1
_(oRG,lSG)
_(cQG,oRG)
_(oPG,cQG)
}
oPG.wxXCkey=1
return r
}
e_[x[34]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx2_30()
var cFH=e_[x[35]].i
_ai(cFH,x[36],e_,x[35],2,2)
var hGH=_v()
_(r,hGH)
if(_oz(z,0,e,s,gg)){hGH.wxVkey=1
var oHH=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cIH=_mz(z,'form',['bindsubmit',3,'reportSubmit',1],[],e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',5,e,s,gg)
var lKH=_v()
_(oJH,lKH)
if(_oz(z,6,e,s,gg)){lKH.wxVkey=1
var tMH=_v()
_(lKH,tMH)
var eNH=function(oPH,bOH,xQH,gg){
var fSH=_v()
_(xQH,fSH)
if(_oz(z,9,oPH,bOH,gg)){fSH.wxVkey=1
}
fSH.wxXCkey=1
return xQH
}
tMH.wxXCkey=2
_2z(z,7,eNH,e,s,gg,tMH,'item','index','coupons-item-{{index}}')
}
var aLH=_v()
_(oJH,aLH)
if(_oz(z,10,e,s,gg)){aLH.wxVkey=1
}
lKH.wxXCkey=1
aLH.wxXCkey=1
_(cIH,oJH)
_(oHH,cIH)
var cTH=_v()
_(oHH,cTH)
var hUH=_oz(z,12,e,s,gg)
var oVH=_gd(x[35],hUH,e_,d_)
if(oVH){
var cWH=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
cTH.wxXCkey=3
oVH(cWH,cWH,cTH,gg)
gg.f=cur_globalf
}
else _w(hUH,x[35],32,18)
_(hGH,oHH)
}
hGH.wxXCkey=1
cFH.pop()
return r
}
e_[x[35]]={f:m29,j:[],i:[],ti:[x[36]],ic:[]}
d_[x[37]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx2_31()
var lYH=_v()
_(r,lYH)
if(_oz(z,0,e,s,gg)){lYH.wxVkey=1
var aZH=_mz(z,'view',['bindtap',1,'class',1,'style',2],[],e,s,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,4,e,s,gg)){t1H.wxVkey=1
}
t1H.wxXCkey=1
_(lYH,aZH)
}
lYH.wxXCkey=1
return r
}
e_[x[37]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx2_32()
var b3H=_v()
_(r,b3H)
if(_oz(z,0,e,s,gg)){b3H.wxVkey=1
var o4H=_n('view')
_rz(z,o4H,'class',1,e,s,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,2,e,s,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(o4H,o6H)
if(_oz(z,3,e,s,gg)){o6H.wxVkey=1
var c8H=_v()
_(o6H,c8H)
if(_oz(z,4,e,s,gg)){c8H.wxVkey=1
}
c8H.wxXCkey=1
}
var f7H=_v()
_(o4H,f7H)
if(_oz(z,5,e,s,gg)){f7H.wxVkey=1
}
var h9H=_n('view')
_rz(z,h9H,'class',6,e,s,gg)
var o0H=_v()
_(h9H,o0H)
if(_oz(z,7,e,s,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(h9H,cAI)
if(_oz(z,8,e,s,gg)){cAI.wxVkey=1
}
var oBI=_v()
_(h9H,oBI)
if(_oz(z,9,e,s,gg)){oBI.wxVkey=1
}
o0H.wxXCkey=1
cAI.wxXCkey=1
oBI.wxXCkey=1
_(o4H,h9H)
x5H.wxXCkey=1
o6H.wxXCkey=1
f7H.wxXCkey=1
_(b3H,o4H)
}
b3H.wxXCkey=1
return r
}
e_[x[38]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx2_33()
var aDI=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oHI=_mz(z,'swiper',['bindchange',2,'circular',1,'class',2,'current',3,'duration',4],[],e,s,gg)
var xII=_v()
_(oHI,xII)
var oJI=function(cLI,fKI,hMI,gg){
var cOI=_n('swiper-item')
var aRI=_mz(z,'image',['bindload',9,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'catchtap',4,'class',5,'data-download-url',6,'data-index',7,'data-is-video',8,'data-poster',9,'data-url',10,'hidden',11,'mode',12,'src',13,'style',14],[],cLI,fKI,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,24,cLI,fKI,gg)){tSI.wxVkey=1
}
var eTI=_v()
_(aRI,eTI)
if(_oz(z,25,cLI,fKI,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(aRI,bUI)
if(_oz(z,26,cLI,fKI,gg)){bUI.wxVkey=1
}
tSI.wxXCkey=1
eTI.wxXCkey=1
bUI.wxXCkey=1
_(cOI,aRI)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,27,cLI,fKI,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(cOI,lQI)
if(_oz(z,28,cLI,fKI,gg)){lQI.wxVkey=1
}
oPI.wxXCkey=1
lQI.wxXCkey=1
_(hMI,cOI)
return hMI
}
xII.wxXCkey=2
_2z(z,7,oJI,e,s,gg,xII,'item','index','{{item.goods_id}}')
_(aDI,oHI)
var tEI=_v()
_(aDI,tEI)
if(_oz(z,29,e,s,gg)){tEI.wxVkey=1
var oVI=_v()
_(tEI,oVI)
if(_oz(z,30,e,s,gg)){oVI.wxVkey=1
}
oVI.wxXCkey=1
}
var eFI=_v()
_(aDI,eFI)
if(_oz(z,31,e,s,gg)){eFI.wxVkey=1
}
var bGI=_v()
_(aDI,bGI)
if(_oz(z,32,e,s,gg)){bGI.wxVkey=1
}
tEI.wxXCkey=1
eFI.wxXCkey=1
bGI.wxXCkey=1
_(r,aDI)
return r
}
e_[x[39]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx2_34()
var oXI=e_[x[40]].i
_ai(oXI,x[41],e_,x[40],1,1)
_ai(oXI,x[42],e_,x[40],2,2)
_ai(oXI,x[43],e_,x[40],3,2)
_ai(oXI,x[44],e_,x[40],4,2)
_ai(oXI,x[4],e_,x[40],5,2)
_ai(oXI,x[5],e_,x[40],6,2)
_ai(oXI,x[45],e_,x[40],7,2)
_ai(oXI,x[46],e_,x[40],8,2)
_ai(oXI,x[47],e_,x[40],9,2)
var fYI=_v()
_(r,fYI)
if(_oz(z,0,e,s,gg)){fYI.wxVkey=1
var h1I=_mz(z,'custom-navition-bar',['backIconCls',1,'bgStyle',1,'bindback',2,'isShowBottomLine',3,'navTitle',4,'showNavHeight',5],[],e,s,gg)
_(fYI,h1I)
}
else{fYI.wxVkey=2
}
var cZI=_v()
_(r,cZI)
if(_oz(z,7,e,s,gg)){cZI.wxVkey=1
}
else{cZI.wxVkey=2
var o0I=_v()
_(cZI,o0I)
var xAJ=_oz(z,9,e,s,gg)
var oBJ=_gd(x[40],xAJ,e_,d_)
if(oBJ){
var fCJ=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
o0I.wxXCkey=3
oBJ(fCJ,fCJ,o0I,gg)
gg.f=cur_globalf
}
else _w(xAJ,x[40],34,18)
var cDJ=_v()
_(cZI,cDJ)
var hEJ=_oz(z,11,e,s,gg)
var oFJ=_gd(x[40],hEJ,e_,d_)
if(oFJ){
var cGJ=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cDJ.wxXCkey=3
oFJ(cGJ,cGJ,cDJ,gg)
gg.f=cur_globalf
}
else _w(hEJ,x[40],36,18)
var o2I=_v()
_(cZI,o2I)
if(_oz(z,12,e,s,gg)){o2I.wxVkey=1
}
else{o2I.wxVkey=2
var oHJ=_mz(z,'bubble',['bubble',13,'isClosed',1,'isSimple',2,'top',3],[],e,s,gg)
_(o2I,oHJ)
}
var lIJ=_mz(z,'view',['catchtouchmove',17,'class',1,'hidden',2,'style',3],[],e,s,gg)
var eLJ=_mz(z,'top-gallery',['bindloadImage',21,'bindshowVideo',1,'bindtrackingEvent',2,'isSoldOut',3,'pageReady',4,'preloadImgUrl',5,'topGallery',6],[],e,s,gg)
_(lIJ,eLJ)
var aJJ=_v()
_(lIJ,aJJ)
if(_oz(z,28,e,s,gg)){aJJ.wxVkey=1
var bMJ=_n('view')
_rz(z,bMJ,'class',29,e,s,gg)
var oNJ=e_[x[40]].j
_ic(x[48],e_,x[40],e,s,bMJ,gg);
_ic(x[49],e_,x[40],e,s,bMJ,gg);
_ic(x[50],e_,x[40],e,s,bMJ,gg);
_ic(x[51],e_,x[40],e,s,bMJ,gg);
_ic(x[52],e_,x[40],e,s,bMJ,gg);
_ic(x[53],e_,x[40],e,s,bMJ,gg);
var xOJ=_v()
_(bMJ,xOJ)
if(_oz(z,30,e,s,gg)){xOJ.wxVkey=1
}
var oPJ=_v()
_(bMJ,oPJ)
if(_oz(z,31,e,s,gg)){oPJ.wxVkey=1
var oVJ=_mz(z,'local_groups',['bindhandleCardSeleceGood',32,'bindlocalGroupSelectedEvent',1,'bindtrackingEvent',2,'localGroups',3],[],e,s,gg)
_(oPJ,oVJ)
}
var fQJ=_v()
_(bMJ,fQJ)
if(_oz(z,36,e,s,gg)){fQJ.wxVkey=1
var lWJ=_mz(z,'goods-reviews',['bindtoGoodsReviewsEvent',37,'bindtrackingEvent',1,'reviews',2],[],e,s,gg)
_(fQJ,lWJ)
}
var cRJ=_v()
_(bMJ,cRJ)
if(_oz(z,40,e,s,gg)){cRJ.wxVkey=1
var aXJ=_mz(z,'goods-answer',['answers',41,'bindtoGoodsQaListEvent',1,'bindtrackingEvent',2],[],e,s,gg)
_(cRJ,aXJ)
}
_ic(x[54],e_,x[40],e,s,bMJ,gg);
var hSJ=_v()
_(bMJ,hSJ)
if(_oz(z,44,e,s,gg)){hSJ.wxVkey=1
var tYJ=_mz(z,'detail-gallery',['bindtrackingEvent',45,'detailGallery',1,'shouldDetailFold',2],[],e,s,gg)
_(hSJ,tYJ)
}
var oTJ=_v()
_(bMJ,oTJ)
if(_oz(z,48,e,s,gg)){oTJ.wxVkey=1
var eZJ=_n('view')
_rz(z,eZJ,'class',49,e,s,gg)
var b1J=_v()
_(eZJ,b1J)
var o2J=function(o4J,x3J,f5J,gg){
var h7J=_v()
_(f5J,h7J)
if(_oz(z,53,o4J,x3J,gg)){h7J.wxVkey=1
var o8J=_v()
_(h7J,o8J)
if(_oz(z,54,o4J,x3J,gg)){o8J.wxVkey=1
var c9J=_mz(z,'grid-item-v2',['bind:click',55,'bindimpr',1,'goods',2,'index',3,'showPromotionIcon',4,'useImpr',5],[],o4J,x3J,gg)
_(o8J,c9J)
}
o8J.wxXCkey=1
o8J.wxXCkey=3
}
h7J.wxXCkey=1
h7J.wxXCkey=3
return f5J
}
b1J.wxXCkey=4
_2z(z,50,o2J,e,s,gg,b1J,'item','index','rec-{{index}}')
var o0J=_mz(z,'load-more-bar',['canLoadMore',61,'loadingTxt',1],[],e,s,gg)
_(eZJ,o0J)
_(oTJ,eZJ)
}
var cUJ=_v()
_(bMJ,cUJ)
if(_oz(z,63,e,s,gg)){cUJ.wxVkey=1
var lAK=_n('view')
_rz(z,lAK,'class',64,e,s,gg)
var aBK=_v()
_(lAK,aBK)
if(_oz(z,65,e,s,gg)){aBK.wxVkey=1
}
var tCK=_v()
_(lAK,tCK)
if(_oz(z,66,e,s,gg)){tCK.wxVkey=1
}
aBK.wxXCkey=1
tCK.wxXCkey=1
_(cUJ,lAK)
}
var eDK=_mz(z,'bottom_notice',['bestPlatformCouponInfo',67,'bindbottomNoticeEvent',1,'bindcancelZoneFav',2,'bindleftTimeGroupEvent',3,'bindlocalGroupSelectedEvent',4,'bindtrackingEvent',5,'bottomNoticeInfo',6,'leftTimeLocalGroups',7,'zoneTips',8],[],e,s,gg)
_(bMJ,eDK)
xOJ.wxXCkey=1
oPJ.wxXCkey=1
oPJ.wxXCkey=3
fQJ.wxXCkey=1
fQJ.wxXCkey=3
cRJ.wxXCkey=1
cRJ.wxXCkey=3
hSJ.wxXCkey=1
hSJ.wxXCkey=3
oTJ.wxXCkey=1
oTJ.wxXCkey=3
cUJ.wxXCkey=1
oNJ.pop()
oNJ.pop()
oNJ.pop()
oNJ.pop()
oNJ.pop()
oNJ.pop()
oNJ.pop()
_(aJJ,bMJ)
}
var bEK=_mz(z,'go-top',['bindgoTop',76,'bottom',1,'display',2,'diy',3],[],e,s,gg)
_(lIJ,bEK)
var tKJ=_v()
_(lIJ,tKJ)
if(_oz(z,80,e,s,gg)){tKJ.wxVkey=1
var oFK=_mz(z,'view',['catchtap',81,'class',1,'data-batch-id',2],[],e,s,gg)
var xGK=_v()
_(oFK,xGK)
if(_oz(z,84,e,s,gg)){xGK.wxVkey=1
}
xGK.wxXCkey=1
_(tKJ,oFK)
}
aJJ.wxXCkey=1
aJJ.wxXCkey=3
tKJ.wxXCkey=1
_(cZI,lIJ)
var oHK=_v()
_(cZI,oHK)
var fIK=_oz(z,86,e,s,gg)
var cJK=_gd(x[40],fIK,e_,d_)
if(cJK){
var hKK=_1z(z,85,e,s,gg) || {}
var cur_globalf=gg.f
oHK.wxXCkey=3
cJK(hKK,hKK,oHK,gg)
gg.f=cur_globalf
}
else _w(fIK,x[40],150,18)
var c3I=_v()
_(cZI,c3I)
if(_oz(z,87,e,s,gg)){c3I.wxVkey=1
var oLK=_mz(z,'goods-bottom-bar',['bindsubmitFormEvent',88,'bindtrackingEvent',1,'bottomBarData',2,'class',3],[],e,s,gg)
_(c3I,oLK)
}
var cMK=_mz(z,'sku-selector',['bindconfirmOrder',92,'bindhideSkuSelectorEvent',1,'bindselectedSkuChangedEvent',2,'bindsubmitFormEvent',3,'bindtrackingEvent',4,'currentSelect',5,'goodsNumber',6,'showSkuFlag',7,'skuData',8],[],e,s,gg)
_(cZI,cMK)
var o4I=_v()
_(cZI,o4I)
if(_oz(z,101,e,s,gg)){o4I.wxVkey=1
}
var l5I=_v()
_(cZI,l5I)
if(_oz(z,102,e,s,gg)){l5I.wxVkey=1
}
var a6I=_v()
_(cZI,a6I)
if(_oz(z,103,e,s,gg)){a6I.wxVkey=1
}
var t7I=_v()
_(cZI,t7I)
if(_oz(z,104,e,s,gg)){t7I.wxVkey=1
var oNK=_v()
_(t7I,oNK)
var lOK=_oz(z,106,e,s,gg)
var aPK=_gd(x[40],lOK,e_,d_)
if(aPK){
var tQK=_1z(z,105,e,s,gg) || {}
var cur_globalf=gg.f
oNK.wxXCkey=3
aPK(tQK,tQK,oNK,gg)
gg.f=cur_globalf
}
else _w(lOK,x[40],199,18)
}
var e8I=_v()
_(cZI,e8I)
if(_oz(z,107,e,s,gg)){e8I.wxVkey=1
var eRK=_v()
_(e8I,eRK)
var bSK=_oz(z,109,e,s,gg)
var oTK=_gd(x[40],bSK,e_,d_)
if(oTK){
var xUK=_1z(z,108,e,s,gg) || {}
var cur_globalf=gg.f
eRK.wxXCkey=3
oTK(xUK,xUK,eRK,gg)
gg.f=cur_globalf
}
else _w(bSK,x[40],202,18)
}
var oVK=_v()
_(cZI,oVK)
var fWK=_oz(z,111,e,s,gg)
var cXK=_gd(x[40],fWK,e_,d_)
if(cXK){
var hYK=_1z(z,110,e,s,gg) || {}
var cur_globalf=gg.f
oVK.wxXCkey=3
cXK(hYK,hYK,oVK,gg)
gg.f=cur_globalf
}
else _w(fWK,x[40],205,18)
var oZK=_v()
_(cZI,oZK)
var c1K=_oz(z,113,e,s,gg)
var o2K=_gd(x[40],c1K,e_,d_)
if(o2K){
var l3K=_1z(z,112,e,s,gg) || {}
var cur_globalf=gg.f
oZK.wxXCkey=3
o2K(l3K,l3K,oZK,gg)
gg.f=cur_globalf
}
else _w(c1K,x[40],207,18)
var a4K=_v()
_(cZI,a4K)
var t5K=_oz(z,115,e,s,gg)
var e6K=_gd(x[40],t5K,e_,d_)
if(e6K){
var b7K=_1z(z,114,e,s,gg) || {}
var cur_globalf=gg.f
a4K.wxXCkey=3
e6K(b7K,b7K,a4K,gg)
gg.f=cur_globalf
}
else _w(t5K,x[40],209,18)
var o8K=_mz(z,'modal-dialog',['bind:onModalCancel',116,'bind:onModalConfirm',1,'confirmText',2,'content',3,'contentAlign',4,'contentColor',5,'showCancel',6,'visible',7],[],e,s,gg)
_(cZI,o8K)
var b9I=_v()
_(cZI,b9I)
if(_oz(z,124,e,s,gg)){b9I.wxVkey=1
var x9K=_n('wifi-error')
_rz(z,x9K,'bindreloadTap',125,e,s,gg)
_(b9I,x9K)
}
var o0K=_mz(z,'toast',['display',126,'toastMessage',1],[],e,s,gg)
_(cZI,o0K)
var fAL=_mz(z,'resource-place-config',['bottom',128,'data',1,'type',2],[],e,s,gg)
_(cZI,fAL)
o2I.wxXCkey=1
o2I.wxXCkey=3
c3I.wxXCkey=1
c3I.wxXCkey=3
o4I.wxXCkey=1
l5I.wxXCkey=1
a6I.wxXCkey=1
t7I.wxXCkey=1
e8I.wxXCkey=1
b9I.wxXCkey=1
b9I.wxXCkey=3
}
fYI.wxXCkey=1
fYI.wxXCkey=3
cZI.wxXCkey=1
cZI.wxXCkey=3
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
oXI.pop()
return r
}
e_[x[40]]={f:m33,j:[],i:[],ti:[x[41],x[42],x[43],x[44],x[4],x[5],x[45],x[46],x[47]],ic:[]}
d_[x[55]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx2_35()
var hCL=_v()
_(r,hCL)
var oDL=function(oFL,cEL,lGL,gg){
var tIL=_v()
_(lGL,tIL)
if(_oz(z,2,oFL,cEL,gg)){tIL.wxVkey=1
}
tIL.wxXCkey=1
return lGL
}
hCL.wxXCkey=2
_2z(z,0,oDL,e,s,gg,hCL,'item','index','index')
return r
}
e_[x[55]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx2_36()
var bKL=_n('view')
_rz(z,bKL,'class',0,e,s,gg)
var oLL=e_[x[56]].j
var xML=_v()
_(bKL,xML)
if(_oz(z,1,e,s,gg)){xML.wxVkey=1
}
_ic(x[57],e_,x[56],e,s,bKL,gg);
xML.wxXCkey=1
oLL.pop()
_(r,bKL)
return r
}
e_[x[56]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx2_37()
var fOL=e_[x[58]].j
var cPL=_n('view')
_rz(z,cPL,'class',0,e,s,gg)
var oRL=_n('view')
_rz(z,oRL,'class',1,e,s,gg)
var cSL=_v()
_(oRL,cSL)
if(_oz(z,2,e,s,gg)){cSL.wxVkey=1
}
var oTL=_v()
_(oRL,oTL)
if(_oz(z,3,e,s,gg)){oTL.wxVkey=1
}
cSL.wxXCkey=1
oTL.wxXCkey=1
_(cPL,oRL)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,4,e,s,gg)){hQL.wxVkey=1
}
hQL.wxXCkey=1
_(r,cPL)
_ic(x[57],e_,x[58],e,s,r,gg);
fOL.pop()
return r
}
e_[x[58]]={f:m36,j:[],i:[],ti:[],ic:[x[57]]}
d_[x[59]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx2_38()
var aVL=_n('view')
_rz(z,aVL,'class',0,e,s,gg)
var tWL=e_[x[59]].j
var eXL=_v()
_(aVL,eXL)
if(_oz(z,1,e,s,gg)){eXL.wxVkey=1
}
_ic(x[57],e_,x[59],e,s,aVL,gg);
eXL.wxXCkey=1
tWL.pop()
_(r,aVL)
return r
}
e_[x[59]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx2_39()
var oZL=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var x1L=_v()
_(oZL,x1L)
if(_oz(z,2,e,s,gg)){x1L.wxVkey=1
var o2L=e_[x[60]].j
_ic(x[61],e_,x[60],e,s,x1L,gg);
o2L.pop()
}
else if(_oz(z,3,e,s,gg)){x1L.wxVkey=2
var f3L=e_[x[60]].j
_ic(x[62],e_,x[60],e,s,x1L,gg);
f3L.pop()
}
else if(_oz(z,4,e,s,gg)){x1L.wxVkey=3
var c4L=e_[x[60]].j
_ic(x[63],e_,x[60],e,s,x1L,gg);
c4L.pop()
}
else if(_oz(z,5,e,s,gg)){x1L.wxVkey=4
var h5L=e_[x[60]].j
_ic(x[64],e_,x[60],e,s,x1L,gg);
h5L.pop()
}
else if(_oz(z,6,e,s,gg)){x1L.wxVkey=5
var o6L=e_[x[60]].j
_ic(x[65],e_,x[60],e,s,x1L,gg);
o6L.pop()
}
else if(_oz(z,7,e,s,gg)){x1L.wxVkey=6
var c7L=e_[x[60]].j
_ic(x[66],e_,x[60],e,s,x1L,gg);
c7L.pop()
}
else{x1L.wxVkey=7
var o8L=e_[x[60]].j
_ic(x[67],e_,x[60],e,s,x1L,gg);
o8L.pop()
}
x1L.wxXCkey=1
_(r,oZL)
return r
}
e_[x[60]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx2_40()
var a0L=_v()
_(r,a0L)
if(_oz(z,0,e,s,gg)){a0L.wxVkey=1
}
var oDM=_mz(z,'view',['bindtouchend',1,'bindtouchmove',1,'bindtouchstart',2,'class',3],[],e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,5,e,s,gg)){xEM.wxVkey=1
}
var oFM=_v()
_(oDM,oFM)
var fGM=function(hIM,cHM,oJM,gg){
var oLM=_mz(z,'view',['bindtap',8,'class',1,'data-desc',2],[],hIM,cHM,gg)
var lMM=_v()
_(oLM,lMM)
if(_oz(z,11,hIM,cHM,gg)){lMM.wxVkey=1
}
var aNM=_v()
_(oLM,aNM)
if(_oz(z,12,hIM,cHM,gg)){aNM.wxVkey=1
}
lMM.wxXCkey=1
aNM.wxXCkey=1
_(oJM,oLM)
return oJM
}
oFM.wxXCkey=2
_2z(z,6,fGM,e,s,gg,oFM,'item','index','gicon{{index}}')
xEM.wxXCkey=1
_(r,oDM)
var tAM=_v()
_(r,tAM)
if(_oz(z,13,e,s,gg)){tAM.wxVkey=1
}
var eBM=_v()
_(r,eBM)
if(_oz(z,14,e,s,gg)){eBM.wxVkey=1
}
var bCM=_v()
_(r,bCM)
if(_oz(z,15,e,s,gg)){bCM.wxVkey=1
}
a0L.wxXCkey=1
tAM.wxXCkey=1
eBM.wxXCkey=1
bCM.wxXCkey=1
return r
}
e_[x[68]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx2_41()
var ePM=_v()
_(r,ePM)
if(_oz(z,0,e,s,gg)){ePM.wxVkey=1
}
ePM.wxXCkey=1
return r
}
e_[x[69]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx2_42()
var oRM=_n('view')
_rz(z,oRM,'class',0,e,s,gg)
var xSM=e_[x[70]].j
var oTM=_n('view')
_rz(z,oTM,'class',1,e,s,gg)
var cVM=_n('view')
_rz(z,cVM,'class',2,e,s,gg)
var hWM=_v()
_(cVM,hWM)
if(_oz(z,3,e,s,gg)){hWM.wxVkey=1
}
var oXM=_v()
_(cVM,oXM)
if(_oz(z,4,e,s,gg)){oXM.wxVkey=1
}
var cYM=_v()
_(cVM,cYM)
if(_oz(z,5,e,s,gg)){cYM.wxVkey=1
}
var oZM=_v()
_(cVM,oZM)
if(_oz(z,6,e,s,gg)){oZM.wxVkey=1
}
hWM.wxXCkey=1
oXM.wxXCkey=1
cYM.wxXCkey=1
oZM.wxXCkey=1
_(oTM,cVM)
var fUM=_v()
_(oTM,fUM)
if(_oz(z,7,e,s,gg)){fUM.wxVkey=1
}
fUM.wxXCkey=1
_(oRM,oTM)
_ic(x[57],e_,x[70],e,s,oRM,gg);
xSM.pop()
_(r,oRM)
return r
}
e_[x[70]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx2_43()
var a2M=_v()
_(r,a2M)
if(_oz(z,0,e,s,gg)){a2M.wxVkey=1
var t3M=_n('view')
_rz(z,t3M,'class',1,e,s,gg)
var e4M=e_[x[71]].j
var b5M=_v()
_(t3M,b5M)
if(_oz(z,2,e,s,gg)){b5M.wxVkey=1
var x7M=_v()
_(b5M,x7M)
if(_oz(z,3,e,s,gg)){x7M.wxVkey=1
}
x7M.wxXCkey=1
}
else if(_oz(z,4,e,s,gg)){b5M.wxVkey=2
}
_ic(x[57],e_,x[71],e,s,t3M,gg);
var o6M=_v()
_(t3M,o6M)
if(_oz(z,5,e,s,gg)){o6M.wxVkey=1
}
b5M.wxXCkey=1
o6M.wxXCkey=1
e4M.pop()
_(a2M,t3M)
}
a2M.wxXCkey=1
return r
}
e_[x[71]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx2_44()
var f9M=e_[x[72]].j
var c0M=_v()
_(r,c0M)
if(_oz(z,0,e,s,gg)){c0M.wxVkey=1
var hAN=_v()
_(c0M,hAN)
if(_oz(z,1,e,s,gg)){hAN.wxVkey=1
}
hAN.wxXCkey=1
}
_ic(x[57],e_,x[72],e,s,r,gg);
c0M.wxXCkey=1
f9M.pop()
return r
}
e_[x[72]]={f:m43,j:[],i:[],ti:[],ic:[x[57]]}
d_[x[73]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx2_45()
var cCN=_n('view')
_rz(z,cCN,'class',0,e,s,gg)
var oDN=e_[x[73]].j
var lEN=_n('view')
_rz(z,lEN,'class',1,e,s,gg)
var aFN=_v()
_(lEN,aFN)
if(_oz(z,2,e,s,gg)){aFN.wxVkey=1
}
var tGN=_v()
_(lEN,tGN)
if(_oz(z,3,e,s,gg)){tGN.wxVkey=1
}
aFN.wxXCkey=1
tGN.wxXCkey=1
_(cCN,lEN)
_ic(x[57],e_,x[73],e,s,cCN,gg);
oDN.pop()
_(r,cCN)
return r
}
e_[x[73]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx2_46()
var bIN=e_[x[74]].i
_ai(bIN,x[75],e_,x[74],1,1)
var oJN=_v()
_(r,oJN)
if(_oz(z,0,e,s,gg)){oJN.wxVkey=1
var xKN=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var fMN=_v()
_(xKN,fMN)
var cNN=_oz(z,4,e,s,gg)
var hON=_gd(x[74],cNN,e_,d_)
if(hON){
var oPN=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fMN.wxXCkey=3
hON(oPN,oPN,fMN,gg)
gg.f=cur_globalf
}
else _w(cNN,x[74],5,18)
var oLN=_v()
_(xKN,oLN)
if(_oz(z,5,e,s,gg)){oLN.wxVkey=1
var cQN=_v()
_(oLN,cQN)
var oRN=function(aTN,lSN,tUN,gg){
var bWN=_v()
_(tUN,bWN)
if(_oz(z,8,aTN,lSN,gg)){bWN.wxVkey=1
}
bWN.wxXCkey=1
return tUN
}
cQN.wxXCkey=2
_2z(z,6,oRN,e,s,gg,cQN,'item','index','{{index}}')
}
oLN.wxXCkey=1
_(oJN,xKN)
}
oJN.wxXCkey=1
bIN.pop()
return r
}
e_[x[74]]={f:m45,j:[],i:[],ti:[x[75]],ic:[]}
d_[x[76]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx2_47()
var xYN=e_[x[76]].i
_ai(xYN,x[75],e_,x[76],1,1)
var oZN=_v()
_(r,oZN)
if(_oz(z,0,e,s,gg)){oZN.wxVkey=1
var f1N=_n('view')
_rz(z,f1N,'class',1,e,s,gg)
var c2N=_v()
_(f1N,c2N)
var h3N=_oz(z,3,e,s,gg)
var o4N=_gd(x[76],h3N,e_,d_)
if(o4N){
var c5N=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
c2N.wxXCkey=3
o4N(c5N,c5N,c2N,gg)
gg.f=cur_globalf
}
else _w(h3N,x[76],4,18)
var o6N=_mz(z,'form',['bindsubmit',4,'reportSubmit',1],[],e,s,gg)
var l7N=_v()
_(o6N,l7N)
if(_oz(z,6,e,s,gg)){l7N.wxVkey=1
}
l7N.wxXCkey=1
_(f1N,o6N)
_(oZN,f1N)
}
var a8N=_mz(z,'view',['catchtouchmove',7,'class',1,'hidden',2],[],e,s,gg)
var t9N=_mz(z,'scroll-view',['bindscroll',10,'bindscrolltolower',1,'class',2,'scrollY',3],[],e,s,gg)
var e0N=_v()
_(t9N,e0N)
if(_oz(z,14,e,s,gg)){e0N.wxVkey=1
}
e0N.wxXCkey=1
_(a8N,t9N)
_(r,a8N)
oZN.wxXCkey=1
xYN.pop()
return r
}
e_[x[76]]={f:m46,j:[],i:[],ti:[x[75]],ic:[]}
d_[x[77]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx2_48()
var oBO=_v()
_(r,oBO)
if(_oz(z,0,e,s,gg)){oBO.wxVkey=1
var fEO=_mz(z,'view',['catchtap',1,'class',1,'hoverClass',2,'hoverStartTime',3,'hoverStayTime',4],[],e,s,gg)
var cFO=_n('view')
_rz(z,cFO,'class',6,e,s,gg)
var hGO=_v()
_(cFO,hGO)
if(_oz(z,7,e,s,gg)){hGO.wxVkey=1
}
var oHO=_n('view')
_rz(z,oHO,'class',8,e,s,gg)
var cIO=_v()
_(oHO,cIO)
if(_oz(z,9,e,s,gg)){cIO.wxVkey=1
}
var oJO=_v()
_(oHO,oJO)
if(_oz(z,10,e,s,gg)){oJO.wxVkey=1
}
cIO.wxXCkey=1
oJO.wxXCkey=1
_(cFO,oHO)
hGO.wxXCkey=1
_(fEO,cFO)
_(oBO,fEO)
}
var xCO=_v()
_(r,xCO)
if(_oz(z,11,e,s,gg)){xCO.wxVkey=1
}
var oDO=_v()
_(r,oDO)
if(_oz(z,12,e,s,gg)){oDO.wxVkey=1
var lKO=_v()
_(oDO,lKO)
var aLO=function(eNO,tMO,bOO,gg){
var xQO=_mz(z,'view',['catchtap',15,'class',1,'data-goods-id',2,'data-index',3,'data-is-mall-rec',4],[],eNO,tMO,gg)
var oRO=_v()
_(xQO,oRO)
if(_oz(z,20,eNO,tMO,gg)){oRO.wxVkey=1
}
oRO.wxXCkey=1
_(bOO,xQO)
return bOO
}
lKO.wxXCkey=2
_2z(z,13,aLO,e,s,gg,lKO,'item','index','mall-rec-{{index}}')
}
else if(_oz(z,21,e,s,gg)){oDO.wxVkey=2
}
oBO.wxXCkey=1
xCO.wxXCkey=1
oDO.wxXCkey=1
return r
}
e_[x[77]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx2_49()
var cTO=_mz(z,'form',['bindsubmit',0,'reportSubmit',1],[],e,s,gg)
var hUO=_v()
_(cTO,hUO)
if(_oz(z,2,e,s,gg)){hUO.wxVkey=1
var oVO=_mz(z,'button',['class',3,'formType',1],[],e,s,gg)
var cWO=_v()
_(oVO,cWO)
if(_oz(z,5,e,s,gg)){cWO.wxVkey=1
}
var oXO=_v()
_(oVO,oXO)
if(_oz(z,6,e,s,gg)){oXO.wxVkey=1
var lYO=_n('view')
_rz(z,lYO,'class',7,e,s,gg)
var aZO=_v()
_(lYO,aZO)
if(_oz(z,8,e,s,gg)){aZO.wxVkey=1
}
var t1O=_v()
_(lYO,t1O)
var e2O=function(o4O,b3O,x5O,gg){
var f7O=_v()
_(x5O,f7O)
if(_oz(z,11,o4O,b3O,gg)){f7O.wxVkey=1
var c8O=_v()
_(f7O,c8O)
if(_oz(z,12,o4O,b3O,gg)){c8O.wxVkey=1
}
c8O.wxXCkey=1
}
f7O.wxXCkey=1
return x5O
}
t1O.wxXCkey=2
_2z(z,9,e2O,e,s,gg,t1O,'item','index','service-item-{{index}}')
aZO.wxXCkey=1
_(oXO,lYO)
}
cWO.wxXCkey=1
oXO.wxXCkey=1
_(hUO,oVO)
}
hUO.wxXCkey=1
_(r,cTO)
var h9O=_mz(z,'view',['catchtap',13,'catchtouchmove',1,'class',2,'hidden',3],[],e,s,gg)
var o0O=_mz(z,'view',['catchtap',17,'class',1],[],e,s,gg)
var cAP=_mz(z,'scroll-view',['id',19,'scrollY',1],[],e,s,gg)
var oBP=_v()
_(cAP,oBP)
if(_oz(z,21,e,s,gg)){oBP.wxVkey=1
var lCP=_n('view')
_rz(z,lCP,'class',22,e,s,gg)
var aDP=_v()
_(lCP,aDP)
if(_oz(z,23,e,s,gg)){aDP.wxVkey=1
}
var tEP=_v()
_(lCP,tEP)
if(_oz(z,24,e,s,gg)){tEP.wxVkey=1
}
aDP.wxXCkey=1
tEP.wxXCkey=1
_(oBP,lCP)
}
var eFP=_v()
_(cAP,eFP)
var bGP=function(xIP,oHP,oJP,gg){
var cLP=_mz(z,'view',['catchtap',27,'class',1,'data-url',2],[],xIP,oHP,gg)
var hMP=_v()
_(cLP,hMP)
if(_oz(z,30,xIP,oHP,gg)){hMP.wxVkey=1
}
hMP.wxXCkey=1
_(oJP,cLP)
return oJP
}
eFP.wxXCkey=2
_2z(z,25,bGP,e,s,gg,eFP,'item','index','service-detail-{{index}}')
oBP.wxXCkey=1
_(o0O,cAP)
_(h9O,o0O)
_(r,h9O)
return r
}
e_[x[78]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
d_[x[79]]["goodsPlayRules"]=function(e,s,r,gg){
var z=gz$gwx2_50()
var b=x[79]+':goodsPlayRules'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/goods/play_rules.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m49=function(e,s,r,gg){
var z=gz$gwx2_50()
return r
}
e_[x[79]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx2_51()
var oPP=e_[x[80]].i
_ai(oPP,x[4],e_,x[80],1,1)
_ai(oPP,x[5],e_,x[80],2,2)
_ai(oPP,x[45],e_,x[80],3,2)
var eTP=_v()
_(r,eTP)
var bUP=_oz(z,1,e,s,gg)
var oVP=_gd(x[80],bUP,e_,d_)
if(oVP){
var xWP=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eTP.wxXCkey=3
oVP(xWP,xWP,eTP,gg)
gg.f=cur_globalf
}
else _w(bUP,x[80],4,14)
var lQP=_v()
_(r,lQP)
if(_oz(z,2,e,s,gg)){lQP.wxVkey=1
var oXP=_mz(z,'bubble',['bubble',3,'isClosed',1,'isSimple',2,'top',3],[],e,s,gg)
_(lQP,oXP)
}
var fYP=_mz(z,'pdd-list',['bindonReachBottom',7,'canLoadMore',1,'displayLoadMore',2,'loadingTxt',3,'onReachBottomDistance',4],[],e,s,gg)
var cZP=_n('view')
_rz(z,cZP,'slot',12,e,s,gg)
var h1P=_mz(z,'view',['bindtouchstart',13,'class',1],[],e,s,gg)
var o2P=_v()
_(h1P,o2P)
if(_oz(z,15,e,s,gg)){o2P.wxVkey=1
var c3P=_mz(z,'group-no-sale',['bind:click',16,'isLotteryOrFreeTrial',1,'user',2],[],e,s,gg)
_(o2P,c3P)
}
else if(_oz(z,19,e,s,gg)){o2P.wxVkey=2
var o4P=_mz(z,'group-success',['bind:clickGoods',20,'bind:clickOrder',1,'goods',2,'group',3,'paySuccess',4,'user',5],[],e,s,gg)
var a6P=_n('view')
_rz(z,a6P,'slot',26,e,s,gg)
var t7P=_mz(z,'group-fullback',['bind:fullRoute',27,'bind:fullTrack',1,'mall',2,'mallFull',3,'monthCard',4,'platformFull',5],[],e,s,gg)
_(a6P,t7P)
_(o4P,a6P)
var e8P=_n('view')
_rz(z,e8P,'slot',33,e,s,gg)
var b9P=_mz(z,'group-button',['bind:didJump',34,'bind:goActivity',1,'bind:goChagre',2,'bind:goHome',3,'bind:goLottery',4,'bind:reload',5,'bizTag',6,'button',7,'hasLogin',8,'status',9],[],e,s,gg)
_(e8P,b9P)
_(o4P,e8P)
var l5P=_v()
_(o4P,l5P)
if(_oz(z,44,e,s,gg)){l5P.wxVkey=1
var o0P=_n('view')
_rz(z,o0P,'slot',45,e,s,gg)
var xAQ=_mz(z,'time-line',['bindclick',46,'timeLine',1],[],e,s,gg)
_(o0P,xAQ)
_(l5P,o0P)
}
var oBQ=_n('view')
_rz(z,oBQ,'slot',48,e,s,gg)
var fCQ=_v()
_(oBQ,fCQ)
if(_oz(z,49,e,s,gg)){fCQ.wxVkey=1
var cDQ=_mz(z,'zone-tips',['bind:tracking',50,'goodsId',1,'zoneInfo',2],[],e,s,gg)
_(fCQ,cDQ)
}
fCQ.wxXCkey=1
fCQ.wxXCkey=3
_(o4P,oBQ)
l5P.wxXCkey=1
l5P.wxXCkey=3
_(o2P,o4P)
}
else if(_oz(z,53,e,s,gg)){o2P.wxVkey=3
var hEQ=_mz(z,'group-join',['bind:clickGoods',54,'bind:didShare',1,'bind:goActivity',2,'bind:reload',3,'bizTagInfo',4,'expireTime',5,'goods',6,'paySuccess',7,'user',8],[],e,s,gg)
var oFQ=_v()
_(hEQ,oFQ)
if(_oz(z,63,e,s,gg)){oFQ.wxVkey=1
}
var cGQ=_v()
_(hEQ,cGQ)
if(_oz(z,64,e,s,gg)){cGQ.wxVkey=1
var oHQ=_mz(z,'view',['slot',65,'style',1],[],e,s,gg)
var lIQ=_v()
_(oHQ,lIQ)
if(_oz(z,67,e,s,gg)){lIQ.wxVkey=1
var aJQ=_mz(z,'time-line',['bindclick',68,'timeLine',1],[],e,s,gg)
_(lIQ,aJQ)
}
lIQ.wxXCkey=1
lIQ.wxXCkey=3
_(cGQ,oHQ)
}
var tKQ=_n('view')
_rz(z,tKQ,'slot',70,e,s,gg)
var eLQ=_v()
_(tKQ,eLQ)
if(_oz(z,71,e,s,gg)){eLQ.wxVkey=1
var bMQ=_mz(z,'zone-tips',['bind:tracking',72,'goodsId',1,'zoneInfo',2],[],e,s,gg)
_(eLQ,bMQ)
}
eLQ.wxXCkey=1
eLQ.wxXCkey=3
_(hEQ,tKQ)
oFQ.wxXCkey=1
cGQ.wxXCkey=1
cGQ.wxXCkey=3
_(o2P,hEQ)
}
else if(_oz(z,75,e,s,gg)){o2P.wxVkey=4
var oNQ=_mz(z,'group-normal',['bind:clickGoods',76,'goods',1,'group',2,'hasLogin',3,'role',4,'status',5,'user',6],[],e,s,gg)
var oPQ=_n('view')
_rz(z,oPQ,'slot',83,e,s,gg)
var fQQ=_mz(z,'group-button',['bind:didGroup',84,'bind:goLottery',1,'bind:login',2,'bind:sign',3,'button',4,'hasLogin',5,'isNormal',6,'leftUser',7,'status',8],[],e,s,gg)
_(oPQ,fQQ)
_(oNQ,oPQ)
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,93,e,s,gg)){xOQ.wxVkey=1
var cRQ=_n('view')
_rz(z,cRQ,'slot',94,e,s,gg)
var hSQ=_mz(z,'local-groups',['bind:join',95,'list',1],[],e,s,gg)
_(cRQ,hSQ)
_(xOQ,cRQ)
}
xOQ.wxXCkey=1
xOQ.wxXCkey=3
_(o2P,oNQ)
}
var oTQ=_n('view')
_rz(z,oTQ,'class',97,e,s,gg)
var cUQ=_v()
_(oTQ,cUQ)
if(_oz(z,98,e,s,gg)){cUQ.wxVkey=1
var lWQ=_mz(z,'resource-place-config',['bind:handleVisible',99,'data',1,'type',2],[],e,s,gg)
_(cUQ,lWQ)
}
var oVQ=_v()
_(oTQ,oVQ)
if(_oz(z,102,e,s,gg)){oVQ.wxVkey=1
}
cUQ.wxXCkey=1
cUQ.wxXCkey=3
oVQ.wxXCkey=1
_(h1P,oTQ)
o2P.wxXCkey=1
o2P.wxXCkey=3
o2P.wxXCkey=3
o2P.wxXCkey=3
o2P.wxXCkey=3
_(cZP,h1P)
_(fYP,cZP)
var aXQ=_mz(z,'view',['bindtouchstart',103,'class',1,'slot',2,'style',3],[],e,s,gg)
var tYQ=_v()
_(aXQ,tYQ)
if(_oz(z,107,e,s,gg)){tYQ.wxVkey=1
}
var eZQ=_v()
_(aXQ,eZQ)
if(_oz(z,108,e,s,gg)){eZQ.wxVkey=1
var b1Q=_v()
_(eZQ,b1Q)
if(_oz(z,109,e,s,gg)){b1Q.wxVkey=1
}
else{b1Q.wxVkey=2
var o4Q=_mz(z,'segment',['binddidClickSegmentTab',110,'config',1,'renderObj',2],[],e,s,gg)
_(b1Q,o4Q)
}
var o2Q=_v()
_(eZQ,o2Q)
if(_oz(z,113,e,s,gg)){o2Q.wxVkey=1
var f5Q=_n('skeleton')
_rz(z,f5Q,'line',114,e,s,gg)
_(o2Q,f5Q)
}
var x3Q=_v()
_(eZQ,x3Q)
if(_oz(z,115,e,s,gg)){x3Q.wxVkey=1
var c6Q=_v()
_(x3Q,c6Q)
var h7Q=function(c9Q,o8Q,o0Q,gg){
var aBR=_mz(z,'grid-item-v1',['bind:click',118,'bindimpr',1,'goods',2,'index',3,'tabKey',4,'useImpr',5],[],c9Q,o8Q,gg)
_(o0Q,aBR)
return o0Q
}
c6Q.wxXCkey=4
_2z(z,116,h7Q,e,s,gg,c6Q,'item','index','index')
}
else{x3Q.wxVkey=2
}
b1Q.wxXCkey=1
b1Q.wxXCkey=3
o2Q.wxXCkey=1
o2Q.wxXCkey=3
x3Q.wxXCkey=1
x3Q.wxXCkey=3
}
tYQ.wxXCkey=1
eZQ.wxXCkey=1
eZQ.wxXCkey=3
_(fYP,aXQ)
_(r,fYP)
var aRP=_v()
_(r,aRP)
if(_oz(z,124,e,s,gg)){aRP.wxVkey=1
var tCR=_mz(z,'resource-place-config',['bottom',125,'data',1,'type',2],[],e,s,gg)
_(aRP,tCR)
}
var eDR=_v()
_(r,eDR)
var bER=_oz(z,129,e,s,gg)
var oFR=_gd(x[80],bER,e_,d_)
if(oFR){
var xGR=_1z(z,128,e,s,gg) || {}
var cur_globalf=gg.f
eDR.wxXCkey=3
oFR(xGR,xGR,eDR,gg)
gg.f=cur_globalf
}
else _w(bER,x[80],183,14)
var oHR=_v()
_(r,oHR)
var fIR=_oz(z,131,e,s,gg)
var cJR=_gd(x[80],fIR,e_,d_)
if(cJR){
var hKR=_1z(z,130,e,s,gg) || {}
var cur_globalf=gg.f
oHR.wxXCkey=3
cJR(hKR,hKR,oHR,gg)
gg.f=cur_globalf
}
else _w(fIR,x[80],185,14)
var oLR=_n('quick-entry-forward-index')
_rz(z,oLR,'display',132,e,s,gg)
_(r,oLR)
var tSP=_v()
_(r,tSP)
if(_oz(z,133,e,s,gg)){tSP.wxVkey=1
var cMR=_n('wifi-error')
_rz(z,cMR,'bindreloadTap',134,e,s,gg)
_(tSP,cMR)
}
var oNR=_mz(z,'toast',['display',135,'toastMessage',1],[],e,s,gg)
_(r,oNR)
var lOR=_mz(z,'go-top',['bottom',137,'display',1],[],e,s,gg)
_(r,lOR)
var aPR=_mz(z,'risk-control',['bind:handleRefresh',139,'class',1],[],e,s,gg)
_(r,aPR)
var tQR=_mz(z,'sku-selector',['bindconfirmOrder',141,'bindhideSkuSelectorEvent',1,'bindsubmitFormEvent',2,'bindtrackingEvent',3,'currentSelect',4,'showSkuFlag',5,'skuData',6],[],e,s,gg)
_(r,tQR)
var eRR=_mz(z,'modal-dialog',['bind:onModalCancel',148,'bind:onModalConfirm',1,'cancelText',2,'confirmText',3,'contentAlign',4,'showCancel',5,'title',6,'visible',7],[],e,s,gg)
_(r,eRR)
lQP.wxXCkey=1
lQP.wxXCkey=3
aRP.wxXCkey=1
aRP.wxXCkey=3
tSP.wxXCkey=1
tSP.wxXCkey=3
oPP.pop()
oPP.pop()
oPP.pop()
return r
}
e_[x[80]]={f:m50,j:[],i:[],ti:[x[4],x[5],x[45]],ic:[]}
d_[x[81]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx2_52()
var oTR=_v()
_(r,oTR)
if(_oz(z,0,e,s,gg)){oTR.wxVkey=1
var xUR=_v()
_(oTR,xUR)
if(_oz(z,1,e,s,gg)){xUR.wxVkey=1
var oVR=_n('view')
_rz(z,oVR,'class',2,e,s,gg)
var fWR=_v()
_(oVR,fWR)
if(_oz(z,3,e,s,gg)){fWR.wxVkey=1
}
var cXR=_v()
_(oVR,cXR)
if(_oz(z,4,e,s,gg)){cXR.wxVkey=1
}
var hYR=_v()
_(oVR,hYR)
if(_oz(z,5,e,s,gg)){hYR.wxVkey=1
}
fWR.wxXCkey=1
cXR.wxXCkey=1
hYR.wxXCkey=1
_(xUR,oVR)
}
xUR.wxXCkey=1
}
else{oTR.wxVkey=2
}
oTR.wxXCkey=1
return r
}
e_[x[81]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx2_53()
var c1R=_v()
_(r,c1R)
if(_oz(z,0,e,s,gg)){c1R.wxVkey=1
var a4R=_n('view')
_rz(z,a4R,'class',1,e,s,gg)
var t5R=_v()
_(a4R,t5R)
if(_oz(z,2,e,s,gg)){t5R.wxVkey=1
var e6R=_mz(z,'scroll-view',['scrollX',-1,'bindscroll',3,'class',1],[],e,s,gg)
var b7R=_v()
_(e6R,b7R)
var o8R=function(o0R,x9R,fAS,gg){
var hCS=_v()
_(fAS,hCS)
if(_oz(z,7,o0R,x9R,gg)){hCS.wxVkey=1
}
hCS.wxXCkey=1
return fAS
}
b7R.wxXCkey=2
_2z(z,5,o8R,e,s,gg,b7R,'item','index','goodsId')
_(t5R,e6R)
}
else if(_oz(z,8,e,s,gg)){t5R.wxVkey=2
}
t5R.wxXCkey=1
_(c1R,a4R)
}
var o2R=_v()
_(r,o2R)
if(_oz(z,9,e,s,gg)){o2R.wxVkey=1
}
var l3R=_v()
_(r,l3R)
if(_oz(z,10,e,s,gg)){l3R.wxVkey=1
var oDS=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
var cES=_v()
_(oDS,cES)
if(_oz(z,13,e,s,gg)){cES.wxVkey=1
}
cES.wxXCkey=1
_(l3R,oDS)
}
c1R.wxXCkey=1
o2R.wxXCkey=1
l3R.wxXCkey=1
return r
}
e_[x[82]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx2_54()
var lGS=_v()
_(r,lGS)
if(_oz(z,0,e,s,gg)){lGS.wxVkey=1
var aHS=_mz(z,'view',['catchtap',1,'class',1,'data-goods-id',2],[],e,s,gg)
var tIS=_n('view')
_rz(z,tIS,'class',4,e,s,gg)
var bKS=_n('view')
_rz(z,bKS,'class',5,e,s,gg)
var oLS=_v()
_(bKS,oLS)
if(_oz(z,6,e,s,gg)){oLS.wxVkey=1
}
var xMS=_v()
_(bKS,xMS)
if(_oz(z,7,e,s,gg)){xMS.wxVkey=1
}
oLS.wxXCkey=1
xMS.wxXCkey=1
_(tIS,bKS)
var oNS=_n('view')
_rz(z,oNS,'class',8,e,s,gg)
var fOS=_v()
_(oNS,fOS)
if(_oz(z,9,e,s,gg)){fOS.wxVkey=1
}
var cPS=_v()
_(oNS,cPS)
if(_oz(z,10,e,s,gg)){cPS.wxVkey=1
}
var hQS=_v()
_(oNS,hQS)
if(_oz(z,11,e,s,gg)){hQS.wxVkey=1
}
fOS.wxXCkey=1
cPS.wxXCkey=1
hQS.wxXCkey=1
_(tIS,oNS)
var eJS=_v()
_(tIS,eJS)
if(_oz(z,12,e,s,gg)){eJS.wxVkey=1
}
eJS.wxXCkey=1
_(aHS,tIS)
_(lGS,aHS)
}
lGS.wxXCkey=1
return r
}
e_[x[83]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx2_55()
var cSS=_n('view')
_rz(z,cSS,'class',0,e,s,gg)
var oTS=_n('view')
_rz(z,oTS,'class',1,e,s,gg)
var lUS=_v()
_(oTS,lUS)
if(_oz(z,2,e,s,gg)){lUS.wxVkey=1
}
var aVS=_v()
_(oTS,aVS)
if(_oz(z,3,e,s,gg)){aVS.wxVkey=1
}
lUS.wxXCkey=1
aVS.wxXCkey=1
_(cSS,oTS)
var tWS=_n('group-users')
_rz(z,tWS,'user',4,e,s,gg)
_(cSS,tWS)
_(r,cSS)
var eXS=_n('view')
_rz(z,eXS,'class',5,e,s,gg)
var bYS=_v()
_(eXS,bYS)
if(_oz(z,6,e,s,gg)){bYS.wxVkey=1
}
var x1S=_n('slot')
_rz(z,x1S,'name',7,e,s,gg)
_(eXS,x1S)
var oZS=_v()
_(eXS,oZS)
if(_oz(z,8,e,s,gg)){oZS.wxVkey=1
}
bYS.wxXCkey=1
oZS.wxXCkey=1
_(r,eXS)
var o2S=_n('view')
_rz(z,o2S,'class',9,e,s,gg)
var c4S=_n('slot')
_rz(z,c4S,'name',10,e,s,gg)
_(o2S,c4S)
var h5S=_n('slot')
_rz(z,h5S,'name',11,e,s,gg)
_(o2S,h5S)
var f3S=_v()
_(o2S,f3S)
if(_oz(z,12,e,s,gg)){f3S.wxVkey=1
var o6S=_n('group-notice')
_rz(z,o6S,'needBorder',13,e,s,gg)
_(f3S,o6S)
}
f3S.wxXCkey=1
f3S.wxXCkey=3
_(r,o2S)
return r
}
e_[x[84]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx2_56()
var o8S=_n('view')
_rz(z,o8S,'class',0,e,s,gg)
var a0S=_mz(z,'group-goods',['bindclick',1,'copyWriting',1,'goods',2,'isLotteryFail',3],[],e,s,gg)
_(o8S,a0S)
var tAT=_mz(z,'group-service',['comments',5,'mallServices',1],[],e,s,gg)
_(o8S,tAT)
var eBT=_n('group-users')
_rz(z,eBT,'user',7,e,s,gg)
_(o8S,eBT)
var bCT=_n('slot')
_rz(z,bCT,'name',8,e,s,gg)
_(o8S,bCT)
var oDT=_n('slot')
_rz(z,oDT,'name',9,e,s,gg)
_(o8S,oDT)
var l9S=_v()
_(o8S,l9S)
if(_oz(z,10,e,s,gg)){l9S.wxVkey=1
var xET=_n('group-notice')
_(l9S,xET)
}
l9S.wxXCkey=1
l9S.wxXCkey=3
_(r,o8S)
return r
}
e_[x[85]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[86]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx2_57()
var fGT=_v()
_(r,fGT)
if(_oz(z,0,e,s,gg)){fGT.wxVkey=1
}
var hIT=_mz(z,'form',['bindsubmit',1,'reportSubmit',1],[],e,s,gg)
var oJT=_v()
_(hIT,oJT)
if(_oz(z,3,e,s,gg)){oJT.wxVkey=1
}
oJT.wxXCkey=1
_(r,hIT)
var cHT=_v()
_(r,cHT)
if(_oz(z,4,e,s,gg)){cHT.wxVkey=1
var cKT=_mz(z,'view',['catchtap',5,'catchtouchmove',1,'class',2],[],e,s,gg)
var oLT=_mz(z,'mask',['animation',8,'bind:didClickMask',1,'visible',2],[],e,s,gg)
_(cKT,oLT)
var lMT=_v()
_(cKT,lMT)
var aNT=function(ePT,tOT,bQT,gg){
var xST=_v()
_(bQT,xST)
if(_oz(z,13,ePT,tOT,gg)){xST.wxVkey=1
}
xST.wxXCkey=1
return bQT
}
lMT.wxXCkey=2
_2z(z,11,aNT,e,s,gg,lMT,'item','index','pop-service-item-{{index}}')
_(cHT,cKT)
}
fGT.wxXCkey=1
cHT.wxXCkey=1
cHT.wxXCkey=3
return r
}
e_[x[86]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx2_58()
var fUT=_n('view')
_rz(z,fUT,'class',0,e,s,gg)
var cVT=_v()
_(fUT,cVT)
if(_oz(z,1,e,s,gg)){cVT.wxVkey=1
var hWT=_n('group-users')
_rz(z,hWT,'user',2,e,s,gg)
_(cVT,hWT)
}
else{cVT.wxVkey=2
var oXT=_n('group-users')
_rz(z,oXT,'user',3,e,s,gg)
_(cVT,oXT)
}
cVT.wxXCkey=1
cVT.wxXCkey=3
cVT.wxXCkey=3
_(r,fUT)
return r
}
e_[x[87]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx2_59()
var oZT=_v()
_(r,oZT)
if(_oz(z,0,e,s,gg)){oZT.wxVkey=1
var a2T=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var t3T=_n('slot')
_(a2T,t3T)
_(oZT,a2T)
}
var l1T=_v()
_(r,l1T)
if(_oz(z,3,e,s,gg)){l1T.wxVkey=1
var e4T=_mz(z,'view',['catchtap',4,'catchtouchmove',1,'class',2],[],e,s,gg)
var b5T=_mz(z,'mask',['animation',7,'bind:didClickMask',1,'visible',2],[],e,s,gg)
_(e4T,b5T)
_(l1T,e4T)
}
oZT.wxXCkey=1
l1T.wxXCkey=1
l1T.wxXCkey=3
return r
}
e_[x[88]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[89]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx2_60()
var x7T=_n('view')
_rz(z,x7T,'class',0,e,s,gg)
var o8T=_v()
_(x7T,o8T)
if(_oz(z,1,e,s,gg)){o8T.wxVkey=1
var hAU=_mz(z,'group-goods',['bindclick',2,'goods',1,'isLotterySuccess',2],[],e,s,gg)
_(o8T,hAU)
var oBU=_n('group-users')
_rz(z,oBU,'user',5,e,s,gg)
_(o8T,oBU)
var c0T=_v()
_(o8T,c0T)
if(_oz(z,6,e,s,gg)){c0T.wxVkey=1
}
c0T.wxXCkey=1
}
else{o8T.wxVkey=2
var cCU=_v()
_(o8T,cCU)
if(_oz(z,7,e,s,gg)){cCU.wxVkey=1
}
var oDU=_v()
_(o8T,oDU)
if(_oz(z,8,e,s,gg)){oDU.wxVkey=1
}
var lEU=_n('slot')
_rz(z,lEU,'name',9,e,s,gg)
_(o8T,lEU)
var aFU=_mz(z,'group-users',['isSuccess',10,'user',1],[],e,s,gg)
_(o8T,aFU)
cCU.wxXCkey=1
oDU.wxXCkey=1
}
var tGU=_n('slot')
_rz(z,tGU,'name',12,e,s,gg)
_(x7T,tGU)
var eHU=_n('slot')
_rz(z,eHU,'name',13,e,s,gg)
_(x7T,eHU)
var f9T=_v()
_(x7T,f9T)
if(_oz(z,15,e,s,gg)){f9T.wxVkey=1
}
var bIU=_n('slot')
_rz(z,bIU,'name',16,e,s,gg)
_(x7T,bIU)
o8T.wxXCkey=1
o8T.wxXCkey=3
o8T.wxXCkey=3
f9T.wxXCkey=1
_(r,x7T)
return r
}
e_[x[89]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx2_61()
var xKU=_n('view')
_rz(z,xKU,'class',0,e,s,gg)
var fMU=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var cNU=_v()
_(fMU,cNU)
var hOU=function(cQU,oPU,oRU,gg){
var aTU=_v()
_(oRU,aTU)
if(_oz(z,6,cQU,oPU,gg)){aTU.wxVkey=1
}
aTU.wxXCkey=1
return oRU
}
cNU.wxXCkey=2
_2z(z,4,hOU,e,s,gg,cNU,'user','index','avatar')
_(xKU,fMU)
var oLU=_v()
_(xKU,oLU)
if(_oz(z,7,e,s,gg)){oLU.wxVkey=1
var tUU=_n('view')
_rz(z,tUU,'class',8,e,s,gg)
var eVU=_mz(z,'mask',['animation',9,'bind:didClickMask',1,'visible',2],[],e,s,gg)
_(tUU,eVU)
var bWU=_mz(z,'scroll-view',['class',12,'id',1,'scrollY',2],[],e,s,gg)
var oXU=_v()
_(bWU,oXU)
if(_oz(z,15,e,s,gg)){oXU.wxVkey=1
}
var xYU=_v()
_(bWU,xYU)
var oZU=function(c2U,f1U,h3U,gg){
var c5U=_v()
_(h3U,c5U)
if(_oz(z,19,c2U,f1U,gg)){c5U.wxVkey=1
}
c5U.wxXCkey=1
return h3U
}
xYU.wxXCkey=2
_2z(z,17,oZU,e,s,gg,xYU,'user','index','avater')
oXU.wxXCkey=1
_(tUU,bWU)
_(oLU,tUU)
}
oLU.wxXCkey=1
oLU.wxXCkey=3
_(r,xKU)
return r
}
e_[x[90]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[91]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx2_62()
var l7U=_v()
_(r,l7U)
if(_oz(z,0,e,s,gg)){l7U.wxVkey=1
var a8U=_n('slot')
_(l7U,a8U)
}
l7U.wxXCkey=1
return r
}
e_[x[91]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[92]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx2_63()
var e0U=_v()
_(r,e0U)
if(_oz(z,0,e,s,gg)){e0U.wxVkey=1
}
e0U.wxXCkey=1
return r
}
e_[x[92]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[93]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx2_64()
var oBV=_n('view')
_rz(z,oBV,'class',0,e,s,gg)
var xCV=_v()
_(oBV,xCV)
if(_oz(z,1,e,s,gg)){xCV.wxVkey=1
}
var oDV=_v()
_(oBV,oDV)
if(_oz(z,2,e,s,gg)){oDV.wxVkey=1
}
xCV.wxXCkey=1
oDV.wxXCkey=1
_(r,oBV)
return r
}
e_[x[93]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
d_[x[94]]["couponDiscountTips"]=function(e,s,r,gg){
var z=gz$gwx2_65()
var b=x[94]+':couponDiscountTips'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/order_checkout/component/coupon_discount_tips/coupon_discount_tips.wxml"],"",1)
if(p_[b]){_wl(b,x[94]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m64=function(e,s,r,gg){
var z=gz$gwx2_65()
return r
}
e_[x[94]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[95]]={}
d_[x[95]]["virtualGoods"]=function(e,s,r,gg){
var z=gz$gwx2_66()
var b=x[95]+':virtualGoods'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/order_checkout/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml"],"",1)
if(p_[b]){_wl(b,x[95]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_mz(z,'view',['catchtap',2,'class',1,'style',2],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,8,e,s,gg)){xC.wxVkey=1
var oH=_v()
_(xC,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
if(_oz(z,11,lK,oJ,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
return aL
}
oH.wxXCkey=2
_2z(z,9,cI,e,s,gg,oH,'item','index','mobile')
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m65=function(e,s,r,gg){
var z=gz$gwx2_66()
return r
}
e_[x[95]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[96]]={}
d_[x[96]]["stepPrepay"]=function(e,s,r,gg){
var z=gz$gwx2_67()
var b=x[96]+':stepPrepay'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/order_checkout/component/step_prepay/step_prepay.wxml"],"",1)
if(p_[b]){_wl(b,x[96]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m66=function(e,s,r,gg){
var z=gz$gwx2_67()
return r
}
e_[x[96]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[97]]={}
d_[x[97]]["stepProtocol"]=function(e,s,r,gg){
var z=gz$gwx2_68()
var b=x[97]+':stepProtocol'
r.wxVkey=b
gg.f=$gdc(f_["./package_c/order_checkout/component/step_protocol/step_protocol.wxml"],"",1)
if(p_[b]){_wl(b,x[97]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m67=function(e,s,r,gg){
var z=gz$gwx2_68()
return r
}
e_[x[97]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[98]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx2_69()
var oJV=e_[x[98]].i
_ai(oJV,x[99],e_,x[98],8,2)
_ai(oJV,x[100],e_,x[98],9,2)
_ai(oJV,x[101],e_,x[98],10,2)
_ai(oJV,x[2],e_,x[98],11,2)
_ai(oJV,x[41],e_,x[98],12,2)
_ai(oJV,x[4],e_,x[98],13,2)
_ai(oJV,x[18],e_,x[98],14,2)
_ai(oJV,x[5],e_,x[98],15,2)
_ai(oJV,x[102],e_,x[98],16,2)
_ai(oJV,x[103],e_,x[98],17,2)
_ai(oJV,x[104],e_,x[98],18,2)
_ai(oJV,x[105],e_,x[98],19,2)
_ai(oJV,x[106],e_,x[98],20,2)
_ai(oJV,x[107],e_,x[98],21,2)
_ai(oJV,x[108],e_,x[98],22,2)
_ai(oJV,x[12],e_,x[98],23,2)
_ai(oJV,x[109],e_,x[98],24,2)
_ai(oJV,x[110],e_,x[98],25,2)
_ai(oJV,x[36],e_,x[98],26,2)
var bOV=_mz(z,'custom-navition-bar',['bindback',0,'id',1,'navTitle',1,'showNavHeight',2],[],e,s,gg)
_(r,bOV)
var lKV=_v()
_(r,lKV)
if(_oz(z,4,e,s,gg)){lKV.wxVkey=1
}
var aLV=_v()
_(r,aLV)
if(_oz(z,5,e,s,gg)){aLV.wxVkey=1
var oPV=_mz(z,'bubble',['bubble',6,'isClosed',1,'isSimple',2,'top',3],[],e,s,gg)
_(aLV,oPV)
}
var tMV=_v()
_(r,tMV)
if(_oz(z,10,e,s,gg)){tMV.wxVkey=1
var oRV=_mz(z,'view',['capture-catch:tap',11,'class',1,'style',2],[],e,s,gg)
var fSV=_v()
_(oRV,fSV)
if(_oz(z,14,e,s,gg)){fSV.wxVkey=1
var oXV=_v()
_(fSV,oXV)
var lYV=_oz(z,16,e,s,gg)
var aZV=_gd(x[98],lYV,e_,d_)
if(aZV){
var t1V=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
oXV.wxXCkey=3
aZV(t1V,t1V,oXV,gg)
gg.f=cur_globalf
}
else _w(lYV,x[98],48,229)
}
else if(_oz(z,17,e,s,gg)){fSV.wxVkey=2
var e2V=_v()
_(fSV,e2V)
var b3V=_oz(z,19,e,s,gg)
var o4V=_gd(x[98],b3V,e_,d_)
if(o4V){
var x5V=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
e2V.wxXCkey=3
o4V(x5V,x5V,e2V,gg)
gg.f=cur_globalf
}
else _w(b3V,x[98],50,52)
}
var o6V=_v()
_(oRV,o6V)
var f7V=_oz(z,21,e,s,gg)
var c8V=_gd(x[98],f7V,e_,d_)
if(c8V){
var h9V=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
o6V.wxXCkey=3
c8V(h9V,h9V,o6V,gg)
gg.f=cur_globalf
}
else _w(f7V,x[98],53,22)
var cTV=_v()
_(oRV,cTV)
if(_oz(z,22,e,s,gg)){cTV.wxVkey=1
var o0V=_v()
_(cTV,o0V)
var cAW=_oz(z,24,e,s,gg)
var oBW=_gd(x[98],cAW,e_,d_)
if(oBW){
var lCW=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
o0V.wxXCkey=3
oBW(lCW,lCW,o0V,gg)
gg.f=cur_globalf
}
else _w(cAW,x[98],57,22)
}
var hUV=_v()
_(oRV,hUV)
if(_oz(z,25,e,s,gg)){hUV.wxVkey=1
}
var aDW=_v()
_(oRV,aDW)
var tEW=_oz(z,27,e,s,gg)
var eFW=_gd(x[98],tEW,e_,d_)
if(eFW){
var bGW=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
aDW.wxXCkey=3
eFW(bGW,bGW,aDW,gg)
gg.f=cur_globalf
}
else _w(tEW,x[98],69,22)
var oVV=_v()
_(oRV,oVV)
if(_oz(z,28,e,s,gg)){oVV.wxVkey=1
}
var oHW=_v()
_(oRV,oHW)
var xIW=_oz(z,30,e,s,gg)
var oJW=_gd(x[98],xIW,e_,d_)
if(oJW){
var fKW=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
oHW.wxXCkey=3
oJW(fKW,fKW,oHW,gg)
gg.f=cur_globalf
}
else _w(xIW,x[98],78,25)
var cWV=_v()
_(oRV,cWV)
if(_oz(z,31,e,s,gg)){cWV.wxVkey=1
var cLW=_v()
_(cWV,cLW)
var hMW=_oz(z,33,e,s,gg)
var oNW=_gd(x[98],hMW,e_,d_)
if(oNW){
var cOW=_1z(z,32,e,s,gg) || {}
var cur_globalf=gg.f
cLW.wxXCkey=3
oNW(cOW,cOW,cLW,gg)
gg.f=cur_globalf
}
else _w(hMW,x[98],82,22)
}
var oPW=_mz(z,'cell-bar-vo',['bind:selCellBar',34,'cellBarVo',1,'goodsVo',2],[],e,s,gg)
_(oRV,oPW)
var lQW=_v()
_(oRV,lQW)
var aRW=_oz(z,38,e,s,gg)
var tSW=_gd(x[98],aRW,e_,d_)
if(tSW){
var eTW=_1z(z,37,e,s,gg) || {}
var cur_globalf=gg.f
lQW.wxXCkey=3
tSW(eTW,eTW,lQW,gg)
gg.f=cur_globalf
}
else _w(aRW,x[98],87,22)
var bUW=_v()
_(oRV,bUW)
var oVW=_oz(z,40,e,s,gg)
var xWW=_gd(x[98],oVW,e_,d_)
if(xWW){
var oXW=_1z(z,39,e,s,gg) || {}
var cur_globalf=gg.f
bUW.wxXCkey=3
xWW(oXW,oXW,bUW,gg)
gg.f=cur_globalf
}
else _w(oVW,x[98],88,22)
fSV.wxXCkey=1
cTV.wxXCkey=1
hUV.wxXCkey=1
oVV.wxXCkey=1
cWV.wxXCkey=1
_(tMV,oRV)
var fYW=_v()
_(tMV,fYW)
var cZW=_oz(z,42,e,s,gg)
var h1W=_gd(x[98],cZW,e_,d_)
if(h1W){
var o2W=_1z(z,41,e,s,gg) || {}
var cur_globalf=gg.f
fYW.wxXCkey=3
h1W(o2W,o2W,fYW,gg)
gg.f=cur_globalf
}
else _w(cZW,x[98],91,18)
var c3W=_v()
_(tMV,c3W)
var o4W=_oz(z,44,e,s,gg)
var l5W=_gd(x[98],o4W,e_,d_)
if(l5W){
var a6W=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
c3W.wxXCkey=3
l5W(a6W,a6W,c3W,gg)
gg.f=cur_globalf
}
else _w(o4W,x[98],93,18)
var t7W=_v()
_(tMV,t7W)
var e8W=_oz(z,46,e,s,gg)
var b9W=_gd(x[98],e8W,e_,d_)
if(b9W){
var o0W=_1z(z,45,e,s,gg) || {}
var cur_globalf=gg.f
t7W.wxXCkey=3
b9W(o0W,o0W,t7W,gg)
gg.f=cur_globalf
}
else _w(e8W,x[98],95,18)
var xQV=_v()
_(tMV,xQV)
if(_oz(z,47,e,s,gg)){xQV.wxVkey=1
var xAX=_v()
_(xQV,xAX)
var oBX=_oz(z,49,e,s,gg)
var fCX=_gd(x[98],oBX,e_,d_)
if(fCX){
var cDX=_1z(z,48,e,s,gg) || {}
var cur_globalf=gg.f
xAX.wxXCkey=3
fCX(cDX,cDX,xAX,gg)
gg.f=cur_globalf
}
else _w(oBX,x[98],98,12)
}
var hEX=_v()
_(tMV,hEX)
var oFX=_oz(z,51,e,s,gg)
var cGX=_gd(x[98],oFX,e_,d_)
if(cGX){
var oHX=_1z(z,50,e,s,gg) || {}
var cur_globalf=gg.f
hEX.wxXCkey=3
cGX(oHX,oHX,hEX,gg)
gg.f=cur_globalf
}
else _w(oFX,x[98],102,18)
var lIX=_v()
_(tMV,lIX)
var aJX=_oz(z,53,e,s,gg)
var tKX=_gd(x[98],aJX,e_,d_)
if(tKX){
var eLX=_1z(z,52,e,s,gg) || {}
var cur_globalf=gg.f
lIX.wxXCkey=3
tKX(eLX,eLX,lIX,gg)
gg.f=cur_globalf
}
else _w(aJX,x[98],105,18)
xQV.wxXCkey=1
}
var bMX=_v()
_(r,bMX)
var oNX=_oz(z,55,e,s,gg)
var xOX=_gd(x[98],oNX,e_,d_)
if(xOX){
var oPX=_1z(z,54,e,s,gg) || {}
var cur_globalf=gg.f
bMX.wxXCkey=3
xOX(oPX,oPX,bMX,gg)
gg.f=cur_globalf
}
else _w(oNX,x[98],109,14)
var fQX=_n('quick-entry-forward-index')
_rz(z,fQX,'display',56,e,s,gg)
_(r,fQX)
var cRX=_v()
_(r,cRX)
var hSX=_oz(z,58,e,s,gg)
var oTX=_gd(x[98],hSX,e_,d_)
if(oTX){
var cUX=_1z(z,57,e,s,gg) || {}
var cur_globalf=gg.f
cRX.wxXCkey=3
oTX(cUX,cUX,cRX,gg)
gg.f=cur_globalf
}
else _w(hSX,x[98],112,14)
var oVX=_v()
_(r,oVX)
var lWX=_oz(z,60,e,s,gg)
var aXX=_gd(x[98],lWX,e_,d_)
if(aXX){
var tYX=_1z(z,59,e,s,gg) || {}
var cur_globalf=gg.f
oVX.wxXCkey=3
aXX(tYX,tYX,oVX,gg)
gg.f=cur_globalf
}
else _w(lWX,x[98],114,14)
var eZX=_v()
_(r,eZX)
var b1X=_oz(z,62,e,s,gg)
var o2X=_gd(x[98],b1X,e_,d_)
if(o2X){
var x3X=_1z(z,61,e,s,gg) || {}
var cur_globalf=gg.f
eZX.wxXCkey=3
o2X(x3X,x3X,eZX,gg)
gg.f=cur_globalf
}
else _w(b1X,x[98],117,14)
var eNV=_v()
_(r,eNV)
if(_oz(z,63,e,s,gg)){eNV.wxVkey=1
var o4X=_n('wifi-error')
_rz(z,o4X,'bind:reloadTap',64,e,s,gg)
_(eNV,o4X)
}
var f5X=_mz(z,'toast',['display',65,'toastMessage',1,'topValueInFixedPosition',2],[],e,s,gg)
_(r,f5X)
lKV.wxXCkey=1
aLV.wxXCkey=1
aLV.wxXCkey=3
tMV.wxXCkey=1
tMV.wxXCkey=3
eNV.wxXCkey=1
eNV.wxXCkey=3
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
oJV.pop()
return r
}
e_[x[98]]={f:m68,j:[],i:[],ti:[x[99],x[100],x[101],x[2],x[41],x[4],x[18],x[5],x[102],x[103],x[104],x[105],x[106],x[107],x[108],x[12],x[109],x[110],x[36]],ic:[]}
d_[x[111]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx2_70()
var h7X=_v()
_(r,h7X)
if(_oz(z,0,e,s,gg)){h7X.wxVkey=1
}
h7X.wxXCkey=1
return r
}
e_[x[111]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[112]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx2_71()
var c9X=_v()
_(r,c9X)
if(_oz(z,0,e,s,gg)){c9X.wxVkey=1
var o0X=_n('view')
_rz(z,o0X,'class',1,e,s,gg)
var aBY=_mz(z,'view',['catchtap',2,'class',1,'style',2],[],e,s,gg)
var tCY=_v()
_(aBY,tCY)
if(_oz(z,5,e,s,gg)){tCY.wxVkey=1
}
var eDY=_v()
_(aBY,eDY)
if(_oz(z,6,e,s,gg)){eDY.wxVkey=1
}
var bEY=_v()
_(aBY,bEY)
if(_oz(z,7,e,s,gg)){bEY.wxVkey=1
}
tCY.wxXCkey=1
eDY.wxXCkey=1
bEY.wxXCkey=1
_(o0X,aBY)
var lAY=_v()
_(o0X,lAY)
if(_oz(z,8,e,s,gg)){lAY.wxVkey=1
var oFY=_v()
_(lAY,oFY)
var xGY=function(fIY,oHY,cJY,gg){
var oLY=_v()
_(cJY,oLY)
if(_oz(z,11,fIY,oHY,gg)){oLY.wxVkey=1
}
oLY.wxXCkey=1
return cJY
}
oFY.wxXCkey=2
_2z(z,9,xGY,e,s,gg,oFY,'item','index','mobile')
}
lAY.wxXCkey=1
_(c9X,o0X)
}
c9X.wxXCkey=1
return r
}
e_[x[112]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[113]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx2_72()
var oNY=_v()
_(r,oNY)
if(_oz(z,0,e,s,gg)){oNY.wxVkey=1
}
oNY.wxXCkey=1
return r
}
e_[x[113]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[114]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx2_73()
return r
}
e_[x[114]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[115]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx2_74()
var tQY=e_[x[115]].i
_ai(tQY,x[116],e_,x[115],1,1)
_ai(tQY,x[2],e_,x[115],2,2)
_ai(tQY,x[41],e_,x[115],3,2)
_ai(tQY,x[4],e_,x[115],4,2)
_ai(tQY,x[5],e_,x[115],5,2)
_ai(tQY,x[106],e_,x[115],6,2)
var oTY=_mz(z,'bubble',['bubble',0,'isClosed',1,'isSimple',1,'top',2],[],e,s,gg)
_(r,oTY)
var xUY=_mz(z,'custom-navition-bar',['bindback',4,'id',1,'navTitle',2,'showNavHeight',3],[],e,s,gg)
_(r,xUY)
var eRY=_v()
_(r,eRY)
if(_oz(z,8,e,s,gg)){eRY.wxVkey=1
}
var fWY=_mz(z,'view',['capture-catch:tap',9,'class',1,'hidden',2,'style',3],[],e,s,gg)
var c1Y=_mz(z,'virtual-goods',['actionDisable',13,'bind:setVirtualGoodsData',1,'goodsVo',2,'id',3,'virtualGoodsData',4],[],e,s,gg)
_(fWY,c1Y)
var o2Y=_mz(z,'order-checkout-address',['actionDisable',18,'addressVo',1,'bind:addAddress',2,'bind:editAddress',3,'bind:refresh',4,'bind:showNameAuthWinClick',5,'bind:submitIdCardInfo',6,'bind:wechatAddAddress',7,'id',8,'realNameAuthData',9,'showAddress',10],[],e,s,gg)
_(fWY,o2Y)
var l3Y=_mz(z,'order-checkout-goods',['actionDisable',29,'bind:clickMallCouponBarEvent',1,'bind:goodsRefresh',2,'confirmMessage',3,'disableEditNum',4,'goodsVo',5,'mallVo',6,'promotionVo',7,'reduceDisable',8,'serviceVoObj',9,'skuVo',10,'virtualGoodsData',11],[],e,s,gg)
_(fWY,l3Y)
var cXY=_v()
_(fWY,cXY)
if(_oz(z,41,e,s,gg)){cXY.wxVkey=1
var a4Y=_n('step-vo')
_rz(z,a4Y,'stepVo',42,e,s,gg)
_(cXY,a4Y)
}
var hYY=_v()
_(fWY,hYY)
if(_oz(z,43,e,s,gg)){hYY.wxVkey=1
}
var t5Y=_mz(z,'service-vo',['bind:addAddress',44,'bind:refresh',1,'bind:updateServiceVo',2,'serviceVo',3],[],e,s,gg)
_(fWY,t5Y)
var e6Y=_mz(z,'pay-channel',['bind:selectPayTypeEvent',48,'payVo',1],[],e,s,gg)
_(fWY,e6Y)
var oZY=_v()
_(fWY,oZY)
if(_oz(z,50,e,s,gg)){oZY.wxVkey=1
var b7Y=_mz(z,'step-vo-protocol',['bind:selStepProtocal',51,'stepVo',1],[],e,s,gg)
_(oZY,b7Y)
}
var o8Y=_mz(z,'cell-bar-vo',['bind:selCellBar',53,'cellBarVo',1,'goodsVo',2],[],e,s,gg)
_(fWY,o8Y)
var x9Y=_n('order-checkout-picc')
_rz(z,x9Y,'isIpx',56,e,s,gg)
_(fWY,x9Y)
var o0Y=_mz(z,'order-checkout-pay-bar',['addressVo',57,'bind:payEvent',1,'isIpx',2,'orderVo',3],[],e,s,gg)
_(fWY,o0Y)
cXY.wxXCkey=1
cXY.wxXCkey=3
hYY.wxXCkey=1
oZY.wxXCkey=1
oZY.wxXCkey=3
_(r,fWY)
var fAZ=_mz(z,'order-checkout-mall-coupons',['bind:hideMallCouponsListEvent',61,'bind:showColCouponModalEvent',1,'bind:takeMerchantCouponEvent',2,'goodsVo',3,'mallCouponsListData',4,'mallVo',5,'promotionEventVo',6,'promotionVo',7],[],e,s,gg)
_(r,fAZ)
var cBZ=_mz(z,'order-checkout-coupons',['bind:hideCouponsWinEvent',69,'bind:loadMorePlatCouponsEvent',1,'bind:refresh',2,'bind:showMallCouponsListEvent',3,'couponsWinData',4,'goodsVo',5,'mallCoupons',6,'mallCouponsListData',7,'mallVo',8,'promotionVo',9],[],e,s,gg)
_(r,cBZ)
var oVY=_v()
_(r,oVY)
if(_oz(z,79,e,s,gg)){oVY.wxVkey=1
var hCZ=_v()
_(oVY,hCZ)
var oDZ=_oz(z,81,e,s,gg)
var cEZ=_gd(x[115],oDZ,e_,d_)
if(cEZ){
var oFZ=_1z(z,80,e,s,gg) || {}
var cur_globalf=gg.f
hCZ.wxXCkey=3
cEZ(oFZ,oFZ,hCZ,gg)
gg.f=cur_globalf
}
else _w(oDZ,x[115],113,12)
}
var lGZ=_mz(z,'coupon-discount-tips',['discountTipsData',82,'isIpx',1,'realNameAuthData',2],[],e,s,gg)
_(r,lGZ)
var aHZ=_mz(z,'collection-coupon',['bind:closeColCouponEvent',85,'bind:doLikeMallEvent',1,'bind:getColCouponEvent',2,'bind:showColCouponEvent',3,'bind:takeMerchantCouponEvent',4,'id',5,'mallVo',6],[],e,s,gg)
_(r,aHZ)
oVY.wxXCkey=1
var tIZ=_mz(z,'order-checkout-pay-win',['addressVo',92,'bind:closePayWindow',1,'bind:editAddress',2,'bind:payEvent',3,'bind:selectPayTypeEvent',4,'countTimeData',5,'goodsVo',6,'isIpx',7,'orderVo',8,'payVo',9,'payWindowData',10,'realNameAuthData',11],[],e,s,gg)
_(r,tIZ)
var eJZ=_v()
_(r,eJZ)
var bKZ=_oz(z,105,e,s,gg)
var oLZ=_gd(x[115],bKZ,e_,d_)
if(oLZ){
var xMZ=_1z(z,104,e,s,gg) || {}
var cur_globalf=gg.f
eJZ.wxXCkey=3
oLZ(xMZ,xMZ,eJZ,gg)
gg.f=cur_globalf
}
else _w(bKZ,x[115],146,14)
var oNZ=_v()
_(r,oNZ)
var fOZ=_oz(z,107,e,s,gg)
var cPZ=_gd(x[115],fOZ,e_,d_)
if(cPZ){
var hQZ=_1z(z,106,e,s,gg) || {}
var cur_globalf=gg.f
oNZ.wxXCkey=3
cPZ(hQZ,hQZ,oNZ,gg)
gg.f=cur_globalf
}
else _w(fOZ,x[115],149,14)
var oRZ=_v()
_(r,oRZ)
var cSZ=_oz(z,109,e,s,gg)
var oTZ=_gd(x[115],cSZ,e_,d_)
if(oTZ){
var lUZ=_1z(z,108,e,s,gg) || {}
var cur_globalf=gg.f
oRZ.wxXCkey=3
oTZ(lUZ,lUZ,oRZ,gg)
gg.f=cur_globalf
}
else _w(cSZ,x[115],152,14)
var aVZ=_mz(z,'toast',['display',110,'toastMessage',1],[],e,s,gg)
_(r,aVZ)
var bSY=_v()
_(r,bSY)
if(_oz(z,112,e,s,gg)){bSY.wxVkey=1
var tWZ=_n('wifi-error')
_rz(z,tWZ,'bind:reloadTap',113,e,s,gg)
_(bSY,tWZ)
}
eRY.wxXCkey=1
bSY.wxXCkey=1
bSY.wxXCkey=3
tQY.pop()
tQY.pop()
tQY.pop()
tQY.pop()
tQY.pop()
tQY.pop()
return r
}
e_[x[115]]={f:m73,j:[],i:[],ti:[x[116],x[2],x[41],x[4],x[5],x[106]],ic:[]}
d_[x[117]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx2_75()
var bYZ=e_[x[117]].i
var oZZ=e_[x[117]].j
_ai(bYZ,x[5],e_,x[117],1,1)
_ai(bYZ,x[18],e_,x[117],2,2)
_ai(bYZ,x[104],e_,x[117],3,2)
_ai(bYZ,x[108],e_,x[117],4,2)
_ai(bYZ,x[107],e_,x[117],5,2)
_ai(bYZ,x[101],e_,x[117],6,2)
_ai(bYZ,x[41],e_,x[117],7,2)
_ai(bYZ,x[105],e_,x[117],8,2)
var x1Z=_v()
_(r,x1Z)
if(_oz(z,0,e,s,gg)){x1Z.wxVkey=1
var o2Z=_n('view')
_rz(z,o2Z,'class',1,e,s,gg)
var f3Z=_n('view')
_rz(z,f3Z,'class',2,e,s,gg)
var c4Z=_v()
_(f3Z,c4Z)
if(_oz(z,3,e,s,gg)){c4Z.wxVkey=1
}
var h5Z=_n('view')
_rz(z,h5Z,'class',4,e,s,gg)
var o6Z=_v()
_(h5Z,o6Z)
if(_oz(z,5,e,s,gg)){o6Z.wxVkey=1
}
var c7Z=_v()
_(h5Z,c7Z)
if(_oz(z,6,e,s,gg)){c7Z.wxVkey=1
}
o6Z.wxXCkey=1
c7Z.wxXCkey=1
_(f3Z,h5Z)
var o8Z=_v()
_(f3Z,o8Z)
var l9Z=_oz(z,8,e,s,gg)
var a0Z=_gd(x[117],l9Z,e_,d_)
if(a0Z){
var tA1=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
o8Z.wxXCkey=3
a0Z(tA1,tA1,o8Z,gg)
gg.f=cur_globalf
}
else _w(l9Z,x[117],52,26)
var eB1=_v()
_(f3Z,eB1)
var bC1=_oz(z,10,e,s,gg)
var oD1=_gd(x[117],bC1,e_,d_)
if(oD1){
var xE1=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
eB1.wxXCkey=3
oD1(xE1,xE1,eB1,gg)
gg.f=cur_globalf
}
else _w(bC1,x[117],56,22)
c4Z.wxXCkey=1
_(o2Z,f3Z)
var oF1=_v()
_(o2Z,oF1)
var fG1=_oz(z,12,e,s,gg)
var cH1=_gd(x[117],fG1,e_,d_)
if(cH1){
var hI1=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
oF1.wxXCkey=3
cH1(hI1,hI1,oF1,gg)
gg.f=cur_globalf
}
else _w(fG1,x[117],59,18)
var oJ1=_v()
_(o2Z,oJ1)
var cK1=_oz(z,14,e,s,gg)
var oL1=_gd(x[117],cK1,e_,d_)
if(oL1){
var lM1=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
oJ1.wxXCkey=3
oL1(lM1,lM1,oJ1,gg)
gg.f=cur_globalf
}
else _w(cK1,x[117],61,18)
var aN1=_v()
_(o2Z,aN1)
var tO1=_oz(z,16,e,s,gg)
var eP1=_gd(x[117],tO1,e_,d_)
if(eP1){
var bQ1=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
aN1.wxXCkey=3
eP1(bQ1,bQ1,aN1,gg)
gg.f=cur_globalf
}
else _w(tO1,x[117],63,18)
var oR1=_v()
_(o2Z,oR1)
var xS1=_oz(z,18,e,s,gg)
var oT1=_gd(x[117],xS1,e_,d_)
if(oT1){
var fU1=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
oR1.wxXCkey=3
oT1(fU1,fU1,oR1,gg)
gg.f=cur_globalf
}
else _w(xS1,x[117],65,18)
_(x1Z,o2Z)
}
var cV1=_v()
_(r,cV1)
var hW1=_oz(z,20,e,s,gg)
var oX1=_gd(x[117],hW1,e_,d_)
if(oX1){
var cY1=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
cV1.wxXCkey=3
oX1(cY1,cY1,cV1,gg)
gg.f=cur_globalf
}
else _w(hW1,x[117],70,14)
var oZ1=_v()
_(r,oZ1)
var l11=_oz(z,22,e,s,gg)
var a21=_gd(x[117],l11,e_,d_)
if(a21){
var t31=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oZ1.wxXCkey=3
a21(t31,t31,oZ1,gg)
gg.f=cur_globalf
}
else _w(l11,x[117],72,14)
var e41=_v()
_(r,e41)
var b51=_oz(z,24,e,s,gg)
var o61=_gd(x[117],b51,e_,d_)
if(o61){
var x71=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
e41.wxXCkey=3
o61(x71,x71,e41,gg)
gg.f=cur_globalf
}
else _w(b51,x[117],75,14)
_ic(x[118],e_,x[117],e,s,r,gg);
x1Z.wxXCkey=1
bYZ.pop()
bYZ.pop()
bYZ.pop()
bYZ.pop()
bYZ.pop()
bYZ.pop()
bYZ.pop()
bYZ.pop()
oZZ.pop()
return r
}
e_[x[117]]={f:m74,j:[],i:[],ti:[x[5],x[18],x[104],x[108],x[107],x[101],x[41],x[105]],ic:[x[118]]}
d_[x[119]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx2_76()
var f91=_v()
_(r,f91)
if(_oz(z,0,e,s,gg)){f91.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){f91.wxVkey=2
var c01=_v()
_(f91,c01)
if(_oz(z,2,e,s,gg)){c01.wxVkey=1
}
c01.wxXCkey=1
}
else{f91.wxVkey=3
}
f91.wxXCkey=1
return r
}
e_[x[119]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[120]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx2_77()
var oB2=_v()
_(r,oB2)
var cC2=function(lE2,oD2,aF2,gg){
var eH2=_mz(z,'view',['bindtap',3,'class',1,'data-index',2,'data-item',3],[],lE2,oD2,gg)
var bI2=_v()
_(eH2,bI2)
if(_oz(z,7,lE2,oD2,gg)){bI2.wxVkey=1
}
var oJ2=_n('view')
_rz(z,oJ2,'class',8,lE2,oD2,gg)
var oL2=_v()
_(oJ2,oL2)
var fM2=function(hO2,cN2,oP2,gg){
var oR2=_v()
_(oP2,oR2)
if(_oz(z,12,hO2,cN2,gg)){oR2.wxVkey=1
var lS2=_v()
_(oR2,lS2)
if(_oz(z,13,hO2,cN2,gg)){lS2.wxVkey=1
}
lS2.wxXCkey=1
}
oR2.wxXCkey=1
return oP2
}
oL2.wxXCkey=2
_2z(z,10,fM2,lE2,oD2,gg,oL2,'user','index','index')
var xK2=_v()
_(oJ2,xK2)
if(_oz(z,14,lE2,oD2,gg)){xK2.wxVkey=1
}
xK2.wxXCkey=1
_(eH2,oJ2)
bI2.wxXCkey=1
_(aF2,eH2)
return aF2
}
oB2.wxXCkey=2
_2z(z,1,cC2,e,s,gg,oB2,'group','index','groupOrderId')
return r
}
e_[x[120]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[121]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx2_78()
var tU2=e_[x[121]].i
_ai(tU2,x[5],e_,x[121],1,1)
var bW2=_mz(z,'pdd-list',['bindonReachBottom',0,'canLoadMore',1,'displayLoadMore',1,'loadingTxt',2,'onReachBottomDistance',3],[],e,s,gg)
var oX2=_v()
_(bW2,oX2)
if(_oz(z,5,e,s,gg)){oX2.wxVkey=1
var xY2=_mz(z,'view',['class',6,'slot',1],[],e,s,gg)
var oZ2=_mz(z,'group-header',['leftTime',8,'status',1],[],e,s,gg)
_(xY2,oZ2)
var f12=_mz(z,'group-list',['bind:click',10,'list',1],[],e,s,gg)
_(xY2,f12)
_(oX2,xY2)
}
var c22=_mz(z,'view',['slot',12,'style',1],[],e,s,gg)
var h32=_v()
_(c22,h32)
if(_oz(z,14,e,s,gg)){h32.wxVkey=1
var c52=_mz(z,'segment',['binddidClickSegmentTab',15,'config',1,'renderObj',2],[],e,s,gg)
_(h32,c52)
var o42=_v()
_(h32,o42)
if(_oz(z,18,e,s,gg)){o42.wxVkey=1
var o62=_v()
_(o42,o62)
var l72=function(t92,a82,e02,gg){
var oB3=_mz(z,'grid-item-v1',['bind:click',21,'bindimpr',1,'goods',2,'index',3,'tabKey',4,'useImpr',5],[],t92,a82,gg)
_(e02,oB3)
return e02
}
o62.wxXCkey=4
_2z(z,19,l72,e,s,gg,o62,'item','index','index')
}
else{o42.wxVkey=2
}
o42.wxXCkey=1
o42.wxXCkey=3
}
h32.wxXCkey=1
h32.wxXCkey=3
_(bW2,c22)
oX2.wxXCkey=1
oX2.wxXCkey=3
_(r,bW2)
var xC3=_mz(z,'modal-dialog',['bind:onModalCancel',27,'bind:onModalConfirm',1,'cancelText',2,'confirmText',3,'content',4,'contentAlign',5,'showCancel',6,'title',7,'visible',8],[],e,s,gg)
_(r,xC3)
var oD3=_v()
_(r,oD3)
var fE3=_oz(z,37,e,s,gg)
var cF3=_gd(x[121],fE3,e_,d_)
if(cF3){
var hG3=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
oD3.wxXCkey=3
cF3(hG3,hG3,oD3,gg)
gg.f=cur_globalf
}
else _w(fE3,x[121],121,14)
var oH3=_n('quick-entry-forward-index')
_rz(z,oH3,'display',38,e,s,gg)
_(r,oH3)
var eV2=_v()
_(r,eV2)
if(_oz(z,39,e,s,gg)){eV2.wxVkey=1
var cI3=_n('wifi-error')
_rz(z,cI3,'bindreloadTap',40,e,s,gg)
_(eV2,cI3)
}
var oJ3=_mz(z,'toast',['display',41,'toastMessage',1],[],e,s,gg)
_(r,oJ3)
var lK3=_mz(z,'go-top',['bottom',43,'display',1],[],e,s,gg)
_(r,lK3)
var aL3=_mz(z,'risk-control',['bind:handleRefresh',45,'class',1],[],e,s,gg)
_(r,aL3)
eV2.wxXCkey=1
eV2.wxXCkey=3
tU2.pop()
return r
}
e_[x[121]]={f:m77,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[122]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx2_79()
var eN3=_v()
_(r,eN3)
var bO3=function(xQ3,oP3,oR3,gg){
var cT3=_v()
_(oR3,cT3)
if(_oz(z,2,xQ3,oP3,gg)){cT3.wxVkey=1
}
cT3.wxXCkey=1
return oR3
}
eN3.wxXCkey=2
_2z(z,0,bO3,e,s,gg,eN3,'item','index','{{item.goodsId}}')
return r
}
e_[x[122]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[123]]={}
var m79=function(e,s,r,gg){
var z=gz$gwx2_80()
var oV3=_v()
_(r,oV3)
if(_oz(z,0,e,s,gg)){oV3.wxVkey=1
}
oV3.wxXCkey=1
return r
}
e_[x[123]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[124]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx2_81()
var oX3=_v()
_(r,oX3)
var lY3=function(t13,aZ3,e23,gg){
var o43=_n('view')
_rz(z,o43,'class',3,t13,aZ3,gg)
var x53=_v()
_(o43,x53)
if(_oz(z,4,t13,aZ3,gg)){x53.wxVkey=1
}
var f73=_v()
_(o43,f73)
var c83=function(o03,h93,cA4,gg){
var lC4=_mz(z,'order-checkout-goods',['actionDisable',7,'bind:refreshGoodsNumber',1,'confirmMessage',2,'goodsNumber',3,'goodsVo',4,'increaseDisable',5,'isLastOne',6,'mallVo',7,'orderVo',8,'reduceDisable',9],[],o03,h93,gg)
_(cA4,lC4)
return cA4
}
f73.wxXCkey=4
_2z(z,5,c83,t13,aZ3,gg,f73,'item','index','{{item.goodsId}}')
var o63=_v()
_(o43,o63)
if(_oz(z,17,t13,aZ3,gg)){o63.wxVkey=1
}
x53.wxXCkey=1
o63.wxXCkey=1
_(e23,o43)
return e23
}
oX3.wxXCkey=4
_2z(z,1,lY3,e,s,gg,oX3,'cartItem','index','{{cartItem.mallVo.id}}')
return r
}
e_[x[124]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[125]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx2_82()
var tE4=e_[x[125]].i
_ai(tE4,x[2],e_,x[125],1,1)
_ai(tE4,x[41],e_,x[125],2,2)
_ai(tE4,x[4],e_,x[125],3,2)
_ai(tE4,x[5],e_,x[125],4,2)
var bG4=_mz(z,'view',['capture-catch:tap',0,'class',1,'hidden',1],[],e,s,gg)
var xI4=_mz(z,'order-checkout-address',['addressVo',3,'bind:addAddress',1,'bind:editAddress',2,'bind:refresh',3,'bind:wechatAddAddress',4,'showAddress',5],[],e,s,gg)
_(bG4,xI4)
var oJ4=_mz(z,'order-checkout-mall',['actionDisable',9,'bind:clickMallCouponBarEvent',1,'bind:refresh',2,'cartItemList',3,'confirmMessage',4,'orderVo',5],[],e,s,gg)
_(bG4,oJ4)
var fK4=_n('invalid-goods-list')
_rz(z,fK4,'invalidGoodsList',15,e,s,gg)
_(bG4,fK4)
var oH4=_v()
_(bG4,oH4)
if(_oz(z,16,e,s,gg)){oH4.wxVkey=1
}
var cL4=_mz(z,'pay-channel',['bind:selectPayTypeEvent',17,'payVo',1],[],e,s,gg)
_(bG4,cL4)
var hM4=_n('order-checkout-picc')
_rz(z,hM4,'isIpx',19,e,s,gg)
_(bG4,hM4)
var oN4=_mz(z,'order-checkout-pay-bar',['addressVo',20,'bind:payEvent',1,'cartItemList',2,'isIpx',3,'orderVo',4],[],e,s,gg)
_(bG4,oN4)
oH4.wxXCkey=1
_(r,bG4)
var cO4=_mz(z,'order-checkout-mall-coupons',['bind:hideMallCouponsListEvent',25,'bind:takeMerchantCouponEvent',1,'goodsVo',2,'mallCouponsListData',3,'mallVo',4,'promotionEventVo',5,'promotionVo',6],[],e,s,gg)
_(r,cO4)
var oP4=_mz(z,'order-checkout-coupons',['bind:hideCouponsWinEvent',32,'bind:refresh',1,'bind:showMallCouponsListEvent',2,'couponsWinData',3,'mallCoupons',4,'mallCouponsListData',5],[],e,s,gg)
_(r,oP4)
var lQ4=_v()
_(r,lQ4)
var aR4=_oz(z,39,e,s,gg)
var tS4=_gd(x[125],aR4,e_,d_)
if(tS4){
var eT4=_1z(z,38,e,s,gg) || {}
var cur_globalf=gg.f
lQ4.wxXCkey=3
tS4(eT4,eT4,lQ4,gg)
gg.f=cur_globalf
}
else _w(aR4,x[125],67,18)
var bU4=_mz(z,'order-checkout-pay-win',['addressVo',40,'bind:closePayWindow',1,'bind:editAddress',2,'bind:payEvent',3,'bind:selectPayTypeEvent',4,'countTimeData',5,'goodsVo',6,'isIpx',7,'orderVo',8,'payVo',9,'payWindowData',10],[],e,s,gg)
_(r,bU4)
var oV4=_v()
_(r,oV4)
var xW4=_oz(z,52,e,s,gg)
var oX4=_gd(x[125],xW4,e_,d_)
if(oX4){
var fY4=_1z(z,51,e,s,gg) || {}
var cur_globalf=gg.f
oV4.wxXCkey=3
oX4(fY4,fY4,oV4,gg)
gg.f=cur_globalf
}
else _w(xW4,x[125],86,14)
var cZ4=_v()
_(r,cZ4)
var h14=_oz(z,54,e,s,gg)
var o24=_gd(x[125],h14,e_,d_)
if(o24){
var c34=_1z(z,53,e,s,gg) || {}
var cur_globalf=gg.f
cZ4.wxXCkey=3
o24(c34,c34,cZ4,gg)
gg.f=cur_globalf
}
else _w(h14,x[125],89,14)
var o44=_v()
_(r,o44)
var l54=_oz(z,56,e,s,gg)
var a64=_gd(x[125],l54,e_,d_)
if(a64){
var t74=_1z(z,55,e,s,gg) || {}
var cur_globalf=gg.f
o44.wxXCkey=3
a64(t74,t74,o44,gg)
gg.f=cur_globalf
}
else _w(l54,x[125],92,14)
var e84=_mz(z,'toast',['display',57,'toastMessage',1],[],e,s,gg)
_(r,e84)
var eF4=_v()
_(r,eF4)
if(_oz(z,59,e,s,gg)){eF4.wxVkey=1
var b94=_n('wifi-error')
_rz(z,b94,'bind:reloadTap',60,e,s,gg)
_(eF4,b94)
}
eF4.wxXCkey=1
eF4.wxXCkey=3
tE4.pop()
tE4.pop()
tE4.pop()
tE4.pop()
return r
}
e_[x[125]]={f:m81,j:[],i:[],ti:[x[2],x[41],x[4],x[5]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['package_c/addresses/addresses.json'] = {"navigationBarTitleText":"收货地址","enablePullDownRefresh":false,"usingComponents":{"wifi-error":"/wx_components/wifi_error/wifi_error","quick-entry-forward-index":"/wx_components/quick_entry_forward_index/quick_entry_forward_index","toast":"/wx_components/toast/toast"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/addresses/addresses.wxml'] = [$gwx2, './package_c/addresses/addresses.wxml'];else __wxAppCode__['package_c/addresses/addresses.wxml'] = $gwx2( './package_c/addresses/addresses.wxml' );
		__wxAppCode__['package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.wxml'] = [$gwx2, './package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.wxml'];else __wxAppCode__['package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.wxml'] = $gwx2( './package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.wxml' );
		__wxAppCode__['package_c/components_order_checkout/collection_coupon/collection_coupon.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/collection_coupon/collection_coupon.wxml'] = [$gwx2, './package_c/components_order_checkout/collection_coupon/collection_coupon.wxml'];else __wxAppCode__['package_c/components_order_checkout/collection_coupon/collection_coupon.wxml'] = $gwx2( './package_c/components_order_checkout/collection_coupon/collection_coupon.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_address/order_checkout_address.json'] = {"component":true,"usingComponents":{"real-name-auth":"../../../wx_components/real_name_auth/real_name_auth"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_address/order_checkout_address.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_address/order_checkout_address.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_address/order_checkout_address.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_address/order_checkout_address.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.wxml' );
		__wxAppCode__['package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.wxml'] = [$gwx2, './package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.wxml'];else __wxAppCode__['package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.wxml'] = $gwx2( './package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.wxml' );
		__wxAppCode__['package_c/components_order_checkout/service_vo/service_vo.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/components_order_checkout/service_vo/service_vo.wxml'] = [$gwx2, './package_c/components_order_checkout/service_vo/service_vo.wxml'];else __wxAppCode__['package_c/components_order_checkout/service_vo/service_vo.wxml'] = $gwx2( './package_c/components_order_checkout/service_vo/service_vo.wxml' );
		__wxAppCode__['package_c/goods/bottom_notice/bottom_notice_component.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/bottom_notice/bottom_notice_component.wxml'] = [$gwx2, './package_c/goods/bottom_notice/bottom_notice_component.wxml'];else __wxAppCode__['package_c/goods/bottom_notice/bottom_notice_component.wxml'] = $gwx2( './package_c/goods/bottom_notice/bottom_notice_component.wxml' );
		__wxAppCode__['package_c/goods/gallery/detail_gallery_component.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/gallery/detail_gallery_component.wxml'] = [$gwx2, './package_c/goods/gallery/detail_gallery_component.wxml'];else __wxAppCode__['package_c/goods/gallery/detail_gallery_component.wxml'] = $gwx2( './package_c/goods/gallery/detail_gallery_component.wxml' );
		__wxAppCode__['package_c/goods/gallery/top_gallery_component.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/gallery/top_gallery_component.wxml'] = [$gwx2, './package_c/goods/gallery/top_gallery_component.wxml'];else __wxAppCode__['package_c/goods/gallery/top_gallery_component.wxml'] = $gwx2( './package_c/goods/gallery/top_gallery_component.wxml' );
		__wxAppCode__['package_c/goods/goods.json'] = {"navigationBarTitleText":"商品详情","onReachBottomDistance":200,"enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"custom-navition-bar":"/wx_components/custom_navigation_bar/custom_navigation_bar","load-more-bar":"/wx_components/load_more_bar/load_more_bar","wifi-error":"/wx_components/wifi_error/wifi_error","go-top":"/wx_components/go_top/go_top","toast":"/wx_components/toast/toast","top-gallery":"./gallery/top_gallery_component","detail-gallery":"./gallery/detail_gallery_component","goods-reviews":"./goods_reviews/reviews_component","local_groups":"./local_group/local_group_component","bottom_notice":"./bottom_notice/bottom_notice_component","resource-place-config":"/wx_components/resource_place_config/resource_place_config","sku-selector":"/wx_components/sku_selector/sku_selector","grid-item-v2":"/wx_components/grid_item_v2/grid_item_v2","goods-answer":"./goods_answer/answer_component","bubble":"/wx_components/bubble/bubble","goods-bottom-bar":"/wx_components/goods_bottom_bar/goods_bottom_bar","modal-dialog":"/wx_components/modal_dialog/modal_dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/goods.wxml'] = [$gwx2, './package_c/goods/goods.wxml'];else __wxAppCode__['package_c/goods/goods.wxml'] = $gwx2( './package_c/goods/goods.wxml' );
		__wxAppCode__['package_c/goods/goods_answer/answer_component.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/goods_answer/answer_component.wxml'] = [$gwx2, './package_c/goods/goods_answer/answer_component.wxml'];else __wxAppCode__['package_c/goods/goods_answer/answer_component.wxml'] = $gwx2( './package_c/goods/goods_answer/answer_component.wxml' );
		__wxAppCode__['package_c/goods/goods_reviews/reviews_component.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/goods_reviews/reviews_component.wxml'] = [$gwx2, './package_c/goods/goods_reviews/reviews_component.wxml'];else __wxAppCode__['package_c/goods/goods_reviews/reviews_component.wxml'] = $gwx2( './package_c/goods/goods_reviews/reviews_component.wxml' );
		__wxAppCode__['package_c/goods/local_group/local_group_component.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/goods/local_group/local_group_component.wxml'] = [$gwx2, './package_c/goods/local_group/local_group_component.wxml'];else __wxAppCode__['package_c/goods/local_group/local_group_component.wxml'] = $gwx2( './package_c/goods/local_group/local_group_component.wxml' );
		__wxAppCode__['package_c/group/group.json'] = {"enablePullDownRefresh":false,"usingComponents":{"toast":"/wx_components/toast/toast","wifi-error":"/wx_components/wifi_error/wifi_error","quick-entry-forward-index":"/wx_components/quick_entry_forward_index/quick_entry_forward_index","pdd-list":"/wx_components/old_pdd_list/old_pdd_list","grid-item-v1":"/wx_components/grid_item_v1/grid_item_v1","go-top":"/wx_components/go_top/go_top","segment":"/wx_components/segment/segment","risk-control":"/wx_components/risk_control/risk_control","resource-place-config":"/wx_components/resource_place_config/resource_place_config","sku-selector":"/wx_components/sku_selector/sku_selector","skeleton":"/wx_components/skeleton/skeleton","bubble":"/wx_components/bubble/bubble","modal-dialog":"/wx_components/modal_dialog/modal_dialog","zone-tips":"./group_zone_tips/group_zone_tips","time-line":"./time_line/time_line","group-fullback":"./group_fullback/group_fullback","group-normal":"./group_normal/group_normal","local-groups":"./local_groups/local_groups","group-success":"./group_success/group_success","group-join":"./group_join/group_join","group-no-sale":"./group_not_sale/group_not_sale","group-notice":"./group_notice/group_notice","group-button":"./group_button/group_button"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group.wxml'] = [$gwx2, './package_c/group/group.wxml'];else __wxAppCode__['package_c/group/group.wxml'] = $gwx2( './package_c/group/group.wxml' );
		__wxAppCode__['package_c/group/group_button/group_button.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_button/group_button.wxml'] = [$gwx2, './package_c/group/group_button/group_button.wxml'];else __wxAppCode__['package_c/group/group_button/group_button.wxml'] = $gwx2( './package_c/group/group_button/group_button.wxml' );
		__wxAppCode__['package_c/group/group_fullback/group_fullback.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_fullback/group_fullback.wxml'] = [$gwx2, './package_c/group/group_fullback/group_fullback.wxml'];else __wxAppCode__['package_c/group/group_fullback/group_fullback.wxml'] = $gwx2( './package_c/group/group_fullback/group_fullback.wxml' );
		__wxAppCode__['package_c/group/group_goods/group_goods.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_goods/group_goods.wxml'] = [$gwx2, './package_c/group/group_goods/group_goods.wxml'];else __wxAppCode__['package_c/group/group_goods/group_goods.wxml'] = $gwx2( './package_c/group/group_goods/group_goods.wxml' );
		__wxAppCode__['package_c/group/group_join/group_join.json'] = {"component":true,"usingComponents":{"group-notice":"../group_notice/group_notice","group-users":"../group_users/group_users"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_join/group_join.wxml'] = [$gwx2, './package_c/group/group_join/group_join.wxml'];else __wxAppCode__['package_c/group/group_join/group_join.wxml'] = $gwx2( './package_c/group/group_join/group_join.wxml' );
		__wxAppCode__['package_c/group/group_normal/group_normal.json'] = {"component":true,"usingComponents":{"group-goods":"../group_goods/group_goods","group-users":"../group_users/group_users","group-service":"./group_service/group_service","group-notice":"../group_notice/group_notice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_normal/group_normal.wxml'] = [$gwx2, './package_c/group/group_normal/group_normal.wxml'];else __wxAppCode__['package_c/group/group_normal/group_normal.wxml'] = $gwx2( './package_c/group/group_normal/group_normal.wxml' );
		__wxAppCode__['package_c/group/group_normal/group_service/group_service.json'] = {"component":true,"usingComponents":{"mask":"/wx_components/mask/mask"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_normal/group_service/group_service.wxml'] = [$gwx2, './package_c/group/group_normal/group_service/group_service.wxml'];else __wxAppCode__['package_c/group/group_normal/group_service/group_service.wxml'] = $gwx2( './package_c/group/group_normal/group_service/group_service.wxml' );
		__wxAppCode__['package_c/group/group_not_sale/group_not_sale.json'] = {"component":true,"usingComponents":{"group-users":"../group_users/group_users"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_not_sale/group_not_sale.wxml'] = [$gwx2, './package_c/group/group_not_sale/group_not_sale.wxml'];else __wxAppCode__['package_c/group/group_not_sale/group_not_sale.wxml'] = $gwx2( './package_c/group/group_not_sale/group_not_sale.wxml' );
		__wxAppCode__['package_c/group/group_notice/group_notice.json'] = {"component":true,"usingComponents":{"mask":"/wx_components/mask/mask"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_notice/group_notice.wxml'] = [$gwx2, './package_c/group/group_notice/group_notice.wxml'];else __wxAppCode__['package_c/group/group_notice/group_notice.wxml'] = $gwx2( './package_c/group/group_notice/group_notice.wxml' );
		__wxAppCode__['package_c/group/group_success/group_success.json'] = {"component":true,"usingComponents":{"group-goods":"../group_goods/group_goods","group-users":"../group_users/group_users"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_success/group_success.wxml'] = [$gwx2, './package_c/group/group_success/group_success.wxml'];else __wxAppCode__['package_c/group/group_success/group_success.wxml'] = $gwx2( './package_c/group/group_success/group_success.wxml' );
		__wxAppCode__['package_c/group/group_users/group_users.json'] = {"component":true,"usingComponents":{"mask":"/wx_components/mask/mask"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_users/group_users.wxml'] = [$gwx2, './package_c/group/group_users/group_users.wxml'];else __wxAppCode__['package_c/group/group_users/group_users.wxml'] = $gwx2( './package_c/group/group_users/group_users.wxml' );
		__wxAppCode__['package_c/group/group_zone_tips/group_zone_tips.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/group_zone_tips/group_zone_tips.wxml'] = [$gwx2, './package_c/group/group_zone_tips/group_zone_tips.wxml'];else __wxAppCode__['package_c/group/group_zone_tips/group_zone_tips.wxml'] = $gwx2( './package_c/group/group_zone_tips/group_zone_tips.wxml' );
		__wxAppCode__['package_c/group/local_groups/local_groups.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/local_groups/local_groups.wxml'] = [$gwx2, './package_c/group/local_groups/local_groups.wxml'];else __wxAppCode__['package_c/group/local_groups/local_groups.wxml'] = $gwx2( './package_c/group/local_groups/local_groups.wxml' );
		__wxAppCode__['package_c/group/time_line/time_line.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/group/time_line/time_line.wxml'] = [$gwx2, './package_c/group/time_line/time_line.wxml'];else __wxAppCode__['package_c/group/time_line/time_line.wxml'] = $gwx2( './package_c/group/time_line/time_line.wxml' );
		__wxAppCode__['package_c/order_checkout/order_checkout.json'] = {"enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"custom-navition-bar":"/wx_components/custom_navigation_bar/custom_navigation_bar","wifi-error":"/wx_components/wifi_error/wifi_error","quick-entry-forward-index":"/wx_components/quick_entry_forward_index/quick_entry_forward_index","toast":"/wx_components/toast/toast","bubble":"/wx_components/bubble/bubble","cell-bar-vo":"../components_order_checkout/cell_bar_vo/cell_bar_vo"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout/order_checkout.wxml'] = [$gwx2, './package_c/order_checkout/order_checkout.wxml'];else __wxAppCode__['package_c/order_checkout/order_checkout.wxml'] = $gwx2( './package_c/order_checkout/order_checkout.wxml' );
		__wxAppCode__['package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.wxml'] = [$gwx2, './package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.wxml'];else __wxAppCode__['package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.wxml'] = $gwx2( './package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.wxml' );
		__wxAppCode__['package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml'] = [$gwx2, './package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml'];else __wxAppCode__['package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml'] = $gwx2( './package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.wxml' );
		__wxAppCode__['package_c/order_checkout_new/component/step_vo/step_vo.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_new/component/step_vo/step_vo.wxml'] = [$gwx2, './package_c/order_checkout_new/component/step_vo/step_vo.wxml'];else __wxAppCode__['package_c/order_checkout_new/component/step_vo/step_vo.wxml'] = $gwx2( './package_c/order_checkout_new/component/step_vo/step_vo.wxml' );
		__wxAppCode__['package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.wxml'] = [$gwx2, './package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.wxml'];else __wxAppCode__['package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.wxml'] = $gwx2( './package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.wxml' );
		__wxAppCode__['package_c/order_checkout_new/order_checkout_new.json'] = {"enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"load-more-bar":"/wx_components/load_more_bar/load_more_bar","custom-navition-bar":"/wx_components/custom_navigation_bar/custom_navigation_bar","go-top":"/wx_components/go_top/go_top","toast":"/wx_components/toast/toast","wifi-error":"/wx_components/wifi_error/wifi_error","order-checkout-goods":"../components_order_checkout/order_checkout_goods/order_checkout_goods","order-checkout-address":"../components_order_checkout/order_checkout_address/order_checkout_address","pay-channel":"/wx_components/pay_channel/pay_channel","order-checkout-picc":"../components_order_checkout/order_checkout_picc/order_checkout_picc","order-checkout-pay-bar":"../components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar","service-vo":"../components_order_checkout/service_vo/service_vo","step-vo":"./component/step_vo/step_vo","step-vo-protocol":"./component/step_vo_protocol/step_vo_protocol","order-checkout-pay-win":"/wx_components/order_checkout_pay_win/order_checkout_pay_win","order-checkout-mall-coupons":"../components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons","order-checkout-coupons":"../components_order_checkout/order_checkout_coupons/order_checkout_coupons","coupon-discount-tips":"./component/coupon_discount_tips/coupon_discount_tips","collection-coupon":"../components_order_checkout/collection_coupon/collection_coupon","virtual-goods":"./component/order_checkout_virtual_goods/order_checkout_virtual_goods","bubble":"/wx_components/bubble/bubble","cell-bar-vo":"../components_order_checkout/cell_bar_vo/cell_bar_vo"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_new/order_checkout_new.wxml'] = [$gwx2, './package_c/order_checkout_new/order_checkout_new.wxml'];else __wxAppCode__['package_c/order_checkout_new/order_checkout_new.wxml'] = $gwx2( './package_c/order_checkout_new/order_checkout_new.wxml' );
		__wxAppCode__['package_c/order_checkout_step/order_checkout_step.json'] = {"navigationBarTitleText":"确认支付尾款","enablePullDownRefresh":false,"usingComponents":{"wifi-error":"/wx_components/wifi_error/wifi_error","toast":"/wx_components/toast/toast"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/order_checkout_step/order_checkout_step.wxml'] = [$gwx2, './package_c/order_checkout_step/order_checkout_step.wxml'];else __wxAppCode__['package_c/order_checkout_step/order_checkout_step.wxml'] = $gwx2( './package_c/order_checkout_step/order_checkout_step.wxml' );
		__wxAppCode__['package_c/team_list/group_header/group_header.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/team_list/group_header/group_header.wxml'] = [$gwx2, './package_c/team_list/group_header/group_header.wxml'];else __wxAppCode__['package_c/team_list/group_header/group_header.wxml'] = $gwx2( './package_c/team_list/group_header/group_header.wxml' );
		__wxAppCode__['package_c/team_list/group_list/group_list.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/team_list/group_list/group_list.wxml'] = [$gwx2, './package_c/team_list/group_list/group_list.wxml'];else __wxAppCode__['package_c/team_list/group_list/group_list.wxml'] = $gwx2( './package_c/team_list/group_list/group_list.wxml' );
		__wxAppCode__['package_c/team_list/team_list.json'] = {"enablePullDownRefresh":false,"usingComponents":{"toast":"/wx_components/toast/toast","load-more-bar":"/wx_components/load_more_bar/load_more_bar","wifi-error":"/wx_components/wifi_error/wifi_error","quick-entry-forward-index":"/wx_components/quick_entry_forward_index/quick_entry_forward_index","pdd-list":"/wx_components/old_pdd_list/old_pdd_list","grid-item-v1":"/wx_components/grid_item_v1/grid_item_v1","go-top":"/wx_components/go_top/go_top","segment":"/wx_components/segment/segment","risk-control":"/wx_components/risk_control/risk_control","modal-dialog":"/wx_components/modal_dialog/modal_dialog","group-header":"./group_header/group_header","group-list":"./group_list/group_list"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/team_list/team_list.wxml'] = [$gwx2, './package_c/team_list/team_list.wxml'];else __wxAppCode__['package_c/team_list/team_list.wxml'] = $gwx2( './package_c/team_list/team_list.wxml' );
		__wxAppCode__['package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.wxml'] = [$gwx2, './package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.wxml'];else __wxAppCode__['package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.wxml'] = $gwx2( './package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.wxml' );
		__wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.wxml'] = [$gwx2, './package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.wxml'];else __wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.wxml'] = $gwx2( './package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.wxml' );
		__wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.json'] = {"component":true,"usingComponents":{"order-checkout-goods":"../order_checkout_goods/order_checkout_goods"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.wxml'] = [$gwx2, './package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.wxml'];else __wxAppCode__['package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.wxml'] = $gwx2( './package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.wxml' );
		__wxAppCode__['package_c/transac_batch_checkout/transac_batch_checkout.json'] = {"enablePullDownRefresh":false,"usingComponents":{"load-more-bar":"/wx_components/load_more_bar/load_more_bar","go-top":"/wx_components/go_top/go_top","toast":"/wx_components/toast/toast","wifi-error":"/wx_components/wifi_error/wifi_error","order-checkout-mall":"./component/order_checkout_mall/order_checkout_mall","invalid-goods-list":"./component/invalid_goods_list/invalid_goods_list","order-checkout-address":"../components_order_checkout/order_checkout_address/order_checkout_address","pay-channel":"/wx_components/pay_channel/pay_channel","order-checkout-picc":"../components_order_checkout/order_checkout_picc/order_checkout_picc","order-checkout-pay-bar":"../components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar","order-checkout-pay-win":"/wx_components/order_checkout_pay_win/order_checkout_pay_win","order-checkout-mall-coupons":"../components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons","order-checkout-coupons":"../components_order_checkout/order_checkout_coupons/order_checkout_coupons"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package_c/transac_batch_checkout/transac_batch_checkout.wxml'] = [$gwx2, './package_c/transac_batch_checkout/transac_batch_checkout.wxml'];else __wxAppCode__['package_c/transac_batch_checkout/transac_batch_checkout.wxml'] = $gwx2( './package_c/transac_batch_checkout/transac_batch_checkout.wxml' );
	
	define("package_c/components/collection_coupon/collection_coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var a=e.apply(this,arguments);return new Promise(function(e,t){function n(o,r){try{var c=a[o](r),l=c.value}catch(e){return void t(e)}if(!c.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),o=e(require("../../../libs/regenerator-runtime/runtime")),r=require("../../../actions/common"),c=require("../../../common/index"),l=e(require("../../../configs/api")),u={doLikeMall:10348,unLikeMall:10376,takeMerchantCoupon:"10151"},i=function(){function e(n){var r=this;t(this,e),n&&(this.page=n.page||{},this.addRootFunc=n.addRootFunc,this.getTrackingParamsFunc=n.getTrackingParamsFunc,this.confirmRefreshFunc=n.confirmRefreshFunc),this.likeUnlikeMall=function(){var e=a(o.default.mark(function e(a){var t,n,l,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.like?u.doLikeMall:u.unLikeMall,n=a.mallId,l=c.Request.requestDataWithCmd(t,{restfulParam:n}),e.next=6,c.Request.runRequest(l);case 6:return i=e.sent,e.abrupt("return",i);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}},e,r,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),this.getMallCoupon=function(){var e=a(o.default.mark(function e(a){var t,n,l,i,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.mallId,n=a.batchId,l={mall_id:t,batch_id:n},i=c.Request.requestDataWithCmd(u.takeMerchantCoupon,{params:l}),e.next=6,c.Request.runRequest(i);case 6:return s=e.sent,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}},e,r,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),this.initComponentData(n)}return n(e,[{key:"initComponentData",value:function(e){this.getMallInfo(e),this.addShowColCouponModalEvent(),this.addCloseColCouponModalEvent(),this.addGetColCouponEvent(),this.addDoLikeMallEvent()}},{key:"getMallInfo",value:function(e){var t=this;e.mallId&&a(o.default.mark(function a(){var n,r,u;return o.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=c.DataUtil.formatByPos(l.default.getMallSaleTip,e.mallId),a.next=4,c.Request.apiRequest("GET",n,null,!0);case 4:r=a.sent,(u=t.page.data.colCouponModal||{}).mallLogo=r.mall_logo||"",u.mallName=r.mall_name||"",u.salesTip=r.sales_tip||"",t.page.setData({colCouponModal:u}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.error(a.t0);case 15:case"end":return a.stop()}},a,t,[[0,12]])}))()}},{key:"addShowColCouponModalEvent",value:function(){var e=this;"function"==typeof this.addRootFunc&&this.addRootFunc("showColCouponModal",function(a){if(a){var t=e.page.data.colCouponModal||{};if(t.showColCouponModal=!0,a.currentTarget&&a.currentTarget.dataset&&a.currentTarget.dataset.mallId&&a.currentTarget.dataset.batchId){var n=a.currentTarget.dataset.mallId,o=a.currentTarget.dataset.batchId;e.batchId=o,t.mallId=n,t.batchId=o}else{var r=((a.detail||{}).target||{}).dataset||{};r&&r.mallId&&r.batchId&&(t.mallId=r.mallId,t.batchId=r.batchId,e.batchId=r.batchId)}e.page.setData({colCouponModal:t});var l={op:"click",page_section:"coupon_list",page_element:"like_coupon_btn"};c.ObjectUtil.assign(l,e.commonTrackingParams()),"order_checkout"===e.page.$pageName&&(l.page_el_sn="99221"),(0,c.TrackingRecord)(l,e.page);var u={op:"impr",page_section:"coupon_like_popup",page_element:"like_recieve_btn"};c.ObjectUtil.assign(u,e.commonTrackingParams()),"goods"===e.page.$pageName?u.page_el_sn="384664":"order_checkout"===e.page.$pageName&&(u.page_el_sn="384596"),(0,c.TrackingRecord)(u,e.page)}})}},{key:"addCloseColCouponModalEvent",value:function(){var e=this;"function"==typeof this.addRootFunc&&this.addRootFunc("closeColCouponModal",function(){var a=e.page.data.colCouponModal||{};a.showColCouponModal=!1,e.page.setData({colCouponModal:a});var t={op:"click",page_section:"coupon_like_popup",page_element:"close_btn"};c.ObjectUtil.assign(t,e.commonTrackingParams()),(0,c.TrackingRecord)(t,e.page)})}},{key:"addGetColCouponEvent",value:function(){var e=this;"function"==typeof this.addRootFunc&&this.addRootFunc("GetColCoupon",function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&t.currentTarget.dataset.mallId&&t.currentTarget.dataset.batchId){var n=t.currentTarget.dataset.mallId,l=t.currentTarget.dataset.batchId;if(n&&l){if(e.getCollectionCoupon)return;e.getCollectionCoupon=!0;var u=e;a(o.default.mark(function a(){var t,i,s,p,d,g;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.likeUnlikeMall({like:!0,mallId:n});case 3:return e.next=5,u.getMallCoupon({mallId:n,batchId:l});case 5:t=e.sent,i={},u.page.data.mallCouponsListData&&((s=u.page.data.mallCouponsListData.coupons||[]).forEach(function(e){if(String(e.batchId)===String(l)){e.canTakenCount--;var a=e.hasCountStr,t=0;a?(t=parseInt(a.substring(a.indexOf("有")+1,a.indexOf("张")),10),a="持有"+ ++t+"张"):a="持有"+ ++t+"张",e.hasCountStr=a}}),i["mallCouponsListData.coupons"]=s,u.confirmRefreshFunc&&"function"==typeof u.confirmRefreshFunc&&u.confirmRefreshFunc({clearCouponParams:!0})),u.page.data.couponsModalInfo&&(p=u.page.data.couponsModalInfo.couponInfoList||[]).forEach(function(e){for(var a=e.couponList||[],t=0;t<a.length;++t){var n=a[t]||{};if(String(n.id)===String(l)){n.can_taken_count-=1,n.can_take=n.can_taken_count>0,n.can_take||(n.button="已领取"),i["couponsModalInfo.couponInfoList[0].couponList["+t+"]"]=n;break}}}),(d=u.page.data.colCouponModal||{}).getColCouponSuccess=!0,d.likeMallSuccess=!0,d.discountStd=c.StdFormat.price(t.discount||0,100),i.colCouponModal=d,u.page.setData(i),u.getCollectionCoupon=!1,g={op:"impr",page_section:"coupon_like_popup",page_element:"have_like_btn"},c.ObjectUtil.assign(g,u.commonTrackingParams()),"goods"===u.page.$pageName?g.page_el_sn="384665":"order_checkout"===u.page.$pageName&&(g.page_el_sn="384600"),(0,c.TrackingRecord)(g,u.page),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),u.getCollectionCoupon=!1,u.page.$dispatch((0,r.showToast)("领取店铺收藏券失败"));case 26:case"end":return e.stop()}},a,e,[[0,22]])}))();var i={op:"click",page_section:"coupon_like_popup",page_element:"like_recieve_btn"};c.ObjectUtil.assign(i,u.commonTrackingParams()),"goods"===u.page.$pageName?i.page_el_sn="384664":"order_checkout"===u.page.$pageName&&(i.page_el_sn="384596"),(0,c.TrackingRecord)(i,u.page)}}})}},{key:"addDoLikeMallEvent",value:function(){var e=this;"function"==typeof this.addRootFunc&&this.addRootFunc("doLikeMall",function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(t.currentTarget.dataset,"likeMallSuccess")&&t.currentTarget.dataset.mallId){if(e.doLikeMallLock)return;e.doLikeMallLock=!0;var n=t.currentTarget.dataset,r=n.likeMallSuccess,l=n.mallId;a(o.default.mark(function a(){var t;return o.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.likeUnlikeMall({like:1!==parseInt(r,0),mallId:l});case 3:(t=e.page.data.colCouponModal||{}).likeMallSuccess=1!==parseInt(r,10),e.page.setData({colCouponModal:t}),e.doLikeMallLock=!1,a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),e.doLikeMallLock=!1;case 12:case"end":return a.stop()}},a,e,[[0,9]])}))();var u={op:"click",page_section:"coupon_like_popup",page_element:"have_like_btn"};c.ObjectUtil.assign(u,e.commonTrackingParams()),"goods"===e.page.$pageName?u.page_el_sn="384665":"order_checkout"===e.page.$pageName&&(u.page_el_sn="384600"),(0,c.TrackingRecord)(u,e.page)}})}},{key:"commonTrackingParams",value:function(){var e={display_type:36};if("goods"===this.page.$pageName&&this.page.data.goodsInfo){var a=this.page.data.goodsInfo||{};e.event_type=a.eventType}return this.batchId&&(e.batch_id=this.batchId),e}}]),e}();exports.default=i; 
 			}); 
		define("package_c/components/controller/coupons_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("../../../common/data_util")),o=e(require("../../../common/std_format")),a=e(require("../../../common/time_util")),t=e(require("../../../common/object_util")),u={formatCouponsData:function(e){var u=[],i={},s=[],r=[],_=[],m=e.serverTime||0;n.default.isArray(e.enableCoupons)||(e.enableCoupons=[]),n.default.isArray(e.disableCoupons)||(e.disableCoupons=[]);for(var p=function(e){var n={couponId:e.coupon_id,batchName:e.batch_name,discount:o.default.price(e.discount,100),minAmount:o.default.price(e.min_amount,100),startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),displayType:e.display_type,percent:o.default.price(e.percent?10*e.percent:0,100),titleDisplayName:e.title_display_name||"",timeDisplayName:e.time_display_name,ruleDisplayName:e.rule_display_name||"",sourceType:e.source_type};return(35===Number(e.display_type)||38===Number(e.display_type))&&e.max_discount>0&&(n.maxDiscountDesc=2147483647===Number(e.max_discount)?"优惠无上限":"最高减"+o.default.price(e.max_discount,100)+"元"),n},l=void 0,c=e.enableCoupons.length,d=0;d<c;d++)(l=e.enableCoupons[d]).min_amount===l.discount&&l.min_amount++,u.push(p(l));e.enableSuperpositionCoupons&&(i=function(e){return{batchName:e.batch_name||"",discount:o.default.price(e.discount,100),startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),rulesDesc:e.rules_desc||"",maxAvailableNum:e.max_available_num,selectedNum:e.max_available_num,selectedCertainNum:e.max_available_num,isReachUsedLimit:e.is_reach_used_limit||!1,showSuperEditBtn:!1,usable:e.usable||!1,userPossessNum:e.user_possess_num,superpositionConfig:{maxAvailableNum:e.superposition_coupon_config&&e.superposition_coupon_config.max_available_num?e.superposition_coupon_config.max_available_num:5,minOrderAmount:e.superposition_coupon_config&&e.superposition_coupon_config.min_order_amount?o.default.price(e.superposition_coupon_config.min_order_amount,100):50},timeDisplayName:e.time_display_name||"",ruleDisplayName:e.rule_display_name||"",sourceType:e.source_type||"",couponId:"101010"}}(e.enableSuperpositionCoupons));for(var f=e.disableCoupons.length,b=[],y=0;y<f;y++)if("COUPON_AVAILABLE_FOR_APP_ONLY"!==(l=e.disableCoupons[y]).unusable_reason_code){l.coupon_info.min_amount===l.coupon_info.discount&&l.coupon_info.min_amount++;var A=t.default.assign({disableReason:""},p(l.coupon_info));m>0&&m<l.start_time&&(A.disableReason="未到使用时间"),"COUPON_UNAVAILABLE_FOR_GOODS"===l.unusable_reason_code?(A.disableReason="COUPON_UNAVAILABLE_FOR_GOODS",_.push(A)):"CATEGORY_IS_UNAVAILABLE"===l.unusable_reason_code||l.unusable_reason_code.indexOf("COUPON_UNAVAILABLE_FOR")>-1?(A.disableReason="当前商品所属品类不可用",_.push(A)):"ORDER_AMOUNT_BELOW_LIMITATION"===l.unusable_reason_code?(A.disableReason="ORDER_AMOUNT_BELOW_LIMITATION",r.push(A)):_.push(A),m>0&&m<l.start_time?b.push(A):s.push(A)}return r.length>0&&(r=(r=r.sort(function(e,n){return parseInt(n.discount,10)-parseInt(e.discount,10)})).sort(function(e,n){return parseInt(e.minAmount,10)-parseInt(n.minAmount,10)})),_.length>0&&(_=(_=_.sort(function(e,n){return parseInt(n.discount,10)-parseInt(e.discount,10)})).sort(function(e,n){return parseInt(e.minAmount,10)-parseInt(n.minAmount,10)})),s=r.concat(_).concat(b),{enableCoupons:u,enableSuperpositionCoupons:i,disableCoupons:s}}};exports.default=u; 
 			}); 
		define("package_c/components/edit_address/edit_address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function i(i){return i&&i.__esModule?i:{default:i}}function t(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=e[s])}return i},s=function(){function i(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}return function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}}(),a=i(require("../../../common/data_util")),d=i(require("../../../common/object_util")),r=i(require("../../../controller/addresses_controller")),n=i(require("../../../common/util")),o=i(require("../../../storage/ram_manager")),c=require("../../../common/index"),h=require("../../../actions/common"),l=!1,u=function(){function i(e){t(this,i),this.nearbyPOIs=[],this.lastValidProviceIndex=0,this.lastValidCityIndex=0,this.lastValidDistrictIndex=0,this.lastValidProvinceId=0,this.lastValidCityId=0,this.lastValidDistrictId=0,e&&(this.commonTrackingParams=e.commonTrackingParams),this.formatRegions=function(i){var t=[];return i.forEach(function(i){t.push({regionId:i.id,regionName:i.region_name})}),t},this.regionIdInRegionsIndex=function(i,t){if(null==t)return-1;for(var e=0;e<t.length;++e){var s=t[e];if(parseInt(s.regionId,10)===parseInt(i,10))return e}return-1}}return s(i,[{key:"initComponentData",value:function(){var i=this;this.setData({isNameError:!1,isMobileError:!1,isAddressDetailError:!1,inputName:(i.curAddress||{}).name||"",inputMobile:(i.curAddress||{}).mobile||"",inputAddressDetail:(i.curAddress||{}).address||"",provinceIndex:1,cityIndex:1,districtIndex:1,loadingVisible:!1,windowTitle:i.windowTitle,toastData:{toastMessage:""},disabled:!0,districtAddress:{},alreadyChooseDistrict:!!i.curAddress,becomeFocus:!1,showLocationBtn:!1,showClearBtn:!1}),this.addFunc("hideEditAddressModule",this.hideEditAddressModule),this.addFunc("saveEditModuleAddress",this.saveEditModuleAddress),this.addFunc("removeEditModuleError",this.removeEditModuleError),this.addFunc("showRegionsPicker",this.showRegionsPicker),this.addFunc("confirmRegionsPicker",this.confirmRegionsPicker),this.addFunc("cancelRegionsPicker",this.cancelRegionsPicker),this.addFunc("hideRegionsPicker",this.hideRegionsPicker),this.addFunc("bindChange",this.bindChange),this.addFunc("bindNameChange",this.bindNameChange),this.addFunc("bindMobileChange",this.bindMobileChange),this.addFunc("bindAddressChange",this.bindAddressChange),this.addFunc("bindAddressBlurCheck",this.bindAddressBlurCheck),this.addFunc("didClickLocationBtn",this.didClickLocationBtn),this.addFunc("hideAllPicker",this.hideAllPicker),this.addFunc("didChoosePOI",this.didChoosePOI),this.addFunc("clearLocation",this.clearLocation),this.updateRegionsPicker("111");var t=this.getData();this.inputName=t.inputName,this.inputMobile=t.inputMobile,this.inputAddress=t.inputAddressDetail,this.imprTime=0,this.isAuto=!1,this.isEdit=!1,this.setDistrictAddress(),this.setDisableIfNeed(),this.locateUser()}},{key:"locateUser",value:function(){var i=this;i.hasLocationAuth&&wx.getLocation({success:function(t){var e=t.latitude,s=t.longitude;c.Request.apiRequest("GET","api/galen/huygens/location/decoder",{lat:e,lng:s,coord_type:1}).then(function(t){i.nearbyPOIs=t&&t.data,i.processNearbyPOIs()}).catch(function(i){console.error(i)})}})}},{key:"processNearbyPOIs",value:function(){if(this.nearbyPOIs&&!(this.nearbyPOIs.length<=0)){for(var i=[],t=0;t<this.nearbyPOIs.length;t++){var e=this.nearbyPOIs[t];e.thumb_address&&e.address?i.push(e):e.thumb_address&&!e.address?(e.address=e.thumb_address,i.push(e)):!e.thumb_address&&e.address&&(e.thumb_address=e.address,i.push(e))}this.nearbyPOIs=i,this.setData({nearbyPOIs:this.nearbyPOIs,showLocationBtn:!0});var s=this.nearbyPOIs[0];this.curAddress||(this.provinceId=s.province_id,this.cityId=s.city_id,this.districtId=s.district_id,this.lastValidProvinceId=this.provinceId,this.lastValidCityId=this.cityId,this.lastValidDistrictId=this.districtId,this.updateRegionsPicker("111",{from:"location"}),this.setData({alreadyChooseDistrict:!0}),this.setDistrictAddress())}}},{key:"didChoosePOI",value:function(i){if(i&&i.currentTarget&&i.currentTarget.dataset){var t=i.currentTarget.dataset.index||0,s=this.nearbyPOIs&&this.nearbyPOIs[t];if(s){parseInt(s.province_id,10)===parseInt(this.provinceId,10)&&parseInt(s.city_id,10)===parseInt(this.cityId,10)&&parseInt(s.district_id,10)===parseInt(this.districtId,10)||o.default.CPPage.$dispatch((0,h.showToast)("省市区信息已同步修改",{topValueInFixedPosition:"24%"})),this.provinceId=s.province_id,this.cityId=s.city_id,this.districtId=s.district_id,this.updateRegionsPicker("111"),this.hideAddressPicker(),this.setData({alreadyChooseDistrict:!0,inputAddressDetail:s.thumb_address}),this.inputAddress=s.thumb_address,this.setDistrictAddress(),this.isAuto=!0;var a=this.commonTrackingParams||{},d=e({op:"click",page_section:"address_popup",page_element:"select_geo",page_el_sn:"99894"},a);this.curAddress&&(d.addressId=this.curAddress.addressId),(0,c.TrackingRecord)(d)}}this.setDisableIfNeed()}},{key:"didClickLocationBtn",value:function(){this.hideRegionsPicker(),this.setData({addressSelectVisible:!0,becomeFocus:!1});var i=this.commonTrackingParams||{},t=e({op:"click",page_section:"address_popup",page_element:"rev_geo",page_el_sn:"99895"},i);this.curAddress&&(t.addressId=this.curAddress.addressId),(0,c.TrackingRecord)(t)}},{key:"clearLocation",value:function(){this.inputAddress="",this.setData({inputAddressDetail:"",showClearBtn:!1,becomeFocus:!0}),this.setDisableIfNeed()}},{key:"hideAddressPicker",value:function(){this.setData({addressSelectVisible:!1})}},{key:"addFunc",value:function(i,t){"function"==typeof this.addRootFunc&&this.addRootFunc(i,n.default.bind(t,this))}},{key:"bindNameChange",value:function(i){var t=i.detail.value;this.inputName=t,this.setDisableIfNeed()}},{key:"bindMobileChange",value:function(i){var t=i.detail.value;this.inputMobile=t,this.setDisableIfNeed()}},{key:"bindAddressChange",value:function(i){var t=i.detail.value;this.inputAddress=t,this.setDisableIfNeed(),this.isEdit=!0;var e=!!t;this.setData({showClearBtn:e}),this.checkAddressDetail(i)}},{key:"bindChange",value:function(i){var t=i.detail.value||[],e=parseInt(t[0],10),s=parseInt(t[1],10),a=parseInt(t[2],10);e!==parseInt(this.getData().provinceIndex,10)?this.updateRegionsPicker("011",{provinceIndex:e,cityIndex:0,districtIndex:0}):s!==parseInt(this.getData().cityIndex,10)?this.updateRegionsPicker("001",{provinceIndex:e,cityIndex:s,districtIndex:0}):a!==parseInt(this.getData().districtIndex,10)&&this.updateRegionsPicker("000",{provinceIndex:e,cityIndex:s,districtIndex:a})}},{key:"hideAllPicker",value:function(){this.hideRegionsPicker(),this.hideAddressPicker()}},{key:"hideRegionsPicker",value:function(){var i=this.getData();i.regionsSelectVisible&&(this.setData({regionsSelectVisible:!1}),i.provinceIndex>0&&i.cityIndex>0&&i.districtIndex>0?(this.setData({alreadyChooseDistrict:!0}),this.setDistrictAddress(),this.lastValidProviceIndex=i.provinceIndex,this.lastValidCityIndex=i.cityIndex,this.lastValidDistrictIndex=i.districtIndex,this.lastValidProvinceId=this.provinceId,this.lastValidCityId=this.cityId,this.lastValidDistrictId=this.districtId):this.setBackAddressInfo())}},{key:"cancelRegionsPicker",value:function(){this.setData({regionsSelectVisible:!1}),this.setBackAddressInfo()}},{key:"setBackAddressInfo",value:function(){this.setData({provinceIndex:this.lastValidProviceIndex,cityIndex:this.lastValidCityIndex,districtIndex:this.lastValidDistrictIndex}),this.provinceId=this.lastValidProvinceId,this.cityId=this.lastValidCityId,this.districtId=this.lastValidDistrictId}},{key:"confirmRegionsPicker",value:function(){this.verfiyAddress(!0)&&(this.hideAllPicker(),this.setDisableIfNeed())}},{key:"setDistrictAddress",value:function(){var i={},t=!0,e=this.getData();e.alreadyChooseDistrict?(i={provinceName:e.provinces[e.provinceIndex].regionName,cityName:e.cities[e.cityIndex].regionName,districtName:e.districts[e.districtIndex].regionName},t=!1):(i="选择地区",t=!0),this.setData({districtAddress:i,nullAddress:t})}},{key:"showRegionsPicker",value:function(){this.setData({regionsSelectVisible:!0,becomeFocus:!1,addressSelectVisible:!1}),this.updateRegionsPicker("111")}},{key:"show",value:function(){this.setData({editAddressWindowVisible:!0}),l=!1,this.isAuto=!1,this.isEdit=!1,this.imprTime=Date.now();var i=this.commonTrackingParams||{},t=e({op:"impr",page_section:"address_popup",page_el_sn:"99614"},i);this.curAddress&&(t.address_id=this.curAddress.addressId),(0,c.TrackingRecord)(t)}},{key:"hide",value:function(){this.setData({editAddressWindowVisible:!1}),this.hideAllPicker()}},{key:"setDisableIfNeed",value:function(){var i=!(this.inputName&&this.inputMobile&&this.inputAddress&&this.getData().alreadyChooseDistrict);this.setData({disabled:i})}},{key:"verifyAddressInfoValid",value:function(){return this.verifyName()&&this.verifyMobile()&&this.verfiyAddress()}},{key:"verifyName",value:function(){var i=this.getData().inputName,t=o.default.CPPage;return i.length<=0?(t.$dispatch((0,h.showToast)("收货人的名字不能为空",{topValueInFixedPosition:"24%"})),!1):!(a.default.getStringCharLength(i)>16)||(t.$dispatch((0,h.showToast)("名字不能超过8个字",{topValueInFixedPosition:"24%"})),this.setData({isNameError:!0}),!1)}},{key:"verifyMobile",value:function(){var i=this.getData().inputMobile,t=o.default.CPPage;if(i.length<=0)return t.$dispatch((0,h.showToast)("收货人的电话不能为空",{topValueInFixedPosition:"24%"})),!1;for(var e=i.replace(/\s|-/g,""),s="",a=0;a<e.length;a++)e.charCodeAt(a)<255&&(s+=e.substr(a,1));return!!n.default.checkTel(s)||(t.$dispatch((0,h.showToast)("请输入正确的手机号",{topValueInFixedPosition:"24%"})),this.setData({isMobileError:!0}),!1)}},{key:"verfiyAddress",value:function(i){var t=o.default.CPPage;if(!this.provinceId)return t.$dispatch((0,h.showToast)("请先选择省份",{topValueInFixedPosition:"24%"})),!1;if(!this.cityId)return t.$dispatch((0,h.showToast)("请先选择城市",{topValueInFixedPosition:"24%"})),!1;if(!this.districtId)return t.$dispatch((0,h.showToast)("请选择地区",{topValueInFixedPosition:"24%"})),!1;if(!i){var e=this.getData().inputAddressDetail;if(e.length<=0)return t.$dispatch((0,h.showToast)("详细地址不能为空",{topValueInFixedPosition:"24%"})),!1;if(e.match(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g))return t.$dispatch((0,h.showToast)("详细地址中不能包含表情符",{topValueInFixedPosition:"24%"})),!1;if(a.default.getStringCharLength(e)>100)return t.$dispatch((0,h.showToast)("地址填写过长",{topValueInFixedPosition:"24%"})),this.setData({isAddressDetailError:!0}),!1;if(/^[0-9]*$/.test(e))return t.$dispatch((0,h.showToast)("详细地址不能全为数字",{topValueInFixedPosition:"24%"})),this.setData({isAddressDetailError:!0}),!1}return!0}},{key:"btnClickTracking",value:function(i,t){var e={op:"click",page_section:"address_popup",page_element:i,time_length:Math.abs(Date.now()-this.imprTime)};this.curAddress&&(e.address_id=this.curAddress.addressId),t&&(e=d.default.assign(e,t)),(0,c.TrackingRecord)(e)}},{key:"hideEditAddressModule",value:function(i){this.hide();var t=this.commonTrackingParams||{},s=e({},t);this.btnClickTracking("close_btn",s),o.default.CPPage.$uploadFormId(i,!0)}},{key:"saveEditModuleAddress",value:function(i){if(!l){var t=this;if(this.setData({inputAddressDetail:this.inputAddress,inputMobile:this.inputMobile,inputName:this.inputName}),this.verifyAddressInfoValid()){this.setData({loadingVisible:!0,becomeFocus:!1});var s={name:this.getData().inputName,mobile:this.getData().inputMobile,provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,address:this.getData().inputAddressDetail};l=!0,this.curAddress?(s.isDefaultAddress=this.curAddress.isDefaultAddress,s.addressId=this.curAddress.addressId,r.default.modifyAddress(s,function(i){t.setData({loadingVisible:!1}),i.errorCode?o.default.CPPage.$dispatch((0,h.showToast)(i.errorMsg,{topValueInFixedPosition:"24%"})):t.saveAddressCallback&&t.saveAddressCallback(i),l=!1})):r.default.createAddress(s,function(i){t.setData({loadingVisible:!1}),i.errorCode?o.default.CPPage.$dispatch((0,h.showToast)(i.errorMsg,{topValueInFixedPosition:"24%"})):t.saveAddressCallback&&t.saveAddressCallback(i),l=!1});var a=0;this.isAuto&&this.isEdit?a=2:this.isAuto&&!this.isEdit&&(a=1);var d=this.commonTrackingParams||{},n=e({auto_add:a,page_el_sn:"99897"},d);this.btnClickTracking("save_btn",n)}o.default.CPPage.$uploadFormId(i,!0)}}},{key:"removeEditModuleError",value:function(i){var t=i.currentTarget.id;switch(this.hideAllPicker(),t){case"name":this.getData().isNameError&&this.setData({isNameError:!1});break;case"mobile":this.setData({isMobileError:!1});break;case"addressDetail":this.setData({isAddressDetailError:!1})}}},{key:"getData",value:function(){return"function"==typeof this.getDataFunc?this.getDataFunc():{}}},{key:"setData",value:function(i){"function"==typeof this.setDataFunc&&this.setDataFunc(i)}},{key:"updateRegionsPicker",value:function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e="111"===i,s=i?i.split(""):[1,1,1],a={},d=this.getData().provinceIndex,r=this.getData().cityIndex,n=this.getData().districtIndex;if(isNaN(t.provinceIndex)||(d=t.provinceIndex),isNaN(t.cityIndex)||(r=t.cityIndex),isNaN(t.districtIndex)||(n=t.districtIndex),"1"===String(s[0])){var o=this.getData().provinces||[];o.length<=0&&(o=[{regionName:"选择省份"}].concat(this.formatRegions(this.regionsDatas||[]))),this.provinceId&&e&&(d=this.regionIdInRegionsIndex(this.provinceId,o)),a.provinces=o}if("1"===String(s[1])){var c=[{regionName:"选择城市"}];if(this.regionsDatas.length>=d&&d>=1){var h=this.regionsDatas[d-1].children;c=c.concat(this.formatRegions(h||[]))}this.cityId&&e&&(r=this.regionIdInRegionsIndex(this.cityId,c)),a.cities=c}if("1"===String(s[2])){var l=[{regionName:"选择地区"}];if(this.regionsDatas.length>=d&&d>=1&&r>=1){var u=(this.regionsDatas[d-1].children[r-1]||{}).children;l=l.concat(this.formatRegions(u||[]))}this.districtId&&e&&(n=this.regionIdInRegionsIndex(this.districtId,l)),a.districts=l}a.provinceIndex=d,a.cityIndex=r,a.districtIndex=n,this.setData(a);var I=this;setTimeout(function(){I.setData(a)},500);var g=this.getData().provinces||[],p=this.getData().cities||[],v=this.getData().districts||[];this.provinceId=(g[d]||{}).regionId,this.cityId=(p[r]||{}).regionId,this.districtId=(v[n]||{}).regionId,"location"===t.from&&d>0&&r>0&&n>0&&(this.lastValidProviceIndex=d,this.lastValidCityIndex=r,this.lastValidDistrictIndex=n)}},{key:"load",value:function(i,t,e,s){var a=this;i?(this.curAddress=i,this.provinceId=i.provinceId,this.cityId=i.cityId,this.districtId=i.districtId):(this.curAddress=null,this.provinceId=null,this.cityId=null,this.districtId=null),this.data=s.data,this.setDataFunc=s.setDataFunc,this.getDataFunc=s.getDataFunc,this.addRootFunc=s.addRootFunc,this.windowTitle=s.windowTitle||"",this.regionsDatas=s.regionsDatas||[],this.loadCallback=t,this.saveAddressCallback=e,this.initComponentData(),setTimeout(function(){a.loadCallback()},100)}},{key:"checkAddress",value:function(i,t){var e=i.provinceId,s=i.cityId,a=i.districtId,d=this.formatRegions(t||[]),r=this.regionIdInRegionsIndex(e,d);if(r<0)return!1;var n=t[r].children,o=this.formatRegions(n||[]),c=this.regionIdInRegionsIndex(s,o);if(c<0)return!1;var h=t[r].children[c].children,l=this.formatRegions(h||[]);return!(this.regionIdInRegionsIndex(a,l)<0)}},{key:"bindAddressBlurCheck",value:function(i){this.checkAddressDetail(i)}},{key:"checkAddressDetail",value:function(i){var t=i.detail.value;return a.default.getStringCharLength(t)>100?(this.setData({isAddressDetailError:!0}),!1):(this.setData({isAddressDetailError:!1}),!0)}}]),i}();exports.default=u; 
 			}); 
		define("package_c/components/models/format/luck_draw.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../../../common/data_util")),a=e(require("../../../../common/std_format")),r={LuckyDraw:{key:"LuckyDraw",title:"抽奖规则",desc:'抽奖结果将实时公布，请前往微信公众号"拼多多”查看。',time:"{0}~{1}",detail:["1. 活动结束后将从拼单成功的所有订单中，随机抽取中奖者。","2. 一等奖为{0}（共{1}名），二等奖会全额退款并赠送88元代金券。未达拼单人数，款项将自动原路返还。拼单成功100%中奖，至少获得二等奖。","3. 中奖的商品预计{0}发放。"]},FreeTrial:{key:"FreeTrial",title:"活动规则",desc:'活动结果将实时公布，请前往微信公众号"拼多多”查看。',time:"{0}~{1}",detail:["1. 活动结束后将从拼单成功的所有订单中，随机选取{0}名试用者赠送。","2.一等奖为{0}（共{1}名），二等奖会全额退款并赠送88元代金券。未达拼单人数，款项将自动原路返还。拼单成功100%中奖，至少获得二等奖。","3. 试用的商品预计{0}发放。","4. 试用者完成试用报告后可以保留试用品。"]}},i=function(e,r){function i(e){function a(e){var t=e;return e<10&&(t="0"+e),t}var r=e.getMonth()+1,i=e.getDate(),u=a(e.getHours()),o=a(e.getMinutes());return t.default.formatByPos("{0}月{1}日{2}:{3}",r,i,u,o)}var u=new Date(1e3*e.start_time),o=new Date(1e3*e.end_time),l=i(u),n=i(o),d=e.name,s=e.goods_quantity,f=a.default.price(e.coupons_value,100),m=void 0;m=e.shipping_time?new Date(1e3*e.shipping_time):new Date(1e3*(e.end_time+86400));var y=t.default.formatByPos("{0}月{1}日",m.getMonth()+1,m.getDate());return r.time=t.default.formatByPos(r.time,l,n),"LuckyDraw"===r.key?r.detail=[r.detail[0],t.default.formatByPos(r.detail[1],d,s,f),t.default.formatByPos(r.detail[2],y)]:"FreeTrial"===r.key&&(r.detail=[t.default.formatByPos(r.detail[0],s,d),t.default.formatByPos(r.detail[1],d,s),t.default.formatByPos(r.detail[2],y),r.detail[3]]),r},u={formatData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={},u={},o=r[t.rulesKey]?JSON.parse(JSON.stringify(r[t.rulesKey])):{};return e&&(u={luckyId:e.lucky_id,luckyStatus:parseInt(e.status,10)||0,luckyStartTime:parseInt(e.start_time,10),luckyEndTime:parseInt(e.end_time,10)},a=i(e,o)),{rules:a,info:u}}};exports.default=u; 
 			}); 
		define("package_c/components/order_checkout_address/order_checkout_address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var s=e.apply(this,arguments);return new Promise(function(e,t){function a(d,n){try{var r=s[d](n),i=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}return a("next")})}}function t(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var a=function(){function e(e,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(s,t,a){return t&&e(s.prototype,t),a&&e(s,a),s}}(),d=e(require("../../../common/data_util")),n=e(require("../../../constants/addresses")),r=e(require("../../../configs/api")),i=e(require("../../../common/request")),o=e(require("../../../common/util")),u=e(require("../../../storage/ram_manager")),c=e(require("../../../libs/regenerator-runtime/runtime")),l=require("../../../actions/common"),h=require("../../../common/message"),f={Default:"查看配送说明"},g={Default:"当前地址不在配送范围内"},p=function(){function e(){var a=this;t(this,e),this.addresses=null,this.selectedAddressId=null,this.address=null,this.saleRegions=[],this.setDataFunc=null,this.getDataFunc=null,this.addRootFunc=null,this.addressSelectdispachId=null,this.trackingFunc=null,this.loadProvince=s(c.default.mark(function e(){var s,t;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=r.default.regions+"/"+n.default.Region.China,e.next=4,i.default.apiRequest("GET",s);case 4:return t=e.sent,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,a,[[0,8]])}))}return a(e,[{key:"updateOrderAddress",value:function(e){e?(this.address=e,e&&e.addressId&&(null==this.address.canReceived&&(this.address.canReceived=this.saleRegions.length<=0||this.saleRegions.indexOf(""+this.address.provinceId)>=0),this.address.notAllowedNotice=g.Default,this.address.notAllowedArrow=f.Default),this.setData({addressInfo:this.address,getPostage:!0})):this.setData({addressInfo:{addressId:0,provinceId:0,name:"",mobile:"",province:"",city:"",district:"",addressType:"",address:"",canReceived:!0,notAllowedNotice:g.Default,notAllowedArrow:f.Default},getPostage:!0})}},{key:"initComponentData",value:function(){this.setData({showWechatAddAddress:!!wx.chooseAddress,addressInfo:{addressId:0,provinceId:0,name:"",mobile:"",province:"",city:"",district:"",addressType:"",address:"",canReceived:!0,notAllowedNotice:g.Default,notAllowedArrow:f.Default},regionVisible:!1,saleRegionTips:["",""],notAllowedNotice:g.Default,notAllowedArrow:f.Default,regionTipsShow:!1,showLoading:!1}),this.setSelectedAddress(this.addresses,this.selectedAddressId)}},{key:"updateModel",value:function(e){var s=void 0;e&&(this.address=e),this.address&&this.address.addressId&&(s={addressId:this.address.addressId,provinceId:this.address.provinceId,name:this.address.name,mobile:this.address.mobile,province:this.address.province,city:this.address.city,district:this.address.district,address:this.address.address,canReceived:this.saleRegions.length<=0||this.saleRegions.indexOf(""+this.address.provinceId)>=0||this.isVirtualGoods}),s&&this.setData({addressInfo:s})}},{key:"setSelectedAddress",value:function(e,s){if(d.default.isArray(e)){var t=-1,a=-1;if(e.length<=0)this.address=null;else{for(var n=0;n<e.length;n++){var r=e[n];if(r.addressId&&String(r.addressId)===String(s))return a=n,void this.updateModel(r);r.isDefaultAddress&&(t=n)}a<0&&t>=0&&this.updateModel(e[t])}}}},{key:"showRegionTips",value:function(){0===this.getData().saleRegionTips[0].length?this.setSaleRegionsInfo():this.setData({regionTipsShow:!0})}},{key:"hideRegionTips",value:function(){this.setData({regionTipsShow:!1})}},{key:"editAddress",value:function(e){h.Message.on(h.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS,o.default.bind(this.selectAddress,this),!0);var s=this;u.default.CPPage.$forward("addresses",{sel_address_id:s.address&&s.address.addressId||"",allowed_regions:s.saleRegions});var t="change_address";e&&e.currentTarget&&e.currentTarget.dataset&&"cancel_pay_prompt"===e.currentTarget.dataset.refer&&(t="alt_add"),"function"==typeof s.trackingFunc&&s.trackingFunc(t)}},{key:"selectAddress",value:function(e){for(var s=this,t=e||[],a=void 0,d=void 0,n=0;n<t.length;n++){var o=t[n];o.isUsing&&(d=o),o.isDefaultAddress&&(a=o)}var c=this.getData();if(c&&c.disableUserAction){if(d&&d.addressId){if(s.updateOrderAddressLock)return;s.updateOrderAddressLock=!0;var f={order_sn:s.orderSn,address_id:d.addressId};i.default.apiRequest("POST",r.default.updateOrderAddress,f).then(function(){s.updateOrderAddressLock=!1;var e=d;s.updateOrderAddress(e),h.Message.off(h.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS)}).catch(function(){s.updateOrderAddressLock=!1,u.default.CPPage.$dispatch((0,l.showToast)("运费变动，该地址暂不支持修改，请重新下单"))})}}else{var g=d||a;this.updateOrderAddress(g),h.Message.off(h.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS)}}},{key:"setSaleRegionsInfo",value:function(){var e=this,t=this;t.setData({showLoading:!0,loadingNeedBg:!0});var a=t.saleRegions,d=void 0;if(t.getDataFunc){var r=t.getDataFunc();r.addressInfo&&(d=r.addressInfo.addressId)}if(!(!d||d<=0||a.length<1||a[0].toString()===n.default.Region.China)){var i=[],o=[];s(c.default.mark(function s(){var d,n,r,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.loadProvince();case 3:for(d=e.sent,n=0;n<d.length;n++)r=d[n],a.indexOf(""+r.region_id)>=0?o.push(r.region_name):i.push(r.region_name);u="",0===o.length||i.length<=o.length?u=["该商品部分地区暂不支持配送","（港澳台、"+i.join("、")+"）"]:(0===i.length||o.length<=i.length)&&(u=["该商品目前仅支持配送至",o.join("、")+"区域"]),t.setData({saleRegionTips:u,regionTipsShow:!0,showLoading:!1,loadingNeedBg:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},s,e,[[0,10]])}))()}}},{key:"setData",value:function(e){"function"==typeof this.setDataFunc&&this.setDataFunc(e)}},{key:"getData",value:function(){return"function"==typeof this.getDataFunc?this.getDataFunc():{}}},{key:"addFunc",value:function(e,s){"function"==typeof this.addRootFunc&&this.addRootFunc(e,o.default.bind(s,this))}},{key:"load",value:function(e,s,t,a){var d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this.isVirtualGoods=e,this.addresses=s,this.selectedAddressId=t,this.saleRegions=a,this.setDataFunc=d.setDataFunc,this.getDataFunc=d.getDataFunc,this.addRootFunc=d.addRootFunc,this.initComponentData(d),this.addFunc("editAddress",this.editAddress),this.addFunc("hideRegionTips",this.hideRegionTips),this.addFunc("showRegionTips",this.showRegionTips)}},{key:"setTrackingFunc",value:function(e){this.trackingFunc=e}}]),e}();exports.default=p; 
 			}); 
		define("package_c/components/order_checkout_coupons/order_checkout_coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return o&&o.__esModule?o:{default:o}}function t(o){return function(){var t=o.apply(this,arguments);return new Promise(function(o,e){function n(u,a){try{var r=t[u](a),p=r.value}catch(o){return void e(o)}if(!r.done)return Promise.resolve(p).then(function(o){n("next",o)},function(o){n("throw",o)});o(p)}return n("next")})}}function e(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function o(o,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),u=o(require("../../../common/request")),a=o(require("../../../storage/ram_manager")),r=o(require("../../../common/data_util")),p=o(require("../../../libs/regenerator-runtime/runtime")),s=require("../../../common/index"),i=o(require("../controller/coupons_controller")),c=require("../../../actions/common"),l={loadMallCoupons:"10476",getPlatformCoupons:"10477"},d=function(){function o(t){e(this,o),this.setDataFunc=null,this.addRootFunc=null,this.getTrackingParamsFunc=null,this.dataObj={},this.page=a.default.CPPage,this.groupOrderId="",this.bizType=null,this.bizTag=null,t&&(this.setDataFunc=t.setDataFunc,this.addRootFunc=t.addRootFunc,this.getTrackingParamsFunc=t.getTrackingParamsFunc,this.isOrderCheckoutStep=t.isOrderCheckoutStep,this.groupOrderId=t.groupOrderId,this.bizType=t.bizType,this.bizTag=t.bizTag,this.extendMap=t.extendMap),this.addLoadMorePlatCouponsEvent(),this.addSuperEditBtnClkEvent(),this.addUpdateSuperNumberEvent(),this.addBlurSuperNumInputEvent(),this.addShowPlatformCouponListEvent(),this.addSelectCouponItemEvent()}return n(o,[{key:"loadCoupons",value:function(){var o=this.page.confirmRenderData||{},t=o.promotionVo||{},e=t.merchantCouponVo||{},n=t.platformCouponVo||{},u={mallCoupons:{enableCoupons:[],disableCoupons:[]},platformCoupons:{enableCoupons:[],disableCoupons:[]}};if(e.displayName||n.displayName){var a=o.stepGoodsVo||o.goodsVo||{},r=o.skuVo||{},p=o.groupVo||{},i={price:a.unitPrice,cat_id:a.catId,cat_id1:a.catId1,cat_id2:a.catId2,cat_id3:a.catId3,goods_type:a.goodsType,event_type:a.eventType};if(Object.prototype.hasOwnProperty.call(a,"overseaType")&&(i.oversea_type=a.overseaType),void 0!==a.activityType&&(i.activity_type=a.activityType),this.couponsParams={groupId:a.groupId||p.groupId,goodsId:a.goodsId,skuId:a.skuId||r.skuId,groupOrderId:this.groupOrderId,goodsNumber:a.goodsNumber,sourceMallId:a.mallId,preOrderGoodsVo:i},e.displayName&&(this.loadMallCoupons(),this.isOrderCheckoutStep&&this.getTrackingParamsFunc&&"function"==typeof this.getTrackingParamsFunc)){var c=this.getTrackingParamsFunc("impr","mall_discount",null,"206175");(0,s.TrackingRecord)(c)}if(n.displayName&&(this.loadPlatformCoupons(),this.isOrderCheckoutStep&&this.getTrackingParamsFunc&&"function"==typeof this.getTrackingParamsFunc)){var l=this.getTrackingParamsFunc("impr","platform_discount",null,"206176");(0,s.TrackingRecord)(l)}}else this.setDataFunc&&this.setDataFunc({couponInfos:u})}},{key:"loadMallCoupons",value:function(){var o=t(p.default.mark(function o(){var t,e,n,a,r,s,c,d;return p.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=this,o.prev=1,e=t.couponsParams,n={goods_id:e.goodsId,sku_id:e.skuId,sku_number:e.goodsNumber,source_mall_id:e.sourceMallId,pre_order_goods_vo:e.preOrderGoodsVo},e.groupId&&(n.group_id=e.groupId),e.groupOrderId&&(n.group_order_id=e.groupOrderId),this.extendMap&&(n.extend_map=this.extendMap),a=u.default.requestDataWithCmd(l.loadMallCoupons,{params:n}),o.next=10,u.default.runSecondaryRequestForPage(a,t.page);case 10:r=o.sent,s=r.coupons||{},c={serverTime:r.server_time||0,enableCoupons:s.usable_coupons||[],disableCoupons:s.unusable_coupon_list||[]},d=i.default.formatCouponsData(c),t.setCouponInfosData("mallCoupons",d),o.next=20;break;case 17:o.prev=17,o.t0=o.catch(1),console.error(o.t0);case 20:case"end":return o.stop()}},o,this,[[1,17]])}));return function(){return o.apply(this,arguments)}}()},{key:"loadPlatformCoupons",value:function(){var o=this;this.usePriority=null;var t=this.page.confirmRenderData.promotionVo.platformCouponVo;this.getPlatformCoupons().then(function(e){var n=e.coupons||{},u={serverTime:e.server_time||0,enableCoupons:n.usable_coupons||[],disableCoupons:n.unusable_coupon_list||[],enableSuperpositionCoupons:n.usable_superposition_coupon_vo||{}},a=i.default.formatCouponsData(u);t.superpositionCouponNumber&&(a.enableSuperpositionCoupons.selectedNum=t.superpositionCouponNumber,a.enableSuperpositionCoupons.selectedCertainNum=t.superpositionCouponNumber),o.processPlatformCoupons(a)}).catch(function(o){console.error(o)})}},{key:"processPlatformCoupons",value:function(o){var t=!1;o.enableSuperpositionCoupons&&o.enableSuperpositionCoupons.maxAvailableNum>0&&o.enableSuperpositionCoupons.usable&&(t=!0),this.setCouponInfosData("platformCoupons",o),this.setDataFunc&&this.setDataFunc({hasSuperpositionCoupons:t,showCouponLoadMore:20===o.enableCoupons.length})}},{key:"getPlatformCoupons",value:function(){var o=this;return new Promise(function(t,e){var n=o.couponsParams,a=o.page.confirmRenderData||{},p={sku_id:n.skuId,sku_number:n.goodsNumber,goods_id:n.goodsId,pre_order_goods_vo:n.preOrderGoodsVo,group_order_id:n.groupOrderId||""};if(a.stepVo&&a.stepVo.stepPrice){var s=a.stepVo.stepPrice,i=a.promotionVo.merchantCouponVo||{};1===Number(i.promotionStatus)&&(i.eventId>0&&i.eventDiscount>0&&(s=r.default.accSub(s,i.eventDiscount)),i.couponId&&i.discount>0&&(s=r.default.accSub(s,i.discount))),p.current_order_amount=s}else{var c=a.orderPrice,d=a.promotionVo.merchantCouponVo||{};1===Number(d.promotionStatus)&&(d.eventId>0&&d.eventDiscount>0&&(c=r.default.accSub(c,d.eventDiscount)),d.couponId&&d.discount>0&&(c=r.default.accSub(c,d.discount))),p.current_order_amount=c}n.groupId&&(p.group_id=n.groupId),o.usePriority&&(p.use_priority=o.usePriority),o.bizTag&&(p.biz_tag=o.bizTag.indexOf("[")>-1&&o.bizTag.indexOf("]")>-1?o.bizTag:JSON.stringify([o.bizTag])),o.bizType&&(p.biz_type=parseInt(o.bizType,10)),o.extendMap&&(p.extend_map=o.extendMap);var m=u.default.requestDataWithCmd(l.getPlatformCoupons,{params:p});u.default.runMainRequestForPage(m,o.page).then(function(e){e&&e.coupons&&e.coupons.use_priority&&(o.usePriority=e.coupons.use_priority),t(e)}).catch(function(o){e(o)})})}},{key:"addLoadMorePlatCouponsEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("loadMorePlatCoupons",function(){o.loadMorePlatCoupons()})}},{key:"loadMorePlatCoupons",value:function(){var o=this;this.getPlatformCoupons().then(function(t){var e=t.coupons||{},n=e.usable_coupons||[],u={serverTime:t.server_time||0,enableCoupons:n,disableCoupons:e.unusable_coupon_list||[],enableSuperpositionCoupons:e.usable_superposition_coupon_vo||{}},r=i.default.formatCouponsData(u),p=a.default.CPData.myPlatformCouponsData,s=a.default.CPData.couponInfos;r&&r.enableCoupons&&(p.enableCoupons=p.enableCoupons.concat(r.enableCoupons),s&&s.platformCoupons&&s.platformCoupons.enableCoupons&&(s.platformCoupons.enableCoupons=s.platformCoupons.enableCoupons.concat(r.enableCoupons))),o.setDataFunc&&o.setDataFunc({myPlatformCouponsData:p,couponInfos:s,showCouponLoadMore:20===n.length})}).catch(function(o){console.error(o)})}},{key:"setCouponInfosData",value:function(o,t){var e=a.default.CPData.couponInfos||{};e[o]=t,this.setDataFunc&&this.setDataFunc({couponInfos:e})}},{key:"addSuperEditBtnClkEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("superEditBtnClk",function(){o.superEditBtnClk()})}},{key:"superEditBtnClk",value:function(){var o=a.default.CPData.couponInfos,t=o.platformCoupons.enableSuperpositionCoupons;t.selectedCertainNum=t.selectedNum,t.showSuperEditBtn=!1,o.platformCoupons.enableSuperpositionCoupons=t,this.setDataFunc&&this.setDataFunc({couponInfos:o});var e=this.page.confirmRenderData.promotionVo||{},n={platform_coupon_vo:{coupon_id:null,not_use:!1,superposition_coupon_number:t.selectedNum},merchant_coupon_vo:{coupon_id:e.merchantCouponVo.couponId,not_use:e.merchantCouponVo.notUse,event_id:e.merchantCouponVo.eventId}};this.page.confirmRefresh({promotionVoParams:n}),this.page.hideCouponsList()}},{key:"addUpdateSuperNumberEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("updateSuperNumber",function(t){o.updateSuperNumber(t)})}},{key:"updateSuperNumber",value:function(o){var t=parseInt(o.target.dataset.delta,10),e=a.default.CPData.couponInfos.platformCoupons.enableSuperpositionCoupons,n=e.maxAvailableNum,u=e.selectedNum;1===Number(u)&&t<0||Number(u)===Number(n)&&t>0||(u+=t,this.setupSuperNumData(u))}},{key:"addBlurSuperNumInputEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("blurSuperNumInput",function(t){o.blurSuperNumInput(t)})}},{key:"blurSuperNumInput",value:function(o){var t=parseInt(o.detail.value.trim(),10),e=a.default.CPData.couponInfos.platformCoupons.enableSuperpositionCoupons.maxAvailableNum;isNaN(t)&&(t=1),t<1&&(t=1),t>e&&(t=e),this.setupSuperNumData(t)}},{key:"setupSuperNumData",value:function(o){var t=a.default.CPData.couponInfos,e=t.platformCoupons.enableSuperpositionCoupons;e.selectedNum=o,e.showSuperEditBtn=!0,t.platformCoupons.enableSuperpositionCoupons=e,this.setDataFunc&&this.setDataFunc({couponInfos:t}),this.page.setCouponListWindowData("myPlatformCouponsData",a.default.CPData.couponTitle,(a.default.CPData.couponInfos||{}).platformCoupons||{},!1)}},{key:"addShowPlatformCouponListEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("showPlatformCouponList",function(){o.showPlatformCouponList()})}},{key:"showPlatformCouponList",value:function(){if(!a.default.CPData.hidePlatformCouponList)if(a.default.CPData.disableUserAction)a.default.CPPage.$dispatch((0,c.showToast)("订单已生成，信息不可更改"));else{var o=(a.default.CPData.couponInfos||{}).platformCoupons||{};if((o.enableSuperpositionCoupons||{}).selectedNum?o.enableSuperpositionCoupons.selectedNum=o.enableSuperpositionCoupons.selectedCertainNum:o.enableSuperpositionCoupons.selectedNum="",this.page.setCouponListWindowData("myPlatformCouponsData",a.default.CPData.couponTitle,o,!1),this.getTrackingParamsFunc&&"function"==typeof this.getTrackingParamsFunc){var t={};t=this.isOrderCheckoutStep?this.getTrackingParamsFunc("click","platform_discount","discount_btn","206176"):this.getTrackingParamsFunc("click",null,"general_coupons"),(0,s.TrackingRecord)(t)}}}},{key:"addSelectCouponItemEvent",value:function(){var o=this;"function"==typeof o.addRootFunc&&o.addRootFunc("selectCouponItem",function(t){o.selectCouponItem(t)})}},{key:"selectCouponItem",value:function(o){var t=void 0,e=void 0,n=void 0,u=void 0;if(o&&o.detail&&o.detail.target&&o.detail.target.dataset&&o.detail.target.dataset.couponId&&o.detail.target.dataset.eventId&&o.detail.target.dataset.isMallCoupon){var r=o.detail.target.dataset;e=r.couponId,n=r.eventId,t=r.isMallCoupon,u=r.notUse}else{var p=o.currentTarget.dataset;e=p.couponId,n=p.eventId,t=p.isMallCoupon,u=p.notUse}var s=this.page.confirmRenderData.promotionVo||{},i=this.getCurrentCouponParams();if(t){var c=s.merchantCouponVo.eventId||0,l=s.merchantCouponVo.couponId;u||n>0&&String(n)===String(c)||e>0&&String(e)===String(l)?(s.merchantCouponVo.notUse=!0,s.merchantCouponVo.promotionStatus=2,i.merchant_coupon_vo.not_use=!0,i.merchant_coupon_vo.event_id=null,i.merchant_coupon_vo.coupon_id=null):e>0?(s.merchantCouponVo.promotionStatus=1,s.merchantCouponVo.couponId=e,s.merchantCouponVo.eventId=null,s.merchantCouponVo.notUse=!1,i.merchant_coupon_vo.coupon_id=e,i.merchant_coupon_vo.not_use=!1,i.merchant_coupon_vo.event_id=null):n>0&&(s.merchantCouponVo.promotionStatus=1,s.merchantCouponVo.couponId=null,s.merchantCouponVo.eventId=n,s.merchantCouponVo.notUse=!1,i.merchant_coupon_vo.event_id=n,i.merchant_coupon_vo.coupon_id=null,i.merchant_coupon_vo.not_use=!1),delete i.platform_coupon_vo,this.setDataFunc&&this.setDataFunc({promotionVo:s}),this.page.hideCouponsList(),this.page.hideMallCouponsList()}else{var d=s.platformCouponVo.couponId,m=s.platformCouponVo.promotionStatus,f=s.platformCouponVo.superpositionCouponNumber;if(u||String(e)===String(d)||1===Number(m)&&f>0&&"101010"===String(e))s.platformCouponVo.notUse=!0,s.platformCouponVo.promotionStatus=null,s.platformCouponVo.couponId=null,i.platform_coupon_vo.not_use=!0,i.platform_coupon_vo.superposition_coupon_number=null,i.platform_coupon_vo.coupon_id=null;else if("101010"===String(e)){var C=((a.default.CPData.couponInfos||{}).platformCoupons||{}).enableSuperpositionCoupons||{};s.platformCouponVo.isSuperPositionCoupon=!0,s.platformCouponVo.promotionStatus=1,s.platformCouponVo.couponId=null,s.platformCouponVo.notUse=!1,i.platform_coupon_vo.superposition_coupon_number=C.selectedNum,i.platform_coupon_vo.coupon_id=null,i.platform_coupon_vo.not_use=!1}else e>0&&(s.platformCouponVo.promotionStatus=1,s.platformCouponVo.couponId=e,s.platformCouponVo.isSuperPositionCoupon=null,s.platformCouponVo.notUse=!1,i.platform_coupon_vo.coupon_id=e,i.platform_coupon_vo.not_use=!1,i.platform_coupon_vo.superposition_coupon_number=null);this.setDataFunc&&this.setDataFunc({promotionVo:s}),this.page.hideCouponsList()}this.page.confirmRefresh({promotionVoParams:i})}},{key:"getCurrentCouponParams",value:function(){var o=this.page.confirmRenderData.promotionVo||{};return{platform_coupon_vo:{coupon_id:1===Number(o.platformCouponVo.promotionStatus)?o.platformCouponVo.couponId:null,not_use:o.platformCouponVo.notUse,superposition_coupon_number:o.platformCouponVo.superpositionCouponNumber},merchant_coupon_vo:{coupon_id:1===Number(o.merchantCouponVo.promotionStatus)?o.merchantCouponVo.couponId:null,not_use:o.merchantCouponVo.notUse,event_id:o.merchantCouponVo.eventId}}}}]),o}();exports.default=d; 
 			}); 
		define("package_c/components/order_checkout_data_format.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=t(require("../../common/std_format")),o=t(require("../../constants/goods")),i=t(require("../../common/time_util")),r={formatRenderData:function(t){var r=this,a={addressVo:t.address_vo||{},confirmCode:t.confirm_code,confirmMessage:t.confirm_message,idCardVo:t.id_card_vo||{},mallVo:t.mall_vo||{},merchantPromotionPrice:parseInt(t.merchant_promotion_price,10)||0,orderPrice:t.order_price,orderPriceStd:e.default.price(t.order_price,100),payPrice:t.pay_price,payPriceStd:e.default.price(t.pay_price,100),platformPromotionPrice:parseInt(t.platform_promotion_price,10)||0,serverTime:t.server_time,shippingPrice:t.shipping_price,stdShippingPrice:e.default.price(t.shipping_price,100),discountAmount:t.order_price-t.pay_price,orderServicePath:t.order_service_path||""};if(t.option_map){var s=t.option_map,n={};s.order_refresh&&(n.orderRefresh=s.order_refresh),a.optionMap=n}t.extend_map&&(a.extendMap=t.extend_map),Object.prototype.hasOwnProperty.call(t,"installment_list")&&(a.installmentList=t.installment_list),a.discountAmount>0&&(a.discountAmountStd=e.default.price(t.order_price-t.pay_price,100));var p=t.group_vo||{},c={customerNum:p.customer_num,groupId:p.group_id,orderLimit:p.order_limit};a.groupVo=c;var _=t.address_vo||{},d={address:_.address,addressId:_.address_id,city:_.city,cityId:_.city_id,district:_.district,districtId:_.district_id,isGoodsSoldHere:_.is_goods_sold_here,labels:_.labels,mobile:_.mobile,name:_.name,province:_.province,provinceId:_.province_id};a.addressVo=d;var l=t.sku_vo||{},u={limitQuantity:l.limit_quantity,quantity:l.quantity,skuId:l.sku_id,spec:l.spec,thumbUrl:l.thumb_url,stockEmpty:parseInt(l.ware_id,10)>0&&0===l.quantity};a.skuVo=u;var m=t.goods_vo||{},v={activityId:m.activity_id,activityType:m.activity_type,allowedRegion:m.allowed_region||[],catId:m.cat_id,catId1:m.cat_id1,catId2:m.cat_id2,catId3:m.cat_id3,catId4:m.cat_id4,costProvinceCodes:m.cost_province_codes,costTemplateId:m.cost_template_id,customerNum:m.customer_num,deliveryStatus:m.delivery_status,eventType:m.event_type,goodsId:m.goods_id,goodsName:m.goods_name,goodsNumber:m.goods_number,goodsType:m.goods_type,hasActivity:m.has_activity,hasPromotion:m.has_promotion,huabeiStatus:m.huabei_status,invoiceStatus:m.invoice_status,isCustoms:m.is_customs,labels:m.labels,limitNumber:m.limit_number,mallId:m.mall_id,realNameAuth:m.real_name_auth,sfExpressStatus:m.sf_express_status,unitPrice:m.unit_price,unitPriceStd:e.default.price(m.unit_price,100),needAccount:m.need_account,accountTypes:m.account_types,limitStatus:m.limit_status};if((m.oversea_type||0===m.oversea_type)&&(v.overseaType=m.oversea_type),a.goodsVo=v,t.step_goods_vo){var y=t.step_goods_vo||{},f={activityId:y.activity_id,activityType:y.activity_type,catId:y.cat_id,catId1:y.cat_id1,catId2:y.cat_id2,catId3:y.cat_id3,catId4:y.cat_id4,deposit_order_sn:y.deposit_order_sn,eventType:y.event_type,goodsId:y.goods_id,goodsNumber:y.goods_number,goodsType:y.goods_type,groupId:y.group_id,mallId:y.mall_id,realNameAuth:y.real_name_auth,skuId:y.sku_id,unitPrice:y.unit_price,unitPriceStd:e.default.price(y.unit_price,100)};a.stepGoodsVo=f}a.isVirtualGoods=[o.default.GoodsType.MOBILE_DATA,o.default.GoodsType.QQ_COIN,o.default.GoodsType.OIL_CARD,o.default.GoodsType.MOBILE_FARE,o.default.GoodsType.VIDEO_MEMBER].indexOf(parseInt(v.goodsType,10))>=0;var h=t.promotion_vo||{},g=h.merchant_coupon_vo||{},I=h.platform_coupon_vo||{},P={merchantCouponVo:this.formatCouponData(g),platformCouponVo:this.formatCouponData(I)};if(h.deposit_coupon_vo){var b=h.deposit_coupon_vo,T={deposit:b.deposit,discount:b.discount,eventId:b.event_id,expansion:b.expansion};P.depositCouponVo=T}a.promotionVo=P;var C=t.promotion_event_vo||{},S={displayName:C.display_name,eventId:C.event_id,eventName:C.event_name,itemList:C.item_list||[]};a.promotionEventVo=S;var V=t.pay_vo||{},O={};Object.prototype.hasOwnProperty.call(V,"attr_map")&&(O.attrMap=V.attr_map);var A=V.pay_channel_list||[],N=[];A.length>0&&A.forEach(function(t){N.push(r.formatPayChannelList(t))}),O.payChannelList=N,a.payVo=O;var E=t.step_vo||{},L={};if(E.deposit_price>0&&(L.depositPrice=E.deposit_price,L.depositPriceStd=e.default.price(E.deposit_price,100)),E.inflate_price>0&&(L.inflatePrice=E.inflate_price,L.inflatePriceStd=e.default.price(E.inflate_price,100)),E.step_price&&(L.stepPriceStd=e.default.price(E.step_price,100),L.stepPrice=E.step_price),E.step_pay_start_time){var M=E.step_pay_start_time;L.stepPayStartTimeObj=i.default.getTimeMaterialFromTimePoint(M)}a.stepVo=L;var k=t.order_vo||{},x={payContent:k.pay_content,payPrice:k.pay_price,payPriceStd:e.default.price(k.pay_price,100),payTitle:k.pay_title};if(a.orderVo=x,t.cell_bar_vo){var R=t.cell_bar_vo,w={protocolTitle:R.protocol_title,protocolUrl:R.protocol_url,content:R.content||"",title:R.title||""};a.cellBarVo=w}var D=t.shipping_vo||{},G={shippingPrice:D.shipping_price,shippingPriceStd:e.default.price(D.shipping_price,100),title:D.title};a.shippingVo=G;var j=t.service_vo||{},q={clickType:j.click_type,displayContent:j.display_content,displayTitle:j.display_title,srvShortTag:j.srv_short_tag},z=j.template_result_list||[],B=[];return z.length>0&&z.forEach(function(t){B.push(r.formatTemplateResultList(t))}),q.templateResultList=B,a.serviceVo=q,a},formatCouponData:function(t){var e={batchId:t.batch_id,couponId:t.coupon_id,discount:t.discount,displayName:t.display_name,displayType:t.display_type,isPlatformCouponForbidden:t.is_platform_coupon_forbidden,isReachMinAmount:t.is_reach_min_amount,isSuperPositionCoupon:t.is_super_position_coupon,minAmount:t.min_amount,notUse:t.not_use,promotionStatus:parseInt(t.promotion_status,10),superpositionCouponNumber:t.superposition_coupon_number,category:t.category};return Object.prototype.hasOwnProperty.call(t,"event_discount")&&(e.eventDiscount=t.event_discount),Object.prototype.hasOwnProperty.call(t,"event_id")&&(e.eventId=t.event_id),Object.prototype.hasOwnProperty.call(t,"promotion_event_type")&&(e.promotionEventType=t.promotion_event_type),e},formatPayChannelList:function(t){var e={appId:t.app_id,channel:t.channel,display:t.display,enable:t.enable,payContent:t.pay_content,paySubContent:t.pay_sub_content,rank:t.rank,recommend:t.recommend,signed:t.signed},o=t.pay_content_vo||{},i={},r=t.sub_pay_content_vo||{},a={};if(o.content){if(i.content=o.content,o.css_vo){var s=o.css_vo,n={};s.font_color&&s.font_size&&(n.fontColor=s.font_color,n.fontSize=s.font_size),i.cssVo=n}e.payContentVo=i}if(r.content){if(a.content=r.content,r.css_vo){var p=r.css_vo,c={};p.font_color&&p.font_size&&(c.fontColor=p.font_color,c.fontSize=p.font_size),a.cssVo=c}e.subPayContentVo=a}return e||{}},formatTemplateResultList:function(t){return{selected:t.selected,serviceTransparentField:t.service_transparent_field,srvCopyWrite:t.srv_copy_write,srvShortTag:t.srv_short_tag,srvTotalPrice:t.srv_total_price}}};exports.default=r; 
 			}); 
		define("package_c/components/order_checkout_goods/order_checkout_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),a=t(require("../../../common/data_util")),n=t(require("../../../storage/ram_manager")),u=require("../../../common/index"),i=require("../../../actions/common"),s=function(){function t(){e(this,t),this.setDataFunc=null,this.getDataFunc=null,this.addRootFunc=null,this.dataObj={}}return o(t,[{key:"load",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.confirmRenderData=t,this.showMallCouponsList=e.showMallCouponsList,this.setDataFunc=e.setDataFunc,this.getDataFunc=e.getDataFunc,this.addRootFunc=e.addRootFunc,this.selectedCoupon=e.selectedCoupon,this.selectMallCoupon=e.selectMallCoupon,this.disableEditNum=e.disableEditNum||!1,this.initComponentData()}},{key:"initComponentData",value:function(){var t=this.confirmRenderData;if(t){var e=t.goodsVo||{};this.limitQuantity=e.limitNumber||1,this.initGoodsNumberButton(e.goodsNumber),this.addBlurGoodsNumberInputEvent(),this.addUpdateGoodsNumberEvent(),this.addClickMallCouponBarEvent(),this.addNumberInputFocusEvent()}}},{key:"addClickMallCouponBarEvent",value:function(){var t=this;"function"==typeof this.addRootFunc&&this.addRootFunc("clickMallCouponBar",function(){var e=n.default.CPPage,o=(n.default.CPData.mallCouponsListData.coupons||[]).length>0,a=void 0;if("function"==typeof t.getDataFunc&&(a=t.getDataFunc()),a&&a.disableUserAction)e.$dispatch((0,i.showToast)("订单已生成，信息不可更改"));else{var s=(n.default.CPData.couponInfos||{}).mallCoupons||{},r=s.enableCoupons&&s.enableCoupons.length>0,d=t.confirmRenderData&&t.confirmRenderData.promotionEventVo&&t.confirmRenderData.promotionEventVo.itemList.length>0;if(r?"function"==typeof t.selectMallCoupon&&t.selectMallCoupon():o?"function"==typeof t.showMallCouponsList&&t.showMallCouponsList():d&&"function"==typeof t.selectMallCoupon&&t.selectMallCoupon(),n.default.CPPage.getTrackingParams){var c=n.default.CPPage.getTrackingParams("click","shop_coupon","shop_coupon","99223");(0,u.TrackingRecord)(c)}if(n.default.CPPage.generateTrackingParams){var l=n.default.CPPage.generateTrackingParams("click","mall_discount","discount_btn","206175");(0,u.TrackingRecord)(l)}}})}},{key:"addNumberInputFocusEvent",value:function(){var t=this;"function"==typeof this.addRootFunc&&this.addRootFunc("numberInputFocus",function(){t.setDataFunc&&t.setDataFunc({numberInputFocus:!0})})}},{key:"addBlurGoodsNumberInputEvent",value:function(){var t=this,e=n.default.CPPage;"function"==typeof this.addRootFunc&&this.addRootFunc("blurGoodsNumberInput",function(o){wx.hideKeyboard();var a=parseInt(o.detail.value.trim(),10);isNaN(a)&&(a=1,e.$dispatch((0,i.showToast)("请输入需要的数量"))),a<1&&(a=1,e.$dispatch((0,i.showToast)("请至少购买1份哦"))),t.setDataFunc&&t.initGoodsNumberButton(a)})}},{key:"initGoodsNumberButton",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(this.confirmRenderData.goodsVo||{}).goodsNumber||1,e=n.default.CPPage.confirmRenderData.goodsVo||{};if(this.disableEditNum)this.setDataFunc&&this.setDataFunc({goodsNumber:t,disableEditNum:!0});else{var o=!0;1===Number(t)?o=!0:t>1&&(o=!1),this.setDataFunc&&this.setDataFunc({reduceDisable:o,goodsNumber:t,numberInputFocus:!1,updateGoodsNumber:Number(t)!==Number(e.goodsNumber)})}}},{key:"addUpdateGoodsNumberEvent",value:function(){var t=this,e=n.default.CPPage;"function"==typeof this.addRootFunc&&this.addRootFunc("updateGoodsNumber",function(o){var u=void 0;if("function"==typeof t.getDataFunc&&(u=t.getDataFunc()),u&&u.disableUserAction)e.$dispatch((0,i.showToast)("订单已生成，信息不可更改"));else{var s=e.confirmRenderData.goodsVo||{},r=s.goodsNumber,d=parseInt(o.detail.target.dataset.delta,10);if(t.setDataFunc&&!(1===Number(r)&&d<0)){if(d>0){if(s.orderLimitDisable)return void e.$dispatch((0,i.showToast)("单次购买金额不得高于9.5万元"));if(s.limitNumberDisable)return void(n.default.CPData.confirmMessage?e.$dispatch((0,i.showToast)(n.default.CPData.confirmMessage)):e.$dispatch((0,i.showToast)(a.default.formatByPos("商品至多购买总计{0}件",r))))}parseInt(r,10)+d<=0||(e.$showLoading(),r=parseInt(r,10)+d,t.initGoodsNumberButton(r))}}})}}]),t}();exports.default=s; 
 			}); 
		define("package_c/components/order_checkout_mall_coupons/order_checkout_mall_coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(a,r){try{var s=e[a](r),u=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(u).then(function(t){o("next",t)},function(t){o("throw",t)});t(u)}return o("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=t(require("../../../common/request")),r=t(require("../../../storage/ram_manager")),s=t(require("../../../libs/regenerator-runtime/runtime")),u=t(require("../../../models/format/mall_info")),i=t(require("../../../configs/request_errors")),c=require("../../../common/index"),l=require("../../../actions/common"),h={queryMerchantBatches:"10043",takeMerchantCoupon:"10151"},p=i.default.couponErrorHint,f=function(){function t(o){var u=this;n(this,t),this.setDataFunc=null,this.addRootFunc=null,this.confirmRefreshFunc=null,this.getTrackingParamsFunc=null,this.page=r.default.CPPage,o&&(this.setDataFunc=o.setDataFunc,this.addRootFunc=o.addRootFunc,this.confirmRefreshFunc=o.confirmRefreshFunc,this.getTrackingParamsFunc=o.getTrackingParamsFunc),this.initComponentData(o),this.checkGetMoreCoupon=function(t){var e=!1,n=!1;return t.forEach(function(t){t.isTakenOut||(e=!0),t.canTakenCount>0&&36===Number(t.displayType)&&(n=!0)}),{showMoreCouponBtn:e,hasCollectionCoupon:n}},this.getMallCoupon=function(){var t=e(s.default.mark(function t(e){var n,o,r,i,c;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.mallId,o=e.batchId,r={mall_id:n,batch_id:o},i=a.default.requestDataWithCmd(h.takeMerchantCoupon,{params:r}),t.next=6,a.default.runRequest(i);case 6:return c=t.sent,t.abrupt("return",c);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}},t,u,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}return o(t,[{key:"initComponentData",value:function(t){this.queryMerchantBatches(t),this.addTakeMerchantCouponEvent()}},{key:"queryMerchantBatches",value:function(){var t=e(s.default.mark(function t(e){var n,o,r,i,c,l,p;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this,t.prev=1,o=e&&e.confirmRenderData||{},r=o.stepGoodsVo||o.goodsVo||{},i={mall_id:r.mallId,goods_number:r.goodsNumber||n.page.$urlQueryObj.goods_number,unit_goods_amount:r.unitPrice,goods_id:r.goodsId},r.limitNumber&&(i.sku_limit_quantity=r.limitNumber),c=a.default.requestDataWithCmd(h.queryMerchantBatches,{params:i}),t.next=9,a.default.runMainRequestForPage(c,n.page);case 9:l=t.sent,p=u.default.formatData(l),n.processMallInfo(p),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),n.processMallInfo({errorCode:t.t0.error_code,errorMsg:t.t0.error_msg});case 17:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e){return t.apply(this,arguments)}}()},{key:"processMallInfo",value:function(t){if(t.errorCode){var e=t.errorMsg;this.page.$dispatch((0,l.showToast)(e))}else{var n=t.mallCoupons?t.mallCoupons:[],o={};n.length>0&&(o=this.checkGetMoreCoupon(n)),this.setDataFunc&&this.setDataFunc({"mallCouponsListData.coupons":n,showMoreCouponBtn:o.showMoreCouponBtn||!1,hasCollectionCoupon:o.hasCollectionCoupon||!1})}}},{key:"addTakeMerchantCouponEvent",value:function(){var t=this;"function"==typeof t.addRootFunc&&t.addRootFunc("takeMerchantCoupon",function(e){t.takeMerchantCoupon(e)})}},{key:"takeMerchantCoupon",value:function(t){var n=this,o=parseInt(t.currentTarget.dataset.index,10);if(!this.couponTakeLock&&!isNaN(o)){var a=((r.default.CPData.mallCouponsListData||{}).coupons||[])[o];if(a&&!a.isTakenOut){this.couponTakeLock=!0;var u=a.startTimeForToast+"-"+a.endTimeForToast+"可用";this.page.$showLoading();var i=this;e(s.default.mark(function t(){var e;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.getMallCoupon({mallId:a.mallId,batchId:a.batchId});case 3:e=t.sent,i.processTakeCoupon(e,a.batchId,u),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i.processTakeCoupon(t.t0,a.batchId,u);case 10:case"end":return t.stop()}},t,n,[[0,7]])}))();var l={op:"click",page_section:"coupon_list",page_element:"coupon_recie_btn",page_el_sn:"99221",batch_id:a.batchId,display_type:a.displayType};(0,c.TrackingRecord)(l,this.page)}}}},{key:"processTakeCoupon",value:function(t,e,n){this.couponTakeLock=!1;var o=r.default.CPData.mallCouponsListData.coupons||[];o.forEach(function(n){if(String(n.batchId)===String(e))if(t.error_code)String(t.error_code)===String(i.default.CouponTakenOut.code)?n.isTakenOut=!0:"44025"===String(t.error_code)&&(n.canTakenCount=0);else{n.canTakenCount--;var o=n.hasCountStr,a=0;o?(a=parseInt(o.substring(o.indexOf("有")+1,o.indexOf("张")),10),o="持有"+ ++a+"张"):o="持有"+ ++a+"张",n.hasCountStr=o}});var a=this.checkGetMoreCoupon(o).showMoreCouponBtn;if(this.setDataFunc&&this.setDataFunc({"mallCouponsListData.coupons":o,showMoreCouponBtn:a}),t.error_code){this.page.$hideLoading();var s=p[t.error_code];if(s){var u=s.split("，");u.length>1?this.showCouponsToast(u[0],u[1]):this.showCouponsToast(s)}else this.showCouponsToast(p.fail)}else this.page.$hideLoading(),this.showCouponsToast(p.success,n),this.confirmRefreshFunc&&"function"==typeof this.confirmRefreshFunc&&this.confirmRefreshFunc({clearCouponParams:!0});if(this.getTrackingParamsFunc&&"function"==typeof this.getTrackingParamsFunc){var l=this.getTrackingParamsFunc("click","shop_coupon_tip","receive_coupon_btn","99221");l.is_success=t.error_code?"0":"1",l.batch_id=e,(0,c.TrackingRecord)(l)}}},{key:"showCouponsToast",value:function(t,e){if(t){var n=this;n.setDataFunc&&n.setDataFunc({"mallCouponToastData.mainToast":t,"mallCouponToastData.subToast":e||"","mallCouponToastData.single":!e,"mallCouponToastData.toastVisible":!0}),setTimeout(function(){n.setDataFunc&&n.setDataFunc({"mallCouponToastData.toastVisible":!1})},1500)}}}]),t}();exports.default=f; 
 			}); 
		define("package_c/components/order_checkout_picc/order_checkout_picc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function t(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,o,a){return o&&t(n.prototype,o),a&&t(n,a),n}}(),o=function(){function o(n){t(this,o),this.setDataFunc=null,this.addRootFunc=null,n&&(this.setDataFunc=n.setDataFunc,this.addRootFunc=n.addRootFunc),this.addShowPiccModalEvent(),this.addClosePiccModalEvent()}return n(o,[{key:"addShowPiccModalEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("showPiccModal",function(){t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({showPiccModal:!0})})}},{key:"addClosePiccModalEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("closePiccModal",function(){t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({showPiccModal:!1})})}}]),o}();exports.default=o; 
 			}); 
		define("package_c/components/real_name_auth/real_name_auth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function n(i,u){try{var d=e[i](u),r=d.value}catch(t){return void a(t)}if(!d.done)return Promise.resolve(r).then(function(t){n("next",t)},function(t){n("throw",t)});t(r)}return n("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),i=t(require("../../../common/request")),u=t(require("../../../storage/ram_manager")),d=t(require("../../../libs/regenerator-runtime/runtime")),r=require("../../../common/index"),o=t(require("../../../configs/request_errors")),s=t(require("../../../configs/app_config")),c=t(require("../../../libs/anti_robot")),l=require("../../../actions/common"),h={getUserIdCard:"10903",updateUserIdCard:"10902",strongUpdateUserIdCard:"10901"},f=function(){function t(e){a(this,t),this.setDataFunc=null,this.addRootFunc=null,this.getDataFunc=null,this.getTrackingParamsFunc=null,this.payFunc=null,e&&(this.setDataFunc=e.setDataFunc,this.addRootFunc=e.addRootFunc,this.getDataFunc=e.getDataFunc,this.getTrackingParamsFunc=e.getTrackingParamsFunc,this.payFunc=e.payFunc),this.initComponetsData(e),this.addFocusRealNameEvent(),this.addFocusIDNumberEvent(),this.addRealNameBlurEvent(),this.addIdNumberBlurEvent(),this.addSubmitIdInfoEvent(),this.addShowNameAuthWinEvent(),this.addHideNameAuthWinEvent(),this.checkIdNumberValid=function(t){return!!t&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t.toString())},this.checkRealNameValid=function(t){return/^[\u4e00-\u9fa5]{2,10}([.·]{0,1}[\u4e00-\u9fa5]+)*$/gi.test(t)},this.getIdCardValidStatusCode=function(t){var e=t.error_code||null;String(e)===String(o.default.NoNameIDBefore.code)&&(e=null),u.default.CPPage.idCardValidStatusCode=e}}return n(t,[{key:"getIdCardInfo",value:function(){var t=e(d.default.mark(function t(){var e,a,n,u;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=i.default.requestDataWithCmd(h.getUserIdCard,{}),t.next=4,i.default.runRequest(e);case 4:a=t.sent,n={realName:a.id_card_name,idNumber:a.id_card_no,hasIdInfo:!0},this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc(n),u=this.getTrackingParamsFunc("impr","real_info_prompt","",97474),(0,r.TrackingRecord)(u),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),this.getIdCardValidStatusCode(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()},{key:"initComponetsData",value:function(t){this.getIdCardInfo(),this.anti=new c.default({serverTime:Date.parse(new Date)}),this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc({needNameAuth:!0,realNameAuth:t&&t.realNameAuth,showNameAuthWin:!1}),this.invalidIdCardInfoCount=0}},{key:"addFocusRealNameEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("didFocusRealName",function(e){e&&e.detail&&e.detail.value&&e.detail.value.indexOf("*")>-1&&t.setDataFunc({editRealName:"",useEditRealName:!0})})}},{key:"addFocusIDNumberEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("didFocusIdNumber",function(e){e&&e.detail&&e.detail.value&&e.detail.value.indexOf("*")>-1&&t.setDataFunc({editIdNumber:"",useEditIdNumber:!0})})}},{key:"addRealNameBlurEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("realNameBlur",function(e){e&&e.detail&&e.detail.value&&t.setDataFunc({editRealName:e.detail.value,useEditRealName:!0})})}},{key:"addIdNumberBlurEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("idNumberBlur",function(e){e&&e.detail&&e.detail.value&&t.setDataFunc({editIdNumber:e.detail.value,useEditIdNumber:!0})})}},{key:"addShowNameAuthWinEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("showNameAuthWin",function(){t.showNameAuthWin()})}},{key:"showNameAuthWin",value:function(){if(u.default.CPData.disableUserAction)u.default.CPPage.$dispatch((0,l.showToast)("订单已生成，信息不可更改"));else{this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc({showNameAuthWin:!0});var t=this.getDataFunc()||{},e=this.getTrackingParamsFunc("impr","id_card_popup","general_coupons","99645");(0,r.TrackingRecord)(e),e=this.getTrackingParamsFunc("click",t.hasIdInfo?"real_info_prompt":"id_card_prompt",t.hasIdInfo?"edit_btn":"write_btn",t.hasIdInfo?"97474":"99646"),(0,r.TrackingRecord)(e)}}},{key:"addHideNameAuthWinEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("hideNameAuthWin",function(){t.hideIdCardPopup()})}},{key:"hideIdCardPopup",value:function(){var t=this;u.default.CPPage.nextStepIsPay=!1,setTimeout(function(){if(t.setDataFunc&&"function"==typeof t.setDataFunc){var e={showNameAuthWin:!1};t.setDataFunc(e)}},320)}},{key:"addSubmitIdInfoEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("submitIdCardInfo",function(e){t.submitIdCardInfo(e)})}},{key:"submitIdCardInfo",value:function(t){var a=this,n=t.detail.value||{},o=n.realName||"",c=n.idNumber||"",f=this.getDataFunc()||{},m=f.realNameAuth;o=o.replace(/\s+/g,""),c=c.replace(/\s+/g,"").toString().toUpperCase();var p=this.getTrackingParamsFunc("click","id_card_popup","save_btn","99977");(0,r.TrackingRecord)(p);var v=r.StorageUtil.getStorageSync("idcard-modify-times")||{},g=new Date,F=g.getMonth()+1+"-"+g.getDate();if(m&&(v[F]||0)>=10)u.default.CPPage.$dispatch((0,l.showToast)("您今日认证过于频繁，请明天再试",{duration:3e3}));else if(this.validateIdCardInfo(o,c)){u.default.CPPage.$showLoading();var I={id_card_name:o,id_card_no:c};e(d.default.mark(function t(){var e,n,p;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=void 0,!m){t.next=11;break}return n=r.DataUtil.generateAntiContent(a.anti,null,!0),I.risk_request={anti_content:n,xcx_version:s.default.version},e=i.default.requestDataWithCmd(h.strongUpdateUserIdCard,{params:I}),t.next=8,i.default.runRequest(e);case 8:a.anti.clearCache(),t.next=14;break;case 11:return e=i.default.requestDataWithCmd(h.updateUserIdCard,{params:I}),t.next=14,i.default.runRequest(e);case 14:m&&(v[F]=v[F]?v[F]+1:1,r.StorageUtil.setStorage("idcard-modify-times",v)),u.default.CPPage.$hideLoading(),f.hasIdInfo||(p=a.getTrackingParamsFunc("impr","real_info_prompt","","97474"),(0,r.TrackingRecord)(p)),a.setDataFunc&&"function"==typeof a.setDataFunc&&a.setDataFunc({realName:o,idNumber:c,hasIdInfo:!0}),u.default.CPPage.nextStepIsPay&&a.payFunc&&"function"==typeof a.payFunc&&a.payFunc(),a.hideIdCardPopup(),t.next=28;break;case 22:t.prev=22,t.t0=t.catch(0),u.default.CPPage.$hideLoading(),m&&(v[F]=v[F]?v[F]+1:1,r.StorageUtil.setStorage("idcard-modify-times",v)),43008===t.t0.error_code?u.default.CPPage.$dispatch((0,l.showToast)("姓名和身份证不匹配，请重新认证")):u.default.CPPage.$dispatch((0,l.showToast)(t.t0.error_msg)),a.getIdCardValidStatusCode(t.t0);case 28:case"end":return t.stop()}},t,a,[[0,22]])}))()}else this.invalidIdCardInfoCount++,o.indexOf("*")>-1||c.indexOf("*")>-1?(u.default.CPPage.$dispatch((0,l.showToast)("带*号信息无法提交，请重新认证，已保留上次认证信息",{duration:3e3})),this.hideIdCardPopup()):this.checkRealNameValid(o)?this.checkIdNumberValid(c)||u.default.CPPage.$dispatch((0,l.showToast)("请输入正确的身份证号码",{duration:3e3})):u.default.CPPage.$dispatch((0,l.showToast)("请输入正确的姓名",{duration:3e3})),3===this.invalidIdCardInfoCount&&u.default.CPPage.$dispatch((0,l.showToast)(m?"请输入正确的身份证号码":"错误的身份信息将可能导致您的商品无法通关，请重新填写",{duration:3e3}))}},{key:"validateIdCardInfo",value:function(t,e){return this.checkRealNameValid(t)&&this.checkIdNumberValid(e)}}]),t}();exports.default=f; 
 			}); 
		define("package_c/components/screen_shot_share/screen_shot_share.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={listenScreenShot:function(e){e.data.canShowShare&&(e.setData({shareMainClass:"screen-share-main screen-share-main-show",canShowShare:!1}),setTimeout(function(){e.setData({shareMainClass:"screen-share-main screen-share-main-hide",canShowShare:!0})},5e3))}};exports.default=e; 
 			}); 
		define("package_c/components/service_vo/service_vo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../storage/ram_manager")),a=function(){function a(t){e(this,a),this.setDataFunc=null,this.addRootFunc=null,this.addAddressFunc=null,this.confirmRenderData=null,t&&(this.setDataFunc=t.setDataFunc,this.addRootFunc=t.addRootFunc,this.addAddressFunc=t.addAddressFunc,this.confirmRenderData=t.confirmRenderData),this.initServiceVoData(this.confirmRenderData),this.addClickServiceVoBlockEvent(),this.addCloseServiceVoWinEvent(),this.addSelServiceItemEvent(),this.addShowLabelsContentEvent(),this.getSelectedServiceVoTemplate=function(e){var t=null,n=0;return e&&e.templateResultList&&e.templateResultList.length>0&&e.templateResultList.forEach(function(e){e.selected&&(t=e.serviceTransparentField,n=e.srvTotalPrice)}),{serviceTransparentField:t,srvTotalPrice:n}}}return t(a,[{key:"initServiceVoData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.default.CPPage.confirmRenderData||{};if(this.setDataFunc&&"function"==typeof this.setDataFunc){var t=(e.goodsVo||{}).labels||[],a={serviceVo:e.serviceVo,couponServiceMainClass:"mall-coupons-main mall-coupons-main-down"};t[0]&&(a.labelsTitle=t[0].title||"",a.labelsContent=t[0].content||"",a.fontColor=t[0].css_vo&&t[0].css_vo.font_color||"#339B29",a.fontSize=(t[0].css_vo&&t[0].css_vo.font_size||"12")+"px"),this.setDataFunc(a)}}},{key:"addClickServiceVoBlockEvent",value:function(){var e=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("clickServiceVoBlock",function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(t.currentTarget.dataset,"clickType"))switch(parseInt(t.currentTarget.dataset.clickType,10)){case 0:break;case 1:e.showServiceVoWin();break;case 2:e.addAddressFunc()}})}},{key:"showServiceVoWin",value:function(){var e=this;this.setDataFunc&&"function"==typeof this.setDataFunc&&(this.setDataFunc({showServiceVoWin:!0,serviceBgMaskShow:!0,serviceVo:n.default.CPPage.confirmRenderData.serviceVo}),setTimeout(function(){e.setDataFunc({couponServiceMainClass:"mall-coupons-main mall-coupons-main-up"})},100))}},{key:"addCloseServiceVoWinEvent",value:function(){var e=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("closeServiceVoWin",function(){e.closeServiceVoWin()})}},{key:"addShowLabelsContentEvent",value:function(){this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("showLabelsContent",function(){var e=(n.default.CPPage.confirmRenderData.goodsVo||{}).labels||[],t=e[0]&&e[0].content;t&&n.default.CPPage.$showModal({title:"",content:t,showCancel:!1,confirmText:"我知道了",contentAlign:"center",contentColor:"#333333",success:function(){}})})}},{key:"closeServiceVoWin",value:function(){var e=this;this.setDataFunc&&"function"==typeof this.setDataFunc&&(this.setDataFunc({couponServiceMainClass:"mall-coupons-main mall-coupons-main-down",serviceBgMaskShow:!1}),setTimeout(function(){e.setDataFunc({showServiceVoWin:!1})},250))}},{key:"addSelServiceItemEvent",value:function(){var e=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("selServiceItem",function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(t.currentTarget.dataset,"index")){var a=[],o=JSON.parse(JSON.stringify(n.default.CPPage.confirmRenderData.serviceVo||{}));a=o.templateResultList||[];var i=parseInt(t.currentTarget.dataset.index,10),c=t.currentTarget.dataset.selected,s=!1,r=null;a.forEach(function(e,t){t===i?(e.selected=!0,r=e.serviceTransparentField,"0"===String(c)&&(s=!0,n.default.CPPage.$showLoading())):e.selected=!1}),e.setDataFunc&&"function"==typeof e.setDataFunc&&e.setDataFunc({serviceVo:o,updateServiceVo:s,serviceTransparentField:r}),e.closeServiceVoWin()}})}}]),a}();exports.default=a; 
 			}); 
		define("package_c/components_order_checkout/controller/order_checkout_address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,s){function t(o,a){try{var d=r[o](a),n=d.value}catch(e){return void s(e)}if(!d.done)return Promise.resolve(n).then(function(e){t("next",e)},function(e){t("throw",e)});e(n)}return t("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var s=e(require("../../../configs/api")),t=e(require("../../../libs/regenerator-runtime/runtime")),o=require("../../../actions/common"),a=require("../../../common/message"),d=e(require("../../../controller/addresses_controller")),n=e(require("../../../common/logger")),i=require("../../../common/index"),c={editAddress:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments[2],t=r.addressVo,d=r.actionDisable,n=r.orderSn,c=r.updateOrderAddress,u=r.goodsVo;if(!d||c){if(t){this.actionDisable=d,this.orderSn=n,this.page=e,this.callback=s,a.Message.on(a.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS,i.Util.bind(this.selectAddress,this),!0);var l={sel_address_id:t.addressId||""};u&&u.allowedRegion&&"1"!==u.allowedRegion.toString()?l.allowed_regions=u.allowedRegion.toString().split(","):l.is_from_transac=1,e.$forward("addresses",l)}}else e.$dispatch((0,o.showToast)("订单已生成，信息不可更改"))},selectAddress:function(e){for(var d=this,n=e||[],c=void 0,u=void 0,l=0;l<n.length;l++){var f=n[l];f.isUsing&&(u=f),f.isDefaultAddress&&(c=f)}this.actionDisable&&this.orderSn?u&&u.addressId&&r(t.default.mark(function e(){var r;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d.updateOrderAddressLock&&d.orderSn){e.next=3;break}return e.abrupt("return");case 3:return d.updateOrderAddressLock=!0,r={order_sn:d.orderSn,address_id:u.addressId},e.next=7,i.Request.apiRequest("POST",s.default.updateOrderAddress,r);case 7:d.callback&&"function"==typeof d.callback&&d.callback(u),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),d.page.$dispatch((0,o.showToast)("运费变动，该地址暂不支持修改，请重新下单"));case 13:d.updateOrderAddressLock=!1;case 14:case"end":return e.stop()}},e,d,[[0,10]])}))():this.callback&&"function"==typeof this.callback&&this.callback(u||c),a.Message.off(a.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS)},wechatAddAddress:function(e,s){var a=this;return r(t.default.mark(function r(){var c,u,l;return t.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(c=function(r,t){wx.chooseAddress({success:function(a){if(null==a.nationalCode||null==a.detailInfo||null==a.userName||null==a.telNumber)return e.$dispatch((0,o.showToast)("地址信息不完整，无法导入")),void(s&&"function"==typeof s&&s({authorized:r,isImpr:t}));e.$showLoading(),d.default.addWxAddress(a,function(a){e.$hideLoading(),a&&a.error_code?(a.error_msg&&e.$dispatch((0,o.showToast)(a.error_msg)),s&&"function"==typeof s&&s({authorized:r,isImpr:t}),n.default.sendDeadlyError({bussiness_type:"interface",action:"pay_order",url_path:"address/weixin",error_code:a.error_code,error_msg:a.error_msg})):a&&a.address_id&&s&&"function"==typeof s&&s({addressId:a.address_id,authorized:r,isImpr:t})})}})},wx.chooseAddress){r.next=4;break}return a.$dispatch((0,o.showToast)("您的版本暂不支持，请升级到更高版本~")),r.abrupt("return");case 4:return u=!1,r.next=7,i.User.authorize("scope.address",function(){var r={op:"impr",page_section:"auth_prompt",refer_page_element:"wechat_add_address",page_el_sn:99615};(0,i.TrackingRecord)(r,e),u=!0});case 7:(l=r.sent)?c(l,u):(i.User.showAuthorizeModelDialog("scope.address"),s&&"function"==typeof s&&s({isImpr:u}));case 9:case"end":return r.stop()}},r,a)}))()}};exports.default=c; 
 			}); 
		define("package_c/components_order_checkout/controller/order_checkout_coupons_format.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../../common/std_format")),a=e(require("../../../common/time_util")),i={formatMallCoupon:function(e){e.min_amount===e.discount&&e.min_amount++;var i={batchId:e.batch_id||e.id||"",batchName:e.batch_name,mallId:e.mall_id,startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),discount:""+e.display_type=="35"||""+e.display_type=="38"?e.discount/10:t.default.price(e.discount,100),startTimeForToast:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.MM.dd"),endTimeForToast:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.MM.dd"),minAmount:t.default.price(e.min_amount,100),canTakenCount:e.can_taken_count,hasCountStr:e.has_count_str||""};return e.rules_desc&&(i.rulesDesc=e.rules_desc),e.is_taken_out&&(i.isTakenOut=e.is_taken_out),e.display_type&&(i.displayType=e.display_type),e.goods_name&&(i.goodsName=e.goods_name),i},formatCoupons:function(e){e.min_amount===e.discount&&e.min_amount++;var i={couponId:e.coupon_id,discount:""+e.display_type=="35"||""+e.display_type=="38"?e.discount/10:t.default.price(e.discount,100),displayName:e.display_name,displayType:e.display_type,endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),goodsName:e.goods_name,maxDiscount:e.max_discount,minAmount:t.default.price(e.min_amount,100),startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),thumbUrl:e.thumb_url,timeDisplayName:e.time_display_name};return(35===Number(e.display_type)||38===Number(e.display_type))&&e.max_discount>0&&(i.maxDiscountDesc=2147483647===Number(e.max_discount)?"优惠无上限":"最高减"+t.default.price(e.max_discount,100)+"元"),i},formatPlatformCoupons:function(e){e.min_amount===e.coupon_discount&&e.min_amount++;var a={couponId:e.coupon_id,discount:""+e.display_type=="35"||""+e.display_type=="38"?e.coupon_discount/10:t.default.price(e.coupon_discount,100),minAmount:t.default.price(e.min_amount,100),timeDisplayName:e.time_display_name};return e.cart_display_type&&(a.cartDisplayType=e.cart_display_type),e.rule_display_name&&(a.ruleDisplayName=e.rule_display_name),e.title_display_name&&(a.titleDisplayName=e.title_display_name),e.unusable_type&&(a.unusableType=e.unusable_type),a},formatSuperpositionCoupon:function(e){return{maxAvailableNum:e.max_available_num,ruleDisplayName:e.rule_display_name,timeDisplayName:e.time_display_name,titleDisplayName:e.title_display_name,unitDiscount:e.unit_discount,usable:e.usable,userPossessNum:e.user_possess_num}}};exports.default=i; 
 			}); 
		define("package_c/components_order_checkout/controller/order_checkout_mall_coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return o&&o.__esModule?o:{default:o}}function e(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}return Array.from(o)}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function o(o,e){var t=[],n=!0,r=!1,a=void 0;try{for(var s,u=o[Symbol.iterator]();!(n=(s=u.next()).done)&&(t.push(s.value),!e||t.length!==e);n=!0);}catch(o){r=!0,a=o}finally{try{!n&&u.return&&u.return()}finally{if(r)throw a}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return o(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},r=o(require("../../../storage/ram_manager")),a=(o(require("../../../libs/regenerator-runtime/runtime")),o(require("./order_checkout_coupons_format"))),s=o(require("../../../configs/request_errors")),u=require("../../../common/index"),i=s.default.couponErrorHint,c={checkGetMoreCoupon:function(o){var e=!1,t=!1;return o.forEach(function(o){o.isTakenOut||(e=!0),o.canTakenCount>0&&36===Number(o.displayType)&&(t=!0)}),{showMoreCouponBtn:e,hasCollectionCoupon:t}},processMallReceiveCoupons:function(o){var e={};if(o&&o.mall_coupons){var t=[];o.mall_coupons.forEach(function(o){var e=a.default.formatMallCoupon(o);t.push(e)});var r={};t.length>0&&(r=this.checkGetMoreCoupon(t)),e=n({reiMallCoupons:t},r)}return e},processTransacTakeCoupon:function(o,r,a,u,c){var l=n({},c),f="";if(l[a]){var p=n({},l[a]);Object.keys(p).forEach(function(t){var a=[].concat(e(p[t]));a=a.map(function(e){var t=n({},e);return String(e.batchId)===String(r)&&(f=e.startTimeForToast+"-"+e.endTimeForToast+"可用",o.error_code?String(o.error_code)===String(s.default.CouponTakenOut.code)?t.isTakenOut=!0:"44025"===String(o.error_code)&&(t.canTakenCount=0):t.canTakenCount--),t}),p[t]=a}),l[a]=p}else{var h=[];l.reiMallCoupons.forEach(function(e){var t=n({},e);if(String(t.batchId)===String(r))if(o.error_code)String(o.error_code)===String(s.default.CouponTakenOut.code)?t.isTakenOut=!0:"44025"===String(o.error_code)&&(t.canTakenCount=0);else{t.canTakenCount--;var a=t.hasCountStr,u=0;a?(u=parseInt(a.substring(a.indexOf("有")+1,a.indexOf("张")),10),a="持有"+ ++u+"张"):a="持有"+ ++u+"张",t.hasCountStr=a}h.push(t)}),l.reiMallCoupons=h}var d={mallCouponsListData:l,needConfirmRefresh:!o.error_code},m="",_="";if(o.error_code){var v=i[o.error_code];if(v){var C=v.split("，");if(C.length>1){var g=t(C,2);m=g[0],_=g[1]}else m=v}else m=i.fail}else m=i.success,_=f;return m&&(d.mallCouponToastData={mainToast:m,subToast:_,single:!_,toastVisible:!0}),d},checkTransacGetMoreCoupon:function(o){var e=!1,t=!1;return o.forEach(function(o){o.isTakenOut||(e=!0),o.canTakenCount>0&&36===Number(o.displayType)&&(t=!0)}),{showMoreCouponBtn:e,hasCollectionCoupon:t}},processUsablePromotion:function(o){var e={};return o&&Object.keys(o).forEach(function(t){if(o[t].length>0){var n=[];switch(o[t].forEach(function(o){var e={};"usable_multi_goods_events"===String(t)?(e={displayName:o.display_name,goodsId:o.goods_id,thumbUrl:o.thumb_url},o.min_amount&&(e.minAmount=o.min_amount)):e=a.default.formatMallCoupon(o),n.push(e)}),String(t)){case"usable_goods_batch_display_vos":e.usableGoodsBatchDisplayVos=n;break;case"usable_mall_batch_display_vos":e.usableMallBatchDisplayVos=n;break;case"usable_multi_goods_events":e.usableMultiGoodsEvents=n}}}),e},processMallCoupons:function(){var o=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};if(e.events&&e.events.length>0){var n=e.events.map(function(e){return o.formatEvents(e)});t.events=n}if(e.usable_goods_coupons&&e.usable_goods_coupons.length>0){var r=e.usable_goods_coupons.map(function(o){return a.default.formatCoupons(o)});t.usableGoodsCoupons=r}if(e.usable_shop_coupons&&e.usable_shop_coupons.length>0){var s=e.usable_shop_coupons.map(function(o){return a.default.formatCoupons(o)});t.usableShopCoupons=s}return t},formatEvents:function(o){return{discountAmount:o.discount_amount,displayName:o.display_name,eventId:o.event_id,eventItems:o.event_items,goodsId:o.goods_id,mallId:o.mall_id,status:o.status,thumbUrl:o.thumb_url}},processTakeCoupon:function(o,e,t){this.couponTakeLock=!1;var n=r.default.CPData.mallCouponsListData.coupons||[];n.forEach(function(t){if(String(t.batchId)===String(e))if(o.error_code)String(o.error_code)===String(s.default.CouponTakenOut.code)?t.isTakenOut=!0:"44025"===String(o.error_code)&&(t.canTakenCount=0);else{t.canTakenCount--;var n=t.hasCountStr,r=0;n?(r=parseInt(n.substring(n.indexOf("有")+1,n.indexOf("张")),10),n="持有"+ ++r+"张"):n="持有"+ ++r+"张",t.hasCountStr=n}});var a=this.checkGetMoreCoupon(n).showMoreCouponBtn;if(this.setDataFunc&&this.setDataFunc({"mallCouponsListData.coupons":n,showMoreCouponBtn:a}),o.error_code){var c=i[o.error_code];if(c){var l=c.split("，");l.length>1?this.showCouponsToast(l[0],l[1]):this.showCouponsToast(c)}else this.showCouponsToast(i.fail)}else this.showCouponsToast(i.success,t),this.confirmRefreshFunc&&"function"==typeof this.confirmRefreshFunc&&this.confirmRefreshFunc({clearCouponParams:!0});if(this.getTrackingParamsFunc&&"function"==typeof this.getTrackingParamsFunc){var f=this.getTrackingParamsFunc("click","shop_coupon_tip","receive_coupon_btn","99221");f.is_success=o.error_code?"0":"1",f.batch_id=e,(0,u.TrackingRecord)(f)}},showCouponsToast:function(o,e){if(o){var t=this;t.setDataFunc&&t.setDataFunc({"mallCouponToastData.mainToast":o,"mallCouponToastData.subToast":e||"","mallCouponToastData.single":!e,"mallCouponToastData.toastVisible":!0}),setTimeout(function(){t.setDataFunc&&t.setDataFunc({"mallCouponToastData.toastVisible":!1})},1500)}}};exports.default=c; 
 			}); 
		define("package_c/components_order_checkout/coupons_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("../../common/data_util")),o=e(require("../../common/std_format")),a=e(require("../../common/time_util")),t=e(require("../../common/object_util")),u={formatCouponsData:function(e){var u=[],i={},s=[],r=[],_=[],m=e.serverTime||0;n.default.isArray(e.enableCoupons)||(e.enableCoupons=[]),n.default.isArray(e.disableCoupons)||(e.disableCoupons=[]);for(var p=function(e){var n={couponId:e.coupon_id,batchName:e.batch_name,discount:o.default.price(e.discount,100),minAmount:o.default.price(e.min_amount,100),startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),displayType:e.display_type,percent:o.default.price(e.percent?10*e.percent:0,100),titleDisplayName:e.title_display_name,timeDisplayName:e.time_display_name,ruleDisplayName:e.rule_display_name,sourceType:e.source_type};return(35===Number(e.display_type)||38===Number(e.display_type))&&e.max_discount>0&&(n.maxDiscountDesc=2147483647===Number(e.max_discount)?"优惠无上限":"最高减"+o.default.price(e.max_discount,100)+"元"),n},l=void 0,c=e.enableCoupons.length,d=0;d<c;d++)(l=e.enableCoupons[d]).min_amount===l.discount&&l.min_amount++,u.push(p(l));e.enableSuperpositionCoupons&&(i=function(e){return{batchName:e.batch_name,discount:o.default.price(e.discount,100),startTime:a.default.formatTime(new Date(1e3*e.start_time),"yyyy.M.d"),endTime:a.default.formatTime(new Date(1e3*e.end_time),"yyyy.M.d"),rulesDesc:e.rules_desc,maxAvailableNum:e.max_available_num,selectedNum:e.max_available_num,selectedCertainNum:e.max_available_num,isReachUsedLimit:e.is_reach_used_limit,showSuperEditBtn:!1,usable:e.usable,userPossessNum:e.user_possess_num,superpositionConfig:{maxAvailableNum:e.superposition_coupon_config&&e.superposition_coupon_config.max_available_num?e.superposition_coupon_config.max_available_num:5,minOrderAmount:e.superposition_coupon_config&&e.superposition_coupon_config.min_order_amount?o.default.price(e.superposition_coupon_config.min_order_amount,100):50},timeDisplayName:e.time_display_name,ruleDisplayName:e.rule_display_name,sourceType:e.source_type,couponId:"101010"}}(e.enableSuperpositionCoupons));for(var f=e.disableCoupons.length,b=[],y=0;y<f;y++)if("COUPON_AVAILABLE_FOR_APP_ONLY"!==(l=e.disableCoupons[y]).unusable_reason_code){l.coupon_info.min_amount===l.coupon_info.discount&&l.coupon_info.min_amount++;var A=t.default.assign({disableReason:""},p(l.coupon_info));m>0&&m<l.start_time&&(A.disableReason="未到使用时间"),"COUPON_UNAVAILABLE_FOR_GOODS"===l.unusable_reason_code?(A.disableReason="COUPON_UNAVAILABLE_FOR_GOODS",_.push(A)):"CATEGORY_IS_UNAVAILABLE"===l.unusable_reason_code||l.unusable_reason_code.indexOf("COUPON_UNAVAILABLE_FOR")>-1?(A.disableReason="当前商品所属品类不可用",_.push(A)):"ORDER_AMOUNT_BELOW_LIMITATION"===l.unusable_reason_code?(A.disableReason="ORDER_AMOUNT_BELOW_LIMITATION",r.push(A)):_.push(A),m>0&&m<l.start_time?b.push(A):s.push(A)}return r.length>0&&(r=(r=r.sort(function(e,n){return parseInt(n.discount,10)-parseInt(e.discount,10)})).sort(function(e,n){return parseInt(e.minAmount,10)-parseInt(n.minAmount,10)})),_.length>0&&(_=(_=_.sort(function(e,n){return parseInt(n.discount,10)-parseInt(e.discount,10)})).sort(function(e,n){return parseInt(e.minAmount,10)-parseInt(n.minAmount,10)})),s=r.concat(_).concat(b),{enableCoupons:u,enableSuperpositionCoupons:i,disableCoupons:s}}};exports.default=u; 
 			}); 
		define("package_c/components_order_checkout/order_checkout_data_format.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../common/std_format")),o=e(require("../../constants/goods")),i=e(require("../../common/time_util")),r=e(require("../../models/format/order_data_format")),a={formatRenderData:function(e){var o=this,a={confirmCode:e.confirm_code,confirmMessage:e.confirm_message,idCardVo:e.id_card_vo||{},merchantPromotionPrice:parseInt(e.merchant_promotion_price,10)||0,orderPrice:e.order_price,orderPriceStd:t.default.price(e.order_price,100),payPrice:e.pay_price,payPriceStd:t.default.price(e.pay_price,100),platformPromotionPrice:parseInt(e.platform_promotion_price,10)||0,serverTime:e.server_time,extendMap:e.extend_map,orderServicePath:e.order_service_path||""};if(e.option_map){var p=e.option_map,d={};p.order_refresh&&(d.orderRefresh=p.order_refresh),a.optionMap=d}if(e.mall_vo){var s=e.mall_vo,_={id:s.id,logo:s.logo,name:s.name};s.labels&&(_.labels=s.labels),a.mallVo=_}var c=e.group_vo||{},n={customerNum:c.customer_num,groupId:c.group_id};if(a.groupVo=n,e.address_vo&&e.address_vo.address_id>0){var l=e.address_vo,u={address:l.address,addressId:String(l.address_id),city:l.city,cityId:l.city_id,district:l.district,districtId:l.district_id,labels:l.labels,mobile:l.mobile,name:l.name,province:l.province,provinceId:l.province_id,allowedProvinces:l.allowed_provinces};a.addressVo=u}var m=e.sku_vo||{},v={quantity:m.quantity,skuId:m.sku_id,spec:m.spec,thumbUrl:m.thumb_url,stockEmpty:parseInt(m.ware_id,10)>0&&0===m.quantity};a.skuVo=v;var y=e.goods_vo||{},f={allowedRegion:y.allowed_region||[],catId:y.cat_id,catId1:y.cat_id1,catId2:y.cat_id2,catId3:y.cat_id3,catId4:y.cat_id4,customerNum:y.customer_num,eventType:y.event_type,goodsId:y.goods_id,goodsName:y.goods_name,goodsNumber:y.goods_number,goodsType:y.goods_type,hasActivity:y.has_activity,hasPromotion:y.has_promotion,labels:y.labels,limitNumber:y.limit_number,mallId:y.mall_id,realNameAuth:y.real_name_auth,unitPrice:y.unit_price,unitPriceStd:t.default.price(y.unit_price,100),needAccount:y.need_account,overseaType:y.oversea_type,accountTypes:y.account_types||"",limitStatus:y.limit_status,isVirtualGoods:this.checkVirtualGoods(y.goods_type)};if(y.activity_id&&(f.activityId=y.activity_id),y.activity_type&&(f.activityType=y.activity_type),a.goodsVo=f,e.step_goods_vo){var g=e.step_goods_vo||{},I={activityId:g.activity_id,activityType:g.activity_type,catId:g.cat_id,catId1:g.cat_id1,catId2:g.cat_id2,catId3:g.cat_id3,catId4:g.cat_id4,eventType:g.event_type,goodsId:g.goods_id,goodsNumber:g.goods_number,goodsType:g.goods_type,groupId:g.group_id,mallId:g.mall_id,realNameAuth:g.real_name_auth,skuId:g.sku_id,unitPrice:g.unit_price,unitPriceStd:t.default.price(g.unit_price,100)};a.stepGoodsVo=I}if(e.promotion_vo){var h=e.promotion_vo,P={};if(h.merchant_coupon_vo&&(P.merchantCouponVo=this.formatCouponData(h.merchant_coupon_vo)),h.platform_coupon_vo&&(P.platformCouponVo=this.formatCouponData(h.platform_coupon_vo)),h.deposit_coupon_vo){var T=h.deposit_coupon_vo,b={deposit:T.deposit,discount:T.discount,eventId:T.event_id,expansion:T.expansion};P.depositCouponVo=b}a.promotionVo=P}var V=e.promotion_event_vo||{},S={displayName:V.display_name||"",eventId:V.event_id||"",eventName:V.event_name||"",itemList:V.item_list||[]};if(a.promotionEventVo=S,a.payVo=r.default.payVoFormat(e.pay_vo),e.step_vo){var C=e.step_vo,N={};if(C.deposit_price>0&&(N.depositPrice=C.deposit_price,N.depositPriceStd=t.default.price(C.deposit_price,100)),C.inflate_price>0&&(N.inflatePrice=C.inflate_price,N.inflatePriceStd=t.default.price(C.inflate_price,100)),C.step_price&&(N.stepPriceStd=t.default.price(C.step_price,100),N.stepPrice=C.step_price),C.step_pay_start_time){var k=C.step_pay_start_time;N.stepPayStartTimeObj=i.default.getTimeMaterialFromTimePoint(k)}a.stepVo=N}var E=e.order_vo||{},M={payContent:E.pay_content,payPrice:E.pay_price,payPriceStd:t.default.price(E.pay_price,100),payTitle:E.pay_title,couponPrice:E.coupon_price,couponPriceStd:t.default.price(E.coupon_price,100)};if(a.orderVo=M,e.cell_bar_vo){var A=e.cell_bar_vo,G={protocolTitle:A.protocol_title,protocolUrl:A.protocol_url,content:A.content||"",title:A.title||""};a.cellBarVo=G}var R=e.service_vo||{},D={clickType:R.click_type||"",displayContent:R.display_content||"",displayTitle:R.display_title||"",srvShortTag:R.srv_short_tag||""};if(R.template_result_list){var q=R.template_result_list,L=[];q.length>0&&q.forEach(function(e){L.push(o.formatTemplateResultList(e))}),D.templateResultList=L}return a.serviceVo=D,a},formatCouponData:function(e){return e.display_name?{displayName:e.display_name,isPlatformCouponForbidden:e.is_platform_coupon_forbidden,promotionStatus:parseInt(e.promotion_status,10),category:e.category||"",discount:e.discount||0,displayType:e.display_type||0,batchId:e.batch_id||"",couponId:e.coupon_id||"",minAmount:e.min_amount||0,superpositionCouponNumber:e.superposition_coupon_number||0,notUse:e.not_use||!1,isSuperPositionCoupon:e.is_super_position_coupon||!1,eventDiscount:e.event_discount||0,eventId:e.event_id||"",promotionEventType:e.promotion_event_type||""}:{}},formatTemplateResultList:function(e){return{selected:e.selected,serviceTransparentField:e.service_transparent_field,srvCopyWrite:e.srv_copy_write,srvShortTag:e.srv_short_tag,srvTotalPrice:e.srv_total_price}},checkVirtualGoods:function(e){return[o.default.GoodsType.MOBILE_DATA,o.default.GoodsType.QQ_COIN,o.default.GoodsType.OIL_CARD,o.default.GoodsType.MOBILE_FARE,o.default.GoodsType.VIDEO_MEMBER].some(function(t){return t===Number(e)})}};exports.default=a; 
 			}); 
		define("package_c/goods/common/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=function(){function n(){e(this,n),this.timeoutHandler={},this.intervalHandler={}}return t(n,[{key:"reset",value:function(){var e=this;Object.keys(this.timeoutHandler).forEach(function(t){clearTimeout(e.timeoutHandler[t])}),Object.keys(this.intervalHandler).forEach(function(t){clearInterval(e.intervalHandler[t])}),this.timeoutHandler={},this.intervalHandler={}}},{key:"clearTimeoutByKey",value:function(e){this.timeoutHandler[e]&&(clearTimeout(this.timeoutHandler[e]),delete this.timeoutHandler[e])}},{key:"clearIntervalByKey",value:function(e){this.intervalHandler[e]&&(clearInterval(this.intervalHandler[e]),delete this.intervalHandler[e])}},{key:"addTimeOut",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.timeoutHandler[i]&&this.clearTimeoutByKey(i),this.timeoutHandler[i]=setTimeout(function(){n.clearTimeoutByKey(i),"function"==typeof e&&e()},t)}},{key:"addInterval",value:function(e,t,n){this.intervalHandler[n]&&this.clearIntervalByKey(n),this.intervalHandler[n]=setInterval(function(){"function"==typeof e&&e()},t,n)}}]),n}();exports.default=n; 
 			}); 
		define("package_c/goods/coupons/coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return o&&o.__esModule?o:{default:o}}function t(o){return function(){var t=o.apply(this,arguments);return new Promise(function(o,e){function n(a,i){try{var s=t[a](i),r=s.value}catch(o){return void e(o)}if(!s.done)return Promise.resolve(r).then(function(o){n("next",o)},function(o){n("throw",o)});o(r)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n=require("../../../common/index"),a=o(require("../../../libs/regenerator-runtime/runtime")),i=o(require("../../../configs/api")),s=o(require("../../../configs/request_errors")),r=require("../../../actions/common"),u=o(require("../../components/collection_coupon/collection_coupon")),c=-1,p=1,l=2,_=s.default.couponErrorHint,d={takeMerchantCoupon:"10151"};exports.default=function(o){function h(o){var t=[];return(o.mall_coupons||[]).forEach(function(o){t.push({batchId:o.id,batchName:o.batch_name,mallId:o.mall_id,startTime:n.TimeUtil.formatTime(new Date(1e3*o.start_time),"yyyy.M.d"),endTime:n.TimeUtil.formatTime(new Date(1e3*o.end_time),"yyyy.M.d"),discount:n.StdFormat.price(o.discount,100),startTimeForToast:n.TimeUtil.formatTime(new Date(1e3*o.start_time),"yyyy.MM.dd"),endTimeForToast:n.TimeUtil.formatTime(new Date(1e3*o.end_time),"yyyy.MM.dd"),minAmount:n.StdFormat.price(o.min_amount,100),couponDisableText:o.is_taken_out?y:g,takenOut:o.is_taken_out,canTakenCount:o.can_taken_count,displayType:parseInt(o.display_type||"",0)})}),t}var f={showCouponsModalType:c,isShowCouponsModal:!1,isTakeCouponRequesting:!1,couponsModalInfo:null,promotionCoupons:null,displayCoupons:null};o.setData(f);var m=o;m.mallCouponModalInfo={},m.showCouponsModal=function(t){var e=this;this.setData({showCouponsModalType:t},function(){e.$setData({isShowCouponsModal:!0});var t=e.data.couponsModalInfo;t&&t.couponInfoList&&t.couponInfoList.length>0&&t.couponInfoList[0].couponList&&t.couponInfoList[0].couponList.length>0&&t.couponInfoList[0].couponList.forEach(function(t){if(t.can_taken_count>0){var a=e.getImprTrackingParams("coupon_list");a.batch_id=t.id,a.display_type=t.display_type,36===parseInt(t.display_type,10)?a.page_element="like_coupon_btn":(a.page_element="coupon_recie_btn",a.page_el_sn="35162"),(0,n.TrackingRecord)(a,o)}})})},m.hideCouponsModal=function(){var o=this;this.setData({isShowCouponsModal:!1,couponFadeOut:!0}),setTimeout(function(){o.$setData({showCouponsModalType:c,couponFadeOut:!1})},300)},m.onCouponItemClicked=function(o){var t=o.detail.target.dataset||{},e=parseInt(t.index,10)||0,n=parseInt(t.listIndex,10)||0,a=t.item||{},i=a.batch_id,s=a.batch_sn,r=a.type;a.can_take&&this.takeCouponFromPromotionBar(i,r,e,n,s)},m.initPromotionCoupons=function(o){var t=o.great_promotion_activity;if("object"===(void 0===t?"undefined":e(t))&&t.copy_writing&&t.copy_writing.great_promotion_main_copy_writing){var a="";a+="background-color:"+t.background_color+";";var i="color:"+t.font_color+";",s={title:t.copy_writing.great_promotion_main_copy_writing,titleStyle:i,style:a,iconSrc:t.great_promotion_icon,redEnvelopesSrc:t.red_envelopes_icon},r=this.getImprTrackingParams("dacu_area");r.page_el_sn=70285,t.copy_writing.full_back_copy_writing&&(r.sale_type=3,s.fullBackDisplay=t.copy_writing.full_back_copy_writing),this.$setData({promotionCoupons:s}),(0,n.TrackingRecord)(r)}else this.setData({promotionCoupons:null})},m.onPromotionCouponsClicked=function(){var o=this;this.nologinInterceptor(function(){o.data.couponsModalInfo&&o.showCouponsModal(p),o.getPromotionCoupons();var t=o.getClickTrackingParams("dacu_area");t.page_el_sn=70285;var e=o.data.promotionCoupons;t.sale_type=1,e.fullBackDisplay&&(t.sale_type=3),(0,n.TrackingRecord)(t)})},m.getPromotionCoupons=function(){var o=t(a.default.mark(function o(){var t,e,s,u;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.isPromotionCouponsRequesting){o.next=2;break}return o.abrupt("return",null);case 2:return this.isPromotionCouponsRequesting=!0,t=this.data.goodsInfo||{},e={app:0,cat_id_1:t.catId1,goods_id:t.goodsId,event_type:t.eventType,sku_price:parseInt(t.minOnsaleGroupPrice,10)},o.prev=5,s=n.Request.requestDataWithUrl("GET",i.default.queryUserPromotionBar,e),o.next=9,n.Request.runSecondaryRequestForPage(s,this);case 9:return u=o.sent,this.processPromotionCoupons(u),this.isPromotionCouponsRequesting=!1,o.abrupt("return",u);case 15:o.prev=15,o.t0=o.catch(5),console.error(o.t0),this.isPromotionCouponsRequesting=!1,this.$dispatch((0,r.showToast)("加载失败,请稍后再试"));case 20:return o.abrupt("return",null);case 21:case"end":return o.stop()}},o,this,[[5,15]])}));return function(){return o.apply(this,arguments)}}(),m.takeCouponFromPromotionBar=function(){var o=t(a.default.mark(function o(t,e,s,u,c){var p,l,_,d,h,f;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.isTakeCouponRequesting){o.next=2;break}return o.abrupt("return");case 2:return this.isTakeCouponRequesting=!0,p={batch_sn:c,type:e},o.prev=4,l=n.Request.requestDataWithUrl("POST",i.default.takeCouponFromPromotionBar,p),o.next=8,n.Request.runSecondaryRequestForPage(l,this);case 8:(_=o.sent).button_text&&((d=this.data.couponsModalInfo).couponInfoList[u].couponList[s].button=_.button_text,d.couponInfoList[u].couponList[s].can_take=!1,this.$setData({couponsModalInfo:d}),(h=this.getClickTrackingParams("dacu_popup","receive_btn")).page_el_sn=70283,h.sale_type=1,(f=this.data.promotionCoupons).fullBackDisplay&&(h.sale_type=3),t&&(h.batch_id=t),c&&(h.batch_sn=c),h.coupon_id=_.coupon_id,h.coupon_type=e,(0,n.TrackingRecord)(h)),_.toast_text&&this.$dispatch((0,r.showToast)(_.toast_text)),this.isTakeCouponRequesting=!1,o.next=18;break;case 14:o.prev=14,o.t0=o.catch(4),console.error(o.t0),this.isTakeCouponRequesting=!1;case 18:case"end":return o.stop()}},o,this,[[4,14]])}));return function(t,e,n,a,i){return o.apply(this,arguments)}}(),m.processPromotionCoupons=function(o){for(var t=o.events||{},e=t.coupon_list||[],a=[],i=t.full_back_coupon,s=0;s<e.length;++s){for(var r=e[s]||{},u=r.coupons||[],c=0;c<u.length;++c){u[c].price=parseInt(u[c].price/100,10),u[c].can_take=!u[c].today_is_sent;var l=this.getImprTrackingParams("dacu_popup");l.page_el_sn=70283,l.sale_type=1,i&&(l.sale_type=3),u[c].batch_sn&&(l.batch_sn=u[c].batch_sn),u[c].batch_id&&(l.batch_id=u[c].batch_id),l.page_element="receive_btn",(0,n.TrackingRecord)(l)}var _={couponTips:r.tips,couponList:u};a.push(_)}var d={title:t.title,bannerSrc:t.banner_picture,closeBtnColor:"#FFFFFF",couponTitle:t.coupon_title,couponInfoList:a};i&&(d.fullBackInfo=i,d.fullBackInfo.progress_width=i.current_consume_amount/i.need_amount*420,d.fullBackInfo.progress_txt=i.current_consume_amount/100+"/"+i.need_amount/100),this.data.couponsModalInfo||this.showCouponsModal(p),this.$setData({couponsModalInfo:d});var h=this.getImprTrackingParams("dacu_popup");h.page_el_sn=70284,h.sale_type=1,i&&(h.sale_type=3),(0,n.TrackingRecord)(h)};var g="已领取",y="已抢光";m.initMallCoupons=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},e=o.full_back_coupon;if(e){t.fullBackCoupons={tag:e.tag,desc:e.rules_desc,userProgress:e.user_progress};var a={title:"优惠详情",bannerSrc:"",closeBtnColor:"#FFFFFF"};this.mallCouponModalInfo=a}var i=o.mall_coupons;if(i&&i.coupon_list.length>0){var s=i.coupon_list[0].mall_id;this.CollectionCouponModule||(this.CollectionCouponModule=new u.default({page:this,addRootFunc:n.Util.bind(this.componentsAddRootFunc,this),mallId:s}));for(var r=[],c=0;c<i.coupon_batches.length;++c){var p=function(o){for(var t=0;t<i.coupon_list.length;++t)if(((i.coupon_list[t]||{}).id||"")===o)return i.coupon_list[t];return null}(i.coupon_batches[c].id);if(p){var l=(p.has_count_str||"").match(/[0-9]+/),_=l?parseInt(l[0],10):0;i.coupon_batches[c].has_taken_count=_,r.push(i.coupon_batches[c])}}i.mall_coupons=r;for(var d=0,f=3,m=[],g=0;g<r.length;++g)r[g].price=r[g].discount/100,r[g].tag=r[g].display_name,r[g].can_take=r[g].can_taken_count>0,r[g].display=r[g].copy_writing,r[g].rules_desc="",29===r[g].display_type?d+="".concat(r[g].discount,"元无门槛商品券").length:d+=r[g].copy_writing.length,r[g].use_date=r[g].use_date_desc,d>25&&g<3&&(f=2);m.push({couponTips:"",couponList:r});var y={title:i.title,bannerSrc:"",closeBtnColor:"#FFFFFF",couponTitle:i.coupon_title,couponInfoList:m};this.mallCouponModalInfo=y;var v=h(i);v.forEach(function(o){o.canTakenCount>0?(o.receiveBtnEnable=!0,o.receiveBtnText="领取"):(o.receiveBtnEnable=!1,o.receiveBtnText="已领取")});var b=v.slice(0,f);if(t.mallCoupons={tag:i.tag,couponList:b},this.setData({mallCoupons:v}),0!==this.data.mallCoupons.length){var C=this.data.goodsInfo,k={page_name:"goods_detail",page_sn:"10014",op:"impr",page_section:"main",page_element:"coupon",page_el_sn:"35130",goods_id:C.goodsId,event_type:C.eventType};void 0!==this.$urlQueryObj.subjects_id&&(k.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(k.refer_subject_id=this.$urlQueryObj.subject_id),(0,n.TrackingRecord)(k,this)}}(e||i&&i.coupon_list.length>0)&&this.$setData({displayCoupons:t})},m.showCouponsDetail=function(o){this.setData({couponsModalInfo:this.mallCouponModalInfo}),this.showCouponsModal(l),this.$uploadFormId(o,!1);var t=this.data.goodsInfo,e={page_name:"goods_detail",page_sn:"10014",op:"click",page_section:"main",page_element:"coupon",page_el_sn:"35130",goods_id:t.goodsId,event_type:t.eventType};this.data.refer_xcx_campaign_dacu&&(e.refer_xcx_campaign_dacu=this.data.refer_xcx_campaign_dacu),void 0!==this.$urlQueryObj.subjects_id&&(e.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(e.refer_subject_id=this.$urlQueryObj.subject_id),(0,n.TrackingRecord)(e,this)},m.hideCouponsDetail=function(){var o=this;this.setData({couponsMainClass:"coupons-detail-hidden"}),setTimeout(function(){o.$setData({couponsDetailVisible:!1,showCouponsModalType:c})},200)},m.couponTostShow=function(o,t){var e=this,n={};n.single=!t,n.toastVisible=!0,n.mainToast=o,n.subToast=t,this.$setData({mallCouponToastData:n}),setTimeout(function(){e.setData({"mallCouponToastData.toastVisible":!1})},1500)},m.getCouponTracking=function(o,t,e){var a=this.getClickTrackingParams("coupon_list","coupon_recie_btn");a.batch_id=e.id,a.display_type=e.display_type,a.idx=o,a.is_success=t,(0,n.TrackingRecord)(a,this)},m.getCoupon=function(o){var e=this;this.nologinInterceptor(function(){var i=o.detail.target.dataset||{},s=parseInt(i.index,10)||0,r=i.item||{};if(r.can_take&&!e.gettingCoupon){var u={mall_id:r.mall_id,batch_id:r.id},c=r.use_date+"可用";e.nologinInterceptor(t(a.default.mark(function o(){var t,i,p,l,h,f;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.gettingCoupon=!0,o.prev=1,t=n.Request.requestDataWithCmd(d.takeMerchantCoupon,{params:u}),o.next=5,n.Request.runMainRequestForPage(t,e);case 5:(i=o.sent)&&i.error_code?(e.handleGetCouponError(e,i,r,s),e.getCouponTracking(s,0,r)):((p=e.mallCouponModalInfo.couponInfoList)[0].couponList[s].can_taken_count-=1,p[0].couponList[s].has_taken_count+=1,l=p[0].couponList[s].can_taken_count>0,p[0].couponList[s].can_take=l,p[0].couponList[s].can_take||(p[0].couponList[s].button="已领取"),(f={})[h="couponsModalInfo.couponInfoList[0].couponList["+s+"]"]=e.mallCouponModalInfo.couponInfoList[0].couponList[s],e.$setData(f),e.couponTostShow(_.success,c),e.getCouponTracking(s,1,r)),e.gettingCoupon=!1,o.next=15;break;case 10:o.prev=10,o.t0=o.catch(1),console.error(o.t0),o.t0&&o.t0.error_code&&(e.handleGetCouponError(e,o.t0,r,s),e.getCouponTracking(s,0,r)),e.gettingCoupon=!1;case 15:case"end":return o.stop()}},o,e,[[1,10]])})),"coupon")}else e.getCouponTracking(s,0,r);e.$uploadFormId(o,!1)})},m.handleGetCouponError=function(o,t,e,n){var a=void 0;if(t&&(a=_[t.error_code]),a){var i=a.split("，");i.length>1?o.couponTostShow(i[0],i[1]):o.couponTostShow(a)}else o.couponTostShow(_.fail);var r=this.mallCouponModalInfo.couponInfoList[0].couponList||{};r[n].can_take=!1,t&&44025===t.error_code?r[n].button="已领取":t&&t.error_code===s.default.CouponTakenOut.code&&(r[n].button="已抢光");var u={};u["couponsModalInfo.couponInfoList[0].couponList["+n+"]"]=this.mallCouponModalInfo.couponInfoList[0].couponList[n],this.$setData(u)}}; 
 			}); 
		define("package_c/goods/gallery/gallery_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){var e=(r.goods||{}).gallery||[];return 0===e.length?[]:e=e.sort(function(r,e){return r.priority-e.priority})}function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],l=arguments[2],a=r(e);if(0===a.length)return{};var u=[],d=[],g=375*n.max,h=!1;a.forEach(function(r){var e=r;e.downloadUrl=r.url;var i=r.type||"";if((i+="")===o.topImg){if(e.url=t.ImageUtil.cdnCompress(r.url,null,null,null),u.push(r),r.height>0&&r.width>0){var a=0;(a=r.height/r.width>=n.max?375*n.max:375*n.min)<g&&(g=a)}}else if(i===o.topVedio&&l){e.url=t.ImageUtil.cdnCompress(r.url,null,null,null),e.url+=".f20.mp4";var s=t.SystemInfo.getWindowWidthSync()*r.height/r.width;e.videoHeight=s,d.push(e),h=!0}});var s=[],f=d.length;if(f>0)for(var p=0;p<f;++p){var c=d[p]||{};p<u.length&&(c.poster=u[p].url),s.push(c)}for(var v=f;v<u.length;++v)s.push(u[v]);var m=parseInt(i,10);if(m){var y=0,I=null;s.forEach(function(r,e){parseInt(r.id,10)===m&&(y=e,I=r)}),I&&(s.splice(y,1),s.unshift(I))}return{list:s,height:t.SystemInfo.getWindowWidthSync()*g/375,isContainVideo:h}}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../../common/index"),n={min:.625,max:1},o={topImg:"1",detailImg:"2",topVedio:"6",longVedio:"9"},i={formatTopGallery:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),n=(r.goods||{}).banner||{};return n.url&&(t.banner=n),t},formatDetailGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r(e);if(0===n.length)return{};var i=[],l=function(r){return-1!==r.indexOf("?")?r.slice(0,r.indexOf("?")):r};n.forEach(function(r){var e=r;if(e.downloadUrl=l(r.url),"".concat(r.type,"")===o.detailImg){var n=t.SystemInfo.getWindowWidthSync()*r.height/r.width;e.imgHeight=n,e.url=t.ImageUtil.cdnCompress(r.url,null,null,null),i.push(e)}});var a=e.goods||{};return{list:i,goodsDesc:(a.goods_desc||"").replace(/\n/g,""),goodsProperty:a.goods_property}}};exports.default=i; 
 			}); 
		define("package_c/goods/goods_info/collage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});!function(e){e&&e.__esModule}(require("../../../libs/regenerator-runtime/runtime"));var e=require("../../../common/index");exports.default=function(a){var r=a;a.$setData({"goodsInfo.isCollage":!1,collageData:{isSelected:!0}}),r.dealCollage=function(){var a=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.price||{},l=t.data||{},o=this.data.collageData||{};if(o.display=l.copy_writing,o.hasCoupon=l.has_coupon,o.rewardId=l.reward_id,o.price=e.StdFormat.price(i.min_on_sale_group_price,100),o.desc=l.collage_card_desc,1===l.enable_alternative_desc){var n=parseInt(r.server_time,10),s=1e3*(l.end_time-n);this.clearIntervalByKey("COLLAGE_LEFT_TIME"),this.intervalHandlerList.COLLAGE_LEFT_TIME=setInterval(function(){if((s-=1e3)>0){var r=e.TimeUtil.transferToTime(s,"HMS")+l.collage_card_price_desc;a.$setData({"collageData.tag":r})}else a.clearIntervalByKey("COLLAGE_LEFT_TIME")},1e3)}else o.tag=l.collage_card_price_desc;this.$setData({"goodsInfo.isCollage":!0,collageData:o});var c=this.getImprTrackingParams("pincard_banner");c.page_el_sn=71365,(0,e.TrackingRecord)(c)}}; 
 			}); 
		define("package_c/goods/goods_info/deposit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,i){function o(s,n){try{var a=t[s](n),r=a.value}catch(e){return void i(e)}if(!a.done)return Promise.resolve(r).then(function(e){o("next",e)},function(e){o("throw",e)});e(r)}return o("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../libs/regenerator-runtime/runtime")),i=require("../../../common/index"),o={getDepopsitTip:"10538"},s={show:"deposit-rule-tip-main deposit-rule-tip-main-show",hide:"deposit-rule-tip-main "+(i.SystemInfo.getIpxJudgment()?"fix-ipx-deposit-rule-tip-main-hide":"deposit-rule-tip-main-hide")};exports.default=function(n){n.setData({mainDepositRuleTipClass:s.hide});var a=n;a.dealDeposit=function(e){var t=this;this.clearIntervalByKey("DEPOSIT_LEFT_TIME"),this.getDepositCountDown(e),this.intervalHandlerList.DEPOSIT_LEFT_TIME=setInterval(function(){e.depositLeftTime-=1e3,t.getDepositCountDown(e)},1e3)},a.getDepositCountDown=function(e){var t=this,o=e.depositLeftTime>0?i.TimeUtil.getPackagedTimeFromTimeBucket(e.depositLeftTime,"HMS"):null;e.depositLeftTime>=864e5&&(!t.data.goodsInfo.depositPackagedTime||o.days&&o.days!==t.data.goodsInfo.depositPackagedTime.days)?t.$setData({showDepositLeftDays:!0,"goodsInfo.depositPackagedTime":o}):e.depositLeftTime<864e5&&o?t.$setData({showDepositLeftCountDown:!0,"goodsInfo.depositPackagedTime":o}):o||(t.$setData({"goodsInfo.depositPackagedTime":o}),this.clearIntervalByKey("DEPOSIT_LEFT_TIME"))},a.getDepositTipContent=function(){var s=e(t.default.mark(function e(s){var n,a;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.isDeposit&&s.depositOn){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,i.Request.requestDataWithCmd(o.getDepopsitTip);case 5:return n=e.sent,a=i.Request.runRequest(n),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(e){return s.apply(this,arguments)}}(),a.processDepositTipContent=function(e){var t=[];e&&e.text&&(t=e.text.split("\n\n")),this.$setData({depositTipParagraphs:t})},a.imprDepositRuleBtn=function(){var e=this.data.goodsInfo||{};if(e.isDeposit&&e.depositOn){var t={page_name:"goods_detail",page_sn:"10014",op:"impr",page_section:"earnest_area",page_el_sn:200167,goods_id:e.goodsId,event_type:e.eventType};(0,i.TrackingRecord)(t,this)}},a.showDepositRuleTip=function(){var e=this;this.depositMarketScrollTop=this.scrollTop,this.$setData({depositRuleTipVisible:!0}),setTimeout(function(){e.$setData({mainDepositRuleTipClass:s.show})},150);var t=this.data.goodsInfo||{},o={page_name:"goods_detail",page_sn:"10014",op:"click",page_section:"earnest_area",page_el_sn:200167,page_element:"entrance_btn",goods_id:t.goodsId,event_type:t.eventType};(0,i.TrackingRecord)(o,this)},a.hideDepositRuleTip=function(){var e=this;this.setData({mainDepositRuleTipClass:s.hide}),setTimeout(function(){e.$setData({depositRuleTipVisible:!1},function(){wx.pageScrollTo&&wx.pageScrollTo({scrollTop:e.depositMarketScrollTop,duration:0})})},150);var t=this.data.goodsInfo||{},o={page_name:"goods_detail",page_sn:"10014",op:"click",page_section:"earnest_popup",page_el_sn:200168,page_element:"close_btn",goods_id:t.goodsId,event_type:t.eventType};(0,i.TrackingRecord)(o,this)},a.depositRuleTipDefaultClick=function(){}}; 
 			}); 
		define("package_c/goods/goods_info/duoduo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function n(u,r){try{var s=t[u](r),a=s.value}catch(e){return void o(e)}if(!s.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});e(a)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(require("../../../libs/regenerator-runtime/runtime")),n=require("../../../common/index"),u=e(require("../../../configs/api"));exports.default=function(e){e.dealDuoduoGoods=function(e){var r=this,s=(e.promotion||{}).events||{};if(this.duoduoType&&s.treasure_coupon&&s.treasure_coupon.discount_amount){var a={},i=e.price||{},c=n.StdFormat.price(i.min_on_sale_group_price,100);a.duodouDiscountPrice=c,a.duoduoDiscountAmount=n.StdFormat.price(s.treasure_coupon.discount_amount,100),this.$setData(a);var d=this.$urlQueryObj.take_coupon_text;d&&t(o.default.mark(function e(){var t,s,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={busi_name:"xcx_ddjb",scene_ids:["xcx_ddjb_0"]},e.next=3,n.Request.apiRequest("POST",u.default.getAbScene,t,!1);case 3:(s=e.sent)&&s.ab_map&&1===parseInt(s.ab_map.xcx_ddjb_0,10)&&(a={showDuoduoToast:!0},"抢券成功"===d?(a.toastIcon="success_icon",a.toastText="抢券成功"):(a.toastIcon="not_success_icon",a.toastText=d),r.$setData(a),r.timeOutHandlerList.DUODUO_TOAST=setTimeout(function(){r.clearTimeoutByKey("DUODUO_TOAST"),r.$setData({showDuoduoToast:!1})},2e3));case 5:case"end":return e.stop()}},e,r)}))()}}}; 
 			}); 
		define("package_c/goods/goods_info/goods_info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function a(i,s){try{var n=t[i](s),r=n.value}catch(e){return void o(e)}if(!n.done)return Promise.resolve(r).then(function(e){a("next",e)},function(e){a("throw",e)});e(r)}return a("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var o=require("../../../common/index"),a=e(require("./deposit")),i=e(require("./spike")),s=e(require("./duoduo")),n=e(require("./yard_sold_out")),r=e(require("./collage")),c=e(require("./subsidy")),d=e(require("../../../controller/config_controller")),l=e(require("../../../libs/regenerator-runtime/runtime")),u={lottery:"抽奖",freeTrial:"免费试用",appOnly:"App专享",preSale:"预售",capitalGift:"包拼送礼",secondHand:"二手"};exports.default=function(e){(0,a.default)(e),(0,i.default)(e),(0,s.default)(e),(0,n.default)(e),(0,r.default)(e),(0,c.default)(e),e.$setData({isShowTagModal:!1});var g=e;g.dealTagInfo=function(){var e=t(l.default.mark(function e(t,a){var i,s,n,r,c,g,p,h,f,_,T,m,y,v,S,w=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p=function(e,t){r.push({tag:e,style:t||"red-tag"}),i>0&&(i+=17),i+=24*e.length+17},i=0,s={},(n=a.goods||{}).tag_icon&&n.tag_icon.length>0?s.icon=n.tag_icon[0]||"":n.icon&&(s.icon=n.icon),s.icon&&s.icon.width&&s.icon.height&&(i+=s.icon.width/3*2+14,s.iconStyle="width:".concat(s.icon.width/3*2,"rpx;height:",s.icon.height/3*2,"rpx;")),r=[],(c=n.quickly_expire||{})&&1===c.status&&((g={}).tag=c.name||"临期",c.desc?g.desc=c.desc:g.desc="该商品保质期即将到期，请确认后再购买",g.style="red-tag",r.push(g),i+=24*g.tag.length+10),t.isFreeTrial&&p(u.freeTrial),(t.isCapitalGift||t.isCapitalGiftLottery)&&p(u.capitalGift),t.isApp&&p(u.appOnly),t.isPreSale&&p(u.preSale),1===n.second_hand&&p(u.secondHand,"green-tag"),h=a.service_promise||[],f=o.StorageUtil.getStorageSync("goods_after_tag_tips")||{},e.next=18,d.default.getConfig("goods_detail_return_goods_tips");case 18:_=e.sent,T=-1,h.forEach(function(e){if(1===e.top&&e.type){var t={};t.tag=e.type,t.desc=e.desc,t.style="green-tag",r.push(t),i+=24*e.type.length+40,!f[e.id]&&-1===T&&e.show_tip&&_&&(t.showTips=o.DataUtil.cutstr(e.show_tip,30),T=e.id)}}),m={preTag:s,afterTag:r,isShowTips:T>-1},i>0&&r.length>0&&((y=this.getImprTrackingParams("title_tag")).page_el_sn=79016,(0,o.TrackingRecord)(y,this)),v=1112-i,S=parseInt(v/17,10),m["goodsInfo.goodsName"]=o.DataUtil.cutstr(n.goods_name,S),this.setData(m,function(){if(T>-1){setTimeout(function(){w.setData({isShowTips:!1})},3e3),w.referFrom=T+"_tips",f[T]=!0,o.StorageUtil.setStorage("goods_after_tag_tips",f);var e=w.getImprTrackingParams("goods_tips");e.type=T,(0,o.TrackingRecord)(e,w)}});case 27:case"end":return e.stop()}},e,this)}));return function(t,o){return e.apply(this,arguments)}}(),g.touchStartGoodsName=function(e){var t=this;this.goodsNameTouchStartHandler=setTimeout(function(){t.goodsNameTouchStartHandler=null,t.goodsNamelongPressBanner(e)},350)},g.goodsNamelongPressBanner=function(){var e=this,t=".general-goods-detail-box";if(e.data.goodsInfo.isSpike&&(t=".spike-goods-box"),e.data.goodsInfo.isLottery&&(t=".lottery-container"),e.data.goodsInfo.isCollage&&(t=".collage-container"),wx.canIUse&&wx.canIUse("createSelectorQuery")){var o=wx.createSelectorQuery();o.select(t).boundingClientRect(),o.exec(function(t){var o=void 0;o=!(t&&t.length>0&&t[0].top<=45),e.$setData({showGoodsNameCopyToast:!0,showCopyToastTop:o})})}},g.touchMoveGoodsName=function(){this.resetGoodNameTouchHandler()},g.touchEndGoodsName=function(){this.resetGoodNameTouchHandler()},g.resetGoodNameTouchHandler=function(){this.goodsNameTouchStartHandler&&(clearTimeout(this.goodsNameTouchStartHandler),this.goodsNameTouchStartHandler=null)},g.onCopyClicked=function(e){var t=this,o=e.currentTarget.dataset.content||"";o&&wx.setClipboardData({data:"".concat(o),success:function(){wx.getClipboardData({success:function(){t.hideGoodsNameCopyToast()}})}})},g.hideGoodsNameCopyToast=function(){this.$setData({showGoodsNameCopyToast:!1})},g.onTagClicked=function(e){var t=e.currentTarget.dataset.desc||"";t&&this.$setData({tagDesc:t,isShowTagModal:!0});var a=this.getClickTrackingParams("title_tag");a.page_el_sn=79016,(0,o.TrackingRecord)(a,this)},g.onCloseTagClicked=function(){this.$setData({tagDesc:"",isShowTagModal:!1})},g.dealGoodsType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.depositLeftTime>0&&t.depositOn,a=e.activity_collection||{},i=a.spike_dynamic&&a.spike_dynamic.spike_group,s=(e.ui||{}).price_section||{};o?this.dealDeposit(t):i?this.dealSpike(e):"yard_sold_out"===s.type?this.dealYardSoldOut(s):"collage_card"===s.type?this.dealCollage(e,s):"subsidy"===s.type?this.dealSubsidy(s):this.dealDuoduoGoods(e)}}; 
 			}); 
		define("package_c/goods/goods_info/spike.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,i){function a(n,s){try{var r=t[n](s),o=r.value}catch(e){return void i(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(require("../../../libs/regenerator-runtime/runtime")),a=require("../../../common/index"),n=e(require("../../../configs/api")),s=e(require("../../../controller/config_controller")),r=e(require("../../../storage/ram_manager"));exports.default=function(e){e.dealSpike=function(){var e=this,t={},i=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).activity_collection||{}).spike_dynamic.spike_group||{},n=1e3*parseInt(i.start_time,10);t.spikeGroupInfo=i,t.soldQuantity=a.StdFormat.sales(i.sold_quantity,100),t.allQuantity=a.StdFormat.sales(i.all_quantity,100),t.spikeLimitQuantity=i.limit_quantity,t.spikeStart=Date.parse(new Date)-n>0,t.spikeOver=parseInt(i.sold_quantity,10)>=parseInt(i.all_quantity,10),t.spikeNotice=i.spike_notice,this.$setData({spikeInfo:t}),this.updateSpikeRemindStatus(),t.spikeLeftTime>0&&t.spikeStart&&!t.spikeOver&&(this.clearIntervalByKey("SPIKE_LEFT_TIME"),this.intervalHandlerList.SPIKE_LEFT_TIME=setInterval(function(){e.data.spikeInfo.spikeLeftTime-=1e3;var t=e.data.spikeInfo.spikeLeftTime>0?a.TimeUtil.getPackagedTimeFromTimeBucket(e.data.spikeInfo.spikeLeftTime,"HMS"):null;e.$setData({"spikeInfo.spikePackagedTime":t})},1e3))},e.getDynamicShareInfo=function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=this,u=r.goods||{},c=r.activity_collection||{},d="seckill_dynamic_msg",k={goods_id:u.goods_id,remain:c.spike_dynamic.spike_group.all_quantity,expiration_time:c.spike_dynamic.spike_group.countdown_end_time};if(o.spikeStart)k.sold=c.spike_dynamic.spike_group.sold_quantity;else{var l=c.spike_dynamic.spike_group.start_time-parseInt(Date.now()/1e3,10);if(l>86400||l<600)return;d="seckill_dyn_msg_future",k.expiration_time=c.spike_dynamic.spike_group.start_time}t(i.default.mark(function t(){var r,l;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,2!==parseInt(u.event_type,10)||!wx.updateShareMenu){e.next=11;break}return e.next=4,s.default.getConfig(d);case 4:if(r=e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,a.Request.apiRequest("POST",n.default.joinActivity,k,!0,{needGZToken:!0,forceUseApiGZ:!0});case 9:(l=e.sent)&&l.data&&l.data.activity_id&&wx.updateShareMenu({withShareTicket:!0,isUpdatableMessage:!0,activityId:l.data.activity_id,templateInfo:{parameterList:[{name:"member_count",value:o.spikeStart?""+c.spike_dynamic.spike_group.sold_quantity:""+l.data.sold},{name:"room_limit",value:o.spikeStart?""+c.spike_dynamic.spike_group.all_quantity:""+l.data.remain}]},success:function(){p.dynamicShareKey=d+"_"+l.data.target_state}});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}},t,e,[[0,13]])}))()},e.updateSpikeRemindStatus=function(){var e=this.data.spikeInfo||{},t=-1!==r.default.spikeRemindGoodsIds.indexOf(this.$urlQueryObj.goods_id)?1:0,i=e.spikeGroupInfo,n=1e3*parseInt(i.start_time,10),s=new Date(n).getYear(),o=new Date(n).getMonth(),p=new Date(n).getDate(),u=(new Date).getYear(),c=(new Date).getMonth(),d=(new Date).getDate(),k=a.TimeUtil.getTodayTime(),l=k+86400+86400;e.spikePackagedTime=null,e.spikeDateNotice="",e.spikeNotify=t,e.spikeLeftTimeBegin=i.start_time-k;var m=a.TimeUtil.formatTime(parseInt(n/1e3,10),"hh:mm");if(s>u||o>c||p>d&&s===u&&o===c)l<=i.start_time&&i.start_time<l+86400?(1===e.spikeNotify?e.spikeDateNotice=o+"月"+p+"日 "+m+"开抢 已设置提醒":e.spikeDateNotice=o+"月"+p+"日 "+m+" 提醒我",e.spikeDateNotify=o+"月"+p+"日开抢"):(1===parseInt(e.spikeNotify,10)?e.spikeDateNotice="明天 "+m+"开抢 已设置提醒":e.spikeDateNotice="明天 "+m+" 提醒我",e.spikeDateNotify="明日开抢");else if(e.spikeStart){var _=1e3*i.countdown_end_time-Date.now();e.spikeLeftTime=_,e.spikePackagedTime=_>0?a.TimeUtil.getPackagedTimeFromTimeBucket(_,"HMS"):null}else 1===parseInt(e.spikeNotify,10)?e.spikeDateNotice=m+" 开抢 已设置提醒":e.spikeDateNotice=m+" 提醒我",e.spikeDateNotify="即将开抢";this.$setData({spikeInfo:e})}}; 
 			}); 
		define("package_c/goods/goods_info/subsidy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};exports.default=function(s){s.setData({"goodsInfo.isSubsidy":!1,subsidyInfo:{}}),s.dealSubsidy=function(){var s=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).data||{};this.setData({"goodsInfo.isSubsidy":!0,subsidyInfo:e({},s,{showType:"coupon"!==s.subsidy_show_type||/官方补贴品/.test(s.subsidy_price_tag_desc)?"activity":"coupon",linedPrefix:s.subsidy_lined_price_prefix||"",linedPrice:s.subsidy_lined_price?parseFloat(s.subsidy_lined_price/100).toFixed(2):""})||{}})}}; 
 			}); 
		define("package_c/goods/goods_info/yard_sold_out.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t){t.setData({"goodsInfo.isYardSoldOut":!1,yardSoldOutInfo:{}}),t.dealYardSoldOut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$setData({"goodsInfo.isYardSoldOut":!0,yardSoldOutInfo:t.data||{}})}}; 
 			}); 
		define("package_c/goods/goods_reviews/reviews_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(a,i){try{var u=e[a](i),o=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../common/index"),r=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../libs/regenerator-runtime/runtime")),n={requestReviews:function(){var n=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(r.default.mark(function t(){var i,u,o;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.rv){t.next=2;break}return t.abrupt("return",null);case 2:return i={page:1,size:2,label:1},u=e.Request.requestDataWithCmd("10148",{params:i,restfulParam:a.goodsId}),t.next=6,e.Request.runRequest(u);case 6:return o=t.sent,t.abrupt("return",o);case 8:case"end":return t.stop()}},t,n)}))()},formatReviews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};n.numberTxt=t.review_num_text,n.tagList=[];var a=0,i=0,u=!1;(t.labels||[]).forEach(function(t){if(t.positive){a++,i+=t.text.length;var e=t.view||{};59421===e.iconfont&&(t.iconfontStr="&#".concat(e.iconfont.toString(16),";")),t.style="background-color:".concat(e.back_color,";color:",e.text_color,";"),i<22&&n.tagList.push(t)}}),a>=3&&(u=!0);var o=parseInt(r.catId1,10),s=parseInt(r.catId2,10),c=parseInt(r.catId3,10),l=t.review_info_list||[];n.detailList=l.map(function(t){return t.time=e.TimeUtil.formatTime(t.time,"yyyy.MM.dd"),t.specs=e.DataUtil.formatSpecs(t.specs),1715!==o&&(2!==o||64!==s||40!==c&&116!==c&&117!==c&&120!==c)||(t.name=e.Util.formatUserName(t.name)),t}),n.isShow=u;var m={};return t.merchant_qa_num_text&&t.merchant_qa_list_url&&t.merchant_qa_list&&(m.merchant_qa_num_text=t.merchant_qa_num_text,m.merchant_qa_list_url=t.merchant_qa_list_url,m.merchant_qa_list=t.merchant_qa_list),{reviews:n,answer:m}}};exports.default=n; 
 			}); 
		define("package_c/goods/goods_tracking.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../common/index"),r=e(require("../../storage/ram_manager")),i=e(require("../../constants/goods_property"));exports.default=function(e){var o=e;o.pvTracking=function(e){var r={op:"pv",page_name:"goods_detail",goods_id:this.$urlQueryObj.goods_id};e&&(r.is_back=1),this.data.refer_xcx_campaign_dacu&&(r.refer_xcx_campaign_dacu=this.data.refer_xcx_campaign_dacu),this.$urlQueryObj.event_type&&(r.event_type=this.$urlQueryObj.event_type),void 0!==this.$urlQueryObj.subjects_id&&(r.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(r.refer_subject_id=this.$urlQueryObj.subject_id),(0,t.TrackingRecord)(r,this),this.$firstTimeTrackRecord.pv=!0,this.$urlQueryObj.refer_xcx_campaign_get_redpocket&&(this.referXcxCampaignGetRedpocket=1,delete this.$urlQueryObj.refer_xcx_campaign_get_redpocket)},o.getImprTrackingParams=function(e){var t=this.data.goodsInfo;if(!t)return null;var r={op:"impr",page_name:"goods_detail",page_section:e,goods_id:t.goodsId,event_type:t.eventType};return void 0!==this.$urlQueryObj.subjects_id&&(r.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(r.refer_subject_id=this.$urlQueryObj.subject_id),r},o.getClickTrackingParams=function(e,t){var r=this.data.goodsInfo||{},i={op:"click",page_name:"goods_detail",page_sn:10014,cat_id:r.catId,cat_id_1:r.catId1,cat_id_2:r.catId2,cat_id_3:r.catId3,goods_type:r.goodsType,event_type:r.eventType,page_section:e,goods_id:this.$urlQueryObj.goods_id,rec_goods_ids:this.$urlQueryObj.goods_id,page_element:t},o=(this.data.skuData||{}).sku||[];return i.sku_num=o.length,"top_banner"===i.page_element&&(i.page_el_sn=98776),"ser_promise_bt"===i.page_element&&(i.page_el_sn=98775),"coupon_recie_btn"===i.page_element&&(i.page_el_sn=35162),"go_mall_btn"===i.page_element&&(i.page_el_sn=98780),"mall_rec_list"===i.page_section&&"goods"===i.page_element&&(i.page_el_sn=96513),"rec_list"===i.page_section&&"goods"===i.page_element&&(i.page_el_sn=99084),"return_index"===i.page_element&&(i.page_el_sn=99810),"spike_remind"===i.page_element&&(i.page_el_sn=99925),"customer_service"===i.page_element&&(i.page_el_sn=99813),"like_btn"===i.page_element&&(i.page_el_sn=99812),"screen_shot_popup"===i.page_section&&"invent_btn"===i.page_element&&(i.page_el_sn=99067),this.data.refer_xcx_campaign_dacu&&(i.refer_xcx_campaign_dacu=this.data.refer_xcx_campaign_dacu),void 0!==this.$urlQueryObj.subjects_id&&(i.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(i.refer_subject_id=this.$urlQueryObj.subject_id),this.referTagId&&(i.refer_tag_id=this.referTagId),i},o.composeGoodsImprTracking=function(){if(!r.default.isFromAppOnShow&&!this.$firstTimeTrackRecord.impr){var e=this.data.goodsInfo,i={op:"impr",page_section:"main",page_name:"goods_detail",page_sn:10014,cat_id:e.catId,cat_id_1:e.catId1,cat_id_2:e.catId2,cat_id_3:e.catId3,goods_id:e.goodsId,goods_type:e.goodsType,event_type:e.eventType,goods_price:e.minOnsaleGroupPrice,has_local_group:e.hasLocalGroup?"1":"0"};this.isNewOrSilentUser&&(i.xcx_user_tag="silence"),void 0!==this.$urlQueryObj.subjects_id&&(i.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(i.refer_subject_id=this.$urlQueryObj.subject_id),(0,t.TrackingRecord)(i,this),this.$firstTimeTrackRecord.impr=!0}},o.checkImpredObj=function(e){return this.impredObj=this.impredObj||{},!!this.impredObj[e]||(this.impredObj[e]=!0,!1)},o.imprTracking=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this,i=this.data.recommendList,s=r.data.goodsInfo,a=(e.detail||{}).index;if(!o.checkImpredObj(a)&&a<i.length){var c=i[a]||{},_={op:"impr",page_name:"goods_detail",page_sn:10014,page_section:"rec_list",page_element:"goods",page_el_sn:99084,goods_id:s.goodsId,event_type:s.eventType,idx:a,rec_goods_id:c.goodsId,rec_event_type:c.eventType,list_id:c.recGoodsListId};void 0!==this.$urlQueryObj.subjects_id&&(_.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(_.refer_subject_id=this.$urlQueryObj.subject_id),_=t.ObjectUtil.assign(_,r.$generateGoodsInfoTracking(c)),(0,t.TrackingRecord)(_,r)}},o.initPropertyTop=function(){var e=this;if(wx.createSelectorQuery&&!this.timeOutHandlerList.IMPR_PROP_TOP){var t=this;this.timeOutHandlerList.IMPR_PROP_TOP=setTimeout(function(){e.clearTimeoutByKey("IMPR_PROP_TOP"),wx.createSelectorQuery().select("#property-top-impr").boundingClientRect(function(e){t.propertyTopRect=e,t.imprPropertyTop(t.scrollTop,t.scrollLeft)}).exec()},500)}},o.imprPropertyTop=function(e,r,o){var s=this;if(this.propertyTopRect){var a=this.propertyTopRect.top&&this.propertyTopRect.top-e,c=this.propertyTopRect.bottom&&this.propertyTopRect.bottom-e;if(a>=0&&c<=t.SystemInfo.getWindowHeightSync()){if(!this.imprPropertyTopOnce||o){var _=function(e){for(var r=e;r<e+4;r++)if(!s.propertyTopHasImpr[r]){s.propertyTopHasImpr[r]=!0;var o=s.data.goodsInfo.goodsPropertyTop[r].icon.icon_font;(0,t.TrackingRecord)({op:"impr",page_name:"goods_detail",page_sn:10014,page_section:"category_head",page_el_sn:39208,goods_id:s.data.goodsInfo.goodsId,event_type:s.data.goodsInfo.eventType,icon_property:i.default.GoodsPropertyIndex[o]},s)}};if(r>t.Util.rpxToPx(12)){var d=t.Util.rpxToPx(174),n=t.Util.rpxToPx(12),p=t.DataUtil.accSub(r,n),u=Math.floor(t.DataUtil.accDiv(p,d));_(u=t.DataUtil.accSub(p,t.DataUtil.accMul(u,d))>t.DataUtil.accDiv(d,2)?u+1:u)}else _(0);this.imprPropertyTopOnce=!0}}else this.imprPropertyTopOnce=!1,this.propertyTopHasImpr={}}},o.initPropertyAttrMore=function(){if(wx.createSelectorQuery){var e=wx.createSelectorQuery();if(!this.timeOutHandlerList.IMPR_PROP_MORE){var t=this;this.timeOutHandlerList.IMPR_PROP_MORE=setTimeout(function(){t.clearTimeoutByKey("IMPR_PROP_MORE"),e.select("#goods-property-impr").boundingClientRect(),e.select("#property-attr-more").boundingClientRect(),e.exec(function(e){e&&e[0]&&(t.goodsPropertyRect=e[0]||null),e&&e[1]&&(t.attrMoreRect=e[1]||null),t.imprPropertyAttrMore(t.scrollTop)})},500)}}},o.imprPropertyAttrMore=function(e){if(this.attrMoreRect||this.goodsPropertyRect){var r={op:"impr",page_name:"goods_detail",page_sn:10014,page_section:"category_area",goods_id:this.data.goodsInfo.goodsId,event_type:this.data.goodsInfo.eventType},i=!1,o=!1,s=t.SystemInfo.getWindowHeightSync();if(this.attrMoreRect&&!this.data.showAllProperty){var a=this.attrMoreRect.top&&this.attrMoreRect.top-e,c=this.attrMoreRect.bottom&&this.attrMoreRect.bottom-e,_=s-t.Util.rpxToPx(110);_=this.data.isIpx?_-t.Util.rpxToPx(68):_,i=a>=0&&c<=_}if(this.goodsPropertyRect){var d=this.goodsPropertyRect.top&&this.goodsPropertyRect.top-e,n=this.goodsPropertyRect.bottom&&this.goodsPropertyRect.bottom-e,p=s+t.DataUtil.accDiv(this.goodsPropertyRect.height,2)-t.Util.rpxToPx(110);p=this.data.isIpx?p-t.Util.rpxToPx(68):p,o=d>=-t.DataUtil.accDiv(this.goodsPropertyRect.height,2)&&n<=p}i?this.imprAttrMoreOnce||(r.page_el_sn=96523,r.page_element="open_btn",(0,t.TrackingRecord)(r,this),this.imprAttrMoreOnce=!0):this.imprAttrMoreOnce=!1,o?this.imprPropertyOnce||(r.page_el_sn=96522,(0,t.TrackingRecord)(r,this),this.imprPropertyOnce=!0):this.imprPropertyOnce=!1}},o.getCommonTrackingParams=function(){var e={},t={page_name:"goods_detail",page_sn:10014,cat_id:(e=this.data.goodsInfo&&this.data.goodsInfo.goodsId?this.data.goodsInfo||{}:this.formatGoods||{}).catId,cat_id_1:e.catId1,cat_id_2:e.catId2,cat_id_3:e.catId3,goods_type:e.goodsType,event_type:e.eventType,goods_id:this.$urlQueryObj.goods_id,rec_goods_ids:this.$urlQueryObj.goods_id},r=(this.data.skuData||{}).sku||[];return t.sku_num=r.length,t.has_local_group=e.hasLocalGroup?"1":"0",this.$urlQueryObj.refer_xcx_campaign_dacu&&(t.refer_xcx_campaign_dacu=this.$urlQueryObj.refer_xcx_campaign_dacu),void 0!==this.$urlQueryObj.subjects_id&&(t.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(t.subject_id=this.$urlQueryObj.subject_id),this.referTagId&&(t.refer_tag_id=this.referTagId),this.isNewOrSilentUser&&(t.xcx_user_tag="silence"),t},o.trackingEvent=function(e){var r=e.detail||{},i=this.getCommonTrackingParams(),o=t.ObjectUtil.assign({},r,i);(0,t.TrackingRecord)(o,this)},o.doClickTracking=function(e){var r=this.getCommonTrackingParams(),i=t.ObjectUtil.assign({},e,r);i.op="click",(0,t.TrackingRecord)(i,this)},o.doImprTracking=function(e){var r=this.getCommonTrackingParams(),i=t.ObjectUtil.assign({},e,r);i.op="impr",(0,t.TrackingRecord)(i,this)}}; 
 			}); 
		define("package_c/goods/local_group/local_group_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){return r&&r.__esModule?r:{default:r}}function e(r){return function(){var e=r.apply(this,arguments);return new Promise(function(r,t){function o(i,u){try{var a=e[i](u),s=a.value}catch(r){return void t(r)}if(!a.done)return Promise.resolve(s).then(function(r){o("next",r)},function(r){o("throw",r)});r(s)}return o("next")})}}function t(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments[2],o=r.local_group||{},i=o.local_group_list||[],u=[],s=[],n=parseInt(e.catId1,10),p=parseInt(e.catId2,10),l=parseInt(e.catId3,10),_=1715===n,c=2===n&&64===p,d=40===l||116===l||117===l||120===l,g=_||c&&d,m=0;m<i.length;m++){var f=i[m]||{},v=parseInt(f.expire_time,0);if(f.group_order_id&&v>t){var h=f.uin&&f.uin===a.User.getUserUin(),y=f.nickname||"游客";g&&(y=a.Util.formatUserName(y));var G=1e3*(parseInt(v,0)-t);G=Math.max(G,0);var T=a.TimeUtil.transferToTime(G),I={groupOrderId:f.group_order_id,nickname:y,avatar:a.DataUtil.dealWithAvatarURL(f.avatar),expireTime:v,duration:G,leftTimeStr:T,isHistoryGroup:!1,isUser:h,btnName:o.local_group_button_desc};G>0&&G<216e5&&s.push(I),u.push(I)}}return u.sort(function(r,e){return parseInt(r.expireTime,0)-parseInt(e.expireTime,0)}),{list:u,leftTimeList:s}}function o(r){for(var e=r.history_group||{},t=e.history_group_list||[],o=[],i=0;i<t.length;++i){var u=t[i]||{};if(u.group_order_id){for(var s=[],n=u.member_info_list||[],p="",l=0;l<Math.min(n.length,2);++l){var _=n[l]||{};0===l?p=_.nickname||"游客":(p+="、",p+=_.nickname||"游客"),s.push({avatar:a.DataUtil.dealWithAvatarURL(_.avatar),nickname:_.nickname||"游客"})}o.push({groupOrderId:u.group_order_id,nickname:p,memberList:s,isHistoryGroup:!0,btnName:e.history_group_button_desc})}}return o}function i(r){for(var e=r.history_visitor||{},t=e.history_visitor_list||[],o=[],i=0;i<t.length;++i){var u=t[i]||{};o.push({nickname:u.nickname||"游客",avatar:a.DataUtil.dealWithAvatarURL(u.avatar),isHistoryGroup:!1,isHistoryVisitor:!0,btnName:e.history_visitor_button_desc})}return o}function u(r){var e=(r.local_group||{}).user_group;if(!e)return null;var t=parseInt(r.server_time,10),o=parseInt(e.expire_time,10)<t,i=e.uid===n.default.getUserId();return o||i?null:{groupOrderId:e.group_order_id,cityName:e.city_name,gender:e.gender||"0",nickname:e.nickname||"游客",avatar:a.DataUtil.dealWithAvatarURL(e.avatar),requireNum:parseInt(e.require_num||1,10),usersNum:parseInt(e.users_num||1,10),isUser:i,expireTime:e.expire_time}}Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../../../common/index"),s=r(require("../../../configs/api")),n=r(require("../../../storage/user_storage")),p=r(require("../../../libs/regenerator-runtime/runtime")),l={requestLocalGroups:function(r,t,o){var i=this;return e(p.default.mark(function e(){var u,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u={goods_id:r,size:10,show_type:t},o&&(u.group_order_id=o),e.next=4,a.Request.apiRequest("POST",s.default.getGoodsLocalInfo,u);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e,i)}))()},refreshLocalGroups:function(r,t,o){var i=this;return e(p.default.mark(function e(){var u,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u={goods_id:r,size:10,show_type:t},o&&(u.group_order_id=o),e.next=4,a.Request.apiRequest("POST",s.default.refreshGoodsLocalGroup,u);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e,i)}))()},formatLocalGroups:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2],s={},n=e.local_group||{},p=n.local_group_list||[];if(s.serverTime=a,s.userGroup=u(e),s.requireNum=1,s.totalNum=0,s.isHistoryGroup=!1,s.leftTimeList=[],r.groupTypes&&r.groupTypes.length>1&&(s.requireNum=parseInt(r.groupTypes[1].requireNum,0)),p.length>0){var l=t(e,r,a);s.groupList=l.list,s.leftTimeList=l.leftTimeList,s.totalNum=n.local_group_total,s.localGroupDesc=n.local_group_desc,s.localGroupTitle=n.local_group_popup_title,s.localGroupPopupFooter=n.local_group_popup_footer,s.isHistoryGroup=!1,s.isHistoryVisitor=!1}else{var _=e.history_group||{},c=_.history_group_list||[];if(c.length>0)s.groupList=o(e),s.totalNum=c.length,s.localGroupDesc=_.history_group_desc,s.localGroupTitle=_.history_group_popup_title,s.localGroupPopupFooter=_.history_group_popup_footer,s.isHistoryGroup=!0,s.isHistoryVisitor=!1;else{var d=e.history_visitor||{},g=d.history_visitor_list||[];g.length>0&&(s.groupList=i(e),s.totalNum=g.length,s.localGroupDesc=d.history_visitor_desc,s.localGroupTitle=d.history_visitor_popup_title,s.localGroupPopupFooter=d.history_visitor_popup_footer,s.isHistoryGroup=!1,s.isHistoryVisitor=!0)}}return s}};exports.default=l; 
 			}); 
		define("package_c/goods/mall_recommend/mall_recommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function a(n,o){try{var l=t[n](o),i=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}return a("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../../../common/index"),a=e(require("../../../common/image_util")),n=e(require("../../../models/format/grid_item_goods")),o=e(require("../../../libs/regenerator-runtime/runtime")),l=require("../../../actions/common"),i=e(require("../../../controller/compose_rec_goods"));exports.default=function(e){e.navigationToMallPage=function(){if(this.data.mallInfo.mallId){var e=this.data.mallInfo.mallId;if(this.data.mallInfo){this.transGoodsData=this.data.mallInfo;var t=this.data.mallInfo.pddRoute.indexOf("comm_brand_page")>-1;this.data.mallInfo.pddRoute?r.Navigation.route(this.data.mallInfo.pddRoute+"&individuation=true"):this.$forward("mall_page",{is_brand:t,mall_id:e,goods_id:this.goods_id,individuation:!0})}}var a=this.getClickTrackingParams("mall","go_mall_btn");(0,r.TrackingRecord)(a,this)},e.shopAround=function(e){this.$uploadFormId(e)},e.getMallRecImprInfo=function(){var e=this;if(this.hasMallRecommend&&wx.canIUse&&wx.canIUse("createSelectorQuery")){var t=wx.createSelectorQuery();t.select(".impr-mall-recommend").boundingClientRect(),t.selectViewport().scrollOffset(),t.exec(function(t){if(t&&t[0]&&t[1]){var r=t[0];if(r){e.getMallGoodsImprInfo=!0;var a=r.bottom-r.top;e.minMallRecommendImprH=r.top+a/4+t[1].scrollTop,e.maxMallRecommendImprH=r.bottom-a/4+t[1].scrollTop,e.checkMallImprItem(e.scrollTop)}}})}},e.checkMallImprItem=function(e){var t=this;!this.isMallRecommendImpred&&this.getMallGoodsImprInfo&&this.hasMallRecommend&&(this.imprMallRecommendHandler&&(clearTimeout(this.imprMallRecommendHandler),this.imprMallRecommendHandler=null),this.imprMallRecommendHandler=setTimeout(function(){t.imprMallRecommendHandler=null;var a=r.SystemInfo.getWindowHeightSync(),n=e+a;e<t.minMallRecommendImprH&&n>t.maxMallRecommendImprH&&(t.isMallRecommendImpred=!0,t.imprMallRecommend())},100))},e.imprMallRecommend=function(){var e=this,t=this.getImprTrackingParams("mall_rec_list");t.page_element="goods",t.page_el_sn=96513,this.data.mallRecommendList.forEach(function(a,n){var o=r.ObjectUtil.assign({},t,{rec_goods_id:a.goodsId,rec_event_type:a.eventType,idx:n},e.$generateGoodsInfoTracking(a));(0,r.TrackingRecord)(o,e)})},e.getMallDetail=function(){var e=t(o.default.mark(function e(t){var a,n,l;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1!==(a=parseInt(t.eventType,10))&&7!==a){e.next=4;break}return e.abrupt("return",null);case 4:return n=r.Request.requestDataWithCmd("10552",{params:{mall_id:t.mallId,check_merchant_score:"yes"}}),e.next=7,r.Request.runSecondaryRequestForPage(n,this);case 7:return l=e.sent,e.abrupt("return",l);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),e.formatMallEntranceData=function(e){var t={},r=e.mall_brand_tag_vo||{};if(t.mallShowType=e.mall_show_type,t.pddRoute=e.pdd_route||"",t.mallId=e.mall_id,t.mallName=e.mall_name,t.mallLogo=a.default.cdnCompressFixWidth({imgUrl:e.mall_logo,width:"88",quality:"100"}),t.pddRouteName=e.pdd_route_name,t.brandTagLink=r.brand_tag_link,t.brandTagHeight=2*parseInt(r.brand_tag_height,10)/3+"rpx",t.brandTagWidth=2*parseInt(r.brand_tag_width,10)/3+"rpx",t.goodsNumDesc=e.goods_num_desc||"",t.salesTip=e.sales_tip||"",e.dsr&&null!=e.dsr.hide_rank_info&&1!==parseInt(e.dsr.hide_rank_info,10)&&(t.dsr={mallRatingTextList:e.dsr.mall_rating_text_list,hideRankInfo:e.dsr.hide_rank_info},t.dsr.mallRatingTextList.forEach(function(e){e.mall_rating_key.font*=2,e.mall_rating_value.font*=2})),e.logo_list&&e.logo_list.length>0&&!t.brandTagLink){var n=e.logo_list[0]||{};t.brandTagLink=n.logo_url,t.brandTagHeight=2*parseInt(n.logo_height,10)/3+"rpx",t.brandTagWidth=2*parseInt(n.logo_width,10)/3+"rpx"}return t},e.getMallRecommendGoodsDetail=function(){var e=t(o.default.mark(function e(t,a){var n,l,s,d,m;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.goodsId,l=this.$urlQueryObj.hide_rec,n&&"true"!==l){e.next=5;break}return e.abrupt("return",null);case 5:return s={goods_id:n,app_name:"goods_detail_mall",offset:0,count:a.showMoreGoods?6:3,list_id:this.mallRecGoodsListId},d=r.Request.requestDataWithCmd("10087",{params:Object.assign({},s)}),e.next=9,i.default.getRecGoods(Object.assign({},s),{type:2,need_local_group:!1},d);case 9:return m=e.sent,e.abrupt("return",m);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t,r){return e.apply(this,arguments)}}(),e.processMallRecommendGoods=function(e,t){var r=this;if(e)if(e.errorCode||e.error_code)this.$dispatch((0,l.showToast)(e.errorMsg||e.error_code));else if(!this.data.showError){var a=e.success&&e.data&&(e.data.goods_list||e.data);if(a&&Array.isArray(a)&&!(a.length<3)){a.length>6&&(a=a.slice(0,6)),(!t.showMoreGoods||a.length<6)&&(a=a.slice(0,3));var o=[];a.forEach(function(e){var t=n.default.formatData(e);t.listId=r.listId,o.push(t)}),this.hasMallRecommend=!0,this.setData({mallRecommendList:o},function(){r.getMallRecImprInfo()})}}},e.processMallInfo=function(e){e&&1!==parseInt(e.mallId,10)&&(e.errorCode?this.$dispatch((0,l.showToast)(e.errorMsg)):this.setData({mallInfo:e}))}}; 
 			}); 
		define("package_c/goods/mall_service/mall_service.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../common/index"),i=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../constants/goods"));exports.default=function(r){var t=r;t.dealServicePromise=function(e,r){for(var t=!1,a=r.service_promise||[],s=0;s<a.length;++s)if(1!==a[s].top){t=!0;break}if(e.isLottery){var o=[{desc:"所有商品包邮，并会在开奖后48小时内发货",top:0,top_type:0,type:"全场包邮"},{desc:"未中奖或未达拼单人数，将自动全额原路返还",top:0,top_type:0,type:"不中退款"},{desc:"抽奖活动由中国人民保险公司承保，保障您的信息财产安全",top:0,top_type:0,type:"保险担保"}];this.setData({mallService:{isShowService:t,service:o}})}else{var c=parseInt(e.goodsType,10),n=e.country||"",v=e.warehouse||"";if(e.isHaitao){switch(c){case i.default.GoodsType.IMPORTS:n+="进口";break;case i.default.GoodsType.OVERSEAS_TRANSSHIP:n+="直供";break;case i.default.GoodsType.OVERSEAS_DM:n+="直邮"}""!==v&&(v+="发货")}a.sort(function(e,i){return e.top-i.top}),this.setData({mallService:{isShowService:t,goodsCountry:n,goodsWarehouse:v,service:a}})}this.imprServicePromise()},t.onServiceItemNavigationClicked=function(i){var r=i.currentTarget.dataset||{},t=r.url||"",a=(t=t.split("?")[0]||"").indexOf("/");-1!==a&&(t=t.substr(a+1));var s=e.UrlUtil.urlDraw(r.url);s.page_name=t,s.useApiMobileDomain=!0,e.Util.toWeb(s,this)},t.showServiceDetail=function(){var i=this;this.setData({serviceDetailVisible:!0}),setTimeout(function(){i.setData({serviceMainClass:"service-detail-show"})},0);var r=this.getClickTrackingParams("service_area");r.page_el_sn=84396,(0,e.TrackingRecord)(r,this),(r=this.getImprTrackingParams("service_area")).page_el_sn=84395;for(var t=this.data.mallService.service||[],a="",s=0;s<t.length;++s)1!==t[s].top&&(a+=t[s].id+",");r.service_promise=a,(0,e.TrackingRecord)(r)},t.hideServiceDetail=function(){var i=this;this.setData({serviceMainClass:"service-detail-hidden",serviceFadeOut:!0}),setTimeout(function(){i.setData({serviceDetailVisible:!1,serviceFadeOut:!1})},300);var r=this.getClickTrackingParams("service_area");r.page_el_sn=84395,(0,e.TrackingRecord)(r,this)},t.imprServicePromise=function(){var i=this.data.mallService||{};if(i){var r=this.getImprTrackingParams("service_area");r.page_el_sn=84396;var t=4;i.isHaitao&&(t=3);for(var a=i.service||[],s="",o=0;o<a.length&&o<t;++o)1!==a[o].top&&(s+=a[o].id+",");r.service_promise=s,(0,e.TrackingRecord)(r)}}}; 
 			}); 
		define("package_c/goods/play_rules.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={default:"拼单玩法",freeTrial:"免费试用拼单玩法",capitalGift:""},t=[["支付发起拼单","或参加拼单"],["邀请好友","拼单"],["人数达到","分别发货"],["人数不够","自动退款"]],a=[["0元发起拼单","或参加拼单"],["邀请好友","拼单"],["人数达到","拼成"],["随机抽中","未中赠券"]],i=[["支付订单","发起拼单送礼"],["分享好友","赠送礼物"],["全部领取","拼成发货"],["人数不够","自动退款"]];exports.default={getPlayRules:function(l){var r=e.default,f=t;return l&&(l.isFreeTrial?(r=e.freeTrial,f=a):(l.isCapitalGift||l.isCapitalGiftLottery)&&(r=e.capitalGift,f=i)),{title:r,flow:f}}}; 
 			}); 
		define("package_c/goods/static_goods_data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i={141998198:{sku:[{is_onsale:1,group_price:990,sku_id:2967387729,weight:0,goods_id:141998198,normal_price:1590,price:0,limit_quantity:999,specs:[{spec_key:"套餐",spec_value:"8 包"}],market_price:0,old_group_price:990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/a745d26c2b044426f24d70115ba9790f.jpeg",spec:"88989344",quantity:181125},{is_onsale:1,group_price:2090,sku_id:2967387730,weight:0,goods_id:141998198,normal_price:2590,price:0,limit_quantity:999,specs:[{spec_key:"套餐",spec_value:"18 包"}],market_price:0,old_group_price:2090,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/7160e9fd883e1c33bfede50384e58a26.jpeg",spec:"88989355",quantity:173460},{is_onsale:1,group_price:2790,sku_id:7218741009,weight:0,goods_id:141998198,normal_price:3290,price:0,limit_quantity:999,specs:[{spec_key:"套餐",spec_value:"27包（实惠装）"}],market_price:0,old_group_price:2790,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/0d22fe2081d0c69fd63123188b0f5461.jpeg",spec:"201729105",quantity:180814},{is_onsale:1,group_price:2990,sku_id:119260066789,weight:0,goods_id:141998198,normal_price:3590,price:0,limit_quantity:999,specs:[{spec_key:"套餐",spec_value:"30包整箱装【单包不到1元】"}],market_price:0,old_group_price:2990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-06/a9b4eaf8cef6463b788655398c4bfc7d.jpeg",spec:"1531954334",quantity:152326}],activity_collection:{},price:{line_price:5990,browser_price_style:2,min_on_sale_normal_price:1590,max_on_sale_normal_price:3590,min_group_price:990,max_normal_price:3590,min_on_sale_group_price:990,price_suffix:"起",old_max_group_price:2990,price_style:2,old_max_on_sale_group_price:2990,old_min_on_sale_group_price:990,max_group_price:2990,browser_price_suffix:"起",min_normal_price:1590,max_on_sale_group_price:2990,old_min_group_price:990},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/8831a5f620b80e8b6e40c9703dbfbb71.jpeg",share_desc:"采用天然竹浆为原料,健康不添加有害物质,食品级品质,特别适合妇婴使用,三层加厚,强韧有拉力,湿水不易破,无粉尘,擦拭不产生纸屑,柔软亲肤,使用舒适。",cat_id_1:17285,cat_id:17399,cat_id_2:17297,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:141998198,price:0,buy_limit:50,customer_num:1,id:270298678,is_open:1,end_time:2082729600,order_limit:20,duration:86400,group_id:270298678,start_time:1451577600},{goods_id:141998198,price:0,buy_limit:50,customer_num:2,id:270298679,is_open:1,end_time:2082729600,order_limit:20,duration:86400,group_id:270298679,start_time:1451577600}],goods_id:141998198,goods_desc:"采用天然竹浆为原料,健康不添加有害物质,食品级品质,特别适合妇婴使用,三层加厚,强韧有拉力,湿水不易破,无粉尘,擦拭不产生纸屑,柔软亲肤,使用舒适。",share_title:"9.9元 【30包27包18包8包】丝飘本色竹浆抽纸300张/包餐巾纸面纸 拼多多",warehouse:"",mall_id:66687,cat_id_3:17399,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【30包27包18包8包】丝飘本色竹浆抽纸300张/包餐巾纸面纸",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-11/adde0527b52d23b4e4bafbabfe47e873.jpeg",second_hand:0,goods_property:[{values:["3层"],key:"层数"},{values:["100抽"],key:"单包抽数"},{values:["30包"],key:"包（盒）数"},{values:["180X120mm"],key:"尺寸"},{values:["竹浆"],key:"原料成分"}],market_price:5990,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-11/ad9c630bcdd72eb205bb520100bedfbb.jpeg",gallery:[{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/088bbc9100fce13f8c94e50b31dc8a06.jpeg",height:760,priority:18,width:790,type:2,id:72919424748},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/bc5431abda954dfbcaf7ac597294298e.jpeg",height:761,priority:17,width:790,type:2,id:71517457101},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/1d510e574a9fdc063207f4c7ef3c326c.jpeg",height:760,priority:16,width:790,type:2,id:8210777664},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/e931c9b71a0230df872a777128a52949.jpeg",height:760,priority:15,width:790,type:2,id:8210777663},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/ab0c8bc49adb63f141a4e6797560b184.jpeg",height:761,priority:14,width:790,type:2,id:8210777662},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/54432fb240207e737f0638a5341afa6a.jpeg",height:760,priority:13,width:790,type:2,id:8210777661},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/575f4b35e19d2626107bc74d7ca9f25f.jpeg",height:761,priority:12,width:790,type:2,id:8210777660},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/b69ece9a81a22017ad298fec28da5979.jpeg",height:760,priority:11,width:790,type:2,id:8210777659},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/a3409584e00759523eacd248472e710c.jpeg",height:760,priority:10,width:790,type:2,id:8210777658},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/7959901d662f1d91ba7adf020ecf1829.jpeg",height:761,priority:9,width:790,type:2,id:8210777657},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/7e71d53005aa5e2e841026531797c0f5.jpeg",height:760,priority:8,width:790,type:2,id:8210777656},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/8d0805c714a5909caeeb627e8255f5b9.jpeg",height:790,priority:7,width:790,type:2,id:8210777655},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/3eee60a75cecd22b369d4657c5228d52.jpeg",height:800,priority:6,width:800,type:1,id:8210777654},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/e1c88e5029f45d04dda9c924b40fe266.jpeg",height:800,priority:5,width:800,type:1,id:8210777653},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/b9a09ef2ddefea54bf502727bd1eb5f3.jpeg",height:800,priority:4,width:800,type:1,id:8210777652},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-08-23/463107800bca99a00be06984b8dadaf3.jpeg",height:800,priority:3,width:800,type:1,id:8210777651},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-10-09/5eedc05fa8abc638c0e71e50dca4e6d2.jpeg",height:800,priority:2,width:800,type:1,id:8210777650},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-12-06/ac1bce2839e1d8a0172549388ba4bd64.jpeg",height:800,priority:1,width:800,type:1,id:8210777649},{goods_id:141998198,url:"http://t00img.yangkeduo.com/goods/images/2018-12-11/18547cdf30dfb05faa025c2f28f4ece7.jpeg",height:800,priority:0,width:800,type:1,id:8210777648}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:7930182,event_type:0,app_new:0,country:"",app_client_only:0,quantity:687725},server_time:0},153425403:{sku:[{is_onsale:1,group_price:6590,sku_id:59794258087,weight:9e3,goods_id:153425403,normal_price:6900,price:0,limit_quantity:999,specs:[{spec_key:"型号",spec_value:"蓝中国梦整箱6瓶"}],market_price:0,old_group_price:6590,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/33c5ca3229b3e0f679e3d6175c17736b.jpeg",spec:"1139212592",quantity:429},{is_onsale:1,group_price:6900,sku_id:88252787546,weight:9e3,goods_id:153425403,normal_price:7200,price:0,limit_quantity:999,specs:[{spec_key:"型号",spec_value:"蓝中国梦整箱6瓶3个手提袋"}],market_price:0,old_group_price:6900,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-10-28/ae1d90a0a576ce47cd9d7b800bca519b.jpeg",spec:"1429774794",quantity:351},{is_onsale:1,group_price:8500,sku_id:91193203234,weight:9e3,goods_id:153425403,normal_price:9900,price:0,limit_quantity:999,specs:[{spec_key:"型号",spec_value:"5A中国梦整箱6瓶送3个手提袋"}],market_price:0,old_group_price:8500,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-01/f3c31b0c27dba0a89fa9f8daecfa9f93.jpeg",spec:"1203021699",quantity:232}],activity_collection:{},price:{line_price:2e4,browser_price_style:2,min_on_sale_normal_price:6900,max_on_sale_normal_price:9900,min_group_price:6590,max_normal_price:9900,min_on_sale_group_price:6590,price_suffix:"起",old_max_group_price:8500,price_style:2,old_max_on_sale_group_price:8500,old_min_on_sale_group_price:6590,max_group_price:8500,browser_price_suffix:"起",min_normal_price:6900,max_on_sale_group_price:8500,old_min_group_price:6590},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/661f5951997858b5d1b2a3d67718654e.jpeg",share_desc:"洋河镇中国梦白酒整箱特价原浆酒52度酒水500ml*6瓶高梁纯粮食酒,洋河镇中国梦酒,具有入口柔,香味口感浓而香,回味久久香味而不散,因此洋河镇名酒而闻名于国内外。所以不买会后悔,不喝会让人生少一份遗憾。厂家直接销售机会难得,哪里可以让他再错过人生的一次选择呢?",cat_id_1:6758,cat_id:6760,cat_id_2:6759,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:153425403,price:0,buy_limit:999999,customer_num:1,id:291848276,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:291848276,start_time:1451577600},{goods_id:153425403,price:0,buy_limit:999999,customer_num:2,id:291848277,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:291848277,start_time:1451577600}],goods_id:153425403,goods_desc:"洋河镇中国梦白酒整箱特价原浆酒52度酒水500ml*6瓶高梁纯粮食酒,洋河镇中国梦酒,具有入口柔,香味口感浓而香,回味久久香味而不散,因此洋河镇名酒而闻名于国内外。所以不买会后悔,不喝会让人生少一份遗憾。厂家直接销售机会难得,哪里可以让他再错过人生的一次选择呢?",share_title:"65.9元 洋河镇中国梦白酒整箱特价原浆酒52度酒水500ml*6瓶高梁纯粮食酒 拼多多",warehouse:"",mall_id:692743,cat_id_3:6760,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"洋河镇中国梦白酒整箱特价原浆酒52度酒水500ml*6瓶高梁纯粮食酒",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/bf83af364fd8785d92bc1fcfb1520b74.jpeg",second_hand:0,goods_property:[{values:["浓香型"],key:"香型"},{values:["52%vol."],key:"酒精度数"},{values:["礼盒装"],key:"包装方式"},{values:["2018-04-05"],key:"生产日期"},{values:["9999天"],key:"保质期"}],market_price:2e4,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/0caf2d5aea4f7a8ffd445474179b0711.jpeg",gallery:[{goods_id:153425403,url:"https://video1.pinduoduo.com/i1/20180815/2f953062109a429bb5a8f3068ad027e0.mp4",height:1080,priority:22,width:1080,type:6,id:24758909038},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/ef8d18bdbe36045d216cdb5bc1b9ab6a.jpeg",height:640,priority:21,width:790,type:2,id:9855213661},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/60ea4a67012e2c4b95fa51100fe2363e.jpeg",height:640,priority:20,width:790,type:2,id:4387409567},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/48280f1ee8e4f9db5b1644c11ace733c.jpeg",height:640,priority:19,width:790,type:2,id:4387409566},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/119e570adeb5ce1606cedac7124d7268.jpeg",height:640,priority:18,width:790,type:2,id:4387409565},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/bc8bd71e79312f2da6fc02acd2bdae69.jpeg",height:640,priority:17,width:790,type:2,id:4387409564},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/d4f364bacae587c06ea87f8d11212a4a.jpeg",height:640,priority:16,width:790,type:2,id:4387409563},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/5d56d4f77123f53ad6674d916e810d41.jpeg",height:640,priority:15,width:790,type:2,id:4387409562},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/a4e4b1a177ff6a025f9de9cd97458975.jpeg",height:640,priority:14,width:790,type:2,id:4387409561},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/075ecb70c467c306cef5b5084dfb5562.jpeg",height:640,priority:13,width:790,type:2,id:4387409560},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/06652783ce9fc385cf2ae0524aa828d4.jpeg",height:640,priority:12,width:790,type:2,id:4387409559},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/80562054027814cce69ba69d1226c956.jpeg",height:640,priority:11,width:790,type:2,id:4387409558},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/a59bc42997e0565f631143ee932d1db7.jpeg",height:640,priority:10,width:790,type:2,id:4387409557},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/53bae63b2932e8c4937faff1c7c35dba.jpeg",height:640,priority:9,width:790,type:2,id:4387409556},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/67190490ffedd2befe303d8937f7106e.jpeg",height:640,priority:8,width:790,type:2,id:4387409555},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/d89fd1566e1bdc43866b77e7b11be9b7.jpeg",height:640,priority:7,width:790,type:2,id:4387409554},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/00f65f7d8fe295cc83271dd9646bab27.jpeg",height:800,priority:6,width:800,type:1,id:4387409553},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/590483371dfd5ccf113ede14354f5516.jpeg",height:800,priority:5,width:800,type:1,id:4387409552},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/9704f1668219c7a43f13b995df498d64.png",height:800,priority:4,width:800,type:1,id:4387409551},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/7cb2f0ff33f1eb1c1c1d103c18a1221b.jpeg",height:800,priority:3,width:800,type:1,id:4387409550},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/ba1e147f328f9fa2bfc30afe09f14536.jpeg",height:800,priority:2,width:800,type:1,id:4387409549},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/2f6b15df8abcb8d4a5051ccfe0d8984c.jpeg",height:800,priority:1,width:800,type:1,id:4387409548},{goods_id:153425403,url:"http://t00img.yangkeduo.com/goods/images/2018-10-20/8d02ed17a3d0a23de7006ae15fd57087.jpeg",height:800,priority:0,width:800,type:1,id:4387409547}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"3,16,25,31",options:[9],is_app:0,side_sales_tip:"已拼4.3万件",global_sold_quantity:0,sold_quantity:43123,event_type:0,app_new:0,country:"",app_client_only:0,quantity:1012},server_time:0},567209:{sku:[{is_onsale:1,group_price:2990,sku_id:3924813565,weight:0,goods_id:567209,normal_price:3900,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"超值装796g（5袋）"}],market_price:0,old_group_price:2990,sold_quantity:0,init_quantity:0,thumb_url:"http://t04img.yangkeduo.com/images/2018-03-27/641cef47b2ce75080a75a7e9f31dd7a4.jpeg",spec:"113295971",quantity:17900},{is_onsale:1,group_price:3990,sku_id:3924813566,weight:0,goods_id:567209,normal_price:4900,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"经济装480g（4袋纯坚果）"}],market_price:0,old_group_price:3990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/c0b2ccd2-6068-48eb-8dfe-6fb7f4e86e81.jpeg",spec:"113296178",quantity:66688},{is_onsale:1,group_price:4990,sku_id:20849259551,weight:0,goods_id:567209,normal_price:5990,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"家庭装700g（6袋纯坚果）"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/3e206e9c-f2eb-4767-92da-9329bf6a1ea7.jpeg",spec:"547299763",quantity:6006},{is_onsale:1,group_price:5990,sku_id:20849259552,weight:0,goods_id:567209,normal_price:6990,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"实惠装720g（6袋纯坚果）"}],market_price:0,old_group_price:5990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/82c39bf8-07e5-4376-964f-ff7dd27cca1b.jpeg",spec:"547361740",quantity:3944},{is_onsale:1,group_price:1990,sku_id:20849259553,weight:0,goods_id:567209,normal_price:2990,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"美味装558g（4袋）"}],market_price:0,old_group_price:1990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/598f4885ea288e6e61f5bcac888900cf.jpeg",spec:"157746188",quantity:6513}],activity_collection:{},price:{line_price:8990,browser_price_style:2,min_on_sale_normal_price:2990,max_on_sale_normal_price:6990,min_group_price:1990,max_normal_price:6990,min_on_sale_group_price:1990,price_suffix:"起",old_max_group_price:5990,price_style:2,old_max_on_sale_group_price:5990,old_min_on_sale_group_price:1990,max_group_price:5990,browser_price_suffix:"起",min_normal_price:2990,max_on_sale_group_price:5990,old_min_group_price:1990},goods:{image_url:"http://t10img.yangkeduo.com/images/2018-03-27/5a447c42e411bf9ce5b858c7367750c5.jpeg",share_desc:"【狂销54万套】一份组合,多种口味搭配,美味相识搭配好滋味,美味装4袋(558g)夏威夷果108g,蟹黄豆瓣120g,多味花生218g,蟹黄瓜子仁120g;超值装5袋(796g)夏威夷果120g,碧根果120g,多味花生218g,兰花豆218g,蟹黄瓜子仁120g;经济装4袋(480g):开心果120g,巴旦木120g,夏威夷果120g,碧根果120g;家庭装6袋(700g):夏威夷果120g,巴旦木120g,碧根果120g,腰果120g,纸皮核桃120g,板栗仁100g;实惠装6袋(720g):夏威夷果120g,巴旦木120g,碧根果120g,开心果120g,炭烧腰果120g,东北松子120g。甄选全球品质原料,手工精选,筛选品质材料。营养均衡,老少皆宜,口碑好货。",cat_id_1:6398,cat_id:6403,cat_id_2:6399,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:567209,price:0,buy_limit:999,customer_num:1,id:1141098,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:1141098,start_time:1451577600},{goods_id:567209,price:0,buy_limit:999,customer_num:2,id:1141099,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:1141099,start_time:1451577600}],goods_id:567209,goods_desc:"【狂销54万套】一份组合,多种口味搭配,美味相识搭配好滋味,美味装4袋(558g)夏威夷果108g,蟹黄豆瓣120g,多味花生218g,蟹黄瓜子仁120g;超值装5袋(796g)夏威夷果120g,碧根果120g,多味花生218g,兰花豆218g,蟹黄瓜子仁120g;经济装4袋(480g):开心果120g,巴旦木120g,夏威夷果120g,碧根果120g;家庭装6袋(700g):夏威夷果120g,巴旦木120g,碧根果120g,腰果120g,纸皮核桃120g,板栗仁100g;实惠装6袋(720g):夏威夷果120g,巴旦木120g,碧根果120g,开心果120g,炭烧腰果120g,东北松子120g。甄选全球品质原料,手工精选,筛选品质材料。营养均衡,老少皆宜,口碑好货。",share_title:"19.9元 憨豆熊坚果夏威夷果碧根开心果零食大礼包炒货组合480g796g等规格 拼多多",warehouse:"",mall_id:6888,cat_id_3:6403,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"憨豆熊坚果夏威夷果碧根开心果零食大礼包炒货组合480g796g等规格",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-13/331e406691fa8f960ef99eca2b94c3e4.jpeg",second_hand:0,goods_property:[{values:["480g"],key:"净含量"},{values:["袋装"],key:"包装方式"},{values:["2018-10-13"],key:"生产日期"},{values:["360天"],key:"保质期"},{values:["SC11434020305136"],key:"食品生产许可证编号"}],market_price:8990,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-13/ebed000fa2876f7e2408bfb43fec69a5.jpeg",gallery:[{goods_id:567209,url:"http://t00img.yangkeduo.com/t10img/images/2018-05-28/34bcac28cbceecc5991ba73805cb7768.jpeg",height:1026,priority:17,width:790,type:2,id:86196034810},{goods_id:567209,url:"http://t00img.yangkeduo.com/t09img/images/2018-05-28/c24feb97055a145f0aff0f9ecd54bb86.jpeg",height:586,priority:16,width:790,type:2,id:16217632413},{goods_id:567209,url:"http://t00img.yangkeduo.com/t04img/images/2018-05-28/130dbeb1f57c89caf83bfda5a7e3a576.jpeg",height:895,priority:15,width:790,type:2,id:16217632412},{goods_id:567209,url:"http://t00img.yangkeduo.com/t03img/images/2018-05-28/c91392f51b948c7ce819829a5ba3f0b1.jpeg",height:444,priority:14,width:790,type:2,id:16217632411},{goods_id:567209,url:"http://t00img.yangkeduo.com/t09img/images/2018-05-28/bb80f0acfd3d9e914146b10565bf11bd.jpeg",height:440,priority:13,width:790,type:2,id:16217632410},{goods_id:567209,url:"http://t00img.yangkeduo.com/t03img/images/2018-05-28/0bb9043c308011a0d1bf5a32eae6333a.jpeg",height:434,priority:12,width:790,type:2,id:8245156165},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/130b1a5a-2081-4071-a99c-546fdfc2bf2f.jpeg",height:434,priority:11,width:790,type:2,id:8245156164},{goods_id:567209,url:"http://t00img.yangkeduo.com/t10img/images/2018-05-28/cc177f9feefa5737cc76aea743e17ebc.jpeg",height:641,priority:10,width:790,type:2,id:8245156163},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/fd7ad735-a429-40d3-83fe-ab356882c769.jpeg",height:567,priority:9,width:790,type:2,id:8245156162},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/2bd79142-183f-42a5-b0d6-107e92323b9d.jpeg",height:451,priority:8,width:790,type:2,id:8245156161},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/04d98599-0f5e-46cb-9f68-46521ecf0bd1.jpeg",height:567,priority:7,width:790,type:2,id:8245156160},{goods_id:567209,url:"http://t00img.yangkeduo.com/t07img/images/2018-05-28/ff2adec6b9a1380cb5bdf03ab60a6e89.jpeg",height:508,priority:6,width:790,type:2,id:8245156159},{goods_id:567209,url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/0a4affce52a808c55f4982d25c35be2f.jpeg",height:464,priority:5,width:790,type:2,id:8245156158},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-11/050b1e42-d0a9-476c-a7af-bd52a12ae8c4.jpg",height:1022,priority:4,width:790,type:2,id:8245156157},{goods_id:567209,url:"http://omsproductionimg.yangkeduo.com/images/2017-11-19/a071fc61d3024ea0839dc6fb44670e65.jpeg",height:500,priority:3,width:500,type:1,id:8245156156},{goods_id:567209,url:"http://omsproductionimg.yangkeduo.com/images/2017-11-19/35dfc817d75cac6415659ca369c9627f.jpeg",height:500,priority:2,width:500,type:1,id:8245156155},{goods_id:567209,url:"http://t05img.yangkeduo.com/images/2018-03-27/79d8a41db7faeb1a2064c3cb968f8f22.jpeg",height:800,priority:1,width:800,type:1,id:8245156154},{goods_id:567209,url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/53aad8ad-7967-4358-8f8e-c92d523171c1.jpeg",height:800,priority:0,width:800,type:1,id:8245156153}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:643887,event_type:0,app_new:0,country:"",app_client_only:0,quantity:101051},server_time:0},154874523:{sku:[{is_onsale:1,group_price:7900,sku_id:103802176378,weight:1e3,goods_id:154874523,normal_price:9e3,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"1000g（去虾线）"}],market_price:0,old_group_price:7900,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-17/59cd0c55a18feed36e2bbe3933f97f14.jpeg",spec:"1489438620",quantity:96627},{is_onsale:1,group_price:15600,sku_id:103989952918,weight:1e3,goods_id:154874523,normal_price:18800,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"2000g（去虾线）"}],market_price:0,old_group_price:15600,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-17/d20812db314b80c85b67b6625e3fd06f.jpeg",spec:"1489930316",quantity:14467}],activity_collection:{},price:{line_price:21600,browser_price_style:2,min_on_sale_normal_price:9e3,max_on_sale_normal_price:18800,min_group_price:7900,max_normal_price:18800,min_on_sale_group_price:7900,price_suffix:"起",old_max_group_price:15600,price_style:2,old_max_on_sale_group_price:15600,old_min_on_sale_group_price:7900,max_group_price:15600,browser_price_suffix:"起",min_normal_price:9e3,max_on_sale_group_price:15600,old_min_group_price:7900},goods:{image_url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/d21ddc58cba199fa4afc7defa072ab3f.jpeg",share_desc:"【现剥开背虾仁】【现剥开背虾仁】,鲜冻虾仁,外层不裹冰,为保证虾仁新鲜,新鲜虾仁多少有点水分保鲜,含水量5-10%, 1)生鲜产品只发顺丰,顺丰不到的地方请先联系客服再下单2)收到有任何问题请及时联系我们",cat_id_1:8172,cat_id:8350,cat_id_2:8176,cat_id_4:8350,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:154874523,price:0,buy_limit:999999,customer_num:1,id:289896324,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:289896324,start_time:1451577600},{goods_id:154874523,price:0,buy_limit:999999,customer_num:2,id:289896325,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:289896325,start_time:1451577600}],goods_id:154874523,goods_desc:"【现剥开背虾仁】【现剥开背虾仁】,鲜冻虾仁,外层不裹冰,为保证虾仁新鲜,新鲜虾仁多少有点水分保鲜,含水量5-10%, 1)生鲜产品只发顺丰,顺丰不到的地方请先联系客服再下单2)收到有任何问题请及时联系我们",share_title:"79元 顺丰包邮 不挂冰新鲜虾仁净重1000g大号 冷冻现剥开背虾仁 青虾仁 拼多多",warehouse:"",mall_id:781536,cat_id_3:8195,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"顺丰包邮 不挂冰新鲜虾仁净重1000g大号 冷冻现剥开背虾仁 青虾仁",hd_thumb_url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/97dbebf38f6cddac5d66cbbac5ec49a2.jpeg",second_hand:0,goods_property:[{values:["山东省/青岛市"],key:"产地"},{values:["1000g"],key:"净含量"},{values:["袋装"],key:"包装方式"}],market_price:21600,is_mall_dsr:1,thumb_url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/ef3ed953dde6cbf11b964201cee149e9.jpeg",gallery:[{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/f7179b48d6cba8c999da582d502ff290.jpeg",height:728,priority:20,width:750,type:2,id:8000579642},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/cdf0595c77df1b9c5cd95a763e093bf2.jpeg",height:741,priority:19,width:750,type:2,id:8000579641},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/8d2b96c737ca4f441351f485e5cbde68.jpeg",height:564,priority:18,width:750,type:2,id:8000579640},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/66c56be7a32ab4f01cb1731cd3bbd1b6.jpeg",height:543,priority:17,width:750,type:2,id:8000579639},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/fd701cc2e7ba72eb53522f8dacfc8abb.jpeg",height:590,priority:16,width:750,type:2,id:8000579638},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/52b7efabaab1600925bd5d49826a39a5.jpeg",height:352,priority:15,width:750,type:2,id:8000579637},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/d9eb0ce273edee25d2dc7761e49b134f.jpeg",height:657,priority:14,width:750,type:2,id:8000579636},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/6db207587dcfa015b2cb129946f780c7.jpeg",height:769,priority:13,width:750,type:2,id:8000579635},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/81221ad73ac83ce303677546ca474d9e.jpeg",height:660,priority:12,width:750,type:2,id:8000579634},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/ef18da8ef2dcbe2947578502d9c1bfea.jpeg",height:731,priority:11,width:750,type:2,id:8000579633},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/a00849c717c3f4cc53a28c8319f60d7c.jpeg",height:633,priority:10,width:750,type:2,id:8000579632},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/9b2cb126bcee3a171b802b3d386d70e9.jpeg",height:669,priority:9,width:750,type:2,id:8000579631},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/871ae601de7a301739fa652cbd1de26d.jpeg",height:631,priority:8,width:750,type:2,id:8000579630},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/ce34b45bd73bbfb2f7e0cbe22511d20a.jpeg",height:845,priority:7,width:750,type:2,id:8000579629},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/cd73394d919e11ad0a069c122f533d9c.jpeg",height:565,priority:6,width:750,type:2,id:8000579628},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/e3324d26f8336ea824619a91d4d6d112.jpeg",height:568,priority:5,width:750,type:2,id:8000579627},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/daeb5461f82691ad6121fc1f31456a26.jpeg",height:406,priority:4,width:750,type:2,id:8000579626},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/f8515363459be9badcbc6e8adae31edd.jpeg",height:800,priority:3,width:800,type:1,id:8000579625},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/f3bcdbaf6a4fbeb4e190d592474bddb6.jpeg",height:800,priority:2,width:800,type:1,id:8000579624},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/4077a2f8031c39ca6723cc0a419cc0ec.jpeg",height:800,priority:1,width:800,type:1,id:8000579623},{goods_id:154874523,url:"http://omsproductionimg.yangkeduo.com/images/2017-10-29/b498032e59ced08d0e59d6c5daeee284.jpeg",height:800,priority:0,width:800,type:1,id:8000579622}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,30,31,32",options:[0,9,13],is_app:0,side_sales_tip:"已拼3.5万件",global_sold_quantity:0,sold_quantity:35697,event_type:0,app_new:0,country:"",app_client_only:0,quantity:111094},server_time:0},5227129129:{sku:[{is_onsale:1,group_price:2270,sku_id:133136375782,weight:0,goods_id:5227129129,normal_price:3280,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"6桶装（一箱）"}],market_price:0,old_group_price:2450,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/b16dae32-e6c2-4fbc-8637-d456836e3087.jpg",spec:"1594059402",quantity:101494}],activity_collection:{activity:{activity_id:7335491,total_quantity:0x8000000000000000,activity_start_time:1548345600,activity_end_time:1550073599,remain_quantity:0x8000000000000000,detail_id:13818406,sold_quantity:0,activity_type:101}},price:{line_price:5200,browser_price_style:0,min_on_sale_normal_price:3280,max_on_sale_normal_price:3280,min_group_price:2270,max_normal_price:3280,min_on_sale_group_price:2270,old_max_group_price:2450,price_style:0,old_max_on_sale_group_price:2450,old_min_on_sale_group_price:2450,max_group_price:2270,min_normal_price:3280,max_on_sale_group_price:2270,old_min_group_price:2450},goods:{image_url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/d3f30ce7-a35c-4b5e-a003-9d9b2f116c22.jpg",share_desc:"温馨提示:现在的都是新包装哦!新包装是不带清真字样的,产品是清真的,请吃清真的朋友们放心购买。产品执行标准号:GB/T23783。食品生产许可证编号:SC12341022400313..嗨吃家超值六桶装,酸爽十足,现活动领劵后价格22.5元6桶亏本冲销量,从未有过的价格,身边的朋友都说好吃,6包料,菜包,料包分开包装,依据个人口味酌量添加,数量有限,买到就是赚到,食用方法:1:将粉饼和调料放入碗中,料包依据个人口味酌量添加放入碗中,2:冲入沸水加盖放置4-10分钟搅,3:拌后即可食用。",cat_id_1:6630,cat_id:6690,cat_id_2:6689,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:5227129129,price:3280,buy_limit:9999,customer_num:1,id:8581010686,is_open:1,end_time:2082729600,order_limit:2,duration:86400,group_id:8581010686,start_time:1451577600},{goods_id:5227129129,price:2450,buy_limit:9999,customer_num:2,id:8581010687,is_open:1,end_time:2082729600,order_limit:2,duration:86400,group_id:8581010687,start_time:1451577600}],goods_id:5227129129,goods_desc:"温馨提示:现在的都是新包装哦!新包装是不带清真字样的,产品是清真的,请吃清真的朋友们放心购买。产品执行标准号:GB/T23783。食品生产许可证编号:SC12341022400313..嗨吃家超值六桶装,酸爽十足,现活动领劵后价格22.5元6桶亏本冲销量,从未有过的价格,身边的朋友都说好吃,6包料,菜包,料包分开包装,依据个人口味酌量添加,数量有限,买到就是赚到,食用方法:1:将粉饼和调料放入碗中,料包依据个人口味酌量添加放入碗中,2:冲入沸水加盖放置4-10分钟搅,3:拌后即可食用。",share_title:"22.7元 嗨吃家酸辣粉6桶装整箱正品 重庆正宗方便速食网红海吃家红薯粉丝 拼多多",warehouse:"",mall_id:527643837,cat_id_3:6690,is_sku_onsale:1,goods_property_type:0,has_promotion:1,goods_name:"嗨吃家酸辣粉6桶装整箱正品 重庆正宗方便速食网红海吃家红薯粉丝",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-16/7e6f33cc335fecbea1427369d4af196c.jpeg",second_hand:0,goods_property:[{values:["河南省/洛阳市"],key:"产地"},{values:["138g"],key:"单规格质量"},{values:["6桶"],key:"规格"},{values:["普通盒装"],key:"包装方式"},{values:["酸辣粉"],key:"食品种类"},{values:["2018-12-25"],key:"生产日期"},{values:["300天"],key:"保质期"},{values:["SC12341022400313"],key:"食品生产许可证编号"},{values:["GB/T23783"],key:"产品标准号"}],market_price:5200,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-16/2d3cc2d9a970fb7156b977949dc63a36.jpeg",gallery:[{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/ccd67b40-b609-4258-94a6-aa297ac6b262.jpg",height:806,priority:18,width:750,type:2,id:89171916623},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/5001afe6-cfeb-42a5-9df7-321a9e3234d7.jpg",height:839,priority:17,width:750,type:2,id:80071080906},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/1719e192-c66f-4db8-a1d7-7b4a4fe96aa6.jpg",height:879,priority:16,width:750,type:2,id:80067796824},{goods_id:5227129129,url:"http://t00img.yangkeduo.com/goods/images/2018-12-25/564002dd4da5f25df95d47f570401c46.jpeg",height:1070,priority:15,width:790,type:2,id:80067796823},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/5b1c784b-07ed-4b59-943f-310410509dfe.jpg",height:675,priority:14,width:750,type:2,id:80067796822},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/b711b790-7faa-4bb4-af90-c4045f83de72.jpg",height:1026,priority:13,width:750,type:2,id:79570596410},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/39f4da58-f2d6-497d-be2c-de47edf1a1a5.jpg",height:1076,priority:12,width:750,type:2,id:79570596409},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/ccb36e9b-96a5-48f6-8d58-9caaca959a7e.jpg",height:800,priority:11,width:584,type:2,id:79570596408},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/e679c610-8dcb-46b4-b160-d23080781708.jpg",height:506,priority:10,width:750,type:2,id:79570596407},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/60724fa6-b83a-4a80-a280-2a2ae7d868fe.jpg",height:757,priority:9,width:750,type:2,id:79570596406},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/d8f97ad7-01c4-432f-9e0b-35a8c5ed0d66.jpg",height:540,priority:8,width:750,type:2,id:79570596405},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/518a7030-4250-465e-b647-a6ed0c728de7.jpg",height:1086,priority:7,width:750,type:2,id:79570596404},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-24/d55c8def-34b7-4592-9fea-282109daee4d.jpg",height:702,priority:6,width:750,type:2,id:79570596403},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/ec4f2205-2a1f-4173-90b9-30e0aa4e1adb.jpg",height:800,priority:5,width:800,type:1,id:79570596402},{goods_id:5227129129,url:"http://t00img.yangkeduo.com/goods/images/2018-12-25/27bd398b34dafdd40046f69c26d56750.jpeg",height:800,priority:4,width:800,type:1,id:79570596401},{goods_id:5227129129,url:"http://t00img.yangkeduo.com/goods/images/2018-12-25/c34d1cdc26082f668cce8c112977e7c6.jpeg",height:800,priority:3,width:800,type:1,id:79570596400},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/b8f107bd-74b2-4c36-9ecb-481091f13cac.jpg",height:800,priority:2,width:800,type:1,id:79570596399},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/3a5c84b4-cf97-453e-8eda-5b247ad0b735.jpg",height:800,priority:1,width:800,type:1,id:79570596398},{goods_id:5227129129,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/14128ddc-c9cb-4b00-9015-bd0c735b5a3c.jpg",height:800,priority:0,width:800,type:1,id:79570596397}],is_onsale:1,open_in_festival:1,has_activity:1,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32",options:[0,2,7,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:179726,event_type:0,app_new:0,country:"",app_client_only:0,quantity:101494},server_time:0},48367210:{sku:[{is_onsale:1,group_price:2090,sku_id:1276848504,weight:0,goods_id:48367210,normal_price:2590,price:0,limit_quantity:999999,specs:[{spec_key:"容量",spec_value:"18包"}],market_price:0,old_group_price:2090,sold_quantity:0,init_quantity:0,thumb_url:"http://t11img.yangkeduo.com/images/2018-03-11/df74258d347119548484fe4414b5f719.jpeg",spec:"3848906",quantity:214948},{is_onsale:1,group_price:990,sku_id:6550067535,weight:0,goods_id:48367210,normal_price:1490,price:0,limit_quantity:999999,specs:[{spec_key:"容量",spec_value:"8包"}],market_price:0,old_group_price:990,sold_quantity:0,init_quantity:0,thumb_url:"http://t10img.yangkeduo.com/images/2018-03-11/2f036e8e592d8c6cb6ba073f0075bdc9.jpeg",spec:"2800642",quantity:163030},{is_onsale:1,group_price:2790,sku_id:6811528885,weight:0,goods_id:48367210,normal_price:3290,price:0,limit_quantity:999999,specs:[{spec_key:"容量",spec_value:"27包"}],market_price:0,old_group_price:2790,sold_quantity:0,init_quantity:0,thumb_url:"http://t03img.yangkeduo.com/images/2018-03-11/a314843f04c15d3cfc579b9dc0002935.jpeg",spec:"4610210",quantity:231526},{is_onsale:1,group_price:2990,sku_id:121336530538,weight:0,goods_id:48367210,normal_price:3590,price:0,limit_quantity:999999,specs:[{spec_key:"容量",spec_value:"30包（每包不足一元）"}],market_price:0,old_group_price:2990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/4212ff1cc0969fa555bd59d572c964c4.jpeg",spec:"1543272247",quantity:122585},{is_onsale:1,group_price:2990,sku_id:136474203505,weight:0,goods_id:48367210,normal_price:3590,price:0,limit_quantity:999999,specs:[{spec_key:"容量",spec_value:"24包（加量升级版）"}],market_price:0,old_group_price:2990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2018-12-30/e9f53dc3-48d5-445e-b779-c5dfde98b08f.jpg",spec:"1608829089",quantity:232683}],activity_collection:{},price:{line_price:6690,browser_price_style:2,min_on_sale_normal_price:1490,max_on_sale_normal_price:3590,min_group_price:990,max_normal_price:3590,min_on_sale_group_price:990,price_suffix:"起",old_max_group_price:2990,price_style:2,old_max_on_sale_group_price:2990,old_min_on_sale_group_price:990,max_group_price:2990,browser_price_suffix:"起",min_normal_price:1490,max_on_sale_group_price:2990,old_min_group_price:990},goods:{image_url:"http://t10img.yangkeduo.com/images/2018-03-11/81675d6ce75437c9a490d5f233df4141.jpeg",share_desc:"【30包  300张/每包  每包不足1元 强烈推荐购买】选用天然竹浆精制而成,不添加任何有害物质,不漂白、真正做到环保、健康,强韧不易破、吸水性强、无粉尘、柔软亲肤、卫生健康、可以用于食品包裹、特别适合妇婴使用。",cat_id_1:17285,cat_id:17399,cat_id_2:17297,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:48367210,price:0,buy_limit:20,customer_num:1,id:96737682,is_open:1,end_time:2082729600,order_limit:20,duration:86400,group_id:96737682,start_time:1451577600},{goods_id:48367210,price:0,buy_limit:20,customer_num:2,id:96737683,is_open:1,end_time:2082729600,order_limit:20,duration:86400,group_id:96737683,start_time:1451577600}],goods_id:48367210,goods_desc:"【30包  300张/每包  每包不足1元 强烈推荐购买】选用天然竹浆精制而成,不添加任何有害物质,不漂白、真正做到环保、健康,强韧不易破、吸水性强、无粉尘、柔软亲肤、卫生健康、可以用于食品包裹、特别适合妇婴使用。",share_title:"9.9元 【天然竹浆本色品质纸巾】丝飘抽纸餐巾纸面纸妇婴适用卫生纸批发 拼多多",warehouse:"",mall_id:44259,cat_id_3:17399,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【天然竹浆本色品质纸巾】丝飘抽纸餐巾纸面纸妇婴适用卫生纸批发",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-04/e35da28d3d4159e15b7f6d9660910b05.jpeg",second_hand:0,goods_property:[{values:["丝飘"],key:"品牌"},{values:["3层"],key:"层数"},{values:["100抽"],key:"单包抽数"},{values:["30包"],key:"包（盒）数"},{values:["120X180mm"],key:"尺寸"},{values:["竹浆"],key:"原料成分"}],market_price:6690,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-09/08763a6879223ad273950f809dac6473.jpeg",gallery:[{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/f722aa1838f6f92e6726dc0ae913ee58.jpeg",height:717,priority:21,width:790,type:2,id:81511213566},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/48de1898e725966d3db2dd5bb95e6f6b.jpeg",height:717,priority:20,width:790,type:2,id:75314674124},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/8609c07a00d09b20b6c56d15796d48a2.jpeg",height:717,priority:19,width:790,type:2,id:72920429469},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/1b6675b6c954c0959e4ede02f8b786ca.jpeg",height:717,priority:18,width:790,type:2,id:72785957315},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/f1d6772b6054f115a8669836226dd0bb.jpeg",height:717,priority:17,width:790,type:2,id:8640485756},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/955201c46cf2b728e5e532e846ad44fa.jpeg",height:716,priority:16,width:790,type:2,id:7229424803},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/666f923efa5022e7d486cb300c3a5969.jpeg",height:717,priority:15,width:790,type:2,id:7229424802},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/f35e48bf5a60c764389ee6693e9cb740.jpeg",height:717,priority:14,width:790,type:2,id:7229424801},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/be6bc27e170fb719c2cea52773b03812.jpeg",height:717,priority:13,width:790,type:2,id:7229424800},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/570a23ddb138beaee64cc7e5d4fb2b56.jpeg",height:717,priority:12,width:790,type:2,id:7229424799},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/739597785708628ca8bcb40e8393cf2d.jpeg",height:717,priority:11,width:790,type:2,id:7229424798},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/e74988de5cf99be03173773ba4060f45.jpeg",height:717,priority:10,width:790,type:2,id:7229424797},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-10/4767e5ef955f02b962c521a1ccec13b5.jpeg",height:790,priority:9,width:790,type:2,id:7229424796},{goods_id:48367210,url:"http://t07img.yangkeduo.com/images/2018-03-11/3125f2cfd146bc1e6104046abc072c40.jpeg",height:800,priority:8,width:800,type:1,id:7229424795},{goods_id:48367210,url:"http://t09img.yangkeduo.com/images/2018-03-11/f29c34f79b758cea7e29215a6e50e188.jpeg",height:800,priority:7,width:800,type:1,id:7229424794},{goods_id:48367210,url:"http://t11img.yangkeduo.com/images/2018-03-11/e6eab4df1574a90a8d710bee2ae2f372.jpeg",height:800,priority:6,width:800,type:1,id:7229424793},{goods_id:48367210,url:"http://t01img.yangkeduo.com/images/2018-03-11/56ab14920509f63657d8067978d5b6c2.jpeg",height:800,priority:5,width:800,type:1,id:7229424792},{goods_id:48367210,url:"http://t09img.yangkeduo.com/images/2018-03-11/4d4d26922cdb99e9a9837231f2fc8983.jpeg",height:800,priority:4,width:800,type:1,id:7229424791},{goods_id:48367210,url:"http://t00img.yangkeduo.com/t09img/images/2018-05-27/ee014c4ba052d094c097adc80b9325d7.jpeg",height:800,priority:3,width:800,type:1,id:7229424790},{goods_id:48367210,url:"https://t00img.yangkeduo.com/goods/images/2018-12-30/3879a1ee-8106-4d4c-9416-1150550bca53.jpg",height:800,priority:2,width:800,type:1,id:7229424789},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2018-12-16/734ddda6bf1038516a6855a6d1955eff.jpeg",height:800,priority:1,width:800,type:1,id:7229424788},{goods_id:48367210,url:"http://t00img.yangkeduo.com/goods/images/2019-01-02/17b70391f317ac3a9193d4cb99613a06.jpeg",height:800,priority:0,width:800,type:1,id:7229424787}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:1707547,event_type:0,app_new:0,country:"",app_client_only:0,quantity:964772},server_time:0},2617599603:{sku:[{is_onsale:1,group_price:24500,sku_id:54534410558,weight:8e3,goods_id:2617599603,normal_price:25300,price:0,limit_quantity:999,specs:[{spec_key:"组合",spec_value:"500ml*6瓶【送手提袋】"}],market_price:0,old_group_price:24500,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-15/1d3f34f73dd262fe5da1f6b0a9a9dd5c.jpeg",spec:"595122451",quantity:1284}],activity_collection:{},price:{line_price:298800,browser_price_style:0,min_on_sale_normal_price:25300,max_on_sale_normal_price:25300,min_group_price:24500,max_normal_price:25300,min_on_sale_group_price:24500,old_max_group_price:24500,price_style:0,old_max_on_sale_group_price:24500,old_min_on_sale_group_price:24500,max_group_price:24500,min_normal_price:25300,max_on_sale_group_price:24500,old_min_group_price:24500},goods:{image_url:"http://t00img.yangkeduo.com/openapi/images/2018-08-15/890b093764acca5704d7a3526f24118c.jpeg",share_desc:"厂名:宜宾五粮液股份有限公司;厂址|四川省宜宾市岷江西路150号;配料表|水|高粱|大米|小麦|玉米|糯米;品牌|五粮液;品名|壹玖壹捌精酿套装;年份|1年(含)-3年(含);是否为有机食品|否;产地|中国大陆地区;省份|四川;香型|浓香型;适用场景|礼节拜访区;包装方式|礼盒装;净含量|500ml;度数|52%Vol",cat_id_1:6758,cat_id:6760,cat_id_2:6759,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:2617599603,price:25300,buy_limit:999,customer_num:1,id:3921728138,is_open:1,end_time:2082729600,order_limit:99,duration:86400,group_id:3921728138,start_time:1451577600},{goods_id:2617599603,price:24500,buy_limit:999,customer_num:2,id:3921728139,is_open:1,end_time:2082729600,order_limit:99,duration:86400,group_id:3921728139,start_time:1451577600}],goods_id:2617599603,goods_desc:"厂名:宜宾五粮液股份有限公司;厂址|四川省宜宾市岷江西路150号;配料表|水|高粱|大米|小麦|玉米|糯米;品牌|五粮液;品名|壹玖壹捌精酿套装;年份|1年(含)-3年(含);是否为有机食品|否;产地|中国大陆地区;省份|四川;香型|浓香型;适用场景|礼节拜访区;包装方式|礼盒装;净含量|500ml;度数|52%Vol",share_title:"245元 【六瓶整箱】五粮液总厂生产1918精酿52度500ml*6瓶浓香型白酒 拼多多",warehouse:"",mall_id:102673911,cat_id_3:6760,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【六瓶整箱】五粮液总厂生产1918精酿52度500ml*6瓶浓香型白酒",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-15/128096efa7493a0cd130e74e260b1ae4.jpeg",second_hand:0,goods_property:[{values:["五粮液"],key:"品牌"},{values:["四川省"],key:"省份"},{values:["浓香型"],key:"香型"},{values:["52%vol."],key:"酒精度数"},{values:["500mL"],key:"单规格净含量"},{values:["2018-03-01"],key:"生产日期"},{values:["99999天"],key:"保质期"}],market_price:298800,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-08-15/cbedb73ff4b71321eba53ff73370d370.jpeg",gallery:[{goods_id:2617599603,url:"http://t01img.yangkeduo.com/images/2018-02-24/4e5f2a28ac3f777d3f9a00e0c8e4e588.jpeg",height:1259,priority:11,width:800,type:2,id:35003709795},{goods_id:2617599603,url:"http://t01img.yangkeduo.com/images/2018-02-24/33b30e256d39a7ea2a3317d8980a805e.jpeg",height:1259,priority:10,width:800,type:2,id:35003709794},{goods_id:2617599603,url:"http://t08img.yangkeduo.com/images/2018-02-24/08fc9fbf6905666d49cce4a26a1462f6.jpeg",height:1259,priority:9,width:800,type:2,id:35003709793},{goods_id:2617599603,url:"http://t02img.yangkeduo.com/images/2018-02-24/31d8f9e7a4e770d7cd82fd54bf148889.jpeg",height:1259,priority:8,width:800,type:2,id:35003709792},{goods_id:2617599603,url:"http://t02img.yangkeduo.com/images/2018-02-24/3ac1bdee1dea5a668de506dd3d4798a1.jpeg",height:1259,priority:7,width:800,type:2,id:35003709791},{goods_id:2617599603,url:"http://t07img.yangkeduo.com/images/2018-02-24/e9361664d3880d7aabed54445720a398.jpeg",height:800,priority:6,width:800,type:1,id:35003709790},{goods_id:2617599603,url:"http://t05img.yangkeduo.com/images/2018-02-25/14a2a625e66337bf8e2e8f2ac23bb61c.jpeg",height:800,priority:5,width:800,type:1,id:35003709789},{goods_id:2617599603,url:"http://t09img.yangkeduo.com/images/2018-02-24/19a687eba794b3e297c25f7b0f18471c.jpeg",height:800,priority:4,width:800,type:1,id:35003709788},{goods_id:2617599603,url:"http://t01img.yangkeduo.com/images/2018-02-24/cc5578689afbb12a13041dc19ccd2646.jpeg",height:800,priority:3,width:800,type:1,id:35003709787},{goods_id:2617599603,url:"http://t03img.yangkeduo.com/images/2018-02-24/dd57b0117b1a514fd4cfae0da81fca40.jpeg",height:800,priority:2,width:800,type:1,id:35003709786},{goods_id:2617599603,url:"http://t08img.yangkeduo.com/images/2018-02-24/06d50d4f70f767fdcadc4a8b10494b78.jpeg",height:800,priority:1,width:800,type:1,id:35003709785},{goods_id:2617599603,url:"http://t00img.yangkeduo.com/goods/images/2018-08-15/70eeafa72cb32fb1b1c903b967674353.jpeg",height:800,priority:0,width:800,type:1,id:35003709784}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼1.8万件",global_sold_quantity:0,sold_quantity:18571,event_type:0,app_new:0,country:"",app_client_only:0,quantity:1284},server_time:0},4224981678:{sku:[{is_onsale:1,group_price:3690,sku_id:103269501728,weight:0,goods_id:4224981678,normal_price:3890,price:0,limit_quantity:999999,specs:[],market_price:0,old_group_price:3690,sold_quantity:0,init_quantity:0,thumb_url:"",spec:"",quantity:258617}],activity_collection:{activity:{activity_id:6922206,total_quantity:0x8000000000000000,activity_start_time:1548345600,activity_end_time:1550073599,remain_quantity:0x8000000000000000,detail_id:13035381,sold_quantity:0,activity_type:101}},price:{line_price:6800,browser_price_style:0,min_on_sale_normal_price:3890,max_on_sale_normal_price:3890,min_group_price:3690,max_normal_price:3890,min_on_sale_group_price:3690,old_max_group_price:3690,price_style:0,old_max_on_sale_group_price:3690,old_min_on_sale_group_price:3690,max_group_price:3690,min_normal_price:3890,max_on_sale_group_price:3690,old_min_group_price:3690},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2019-01-09/2bf03740d240f00b326b030792895b43.jpeg",share_desc:"【买二送一】三盒一周期   强效冲刺3到15厘米_________\n【使用方法】每日2次,每次1粒,早晚饭后半小时,咀嚼即可。",cat_id_1:6785,cat_id:6832,cat_id_2:6827,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:4224981678,price:3890,buy_limit:999999,customer_num:1,id:6784205686,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:6784205686,start_time:1451577600},{goods_id:4224981678,price:3690,buy_limit:999999,customer_num:2,id:6784205687,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:6784205687,start_time:1451577600}],goods_id:4224981678,goods_desc:"【买二送一】三盒一周期   强效冲刺3到15厘米_________\n【使用方法】每日2次,每次1粒,早晚饭后半小时,咀嚼即可。",share_title:"36.9元 【买二送一】钙片青少年成人咀嚼片学生长高钙片产品增高垫 拼多多",warehouse:"",mall_id:285110136,cat_id_3:6832,is_sku_onsale:1,goods_property_type:0,has_promotion:1,goods_name:"【买二送一】钙片青少年成人咀嚼片学生长高钙片产品增高垫",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-09/51648c7351902cf740eab06a82f87d77.jpeg",second_hand:0,goods_property:[{values:["2018-10-01"],key:"生产日期"},{values:["730天"],key:"保质期"},{values:["SC11434122205038"],key:"食品生产许可证编号"},{values:["Q/AQK 0067S"],key:"产品标准号"}],market_price:6800,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-09/2bf03740d240f00b326b030792895b43.jpeg",gallery:[{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-25/8741d5e9-b71a-4e92-b83f-befb9c838e19.jpg",height:1500,priority:29,width:685,type:2,id:89190967705},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-25/73bf37b2-3061-40d4-82d4-e925520504b0.jpg",height:1500,priority:28,width:685,type:2,id:89190967704},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/52624b42913281f282737ca5cacb8f1f.jpeg",height:1355,priority:27,width:750,type:2,id:89190967703},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/2992550d254f6ab77fd12b3f85a5e9c2.jpeg",height:1468,priority:26,width:750,type:2,id:89151211256},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/fef8dbb8b184add7bf2ce934f3d21037.jpeg",height:500,priority:25,width:750,type:2,id:89151211255},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/68cceed85535e4ef24a14bad999a9aca.jpeg",height:491,priority:24,width:750,type:2,id:78575159983},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/bf6d734da885753ca84d7ce41669efb6.jpeg",height:671,priority:23,width:750,type:2,id:78130305090},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/0ee6170a9e8460dbbd69ace87b591411.jpeg",height:888,priority:22,width:750,type:2,id:78130305089},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/6e600dda1658e324993315e737341772.jpeg",height:936,priority:21,width:750,type:2,id:78130305088},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/0f3c256c425c32485d8dc80f219d3d97.jpeg",height:465,priority:20,width:750,type:2,id:65303087627},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/c21755b63ebfea6fc10a41db71087f50.jpeg",height:568,priority:19,width:750,type:2,id:64930066556},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-06/b4c1de20738161f3b514c7895fb609bd.jpeg",height:641,priority:18,width:750,type:2,id:64809219367},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-06/736ba65df96ed31a5967207b80524445.jpeg",height:655,priority:17,width:750,type:2,id:62394084055},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-06/f40b28f147a2d61e3ef2166d839e9218.jpeg",height:959,priority:16,width:750,type:2,id:62394084054},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/9f3e408e2fb9f8fd84bf81e486240749.jpeg",height:993,priority:15,width:750,type:2,id:62394084053},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/3c37edc93a37df043cc70bbc17a085d0.jpeg",height:905,priority:14,width:750,type:2,id:62394084052},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/d8976f733b05f3f962df314917643396.jpeg",height:1134,priority:13,width:750,type:2,id:62394084051},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-25/8b15e6e4-5637-4075-ad86-91c40d73e60a.jpg",height:591,priority:12,width:750,type:2,id:62394084050},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/cf6f7eefb2e93e431159204ffa8bd99c.jpeg",height:1082,priority:11,width:750,type:2,id:62394084049},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-26/44da7bfb-6055-4eb1-8195-0e81ba864e9c.png",height:375,priority:10,width:750,type:2,id:62394084048},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-26/0a469293-e5e4-4f81-8b02-942c8a8affed.jpg",height:800,priority:9,width:800,type:1,id:62394084047},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-26/c2c31966-8b99-4587-a34d-25aa09ff63af.jpg",height:800,priority:8,width:800,type:1,id:62394084046},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-05/e0e351e8-f0ba-48e2-a269-0df5924bf56d.jpg",height:800,priority:7,width:800,type:1,id:62394084045},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-11-16/4955fb346ce9273b565971249c799018.jpeg",height:755,priority:6,width:755,type:1,id:62394084044},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/1e6fdf0b37a1cbd7769f28882629b19e.jpeg",height:800,priority:5,width:800,type:1,id:62394084043},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/d83dcaef49510d190b39793855c8f6e5.jpeg",height:800,priority:4,width:800,type:1,id:62392961793},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/167e762878c437e83d4128428355d802.jpeg",height:800,priority:3,width:800,type:1,id:62392961792},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-26/a60c2f23-c61f-466e-8685-f128a38315b8.jpg",height:800,priority:2,width:800,type:1,id:62392961791},{goods_id:4224981678,url:"http://t00img.yangkeduo.com/goods/images/2018-12-03/c3e4b407167a9f768cdb985898c6a8cb.jpeg",height:800,priority:1,width:800,type:1,id:62391668898},{goods_id:4224981678,url:"https://t00img.yangkeduo.com/goods/images/2019-01-09/84c356c8-fa01-42d7-932d-803339ad65c5.jpg",height:800,priority:0,width:800,type:1,id:62391668897}],is_onsale:1,open_in_festival:1,has_activity:1,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32",options:[0,2,7,9],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:115813,event_type:0,app_new:0,country:"",app_client_only:0,quantity:258617},server_time:0},1579790:{sku:[{is_onsale:1,group_price:3990,sku_id:133858979048,weight:0,goods_id:1579790,normal_price:4590,price:0,limit_quantity:999,specs:[{spec_key:"组合",spec_value:"4袋装组合【含夏威夷果和腰果】"}],market_price:0,old_group_price:3990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/e9b1caeb-6eb0-42e8-8574-0f734fad1c4b.jpg",spec:"1597144183",quantity:6554},{is_onsale:1,group_price:4990,sku_id:140703195122,weight:0,goods_id:1579790,normal_price:5590,price:0,limit_quantity:999,specs:[{spec_key:"组合",spec_value:"美味装544g(含松子夏果)"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/955bffe7-7457-4e9c-980e-d8dc82521f99.jpg",spec:"1613599387",quantity:9598},{is_onsale:1,group_price:5990,sku_id:140703499417,weight:0,goods_id:1579790,normal_price:6590,price:0,limit_quantity:999,specs:[{spec_key:"组合",spec_value:"实惠装784g(含松子夏果腰果)"}],market_price:0,old_group_price:5990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/96aa5876-dec8-4474-8449-08c874e8b89c.jpg",spec:"1613605084",quantity:7334}],activity_collection:{},price:{line_price:6900,browser_price_style:2,min_on_sale_normal_price:4590,max_on_sale_normal_price:6590,min_group_price:3990,max_normal_price:6590,min_on_sale_group_price:3990,price_suffix:"起",old_max_group_price:5990,price_style:2,old_max_on_sale_group_price:5990,old_min_on_sale_group_price:3990,max_group_price:5990,browser_price_suffix:"起",min_normal_price:4590,max_on_sale_group_price:5990,old_min_group_price:3990},goods:{image_url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/774ad4f0-5eae-42e2-aa2e-e45f493f0fe8.jpg",share_desc:"多种坚果组合可选,4袋装组合456g,含夏威夷果108g,腰果108g,多味花生120g,蟹黄瓜子仁120g共4袋装;美味装544g含夏威夷果108g,腰果108g,东北松子88g,多味花生120g,蟹黄瓜子仁120g共5袋装;实惠装784g含夏威夷果108g,纸皮核桃120g,腰果108g,东北松子88g,多味花生120g,蟹黄瓜子仁120g,蟹黄豆瓣120g,共7袋。多种规格可选。",cat_id_1:6398,cat_id:6404,cat_id_2:6399,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:1579790,price:0,buy_limit:999,customer_num:1,id:3165648,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:3165648,start_time:1451577600},{goods_id:1579790,price:0,buy_limit:999,customer_num:2,id:3165649,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:3165649,start_time:1451577600}],goods_id:1579790,goods_desc:"多种坚果组合可选,4袋装组合456g,含夏威夷果108g,腰果108g,多味花生120g,蟹黄瓜子仁120g共4袋装;美味装544g含夏威夷果108g,腰果108g,东北松子88g,多味花生120g,蟹黄瓜子仁120g共5袋装;实惠装784g含夏威夷果108g,纸皮核桃120g,腰果108g,东北松子88g,多味花生120g,蟹黄瓜子仁120g,蟹黄豆瓣120g,共7袋。多种规格可选。",share_title:"39.9元 憨豆熊 夏威夷果 腰果坚果炒货组合456g/784g休闲零食组合零食 拼多多",warehouse:"",mall_id:6888,cat_id_3:6404,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"憨豆熊 夏威夷果 腰果坚果炒货组合456g/784g休闲零食组合零食",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-02/e2086493e66201da626eca65e1cfba16.jpeg",second_hand:0,goods_property:[{values:["456g"],key:"净含量"},{values:["袋装"],key:"包装方式"},{values:["2018-10-20"],key:"生产日期"},{values:["360天"],key:"保质期"},{values:["SC11434020305136"],key:"食品生产许可证编号"}],market_price:6900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-02/f3036846c6a86bf2164b564b8f548652.jpeg",gallery:[{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/b8409af5-c7e8-4595-a62c-b9cd256c96c1.jpg",height:376,priority:14,width:790,type:2,id:82234560867},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/0dade7ac-168c-4ea2-bbde-b3d97fb64cf5.jpg",height:387,priority:13,width:790,type:2,id:82234560866},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-02/8334373b-55b9-4337-bf54-d44271acbbf0.jpeg",height:781,priority:12,width:790,type:2,id:82234560865},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-02/00b6a2f4-b0b5-47ce-90b4-d897bcbcfc4a.jpg",height:775,priority:11,width:790,type:2,id:82234560864},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/ebbe846b-8ca7-4c72-b11e-85756ceca010.jpg",height:526,priority:10,width:790,type:2,id:82234560863},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/d527b734-de5b-43d2-be09-49ded8605e3c.jpg",height:392,priority:9,width:790,type:2,id:79974501253},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/219732e2-e4ee-4042-9880-45524ef0a45f.jpg",height:720,priority:8,width:790,type:2,id:79974501252},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/20434e2a-ec0f-432f-9d58-206fad66b3b0.jpg",height:676,priority:7,width:790,type:2,id:59148805802},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/8310f4ae-c544-42a8-bbec-10163cc69e0c.jpg",height:417,priority:6,width:790,type:2,id:59148805801},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-02/b7e18809-8b9d-4619-901a-7cf8d87c4843.jpg",height:1007,priority:5,width:790,type:2,id:7682149656},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/cbc09b0e-283a-46ce-bf18-aa9700cbc976.jpg",height:800,priority:4,width:800,type:1,id:7682149655},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/41980b86-39c6-4035-8eb0-aa0bf21cce0b.jpeg",height:800,priority:3,width:800,type:1,id:7682149654},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/3c16dcf3-e41b-4470-b89e-19a77858054a.jpeg",height:800,priority:2,width:800,type:1,id:7682149653},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2018-12-26/8d876098-4511-418c-bc91-7e44970f4b55.jpg",height:800,priority:1,width:800,type:1,id:7682149652},{goods_id:1579790,url:"https://t00img.yangkeduo.com/goods/images/2019-01-02/894a0510-112a-4ee9-b0e8-bd043bf39801.jpg",height:800,priority:0,width:800,type:1,id:7682149651}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼6.6万件",global_sold_quantity:0,sold_quantity:66359,event_type:0,app_new:0,country:"",app_client_only:0,quantity:23486},server_time:0},557137848:{sku:[{is_onsale:1,group_price:1680,sku_id:8937493084,weight:2120,goods_id:557137848,normal_price:2990,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"净重5斤"},{spec_key:"口味",spec_value:"芝麻"}],market_price:0,old_group_price:1680,sold_quantity:0,init_quantity:0,thumb_url:"http://t02img.yangkeduo.com/images/2018-02-04/d67b6701d3980a16b5d48bae5e056d90.jpeg",spec:"980090,108891",quantity:1433729},{is_onsale:1,group_price:2050,sku_id:8937493085,weight:2120,goods_id:557137848,normal_price:2990,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"净重5斤"},{spec_key:"口味",spec_value:"葡萄"}],market_price:0,old_group_price:2050,sold_quantity:0,init_quantity:0,thumb_url:"http://omsproductionimg.yangkeduo.com/images/2018-02-04/13e3407ea52ec8604c0b062b1dcd20fa.jpeg",spec:"980090,4878",quantity:74898},{is_onsale:1,group_price:2050,sku_id:8937493086,weight:2120,goods_id:557137848,normal_price:2990,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"净重5斤"},{spec_key:"口味",spec_value:"蜜枣"}],market_price:0,old_group_price:2050,sold_quantity:0,init_quantity:0,thumb_url:"http://t08img.yangkeduo.com/images/2018-02-04/cf334044e5310c801e59dc6dade4dc29.jpeg",spec:"980090,359497",quantity:97560},{is_onsale:1,group_price:2150,sku_id:15712855477,weight:2120,goods_id:557137848,normal_price:2950,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"净重5斤"},{spec_key:"口味",spec_value:"混合口味【蜜枣+葡萄】（力荐"}],market_price:0,old_group_price:2150,sold_quantity:0,init_quantity:0,thumb_url:"http://t01img.yangkeduo.com/images/2018-04-12/9e32de1d4dddef581cd116eee6799df5.jpeg",spec:"980090,472229673",quantity:887932}],activity_collection:{},price:{line_price:4900,browser_price_style:2,min_on_sale_normal_price:2950,max_on_sale_normal_price:2990,min_group_price:1680,max_normal_price:2990,min_on_sale_group_price:1680,price_suffix:"起",old_max_group_price:2150,price_style:2,old_max_on_sale_group_price:2150,old_min_on_sale_group_price:1680,max_group_price:2150,browser_price_suffix:"起",min_normal_price:2950,max_on_sale_group_price:2150,old_min_group_price:1680},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-08-16/9d51aea3b68a312f8ad63d4d1c838a5b.jpeg",share_desc:"详情图片一样,不代表产品都一样的,亲们多看评论,多看晒图,我们的沙琪玛低糖,低糖,低糖,我们的沙琪玛不腻,不腻,不腻。我们家的沙琪玛5斤正常都50个以上,包装纸箱都是5层加厚!!很多别家都是5斤40多个(因为含糖多)包装三层纸箱(图便宜,易破损)我们绝对和别人不一样,绝对的货真价实!我们做的是良心食品,做的是口碑,做的是回头客,做的是长久!我们家的沙琪玛单个重量轻,因为含糖量低,亲们尝过就知道啦绝对的便宜又好吃,真正的低糖不油腻,都是土鸡蛋代替水和面而成,好的材料才能做出好的味道来,您选择了,就一定满意,一定不会后悔",cat_id_1:6398,cat_id:7547,cat_id_2:6465,cat_id_4:7547,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:557137848,price:0,buy_limit:999999,customer_num:1,id:824187316,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:824187316,start_time:1451577600},{goods_id:557137848,price:0,buy_limit:999999,customer_num:2,id:824187317,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:824187317,start_time:1451577600}],goods_id:557137848,goods_desc:"详情图片一样,不代表产品都一样的,亲们多看评论,多看晒图,我们的沙琪玛低糖,低糖,低糖,我们的沙琪玛不腻,不腻,不腻。我们家的沙琪玛5斤正常都50个以上,包装纸箱都是5层加厚!!很多别家都是5斤40多个(因为含糖多)包装三层纸箱(图便宜,易破损)我们绝对和别人不一样,绝对的货真价实!我们做的是良心食品,做的是口碑,做的是回头客,做的是长久!我们家的沙琪玛单个重量轻,因为含糖量低,亲们尝过就知道啦绝对的便宜又好吃,真正的低糖不油腻,都是土鸡蛋代替水和面而成,好的材料才能做出好的味道来,您选择了,就一定满意,一定不会后悔",share_title:"16.8元 【16.8发5斤,仅200份 手慢无】沙琪玛低糖不油腻萨其马休闲零食 拼多多",warehouse:"",mall_id:1770814,cat_id_3:6468,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【16.8发5斤,仅200份 手慢无】沙琪玛低糖不油腻萨其马休闲零食",hd_thumb_url:"http://t00img.yangkeduo.com/t08img/images/2018-07-12/ac084e2edcff950ce246ab3c91a98d80.jpeg",second_hand:0,goods_property:[{values:["2018-12-05"],key:"生产日期"},{values:["270天"],key:"保质期"}],market_price:4900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/t07img/images/2018-07-12/60c7a8c6a79826c715a442952694323a.jpeg",gallery:[{goods_id:557137848,url:"http://t00img.yangkeduo.com/t08img/images/2018-07-19/1dc479f9193f775a5e93453709511ddb.jpeg",height:745,priority:20,width:750,type:2,id:77720191994},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-09-13/3c1a0406ac4fd131a187d7254ea50cca.jpeg",height:546,priority:19,width:750,type:2,id:77720191993},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t04img/images/2018-07-19/d9f708726ed093fd4974546143619c59.jpeg",height:586,priority:18,width:750,type:2,id:29729496873},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t11img/images/2018-07-19/d0b868ad4762f2866b5345423fdeff06.jpeg",height:488,priority:17,width:750,type:2,id:29693133332},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t04img/images/2018-07-19/97782bc2bd9674b2d0913f7d27a66137.jpeg",height:647,priority:16,width:750,type:2,id:29693133331},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t10img/images/2018-07-19/c5674ee64c62edcc2c0243a47e83c3e8.jpeg",height:559,priority:15,width:750,type:2,id:8677686883},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t02img/images/2018-07-19/791fa8affdf8891a886b080793ae3f3e.jpeg",height:586,priority:14,width:750,type:2,id:8677686882},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-07-19/4ff7592eb14fb963fe5904cc4495ddd7.jpeg",height:611,priority:13,width:750,type:2,id:8677686881},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-07-19/51fade0509d4def38497ea6ca9f2ac81.jpeg",height:597,priority:12,width:750,type:2,id:8677686880},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t05img/images/2018-07-19/41903395df83c581e2970bcd1ddc24ae.jpeg",height:743,priority:11,width:750,type:2,id:8677686879},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-07-19/9855e2c0ece51c09ee5da60d1539bd96.jpeg",height:800,priority:10,width:800,type:2,id:8677686878},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t08img/images/2018-07-19/a3bd2b426f65014c39fc6235be3de363.jpeg",height:601,priority:9,width:750,type:2,id:8677686877},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t11img/images/2018-07-19/6ee739b7bd43e0da7cbd6dcb38d0457c.jpeg",height:721,priority:8,width:750,type:2,id:8677686876},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t11img/images/2018-07-19/a3e643dc23128e04a333fd8e3a832679.jpeg",height:563,priority:7,width:750,type:2,id:8677686875},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-12-21/407e6cd24af7474c44ff4de8be99b6ac.jpeg",height:1500,priority:6,width:1167,type:2,id:8677686874},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-12-21/c5994faf8d02c0ffa314ebecba6ca5ba.jpeg",height:675,priority:5,width:1200,type:2,id:8677686873},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t09img/images/2018-07-19/ee2e05012388751a00ed8e0b322841ae.jpeg",height:800,priority:4,width:800,type:1,id:8677686872},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-07-19/15aba11182ae5c68e93ba022c11cf1e1.jpeg",height:800,priority:3,width:800,type:1,id:8677686871},{goods_id:557137848,url:"http://t00img.yangkeduo.com/goods/images/2018-07-19/59e6087a6415170583da7d105ba70e60.jpeg",height:800,priority:2,width:800,type:1,id:8677686870},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t10img/images/2018-07-19/3d3ac48e99ae6952c3f000874798433c.jpeg",height:800,priority:1,width:800,type:1,id:8677686869},{goods_id:557137848,url:"http://t00img.yangkeduo.com/t07img/images/2018-07-12/15abebb9fc3f0dba2885e8f7f8b6bafd.jpeg",height:720,priority:0,width:720,type:1,id:8677686868}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32",options:[19,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:1175984,event_type:0,app_new:0,country:"",app_client_only:0,quantity:2494119},server_time:0},449560918:{sku:[{is_onsale:1,group_price:8800,sku_id:142739538799,weight:2e3,goods_id:449560918,normal_price:8900,price:0,limit_quantity:999,specs:[{spec_key:"尺寸",spec_value:"4斤装（净虾3.2斤）10-12小虾"}],market_price:0,old_group_price:8800,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/8b003712-6917-418c-941a-7813431b217d.jpg",spec:"1591958644",quantity:7489},{is_onsale:1,group_price:9800,sku_id:142748132205,weight:2e3,goods_id:449560918,normal_price:9900,price:0,limit_quantity:999,specs:[{spec_key:"尺寸",spec_value:"4斤装（净虾3.2斤）12-15cm"}],market_price:0,old_group_price:9800,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/3f86751f-937e-4f5a-9e22-e06aacb85b79.jpg",spec:"1431999537",quantity:6048},{is_onsale:1,group_price:10800,sku_id:142748132206,weight:2e3,goods_id:449560918,normal_price:10900,price:0,limit_quantity:999,specs:[{spec_key:"尺寸",spec_value:"4斤装（净虾3.2斤）13-16cm"}],market_price:0,old_group_price:10800,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/ee6c4a23-36cc-4bc1-b749-74d66fc70c8f.jpg",spec:"1431996581",quantity:7362},{is_onsale:1,group_price:11800,sku_id:142750292551,weight:2e3,goods_id:449560918,normal_price:11900,price:0,limit_quantity:999,specs:[{spec_key:"尺寸",spec_value:"4斤装（净虾3.2斤）14-17cm"}],market_price:0,old_group_price:11800,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/2aca3ff3-12f0-4640-a1f0-5ca396ecf81a.jpg",spec:"1629308606",quantity:8297},{is_onsale:1,group_price:12800,sku_id:142750292552,weight:2e3,goods_id:449560918,normal_price:12900,price:0,limit_quantity:999,specs:[{spec_key:"尺寸",spec_value:"4斤装（净虾3.6斤）13-16cm"}],market_price:0,old_group_price:12800,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/72037248-34ec-44fa-ad04-cd006c1e1f22.jpg",spec:"1473457585",quantity:7974}],activity_collection:{},price:{line_price:19800,browser_price_style:2,min_on_sale_normal_price:8900,max_on_sale_normal_price:12900,min_group_price:8800,max_normal_price:12900,min_on_sale_group_price:8800,price_suffix:"起",old_max_group_price:12800,price_style:2,old_max_on_sale_group_price:12800,old_min_on_sale_group_price:8800,max_group_price:12800,browser_price_suffix:"起",min_normal_price:8900,max_on_sale_group_price:12800,old_min_group_price:8800},goods:{image_url:"http://t08img.yangkeduo.com/images/2018-02-07/4bcf46124ad69aab322be9178e077347.jpeg",share_desc:"①合作京东、顺丰快递(不到地区勿拍)偏远乡镇村超出快递派件区域,需要及时自提,否则延误签收,坏货不赔!!\n②大虾长12-15厘米和13-16厘米,带冰4斤,净虾3.2斤和3.6斤,含冰是为了保温运输!\n③采用加厚保温箱+保温袋+冰袋+防水袋多重保温措施,保证新鲜品质!\n④厄瓜多尔进口白对虾,肉质松软有弹性,口感鲜美,营养丰富,是绝佳的深海美味,走过路过不要错过~!\n⑤因买家地址错误、超出派件区域当天没有及时自取、电话错误快递联系不上买家等个人原因造成时效延误、坏货的情况,买家承担损失。",cat_id_1:8172,cat_id:8346,cat_id_2:8176,cat_id_4:8346,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:449560918,price:0,buy_limit:999999,customer_num:1,id:704145612,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:704145612,start_time:1451577600},{goods_id:449560918,price:0,buy_limit:999999,customer_num:2,id:704145613,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:704145613,start_time:1451577600}],goods_id:449560918,goods_desc:"①合作京东、顺丰快递(不到地区勿拍)偏远乡镇村超出快递派件区域,需要及时自提,否则延误签收,坏货不赔!!\n②大虾长12-15厘米和13-16厘米,带冰4斤,净虾3.2斤和3.6斤,含冰是为了保温运输!\n③采用加厚保温箱+保温袋+冰袋+防水袋多重保温措施,保证新鲜品质!\n④厄瓜多尔进口白对虾,肉质松软有弹性,口感鲜美,营养丰富,是绝佳的深海美味,走过路过不要错过~!\n⑤因买家地址错误、超出派件区域当天没有及时自取、电话错误快递联系不上买家等个人原因造成时效延误、坏货的情况,买家承担损失。",share_title:"88元 年货新鲜大虾4斤白虾大对虾海虾海鲜水产鲜活活虾冷冻基围虾生鲜 拼多多",warehouse:"",mall_id:1223868,cat_id_3:8195,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"年货新鲜大虾4斤白虾大对虾海虾海鲜水产鲜活活虾冷冻基围虾生鲜",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-10/9acd9ccc757592bfa2c8f338b7de9a53.jpeg",second_hand:0,goods_property:[{values:["厄瓜多尔"],key:"产地"},{values:["海虾"],key:"虾品类"},{values:["1600g"],key:"净含量"},{values:["普通盒装"],key:"包装方式"}],market_price:19800,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-10/a43b2f5754e234f159baed8a76b6c42a.jpeg",gallery:[{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/8fe623e0-b320-43fa-833b-3f124bc6aa28.jpg",height:1202,priority:19,width:750,type:2,id:8541883639},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/14e37d82-aab1-4f3f-9170-73ca59ef7750.jpg",height:926,priority:18,width:750,type:2,id:8024963997},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/27e58b58-1967-47df-ab67-815b718ce2ee.jpg",height:876,priority:17,width:750,type:2,id:8024963996},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/37646556-8673-42a9-accf-2323a96a500b.jpg",height:923,priority:16,width:750,type:2,id:8024963995},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/988774ec-1172-44b5-b90c-7ef4ab51e79c.jpg",height:535,priority:15,width:750,type:2,id:8024963994},{goods_id:449560918,url:"http://t03img.yangkeduo.com/images/2018-04-16/0ae1db27841795dbd5b4b0eac239ea7e.jpeg",height:599,priority:14,width:750,type:2,id:8024963992},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/7feb88a6-83c3-4b22-bd4a-9069d1dd6f2e.jpg",height:743,priority:13,width:750,type:2,id:8024963990},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/41b3b91a-0f58-488d-a2e1-72fa7c17e96d.jpg",height:716,priority:12,width:750,type:2,id:8024963988},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/e40d2565-08b0-4c8a-9636-28c552373b26.jpg",height:715,priority:11,width:750,type:2,id:8024963986},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/6e7b9559-9820-40f2-9211-02777e4111cb.jpg",height:715,priority:10,width:750,type:2,id:8024963984},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/757da107-e37c-4fe1-96fe-a46708c2e026.jpg",height:715,priority:9,width:750,type:2,id:8024963982},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/4f447489-de53-4dd7-84da-12caa347b767.jpg",height:704,priority:8,width:750,type:2,id:8024963981},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/425cc6f9-a432-4e1a-a74b-5cc5bf844973.jpg",height:782,priority:7,width:750,type:2,id:8024963978},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/05e0bba1-02d5-4236-9937-361db2e0d2ff.jpg",height:952,priority:6,width:750,type:2,id:8024963977},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/07d5b35e-896f-4cb5-b15e-3de9aa6fee0c.jpg",height:1003,priority:5,width:750,type:2,id:8024963975},{goods_id:449560918,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-13/5822e0e95689fff206be4b013e2a91f0.jpeg",height:800,priority:4,width:800,type:1,id:8024963973},{goods_id:449560918,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-13/c06d0be1b4b9b966e7ba2bf0485c42d3.jpeg",height:800,priority:3,width:800,type:1,id:8024963971},{goods_id:449560918,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-13/91c22ca0003d92f14740aa11dc68a79b.jpeg",height:800,priority:2,width:800,type:1,id:8024963969},{goods_id:449560918,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-13/b351e93672938becb8cd4d87ae46b805.jpeg",height:800,priority:1,width:800,type:1,id:8024963967},{goods_id:449560918,url:"https://t00img.yangkeduo.com/goods/images/2019-01-10/eedd1c83-3cf4-4d28-9aff-700d92461619.jpg",height:800,priority:0,width:800,type:1,id:8024963965}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,30,31,32",options:[9,13],is_app:0,side_sales_tip:"已拼6.1万件",global_sold_quantity:0,sold_quantity:61616,event_type:0,app_new:0,country:"",app_client_only:0,quantity:37170},server_time:0},4944656884:{sku:[{is_onsale:1,group_price:2124,sku_id:128164331867,weight:0,goods_id:4944656884,normal_price:2290,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"1000克(2斤)吊柿饼"}],market_price:0,old_group_price:2190,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-19/169e3d824a597d270cac43894140d9f0.jpeg",spec:"1571032113",quantity:342},{is_onsale:1,group_price:2997,sku_id:128164331868,weight:0,goods_id:4944656884,normal_price:3190,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"1500克(3斤)吊柿饼"}],market_price:0,old_group_price:3090,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-19/993cade3463d8c41eba07f2b69da9b30.jpeg",spec:"1571006972",quantity:207},{is_onsale:1,group_price:3569,sku_id:128164331869,weight:0,goods_id:4944656884,normal_price:3780,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"2000克(4斤)吊柿饼"}],market_price:0,old_group_price:3680,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-19/ec98f6d395310755749b47695be224f7.jpeg",spec:"1571010782",quantity:900},{is_onsale:1,group_price:960,sku_id:128164331870,weight:0,goods_id:4944656884,normal_price:1090,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"250克(半斤)吊柿饼"}],market_price:0,old_group_price:990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-19/2d5d3879111657b08d473cee17b2317f.jpeg",spec:"1571006997",quantity:1090},{is_onsale:1,group_price:4539,sku_id:128164331871,weight:0,goods_id:4944656884,normal_price:4780,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"2500克（5斤）吊柿饼"}],market_price:0,old_group_price:4680,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-19/198b043b035f377727c4a1df4e1063a7.jpeg",spec:"1571019574",quantity:898},{is_onsale:1,group_price:1445,sku_id:142244247331,weight:0,goods_id:4944656884,normal_price:1590,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"500克(1斤)吊柿饼"}],market_price:0,old_group_price:1490,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-09/8fccd88f-cb90-464e-8bce-1cc2bad9d04a.jpg",spec:"1627998501",quantity:1041},{is_onsale:1,group_price:2405,sku_id:143957605146,weight:0,goods_id:4944656884,normal_price:2580,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"农家野生黑柿饼(2斤)黑柿饼"}],market_price:0,old_group_price:2480,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/e3576b21-7e58-47f1-87a9-f0909aabea63.jpg",spec:"1632231340",quantity:5330},{is_onsale:1,group_price:3191,sku_id:143957605147,weight:0,goods_id:4944656884,normal_price:3390,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"农家野生黑柿饼(3斤)黑柿饼"}],market_price:0,old_group_price:3290,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/b91da231-3529-4579-a1e1-eae2de334f23.jpg",spec:"1632221597",quantity:5664},{is_onsale:1,group_price:1639,sku_id:143957605148,weight:0,goods_id:4944656884,normal_price:1790,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"农家野生黑柿饼(1斤)黑柿饼"}],market_price:0,old_group_price:1690,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/42e8f57e-910d-453d-8721-02fd63335602.jpg",spec:"1632220877",quantity:6214},{is_onsale:1,group_price:4840,sku_id:143957605149,weight:0,goods_id:4944656884,normal_price:5090,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"农家野生黑柿饼(5斤)黑柿饼"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/959d2fff-c01c-4a33-adeb-84cfa1e7cd76.jpg",spec:"1632226418",quantity:5907},{is_onsale:1,group_price:4549,sku_id:143959737672,weight:0,goods_id:4944656884,normal_price:4790,price:0,limit_quantity:999999,specs:[{spec_key:"套餐",spec_value:"礼品盒独立包装4斤装"}],market_price:0,old_group_price:4690,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-12/f9810c9a-0fc8-4a5c-95f7-2ce22fbf4755.jpg",spec:"1632223786",quantity:6001}],activity_collection:{activity:{activity_id:7212457,total_quantity:0x8000000000000000,activity_start_time:1548163841,activity_end_time:1579699841,remain_quantity:0x8000000000000000,detail_id:13495063,sold_quantity:0,activity_type:22}},price:{line_price:9900,browser_price_style:2,min_on_sale_normal_price:1090,max_on_sale_normal_price:5090,min_group_price:960,max_normal_price:5090,min_on_sale_group_price:960,price_suffix:"起",old_max_group_price:4990,price_style:2,old_max_on_sale_group_price:4990,old_min_on_sale_group_price:990,max_group_price:4840,browser_price_suffix:"起",min_normal_price:1090,max_on_sale_group_price:4840,old_min_group_price:990},goods:{image_url:"https://t00img.yangkeduo.com/goods/images/2019-01-13/15b12ac6-12e4-4a55-b177-bf1b6a6c42eb.jpg",share_desc:"【18年新晾晒的吊柿饼】【食品生产许可证:SC11737078103696】【保质期:60天】【发货快递:圆通快递,申通快递,天天快递,EMS】【口感:香、甜、糯、不发涩】【承诺:坏果、不好吃、发涩等任何不喜欢的都可以联系客服进行退款。不用退货】",cat_id_1:6398,cat_id:6448,cat_id_2:6420,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:4944656884,price:0,buy_limit:999999,customer_num:1,id:8067912304,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:8067912304,start_time:1451577600},{goods_id:4944656884,price:0,buy_limit:999999,customer_num:2,id:8067912305,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:8067912305,start_time:1451577600}],goods_id:4944656884,goods_desc:"【18年新晾晒的吊柿饼】【食品生产许可证:SC11737078103696】【保质期:60天】【发货快递:圆通快递,申通快递,天天快递,EMS】【口感:香、甜、糯、不发涩】【承诺:坏果、不好吃、发涩等任何不喜欢的都可以联系客服进行退款。不用退货】",share_title:"9.6元 18年新鲜晾晒农家吊柿饼手工自制柿子饼比富平柿饼青州柿饼好吃 拼多多",warehouse:"",mall_id:1820244,cat_id_3:6448,is_sku_onsale:1,goods_property_type:0,has_promotion:1,goods_name:"18年新鲜晾晒农家吊柿饼手工自制柿子饼比富平柿饼青州柿饼好吃",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-10/765c3c380a78a0d95fcc1c2d1ce2f42f.jpeg",second_hand:0,goods_property:[{values:["250g"],key:"净含量"},{values:["散装"],key:"包装方式"},{values:["2018-12-22"],key:"生产日期"},{values:["60天"],key:"保质期"},{values:["SC11737078103696"],key:"食品生产许可证编号"}],market_price:9900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-10/37ec7d7d9a01e89ff78d01508c262e3c.jpeg",gallery:[{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/7a0467ff35aaa286d330e60ea4e0dd08.jpeg",height:691,priority:16,width:750,type:2,id:74908826722},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/b3b7491b1006dc8e7be6cd31947abeee.jpeg",height:792,priority:15,width:750,type:2,id:74908826721},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/a45f99df98227d90accb1aed681a50c5.jpeg",height:813,priority:14,width:750,type:2,id:74908826720},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/274b29740520e9f923ed37e01945defa.jpeg",height:868,priority:13,width:750,type:2,id:74908826719},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/639334e19723e19f17964f721bc13437.jpeg",height:569,priority:12,width:750,type:2,id:74908826718},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/7c55ad7d0184a7979344f263018825f4.jpeg",height:887,priority:11,width:750,type:2,id:74908826717},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/3e2b4c3f931143f0f4a678815e052ba8.jpeg",height:832,priority:10,width:750,type:2,id:74908826716},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/c2330b7a63b2b374e199d9d2266e2088.jpeg",height:1021,priority:9,width:750,type:2,id:74908826715},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/020fd594b8c838b1feeeab7fe2fc07fd.jpeg",height:1027,priority:8,width:750,type:2,id:74908826714},{goods_id:4944656884,url:"https://t00img.yangkeduo.com/goods/images/2019-01-12/ffd35ed1-76db-4d71-997c-88decb041c81.jpg",height:500,priority:7,width:750,type:2,id:74908826713},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/dcf93599e5186940234cd0305379b264.jpeg",height:800,priority:6,width:800,type:1,id:74908826712},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/f3449c66070cdb585783044bf250d2de.jpeg",height:800,priority:5,width:800,type:1,id:74908826711},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/8bad4dd4ce800f8f2d078eee6534a2e3.jpeg",height:800,priority:4,width:800,type:1,id:74908826710},{goods_id:4944656884,url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/3c1b7365-e1e3-4162-a933-898202747537.jpg",height:800,priority:3,width:800,type:1,id:74908826709},{goods_id:4944656884,url:"http://t00img.yangkeduo.com/goods/images/2018-12-15/f5de83e3671ce0f65ad548a49358f360.jpeg",height:800,priority:2,width:800,type:1,id:74908826708},{goods_id:4944656884,url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/c1865433-af60-41bb-930e-2881e6cfa328.jpg",height:800,priority:1,width:800,type:1,id:74908826707},{goods_id:4944656884,url:"https://t00img.yangkeduo.com/goods/images/2019-01-09/d2e60a8b-4e32-4f9e-8fcc-653fcd7ae630.jpg",height:800,priority:0,width:800,type:1,id:74908826706}],is_onsale:1,open_in_festival:1,has_activity:1,allowed_region:"2,3,4,5,6,8,10,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,31,32",options:[2,19,7,9,13],is_app:0,side_sales_tip:"已拼6.4万件",global_sold_quantity:0,sold_quantity:64258,event_type:0,app_new:0,country:"",app_client_only:0,quantity:33594},server_time:0},71903736:{sku:[{is_onsale:1,group_price:1390,sku_id:1517516444,weight:1e3,goods_id:71903736,normal_price:1490,price:0,limit_quantity:999,specs:[{spec_key:"口味",spec_value:"巧克力组合500g"}],market_price:0,old_group_price:1390,sold_quantity:0,init_quantity:0,thumb_url:"http://omsproductionimg.yangkeduo.com/images/2017-09-04/d89a4381b94c5c6385a7f3ea4aa5aa59.jpeg",spec:"50926626",quantity:5926},{is_onsale:1,group_price:4990,sku_id:1517516445,weight:1e3,goods_id:71903736,normal_price:5090,price:0,limit_quantity:999,specs:[{spec_key:"口味",spec_value:"5斤实惠装"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"http://omsproductionimg.yangkeduo.com/images/2017-09-04/9500172071f0e955e1feefd0c417e60f.jpeg",spec:"50926915",quantity:9677},{is_onsale:1,group_price:2390,sku_id:4474443021,weight:1e3,goods_id:71903736,normal_price:2490,price:0,limit_quantity:999,specs:[{spec_key:"口味",spec_value:"2斤袋装"}],market_price:0,old_group_price:2390,sold_quantity:0,init_quantity:0,thumb_url:"http://omsproductionimg.yangkeduo.com/images/2017-11-28/00d749470be9012ce2c7e00c8d999af6.jpeg",spec:"93964276",quantity:9245},{is_onsale:1,group_price:3390,sku_id:66182955466,weight:1e3,goods_id:71903736,normal_price:3490,price:0,limit_quantity:999,specs:[{spec_key:"口味",spec_value:"3斤礼袋装"}],market_price:0,old_group_price:3390,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-09-24/eca2341e165f026b0064f65be242e4cd.jpeg",spec:"1181916363",quantity:6604}],activity_collection:{},price:{line_price:5900,browser_price_style:2,min_on_sale_normal_price:1490,max_on_sale_normal_price:5090,min_group_price:1390,max_normal_price:5090,min_on_sale_group_price:1390,price_suffix:"起",old_max_group_price:4990,price_style:2,old_max_on_sale_group_price:4990,old_min_on_sale_group_price:1390,max_group_price:4990,browser_price_suffix:"起",min_normal_price:1490,max_on_sale_group_price:4990,old_min_group_price:1390},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/aea3a71326ecc0792dc9ca27c6cc2d8b.jpeg",share_desc:"【组合实惠装巧克力】几十余款不同包装的巧克力精心挑选。种类较多随机发货,品种丰富,物美价廉!可送女友、送男朋友、送亲友、送家人、自己吃、送孩子的绝好佳品!【亲,点击‘去拼单’可快速拼单成功,优先发货呦】",cat_id_1:6398,cat_id:6532,cat_id_2:6522,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:71903736,price:0,buy_limit:999999,customer_num:1,id:150153296,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:150153296,start_time:1451577600},{goods_id:71903736,price:0,buy_limit:999999,customer_num:2,id:150153297,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:150153297,start_time:1451577600}],goods_id:71903736,goods_desc:"【组合实惠装巧克力】几十余款不同包装的巧克力精心挑选。种类较多随机发货,品种丰富,物美价廉!可送女友、送男朋友、送亲友、送家人、自己吃、送孩子的绝好佳品!【亲,点击‘去拼单’可快速拼单成功,优先发货呦】",share_title:"13.9元 【巧克力实惠装】多口味组合装混合什锦巧克力散装喜糖年货大礼包 拼多多",warehouse:"",mall_id:446784,cat_id_3:6532,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【巧克力实惠装】多口味组合装混合什锦巧克力散装喜糖年货大礼包",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-17/9feb818831a1ce2001a80a02a6f46c77.jpeg",second_hand:0,goods_property:[{values:["中国大陆"],key:"原产地"},{values:["是"],key:"是否含代可可脂"},{values:["否"],key:"是否含可可"},{values:["其它"],key:"形状"},{values:["含糖"],key:"是否含糖"},{values:["散装"],key:"包装方式"},{values:["2018-08-31"],key:"生产日期"},{values:["365天"],key:"保质期"},{values:["sc11133048101127"],key:"食品生产许可证编号"},{values:["GB/T19343"],key:"产品标准号"}],market_price:5900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-17/f0059c5a854407cad9e64b0e3fe3dd00.jpeg",gallery:[{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/8b54362d373b0b5c6aa9305034b71733.jpeg",height:606,priority:16,width:750,type:2,id:38563541366},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/51308659247727df013360f528f1e9b1.jpeg",height:606,priority:15,width:750,type:2,id:38563541365},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/0aa8c2650a508637e2c4075406080068.jpeg",height:605,priority:14,width:750,type:2,id:38563541364},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/27eefa77101c7e600e0c3748ecf543d6.jpeg",height:606,priority:13,width:750,type:2,id:38563541363},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/4362f171d19c3e62ceed31ba2d635c84.jpeg",height:606,priority:12,width:750,type:2,id:38563541362},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/2d67cb5e17345218c3a43631b073b58d.jpeg",height:606,priority:11,width:750,type:2,id:38563541361},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/32ef15ace1af4c08b4c47628176bb902.jpeg",height:606,priority:10,width:750,type:2,id:38563541360},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/79c098cb8d5d124f5b4b83739c50168c.jpeg",height:605,priority:9,width:750,type:2,id:38563541359},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/5a39a2b3eba59ec71bc8ed8737d602ad.jpeg",height:606,priority:8,width:750,type:2,id:38563541358},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/9acdb570a8cd691f4ca4955d41239763.jpeg",height:606,priority:7,width:750,type:2,id:4507383130},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/d7dbe529f550265ea3013ce16017d8af.jpeg",height:750,priority:6,width:750,type:1,id:4507383129},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/2959dee5c2e6b4df2983d380f99282b0.jpeg",height:750,priority:5,width:750,type:1,id:4507383128},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/f0e64c54956dab3dad7472f9909458dc.jpeg",height:750,priority:4,width:750,type:1,id:4507383127},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/ece2f44ae1c94372652adc53d0db0635.jpeg",height:750,priority:3,width:750,type:1,id:4507383126},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/2a13d2a11c63cd67724240a40b0ab1e1.jpeg",height:750,priority:2,width:750,type:1,id:4507383125},{goods_id:71903736,url:"http://t00img.yangkeduo.com/goods/images/2018-11-04/6879b094d2f5ce881d0324cf00d7c8f0.jpeg",height:750,priority:1,width:750,type:1,id:4507383124},{goods_id:71903736,url:"http://omsproductionimg.yangkeduo.com/images/2017-09-04/145700d6914614ddb65811b8b8022a36.jpeg",height:800,priority:0,width:800,type:1,id:4507383123}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,6,8,10,11,13,14,16,17,22,23,24,25,26,27,31,32",options:[19,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:201977,event_type:0,app_new:0,country:"",app_client_only:0,quantity:31452},server_time:0},2463764:{sku:[{is_onsale:1,group_price:8880,sku_id:127328980221,weight:0,goods_id:2463764,normal_price:10900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜8-11斤"}],market_price:0,old_group_price:8880,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/0df1e06f-21fe-44c3-b349-91bb07b85478.jpg",spec:"1565528921",quantity:44563},{is_onsale:1,group_price:9980,sku_id:138051226733,weight:0,goods_id:2463764,normal_price:13900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜11-14斤（大促销 当天发）"}],market_price:0,old_group_price:9980,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/fa26f6ac-48a5-4142-84b1-486f6e85a114.jpg",spec:"1614318760",quantity:3108},{is_onsale:1,group_price:9990,sku_id:127328980222,weight:0,goods_id:2463764,normal_price:13900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜11-14斤"}],market_price:0,old_group_price:9990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/c42a1f93-2f3e-469d-9f72-f1d551b61621.jpg",spec:"1565541520",quantity:47305},{is_onsale:1,group_price:10900,sku_id:127328980223,weight:0,goods_id:2463764,normal_price:16900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜14-17斤（掌柜推荐 肉多）"}],market_price:0,old_group_price:10900,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/009891f0-4634-413f-a48a-1830ba0e08d1.jpg",spec:"1565537673",quantity:36347},{is_onsale:1,group_price:12680,sku_id:136213318296,weight:0,goods_id:2463764,normal_price:19900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"泰国菠萝蜜17-21斤（1-2粒装）"}],market_price:0,old_group_price:12680,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/aa18805e-b4b0-4a05-988e-66f5fba3ce7a.jpg",spec:"1591205350",quantity:49131},{is_onsale:1,group_price:12680,sku_id:136214859908,weight:0,goods_id:2463764,normal_price:19900,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜17-21斤（大苞多肉很划算）"}],market_price:0,old_group_price:12680,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/ba304f93-e01e-4f26-9d1d-119ef860fe41.jpg",spec:"1565512611",quantity:44863},{is_onsale:1,group_price:14990,sku_id:136214859909,weight:0,goods_id:2463764,normal_price:23800,price:0,limit_quantity:999999,specs:[{spec_key:"重量",spec_value:"菠萝蜜21-24斤（出肉多多多）"}],market_price:0,old_group_price:14990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/cd1d1b86-d5d1-47b7-a8b2-fe1071ad5e76.jpg",spec:"1608618043",quantity:0}],activity_collection:{},price:{line_price:25800,browser_price_style:2,min_on_sale_normal_price:10900,max_on_sale_normal_price:19900,min_group_price:8880,max_normal_price:23800,min_on_sale_group_price:8880,price_suffix:"起",old_max_group_price:14990,price_style:2,old_max_on_sale_group_price:12680,old_min_on_sale_group_price:8880,max_group_price:14990,browser_price_suffix:"起",min_normal_price:10900,max_on_sale_group_price:12680,old_min_group_price:8880},goods:{image_url:"http://t10img.yangkeduo.com/images/2018-04-03/952912211181aa63157895eb9db871c2.jpeg",share_desc:"【坏果包赔】我们的菠萝蜜是泰国进口,菠萝蜜是热带水果,也是世界上最重的水果,一般重达5-20公斤。果肉鲜食或加工成罐头、果脯、果汁。种子富含淀粉,可煮食;树液和叶药用,消肿解毒;果肉有止渴、通乳、补中益气功效!【温馨提示】海外商品因为生产工厂、产品批次、产地等不同,可能会有不同的包装版本,请多多粉知悉!",cat_id_1:8172,cat_id:8247,cat_id_2:8182,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:2,rv:1,group:[{goods_id:2463764,price:0,buy_limit:999,customer_num:1,id:4933350,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:4933350,start_time:1451577600},{goods_id:2463764,price:0,buy_limit:999,customer_num:2,id:4933351,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:4933351,start_time:1451577600}],goods_id:2463764,goods_desc:"【坏果包赔】我们的菠萝蜜是泰国进口,菠萝蜜是热带水果,也是世界上最重的水果,一般重达5-20公斤。果肉鲜食或加工成罐头、果脯、果汁。种子富含淀粉,可煮食;树液和叶药用,消肿解毒;果肉有止渴、通乳、补中益气功效!【温馨提示】海外商品因为生产工厂、产品批次、产地等不同,可能会有不同的包装版本,请多多粉知悉!",share_title:"88.8元 【泰国进口】泰国菠萝蜜新鲜水果包邮波萝蜜8-24斤非红肉菠萝蜜年货整箱批发 拼多多",warehouse:"",mall_id:6486,cat_id_3:8247,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【泰国进口】泰国菠萝蜜新鲜水果包邮波萝蜜8-24斤非红肉菠萝蜜年货整箱批发",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-02/402ba2157a6b08658aac568922c73409.jpeg",second_hand:0,goods_property:[{values:["泰国"],key:"产地"}],market_price:25800,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-02/7fc589d9f319ceb4f2ef9079a452611c.jpeg",gallery:[{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/CGCevtQ7FfThuS1s7JNkN7CsCb6v9poY.jpg",height:352,priority:22,width:640,type:2,id:89176244892},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/Uuef9cn7foJZJfCdGxrpsQnwI0IdaEnD.jpg",height:305,priority:21,width:640,type:2,id:11998679738},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/8EImAXSAeiIBlZXm3u2L8OGHJDcXR5dW.jpg",height:396,priority:20,width:640,type:2,id:8238967524},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/ZNGgg7si5LJ1T2WStVCLHM1mhM2gWn8Y.jpg",height:463,priority:19,width:640,type:2,id:8238967523},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/gkDi9fNAvJYdDGlxmJgEqj1agrqV1Tmr.jpg",height:481,priority:18,width:640,type:2,id:8238967522},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/glVcwGLvgrtFwVwYBx30v6kLoeakxfFJ.jpg",height:442,priority:17,width:640,type:2,id:8238967521},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/tUPKoJDzbMmTkC9GjrQ3ci7sZXOIpbdU.jpg",height:449,priority:16,width:640,type:2,id:8238967520},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/6TzmXEPI7Nt1pKgw8FHrzrl3uON6C9xd.jpg",height:404,priority:15,width:640,type:2,id:8238967519},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/gjmIU6mpW6AtUEJzCeni7pde0k3Kfd6K.jpg",height:483,priority:14,width:640,type:2,id:8238967518},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/7aOvZGUYQfCsjN4eGWeQjSZkcT3OthRc.jpg",height:533,priority:13,width:640,type:2,id:8238967517},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/2017-12-04/6c9df67cc44c50bf53f7ccddc0d9adb4.jpeg",height:684,priority:12,width:750,type:2,id:8238967516},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/5N6P95f8tcv8lOyxSji64WSznAGfyuvP.jpg",height:508,priority:11,width:640,type:2,id:8238967515},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/UP11ShinJaWGKoDuFPVyP40A9nZdd031.jpg",height:498,priority:10,width:640,type:2,id:8238967514},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/2y757PTkvMcRIBcW6mkrmwhwnDUo476w.jpg",height:573,priority:9,width:640,type:2,id:8238967513},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/0C8iBPwBqG9QbhmhFwdyFnCFtrLeTTB7.jpg",height:480,priority:8,width:640,type:2,id:8238967512},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/unknown/0/lfkFFvrbQfsDefM8LXeqoDyqeKgSrZPy.jpg",height:634,priority:7,width:640,type:2,id:8238967511},{goods_id:2463764,url:"http://omsproductionimg.yangkeduo.com/images/2017-12-04/100806f6283e0eebcd9bb7120ea18903.jpeg",height:563,priority:6,width:750,type:2,id:8238967510},{goods_id:2463764,url:"http://t00img.yangkeduo.com/goods/images/2018-09-02/7b3ef67a2c0e75a591ab4ccf36731fd8.jpeg",height:95,priority:5,width:750,type:2,id:8238967509},{goods_id:2463764,url:"http://t01img.yangkeduo.com/images/2018-04-03/dea6de398c9ddcfdc1d7f2c6911675da.jpeg",height:800,priority:4,width:800,type:1,id:8238967508},{goods_id:2463764,url:"http://t03img.yangkeduo.com/images/2018-04-03/f76d3a996a0d11ee0a4adfb7d5d5054b.jpeg",height:800,priority:3,width:800,type:1,id:8238967507},{goods_id:2463764,url:"http://t09img.yangkeduo.com/images/2018-04-03/4d88644f4a4dae094410f4ffbeafd30e.jpeg",height:750,priority:2,width:750,type:1,id:8238967506},{goods_id:2463764,url:"https://t00img.yangkeduo.com/goods/images/2019-01-27/e57f12a4-62c7-45ab-b022-c4fa1be9636a.jpg",height:800,priority:1,width:800,type:1,id:8238967505},{goods_id:2463764,url:"https://t00img.yangkeduo.com/goods/images/2019-01-02/a181b117-53c6-40bf-9678-261f4ad79dc9.jpg",height:800,priority:0,width:800,type:1,id:8238967504}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,6,7,8,10,11,13,14,16,17,22,25,26,27,30,31,32",options:[0,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:104351,event_type:0,app_new:0,country:"泰国",app_client_only:0,quantity:225317},server_time:0},406367208:{sku:[{is_onsale:1,group_price:16900,sku_id:105638738327,weight:3e3,goods_id:406367208,normal_price:19900,price:0,limit_quantity:999999,specs:[{spec_key:"尺寸",spec_value:"13-16公分(深海水域 掌柜力荐)"}],market_price:0,old_group_price:16900,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-19/7ba92ad115526805a0e5daa012dca5a4.jpeg",spec:"1494291962",quantity:78536}],activity_collection:{},price:{line_price:20900,browser_price_style:0,min_on_sale_normal_price:19900,max_on_sale_normal_price:19900,min_group_price:16900,max_normal_price:19900,min_on_sale_group_price:16900,old_max_group_price:16900,price_style:0,old_max_on_sale_group_price:16900,old_min_on_sale_group_price:16900,max_group_price:16900,min_normal_price:19900,max_on_sale_group_price:16900,old_min_group_price:16900},goods:{image_url:"http://omsproductionimg.yangkeduo.com/images/2018-01-10/1f126f7dc688fc10af35eacc7ce41f56.jpeg",share_desc:"亲们虾毛重5斤,船冻产品,手工卡盘!净重在1.8kg-2kg之间!,请多粉知悉,收到大虾如有流水是正常现象哦!我们采用散冰保温比冰袋保温效果强很多!夏天天气炎热流水是正常的请勿拒签哦!任何问题联系我们客服都会帮您解决的!如还冻成一坨请您不要让它自然化冻会影响新鲜度和口感呢!将虾连同内纸盒一起底部朝下反复轻墩直至虾散即可,记得分装冷冻哦!因为是野生海捕的大虾有个别大小不均希望亲们理解一下哦!【收货问题】1)因个人原因(如地址错误、门卫代收、家中无人、手机无法接通等)而派送失败并导致货物变质,小店概不负责哦!",cat_id_1:8172,cat_id:8348,cat_id_2:8176,cat_id_4:8348,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:406367208,price:0,buy_limit:999,customer_num:1,id:644042282,is_open:1,end_time:2082729600,order_limit:1e4,duration:86400,group_id:644042282,start_time:1451577600},{goods_id:406367208,price:0,buy_limit:999,customer_num:2,id:644042283,is_open:1,end_time:2082729600,order_limit:1e4,duration:86400,group_id:644042283,start_time:1451577600}],goods_id:406367208,goods_desc:"亲们虾毛重5斤,船冻产品,手工卡盘!净重在1.8kg-2kg之间!,请多粉知悉,收到大虾如有流水是正常现象哦!我们采用散冰保温比冰袋保温效果强很多!夏天天气炎热流水是正常的请勿拒签哦!任何问题联系我们客服都会帮您解决的!如还冻成一坨请您不要让它自然化冻会影响新鲜度和口感呢!将虾连同内纸盒一起底部朝下反复轻墩直至虾散即可,记得分装冷冻哦!因为是野生海捕的大虾有个别大小不均希望亲们理解一下哦!【收货问题】1)因个人原因(如地址错误、门卫代收、家中无人、手机无法接通等)而派送失败并导致货物变质,小店概不负责哦!",share_title:"169元 【EMS发货】大连野生大虾5斤装对虾海鲜基围虾冰冻青虾鲜活海虾 拼多多",warehouse:"",mall_id:788516,cat_id_3:8195,is_sku_onsale:1,has_promotion:0,goods_name:"【EMS发货】大连野生大虾5斤装对虾海鲜基围虾冰冻青虾鲜活海虾",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-25/c8cfedacfd4b3fe3acb771efdfbbc977.jpeg",second_hand:0,market_price:20900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-25/a51722a05e9ec24754f539f5a247bad9.jpeg",gallery:[{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-11-10/b4688c6e2f76dfb2a202b1b6ce1a3496.jpeg",height:897,priority:15,width:750,type:2,id:59933872680},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-11-10/f7196142e48f6f2ce9a61766d9b972f2.jpeg",height:896,priority:14,width:750,type:2,id:59933872679},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-11-10/f3b9064ea9ca59e877e30f11476d0bc4.jpeg",height:897,priority:13,width:750,type:2,id:59933872678},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-11-10/96cb09b9193e3a8fde1321596ae84ba9.jpeg",height:897,priority:12,width:750,type:2,id:9483123243},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-10-18/b1e10b45acc5bd344b0231cd544101ef.jpeg",height:927,priority:11,width:750,type:2,id:7382072746},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-10-18/84b0e9367344e6640a0c6a1b82c50165.jpeg",height:1258,priority:10,width:750,type:2,id:7382072745},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-10-18/3fb42e20fb6eb3055502d2d3715b5a3e.jpeg",height:1258,priority:9,width:750,type:2,id:7382072744},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-10-18/bf3369e88ac9fbc13504faae644f8eab.jpeg",height:1259,priority:8,width:750,type:2,id:7382072743},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-10-18/81588961127334da2e54a51b08610321.jpeg",height:1258,priority:7,width:750,type:2,id:7382072742},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-12-24/da5e5fd2c9cfd1d06c4427a5f8371e58.jpeg",height:1221,priority:6,width:750,type:2,id:7382072741},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-12-24/99464d5007e8441ba11b4c217baf4873.jpeg",height:1276,priority:5,width:790,type:2,id:7382072740},{goods_id:406367208,url:"https://t00img.yangkeduo.com/goods/images/2019-01-24/c31f01d0-2008-46ef-8a9b-1c2783a1c55c.jpg",height:1276,priority:4,width:790,type:2,id:7382072739},{goods_id:406367208,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-02/5e0d40c0f1aff12298f899c1188526da.jpeg",height:800,priority:3,width:800,type:1,id:7382072738},{goods_id:406367208,url:"http://t00img.yangkeduo.com/goods/images/2018-11-23/bc36389a5be320469a4b45c0f4edee55.jpeg",height:800,priority:2,width:800,type:1,id:7382072737},{goods_id:406367208,url:"http://omsproductionimg.yangkeduo.com/images/2018-01-31/db04e441d845aa8d570167d941de4294.jpeg",height:800,priority:1,width:800,type:1,id:7382072736},{goods_id:406367208,url:"https://t00img.yangkeduo.com/goods/images/2019-01-25/b5bd8ac9-b525-483d-84f5-06caa697c0fd.jpg",height:800,priority:0,width:800,type:1,id:7382072735}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,5,6,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31,32",options:[13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:368889,event_type:0,app_new:0,country:"",app_client_only:0,quantity:78536},server_time:0},515737:{sku:[{is_onsale:1,group_price:12800,sku_id:64474693968,weight:0,goods_id:515737,normal_price:13900,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"6支蜡封礼袋"}],market_price:0,old_group_price:12800,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-09-20/a22ae007a0263c0ce0cf9358e57bea08.jpeg",spec:"1170592416",quantity:1994},{is_onsale:1,group_price:10900,sku_id:64476875664,weight:0,goods_id:515737,normal_price:11900,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"6支木箱套装"}],market_price:0,old_group_price:10900,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/3f3a4d425655aaee020881a340ce02d6.jpeg",spec:"1170607029",quantity:2277},{is_onsale:1,group_price:9900,sku_id:64477296878,weight:0,goods_id:515737,normal_price:12900,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"6支四杯架装"}],market_price:0,old_group_price:9900,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-09-20/1b83ddd6f1d831874438dc3e54c739c9.jpeg",spec:"1170577863",quantity:2342}],activity_collection:{},price:{line_price:238600,browser_price_style:2,min_on_sale_normal_price:11900,max_on_sale_normal_price:13900,min_group_price:9900,max_normal_price:13900,min_on_sale_group_price:9900,price_suffix:"起",old_max_group_price:12800,price_style:2,old_max_on_sale_group_price:12800,old_min_on_sale_group_price:9900,max_group_price:12800,browser_price_suffix:"起",min_normal_price:11900,max_on_sale_group_price:12800,old_min_group_price:9900},goods:{image_url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/b043e10b-3887-4797-83a3-55a441ab9ef3.jpg",share_desc:"【买到红酒,口感并不喜欢?没关系!我们对我们的产品品质有信心!为此支持免费试饮一支,若亲不喜欢,7天内退回剩余商品,我们全额退款!让您买的放心!】【省去层层盘剥的中间商,酒庄与您就隔了一层快递,线下售价数倍哦~】法国原瓶AOC级进口红酒干红葡萄酒750ml6。(套餐一买一送八:送4个红酒杯+海马刀+真空瓶塞+醒酒器+酒杯的杯架!)(套餐二:红酒6瓶+6支装木箱+开瓶器+倒酒器瓶塞)【温馨提示】海外商品因为生产工厂、 产品批次、产地等不同,可能会有不同的包装版本,请 多多粉知悉!",cat_id_1:6758,cat_id:6770,cat_id_2:6769,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:515737,price:0,buy_limit:999,customer_num:1,id:1038156,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:1038156,start_time:1451577600},{goods_id:515737,price:0,buy_limit:999,customer_num:2,id:1038157,is_open:1,end_time:2082729600,order_limit:999,duration:86400,group_id:1038157,start_time:1451577600}],goods_id:515737,goods_desc:"【买到红酒,口感并不喜欢?没关系!我们对我们的产品品质有信心!为此支持免费试饮一支,若亲不喜欢,7天内退回剩余商品,我们全额退款!让您买的放心!】【省去层层盘剥的中间商,酒庄与您就隔了一层快递,线下售价数倍哦~】法国原瓶AOC级进口红酒干红葡萄酒750ml6。(套餐一买一送八:送4个红酒杯+海马刀+真空瓶塞+醒酒器+酒杯的杯架!)(套餐二:红酒6瓶+6支装木箱+开瓶器+倒酒器瓶塞)【温馨提示】海外商品因为生产工厂、 产品批次、产地等不同,可能会有不同的包装版本,请 多多粉知悉!",share_title:"99元 法国进口红酒罗蒂庄园干红葡萄酒红酒750ml*6瓶整箱礼盒装木箱装 拼多多",warehouse:"",mall_id:5074,cat_id_3:6770,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"法国进口红酒罗蒂庄园干红葡萄酒红酒750ml*6瓶整箱礼盒装木箱装",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/2431a96ab9e6755072ff67d15973b96d.jpeg",second_hand:0,goods_property:[{values:["法国"],key:"产地"},{values:["礼盒装"],key:"包装方式"},{values:["红葡萄酒"],key:"葡萄酒种类"},{values:["干葡萄酒 （含糖量小于4g/L）"],key:"糖分含量"},{values:["否"],key:"是否为有机食品"},{values:["2017-05-16"],key:"生产日期"},{values:["3650天"],key:"保质期"}],market_price:238600,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-23/1f247d556c5b053410c1bba0d13a5f2d.jpeg",gallery:[{goods_id:515737,url:"https://video1.pinduoduo.com/i1/20181019/faf87e7db0b147b38d2549652d1632a6.mp4",height:640,priority:25,width:640,type:6,id:35591872098},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/734f05ae48ce48d61fba8dcee6ea1d33.jpeg",height:840,priority:24,width:640,type:2,id:12583237706},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/546222104c680585cf5bb265d49fd0d6.jpeg",height:855,priority:23,width:640,type:2,id:6084778160},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/282cd6338c4330688dda3d517126d0b9.jpeg",height:867,priority:22,width:640,type:2,id:6084778159},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/f622c767ca89c4f195a68a147000d3db.jpeg",height:998,priority:21,width:640,type:2,id:6084778158},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/fecd77fd9a448d31c8b4d0059ee43dd4.jpeg",height:744,priority:20,width:640,type:2,id:6084778157},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/20a645e58317caec283ad7f873022858.jpeg",height:679,priority:19,width:640,type:2,id:6084778156},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/7b51ff656abed397f4ca6da743adac4f.jpeg",height:643,priority:18,width:640,type:2,id:6084778155},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/c15f3882904f7414201b0c324aa56adc.jpeg",height:587,priority:17,width:640,type:2,id:6084778154},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/a6515f843437a7abf1bccfa5a6f82626.jpeg",height:618,priority:16,width:640,type:2,id:6084778153},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/3084036f50a583eaf0c92759b7426f2c.jpeg",height:765,priority:15,width:640,type:2,id:6084778152},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/8a9225a1fc8d1d3d517e96e8218d2b5e.jpeg",height:560,priority:14,width:640,type:2,id:6084778151},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/33b30ff7b55f0d5e14d4cc4c65b91b93.jpeg",height:551,priority:13,width:640,type:2,id:6084778150},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/ce3dd548136a38d10aedddeb9a452b89.jpeg",height:1002,priority:12,width:640,type:2,id:6084778149},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-09-20/e9cf9abb4b2ffb1befcdab114e43ab98.jpeg",height:800,priority:11,width:800,type:2,id:6084778148},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-08-20/efc5ebc203a6ccbdff1e8ae16e79ed94.jpeg",height:800,priority:10,width:800,type:2,id:6084778147},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/2ee1685bd869b78dafd1e2daf5e4a1b6.jpeg",height:892,priority:9,width:640,type:2,id:6084778146},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-11-29/4a9486cfcc291c9a6dc0bb5f029c8355.jpeg",height:800,priority:8,width:800,type:1,id:6084778145},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-10-25/b4553f2337cf6c909d5c6f698d4b6b54.jpeg",height:800,priority:7,width:800,type:1,id:6084778144},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-10-25/8efe911f84a2c1e0e21b6f938a30fa10.jpeg",height:800,priority:6,width:800,type:1,id:6084778143},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/d3efd94dc1707328256405cac9ddedfe.jpeg",height:800,priority:5,width:800,type:1,id:6084778142},{goods_id:515737,url:"http://t07img.yangkeduo.com/images/2018-04-09/db37a151a9d3633aab7480fa92aa7669.jpeg",height:800,priority:4,width:800,type:1,id:6084778141},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/1bc2b8d1cf0e3d6b611d5194e0986b44.jpeg",height:800,priority:3,width:800,type:1,id:6084778140},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/7ae175c9a412b4b328d4d599a922d1f8.jpeg",height:800,priority:2,width:800,type:1,id:6084778139},{goods_id:515737,url:"http://t00img.yangkeduo.com/goods/images/2018-09-20/ecfec7f2b23d4143ed6695ad1c524030.jpeg",height:800,priority:1,width:800,type:1,id:6084778138},{goods_id:515737,url:"http://omsproductionimg.yangkeduo.com/images/2017-08-18/76747da7d862e28fc347017649a6dfd4.jpeg",height:800,priority:0,width:800,type:1,id:6084778137}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"3,6,13,14,16,17,25,31",options:[0,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:111471,event_type:0,app_new:0,country:"",app_client_only:0,quantity:6613},server_time:0},5485609870:{sku:[{is_onsale:1,group_price:3980,sku_id:140601839525,weight:0,goods_id:5485609870,normal_price:4580,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"精选优质大果 10斤泡沫装"}],market_price:0,old_group_price:3980,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/a285a943-696f-4acb-86df-8fd40a5db72e.jpg",spec:"1187524627,1622564011",quantity:2085},{is_onsale:1,group_price:3490,sku_id:140586730815,weight:0,goods_id:5485609870,normal_price:3980,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"买五送五 （带箱9.5-10斤）大果"}],market_price:0,old_group_price:3490,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/7a551141-ac99-4200-8343-3764b04ff968.jpg",spec:"1187524627,1622515593",quantity:977},{is_onsale:1,group_price:3380,sku_id:140586730816,weight:0,goods_id:5485609870,normal_price:3880,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"买五送五 （带箱9.5-10斤）中果"}],market_price:0,old_group_price:3380,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/d7b38746-82df-4227-add3-00c0ccca9526.jpg",spec:"1187524627,1622514672",quantity:3633},{is_onsale:1,group_price:3180,sku_id:140586730817,weight:0,goods_id:5485609870,normal_price:3480,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"买五送五 （带箱9.5-10斤）小果"}],market_price:0,old_group_price:3180,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/e0f9743a-ff62-4ea6-82df-12e747d05d9b.jpg",spec:"1187524627,1622526002",quantity:4395},{is_onsale:1,group_price:1990,sku_id:140588147392,weight:0,goods_id:5485609870,normal_price:2480,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"买三送二（带箱5.0-5.5斤）小果"}],market_price:0,old_group_price:1990,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/a7692613-6d25-4aed-b377-5ebfd0527b3f.jpg",spec:"1187524627,1516408390",quantity:8019},{is_onsale:1,group_price:1480,sku_id:148472647856,weight:0,goods_id:5485609870,normal_price:1990,price:0,limit_quantity:999999,specs:[{spec_key:"款式",spec_value:"超甜红富士"},{spec_key:"重量",spec_value:"买三送二（带箱5.0-5.6斤）小果"}],market_price:0,old_group_price:1480,sold_quantity:0,init_quantity:0,thumb_url:"https://t00img.yangkeduo.com/goods/images/2019-01-20/74a535a6-948e-4e1b-b6bd-b96ddbeff176.jpg",spec:"1187524627,1645237108",quantity:-4}],activity_collection:{},price:{line_price:4680,browser_price_style:2,min_on_sale_normal_price:2480,max_on_sale_normal_price:4580,min_group_price:1480,max_normal_price:4580,min_on_sale_group_price:1990,price_suffix:"起",old_max_group_price:3980,price_style:2,old_max_on_sale_group_price:3980,old_min_on_sale_group_price:1990,max_group_price:3980,browser_price_suffix:"起",min_normal_price:1990,max_on_sale_group_price:3980,old_min_group_price:1480},goods:{image_url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/601ae9c2-e6e2-4a97-ab21-61cf9887c369.jpg",share_desc:"亏本促销活动仅剩3天,1.28号以后快递就全部停止了,需要年货的家人们速下单,",cat_id_1:8172,cat_id:8269,cat_id_2:8182,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:5485609870,price:0,buy_limit:999999,customer_num:1,id:9049805284,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:9049805284,start_time:1451577600},{goods_id:5485609870,price:0,buy_limit:999999,customer_num:2,id:9049805285,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:9049805285,start_time:1451577600}],goods_id:5485609870,goods_desc:"亏本促销活动仅剩3天,1.28号以后快递就全部停止了,需要年货的家人们速下单,",share_title:"19.9元 [冰糖心]新鲜苹果水果脆甜无蜡红富士10斤批发包邮整一箱10斤/5斤 拼多多",warehouse:"",mall_id:752818365,cat_id_3:8269,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"[冰糖心]新鲜苹果水果脆甜无蜡红富士10斤批发包邮整一箱10斤/5斤",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-21/5484d3621c8a8d67c6a5c94af63b348a.jpeg",second_hand:0,goods_property:[{values:["陕西省/渭南市"],key:"产地"},{values:["富士"],key:"水果品种"},{values:["75mm（含）-80mm(不含)"],key:"果径"}],market_price:4680,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-21/f5e5685d3bbe2455a985c1e406d45afa.jpeg",gallery:[{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/1686f501-2d1b-4344-adce-f61115e8e1c7.jpg",height:782,priority:11,width:750,type:2,id:87594553744},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/619bbadc-3f5e-4f71-aa77-7d40cf9d392c.jpg",height:576,priority:10,width:750,type:2,id:87594553743},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/0aab135b-da6b-4944-ab5d-4bb3811ea555.jpg",height:550,priority:9,width:750,type:2,id:84446360066},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/b149873e-5fb5-42e7-ac45-2faa5cd05e82.jpg",height:696,priority:8,width:750,type:2,id:83929278032},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/bdd6fc95-5288-4e00-b53d-5ab73a3ae612.jpg",height:1080,priority:7,width:1118,type:2,id:83929278031},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/78a35c3a-a962-4fd5-b6ea-61f5ea426180.jpg",height:692,priority:6,width:750,type:2,id:83929278030},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/690304f7-0597-4bd8-9e93-5aa183cf7738.jpg",height:759,priority:5,width:750,type:2,id:83929278029},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/544d7d6b-f1d5-409a-83cc-ba3c083e758e.jpg",height:1181,priority:4,width:1080,type:2,id:83929278028},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/98e0a129-4336-42a5-ab69-92813898eb3c.jpg",height:800,priority:3,width:800,type:1,id:83929278027},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-16/5843fc20-f62c-4228-a9b9-acc8c5c19bbf.jpg",height:800,priority:2,width:800,type:1,id:83929278026},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-08/b43fe9d6-a237-4944-aac7-297ad0681f42.jpg",height:800,priority:1,width:800,type:1,id:83922555512},{goods_id:5485609870,url:"https://t00img.yangkeduo.com/goods/images/2019-01-07/ca9c5b62-7993-4323-b59b-b179860a3ee5.jpg",height:800,priority:0,width:800,type:1,id:83922555511}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"5,6,11,16,20,21,23,24,25,31",options:[0,9],is_app:0,side_sales_tip:"已拼2.2万件",global_sold_quantity:0,sold_quantity:22766,event_type:0,app_new:0,country:"",app_client_only:0,quantity:19109},server_time:0},6229:{sku:[{is_onsale:1,group_price:9750,sku_id:118505523912,weight:1688,goods_id:6229,normal_price:11900,price:0,limit_quantity:999,specs:[{spec_key:"款式",spec_value:"外婆的灶台8袋/1340g(年节版)"}],market_price:0,old_group_price:9750,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/317623eebd2db92767481e75f80dbef5.jpeg",spec:"1532952822",quantity:1933}],activity_collection:{},price:{line_price:12900,browser_price_style:0,min_on_sale_normal_price:11900,max_on_sale_normal_price:11900,min_group_price:9750,max_normal_price:11900,min_on_sale_group_price:9750,old_max_group_price:9750,price_style:0,old_max_on_sale_group_price:9750,old_min_on_sale_group_price:9750,max_group_price:9750,min_normal_price:11900,max_on_sale_group_price:9750,old_min_group_price:9750},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-12-17/f258cb2eccad46ca70c70fdce2236f34.jpeg",share_desc:"【百草味-零食大礼包1340g】混合干果坚果礼盒装送礼。中秋、年货干果礼盒装实惠来袭,坚果炒货精心巧搭,成就碰触心灵的美味。让每次相见,留存一份感念。",cat_id_1:6398,cat_id:6419,cat_id_2:6399,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:6229,price:0,buy_limit:9999,customer_num:2,id:19170,is_open:1,end_time:2082729600,order_limit:9999,duration:86400,group_id:19170,start_time:1451577600},{goods_id:6229,price:0,buy_limit:9999,customer_num:1,id:19171,is_open:1,end_time:2082729600,order_limit:9999,duration:86400,group_id:19171,start_time:1451577600}],goods_id:6229,goods_desc:"【百草味-零食大礼包1340g】混合干果坚果礼盒装送礼。中秋、年货干果礼盒装实惠来袭,坚果炒货精心巧搭,成就碰触心灵的美味。让每次相见,留存一份感念。",share_title:"97.5元 【百草味-零食大礼包1340g】坚果混合干果坚果礼盒装春节年货送礼 拼多多",warehouse:"",mall_id:372,cat_id_3:6419,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【百草味-零食大礼包1340g】坚果混合干果坚果礼盒装春节年货送礼",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-21/c524d2edb707c97f821d34a9d973fd5e.jpeg",second_hand:0,goods_property:[{values:["1340g"],key:"净含量"},{values:["礼盒装"],key:"包装方式"},{values:["浙江省/杭州市"],key:"产地"},{values:["含糖"],key:"是否含糖"},{values:["2018-10-24"],key:"生产日期"},{values:["240天"],key:"保质期"},{values:["SC11333019700024"],key:"食品生产许可证编号"}],market_price:12900,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2019-01-21/ceb3dd77b1cf6f9374a04450731402e3.jpeg",gallery:[{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/e9b4aa96-e776-4425-a6b8-16534f50ff8e.jpg",height:664,priority:21,width:750,type:2,id:71098423832},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/8e20b0f7-0035-4c81-8f9c-f2ab71d0eb74.jpg",height:934,priority:20,width:750,type:2,id:71098423831},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/ca3d8bc2-74f2-41af-87ef-c9632c79ad94.jpg",height:510,priority:19,width:790,type:2,id:71098423830},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/0ff0f248-48dc-4486-bd75-cd6feb35a18e.jpg",height:494,priority:18,width:790,type:2,id:71098423829},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/53b706bd-c430-457e-a6a5-6640e47a92fc.jpg",height:512,priority:17,width:790,type:2,id:71098423828},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/2f3afd09-b5c3-4f96-b3e7-1417f351f06e.jpg",height:654,priority:16,width:750,type:2,id:71098423827},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/1270c615-214d-4f57-b873-5faddb3aa3fa.jpg",height:818,priority:15,width:750,type:2,id:71098423826},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/c8f986ef-2a46-4d94-a7c9-1812e733c183.jpg",height:814,priority:14,width:750,type:2,id:70213105423},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/bb48c999-2bf4-4bf3-8930-315165656046.jpg",height:582,priority:13,width:750,type:2,id:67586761496},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/a6cc71c9-4ba8-451e-8a8c-bfd8adb2433a.jpg",height:730,priority:12,width:750,type:2,id:8271908947},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/7927cc32-a75f-4841-a3de-29362ee40230.jpg",height:752,priority:11,width:750,type:2,id:8219336296},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/ff15090e-e35e-48bc-a4db-09d54bf20af6.jpg",height:782,priority:10,width:750,type:2,id:8219336295},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/608b7fbd-a06b-46a1-bf6d-271df590d7e4.jpg",height:706,priority:9,width:750,type:2,id:8219336294},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/a893ec10-451c-4128-9a79-4e94e9128497.jpg",height:642,priority:8,width:750,type:2,id:8219336293},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/c5edf625-f08b-4483-a413-c6a845785335.jpg",height:458,priority:7,width:750,type:2,id:8219336292},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/8fd82721-8da6-4a4b-bd39-98375a7fdbd8.jpg",height:446,priority:6,width:750,type:2,id:8219336291},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2019-01-21/41c9be26-6c96-4cdf-ae2b-b28b60564e41.jpg",height:539,priority:5,width:750,type:2,id:8219336290},{goods_id:6229,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/b730a86028d41a382efe48cd06604578.jpeg",height:800,priority:4,width:800,type:1,id:8219336289},{goods_id:6229,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/e18a8b4059c28ea682f873742f2587ae.jpeg",height:800,priority:3,width:800,type:1,id:8219336288},{goods_id:6229,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/588a0a60dd21ce7a470f0f58bca08b2a.jpeg",height:800,priority:2,width:800,type:1,id:8219336287},{goods_id:6229,url:"http://t00img.yangkeduo.com/goods/images/2018-12-05/0fae8d5eb361a7ec08fc6ee48861ff49.jpeg",height:750,priority:1,width:750,type:1,id:8219336286},{goods_id:6229,url:"https://t00img.yangkeduo.com/goods/images/2019-01-14/9c7ea837-dba5-4c48-9fef-985324a2d415.jpg",height:800,priority:0,width:800,type:1,id:8219336285}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,10,11,13,14,16,22,24,25,27,31,32",options:[0,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:614988,event_type:0,app_new:0,country:"",app_client_only:0,quantity:1933},server_time:0},186065608:{sku:[{is_onsale:1,group_price:4990,sku_id:64106913390,weight:6e3,goods_id:186065608,normal_price:6890,price:0,limit_quantity:999,specs:[{spec_key:"香型",spec_value:"酱香型"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/b7d03c98e1c3390640b6ccc53ce14f89.jpeg",spec:"340420",quantity:67166}],activity_collection:{},price:{line_price:58800,browser_price_style:0,min_on_sale_normal_price:6890,max_on_sale_normal_price:6890,min_group_price:4990,max_normal_price:6890,min_on_sale_group_price:4990,old_max_group_price:4990,price_style:0,old_max_on_sale_group_price:4990,old_min_on_sale_group_price:4990,max_group_price:4990,min_normal_price:6890,max_on_sale_group_price:4990,old_min_group_price:4990},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/cc12cacd40e13ea7bcaf258eb478124e.jpeg",share_desc:"内部接待酒:\n酒厂发货,纯粮食酒,正宗原浆酒,茅台镇纯粮坤沙酒,酒已经窖藏了3年,品质保证。媲美市场上上百元一斤的酒;收到不满意不喜欢我们支持7天无理由退货,破损包赔,",cat_id_1:6758,cat_id:6760,cat_id_2:6759,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:186065608,price:6890,buy_limit:999999,customer_num:1,id:362677644,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:362677644,start_time:1451577600},{goods_id:186065608,price:4990,buy_limit:999999,customer_num:2,id:362677645,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:362677645,start_time:1451577600}],goods_id:186065608,goods_desc:"内部接待酒:\n酒厂发货,纯粮食酒,正宗原浆酒,茅台镇纯粮坤沙酒,酒已经窖藏了3年,品质保证。媲美市场上上百元一斤的酒;收到不满意不喜欢我们支持7天无理由退货,破损包赔,",share_title:"49.9元 【酒厂直销 假一赔十】贵州酱香型纯粮白酒内部接待酒整箱6瓶特价 拼多多",warehouse:"",mall_id:690321,cat_id_3:6760,is_sku_onsale:1,goods_property_type:0,has_promotion:0,goods_name:"【酒厂直销 假一赔十】贵州酱香型纯粮白酒内部接待酒整箱6瓶特价",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/dd34f31077b6e3307c9a1787dbbaad30.jpeg",second_hand:0,goods_property:[{values:["贵州省"],key:"省份"},{values:["贵阳市"],key:"城市"},{values:["酱香型"],key:"香型"},{values:["53%vol."],key:"酒精度数"},{values:["箱装"],key:"包装方式"},{values:["3年"],key:"年份"},{values:["否"],key:"是否为有机食品"},{values:["2018-08-03"],key:"生产日期"},{values:["999999天"],key:"保质期"},{values:["SC11552032110418"],key:"食品生产许可证编号"},{values:["Q/MJ0001S-2018"],key:"产品标准号"}],market_price:58800,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/6d7aa7be597599309903801cb548dee6.jpeg",gallery:[{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/b6f2a5bcf63a2502c0c3353838cae7c2.jpeg",height:387,priority:27,width:750,type:2,id:88818978259},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/8964ec936818621ccfbb3609f4344da3.jpeg",height:865,priority:26,width:750,type:2,id:88818978258},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/be478434da3a67fa6e55c254b1f14c89.jpeg",height:643,priority:25,width:750,type:2,id:75282655981},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/ea818b5ab1207df40508454d3d0a1af0.jpeg",height:1111,priority:24,width:750,type:2,id:37049163266},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/225a94f802a03a33c6524f2ef229bd5d.jpeg",height:1214,priority:23,width:750,type:2,id:8164935994},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/564abcc798b0e758f7e4b0f8d034e5ef.jpeg",height:1040,priority:22,width:750,type:2,id:8164935993},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/113253bd3e84f912cb704e4564a8073a.jpeg",height:781,priority:21,width:750,type:2,id:8164935992},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/bea9219a9b88970c818e95c23c68c810.jpeg",height:592,priority:20,width:750,type:2,id:8164935991},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/59809abe5401149101717a6f582cc573.jpeg",height:737,priority:19,width:750,type:2,id:8164935990},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/b432097cf2d3070dc86ab611c7f3b8b1.jpeg",height:752,priority:18,width:750,type:2,id:8164935989},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/cb781223b8382d8962091cecc1379c2d.jpeg",height:722,priority:17,width:750,type:2,id:8164935988},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/df16fee97a92ae6f17592c3a90060cf6.jpeg",height:676,priority:16,width:750,type:2,id:8164935987},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/5529ae45e9ed15aeb91c233e49bb31a0.jpeg",height:825,priority:15,width:750,type:2,id:8164935986},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/f09de26e4f1f6a743716ff8a8cb24eba.jpeg",height:869,priority:14,width:750,type:2,id:8164935985},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/f679ba523d7594d84769f7155b91b9ef.jpeg",height:901,priority:13,width:750,type:2,id:8164935984},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/68e2db525f353cd8437359763849bb84.jpeg",height:1237,priority:12,width:750,type:2,id:8164935983},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/db9a98677b600d0babe370eb0d4b1ff7.jpeg",height:683,priority:11,width:750,type:2,id:8164935982},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/60e888d6c4f507438832f12f1ae19b8e.jpeg",height:788,priority:10,width:750,type:2,id:8164935981},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/ddf876d4353e10472218a9e09c09320e.jpeg",height:741,priority:9,width:750,type:2,id:8164935980},{goods_id:186065608,url:"https://t00img.yangkeduo.com/goods/images/2019-01-24/3a13dc55-c08d-49bd-8bf7-7dfa7909d2d2.jpg",height:618,priority:8,width:750,type:2,id:8164935979},{goods_id:186065608,url:"https://t00img.yangkeduo.com/goods/images/2019-01-24/038ef1ad-b3b4-45af-8e11-14b4bf3001e0.jpg",height:800,priority:7,width:800,type:1,id:8164935978},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/dc01e75700622b2925cc6b7e00c05a70.jpeg",height:800,priority:6,width:800,type:1,id:8164935977},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/f1a037e25a376ea3a2dfecddafe74cf7.jpeg",height:800,priority:5,width:800,type:1,id:8164935976},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/05984e6e31d833be94571182a592e620.jpeg",height:800,priority:4,width:800,type:1,id:8164935975},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-11-20/4519d4335bdb79bb7daf47bf3816fb68.jpeg",height:800,priority:3,width:800,type:1,id:8164935974},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/473b4ceee9a761b2df063b9a4a9dc96b.jpeg",height:800,priority:2,width:800,type:1,id:8164935973},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/2b8a145b689bcb936aa8d3c9ef9a1f68.jpeg",height:800,priority:1,width:800,type:1,id:8164935972},{goods_id:186065608,url:"http://t00img.yangkeduo.com/goods/images/2018-12-14/c6e532463e9b55716d05ed89e4d6a012.jpeg",height:800,priority:0,width:800,type:1,id:8164935971}],is_onsale:1,open_in_festival:0,has_activity:0,allowed_region:"2,3,4,6,7,8,10,11,13,14,16,17,22,23,24,25,26,27,30,31,32",options:[0,9,13],is_app:0,side_sales_tip:"已拼10万+件",global_sold_quantity:0,sold_quantity:114009,event_type:0,app_new:0,country:"",app_client_only:0,quantity:67166},server_time:0},5022879566:{sku:[{is_onsale:1,group_price:1390,sku_id:127302895545,weight:0,goods_id:5022879566,normal_price:1690,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"1斤巧克力组合"}],market_price:0,old_group_price:1390,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/28b4d5c977709fb62c313c98c2d0db93.jpeg",spec:"1565437981",quantity:28032},{is_onsale:1,group_price:2390,sku_id:127302895546,weight:0,goods_id:5022879566,normal_price:2690,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"2斤袋装"}],market_price:0,old_group_price:2390,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/379a2f0f49baddfd770623caa2d33874.jpeg",spec:"9680089",quantity:27742},{is_onsale:1,group_price:3390,sku_id:127302895547,weight:0,goods_id:5022879566,normal_price:3490,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"3斤礼袋装"}],market_price:0,old_group_price:3390,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/bbd50a7b4a8d2d11b6daf98ad83e9c2a.jpeg",spec:"221272181",quantity:31923},{is_onsale:1,group_price:4990,sku_id:127301396486,weight:0,goods_id:5022879566,normal_price:5090,price:0,limit_quantity:999,specs:[{spec_key:"重量",spec_value:"5斤实惠装"}],market_price:0,old_group_price:4990,sold_quantity:0,init_quantity:0,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/e0f1c47f7ad6ae73a3c7a7aa7b2c1650.jpeg",spec:"15007020",quantity:29887}],activity_collection:{},price:{line_price:5190,browser_price_style:2,min_on_sale_normal_price:1690,max_on_sale_normal_price:5090,min_group_price:1390,max_normal_price:5090,min_on_sale_group_price:1390,price_suffix:"起",old_max_group_price:4990,price_style:2,old_max_on_sale_group_price:4990,old_min_on_sale_group_price:1390,max_group_price:4990,browser_price_suffix:"起",min_normal_price:1690,max_on_sale_group_price:4990,old_min_group_price:1390},goods:{image_url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/3d303c6938a8694bcfede80a9105e7da.jpeg",share_desc:"巧克力实惠装组合几十余款不同包装的巧克力精心挑选种类较多随机发货物美价廉拼单优先发货",cat_id_1:6398,cat_id:6532,cat_id_2:6522,cat_id_4:0,is_pre_sale:0,rv_image:1,goods_type:1,rv:1,group:[{goods_id:5022879566,price:0,buy_limit:999999,customer_num:1,id:8211601914,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:8211601914,start_time:1451577600},{goods_id:5022879566,price:0,buy_limit:999999,customer_num:2,id:8211601915,is_open:1,end_time:2082729600,order_limit:999999,duration:86400,group_id:8211601915,start_time:1451577600}],goods_id:5022879566,goods_desc:"巧克力实惠装组合几十余款不同包装的巧克力精心挑选种类较多随机发货物美价廉拼单优先发货",share_title:"13.9元 年货大促销巧克力混装实惠5斤1斤多口味混合结婚喜糖批发便宜零食 拼多多",warehouse:"",mall_id:207992808,cat_id_3:6532,is_sku_onsale:1,goods_property_type:0,has_promotion:1,goods_name:"年货大促销巧克力混装实惠5斤1斤多口味混合结婚喜糖批发便宜零食",hd_thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-28/86365f077a769438932d6c5e6a608bb7.jpeg",second_hand:0,goods_property:[{values:["中国大陆"],key:"原产地"},{values:["500g"],key:"净含量"},{values:["是"],key:"是否含代可可脂"},{values:["否"],key:"是否含可可"},{values:["其它"],key:"形状"},{values:["含糖"],key:"是否含糖"},{values:["散装"],key:"包装方式"},{values:["2019-01-01"],key:"生产日期"},{values:["365天"],key:"保质期"},{values:["sc11133048101127"],key:"食品生产许可证编号"},{values:["GB/T19343"],key:"产品标准号"}],market_price:5190,is_mall_dsr:1,thumb_url:"http://t00img.yangkeduo.com/goods/images/2018-12-28/a061308162fbe81cc9683ab66e701499.jpeg",gallery:[{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/ce570887c47f64f6d76eb433b3c80681.jpeg",height:953,priority:22,width:790,type:2,id:79560593855},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/2082aceea973a9ec804607b70211a176.jpeg",height:468,priority:21,width:790,type:2,id:76199692461},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/57a0cea13b26af295126c0f3e2e5f177.jpeg",height:541,priority:20,width:790,type:2,id:76199692460},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/38feb572db042fda209e29b14d2e45c3.jpeg",height:532,priority:19,width:790,type:2,id:76199692459},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/664f073fb99a75ce9d65ee4adfa57eb3.jpeg",height:523,priority:18,width:790,type:2,id:76199692458},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/0b9d94c9ccf2d30c88750ba717a3c3c1.jpeg",height:523,priority:17,width:790,type:2,id:76199692457},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/ffe8134ddbe6bb1e856063791ec9c620.jpeg",height:696,priority:16,width:790,type:2,id:76199692456},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/72fe2e9f9ed8d794a2fb9db7bdef4e6f.jpeg",height:403,priority:15,width:790,type:2,id:76199692455},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/026ff36f304013e7cd381bdc5929f0fd.jpeg",height:407,priority:14,width:790,type:2,id:76199692454},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/0d2257ac2b96771852f1ff5641b387cd.jpeg",height:394,priority:13,width:790,type:2,id:76199692453},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/d8ba6fec2186cbbf3d8de42bde9e1672.jpeg",height:573,priority:12,width:790,type:2,id:76199692452},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/f668cc2bc36a875d39c6b2f0f7151584.jpeg",height:816,priority:11,width:790,type:2,id:76199692451},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/409132cf40684d00ccc33e151ab260e1.jpeg",height:816,priority:10,width:790,type:2,id:76199692450},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/30f067bf684382cd3f7927e3b172381a.jpeg",height:269,priority:9,width:790,type:2,id:76199692449},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/ac8ad651feb05c452c04a5e1d707d025.jpeg",height:730,priority:8,width:790,type:2,id:76199692448},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/11e787456c1f99b7e7c933c6e19401c5.jpeg",height:192,priority:7,width:790,type:2,id:76199692447},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/11aa4fa4dd4046fd404f1516acb721b4.jpeg",height:886,priority:6,width:790,type:2,id:76199692446},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/a36a23d602ed6d4e43237eb299920f1c.jpeg",height:800,priority:5,width:800,type:1,id:76199692445},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-25/4b0cc2fda17968eefb91011da8ed5af6.jpeg",height:800,priority:4,width:800,type:1,id:76199692444},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/4b12ee2df30dc39161c9678b3c89a1c1.jpeg",height:800,priority:3,width:800,type:1,id:76199692443},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/0552c88d51196e00ebb1889f0885d638.jpeg",height:800,priority:2,width:800,type:1,id:76199692442},{goods_id:5022879566,url:"http://t00img.yangkeduo.com/goods/images/2018-12-18/fc9be9aff97de835156f6fc74e0e9267.jpeg",height:800,priority:1,width:800,type:1,id:76199692441},{goods_id:5022879566,url:"https://t00img.yangkeduo.com/goods/images/2018-12-28/011944cf-057d-4e35-9c81-6ceb55218a73.jpg",height:800,priority:0,width:800,type:1,id:76199692440}],is_onsale:1,open_in_festival:0,has_activity:1,allowed_region:"2,3,4,6,8,10,11,13,14,16,17,22,23,24,25,26,27,31,32",options:[0,19,7,9,13],is_app:0,side_sales_tip:"已拼2.1万件",global_sold_quantity:0,sold_quantity:21676,event_type:0,app_new:0,country:"",app_client_only:0,quantity:117584},server_time:0}};exports.default=i; 
 			}); 
		define("package_c/group/group.actions.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function o(n,a){try{var u=r[n](a),s=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.didClickTimelime=exports.setGroupRecieveData=exports.loadGroupGoodsList=exports.getScaleShareImage=exports.loadGroupPage=void 0;var t=e(require("../../libs/regenerator-runtime/runtime")),o=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("../../actions/common")),n=require("../../common/index"),a=require("../../common/message"),u=e(require("../../common/request/api")),s=e(require("../../configs/api")),i=e(require("../../common/logger")),c=e(require("../../common/visitor_logger")),p=e(require("../../constants/groups")),d=e(require("../../controller/config_controller")),_=e(require("../../storage/ram_manager")),f={getGroupOrderDetail:"10045",localGroup:"10347",operationGroups:"10037",homeOperations:"10074",recommendation:"10170",getTimeLine:"10443",cancelTimeLine:"10444",deleteTimeLine:"10445"},l=function(e){e(o.hideLoading()),e({type:"GROUP_SHOW_ERROR"}),e(o.showToast("NO_NETWORK_MSG"))},g=function(){var e=r(t.default.mark(function e(r){var o;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Request.runRequest(n.Request.requestDataWithCmd(10170,{params:r}));case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}},e,void 0)}));return function(r){return e.apply(this,arguments)}}(),E=function(){var e=r(t.default.mark(function e(r,o){var u,s,i,c,p,d;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=o("group.recommendParam"),!(s=o("group.showSuccessView"))){e.next=10;break}return e.next=6,g(Object.assign({},u,{offset:0}));case 6:i=e.sent,r({type:"RECEIVE_GROUP_FIRST_RECOMMEND_GOODS_SUCCESS",res:i}),e.next=19;break;case 10:return c=n.Request.requestDataWithCmd(f.homeOperations,{}),e.next=13,n.Request.runRequest(c);case 13:return p=e.sent,r({type:"RECIEVE_HOME_OPERATIONS_DATA",data:p,callback:function(){var e=o("group.tabStatus");r({type:"INIT_SEGMENT",config:{alignType:"ALIGN-GAP",gap:29,scrollLeftGap:116,pageName:"group",fixed:!1},tabs:e.map(function(e){return{title:e.opt_name}})})}}),e.next=17,g(Object.assign({},u,{offset:0}));case 17:d=e.sent,r({type:"RECEIVE_GROUP_FIRST_RECOMMEND_GOODS_SUCCESS",res:d,callback:function(){a.Message.emit("SEGMENT_VAL_CHANGE")}});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0);case 24:case"end":return e.stop()}},e,void 0,[[0,21]])}));return function(r,t){return e.apply(this,arguments)}}(),R=function(){var e=r(t.default.mark(function e(){var r,o,a,u,c,d,g,R,m,v,x,G,h,O,I,q,C=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments[1],T=arguments[2];return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.User.hasLogin(),o=T("group.isFirstEnter"),a=C.group_order_id,u=void 0,e.prev=4,!r){e.next=12;break}return c=n.Request.requestDataWithCmd(f.getGroupOrderDetail,{params:{need_white:!0,page_sn:10024,new_version:!0},restfulParam:a}),e.next=9,n.Request.runRequest(c);case 9:u=e.sent,e.next=15;break;case 12:return e.next=14,n.Request.apiRequest("GET","api/piece/unlogin/group_order",{group_order_id:a});case 14:u=e.sent;case 15:if(!u||""+(u.group_order_info||{}).group_order_id==""+a){e.next=18;break}return b(l),e.abrupt("return",void 0);case 18:if(u&&b({type:"RECIEVE_GROUP_ORDER_NO_ACCESS_DATA",result:u}),!o&&!C.reload){e.next=22;break}return e.next=22,E(b,T);case 22:e.next=29;break;case 24:e.prev=24,e.t0=e.catch(4),console.error(e.t0),i.default.sendDeadlyError({bussiness_type:"interface",action:"get_group",url_path:r?"group_order/{0}":"api/piece/unlogin/group_order",error_code:e.t0.error_code,error_msg:e.t0.error_msg}),b(l);case 29:if(u&&u.group_order_info){e.next=31;break}return e.abrupt("return",void 0);case 31:if(d=u.self_order_info||null,g=u.goods_info,R=u.group_order_info,m=u.leader_order_info||{},!(u&&R&&g)){e.next=55;break}if(v=void 0,v=d?d.uid===m.uid?p.default.GroupRole.Lead:p.default.GroupRole.Member:p.default.GroupRole.NotInGroup,-1!==[1,3,7].indexOf(g.event_type)){e.next=55;break}if(x=parseInt(R.group_status,10),G=void 0,x===p.default.GroupStatus.Success?G=v<=p.default.GroupRole.NotInGroup&&1===parseInt(g.is_onsale,10):x===p.default.GroupStatus.Failed&&(G=1===parseInt(g.is_onsale,10)),!r||!G){e.next=54;break}return e.prev=43,h=n.Request.requestDataWithCmd(f.localGroup,{restfulParam:g.goods_id}),e.next=47,n.Request.runRequest(h);case 47:O=e.sent,b({type:"RECIEVE_LOCAL_GROUP_DATA",customerNum:R.customer_num,goodsInfo:g,data:O}),e.next=54;break;case 51:e.prev=51,e.t1=e.catch(43),console.error(e.t1);case 54:r&&d&&(d.pay_time>=n.TimeUtil.getOneDayTimeValue(2018,6,4)&&(I={group_order_id:(R||{}).group_order_id||"",goods_id:(g||{}).goods_id||"",event_type:(g||{}).event_type||""},q=n.Request.requestDataWithCmd(f.getTimeLine,{params:I}),n.Request.runRequest(q).then(function(e){b({type:"RECIEVE_GROUP_TIMELINE_DATA",data:e})}).catch(function(e){console.error(e)})),(_.default.configStartup||{}).dd_zone_cancel&&n.Request.apiRequest("GET",s.default.getZoneGroup,{group_order_id:a,goods_id:g.goods_id},!1,{forceUseApiGZ:!0,needGZToken:!0}).then(function(e){e&&e.data&&b({type:"RECIEVE_GROUP_ZONEDETAIL_DATA",zoneInfo:e.data,groupOrderId:a,goodsId:g.goods_id})}).catch(function(e){console.error(e)}));case 55:return e.abrupt("return",u);case 56:case"end":return e.stop()}},e,void 0,[[4,24],[43,51]])}));return function(){return e.apply(this,arguments)}}(),m=(exports.loadGroupPage=function(e){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],p=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var f=r(t.default.mark(function r(f,g){var E,m,v;return t.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0!==e&&e){r.next=3;break}return f(l),r.abrupt("return",void 0);case 3:return E=g("group.isFirstEnter"),c&&f({type:"RELOAD_GROUP_PAGE"}),(E||c)&&f(o.showLoading()),m=g("group.isAccessDowngrade"),r.next=9,d.default.getConfig("group_access");case 9:if(!(v=r.sent)||m){r.next=12;break}return r.abrupt("return",new Promise(function(r){var t={group_order_id:e,from_local_groups:0,logged_in:n.User.hasLogin()?1:0};if((_.default.configStartup.vtx_use_gz_socket?n.Request.request(u.default.getGroupComposeHomeInfo,{params:t}):n.Request.apiRequest("POST",s.default.getGroupComposeHomeInfo,t,!0,{forceUseApiGZ:!0,needGZToken:!0})).then(function(t){t&&t.data&&t.data.group_detail&&!t.data.group_detail.error_code&&t.data.group_detail.group_order_info?(f({type:"RECIEVE_GROUP_DETAIL",isReload:c,result:t.data,callback:function(){a.Message.emit("SEGMENT_VAL_CHANGE")}}),r(t.data.group_detail)):(f({type:"RECIEVE_GROUP_DATA",data:{isAccessDowngrade:!0}}),r(R({group_order_id:e,reload:c,isOnshow:p,isDowngrade:!0},f,g)))}).catch(function(t){console.error(t),i.default.sendDeadlyError({bussiness_type:"interface",action:"get_group",url_path:"compose/group/homepage",error_code:t.error_code,error_msg:t.error_msg}),f({type:"RECIEVE_GROUP_DATA",data:{isAccessDowngrade:!0}}),r(R({group_order_id:e,reload:c,isOnshow:p,isDowngrade:!0},f,g))}),!p){var o=g("group.listId");f({type:"RECIEVE_GROUP_DATA",data:{isLoadFirstRequest:!0}});(_.default.configStartup.vtx_use_gz_socket?n.Request.request(u.default.getGroupComposeRecommendation,{params:{logged_in:n.User.hasLogin()?1:0,group_order_id:e,list_id:o}}):n.Request.apiRequest("POST",s.default.getGroupComposeRecommendation,{logged_in:n.User.hasLogin()?1:0,group_order_id:e,list_id:o},!0,{forceUseApiGZ:!0})).then(function(e){e&&e.success&&e.data&&f({type:"RECEIVE_GROUP_FIRST_RECOMMEND_GOODS_SUCCESS",res:e.data}),f({type:"RECIEVE_GROUP_DATA",data:{isLoadFirstRequest:!1}})}).catch(function(e){f({type:"RECIEVE_GROUP_DATA",data:{isLoadFirstRequest:!1}}),console.error(e)})}}));case 12:return r.abrupt("return",R({group_order_id:e,reload:c,isOnshow:p},f,g));case 13:case"end":return r.stop()}},r,void 0)}));return function(e,r){return f.apply(this,arguments)}}()},function(e){d.default.getConfig("two_jump").then(function(r){e({type:"RECIEVE_GROUP_DATA",data:{hasRedirectUrl:!!r}})})}),v=(exports.getScaleShareImage=function(e){return function(){var o=r(t.default.mark(function r(o,a){var i,p,d,f;return t.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o(m),i=c.default.getVisitorLocalInfo(),p=a("group.hasLogin"),r.prev=3,d=void 0,d=_.default.configStartup.vtx_use_gz_socket?n.Request.request(u.default.getGroupComposeShare,{params:{group_order_id:e,logged_in:p?1:0,xcx_trace_id:i&&i.xcxTraceId}}):n.Request.apiRequest("POST",s.default.getGroupComposeShare,{group_order_id:e,logged_in:p?1:0,xcx_trace_id:i&&i.xcxTraceId},!0,{forceUseApiGZ:!0,needGZToken:!0}),r.next=8,d;case 8:(f=r.sent)&&f.success&&!f.error_code&&(f.data||{}).shareInfo&&o({type:"RECEIVE_GROUP_SHARE_INFO",res:f.data}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),console.error(r.t0);case 15:case"end":return r.stop()}},r,void 0,[[3,12]])}));return function(e,r){return o.apply(this,arguments)}}()},function(){var e=r(t.default.mark(function e(r){var o;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.optId){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,n.Request.runRequest(n.Request.requestDataWithCmd(10037,{params:{opt_type:1,offset:r.offset,size:r.size?r.size:20,sort_type:"DEFAULT"},restfulParam:r.optId,opts:{verifyTokenHeader:!0}}));case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}},e,void 0)}));return function(r){return e.apply(this,arguments)}}());exports.loadGroupGoodsList=function(e,o){return function(){var n=r(t.default.mark(function r(n,a){var u,s,i,c,p,d,_,f,l,E,R;return t.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(u=e,void 0===e&&(u=a("group.curTabIndex")),s=[],o||(s=a("group.groupGoodsList")),i=a("group.tabStatus"),c=a("group.cacheTabList"),p=c[u]||[],!((d=p.length-s.length)>10)){r.next=12;break}n({type:"FILL_CACHELIST_INTO_PAGE",index:u}),r.next=28;break;case 12:if(0!==parseInt(u,10)){r.next=21;break}return _=a("group.recommendParam"),f=i[0].page,r.next=17,g(Object.assign({},_,{offset:20*f}));case 17:l=r.sent,n({type:"RECEIVE_GROUP_RECOMMEND_GOODS_SUCCESS",res:l}),r.next=28;break;case 21:if(!(E=i[u])){r.next=28;break}return E.page<=0&&(E.page=1),r.next=26,v({offset:20*(E.page-1),optId:E.opt_id});case 26:R=r.sent,n({type:"RECEIVE_GROUP_TAB_GOODS_SUCCESS",current:u,res:R});case 28:case"end":return r.stop()}},r,void 0)}));return function(e,r){return n.apply(this,arguments)}}()},exports.setGroupRecieveData=function(e){return{type:"RECIEVE_GROUP_DATA",data:e}},exports.didClickTimelime=function(e){return function(){var o=r(t.default.mark(function r(o,a){var u,s,i,c,p;return t.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(u=void 0,1!==parseInt(e,10)){r.next=5;break}u=f.cancelTimeLine,r.next=10;break;case 5:if(3!==parseInt(e,10)){r.next=9;break}u=f.deleteTimeLine,r.next=10;break;case 9:return r.abrupt("return",void 0);case 10:return s=a("group.groupOrderId"),r.prev=11,i={group_order_id:s},c=n.Request.requestDataWithCmd(u,{params:i}),r.next=16,n.Request.runRequest(c);case 16:return p=r.sent,o({type:"MANAGE_TIMELINE_DATA",res:p,status:e}),r.abrupt("return",p);case 21:return r.prev=21,r.t0=r.catch(11),console.error(r.t0),r.abrupt("return",void 0);case 25:case"end":return r.stop()}},r,void 0,[[11,21]])}));return function(e,r){return o.apply(this,arguments)}}()}; 
 			}); 
		define("package_c/group/group.reducer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},r=require("../../store/helpers"),o=e(require("../../common/user")),a=e(require("../../common/data_util")),s=e(require("../../common/object_util")),i=e(require("../../storage/user_storage")),n=e(require("../../storage/ram_manager")),u=e(require("./models/group_proxy")),d=e(require("../../constants/groups")),l=e(require("./models/group_format")),p=(0,r.createInitialState)({isAccessDowngrade:(0,r.PropTypes)({default:!1,withoutRender:!0,private:!0}),groupOrderId:(0,r.PropTypes)({default:"",withoutRender:!0,private:!0}),showError:!1,displayLoadMore:!1,showMainPage:!1,hasLogin:o.default.hasLogin(),userId:(0,r.PropTypes)({default:i.default.getUserId()||"",withoutRender:!0,private:!0}),showPaySuccessStyle:!1,showSuccessView:!1,showNormalView:!1,showOvershadow:!1,newUserAlertVisible:!1,isNewUser:(0,r.PropTypes)({default:!1,withoutRender:!0}),groupStatus:0,groupRole:0,collageData:{},timeLine:{},zoneInfo:{},bizTagInfo:{},goodsInfo:{},localGroups:[],skuData:{},hasSkuSelector:(0,r.PropTypes)({default:0,withoutRender:!0,private:!0}),tabStatus:[{optId:-1,page:1,canLoadMore:!0,showError:!1}],groupGoodsList:[],cacheTabList:(0,r.PropTypes)({default:[],withoutRender:!0,private:!0}),curTabIndex:0,mallInfo:{},mallFullBackInfo:{},platformFullBack:{},monthCard:{},listId:(0,r.PropTypes)({default:"",withoutRender:!0,private:!0}),recommendParam:(0,r.PropTypes)({default:{},withoutRender:!0,private:!0}),isLoadFirstRequest:(0,r.PropTypes)({default:!1,withoutRender:!0,private:!0}),commonParams:(0,r.PropTypes)({default:{},withoutRender:!0,private:!0}),isFirstEnter:(0,r.PropTypes)({default:!0,withoutRender:!0,private:!0}),shareInfo:(0,r.PropTypes)({default:{},withoutRender:!0,private:!0}),omsShare:(0,r.PropTypes)({default:{},withoutRender:!0,private:!0}),shareBtnIdx:(0,r.PropTypes)({default:0,withoutRender:!0,private:!0}),hasRedirectUrl:(0,r.PropTypes)({default:!1,withoutRender:!0,private:!0}),serverTime:(0,r.PropTypes)({default:"",withoutRender:!0,private:!0}),expireTime:0,userInfo:{},groupInfo:{},buttonInfo:{}}),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.goods_info||{},o=e.self_order_info||null,a=e.leader_order_info||{},i=e.group_order_info||{},u=parseInt(i.group_status,10);n.default.isLastGroupNotEnough=!1;var p={},c=void 0;c=o?o.uid===a.uid?d.default.GroupRole.Lead:d.default.GroupRole.Member:d.default.GroupRole.NotInGroup;var g={};switch(u){case d.default.GroupStatus.OnGoing:c>d.default.GroupRole.NotInGroup?(n.default.isLastGroupNotEnough=!0,g=l.default.formatMemberGoing(e),p.showOvershadow=!!t):(g=l.default.formatGroupNormal(e),p.showNormalView=!0);break;case d.default.GroupStatus.Success:c>d.default.GroupRole.NotInGroup?(p.showSuccessView=!0,g=l.default.formatMemberSuccess(e)):(p.showNormalView=!0,g=l.default.formatGroupNormal(e));break;case d.default.GroupStatus.Failed:p.showNormalView=!0,g=l.default.formatGroupNormal(e)}return!p.showSuccessView&&(1!==r.is_onsale||r.quantity<=0)&&(p.groupInfo={showSoldOutStyle:!0,isLotteryOrFreeTrial:1===r.event_type||7===r.event_type},p.showOvershadow&&(p.showOvershadow=!1),g={}),e.is_new_buyer&&(p.isNewUser=!0),p.showMainPage=!0,p.groupRole=c,p.groupStatus=u,p.userInfo=l.default.groupUsersFormat(e),p.commonParams={page_name:"group_detail",page_sn:"10024",group_status:u,group_role:c,new_user:e.is_new_buyer,sold_out:1!==r.is_onsale||r.quantity<=0,group_order_id:i.group_order_id||"",has_audio:e.resource_file&&e.resource_file.url?1:0,goods_id:r.goods_id||"",event_type:r.event_type,goods_price:r.goods_price,goods_type:r.goods_type,activity_type:r.activity_type||0},p.recommendParam={goods_id:r.goodsId,group_order_id:i.groupOrderId,referrer:"group_order",page_type:0,count:20,list_id:"",group_role:c,group_status:u},s.default.assign({},p,g)},g=function(e,t){if(e&&e.length>0){var r=[];return[{opt_name:"推荐",opt_id:-1,children:[]}].concat(e).forEach(function(e,o){t[o]||(t[o]={}),t[o].opt_name=e.opt_name,t[o].opt_id=e.opt_id,t[o].page=1,t[o].canLoadMore=!0,t[o].showError=!1,r[o]=[]}),{cacheTabList:r,tabStatus:t}}return null},_=function(e,t){if(!e||e.length<=0)return[];var r=[d.default.EventType.LUCKY_DRAW,d.default.EventType.FREE_TRIAL],o=[];return e.forEach(function(e){if(-1===r.indexOf(parseInt(e.event_type,10))&&1!==parseInt(e.is_app,10)){var a=u.default.formatRecommendGoodsData(e);a.tabKey=""+t,a.transData={goodsId:a.goodsId,eventType:a.eventType,preGroupPrice:a.preGroupPrice,preSinglePrice:a.preSinglePrice,preMarketPrice:a.preMarketPrice,goodsName:a.goodsName},a.ad&&(a.transData.ad=a.ad),a.p_rec&&(a.transData.p_rec=a.p_rec),a.p_search&&(a.transData.p_search=a.p_search),o.push(a)}}),o},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).needFilter||[],r={};return Object.keys(e).filter(function(r){return-1===t.indexOf(r)&&null!=e[r]}).forEach(function(t){r[t]=e[t]}),r},h=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return f(e)})};exports.default=(0,r.createReducer)(p,function(e,r,p){switch(r.type){case"INIT_GROUP_DATA":var m=r.opts,v={},I=m&&(m.group_order_id||m.g)||"";return I&&(v.groupOrderId=I),m&&"pay_success"===m.from&&(v.showPaySuccessStyle=!0),m&&parseInt(m.biz_tag,10)>=0&&(v.bizTagInfo={},v.bizTagInfo.bizTag=parseInt(m.biz_tag,10)),s.default.assign({listId:"xcx_group_detail_rec_list_"+a.default.getRandomString(6),userId:i.default.getUserId()||"",hasLogin:o.default.hasLogin()},v);case"GROUP_SHOW_ERROR":return{showError:!0};case"RELOAD_GROUP_PAGE":return{listId:"xcx_group_detail_rec_list_"+a.default.getRandomString(6),showError:!1};case"RECIEVE_GROUP_DETAIL":var T=r.result,S=r.isReload,y=p("isFirstEnter"),E=T.group_detail,O=E.goods_info||{},R=E.group_order_info||{},b=c(E,y),w=T.home_operations||[];if(w&&w.length>0){var L=JSON.parse(JSON.stringify(p("tabStatus")));if(y||S){var G=u.default.getHomeOperations(w,L);G&&(b.cacheTabList=G.cacheTabList,b.tabStatus=G.tabStatus)}}var P=T.time_line||{};if(P.is_open_timeline){var N=u.default.getTimeline(P);N&&(b.timeLine=N)}T.zone_info&&(n.default.configStartup||{}).dd_zone_cancel&&(b.zoneInfo=t({},u.default.getZoneInfo(T.zone_info),{groupOrderId:R.group_order_id,goodsId:O.goods_id}));var A=p("bizTagInfo");if(A&&A.bizTag>=0){var D=u.default.getActivityBizTagInfo(A.bizTag);D.isShowActivity&&(b.bizTagInfo={isShowActivity:!0,activityTitle:D.activityTitle,bizTag:A.bizTag})}var z=T.local_groups||[];return b.groupRole<=d.default.GroupRole.NotInGroup&&z&&z.local_group&&1===O.is_onsale&&R.customer_num>1&&(b.localGroups=l.default.getLocalGroups(z,O,R.customer_num)),b.recommendParam&&(b.recommendParam.listId=p("listId")),b;case"RECIEVE_GROUP_ORDER_NO_ACCESS_DATA":var C=r.result,U=p("isFirstEnter"),M=p("bizTagInfo"),k=c(C,U);if(M&&M.bizTag>=0){var V=u.default.getActivityBizTagInfo(M.bizTag);V.isShowActivity&&(k.bizTagInfo={isShowActivity:!0,activityTitle:V.activityTitle,bizTag:M.bizTag})}return k.recommendParam&&(k.recommendParam.listId=p("listId")),k;case"RECIEVE_LOCAL_GROUP_DATA":var J=r.data,F=r.goodsInfo,x=r.customerNum;return{localGroups:l.default.getLocalGroups(J,F,x)};case"RECIEVE_GROUP_TIMELINE_DATA":var q=r.data,j=u.default.getTimeline(q);return j?{timeLine:j}:{};case"RECIEVE_GROUP_ZONEDETAIL_DATA":return{zoneInfo:t({},u.default.getZoneInfo(r.zoneInfo),{groupOrderId:r.groupOrderId,goodsId:r.goodsId})};case"RECIEVE_HOME_OPERATIONS_DATA":var B=r.data;if(B&&B.length>0){var H=JSON.parse(JSON.stringify(p("tabStatus"))),K=g(B,H);if(K)return{cacheTabList:K.cacheTabList,tabStatus:K.tabStatus}}return{};case"RECEIVE_GROUP_SHARE_INFO":if(r.res&&r.res.shareInfo){var Z=r.res.shareInfo,W={shareTitle:Object.assign({},p("shareInfo")).shareTitle||""};return Z.image_url&&(W.shareImageUrl=Z.image_url,W.useShareImage=Z.share_type||""),{omsShare:Z.oms_keys,shareInfo:W}}return{};case"MANAGE_TIMELINE_DATA":var Y=r.res;if(Y&&Y.is_success){var Q=Object.assign({},p("timeLine")),X=void 0,$=void 0,ee=parseInt(r.status,10);return 1===ee?(X="已取消发布到拼小圈",$=2):3===ee&&(X="已在拼小圈中删除该动态",$=4),Q.timeLineDescSub="",Q.timeLineDesc=X,Q.timeLinestatus=$,{timeLine:Q}}return{};case"RECEIVE_GROUP_FIRST_RECOMMEND_GOODS_SUCCESS":var te=r.res,re={},oe=JSON.parse(JSON.stringify(p("cacheTabList")));if(oe&&oe[0]||(oe[0]=[]),te.list&&te.list.length>0){var ae=oe[0]||[],se=_(te.list,0);ae=ae.concat(se),oe[0]=ae,ae.length%2!=0?re.groupGoodsList=ae.slice(0,ae.length-1):re.groupGoodsList=ae,re.cacheTabList=oe}return re;case"RECEIVE_GROUP_RECOMMEND_GOODS_SUCCESS":var ie=r.res,ne={},ue=JSON.parse(JSON.stringify(p("tabStatus")||[])),de=JSON.parse(JSON.stringify(p("cacheTabList")));if(de&&de[0]||(de[0]=[]),ie.has_more||(ue[0].canLoadMore=!1),ie.list&&ie.list.length>0){var le=de[0]||[],pe=ue[0].page,ce=_(ie.list,0);le=le.concat(ce),ue[0].page=pe+1,de[0]=le,le.length%2!=0?ne.groupGoodsList=le.slice(0,le.length-1):ne.groupGoodsList=le,ne.cacheTabList=de}else 0===ie.list.length&&(ue[0].canLoadMore=!1);return ne.tabStatus=ue,ne;case"RECEIVE_GROUP_TAB_GOODS_SUCCESS":var ge=r.res,_e=r.current,fe={},he=JSON.parse(JSON.stringify(p("tabStatus")||[])),me=JSON.parse(JSON.stringify(p("cacheTabList")));if(me||(me[_e]=[]),ge.goods_list&&0!==ge.goods_list.length||(he[_e].canLoadMore=!1),ge&&ge.goods_list&&ge.goods_list.length>0){var ve=me[_e],Ie=he[_e].page,Te=ge.goods_list.map(function(e){return u.default.formatTagGoodsData(e,_e)});ve=ve.concat(Te),ve=a.default.objectArrayDuplicateRemove(ve,"goodsId"),he[_e].page=Ie+1,me[_e]=ve,ve.length%2!=0?fe.groupGoodsList=ve.slice(0,ve.length-1):fe.groupGoodsList=ve,fe.cacheTabList=me}return fe.tabStatus=he,fe;case"FILL_CACHELIST_INTO_PAGE":var Se=r.index,ye=JSON.parse(JSON.stringify(p("cacheTabList"))),Ee=p("groupGoodsList");if(!ye||!ye[Se])return ye[Se]=[],{cacheTabList:ye};if(ye[Se].length>Ee.length){var Oe=ye[Se],Re=Ee.length+20,be=[];return be=Re>Oe.length&&Oe.length%2!=0?Oe.slice(0,Oe.length-1):Oe.slice(0,Re),{groupGoodsList:be}}return{};case"INIT_SKU_DATA":var we=r.data||{};if(we.goods_info){var Le={},Ge=0;if(Le.goods=f(we.goods_info||{},{needFilter:["sku"]}),we.goods_info.sku&&we.goods_info.sku.length>0&&(Le.sku=h(we.goods_info.sku),Ge=we.goods_info.sku.length>1?1:0),we&&we.promotions&&we.promotions.events&&Object.keys(we.promotions.events).length>0){Le.promotion=f(we.promotions),Le.server_time=parseInt((Date.now()+n.default.timeDiff)/1e3,10);var Pe=we.promotions.events;!Pe.collage_card_activity||0!==Pe.collage_card_activity.reward_id&&Pe.collage_card_activity.reward_id||delete Le.promotion}return{hasSkuSelector:Ge,skuData:Le}}return{};case"RECIEVE_GROUP_DATA":return t({},r.data);default:return}}); 
 			}); 
		define("package_c/group/models/group_format.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},o=e(require("../../../common/util")),r=e(require("../../../common/time_util")),a=e(require("../../../common/data_util")),n=e(require("../../../common/image_util")),i=e(require("../../../common/std_format")),u=e(require("../../../storage/ram_manager")),_=e(require("../../../constants/groups")),m=e(require("./group_proxy")),s=function(e){if(e&&e.goods_info&&e.group_order_info){var t=e.goods_info||{},o=e.self_order_info||{},a="";if(0===o.shipping_status&&4!==o.pay_status&&(a="商家正在努力发货，请耐心等待！"),25===t.activity_type&&o.deposit_final_payment_begin_time){var n=function(e){var t=e.toString();return t.length<2&&(t="0"+e),t},i=o.deposit_final_payment_begin_time,u=r.default.getTimeMaterialFromTimePoint(i);a=u.month+"月"+u.date+"日"+n(u.hours)+":"+n(u.minutes)+"开始付尾款，记得支付哦～"}if(a){var _=e.mall_full_back_info||{},m=e.platform_full_back||{};(_.mall_goods_vo_list&&_.mall_goods_vo_list.length>0||m.need_amount&&m.send_amount)&&(a="")}return a}return""},l=function(e){var t=e.goods_info||{},o=e.self_order_info||null,r={};switch((e.group_order_info||{}).group_status){case _.default.GroupStatus.OnGoing:t.event_type===_.default.EventType.NEW_USER_GROUP?r.groupButtonText="新人一键拼单":r.groupButtonText="一键拼单";break;case _.default.GroupStatus.Success:r.groupStatusTips="拼单已满",r.groupButtonText="我来发起拼单",1!==t.event_type&&7!==t.event_type||(r.groupStatusTips="");break;case _.default.GroupStatus.Failed:r.groupStatusTips="拼单失败，款项将原路返还",r.groupButtonText=o?"再次发起拼单":"我来发起拼单",t.event_type===_.default.EventType.FREE_TRIAL&&(r.groupStatusTips="拼单失败")}return r},c={formatMemberSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.goods_info||{},o={buttonInfo:{isWEntrance:1019===Number(u.default.sceneId),eventType:t.event_type},groupInfo:{successDesc:s(e),goodsSales:t.sales<100?"":i.default.sales(t.sales),useSingleGroupCard:e.use_single_group_card||!1}};if((u.default.configStartup||{}).floating_group_success_jump){var r=u.default.configStartup.floating_group_success_jump;o.buttonInfo.jumpInfo={name:(r[0]||{}).name,route:(r[0]||{}).route,activity:(r[0]||{}).activity}}if(1===t.event_type||7===t.event_type)o.goodsInfo=m.default.groupGoodsFormat(e);else{if(e.self_order_info&&e.self_order_info.deposit_final_payment_begin_time&&(o.groupInfo.depositBeginTime=e.self_order_info.deposit_final_payment_begin_time),e.self_order_info&&5===e.self_order_info.source_type&&(o.groupInfo.sourceType=e.self_order_info.source_type),e.month_card&&e.month_card.url&&(o.monthCard=e.month_card),e.mall_full_back_info&&e.mall_full_back_info.mall_goods_vo_list){var a=e.mall_info||{};o.mallInfo={id:a.id,logo:a.logo,name:a.name,pddRoute:a.pdd_route};var n=e.mall_full_back_info,_=n.mall_goods_vo_list||[],l={activityNeedAmount:n.activity_need_amount,activityNeedAmountStd:i.default.price(n.activity_need_amount,100),activitySendAmount:n.activity_send_amount,activitySendAmountStd:i.default.price(n.activity_send_amount,100)},c=_.map(function(e){return{goodsId:e.goods_id,goodsName:e.goods_name,groupPrice:e.group_price,groupPriceStd:i.default.price(e.group_price,100),hdThumbuUrl:e.hd_thumb_url,prec:e.prec}});l.mallGoodsVoList=c,o.mallFullBackInfo=l}if(e.platform_full_back&&parseInt(e.platform_full_back.need_amount,10)>0){var p=e.platform_full_back,d={linkUrl:p.link_url,needAmount:i.default.price(p.need_amount,100),sendAmount:i.default.price(p.send_amount,100),takeStatus:p.take_status,rate:parseFloat(p.rate)};p.current_amount>p.need_amount&&(p.current_amount=p.need_amount),1===p.take_status?d.remainAmunt=i.default.price(p.need_amount-p.current_amount,100):d.remainAmunt=i.default.price(p.need_amount,100),d.currentAmount=i.default.price(p.current_amount,100),o.platformFullBack=d}}return o},formatMemberGoing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.group_order_info||{};return{goodsInfo:m.default.groupGoodsFormat(e),expireTime:parseInt(t.expire_time,10)}},formatGroupNormal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.group_order_info||{},r=e.goods_info||{},a={groupInfo:{},buttonInfo:t({eventType:r.event_type,expireTime:0===o.group_status?o.expire_time:0},l(e)),goodsInfo:m.default.groupGoodsFormat(e)};if(e.comment_volist&&e.comment_volist.length>0){var i=[];e.comment_volist.forEach(function(e){i.push({avatar:n.default.cdnCompressFixWidth({imgUrl:e.avatar||"",width:100}),name:e.name,comment:e.comment})}),a.groupInfo.comments=i}var u=e.promotions&&e.promotions.events||{};if(u.collage_card_activity){var _=m.default.getCollageCardInfo(e);_&&_.isCollage&&(a.collageData=_,a.goodsInfo.isCollage=!0)}if(u.promotion_price_activity&&u.promotion_price_activity.copy_writing){var s=u.promotion_price_activity.copy_writing;a.groupInfo.copyWriting={promotion_activity_type:u.promotion_price_activity.promotion_activity_type,activity_copy_writing:s.activity_copy_writing||"",copy_writing_without_price:s.copy_writing_without_price||"",end_time:u.promotion_price_activity.end_time||0}}return a},groupUsersFormat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.order_list||[],n=e.group_order_info||{},i=e.self_order_info||{},u=e.goods_info||{},_=[],m="";t.forEach(function(e,t){var n={nickname:e.nickname,avatar:a.default.dealWithAvatarURL(e.avatar||""),formatJoinTimeStr:e.pay_time&&r.default.formatTime(new Date(1e3*e.pay_time))};""+i.uid==""+e.uid&&(m=n.formatJoinTimeStr),n.formatJoinTimeStr+=e&&0===t?"发起拼单":"拼单",!u||1715!==u.cat_id_1&&(2!==u.cat_id_1||64!==u.cat_id_2||40!==u.cat_id_3&&116!==u.cat_id_3&&117!==u.cat_id_3&&120!==u.cat_id_3)||(n.nickname=o.default.formatUserName(e.nickname)),_.push(n)});var s=n.customer_num,l=Math.max(s,t.length);l>50&&(l=50,_=_.slice(0,50));var c=e.use_single_group_card?0:l-_.length,p={customerNum:s,memberCount:n.member_count,leftUserNum:c,usersList:_};return i&&i.order_sn&&(p.currentOrderSn=i.order_sn,p.current=i.uid),m&&(p.currentJoinTimeStr=m),p},getLocalGroups:function(e,t,r){var a=e.local_group||[],i=parseInt((Date.now()+u.default.timeDiff)/1e3,10),_=[];return a&&a.length>0&&a.forEach(function(e){var a=JSON.parse(e);if(a.nickname){var u=parseInt(t.cat_id_1,10),m=parseInt(t.cat_id_2,10),s=parseInt(t.cat_id_3,10);1715!==u&&(2!==u||64!==m||40!==s&&116!==s&&117!==s&&120!==s)||(a.nickname=o.default.formatUserName(a.nickname))}var l={expireTime:parseInt(a.expire_time,10),nickname:a.nickname||"游客",avatar:a.avatar||n.default.getCDNImgURL("base/logo.jpg"),groupOrderId:a.group_order_id,usersNum:parseInt(a.users_num,10)||1};l.localGroupLeftTime=l.expireTime-i,l.remaindNum=r-l.usersNum,_.push(l)}),_}};exports.default=c; 
 			}); 
		define("package_c/group/models/group_proxy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../../constants/groups")),a=e(require("../../../constants/goods")),r=e(require("../../../constants/app_constant")),o=e(require("../../../common/std_format")),i=e(require("../../../common/image_util")),n=e(require("../../../storage/ram_manager")),s={0:{actTagIcon:"限时秒杀",actTagClass:"act-tag-icon act-spike"},1:{actTagIcon:"名品折扣",actTagClass:"act-tag-icon act-brand"},2:{actTagIcon:"爱逛街",actTagClass:"act-tag-icon act-shopping"},3:{actTagIcon:"品质水果",actTagClass:"act-tag-icon act-fruit"},4:{actTagIcon:"品牌清仓",actTagClass:"act-tag-icon act-brand-clean"}},c={isLottery:"【抽奖】",isFreeTrial:"【免费试用】"},p=[a.default.GoodsType.IMPORTS,a.default.GoodsType.OVERSEAS_TRANSSHIP,a.default.GoodsType.OVERSEAS_DM],u=function(e){return s[e]?s[e]:null},l=function(e){return p.indexOf(parseInt(e,10))>=0},d=function(e){return p.indexOf(parseInt(e,10))>0},_=function(e,t){return[{},{requireNum:t.customer_num&&t.customer_num.toString(),groupId:t.group_id,orderLimit:parseInt(e.order_limit||1,10)}]},g={groupGoodsFormat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.goods_info,p={catId1:parseInt(s.cat_id_1,10),catId2:parseInt(s.cat_id_2,10),catId3:parseInt(s.cat_id_3,10),goodsId:s.goods_id,goodsName:s.goods_name,price:o.default.price(s.goods_price,100),originPrice:s.goods_price,hdThumbUrl:s.hd_thumb_url||s.thumb_url,thumbUrl:s.thumb_url||s.hd_thumb_url,groupTopImage:i.default.cdnCompress(s.hd_thumb_url||s.thumb_url),quantity:s.quantity,isOnSale:0!==parseInt(s.is_onsale,10),goodsType:s.goods_type,originMinGroupPrice:parseFloat(s.min_group_price)||0,originMinOnSaleGroupPrice:parseInt(s.min_on_sale_group_price,10)||0,minGroupPrice:o.default.price(s.min_group_price,100),minOnsaleGroupPrice:o.default.price(s.min_on_sale_group_price,100),maxOnsaleGroupPrice:o.default.price(s.max_on_sale_group_price,100),eventType:parseInt(s.event_type,10),singlePrice:o.default.price(s.single_price,100),gapPrice:o.default.price((s.line_price?s.line_price:s.market_price)-s.goods_price,100),activityType:s.activity_type||0,salesTip:s.sales_tip||"",isApp:1===s.is_app},g=e.is_new_version_flow&&(e.goods_info||{}).line_price?(e.goods_info||{}).line_price:(e.goods_info||{}).market_price;p.marketPrice=o.default.price(g,100);var m=parseInt((e.group_order_info||{}).customer_num,10);if(p.requireNum=m,parseInt(p.eventType,10)===t.default.EventType.FREE_GROUP?p.groupPice=p.maxOnsaleGroupPrice:p.groupPice=p.price,parseInt(s.act_tag,10)>0){var f=u(p.actTag);f&&Object.keys(f).forEach(function(e){f[e]&&(p[e]=f[e])})}var y=_(e.goods_info,e.group_order_info);y&&(p.groupTypes=y),p.mallServices=(e.service_promise||[]).filter(function(e){return e&&e.desc&&"null"!==e.desc&&null!=e.desc});var v=p.eventType===t.default.EventType.FREE_TRIAL,I=p.eventType===t.default.EventType.LUCKY_DRAW;if(v&&I){var T="";n.default.groupABMap&&1===n.default.groupABMap.xcx_grouplottery_1&&(v?T=c.isFreeTrial:I&&(T=c.isLottery)),p.goodsName=T+p.goodsName}var h=l(p.goodsType),b=d(p.goodsType);if(h){var P=s.country||"";p.countryImg=[r.default.CDNImgHostName,"nation/rect/",P.trim(),".png"].join(""),p.goodsCountry=P+"进口",b&&(p.goodsCountry=P+(parseInt(s.goodsType,10)===a.default.GoodsType.OVERSEAS_DM?"直邮":"直供"))}return p},formatRecommendGoodsData:function(e,a){var r={};return r.goodsId=e.goods_id,r.tabKey=""+a,r.eventType=parseInt(e.event_type,10),r.isApp=parseInt(e.is_app||"0",10),r.goodsName=e.goods_name||"",r.imgUrl=i.default.cdnCompress(e.hd_thumb_url||""),r.price=o.default.price(parseInt((e.group?e.group.price:e.price)||0,10),100),r.isFreeTrial=parseInt(r.eventType,10)===t.default.EventType.FREE_TRIAL,r.soldQuantity=o.default.sales(parseInt(e.sales||e.cnt,10)),r.nationalFlag=e.country?i.default.getCDNImgURL("nation/rect/"+e.country+".png"):"",r.preMarketPrice=parseInt(e.market_price||0,10),r.preGroupPrice=parseInt((e.group?e.group.price:e.price)||0,10),r.preSinglePrice=parseInt(e.normal_price||0,10),r.hasMallCoupon=parseInt(e.has_mall_coupon||0,10),e.ad&&(r.ad=e.ad),e.p_rec&&(r.p_rec=e.p_rec),r.salesTip=e.sales_tip,r},formatTagGoodsData:function(e,t){var a=(e.group||{}).price||e.price,r={goodsId:e.goods_id,imgUrl:i.default.cdnCompress(e.hd_thumb_url||e.thumb_url,e.hd_thumb_wm||e.thumb_wm),goodsName:e.goods_name,price:o.default.price(a,100),marketPrice:o.default.price(e.market_price,100),soldQuantity:o.default.sales(e.sales||e.cnt),nationalFlag:e.country?i.default.getCDNImgURL("nation/rect/"+e.country+".png"):"",tag:parseInt(e.tag,10),eventType:e.event_type,salesTip:e.sales_tip},n=["spike","economical-brand","go-shopping","good-fruit","brand-clean"];return!isNaN(r.tag)&&r.tag>=0&&r.tag<n.length&&(r.activityFlagClass="activity-flag activity-flag-gap activity-flag-"+n[r.tag]),r.tabKey=""+t,r.transData={goodsId:r.goodsId,preGroupPrice:parseInt(a,10),preSinglePrice:parseInt(e.normal_price,10),preMarketPrice:parseInt(e.market_price,10),goodsName:r.goodsName,eventType:e.event_type},e.ad&&(r.transData.ad=e.ad),e.p_rec&&(r.transData.p_rec=e.p_rec),e.p_search&&(r.transData.p_search=e.p_search),r},getCollageCardInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.goods_info||{};if(e.promotions.events.collage_card_activity&&parseInt(e.promotions.events.collage_card_activity.reward_id,10)>0){var a=e.promotions.events.collage_card_activity;return{rewardId:a.reward_id,maxDiscountAmount:a.max_discount_amount,discount:a.discount,stdPrice:o.default.price(a.collage_price,100),gapPrice:o.default.price((t.line_price?t.line_price:t.market_price)-a.collage_price,100),isCollage:!0}}return null},getActivityBizTagInfo:function(e){var t="";switch(parseInt(e,10)){case 1:case 5:case 10:case 19:case 1001:t="回到多多矿场";break;case 0:case 4:t="回到砍价";break;case 2:case 3:case 12:case 13:t="回到多多旅行";break;case 25:t="回到天天红包";break;case 52:case 58:case 101:t="回到富豪超市"}return{activityTitle:t,isShowActivity:!!t}},getHomeOperations:function(e,t){if(e&&e.length>0){var a=[];return[{opt_name:"推荐",opt_id:-1,children:[]}].concat(e).forEach(function(e,r){t[r]||(t[r]={}),t[r].opt_name=e.opt_name,t[r].opt_id=e.opt_id,t[r].page=1,t[r].canLoadMore=!0,t[r].showError=!1,a[r]=[]}),{cacheTabList:a,tabStatus:t}}return null},getTimeline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.is_open_timeline;if(t){var a=e.is_can_publish,r=e.status,o="",i="";if(a&&t&&r>0)switch(r){case 1:o="拼单将同时发布在拼小圈，",i="点击可取消";break;case 2:o="已取消发布到拼小圈";break;case 3:o="拼单已发布在拼小圈，",i="点击删除";break;case 4:o="已在拼小圈中删除该动态"}else t&&!a&&(o="此类商品不会发布到拼小圈");return{status:r,timeLineDesc:o,timeLineDescSub:i,isOpenTimeline:t}}},getZoneInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return e&&void 0!==e.status&&(t.status=e.status,-2===e.status?(t.text="敏感商品将不会同步到群空间 ",t.action="不会同步",t.actionClick=0):0===e.status||1===e.status||2===e.status?(t.text="拼单将同步到群空间",t.action="取消同步",t.actionClick=1):3===e.status&&(t.text="拼单已取消同步到群空间",t.action="已取消",t.actionClick=0)),t}};exports.default=g; 
 			}); 
		define("package_c/order_checkout/component/order_checkout_virtual_goods/order_checkout_virtual_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(a,i){try{var u=e[a](i),s=u.value}catch(t){return void n(t)}if(!u.done)return Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}return o("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=t(require("../../../../common/request")),i=t(require("../../../../storage/ram_manager")),u=t(require("../../../../libs/regenerator-runtime/runtime")),s=require("../../../../common/index"),r=t(require("../../../../constants/goods")),c=require("../../../../actions/common"),d=function(){function t(e){n(this,t),this.page=i.default.CPPage,this.setDataFunc=null,this.getDataFunc=null,this.addRootFunc=null,e&&(this.setDataFunc=e.setDataFunc,this.getDataFunc=e.getDataFunc,this.addRootFunc=e.addRootFunc,this.goodsVo=e.goodsVo||{}),this.initComponentData(e)}return o(t,[{key:"initComponentData",value:function(t){this.initVirtualInfo(t),this.getChargeHistory(),this.addClickMobileInputEvent(),this.addClearPhoneNumberEvent(),this.addSelectPhoneNumberEvent(),this.addInputPhoneNumberEvent(),this.addFocusPhoneInputEvent(),this.addBlurPhoneInputEvent()}},{key:"initVirtualInfo",value:function(t){var e={hideNumberList:!0,phoneNumber:t.phoneNumber||"",hasMobile:!!t.phoneNumber,isShowClearBtn:!1};if(parseInt(this.goodsVo.goodsType,10)!==r.default.GoodsType.VIDEO_MEMBER){var n="",o="",a=11,i="请输入正确的充值号码";switch(this.goodsVo.goodsType){case r.default.GoodsType.MOBILE_DATA:case r.default.GoodsType.MOBILE_FARE:n="充值号码：",o="仅限中国大陆手机号码";break;case r.default.GoodsType.QQ_COIN:n="QQ号：",o="请输入QQ号",a=12;break;case r.default.GoodsType.OIL_CARD:n="加油卡号码：",o="请输入加油卡号码",a=19,i="请输入正确的19位加油卡号"}this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc(s.ObjectUtil.assign(e,{virtualTitle:n,virtualPlaceholder:o,virtualLimit:a,virtualNumError:i}))}else this.initVideoMember(e)}},{key:"initVideoMember",value:function(t){var e=this.goodsVo;if(t.isVideoMember=!0,e.needAccount){var n="请输入",o=11,a="请输入正确的",i=e.accountTypes;this.needCheckEmail=!1,this.needCheckMobile=!1,this.needCheckQQ=!1,this.needNoCheck=!1;var u=i.toString(2),r=u.length;r>=2&&"1"===u[r-2]&&(n+="手机号",a+="手机号",this.needCheckMobile=!0),r>=3&&"1"===u[r-3]&&(n.indexOf("手机号")>-1&&(n+="/",a+="/"),n+="邮箱",a+="邮箱地址",this.needCheckEmail=!0),r>=1&&"1"===u[r-1]&&((n.indexOf("邮箱")>-1||n.indexOf("手机号")>-1)&&(n+="/",a+="/"),o=12,n+="QQ号",a+="QQ号",this.needCheckQQ=!0),e.accountTypes||(n+="账号",a+="账号",this.needNoCheck=!0),this.inputErrorInfo=a,s.ObjectUtil.assign(t,{showVideoAccountInput:!0,virtualTitle:"账号：",virtualPlaceholder:n,virtualLimit:o,needCheckEmail:this.needCheckEmail||null})}this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc(t)}},{key:"checkEnterNumber",value:function(){var t=this.goodsVo||{},e=this.getDataFunc(),n=e.phoneNumber;if(parseInt(t.goodsType,10)===r.default.GoodsType.VIDEO_MEMBER)return!e.showVideoAccountInput||(!(!this.needCheckEmail||!/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(n))||(!(!this.needCheckMobile||!/^1\d{10}$/.test(n))||(!(!this.needCheckQQ||!/^[0-9]{5,12}$/.test(n))||(!(!this.needNoCheck||!n)||(this.page.$dispatch((0,c.showToast)(this.inputErrorInfo)),!1)))));var o=/(^1)\d{10}$/;return parseInt(t.goodsType,10)===r.default.GoodsType.OIL_CARD?o=/(^1)\d{18}$/:parseInt(t.goodsType,10)===r.default.GoodsType.QQ_COIN&&(o=/^[0-9]{5,12}$/),n?!!o.test(n)||(this.page.$dispatch((0,c.showToast)(e.virtualNumError)),!1):(this.page.$dispatch((0,c.showToast)("请填写要充值的号码")),!1)}},{key:"getChargeHistory",value:function(){var t=e(u.default.mark(function t(){var e,n,o,i,s,d,h;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.goodsVo.goodsType===r.default.GoodsType.QQ_COIN||this.goodsVo.goodsType===r.default.GoodsType.OIL_CARD||this.goodsVo.goodsType===r.default.GoodsType.VIDEO_MEMBER){t.next=13;break}return t.prev=1,e=a.default.requestDataWithUrl("GET","api/virginia/get_charge_history",null,!1),t.next=5,a.default.runRequest(e);case 5:if(n=t.sent,(o=n.records)&&o.length>0){for(i=0;i<o.length;i++)s=o[i],(d=s.mobile)&&11===d.length&&((h=[])[0]=d.slice(0,3),h[1]=d.slice(3,7),h[2]=d.slice(7,11),o[i].mobileList=h);this.setDataFunc&&"function"==typeof this.setDataFunc&&this.setDataFunc({records:o})}t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),this.page.$dispatch((0,c.showToast)(t.t0.error_msg));case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},{key:"addClickMobileInputEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("clickMobileInput",function(){i.default.CPData.disableUserAction&&t.page.$dispatch((0,c.showToast)("订单已生成，信息不可更改"))})}},{key:"addClearPhoneNumberEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("clearPhoneNumber",function(){t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({phoneNumber:""})})}},{key:"addSelectPhoneNumberEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("selectPhoneNumber",function(e){var n=e.currentTarget.dataset?e.currentTarget.dataset.numberValue:"";t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({phoneNumber:n,hideNumberList:!0})})}},{key:"addInputPhoneNumberEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("inputPhoneNumber",function(e){var n=e.detail.value;t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({phoneNumber:n})})}},{key:"addFocusPhoneInputEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("focusPhoneInput",function(){t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({isShowClearBtn:!0,hideNumberList:!1})})}},{key:"addBlurPhoneInputEvent",value:function(){var t=this;this.addRootFunc&&"function"==typeof this.addRootFunc&&this.addRootFunc("blurPhoneInput",function(){t.setDataFunc&&"function"==typeof t.setDataFunc&&t.setDataFunc({isShowClearBtn:!1,hideNumberList:!0})})}}]),t}();exports.default=d; 
 			}); 
		define("package_c/order_checkout_new/component/order_checkout_virtual_goods/virtual_goods_controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function o(n,i){try{var a=t[n](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o=e(require("../../../../common/request")),n=e(require("../../../../libs/regenerator-runtime/runtime")),i=require("../../../../common/index"),a=e(require("../../../../constants/goods")),s=require("../../../../actions/common"),u={initVirtualInfo:function(e){var t={hideNumberList:!0,phoneNumber:e.phoneNumber||"",hasMobile:!!e.phoneNumber,isShowClearBtn:!1},r=e.goodsVo||{};if(parseInt(r.goodsType,10)===a.default.GoodsType.VIDEO_MEMBER)return this.initVideoMember(t,r);var o="",n="",s=11,u="请输入正确的充值号码";switch(r.goodsType){case a.default.GoodsType.MOBILE_DATA:case a.default.GoodsType.MOBILE_FARE:o="充值号码：",n="仅限中国大陆手机号码";break;case a.default.GoodsType.QQ_COIN:o="QQ号：",n="请输入QQ号",s=12;break;case a.default.GoodsType.OIL_CARD:o="加油卡号码：",n="请输入加油卡号码",s=19,u="请输入正确的19位加油卡号"}return i.ObjectUtil.assign(t,{virtualTitle:o,virtualPlaceholder:n,virtualLimit:s,virtualNumError:u}),t},initVideoMember:function(e,t){var o=r({},e);if(o.isVideoMember=!0,t.needAccount){var n="请输入",a=11,s="请输入正确的",u=!1,c=!1,d=!1,l=!1,p=t.accountTypes.toString(2),f=p.length;f>=2&&"1"===p[f-2]&&(n+="手机号",s+="手机号",c=!0),f>=3&&"1"===p[f-3]&&(n.indexOf("手机号")>-1&&(n+="/",s+="/"),n+="邮箱",s+="邮箱地址",u=!0),f>=1&&"1"===p[f-1]&&((n.indexOf("邮箱")>-1||n.indexOf("手机号")>-1)&&(n+="/",s+="/"),a=12,n+="QQ号",s+="QQ号",d=!0),t.accountTypes||(n+="账号",s+="账号",l=!0),i.ObjectUtil.assign(o,{showVideoAccountInput:!0,virtualTitle:"账号：",virtualPlaceholder:n,virtualLimit:a,needCheckEmail:u||null,needCheckMobile:c,needCheckQQ:d,needNoCheck:l,inputErrorInfo:s})}return o},getChargeHistory:function(e,r){var i=this;return t(n.default.mark(function t(){var u,c,d,l,p,f;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.goodsType===a.default.GoodsType.QQ_COIN||r.goodsType===a.default.GoodsType.OIL_CARD||r.goodsType===a.default.GoodsType.VIDEO_MEMBER){t.next=14;break}return t.prev=1,t.next=4,o.default.apiRequest("GET","api/virginia/get_charge_history",null,!1);case 4:if(u=t.sent,!((c=u.records)&&c.length>0)){t.next=9;break}for(d=0;d<c.length;d++)l=c[d],(p=l.mobile)&&11===p.length&&((f=[])[0]=p.slice(0,3),f[1]=p.slice(3,7),f[2]=p.slice(7,11),c[d].mobileList=f);return t.abrupt("return",c);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.$dispatch((0,s.showToast)(t.t0.error_msg));case 14:return t.abrupt("return",[]);case 15:case"end":return t.stop()}},t,i,[[1,11]])}))()},checkEnterNumber:function(e,t,r){var o=r.phoneNumber,n=r.needCheckEmail,i=r.needCheckMobile,u=r.needCheckQQ,c=r.needNoCheck,d=r.inputErrorInfo;if(parseInt(t.goodsType,10)===a.default.GoodsType.VIDEO_MEMBER)return!r.showVideoAccountInput||(!(!n||!/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(o))||(!(!i||!/^1\d{10}$/.test(o))||(!(!u||!/^[0-9]{5,12}$/.test(o))||(!(!c||!o)||(e.$dispatch((0,s.showToast)(d)),!1)))));var l=/(^1)\d{10}$/;return parseInt(t.goodsType,10)===a.default.GoodsType.OIL_CARD?l=/(^1)\d{18}$/:parseInt(t.goodsType,10)===a.default.GoodsType.QQ_COIN&&(l=/^[0-9]{5,12}$/),o?!!l.test(o)||(e.$dispatch((0,s.showToast)(r.virtualNumError)),!1):(e.$dispatch((0,s.showToast)("请填写要充值的号码")),!1)}};exports.default=u; 
 			}); 
		define("package_c/order_checkout_new/order_checkout_new.action.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,a){try{var u=r[o](a),s=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initNavBubble=exports.updateCellBarVo=exports.updateGoodsVo=exports.setVirtualGoodsData=exports.setRealNameAuthData=exports.setCouponsWinData=exports.updateErrorStatus=exports.setCouponsListData=exports.setCountDownTime=exports.setPayWinData=exports.setActionDisable=exports.updateOrderVo=exports.updateStepVo=exports.updateServiceVo=exports.setAddressData=exports.updateGoodsNumber=exports.updatePayAppId=exports.orderRefresh=exports.askDiffTransfer=exports.getChargeHistory=exports.queryPlatformCoupons=exports.queryUsablePromotion=exports.loadRefreshData=exports.loadPageData=void 0;var t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=function(){function e(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=e(require("../../libs/regenerator-runtime/runtime")),a=require("../../common/index"),u=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("./order_checkout_new.constant")),s=e(require("../../constants/storage_keys")),i=e(require("../../controller/config_controller")),p=e(require("../../common/data_util")),d=e(require("../../common/logger")),c=e(require("./component/order_checkout_virtual_goods/virtual_goods_controller")),f=e(require("../../constants/goods")),_={getGroupOrderDetail:"10045",confirmRender:"10498",confirmRefresh:"10499",queryMerchantBatches:"10043",takeMerchantCoupon:"10151",loadMallCoupons:"10476",loadPlatformCoupons:"10477",getUserIdCard:"10903"},l=a.StorageUtil.getStorageSync(s.default.LAST_PAY_APP_ID),v={},y=function(e){var r={front_env:8,front_version:6,goods_id:e.$urlQueryObj.goods_id,group_id:e.$urlQueryObj.group_id,sku_id:e.$urlQueryObj.sku_id,goods_number:e.$urlQueryObj.goods_number||1,is_app:0};return l&&(r.last_pay_app_id=l),e.$urlQueryObj.group_order_id&&(r.group_order_id=e.$urlQueryObj.group_order_id),e.duoDuoType&&(r.type=e.duoDuoType),e.bizTag&&(r.biz_tag=e.bizTag),e.bizType&&(r.biz_type=e.bizType),Object.prototype.hasOwnProperty.call(e.$urlQueryObj,"award_type")&&"undefined"!==e.$urlQueryObj.award_type&&(r.award_type=e.$urlQueryObj.award_type),Object.prototype.hasOwnProperty.call(e.$urlQueryObj,"page_from")&&"undefined"!==e.$urlQueryObj.page_from&&(r.page_from=e.$urlQueryObj.page_from),Object.prototype.hasOwnProperty.call(e.$urlQueryObj,"sel_address_id")&&"undefined"!==e.$urlQueryObj.sel_address_id&&(r.address_id=e.$urlQueryObj.sel_address_id),e.extendMapUrl&&(r.extend_map=e.extendMapUrl),r},m=function(e){var r=e.$getValue("orderCheckoutNew.goodsVo")||{},t=e.$getValue("orderCheckoutNew.skuVo")||{},n=e.$getValue("orderCheckoutNew.groupVo")||{},o={price:r.unitPrice,cat_id:r.catId,cat_id1:r.catId1,cat_id2:r.catId2,cat_id3:r.catId3,goods_type:r.goodsType,event_type:r.eventType};return Object.prototype.hasOwnProperty.call(r,"overseaType")&&(o.oversea_type=r.overseaType),void 0!==r.activityType&&(o.activity_type=r.activityType),{goods_id:r.goodsId,sku_id:t.skuId,sku_number:r.goodsNumber,group_id:n.groupId,pre_order_goods_vo:o}};exports.loadPageData=function(e){return function(){var t=r(o.default.mark(function r(t){var s,p,c,l,m,h,g,O,C,x;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.$showLoading(),v=y(e),s=a.Request.requestDataWithCmd(_.confirmRender,{params:v}),p=a.Request.runRequest(s),c=i.default.getConfig("pap_pay").then().catch(function(){return!1}),l=i.default.getConfig("pay_order_coupon_tips").then().catch(function(){return!1}),m=a.User.isNewOrSilentUser().then().catch(function(){return!1}),h=i.default.getConfig("newuser_friend_pay").then().catch(function(){return!1}),g={},r.next=11,Promise.all([p,l,m,c,h]).then(function(r){var o=n(r,5),a=o[0],s=o[1],i=o[2],p=o[3],d=o[4];g=a,t({type:u.OC_CONFIRM_RENDER_SUCCESS,confirmRenderData:a,couponTipsConfig:s,isNewOrSilentUser:i,newFriendPayConfig:d,usePapPay:p,msgId:e.$urlQueryObj.msg_id,phoneNumber:e.$urlQueryObj.mobile,isConfirmRender:!0})}).catch(function(e){t({type:u.OC_UPDATE_ERROR_STATUS,showError:!0}),d.default.sendDeadlyError({bussiness_type:"interface",action:"get_render",url_path:"api/morgan/confirm/render",error_code:e.error_code,error_msg:e.error_msg})});case 11:if(!g.goods_vo){r.next=25;break}if(!(O=g.goods_vo).real_name_auth&&Number(O.goods_type)!==f.default.GoodsType.OVERSEAS_TRANSSHIP&&Number(O.goods_type)!==f.default.GoodsType.OVERSEAS_DM&&Number(O.goods_type)!==f.default.GoodsType.OVERSEAS_DM_CC){r.next=25;break}return r.prev=14,C=a.Request.requestDataWithCmd(_.getUserIdCard,{}),r.next=18,a.Request.runRequest(C);case 18:x=r.sent,t({type:u.OC_CONFIRM_RENDER_SEC_SUCCESS,userIdCard:x,realNameAuth:O.real_name_auth}),r.next=25;break;case 22:r.prev=22,r.t0=r.catch(14),t({type:u.OC_CONFIRM_RENDER_SEC_SUCCESS,userIdCard:r.t0,realNameAuth:O.real_name_auth});case 25:e.$hideLoading();case 26:case"end":return r.stop()}},r,void 0,[[14,22]])}));return function(e){return t.apply(this,arguments)}}()},exports.loadRefreshData=function(e,t){return function(){var n=r(o.default.mark(function r(n){var s,i,p,c;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.$showLoading(),s=e.$getValue("orderCheckoutNew.goodsVo")||{},t.goodsNumber?v.goods_number=t.goodsNumber:v.goods_number=(s||{}).goodsNumber||e.$urlQueryObj.goods_number||1,t&&t.addressId&&(v.address_id=t.addressId),t&&t.deleteAddr&&delete v.address_id,t.platformCoupon&&(v.promotion_vo?v.promotion_vo.platform_coupon_vo=t.platformCoupon:(v.promotion_vo={},v.promotion_vo.platform_coupon_vo=t.platformCoupon)),t.merchantCoupon&&(v.promotion_vo={},v.promotion_vo.merchant_coupon_vo=t.merchantCoupon),t.clearCouponParams&&delete v.promotion_vo,t.serviceTransparentField?v.service_transparent_field=t.serviceTransparentField:(i=e.$getValue("orderCheckoutNew.serviceVo"))&&i.serviceTransparentField?v.service_transparent_field=i.serviceTransparentField:v.service_transparent_field&&delete v.service_transparent_field,p=a.Request.requestDataWithCmd(_.confirmRefresh,{params:v}),r.next=13,a.Request.runRequest(p);case 13:c=r.sent,n({type:u.OC_CONFIRM_RENDER_SUCCESS,confirmRenderData:c,reqRenderParams:v,isConfirmRefresh:!0}),r.next=21;break;case 17:r.prev=17,r.t0=r.catch(0),n({type:u.OC_CONFIRM_RENDER_ERROR,e:r.t0,reqRenderParams:v,isConfirmRefresh:!0}),d.default.sendDeadlyError({bussiness_type:"interface",action:"refresh_order",url_path:"api/morgan/confirm/refresh",error_code:r.t0.error_code,error_msg:r.t0.error_msg});case 21:e.$hideLoading();case 22:case"end":return r.stop()}},r,void 0,[[0,17]])}));return function(e){return n.apply(this,arguments)}}()},exports.queryUsablePromotion=function(e){return function(){var s=r(o.default.mark(function r(s){var i,p,d,c,f,l,y,h,g;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.$showLoading(),i=null,(p=e.$getValue("orderCheckoutNew.goodsVo"))&&(d={mall_id:p.mallId,goods_number:p.goodsNumber,unit_goods_amount:p.unitPrice,goods_id:p.goodsId},p.limitNumber&&(d.sku_limit_quantity=p.limitNumber),c=a.Request.requestDataWithCmd(_.queryMerchantBatches,{params:d}),i=a.Request.runRequest(c)),f=e.$getValue("orderCheckoutNew.extendMap"),l=m(e),y=t({},l,{source_mall_id:p.mallId}),v.group_order_id&&(y.group_order_id=v.group_order_id),f&&(y.extend_map=f),h=a.Request.requestDataWithCmd(_.loadMallCoupons,{params:y}),g=a.Request.runRequest(h),r.next=13,Promise.all([i,g]).then(function(e){var r=n(e,2),t=r[0],o=r[1];s({type:u.OC_QUERY_USABLE_PROMOTION,mallReceiveCoupons:t,mallCoupons:o})}).catch(function(e){s({type:u.OC_QUERY_USABLE_PROMOTION,e:e})});case 13:e.$hideLoading();case 14:case"end":return r.stop()}},r,void 0)}));return function(e){return s.apply(this,arguments)}}()},exports.queryPlatformCoupons=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var s=r(o.default.mark(function r(s){var i,d,c,f,l,y,h,g;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.$showLoading(),i=e.$getValue("orderCheckoutNew.extendMap"),d=m(e),c=t({},d,{group_order_id:v.group_order_id||""}),n.usePriority&&(c.use_priority=n.usePriority),i&&(c.extend_map=i),e.bizTag&&(c.biz_tag=e.bizTag),e.bizType&&(c.biz_type=e.bizType),f=e.$getValue("orderCheckoutNew.orderPrice"),l=e.$getValue("orderCheckoutNew.promotionVo")||{},(y=l.merchantCouponVo)&&1===Number(y.promotionStatus)&&(y.eventId>0&&y.eventDiscount>0&&(f=p.default.accSub(f,y.eventDiscount)),y.couponId&&y.discount>0&&(f=p.default.accSub(f,y.discount))),c.current_order_amount=f,h=a.Request.requestDataWithCmd(_.loadPlatformCoupons,{params:c}),r.next=17,a.Request.runRequest(h);case 17:g=r.sent,s({type:u.OC_QUERY_PLATFORM_COUPONS,resPlatformCoupons:g,opts:n}),r.next=24;break;case 21:r.prev=21,r.t0=r.catch(0),s({type:u.OC_QUERY_PLATFORM_COUPONS,e:r.t0});case 24:e.$hideLoading();case 25:case"end":return r.stop()}},r,void 0,[[0,21]])}));return function(e){return s.apply(this,arguments)}}()},exports.getChargeHistory=function(e){return function(){var t=r(o.default.mark(function r(t){var n,a;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=e.$getValue("orderCheckoutNew.goodsVo")||{},r.next=4,c.default.getChargeHistory(e,n);case 4:a=r.sent,t({type:u.OC_SET_VIRTUAL_GOODS_DATA,updateData:{records:a}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}},r,void 0,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},exports.askDiffTransfer=function(e){return function(){var t=r(o.default.mark(function r(t){var n,s;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.$showLoading(),n={msg_id:e.msgId,goods_id:e.$urlQueryObj.goods_id},r.next=5,a.Request.apiRequest("POST","api/rainbow/status/ask_diff_transfer/get",n,!1);case 5:s=r.sent,t({type:u.OC_ASK_DIFF_TRANSFER,askDiffTransferData:s}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),t({type:u.OC_ASK_DIFF_TRANSFER,askDiffTransferData:r.t0});case 12:e.$hideLoading();case 13:case"end":return r.stop()}},r,void 0,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},exports.orderRefresh=function(e,t){return function(){var n=r(o.default.mark(function r(n){var s,i,p;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!(s=e.$getValue("orderCheckoutNew.optionMap"))||1!==Number(s.orderRefresh)){r.next=11;break}return e.$showLoading(),i={order_sn:e.orderSn,front_version:6},r.next=7,a.Request.apiRequest("POST","api/morgan/order/refresh",i,!1);case 7:p=r.sent,n({type:u.OC_REQ_ORDER_REFRESH,orderRefreshData:p}),r.next=12;break;case 11:n({type:u.OC_REQ_ORDER_REFRESH,selectedAddress:t});case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),console.error(r.t0);case 17:e.$hideLoading();case 18:case"end":return r.stop()}},r,void 0,[[0,14]])}));return function(e){return n.apply(this,arguments)}}()},exports.updatePayAppId=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_PAY_APP_ID,selectedAppId:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateGoodsNumber=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_GOODS_NUMBER,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setAddressData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_ADDRESS_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateServiceVo=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_SERVICE_VO,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateStepVo=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_STEP_VO,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateOrderVo=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_ORDER_VO,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setActionDisable=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_ACTION_DISABLE,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setPayWinData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_PAY_WIN_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setCountDownTime=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_COUNT_DOWN_TIME,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setCouponsListData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_COUPONS_LIST_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateErrorStatus=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_ERROR_STATUS,showError:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setCouponsWinData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_COUPONS_WIN_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setRealNameAuthData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_REAL_NAME_AUTH_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.setVirtualGoodsData=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_SET_VIRTUAL_GOODS_DATA,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateGoodsVo=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_GOODS_VO,goodsNumber:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.updateCellBarVo=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_UPDATE_CELL_BAR_VO,updateData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()},exports.initNavBubble=function(e){return function(){var t=r(o.default.mark(function r(t){return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t({type:u.OC_INIT_NAV_BUBBLE,customNavData:e});case 1:case"end":return r.stop()}},r,void 0)}));return function(e){return t.apply(this,arguments)}}()}; 
 			}); 
		define("package_c/order_checkout_new/order_checkout_new.constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.OC_CONFIRM_RENDER_SUCCESS="OC_CONFIRM_RENDER_SUCCESS",exports.OC_UPDATE_PAY_APP_ID="OC_UPDATE_PAY_APP_ID",exports.OC_UPDATE_GOODS_NUMBER="OC_UPDATE_GOODS_NUMBER",exports.OC_SET_ADDRESS_DATA="OC_SET_ADDRESS_DATA",exports.OC_UPDATE_SERVICE_VO="OC_UPDATE_SERVICE_VO",exports.OC_UPDATE_STEP_VO="OC_UPDATE_STEP_VO",exports.OC_UPDATE_ORDER_VO="OC_UPDATE_ORDER_VO",exports.OC_SET_ACTION_DISABLE="OC_SET_ACTION_DISABLE",exports.OC_SET_PAY_WIN_DATA="OC_SET_PAY_WIN_DATA",exports.OC_SET_COUNT_DOWN_TIME="OC_SET_COUNT_DOWN_TIME",exports.OC_QUERY_USABLE_PROMOTION="OC_QUERY_USABLE_PROMOTION",exports.OC_QUERY_PLATFORM_COUPONS="OC_QUERY_PLATFORM_COUPONS",exports.OC_SET_COUPONS_LIST_DATA="OC_SET_COUPONS_LIST_DATA",exports.OC_UPDATE_ERROR_STATUS="OC_UPDATE_ERROR_STATUS",exports.OC_CONFIRM_RENDER_ERROR="OC_CONFIRM_RENDER_ERROR",exports.OC_SET_COUPONS_WIN_DATA="OC_SET_COUPONS_WIN_DATA",exports.OC_SET_REAL_NAME_AUTH_DATA="OC_SET_REAL_NAME_AUTH_DATA",exports.OC_SET_VIRTUAL_GOODS_DATA="OC_SET_VIRTUAL_GOODS_DATA",exports.OC_ASK_DIFF_TRANSFER="OC_ASK_DIFF_TRANSFER",exports.OC_CONFIRM_RENDER_SEC_SUCCESS="OC_CONFIRM_RENDER_SEC_SUCCESS",exports.OC_REQ_ORDER_REFRESH="OC_REQ_ORDER_REFRESH",exports.OC_UPDATE_GOODS_VO="OC_UPDATE_GOODS_VO",exports.OC_UPDATE_CELL_BAR_VO="OC_UPDATE_CELL_BAR_VO",exports.OC_INIT_NAV_BUBBLE="OC_INIT_NAV_BUBBLE"; 
 			}); 
		define("package_c/order_checkout_new/order_checkout_new.reducer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var o=0,r=Array(e.length);o<e.length;o++)r[o]=e[o];return r}return Array.from(e)}function r(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=S({},o);e.cancelPay&&(t.cancelPay=e.cancelPay);var n=k,s="";return e.isPaying?(n=G,0===Number(o.payPrice)&&(n=H),s=J):t.cancelPay?(n=j,-1===Number(a.selectedAppId)&&(n=K)):-1===Number(a.selectedAppId)?n=K:0===Number(o.payPrice)?n=Q:r.eventType===I.default.EventType.FREE_TRIAL&&(n=Y),t.payText=n,t.subPayText=s,t}function a(e){var o=S({},e);return e.displayTitle&&(o.couponServiceMainClass="popup-win-container popup-win-container-down"),e.templateResultList&&e.templateResultList.forEach(function(e){e.selected&&(o.serviceTransparentField=e.serviceTransparentField,o.srvTotalPrice=e.srvTotalPrice)}),o}function t(e){return S({},e,{isDepositGoods:e&&e.depositPrice>0,stepProtocolSelected:!0})}function n(e,o){var n=e.confirmRenderData,s=e.usePapPay,u=e.msgId,i=e.isConfirmRender,p=e.isConfirmRefresh,d=e.couponTipsConfig,c=e.isNewOrSilentUser,l=e.newFriendPayConfig,m=e.phoneNumber,_=w.default.formatRenderData(n),f={};if(i){var C=_.payVo||{};C.usePapPay=s,!C.selectedAppId&&C.payChannelList&&C.payChannelList.length>0&&(C.selectedAppId=Number(C.payChannelList[0].appId)),s&&(C.payChannelList||[]).some(function(e){return 54===Number(e.appId)&&e.signed&&(C.papPaySigned=!0),54===Number(e.appId)}),f={payVo:C,mallVo:_.mallVo||{},groupVo:_.groupVo||{},promotionEventVo:_.promotionEventVo||{},showPage:!0,disableEditNum:!!u,isNewOrSilentUser:c,newFriendPayConfig:l,optionMap:_.optionMap||{}},_.stepVo&&(f.stepVo=t(_.stepVo));var v=_.goodsVo||{};if(v.isVirtualGoods){var D=B.default.initVirtualInfo({phoneNumber:m,goodsVo:v});f.virtualGoodsData=D}var V=_.cellBarVo;V&&(V.cellBarSelected=!0,f.cellBarVo=V)}else if(p){var T=o("payVo")||{},P=o("couponsWinData")||{};f={payVo:S({},T,_.payVo||{}),couponsWinData:S({},P,{showCouponsWin:!1,showCouponsWinBg:!1,mainClass:"mall-coupons-main mall-coupons-main-down"})}}var y=r({orderPrice:_.orderPrice,payPrice:_.payPrice},_.orderVo,_.goodsVo,f.payVo),O=S({confirmMessage:_.confirmMessage,confirmCode:_.confirmCode,promotionVo:_.promotionVo||{},orderServicePath:_.orderServicePath,extendMap:_.extendMap,skuVo:_.skuVo||{},orderVo:y,orderPrice:_.orderPrice},f);_.serviceVo&&(O.serviceVo=a(_.serviceVo));var h=_.addressVo||{};if(h.allowedProvinces&&h.allowedProvinces.length&&h.provinceId){var g=h.allowedProvinces.toString().split(",");"1"!==g[0]&&(h.canotReceived=-1===g.indexOf(""+h.provinceId))}if(O.addressVo=h,_.goodsVo){var N=!1,E=!1,R=S({},_.goodsVo),A=Math.floor(95e5/R.unitPrice);R.goodsNumber>=A&&(N=!0),1===R.limitStatus&&(E=!0),R.orderLimitDisable=N,R.limitNumberDisable=E,O.goodsVo=R}var b=o("discountTipsData");if(b&&b.couponTipsConfig&&b.isNewOrSilentUser||d&&c){var I={};I=d&&c?{couponTipsConfig:d,isNewOrSilentUser:c}:S({},b);var U=_.merchantPromotionPrice+_.platformPromotionPrice;U>0?(I.totalDiscountStd=M.default.price(U,100),I.showDiscountTips=!0):I.showDiscountTips=!1,O.discountTipsData=I}return O}function s(e,o){var a=e.selectedAppId,t=o("payVo"),n=S({},t,{selectedAppId:a}),s=r({},o("orderVo"),o("goodsVo"),n);return{payVo:S({},t,{selectedAppId:a}),orderVo:s}}function u(e,o){var r=o("goodsVo"),a=e.updateData;return{goodsVo:S({},r,a)}}function i(e,o){var r=o("addressData"),a=e.updateData;return{addressData:S({},r,a)}}function p(e,o){var r=o("serviceVo"),a=e.updateData;return{serviceVo:S({},r,a)}}function d(e,o){var r=o("stepVo"),a=e.updateData;return{stepVo:S({},r,a)}}function c(e,o){return{orderVo:r(e.updateData,o("orderVo"),o("goodsVo"),o("payVo"))}}function l(e){return{actionDisable:e.updateData.actionDisable}}function m(e,o){var r=o("payWindowData"),a=e.updateData;return{payWindowData:S({},r,a)}}function _(e,o){var r=o("countTimeData"),a=e.updateData;return{countTimeData:S({},r,a)}}function f(e,o){var r=e.mallReceiveCoupons,a=e.mallCoupons,t={};if(r){var n=o("mallCouponsListData"),s=U.default.processMallReceiveCoupons(r);t.mallCouponsListData=S({},n,s)}if(a){var u=a.coupons||{},i={serverTime:a.server_time||0,enableCoupons:u.usable_coupons||[],disableCoupons:u.unusable_coupon_list||[]},p=L.default.formatCouponsData(i);t.mallCoupons=S({},p)}return t}function C(e,r){var a=e.resPlatformCoupons,t=e.opts,n={},s=(r("promotionVo")||{}).platformCouponVo;if(a){var u=a.coupons||{},i={serverTime:a.server_time||0,enableCoupons:u.usable_coupons||[],disableCoupons:u.unusable_coupon_list||[],enableSuperpositionCoupons:u.usable_superposition_coupon_vo||{}},p=L.default.formatCouponsData(i);if(s&&s.superpositionCouponNumber&&(p.enableSuperpositionCoupons.selectedNum=s.superpositionCouponNumber,p.enableSuperpositionCoupons.selectedCertainNum=s.superpositionCouponNumber),t.usePriority){var d=r("platformCoupons")||{},c=[].concat(o(d.enableCoupons),o(p.enableCoupons));n.platformCoupons=S({},p,{showCouponLoadMore:p.enableCoupons.length===q,usePriority:a.coupons&&a.coupons.use_priority||null,enableCoupons:c})}else n.platformCoupons=S({},p,{showCouponLoadMore:p.enableCoupons.length===q,usePriority:a.coupons&&a.coupons.use_priority||null})}return n}function v(e,o){var r=e.updateData||{},a=r.mallCouponsListData,t=r.mallCouponToastData,n={};if(a){var s=o("mallCouponsListData");n.mallCouponsListData=S({},s,a)}if(t){var u=o("mallCouponToastData");n.mallCouponToastData=S({},u,t)}return n}function D(e,o){var r=e.e,a=e.reqRenderParams,t=o("goodsVo");return{confirmCode:r.error_code,confirmMessage:r.error_msg,goodsVo:S({},t,{reqGoodsNumber:a.goods_number})}}function V(e,o){var r=o("couponsWinData"),a=e.updateData;return{couponsWinData:S({},r,a)}}function T(e,o){var r=o("realNameAuthData"),a=e.updateData;return{realNameAuthData:S({},r,a)}}function P(e,o){var r=o("virtualGoodsData"),a=e.updateData;return{virtualGoodsData:S({},r,a)}}function y(e,o){var r=o("diffTransferData"),a=e.askDiffTransferData,t={};return a&&a.order_sn&&(t.orderSn=a.order_sn),{diffTransferData:S({},r,t)}}function O(e){var o=null,r=e.error_code||null;return String(r)===String(F.default.NoNameIDBefore.code)&&(r=null),r&&(o=F.default.messageFromCode(r)),o}function h(e){var o=e.userIdCard,r=e.realNameAuth,a={};if(o&&(a.needNameAuth=!0,a.realNameAuth=r,o.id_card_name&&o.id_card_no&&(a.realName=o.id_card_name,a.idNumber=o.id_card_no,a.hasIdInfo=!0),o.error_code)){var t=O(o);t&&(a.idCardErrMsg=t)}return{realNameAuthData:a}}function g(e){var o=e.orderRefreshData,r=e.selectedAddress,a={};if(o){var t=w.default.formatRenderData(o);a.addressVo=t.addressVo}return r&&(a.addressVo={address:r.address,addressId:r.addressId,city:r.city,cityId:Number(r.cityId),district:r.district,districtId:Number(r.districtId),labels:r.labels||[],mobile:r.mobile,name:r.name,province:r.province,provinceId:Number(r.provinceId),canotReceived:!1}),a}function N(e,o){var r=e.goodsNumber,a=o("goodsVo");return{goodsVo:S({},a,{goodsNumberComponent:r})}}function E(e,o){var r=e.updateData,a=o("cellBarVo");return{cellBarVo:S({},a,r)}}function R(e){var o=e.customNavData;return S({},o)}Object.defineProperty(exports,"__esModule",{value:!0});var S=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},A=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o.default=e,o}(require("./order_checkout_new.constant")),b=require("../../store/helpers"),w=e(require("../components_order_checkout/order_checkout_data_format")),I=e(require("../../constants/groups")),M=e(require("../../common/std_format")),U=e(require("../components_order_checkout/controller/order_checkout_mall_coupons")),L=e(require("../components/controller/coupons_controller")),B=e(require("./component/order_checkout_virtual_goods/virtual_goods_controller")),F=e(require("../../configs/request_errors")),W=require("../../common/index"),q=20,x=(0,b.createInitialState)({isSupportCustomNav:!1,isIpx:W.SystemInfo.getIpxJudgment(),navTop:0,showPage:!1,showError:!1,addressVo:{},goodsVo:{},skuVo:{},mallVo:{},promotionVo:{},stepVo:{},serviceVo:{},payVo:{},orderVo:{},realNameAuthData:{},disableEditNum:!1,addressData:{},payWindowData:{},countTimeData:{payExpire:1800},discountTipsData:{},mallCouponsListData:{showMallCouponsList:!1,couponsBgMaskShow:!1,mallMainClass:"mall-coupons-main mall-coupons-main-down"},mallCouponToastData:{},couponsWinData:{showCouponsWin:!1,showCouponsWinBg:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},mallCoupons:{},platformCoupons:{},promotionEventVo:{},actionDisable:!1,virtualGoodsData:{},confirmMessage:"",cellBarVo:{},isNewOrSilentUser:(0,b.PropTypes)({default:!1,withoutRender:!0}),newFriendPayConfig:(0,b.PropTypes)({default:!1,withoutRender:!0}),orderServicePath:(0,b.PropTypes)({default:"",withoutRender:!0}),groupVo:(0,b.PropTypes)({default:{},withoutRender:!0}),extendMap:(0,b.PropTypes)({default:null,withoutRender:!0}),orderPrice:(0,b.PropTypes)({default:0,withoutRender:!0}),confirmCode:(0,b.PropTypes)({default:"",withoutRender:!0}),diffTransferData:(0,b.PropTypes)({default:{},withoutRender:!0}),optionMap:(0,b.PropTypes)({default:{},withoutRender:!0})}),k="立即支付",G="正在支付",j="继续支付",Y="申请试用",Q="免费拼单",H="正在拼单",J="请稍候",K="找好友代付";exports.default=(0,b.createReducer)(x,function(e,o,r){switch(o.type){case A.OC_CONFIRM_RENDER_SUCCESS:return n(o,r);case A.OC_CONFIRM_RENDER_ERROR:return D(o,r);case A.OC_UPDATE_PAY_APP_ID:return s(o,r);case A.OC_UPDATE_GOODS_NUMBER:return u(o,r);case A.OC_SET_ADDRESS_DATA:return i(o,r);case A.OC_UPDATE_SERVICE_VO:return p(o,r);case A.OC_UPDATE_STEP_VO:return d(o,r);case A.OC_UPDATE_ORDER_VO:return c(o,r);case A.OC_SET_ACTION_DISABLE:return l(o);case A.OC_SET_PAY_WIN_DATA:return m(o,r);case A.OC_SET_COUNT_DOWN_TIME:return _(o,r);case A.OC_QUERY_USABLE_PROMOTION:return f(o,r);case A.OC_QUERY_PLATFORM_COUPONS:return C(o,r);case A.OC_SET_COUPONS_LIST_DATA:return v(o,r);case A.OC_SET_COUPONS_WIN_DATA:return V(o,r);case A.OC_SET_REAL_NAME_AUTH_DATA:return T(o,r);case A.OC_SET_VIRTUAL_GOODS_DATA:return P(o,r);case A.OC_ASK_DIFF_TRANSFER:return y(o,r);case A.OC_CONFIRM_RENDER_SEC_SUCCESS:return h(o);case A.OC_REQ_ORDER_REFRESH:return g(o);case A.OC_UPDATE_GOODS_VO:return N(o,r);case A.OC_UPDATE_CELL_BAR_VO:return E(o,r);case A.OC_INIT_NAV_BUBBLE:return R(o);case A.OC_UPDATE_ERROR_STATUS:return{showError:o.showError};default:return}}); 
 			}); 
		define("package_c/order_checkout_new/order_checkout_tracking.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var o=e.apply(this,arguments);return new Promise(function(e,r){function a(n,t){try{var p=o[n](t),c=p.value}catch(e){return void r(e)}if(!p.done)return Promise.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}return a("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a=require("../../common/index"),n=e(require("../../storage/ram_manager")),t=e(require("../../libs/regenerator-runtime/runtime")),p=e(require("../../storage/user_storage")),c={NO_COUPON:0,SOME_COUPON_AT_LEAST_ONE_USED:1,SOME_COUPON_NONE_USED:2},i={getGroupOrderDetail:"10045"},_={pvTracking:function(e,o){var r={op:"pv",goods_id:e.$urlQueryObj.goods_id,group_id:e.$urlQueryObj.group_id,sku_id:e.$urlQueryObj.sku_id};o&&(r.is_back=1),(0,a.TrackingRecord)(r,e),e.$firstTimeTrackRecord.pv=!0},mainImpr:function(e){var o=e.$getValue("orderCheckoutNew.isNewOrSilentUser"),n=this.getCommonParams(e),t=r({op:"impr",page_section:"main"},n);o&&(t.xcx_user_tag="silence"),(0,a.TrackingRecord)(t,e)},addressesClick:function(e,o){var n=this.getCommonParams(e),t=r({op:"click",page_section:"addresses",page_element:o},n);(0,a.TrackingRecord)(t,e)},wxAddressClick:function(e,o){var n=this.getCommonParams(e),t=r({op:"click",page_section:"auth_prompt"},o,n);(0,a.TrackingRecord)(t,e)},mallCouponsClick:function(e){var o=this.getCommonParams(e),n=r({op:"click",page_section:"shop_coupon",page_element:"shop_coupon",page_el_sn:"99223"},o);(0,a.TrackingRecord)(n,e)},platformCouponsClick:function(e){var o=this.getCommonParams(e),n=r({op:"click",page_element:"general_coupons"},o);(0,a.TrackingRecord)(n,e)},payBarClick:function(e,o){var n=this.getCommonParams(e),t=e.$getValue("orderCheckoutNew.payVo")||{},p=e.$getValue("orderCheckoutNew.isNewOrSilentUser"),c=e.$getValue("orderCheckoutNew.addressVo")||{},i=r({op:"click",page_element:"pay_btn",page_el_sn:"99229",coupon_usage:this.getCouponUsage(e),friend_pay:-1===t.selectedAppId,is_pap_pay:t.papPaySigned?"1":"0",address_id:c.addressId||"0"},o,n);p&&(i.xcx_user_tag="silence"),(0,a.TrackingRecord)(i,e)},onNavBackClick:function(e){var o={op:"click",page_section:"top_bar",page_element:"back"};(0,a.TrackingRecord)(o,e)},onNavBackConfirm:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"click",page_element:"paying_btn",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};e.orderSn&&(r.order_sn=e.orderSn),(0,a.TrackingRecord)(r,e)},onNavBackCancel:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"click",page_element:"give_up_btn",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};e.orderSn&&(r.order_sn=e.orderSn),(0,a.TrackingRecord)(r,e)},onNavBackImpr:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"impr",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};e.orderSn&&(r.order_sn=e.orderSn),(0,a.TrackingRecord)(r,e)},friendPayModalConfirm:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"click",page_section:"friend_pay_popup",page_element:"friend_pay_btn",goods_id:o.goodsId,order_sn:e.orderSn,event_type:o.eventType};(0,a.TrackingRecord)(r,e)},friendPayModalCancel:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"click",page_section:"friend_pay_popup",page_element:"cancel_btn",goods_id:o.goodsId,order_sn:e.orderSn,event_type:o.eventType};(0,a.TrackingRecord)(r,e)},friendPayModalImpr:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r={op:"impr",page_section:"friend_pay_popup",goods_id:o.goodsId,order_sn:e.orderSn,event_type:o.eventType};(0,a.TrackingRecord)(r,e)},reiMallCouponImpr:function(e){var o=e.$getValue("orderCheckoutNew.mallCouponsListData").reiMallCoupons,n=e.$getValue("orderCheckoutNew.goodsVo")||{},t=e.$getValue("orderCheckoutNew.skuVo")||{};o&&o.length&&o.forEach(function(o){if(o.canTakenCount>0){var p={batch_id:o.batchId,display_type:o.displayType};36===Number(o.displayType)?p.page_element="like_coupon_btn":p.page_element="coupon_recie_btn";var c=r({op:"impr",page_section:"coupon_list",page_el_sn:"99221",goods_id:n.goodsId,sku_id:t.skuId},p);(0,a.TrackingRecord)(c,e)}})},depositGoodsImpr:function(e){var o=this.getCommonParams(e),n=r({op:"impr",page_section:"earnest_choose",page_el_sn:"204913"},o);(0,a.TrackingRecord)(n,e)},couponTipsImpr:function(e){var o=this.getCommonParams(e),n=r({op:"impr",page_section:"show_coupon_popup"},o);(0,a.TrackingRecord)(n,e)},closePayWinClick:function(e){var o=this.getCommonParams(e),n=r({op:"click",page_section:"cancel_pay_prompt",page_element:"close_btn",page_el_sn:"99121"},o);(0,a.TrackingRecord)(n,e)},payWinPayClick:function(e){var o=this.getCommonParams(e),n=e.$getValue("orderCheckoutNew.payVo")||{},t=r({op:"click",page_section:"cancel_pay_prompt",page_element:"pay_btn",friend_pay:-1===n.selectedAppId,page_el_sn:"99119"},o);(0,a.TrackingRecord)(t,e)},payWinAddrClick:function(e){var o=this.getCommonParams(e),n=r({op:"click",page_section:"cancel_pay_prompt",page_element:"alt_add",page_el_sn:"99120"},o);(0,a.TrackingRecord)(n,e)},showPayWinImpr:function(e){var o=this.getCommonParams(e),n=r({op:"impr",page_section:"cancel_pay_prompt",page_el_sn:"99122"},o);(0,a.TrackingRecord)(n,e)},selStepClick:function(e){var o=this.getCommonParams(e),n=r({op:"click",page_section:"earnest_choose",page_el_sn:"204913"},o);(0,a.TrackingRecord)(n,e)},realNameImpr:function(e){var o=this.getCommonParams(e),n=r({op:"impr",page_section:"real_info_prompt",page_el_sn:"97474"},o);(0,a.TrackingRecord)(n,e)},showNameAuthWinClick:function(e){var o=this.getCommonParams(e),n=e.$getValue("orderCheckoutNew.realNameAuthData")||{},t=r({op:"impr",page_section:"id_card_popup",page_element:"general_coupons",page_el_sn:"99645"},o);(0,a.TrackingRecord)(t,e);var p=r({op:"click",page_section:n.hasIdInfo?"real_info_prompt":"id_card_prompt",page_element:n.hasIdInfo?"edit_btn":"write_btn",page_el_sn:n.hasIdInfo?"97474":"99646"},o);(0,a.TrackingRecord)(p,e)},submitIdCardInfo:function(e,o){var n=this.getCommonParams(e),t=r({op:"click",page_section:"id_card_popup",page_element:"save_btn",page_el_sn:"99977"},n);if((0,a.TrackingRecord)(t,e),o.isFirstNameAuth){var p=r({op:"impr",page_section:"real_info_prompt",page_el_sn:"97474"},n);(0,a.TrackingRecord)(p,e)}},showColCoupon:function(e,o){var n=this.colCouponParams(e,o),t=r({op:"click",page_element:"like_coupon_btn",page_el_sn:"99221"},n);if(t.page_section="coupon_list",(0,a.TrackingRecord)(t,e),o&&o.detail&&o.detail.showColCouponModal){var p=r({op:"impr",page_element:"like_recieve_btn",page_el_sn:"384596"},n);(0,a.TrackingRecord)(p,e)}},doLikeMall:function(e,o){var n=this.colCouponParams(e,o),t=r({op:"click",page_element:"have_like_btn",page_el_sn:"384600"},n);(0,a.TrackingRecord)(t,e)},getColCoupon:function(e,o){var n=this.colCouponParams(e,o),t=r({op:"impr",page_element:"have_like_btn",page_el_sn:"384600"},n);(0,a.TrackingRecord)(t,e);var p=r({op:"click",page_element:"like_recieve_btn",page_el_sn:"384596"},n);(0,a.TrackingRecord)(p,e)},closeColCoupon:function(e,o){var n=this.colCouponParams(e,o),t=r({op:"click",page_element:"close_btn"},n);(0,a.TrackingRecord)(t,e)},colCouponParams:function(e,o){var r=e.$getValue("orderCheckoutNew.goodsVo")||{},a=e.$getValue("orderCheckoutNew.skuVo")||{},n={page_section:"coupon_like_popup",display_type:36,goods_id:r.goodsId,sku_id:a.skuId};return o&&o.detail&&o.detail.batchId&&(n.batch_id=o.detail.batchId),n},payOrder:function(e,o,r){var a=e.$getValue("orderCheckoutNew.goodsVo")||{},t=e.$getValue("orderCheckoutNew.groupVo")||{},p=e.$getValue("orderCheckoutNew.orderVo")||{},c=e.$getValue("orderCheckoutNew.payVo")||{},i=e.$getValue("orderCheckoutNew.skuVo")||{},_=o.orderSn,u=o.groupOrderId,s={op:"event",sub_op:"pay_order",group_order_id:u,order_sn:_,order_amount:parseInt(p.payPrice,10)>0?parseInt(p.payPrice,10):0,goods_id:a.goodsId,goods_type:a.goodsType,event_type:a.eventType,goods_number:a.goodsNumber,group_num:t.customerNum,sku_id:i.skuId,group_id:t.groupId,tag:"pdd_order",mall_id:a.mallId,friend_pay:-1===c.selectedAppId,is_pap_pay:c.papPaySigned?1:0};r.bizType&&(s.refer_biz_type=r.bizType),r.sourceType&&(s.source_type=r.sourceType),r.xcxUserTag&&(s.xcx_user_tag="silence"),r.mallCouponId&&(s.merchant_coupon_id=r.mallCouponId),r.platformCouponId&&(s.platform_coupon_id=r.platformCouponId),r.couponNumber>0&&(s.coupon_number=r.couponNumber),r.eventId>0&&(s.event_id=r.eventId),Object.prototype.hasOwnProperty.call(r,"srvTotalPrice")&&(s.srv_total_price=r.srvTotalPrice),Object.prototype.hasOwnProperty.call(r,"couponType")&&(s.coupon_type=r.couponType),r.couponPrice>0&&(s.coupon_discount=r.couponPrice),n.default.wxappId&&(s.refer_wxapp_id=n.default.wxappId),a.activityType&&(s.activity_type=a.activityType),"scan_code"===e.$urlQueryObj.share_form&&(s.refer_share_form="scan_code"),Object.prototype.hasOwnProperty.call(e.$urlQueryObj,"subjects_id")&&(s.refer_subjects_id=e.$urlQueryObj.subjects_id),Object.prototype.hasOwnProperty.call(e.$urlQueryObj,"subject_id")&&(s.refer_subject_id=e.$urlQueryObj.subject_id),Object.keys(n.default.readActivityPages).forEach(function(e){s["refer_xcx_campaign_"+e]=1,s.refer_xcx_campaign_id?s.refer_xcx_campaign_id+=e+"@":s.refer_xcx_campaign_id=e+"@"}),s.refer_xcx_campaign_id&&(s.refer_xcx_campaign_id=s.refer_xcx_campaign_id.substr(0,s.refer_xcx_campaign_id.length-1)),this.getGroupInfoTracking(u,e,s)},getGroupInfoTracking:function(e,n,c){var _=this;return o(t.default.mark(function o(){var u,s,d,g,l;return t.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(u=r({},c),o.prev=1,!e){o.next=11;break}return s=a.Request.requestDataWithCmd(i.getGroupOrderDetail,{restfulParam:e}),o.next=6,a.Request.runRequest(s);case 6:d=o.sent,g=d.leader_order_info&&d.leader_order_info.uid||"",l=p.default.getUserId(),u.Is_group_owner=String(g)===String(l)?"1":"0",d&&d.group_order_info&&void 0!==d.group_order_info.group_status?u.group_status=d.group_order_info.group_status:u.group_status=0;case 11:o.next=16;break;case 13:o.prev=13,o.t0=o.catch(1),console.error(o.t0);case 16:(0,a.TrackingRecord)(u,n);case 17:case"end":return o.stop()}},o,_,[[1,13]])}))()},getCommonParams:function(e){var o=e.$getValue("orderCheckoutNew.goodsVo")||{},r=e.$getValue("orderCheckoutNew.groupVo")||{},a=e.$getValue("orderCheckoutNew.skuVo")||{},n=e.$getValue("orderCheckoutNew.realNameAuthData")||{},t={goods_id:o.goodsId,event_type:o.eventType,goods_number:o.goodsNumber,group_id:r.groupId,sku_id:a.skuId,classification:n&&n.needNameAuth?1:0};return e.orderSn&&(t.order_sn=e.orderSn),t},getCouponUsage:function(e){var o=e.$getValue("orderCheckoutNew.promotionVo")||{},r=(o.merchantCouponVo||{}).couponId,a=(o.merchantCouponVo||{}).promotionStatus,n=(o.platformCouponVo||{}).couponId,t=(o.platformCouponVo||{}).promotionStatus;if(1===Number(a)&&r||1===Number(t)&&n)return c.SOME_COUPON_AT_LEAST_ONE_USED;var p=e.$getValue("orderCheckoutNew.couponsWinData")||{},i=p.platformCoupons,_=p.mallCoupons;return _&&_.enableCoupons&&_.enableCoupons.length>0||i&&i.enableCoupons&&i.enableCoupons.length>0?c.SOME_COUPON_NONE_USED:c.NO_COUPON}};exports.default=_; 
 			}); 
		define("package_c/team_list/team_list.actions.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,u){try{var o=t[a](u),s=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setGroupData=exports.unlikeMulti=exports.loadGroupGoodsList=exports.refreshLoadGroupPage=exports.loadGroupPage=void 0;var t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../libs/regenerator-runtime/runtime")),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../actions/common")),n=require("../../common/index"),a=function(e){e(r.hideLoading()),e({type:"RECIEVE_GROUP_DATA",data:{showError:!0}}),e(r.showToast("NO_NETWORK_MSG"))},u=function(){var r=e(t.default.mark(function e(r){var a;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Request.runRequest(n.Request.requestDataWithCmd(10170,{params:r}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,void 0)}));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=e(t.default.mark(function e(r){var a;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.optId){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,n.Request.runRequest(n.Request.requestDataWithCmd(10037,{params:{opt_type:1,offset:r.offset,size:r.size?r.size:20,sort_type:"DEFAULT"},restfulParam:r.optId,opts:{verifyTokenHeader:!0}}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,void 0)}));return function(e){return r.apply(this,arguments)}}(),s=function(){var r=e(t.default.mark(function e(r){var a,u;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.Request.requestDataWithCmd(10074,{}),e.next=4,n.Request.runRequest(a);case 4:u=e.sent,r({type:"RECIEVE_HOME_OPERATIONS_DATA",data:u}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,void 0,[[0,8]])}));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=e(t.default.mark(function e(r,a){var u,o;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((u=a("teamList.goodsIds"))&&u.length>0)){e.next=8;break}return u.length>30&&(u=u.slice(0,30)),e.next=6,n.Request.apiRequest("POST","api/zenon/user/goods_status_batch",{goods_id_list:u});case 6:o=e.sent,r({type:"RECIEVE_GOODS_BATCH_FAV_STATUS",res:o});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,void 0,[[0,10]])}));return function(e,t){return r.apply(this,arguments)}}();exports.loadGroupPage=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var o=e(t.default.mark(function e(o,c){var p,f;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Request.apiRequest("GET","api/piece/parent_order_group_detail",{parent_order_sn:r});case 2:if(!((p=e.sent)&&p.group_order_info_dto_list&&p.group_order_info_dto_list.length>0)){e.next=11;break}return o({type:"RECIEVE_PARENT_ORDER_GROUP_LIST_DATA",res:p}),o(i),e.next=8,o(s);case 8:return f=c("teamList.recParams"),u(Object.assign({},f,{offset:0})).then(function(e){e&&o({type:"RECEIVE_RECOMMEND_GOODS_DATA",res:e})}).catch(function(e){console.error(e)}),e.abrupt("return",p);case 11:return o(a),e.abrupt("return",void 0);case 13:case"end":return e.stop()}},e,void 0)}));return function(e,t){return o.apply(this,arguments)}}()},exports.refreshLoadGroupPage=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var a=e(t.default.mark(function e(a){var u;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Request.apiRequest("GET","api/piece/parent_order_group_detail",{parent_order_sn:r});case 2:(u=e.sent)&&u.group_order_info_dto_list&&u.group_order_info_dto_list.length>0&&(a({type:"RECIEVE_PARENT_ORDER_GROUP_LIST_DATA",res:u}),a(i));case 4:case"end":return e.stop()}},e,void 0)}));return function(e){return a.apply(this,arguments)}}()},exports.loadGroupGoodsList=function(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var a=e(t.default.mark(function e(a,s){var i,c,p,f,d,_,l,v,E,h,x,R;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],n||(i=s("teamList.groupGoodsList")),c=s("teamList.tabStatus"),p=s("teamList.cacheTabList"),f=p[r]||[],!((d=f.length-i.length)>10)){e.next=10;break}a({type:"FILL_CACHELIST_INTO_PAGE",index:r}),e.next=27;break;case 10:if(0!==r){e.next=19;break}return _=s("teamList.recParams"),l=c[0]||{},v=l.page,e.next=15,u(Object.assign({},_,{offset:20*v}));case 15:E=e.sent,a({type:"RECEIVE_RECOMMEND_GOODS_DATA",res:E}),e.next=27;break;case 19:if(!(h=c[r])){e.next=27;break}return(x=h.page)<=0&&(x=1),e.next=25,o({offset:20*(x-1),optId:h.opt_id});case 25:R=e.sent,a({type:"RECEIVE_GROUP_TAB_GOODS_DATA",current:r,res:R});case 27:case"end":return e.stop()}},e,void 0)}));return function(e,t){return a.apply(this,arguments)}}()},exports.unlikeMulti=function(r){return e(t.default.mark(function e(){var a;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Request.apiRequest("POST","api/zenon/goods/unlike_multi",{goods_id_list:r,unlike_type:"NORMAL"});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,void 0)}))},exports.setGroupData=function(e){return{type:"RECIEVE_GROUP_DATA",data:e}}; 
 			}); 
		define("package_c/team_list/team_list.reducer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},r=require("../../store/helpers"),a=t(require("../../common/data_util")),o=t(require("../../common/std_format")),s=t(require("../../common/image_util")),n=t(require("../../constants/groups")),i=(0,r.createInitialState)({showError:!1,showMainPage:!1,displayLoadMore:!1,parentOrderSn:(0,r.PropTypes)({default:"",withoutRender:!0}),groupOrderList:[],status:"",leftTime:-1,orderDesc:"",goodsIds:(0,r.PropTypes)({default:[],withoutRender:!0}),canRemoveFav:!1,favIds:(0,r.PropTypes)({default:[],withoutRender:!0}),tabStatus:[],canShowRec:!1,groupGoodsList:[],cacheTabList:(0,r.PropTypes)({default:[],withoutRender:!0}),curTabIndex:0,recParams:(0,r.PropTypes)({default:{},withoutRender:!0}),listId:(0,r.PropTypes)({default:"",withoutRender:!0}),groupNoticePopupVisible:!1,groupNoticeContentShow:!1,segmentScrollVal:(0,r.PropTypes)({default:0,withoutRender:!0,private:!0})}),u=function(t){var e=[];if(1===t.group_status)return t.uid_avatar_list||[];if(t&&t.uid_avatar_list&&t.uid_avatar_list.length>0){var r=t.customer_num;r>3&&(r=3);for(var a=0;a<r;a++){var o={};a<t.uid_avatar_list.length?o.avatar=(t.uid_avatar_list[a]||{}).avatar||"":o.avatar="",e.push(o)}}return e},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.indexOf(0)>-1?"going":t.indexOf(2)>-1?-1===t.indexOf(1)?"all_fail":"part_fail":"complete"},p=function(t){var e="",r="";return 1===t.group_status?(e=t.use_single_group_card?"免拼成功":"拼单成功",r="查看详情",0===t.shipping_status&&(e+="，请耐心等待商家发货")):2===t.group_status?(e="拼单失败，款项将原路退回",r="再次发起拼单"):0===t.group_status&&(r="邀请好友"),t.is_on_sale?t.quantity<=0&&(e="该商品已售罄"):e="该商品已下架",{groupText:e,groupButton:r}},d=function(t,e){if(!t||t.length<=0)return[];var r=[n.default.EventType.LUCKY_DRAW,n.default.EventType.FREE_TRIAL],a=[];return t.forEach(function(t){if(-1===r.indexOf(parseInt(t.event_type,10))&&1!==parseInt(t.is_app,10)){var n={goodsId:t.goods_id,eventType:parseInt(t.event_type,10),isApp:parseInt(t.is_app||0,10),goodsName:t.goods_name||"",imgUrl:s.default.cdnCompress(t.hd_thumb_url||""),price:o.default.price(parseInt((t.group?t.group.price:t.price)||0,10),100),soldQuantity:o.default.sales(parseInt(t.sales||t.cnt,10)),nationalFlag:t.country?s.default.getCDNImgURL("nation/rect/"+t.country+".png"):"",hasMallCoupon:parseInt(t.has_mall_coupon||0,10),salesTip:t.sales_tip,tabKey:""+e};n.transData={preloadImgUrl:n.imgUrl},t.ad&&(n.transData.ad=t.ad),t.p_rec&&(n.transData.p_rec=t.p_rec),t.p_search&&(n.transData.p_search=t.p_search),a.push(n)}}),a},l=function(t,e){var r=(t.group||{}).price||t.price,a={goodsId:t.goods_id,imgUrl:s.default.cdnCompress(t.hd_thumb_url||t.thumb_url,t.hd_thumb_wm||t.thumb_wm),goodsName:t.goods_name,price:o.default.price(r,100),soldQuantity:o.default.sales(t.sales||t.cnt),nationalFlag:t.country?s.default.getCDNImgURL("nation/rect/"+t.country+".png"):"",tag:parseInt(t.tag,10),eventType:t.event_type,salesTip:t.sales_tip,tabKey:""+e},n=["spike","economical-brand","go-shopping","good-fruit","brand-clean"];return!isNaN(a.tag)&&a.tag>=0&&a.tag<n.length&&(a.activityFlagClass="activity-flag activity-flag-gap activity-flag-"+n[a.tag]),a.transData={preloadImgUrl:a.imgUrl},t.ad&&(a.transData.ad=t.ad),t.p_rec&&(a.transData.p_rec=t.p_rec),t.p_search&&(a.transData.p_search=t.p_search),a};exports.default=(0,r.createReducer)(i,function(t,r,o){switch(r.type){case"RECIEVE_PARENT_ORDER_GROUP_LIST_DATA":var s=r.res,n=s.server_time,i={serverTime:n};if(s.group_order_info_dto_list&&s.group_order_info_dto_list.length>0){var g=s.group_order_info_dto_list,c=(s.group_order_info_dto_list[0]||{}).expire_time||-1;c>0&&c>n&&(i.leftTime=c-n);var f=[],h=[],m=[],v=[];g.forEach(function(t){var e={groupOrderId:t.group_order_id,groupStatus:t.group_status,thumbUrl:t.thumb_url,goodsId:t.goods_id,goodsName:t.goods_name,isOnSale:t.is_on_sale,quantity:t.quantity,customerNum:t.customer_num,memberCount:t.member_count,leftUser:t.customer_num-t.member_count},r=p(t);e.groupText=r.groupText,e.buttonText=r.groupButton,e.users=u(t),v.push(t.goods_id),h.push(e),m.push(t.goods_name),f.push(t.group_status)});var T=_(f);return i.groupOrderList=h,i.status=T,i.orderDesc=m.join(",").substring(0,30),i.goodsIds=v,i.recParams={goods_id:(s.group_order_info_dto_list[0]||{}).goods_id,group_order_id:(s.group_order_info_dto_list[0]||{}).group_order_id,referrer:"group_order",page_type:0,count:20,list_id:"xcx_group_list_rec_list_"+a.default.getRandomString(6),group_role:2,group_status:""},i.showMainPage=!0,i}return{};case"RECIEVE_GOODS_BATCH_FAV_STATUS":var y=r.res;if(y&&y.result&&y.result.goods_status){var O=(y.result.goods_status||[]).filter(function(t){return t.is_fav}),b=[];return O.length>0&&(b=O.map(function(t){return t.goods_id})),{favIds:b,canRemoveFav:O.length>0}}return{};case"RECIEVE_HOME_OPERATIONS_DATA":var I=r.data;if(I&&I.length>0){var S=JSON.parse(JSON.stringify(o("tabStatus"))),E=[{opt_name:"推荐",opt_id:-1}],R=I.map(function(t){return{opt_name:t.opt_name,opt_id:t.opt_id}}),L=[];return(R=E.concat(R)).forEach(function(t,e){var r={opt_name:t.opt_name,opt_id:t.opt_id,page:1,canLoadMore:!0,showError:!1};S[e]=r,L[e]=[]}),{cacheTabList:L,tabStatus:S,canShowRec:!0}}return{};case"RECEIVE_RECOMMEND_GOODS_DATA":var N=r.res,D={},A=JSON.parse(JSON.stringify(o("tabStatus")||[])),P=JSON.parse(JSON.stringify(o("cacheTabList")));if(P&&P[0]||(P[0]=[]),(!N.has_more||(N.list||[]).length<=10)&&(A[0].canLoadMore=!1),N.list&&N.list.length>0){var C=P[0]||[],w=A[0].page,x=d(N.list,0);C=C.concat(x),A[0].page=w+1,P[0]=C,C.length%2!=0?D.groupGoodsList=C.slice(0,C.length-1):D.groupGoodsList=C,D.cacheTabList=P}else 0===N.list.length&&(A[0].canLoadMore=!1);return D.tabStatus=A,D;case"RECEIVE_GROUP_TAB_GOODS_DATA":var U=r.res,G=r.current,M={},J=JSON.parse(JSON.stringify(o("tabStatus")||[])),V=JSON.parse(JSON.stringify(o("cacheTabList")));if(V||(V[G]=[]),U.goods_list&&0!==U.goods_list.length||(J[G].canLoadMore=!1),U&&U.goods_list&&U.goods_list.length>0){var q=V[G],F=J[G].page,j=U.goods_list.map(function(t){return l(t,G)});q=q.concat(j),q=a.default.objectArrayDuplicateRemove(q,"goodsId"),J[G].page=F+1,V[G]=q,q.length%2!=0?M.groupGoodsList=q.slice(0,q.length-1):M.groupGoodsList=q,M.cacheTabList=V}return M.tabStatus=J,M;case"FILL_CACHELIST_INTO_PAGE":var B=r.index,H=JSON.parse(JSON.stringify(o("cacheTabList"))),K=o("groupGoodsList");if(!H||!H[B])return H[B]=[],{cacheTabList:H};if(H[B].length>K.length){var Q=H[B],k=K.length+20,W=[];return W=k>Q.length&&Q.length%2!=0?Q.slice(0,Q.length-1):Q.slice(0,k),{groupGoodsList:W}}return{};case"RECIEVE_GROUP_DATA":return e({},r.data);default:return}}); 
 			}); 
		define("package_c/transac_batch_checkout/component/confirm_data_format.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(exports,"__esModule",{value:!0});var e=o(require("../../../common/std_format")),t=o(require("../../components_order_checkout/controller/order_checkout_coupons_format")),i=o(require("../../../models/format/order_data_format")),a={formatRenderData:function(o){var a=this,r={serverTime:o.server_time,confirmCode:o.confirm_code,confirmMessage:o.confirm_message};o.extend_map&&(r.extendMap=o.extend_map),o.id_card_vo&&(r.idCardVo=o.id_card_vo);var s=o.order_vo||{},n={payContent:s.pay_content,payPrice:s.pay_price,payPriceStd:e.default.price(s.pay_price,100),payTitle:s.pay_title,orderPrice:s.order_price,couponPrice:s.coupon_price};if(r.orderVo=n,r.payVo=i.default.payVoFormat(o.pay_vo),o.cart_item_list){var d=[];o.cart_item_list.forEach(function(o){var e={};if(o.goods_list){var t=[];o.goods_list.forEach(function(o){var e=a.formatGoodsInfo(o,s);t.push(e)}),e.goodsList=t}if(o.mall_vo&&(e.mallVo=a.formatMallInfo(o.mall_vo)),o.merchant_coupon_vo){var i=o.merchant_coupon_vo||{};e.merchantCouponVo=a.formatCouponData(i)}d.push(e)}),r.cartItemList=d}if(o.invalid_goods_list){var u=[];o.invalid_goods_list.forEach(function(o){var t={goodsName:o.goods_name,thumbUrl:o.thumb_url,unitPrice:o.unit_price,unitPriceStd:e.default.price(o.unit_price,100),goodsId:o.goods_id,skuId:o.sku_id,goodsNumber:o.goods_number,groupId:o.group_id};o.labels&&(t.labels=o.labels),u.push(t)}),r.invalidGoodsList=u}if(o.platform_coupon_vo){var c=o.platform_coupon_vo;r.platformCouponVo=this.formatCouponData(c)}if(o.platform_coupon_select_vo){var _={},p=o.platform_coupon_select_vo;Object.keys(p).forEach(function(o){var e="";switch(String(o)){case"priority":e="priority";break;case"superposition_coupon":e="superpositionCoupon";break;case"un_usable_coupon_list":e="unUsableCouponList";break;case"usable_coupon_list":e="usableCouponList"}if(e)if("unUsableCouponList"===e||"usableCouponList"===e){if(p[o]){var i=p[o].map(function(o){return t.default.formatPlatformCoupons(o)});_[e]=i}}else"superpositionCoupon"!==e&&p[o]&&(_[e]=p[o])}),r.platformCouponselectVo=_}if(o.address_vo){var l=o.address_vo,m={address:l.address||"",addressId:l.address_id||"",city:l.city,cityId:l.city_id,district:l.district,districtId:l.district_id,mobile:l.mobile,name:l.name,province:l.province,provinceId:l.province_id};l.labels&&(m.labels=l.labels),r.addressVo=m}return r},formatGoodsInfo:function(o,t){var i={catId:o.cat_id,catId1:o.cat_id1,catId2:o.cat_id2,catId3:o.cat_id3,catId4:o.cat_id4,customerNum:o.customer_num||"",eventType:o.event_type,goodsId:o.goods_id,goodsName:o.goods_name,goodsNumber:o.goods_number,goodsType:o.goods_type,groupId:o.group_id,limitNumber:o.limit_number,mallId:o.mall_id,overseaType:o.oversea_type,realNameAuth:o.real_name_auth,saleStatus:o.sale_status,skuId:o.sku_id,specifications:o.specifications,stepStatus:o.step_status,thumbUrl:o.thumb_url,unitPrice:o.unit_price,unitPriceStd:e.default.price(o.unit_price,100),limitStatus:o.limit_status};return o.activity_id&&(i.activityId=o.activity_id),o.activity_type&&(i.activityType=o.activity_type),o.labels&&(i.labels=o.labels),95e5-t.order_price<o.unit_price?i.orderlimit=!0:i.orderlimit=!1,i},formatCouponData:function(o){return{couponDiscount:o.coupon_discount,displayName:o.display_name||"",minAmount:o.min_amount||"",notUse:o.not_use,promotionStatus:parseInt(o.promotion_status,10),eventId:o.event_id||"",couponId:o.coupon_id||"",mallId:o.mall_id||"",couponNumber:o.coupon_number||""}},formatMallInfo:function(o){var e={id:o.id,logo:o.logo,mall_order_price:o.mall_order_price,name:o.name,name_type:o.name_type};return o.labels&&(e.labels=o.labels),e}};exports.default=a; 
 			}); 
		define("package_c/transac_batch_checkout/transac_batch_checkout.action.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r.default=t,r}function r(t){return t&&t.__esModule?t:{default:t}}function e(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,a){try{var u=r[o](a),s=u.value}catch(t){return void e(t)}if(!u.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateErrorStatus=exports.setCouponsWinData=exports.setCouponsListData=exports.setCountDownTime=exports.setPayWinData=exports.setActionDisable=exports.updateOrderVo=exports.setAddressData=exports.updatePayAppId=exports.queryUsablePromotion=exports.loadRefreshData=exports.loadPageData=void 0;var n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},o=function(){function t(t,r){var e=[],n=!0,o=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(n=(u=s.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return t(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=r(require("../../libs/regenerator-runtime/runtime")),u=require("../../common/index"),s=t(require("./transac_batch_checkout.constant")),i=t(require("../../actions/common")),c=r(require("../../controller/config_controller")),p=r(require("../../common/logger")),d={},f=function(t){var r={front_env:8,front_version:6,refresh:!1};return t.$urlQueryObj.goods_list&&(r.goods_list=JSON.parse(t.$urlQueryObj.goods_list)||[]),r},l=(exports.loadPageData=function(t){return function(){var r=e(a.default.mark(function r(e){var n,l,_;return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if((d=f(t)).goods_list&&d.goods_list.length>0){r.next=4;break}return e(i.showToast("参数错误")),r.abrupt("return");case 4:return t.$showLoading(),n=u.Request.apiRequest("POST","api/morgan/confirm/render/merge",d,!1),l=c.default.getConfig("pap_pay").then({}).catch(function(){return!1}),_={},r.next=10,Promise.all([n,l]).then(function(t){var r=o(t,1);_=r[0];var n=t[1];e({type:s.CONFIRM_RENDER_SUCCESS,confirmRenderData:_,usePapPay:n,isConfirmRender:!0})}).catch(function(t){e({type:s.UPDATE_ERROR_STATUS,showError:!0}),p.default.sendDeadlyError({bussiness_type:"interface",action:"get_render",url_path:"api/morgan/confirm/render/merge",error_code:t.error_code,error_msg:t.error_msg})});case 10:t.$hideLoading();case 11:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.loadRefreshData=function(t,r){return function(){var n=e(a.default.mark(function e(n){var o,i,c,f,l,_,m;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$showLoading(),d.refresh=!0,r.goodsNumber&&r.skuId&&(o=[],i=t.$getValue("transacBatch.cartItemList"),c=t.$getValue("transacBatch.invalidGoodsList"),i.forEach(function(t){t.goodsList&&t.goodsList.forEach(function(t){var e={goods_id:t.goodsId,goods_number:t.goodsNumber,group_id:t.groupId,sku_id:t.skuId};String(e.sku_id)===String(r.skuId)&&(e.goods_number=r.goodsNumber),o.push(e)})}),c.forEach(function(t){var r={goods_id:t.goodsId,goods_number:t.goodsNumber,group_id:t.groupId,sku_id:t.skuId};o.push(r)}),d.goods_list=o),r&&r.addressId&&(d.address_id=r.addressId),r.promotionVoParams&&(d.promotion_vo=r.promotionVoParams),r.platformCoupon&&(d.platform_coupon=r.platformCoupon),r.merchantCoupon&&(d.merchant_coupon_list&&d.merchant_coupon_list.length>0?(f=!1,l=d.merchant_coupon_list.map(function(t){return String(t.mall_id)!==String(r.merchantCoupon.mall_id)?t:(f=!0,r.merchantCoupon)}),f||l.push(r.merchantCoupon),d.merchant_coupon_list=l):d.merchant_coupon_list=[r.merchantCoupon]),(r.clearPlatformCouponParams||r.clearCouponParams)&&d.platform_coupon&&delete d.platform_coupon,r.clearCouponParams&&r.mallId&&d.merchant_coupon_list&&d.merchant_coupon_list.length>0&&(_=[],d.merchant_coupon_list.forEach(function(t){String(t.mall_id)!==String(r.mallId)&&_.push(t)}),_.length?d.merchant_coupon_list=_:delete d.merchant_coupon_list),e.next=12,u.Request.apiRequest("POST","api/morgan/confirm/render/merge",d,!1);case 12:m=e.sent,n({type:s.CONFIRM_RENDER_SUCCESS,confirmRenderData:m,isConfirmRefresh:!0}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),p.default.sendDeadlyError({bussiness_type:"interface",action:"refresh_order",url_path:"api/morgan/confirm/render/merge",error_code:e.t0.error_code,error_msg:e.t0.error_msg});case 19:t.$hideLoading();case 20:case"end":return e.stop()}},e,void 0,[[0,16]])}));return function(t){return n.apply(this,arguments)}}()},function(t,r,e,o){var a={};e&&(a.queryMerchantParams=n({},e)),o&&(a.queryUsablePromotionParams=n({},o));var s=[],i=0,c=[];return t.$getValue("transacBatch.cartItemList").some(function(t){return!(!t.mallVo||String(t.mallVo.id)!==String(r))&&(t.goodsList&&t.goodsList.forEach(function(t){if(e){var r={goods_id:t.goodsId,sku_id:t.skuId,goods_number:t.goodsNumber,price:t.unitPrice,cat_id:t.catId,cat_id1:t.catId1,cat_id2:t.catId2,cat_id3:t.catId3,goods_type:t.goodsType,event_type:t.eventType,activity_type:t.activityType,activity_id:t.activityId};s.push(r),i+=u.DataUtil.accMul(t.goodsNumber,t.unitPrice)}if(o){var n={goods_id:t.goodsId,goods_num:t.goodsNumber,unit_goods_amount:t.unitPrice,event_type:t.eventType};c.push(n)}}),e&&(a.queryMerchantParams.goods_discount_requests=s,a.queryMerchantParams.shop_order_price=i),o&&(a.queryUsablePromotionParams.goods_fact_vos=c),!0)}),a});exports.queryUsablePromotion=function(t,r){return function(){var n=e(a.default.mark(function e(n){var i,c,p,d,f,_;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$showLoading(),i={mall_id:r},c={mall_id:r},p=l(t,r,c,i),d=t.$getValue("transacBatch.mallCouponsListData"),f=null,d[r]||(f=u.Request.apiRequest("POST","api/lisbon/query_usable_promotion_for_cart",p.queryUsablePromotionParams,!1)),_=u.Request.apiRequest("POST","api/promotion/query_cart_merchant_coupons",p.queryMerchantParams),e.next=10,Promise.all([f,_]).then(function(t){var e=o(t,2),a=e[0],u=e[1];n({type:s.QUERY_USABLE_PROMOTION,mallId:r,usablePromotionData:a,queryMerchantCouponsData:u})}).catch(function(t){n({type:s.QUERY_USABLE_PROMOTION,e:t})});case 10:t.$hideLoading();case 11:case"end":return e.stop()}},e,void 0)}));return function(t){return n.apply(this,arguments)}}()},exports.updatePayAppId=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.UPDATE_PAY_APP_ID,selectedAppId:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setAddressData=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_ADDRESS_DATA,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.updateOrderVo=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.UPDATE_ORDER_VO,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setActionDisable=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_ACTION_DISABLE,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setPayWinData=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_PAY_WIN_DATA,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setCountDownTime=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_COUNT_DOWN_TIME,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setCouponsListData=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_COUPONS_LIST_DATA,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.setCouponsWinData=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.SET_COUPONS_WIN_DATA,updateData:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()},exports.updateErrorStatus=function(t){return function(){var r=e(a.default.mark(function r(e){return a.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e({type:s.UPDATE_ERROR_STATUS,showError:t});case 1:case"end":return r.stop()}},r,void 0)}));return function(t){return r.apply(this,arguments)}}()}; 
 			}); 
		define("package_c/transac_batch_checkout/transac_batch_checkout.constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.CONFIRM_RENDER_SUCCESS="CONFIRM_RENDER_SUCCESS",exports.UPDATE_PAY_APP_ID="UPDATE_PAY_APP_ID",exports.SET_ADDRESS_DATA="SET_ADDRESS_DATA",exports.UPDATE_ORDER_VO="UPDATE_ORDER_VO",exports.SET_ACTION_DISABLE="SET_ACTION_DISABLE",exports.SET_PAY_WIN_DATA="SET_PAY_WIN_DATA",exports.SET_COUNT_DOWN_TIME="SET_COUNT_DOWN_TIME",exports.SET_COUPONS_LIST_DATA="SET_COUPONS_LIST_DATA",exports.QUERY_USABLE_PROMOTION="QUERY_USABLE_PROMOTION",exports.SET_COUPONS_WIN_DATA="SET_COUPONS_WIN_DATA",exports.UPDATE_ERROR_STATUS="UPDATE_ERROR_STATUS"; 
 			}); 
		define("package_c/transac_batch_checkout/transac_batch_checkout.reducer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a){return a&&a.__esModule?a:{default:a}}function o(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=d({},o);a.orderPrice&&a.payPrice&&a.orderPrice-a.payPrice>0&&(t.discountAmountStd=y.default.price(a.orderPrice-a.payPrice,100)),a.cancelPay&&(t.cancelPay=a.cancelPay);var r=V,n="";return a.isPaying?(r=h,0===Number(o.payPrice)&&(r=v),n=A):t.cancelPay?(r=T,-1===Number(e.selectedAppId)&&(r=I)):-1===Number(e.selectedAppId)&&(r=I),t.payText=r,t.subPayText=n,t}function e(a,e){var t=a.confirmRenderData,r=a.usePapPay,n=a.isConfirmRender,s=a.isConfirmRefresh,u=C.default.formatRenderData(t),i={};if(n){var p=u.payVo||{};p.usePapPay=r,!p.selectedAppId&&p.payChannelList&&p.payChannelList.length>0&&(p.selectedAppId=Number(p.payChannelList[0].appId)),r&&(p.payChannelList||[]).some(function(a){return 54===Number(a.appId)&&a.signed&&(p.papPaySigned=!0),54===Number(a.appId)}),i={payVo:p,showPage:!0}}else if(s){var l=e("payVo")||{},c=e("couponsWinData")||{};i={payVo:d({},l,u.payVo||{}),couponsWinData:d({},c,{showCouponsWin:!1,showCouponsWinBg:!1,mainClass:"mall-coupons-main mall-coupons-main-down"})}}var m=o({orderPrice:u.orderPrice,payPrice:u.payPrice},u.orderVo,i.payVo);return d({confirmMessage:u.confirmMessage,addressVo:u.addressVo||{},cartItemList:u.cartItemList||[],platformCouponselectVo:u.platformCouponselectVo||{},platformCouponVo:u.platformCouponVo||{},invalidGoodsList:u.invalidGoodsList||[],orderVo:m},i)}function t(a,e){var t=a.selectedAppId,r=e("payVo"),n=d({},r,{selectedAppId:t}),s=o({},e("orderVo"),n);return{payVo:d({},r,{selectedAppId:t}),orderVo:s}}function r(a,o){var e=o("addressData"),t=a.updateData;return{addressData:d({},e,t)}}function n(a,e){return{orderVo:o(a.updateData,e("orderVo"),e("payVo"))}}function s(a){return{actionDisable:a.updateData.actionDisable}}function u(a,o){var e=o("payWindowData"),t=a.updateData;return{payWindowData:d({},e,t)}}function i(a,o){var e=o("countTimeData"),t=a.updateData;return{countTimeData:d({},e,t)}}function p(a,o){var e=a.updateData||{},t=e.mallCouponsListData,r=e.mallCouponToastData,n={};if(t){var s=o("mallCouponsListData");n.mallCouponsListData=d({},s,t)}if(r){var u=o("mallCouponToastData");n.mallCouponToastData=d({},u,r)}return n}function l(a,o){var e=a.mallId,t=a.usablePromotionData,r=a.queryMerchantCouponsData,n={},s={};if(o("cartItemList").some(function(a){return!(!a.mallVo||String(a.mallVo.id)!==String(e))&&(s=d({},a),!0)}),r){var u=_.default.processMallCoupons(r);n.mallCoupons=d({},u,{goodsList:s.goodsList,mallVo:s.mallVo}),n.merchantCouponVo=s.merchantCouponVo}var i=o("mallCouponsListData");if(n.mallCouponsListData=d({},i),n.mallCouponsListData.mallVo=s.mallVo,t){var p=_.default.processUsablePromotion(t);n.mallCouponsListData[e]=p}return n}function c(a,o){var e=o("couponsWinData"),t=a.updateData;return{couponsWinData:d({},e,t)}}Object.defineProperty(exports,"__esModule",{value:!0});var d=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},m=function(a){if(a&&a.__esModule)return a;var o={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(o[e]=a[e]);return o.default=a,o}(require("./transac_batch_checkout.constant")),f=require("../../store/helpers"),D=require("../../common/index"),C=a(require("./component/confirm_data_format")),y=a(require("../../common/std_format")),_=a(require("../components_order_checkout/controller/order_checkout_mall_coupons")),P=(0,f.createInitialState)({showPage:!1,isIpx:D.SystemInfo.getIpxJudgment(),showError:!1,addressVo:{},payVo:{},orderVo:{},addressData:{},payWindowData:{},countTimeData:{payExpire:1800},mallCouponsListData:{showMallCouponsList:!1,couponsBgMaskShow:!1,mallMainClass:"mall-coupons-main mall-coupons-main-down"},mallCouponToastData:{},couponsWinData:{showCouponsWin:!1,showCouponsWinBg:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},cartItemList:[],invalidGoodsList:[],mallCoupons:{},platformCoupons:{},platformCouponselectVo:{},platformCouponVo:{},actionDisable:!1,confirmMessage:"",merchantCouponVo:(0,f.PropTypes)({default:{},withoutRender:!0}),isLoadAll:(0,f.PropTypes)({default:!1,withoutRender:!0})}),V="立即支付",h="正在支付",T="继续支付",v="正在拼单",A="请稍候",I="找好友代付";exports.default=(0,f.createReducer)(P,function(a,o,d){switch(o.type){case m.CONFIRM_RENDER_SUCCESS:return e(o,d);case m.QUERY_USABLE_PROMOTION:return l(o,d);case m.UPDATE_PAY_APP_ID:return t(o,d);case m.SET_ADDRESS_DATA:return r(o,d);case m.UPDATE_ORDER_VO:return n(o,d);case m.SET_ACTION_DISABLE:return s(o);case m.SET_PAY_WIN_DATA:return u(o,d);case m.SET_COUNT_DOWN_TIME:return i(o,d);case m.SET_COUPONS_LIST_DATA:return p(o,d);case m.SET_COUPONS_WIN_DATA:return c(o,d);case m.UPDATE_ERROR_STATUS:return{showError:o.showError};default:return}}); 
 			}); 
		define("package_c/transac_batch_checkout/transac_batch_tracking.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n])}return o},e=require("../../common/index"),a={pvTracking:function(o,a){var n={op:"pv",page_url:"package_c/transac_batch_checkout/transac_batch_checkout"};a&&(n.is_back=1),(0,e.TrackingRecord)(n,o),o.$firstTimeTrackRecord.pv=!0},platformCouponsImpr:function(a,n){var r=this.getCommonParams(a),t=o({op:"impr"},r);n?(t.page_section="platform_coupon",t.page_el_sn="303275"):(t.page_section="non_platform_coupon",t.page_el_sn="303252"),(0,e.TrackingRecord)(t,a)},platformCouponsClick:function(a){var n=this.getCommonParams(a),r=a.$getValue("transacBatch.platformCouponVo"),t=o({op:"click",page_section:"platform_coupon",page_el_sn:"303251",has_platform_coupon:r&&1===Number(r.promotionStatus)?"1":"0"},n);(0,e.TrackingRecord)(t,a)},mallCouponsClick:function(o,a,n,r){var t=[],p=[];n.forEach(function(o){var e=o.goodsId,a=o.groupId;t.push(e),p.push(a)});var s=[];r&&r.forEach(function(o){var e=o.couponId;s.push(e)});var i=o.$getValue("transacBatch.merchantCouponVo"),c={op:"click",page_section:"goods_list",page_element:"shop_coupon",mall_id:a,goods_id:t.join("_"),group_id:p.join("_"),has_usable_coupon:i&&String(i.mallId)===String(a)&&1===Number(i.promotionStatus)?"1":"0"};s.length&&(c.coupon_id=s.join("_")),(0,e.TrackingRecord)(c,o)},unpaidPopupImpr:function(a){var n=this.getCommonParams(a),r=o({op:"impr",page_section:"unpaid_popup",order_sn:a.parentOrderSn},n);(0,e.TrackingRecord)(r,a)},unpaidPopupClick:function(a,n){var r=this.getCommonParams(a),t=o({op:"click",page_section:"unpaid_popup",order_sn:a.parentOrderSn},r);if(n){var p=this.payType(a);t.page_element="paying_btn",t.page_el_sn="317096",e.ObjectUtil.assign(t,p)}else t.page_element="close_btn";(0,e.TrackingRecord)(t,a)},payBarClick:function(a){var n=this.getCommonParams(a),r=a.$getValue("transacBatch.addressVo"),t=this.payType(a),p=o({op:"click",page_section:"bottom_bar",has_address:r&&r.addressId?1:0},t,n);a.parentOrderSn?(p.page_element="continue_btn",p.page_el_sn="317331",p.order_sn=a.parentOrderSn):(p.page_element="pay_btn",p.page_el_sn="317329"),(0,e.TrackingRecord)(p,a)},payType:function(e){var a=this.getCommonParams(e),n=e.$getValue("transacBatch.payVo")||{};return o({friend_pay:-1===n.selectedAppId,is_pap_pay:n.papPaySigned?"1":"0"},a)},addressesClick:function(a,n){var r=this.getCommonParams(a),t=o({op:"click",page_section:"addresses"},r);n&&(t.page_element=n),(0,e.TrackingRecord)(t,a)},wxAddressClick:function(a,n){var r=this.getCommonParams(a),t=o({op:"click",page_section:"auth_prompt"},n,r);(0,e.TrackingRecord)(t,a)},payOrder:function(a,n){var r=n.payAppId,t=n.papPaySigned,p=n.orderList,s=n.couponDiscountParams,i=n.goodsDiscountList,c=!1;a.$getValue("transacBatch.cartItemList").forEach(function(n){n.goodsList.forEach(function(n){var _=n.goodsId,d=n.groupId,u=n.eventType,g=n.skuId,m=n.goodsNumber,l=n.goodsType,f=n.mallId,h=o({op:"event",sub_op:"pay_order",friend_pay:-1===r,is_pap_pay:t?"1":"0",order_list:JSON.stringify(p),order_amount:p[_],order_sn:a.parentOrderSn+"_"+_,fp_id:a.fpId,goods_id:_,group_id:d,event_type:u,sku_id:g,goods_number:m,goods_type:l,mall_id:f},s);c&&(h.sub_order=1),i[_]&&(h.coupon_discount=i[_]),c=!0,(0,e.TrackingRecord)(h,a)})})},getCommonParams:function(o){var e={},a=o.$getValue("transacBatch.cartItemList");if(a&&a[0]&&a[0].goodsList){var n=[],r=[],t=[],p=[],s=[],i=[];a.forEach(function(o){o.goodsList.forEach(function(o){var e=o.goodsId,a=o.groupId,c=o.eventType,_=o.skuId,d=o.goodsNumber,u=o.goodsType;n.push(e),r.push(a),t.push(c),p.push(_),s.push(d),i.push(u)})}),e={goods_id:n.join("_"),group_id:r.join("_"),event_type:t.join("_"),sku_id:p.join("_"),goods_number:s.join("_"),goods_type:i.join("_")}}return e}};exports.default=a; 
 			}); 
		__wxRoute = 'package_c/components_order_checkout/cell_bar_vo/cell_bar_vo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.js';	define("package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/util"));Component({properties:{cellBarVo:{type:Object,value:{}},goodsVo:{type:Object,value:{}}},data:{},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},methods:{selCellBar:function(){var e=!this.data.cellBarVo.cellBarSelected;this.triggerEvent("selCellBar",{cellBarSelected:e})},toToCellProtocol:function(){e.default.toWeb({specialUrl:!0,src:"https:"+this.data.cellBarVo.protocolUrl},this.page)}}}); 
 			}); 	require("package_c/components_order_checkout/cell_bar_vo/cell_bar_vo.js");
 		__wxRoute = 'package_c/components_order_checkout/collection_coupon/collection_coupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/collection_coupon/collection_coupon.js';	define("package_c/components_order_checkout/collection_coupon/collection_coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function r(n,o){try{var l=t[n](o),u=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}var a=e(require("../../../libs/regenerator-runtime/runtime")),r=require("../../../actions/common"),n=require("../../../common/index"),o=e(require("../../../configs/api")),l={doLikeMall:10348,unLikeMall:10376,takeMerchantCoupon:"10151"},u=!1,c=!1;Component({properties:{mallVo:{type:Object,value:{}}},data:{showColCouponModal:!1,mallLogo:"",mallName:"",salesTip:"",likeMallSuccess:!1},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},methods:{_preventTouchMove:function(){},showColCouponModal:function(e){var r=this;return t(a.default.mark(function t(){var l,u,c,s;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l="",t.prev=1,!(e&&e.detail&&e.detail.mallId)){t.next=11;break}return l=e.detail.batchId,u=e.detail.mallId,r.page.$showLoading(),c=n.DataUtil.formatByPos(o.default.getMallSaleTip,u),t.next=9,n.Request.apiRequest("GET",c,null,!0);case 9:s=t.sent,r.setData({mallLogo:s.mall_logo||"",mallName:s.mall_name||"",salesTip:s.sales_tip||"",showColCouponModal:!0,batchId:l});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.error(t.t0);case 16:r.triggerEvent("showColCouponEvent",{batchId:l,showColCouponModal:r.data.showColCouponModal}),r.page.$hideLoading();case 18:case"end":return t.stop()}},t,r,[[1,13]])}))()},_doLikeMall:function(e){var r=this;return t(a.default.mark(function t(){var n,o,l;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e&&e.currentTarget&&e.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(e.currentTarget.dataset,"likeMallSuccess")&&e.currentTarget.dataset.mallId)){t.next=9;break}if(!u){t.next=4;break}return t.abrupt("return");case 4:return u=!0,n=e.currentTarget.dataset,o=n.likeMallSuccess,l=n.mallId,t.next=8,r._likeUnlikeMall({like:1!==parseInt(o,0),mallId:l});case 8:r.setData({likeMallSuccess:1!==parseInt(o,10)});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:u=!1,r.triggerEvent("doLikeMallEvent",{batchId:r.data.batchId});case 16:case"end":return t.stop()}},t,r,[[0,11]])}))()},_getMallCoupon:function(e){var r=this;return t(a.default.mark(function t(){var o,u,c,s,i;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=e.mallId,u=e.batchId,c={mall_id:o,batch_id:u},s=n.Request.requestDataWithCmd(l.takeMerchantCoupon,{params:c}),t.next=6,n.Request.runRequest(s);case 6:return i=t.sent,t.abrupt("return",i);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(t.t0);case 13:case"end":return t.stop()}},t,r,[[0,10]])}))()},_getColCoupon:function(e){var o=this;return t(a.default.mark(function t(){var l,u,s,i;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e&&e.currentTarget&&e.currentTarget.dataset&&e.currentTarget.dataset.mallId&&e.currentTarget.dataset.batchId)){t.next=14;break}if(!c){t.next=4;break}return t.abrupt("return");case 4:return c=!0,l=e.currentTarget.dataset,u=l.mallId,s=l.batchId,t.next=8,o._likeUnlikeMall({like:!0,mallId:u});case 8:return t.next=10,o._getMallCoupon({mallId:u,batchId:s});case 10:i=t.sent,o.triggerEvent("takeMerchantCouponEvent",{res:i,batchId:s,mallId:u}),o.setData({getColCouponSuccess:!0,likeMallSuccess:!0,discountStd:n.StdFormat.price(i.discount||0,100)}),o.triggerEvent("getColCouponEvent",{batchId:o.data.batchId});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),o.page.$dispatch((0,r.showToast)("领取店铺收藏券失败"));case 19:c=!1;case 20:case"end":return t.stop()}},t,o,[[0,16]])}))()},_likeUnlikeMall:function(e){var r=this;return t(a.default.mark(function t(){var o,u,c,s;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=e.like?l.doLikeMall:l.unLikeMall,u=e.mallId,c=n.Request.requestDataWithCmd(o,{restfulParam:u}),t.next=6,n.Request.runRequest(c);case 6:return s=t.sent,t.abrupt("return",s);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(t.t0);case 13:case"end":return t.stop()}},t,r,[[0,10]])}))()},_closeColCouponModal:function(){this.setData({showColCouponModal:!1}),this.triggerEvent("closeColCouponEvent",{batchId:this.data.batchId})},_commonTrackingParams:function(){var e={display_type:36};return this.data.batchId&&(e.batch_id=this.data.batchId),e}}}); 
 			}); 	require("package_c/components_order_checkout/collection_coupon/collection_coupon.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_address/order_checkout_address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_address/order_checkout_address.js';	define("package_c/components_order_checkout/order_checkout_address/order_checkout_address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{addressVo:{type:Object,value:{}},realNameAuthData:{type:Object,value:{}},actionDisable:{type:Boolean,value:!1},showAddress:{type:Boolean,value:!1}},data:{showWechatAddAddress:!!wx.chooseAddress},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},ready:function(){this.realNameAuth=this.selectComponent("#realNameAuth")},methods:{editAddress:function(){this.triggerEvent("editAddress")},addAddress:function(){this.triggerEvent("addAddress")},wechatAddAddress:function(){this.triggerEvent("wechatAddAddress")},submitIdCardInfo:function(e){e&&e.detail&&this.triggerEvent("submitIdCardInfo",e.detail)},showNameAuthWinClick:function(){this.triggerEvent("showNameAuthWinClick")},showNameAuthWin:function(){this.realNameAuth.showNameAuthWin()}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_address/order_checkout_address.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.js';	define("package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e])}return o};Component({properties:{couponsWinData:{type:Object,value:{}},mallCouponsListData:{type:Object,value:{}},mallVo:{type:Object,value:{}},goodsVo:{type:Object,value:{}},promotionVo:{type:Object,value:{}}},data:{},attached:function(){var o=getCurrentPages();this.page=o[o.length-1]},methods:{_hideCouponsWin:function(){this.triggerEvent("hideCouponsWinEvent")},_preventTouchMove:function(){},defaultClick:function(){},selectCouponItem:function(t){if(t&&t.currentTarget&&t.currentTarget.dataset){var n=t.currentTarget.dataset,e=n.couponId,u=n.eventId,r=n.notUse,a=t.currentTarget.dataset.type,p=this.data,i=p.couponsWinData,l=p.promotionVo,s={};if(i.coupons){if(1===Number(a)){if(i&&i.coupons&&i.platformCouponVo){var c=o({},i),m=o({},c.platformCouponVo),d=i.platformCouponVo,g=d.promotionStatus;e&&1===Number(g)&&String(e)===String(d.couponId)&&(r=!0,e=null),s.platformCoupon={not_use:!!r,coupon_id:e||null},m.notUse=r,m.couponId=e,this.setData({couponsWinData:o({},c,{platformCouponVo:o({},m)})})}}else if(0===Number(a)&&i&&i.coupons&&i.merchantCouponVo){var h=o({},i),v=o({},h.merchantCouponVo),C=i.merchantCouponVo,f=C.promotionStatus;e?1===Number(f)&&String(e)===String(C.couponId)&&(r=!0,e=null):u&&1===Number(f)&&String(u)===String(C.eventId)&&(r=!0,u=null),s.merchantCoupon={not_use:!!r,coupon_id:e||null,event_id:u||null,mall_id:C.mallId},s.clearPlatformCouponParams=!0,v.notUse=r,v.couponId=e,v.eventId=u,this.setData({couponsWinData:o({},h,{merchantCouponVo:o({},v)})})}}else if(i&&l)if(1===Number(a)){var V=o({},l),b=l.platformCouponVo;e&&1===Number(b.promotionStatus)&&String(e)===String(b.couponId)&&(r=!0,e=null),s.platformCoupon={not_use:!!r,coupon_id:e||null},V.platformCouponVo.notUse=r,V.platformCouponVo.couponId=e,this.setData({promotionVo:o({},V)})}else if(0===Number(a)){var S=o({},l),I=l.merchantCouponVo;e?1===Number(I.promotionStatus)&&String(e)===String(I.couponId)&&(r=!0,e=null):u&&1===Number(I.promotionStatus)&&String(u)===String(I.eventId)&&(r=!0,u=null),s.merchantCoupon={not_use:!!r,coupon_id:e||null,event_id:u||null},S.merchantCouponVo.notUse=r,S.merchantCouponVo.couponId=e,S.merchantCouponVo.eventId=u,this.setData({promotionVo:o({},S)})}this.triggerEvent("refresh",s)}},loadMorePlatCoupons:function(){this.triggerEvent("loadMorePlatCouponsEvent")},_showMallCouponsList:function(){this.triggerEvent("showMallCouponsListEvent")}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_coupons/order_checkout_coupons.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_goods/order_checkout_goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.js';	define("package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../common/data_util")),e=require("../../../actions/common");Component({properties:{goodsVo:{type:Object,value:{}},mallVo:{type:Object,value:{}},skuVo:{type:Object,value:{}},promotionVo:{type:Object,value:{}},virtualGoodsData:{type:Object,value:{}},reduceDisable:{type:Boolean,value:!1},disableEditNum:{type:Boolean,value:!1},actionDisable:{type:Boolean,value:!1},confirmMessage:{type:String,value:""}},data:{numberInputFocus:!1},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{_numberInputFocus:function(){this.setData({numberInputFocus:!0})},_blurGoodsNumberInput:function(t){wx.hideKeyboard();var o=parseInt(t.detail.value.trim(),10);isNaN(o)&&(o=1,this.page.$dispatch((0,e.showToast)("请输入需要的数量"))),o<1&&(o=1,this.page.$dispatch((0,e.showToast)("请至少购买1份哦"))),this._initGoodsNumberButton(o)},_updateGoodsNumber:function(o){if(this.data.actionDisable)this.page.$dispatch((0,e.showToast)("订单已生成，信息不可更改"));else{var a=this.data.goodsVo||{},s=a.goodsNumber,i=parseInt(o.target.dataset.delta,10);if(!(1===Number(s)&&i<0)){if(i>0){if(a.orderLimitDisable)return void this.page.$dispatch((0,e.showToast)("单次购买金额不得高于9.5万元"));if(a.limitNumberDisable)return void(this.data.confirmMessage?this.page.$dispatch((0,e.showToast)(this.data.confirmMessage)):this.page.$dispatch((0,e.showToast)(t.default.formatByPos("商品至多购买总计{0}件",a.goodsNumber))))}parseInt(s,10)+i<=0||(s=parseInt(s,10)+i,this._initGoodsNumberButton(s))}}},_initGoodsNumberButton:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(this.data.goodsVo||{}).goodsNumber||1,e=this.data.goodsVo||{};this.setData({numberInputFocus:!1}),Number(t)!==Number(e.goodsNumber)&&this.triggerEvent("goodsRefresh",{goodsNumber:t,clearCouponParams:!0})},showLabelsContent:function(){var t=(this.data.goodsVo||{}).labels||[],e=t[0]&&t[0].content;e&&this.page.$showModal({title:"",content:e,showCancel:!1,confirmText:"我知道了",contentAlign:"center",contentColor:"#333333",success:function(){}})},clickMallCouponBarEvent:function(){this.data.actionDisable?this.page.$dispatch((0,e.showToast)("订单已生成，信息不可更改")):this.triggerEvent("clickMallCouponBarEvent")}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_goods/order_checkout_goods.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.js';	define("package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,o){try{var u=e[n](o),c=u.value}catch(t){return void a(t)}if(!u.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}var a=t(require("../../../common/request")),r=t(require("../../../libs/regenerator-runtime/runtime")),n={takeMerchantCoupon:"10151"};Component({properties:{mallCouponsListData:{type:Object,value:{}},promotionEventVo:{type:Object,value:{}},promotionVo:{type:Object,value:{}},mallVo:{type:Object,value:{}},goodsVo:{type:Object,value:{}}},data:{},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{_hideMallCouponsList:function(){var t=this.data.mallCouponsListData||{};this.triggerEvent("hideMallCouponsListEvent",{mallId:(t.mallVo||{}).id})},_showColCouponModal:function(t){if(t&&t.currentTarget&&t.currentTarget.dataset){var e=t.currentTarget.dataset,a=e.batchId,r=e.mallId;this.triggerEvent("showColCouponModalEvent",{mallId:r,batchId:a})}},_takeMerchantCoupon:function(t){var a=this;if(t&&t.currentTarget&&t.currentTarget.dataset){var n=t.currentTarget.dataset,o=n.batchId,u=n.mallId,c=n.isGoodsBatch;if(this.couponTakeLock)return;o&&u&&(this.couponTakeLock=!0,this.page.$showLoading(),e(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a._getMallCoupon({batchId:o});case 3:e=t.sent,a.triggerEvent("takeMerchantCouponEvent",{res:e,batchId:o,mallId:u,isGoodsBatch:c}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a.triggerEvent("takeMerchantCouponEvent",{res:t.t0,batchId:o,mallId:u,isGoodsBatch:c});case 10:case"end":return t.stop()}},t,a,[[0,7]])}))(),this.couponTakeLock=!1,this.page.$hideLoading())}},_getMallCoupon:function(t){var o=this;return e(r.default.mark(function e(){var u,c,i,s;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u=t.batchId,c={batch_id:u},i=a.default.requestDataWithCmd(n.takeMerchantCoupon,{params:c}),e.next=6,a.default.runRequest(i);case 6:return s=e.sent,e.abrupt("return",s);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,o,[[0,10]])}))()},_preventTouchMove:function(){},defaultClick:function(){}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_mall_coupons/order_checkout_mall_coupons.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.js';	define("package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isIpx:{type:Boolean,value:!1},orderVo:{type:Object,value:{}},addressVo:{type:Object,value:{}},cartItemList:{type:Array,value:null}},data:{},attached:function(){},methods:{payEvent:function(e){this.triggerEvent("payEvent",e)}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_pay_bar/order_checkout_pay_bar.js");
 		__wxRoute = 'package_c/components_order_checkout/order_checkout_picc/order_checkout_picc';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.js';	define("package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isIpx:{type:Boolean,value:!1}},data:{showPiccModal:!1},methods:{_showPiccModal:function(){this.setData({showPiccModal:!0})},_closePiccModal:function(){this.setData({showPiccModal:!1})},_preventTouchMove:function(){}}}); 
 			}); 	require("package_c/components_order_checkout/order_checkout_picc/order_checkout_picc.js");
 		__wxRoute = 'package_c/components_order_checkout/service_vo/service_vo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/components_order_checkout/service_vo/service_vo.js';	define("package_c/components_order_checkout/service_vo/service_vo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{serviceVo:{type:Object,value:{}}},data:{},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},methods:{clickServiceVoBlock:function(e){if(e&&e.currentTarget&&e.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(e.currentTarget.dataset,"clickType"))switch(parseInt(e.currentTarget.dataset.clickType,10)){case 0:break;case 1:this._showServiceVoWin();break;case 2:this._addAddressFunc()}},_showServiceVoWin:function(){var e=this,t={};t.showServiceVoWin=!0,t.serviceBgMaskShow=!0,this.triggerEvent("updateServiceVo",{updateData:t}),setTimeout(function(){t.couponServiceMainClass="popup-win-container popup-win-container-up",e.triggerEvent("updateServiceVo",{updateData:t})},100)},_addAddressFunc:function(){this.triggerEvent("addAddress")},closeServiceVoWin:function(){var e=this,t={};t.couponServiceMainClass="popup-win-container popup-win-container-down",t.serviceBgMaskShow=!1,this.triggerEvent("updateServiceVo",{updateData:t}),setTimeout(function(){t.showServiceVoWin=!1,e.triggerEvent("updateServiceVo",{updateData:t})},250)},selServiceItem:function(e){var t=this;if(e&&e.currentTarget&&e.currentTarget.dataset&&Object.prototype.hasOwnProperty.call(e.currentTarget.dataset,"index")){var r=[];r=(this.data.serviceVo||{}).templateResultList||[];var a=parseInt(e.currentTarget.dataset.index,10),i=e.currentTarget.dataset.selected,n=!1,c=null;r.forEach(function(e,r){r===a?(e.selected=!0,c=e.serviceTransparentField,"0"===String(i)&&(n=!0,t.page.$showLoading())):e.selected=!1}),n&&this.triggerEvent("refresh",{serviceTransparentField:c}),this.closeServiceVoWin()}}},_preventTouchMove:function(){}}); 
 			}); 	require("package_c/components_order_checkout/service_vo/service_vo.js");
 		__wxRoute = 'package_c/goods/bottom_notice/bottom_notice_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/bottom_notice/bottom_notice_component.js';	define("package_c/goods/bottom_notice/bottom_notice_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=require("../../../common/index"),o=t(require("../common/util")),i=t(require("../../../common/system_info"));Component({properties:{bottomNoticeInfo:{type:Object,value:{},observer:function(t,e){t&&t!==e&&this.initBottomNoticeInfo(t)}},leftTimeLocalGroups:{type:Array,value:[],observer:function(t,e){t&&t!==e&&this.initLocalGroups(t)}},bestPlatformCouponInfo:{type:Object,value:{}},zoneTips:{type:Object,value:{text:"",action:""}}},data:{bottomNotice:"",minLeftTimeLocalGroup:null,isIpx:i.default.getIpxJudgment()},created:function(){this.asyncFuncMgr=new o.default},detached:function(){this.asyncFuncMgr.reset()},methods:{initBottomNoticeInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=parseInt(t.notice_type,10);1!==e&&2!==e||(this.setData({bottomNotice:t.notice}),this.triggerEvent("bottomNoticeEvent"),this.asyncFuncMgr.reset())},initLocalGroups:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0!==t.length){var e=null;t.length>5?e=t[Math.floor(Math.random()*t.length)]:(t.sort(function(t,e){return t.deltaMillisecond&&e.deltaMillisecond?t.deltaMillisecond-e.deltaMillisecond:0}),e=t[0]||[]),e&&(this.setData({minLeftTimeLocalGroup:e}),this.countDown()),this.triggerEvent("leftTimeGroupEvent",e)}},countDown:function(){var t=this,o=this.data.minLeftTimeLocalGroup||null;if(o&&!(o.duration<0)){this.asyncFuncMgr.addInterval(function(){var o=t.data.minLeftTimeLocalGroup.duration||0;o-=1e3,t.setData({"minLeftTimeLocalGroup.duration":o,"minLeftTimeLocalGroup.leftTimeStr":e.TimeUtil.transferToTime(o)}),o<0&&(t.asyncFuncMgr.reset(),t.setData({minLeftTimeLocalGroup:""}))},1e3,"LOCAL_GROUP_COUNT_DOWM")}},localGroupClick:function(t){var e=t.currentTarget.dataset||{},o="",i=!1;if(e.groupOrderId&&(o=e.groupOrderId||"",i=!!e.isUser),o){this.triggerEvent("localGroupSelectedEvent",{groupOrderId:o,isUser:i,isHistoryGroup:!1,isHistoryVisitor:!1});var n={op:"click",page_section:"expiring_group_prompt",page_el_sn:99503,page_sn:10014,group_order_id:o};this.triggerEvent("trackingEvent",n)}},cancelZoneFav:function(){this.triggerEvent("cancelZoneFav")}}}); 
 			}); 	require("package_c/goods/bottom_notice/bottom_notice_component.js");
 		__wxRoute = 'package_c/goods/gallery/detail_gallery_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/gallery/detail_gallery_component.js';	define("package_c/goods/gallery/detail_gallery_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={topImg:"1",detailImg:"2",topVedio:"6",longVedio:"9"};Component({properties:{detailGallery:{type:Object,value:{},observer:function(e){e&&e.brandSection&&this.initObserve()}},shouldDetailFold:{type:Boolean,value:!1}},data:{isShowContent:!1,isShowTitle:!0,isUnfoldClicked:!1,showAllProperty:!1},detached:function(){this.observer&&this.observer.disconnect()},methods:{initObserve:function(){var e=this;this.createIntersectionObserver&&wx.nextTick&&wx.nextTick(function(){e.observer=e.createIntersectionObserver(),e.observer.relativeToViewport({bottom:0}).observe(".goods-brand-section",function(){var t={op:"impr",page_section:"brand_real_banner",page_el_sn:503364};e.triggerEvent("trackingEvent",t),e.observer.disconnect()})})},onGalleryClicked:function(t){var o=t.target.dataset||{};if(!this.isLongPress&&!o.isVideo){var i=o.downloadUrl,n=[];this.data.detailGallery.list.forEach(function(t){"".concat(t.type)===e.detailImg&&n.push(t.downloadUrl)}),i&&wx.previewImage({current:i,urls:n})}},showDesc:function(){this.setData({isShowTitle:!1,isShowContent:!0})},clickMoreProperty:function(){this.setData({showAllProperty:!0});var e={op:"click",page_section:"category_area",page_element:"open_btn",page_el_sn:96523};this.triggerEvent("trackingEvent",e)},onClickUnfold:function(){this.setData({isUnfoldClicked:!0})}}}); 
 			}); 	require("package_c/goods/gallery/detail_gallery_component.js");
 		__wxRoute = 'package_c/goods/gallery/top_gallery_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/gallery/top_gallery_component.js';	define("package_c/goods/gallery/top_gallery_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=e(require("../common/util")),n=e(require("../../../components/share_action_sheet/share_action_sheet")),i=require("../../../common/message"),a=e(require("../../../storage/ram_manager")),o=e(require("../../../common/time_util")),s={topImg:"1",detailImg:"2",topVedio:"6",longVedio:"9"};Component({properties:{topGallery:{type:Object,value:{},observer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&e.banner&&this.dealBannerCountDown(e.banner),e&&e.list&&e.list.length>0&&"".concat(e.list[0].type)===s.topVedio){var t={op:"impr",page_section:"top_video_area",page_element:"video_play",page_el_sn:99046};this.triggerEvent("trackingEvent",t)}}},preloadImgUrl:{type:String,value:""},pageReady:{type:Boolean,value:!1},isSoldOut:{type:Boolean,value:!1}},data:{currentIndex:1,isShowImg:!0,isImageLoaded:!1,isVideoPlaying:!1},isLongPress:!1,asyncFuncMgr:null,videoContext:null,actionSheet:null,page:null,lastScrollTop:0,isInFullScreen:!1,created:function(){this.asyncFuncMgr=new t.default},attached:function(){var e=this;this.videoContext=wx.createVideoContext("topGalleryVideo",this),i.Message.on("GOODS_PAGE_SCROLL",function(t){var n=t.scrollTop||0;e.judgeTopGalleryVideo(n)})},detached:function(){this.asyncFuncMgr.reset(),i.Message.off("GOODS_PAGE_SCROLL")},ready:function(){var e=this,t=getCurrentPages()||[],i=t[t.length-1]||null;i&&i.$urlQueryObj&&(this.page=i,this.actionSheet=new n.default({page:i,ns:"actionSheet",goosId:i.$urlQueryObj.goods_id,complete:function(t){e.isLongPress=!1;var n={op:"click",page_section:"save_pic_popup",page_element:["share_btn","save_pic_btn","cancel"][t]};e.triggerEvent("trackingEvent",n)}}),i.savePicAfterLoginSuccess=function(){e.actionSheet.save(e.actionSheet.imageUrl)})},methods:{onGalleryClicked:function(e){var t=e.target.dataset||{};if(!this.isLongPress&&!t.isVideo){var n=t.downloadUrl,i=[];if(this.data.topGallery.list.forEach(function(e){e&&"".concat(e.type)===s.topImg&&i.push(e.downloadUrl)}),n&&wx.previewImage({current:n,urls:i}),!t.type){var a={op:"click",page_section:"main",page_element:"top_banner",page_el_sn:98776};this.triggerEvent("trackingEvent",a)}}},onGalleryChange:function(e){var t=e.detail.current||0,n=parseInt(t,10)+1;this.setData({currentIndex:n}),0===n||this.data.isShowImg||this.hideVideo()},onImageLoaded:function(e){var t=this,n=e.currentTarget.dataset.index;this.triggerEvent("loadImage",{index:n}),this.data.isImageLoaded||this.asyncFuncMgr.addTimeOut(function(){t.setData({isImageLoaded:!0})},300,"LOAD_IMG")},touchStart:function(e){var t=this;(e.target.dataset||{}).isVideo||this.asyncFuncMgr.addTimeOut(function(){t.longTapImage(e)},1200,"TOP_GALLERY_TOUCH")},touchMove:function(){this.asyncFuncMgr.clearTimeoutByKey("TOP_GALLERY_TOUCH")},touchEnd:function(){this.asyncFuncMgr.clearTimeoutByKey("TOP_GALLERY_TOUCH")},longTapImage:function(e){var t=e.target.dataset||{};if(t){var n=t.downloadUrl;this.isLongPress=!0,this.actionSheet.show(n);var i={op:"impr",page_section:"save_pic_popup"};this.triggerEvent("trackingEvent",i)}},showVideo:function(){function e(){n.setData({isShowImg:!1});var e=n.getVideoContext();e&&e.play()}var t=this,n=this;wx.getNetworkType({success:function(n){"wifi"===n.networkType?e():t.page?t.page.$showModal({content:"你正在使用移动网络数据，会产生流量费用，是否继续？",showCancel:!0,confirmText:"继续播放",contentAlign:"center",success:function(n){var i={op:"click",page_section:"top_video_area"};if(n.confirm){var a=(t.data.topGallery.list||[])[0].url||"";i.page_element="wifi_play_btn",i.page_el_sn="306264",i.url=a,e()}else i.page_element="wifi_cancel_btn",i.page_el_sn="306265";t.triggerEvent("trackingEvent",i)}}):e()}})},hideVideo:function(e){this.setData({isShowImg:!0});var t=this.getVideoContext();if(t&&t.pause(),e){var n={op:"click",page_section:"top_video_area",page_element:"video_quit_btn"};this.triggerEvent("trackingEvent",n)}},getVideoContext:function(){return this.videoContext||(this.videoContext=wx.createVideoContext("topGalleryVideo",this)),this.videoContext},onPlayVideoClicked:function(){this.showVideo()},onVideoSwipe:function(){},onVideoFullScreenChange:function(){if(this.isInFullScreen){var e={op:"click",page_section:"top_video_area",page_element:"screen_quit_btn",page_el_sn:99040};this.triggerEvent("trackingEvent",e)}else{var t={op:"click",page_section:"top_video_area",page_element:"video_screen_btn",page_el_sn:99043,url:(this.data.topGallery.list||[])[0].url||""};this.triggerEvent("trackingEvent",t),t.op="impr",t.page_element="video_screen",t.page_el_sn="388502",this.triggerEvent("trackingEvent",t)}this.isInFullScreen=!this.isInFullScreen},onVideoPlay:function(){this.videoStatus="play",this.setData({isVideoPlaying:!0});var e=(this.data.topGallery.list||[])[0].url||"",t={op:"click",page_section:"top_video_area",page_element:this.isInFullScreen?"screen_play_btn":"video_play_btn",page_el_sn:this.isInFullScreen?99042:99045,url:e};this.triggerEvent("trackingEvent",t)},onVideoPause:function(){this.videoStatus="pause",this.setData({isVideoPlaying:!1});var e={op:"click",page_section:"top_video_area",page_element:this.isInFullScreen?"screen_pause_btn":"video_pause_btn",page_el_sn:this.isInFullScreen?99041:99044};this.triggerEvent("trackingEvent",e)},onVideoEnd:function(){this.setData({isShowImg:!0})},judgeTopGalleryVideo:function(e){if(!this.data.isShowImg){var t=e-this.lastScrollTop;if(e>300&&"play"===this.videoStatus){var n=this.getVideoContext();n&&n.pause()}else if(e<100&&t<0&&"pause"===this.videoStatus){var i=this.getVideoContext();i&&i.play()}this.lastScrollTop=e}},dealBannerCountDown:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.festival_end_time){var n=parseInt(Date.now()+a.default.timeDiff,10)/1e3,i=parseInt(t.festival_end_time,10)-n,s=Math.max(1e3*i,0);if(this.setData({bannerCountDown:o.default.transferToTime(s,{needArr:!0})}),s>0){var r="BANNER_COUNT_DOWN";this.asyncFuncMgr.addInterval(function(){if(s<0)e.asyncFuncMgr.clearIntervalByKey(r);else{var t=o.default.transferToTime(s,{needArr:!0});e.setData({bannerCountDown:t}),s-=1e3}},1e3,r)}}}}}); 
 			}); 	require("package_c/goods/gallery/top_gallery_component.js");
 		__wxRoute = 'package_c/goods/goods_answer/answer_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/goods_answer/answer_component.js';	define("package_c/goods/goods_answer/answer_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{answers:{type:Object,value:{}}},data:{},attached:function(){},detached:function(){},ready:function(){},methods:{toQuestionPageTitle:function(){this.triggerEvent("toGoodsQaListEvent",{link:this.data.answers.merchant_qa_list_url});var e={op:"click",page_section:"customer_area",page_element:"more_btn",page_el_sn:384490};this.triggerEvent("trackingEvent",e)},toQuestionPageAnswer:function(){this.triggerEvent("toGoodsQaListEvent",{link:this.data.answers.merchant_qa_list_url});var e={op:"click",page_section:"customer_area",page_element:"answer_area",page_el_sn:384491};this.triggerEvent("trackingEvent",e)}}}); 
 			}); 	require("package_c/goods/goods_answer/answer_component.js");
 		__wxRoute = 'package_c/goods/goods_reviews/reviews_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/goods_reviews/reviews_component.js';	define("package_c/goods/goods_reviews/reviews_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../controller/formid_controller"));Component({properties:{reviews:{type:Object,value:{}}},data:{},attached:function(){},detached:function(){},ready:function(){},methods:{toGoodsReviewsPage:function(t){this.triggerEvent("toGoodsReviewsEvent",t);var o={op:"click",page_section:"comment",page_element:"comment_btn",page_el_sn:98777};this.triggerEvent("trackingEvent",o),t&&t.detail&&t.detail.formId&&e.default.uploadFormIdToSH(t.detail.formId,!0)}}}); 
 			}); 	require("package_c/goods/goods_reviews/reviews_component.js");
 		__wxRoute = 'package_c/goods/local_group/local_group_component';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/local_group/local_group_component.js';	define("package_c/goods/local_group/local_group_component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=require("../../../common/index"),r=e(require("../common/util")),i=e(require("../../../controller/formid_controller"));Component({properties:{localGroups:{type:Object,value:{},observer:function(e,t){e&&e!==t&&this.initLocalGroups(e)}}},data:{showMask:!1,swiperItems:[]},created:function(){this.asyncFuncMgr=new r.default,this.current=0},detached:function(){this.asyncFuncMgr.reset()},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},methods:{initLocalGroups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],r=e.groupList||[];if(1===r.length)t.push([r[0]]);else if(r.length>0&&r.length<4)t.push([r[0],r[1]]);else for(var i=0;i<Math.floor(r.length/2);i++){var o=[];o.push(r[2*i]),o.push(r[2*i+1]),t.push(o)}this.setData({swiperItems:t,isHistoryGroup:!!e.isHistoryGroup,isHistoryVisitor:!!e.isHistoryVisitor,localGroupDesc:e.localGroupDesc,totalNum:e.totalNum,localGroupTitle:e.localGroupTitle,groupList:e.groupList,showMask:e.groupList.length>5,localGroupPopupFooter:e.localGroupPopupFooter}),e.isHistoryGroup||e.isHistoryVisitor||this.countDown();var s={op:"impr"};if(this.data.isHistoryGroup)s.page_section="jump_area",s.page_el_sn=385720;else if(this.data.isHistoryVisitor)s.page_section="speed_pindan_area",s.page_el_sn=388659;else if(r.length>0){s.page_section="local_group";for(var a="",n=0;n<r.length;++n)a+=r[n].groupOrderId,n!==r.length-1&&(a+=",");s.group_order_ids=a,s.page_el_sn=99575}this.triggerEvent("trackingEvent",s)},countDown:function(){var e=this,r=this.data.swiperItems||[];if(0!==r.length){this.asyncFuncMgr.addInterval(function(){for(var i={},o=0;o<r.length;++o)for(var s=r[o]||[],a=0;a<s.length;++a){var n=s[a]||{};if(n.duration-=1e3,n.duration>0){var p=t.TimeUtil.transferToTime(n.duration);i["swiperItems[".concat(o,"][",a,"].leftTimeStr")]=p}}if(e.data.groupWindowVisible)for(var l=e.data.groupList||[],u=0;u<l.length;++u){var g=l[u]||{};if(g.duration>0){var c=t.TimeUtil.transferToTime(g.duration);i["groupList[".concat(u,"].leftTimeStr")]=c}}if(0!==Object.keys(i).length){i.refreshCountDown=!e.data.refreshCountDown;var d=1===r.length,_=-1!==e.data.transitionIndex||0!==e.data.swiperCurrent;(d&&_||e.current>=r.length)&&(i.transitionIndex=-1,i.swiperCurrent=0,e.current=0),e.setData(i)}else e.asyncFuncMgr.clearIntervalByKey("LOCAL_GROUP_COUNT_DOWM")},1e3,"LOCAL_GROUP_COUNT_DOWM")}},swiperChange:function(e){if(e.detail){this.current=e.detail.current;var t=this.data.swiperItems.length-1,r=this.current>0?this.current-1:t;this.setData({transitionIndex:r})}},showGroupModel:function(){this.setData({groupWindowVisible:!0});var e="",t="",r="";this.data.isHistoryGroup?(e="jump_area",t="more_btn",r=382673):this.data.isHistoryVisitor?(e="speed_pindan_area",t="more_btn"):(e="local_group",t="more",r=99806);var i={op:"click",page_element:t,page_section:e};if(r&&(i.page_el_sn=r),this.triggerEvent("trackingEvent",i),this.data.isHistoryGroup){var o={op:"impr",page_section:"jump_popup"};o.page_el_sn=385721,this.triggerEvent("trackingEvent",o)}else if(this.data.isHistoryVisitor){var s={op:"impr",page_section:"speed_pindan_popup"};s.page_el_sn=388661,this.triggerEvent("trackingEvent",s)}else{for(var a=this.data.groupList||[],n="",p=0;p<a.length;++p)n+=a[p].groupOrderId,p!==a.length-1&&(n+=",");var l={op:"impr",page_section:"local_group_popup"};l.page_el_sn=99574,l.group_order_ids=n,this.triggerEvent("trackingEvent",l)}},hideGroupModule:function(e){this.setData({groupWindowVisible:!1}),e&&(this.data.isHistoryGroup?this.triggerEvent("trackingEvent",{op:"click",page_section:"jump_popup",page_element:"close_btn"}):this.data.isHistoryVisitor&&this.triggerEvent("trackingEvent",{op:"click",page_section:"speed_pindan_popup",page_element:"close_btn"}))},stopDetailMove:function(){},$uploadFormId:function(e){e&&e.detail&&e.detail.formId&&i.default.uploadFormIdToSH(e.detail.formId,!1)},onScrollToLower:function(){this.setData({showMask:!1})},onListScroll:function(e){e.detail.scrollTop<280&&!this.data.showMask&&this.setData({showMask:!0})},localGroupClick:function(e){if(!this.page||"function"!=typeof this.page.handleCardSeleceGoods||!this.page.handleCardSeleceGoods()){var t=e.currentTarget.dataset||{},r="",i=!1;if(t.groupOrderId)r=t.groupOrderId||"",i=!!t.isUser;else{var o=t.index||0,s=this.data.swiperItems||[];if(o&&s&&s[this.current]){var a=s[this.current];r=a[o]&&a[o].groupOrderId||"",i=a[o]&&a[o].isUser}}var n=!!this.data.isHistoryVisitor;if(r||n){var p=!!this.data.isHistoryGroup;this.triggerEvent("localGroupSelectedEvent",{groupOrderId:r,isUser:i,isHistoryGroup:p,isHistoryVisitor:n}),this.hideGroupModule();var l={op:"click"};if("bottom"===t.refer)l.page_section="expiring_group_prompt",l.page_el_sn=99503,l.page_sn=10014;else{var u="",g="";p?(u="list"===t.refer?"jump_popup":"jump_area",g="jump_btn"):n?(u="list"===t.refer?"speed_pindan_popup":"speed_pindan_area",g="speed_pindan_btn"):(u="list"===t.refer?"local_group_popup":"local_group",g="join_btn"),"list"===t.refer?(p?(g="jump_cell_btn",l.page_el_sn=382675):l.page_el_sn=n?388661:99805,l.page_section=u,l.page_element=g):(l.page_section=u,l.page_element=g,l.page_el_sn=p?382674:n?388659:99807)}l.group_order_id=r,this.triggerEvent("trackingEvent",l)}}}}}); 
 			}); 	require("package_c/goods/local_group/local_group_component.js");
 		__wxRoute = 'package_c/group/group_button/group_button';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_button/group_button.js';	define("package_c/group/group_button/group_button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},r=t(require("../../../common/time_util")),i=t(require("../../../storage/ram_manager"));Component({properties:{isNormal:{type:Boolean,value:!1},button:{type:Object,value:{}},status:{type:Number,value:99},leftUser:{type:Number,value:0},hasLogin:{type:Boolean,value:!0},bizTag:{type:Object,value:{}}},data:{groupLeftTransferedTime:"",groupLeftTime:0},created:function(){var t=getCurrentPages();this.page=t[t.length-1]},ready:function(){this.data.button&&this.data.button.expireTime&&this.groupCountDown()},detached:function(){this.clearInterval()},methods:{didLogin:function(){this.triggerEvent("login")},signIn:function(t){this.triggerEvent("sign",t&&t.detail)},goActivity:function(t){this.triggerEvent("goActivity",t&&t.currentTarget),this.page&&this.page.$uploadFormId(t)},goLottery:function(t){this.triggerEvent("goLottery"),this.page&&this.page.$uploadFormId(t)},goCharge:function(t){this.triggerEvent("goChagre"),this.page&&this.page.$uploadFormId(t)},goHome:function(t){this.triggerEvent("goHome"),this.page&&this.page.$uploadFormId(t)},didJump:function(t){this.triggerEvent("didJump",t&&t.currentTarget),this.page&&this.page.$uploadFormId(t)},didGroup:function(t){this.triggerEvent("didGroup"),this.page&&this.page.$uploadFormId(t)},groupCountDown:function(){var t=this,n=this.data.button.expireTime,o=parseInt((Date.now()+i.default.timeDiff)/1e3,10),a=function(){var o=parseInt((Date.now()+i.default.timeDiff)/1e3,10),a={},u=n-o;u>0?(a.groupLeftTransferedTime=r.default.transferToTime(1e3*u),a.groupLeftTime=u):(t.clearInterval(),t.triggerEvent("reload")),t.setData(e({},a))};n>o&&(a(),this.intervalInfo||(this.intervalInfo=setInterval(function(){a()},1e3)))},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)})}}); 
 			}); 	require("package_c/group/group_button/group_button.js");
 		__wxRoute = 'package_c/group/group_fullback/group_fullback';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_fullback/group_fullback.js';	define("package_c/group/group_fullback/group_fullback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../common/index");Component({properties:{mall:{type:Object,value:{}},mallFull:{type:Object,value:{}},monthCard:{type:Object,value:{}},platformFull:{type:Object,value:{}}},data:{},ready:function(){var a=this.data.mallFull;a&&a.mallGoodsVoList&&a.mallGoodsVoList.length>0&&this.imprMallFullBack();var t=this.data.platformFull;t&&[1,2].indexOf(t.takeStatus)>-1&&this.imprPlatformFullBack();var e=this.data.monthCard;e&&e.url&&this.imprMonthCard()},detached:function(){},methods:{getMallFullTrackParams:function(a,t,e){return{op:a,page_name:"group_detail",page_sn:"10024",page_section:"rec_cut_area",page_element:t,page_el_sn:e}},imprMallFullBack:function(){var a=this,t=this.data.mallFull;if(t&&t.mallGoodsVoList&&t.mallGoodsVoList.length>0){var e=this.data.mall||{},l=this.getMallFullTrackParams("impr","rec_cut_access",53651);l.mall_id=e.id,this.triggerEvent("fullTrack",{params:l}),t.mallGoodsVoList.forEach(function(t,e){if(e<=2){var l=a.getMallFullTrackParams("impr","goods",53650);l.rec_goods_id=t.goodsId,l.p_rec=t.prec,l.idx=e,a.triggerEvent("fullTrack",{params:l})}})}},onMallGoodsScoll:function(t){var e=t.detail.scrollLeft,l=a.Util.pxToRpx(e),r=2;if(l>202&&(r=Math.floor(l/202)+2),r>2){var o=this.data.mallFull;if(this.imprMallGoodsVoList||(this.imprMallGoodsVoList={}),!this.imprMallGoodsVoList[""+r]&&o&&o.mallGoodsVoList&&o.mallGoodsVoList[r]){var i=o.mallGoodsVoList[r],s=this.getMallFullTrackParams("impr","goods",53650);s.rec_goods_id=i.goodsId,s.p_rec=i.prec,s.idx=r,this.triggerEvent("fullTrack",{params:s})}this.imprMallGoodsVoList[""+r]=!0}},fullBackToMall:function(){var a=this.data.mall||{};if(a.id){var t=a.pddRoute||"",e=t.indexOf("comm_brand_page")>-1,l=this.getMallFullTrackParams("click","rec_cut_access",53651);l.mall_id=a.id,this.triggerEvent("fullRoute",{route:t||"/package_a/mall_page/mall_page?mall_id="+a.id+"&is_brand="+e,params:l})}},fullBackToGoods:function(a){if(a&&a.currentTarget&&a.currentTarget.dataset&&a.currentTarget.dataset.goodsInfo){var t=a.currentTarget.dataset,e=t.goodsInfo,l=t.index;if(e&&e.goodsId){var r=this.getMallFullTrackParams("click","goods",53650);r.rec_goods_id=e.goodsId,r.idx=l,e.prec&&(r.p_rec=e.prec),this.triggerEvent("fullRoute",{route:"/package_c/goods/goods?goods_id="+e.goodsId,params:r})}}},imprPlatformFullBack:function(){var a=this.data.platformFull;if(a&&[1,2].indexOf(a.takeStatus)>-1){var t={op:"impr",page_section:"main",page_element:"pindan_btn",page_name:"group_detail",page_sn:"10024",page_el_sn:571393,status:1===a.takeStatus?0:1};this.triggerEvent("fullTrack",{params:t})}},clickPlatformFullBack:function(){var a=this.data.platformFull;if(a.linkUrl&&[1,2].indexOf(a.takeStatus)>-1){var t="https://mobile.yangkeduo.com/"+a.linkUrl,e={op:"click",page_section:"main",page_element:"pindan_btn",page_name:"group_detail",page_sn:"10024",page_el_sn:571393,status:1===a.takeStatus?0:1};this.triggerEvent("fullRoute",{route:"/pages/web/web?specialUrl=1&src="+encodeURIComponent(t),params:e})}},imprMonthCard:function(){var a=this.data.monthCard;if(a&&a.url){var t={op:"impr",page_section:"main",page_element:"month_card",page_name:"group_detail",page_sn:"10024",page_el_sn:637987,refer_xcx_campaign_id:"monthly_card"};this.triggerEvent("fullTrack",{params:t})}},clickMonthCard:function(){var a=this.data.monthCard;if(a&&a.url){var t="https://mobile.yangkeduo.com"+a.url;this.triggerEvent("fullRoute",{route:"/pages/web/web?specialUrl=1&src="+encodeURIComponent(t),params:{op:"click",page_section:"main",page_element:"month_card",page_name:"group_detail",page_sn:"10024",page_el_sn:637987,refer_xcx_campaign_id:"monthly_card"}})}}}}); 
 			}); 	require("package_c/group/group_fullback/group_fullback.js");
 		__wxRoute = 'package_c/group/group_goods/group_goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_goods/group_goods.js';	define("package_c/group/group_goods/group_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var i=t(require("../../../common/user")),e=t(require("../../../storage/ram_manager")),o=t(require("../../../common/time_util"));Component({properties:{goods:{type:Object,value:{}},collageData:{type:Object,value:{}},hasLogin:{type:Boolean,value:!0},isLotterySuccess:{type:Boolean,value:!1},isLotteryFail:{type:Boolean,value:!1},copyWriting:{type:Object,value:{},observer:function(t,i){t&&t.activity_copy_writing&&JSON.stringify(t)!==JSON.stringify(i)&&this.initPromotion(t)}}},data:{hasLogin:i.default.hasLogin(),activity:{}},created:function(){},detached:function(){},methods:{didTap:function(t){this.triggerEvent("click",t&&t.currentTarget)},initPromotion:function(t){var i=this,e=this.setPromotionsCopyWriting(t);e&&(this.setData({activity:e}),e.promotionLeftTime&&!this.intervalInfo&&(this.intervalInfo=setInterval(function(){var e=i.setPromotionsCopyWriting(t);e.promotionLeftTime>=0?i.setData({activity:e}):(i.setData({activity:{}}),i.clearIntervalTimer())},1e3)))},setPromotionsCopyWriting:function(t){var i=parseInt((Date.now()+e.default.timeDiff)/1e3,10);if(t.activity_copy_writing){var r={};if(6===parseInt(t.promotion_activity_type,10)){var n=(t.end_time||0)-i,a=o.default.getPackagedTimeFromTimeBucket(1e3*n,"H"),c=void 0;a.days>0?(c=a.days+"天"+a.hours+"小时",r.activity_copy_writing_title=c+"恢复原价",r.copy_writing_without_priced=t.copy_writing_without_price.replace("#time#",c)):(c=o.default.transferToTime(1e3*n),r.promotionLeftTime=n,r.activity_copy_writing_title=c+"恢复原价")}else r.activity_copy_writing_title=t.activity_copy_writing.split("恢复")[0]+"恢复原价",r.copy_writing_without_priced=t.copy_writing_without_price;return r}},clearIntervalTimer:function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)}}}); 
 			}); 	require("package_c/group/group_goods/group_goods.js");
 		__wxRoute = 'package_c/group/group_join/group_join';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_join/group_join.js';	define("package_c/group/group_join/group_join.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r=t(require("../../../common/time_util")),n=t(require("../../../storage/ram_manager"));Component({options:{multipleSlots:!0},properties:{groupOrder:{type:Object,value:{}},goods:{type:Object,value:{}},user:{type:Object,value:{}},bizTagInfo:{type:Object,value:{}},group:{type:Object,value:{}},groupStatus:{type:Number,value:99},expireTime:{type:Number,value:0}},data:{groupLeftTransferedTime:"",refreshCountDown:!1,groupLeftTime:0},created:function(){var t=getCurrentPages();this.page=t[t.length-1]},ready:function(){this.data.expireTime&&this.groupCountDown()},detached:function(){this.clearInterval()},methods:{clickGoods:function(){this.triggerEvent("clickGoods")},goBackActivity:function(t){this.triggerEvent("goActivity",t&&t.currentTarget)},showShareHintMaskButton:function(t){this.triggerEvent("didShare"),this.page&&this.page.$uploadFormId(t)},showHintToast:function(){var t=this;wx.setClipboardData&&wx.getClipboardData&&wx.setClipboardData({data:"拼多多",success:function(){t.setData({showHintToast:!0}),t.hideToastTimer=setTimeout(function(){t.setData({showHintToast:!1}),clearTimeout(t.hideToastTimer),t.hideToastTimer=null},3e3)}})},transferToTime:function(t){var e=Math.floor(t/1e3),r=Math.floor(e/3600);r<10&&(r="0"+r);var n=e%3600,o=Math.floor(n/60);o<10&&(o="0"+o);var a=n%60;return a<10&&(a="0"+a),{hours:r.toString(),minutes:o.toString(),seconds:a.toString()}},groupCountDown:function(){var t=this,o=this.data.expireTime,a=parseInt((Date.now()+n.default.timeDiff)/1e3,10),i=function(){var a=parseInt((Date.now()+n.default.timeDiff)/1e3,10),i={},u=o-a;u>0?(i.groupLeftTransferedTime=r.default.transferToTime(1e3*u),i.groupLeftTimeObj=t.transferToTime(1e3*u),i.refreshCountDown=!t.data.refreshCountDown,i.groupLeftTime=u):(t.clearInterval(),t.triggerEvent("reload")),t.setData(e({},i))};o>a&&(i(),this.intervalInfo||(this.intervalInfo=setInterval(function(){i()},1e3)))},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)})}}); 
 			}); 	require("package_c/group/group_join/group_join.js");
 		__wxRoute = 'package_c/group/group_normal/group_normal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_normal/group_normal.js';	define("package_c/group/group_normal/group_normal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},properties:{groupOrder:{type:Object,value:{}},goods:{type:Object,value:{}},user:{type:Object,value:{}},groupRole:{type:Number,value:-1},status:{type:Number,value:-1},group:{type:Object,value:{}},hasLogin:{type:Boolean,value:!0}},data:{},detached:function(){},methods:{clickGoods:function(){this.triggerEvent("clickGoods")}}}); 
 			}); 	require("package_c/group/group_normal/group_normal.js");
 		__wxRoute = 'package_c/group/group_normal/group_service/group_service';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_normal/group_service/group_service.js';	define("package_c/group/group_normal/group_service/group_service.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isShowComment:{type:Boolean,value:!1},comments:{type:Array,value:[]},mallServices:{type:Array,value:[]}},data:{showServiceDetail:!1,serviceMainClass:"service-detail-hidden"},created:function(){},ready:function(){},detached:function(){this.serviceDetailTimer&&(clearTimeout(this.serviceDetailTimer),this.serviceDetailTimer=null)},methods:{preventTouchMove:{},showServiceDetail:function(){var e=this;this.setData({showServiceDetail:!0}),this.serviceDetailTimer=setTimeout(function(){e.setData({serviceMainClass:"service-detail-show"})},100)},hideServiceDetail:function(){var e=this;this.setData({serviceMainClass:"service-detail-hidden"}),this.serviceDetailTimer=setTimeout(function(){e.setData({showServiceDetail:!1})},300)}}}); 
 			}); 	require("package_c/group/group_normal/group_service/group_service.js");
 		__wxRoute = 'package_c/group/group_not_sale/group_not_sale';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_not_sale/group_not_sale.js';	define("package_c/group/group_not_sale/group_not_sale.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isLotteryOrFreeTrial:{type:Boolean,value:!1},user:{type:Object,value:{}}},data:{},detached:function(){},methods:{click:function(){this.triggerEvent("click")}}}); 
 			}); 	require("package_c/group/group_not_sale/group_not_sale.js");
 		__wxRoute = 'package_c/group/group_notice/group_notice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_notice/group_notice.js';	define("package_c/group/group_notice/group_notice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{needBorder:{type:Boolean,value:!1}},data:{groupNoticeBarText:{title:"拼单须知",textArr:["人不满退款","人满发货","好友拼单"]},groupNoticePopupVisible:!1},created:function(){},ready:function(){},detached:function(){},methods:{preventTouchMove:{},clickGroupNotice:function(){this.setData({groupNoticePopupVisible:!0})},hideGroupNoticePopup:function(){this.setData({groupNoticePopupVisible:!1})}}}); 
 			}); 	require("package_c/group/group_notice/group_notice.js");
 		__wxRoute = 'package_c/group/group_success/group_success';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_success/group_success.js';	define("package_c/group/group_success/group_success.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},properties:{groupOrder:{type:Object,value:{}},goods:{type:Object,value:{}},user:{type:Object,value:{}},bizTagInfo:{type:Object,value:{}},group:{type:Object,value:{}},paySuccess:{type:Boolean,value:!1},showGuide:{type:Boolean,value:!1}},data:{showHintToast:!1},ready:function(){var t=getCurrentPages();this.page=t[t.length-1]},detached:function(){this.hideToastTimer&&(clearTimeout(this.hideToastTimer),this.hideToastTimer=null)},methods:{clickGoods:function(){this.triggerEvent("clickGoods")},clickOrder:function(t){this.triggerEvent("clickOrder"),this.page&&this.page.$uploadFormId(t)},showHintToast:function(){var t=this;wx.setClipboardData&&wx.getClipboardData&&wx.setClipboardData({data:"拼多多",success:function(){t.setData({showHintToast:!0}),t.hideToastTimer=setTimeout(function(){t.setData({showHintToast:!1}),clearTimeout(t.hideToastTimer),t.hideToastTimer=null},3e3)}})}}}); 
 			}); 	require("package_c/group/group_success/group_success.js");
 		__wxRoute = 'package_c/group/group_users/group_users';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_users/group_users.js';	define("package_c/group/group_users/group_users.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/user")),t=require("../../../common/message");Component({properties:{user:{type:Object,value:{}},isSuccess:{type:Boolean,value:!1}},data:{userListPopVisible:!1,userListContentShow:!1},created:function(){},attached:function(){var e=getCurrentPages();this.page=e[e.length-1]},ready:function(){t.Message.emit("WX_COMPONENT_READY","group_users",this.page.$pageName)},detached:function(){this.userListTimer&&(clearTimeout(this.userListTimer),this.userListTimer=null)},methods:{preventTouchMove:{},showUserListPop:function(){e.default.hasLogin()&&this.setData({userListPopVisible:!0,userListContentShow:!0})},hideUserListPop:function(){var e=this;this.setData({userListContentShow:!1}),this.userListTimer=setTimeout(function(){e.setData({userListPopVisible:!1}),clearTimeout(e.userListTimer),e.userListTimer=null},300)}}}); 
 			}); 	require("package_c/group/group_users/group_users.js");
 		__wxRoute = 'package_c/group/group_zone_tips/group_zone_tips';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group_zone_tips/group_zone_tips.js';	define("package_c/group/group_zone_tips/group_zone_tips.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var n=e(require("../../../common/request")),t=e(require("../../../configs/api")),a=require("../../../actions/common");Component({properties:{zoneInfo:{type:Object,value:{}}},ready:function(){var e=getCurrentPages();this.page=e[e.length-1],this.imprZoneTips()},data:{},methods:{imprZoneTips:function(){var e=this.data.zoneInfo;if(e&&void 0!==e.status){var n=0;-2===e.status?n=4:0===e.status||1===e.status||2===e.status?n=2===e.status?3:1:3===e.status&&(n=2),n>0&&this.page&&this.page.zoneTracking({op:"impr",page_section:"dd_zone_banner",status:n})}},didAction:function(){var e=this,n=this.data.zoneInfo;0===n.status||1===n.status?(this.cancelAction(),this.page&&this.page.zoneTracking({op:"click",page_section:"dd_zone_banner",page_element:"cancel_dd_zone",status:1})):(this.page.$dispatch((0,a.showDialog)({title:"确认取消同步该动态？",showCancel:!0,cancelText:"确定取消",confirmText:"不取消",contentAlign:"center",onModalConfirm:function(){e.page.$dispatch((0,a.hideDialog)(e.page)),e.page&&e.page.zoneTracking({op:"click",page_section:"cancel_zone_popup",page_element:"cancel_btn"})},onModalCancel:function(){e.cancelAction(),e.page.$dispatch((0,a.hideDialog)(e.page)),e.page&&e.page.zoneTracking({op:"click",page_section:"cancel_zone_popup",page_element:"delete_btn"})},page:this.page})),this.page&&this.page.zoneTracking({op:"impr",page_section:"cancel_zone_popup"},{op:"click",page_section:"dd_zone_banner",page_element:"cancel_dd_zone",status:3}))},cancelAction:function(){var e=this,a=this.data.zoneInfo;n.default.apiRequest("POST",t.default.delZoneGroup,{group_order_id:a.groupOrderId,goods_id:a.goodsId},!1,{forceUseApiGZ:!0,needGZToken:!0}).then(function(n){n&&n.data&&3===n.data.status&&e.page&&e.page.$dispatch({type:"RECIEVE_GROUP_DATA",data:{"zoneInfo.text":"拼单已取消同步到群空间","zoneInfo.action":"已取消","zoneInfo.status":3,"zoneInfo.actionClick":0}})}).catch(function(e){console.error(e)})}}}); 
 			}); 	require("package_c/group/group_zone_tips/group_zone_tips.js");
 		__wxRoute = 'package_c/group/local_groups/local_groups';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/local_groups/local_groups.js';	define("package_c/group/local_groups/local_groups.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/time_util"));Component({properties:{list:{type:Array,value:[],observer:function(e,t){e&&e.length>0&&JSON.stringify(e)!==JSON.stringify(t)&&this.initCountTime(e)}}},data:{localGroups:[]},created:function(){},ready:function(){var e=getCurrentPages();this.page=e[e.length-1]},detached:function(){this.clearIntervalTimer()},methods:{joinLocalGroup:function(e){this.triggerEvent("join",e&&e.detail||{}),this.page.$uploadFormId(e,!1)},initCountTime:function(e){var t=this;this.setLocalGroupLeftTime(e),this.intervalInfo||(this.intervalInfo=setInterval(function(){t.setLocalGroupLeftTime(t.data.localGroups)},1e3))},setLocalGroupLeftTime:function(t){var i=this,r=JSON.parse(JSON.stringify(t));r.map(function(t){if(t.expireTime)if(t.localGroupLeftTime>0){var r=e.default.getPackagedTimeFromTimeBucket(1e3*t.localGroupLeftTime,"HMS");parseInt(r.days,10)>0?t.leftTimeStr=r.days+"天:":t.leftTimeStr=r.hours+":"+r.minutes+":"+r.seconds,t.localGroupLeftTime--}else i.clearIntervalTimer();return t}),this.setData({localGroups:r})},clearIntervalTimer:function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)}}}); 
 			}); 	require("package_c/group/local_groups/local_groups.js");
 		__wxRoute = 'package_c/group/time_line/time_line';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/time_line/time_line.js';	define("package_c/group/time_line/time_line.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{timeLine:{type:Object,value:{}}},data:{},methods:{click:function(t){this.triggerEvent("click",t&&t.currentTarget)}}}); 
 			}); 	require("package_c/group/time_line/time_line.js");
 		__wxRoute = 'package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.js';	define("package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isIpx:{type:Boolean,value:!1},realNameAuthData:{type:Object,value:{}},discountTipsData:{type:Object,value:{}}},data:{},methods:{}}); 
 			}); 	require("package_c/order_checkout_new/component/coupon_discount_tips/coupon_discount_tips.js");
 		__wxRoute = 'package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.js';	define("package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../actions/common");Component({properties:{virtualGoodsData:{type:Object,value:{}},goodsVo:{type:Object,value:{}},actionDisable:{type:Boolean,value:!1}},data:{},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{_clickMobileInput:function(){this.page.disableUserAction&&this.page.$dispatch((0,t.showToast)("订单已生成，信息不可更改"))},_clearPhoneNumber:function(){this.triggerEvent("setVirtualGoodsData",{updateData:{phoneNumber:""}})},_selectPhoneNumber:function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&t.currentTarget.dataset.numberValue){var e=t.currentTarget.dataset.numberValue;this.triggerEvent("setVirtualGoodsData",{updateData:{phoneNumber:e,hideNumberList:!0}})}},_inputPhoneNumber:function(t){if(t&&t.detail&&t.detail.value){var e=t.detail.value;this.triggerEvent("setVirtualGoodsData",{updateData:{phoneNumber:e}})}},_focusPhoneInput:function(){this.triggerEvent("setVirtualGoodsData",{updateData:{isShowClearBtn:!0,hideNumberList:!1}})},_blurPhoneInput:function(){this.triggerEvent("setVirtualGoodsData",{updateData:{isShowClearBtn:!1,hideNumberList:!0}})}}}); 
 			}); 	require("package_c/order_checkout_new/component/order_checkout_virtual_goods/order_checkout_virtual_goods.js");
 		__wxRoute = 'package_c/order_checkout_new/component/step_vo/step_vo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_new/component/step_vo/step_vo.js';	define("package_c/order_checkout_new/component/step_vo/step_vo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{stepVo:{type:Object,value:{}}},data:{},attached:function(){},methods:{}}); 
 			}); 	require("package_c/order_checkout_new/component/step_vo/step_vo.js");
 		__wxRoute = 'package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.js';	define("package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{stepVo:{type:Object,value:{}}},data:{},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{selStepProtocal:function(t){t&&t.currentTarget&&t.currentTarget.dataset&&this.triggerEvent("selStepProtocal",{protocolSelected:t.currentTarget.dataset.protocolSelected})}}}); 
 			}); 	require("package_c/order_checkout_new/component/step_vo_protocol/step_vo_protocol.js");
 		__wxRoute = 'package_c/team_list/group_header/group_header';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/team_list/group_header/group_header.js';	define("package_c/team_list/group_header/group_header.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../common/index");Component({properties:{status:{type:String,value:"",observer:function(e,t){"going"===e&&e!==t&&this.setCountDown()}},leftTime:{type:Number,value:-1}},data:{leftTimeStr:"",refreshCountDown:!1},created:function(){},detached:function(){},methods:{setCountDown:function(){var t=this,r=parseInt(this.data.leftTime,10);if(r>0){var n=e.TimeUtil.transferToTime(1e3*r);r--,this.setData({leftTime:r,leftTimeStr:n,refreshCountDown:!this.data.refreshCountDown}),this.leftInterVal||(this.leftInterVal=setInterval(function(){if(r>0){var n=e.TimeUtil.transferToTime(1e3*r);r--,t.setData({leftTime:r,leftTimeStr:n,refreshCountDown:!t.data.refreshCountDown})}else t.setData({leftTime:-1,leftTimeStr:"",refreshCountDown:!1}),t.triggerEvent("reLoad"),clearInterval(t.leftInterVal),t.leftInterVal=null},1e3))}}}}); 
 			}); 	require("package_c/team_list/group_header/group_header.js");
 		__wxRoute = 'package_c/team_list/group_list/group_list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/team_list/group_list/group_list.js';	define("package_c/team_list/group_list/group_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{list:{type:Array,value:[]}},data:{},created:function(){},detached:function(){},methods:{click:function(t){this.triggerEvent("click",t)}}}); 
 			}); 	require("package_c/team_list/group_list/group_list.js");
 		__wxRoute = 'package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.js';	define("package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{invalidGoodsList:{type:Array,value:[]}},attached:function(){},methods:{}}); 
 			}); 	require("package_c/transac_batch_checkout/component/invalid_goods_list/invalid_goods_list.js");
 		__wxRoute = 'package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.js';	define("package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../common/data_util")),e=require("../../../../actions/common");Component({properties:{isLastOne:{type:Boolean,value:!1},goodsVo:{type:Object,value:{}},mallVo:{type:Object,value:{}},reduceDisable:{type:Boolean,value:!1},increaseDisable:{type:Boolean,value:!1},goodsNumber:{type:Number,value:1},actionDisable:{type:Boolean,value:!1},orderVo:{type:Object,value:{}},confirmMessage:{type:String,value:""}},data:{numberInputFocus:!1},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{_numberInputFocus:function(){this.setData({numberInputFocus:!0})},_blurGoodsNumberInput:function(t){wx.hideKeyboard();var o=parseInt(t.detail.value.trim(),10);isNaN(o)&&(o=1,this.page.$dispatch((0,e.showToast)("请输入需要的数量"))),o<1&&(o=1,this.page.$dispatch((0,e.showToast)("请至少购买1份哦"))),this._initGoodsNumberButton(o)},_updateGoodsNumber:function(o){if(this.data.actionDisable)this.page.$dispatch((0,e.showToast)("订单已生成，信息不可更改"));else{var a=this.data.goodsVo||{},s=this.data.goodsNumber,i=parseInt(o.currentTarget.dataset.delta,10);if(!(isNaN(i)||1===Number(s)&&i<0)){if(this.data.increaseDisable&&i>0){if(a.orderlimit)return void this.page.$dispatch((0,e.showToast)("合并支付总价不得高于9.5万元"));if(1===a.limitStatus)return void(this.data.confirmMessage?this.page.$dispatch((0,e.showToast)(this.data.confirmMessage)):this.page.$dispatch((0,e.showToast)(t.default.formatByPos("商品至多购买总计{0}件",s))))}parseInt(s,10)+i<=0||(s=parseInt(s,10)+i,this._initGoodsNumberButton(s))}}},_initGoodsNumberButton:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(this.data.goodsVo||{}).goodsNumber||1,a=this.data.goodsVo||{},s=this.data.mallVo||{},i=o,r=this.data.orderVo.orderPrice,u=Math.floor((95e5-r+a.unitPrice*a.goodsNumber)/a.unitPrice);(i>a.limitNumber||i>u)&&(a.limitNumber>u?(i=u,this.page.$dispatch((0,e.showToast)("合并支付总价不得高于9.5万元"))):(i=a.limitNumber,this.page.$dispatch((0,e.showToast)(t.default.formatByPos("商品至多购买总计{0}件",a.limitNumber)))));var n=!0;1===Number(i)?n=!0:i>1&&(n=!1),this.setData({reduceDisable:n,goodsNumber:i,numberInputFocus:!1}),Number(i)!==Number(a.goodsNumber)&&this.triggerEvent("refreshGoodsNumber",{skuId:a.skuId,goodsNumber:i,clearCouponParams:!0,mallId:s.id})},showLabelsContent:function(){var t=(this.data.goodsVo||{}).labels||[],e=t[0]&&t[0].content;e&&this.page.$showModal({title:"",content:e,showCancel:!1,confirmText:"我知道了",contentAlign:"center",contentColor:"#333333",success:function(){}})}}}); 
 			}); 	require("package_c/transac_batch_checkout/component/order_checkout_goods/order_checkout_goods.js");
 		__wxRoute = 'package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.js';	define("package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{cartItemList:{type:Array,value:[]},actionDisable:{type:Boolean,value:!1},orderVo:{type:Object,value:{}},confirmMessage:{type:String,value:""}},attached:function(){var t=getCurrentPages();this.page=t[t.length-1]},methods:{clickMallCouponBarEvent:function(t){if(t&&t.currentTarget&&t.currentTarget.dataset&&t.currentTarget.dataset.mallId){var e=t.currentTarget.dataset,a=e.mallId,r=e.cartIndex,i={mallId:a};void 0!==r&&this.data.cartItemList[r]&&(i.goodsList=this.data.cartItemList[r].goodsList||[]),this.triggerEvent("clickMallCouponBarEvent",i)}},refreshGoodsNumber:function(t){t&&t.detail&&this.triggerEvent("refresh",t.detail)}}}); 
 			}); 	require("package_c/transac_batch_checkout/component/order_checkout_mall/order_checkout_mall.js");
 		__wxRoute = 'package_c/addresses/addresses';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/addresses/addresses.js';	define("package_c/addresses/addresses.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var s=e.apply(this,arguments);return new Promise(function(e,d){function t(a,r){try{var i=s[a](r),o=i.value}catch(e){return void d(e)}if(!i.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});e(o)}return t("next")})}}var d=e(require("../../controller/addresses_controller")),t=e(require("../../common/data_util")),a=e(require("../components/edit_address/edit_address")),r=e(require("../../common/system_info")),i=e(require("../../common/navigation")),o=e(require("../../common/util")),n=e(require("../../models/address")),u=require("../../common/index"),c=e(require("../../libs/regenerator-runtime/runtime")),l=require("../../common/message"),h=e(require("../../storage/ram_manager")),f=require("../../actions/common"),p={addressListData:null,allowedRegions:[],notAllowRegions:[],differAmountRegions:[],goodsId:null,skuId:null,usedAddressId:null,defaultAddressIndex:-1,oprationLocked:!1,editAddressModule:null,setSeq:0,data:{visible:!1,showWechatChooseAddr:!!wx.chooseAddress,addressList:[],showUseBtn:!1,addressData:{editAddressWindowVisible:!1},isIpx:r.default.getIpxJudgment()},$partialStore:{quickEntryForwardIndex:[{display:"displayQuickEntry"}],toast:["@all",{display:"displayToast"}]},setDefaultAddress:function(e){var s=this,a=e.currentTarget.dataset,r=void 0;if(a&&null!=a.index&&(r=parseInt(e.currentTarget.dataset.index,10)),null!=r&&this.addressListData){var i=this.data.addressList[r];i&&t.default.checkIndexByKey(this.addressListData,i.addressId,"addressId")!==this.defaultAddressIndex&&(this.$showLoading(),d.default.setDefaultAddress(i,function(e){if(s.$hideLoading(),e.errorCode){var d=e.errorMsg||"";s.$dispatch((0,f.showToast)(d))}else{i.isDefaultAddress=!0;var a=i.addressId;if(s.addressListData&&a){var r=t.default.checkIndexByKey(s.addressListData,a,"addressId");null!=r&&r!==s.defaultAddressIndex&&s.updateDefaultAddress(r)}}}))}},dispatchDataToOrderCheckoutAddress:function(){var e=this.data.addressList||[];l.Message.emit(l.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS,e)},dealWithChooseAddress:function(e){if(this.$urlQueryObj.chooseFromAcivity||this.$urlQueryObj.chooseFromActivity){if(!e)return;l.Message.emit(l.KEYS.ACTIVITY_CHOOSE_ADDRESS,e)}else{if(!e)return;if(!this.usedAddressId||["NOT_ALLOWED","DIFFER_AMOUNT"].indexOf(e.deliveryType)>=0)return}for(var s=this.data.addressList,d=0;d<s.length;d++)s[d]&&(String(s[d].addressId)===String(this.usedAddressId)&&(s[d].isUsing=!1),String(s[d].addressId)===String(e.addressId)&&(s[d].isUsing=!0));this.usedAddressId=e.addressId,this.setData({addressList:s}),h.default.cacheAddressArr=this.data.addressList,i.default.back()},chooseAddress:function(e){var s=void 0;e&&e.currentTarget&&e.currentTarget.dataset&&(s=parseInt(e.currentTarget.dataset.index,10)),e&&e.detail&&e.detail.target&&(s=parseInt(e.detail.target.dataset.index,10)),s>=0&&s<this.data.addressList.length&&this.dealWithChooseAddress(this.data.addressList[s])},editAddress:function(e){var s=parseInt(e.currentTarget.dataset.index,10),d=this.data.addressList;s>=0&&s<d.length&&this.loadEditAddressModule(d[s],{windowTitle:"编辑地址"})},execDeleteAddress:function(e){var s=this;if(null!=this.deleteItemIndex){var t=this.deleteItemIndex;if(!this.oprationLocked){this.oprationLocked=!0,this.$showLoading();var a=this.data.addressList,r=null;if(a.length>1){var i=a[(t+1)%a.length];i&&(r=i.addressId)}var o=this.data.addressList[t];o&&o.addressId&&d.default.deleteAddress(o,r,function(d){var t={};t=d.error_code?{errorCode:d.error_code,errorMsg:d.error_msg}:{defaultAddressId:d.default_id,deletedAddressId:o.addressId},s.processDeleteAddress(t),e&&e()})}}},deleteAddress:function(e){var s=this,d=parseInt(e.currentTarget.dataset.index,10);this.deleteItemIndex=d,this.$showModal({title:"",content:"确定要删除该地址吗？",cancelText:"取消",confirmText:"确定",success:function(e){e.confirm&&s.execDeleteAddress()}});var t={op:"click",page_element:"del_btn"};(0,u.TrackingRecord)(t)},toggleSetTop:function(e){var s=this,t=parseInt(e.currentTarget.dataset.index,10);if(null!=t&&!this.oprationLocked){this.oprationLocked=!0,this.$showLoading();var a=this.data.addressList[t]||{},r=a.addressId;if(a&&r){var i=a.isTop;1===i?d.default.setAddressCancelTop(r,function(e){s.processAddressTop(e,r,i)}):d.default.setAddressTop(r,function(e){s.processAddressTop(e,r,i)})}else this.oprationLocked=!1}},processAddressTop:function(e,s,d){if(this.$hideLoading(),e&&e.error_code)return e.error_msg&&this.$dispatch((0,f.showToast)(e.error_msg)),void(this.oprationLocked=!1);if(e&&e.result){this.setSeq++;var a=t.default.checkIndexByKey(this.addressListData,s,"addressId");this.addressListData[a].isTop=1===d?0:1,this.addressListData[a].setSeq=this.setSeq;var r=this.dealWithAddressesData(this.addressListData);this.setData({addressList:r}),h.default.cacheAddressArr=this.data.addressList,this.$dispatch((0,f.showToast)(1===d?"取消置顶成功":"置顶成功"))}this.oprationLocked=!1},updateDefaultAddress:function(e){if(this.addressListData&&void 0!==e&&e>=0&&e<this.addressListData.length){if(this.defaultAddressIndex>=0){var s=this.addressListData[this.defaultAddressIndex];s&&(s.isDefaultAddress=!1)}var d=this.addressListData[e];if(d){d.isDefaultAddress=!0;var t=this.dealWithAddressesData(this.addressListData);this.setData({addressList:t}),h.default.cacheAddressArr=this.data.addressList,l.Message.emit(l.KEYS.UPDATE_DEFAULT_ADDRESS,t)}}},processDeleteAddress:function(e){if(this.$hideLoading(),e.errorCode){var s=e.errorMsg||"";this.$dispatch((0,f.showToast)(s))}else{var d=e.defaultAddressId,a=e.deletedAddressId,r=t.default.checkIndexByKey(this.addressListData,d,"addressId");if(null!=r&&r!==this.defaultAddressIndex&&this.updateDefaultAddress(r),a){var i=t.default.checkIndexByKey(this.addressListData,a,"addressId");this.addressListData.splice(i,1),this.setData({addressList:this.dealWithAddressesData(this.addressListData)}),h.default.cacheAddressArr=this.data.addressList,this.$dispatch((0,f.showToast)("删除地址成功"))}this.oprationLocked=!1}},loadEditAddressModule:function(e,s){var t=this;t.$showLoading(),d.default.fetchRegionsJsonData(function(){t.execAddressWindowLoad(e,s)})},execAddressWindowLoad:function(e,a){var r=this,i=d.default.getRegions();if(i){if(e&&!this.editAddressModule.checkAddress(e,i))return this.$hideLoading(),void this.$showModal({title:"提示",content:"监测到该地址在国家地址库有更新，无法继续使用，请重新添加。",showCancel:!1,confirmText:"添加地址",success:function(s){if(s.confirm){var d=r.data.addressList.indexOf(e);r.deleteItemIndex=d,r.execDeleteAddress(function(){r.loadEditAddressModule(null,{windowTitle:"添加新收货地址"})})}}});var n=this;s(c.default.mark(function s(){var d,l;return c.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=!1,s.next=3,u.User.authorize("scope.userLocation",function(){(0,u.TrackingRecord)({op:"impr",page_section:"auth_prompt",refer_page_element:"add_address",page_el_sn:99615}),d=!0});case 3:l=s.sent,n.editAddressModule.hasLocationAuth=l,d&&n.authorizedClickTracking(l,"add_address"),n.editAddressModule.load(e,function(){n.editAddressModule.show(),n.$hideLoading()},function(s){if(n.editAddressModule.hide(),s)if(Object.keys(t.default.checkByKey(n.addressListData,s.addressId,"addressId")).length>0){s.setSeq=e&&e.setSeq||0;try{var d=t.default.checkIndexByKey(n.addressListData,s.addressId,"addressId");n.addressListData[d]=s,n.setData({addressList:n.dealWithAddressesData(n.addressListData)}),h.default.cacheAddressArr=n.data.addressList}catch(e){console.error(e)}}else n.addressListData||(n.addressListData=[]),n.addressListData.push(s),n.setData({addressList:n.dealWithAddressesData(n.addressListData)}),h.default.cacheAddressArr=n.data.addressList,n.dealWithChooseAddress(s)},{setDataFunc:function(e){var s={};Object.keys(e).forEach(function(d){s["addressData."+d]=e[d]}),n.setData(s)},getDataFunc:function(){return n.data.addressData},addRootFunc:o.default.bind(n.componentsAddRootFunc,n),windowTitle:a.windowTitle,regionsDatas:i,data:n.data});case 7:case"end":return s.stop()}},s,r)}))()}},commonAddAddress:function(e){this.loadEditAddressModule(null,{windowTitle:"添加新收货地址"}),(0,u.TrackingRecord)({op:"click",page_element:"add_address"}),this.$uploadFormId(e,!0)},authorizedClickTracking:function(e,s){(0,u.TrackingRecord)({op:"click",page_section:"auth_prompt",page_element:e?"approve":"refuse",page_el_sn:e?99899:99898,refer_page_element:s})},chooseWxAddress:function(){var e=this;wx.chooseAddress({success:function(s){null!=s.nationalCode&&null!=s.detailInfo&&null!=s.userName&&null!=s.telNumber?(e.$showLoading(),d.default.addWxAddress(s,function(s){if(e.$hideLoading(),s&&s.error_code)s.error_msg&&e.$dispatch((0,f.showToast)(s.error_msg));else{var d=new n.default(s);e.addressListData||(e.addressListData=[]),t.default.isArray(e.addressListData)&&e.addressListData.push(d),e.setData({addressList:e.dealWithAddressesData(e.addressListData)}),h.default.cacheAddressArr=e.data.addressList,e.dealWithChooseAddress(d)}})):e.$dispatch((0,f.showToast)("地址信息不完整，无法导入"))}})},wechatAddAddress:function(e){var d=this,t=this;this.data.showWechatChooseAddr?s(c.default.mark(function e(){var s,a;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,e.next=3,u.User.authorize("scope.address",function(){(0,u.TrackingRecord)({op:"impr",page_section:"auth_prompt",refer_page_element:"wechat_add_address",page_el_sn:99615}),s=!0});case 3:(a=e.sent)?t.chooseWxAddress():u.User.showAuthorizeModelDialog("scope.address"),s&&t.authorizedClickTracking(a,"wechat_add_address");case 6:case"end":return e.stop()}},e,d)}))():t.$dispatch((0,f.showToast)("您的版本暂不支持，请升级到更高版本~")),(0,u.TrackingRecord)({op:"click",page_element:"wechat_add_address"}),t.$uploadFormId(e,!0)},dealWithAddressesData:function(e){var s=this,d=this;e.map(function(e,t){return e.isDefaultAddress?(s.defaultAddressIndex=t,e.defaultText="已设为默认"):e.defaultText="设为默认",e.isUsing=e.addressId.toString()===String(s.usedAddressId),d.setDeliveryType(e),e}),this.addressListData||(this.addressListData=e);var t=JSON.parse(JSON.stringify(e));t.sort(function(e,s){return parseInt(e.addressId,10)-parseInt(s.addressId,10)}),t.sort(function(e,s){return parseInt(s.topTime,10)-parseInt(e.topTime,10)});var a=[],r=[];return t.forEach(function(e){1===e.isTop?a.push(e):r.push(e)}),a.sort(function(e,s){return parseInt(s.setSeq,10)-parseInt(e.setSeq,10)}),r.sort(function(e,s){return parseInt(s.setSeq,10)-parseInt(e.setSeq,10)}),t=a.concat(r)},setDeliveryType:function(e){if(this.$urlQueryObj.chooseFromAcivity)e.deliveryType="SUPPORT_USE";else if(this.$urlQueryObj.is_from_transac)e.deliveryType="SUPPORT_USE";else if(this.usedAddressId){var s=""+e.provinceId;this.notAllowRegions.indexOf(s)>=0?e.deliveryType="NOT_ALLOWED":this.differAmountRegions.indexOf(s)>=0?e.deliveryType="DIFFER_AMOUNT":this.allowedRegions.indexOf(s)>=0?e.deliveryType="SUPPORT_USE":e.deliveryType="NOT_ALLOWED"}},processAddressesInfo:function(e){if(wx.stopPullDownRefresh(),this.$hideLoading(),this.setData({visible:!0}),e.errorCode){var s=e.errorMsg||"";return this.$dispatch((0,f.showToast)(s)),void this.setData({showError:!0})}e&&t.default.isArray(e)&&e.length>0&&(this.setData({addressList:this.dealWithAddressesData(e)}),h.default.cacheAddressArr=this.data.addressList)},loadAddresses:function(){var e=this;d.default.getAddressesInfo(function(s){e.processAddressesInfo(s)})},dealWithUrlParams:function(){var e=this.$urlQueryObj||{};this.goodsId=e.goods_id,this.skuId=e.sku_id,this.usedAddressId=e.sel_address_id,this.usedAddressId&&(e.allowed_regions&&(this.allowedRegions=e.allowed_regions.split(",")),e.not_allow_region&&(this.notAllowRegions=e.not_allow_region.split(",")),e.differ_amount_regions&&(this.differAmountRegions=e.differ_amount_regions.split(","))),this.setData({showUseBtn:!!this.usedAddressId}),this.$urlQueryObj.chooseFromAcivity&&this.setData({showUseBtn:!0})},componentsAddRootFunc:function(e,s){e&&"function"==typeof s&&(this[e]=s)},loadPage:function(){this.addressListData=null,this.oprationLocked=!1,this.editAddressModule=new a.default,this.dealWithUrlParams(),this.$showLoading(),this.loadAddresses(),d.default.fetchRegionsJsonData()},bindNameChange:function(){},bindMobileChange:function(){},bindAddressChange:function(){},onUnload:function(){this.dispatchDataToOrderCheckoutAddress(),o.default.empty(this)},onLoad:function(){this.pvTracking(),this.loadPage()},reLoad:function(){this.setData({showError:!1}),this.loadPage()},pvTracking:function(){var e={op:"pv",page_url:"package_c/addresses/addresses"};(0,u.TrackingRecord)(e)},onPageScroll:function(){},preventTouchMove:function(){}};(0,u.PddPage)(p,{pageName:"addresses",pageSn:10005,notUseCommonPV:!0}); 
 			}); 	require("package_c/addresses/addresses.js");
 		__wxRoute = 'package_c/goods/goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/goods/goods.js';	define("package_c/goods/goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function r(s,a){try{var i=t[s](a),n=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(n).then(function(e){r("next",e)},function(e){r("throw",e)});e(n)}return r("next")})}}function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=e(require("../../constants/share_info")),a=e(require("../../pages/goods/goods_util")),i=e(require("../../constants/goods")),n=e(require("../../common/navigation")),d=e(require("../../common/image_util")),u=e(require("../../common/logger")),c=e(require("../../storage/ram_manager")),l=e(require("../../storage/user_storage")),p=e(require("../../pages/goods/cache_goods_data")),h=e(require("../../controller/public")),_=require("../../common/message"),g=e(require("../../libs/regenerator-runtime/runtime")),f=e(require("../../common/gotop_util")),m=e(require("../components/screen_shot_share/screen_shot_share")),v=e(require("../../models/format/grid_item_goods")),y=e(require("../../common/scene_route")),T=e(require("../../components/popup_modal/popup_modal")),b=e(require("../../controller/config_controller")),I=e(require("../../controller/compose_rec_goods")),k=e(require("./gallery/gallery_controller")),L=e(require("./goods_reviews/reviews_controller")),O=e(require("./local_group/local_group_controller")),S=e(require("../../actions/common_complex")),D=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../actions/bubble")),G=require("../../common/index"),C=e(require("../../configs/api")),w=e(require("../../common/request/api")),R=e(require("../../constants/goods_page_from")),x=e(require("../../wx_components/sku_selector/sku_decorator")),$=e(require("./coupons/coupons")),P=e(require("./mall_service/mall_service")),E=e(require("./goods_info/goods_info")),j=e(require("./mall_recommend/mall_recommend")),q=e(require("./goods_tracking")),U=e(require("../../controller/goods_controller")),M=e(require("./static_goods_data")),N=require("../../actions/common"),A=e(require("../../configs/request_errors")),B=e(require("../../wx_components/goods_bottom_bar/goods_bottom_bar_controller")),F=A.default.couponErrorHint,H=G.SystemInfo.getSystemInfoSync(),Q={getRecommendGoodsDetail:"10087",getGoodsLisbon:"10200"},K={referPageElement:null,referFrom:null,cacheBottomId:null,maxRecommendGoodsNum:100,loadRecommendComplete:!1,lastRenderLen:0,toast:null,dispatchIds:{},hasSkuSelector:!1,pageFrom:0,spikeType:"",current:0,recOffset:0,lowerLock:!1,longPressLock:!1,mallId:0,recommendGoodsCache:[],sourceChannel:"0",keyboardHeightStyle:0,uin:null,shareKey:null,scrollTop:0,propertyTopRect:null,propertyTopHasImpr:{},imprPropertyTopOnce:!1,scrollLeft:0,attrMoreRect:null,goodsPropertyRect:null,imprAttrMoreOnce:!1,imprPropertyOnce:!1,renderGoodsData:{},timeOutHandlerList:{},intervalHandlerList:{},referTagId:null,configResultList:{},omsConfigResultList:{},firstEnter:!0,$partialStore:{goTop:[{display:"displayGoTop"}],toast:[{display:"displayToast"},"toastMessage"],resourcePlaceConfig:["resourcePlaceConfig"],bubble:["bubble",{top:"bubbleTop"},"isClosed","isSimple"],modalDialog:[{display:"displayDialog"},"title","content","cancelText","showCancel","confirmText","contentAlign"]},data:{pageName:"goods",impredList:{},isSupportCustomNav:parseInt(H.version,10)>=7||"devtools"===H.platform,navTitle:"",bgStyle:"opacity: 0;",isGoodsExisted:!0,mallRecommendList:[],recommendList:[],page:1,renderRecommendComplete:!1,loadingMoreVisible:!1,loadingMoreText:"正在加载中...",mallInfo:null,bottomBarVisible:!1,serviceDetailVisible:!1,serviceMainClass:"service-detail-hidden",couponsDetailVisible:!1,couponsMainClass:"coupons-detail-hidden",mallCouponToastData:{receiveSuccess:!1,toastVisible:!1,mainToast:"",subToast:""},groupWindowVisible:!1,isShowContent:!1,isShowTitle:!0,isShowVirtualDisable:!1,isPageReady:!1,shareMainClass:"screen-share-main screen-share-main-hide",canShowShare:!0,showError:!1,startTimeDesc:"",endTimeDesc:"",pickNum:"",isIpx:G.SystemInfo.getIpxJudgment(),clickEnable:!0,isShowShareBubble:!1,shareBubbleAvatar:"",shareBubbleNickname:"",duoduoType:"",showGoodsNameCopyToast:!1,showAllProperty:!1,isShowLikeGoodsCoupons:!1,shouldDetailFold:!1,hasMinLeftTimeLocalGroup:!1,hasBottomNotice:!1,goodsNumber:1},onShareAppMessage:function(e){var t=this.data.goodsInfo||{},o=G.ObjectUtil.assign({},this.$urlQueryObj,{mall_id:null,group_order_id:null,wt_id:null,status:null,group_role:null,like_flag:null,from:null,goods_type:t.goodsType,event_type:t.eventType,goods_price:t.minOnsaleGroupPrice,share_form:this.dynamicShareKey});Object.keys(o).forEach(function(e){-1===e.indexOf("biz_tag")&&-1===e.indexOf("biz_type")||delete o[e]});var r="";if(e)if("menu"===e.from)r="top_forward";else{var a=e.target.dataset.subRefer||"";r="share_btn","goods-share-btn"===a?r="goods_detail_share":"screen-shot"===a?r="screen_shot_share":"actionSheetTap"===a&&(r="pic_clk_share")}var i=s.default.DefaultTitle;if(t.groupTypes){var n=void 0;n=t.useOnSalePrice?t.minOnsaleGroupPrice:t.minGroupPrice,i="".concat(n,"元",t.goodsName)}if(0===t.eventType){var d=(G.User.getUserLocalInfo()||{}).nickName||"您的朋友";i="".concat(d,"超值推荐",t.goodsName)}var u=G.User.getUserUin();u&&(o.share_uin=u),this.configResultList.promotion_tag_trigger&&this.omsConfigResultList.promotion_tag&&this.omsConfigResultList.promotion_tag[0]&&(i=""+this.omsConfigResultList.promotion_tag[0]+i);var c={title:i,imageUrl:this.imageUrl,needGetShareImg:this.needGetShareImg,shareKey:this.shareKey,shareIndex:"".concat(this.shareKey,"_0"),queries:o,referStr:r};return this.configResultList.two_jump&&(c.path="/pages/index/index",c.target_page="/package_c/goods/goods"),this.$generateShareContent(c)},clickShareBtn:function(){var e=this.getClickTrackingParams("main","share_btn");(0,G.TrackingRecord)(e,this)},toIndexPage:function(e){this.$switchTab("index");var t=this.getClickTrackingParams("bottom_bar","return_index");t.has_local_group=this.data.goodsInfo.hasLocalGroup?"1":"0",(0,G.TrackingRecord)(t,this),this.$uploadFormId(e)},toLotteryPage:function(e){this.$forward("subject",{subject_id:"2742"});var t=this.getClickTrackingParams("bottom_bar","return_lottery");t.has_local_group=this.data.goodsInfo.hasLocalGroup?"1":"0",(0,G.TrackingRecord)(t,this),this.$uploadFormId(e)},nologinInterceptor:function(e,t){if(G.User.hasLogin())"function"==typeof e&&e();else{this.loginSuccessCb=e;var o={onLoginSuccessFnName:"loginSuccessCb"};t&&(o=G.ObjectUtil.assign(o,{refer_page_element:t})),this.$forward("auth",o)}},defaultClick:function(){},preLoadGoodsPage:function(){var e=this,t=getCurrentPages(),o=void 0;t.length>1&&(o=t[t.length-2]);var r=function(t){t&&parseInt(t.goodsId,10)===parseInt(e.$urlQueryObj.goods_id,10)&&e.$setData({preloadImgUrl:d.default.removeWatermark(t.preloadImgUrl)||"",topGallery:{list:[{}],height:G.Util.rpxToPx(750),banner:{}}})};o&&o.transGoodsData?r(o.transGoodsData):this.$urlQueryObj.goodsId&&r(this.$urlQueryObj||{})},onPageScroll:function(e){if(e){var t=parseInt(e.scrollTop,10);if(this.data.isSupportCustomNav){var o=1,r="商品详情";t<150&&(o=0,r="");var s=t<150&&this.scrollTop>=150||t>=150&&this.scrollTop<150;if(this.data.navTitle!==r||s){var a={bgStyle:"opacity: "+o+";"};this.data.navTitle!==r&&(a.navTitle=r),this.$setData(a)}}this.scrollTop=t,this.recommendList&&!this.renderRecommendListTag&&(this.renderRecommendListTag=!0,this.renderRecommendList(this.recommendList)),this.$dispatch({type:"SCROLL_PAGE",evt:e}),G.ImprUtil.getImprItem(this,"tabKey",e),this.checkMallImprItem(this.scrollTop),G.Util.judgeForPageScroll(this),this.data.showGoodsNameCopyToast&&this.hideGoodsNameCopyToast(),this.imprPropertyTop(e.scrollTop,this.scrollLeft),this.imprPropertyAttrMore(e.scrollTop),_.Message.emit("GOODS_PAGE_SCROLL",{scrollTop:e.scrollTop})}this.data.zoneTips&&this.data.zoneTips.text&&this.hideGoodsZoneTips()},renderRecommendList:function(){var e=this,t={},r=this.lastRenderLen||0,s=this.recommendList||[];if(!(s.length<=r&&this.loadRecommendComplete)){if(s.length<=r&&!this.loadRecommendComplete)this.waitRenderMore=!0;else{this.waitRenderMore=!1;for(var a=r;a<s.length;a++)t=G.ObjectUtil.assign(t,o({},"recommendList[".concat(a,"]"),s[a]));this.lastRenderLen=s.length,t.renderRecommendComplete=!!this.loadRecommendComplete,this.setData(t,function(){e.$getImprInfo()}),this.renderRecommendListTag=!0}this.loadRecommendComplete||this.getRecommendGoodsDetail(this)}},goTop:function(){f.default.goTop(!0);var e=this.getClickTrackingParams("pop_list","top_btn");(0,G.TrackingRecord)(e,this)},gotoGoodsDetail:function(e){var t={};(t="tap"===e.type?e.currentTarget.dataset||{}:e.detail||{}).goodsId||(t=e.currentTarget.dataset||{});var o=t.goodsId||null,r=t.imageId||0;if(o){var s=!!t.isMallRec,a=parseInt(t.index,10),i=this.data.recommendList[a]||{};s&&(i=this.data.mallRecommendList[a]||{}),this.transGoodsData=i.transData||{};var n=s?"mall_rec_list":"rec_list",d=this.getClickTrackingParams(n,"goods");d.idx=a,d.rec_goods_id=o,d.rec_event_type=t.eventType,d.xcx_list_id="10014",s?d.p_rec=i.p_rec:d.list_id=i.recGoodsListId,i.transData&&(this.transGoodsData=i.transData||{}),this.$forward("goods",{goods_id:o,image_id:r}),void 0!==this.$urlQueryObj.subjects_id&&(d.refer_subjects_id=this.$urlQueryObj.subjects_id),void 0!==this.$urlQueryObj.subject_id&&(d.refer_subject_id=this.$urlQueryObj.subject_id),d=G.ObjectUtil.assign(d,this.$generateGoodsInfoTracking(i)),(0,G.TrackingRecord)(d,this)}this.$uploadFormId(e)},initPageData:function(){this.initialDataObj?this.$setData(this.initialDataObj):this.initialDataObj=JSON.parse(JSON.stringify(this.data)),this.recOffset=0,this.lowerLock=!1,this.page=1},getGoodsShareInfo:function(e,o,r,s,a){var i=this,n=null;this.configResultList.eventtype0_share_img2?(n=C.default.getGoodsShareImgv3,this.shareKey="eventtype0_share_img2"):this.configResultList.eventtype0_share_img1&&(n=C.default.getGoodsShareImgv2,this.shareKey="eventtype0_share_img1"),1!==a&&7!==a&&this.configResultList.promotion_tag_trigger&&(n=C.default.getGoodsPromotionTagShareImg,this.shareKey="promotion_tag_trigger");var d={goods_id:e,goods_img:o,normal_price:r,price:s},u="GET";if(this.configResultList.goods_sharecard_video&&this.data.topGallery.isContainVideo)n=C.default.getGoodsDetailShareCardV2,d.draw_type="shareCardV2",d.goods_url=o,d.origin_price=G.StdFormat.price(r,100),d.current_price=G.StdFormat.price(s,100),u="POST";else if(this.configResultList.common_goods_share_card&&0===a){var c=this.data.detailGallery||{},l=this.data.reviews||{};n=C.default.getGoodsDetailShareCardV2,d.goods_url=o,d.draw_type="share_card_v3_kong",d.current_price=G.StdFormat.price(s,100),d.old_price=G.StdFormat.price(r,100),c.brandSection?(d.draw_type="share_card_v3",d.card_type="guanfang"):l.tagList&&l.tagList[0]&&/正品/.test(l.tagList[0].text)&&(d.draw_type="share_card_v3",d.card_type="zhengpin"),u="POST"}n&&t(g.default.mark(function e(){var t;return g.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.needGetShareImg=!0,e.next=4,G.Request.apiRequest(u,n,d,!1,{needGZToken:!0,forceUseApiGZ:!0});case 4:(t=e.sent)&&t.data&&(i.imageUrl=t.data.image_url||t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,i,[[0,8]])}))()},formatActitysales:function(e){var t=parseInt(e,10)||0;if(t<=9999)return"".concat(t);if(t<=99999){var o=parseInt(t/1e3,10);return o%10?parseInt(o/10,10)+"."+o%10+"万":parseInt(o/10,10)+"万"}return parseInt(t/1e4,10).toString()+"万"},getUin:function(){var e=this;return t(g.default.mark(function t(){var o,r;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=G.Request.requestDataWithUrl("GET",C.default.getUin),t.next=3,G.Request.runSecondaryRequestForPage(o,e);case 3:return(r=t.sent).uin&&G.User.saveUserInfo({uin:r.uin}),t.abrupt("return",r);case 6:case"end":return t.stop()}},t,e)}))()},getOtherUserInfo:function(e){var o=this;return t(g.default.mark(function t(){var r,s,a;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=G.Request.requestDataWithUrl("POST",C.default.getOtherUserInfo,{uin:e}),t.next=3,G.Request.runSecondaryRequestForPage(r,o);case 3:return(s=t.sent).uid&&(a=l.default.getUserId(),s.uid!==a&&(o.$setData({isShowShareBubble:!0,shareBubbleAvatar:s.avatar,shareBubbleNickname:s.nickname}),o.$dispatch(D.closeBubble))),t.abrupt("return",s);case 6:case"end":return t.stop()}},t,o)}))()},onReachBottom:function(){this.renderRecommendListTag=!0,this.renderRecommendList()},getRecommendGoodsDetail:function(e){var o=this;return t(g.default.mark(function t(){var r,s,a,i,n;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$urlQueryObj.goods_id,s="".concat(e.$urlQueryObj.hide_rec),!e.lowerLock&&r&&"true"!==s){t.next=5;break}return t.abrupt("return");case 5:return e.lowerLock=!0,a={goods_id:r,app_name:"goods_detail",page:e.page||1,list_id:e.recGoodsListId},i=G.Request.requestDataWithCmd(Q.getRecommendGoodsDetail,{params:Object.assign({},a)}),t.next=10,I.default.getRecGoods(Object.assign({},a),{type:2,need_local_group:!0},i);case 10:n=t.sent,e.lowerLock=!1,e.processRecommendGoods(n,1===parseInt(e.page,10)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),e.lowerLock=!1,console.error(t.t0);case 19:case"end":return t.stop()}},t,o,[[0,15]])}))()},processRecommendGoods:function(e,o){var r=this;return t(g.default.mark(function t(){var s,a,i;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.lowerLock=!1,e){t.next=3;break}return t.abrupt("return");case 3:if(!e.errorCode&&!e.error_code){t.next=6;break}return r.$dispatch((0,N.showToast)(e.errorMsg||e.error_code)),t.abrupt("return");case 6:if(!r.data.showError){t.next=8;break}return t.abrupt("return");case 8:if(e.success&&e.data&&(e.data.goods_list||Array.isArray(e.data))&&(!e.data.goods_list||Array.isArray(e.data.goods_list))){t.next=10;break}return t.abrupt("return");case 10:if(s=[],(a=e.data.goods_list||e.data).forEach(function(e){var t=v.default.formatData(e);t.listId=r.listId,t.recGoodsListId=r.recGoodsListId,s.push(t)}),s=G.DataUtil.objectArrayDuplicateRemove(s,"goodsId",function(e){return 1===e.isApp}),!((i=e.data.local_groups||[])&&i.length>0)){t.next=19;break}s.forEach(function(e){e.localGroups=i[e.goodsId||e.goods_id]||[]}),t.next=21;break;case 19:return t.next=21,r.$requestLocalGroup(s);case 21:s.forEach(function(e,t){var o=e;t%2==0&&(t!==s.length-1?e.tagList&&e.tagList.length>0||s[t+1].tagList&&s[t+1].tagList.length>0?(o.showTag=!0,s[t+1].showTag=!0):(o.showTag=!1,s[t+1].showTag=!1):e.tagList&&e.tagList.length>0?o.showTag=!0:o.showTag=!1)}),r.recommendList=r.recommendList||[],o&&(r.recommendList=[],r.lastRenderLen=0),r.lastRenderLen=r.recommendList.length,r.recommendList=r.recommendList.concat(s),r.page=(r.page||1)+1,a.length&&(e.has_more||e.data.has_more)&&3!==r.page||(r.loadRecommendComplete=!0),((r.scrollTop>0||r.data.goodsInfo.isSoldOut||r.data.bottomBarData&&"查看相似商品"===r.data.bottomBarData.singleButtonLabel)&&o||r.waitRenderMore)&&r.renderRecommendList();case 29:case"end":return t.stop()}},t,r)}))()},getFreeCouponsDetail:function(e){var o=this;return t(g.default.mark(function t(){var r,s,a;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.goodsId||0,!e.isGroupFree||!G.User.hasLogin()){t.next=7;break}return s=G.Request.requestDataWithCmd("10413",{restfulParam:r}),t.next=5,G.Request.runSecondaryRequestForPage(s,o);case 5:return a=t.sent,t.abrupt("return",a);case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}},t,o)}))()},processFreeCouponsInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.errorCode&&this.$dispatch((0,N.showToast)(e.errorMsg)),!e.errorCode&&e.length>0&&this.$setData({"goodsInfo.freeCoupon":e})},propertyTopScroll:function(e){e&&e.detail&&e.detail.scrollLeft&&(this.scrollLeft=e.detail.scrollLeft||0,this.imprPropertyTop(this.scrollTop,this.scrollLeft,!0))},setBottomBar:function(e,t){var o=this,r=this.data.localGroups||null,s=B.default.formatGoodsBottomBar(e,t,this.$urlQueryObj,r,this.configResultList.seckill_notremind);this.$setData({bottomBarData:s}),_.Message.on(_.KEYS.LIKE_GOODS_COUPONS,function(e){o.dealLikeGoodsCoupons(e)}),_.Message.on("GOODS_ZONE_DETAIL_STATUS",function(e){o.dealLikeGoodsZoneTips(e)})},dealLikeGoodsZoneTips:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t&&void 0!==t.status&&(c.default.configStartup||{}).dd_zone_cancel){var o={};if(t.favorite_id&&(o.favId=t.favorite_id),-2===t.status?(o.text="已收藏，敏感商品不会同步到群空间",o.action=""):0===t.status&&(o.text="已收藏并将同步到群空间",o.action="取消同步",o.actionClick=1),o.text){this.$setData({zoneTips:o}),this.timeOutHandlerList.ZONE_HIDE=setTimeout(function(){e.hideGoodsZoneTips(),e.clearTimeoutByKey("ZONE_HIDE")},5e3);var r=this.getImprTrackingParams("dd_zone_tips");r.status=-2===t.status?"1":"0",(0,G.TrackingRecord)(r,this)}}},hideGoodsZoneTips:function(){this.timeOutHandlerList.ZONE_HIDE&&this.clearTimeoutByKey("ZONE_HIDE"),this.data.zoneTips&&this.data.zoneTips.text&&this.$setData({zoneTips:{}})},dealZoneFavCancel:function(){var e=this,t=this.data.zoneTips,o=this.data.goodsInfo;if(1===t.actionClick){G.Request.apiRequest("POST",C.default.delZoneLikes,{goods_id:o.goodsId||""},!1,{forceUseApiGZ:!0,needGZToken:!0}).then(function(t){t&&t.data&&3===t.data.status&&e.$setData({zoneTips:{text:"已收藏并将同步到群空间",action:"已取消",actionClick:0}})}).catch(function(e){console.error(e)});var r=this.getClickTrackingParams("dd_zone_tips","cancel_dd_zone");(0,G.TrackingRecord)(r,this)}},getGoodsLisbon:function(){var e=this;return t(g.default.mark(function t(){var o,s,a,i,n;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=e.renderGoodsData.goods||{},s=e.renderGoodsData.price||{},a={app:0,mall_coupons:!0,goods_id:o.goods_id,goods_type:o.goods_type,event_type:o.event_type,mall_id:o.mall_id,min_sku_price:s.min_on_sale_group_price,max_sku_price:s.max_on_sale_group_price,old_min_sku_price:s.old_min_on_sale_group_price,has_promotion:!!o.has_promotion,cat_id:o.cat_id_1,cat_id_1:o.cat_id_1,cat_id_2:o.cat_id_2,cat_id_3:o.cat_id_3,query_brand_coupon:!0},e.duoduoType&&(a.is_multi_treasure=!0),"object"===r(o.activity)&&void 0!==o.activity.activity_type&&(a.activity_type=o.activity.activity_type),!o.is_onsale&&1!==o.event_type&&7!==o.event_type&&9!==o.event_type&&11!==o.event_type&&2!==o.event_type&&23!==o.event_type&&15!==o.event_type&&5!==o.event_type){t.next=13;break}return i=G.Request.requestDataWithCmd(Q.getGoodsLisbon,{params:a}),t.next=10,G.Request.runSecondaryRequestForPage(i,e);case 10:return(n=t.sent).best_platform_coupon&&e.dealBestPlatformCoupons(n.best_platform_coupon),t.abrupt("return",n);case 13:return t.abrupt("return",null);case 16:return t.prev=16,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",null);case 20:case"end":return t.stop()}},t,e,[[0,16]])}))()},reLoad:function(){this.$showLoading({loadingNewStyle:!0},500),this.$setData({showError:!1}),this.loadPage()},requestGoodsInfo:function(e,o,r){var s=this;t(g.default.mark(function t(){var a,i,n,d,u;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.default.requestGoodsRenderInfo(e,s.pageFrom,o,r);case 3:if(a=t.sent,!(i=a.goods||null)){t.next=35;break}if(!((n=U.default.formatGoods(a)).isLottery&&n.luckyEndTime<n.serverTime)){t.next=11;break}s.dealWithLotteryGoods(),t.next=33;break;case 11:if(s.renderFirstScreen(a,n,{}),d={},t.prev=13,!n.isDeposit||!n.depositOn){t.next=18;break}return t.next=17,s.getDepositTipContent(n);case 17:d.oak_info=t.sent;case 18:if(1===n.mallId){t.next=22;break}return t.next=21,s.getMallRecommendGoodsDetail(n,{showMoreGoods:s.configResultList.goodsdetail_mall_othergoods});case 21:d.mall_rec=t.sent;case 22:return t.next=24,s.getFreeCouponsDetail(n);case 24:d.free_coupons=t.sent,s.timeOutHandlerList.COMPOSE_AFTER=setTimeout(function(){s.processGoodsDetailList(n,d),s.renderAfter(a,n,d),s.clearTimeoutByKey("COMPOSE_AFTER")},500),t.next=33;break;case 28:t.prev=28,t.t0=t.catch(13),console.error(t.t0),s.$hideLoading(),s.showGoodsContainer(a,n);case 33:t.next=38;break;case 35:s.$hideLoading(),49001===(u=parseInt(a.error_code,10))?(s.$setData({showError:!0,isGoodsExisted:!1}),s.$setTitle("商品不存在")):s.dealWithRequestError(a);case 38:t.next=44;break;case 40:t.prev=40,t.t1=t.catch(0),console.error(t.t1),s.dealWithRequestError(t.t1);case 44:case"end":return t.stop()}},t,s,[[0,40],[13,28]])}))()},requestComposeGoodsInfo:function(e,o,r){var s=this;t(g.default.mark(function t(){var a,i,n,d,u,l,p;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={goods_id:e,from:s.pageFrom,duoduo_type:s.duoduoType,has_rec:!s.$urlQueryObj.hide_rec,address_list:o,page_version:"6",show_type:s.configResultList.join_past_group?1:0},r&&(a=G.ObjectUtil.assign(a,r)),s.groupOrderId&&(a.group_order_id=s.groupOrderId),t.prev=4,i=void 0,i=c.default.configStartup.vtx_other_use_gz_socket?G.Request.request(w.default.composeGoodsFirst,{params:a}):G.Request.apiRequest("POST",C.default.composeGoodsFirst,a,!1,{forceUseApiGZ:!0,needGZToken:!0}),t.next=9,i;case 9:if((n=t.sent)&&n.success){t.next=14;break}s.dealWithRequestComposeError(n,e,o,r),t.next=21;break;case 14:if(d=n.data||{},u=d.goods_detail||{}){t.next=19;break}return s.dealWithRequestError(),t.abrupt("return");case 19:(l=U.default.formatGoods(u)).isLottery&&l.luckyEndTime<l.serverTime?s.dealWithLotteryGoods():s.renderFirstScreen(u,l,d);case 21:t.next=27;break;case 23:t.prev=23,t.t0=t.catch(4),49001===(p=parseInt(t.t0.error_code,10))?(s.$setData({showError:!0,isGoodsExisted:!1}),s.$hideLoading(),s.$setTitle("商品不存在")):40001===p?(s.$hideLoading(),s.nologinInterceptor(function(){s.reLoad()})):s.dealWithRequestComposeError(t.t0,e,o,r);case 27:t.next=33;break;case 29:t.prev=29,t.t1=t.catch(0),s.$hideLoading(),s.dealWithRequestError();case 33:case"end":return t.stop()}},t,s,[[0,29],[4,23]])}))()},dealWithRequestComposeError:function(e,t,o,r){this.requestGoodsInfo(t,o,r),u.default.sendDeadlyError({bussiness_type:"interface",action:"get_goods_detail",url_path:"compose/goods/detail/first/v2",error_code:e.error_code,error_msg:e.error_msg,fail_stack_msg:e.toString(),fail_url:e.fail_url,fail_error_msg:e.fail_error_msg})},dealWithRequestError:function(e){this.$hideLoading(),e&&e.error_code>400?this.loadStaticGoodsData(this.goods_id,e.error_code):this.data.showError||this.$setData({showError:!0})},dealWithLotteryGoods:function(){var e=this,t="https://mobile.yangkeduo.com/pplt_goods_list.html?_ex_vns_src=goods_xcx";this.$hideLoading(),this.$showModal({title:"",content:"该活动商品已结束，去看看更多抽奖商品",showCancel:!1,confirmText:"去看看",contentAlign:"center",success:function(){e.clearTimeoutByKey("LOTTERY_GOODS"),n.default.route(t,"forward")}}),this.timeOutHandlerList.LOTTERY_GOODS=setTimeout(function(){n.default.route(t,"forward"),e.clearTimeoutByKey("LOTTERY_GOODS")},3e3)},renderFirstScreen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(g.default.mark(function t(){var a,i,n,d,u,c;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.processRenderData(r,e),t.next=3,o.processLocalGroups(e,r);case 3:a={},i=e.review||{},a=i.review_data||{},o.processReviews(a,r),n=o.data.localGroups||{},d=o.data.reviews||{},u=n.groupList&&n.groupList.length>0,c=d.detailList&&d.detailList.length>0,u&&c?(o.showGoodsContainer(e,r),o.timeOutHandlerList.FIRST_SCREEN=setTimeout(function(){o.processMallEntrance(e,r),o.processGoodsDetailList(r,s),Object.keys(s).length>0&&o.renderAfter(e,r,s),o.clearTimeoutByKey("FIRST_SCREEN")},500)):(o.processMallEntrance(e,r),o.processGoodsDetailList(r,s),o.showGoodsContainer(e,r),o.timeOutHandlerList.FIRST_SCREEN=setTimeout(function(){Object.keys(s).length>0&&o.renderAfter(e,r,s),o.clearTimeoutByKey("FIRST_SCREEN")},500));case 12:case"end":return t.stop()}},t,o)}))()},renderAfter:function(e,o,r){var s=this;return t(g.default.mark(function t(){var a,i,n,d;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=12;break}if(a=r.next_step||[],i={},!(a.length>0)){t.next=10;break}return n={goods_id:o.goodsId,from:s.pageFrom,duoduo_type:s.duoduoType,has_rec:!s.$urlQueryObj.hide_rec,mall_id:o.mallId,next_step:r.next_step,list_id:s.mallRecGoodsListId},d=void 0,d=c.default.configStartup.vtx_other_use_gz_socket?G.Request.request(w.default.composeGoodsNext,{params:n}):G.Request.apiRequest("POST",C.default.composeGoodsNext,n,!1,{forceUseApiGZ:!0,needGZToken:!0}),t.next=9,d;case 9:i=t.sent;case 10:i&&i.success&&s.processGoodsDetailList(o,i.data||{}),r.local_groups||i.data&&i.data.local_groups||s.composeGoodsImprTracking();case 12:s.setSkus(e,o),s.setGalleryDetail(e),s.getRecommendGoodsDetail(s),s.imprDepositRuleBtn(),1===parseInt(o.goodsPropertyType,10)&&o.goodsPropertyTop.length>3&&s.initPropertyTop(),o.goodsProperty&&o.goodsProperty.length>0&&s.initPropertyAttrMore();case 18:case"end":return t.stop()}},t,s)}))()},showGoodsContainer:function(e,t){this.$hideLoading(),this.data.showGoodsDetailsContainer||this.setBottomBar(e,t),this.$setData({showGoodsDetailsContainer:!0})},processMallEntrance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(1!==parseInt(t.mallId,10)){var o=e.mall_entrance||null;if(!o)return;var r=o.mall_data||{},s=this.formatMallEntranceData(r);if(s.errorCode)return void this.$dispatch((0,N.showToast)(s.errorMsg));this.$setData({mallInfo:s})}},processReviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=L.default.formatReviews(e,t),r=o.reviews,s=void 0===r?{}:r,a=o.answer,i={};if(s.detailList.length>0){i.reviews=s;var n=this.getImprTrackingParams("comment");(0,G.TrackingRecord)(n,this)}this.configResultList.goods_detail_seller_qa&&G.DataUtil.isObject(a)&&(i.answer=a,this.doImprTracking({page_section:"customer_area",page_el_sn:384489})),Object.keys(i).length>0&&this.$setData(i)},processLocalGroups:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t(g.default.mark(function t(){var s,a,i,n,d,u,c,l;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(e,t){!i.configResultList.join_single_group&&e&&delete e.history_visitor;var o=O.default.formatLocalGroups(r,e,t);o.groupList&&o.groupList.length>0&&i.$setData({"goodsInfo.hasLocalGroup":!0,localGroups:o}),!o.userGroup&&i.groupOrderId&&i.refreshGroupOrder(i.groupOrderId),i.composeGoodsImprTracking()},s=o.neighbor_group||null){t.next=4;break}return t.abrupt("return");case 4:if(0!==(a=parseInt(s.neighbor_status,10))){t.next=7;break}return t.abrupt("return");case 7:if(i=e,d=parseInt(o.server_time,10),1!==a){t.next=14;break}u=s.neighbor_data||{},n(u,d),t.next=23;break;case 14:if(2!==a){t.next=23;break}if(!e.isRequireLocalGroups(r)){t.next=23;break}return c=e.configResultList.join_past_group?1:0,t.next=19,O.default.requestLocalGroups(r.goodsId,c,e.groupOrderId);case 19:if(l=t.sent){t.next=22;break}return t.abrupt("return");case 22:n(l,l.server_time);case 23:case"end":return t.stop()}},t,e)}))()},processGoodsDetailList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(o).forEach(function(r){var s=o[r];if(s)switch(r){case"oak_info":e.processDepositTipContent(s);break;case"free_coupons":var a=s.free_coupon||[];e.processFreeCouponsInfo(a);break;case"mall_rec":1!==t.mallId&&e.processMallRecommendGoods(s,{showMoreGoods:e.configResultList.goodsdetail_mall_othergoods})}})},loadStaticGoodsData:function(e,t){var o=!1;if(M.default[e]){o=!0;var r=M.default[e]||{};if(r.goods||null){var s=U.default.formatGoods(r);this.processRenderData(s,r),this.showGoodsContainer(r,s),this.processAfter(s,r)}}else this.$dispatch((0,N.showToast)("服务器比较拥挤，请稍等几分钟再尝试~"));u.default.sendDeadlyError({bussiness_type:"interface",action:"static_goods_data",error_code:t,goods_id:e,is_contain_static_data:o})},loadPage:function(){var e=this;this.initPageData(),this.$urlQueryObj.subjects_id?this.pageFrom=U.default.getSubjectsFrom(this.$urlQueryObj.subjects_id):this.pageFrom=this.$urlQueryObj.page_from||R.default.default;var o=this;t(g.default.mark(function t(){var r,s;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.default.getAddressParams();case 3:return r=t.sent,t.next=6,G.User.isNewOrSilentUser();case 6:if(t.t0=t.sent,t.t0){t.next=9;break}t.t0=!1;case 9:o.isNewOrSilentUser=t.t0,s={client_time:Date.now()},Object.keys(o.$urlQueryObj).forEach(function(e){e&&(0===e.indexOf("_oc_")?s[e]=o.$urlQueryObj[e]:e.indexOf("oak_gallery")>=0&&(s._oak_gallery=o.$urlQueryObj[e]))}),o.duoduoType&&(s._oc_duoduo_type=o.duoduoType),e.groupOrderId&&(s.group_order_id=e.groupOrderId),o.configResultList.goods_detail_access2?o.requestComposeGoodsInfo(o.goods_id,r,s):o.requestGoodsInfo(o.goods_id,r,s),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(0),console.error(t.t1);case 20:case"end":return t.stop()}},t,e,[[0,17]])}))()},showError:function(){this.$dispatch((0,N.showToast)("NO_NETWORK_MSG")),this.$hideLoading(),this.$setData({showError:!0})},onShow:function(){var e=this,o=this.$urlQueryObj.goods_id;if(this.firstEnter)this.firstEnter=!1;else{var r=this.data.goodsInfo||{};r&&r.goodsId&&t(g.default.mark(function t(){var s,a,i,n;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isRequireLocalGroups(r,!0)){t.next=11;break}return s=e.configResultList.join_past_group?1:0,t.next=4,O.default.requestLocalGroups(o,s,e.groupOrderId);case 4:return a=t.sent,(i=O.default.formatLocalGroups(r,a)).groupList&&i.groupList.length>0&&e.$setData({localGroups:i}),t.next=9,e.getFreeCouponsDetail(r);case 9:(n=t.sent).free_coupon&&e.processFreeCouponsInfo(n.free_coupon);case 11:case"end":return t.stop()}},t,e)}))()}var s=getCurrentPages(),i=s[s.length-1].__route__;i+="?".concat(G.UrlUtil.buildQuery(this.$urlQueryObj)),this.data.isShowShareBubble?this.$dispatch(D.closeBubble):this.$dispatch(D.initBubble(!0,i,(this.data.isSupportCustomNav?G.Util.pxToRpx(H.statusBarHeight)+100:24)+"rpx")),wx.onUserCaptureScreen&&wx.onUserCaptureScreen(function(){var t=e.getImprTrackingParams("screen_shot_popup");(0,G.TrackingRecord)(t,e),m.default.listenScreenShot(e)}),(this.$urlQueryObj.refer_xcx_campaign_get_redpocket||this.referXcxCampaignGetRedpocket)&&(c.default.readActivityPages.get_redpocket=!0),c.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||this.pvTracking(!0),_.Message.emit(_.KEYS.ACTIVITY_SHOPPING_REWARDS_TIMER,{stop:!1});var n=a.default.getLastSkuSelect(),d=a.default.getLastGoodsNum();n&&(this.$setData({currentSelect:n}),a.default.setLastSkuSelect(null)),d&&(a.default.setLastGoodsNum(null),this.goodsNumber=d,this.$setData({goodsNumber:d})),this.referTagId=a.default.getReferTagId()},onHide:function(){c.default.isLastPagePayPage=!1,c.default.hasPaySucess=!1,c.default.isOrderForbidden=!1,c.default.isLastPageGroupPage=!1,this.$dispatch(D.closeBubble),_.Message.emit(_.KEYS.ACTIVITY_SHOPPING_REWARDS_TIMER,{stop:!0}),_.Message.off(_.KEYS.LIKE_GOODS_COUPONS),_.Message.off("GOODS_ZONE_DETAIL_STATUS");var e=this.data.bottomBarData||{};this.hasLiked=e.hasLiked||!1},clearTimeoutByKey:function(e){this.timeOutHandlerList[e]&&(clearTimeout(this.timeOutHandlerList[e]),delete this.timeOutHandlerList[e])},clearIntervalByKey:function(e){this.intervalHandlerList[e]&&(clearInterval(this.intervalHandlerList[e]),delete this.intervalHandlerList[e])},clearTimer:function(){var e=this;Object.keys(this.timeOutHandlerList).forEach(function(t){e.timeOutHandlerList[t]&&clearTimeout(e.timeOutHandlerList[t])}),Object.keys(this.intervalHandlerList).forEach(function(t){e.intervalHandlerList[t]&&clearInterval(e.intervalHandlerList[t])}),this.timeOutHandlerList={},this.intervalHandlerList={}},onUnload:function(){this.updateLikeSku(),this.updateDefaultAddressHandler(),this.changeGoodsSpikeStatusHandler(),this.$dispatch(D.closeBubble),this.hideGoodsZoneTips(),this.clearTimer(),wx.onUserCaptureScreen&&wx.onUserCaptureScreen(function(){}),G.Util.empty(this),_.Message.off(_.KEYS.LIKE_GOODS_COUPONS),_.Message.off("GOODS_ZONE_DETAIL_STATUS"),_.Message.emit(_.KEYS.ACTIVITY_SHOPPING_REWARDS_TIMER,{stop:!0}),a.default.setReferTagId(null),a.default.setLastSkuSelect(null),a.default.setLastGoodsNum(null)},updateLikeSku:function(){var e=this;return t(g.default.mark(function t(){var o,r,s;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(o=e.selectedSku)){t.next=6;break}return r=e.$urlQueryObj.goods_id,s={goods_id:r,sku_id:o},t.next=6,G.Request.apiRequest("POST","api/zenon/goods/sku/update",s,!1,{});case 6:case"end":return t.stop()}},t,e)}))()},componentsAddRootFunc:function(e,t){var o=this;e&&"function"==typeof t&&(this[e]="goodsLike"===e?function(e){if(!G.User.hasLogin())return o.goodsLikeAfterLoginSuccess=function(){o.goodsLike(e)},void o.$forward("auth",{onLoginSuccessFnName:"goodsLikeAfterLoginSuccess",refer_page_element:"like_btn"});t(e,!1),o.$uploadFormId(e)}:t)},closeShare:function(){this.$setData({shareMainClass:"screen-share-main screen-share-main-hide",canShowShare:!0});var e=this.getClickTrackingParams("screen_shot_popup","close_btn");(0,G.TrackingRecord)(e,this)},screenShare:function(){var e=this.getClickTrackingParams("screen_shot_popup","invent_btn");(0,G.TrackingRecord)(e,this)},goodsNumberChange:function(){},onLoad:function(e){var t=this;this.startTime=Date.now(),this.$showLoading({loadingNewStyle:!0},500);var o=e;Object.keys(this.$urlQueryObj).forEach(function(e){if(e&&0===e.indexOf("_oc_")){var o=e.substring(4);t.$commonTrackingParams[o]=t.$urlQueryObj[e];var r="refer_".concat(o);t.$commonTrackingParams[r]=t.$urlQueryObj[e]}}),(0,x.default)(this),(0,q.default)(this),(0,E.default)(this),(0,$.default)(this),(0,P.default)(this),(0,j.default)(this),this.loadConfig(),o.goods_id&&(o.goods_id=G.Util.formatIllegalStr(o.goods_id)),this.goods_id=o.goods_id,this.pvTracking(),this.$urlQueryObj.scene_id&&(c.default.wxappId=this.$urlQueryObj.scene_id),this.$urlQueryObj.source_channel&&(this.sourceChannel=this.$urlQueryObj.source_channel),this.$urlQueryObj.duoduo_type&&(this.duoduoType=this.$urlQueryObj.duoduo_type),this.$urlQueryObj.group_order_id&&(this.groupOrderId=this.$urlQueryObj.group_order_id),this.$urlQueryObj.spike_type&&(this.spikeType=this.$urlQueryObj.spike_type),this.listId="xcx_goods_detail_rec_list_".concat(G.DataUtil.getRandomString(6)),this.mallRecGoodsListId="goods_detail_mall_".concat(G.DataUtil.getRandomString(6)),this.recGoodsListId="goods_detail_".concat(G.DataUtil.getRandomString(6)),this.preLoadGoodsPage(),this.scrollContainerHeight=G.SystemInfo.getWindowHeightSync();var r=G.ObjectUtil.assign({scrollContainerWidth:G.SystemInfo.getWindowWidthSync(),hideMinLeftTimeLocalGroup:!!this.$urlQueryObj.hideMinLeftTimeLocalGroup});this.$setData(r),o.scene&&(o=G.ObjectUtil.assign(o,y.default.sceneMap(o.scene))),o.refer_xcx_campaign_dacu&&(this.data.refer_xcx_campaign_dacu=o.refer_xcx_campaign_dacu),this.loadPage(),this.updateDefaultAddressHandler=_.Message.on(_.KEYS.UPDATE_DEFAULT_ADDRESS,function(){t.loadPage()}),this.changeGoodsSpikeStatusHandler=_.Message.on(_.KEYS.CHANGE_GOODS_SPIKE_STATUS,function(){t.setReminded()}),this.popupModel=new T.default({page:this,ns:"popupModel",key:"popup_goods_detail",maxPopupModalCount:2,targetPage:o.target_page}),this.$dispatch((0,S.default)([{resourcePlaceKey:"floating_goods_detail"}]));var s=G.User.getUserUin();s||this.getUin();var a=this.$urlQueryObj.share_uin;a&&s!==a&&this.getOtherUserInfo(a),h.default.updateLikeGoodsIds()},onReady:function(){var e=this;this.$setData({CreateGoodsDetailsContainer:!0}),this.timeOutHandlerList.DELAY_RENDER=setTimeout(function(){e.clearTimeoutByKey("DELAY_RENDER"),e.$setData({isPageReady:!0})},3e3)},stopDetailMove:function(){},dealVirtualGoods:function(e){var t=this;if("ios"===H.platform){var o=this.configResultList.floating_banned_catid;if(o&&o.length>0)for(var r=parseInt(e.catId2,10),s=0;s<o.length;++s)for(var a=(o[s]||{}).cat_id2||[],i=0;i<a.length&&(parseInt(a[i],10)!==r||!wx.showModal||"break"!==function(){t.$setData({isShowVirtualDisable:!0});var e=t;return wx.showModal({title:"温馨提示",confirmText:"我知道了",showCancel:!1,content:"小程序内暂不支持购买此商品",success:function(t){t.confirm&&(getCurrentPages().length>1?e.$back():e.$forward("index"))}}),"break"}());++i);}},dealPromotions:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.promotion||{};if(o.events){var r=o.events||{},s=t.server_time;if(r.limited_free_order&&r.limited_free_order.start_time&&r.limited_free_order.end_time){var a=r.limited_free_order,n=a.start_time,d=a.end_time,u=a.pick_num,c=G.TimeUtil.formatTime(n,"MM月dd日hh:mm"),l=G.TimeUtil.formatTime(d,"MM月dd日hh:mm"),p=Math.round(parseInt(G.DataUtil.accDiv((new Date).getTime(),1e3),10));this.$setData({startTimeDesc:c,endTimeDesc:l,pickNum:u,showActive:!!(p>parseInt(n,10)&&p<parseInt(d,10))})}if(r.promotion_event_list){var h=r.promotion_event_list.event_list[0],_=parseInt(h.promotion_event_type,10);if(_===i.default.PromotionEventType.LIMIT_TIME_DISCOUNT||_===i.default.PromotionEventType.LIMIT_COUNT_DISCOUNT){var g=h.end_time-s,f=h.event_items[0].discount_param;if(g>0&&f>0&&f<100){var m=G.TimeUtil.getPackagedTimeFromTimeBucket(1e3*g,"HMS"),v=0;_===i.default.PromotionEventType.LIMIT_TIME_DISCOUNT?v=g>=86400?m.days+"天"+m.hours+"小时后恢复":m.hours+":"+m.minutes+":"+m.seconds+"后恢复":_===i.default.PromotionEventType.LIMIT_COUNT_DISCOUNT&&(v="再售"+h.remain_quantity+"件后恢复");var y=void 0;y=this.data.goodsInfo.useOnSalePrice?this.data.goodsInfo.minOnsaleGroupPrice:this.data.goodsInfo.minGroupPrice?this.data.goodsInfo.minGroupPrice:this.data.goodsInfo.preGroupPrice,y=G.DataUtil.accDiv(Math.floor(G.DataUtil.accMul(y,f)),100),this.$setData({discountPrice:y,"goodsInfo.discount":f,"goodsInfo.discountLeftTime":v}),this.clearIntervalByKey("DISCOUNT_LEFT_TIME"),this.intervalHandlerList.DISCOUNT_LEFT_TIME=setInterval(function(){g>0?--g<86400&&(m=G.TimeUtil.getPackagedTimeFromTimeBucket(1e3*g,"HMS"),_===i.default.PromotionEventType.LIMIT_TIME_DISCOUNT?v=m.hours+":"+m.minutes+":"+m.seconds+"后恢复":_===i.default.PromotionEventType.LIMIT_COUNT_DISCOUNT&&(v="再售"+h.remain_quantity+"件后恢复"),e.$setData({discountPrice:y,"goodsInfo.discount":f,"goodsInfo.discountLeftTime":v})):(e.clearIntervalByKey("DISCOUNT_LEFT_TIME"),e.$setData({"goodsInfo.discount":0,"goodsInfo.discountLeftTime":0}))},1e3)}}}if(r.multi_goods_event){var T=r.multi_goods_event.display;this.$setData({"goodsInfo.multiDiscount":T})}if(r.promotion_price_activity){var b=parseInt(r.promotion_price_activity.promotion_activity_type,10);if(6!==b&&7!==b)return;var I=r.promotion_price_activity,k=I.end_time-s,L=G.TimeUtil.getPackagedTimeFromTimeBucket(1e3*k,"HMS"),O="",S="",D="",C=I.copy_writing.sku_copy_writings;D=k<86400?L.hours+":"+L.minutes+":"+L.seconds:L.days+"天"+L.hours+"小时",O=I.copy_writing.activity_copy_writing.replace("#time#",D),S=I.copy_writing.copy_writing_without_price.replace("#time#",D),this.$setData({"goodsInfo.multiDiscount":O,"goodsInfo.skuDisplayTitle":S,"goodsInfo.skuNoFormatTitle":I.copy_writing.copy_writing_without_price,"goodsInfo.skuDefaultTitle":I.copy_writing.copy_writing_without_price,"goodsInfo.skuCopyWritings":C,"goodsInfo.activityTime":k}),this.clearIntervalByKey("ACTIVITY_LEFT_TIME"),this.intervalHandlerList.ACTIVITY_LEFT_TIME=setInterval(function(){if(k>0){k--,L=G.TimeUtil.getPackagedTimeFromTimeBucket(1e3*k,"HMS"),D=k<86400?L.hours+":"+L.minutes+":"+L.seconds:L.days+"天"+L.hours+"小时",O=I.copy_writing.activity_copy_writing.replace("#time#",D);var t=e.data.goodsInfo.skuNoFormatTitle||"";t&&(S=t.replace("#time#",D)),e.$setData({"goodsInfo.multiDiscount":O,"goodsInfo.skuDisplayTitle":S,"goodsInfo.activityTime":k})}else e.clearIntervalByKey("ACTIVITY_LEFT_TIME"),e.loadPage()},1e3)}this.initMallCoupons(r),this.initPromotionCoupons(r),r.best_platform_coupon&&this.dealBestPlatformCoupons(r.best_platform_coupon),r.voucher_center_coupon&&this.configResultList.coupon_to_goods&&this.dealVoucherCenterCoupon(r.voucher_center_coupon,s)}},processRenderData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t;this.formatGoods=r,wx.stopPullDownRefresh(),this.renderGoodsData=o;var s=r.eventType||0;if(1014===parseInt(c.default.sceneId,10)&&[1,7].indexOf(s)>=0&&r.luckyEndTime&&r.luckyEndTime<r.serverTime)this.dealWithLotteryGoods();else if(1===parseInt(this.$urlQueryObj.show_sku_selector,10)&&this.$hideLoading(),r.errorCode)this.$dispatch((0,N.showToast)(r.errorMsg));else{if(this.dealVirtualGoods(r),!r.groupTypes||r.groupTypes.length<2)return this.$dispatch((0,N.showToast)("活动已经结束了")),void(this.timeOutHandlerList.BACK=setTimeout(function(){e.clearTimeoutByKey("BACK"),e.$back()},1e3));1===parseInt(r.isApp,10)&&this.$dispatch((0,N.showToast)("该商品在拼多多app中才能购买"));var a=this.$urlQueryObj.is_from_like||"0";a&&"1"===a?this.hasSkuSelector=!1:o.sku&&o.sku.length>1&&(this.hasSkuSelector=!0);var i=this.configResultList.goods_detail_video,n=k.default.formatTopGallery(o,this.$urlQueryObj.image_id,i);if(this.$setData({topGallery:n}),this.dealGoodsType(o,r),this.data.goodsInfo&&(r=G.ObjectUtil.assign({},this.data.goodsInfo,r)),this.$setData({isGoodsExisted:!0,duoduoType:this.duoduoType||"",goodsInfo:r}),this.dealPromotions(o),this.dealServicePromise(r,o),this.dealTagInfo(r,o),[0,2,3,6,12,13,15,16,18].indexOf(s)>=0){var d=G.DataUtil.accMul(r.useOnSalePrice?r.minOnsaleGroupPrice:r.minGroupPrice,100),u=G.DataUtil.accMul(r.marketPrice||r.preMarketPrice,100);this.timeOutHandlerList.INIT_SHARE_INFO=setTimeout(function(){e.getGoodsShareInfo(r.goodsId,r.hdThumbUrl,u,d,s),e.clearTimeoutByKey("INIT_SHARE_INFO")},500)}}},dealLikeGoodsCoupons:function(){function e(){var e=G.TimeUtil.transferToTime(1e3*i,"hh:mm:ss");return"".concat(e,"内有效，下单立减!")}var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.data.goodsInfo||{},s=r.userNoticeDynamic||{};if(r.isOnSale&&this.data.isGoodsExisted&&1!==parseInt(s.notice_type,10)&&2!==parseInt(s.notice_type,10)&&!r.isSpike){var a=o.coupon_info||{},i=a.expire_time-o.server_time;if(!(i<0)){var n="";if(i>86400){var d=Math.ceil(i/86400);n="".concat(d,"天内有效，下单立减!")}else n=e(),this.intervalHandlerList.LIKE_GOODS_COUPON=setInterval(function(){i-=1;var o=e();t.$setData({"likeGoodsCouponInfo.desc":o})},1e3);var u={amount:G.StdFormat.price(a.coupon_amount,100),desc:n};this.$setData({isShowLikeGoodsCoupons:!0,likeGoodsCouponInfo:u}),this.clearTimeoutByKey("LIKE_GOODS_COUPONS"),this.timeOutHandlerList.LIKE_GOODS_COUPONS=setTimeout(function(){t.clearTimeoutByKey("LIKE_GOODS_COUPONS"),t.clearIntervalByKey("LIKE_GOODS_COUPON"),t.$setData({isShowLikeGoodsCoupons:!1}),t.getGoodsLisbon()},8e3);var c=this.getImprTrackingParams("like_coupon_popup");c.page_el_sn=88117,c.coupon_amount=a.coupon_amount,c.type=a.type,c.coupon_type=1===a.type?3:0,(0,G.TrackingRecord)(c)}}},dealBestPlatformCoupons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.data.goodsInfo||{},o=t.userNoticeDynamic||{};if(t.isOnSale&&this.data.isGoodsExisted&&1!==parseInt(o.notice_type,10)&&2!==parseInt(o.notice_type,10)&&this.configResultList.goods_detail_pay_coupon){this.$setData({bestPlatformCouponInfo:e});var r=this.getImprTrackingParams("show_coupon_popup");(0,G.TrackingRecord)(r)}},onTakeVoucherCenterCouponClicked:function(e){var t=this,o=(e.currentTarget.dataset||{}).batchId||null;o&&!this.isGettingCoupon&&(this.isGettingCoupon=!0,G.Request.apiRequest("POST","api/liverpool/coupon_center/take_merchant_coupon",{batch_id:o}).then(function(e){if(e&&1===e.result){t.$dispatch((0,N.showToast)("领取成功，请尽快使用哦")),t.isGettingCoupon=!1;var o=e.server_time,r=1e3*(parseInt(e.end_time,10)-o),s=G.TimeUtil.transferToTime(r);t.$setData({"voucherCenterCoupon.isCoupon":!0,"voucherCenterCoupon.leftTimeStr":s}),t.voucherCenterCouponDountDown(e,o),t.doClickTracking({page_section:"coupon_center_popup",page_element:"coupon_center_btn",page_el_sn:390928,coupon_amount:e.discount,coupon_id:e.coupon_id}),t.doImprTracking({page_section:"coupon_center_popup",page_el_sn:390899,coupon_amount:e.discount,coupon_id:e.coupon_id,status:1})}else t.isGettingCoupon=!1,t.showCouponError(e)}).catch(function(){e&&e.error_code&&t.showCouponError(e),t.isGettingCoupon=!1}))},showCouponError:function(e){var t=void 0;t=e&&44026===parseInt(e.error_code,10)?e.error_msg||F[e.error_code]:e&&e.error_code?F[e.error_code]||"该券太火爆，请稍后重试":"网络繁忙，请稍后重试",this.$dispatch((0,N.showToast)(t))},voucherCenterCouponDountDown:function(e,t){function o(){a.timeOutHandlerList.VOUCHER_CENTER_COUPON=setTimeout(function(){(r-=1e3)<=0?a.$setData({voucherCenterCoupon:""}):(s=G.TimeUtil.transferToTime(r),a.$setData({"voucherCenterCoupon.leftTimeStr":s}),o())},1e3)}var r=1e3*(parseInt(e.end_time,10)-t),s=G.TimeUtil.transferToTime(r),a=this;o()},dealVoucherCenterCoupon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],o=!!e.is_coupon,r=G.StdFormat.price(e.discount_param,100),s=1e3*(parseInt(e.end_time,10)-t),a=G.TimeUtil.transferToTime(s);if(o)this.$setData({voucherCenterCoupon:{isCoupon:o,amount:r,leftTimeStr:a}}),this.voucherCenterCouponDountDown(e,t);else{var i=parseInt(e.batch_id,10);this.$setData({voucherCenterCoupon:{isCoupon:o,amount:r,batchId:i}})}this.doImprTracking({page_section:"coupon_center_popup",page_el_sn:390899,coupon_amount:e.discount_param,coupon_id:e.coupon_id,status:o?1:0})},loadConfig:function(){var e=this;return t(g.default.mark(function t(){var o,r,s,a,i,n,d,u;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=["seckill_notremind","two_jump","eventtype0_share_img2","eventtype0_share_img1","promotion_tag_trigger","goods_detail_access2","join_past_group","join_single_group","floating_banned_catid","goods_detail_pay_coupon","goods_detail_video","goods_detail_pic_hide","goods_sharecard_video","goodsdetail_mall_othergoods","coupon_to_goods","common_goods_share_card","goods_detail_seller_qa"],r=0;case 2:if(!(r<o.length)){t.next=11;break}return s=o[r],t.next=6,b.default.getConfig(s);case 6:a=t.sent,e.configResultList[s]=a;case 8:++r,t.next=2;break;case 11:if(e.configResultList.goods_detail_pic_hide&&e.$urlQueryObj.from_order&&e.$setData({shouldDetailFold:!0}),!e.configResultList.promotion_tag_trigger){t.next=24;break}i=["promotion_tag"],n=0;case 15:if(!(n<i.length)){t.next=24;break}return d=i[n],t.next=19,h.default.getOMSConfig(d);case 19:u=t.sent,e.omsConfigResultList[d]=u;case 21:++n,t.next=15;break;case 24:case"end":return t.stop()}},t,e)}))()},setGalleryDetail:function(e){var t=k.default.formatDetailGallery(e);e.ui&&e.ui.brand_section&&(t.brandSection=e.ui.brand_section.detail),this.$setData({detailGallery:t})},catchtouchmove:function(){},onNavBack:function(){this.$back(),this.doClickTracking({page_section:"top_bar",page_element:"back"})},toGoodsReviewsEvent:function(e){var t=this,o=e.detail||{};p.default.clearCacheData();var r=this.data.goodsInfo||{},s=r.goodsId||"",i=this.data.localGroups||null,n={bottomBarData:B.default.formatGoodsBottomBar(this.renderGoodsData,r,this.$urlQueryObj,i,this.configResultList.seckill_notremind),barDataNeededFromPage:a.default.getBarDataNeededFromPage()};this.data.bestPlatformCouponInfo&&(n.barDataNeededFromPage.bestPlatformCouponInfo=this.data.bestPlatformCouponInfo);var d=this.renderGoodsData.ui,u=void 0===d?{}:d,c=!1;u.sku_section&&2===u.sku_section.view_style_v2&&(c=!0),this.cacheBottomId=p.default.setDataToCache(s,n);var l=o.currentTarget.dataset.id?o.currentTarget.dataset.id:-1;if(s){var h={goods_id:s,tap_id:l,page_from:this.pageFrom,group_order_id:this.$urlQueryObj.group_order_id,spike_type:this.$urlQueryObj.spike_type,cache_bottom_id:c?"":this.cacheBottomId,mall_id:r.mallId,cat_id_1:r.catId1,cat_id_2:r.catId2,cat_id_3:r.catId3,goods_type:r.goodsType,windowHeight:G.SystemInfo.getWindowHeightSync()};Object.keys(this.$urlQueryObj).forEach(function(e){e&&0===e.indexOf("_oc_")&&(h[e]=t.$urlQueryObj[e]),"duoduo_type"===e&&t.data.duodouDiscountPrice&&(h[e]=t.$urlQueryObj[e],h.duodouDiscountPrice=t.data.duodouDiscountPrice,h.duoduoDiscountAmount=t.data.duoduoDiscountAmount),"biz_tag"===e&&(h.biz_tag=t.$urlQueryObj[e])}),this.$forward("goods_comments",h)}},isRequireLocalGroups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=2===parseInt(this.duoduoType,10),r=e.groupTypes.length,s=2===parseInt(e.groupTypes[r-1].requireNum,10),a=e.isSpike||e.isSuperSpike;return!(o||!e.isOnSale||!s||a&&e.eventComing)&&(!t||!(!a&&!this.selectedLocalGroupOrderId))},refreshGroupOrder:function(e){var o=this;return t(g.default.mark(function t(){var r,s,a;return g.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=G.Request.requestDataWithCmd("10045",{params:{need_white:!0},restfulParam:e}),t.next=4,G.Request.runSecondaryRequestForPage(r,o);case 4:s=t.sent,a=s.group_order_info.group_status,o.$urlQueryObj.status=a,o.groupOrderId="",delete o.$urlQueryObj.group_order_id,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}},t,o,[[0,11]])}))()},localGroupSelectedEvent:function(e){var t=this,o=e.detail||{},r=o.isUser,s=o.isHistoryGroup,i=o.groupOrderId,d=o.isHistoryVisitor;p.default.clearCacheData(),this.cacheBottomId=p.default.setDataToCache(this.$urlQueryObj.goods_id,{bottomBarData:this.data.bottomBarData,barDataNeededFromPage:a.default.getBarDataNeededFromPage()});var u=this.data.goodsInfo||{};if(this.selectedGroup=u.groupTypes[1]||{},this.selectedLocalGroupOrderId=i,this.isHistoryGroup=s,this.isHistoryVisitor=d,this.hasSkuSelector)if(r){var c="/package_c/group/group?group_order_id=";c+=i,s&&(c+="&is_history_group=1"),n.default.forward(c)}else this.showSkuSelector(!0);else this.nologinInterceptor(function(){if(r){var e="/package_c/group/group?group_order_id=";e+=i,s&&(e+="&is_history_group=1"),n.default.forward(e)}else t.preConfirmOrder()},"join_btn")},leftTimeGroupEvent:function(e){this.$setData({hasMinLeftTimeLocalGroup:!!e.detail})},bottomNoticeEvent:function(){this.$setData({hasBottomNotice:!0})},onTopImageLoaded:function(e){var t=e.detail.index,o=this.data.topGallery;o.list[t].thumbLoaded=!0,this.$setData({topGallery:o})},setSkus:function(e,t){var o=this;this.data.skuData||(this.$setData({skuData:e}),1===parseInt(this.$urlQueryObj.show_sku_selector,10)&&(t&&t.groupTypes&&t.groupTypes[1]&&(this.selectedGroup=t.groupTypes[1]||{}),this.hasSkuSelector&&!this.$urlQueryObj.isShowSku&&this.data.skuData&&(this.$urlQueryObj.sku_id&&function(){for(var e=[],t=o.data.skuData.sku||[],r=0;r<t.length;r++)if(parseInt(t[r].sku_id,10)===parseInt(o.$urlQueryObj.sku_id,10)&&t[r].quantity>0){t[r].specs.forEach(function(t){e.push({key:t.spec_key,value:t.spec_value})});break}Object.keys(e).length>0&&o.$setData({currentSelect:e})}(),this.showSkuSelector(!0),this.$urlQueryObj.isShowSku=!0)))},toGoodsQaListEvent:function(e){var t=e.detail,o=(void 0===t?{}:t).link,r=void 0===o?"":o;r&&n.default.route(r,"forward")},handleCardSeleceGoods:function(){var e=this,t=this.renderGoodsData.ui,o=void 0===t?{}:t;return!(!o.sku_section||2!==o.sku_section.view_style_v2)&&((this.data.bottomBarData||{}).hasLiked||!1?this.$dispatch((0,N.showDialog)({content:"抱歉，该商品仅限App购买，可前往App下单",showCancel:!1,confirmText:"知道了",onModalConfirm:function(){e.$dispatch((0,N.hideDialog)(e))},page:this})):this.$dispatch((0,N.showDialog)({content:"抱歉，该商品仅限App购买，可收藏并前往App下单",showCancel:!1,confirmText:"收藏并关闭",onModalConfirm:function(){"function"==typeof e.goodsLike&&e.goodsLike(),e.$dispatch((0,N.hideDialog)(e))},page:this})),!0)}};(0,G.PddPage)(K,{pageName:"goods",pageSn:10014,notUseCommonPV:!0,needObserveRender:!0,useNewImpr:!0}); 
 			}); 	require("package_c/goods/goods.js");
 		__wxRoute = 'package_c/group/group';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/group/group.js';	define("package_c/group/group.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}t(require("../../libs/regenerator-runtime/runtime"));var r=e(require("./group.actions")),a=e(require("../../actions/common")),i=t(require("../../storage/ram_manager")),o=require("../../common/index"),s=require("../../common/message"),n=t(require("../../constants/groups")),c=t(require("../../constants/goods")),u=t(require("../../storage/user_storage")),l=t(require("../../components/popup_modal/popup_modal")),g=t(require("../../wx_components/sku_selector/sku_decorator")),p=t(require("../../components/impr_list_manager/impr_list_manager")),d=t(require("../../actions/common_complex")),h=e(require("../../actions/bubble")),m={requestGoodsList:!1,segmentScrollVal:0,data:{segment:[{config:"segmentConfig"},{renderObj:"segmentRenderObj"}],toast:["toastMessage","display"],appState:["isIpx","loadingVisible","loadingStyle"],goTop:[{display:"displayGoTop"}],bubble:["bubble",{top:"bubbleTop"},"isClosed","isSimple"],modalDialog:[{display:"displayDialog"},{title:"dialogTitle"},"showCancel","cancelText","confirmText","contentAlign"],quickEntryForwardIndex:[{display:"displayQuickEntry"}],resourcePlaceConfig:["resourcePlaceConfig"],group:["@all"]},$injectReducer:function(){return{namespace:"group",reducer:require("./group.reducer").default}},onLoad:function(e){var t=this;this.pvTracking(),this.imprListManager=new p.default,this.segmentScrollLister=s.Message.on("SEGMENT_VAL_CHANGE",function(){t.getSegmentScroll()}),(0,g.default)(this),o.User.requireLogin(function(){t.loadPageData(e)},function(){t.loadPageata(e)}),this.reqUserAB()},reqUserAB:function(){i.default.groupABMap||o.Request.apiRequest("POST","api/flow/ab/scene",{busi_name:"xcx_grouplottery",scene_ids:["xcx_grouplottery_0","xcx_grouplottery_1"]}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.default.groupABMap=e.ab_map}).catch(function(){i.default.groupABMap={xcx_grouplottery_0:0,xcx_grouplottery_1:1}})},onShow:function(){var e=this;if(!this.$getValue("group.isFirstEnter")&&o.User.hasLogin()){var t=this.$getValue("group.groupOrderId");this.$dispatch(r.loadGroupPage(t,!1,!0)).then(function(){e.loadAfter()})}i.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||this.pvTracking(!0);var a=getCurrentPages(),s=a[a.length-1].__route__;s+="?"+o.UrlUtil.buildQuery(this.$urlQueryObj),this.$dispatch(h.initBubble(!0,s))},loadAfter:function(){var e=this.$getValue("group.groupOrderId"),t=parseInt(this.$getValue("group.groupStatus"),10);1!==t&&2!==t||(this.openNewGroup=!0),this.getSegmentScroll(),this.$dispatch(r.getScaleShareImage(e))},getSegmentScroll:function(){var e=this;wx.canIUse&&wx.canIUse("createSelectorQuery")&&(this.segmentScrolltimer=setTimeout(function(){var t=wx.createSelectorQuery();t.select(".group-detail-nav-head").boundingClientRect(),t.selectViewport().scrollOffset(),t.exec(function(t){t&&t[0]&&t[1]&&t[0].top+t[1].scrollTop>e.segmentScrollVal&&(e.segmentScrollVal=t[0].top+t[1].scrollTop)}),e.clearSegmentScrolltimer()},100))},clearSegmentScrolltimer:function(){this.segmentScrolltimer&&(clearTimeout(this.segmentScrolltimer),this.segmentScrolltimer=null)},reLoad:function(){var e=this,t=this.$getValue("group.groupOrderId");t&&(this.initPageData(),this.requestGoodsList=!0,this.$dispatch(r.loadGroupPage(t,!0)).then(function(){e.requestGoodsList=!1;var i=e.$getValue("group.tabStatus");e.$dispatch({type:"INIT_SEGMENT",config:{alignType:"ALIGN-GAP",gap:29,scrollLeftGap:116,pageName:"group",fixed:!1},tabs:i.map(function(e){return{title:e.opt_name}})}),e.$dispatch(a.hideLoading()),e.getSegmentScroll(),e.$dispatch(r.getScaleShareImage(t))}))},initPageData:function(){wx.pageScrollTo({scrollTop:0,duration:0}),this.$dispatch(r.setGroupRecieveData({groupGoodsList:[],curTabIndex:0}))},onHide:function(){i.default.isLastPagePayPage=!1,i.default.hasPaySucess=!1,i.default.isLastPageGroupPage=!0,this.$dispatch(h.closeBubble),this.clearTimer()},onUnload:function(){i.default.isLastPagePayPage=!1,i.default.hasPaySucess=!1,i.default.showNotEnoughGroupDialog=!0,i.default.isLastPageGroupPage=!0,this.clearTimer()},onReady:function(){},onPageScroll:function(e){var t=this;this.scrollTimer&&(clearTimeout(this.scrollTimer),this.scrollTimer=null),o.ImprUtil.getImprItem(this,""+this.$getValue("group.curTabIndex"),e),o.Util.judgeForPageScroll(this),this.scrollTimer=setTimeout(function(){t.$dispatch({type:"SCROLL_GROUP_PAGE",evt:e,bigSaleTopShow:!0})},500)},onReachBottom:function(){var e=this;this.requestGoodsList||this.$getValue("group.isLoadFirstRequest")||(this.requestGoodsList=!0,this.$dispatch(r.loadGroupGoodsList()).then(function(){e.requestGoodsList=!1}))},loadPageData:function(e){var t=this,o=e&&(e.group_order_id||e.g)||"";o&&(i.default.lastGroupOrderId=o),e&&e.goods_id&&(i.default.lastOrderGoodsId=e.goods_id);var s=!1;e.from_custom_service_mall_id&&(s=!0),this.$dispatch({type:"INIT_GROUP_DATA",opts:e}),this.popupModel=new l.default({page:this,ns:"popupModel",key:"popup_group_detail",maxPopupModalCount:2,targetPage:e.target_page}),this.$dispatch((0,d.default)([{resourcePlaceKey:"floating_group_detail"},{resourcePlaceKey:"anomalous_group"}])),this.$dispatch(r.loadGroupPage(o)).then(function(r){if(r){t.$dispatch(a.hideLoading());var i=t.$getValue("group.showPaySuccessStyle"),o=t.$getValue("group.showSuccessView"),n=t.$getValue("group.tabStatus");i&&r.is_super_group&&r.super_group_redirection_url?t.gotoSuperGroup(r.super_group_redirection_url):(!o&&n.length>1&&t.$dispatch({type:"INIT_SEGMENT",config:{alignType:"ALIGN-GAP",gap:29,scrollLeftGap:116,pageName:"group",fixed:!1},tabs:n.map(function(e){return{title:e.opt_name}})}),t.$dispatch({type:"RECIEVE_GROUP_DATA",data:{displayLoadMore:!0,isFirstEnter:!1}}),t.loadAfter(),s&&(t.forwardTimer=setTimeout(function(){t.$forward("custom_service",{mall_id:e.from_custom_service_mall_id})},2e3)),t.imprTrackingMain(),r&&r.goods_info&&t.$dispatch({type:"INIT_SKU_DATA",data:r}))}}).catch(function(){t.$dispatch(a.hideLoading())})},groupSkuTrackingEvent:function(e){var t=e.detail||{},r=this.$getValue("group.commonParams"),a=o.ObjectUtil.assign({},t,r);(0,o.TrackingRecord)(a,this)},clearTimer:function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null),this.forwardTimer&&(clearTimeout(this.forwardTimer),this.forwardTimer=null),this.reqTimer&&(clearTimeout(this.reqTimer),this.reqTimer=null),this.hideToastTimer&&(clearTimeout(this.hideToastTimer),this.hideToastTimer=null),this.serviceDetailTimer&&(clearTimeout(this.serviceDetailTimer),this.serviceDetailTimer=null),this.userListTimer&&(clearTimeout(this.userListTimer),this.userListTimer=null),this.updateDataTimer&&(clearTimeout(this.updateDataTimer),this.updateDataTimer=null),this.scrollTimer&&(clearTimeout(this.scrollTimer),this.scrollTimer=null),this.clearSegmentScrolltimer()},onShareAppMessage:function(e){var t=this.$getValue("group.userId"),r=this.$getValue("group.groupOrderId"),a=this.$getValue("group.commonParams"),o=this.$getValue("group.shareInfo");t||(t=u.default.getUserId());var s={group_order_id:r,wt_id:this.$urlQueryObj.wt_id,uid:t,_wv:1,goods_id:a.goods_id,event_type:a.event_type},n={activity_type:a.activity_type,group_status:a.group_status,group_role:a.group_role,sold_out:a.sold_out},c="";if(e)if("menu"===e.from)c="top_forward";else{var l=e.target.dataset.subRefer;"group-share-btn"===l?c="group_detail_share":"screen-shot"===l&&(c="screen_shot_share")}"scan_code"===this.$urlQueryObj.share_form&&(s.share_form=this.$urlQueryObj.share_form,c="share_btn");var g=this.setShareTitle();o.useShareImage&&(s.share_form=o.useShareImage);var p={title:(g||{}).shareTitle||o.shareTitle,imageUrl:o.shareImageUrl,queries:s,referStr:c,trackingParams:n,shareIndex:(g||{}).shareIndex,successCallback:function(){i.default.hadGroupShareArray.push(i.default.lastGroupOrderId)}};return this.$getValue("group.hasRedirectUrl")&&(p.path="/pages/index/index",p.target_page="/package_c/group/group"),this.$generateShareContent(p)},setShareTitle:function(){var e={},t=this.$getValue("group.omsShare"),r=this.$getValue("group.goodsInfo"),a=this.$getValue("group.skuData"),i=this.$getValue("group.leftUserNum");if(!r||!r.minGroupPrice||!r.goodsName)return e.shareTitle="【拼多多】快来一起超低价拼！",e.shareIndex="",e;var s=-1,c=-1,u="",l="",g=a&&1===(a.sku||{}).length,p="25"===r.activityType;if((a.sku||[]).forEach(function(e){(-1===s||parseFloat(e.group_price)<s)&&(s=parseFloat(e.group_price)||0),(-1===c||e.group_price_original<c)&&(c=e.group_price_original||0,u=o.StdFormat.price(e.group_price_original,100))}),s>0&&(s=o.StdFormat.price(s,100)),t.commongroup_share&&t.commongroup_share.length>0){var d=t.commongroup_share,h=Math.floor(Math.random()*d.length);l=(d[h]||"").replace("{goodsName}",r.goodsName),e.shareIndex="commongroup_share_"+h}else e.shareIndex="";var m="";if([n.default.EventType.FREE_GROUP,n.default.EventType.SPIKE].indexOf(r.eventType)>-1&&i>0)if(l.length>0){var _=s+"元"+(g?"":"起");m="【仅剩"+i+"名】"+(l=l.replace("{price}",_))}else m="【仅剩"+i+"名】快来"+s+"元"+(g?"":"起")+"拼"+r.goodsName;else if(r)if(l.length>0){var f=(p?u:s)+"元"+(g?"":"起");m=l=l.replace("{price}",f)}else m="快来"+(p?u:s)+"元"+(g?"":"起")+"拼"+r.goodsName;return m&&m.length>0&&(e.shareTitle=m),e},pvTracking:function(e){var t={op:"pv",page_name:"group_detail",page_sn:"10024",group_order_id:this.$urlQueryObj.group_order_id||this.$urlQueryObj.g,goods_id:this.$urlQueryObj.goods_id,event_type:this.$urlQueryObj.event_type};e&&(t.is_back=1),(0,o.TrackingRecord)(t),o.User.hasLogin()||(0,o.TrackingRecord)({page_name:"group_detail",page_sn:10024,op:"impr",page_section:"login_area"}),this.$firstTimeTrackRecord.pv=!0},catchTapPage:function(){this.$dispatch(r.setGroupRecieveData({showOvershadow:!1}))},didShareHintButton:function(){var e=this.getTrackingParams("click","main","invite_btn"),t=this.$getValue("group.shareBtnIdx");e.idx=t,this.$dispatch(r.setGroupRecieveData({shareBtnIdx:t+1})),(0,o.TrackingRecord)(e)},closeNewUserAlert:function(){this.$dispatch(r.setGroupRecieveData({newUserAlertVisible:!1}))},clickGroupBtn:function(){this.sourceChannel=c.default.SourceChannel.GROUP_DETAIL_BUY;var e=this.$getValue("group.groupStatus");if(parseInt(e,10)===n.default.GroupStatus.OnGoing){this.justProcessJoinGroup(this.$getValue("group.groupOrderId"));var t=this.getTrackingParams("click","main","join_btn");(0,o.TrackingRecord)(t)}else this.createGroup()},createGroup:function(){var e=this,t=this.$getValue("group.goodsInfo");if(!t.isOnSale||Number(t.quantity)<=0)return this.$dispatch(a.showToast("商品已售罄")),void(this.reqTimer=setTimeout(function(){e.goLotteryPage()},2e3));this.openNewGroup=!0,1!==this.$getValue("group.hasSkuSelector")||this.$urlQueryObj.sku_id?(this.sourceChannel=c.default.SourceChannel.GROUP_DETAIL_BUY,this.preConfirmOrder()):this.showSkuSelector(!0);var r=this.getTrackingParams("click","main","open_btn");(0,o.TrackingRecord)(r)},joinLocalGroup:function(e){if(e&&e.detail&&e.detail.target&&e.detail.target.dataset&&e.detail.target.dataset.groupOrderId){var t=e.detail.target.dataset.groupOrderId||"";t&&this.justProcessJoinGroup(t);var r={click_group_order_id:t},a=this.getTrackingParams("click","local_group","join_btn",r);(0,o.TrackingRecord)(a)}},justProcessJoinGroup:function(e){var t=this.$getValue("group.goodsInfo"),o=this.$getValue("group.isNewUser");if(t.eventType===n.default.EventType.NEW_USER_GROUP&&!o)return this.$dispatch(r.setGroupRecieveData({newUserAlertVisible:!0})),void(i.default.newUserAlertVisible=!0);t.isApp?this.$dispatch(a.showToast("该商品是APP专享拼单商品，请在APP中购买和拼单。")):t.isOnSale?1!==this.$getValue("group.hasSkuSelector")||this.$urlQueryObj.sku_id?(this.sourceChannel=c.default.SourceChannel.GROUP_DETAIL_BUY,this.preConfirmOrder()):(this.selectedLocalGroupOrderId=e,this.openNewGroup=!1,this.showSkuSelector(!0)):this.$dispatch(a.showToast("商品已售罄"))},goBackActivity:function(e){var t=e.detail.dataset,r={op:"click",page_section:"main"};switch(parseInt(t.bizTag,10)){case 1:case 5:case 10:case 19:case 1001:r.page_element="dd_mining",this.redirectActivity("mining");break;case 0:case 4:r.page_element="commodity_bargain",this.redirectActivity("commodity_bargain_home");break;case 2:case 3:case 12:case 13:r.page_element="duoduo_trip",this.redirectActivity("duoduo_trip");break;case 25:r.page_element="friend_sign_in",this.redirectActivity("friend_sign_in");break;case 52:case 58:case 101:r.page_element="market_index",this.redirectActivity("market_index")}this.commonGroupTracking(r)},redirectActivity:function(e){for(var t=getCurrentPages(),r=!1,a=0,i=t.length-1;i>=0;i--){var o=t[i];if(o.$pageName&&o.$pageName===e){r=!0;break}a++}r&&a>0?wx.navigateBack({delta:a}):"market_index"===e?this.$forward("market_index",{from:"group"}):this.$forward(e)},didSuccessJump:function(e){var t=e.detail.dataset,r=void 0===t?{}:t;if(r&&r.route){o.Navigation.route(r.route);var a=r.activity;this.commonGroupTracking({op:"click",page_section:"main",page_element:""+a})}},goChargeCenter:function(){this.$forward("charge_center"),this.commonGroupTracking({op:"click",page_section:"main",page_element:"charge_center"})},clickTimeLine:function(e){var t=this,i=e&&e.detail&&e.detail.dataset.status;if(i){this.$dispatch(a.showLoading());var s=i;this.$dispatch(r.didClickTimelime(s)).then(function(e){if(t.$dispatch(a.hideLoading()),e&&e.is_success){var r="";1===parseInt(s,10)&&(r="99169");var i=t.getTrackingParams("click",null,null,{page_el_sn:r});(0,o.TrackingRecord)(i)}}).catch(function(){t.$dispatch(a.hideLoading())})}},notOnsaleClick:function(){if(wx.canIUse&&wx.canIUse("createSelectorQuery")){var e=wx.createSelectorQuery();e.select(".group-detail-nav-head").boundingClientRect(),e.selectViewport().scrollOffset(),e.exec(function(e){e&&e[0]&&e[1]&&wx.pageScrollTo({scrollTop:e[0].top+e[1].scrollTop,duration:0})})}},goHomePage:function(){this.$switchTab("index"),(0,o.TrackingRecord)({op:"impr",event:"group_success_btn_clk",page_name:"group_detail",page_sn:"10024",page_element:"return_index"})},goOrderDetail:function(){var e=this.$getValue("group.userInfo").currentOrderSn,t=void 0===e?"":e;t&&(this.$forward("order",{ordersn:t}),this.commonGroupTracking({op:"click",page_section:"main",page_element:"view_orders",page_el_sn:"98993"}))},goLotteryPage:function(){this.$forward("subject",{subject_id:"2742"});var e=this.getTrackingParams("click","main","going_draw");(0,o.TrackingRecord)(e)},viewGoodsDetail:function(){var e=this.$getValue("group.goodsInfo");if(e.isOnSale&&!(e.quantity<=0)){var t=e.eventType===n.default.EventType.NEW_USER_GROUP,r=this.$getValue("group.isNewUser"),a=this.$getValue("group.groupStatus"),i=this.$getValue("group.groupRole"),s=this.$getValue("group.groupOrderId"),u=void 0;if(parseInt(a,10)!==n.default.GroupStatus.OnGoing||t&&!r)u=t&&!r?{goods_id:e.goodsId}:{goods_id:e.goodsId,status:a,group_role:i};else{var l=this.$urlQueryObj||{},g={goods_id:e.goodsId,status:a,group_role:i,group_order_id:s};u=l=o.ObjectUtil.assign(l,g)}parseInt(a,10)===n.default.GroupStatus.OnGoing&&(u.source_channel=c.default.SourceChannel.GROUP_DETAIL_TO_GOODS_DETAIL,e.eventType===n.default.EventType.LUCKY_DRAW&&(u.status="3")),this.$forward("goods",u);var p=this.getTrackingParams("click","main","goods");(0,o.TrackingRecord)(p)}},getTrackingParams:function(e,t,r,a){var i={op:e};t&&(i.page_section=t),r&&(i.page_element=r),a&&(i=o.ObjectUtil.assign(i,a));var s=this.$getValue("group.commonParams");return i=o.ObjectUtil.assign(i,s)},imprTrackingMain:function(){if(!i.default.isFromAppOnShow||!this.$firstTimeTrackRecord.impr){var e=this.$getValue("group.localGroups"),t=this.getTrackingParams("impr","main",null,{has_local_group:e&&e.length>0?1:0});(0,o.TrackingRecord)(t),this.$firstTimeTrackRecord.impr=!0}},imprTracking:function(e){var t=e.detail||e,r=t.tabKey,a=t.index,i=parseInt(r,10),s=this.$getValue("group.groupGoodsList")[a]||{},n=void 0;n=0===i?"rec":"main";var c=this.getNavGoodsListTrackingParam("impr",s.goodsId,s.transData,a,n,s.eventType);this.imprListManager.checkItem([r,a],!0)||(0,o.TrackingRecord)(c,this)},groupDetailNavClickRecord:function(e){var t=e.detail.target.dataset;if(t){""+t.route=="index"&&this.$switchTab("index");var r=this.getTrackingParams("click","icon_list","index");(0,o.TrackingRecord)(r)}this.$uploadFormId(e)},didClickLoginBtn:function(){var e=this.$getValue("group.commonParams"),t=o.ObjectUtil.assign({},e,{op:"click",page_section:"login_area",page_element:"login_btn"}),r=o.ObjectUtil.assign({},e,{op:"impr",page_section:"auth_prompt",refer_page_element:"login_btn",page_el_sn:99615});(0,o.TrackingRecord)(t),(0,o.TrackingRecord)(r)},signInHandler:function(e){var t=this,i=this.$getValue("group.commonParams");if(e&&e.detail&&e.detail.userInfo){var s=o.ObjectUtil.assign({},i,{op:"click",page_section:"auth_prompt",page_element:"approve",page_el_sn:99899});(0,o.TrackingRecord)(s),o.User.signIn(e.detail,function(e){e&&o.User.hasLogin()?(t.$dispatch(r.setGroupRecieveData({hasLogin:!0})),t.reLoad()):t.$dispatch(a.showToast("登录失败，请稍后重试"))})}else{var n=o.ObjectUtil.assign({},i,{op:"click",page_section:"auth_prompt",page_element:"refuse",page_el_sn:99898});(0,o.TrackingRecord)(n)}},nologinInterceptor:function(e,t){if(o.User.hasLogin())"function"==typeof e&&e();else{this.loginSuccessCb=e;var r={onLoginSuccessFnName:"loginSuccessCb"};t&&(r=o.ObjectUtil.assign(r,{refer_page_element:t})),this.$forward("auth",r)}},preventTouchMove:function(){},didClickSegmentTab:function(e){var t=this;this.getSegmentScroll();var a=this.$getValue("group.curTabIndex"),i=e&&e.detail.index;if(!isNaN(i)&&parseInt(a,10)!==parseInt(i,10)){var s=this.$getValue("group.tabStatus"),n=this.$getValue("group.commonParams");this.$dispatch(r.setGroupRecieveData({displayLoadMore:!1,groupGoodsList:[]})),setTimeout(function(){t.changeCurTabIndex(i)},0),(0,o.TrackingRecord)(o.ObjectUtil.assign({op:"click",event:"opt_entry_clk",page_section:"opt_list",page_element:"opt",element_id:s[i].opt_id,idx:i},n),this)}},changeCurTabIndex:function(e){var t=this;o.ImprUtil.changeTab(this,""+e),this.segmentScrollVal>0&&wx.pageScrollTo({scrollTop:this.segmentScrollVal,duration:0}),this.dealChangeTable(e,function(){t.$dispatch(r.setGroupRecieveData({curTabIndex:e,displayLoadMore:!0}))})},dealChangeTable:function(e,t){var i=this,o=this.$getValue("group.cacheTabList");o[e]&&0!==parseInt(o[e].length,10)||this.$dispatch(a.showLoading()),this.$dispatch({type:"DID_CLICK_SEGMENT_TAB",index:e}),this.$dispatch(r.loadGroupGoodsList(e,!0)).then(function(){i.$dispatch(a.hideLoading()),t&&t()}).catch(function(e){console.error(e),t&&t()})},gotoGoodsDetail:function(e){0===parseInt(this.$getValue("group.curTabIndex"),10)?this.forwardGoodDetail(e,"rec"):this.forwardGoodDetail(e,"main"),this.$uploadFormId(e)},forwardGoodDetail:function(e,t){var r=e.detail,a=r.goodsId,i=r.goodsItem,s=r.eventType,n=r.index;if(null!=a){var c=this.$getValue("group.groupGoodsList")[n]||{};this.transGoodsData=c,this.transGoodsData.preloadImgUrl=c.imgUrl,this.$forward("goods",{goods_id:a})}var u=this.getNavGoodsListTrackingParam("click",a,i,n,t,s);(0,o.TrackingRecord)(u)},getNavGoodsListTrackingParam:function(e,t,r,a,i,s){var n=this.$getValue("group.curTabIndex"),c={op:e,page_element:"goods",idx:a};if(c.new_user=this.$getValue("group.isNewBuyer"),"rec"===i)c.rec_goods_id=t,c.rec_event_type=s,c.page_section="rec_list",c.page_el_sn="99084",c.list_id=this.$getValue("group.listId");else if("main"===i&&(c.goods_id=t,c.page_section="opt_goods_list",c.rec_event_type=s,n>0)){var u=this.$getValue("group.tabStatus")[n]||{};c.opt_id=u.opt_id||"",c.page_el_sn="98841"}var l=this.$getValue("group.commonParams");return c=o.ObjectUtil.assign(c,this.$generateGoodsInfoTracking(r)),c=o.ObjectUtil.assign(c,l)},groupFullTrack:function(e){if(e&&e.detail&&e.detail.params){var t=this.$getValue("group.commonParams");(0,o.TrackingRecord)(o.ObjectUtil.assign({},e.detail.params,t),this)}},groupFullRoute:function(e){if(e&&e.detail&&e.detail.route&&o.Navigation.route(e.detail.route),e&&e.detail&&e.detail.params){var t=this.$getValue("group.commonParams");(0,o.TrackingRecord)(o.ObjectUtil.assign({},e.detail.params,t),this)}},handleResourceVisible:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setData({isShowResourceBanner:t.detail&&t.detail.status}),wx.nextTick&&wx.nextTick(function(){e.getSegmentScroll()})},gotoSuperGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="https://mobile.yangkeduo.com/"+e;o.Navigation.redirectForward("/pages/web/web?specialUrl=1&src="+encodeURIComponent(t))}},imprMonthCard:function(){var e=this.$getValue("group.monthCard");if(e&&e.url){var t=this.$getValue("group.commonParams"),r={op:"impr",page_section:"main",page_element:"month_card",page_name:"group_detail",page_sn:"10024",page_el_sn:637987,refer_xcx_campaign_id:"monthly_card"};(0,o.TrackingRecord)(o.ObjectUtil.assign(r,t),this)}},clickMonthCard:function(){var e=this.$getValue("group.monthCard");if(e&&e.url){o.Util.toWeb({specialUrl:!0,src:"https://mobile.yangkeduo.com"+e.url},this);var t=this.$getValue("group.commonParams"),r={op:"click",page_section:"main",page_element:"month_card",page_name:"group_detail",page_sn:"10024",page_el_sn:637987,refer_xcx_campaign_id:"monthly_card"};(0,o.TrackingRecord)(o.ObjectUtil.assign(r,t),this)}},zoneTracking:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$getValue("group.commonParams");(0,o.TrackingRecord)(o.ObjectUtil.assign({page_name:"group_detail",page_sn:"10024"},e,r),this),t&&(0,o.TrackingRecord)(o.ObjectUtil.assign({page_name:"group_detail",page_sn:"10024"},t,r),this)},commonGroupTracking:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.$getValue("group.commonParams");(0,o.TrackingRecord)(o.ObjectUtil.assign(e,t),this)}};(0,o.PddPage)(m,{pageName:"group",pageSn:10024,notUseCommonPV:!0,useNewImpr:!0,needObserveRender:!0}); 
 			}); 	require("package_c/group/group.js");
 		__wxRoute = 'package_c/team_list/team_list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/team_list/team_list.js';	define("package_c/team_list/team_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}t(require("../../libs/regenerator-runtime/runtime"));var i=e(require("./team_list.actions")),a=e(require("../../actions/common")),o=t(require("../../storage/ram_manager")),r=require("../../common/index"),s=t(require("../../components/impr_list_manager/impr_list_manager")),n=require("../../common/message"),c={scrollTop:0,requestGoodsList:!1,isFirstEnter:!0,data:{segment:[{config:"segmentConfig"},{renderObj:"segmentRenderObj"}],toast:["toastMessage","display"],appState:["isIpx","loadingVisible","loadingStyle"],goTop:[{display:"displayGoTop"}],quickEntryForwardIndex:[{display:"displayQuickEntry"}],modalDialog:[{display:"displayDialog"},"content","title","showCancel","confirmText","cancelText","contentAlign"],teamList:["showError","displayLoadMore","showMainPage","groupOrderList","status","leftTime","orderDesc","canRemoveFav","canShowRec","tabStatus","groupGoodsList","cacheTabList","curTabIndex","groupNoticePopupVisible","groupNoticeContentShow"]},$injectReducer:function(){return{namespace:"teamList",reducer:require("./team_list.reducer").default}},onLoad:function(e){var t=this;this.pvTracking(),this.imprListManager=new s.default,this.options=e,r.User.requireLogin(function(){t.loadPageData(e)},function(){t.isHasAuth=!0,t.$forward("auth",{onLoginSuccessFnName:"reLoad"})})},onShow:function(){var e=this;!r.User.hasLogin()&&this.isHasAuth&&(this.isHasAuth=!1,this.$dispatch(a.showDialog({title:"提示",content:"访问该页面需要使用微信登录",showCancel:!0,cancelText:"再看看",confirmText:"去登录",onModalConfirm:function(){e.$forward("auth",{onLoginSuccessFnName:"reLoad"}),e.isHasAuth=!0,e.$dispatch(a.hideDialog(e))},onModalCancel:function(){e.$switchTab("index"),e.$dispatch(a.hideDialog(e))},page:this})));var t=this.$getValue("teamList.parentOrderSn");!this.isFirstEnter&&t&&this.$dispatch(i.refreshLoadGroupPage(t)),o.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||this.pvTracking(!0)},reLoad:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.initPageData(),this.loadPageData(this.options)},initPageData:function(){this.scrollTop=0,wx.pageScrollTo({scrollTop:0,duration:0}),this.$dispatch(i.setGroupData({groupGoodsList:[],curTabIndex:0,showError:!1}))},onHide:function(){},onUnload:function(){},onReady:function(){},onPageScroll:function(e){var t=this;this.scrollTimer&&(clearTimeout(this.scrollTimer),this.scrollTimer=null),this.scrollTop=parseInt(e&&e.scrollTop||0,10),r.ImprUtil.getImprItem(this,""+this.$getValue("teamList.curTabIndex"),e),this.scrollTimer=setTimeout(function(){t.$dispatch({type:"SCROLL_GROUP_PAGE",evt:e})},500)},onReachBottom:function(){var e=this;if(!this.requestGoodsList){this.requestGoodsList=!0;var t=this.$getValue("teamList.curTabIndex");this.$dispatch(i.loadGroupGoodsList(t)).then(function(){e.requestGoodsList=!1})}},loadPageData:function(e){var t=this,o=e&&e.parent_order_sn||"";o?(this.$commonTrackingParams.order_sn=e.parent_order_sn,this.$dispatch(a.showLoading()),this.$dispatch(i.loadGroupPage(o)).then(function(e){if(e){var r=t.$getValue("teamList.tabStatus");if(r&&r.length>1&&t.$dispatch({type:"INIT_SEGMENT",config:{alignType:"ALIGN-GAP",gap:29,scrollLeftGap:116,pageName:"group",fixed:!1},tabs:r.map(function(e){return{title:e.opt_name}})}),t.$dispatch({type:"RECIEVE_GROUP_DATA",data:{parentOrderSn:o,displayLoadMore:!0}}),t.isFirstEnter=!1,t.$dispatch(a.hideLoading()),wx.canIUse&&wx.canIUse("createSelectorQuery")){var s=wx.createSelectorQuery();s.select("#group-detail-navbar").boundingClientRect(),s.selectViewport().scrollOffset(),s.exec(function(e){e&&e[0]&&t.$dispatch(i.setGroupData({segmentScrollVal:e[0].top}))})}t.mainImprTraking(e)}}).catch(function(e){console.error(e),t.showError(),t.$dispatch(a.hideLoading())})):this.showError()},mainImprTraking:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&t.group_order_info_dto_list&&t.group_order_info_dto_list.length>0&&t.group_order_info_dto_list.forEach(function(t){if(1===t.group_status||2===t.group_status){var i={page_section:"main",group_order_id:t.group_order_id||""};1===t.group_status?(i.page_element="group_btn",i.page_el_sn=386809):2===t.group_status&&(i.page_element="again_btn",i.page_el_sn=386810),e.commonTracking("impr",i)}})},showError:function(){this.$dispatch(i.setGroupData({showError:!0}))},didClickSegmentTab:function(e){var t=this,o=this.$getValue("teamList.curTabIndex"),s=parseInt(e.detail.index,10);if(!isNaN(s)&&o!==s){this.$dispatch({type:"RECIEVE_GROUP_DATA",data:{displayLoadMore:!1,groupGoodsList:[]}});var n=this.$getValue("teamList.segmentScrollVal");n>0&&wx.pageScrollTo({scrollTop:n,duration:0}),r.ImprUtil.changeTab(this,""+s);var c=this.$getValue("teamList.cacheTabList");c[s]&&0!==c[s].length||this.$dispatch(a.showLoading()),this.$dispatch({type:"DID_CLICK_SEGMENT_TAB",index:s}),this.$dispatch(i.loadGroupGoodsList(s,!0)).then(function(){t.$dispatch(i.setGroupData({curTabIndex:s,displayLoadMore:!0})),t.$dispatch(a.hideLoading())})}},gotoGoodsDetail:function(e){var t=this.$getValue("teamList.curTabIndex");0===parseInt(t,10)?this.forwardGoodDetail(e,"rec"):this.forwardGoodDetail(e,"main")},forwardGoodDetail:function(e,t){var i=e.detail,a=i.index,o=i.goodsId,s=i.goodsItem,n=i.eventType;null!=o&&(this.transGoodsData={preloadImgUrl:s.preloadImgUrl},this.$forward("goods",{goods_id:o}));var c=this.getNavGoodsListTrackingParam("click",o,s,a,t,n);(0,r.TrackingRecord)(c)},getNavGoodsListTrackingParam:function(e,t,i,a,o,s){var n=this.$getValue("teamList.curTabIndex"),c={op:e,page_element:"goods",idx:a};if("rec"===o)c.rec_goods_id=t,c.rec_event_type=s,c.page_section="rec_list",c.list_id=(this.$getValue("teamList.recParams")||{}).list_id;else if("main"===o&&(c.goods_id=t,c.page_section="opt_goods_list",c.rec_event_type=s,n>0)){var d=this.$getValue("teamList.tabStatus")[n]||{};c.opt_id=d.opt_id||""}return r.ObjectUtil.assign(c,this.$generateGoodsInfoTracking(i))},clickGroupNotice:function(){this.$dispatch(i.setGroupData({groupNoticePopupVisible:!0,groupNoticeContentShow:!0}))},hideGroupNoticePopup:function(){var e=this;this.$dispatch(i.setGroupData({groupNoticeContentShow:!1})),this.groupNoticeTimer=setTimeout(function(){e.$dispatch(i.setGroupData({groupNoticePopupVisible:!1}))},300)},goHomePage:function(e){this.$switchTab("index"),this.$uploadFormId(e)},clickItem:function(e){var t=(e.detail&&e.detail&&e.detail.currentTarget&&e.detail.currentTarget.dataset).item;this.$forward("group",{group_order_id:t.groupOrderId});var i={page_section:"main",group_order_id:t.groupOrderId||""};0===t.groupStatus?(i.page_element="share_team_btn",i.page_el_sn=386808):1===t.groupStatus?(i.page_element="group_btn",i.page_el_sn=386809):2===t.groupStatus&&(i.page_element="again_btn",i.page_el_sn=386810),this.commonTracking("click",i)},gotoOrderList:function(){var e=0;"going"===this.$getValue("teamList.status")&&(e=5),this.$forward("orders",{type:e}),this.commonTracking("click",{page_section:"main",page_element:"order_btn",page_el_sn:386814})},gotoLikes:function(){for(var e=getCurrentPages(),t=!1,i=0,a=e.length-1;a>=0;a--){var o=e[a];if(o.$pageName&&"likes"===o.$pageName){t=!0;break}i++}t&&i>0?wx.navigateBack({delta:i}):this.$forward("likes"),this.commonTracking("click",{page_section:"main",page_element:"back_like_btn"})},removeFav:function(){var e=this,t=this.$getValue("teamList.groupOrderList"),i="";t&&t.length>0&&(i=t.length+"件"),this.$dispatch(a.showDialog({title:"是否取消收藏以上"+i+"商品",showCancel:!0,confirmText:"确定",cancelText:"暂不",contentAlign:"center",onModalConfirm:function(){e.requestCancelLikes(),e.$dispatch(a.hideDialog(e)),e.commonTracking("click",{page_section:"cancel_like_popup",page_element:"confirm_btn"})},onModalCancel:function(){e.$dispatch(a.hideDialog(e)),e.commonTracking("click",{page_section:"cancel_like_popup",page_element:"cancel_btn"})},page:this})),this.commonTracking("click",{page_section:"main",page_element:"cancel_btn",page_el_sn:386811}),this.commonTracking("impr",{page_section:"cancel_like_popup"})},requestCancelLikes:function(){var e=this,t=this.$getValue("teamList.favIds");t&&t.length>0&&this.$dispatch(i.unlikeMulti(t)).then(function(a){a&&(e.$dispatch(i.setGroupData({canRemoveFav:!1})),n.Message.emit("REFRESH_COLLECT_LIST"),t.forEach(function(e){o.default.likeGoodsIds[e]=!1}))})},imprTracking:function(e){var t=e.detail||e,i=t.tabKey,a=t.index,o=parseInt(i,10),s=this.$getValue("teamList.groupGoodsList")[a]||{},n=void 0;n=0===o?"rec":"main";var c=this.getNavGoodsListTrackingParam("impr",s.goodsId,s.transData,a,n,s.eventType);this.imprListManager.checkItem([i,a],!0)||(0,r.TrackingRecord)(c,this)},pvTracking:function(e){var t={op:"pv",page_name:"team_list",page_sn:16056,order_sn:this.$urlQueryObj.parent_order_sn};e&&(t.is_back=1),(0,r.TrackingRecord)(t,this),this.$firstTimeTrackRecord.pv=!0},commonTracking:function(e,t){var i={op:e,page_name:"team_list",page_sn:16056};(0,r.TrackingRecord)(r.ObjectUtil.assign({},i,t),this)}};(0,r.PddPage)(c,{pageName:"team_list",pageSn:"16056",notUseCommonPV:!0,useNewImpr:!0,needObserveRender:!0}); 
 			}); 	require("package_c/team_list/team_list.js");
 		__wxRoute = 'package_c/order_checkout/order_checkout';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout/order_checkout.js';	define("package_c/order_checkout/order_checkout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var o=e.apply(this,arguments);return new c.default(function(e,t){function r(a,s){try{var n=o[a](s),i=n.value}catch(e){return void t(e)}if(!n.done)return c.default.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function t(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,o){var t=[],r=!0,a=!1,s=void 0;try{for(var n,i=e[Symbol.iterator]();!(r=(n=i.next()).done)&&(t.push(n.value),!o||t.length!==o);r=!0);}catch(e){a=!0,s=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return t}return function(o,t){if(Array.isArray(o))return o;if(Symbol.iterator in Object(o))return e(o,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=e(require("../../controller/order_checkout")),n=e(require("../../controller/addresses_controller")),i=e(require("../components/order_checkout_address/order_checkout_address")),d=e(require("../components/order_checkout_goods/order_checkout_goods")),u=e(require("../components/order_checkout_picc/order_checkout_picc")),c=e(require("../../libs/es6-promise.min")),p=e(require("../../constants/goods")),l=e(require("../../constants/groups")),h=e(require("../../constants/payment")),f=e(require("../../configs/request_errors")),m=e(require("../components/edit_address/edit_address")),g=e(require("../../models/address")),_=e(require("../../libs/regenerator-runtime/runtime")),y=e(require("../../storage/ram_manager")),b=e(require("../../storage/user_storage")),v=require("../../common/message"),C=e(require("../../controller/auto_create_group")),T=require("../../libs/base64.min"),D=require("../../common/index"),O=e(require("../../constants/storage_keys")),k=e(require("../components/order_checkout_data_format")),P=e(require("./component/order_checkout_virtual_goods/order_checkout_virtual_goods")),S=e(require("../components/order_checkout_mall_coupons/order_checkout_mall_coupons")),w=e(require("../components/order_checkout_coupons/order_checkout_coupons")),I=e(require("../../components/help_pay/help_pay")),R=e(require("../../controller/config_controller")),V=e(require("../components/service_vo/service_vo")),M=e(require("../../common/logger")),A=e(require("../components/real_name_auth/real_name_auth")),x=require("../../actions/common"),$=e(require("../components/collection_coupon/collection_coupon")),F=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}(require("../../actions/bubble")),j={NO_COUPON:0,SOME_COUPON_AT_LEAST_ONE_USED:1,SOME_COUPON_NONE_USED:2},N={getGroupOrderDetail:"10045",confirmRender:"10498",confirmRefresh:"10499"},E={orderCheckoutAddressModule:null,orderCheckoutGoodsModule:null,createOrderParams:null,payBtnFlag:!1,disableUserAction:!1,nextStepIsPay:!1,expireTimeMini:0,expireTime:[],payHandler:null,hasPopFriendPay:!1,data:{navTitle:"拼多多",showReqError:!1,addressArray:[],showPage:!1,payText:"立即支付",subPayText:"",showFreeCoupon:!1,mallCouponToastData:{},mallCouponsListData:{showMallCouponsList:!1,couponsBgMaskShow:!1,mallMainClass:"mall-coupons-main mall-coupons-main-down"},myMallCouponsData:{showCouponsList:!1,myMallCouponsBgMaskShow:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},myPlatformCouponsData:{showCouponsList:!1,couponsBgMaskShow:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},orderCheckoutGoodsData:{disableUserAction:!1},addressData:{editAddressWindowVisible:!1},orderCheckoutAddressData:{disableUserAction:!1,addressInfo:{}},showPayWindow:!1,showPayContainer:!1,isIpx:D.SystemInfo.getIpxJudgment(),showCouponLoadMore:!1,selectedAppId:"",stepProtocolVo:{stepProtocolSelected:!0},virtualGoodsData:{},realNameAuthData:{},idCardValidStatusCode:null},$partialStore:{quickEntryForwardIndex:[{display:"displayQuickEntry"}],toast:["@all",{display:"displayToast"}],bubble:["bubble",{top:"bubbleTop"},"isClosed","isSimple"]},defaultClick:function(){},setBottomBarPayText:function(e){var o=(this.confirmRenderData.orderVo||{}).payPrice;if(e){if(-1===this.data.selectedAppId)return void this.setData({payText:"创建订单中",subPayText:"请稍候"});0===Number(o)&&this.data.showFreeCoupon?this.setData({payText:"正在拼单",subPayText:""}):this.setData({payText:"正在支付",subPayText:"请稍候"})}else{var t="立即支付";0===Number(o)&&this.data.showFreeCoupon&&(t="免费拼单"),this.cancelPay&&(t="继续支付"),this.data.goodsVo.eventType===l.default.EventType.FREE_TRIAL&&(t="申请试用"),this.setData({payText:t,subPayText:""})}},setCouponListWindowData:function(e,o,r,a){var s,n=r.enableCoupons||[],i=r.disableCoupons||[],d=r.enableSuperpositionCoupons||{},u=(s={},t(s,e+".title",o),t(s,e+".isMallCoupon",!!a),t(s,e+".enableCoupons",n),t(s,e+".enableSuperpositionCoupons",d),t(s,e+".disableCoupons",i),t(s,e+".hasCoupons",n.length>0||i.length>0||this.data.hasSuperpositionCoupons||!1),t(s,e+".showCouponsList",!0),s);"myMallCouponsData"===e?u[e+".myMallCouponsBgMaskShow"]=!0:u[e+".couponsBgMaskShow"]=!0,this.setData(u),this.setData(t({},e+".mainClass","mall-coupons-main mall-coupons-main-up"))},paySuccess:function(e){var o=this.confirmRenderData.goodsVo||{},t=this.confirmRenderData.groupVo||{},r=this.confirmRenderData.orderVo||{},a=this.confirmRenderData.skuVo||{},s=this.createOrderOpts,n={op:"event",sub_op:"pay_order",page_name:"order_checkout",page_sn:10004,order_sn:e.orderSn,order_amount:parseInt(r.payPrice,10)>0?parseInt(r.payPrice,10):0,goods_id:o.goodsId,goods_type:o.goodsType,event_type:o.eventType,goods_number:o.goodsNumber,group_num:t.customerNum,sku_id:a.skuId,group_id:t.groupId,tag:"pdd_order",mall_id:o.mallId,friend_pay:-1===this.data.selectedAppId,is_pap_pay:this.isPapPay?1:0};s.bizType&&(n.refer_biz_type=s.bizType),s.sourceType&&(n.source_type=s.sourceType),s.xcxUserTag&&(n.xcx_user_tag="silence"),s.mallCouponId&&(n.merchant_coupon_id=s.mallCouponId),s.platformCouponId&&(n.platform_coupon_id=s.platformCouponId),s.couponNumber>0&&(n.coupon_number=s.couponNumber),s.eventId>0&&(n.event_id=s.eventId);var i=this.ServiceVoModule&&this.ServiceVoModule.getSelectedServiceVoTemplate(this.confirmRenderData.serviceVo);i&&i.serviceTransparentField&&(n.srv_total_price=i.srvTotalPrice),Object.prototype.hasOwnProperty.call(s,"couponType")&&(n.coupon_type=s.couponType),s.couponDiscount>0&&(n.coupon_discount=s.couponDiscount),y.default.wxappId&&(n.refer_wxapp_id=y.default.wxappId),o.activityType&&(n.activity_type=o.activityType),this.orderScanCode&&(n.refer_share_form="scan_code"),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"subjects_id")&&(n.refer_subjects_id=this.$urlQueryObj.subjects_id),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"subject_id")&&(n.refer_subject_id=this.$urlQueryObj.subject_id),Object.keys(y.default.readActivityPages).forEach(function(e){n["refer_xcx_campaign_"+e]=1,n.refer_xcx_campaign_id?n.refer_xcx_campaign_id+=e+"@":n.refer_xcx_campaign_id=e+"@"}),n.refer_xcx_campaign_id&&(n.refer_xcx_campaign_id=n.refer_xcx_campaign_id.substr(0,n.refer_xcx_campaign_id.length-1));var d=e.groupOrderId;if(d){y.default.lastGroupOrderId=d,y.default.lastOrderGoodsId=this.$urlQueryObj.goods_id,y.default.lastPayGoodsId="";var u={group_order_id:d,from:"pay_success"};this.$urlQueryObj.from_custom_service_mall_id&&(u.from_custom_service_mall_id=this.$urlQueryObj.from_custom_service_mall_id),this.$urlQueryObj.biz_tag&&(u.biz_tag=this.$urlQueryObj.biz_tag);var c="/package_c/group/group?"+D.UrlUtil.buildQuery(u);D.Navigation.redirectForward(c)}this.getGroupInfoTracking(d,this,n)},getCouponUsageForTrackingRecord:function(){var e=this.data.promotionVo,o=(e.merchantCouponVo||{}).couponId,t=(e.merchantCouponVo||{}).promotionStatus,r=(e.platformCouponVo||{}).couponId,a=(e.platformCouponVo||{}).promotionStatus;if(1===Number(t)&&o||1===Number(a)&&r)return j.SOME_COUPON_AT_LEAST_ONE_USED;var s=this.data.couponInfos||{};return s.mallCoupons&&s.mallCoupons.enableCoupons.length>0||s.platformCoupons&&s.platformCoupons.enableCoupons.length>0?j.SOME_COUPON_NONE_USED:j.NO_COUPON},payBarPay:function(e){var o=D.DataUtil.getLogId();this.pay(o),e&&this.$uploadFormId(e,!1);var t=this.getTrackingParams("click",null,"pay_btn","99229");t.coupon_usage=this.getCouponUsageForTrackingRecord(),t.log_id=o,this.isNewOrSilentUser&&(t.xcx_user_tag="silence"),t.is_pap_pay=this.papPaySigned?"1":"0",(0,D.TrackingRecord)(t)},pay:function(e){var o=this;if(!this.payBtnFlag)if(this.data.isDepositGoods&&this.data.stepProtocolVo&&!this.data.stepProtocolVo.stepProtocolSelected)this.$dispatch((0,x.showToast)("请先同意预售商品定金不退协议"));else{var t=this.data.cellBarVo;if(t&&t.protocolTitle&&!t.cellBarSelected)this.$dispatch((0,x.showToast)("请先同意跨境商品购买须知"));else if(!0!==this.confirmRenderData.skuVo.stockEmpty){var r=this.confirmRenderData.goodsVo||{},a=this.confirmRenderData.skuVo||{},n=this.confirmRenderData.groupVo||{},i=this.confirmRenderData.promotionVo||{},d=this.confirmRenderData.orderVo||{};if(r.goodsNumber&&!(r.goodsNumber<0)){if(this.cancelPay)return-1===this.data.selectedAppId&&this.orderSn?void this.dealToHelpPay():void this.repay();var u={goodsId:r.goodsId,isAutoGroup:!1,orderAmount:d.payPrice,skuId:a.skuId,groupId:n.groupId,groupNum:n.customerNum,goodsName:r.goodsName,skuNumber:r.goodsNumber,goodsType:r.goodsType,eventType:r.eventType,payAppId:this.data.selectedAppId,orderServicePath:this.confirmRenderData.orderServicePath,mallId:r.mallId,unitPrice:r.unitPrice,finalPrice:d.payPriceStd,papPaySigned:this.papPaySigned,msgId:this.msgId||""};u.logId=e||D.DataUtil.getLogId(),1===Number(this.$urlQueryObj.order_message)&&(u.orderMessage=this.$urlQueryObj.order_message),this.payVo&&this.payVo.attrMap&&D.DataUtil.isObject(this.payVo.attrMap)&&(u.attrMap=this.payVo.attrMap),this.bizTag&&(u.bizTag=this.bizTag),this.bizType&&(u.bizType=this.bizType),this.sourceType&&(u.sourceType=this.sourceType),this.promotionTag&&(u.promotionTag=this.promotionTag),this.isNewOrSilentUser&&(u.xcxUserTag="silence"),this.extendMap&&(u.extendMap=this.extendMap),1===parseInt((i.merchantCouponVo||{}).promotionStatus,10)&&(i.merchantCouponVo||{}).couponId&&(u.mallCouponId=(i.merchantCouponVo||{}).couponId);var c=!1,l=!1,h=!1,m=0;if(1===parseInt((i.merchantCouponVo||{}).promotionStatus,10)){m+=(i.merchantCouponVo||{}).discount;var g=void 0;(i.merchantCouponVo||{}).couponId&&(u.mallCouponId=(i.merchantCouponVo||{}).couponId,this.data.couponInfos&&this.data.couponInfos.mallCoupons&&this.data.couponInfos.mallCoupons.enableCoupons&&this.data.couponInfos.mallCoupons.enableCoupons.forEach(function(e){Number(e.couponId)===Number(u.mallCouponId)&&(g=e.sourceType)})),i.merchantCouponVo.eventId>0&&(u.eventId=i.merchantCouponVo.eventId),92===Number(g)||217===Number(g)?l=!0:c=!0}1===parseInt((i.platformCouponVo||{}).promotionStatus,10)&&(m+=(i.platformCouponVo||{}).discount,h=!0,(i.platformCouponVo||{}).couponId&&(u.platformCouponId=(i.platformCouponVo||{}).couponId),(i.platformCouponVo||{}).superpositionCouponNumber>0&&(u.couponNumber=(i.platformCouponVo||{}).superpositionCouponNumber));var _=this.ServiceVoModule&&this.ServiceVoModule.getSelectedServiceVoTemplate(this.confirmRenderData.serviceVo);if(_&&_.serviceTransparentField&&(u.serviceTransparentField=_.serviceTransparentField,u.srvTotalPrice=_.srvTotalPrice),m>0&&(u.couponDiscount=m),l&&h?u.couponType=4:c&&h?u.couponType=3:h?u.couponType=2:c?u.couponType=1:l&&(u.couponType=0),(this.$urlQueryObj.source_channel||"likes"===this.$urlQueryObj.refer_page_name)&&(u.sourceChannel=this.$urlQueryObj.source_channel||p.default.SourceChannel.PERSONAL_COLLECTION),this.duoDuoType&&(u.type=this.duoDuoType),this.confirmRenderData.goodsVo&&this.confirmRenderData.goodsVo.activityId&&(u.activityId=this.confirmRenderData.goodsVo.activityId),this.confirmRenderData.goodsVo&&this.confirmRenderData.goodsVo.activityType&&(u.activityType=this.confirmRenderData.goodsVo.activityType),this.confirmRenderData.isVirtualGoods){if(this.OrderCheckoutVirtualGoodsModal&&!this.OrderCheckoutVirtualGoodsModal.checkEnterNumber())return;u.phoneNumber=this.data.virtualGoodsData.phoneNumber,u.addressId=0}else{var y=this.data.orderCheckoutAddressData;if(!y||!y.addressInfo||y.addressInfo.addressId<=0)return void("function"==typeof this.addAddress&&this.addAddress());if(!y.addressInfo.canReceived){var b=this;return void wx.showModal({content:"该商品有地区限制，请使用快递可以送达的地址",success:function(e){e.confirm&&"function"==typeof b.editAddress&&b.editAddress()}})}u.addressId=y.addressInfo.addressId}this.$urlQueryObj&&this.$urlQueryObj.group_order_id&&(u.groupOrderId=this.$urlQueryObj.group_order_id),this.data.freeCoupon&&this.data.freeCoupon.couponId&&(u.groupFreeCoupon=this.data.freeCoupon);var C=this.getRealNameAuthData()||{};if(C&&C.needNameAuth&&!C.hasIdInfo){if(this.nextStepIsPay=!0,this.RealNameAuthModule.showNameAuthWin(),this.idCardValidStatusCode){var T=f.default.messageFromCode(this.idCardValidStatusCode);this.$dispatch((0,x.showToast)(T))}}else(u.addressId||this.confirmRenderData.isVirtualGoods)&&(this.setBottomBarPayText(!0),this.payBtnFlag=!0,this.createOrderParams=u,this.payHandler&&(this.payHandler(),this.payHandler=null),-1!==this.data.selectedAppId&&D.StorageUtil.setStorageSync(O.default.LAST_PAY_APP_ID,this.data.selectedAppId),this.payHandler=v.Message.on(v.KEYS.ORDER_CHECKOUT_PAY,D.Util.bind(this.processPay,this)),this.msgId?s.default.createTransacOrder(u,v.KEYS.ORDER_CHECKOUT_PAY):s.default.createOrder(u,v.KEYS.ORDER_CHECKOUT_PAY)),this.createOrderOpts=u}}else this.$showModal({content:"该商品在当前地区暂时无货，建议您换个地址",showCancel:!0,confirmText:"确定",success:function(e){if(e.confirm){var t=[],r=o.confirmRenderData.goodsVo;r.allowedRegion&&"1"!==r.allowedRegion.toString()&&(t=r.allowedRegion.toString().split(",")),v.Message.on(v.KEYS.ORDERCHECKOUT_CHOOSE_ADDRESS,D.Util.bind(o.orderCheckoutAddressModule.selectAddress,o.orderCheckoutAddressModule),!0),o.$forward("addresses",{sel_address_id:o.confirmRenderData.addressVo.addressId,allowed_regions:t})}}})}},dealToHelpPay:function(){this.goToHelpPay=!0;var e={order_sn:this.orderSn};this.$urlQueryObj.group_order_id&&(e.group_order_id=this.$urlQueryObj.group_order_id),this.$forward("help_pay",e)},repay:function(){if(this.orderSn){this.payBtnFlag=!0,this.setBottomBarPayText(!0);var e={orderSn:this.orderSn,groupOrderId:this.groupOrderId};this.payVo&&this.payVo.attrMap&&D.DataUtil.isObject(this.payVo.attrMap)&&(e.attrMap=this.payVo.attrMap),s.default.doPay(e,v.KEYS.ORDER_CHECKOUT_PAY)}},setUserActionDisabled:function(){this.setData({disableUserAction:!0,"orderCheckoutGoodsData.disableUserAction":!0,"orderCheckoutAddressData.disableUserAction":!0})},getGroupOrderDetail:function(e,t){var r=this;return o(_.default.mark(function o(){var a,s;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,a=D.Request.requestDataWithCmd(N.getGroupOrderDetail,{restfulParam:e}),o.next=4,D.Request.runSecondaryRequestForPage(a,t);case 4:return s=o.sent,o.abrupt("return",s);case 8:return o.prev=8,o.t0=o.catch(0),o.abrupt("return",o.t0);case 11:case"end":return o.stop()}},o,r,[[0,8]])}))()},processPay:function(e){if(this.payBtnFlag=!1,e&&e.orderSn&&(this.orderSn=e.orderSn,this.groupOrderId=e.groupOrderId,this.orderCheckoutAddressModule.orderSn=this.orderSn),this.setBottomBarPayText(),e.errorCode){this.$hideLoading();var o=e.errorMsg;if(h.default.isCancelPay(o))this.dealCancelPay();else switch(parseInt(e.errorCode,10)){case 42007:this.groupFullAutoPrepay(e);break;case 42006:case 47014:this.payFailToGoods(o);break;case 46014:case 152006:this.limitQuantityDiscountOut(o);break;case 41003:this.goodsSellOut(o);break;case 45516:this.hasActivityOn(o);break;case 44001:this.hasUsedCoupon(o);break;default:this.payErrorDefault(o)}}else if(e.orderSn){if(-1===this.data.selectedAppId)return void this.dealToHelpPay();y.default.hasPaySucess=!0,this.paySuccess(e),this.$hideLoading()}this.uploadUserAddress(e)},dealCancelPay:function(){this.cancelPay=!0,this.setUserActionDisabled(),this.setBottomBarPayText();var e=!1;if(this.expireTime.forEach(function(o){"orderTime"===o.name&&(e=!0)}),!e){var o={name:"orderTime",value:1800};this.expireTime.push(o),this.countExpireInterval||this.countDownTimeSpike()}if(!this.hasPopFriendPay&&("1"===String(y.default.pddUserType)||"2"===String(y.default.pddUserType))&&this.newUserFriendPay){var t=this.data.payVo.payChannelList;if(t&&2===t.length){this.hasPopFriendPay=!0;var r=this,a=this.data.goodsVo||{};r.$showModal({content:"支付遇到问题时，试试发送给好友帮你代付吧",contentAlign:"center",contentColor:"#000",cancelText:"取消",confirmText:"找好友代付",reportFormId:!0,success:function(e){if(e.confirm){r.dealToHelpPay();var o={op:"click",page_section:"friend_pay_popup",page_element:"friend_pay_btn",goods_id:a.goodsId,order_sn:r.orderSn,event_type:a.eventType};(0,D.TrackingRecord)(o)}else if(e.cancel){r.dealPayWindow(!0);var t={op:"click",page_section:"friend_pay_popup",page_element:"cancel_btn",goods_id:a.goodsId,order_sn:r.orderSn,event_type:a.eventType};(0,D.TrackingRecord)(t)}}});var s={op:"impr",page_section:"friend_pay_popup",goods_id:a.goodsId,order_sn:this.orderSn,event_type:a.eventType};return void(0,D.TrackingRecord)(s)}}this.dealPayWindow(!0)},groupFullAutoPrepay:function(e){var o={orderSn:e.orderSn};this.payVo&&this.payVo.attrMap&&D.DataUtil.isObject(this.payVo.attrMap)&&(o.attrMap=this.payVo.attrMap),C.default.createGroup(e.orderSn,function(){s.default.groupFullAutoPrepay(o,v.KEYS.ORDER_CHECKOUT_PAY)},function(){})},payFailToGoods:function(e){y.default.hasPaySucess=!0;var o=this;this.$dispatch((0,x.showToast)(e,{hideToastFunc:function(){var e=o.$urlQueryObj.goods_id;e&&("goods_detail"===o.$referPageName?D.Navigation.back():o.$redirect("goods",{goods_id:e}))}}))},limitQuantityDiscountOut:function(e){var o=this;this.$showModal({content:e,showCancel:!1,contentAlign:"center",success:function(e){if(e.confirm){var t=o.$urlQueryObj.goods_id;t&&o.$redirect("goods",{goods_id:t})}}})},goodsSellOut:function(e){var o=this;this.$showModal({content:e,showCancel:!1,confirmText:"确定",contentAlign:"center",success:function(){D.Util.toWeb({page_name:"per_similar_rec",goodsId:o.confirmRenderData.goodsVo.goodsId},o)}})},hasActivityOn:function(e){var o=this;this.$dispatch((0,x.showToast)(e,{hideToastFunc:function(){o.reLoad()}}))},hasUsedCoupon:function(e){var o=this;this.$dispatch((0,x.showToast)(e,{hideToastFunc:function(){o.confirmRefresh({clearCouponParams:!0})}}))},payErrorDefault:function(e){var o=this;e?this.$dispatch((0,x.showToast)(e,{hideToastFunc:function(){!o.cancelPay&&o.orderSn&&o.$redirect("order",{ordersn:o.orderSn})}})):this.orderSn&&this.$redirect("order",{ordersn:this.orderSn})},uploadUserAddress:function(e){if(this.orderSn){var o=y.default.openId,t=this.data.orderCheckoutAddressData.addressInfo,r="";r=e.errorCode?h.default.isCancelPay(e.errorMsg)?"cancel":"fail":"success";var a={op:"keep",sub_op:"order",open_id:o,order_sn:this.orderSn,pay_status:r};Object.assign(a,t);var s=T.Base64.encode(JSON.stringify(a)),n=s.substring(s.length-8,s.length)+s.substring(0,s.length-8);D.Request.apiRequest("POST","backend/v2/op",{info:n},!1,{forceUseApiGZ:!0,needGZToken:!0})}},getGroupInfoTracking:function(e,t,r){var a=this;return o(_.default.mark(function o(){var s,n,i;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,!e){o.next=15;break}return o.next=4,t.getGroupOrderDetail(e,t);case 4:if(o.t0=o.sent,o.t0){o.next=7;break}o.t0={};case 7:s=o.t0,n=s.leader_order_info&&s.leader_order_info.uid||"",i=b.default.getUserId(),r.Is_group_owner=String(n)===String(i)?"1":"0",s&&s.group_order_info&&void 0!==s.group_order_info.group_status?r.group_status=s.group_order_info.group_status:r.group_status=0,s&&s.group_order_info&&s.group_order_info.customer_num&&(r.group_num=s.group_order_info.customer_num),r.group_order_id=e,(0,D.TrackingRecord)(r);case 15:o.next=20;break;case 17:o.prev=17,o.t1=o.catch(0),(0,D.TrackingRecord)(r);case 20:case"end":return o.stop()}},o,a,[[0,17]])}))()},setupOrderCheckoutGoodsModule:function(){this.orderCheckoutGoodsModule||(this.orderCheckoutGoodsModule=new d.default),this.orderCheckoutGoodsModule.load(this.confirmRenderData,{setDataFunc:this.componentsSetDataFuncs().orderCheckoutGoods,getDataFunc:this.componentsGetDataFuncs().orderCheckoutGoods,addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),showMallCouponsList:D.Util.bind(this.showMallCouponsList,this),selectMallCoupon:D.Util.bind(this.selectMallCoupon,this),disableEditNum:!!this.msgId})},clearIntervalFun:function(){var e=!0;this.expireTime.forEach(function(o){o.value>0&&(e=!1)}),e&&(clearInterval(this.countExpireInterval),this.countExpireInterval=null)},expireSpike:function(e){var o=this,t=e.name,r=t+"List",a=t+"Mini";if(e.value>=0){var s=D.TimeUtil.transferToTime(1e3*e.value).split(":"),n={};n[r]=s,0===e.value.toFixed(1)?(n[a]=0,"orderTime"===e.name&&(n.orderTimeTitle="请尽快支付"),o.clearIntervalFun()):n[a]=o.expireTimeMini,o.setData(n)}else o.clearIntervalFun()},countDownTimeSpike:function(){var e=this;if(this.expireTime.length>0){this.expireTime.forEach(function(o){o&&o.value>=0&&e.expireSpike(o)});var o=this;o.countExpireInterval=setInterval(function(){var e=0;o.expireTime.forEach(function(t){t.value-=.1,o.expireTime[e].value=t.value,0===o.expireTimeMini&&(o.expireTimeMini=10),o.expireTimeMini--,o.expireSpike(t),e++})},100)}},loadCoupons:function(){if(!this.OrderCheckoutCouponModule){var e=this;this.OrderCheckoutCouponModule=new w.default({isOrderCheckoutStep:!1,setDataFunc:function(o){e.setData(o)},addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),getTrackingParamsFunc:this.getTrackingParams,groupOrderId:this.$urlQueryObj.group_order_id||"",bizType:this.bizType||null,bizTag:this.bizTag||null,extendMap:this.extendMap||null})}this.OrderCheckoutCouponModule.loadCoupons()},getCurrentCouponParams:function(){var e=this.confirmRenderData.promotionVo||{};return{platform_coupon_vo:{coupon_id:1===parseInt(e.platformCouponVo.promotionStatus,10)?e.platformCouponVo.couponId:null,not_use:e.platformCouponVo.notUse,superposition_coupon_number:e.platformCouponVo.superpositionCouponNumber},merchant_coupon_vo:{coupon_id:1===parseInt(e.merchantCouponVo.promotionStatus,10)?e.merchantCouponVo.couponId:null,not_use:e.merchantCouponVo.notUse,event_id:e.merchantCouponVo.eventId}}},hideMallCouponsList:function(){var e=this;this.setData({"mallCouponsListData.mallMainClass":"mall-coupons-main mall-coupons-main-down","mallCouponsListData.couponsBgMaskShow":!1}),setTimeout(function(){e.setData({"mallCouponsListData.showMallCouponsList":!1})},300)},selectMallCoupon:function(){this.setCouponListWindowData("myMallCouponsData",null,(this.data.couponInfos||{}).mallCoupons||{},!0)},hideCouponsList:function(){var e=this,o=this.data.couponInfos||{},t=o.platformCoupons&&o.platformCoupons.enableSuperpositionCoupons?o.platformCoupons.enableSuperpositionCoupons:{};t.showSuperEditBtn&&(t.showSuperEditBtn=!1,o.platformCoupons.enableSuperpositionCoupons=t),this.setData({"myMallCouponsData.mainClass":"mall-coupons-main mall-coupons-main-down","myPlatformCouponsData.mainClass":"mall-coupons-main mall-coupons-main-down","myMallCouponsData.myMallCouponsBgMaskShow":!1,"myPlatformCouponsData.couponsBgMaskShow":!1,couponInfos:o}),setTimeout(function(){e.setData({"myMallCouponsData.showCouponsList":!1,"myPlatformCouponsData.showCouponsList":!1})},300)},showMallCouponsList:function(){this.hideCouponsList(),this.setData({"mallCouponsListData.showMallCouponsList":!0,"mallCouponsListData.couponsBgMaskShow":!0}),this.setData({"mallCouponsListData.mallMainClass":"mall-coupons-main mall-coupons-main-up"});var e=this.data.mallCouponsListData||{};e.coupons&&e.coupons.length>0&&e.coupons.forEach(function(e){if(e.canTakenCount>0){var o={op:"impr",page_section:"coupon_list",page_el_sn:"99221",batch_id:e.batchId,display_type:e.displayType};36===Number(e.displayType)?o.page_element="like_coupon_btn":o.page_element="coupon_recie_btn",(0,D.TrackingRecord)(o)}})},componentsSetDataFuncs:function(){var e=this,o=this;return{orderCheckoutAddress:function(t){var r=o.data.orderCheckoutAddressData||{};if(Object.keys(t).forEach(function(e){r[e]=t[e]}),o.setData({orderCheckoutAddressData:r}),y.default.lastOrderCheckoutOptions&&(y.default.lastOrderCheckoutOptions.sel_address_id=r.addressInfo.addressId),t.getPostage)if(o.orderSn){var a=e.confirmRenderData.optionMap;a&&1===Number(a.orderRefresh)&&o.orderRefresh()}else{var s=o.getCurrentCouponParams();o.confirmRefresh({promotionVoParams:s})}},orderCheckoutGoods:function(e){var t={};Object.keys(e).forEach(function(o){"coupons"!==o&&(t["orderCheckoutGoodsData."+o]=e[o])}),e.coupons&&(t["mallCouponsListData.coupons"]=e.coupons),o.setData(t),e.updateGoodsNumber&&o.data.orderCheckoutGoodsData.goodsNumber>0&&o.confirmRefresh({goodsNumber:o.data.orderCheckoutGoodsData.goodsNumber,clearCouponParams:!0})}}},orderRefresh:function(){var e=this;return o(_.default.mark(function o(){var t,r,a;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t={order_sn:e.orderSn,front_version:6},o.next=4,D.Request.apiRequest("POST","api/morgan/order/refresh",t,!1);case 4:r=o.sent,a=k.default.formatRenderData(r),e.confirmRenderData.addressVo=a.addressVo,o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.error(o.t0);case 12:case"end":return o.stop()}},o,e,[[0,9]])}))()},componentsGetDataFuncs:function(){var e=this;return{orderCheckoutAddress:function(){return e.data.orderCheckoutAddressData},orderCheckoutGoods:function(){return e.data.orderCheckoutGoodsData}}},componentsAddRootFunc:function(e,o){e&&"function"==typeof o&&(this[e]=o)},clearTimer:function(){this.countExpireInterval&&(clearInterval(this.countExpireInterval),this.countExpireInterval=null)},onUnload:function(){this.$urlQueryObj.order_message||(y.default.isLastPagePayPage=!0),y.default.useOrderCheckoutNew=!1,y.default.showUnpaidOrderDialog=!0,this.unregisterDispatchCallback(),this.$dispatch(F.closeBubble),this.$urlQueryObj.isHideUnpaidOrderDialog&&(y.default.showUnpaidOrderDialog=!1),this.payHandler&&(this.payHandler(),this.payHandler=null),this.clearTimer(),D.Util.empty(this)},onHide:function(){this.$dispatch(F.closeBubble),this.clearTimer()},unregisterDispatchCallback:function(){v.Message.off(v.KEYS.ORDER_CHECKOUT_PAY)},onPullDownRefresh:function(){this.loadPage()},reLoad:function(){this.loadPage()},onLoad:function(){var e=this;this.pvTracking(),this.$showLoading(),"scan_code"===this.$urlQueryObj.share_form&&(this.orderScanCode="scan_code"),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"biz_tag")&&"undefined"!==this.$urlQueryObj.biz_tag&&(this.$urlQueryObj.biz_tag.indexOf("%")>-1?this.bizTag=decodeURIComponent(this.$urlQueryObj.biz_tag):this.bizTag=this.$urlQueryObj.biz_tag),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"biz_type")&&"undefined"!==this.$urlQueryObj.biz_type&&(this.bizType=parseInt(this.$urlQueryObj.biz_type,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"msg_id")&&"undefined"!==this.$urlQueryObj.msg_id&&(this.msgId=parseInt(this.$urlQueryObj.msg_id,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"is_history_group")&&parseInt(this.$urlQueryObj.is_history_group,10)?this.sourceType=5:Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"is_history_visitor")&&parseInt(this.$urlQueryObj.is_history_visitor,10)&&(this.sourceType=6),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"duoduo_type")&&parseInt(this.$urlQueryObj.duoduo_type,10)&&(this.duoDuoType=parseInt(this.$urlQueryObj.duoduo_type,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"promotion_tag")&&"undefined"!==this.$urlQueryObj.promotion_tag&&(this.promotionTag=this.$urlQueryObj.promotion_tag);var o={};Object.keys(this.$urlQueryObj).forEach(function(t){t.indexOf("mkt_")>-1&&(o[t]=e.$urlQueryObj[t],e.extendMapUrl=o)}),this.msgId?this.processTransacPayDiff():this.loadPage(),y.default.hasCreatedOrder=!1,y.default.lastOrderCheckoutOptions=this.$urlQueryObj,y.default.lastPayGoodsId=this.$urlQueryObj.goods_id,this.$urlQueryObj.isHideUnpaidOrderDialog&&(y.default.showUnpaidOrderDialog=!1),this.orderCheckoutPiccModule||(this.orderCheckoutPiccModule=new u.default({setDataFunc:function(o){e.setData(o)},addRootFunc:D.Util.bind(this.componentsAddRootFunc,this)}))},processTransacPayDiff:function(){var e=this;return o(_.default.mark(function o(){var t,r,a;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.msgId||!e.$urlQueryObj.goods_id){o.next=15;break}return t=e,o.prev=2,r={msg_id:t.msgId,goods_id:t.$urlQueryObj.goods_id},o.next=6,D.Request.apiRequest("POST","api/rainbow/status/ask_diff_transfer/get",r,!1);case 6:(a=o.sent)&&a.order_sn?t.$redirect("order",{ordersn:a.order_sn}):t.loadPage(),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),t.loadPage();case 13:o.next=17;break;case 15:e.$dispatch((0,x.showToast)("参数错误")),e.$hideLoading();case 17:case"end":return o.stop()}},o,e,[[2,10]])}))()},loadPage:function(){this.data.showReqError&&(this.$showLoading(),this.setData({showReqError:!1})),this.loadData()},loadData:function(){this.confirmRender()},confirmRender:function(){var e=this;return o(_.default.mark(function o(){var t,r,s,n,i,d,u,p,l,h;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.$showLoading(),t=e,t.payBtnFlag=!0,o.prev=3,r={front_env:8,front_version:6,goods_id:t.$urlQueryObj.goods_id,group_id:t.$urlQueryObj.group_id,sku_id:t.$urlQueryObj.sku_id,goods_number:parseInt(t.$urlQueryObj.goods_number,10)||1,is_app:0},t.lastPayAppId=D.StorageUtil.getStorageSync(O.default.LAST_PAY_APP_ID),t.lastPayAppId&&(r.last_pay_app_id=t.lastPayAppId),t.$urlQueryObj.group_order_id&&(r.group_order_id=t.$urlQueryObj.group_order_id),t.duoDuoType&&(r.type=t.duoDuoType),t.bizTag&&(r.biz_tag=t.bizTag.indexOf("[")>-1&&t.bizTag.indexOf("]")>-1?t.bizTag:JSON.stringify([t.bizTag])),t.bizType&&(r.biz_type=t.bizType),Object.prototype.hasOwnProperty.call(t.$urlQueryObj,"award_type")&&"undefined"!==t.$urlQueryObj.award_type&&(r.award_type=t.$urlQueryObj.award_type),Object.prototype.hasOwnProperty.call(t.$urlQueryObj,"page_from")&&"undefined"!==t.$urlQueryObj.page_from&&(r.page_from=t.$urlQueryObj.page_from),Object.prototype.hasOwnProperty.call(t.$urlQueryObj,"sel_address_id")&&"undefined"!==t.$urlQueryObj.sel_address_id&&(r.address_id=t.$urlQueryObj.sel_address_id),e.extendMapUrl&&(r.extend_map=e.extendMapUrl),t.reqConfirmParams=r,s=D.Request.requestDataWithCmd(N.confirmRender,{params:r}),o.next=19,c.default.all([D.Request.runMainRequestForPage(s,t),R.default.getConfig("pap_pay"),R.default.getConfig("pay_order_coupon_tips"),D.User.isNewOrSilentUser(),R.default.getConfig("newuser_friend_pay")]);case 19:n=o.sent,i=a(n,5),d=i[0],u=i[1],p=i[2],l=i[3],h=i[4],t.couponTipsConfig=p,t.isNewOrSilentUser=l,t.newUserFriendPay=h,t.processConfirmRender(d,u),t.$hideLoading(),o.next=34;break;case 28:o.prev=28,o.t0=o.catch(3),t.setData({showReqError:!0}),t.$hideLoading(),t.payBtnFlag=!1,M.default.sendDeadlyError({bussiness_type:"interface",action:"get_render",url_path:"api/morgan/confirm/render",error_code:o.t0.error_code,error_msg:o.t0.error_msg});case 34:case"end":return o.stop()}},o,e,[[3,28]])}))()},processConfirmRender:function(e,o){var t=this,r=k.default.formatRenderData(e);this.confirmRenderData=r,this.payVo=r.payVo||{};var a=(r.promotionVo||{}).merchantCouponVo||{};r.extendMap&&(this.extendMap=r.extendMap),o&&this.payVo&&(this.payVo.payChannelList||[]).forEach(function(e){54===Number(e.appId)&&e.signed&&(t.papPaySigned=!0)}),a.displayName&&(this.OrderCheckoutMallCouponModule||(this.OrderCheckoutMallCouponModule=new S.default({setDataFunc:function(e){t.setData(e,function(){e.hasCollectionCoupon&&(t.CollectionCouponModule||(t.CollectionCouponModule=new $.default({page:t,addRootFunc:D.Util.bind(t.componentsAddRootFunc,t),mallId:(r.mallVo||{}).id,confirmRefreshFunc:t.confirmRefresh})))})},addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),confirmRefreshFunc:this.confirmRefresh,confirmRenderData:r}))),this.loadCoupons();var s=r.goodsVo,n=r.isVirtualGoods;n&&(this.OrderCheckoutVirtualGoodsModal||(this.OrderCheckoutVirtualGoodsModal=new P.default({goodsVo:s,phoneNumber:this.$urlQueryObj.mobile,setDataFunc:this.setVirtualGoodsData,getDataFunc:this.getVirtualGoodsData,addRootFunc:D.Util.bind(this.componentsAddRootFunc,this)}))),this.orderCheckoutAddressModule||(this.orderCheckoutAddressModule=new i.default);var d=[],u=[];s.allowedRegion&&"1"!==s.allowedRegion.toString()&&(u=s.allowedRegion.toString().split(",")),d.push(r.addressVo),this.orderCheckoutAddressModule.load(n,d,this.$urlQueryObj.sel_address_id||r.addressVo.addressId,u,{setDataFunc:this.componentsSetDataFuncs().orderCheckoutAddress,getDataFunc:this.componentsGetDataFuncs().orderCheckoutAddress,addRootFunc:D.Util.bind(this.componentsAddRootFunc,this)}),this.orderCheckoutAddressModule.setTrackingFunc(D.Util.bind(this.addressTracking,this));var c={showPage:!0,couponTitle:r.promotionVo.platformCouponVo.category||"",isDepositGoods:r.stepVo&&this.confirmRenderData.stepVo.depositPrice>0,usePapPay:o};if(s){if(D.ObjectUtil.assign(c,r),!s.realNameAuth&&Number(s.goodsType)!==p.default.GoodsType.OVERSEAS_TRANSSHIP&&Number(s.goodsType)!==p.default.GoodsType.OVERSEAS_DM&&Number(s.goodsType)!==p.default.GoodsType.OVERSEAS_DM_CC||this.RealNameAuthModule||(this.RealNameAuthModule=new A.default({setDataFunc:this.setRealNameAuthData,getDataFunc:this.getRealNameAuthData,addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),getTrackingParamsFunc:this.getTrackingParams,realNameAuth:s.realNameAuth,payFunc:this.pay})),!this.$urlQueryObj.group_order_id&&s.freeCoupon&&s.freeCoupon.length>0){var l=s.freeCoupon[0];c.showFreeCoupon=!0,c.freeCoupon={couponId:l.coupon_id,discount:D.StdFormat.price(l.discount,100)}}if(!this.HelpPayModule){var h=this;this.HelpPayModule=new I.default({isOrderCheckout:!0,setDataFunc:function(e){h.setData(e)},addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),getTrackingParamsFunc:this.getTrackingParams})}c.selectedAppId=this.HelpPayModule.setupPayType(),c=this.setCouponDiscount(c,r),this.initServiceVoModule(r),c=this.initGoodsIncrease(c);var f=r.cellBarVo;f&&(f.cellBarSelected=!0,c.cellBarVo=f),this.setData(c);var m=this.getTrackingParams("impr","main");if(this.isNewOrSilentUser&&(m.xcx_user_tag="silence"),(0,D.TrackingRecord)(m),r.confirmMessage&&this.$dispatch((0,x.showToast)(r.confirmMessage)),this.payBtnFlag=!1,this.setupOrderCheckoutGoodsModule(),this.data.isDepositGoods){var g=this.getTrackingParams("impr","earnest_choose",null,"204913");(0,D.TrackingRecord)(g)}}},initGoodsIncrease:function(e){var o=r({},e);if(o.goodsVo){var t=!1,a=!1,s=r({},o.goodsVo),n=Math.floor(95e5/s.unitPrice);s.goodsNumber>=n&&(t=!0),1===s.limitStatus&&(a=!0),s.orderLimitDisable=t,s.limitNumberDisable=a,o.goodsVo=s}return o},setCouponDiscount:function(e,o){if(this.couponTipsConfig&&this.isNewOrSilentUser){var t=o.merchantPromotionPrice+o.platformPromotionPrice;if(t>0){e.totalDiscountStd=D.StdFormat.price(t,100),e.showDiscountTips=!0;var r=this.getTrackingParams("impr","show_coupon_popup");(0,D.TrackingRecord)(r)}else e.showDiscountTips=!1}return e},setVirtualGoodsData:function(e){var o=this.data.virtualGoodsData||{};Object.keys(e).forEach(function(t){o[t]=e[t]}),this.setData({virtualGoodsData:o})},getVirtualGoodsData:function(){return this.data.virtualGoodsData||{}},setupServiceVoData:function(e){var o=this.data.serviceVoObj||{};if(Object.keys(e).forEach(function(t){o[t]=e[t]}),e.updateServiceVo&&e.serviceTransparentField){var t=e.serviceTransparentField;this.confirmRefresh({serviceTransparentField:t})}this.setData({serviceVoObj:o})},confirmRefresh:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(_.default.mark(function o(){var r,a,s,n,i;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.$showLoading(),r=e,r.payBtnFlag=!0,o.prev=3,a=r.reqConfirmParams,t.goodsNumber?a.goods_number=t.goodsNumber:a.goods_number=(r.data.goodsVo||{}).goodsNumber||r.$urlQueryObj.goods_number||1,r.data.orderCheckoutAddressData&&r.data.orderCheckoutAddressData.addressInfo&&r.data.orderCheckoutAddressData.addressInfo.addressId?a.address_id=r.data.orderCheckoutAddressData.addressInfo.addressId:a.address_id&&delete a.address_id,t.promotionVoParams&&(a.promotion_vo=t.promotionVoParams),t.clearCouponParams&&delete a.promotion_vo,t.serviceTransparentField?a.service_transparent_field=t.serviceTransparentField:(s=r.ServiceVoModule&&r.ServiceVoModule.getSelectedServiceVoTemplate(r.confirmRenderData.serviceVo))&&s.serviceTransparentField?a.service_transparent_field=s.serviceTransparentField:a.service_transparent_field&&delete a.service_transparent_field,n=D.Request.requestDataWithCmd(N.confirmRefresh,{params:a}),o.next=13,D.Request.runMainRequestForPage(n,r);case 13:i=o.sent,r.processConfirmRefresh(i),r.$hideLoading(),o.next=24;break;case 18:o.prev=18,o.t0=o.catch(3),r.$hideLoading(),r.payBtnFlag=!1,o.t0&&"45031"===String(o.t0.error_code)&&o.t0.error_msg&&(e.$dispatch((0,x.showToast)(o.t0.error_msg)),r.confirmRefresh({goodsNumber:(r.data.goodsVo||{}).goodsNumber||1,clearCouponParams:!0})),M.default.sendDeadlyError({bussiness_type:"interface",action:"refresh_order",url_path:"api/morgan/confirm/refresh",error_code:o.t0.error_code,error_msg:o.t0.error_msg});case 24:case"end":return o.stop()}},o,e,[[3,18]])}))()},processConfirmRefresh:function(e){var o=k.default.formatRenderData(e);this.extendMap=null,o.extendMap&&(this.extendMap=o.extendMap),this.confirmRenderData.promotionEventVo&&(o.promotionEventVo=this.confirmRenderData.promotionEventVo),this.confirmRenderData.payVo&&(o.payVo=this.confirmRenderData.payVo),o=this.setCouponDiscount(o,o),o=this.initGoodsIncrease(o),this.confirmRenderData=o,this.initServiceVoModule(o),this.setData(o),this.setupOrderCheckoutGoodsModule(),o.confirmMessage&&this.$dispatch((0,x.showToast)(o.confirmMessage)),this.loadCoupons(),this.payBtnFlag=!1},initServiceVoModule:function(e){(e.serviceVo&&e.serviceVo.displayTitle||e.goodsVo&&e.goodsVo.labels&&e.goodsVo.labels[0]&&e.goodsVo.labels[0].title)&&!this.ServiceVoModule?this.ServiceVoModule=new V.default({setDataFunc:this.setupServiceVoData,addRootFunc:D.Util.bind(this.componentsAddRootFunc,this),addAddressFunc:this.addAddress,confirmRenderData:e}):this.ServiceVoModule&&this.ServiceVoModule.initServiceVoData(e)},onPageScroll:function(){},addAddress:function(){this.loadEditAddressModule();var e=this.getTrackingParams("click","addresses","add_address");(0,D.TrackingRecord)(e)},wechatAddAddress:function(){var e=this;return o(_.default.mark(function o(){var t,r,a,s,i,d;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(a=function(){wx.chooseAddress({success:function(e){null!=e.nationalCode&&null!=e.detailInfo&&null!=e.userName&&null!=e.telNumber?(t.$showLoading(),n.default.addWxAddress(e,function(e){if(t.$hideLoading(),e&&e.error_code)e.error_msg&&t.$dispatch((0,x.showToast)(e.error_msg)),M.default.sendDeadlyError({bussiness_type:"interface",action:"pay_order",url_path:"address/weixin",error_code:e.error_code,error_msg:e.error_msg});else{var o=new g.default(e);if(o){var r=[];r.push(o),y.default.cacheAddressArr=r,v.Message.emit(v.KEYS.UPDATE_DEFAULT_ADDRESS,r)}t.updateAddress(o)}})):t.$dispatch((0,x.showToast)("地址信息不完整，无法导入"))}})},wx.chooseAddress){o.next=4;break}return e.$dispatch((0,x.showToast)("您的版本暂不支持，请升级到更高版本~")),o.abrupt("return");case 4:return t=e,r=!1,o.next=8,D.User.authorize("scope.address",function(){(0,D.TrackingRecord)({op:"impr",page_section:"auth_prompt",refer_page_element:"wechat_add_address",page_el_sn:99615}),r=!0});case 8:(s=o.sent)?a():D.User.showAuthorizeModelDialog("scope.address"),r&&((i=t.getTrackingParams("click","auth_prompt",s?"approve":"refuse",s?99899:99898)).params="wechat_add_address",(0,D.TrackingRecord)(i)),d=e.getTrackingParams("click","addresses","wechat_add_address"),(0,D.TrackingRecord)(d);case 13:case"end":return o.stop()}},o,e)}))()},loadEditAddressModule:function(){this.$showLoading();var e=this;n.default.fetchRegionsJsonData(function(){e.execAddressWindowLoad()})},updateAddress:function(e){e&&this.orderCheckoutAddressModule&&this.orderCheckoutAddressModule.updateOrderAddress(e)},execAddressWindowLoad:function(){var e=this;return o(_.default.mark(function o(){var t,r,a;return _.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t=n.default.getRegions()){o.next=3;break}return o.abrupt("return");case 3:return r=e,e.editAddressModule||(e.editAddressModule=new m.default),o.next=7,D.User.authorize("scope.userLocation");case 7:a=o.sent,r.editAddressModule.hasLocationAuth=a,r.editAddressModule.load(null,function(){r.editAddressModule.show(),r.$hideLoading()},function(e){r.editAddressModule.hide(),r.updateAddress(e)},{setDataFunc:function(e){var o={};Object.keys(e).forEach(function(t){o["addressData."+t]=e[t]}),r.setData(o)},getDataFunc:function(){return r.data.addressData},addRootFunc:D.Util.bind(r.componentsAddRootFunc,r),windowTitle:"新增地址",regionsDatas:t});case 10:case"end":return o.stop()}},o,e)}))()},onShow:function(){var e=this;if(this.countExpireInterval||this.countDownTimeSpike(),this.goToHelpPay)return y.default.hasPaySucess=!0,wx.navigateBack(),void(this.goToHelpPay=!1);var o=getCurrentPages(),t=o[o.length-1].__route__;t+="?"+D.UrlUtil.buildQuery(this.$urlQueryObj),this.$dispatch(F.initBubble(!0,t)).then(function(){e.customNavitionBar=e.selectComponent("#customNavitionBar");var o=e.customNavitionBar.getCustomNavData();e.setData(r({},o)),o.isSupportCustomNav&&e.$dispatch(F.setBubbleTop(80+o.navTop+"px"))}),y.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||this.pvTracking(!0)},pvTracking:function(e){var o={op:"pv",page_name:"order_checkout",goods_id:this.$urlQueryObj.goods_id,group_id:this.$urlQueryObj.group_id,sku_id:this.$urlQueryObj.sku_id};e&&(o.is_back=1),(0,D.TrackingRecord)(o),this.$firstTimeTrackRecord.pv=!0},addressTracking:function(e){var o="addresses";"alt_add"===e&&(o="cancel_pay_prompt");var t=this.getTrackingParams("click",o,e);"alt_add"===e&&(t.page_el_sn=99120),(0,D.TrackingRecord)(t)},getTrackingParams:function(e,o,t,r){var a=this.data.goodsVo||{},s=this.data.groupVo||{},n=this.data.skuVo||{},i=this.getRealNameAuthData(),d={op:e,page_name:"order_checkout",goods_id:a.goodsId,event_type:a.eventType,group_id:s.groupId,goods_number:a.goodsNumber,sku_id:n.skuId,classification:i&&i.needNameAuth?1:0};return o&&(d.page_section=o),t&&(d.page_element=t),r&&(d.page_el_sn=r),this.orderSn&&(d.order_sn=this.orderSn),d},closePayWindow:function(e){this.setData({showPayWindow:!1}),this.dealPayWindow(!1);var o=this.getTrackingParams("click","cancel_pay_prompt","close_btn","99121");(0,D.TrackingRecord)(o),this.$uploadFormId(e,!0)},payWinPay:function(e){this.pay(),e&&this.$uploadFormId(e,!0);var o=this.getTrackingParams("click","cancel_pay_prompt","pay_btn","99119");o.friend_pay=-1===this.data.selectedAppId,(0,D.TrackingRecord)(o)},dealPayWindow:function(e){var o=this;if(e){if(!o.data.showPayWindow){var t=this.getTrackingParams("impr","cancel_pay_prompt",null,"99122");(0,D.TrackingRecord)(t)}o.setData({showPayWindow:e}),setTimeout(function(){o.setData({showPayContainer:e})},200)}else o.setData({showPayContainer:e}),setTimeout(function(){o.setData({showPayWindow:e})},200)},selStepProtocal:function(){var e=this.data.stepProtocolVo||{};e.stepProtocolSelected=!e.stepProtocolSelected,this.setData({stepProtocolVo:e});var o=this.getTrackingParams("click","earnest_choose",null,"204913");(0,D.TrackingRecord)(o)},showStepProtocolWin:function(){var e=this.data.stepProtocolVo||{};e.showStepProtocolWinClass=!0,e.showStepProtocolWin=!0,this.setData({stepProtocolVo:e});var o=this.getTrackingParams("impr","earnest_tips",null,"204914");(0,D.TrackingRecord)(o)},preventTouchMove:function(){},closeStepProtocolWin:function(){var e=this,o=this.data.stepProtocolVo||{};o.showStepProtocolWinClass=!1,this.setData({stepProtocolVo:o}),this.stepProtocolSetTimeout=setTimeout(function(){o.showStepProtocolWin=!1,e.setData({stepProtocolVo:o})},500)},setRealNameAuthData:function(e){var o=this.data.realNameAuthData||{};Object.keys(e).forEach(function(t){o[t]=e[t]}),this.setData({realNameAuthData:o})},getRealNameAuthData:function(){return this.data.realNameAuthData||{}},selCellBar:function(e){if(e&&e.detail){var o=e.detail,t=this.data.cellBarVo;this.setData({cellBarVo:r({},t,o)})}},inputPhoneNumber:function(){},bindNameChange:function(){},bindMobileChange:function(){},bindAddressChange:function(){},preventMove:function(){},onNavBack:function(){var e={op:"click",page_section:"top_bar",page_element:"back"};if((0,D.TrackingRecord)(e),this.hasPopFriendPay)return y.default.hasPaySucess=!0,void this.$back();var o=this.data.goodsVo||{},t=this;this.$showModal({title:"确定要放弃付款吗？",content:22!==Number(o.eventType)||"1"!==String(y.default.pddUserType)&&"2"!==String(y.default.pddUserType)?"你尚未完成支付，喜欢的商品可能会被抢空哦~":"新人福利24小时内有效，优惠仅1次，别错过哦",cancelText:"暂时放弃",confirmText:"继续支付",reportFormId:!0,success:function(e){if(e.confirm){y.default.hasPaySucess=!0;var r={op:"click",page_element:"paying_btn",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};t.orderSn&&(r.order_sn=t.orderSn),(0,D.TrackingRecord)(r)}else if(e.cancel){y.default.hasPaySucess=!0;var a={op:"click",page_element:"give_up_btn",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};t.orderSn&&(a.order_sn=t.orderSn),(0,D.TrackingRecord)(a),t.$back()}}});var r={op:"impr",page_section:"unpaid_popup",goods_id:o.goodsId,event_type:o.eventType};t.orderSn&&(r.order_sn=t.orderSn),(0,D.TrackingRecord)(r)}};(0,D.PddPage)(E,{pageName:"order_checkout",pageSn:10004,notUseCommonPV:!0,needObserveRender:!0}); 
 			}); 	require("package_c/order_checkout/order_checkout.js");
 		__wxRoute = 'package_c/order_checkout_new/order_checkout_new';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_new/order_checkout_new.js';	define("package_c/order_checkout_new/order_checkout_new.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function a(r,s){try{var i=t[r](s),n=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(n).then(function(e){a("next",e)},function(e){a("throw",e)});e(n)}return a("next")})}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r=t(require("../../libs/regenerator-runtime/runtime")),s=require("../../common/index"),i=require("../../common/message"),n=e(require("./order_checkout_new.action")),d=require("../../actions/common"),u=t(require("./order_checkout_tracking")),l=t(require("../../controller/addresses_controller")),c=t(require("../components/edit_address/edit_address")),h=t(require("../../constants/goods")),p=t(require("../../constants/storage_keys")),f=t(require("../../controller/order_checkout")),m=t(require("../../storage/ram_manager")),g=t(require("../../constants/payment")),C=t(require("../../controller/auto_create_group")),y=t(require("../components_order_checkout/controller/order_checkout_address")),$=t(require("../components_order_checkout/controller/order_checkout_mall_coupons")),b=t(require("./component/order_checkout_virtual_goods/virtual_goods_controller")),v=e(require("../../actions/bubble")),w={payBtnFlag:!1,hasLoadRefresh:!1,hasPopFriendPay:!1,$commonTrackingParams:{},nextStepIsPay:!1,data:{toast:["display","toastMessage"],orderCheckoutNew:["@all"],bubble:["bubble",{top:"bubbleTop"},"isClosed","isSimple"]},onReady:function(){this.collectionCoupon=this.selectComponent("#collectionCoupon"),this.orderCheckoutAddress=this.selectComponent("#orderCheckoutAddress")},onLoad:function(){var e=this;if(this.$commonTrackingParams.page_name="order_checkout","scan_code"===this.$urlQueryObj.share_form&&(this.orderScanCode="scan_code"),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"biz_tag")&&"undefined"!==this.$urlQueryObj.biz_tag){var t="";(t=this.$urlQueryObj.biz_tag.indexOf("%")>-1?decodeURIComponent(this.$urlQueryObj.biz_tag):this.$urlQueryObj.biz_tag)&&/^\[.*\]$/.test(t)?this.bizTag=t:t&&Number(t)&&(this.bizTag=JSON.stringify([Number(t)]))}Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"biz_type")&&"undefined"!==this.$urlQueryObj.biz_type&&(this.bizType=parseInt(this.$urlQueryObj.biz_type,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"msg_id")&&"undefined"!==this.$urlQueryObj.msg_id&&(this.msgId=parseInt(this.$urlQueryObj.msg_id,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"is_history_group")&&parseInt(this.$urlQueryObj.is_history_group,10)?this.sourceType=5:Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"is_history_visitor")&&parseInt(this.$urlQueryObj.is_history_visitor,10)&&(this.sourceType=6),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"duoduo_type")&&parseInt(this.$urlQueryObj.duoduo_type,10)&&(this.duoDuoType=parseInt(this.$urlQueryObj.duoduo_type,10)),Object.prototype.hasOwnProperty.call(this.$urlQueryObj,"promotion_tag")&&"undefined"!==this.$urlQueryObj.promotion_tag&&(this.promotionTag=this.$urlQueryObj.promotion_tag);var o={};Object.keys(this.$urlQueryObj).forEach(function(t){t.indexOf("mkt_")>-1&&(o[t]=e.$urlQueryObj[t],e.extendMapUrl=o)}),this.msgId?this.processTransacPayDiff():this.loadPage(),m.default.hasCreatedOrder=!1,m.default.lastOrderCheckoutOptions=this.$urlQueryObj,m.default.lastPayGoodsId=this.$urlQueryObj.goods_id,this.$urlQueryObj.isHideUnpaidOrderDialog&&(m.default.showUnpaidOrderDialog=!1),u.default.pvTracking(this)},processTransacPayDiff:function(){var e=this;this.$urlQueryObj.goods_id?this.$dispatch(n.askDiffTransfer(this)).then(function(){var t=e.$getValue("orderCheckoutNew.diffTransferData")||{};t.orderSn?e.$redirect("order",{ordersn:t.orderSn}):e.loadPage()}):this.$dispatch((0,d.showToast)("参数错误"))},loadPage:function(){var e=this;this.$dispatch(n.loadPageData(this)).then(function(){e.processConfirm();var t=e.$getValue("orderCheckoutNew.goodsVo")||{},o=e.$getValue("orderCheckoutNew.stepVo")||{};(e.$getValue("orderCheckoutNew.realNameAuthData")||{}).hasIdInfo&&u.default.realNameImpr(e),t.isVirtualGoods&&e.$dispatch(n.getChargeHistory(e)),o.isDepositGoods&&u.default.depositGoodsImpr(e),u.default.mainImpr(e)})},reLoad:function(){this.loadPage(),this.$dispatch(n.updateErrorStatus(!1))},goodsRefresh:function(e){var t=this;e&&e.detail&&e.detail.goodsNumber&&this.$dispatch(n.updateGoodsVo(e.detail.goodsNumber)).then(function(){t.loadRefresh(e)})},loadRefresh:function(e){var t=this,o={};e&&(e.detail&&(e.detail.goodsNumber&&(o.goodsNumber=parseInt(e.detail.goodsNumber,10)),e.detail.clearCouponParams&&(o.clearCouponParams=e.detail.clearCouponParams),e.detail.addressId&&(o.addressId=e.detail.addressId),e.detail.serviceTransparentField&&(o.serviceTransparentField=e.detail.serviceTransparentField),e.detail.platformCoupon&&(o.platformCoupon=e.detail.platformCoupon),e.detail.merchantCoupon&&(o.merchantCoupon=e.detail.merchantCoupon)),e.addressId&&(o.addressId=e.addressId),e.clearCouponParams&&(o.clearCouponParams=e.clearCouponParams),e.goodsNumber&&(o.goodsNumber=parseInt(e.goodsNumber,10)),e.deleteAddr&&(o.deleteAddr=e.deleteAddr)),this.$dispatch(n.loadRefreshData(this,o)).then(function(){t.processConfirm()})},processConfirm:function(){var e=this.$getValue("orderCheckoutNew.confirmMessage"),t=this.$getValue("orderCheckoutNew.confirmCode"),o=this.$getValue("orderCheckoutNew.discountTipsData")||{};if(45031!==Number(t)||this.hasLoadRefresh)this.hasLoadRefresh=!1;else{this.hasLoadRefresh=!0;var a=this.$getValue("orderCheckoutNew.goodsVo")||{};this.loadRefresh({goodsNumber:a.goodsNumber||1,clearCouponParams:!0})}e&&this.$dispatch((0,d.showToast)(e)),o.showDiscountTips&&u.default.couponTipsImpr(this)},submitIdCardInfo:function(e){e&&e.detail&&(this.$dispatch(n.setRealNameAuthData(e.detail)),e.detail.nextStepIsPay&&this.pay()),u.default.submitIdCardInfo(this,e.detail)},getActionDisable:function(){return this.$getValue("orderCheckoutNew.actionDisable")||!1},editAddress:function(){var e=this,t=this.$getValue("orderCheckoutNew.goodsVo"),o=this.$getValue("orderCheckoutNew.addressVo"),a=this.$getValue("orderCheckoutNew.actionDisable");y.default.editAddress(this,{addressVo:o,goodsVo:t,actionDisable:a,orderSn:this.orderSn,updateOrderAddress:!0},function(t){e.orderSn?e.orderRefresh(t):t&&t.addressId?e.loadRefresh(t):e.loadRefresh({deleteAddr:!0})})},orderRefresh:function(e){this.$dispatch(n.orderRefresh(this,e))},addressEditAddress:function(){this.editAddress(),u.default.addressesClick(this,"change_address")},addAddress:function(){this.loadEditAddressModule(),u.default.addressesClick(this,"add_address")},wechatAddAddress:function(){var e=this;u.default.addressesClick(this,"wechat_add_address"),y.default.wechatAddAddress(this,function(t){t&&t.addressId&&e.loadRefresh({addressId:t.addressId}),t.isImpr&&u.default.wxAddressClick(e,{page_element:t.authorized?"approve":"refuse",page_el_sn:t.authorized?99899:99898})})},loadEditAddressModule:function(){var e=this;this.$showLoading(),l.default.fetchRegionsJsonData(function(){e.execAddressWindowLoad()})},execAddressWindowLoad:function(){var e=this;return o(r.default.mark(function t(){var o,a,i,d,u,h;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=l.default.getRegions()){t.next=5;break}return e.$hideLoading(),t.abrupt("return");case 5:return a=e,e.editAddressModule||(i=e.$getValue("orderCheckoutNew.goodsVo")||{},d=e.$getValue("orderCheckoutNew.groupVo")||{},u=e.$getValue("orderCheckoutNew.skuVo")||{},e.editAddressModule=new c.default({commonTrackingParams:{goods_id:i.goodsId,event_type:i.eventType,group_id:d.groupId,sku_id:u.skuId}})),t.next=9,s.User.authorize("scope.userLocation");case 9:h=t.sent,a.editAddressModule.hasLocationAuth=h,a.editAddressModule.load(null,function(){a.editAddressModule.show(),a.$hideLoading()},function(e){a.editAddressModule.hide(),a.loadRefresh({addressId:e.addressId})},{setDataFunc:function(e){a.$dispatch(n.setAddressData(e))},getDataFunc:function(){return a.$getValue("orderCheckoutNew.addressData")},addRootFunc:s.Util.bind(a.componentsAddRootFunc,a),windowTitle:"新增地址",regionsDatas:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),e.$hideLoading();case 17:case"end":return t.stop()}},t,e,[[0,14]])}))()},componentsAddRootFunc:function(e,t){e&&"function"==typeof t&&(this[e]=t)},checkPayStatus:function(){var e=this;if(this.payBtnFlag)return!1;if(this.$getValue("orderCheckoutNew.orderVo").cancelPay)return!0;var t=this.$getValue("orderCheckoutNew.stepVo");if(t&&t.isDepositGoods&&!t.stepProtocolSelected)return this.$dispatch((0,d.showToast)("请先同意预售商品定金不退协议")),!1;if(!0===this.$getValue("orderCheckoutNew.skuVo").stockEmpty)return this.$showModal({content:"该商品在当前地区暂时无货，建议您换个地址",showCancel:!0,confirmText:"确定",success:function(t){t.confirm&&e.editAddress()}}),!1;var o=this.$getValue("orderCheckoutNew.goodsVo");if(o.isVirtualGoods){var a=this.$getValue("orderCheckoutNew.virtualGoodsData");if(!b.default.checkEnterNumber(this,o,a))return!1}else{var r=this.$getValue("orderCheckoutNew.addressVo");if(!r||!r.addressId)return this.addAddress(),!1;if(r.canotReceived){var s=this;return wx.showModal({content:"该商品有地区限制，请使用快递可以送达的地址",success:function(e){e.confirm&&"function"==typeof s.editAddress&&s.editAddress()}}),!1}}var i=this.$getValue("orderCheckoutNew.realNameAuthData")||{};if(i.needNameAuth&&!i.hasIdInfo)return this.nextStepIsPay=!0,this.orderCheckoutAddress.showNameAuthWin(),i.idCardErrMsg&&this.$dispatch((0,d.showToast)(i.idCardErrMsg)),!1;var n=this.$getValue("orderCheckoutNew.cellBarVo");return!(n&&n.protocolTitle&&!n.cellBarSelected)||(this.$dispatch((0,d.showToast)("请先同意跨境商品购买须知")),!1)},pay:function(e){if(this.checkPayStatus()){var t=this.$getValue("orderCheckoutNew.goodsVo")||{},o=this.$getValue("orderCheckoutNew.skuVo")||{},a=this.$getValue("orderCheckoutNew.groupVo")||{},r=this.$getValue("orderCheckoutNew.promotionVo"),u=this.$getValue("orderCheckoutNew.orderVo")||{},l=this.$getValue("orderCheckoutNew.payVo")||{},c=this.$getValue("orderCheckoutNew.orderServicePath"),m=this.$getValue("orderCheckoutNew.serviceVo"),g=this.$getValue("orderCheckoutNew.addressVo"),C=this.$getValue("orderCheckoutNew.isNewOrSilentUser"),y=this.$getValue("orderCheckoutNew.extendMap");if(u.cancelPay)return-1===l.selectedAppId&&this.orderSn?void this.dealToHelpPay():void this.repay();var $={goodsId:t.goodsId,isAutoGroup:!1,orderAmount:u.payPrice,skuId:o.skuId,groupId:a.groupId,groupNum:a.customerNum,goodsName:t.goodsName,skuNumber:t.goodsNumber,goodsType:t.goodsType,eventType:t.eventType,payAppId:l.selectedAppId,orderServicePath:c,mallId:t.mallId,unitPrice:t.unitPrice,finalPrice:u.payPriceStd,papPaySigned:l.papPaySigned,msgId:this.msgId||""};if($.logId=e||s.DataUtil.getLogId(),u.couponPrice>0&&($.couponPrice=u.couponPrice),1===Number(this.$urlQueryObj.order_message)&&($.orderMessage=this.$urlQueryObj.order_message),l&&l.attrMap&&s.DataUtil.isObject(l.attrMap)&&($.attrMap=l.attrMap),this.bizTag&&($.bizTag=this.bizTag),this.bizType&&($.bizType=this.bizType),this.sourceType&&($.sourceType=this.sourceType),this.promotionTag&&($.promotionTag=this.promotionTag),C&&($.xcxUserTag="silence"),y&&($.extendMap=y),m&&m.serviceTransparentField&&($.serviceTransparentField=m.serviceTransparentField,$.srvTotalPrice=m.srvTotalPrice),$=this.merchantPlatformCoupons(r,$),(this.$urlQueryObj.source_channel||"likes"===this.$urlQueryObj.refer_page_name)&&($.sourceChannel=this.$urlQueryObj.source_channel||h.default.SourceChannel.PERSONAL_COLLECTION),this.duoDuoType&&($.type=this.duoDuoType),t.activityId&&($.activityId=t.activityId),t.activityType&&($.activityType=t.activityType),t.isVirtualGoods){var b=this.$getValue("orderCheckoutNew.virtualGoodsData");$.phoneNumber=b.phoneNumber,$.addressId=0}else $.addressId=g.addressId;this.$urlQueryObj&&this.$urlQueryObj.group_order_id&&($.groupOrderId=this.$urlQueryObj.group_order_id),!t.isVirtualGoods&&$.addressId||t.isVirtualGoods&&Number(t.goodsType)===h.default.GoodsType.VIDEO_MEMBER&&!t.needAccount||t.isVirtualGoods&&$.phoneNumber?(this.payBtnFlag=!0,this.$dispatch(n.updateOrderVo({isPaying:!0})),this.payHandler&&(this.payHandler(),this.payHandler=null),-1!==l.selectedAppId&&s.StorageUtil.setStorageSync(p.default.LAST_PAY_APP_ID,l.selectedAppId),this.payHandler=i.Message.on(i.KEYS.ORDER_CHECKOUT_PAY,s.Util.bind(this.processPay,this)),this.msgId?f.default.createTransacOrder($,i.KEYS.ORDER_CHECKOUT_PAY):f.default.createOrder($,i.KEYS.ORDER_CHECKOUT_PAY)):t.isVirtualGoods||$.addressId?t.isVirtualGoods&&!$.phoneNumber&&this.$dispatch((0,d.showToast)("请填写正确的账号")):this.$dispatch((0,d.showToast)("请填写收货地址")),this.createOrderParams=$}},merchantPlatformCoupons:function(e,t){var o=!1,r=!1,s=!1,i=a({},t);if(e){if(e.merchantCouponVo&&e.merchantCouponVo.promotionStatus&&1===Number(e.merchantCouponVo.promotionStatus)){var n=void 0;if(e.merchantCouponVo.couponId){i.mallCouponId=e.merchantCouponVo.couponId;var d=this.$getValue("orderCheckoutNew.couponsWinData")||{};d.mallCoupons&&d.mallCoupons.enableCoupons&&d.mallCoupons.enableCoupons.forEach(function(e){Number(e.couponId)===Number(i.mallCouponId)&&(n=e.sourceType)})}e.merchantCouponVo.eventId>0&&(i.eventId=e.merchantCouponVo.eventId),92===Number(n)||217===Number(n)?r=!0:o=!0}e.platformCouponVo&&e.platformCouponVo.promotionStatus&&1===Number(e.platformCouponVo.promotionStatus)&&(s=!0,e.platformCouponVo.couponId&&(i.platformCouponId=e.platformCouponVo.couponId),e.platformCouponVo.superpositionCouponNumber>0&&(i.couponNumber=e.platformCouponVo.superpositionCouponNumber)),r&&s?i.couponType=4:o&&s?i.couponType=3:s?i.couponType=2:o?i.couponType=1:r&&(i.couponType=0)}return i},repay:function(){if(this.orderSn){this.payBtnFlag=!0,this.$dispatch(n.updateOrderVo({isPaying:!0}));var e={orderSn:this.orderSn,groupOrderId:this.groupOrderId},t=this.$getValue("orderCheckoutNew.payVo");t&&t.attrMap&&s.DataUtil.isObject(t.attrMap)&&(e.attrMap=t.attrMap),f.default.doPay(e,i.KEYS.ORDER_CHECKOUT_PAY)}},processPay:function(e){if(this.payBtnFlag=!1,e&&e.orderSn&&(this.orderSn=e.orderSn,this.groupOrderId=e.groupOrderId),e.errorCode){this.$hideLoading();var t=e.errorMsg;if(g.default.isCancelPay(t))this.dealCancelPay();else switch(this.$dispatch(n.updateOrderVo({isPaying:!1})),parseInt(e.errorCode,10)){case 42007:this.groupFullAutoPrepay(e);break;case 42006:case 47014:this.payFailToGoods(t);break;case 46014:case 152006:this.limitQuantityDiscountOut(t);break;case 41003:this.goodsSellOut(t);break;case 45516:this.hasActivityOn(t);break;case 44001:this.hasUsedCoupon(t);break;default:this.payErrorDefault(t)}}else if(this.$dispatch(n.updateOrderVo({isPaying:!1})),e.orderSn){if(-1===(this.$getValue("orderCheckoutNew.payVo")||{}).selectedAppId)return void this.dealToHelpPay();m.default.hasPaySucess=!0,this.paySuccess(e),this.$hideLoading()}},dealToHelpPay:function(){this.goToHelpPay=!0;var e={order_sn:this.orderSn};this.$urlQueryObj.group_order_id&&(e.group_order_id=this.$urlQueryObj.group_order_id),this.$forward("help_pay",e)},dealCancelPay:function(){this.$dispatch(n.setActionDisable({actionDisable:!0})),this.$dispatch(n.updateOrderVo({isPaying:!1,cancelPay:!0})),this.showFriendPayModal()},showFriendPayModal:function(){var e=this,t=this.$getValue("orderCheckoutNew.newFriendPayConfig");if(!this.hasPopFriendPay&&("1"===String(m.default.pddUserType)||"2"===String(m.default.pddUserType))&&t){var o=(this.$getValue("orderCheckoutNew.payVo")||{}).payChannelList;if(o&&2===o.length)return this.hasPopFriendPay=!0,this.$showModal({content:"支付遇到问题时，试试发送给好友帮你代付吧",contentAlign:"center",contentColor:"#000",cancelText:"取消",confirmText:"找好友代付",reportFormId:!0,success:function(t){t.confirm?(e.dealToHelpPay(),u.default.friendPayModalConfirm(e)):t.cancel&&(e.setCountDownTime(!0),e.dealPayWindow(!0),u.default.friendPayModalCancel(e))}}),void u.default.friendPayModalImpr(this)}this.setCountDownTime(!0),this.dealPayWindow(!0)},setCountDownTime:function(e){var t=!1,o=this.$getValue("orderCheckoutNew.countTimeData"),a=o.payExpire,r=o.setPayExpire;if(e||r){var i={};e&&(i.setPayExpire=e),a&&a>0?(i.payExpireTransfered=s.TimeUtil.transferToTime(1e3*a,{needObj:!0}),t=!0):i.orderTimeTitle="请尽快支付",this.$dispatch(n.setCountDownTime(i)),t&&this.setIntervalFun()}},setIntervalFun:function(){var e=this;this.intervalInfo||(this.intervalInfo=setInterval(function(){var t={},o=!1,a=e.$getValue("orderCheckoutNew.countTimeData"),r=a.payExpire;--r>0?(t.payExpireTransfered=s.TimeUtil.transferToTime(1e3*r,{needObj:!0}),t.refreshCountDown=!a.refreshCountDown,o=!0):t.orderTimeTitle="请尽快支付",t.payExpire=r,o||(clearInterval(e.intervalInfo),e.intervalInfo=null),e.$dispatch(n.setCountDownTime(t))},1e3))},dealPayWindow:function(e){var t=this;e?(this.$dispatch(n.setPayWinData({showPayWindow:e})),setTimeout(function(){t.$dispatch(n.setPayWinData({showPayContainer:e}))},200)):(this.$dispatch(n.setPayWinData({showPayContainer:e})),setTimeout(function(){t.$dispatch(n.setPayWinData({showPayWindow:e}))},200)),e&&u.default.showPayWinImpr(this)},payBarPay:function(e){var t=s.DataUtil.getLogId();this.pay(t),e&&e.detail&&this.$uploadFormId(e.detail,!1);var o={log_id:t};u.default.payBarClick(this,o)},closePayWindow:function(){this.dealPayWindow(!1),u.default.closePayWinClick(this)},payWinEditAddress:function(){this.editAddress(),u.default.payWinAddrClick(this)},payWinPay:function(e){this.pay(),e&&e.detail&&this.$uploadFormId(e.detail,!0),u.default.payWinPayClick(this)},groupFullAutoPrepay:function(e){var t={orderSn:e.orderSn},o=this.$getValue("orderCheckoutNew.payVo");o&&o.attrMap&&s.DataUtil.isObject(o.attrMap)&&(t.attrMap=o.attrMap),C.default.createGroup(e.orderSn,function(){f.default.groupFullAutoPrepay(t,i.KEYS.ORDER_CHECKOUT_PAY)},function(){})},payFailToGoods:function(e){var t=this;m.default.hasPaySucess=!0,this.$dispatch((0,d.showToast)(e,{hideToastFunc:function(){var e=t.$urlQueryObj.goods_id;e&&("goods_detail"===t.$referPageName?t.$back():t.$redirect("goods",{goods_id:e}))}}))},limitQuantityDiscountOut:function(e){var t=this;this.$showModal({content:e,showCancel:!1,contentAlign:"center",success:function(e){if(e.confirm){var o=t.$urlQueryObj.goods_id;o&&t.$redirect("goods",{goods_id:o})}}})},goodsSellOut:function(e){var t=this,o=this.$getValue("orderCheckoutNew.goodsVo")||{};this.$showModal({content:e,showCancel:!1,confirmText:"确定",contentAlign:"center",success:function(){s.Util.toWeb({page_name:"per_similar_rec",goodsId:o.goodsId},t)}})},hasActivityOn:function(e){var t=this;this.$dispatch((0,d.showToast)(e,{hideToastFunc:function(){t.reLoad()}}))},hasUsedCoupon:function(e){var t=this;this.$dispatch((0,d.showToast)(e,{hideToastFunc:function(){t.loadRefresh({clearCouponParams:!0})}}))},payErrorDefault:function(e){var t=this;e?this.$dispatch((0,d.showToast)(e,{hideToastFunc:function(){!t.$getValue("orderCheckoutNew.orderVo").cancelPay&&t.orderSn&&t.$redirect("order",{ordersn:t.orderSn})}})):this.orderSn&&this.$redirect("order",{ordersn:this.orderSn})},paySuccess:function(e){var t=e.groupOrderId,o=this.createOrderParams;if(t){m.default.lastGroupOrderId=t,m.default.lastOrderGoodsId=this.$urlQueryObj.goods_id,m.default.lastPayGoodsId="";var a={group_order_id:t,from:"pay_success"};this.$urlQueryObj.from_custom_service_mall_id&&(a.from_custom_service_mall_id=this.$urlQueryObj.from_custom_service_mall_id),this.$urlQueryObj.biz_tag&&(a.biz_tag=this.$urlQueryObj.biz_tag),this.$redirect("group",a)}u.default.payOrder(this,e,o)},selectPayType:function(e){e&&e.detail&&e.detail.selectedAppId&&this.$dispatch(n.updatePayAppId(e.detail.selectedAppId))},updateServiceVo:function(e){e&&e.detail&&e.detail.updateData&&this.$dispatch(n.updateServiceVo(e.detail.updateData))},selStepProtocal:function(e){if(e&&e.detail&&e.detail.protocolSelected){var t=!("1"===String(e.detail.protocolSelected));this.$dispatch(n.updateStepVo({stepProtocolSelected:t})),u.default.selStepClick(this)}},clickMallCouponBar:function(){var e=this;this.$getValue("orderCheckoutNew.actionDisable")?this.$dispatch((0,d.showToast)("订单已生成，信息不可更改")):this.$dispatch(n.queryUsablePromotion(this)).then(function(){var t=e.$getValue("orderCheckoutNew.mallCouponsListData"),o=e.$getValue("orderCheckoutNew.promotionEventVo"),a=e.$getValue("orderCheckoutNew.mallCoupons")||{},r=e.$getValue("orderCheckoutNew.goodsVo")||{},s=t.reiMallCoupons,i=!1;(s&&s.length>0||o&&o.itemList&&o.itemList.length>0)&&(i=!0);var n=!1;if((a.enableCoupons&&a.enableCoupons.length||o&&o.itemList&&o.itemList.length>0&&r.goodsNumber>=o.itemList[0].goods_number)&&(n=!0),n){var d={promotionEventVo:o,mallCoupons:a,platformCoupons:{},type:0};e.showCouponsWin(d)}else i&&e.showMallCouponsList();u.default.mallCouponsClick(e)})},showCouponsWin:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=a({showCouponsWin:!0,showCouponsWinBg:!0},t);this.$dispatch(n.setCouponsWinData(o)),o={mainClass:"mall-coupons-main mall-coupons-main-up"},setTimeout(function(){e.$dispatch(n.setCouponsWinData(o))},100)},hideCouponsWin:function(){var e=this,t={mainClass:"mall-coupons-main mall-coupons-main-down",showCouponsWinBg:!1};this.$dispatch(n.setCouponsWinData(t)),t={showCouponsWin:!1},setTimeout(function(){e.$dispatch(n.setCouponsWinData(t))},300)},showColCouponModal:function(e){this.collectionCoupon.showColCouponModal(e)},showPlatformCouponList:function(){var e=this;this.$getValue("orderCheckoutNew.actionDisable")?this.$dispatch((0,d.showToast)("订单已生成，信息不可更改")):this.$dispatch(n.queryPlatformCoupons(this)).then(function(){var t={platformCoupons:e.$getValue("orderCheckoutNew.platformCoupons"),mallCoupons:{},promotionEventVo:{},type:1};e.showCouponsWin(t),u.default.platformCouponsClick(e)})},loadMorePlatCoupons:function(){var e=this,t=this.$getValue("orderCheckoutNew.platformCoupons")||{};t.usePriority&&this.$dispatch(n.queryPlatformCoupons(this,{usePriority:t.usePriority})).then(function(){var o={platformCoupons:t=e.$getValue("orderCheckoutNew.platformCoupons"),mallCoupons:{},promotionEventVo:{},type:1};e.showCouponsWin(o)})},showMallCouponsList:function(){var e=this;this.hideCouponsWin();var t={mallCouponsListData:{showMallCouponsList:!0,couponsBgMaskShow:!0}};this.$dispatch(n.setCouponsListData(t)),t={mallCouponsListData:{mallMainClass:"mall-coupons-main mall-coupons-main-up"}},setTimeout(function(){e.$dispatch(n.setCouponsListData(t))},100),u.default.reiMallCouponImpr(this)},hideMallCouponsList:function(){var e=this,t={mallCouponsListData:{mallMainClass:"mall-coupons-main mall-coupons-main-down",couponsBgMaskShow:!1}};this.$dispatch(n.setCouponsListData(t)),t={mallCouponsListData:{showMallCouponsList:!1}},setTimeout(function(){e.$dispatch(n.setCouponsListData(t))},300),this.takeMerchantCouponSuccess&&(this.takeMerchantCouponSuccess=!1,this.loadRefresh({clearCouponParams:!0}))},takeMerchantCoupon:function(e){var t=this;if(e&&e.detail&&e.detail.res){var o=e.detail,a=o.res,r=o.batchId,s=o.mallId,i=o.isGoodsBatch,d=this.$getValue("orderCheckoutNew.mallCouponsListData"),u=$.default.processTransacTakeCoupon(a,r,s,i,d);this.$dispatch(n.setCouponsListData(u)),u&&u.mallCouponToastData&&u.mallCouponToastData.toastVisible&&setTimeout(function(){var e={mallCouponToastData:{toastVisible:!1}};t.$dispatch(n.setCouponsListData(e))},1500),u&&u.needConfirmRefresh&&(this.takeMerchantCouponSuccess=!0)}},showColCoupon:function(e){u.default.showColCoupon(this,e)},doLikeMall:function(e){u.default.doLikeMall(this,e)},getColCoupon:function(e){u.default.getColCoupon(this,e)},closeColCoupon:function(e){u.default.closeColCoupon(this,e)},showNameAuthWinClick:function(){u.default.showNameAuthWinClick(this)},selCellBar:function(e){e&&e.detail&&this.$dispatch(n.updateCellBarVo(e.detail))},inputPhoneNumber:function(){},bindNameChange:function(){},bindMobileChange:function(){},bindAddressChange:function(){},onNavBack:function(){var e=this;if(u.default.onNavBackClick(this),this.hasPopFriendPay)return m.default.hasPaySucess=!0,void this.$back();var t=this.$getValue("orderCheckoutNew.goodsVo")||{};this.$showModal({title:"确定要放弃付款吗？",content:22!==Number(t.eventType)||"1"!==String(m.default.pddUserType)&&"2"!==String(m.default.pddUserType)?"你尚未完成支付，喜欢的商品可能会被抢空哦~":"新人福利24小时内有效，优惠仅1次，别错过哦",cancelText:"暂时放弃",confirmText:"继续支付",reportFormId:!0,success:function(t){t.confirm?(m.default.hasPaySucess=!0,u.default.onNavBackConfirm(e)):t.cancel&&(m.default.hasPaySucess=!0,u.default.onNavBackCancel(e),e.$back())}}),u.default.onNavBackImpr(this)},setVirtualGoodsData:function(e){e&&e.detail&&e.detail.updateData&&this.$dispatch(n.setVirtualGoodsData(e.detail.updateData))},onShow:function(){var e=this;if(this.goToHelpPay)return m.default.hasPaySucess=!0,wx.navigateBack(),void(this.goToHelpPay=!1);m.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||u.default.pvTracking(this,!0),this.customNavitionBar=this.selectComponent("#customNavitionBar");var t=this.customNavitionBar.getCustomNavData()||{},o=getCurrentPages(),a=o[o.length-1].__route__;a+="?"+s.UrlUtil.buildQuery(this.$urlQueryObj),this.$dispatch(v.initBubble(!0,a)).then(function(){t.isSupportCustomNav&&t.navTop?e.$dispatch(v.setBubbleTop(80+t.navTop+"px")):e.$dispatch(v.setBubbleTop("80px"))}),this.$dispatch(n.initNavBubble(t)),this.setCountDownTime()},onHide:function(){this.$dispatch(v.closeBubble),this.clearTimer()},onUnload:function(){this.$urlQueryObj.order_message||(m.default.isLastPagePayPage=!0),m.default.useOrderCheckoutNew=!0,m.default.showUnpaidOrderDialog=!0,this.unregisterDispatchCallback(),this.$dispatch(v.closeBubble),this.$urlQueryObj.isHideUnpaidOrderDialog&&(m.default.showUnpaidOrderDialog=!1),this.clearTimer(),s.Util.empty(this)},clearTimer:function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)},unregisterDispatchCallback:function(){i.Message.off(i.KEYS.ORDER_CHECKOUT_PAY)},$injectReducer:function(){return{namespace:"orderCheckoutNew",reducer:require("./order_checkout_new.reducer").default}}};(0,s.PddPage)(w,{pageName:"order_checkout_new",pageSn:10004,notUseCommonPV:!0,needObserveRender:!0}); 
 			}); 	require("package_c/order_checkout_new/order_checkout_new.js");
 		__wxRoute = 'package_c/order_checkout_step/order_checkout_step';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/order_checkout_step/order_checkout_step.js';	define("package_c/order_checkout_step/order_checkout_step.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return o&&o.__esModule?o:{default:o}}function e(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function t(o){return function(){var e=o.apply(this,arguments);return new Promise(function(o,t){function a(n,r){try{var i=e[n](r),s=i.value}catch(o){return void t(o)}if(!i.done)return Promise.resolve(s).then(function(o){a("next",o)},function(o){a("throw",o)});o(s)}return a("next")})}}var a=o(require("../../controller/order_checkout")),n=o(require("../components/order_checkout_goods/order_checkout_goods")),r=o(require("../components/order_checkout_mall_coupons/order_checkout_mall_coupons")),i=o(require("../../components/help_pay/help_pay")),s=o(require("../components/order_checkout_coupons/order_checkout_coupons")),p=o(require("../components/order_checkout_picc/order_checkout_picc")),u=o(require("../../constants/groups")),c=o(require("../../constants/payment")),d=o(require("../../libs/regenerator-runtime/runtime")),l=o(require("../../storage/ram_manager")),h=require("../../common/message"),m=require("../../common/index"),f=o(require("../../constants/storage_keys")),g=o(require("../components/order_checkout_data_format")),y=o(require("../../controller/config_controller")),C=o(require("../../common/logger")),_=require("../../actions/common"),v={getGroupOrderDetail:"10045",confirmRenderStep:"10549"};(0,m.PddPage)({expireTimeMini:0,expireTime:[],payHandler:null,data:{showError:!1,payText:"立即支付",disableUserAction:!1,showPayWindow:!1,showPayContainer:!1,mallCouponsListData:{showMallCouponsList:!1,couponsBgMaskShow:!1,mallMainClass:"mall-coupons-main mall-coupons-main-down"},myMallCouponsData:{showCouponsList:!1,myMallCouponsBgMaskShow:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},myPlatformCouponsData:{showCouponsList:!1,couponsBgMaskShow:!1,mainClass:"mall-coupons-main mall-coupons-main-down"},orderCheckoutGoodsData:{disableUserAction:!1},showCouponLoadMore:!1,isIpx:m.SystemInfo.getIpxJudgment()},$partialStore:{toast:[{display:"displayToast"},"toastMessage"]},defaultClick:function(){},onLoad:function(){var o=this;this.loadPage(),this.pvTracking(),this.orderCheckoutPiccModule||(this.orderCheckoutPiccModule=new p.default({setDataFunc:function(e){o.setData(e)},addRootFunc:m.Util.bind(this.componentsAddRootFunc,this)}))},loadPage:function(){this.confirmRenderStep()},confirmRenderStep:function(){var o=this;return t(d.default.mark(function e(){var t,a,n,r,i;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o.$showLoading(),t=o,t.payBtnFlag=!0,e.prev=3,a={front_env:8,front_version:3,order_sn:t.$urlQueryObj.order_sn},t.lastPayAppId=m.StorageUtil.getStorageSync(f.default.LAST_PAY_APP_ID),t.lastPayAppId&&(a.last_pay_app_id=t.lastPayAppId),t.reqStepParams=a,n=m.Request.requestDataWithCmd(v.confirmRenderStep,{params:a}),e.next=11,m.Request.runMainRequestForPage(n,t);case 11:return r=e.sent,e.next=14,y.default.getConfig("pap_pay");case 14:i=e.sent,t.processConfirmRenderStep(r,i),t.$hideLoading(),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),t.showError(),t.payBtnFlag=!1,C.default.sendDeadlyError({bussiness_type:"interface",action:"get_render",url_path:"api/morgan/confirm/render/step",error_code:e.t0.error_code,error_msg:e.t0.error_msg});case 24:case"end":return e.stop()}},e,o,[[3,19]])}))()},processConfirmRenderStep:function(o,e){var t=this,a=g.default.formatRenderData(o);this.confirmRenderData=a,this.payVo=a.payVo||{},e&&this.payVo&&(this.payVo.payChannelList||[]).forEach(function(o){54===Number(o.appId)&&o.signed&&(t.papPaySigned=!0)}),a.promotionVo.merchantCouponVo.displayName&&(this.OrderCheckoutMallCouponModule||(this.OrderCheckoutMallCouponModule=new r.default({setDataFunc:function(o){t.setData(o)},addRootFunc:m.Util.bind(this.componentsAddRootFunc,this),confirmRefreshFunc:this.confirmRefresh,getTrackingParamsFunc:this.generateTrackingParams,confirmRenderData:a}))),this.loadCoupons();var n={showPage:!0,couponTitle:"平台优惠",usePapPay:e};if(m.ObjectUtil.assign(n,a),!this.HelpPayModule){var s=this;this.HelpPayModule=new i.default({setDataFunc:function(o){s.setData(o)},addRootFunc:m.Util.bind(this.componentsAddRootFunc,this)})}n.selectedAppId=this.HelpPayModule.setupPayType(),this.setData(n),this.payBtnFlag=!1,a.confirmMessage&&this.$dispatch((0,_.showToast)(a.confirmMessage)),this.setupOrderCheckoutGoodsModule();var p=this.generateTrackingParams("impr","main",null,"206185");(0,m.TrackingRecord)(p);var u=this.generateTrackingParams("impr","bottom_area",null,"206187");(0,m.TrackingRecord)(u)},confirmRefresh:function(){var o=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(d.default.mark(function t(){var a,n,r,i;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.$showLoading(),a=o,a.payBtnFlag=!0,t.prev=3,n=a.reqStepParams,e.promotionVoParams&&(n.promotion_vo=e.promotionVoParams),e.clearCouponParams&&delete n.promotion_vo,r=m.Request.requestDataWithCmd(v.confirmRenderStep,{params:n}),t.next=10,m.Request.runMainRequestForPage(r,a);case 10:i=t.sent,a.processConfirmRefresh(i),a.$hideLoading(),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(3),a.setData({showReqError:!0}),a.$hideLoading(),a.payBtnFlag=!1,C.default.sendDeadlyError({bussiness_type:"interface",action:"refresh_order",url_path:"api/morgan/confirm/render/step",error_code:t.t0.error_code,error_msg:t.t0.error_msg});case 21:case"end":return t.stop()}},t,o,[[3,15]])}))()},processConfirmRefresh:function(o){var e=g.default.formatRenderData(o);this.confirmRenderData.promotionEventVo&&(e.promotionEventVo=this.confirmRenderData.promotionEventVo),this.confirmRenderData.payVo&&(e.payVo=this.confirmRenderData.payVo),this.confirmRenderData=e,this.setData(e),this.loadCoupons(),this.payBtnFlag=!1},setupOrderCheckoutGoodsModule:function(){this.confirmRenderData&&(this.orderCheckoutGoodsModule||(this.orderCheckoutGoodsModule=new n.default),this.orderCheckoutGoodsModule.load(this.confirmRenderData,{setDataFunc:this.componentsSetDataFuncs().orderCheckoutGoods,getDataFunc:this.componentsGetDataFuncs().orderCheckoutGoods,addRootFunc:m.Util.bind(this.componentsAddRootFunc,this),showMallCouponsList:m.Util.bind(this.showMallCouponsList,this),selectMallCoupon:m.Util.bind(this.selectMallCoupon,this)}))},componentsSetDataFuncs:function(){var o=this;return{orderCheckoutGoods:function(e){var t={};Object.keys(e).forEach(function(o){"coupons"!==o&&(t[o]=e[o])}),e.coupons&&(t["mallCouponsListData.coupons"]=e.coupons),o.setData(t)}}},componentsGetDataFuncs:function(){var o=this;return{orderCheckoutGoods:function(){return o.data.orderCheckoutGoodsData}}},componentsAddRootFunc:function(o,e){o&&"function"==typeof e&&(this[o]=e)},showMallCouponsList:function(){this.hideCouponsList(),this.setData({"mallCouponsListData.showMallCouponsList":!0,"mallCouponsListData.couponsBgMaskShow":!0}),this.setData({"mallCouponsListData.mallMainClass":"mall-coupons-main mall-coupons-main-up"})},selectMallCoupon:function(){this.setCouponListWindowData("myMallCouponsData",null,(this.data.couponInfos||{}).mallCoupons||{},!0)},setCouponListWindowData:function(o,t,a,n){var r,i=this,s=a.enableCoupons||[],p=a.disableCoupons||[],u=a.enableSuperpositionCoupons||{},c=(r={},e(r,o+".title",t),e(r,o+".isMallCoupon",!!n),e(r,o+".enableCoupons",s),e(r,o+".enableSuperpositionCoupons",u),e(r,o+".disableCoupons",p),e(r,o+".hasCoupons",s.length>0||p.length>0||this.data.hasSuperpositionCoupons||!1),e(r,o+".showCouponsList",!0),r);"myMallCouponsData"===o?c[o+".myMallCouponsBgMaskShow"]=!0:c[o+".couponsBgMaskShow"]=!0,this.setData(c),setTimeout(function(){i.setData(e({},o+".mainClass","mall-coupons-main mall-coupons-main-up"))},10)},loadCoupons:function(){if(!this.OrderCheckoutCouponModule){var o=this;this.OrderCheckoutCouponModule=new s.default({isOrderCheckoutStep:!0,setDataFunc:function(e){o.setData(e)},addRootFunc:m.Util.bind(this.componentsAddRootFunc,this),getTrackingParamsFunc:this.generateTrackingParams})}this.OrderCheckoutCouponModule.loadCoupons()},hideMallCouponsList:function(){var o=this;this.setData({"mallCouponsListData.mallMainClass":"mall-coupons-main mall-coupons-main-down","mallCouponsListData.couponsBgMaskShow":!1}),setTimeout(function(){o.setData({"mallCouponsListData.showMallCouponsList":!1})},300)},hideCouponsList:function(){var o=this,e=this.data.couponInfos||{},t=e.platformCoupons&&e.platformCoupons.enableSuperpositionCoupons?e.platformCoupons.enableSuperpositionCoupons:{};t.showSuperEditBtn&&(t.showSuperEditBtn=!1,e.platformCoupons.enableSuperpositionCoupons=t),this.setData({"myMallCouponsData.mainClass":"mall-coupons-main mall-coupons-main-down","myPlatformCouponsData.mainClass":"mall-coupons-main mall-coupons-main-down","myMallCouponsData.myMallCouponsBgMaskShow":!1,"myPlatformCouponsData.couponsBgMaskShow":!1,couponInfos:e}),setTimeout(function(){o.setData({"myMallCouponsData.showCouponsList":!1,"myPlatformCouponsData.showCouponsList":!1})},300)},onShow:function(){if(this.countExpireInterval||this.countDownTimeSpike(),this.goToHelpPay)return wx.navigateBack(),void(this.goToHelpPay=!1);l.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||this.pvTracking(!0)},onHide:function(){this.clearTimer()},onUnload:function(){this.unregisterDispatchCallback(),this.payHandler&&(this.payHandler(),this.payHandler=null),this.clearTimer(),m.Util.empty(this)},unregisterDispatchCallback:function(){h.Message.off(h.KEYS.ORDER_CHECKOUT_PAY)},clearTimer:function(){this.couponExp&&(clearInterval(this.couponExp),this.couponExp=null),this.countExpireInterval&&(clearInterval(this.countExpireInterval),this.countExpireInterval=null)},reLoad:function(){this.clearTimer(),this.setData({showError:!1}),this.loadPage()},showError:function(){this.$dispatch((0,_.showToast)("NO_NETWORK_MSG")),this.$hideLoading(),this.setData({showError:!0})},pvTracking:function(){var o=this.getCommonTrackingParams();o.op="pv",o.order_sn=this.$urlQueryObj.order_sn,o.page_url="package_c/order_checkout_step/order_checkout_step",(0,m.TrackingRecord)(o),this.$firstTimeTrackRecord.pv=!0},pay:function(o){if(!this.payBtnFlag)if(this.confirmRenderData.confirmMessage&&this.confirmRenderData.confirmCode>0)this.$dispatch((0,_.showToast)(this.confirmRenderData.confirmMessage));else{if(o&&o.detail&&o.detail.target&&o.detail.target.dataset&&"cancel_pay_prompt"===o.detail.target.dataset.refer){var e=this.generateTrackingParams("click","unpaid_popup","paying_btn","206192");(0,m.TrackingRecord)(e),this.$uploadFormId(o,!0)}else this.$uploadFormId(o,!1);if(this.cancelPay){if(-1===this.data.selectedAppId&&this.orderSn)return void this.dealToHelpPay();if(this.orderSn){this.payBtnFlag=!0,this.setBottomBarPayText(!0);var t={orderSn:this.orderSn,isFinalPay:!0};this.payVo&&this.payVo.attrMap&&m.DataUtil.isObject(this.payVo.attrMap)&&(t.attrMap=this.payVo.attrMap),a.default.doPay(t,h.KEYS.ORDER_CHECKOUT_PAY)}}else{var n=this.confirmRenderData.promotionVo||{},r=this.confirmRenderData.orderVo||{},i=m.DataUtil.getLogId(),s=this.confirmRenderData.stepGoodsVo||{},p={orderSn:this.$urlQueryObj.order_sn,logId:i,payAppId:this.data.selectedAppId,orderAmount:r.payPrice,goodsId:s.goodsId,goodsType:s.goodsType,eventType:s.eventType,groupId:s.groupId,goodsNumber:s.goodsNumber,groupNum:s.groupNum,skuId:s.skuId,isAutoGroup:!1,papPaySigned:this.papPaySigned};this.payVo&&this.payVo.attrMap&&m.DataUtil.isObject(this.payVo.attrMap)&&(p.attrMap=this.payVo.attrMap),1===parseInt((n.merchantCouponVo||{}).promotionStatus,10)&&(n.merchantCouponVo||{}).couponId&&(p.mallCouponId=(n.merchantCouponVo||{}).couponId),this.confirmRenderData.stepGoodsVo&&this.confirmRenderData.stepGoodsVo.activityType&&(p.activityType=this.confirmRenderData.stepGoodsVo.activityType),1===parseInt((n.platformCouponVo||{}).promotionStatus,10)&&(n.platformCouponVo||{}).couponId&&(p.platformCouponId=(n.platformCouponVo||{}).couponId),1===parseInt((n.platformCouponVo||{}).promotionStatus,10)&&(n.platformCouponVo||{}).superpositionCouponNumber>0&&(p.couponNumber=(n.platformCouponVo||{}).superpositionCouponNumber),this.confirmRenderData.promotionVo&&this.confirmRenderData.promotionVo.depositCouponVo&&this.confirmRenderData.promotionVo.depositCouponVo.eventId&&(p.eventId=this.confirmRenderData.promotionVo.depositCouponVo.eventId),this.setBottomBarPayText(!0),this.payBtnFlag=!0,this.payHandler&&(this.payHandler(),this.payHandler=null),-1!==this.data.selectedAppId&&m.StorageUtil.setStorageSync(f.default.LAST_PAY_APP_ID,this.data.selectedAppId),this.payHandler=h.Message.on(h.KEYS.ORDER_CHECKOUT_PAY,m.Util.bind(this.processPay,this)),a.default.createStepOrder(p,h.KEYS.ORDER_CHECKOUT_PAY);var u=this.generateTrackingParams("click","bottom_area","pay_btn","206187");u.is_pap_pay=this.papPaySigned?"1":"0",(0,m.TrackingRecord)(u)}}},payBarPay:function(o){this.pay(o)},payWinPay:function(o){this.pay(o)},processPay:function(o){if(this.payBtnFlag=!1,o&&o.orderSn&&(this.orderSn=o.orderSn),this.setBottomBarPayText(),o.errorCode){var e=o.errorMsg;if(c.default.isCancelPay(e)){e=null,this.cancelPay=!0,this.setUserActionDisabled(),this.setBottomBarPayText(),this.dealPayWindow(!0);var t=!1;if(this.expireTime.forEach(function(o){"orderTime"===o.name&&(t=!0)}),!t){var a={name:"orderTime",value:1800};this.expireTime.push(a),this.countExpireInterval||this.countDownTimeSpike()}}else if(e){var n=this;this.$dispatch((0,_.showToast)("好友红包帮拆成功",{hideToastFunc:function(){if(!n.cancelPay&&n.orderSn){var o="/package_e/order/order?ordersn="+n.orderSn;m.Navigation.redirectForward(o)}}}));var r=this.generateTrackingParams("impr","error_tips",null,"206195");(0,m.TrackingRecord)(r)}else{var i="/package_e/order/order?ordersn="+this.orderSn;m.Navigation.redirectForward(i)}}else if(o.orderSn){if(-1===this.data.selectedAppId)return void this.dealToHelpPay();l.default.hasPaySucess=!0,this.paySuccess(o),this.$hideLoading()}},paySuccess:function(o){var e=this.confirmRenderData.stepGoodsVo||{},t=this.confirmRenderData.orderVo||{},a={op:"event",sub_op:"pay_order",page_name:"order_tail",page_sn:"11928",order_sn:o.orderSn,order_amount:parseInt(t.payPrice,10)>0?parseInt(t.payPrice,10):0,goods_id:e.goodsId,goods_type:e.goodsType,event_type:e.eventType,goods_number:e.goodsNumber,group_id:e.groupId,sku_id:e.skuId,mall_id:e.mallId,friend_pay:-1===this.data.selectedAppId,is_pap_pay:this.isPapPay?1:0,group_status:1};l.default.wxappId&&(a.refer_wxapp_id=l.default.wxappId),e.activityType&&(a.activity_type=e.activityType),(0,m.TrackingRecord)(a);var n="/package_e/order/order?ordersn="+o.orderSn;m.Navigation.redirectForward(n)},dealToHelpPay:function(){this.goToHelpPay=!0;var o={order_sn:this.orderSn};this.$urlQueryObj.group_order_id&&(o.group_order_id=this.$urlQueryObj.group_order_id),this.$forward("help_pay",o)},setUserActionDisabled:function(){this.setData({disableUserAction:!0,"orderCheckoutGoodsData.disableUserAction":!0})},closePayWindow:function(o){this.setData({showPayWindow:!1}),this.dealPayWindow(!1);var e=this.generateTrackingParams("click","unpaid_popup","give_up_btn","206193");(0,m.TrackingRecord)(e),this.$uploadFormId(o,!0)},dealPayWindow:function(o){var e=this;if(o){if(!e.data.showPayWindow){var t=this.generateTrackingParams("impr","unpaid_popup",null,"206193");(0,m.TrackingRecord)(t);var a=this.generateTrackingParams("impr","unpaid_popup",null,"206192");(0,m.TrackingRecord)(a)}e.setData({showPayWindow:o}),setTimeout(function(){e.setData({showPayContainer:o})},200)}else e.setData({showPayContainer:o}),setTimeout(function(){e.setData({showPayWindow:o})},200)},setBottomBarPayText:function(o){var e=(this.confirmRenderData.orderVo||{}).payPrice;if(o){if(-1===this.data.selectedAppId)return void this.setData({payText:"创建订单中",subPayText:"请稍候"});0===Number(e)&&this.data.showFreeCoupon?this.setData({payText:"正在拼单",subPayText:""}):this.setData({payText:"正在支付",subPayText:"请稍候"})}else{var t="立即支付";0===Number(e)&&this.data.showFreeCoupon&&(t="免费拼单"),this.cancelPay&&(t="继续支付"),this.data.stepGoodsVo.eventType===u.default.EventType.FREE_TRIAL&&(t="申请试用"),this.setData({payText:t,subPayText:""})}},clearIntervalFun:function(){var o=!0;this.expireTime.forEach(function(e){e.value>0&&(o=!1)}),o&&(clearInterval(this.countExpireInterval),this.countExpireInterval=null)},expireSpike:function(o){var e=this,t=o.name,a=t+"List",n=t+"Mini";if(o.value>=0){var r=m.TimeUtil.transferToTime(1e3*o.value).split(":"),i={};i[a]=r,0===o.value.toFixed(1)?(i[n]=0,"orderTime"===o.name&&(i.orderTimeTitle="请尽快支付"),e.clearIntervalFun()):i[n]=e.expireTimeMini,e.setData(i)}else e.clearIntervalFun()},countDownTimeSpike:function(){var o=this;if(this.expireTime.length>0){this.expireTime.forEach(function(e){e&&e.value>=0&&o.expireSpike(e)});var e=this;e.countExpireInterval=setInterval(function(){var o=0;e.expireTime.forEach(function(t){t.value-=.1,e.expireTime[o].value=t.value,0===e.expireTimeMini&&(e.expireTimeMini=10),e.expireTimeMini--,e.expireSpike(t),o++})},100)}},onPullDownRefresh:function(){this.loadPage()},generateTrackingParams:function(o,e,t,a){var n=this.getCommonTrackingParams();return o&&(n.op=o),e&&(n.page_section=e),t&&(n.page_element=t),a&&(n.page_el_sn=a),n},getCommonTrackingParams:function(){return{page_name:"order_tail",page_sn:"11928"}},preventMove:function(){}},{pageName:"order_tail",pageSn:11928,notUseCommonPV:!0}); 
 			}); 	require("package_c/order_checkout_step/order_checkout_step.js");
 		__wxRoute = 'package_c/transac_batch_checkout/transac_batch_checkout';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package_c/transac_batch_checkout/transac_batch_checkout.js';	define("package_c/transac_batch_checkout/transac_batch_checkout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function a(t){return function(){var a=t.apply(this,arguments);return new Promise(function(t,e){function o(s,n){try{var i=a[s](n),r=i.value}catch(t){return void e(t)}if(!i.done)return Promise.resolve(r).then(function(t){o("next",t)},function(t){o("throw",t)});t(r)}return o("next")})}}var e=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o=t(require("../../libs/regenerator-runtime/runtime")),s=require("../../common/index"),n=require("../../common/message"),i=function(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a.default=t,a}(require("./transac_batch_checkout.action")),r=require("../../actions/common"),d=t(require("./transac_batch_tracking")),c=t(require("../../controller/addresses_controller")),u=t(require("../components/edit_address/edit_address")),l=t(require("../../constants/storage_keys")),p=t(require("../../controller/order_checkout")),h=t(require("../../storage/ram_manager")),f=t(require("../../constants/payment")),m=t(require("../components_order_checkout/controller/order_checkout_mall_coupons")),C=t(require("../components_order_checkout/controller/order_checkout_address")),g={payBtnFlag:!1,data:{toast:["display","toastMessage"],transacBatch:["@all"]},onLoad:function(){this.loadPage(),d.default.pvTracking(this)},loadPage:function(){var t=this;this.$dispatch(i.loadPageData(this)).then(function(){t.processConfirm()})},loadRefresh:function(t){var a=this,e={};if(t){if(t.detail&&(t.detail.goodsNumber&&(e.goodsNumber=parseInt(t.detail.goodsNumber,10)),t.detail.skuId&&(e.skuId=t.detail.skuId),t.detail.clearCouponParams&&(e.clearCouponParams=t.detail.clearCouponParams),t.detail.clearPlatformCouponParams&&(e.clearPlatformCouponParams=t.detail.clearPlatformCouponParams),t.detail.mallId&&(e.mallId=t.detail.mallId),t.detail.addressId&&(e.addressId=t.detail.addressId),t.detail.serviceTransparentField&&(e.serviceTransparentField=t.detail.serviceTransparentField),t.detail.platformCoupon&&(e.platformCoupon=t.detail.platformCoupon),t.detail.merchantCoupon)){var o=t.detail.merchantCoupon;e.merchantCoupon=o}t.addressId&&(e.addressId=t.addressId),t.clearCouponParams&&(e.clearCouponParams=t.clearCouponParams),t.mallId&&(e.mallId=t.mallId)}this.$dispatch(i.loadRefreshData(this,e)).then(function(){a.processConfirm()})},processConfirm:function(){this.$getValue("transacBatch.confirmMessage")&&this.$dispatch((0,r.showToast)(this.$getValue("transacBatch.confirmMessage")));var t=this.$getValue("transacBatch.platformCouponVo");t&&t.displayName?d.default.platformCouponsImpr(this,!0):d.default.platformCouponsImpr(this,!1)},$injectReducer:function(){return{namespace:"transacBatch",reducer:require("./transac_batch_checkout.reducer").default}},componentsAddRootFunc:function(t,a){t&&"function"==typeof a&&(this[t]=a)},editAddress:function(){var t=this,a=this.$getValue("transacBatch.addressVo"),e=this.$getValue("transacBatch.actionDisable");C.default.editAddress(this,{addressVo:a,actionDisable:e,orderSn:this.parentOrderSn,updateOrderAddress:!1},function(a){t.loadRefresh(a)}),d.default.addressesClick(this,"change_address")},addAddress:function(){this.loadEditAddressModule(),d.default.addressesClick(this,"add_address")},wechatAddAddress:function(){var t=this;d.default.addressesClick(this,"wechat_add_address"),C.default.wechatAddAddress(this,function(a){a&&a.addressId&&t.loadRefresh({addressId:a.addressId}),a.isImpr&&d.default.wxAddressClick(t,{page_element:a.authorized?"approve":"refuse",page_el_sn:a.authorized?99899:99898})})},loadEditAddressModule:function(){var t=this;this.$showLoading(),c.default.fetchRegionsJsonData(function(){t.execAddressWindowLoad()})},execAddressWindowLoad:function(){var t=this;return a(o.default.mark(function a(){var e,n,r;return o.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e=c.default.getRegions()){a.next=5;break}return t.$hideLoading(),a.abrupt("return");case 5:return n=t,t.editAddressModule||(t.editAddressModule=new u.default),a.next=9,s.User.authorize("scope.userLocation");case 9:r=a.sent,n.editAddressModule.hasLocationAuth=r,n.editAddressModule.load(null,function(){n.editAddressModule.show(),n.$hideLoading()},function(t){n.editAddressModule.hide(),n.loadRefresh({addressId:t.addressId})},{setDataFunc:function(t){n.$dispatch(i.setAddressData(t))},getDataFunc:function(){return n.$getValue("transacBatch.addressData")},addRootFunc:s.Util.bind(n.componentsAddRootFunc,n),windowTitle:"新增地址",regionsDatas:e}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),t.$hideLoading();case 17:case"end":return a.stop()}},a,t,[[0,14]])}))()},checkPayStatus:function(){if(this.payBtnFlag)return!1;if(this.$getValue("transacBatch.orderVo").cancelPay)return!0;var t=this.$getValue("transacBatch.addressVo");if(!t||!t.addressId)return this.addAddress(),!1;if(t.canotReceived){var a=this;return wx.showModal({content:"该商品有地区限制，请使用快递可以送达的地址",success:function(t){t.confirm&&"function"==typeof a.editAddress&&a.editAddress()}}),!1}return!0},orderGoodsMallCoupons:function(t,a){var o=e({},a),n=[],i=[],r=[],d=[],c=[];if(t.forEach(function(t){if(t.merchantCouponVo&&1===Number(t.merchantCouponVo.promotionStatus)){var a={mall_id:t.merchantCouponVo.mallId};t.merchantCouponVo.couponId&&(a.merchant_coupon_id=t.merchantCouponVo.couponId,c.push(t.merchantCouponVo.couponId)),t.merchantCouponVo.eventId&&(a.event_id=t.merchantCouponVo.eventId,d.push(t.merchantCouponVo.eventId)),r.push(a)}t.goodsList.forEach(function(t){var a={group_id:t.groupId,goods_id:t.goodsId,sku_id:t.skuId,sku_number:t.goodsNumber};t.activityId&&(a.activity_id=t.activityId),n.push(a);var e=s.DataUtil.accMul(t.unitPrice,t.goodsNumber),o=Math.floor(e),r={goodsId:t.goodsId,orderAmount:o};i.push(r)})}),n.length>0&&(o.orderGoodsList=n),i.length>0){var u=this.$getValue("transacBatch.orderVo")||{},l=Math.floor(u.payPrice+u.couponPrice-u.orderPrice),p=0;l>0&&(p=l/i.length);var h=0;u.couponPrice>0&&(h=u.couponPrice/u.orderPrice);var f={},m={};i.forEach(function(t){var a=t.goodsId,e=t.orderAmount;f[a]=Math.floor(e*(1-h)+p),h>0&&(m[a]=Math.floor(e*h))}),f.order_amount=u.payPrice,o.orderList=f,o.goodsDiscountList=m}return r.length>0&&(o.orderMallCouponList=r),d.length&&(o.couponDiscountParams.event_id=d.join("_")),c.length&&(o.couponDiscountParams.merchant_coupon_id=c.join("_")),o},pay:function(){if(this.checkPayStatus()){var t=s.DataUtil.getLogId(),a=this.$getValue("transacBatch.payVo")||{},e=this.$getValue("transacBatch.orderVo")||{},o=this.$getValue("transacBatch.addressVo"),r=this.$getValue("transacBatch.platformCouponVo"),d=this.$getValue("transacBatch.cartItemList");if(e.cancelPay)return-1===a.selectedAppId&&this.parentOrderSn?void this.dealToHelpPay():void this.repay();var c={logId:t,payAppId:a.selectedAppId,addressId:o.addressId,papPaySigned:a.papPaySigned,couponDiscountParams:{},cartItemList:d};r&&1===Number(r.promotionStatus)&&(r.couponId?(c.couponId=r.couponId,c.couponDiscountParams.platform_coupon_id=r.couponId):r.couponNumber&&(c.couponNumber=r.couponNumber));var u=(c=this.orderGoodsMallCoupons(d,c)).couponDiscountParams,h=0;(u.event_id||u.merchant_coupon_id)&&u.platform_coupon_id?h=3:u.event_id||u.merchant_coupon_id?h=1:u.platform_coupon_id&&(h=2),h>0&&(c.couponDiscountParams.coupon_type=h),c.addressId&&c.orderGoodsList&&(this.payBtnFlag=!0,this.$dispatch(i.updateOrderVo({isPaying:!0})),this.payHandler&&(this.payHandler(),this.payHandler=null),-1!==a.selectedAppId&&s.StorageUtil.setStorageSync(l.default.LAST_PAY_APP_ID,a.selectedAppId),this.payHandler=n.Message.on(n.KEYS.ORDER_CHECKOUT_PAY,s.Util.bind(this.processPay,this)),p.default.createTransacBatchOrder(c,n.KEYS.ORDER_CHECKOUT_PAY)),this.createOrderParams=c}},repay:function(){if(this.parentOrderSn){this.payBtnFlag=!0,this.$dispatch(i.updateOrderVo({isPaying:!0}));var t={parentOrderSn:this.parentOrderSn};p.default.doTransacBatchPay(t,n.KEYS.ORDER_CHECKOUT_PAY)}},processPay:function(t){if(this.payBtnFlag=!1,t&&t.parentOrderSn&&t.fpId&&(this.parentOrderSn=t.parentOrderSn,this.fpId=t.fpId),t.errorCode){this.$hideLoading();var a=t.errorMsg;if(f.default.isCancelPay(a))this.dealCancelPay();else switch(this.$dispatch(i.updateOrderVo({isPaying:!1})),parseInt(t.errorCode,10)){case 45516:this.hasActivityOn(a);break;default:this.payErrorDefault(a)}}else if(this.$dispatch(i.updateOrderVo({isPaying:!1})),t.parentOrderSn){if(-1===(this.$getValue("transacBatch.payVo")||{}).selectedAppId)return void this.dealToHelpPay();h.default.hasPaySucess=!0,this.paySuccess(t),this.$hideLoading()}},dealToHelpPay:function(){this.goToHelpPay=!0,this.$dispatch(i.setActionDisable({actionDisable:!0}));var t={fp_id:this.fpId};this.$forward("combined_friend_payment",t)},dealCancelPay:function(){this.$dispatch(i.setActionDisable({actionDisable:!0})),this.$dispatch(i.updateOrderVo({isPaying:!1,cancelPay:!0})),this.dealPayWindow(!0),this.setCountDownTime(!0)},setCountDownTime:function(t){var a=!1,e=this.$getValue("transacBatch.countTimeData"),o=e.payExpire,n=e.setPayExpire;if(t||n){var r={};t&&(r.setPayExpire=t),o&&o>0?(r.payExpireTransfered=s.TimeUtil.transferToTime(1e3*o,{needObj:!0}),a=!0):r.orderTimeTitle="请尽快支付",this.$dispatch(i.setCountDownTime(r)),a&&this.setIntervalFun()}},setIntervalFun:function(){var t=this;this.intervalInfo||(this.intervalInfo=setInterval(function(){var a={},e=!1,o=t.$getValue("transacBatch.countTimeData"),n=o.payExpire;--n>0?(a.payExpireTransfered=s.TimeUtil.transferToTime(1e3*n,{needObj:!0}),a.refreshCountDown=!o.refreshCountDown,e=!0):a.orderTimeTitle="请尽快支付",a.payExpire=n,e||(clearInterval(t.intervalInfo),t.intervalInfo=null),t.$dispatch(i.setCountDownTime(a))},1e3))},dealPayWindow:function(t){var a=this;t?(d.default.unpaidPopupImpr(this),this.$dispatch(i.setPayWinData({showPayWindow:t})),setTimeout(function(){a.$dispatch(i.setPayWinData({showPayContainer:t}))},200)):(this.$dispatch(i.setPayWinData({showPayContainer:t})),setTimeout(function(){a.$dispatch(i.setPayWinData({showPayWindow:t}))},200))},payWinEvent:function(){this.pay(),d.default.unpaidPopupClick(this,!0)},closePayWindow:function(){this.dealPayWindow(!1),d.default.unpaidPopupClick(this,!1)},payBarEvent:function(){this.pay(),d.default.payBarClick(this)},hasActivityOn:function(t){var a=this;this.$dispatch((0,r.showToast)(t,{hideToastFunc:function(){a.reLoad()}}))},reLoad:function(){this.loadPage(),this.$dispatch(i.updateErrorStatus(!1))},payErrorDefault:function(t){var a=this;t?this.$dispatch((0,r.showToast)(t,{hideToastFunc:function(){!a.$getValue("transacBatch.orderVo").cancelPay&&a.parentOrderSn&&a.$redirect("order",{parent_order_sn:a.parentOrderSn})}})):this.parentOrderSn&&this.$redirect("order",{parent_order_sn:this.parentOrderSn})},paySuccess:function(t){d.default.payOrder(this,this.createOrderParams);var a={parent_order_sn:t.parentOrderSn};this.$redirect("team_list",a)},selectPayType:function(t){t&&t.detail&&t.detail.selectedAppId&&this.$dispatch(i.updatePayAppId(t.detail.selectedAppId))},clickMallCouponBar:function(t){var a=this;if(this.$getValue("transacBatch.actionDisable"))this.$dispatch((0,r.showToast)("订单已生成，信息不可更改"));else if(t&&t.detail&&t.detail.mallId){var o=t.detail,s=o.mallId,n=o.goodsList;this.$dispatch(i.queryUsablePromotion(this,s)).then(function(){var t=a.$getValue("transacBatch.mallCouponsListData"),o=a.$getValue("transacBatch.mallCoupons")||{},i=t[s],r=!1;i&&(i.usableGoodsBatchDisplayVos&&i.usableGoodsBatchDisplayVos.length>0||i.usableMallBatchDisplayVos&&i.usableMallBatchDisplayVos.length>0||i.usableMultiGoodsEvents&&i.usableMultiGoodsEvents.length>0)&&(r=!0);var c=!1;if(o.mallVo&&String(o.mallVo.id)===String(s)&&(o.events&&o.events.length>0&&(1===Number(o.events[0].status)||o.events[0].notUse)||o.usableShopCoupons&&o.usableShopCoupons.length>0||o.usableGoodsCoupons&&o.usableGoodsCoupons.length>0)&&(c=!0),c){var u=a.$getValue("transacBatch.merchantCouponVo"),l={coupons:e({},o),merchantCouponVo:u,platformCouponVo:{},type:0};a.showCouponsWin(l)}else r&&a.showMallCouponsList();d.default.mallCouponsClick(a,s,n,o.usableShopCoupons)})}},showPlatformCouponList:function(){var t=this.$getValue("transacBatch.actionDisable"),a=this.$getValue("transacBatch.platformCouponselectVo"),o=this.$getValue("transacBatch.platformCouponVo");if(t)this.$dispatch((0,r.showToast)("订单已生成，信息不可更改"));else{var s={coupons:e({},a),platformCouponVo:o,merchantCouponVo:{},type:1};this.showCouponsWin(s),d.default.platformCouponsClick(this)}},showMallCouponsList:function(){var t=this;this.hideCouponsWin();var a={mallCouponsListData:{showMallCouponsList:!0,couponsBgMaskShow:!0}};this.$dispatch(i.setCouponsListData(a)),a={mallCouponsListData:{mallMainClass:"mall-coupons-main mall-coupons-main-up"}},setTimeout(function(){t.$dispatch(i.setCouponsListData(a))},100)},hideMallCouponsList:function(t){var a=this,e={mallCouponsListData:{mallMainClass:"mall-coupons-main mall-coupons-main-down",couponsBgMaskShow:!1}};this.$dispatch(i.setCouponsListData(e)),e={mallCouponsListData:{showMallCouponsList:!1}},setTimeout(function(){a.$dispatch(i.setCouponsListData(e))},300),this.takeMerchantCouponSuccess&&t&&t.detail&&t.detail.mallId&&(this.takeMerchantCouponSuccess=!1,this.loadRefresh({mallId:t.detail.mallId,clearCouponParams:!0}))},showCouponsWin:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e({showCouponsWin:!0,showCouponsWinBg:!0},a);this.$dispatch(i.setCouponsWinData(o)),o={mainClass:"mall-coupons-main mall-coupons-main-up"},setTimeout(function(){t.$dispatch(i.setCouponsWinData(o))},100)},hideCouponsWin:function(){var t=this,a={mainClass:"mall-coupons-main mall-coupons-main-down",showCouponsWinBg:!1};this.$dispatch(i.setCouponsWinData(a)),a={showCouponsWin:!1},setTimeout(function(){t.$dispatch(i.setCouponsWinData(a))},300)},takeMerchantCoupon:function(t){var a=this;if(t&&t.detail&&t.detail.res){var e=t.detail,o=e.res,s=e.batchId,n=e.mallId,r=e.isGoodsBatch,d=this.$getValue("transacBatch.mallCouponsListData"),c=m.default.processTransacTakeCoupon(o,s,n,r,d);this.$dispatch(i.setCouponsListData(c)),c&&c.mallCouponToastData&&c.mallCouponToastData.toastVisible&&setTimeout(function(){var t={mallCouponToastData:{toastVisible:!1}};a.$dispatch(i.setCouponsListData(t))},1500),c&&c.needConfirmRefresh&&(this.takeMerchantCouponSuccess=!0)}},onShow:function(){if(h.default.isFromAppOnShow||this.$firstTimeTrackRecord.pv||d.default.pvTracking(this,!0),this.goToHelpPay)return wx.navigateBack(),void(this.goToHelpPay=!1);this.setCountDownTime()},onHide:function(){this.clearTimer()},clearTimer:function(){this.intervalInfo&&(clearInterval(this.intervalInfo),this.intervalInfo=null)},onUnload:function(){this.clearTimer(),this.unregisterDispatchCallback(),s.Util.empty(this)},unregisterDispatchCallback:function(){n.Message.off(n.KEYS.ORDER_CHECKOUT_PAY)}};(0,s.PddPage)(g,{pageName:"transac_batch_checkout",pageSn:13411,notUseCommonPV:!0,needObserveRender:!0}); 
 			}); 	require("package_c/transac_batch_checkout/transac_batch_checkout.js");
 	