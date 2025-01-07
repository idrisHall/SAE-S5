import{L as Uu,_ as qu,C as Bu,D as Wi,E as ju,H as Tn,I as zu,J as Gu,K as Ku,M as Xt,N as $u,S as Qu,O as Wu,P as Hu,Q as Xu,x as Yu,d as mt,p as dn,A as Ju,h as Wt,i as Hi,j as Xi,s as Zu,R as tl,c as Vt,a as Pt,f as es,T as el,v as Yi,e as nl,t as St,l as Zn,F as Ji,q as Zi,b as rl,w as sl,U as il,n as ol,r as al,o as Ct,V as ul}from"./index-BCYLosDA.js";import{l as ll}from"./index-TjCxX7sJ.js";var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ie,Bo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,w){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return m.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],v=E.g[2];var w=E.g[3],g=m+(w^_&(v^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[2]+606105819&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[6]+2821735955&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[10]+4294925233&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[14]+2792965006&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^w&(_^v))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[11]+643717713&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[15]+3634488961&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[3]+4107603335&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[7]+1735328473&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[11]+1839030562&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[7]+4139469664&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[3]+3572445317&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[15]+530742520&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[14]+2878612391&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[10]+4293915773&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[6]+2734768916&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[2]+718787259&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,v=this.h,w=0;w<m;){if(v==0)for(;w<=_;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(y[v++]=E.charCodeAt(w++),v==this.blockSize){i(this,y),v=0;break}}else for(;w<m;)if(y[v++]=E[w++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function u(E,m){this.h=m;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var w=E[v]|0;y&&w==m||(_[v]=w,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return C(f(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new u(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return C(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=I,v=0;v<E.length;v+=8){var w=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var I=h(0),R=h(1),S=h(16777216);r=u.prototype,r.m=function(){if(k(this))return-C(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(k(this))return"-"+C(this).toString(E);for(var m=f(Math.pow(E,6)),_=this,y="";;){var v=rt(_,m).g;_=z(_,v.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,N(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}r.l=function(E){return E=z(this,E),k(E)?-1:N(E)?0:1};function C(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return k(this)?C(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=m;v++){var w=y+(this.i(v)&65535)+(E.i(v)&65535),g=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,w&=65535,g&=65535,_[v]=g<<16|w}return new u(_,_[_.length-1]&-2147483648?-1:0)};function z(E,m){return E.add(C(m))}r.j=function(E){if(N(this)||N(E))return I;if(k(this))return k(E)?C(this).j(C(E)):C(C(this).j(E));if(k(E))return C(this.j(C(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var w=this.i(y)>>>16,g=this.i(y)&65535,Ot=E.i(v)>>>16,de=E.i(v)&65535;_[2*y+2*v]+=g*de,X(_,2*y+2*v),_[2*y+2*v+1]+=w*de,X(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Ot,X(_,2*y+2*v+1),_[2*y+2*v+2]+=w*Ot,X(_,2*y+2*v+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function X(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function W(E,m){this.g=E,this.h=m}function rt(E,m){if(N(m))throw Error("division by zero");if(N(E))return new W(I,I);if(k(E))return m=rt(C(E),m),new W(C(m.g),C(m.h));if(k(m))return m=rt(E,C(m)),new W(C(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(E);)_=Lt(_),y=Lt(y);var v=at(_,1),w=at(y,1);for(y=at(y,2),_=at(_,2);!N(y);){var g=w.add(y);0>=g.l(E)&&(v=v.add(_),w=g),y=at(y,1),_=at(_,1)}return m=z(E,v.j(m)),new W(v,m)}for(v=I;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(m);k(g)||0<g.l(E);)_-=y,w=f(_),g=w.j(m);N(w)&&(w=R),v=v.add(w),E=z(E,g)}return new W(v,E)}r.A=function(E){return rt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Lt(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function at(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,v=[],w=0;w<y;w++)v[w]=0<m?E.i(w+_)>>>m|E.i(w+_+1)<<32-m:E.i(w+_);return new u(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Bo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=p,Ie=u}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jo,fn,zo,ir,os,Go,Ko,$o;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in l))break t;l=l[T]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,T={next:function(){if(!d&&l<s.length){var A=l++;return{value:a(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,l){return s.call.apply(s.bind,arguments)}function I(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,T,A){for(var b=Array(arguments.length-2),J=2;J<arguments.length;J++)b[J-2]=arguments[J];return a.prototype[T].apply(d,b)}}function k(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function C(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=s.length||0,A=d.length||0;s.length=T+A;for(let b=0;b<A;b++)s[T+b]=d[b]}else s.push(d)}}class z{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function X(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Lt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function at(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)s[l]=d[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function v(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function w(s){c.setTimeout(()=>{throw s},0)}function g(){var s=te;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ot{constructor(){this.h=this.g=null}add(a,l){const d=de.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var de=new z(()=>new xn,s=>s.reset());class xn{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,me=!1,te=new Ot,Mn=()=>{const s=c.Promise.resolve(void 0);fe=()=>{s.then(Ln)}};var Ln=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){w(l)}var a=de;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}me=!1};function D(){this.s=this.s,this.C=this.C}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function L(s,a){if(x.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Lt){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&L.aa.h.call(this)}}N(L,x);var $={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),dt=0;function Nt(s,a,l,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++dt,this.da=this.fa=!1}function qt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function xt(s){this.src=s,this.g={},this.h=0}xt.prototype.add=function(s,a,l,d,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var b=pe(s,a,d,T);return-1<b?(a=s[b],l||(a.fa=!1)):(a=new Nt(a,this.src,A,!!d,T),a.fa=l,s.push(a)),a};function Se(s,a){var l=a.type;if(l in s.g){var d=s.g[l],T=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(qt(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function pe(s,a,l,d){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==d)return T}return-1}var Ce="closure_lm_"+(1e6*Math.random()|0),Mr={};function Hs(s,a,l,d,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Hs(s,a[A],l,d,T);return null}return l=Js(l),s&&s[it]?s.K(a,l,f(d)?!!d.capture:!!d,T):cu(s,a,l,!1,d,T)}function cu(s,a,l,d,T,A){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,J=Or(s);if(J||(s[Ce]=J=new xt(s)),l=J.add(a,l,d,b,A),l.proxy)return l;if(d=hu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)j||(T=b),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(Ys(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function hu(){function s(l){return a.call(s.src,s.listener,l)}const a=du;return s}function Xs(s,a,l,d,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Xs(s,a[A],l,d,T);else d=f(d)?!!d.capture:!!d,l=Js(l),s&&s[it]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],l=pe(A,l,d,T),-1<l&&(qt(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=Or(s))&&(a=s.g[a.toString()],s=-1,a&&(s=pe(a,l,d,T)),(l=-1<s?a[s]:null)&&Lr(l))}function Lr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[it])Se(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Ys(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Or(a))?(Se(l,s),l.h==0&&(l.src=null,a[Ce]=null)):qt(s)}}}function Ys(s){return s in Mr?Mr[s]:Mr[s]="on"+s}function du(s,a){if(s.da)s=!0;else{a=new L(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Lr(s),s=l.call(d,a)}return s}function Or(s){return s=s[Ce],s instanceof xt?s:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Js(s){return typeof s=="function"?s:(s[Fr]||(s[Fr]=function(a){return s.handleEvent(a)}),s[Fr])}function yt(){D.call(this),this.i=new xt(this),this.M=this,this.F=null}N(yt,D),yt.prototype[it]=!0,yt.prototype.removeEventListener=function(s,a,l,d){Xs(this,s,a,l,d)};function At(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new x(a,s);else if(a instanceof x)a.target=a.target||s;else{var T=a;a=new x(d,s),y(a,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var b=a.g=l[A];T=On(b,d,!0,a)&&T}if(b=a.g=s,T=On(b,d,!0,a)&&T,T=On(b,d,!1,a)&&T,l)for(A=0;A<l.length;A++)b=a.g=l[A],T=On(b,d,!1,a)&&T}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)qt(l[d]);delete s.g[a],s.h--}}this.F=null},yt.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},yt.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function On(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var b=a[A];if(b&&!b.da&&b.capture==l){var J=b.listener,ft=b.ha||b.src;b.fa&&Se(s.i,b),T=J.call(ft,d)!==!1&&T}}return T&&!d.defaultPrevented}function Zs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function ti(s){s.g=Zs(()=>{s.g=null,s.i&&(s.i=!1,ti(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class fu extends D{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(s){D.call(this),this.h=s,this.g={}}N(Je,D);var ei=[];function ni(s){at(s.g,function(a,l){this.g.hasOwnProperty(l)&&Lr(a)},s),s.g={}}Je.prototype.N=function(){Je.aa.N.call(this),ni(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=c.JSON.stringify,mu=c.JSON.parse,pu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function qr(){}qr.prototype.h=null;function ri(s){return s.h||(s.h=s.i())}function si(){}var Ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){x.call(this,"d")}N(Br,x);function jr(){x.call(this,"c")}N(jr,x);var ge={},ii=null;function Fn(){return ii=ii||new yt}ge.La="serverreachability";function oi(s){x.call(this,ge.La,s)}N(oi,x);function tn(s){const a=Fn();At(a,new oi(a))}ge.STAT_EVENT="statevent";function ai(s,a){x.call(this,ge.STAT_EVENT,s),this.stat=a}N(ai,x);function Rt(s){const a=Fn();At(a,new ai(a,s))}ge.Ma="timingevent";function ui(s,a){x.call(this,ge.Ma,s),this.size=a}N(ui,x);function en(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function nn(){this.g=!0}nn.prototype.xa=function(){this.g=!1};function gu(s,a,l,d,T,A){s.info(function(){if(s.g)if(A)for(var b="",J=A.split("&"),ft=0;ft<J.length;ft++){var H=J[ft].split("=");if(1<H.length){var vt=H[0];H=H[1];var Et=vt.split("_");b=2<=Et.length&&Et[1]=="type"?b+(vt+"="+H+"&"):b+(vt+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+b})}function _u(s,a,l,d,T,A,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+b})}function be(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+vu(s,l)+(d?" "+d:"")})}function yu(s,a){s.info(function(){return"TIMEOUT: "+a})}nn.prototype.info=function(){};function vu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Ur(l)}catch{return a}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},li={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zr;function qn(){}N(qn,qr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},zr=new qn;function ee(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ci}function ci(){this.i=null,this.g="",this.h=!1}var hi={},Gr={};function Kr(s,a,l){s.L=1,s.v=Gn($t(a)),s.m=l,s.P=!0,di(s,null)}function di(s,a){s.F=Date.now(),Bn(s),s.A=$t(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Pi(l.i,"t",d),s.C=0,l=s.j.J,s.h=new ci,s.g=Gi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new fu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ei[0]=T.toString()),T=ei);for(var A=0;A<T.length;A++){var b=Hs(l,T[A],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),tn(),gu(s.i,s.u,s.A,s.l,s.R,s.m)}ee.prototype.ca=function(s){s=s.target;const a=this.M;a&&Qt(s)==3?a.j():this.Y(s)},ee.prototype.Y=function(s){try{if(s==this.g)t:{const Et=Qt(this.g);var a=this.g.Ba();const Ne=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Ni(this.g)))){this.J||Et!=4||a==7||(a==8||0>=Ne?tn(3):tn(2)),$r(this);var l=this.g.Z();this.X=l;e:if(fi(this)){var d=Ni(this.g);s="";var T=d.length,A=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_e(this),rn(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(A&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,_u(this.i,this.u,this.A,this.l,this.R,Et,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,ft=this.g;if((J=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(J)){var H=J;break e}}H=null}if(l=H)be(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qr(this,l);else{this.o=!1,this.s=3,Rt(12),_e(this),rn(this);break t}}if(this.P){l=!0;let Ft;for(;!this.J&&this.C<b.length;)if(Ft=Eu(this,b),Ft==Gr){Et==4&&(this.s=4,Rt(14),l=!1),be(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==hi){this.s=4,Rt(15),be(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else be(this.i,this.l,Ft,null),Qr(this,Ft);if(fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||b.length!=0||this.h.h||(this.s=1,Rt(16),l=!1),this.o=this.o&&l,!l)be(this.i,this.l,b,"[Invalid Chunked Response]"),_e(this),rn(this);else if(0<b.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Zr(vt),vt.M=!0,Rt(11))}}else be(this.i,this.l,b,null),Qr(this,b);Et==4&&_e(this),this.o&&!this.J&&(Et==4?qi(this.j,this):(this.o=!1,Bn(this)))}else Ou(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),_e(this),rn(this)}}}catch{}finally{}};function fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Eu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?Gr:(l=Number(a.substring(l,d)),isNaN(l)?hi:(d+=1,d+l>a.length?Gr:(a=a.slice(d,d+l),s.C=d+l,a)))}ee.prototype.cancel=function(){this.J=!0,_e(this)};function Bn(s){s.S=Date.now()+s.I,mi(s,s.I)}function mi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=en(R(s.ba,s),a)}function $r(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ee.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(yu(this.i,this.A),this.L!=2&&(tn(),Rt(17)),_e(this),this.s=2,rn(this)):mi(this,this.S-s)};function rn(s){s.j.G==0||s.J||qi(s.j,s)}function _e(s){$r(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ni(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Qr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Wr(l.h,s))){if(!s.K&&Wr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Xn(l),Wn(l);else break t;Jr(l),Rt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=en(R(l.Za,l),6e3));if(1>=_i(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ve(l,11)}else if((s.K||l.g==s)&&Xn(l),!X(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let H=T[a];if(l.T=H[0],H=H[1],l.G==2)if(H[0]=="c"){l.K=H[1],l.ia=H[2];const vt=H[3];vt!=null&&(l.la=vt,l.j.info("VER="+l.la));const Et=H[4];Et!=null&&(l.Aa=Et,l.j.info("SVER="+l.Aa));const Ne=H[5];Ne!=null&&typeof Ne=="number"&&0<Ne&&(d=1.5*Ne,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Ft=s.g;if(Ft){const Jn=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var A=d.h;A.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Hr(A,A.h),A.h=null))}if(d.D){const ts=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;ts&&(d.ya=ts,Z(d.I,d.D,ts))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=s;if(d.qa=zi(d,d.J?d.ia:null,d.W),b.K){yi(d.h,b);var J=b,ft=d.L;ft&&(J.I=ft),J.B&&($r(J),Bn(J)),d.g=b}else Fi(d);0<l.i.length&&Hn(l)}else H[0]!="stop"&&H[0]!="close"||ve(l,7);else l.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ve(l,7):Yr(l):H[0]!="noop"&&l.l&&l.l.ta(H),l.v=0)}}tn(4)}catch{}}var Tu=class{constructor(s,a){this.g=s,this.map=a}};function pi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function _i(s){return s.h?1:s.g?s.g.size:0}function Wr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Hr(s,a){s.g?s.g.add(a):s.h=a}function yi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}pi.prototype.cancel=function(){if(this.i=vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function vi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return k(s.i)}function Iu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function wu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function Ei(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=wu(s),d=Iu(s),T=d.length,A=0;A<T;A++)a.call(void 0,d[A],l&&l[A],s)}var Ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Au(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),T=null;if(0<=d){var A=s[l].substring(0,d);T=s[l].substring(d+1)}else A=s[l];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ye(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ye){this.h=s.h,jn(this,s.j),this.o=s.o,this.g=s.g,zn(this,s.s),this.l=s.l;var a=s.i,l=new an;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ii(this,l),this.m=s.m}else s&&(a=String(s).match(Ti))?(this.h=!1,jn(this,a[1]||"",!0),this.o=sn(a[2]||""),this.g=sn(a[3]||"",!0),zn(this,a[4]),this.l=sn(a[5]||"",!0),Ii(this,a[6]||"",!0),this.m=sn(a[7]||"")):(this.h=!1,this.i=new an(null,this.h))}ye.prototype.toString=function(){var s=[],a=this.j;a&&s.push(on(a,wi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(on(a,wi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(on(l,l.charAt(0)=="/"?Vu:Pu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",on(l,Cu)),s.join("")};function $t(s){return new ye(s)}function jn(s,a,l){s.j=l?sn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function zn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ii(s,a,l){a instanceof an?(s.i=a,bu(s.i,s.h)):(l||(a=on(a,Su)),s.i=new an(a,s.h))}function Z(s,a,l){s.i.set(a,l)}function Gn(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function sn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function on(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ru),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ru(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wi=/[#\/\?@]/g,Pu=/[#\?:]/g,Vu=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function an(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function ne(s){s.g||(s.g=new Map,s.h=0,s.i&&Au(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=an.prototype,r.add=function(s,a){ne(this),this.i=null,s=De(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ai(s,a){ne(s),a=De(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ri(s,a){return ne(s),a=De(s,a),s.g.has(a)}r.forEach=function(s,a){ne(this),this.g.forEach(function(l,d){l.forEach(function(T){s.call(a,T,d,this)},this)},this)},r.na=function(){ne(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=s[d];for(let A=0;A<T.length;A++)l.push(a[d])}return l},r.V=function(s){ne(this);let a=[];if(typeof s=="string")Ri(this,s)&&(a=a.concat(this.g.get(De(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return ne(this),this.i=null,s=De(this,s),Ri(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Pi(s,a,l){Ai(s,a),0<l.length&&(s.i=null,s.g.set(De(s,a),k(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const A=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var T=A;b[d]!==""&&(T+="="+encodeURIComponent(String(b[d]))),s.push(T)}}return this.i=s.join("&")};function De(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function bu(s,a){a&&!s.j&&(ne(s),s.i=null,s.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(Ai(this,d),Pi(this,T,l))},s)),s.j=a}function Du(s,a){const l=new nn;if(c.Image){const d=new Image;d.onload=S(re,l,"TestLoadImage: loaded",!0,a,d),d.onerror=S(re,l,"TestLoadImage: error",!1,a,d),d.onabort=S(re,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=S(re,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function ku(s,a){const l=new nn,d=new AbortController,T=setTimeout(()=>{d.abort(),re(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?re(l,"TestPingServer: ok",!0,a):re(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),re(l,"TestPingServer: error",!1,a)})}function re(s,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function Nu(){this.g=new pu}function xu(s,a,l){const d=l||"";try{Ei(s,function(T,A){let b=T;f(T)&&(b=Ur(T)),a.push(d+A+"="+encodeURIComponent(b))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function Kn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Kn,qr),Kn.prototype.g=function(){return new $n(this.l,this.j)},Kn.prototype.i=function(s){return function(){return s}}({});function $n(s,a){yt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N($n,yt),r=$n.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ln(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?un(this):ln(this),this.readyState==3&&Vi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,un(this))},r.Qa=function(s){this.g&&(this.response=s,un(this))},r.ga=function(){this.g&&un(this)};function un(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ln(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function ln(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Si(s){let a="";return at(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Xr(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Si(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Z(s,a,l))}function et(s){yt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(et,yt);var Mu=/^https?$/i,Lu=["POST","PUT"];r=et.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?ri(this.o):ri(zr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){Ci(this,A);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())l.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lu,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of l)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ki(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Ci(this,A)}};function Ci(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,bi(s),Qn(s)}function bi(s){s.A||(s.A=!0,At(s,"complete"),At(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,At(this,"complete"),At(this,"abort"),Qn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Di(this):this.bb())},r.bb=function(){Di(this)};function Di(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Qt(s)!=4||s.Z()!=2)){if(s.u&&Qt(s)==4)Zs(s.Ea,0,s);else if(At(s,"readystatechange"),Qt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var T=String(s.D).match(Ti)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!Mu.test(T?T.toLowerCase():"")}l=d}if(l)At(s,"complete"),At(s,"success");else{s.m=6;try{var A=2<Qt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",bi(s)}}finally{Qn(s)}}}}function Qn(s,a){if(s.g){ki(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||At(s,"ready");try{l.onreadystatechange=d}catch{}}}function ki(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Qt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),mu(a)}};function Ni(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ou(s){const a={};s=(s.g&&2<=Qt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(X(s[d]))continue;var l=v(s[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cn(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function xi(s){this.Aa=0,this.i=[],this.j=new nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cn("baseRetryDelayMs",5e3,s),this.cb=cn("retryDelaySeedMs",1e4,s),this.Wa=cn("forwardChannelMaxRetries",2,s),this.wa=cn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new pi(s&&s.concurrentRequestLimit),this.Da=new Nu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=xi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){Rt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=zi(this,null,this.W),Hn(this)};function Yr(s){if(Mi(s),s.G==3){var a=s.U++,l=$t(s.I);if(Z(l,"SID",s.K),Z(l,"RID",a),Z(l,"TYPE","terminate"),hn(s,l),a=new ee(s,s.j,a),a.L=2,a.v=Gn($t(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Gi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Bn(a)}ji(s)}function Wn(s){s.g&&(Zr(s),s.g.cancel(),s.g=null)}function Mi(s){Wn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Xn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Hn(s){if(!gi(s.h)&&!s.s){s.s=!0;var a=s.Ga;fe||Mn(),me||(fe(),me=!0),te.add(a,s),s.B=0}}function Fu(s,a){return _i(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=en(R(s.Ga,s,a),Bi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new ee(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Oi(this,T,a),l=$t(this.I),Z(l,"RID",s),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),hn(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Si(A)))+"&"+a:this.m&&Xr(l,this.m,A)),Hr(this.h,T),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",a),Z(l,"SID","null"),T.T=!0,Kr(T,l,null)):Kr(T,l,a),this.G=2}}else this.G==3&&(s?Li(this,s):this.i.length==0||gi(this.h)||Li(this))};function Li(s,a){var l;a?l=a.l:l=s.U++;const d=$t(s.I);Z(d,"SID",s.K),Z(d,"RID",l),Z(d,"AID",s.T),hn(s,d),s.m&&s.o&&Xr(d,s.m,s.o),l=new ee(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Oi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Hr(s.h,l),Kr(l,d,a)}function hn(s,a){s.H&&at(s.H,function(l,d){Z(a,d,l)}),s.l&&Ei({},function(l,d){Z(a,d,l)})}function Oi(s,a,l){l=Math.min(s.i.length,l);var d=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const b=["count="+l];A==-1?0<l?(A=T[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let J=!0;for(let ft=0;ft<l;ft++){let H=T[ft].g;const vt=T[ft].map;if(H-=A,0>H)A=Math.max(0,T[ft].g-100),J=!1;else try{xu(vt,b,"req"+H+"_")}catch{d&&d(vt)}}if(J){d=b.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Fi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;fe||Mn(),me||(fe(),me=!0),te.add(a,s),s.v=0}}function Jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=en(R(s.Fa,s),Bi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ui(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=en(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Wn(this),Ui(this))};function Zr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Ui(s){s.g=new ee(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=$t(s.qa);Z(a,"RID","rpc"),Z(a,"SID",s.K),Z(a,"AID",s.T),Z(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(a,"TO",s.ja),Z(a,"TYPE","xmlhttp"),hn(s,a),s.m&&s.o&&Xr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Gn($t(a)),l.m=null,l.P=!0,di(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Wn(this),Jr(this),Rt(19))};function Xn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function qi(s,a){var l=null;if(s.g==a){Xn(s),Zr(s),s.g=null;var d=2}else if(Wr(s.h,a))l=a.D,yi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=Fn(),At(d,new ui(d,l)),Hn(s)}else Fi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Fu(s,a)||d==2&&Jr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:ve(s,5);break;case 4:ve(s,10);break;case 3:ve(s,6);break;default:ve(s,2)}}}function Bi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ve(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),d=s.Xa;const T=!d;d=new ye(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jn(d,"https"),Gn(d),T?Du(d.toString(),l):ku(d.toString(),l)}else Rt(2);s.G=0,s.l&&s.l.sa(a),ji(s),Mi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ji(s){if(s.G=0,s.ka=[],s.l){const a=vi(s.h);(a.length!=0||s.i.length!=0)&&(C(s.ka,a),C(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function zi(s,a,l){var d=l instanceof ye?$t(l):new ye(l);if(d.g!="")a&&(d.g=a+"."+d.g),zn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new ye(null);d&&jn(A,d),a&&(A.g=a),T&&zn(A,T),l&&(A.l=l),d=A}return l=s.D,a=s.ya,l&&a&&Z(d,l,a),Z(d,"VER",s.la),hn(s,d),d}function Gi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new et(new Kn({eb:l})):new et(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ki(){}r=Ki.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Yn(){}Yn.prototype.g=function(s,a){return new Dt(s,a)};function Dt(s,a){yt.call(this),this.g=new xi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!X(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!X(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ke(this)}N(Dt,yt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Yr(this.g)},Dt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Ur(s),s=l);a.i.push(new Tu(a.Ya++,s)),a.G==3&&Hn(a)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Yr(this.g),delete this.g,Dt.aa.N.call(this)};function $i(s){Br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N($i,Br);function Qi(){jr.call(this),this.status=1}N(Qi,jr);function ke(s){this.g=s}N(ke,Ki),ke.prototype.ua=function(){At(this.g,"a")},ke.prototype.ta=function(s){At(this.g,new $i(s))},ke.prototype.sa=function(s){At(this.g,new Qi)},ke.prototype.ra=function(){At(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,$o=function(){return new Yn},Ko=function(){return Fn()},Go=ge,os={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,ir=Un,li.COMPLETE="complete",zo=li,si.EventType=Ze,Ze.OPEN="a",Ze.CLOSE="b",Ze.ERROR="c",Ze.MESSAGE="d",yt.prototype.listen=yt.prototype.K,fn=si,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,jo=et}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Uu("@firebase/firestore");function Me(){return we.logLevel}function M(r,...t){if(we.logLevel<=Xt.DEBUG){const e=t.map(Ts);we.debug(`Firestore (${We}): ${r}`,...e)}}function Jt(r,...t){if(we.logLevel<=Xt.ERROR){const e=t.map(Ts);we.error(`Firestore (${We}): ${r}`,...e)}}function qe(r,...t){if(we.logLevel<=Xt.WARN){const e=t.map(Ts);we.warn(`Firestore (${We}): ${r}`,...e)}}function Ts(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(r="Unexpected state"){const t=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+r;throw Jt(t),new Error(t)}function Y(r,t){r||U()}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ju{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class hl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class dl{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new oe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new oe,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new oe)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string"),new Qo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new It(t)}}class fl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ml{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const n=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new pl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=_l(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function Be(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new lt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new lt(0,0))}static max(){return new q(new lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,n){e===void 0?e=0:e>t.length&&U(),n===void 0?n=t.length-e:n>t.length-e&&U(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return In.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof In?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class nt extends In{construct(t,e,n){return new nt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new O(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new nt(e)}static emptyPath(){return new nt([])}}const yl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends In{construct(t,e,n){return new gt(t,e,n)}static isValidIdentifier(t){return yl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new O(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new O(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(nt.fromString(t))}static fromName(t){return new F(nt.fromString(t).popFirst(5))}static empty(){return new F(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new nt(t.slice()))}}function vl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=q.fromTimestamp(n===1e9?new lt(e+1,0):new lt(e,n));return new ae(i,F.empty(),t)}function El(r){return new ae(r.readTime,r.key,-1)}class ae{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ae(q.min(),F.empty(),-1)}static max(){return new ae(q.max(),F.empty(),-1)}}function Tl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Il)throw r;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{u[f]=p,++c,c===o&&n(u)},p=>i(p))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Al(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Xe(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Tr.oe=-1;function Ir(r){return r==null}function hr(r){return r===0&&1/r==-1/0}function Rl(r){return typeof r=="number"&&Number.isInteger(r)&&!hr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=no(t)),t=Vl(r.get(e),t);return no(t)}function Vl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function no(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ae(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ho(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??pt.RED,this.left=i??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new pt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,i,o){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new so(this.data.getIterator())}getIteratorFrom(t){return new so(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class so{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new ct(gt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Be(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xo("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Sl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(r){if(Y(!!r),typeof r=="string"){let t=0;const e=Sl.exec(r);if(Y(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function le(r){return typeof r=="string"?_t.fromBase64String(r):_t.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function wr(r){const t=r.mapValue.fields.__previous_value__;return Is(t)?wr(t):t}function wn(r){const t=ue(r.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class An{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ce(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Is(r)?4:Dl(r)?9007199254740991:bl(r)?10:11:U()}function Gt(r,t){if(r===t)return!0;const e=ce(r);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return wn(r).isEqual(wn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=ue(i.timestampValue),c=ue(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return le(i.bytesValue).isEqual(le(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=st(i.doubleValue),c=st(o.doubleValue);return u===c?hr(u)===hr(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Be(r.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ro(u)!==ro(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Gt(u[h],c[h])))return!1;return!0}(r,t);default:return U()}}function Rn(r,t){return(r.values||[]).find(e=>Gt(e,t))!==void 0}function je(r,t){if(r===t)return 0;const e=ce(r),n=ce(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=st(o.integerValue||o.doubleValue),h=st(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return io(r.timestampValue,t.timestampValue);case 4:return io(wn(r),wn(t));case 5:return K(r.stringValue,t.stringValue);case 6:return function(o,u){const c=le(o),h=le(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=K(c[f],h[f]);if(p!==0)return p}return K(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=K(st(o.latitude),st(u.latitude));return c!==0?c:K(st(o.longitude),st(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return oo(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,p;const I=o.fields||{},R=u.fields||{},S=(c=I.value)===null||c===void 0?void 0:c.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,k=K(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:oo(S,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===nr.mapValue&&u===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(u===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const R=K(h[I],p[I]);if(R!==0)return R;const S=je(c[h[I]],f[p[I]]);if(S!==0)return S}return K(h.length,p.length)}(r.mapValue,t.mapValue);default:throw U()}}function io(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=ue(r),n=ue(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function oo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=je(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function ze(r){return as(r)}function as(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ue(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return le(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=as(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${as(e.fields[u])}`;return i+"}"}(r.mapValue):U()}function or(r){switch(ce(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=wr(r);return t?16+or(t):16;case 5:return 2*r.stringValue.length;case 6:return le(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+or(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Ae(n.fields,(o,u)=>{i+=o.length+or(u)}),i}(r.mapValue);default:throw U()}}function us(r){return!!r&&"integerValue"in r}function ws(r){return!!r&&"arrayValue"in r}function ao(r){return!!r&&"nullValue"in r}function uo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ar(r){return!!r&&"mapValue"in r}function bl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function _n(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ae(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_n(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_n(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Dl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ar(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_n(e)}setAll(t){let e=gt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=_n(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());ar(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ar(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ae(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Mt(_n(this.value))}}function Yo(r){const t=[];return Ae(r.fields,(e,n)=>{const i=new gt([e]);if(ar(n)){const o=Yo(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,q.min(),q.min(),q.min(),Mt.empty(),0)}static newFoundDocument(t,e,n,i){return new wt(t,1,e,q.min(),n,i,0)}static newNoDocument(t,e){return new wt(t,2,e,q.min(),q.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,q.min(),q.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function lo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=F.comparator(F.fromName(u.referenceValue),e.key):n=je(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function co(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Gt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function kl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{}class ut extends Jo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new xl(t,e,n):e==="array-contains"?new Ol(t,n):e==="in"?new Fl(t,n):e==="not-in"?new Ul(t,n):e==="array-contains-any"?new ql(t,n):new ut(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ml(t,n):new Ll(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(je(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(je(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Jo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Kt(t,e)}matches(t){return Zo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zo(r){return r.op==="and"}function ta(r){return Nl(r)&&Zo(r)}function Nl(r){for(const t of r.filters)if(t instanceof Kt)return!1;return!0}function ls(r){if(r instanceof ut)return r.field.canonicalString()+r.op.toString()+ze(r.value);if(ta(r))return r.filters.map(t=>ls(t)).join(",");{const t=r.filters.map(e=>ls(e)).join(",");return`${r.op}(${t})`}}function ea(r,t){return r instanceof ut?function(n,i){return i instanceof ut&&n.op===i.op&&n.field.isEqual(i.field)&&Gt(n.value,i.value)}(r,t):r instanceof Kt?function(n,i){return i instanceof Kt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&ea(u,i.filters[c]),!0):!1}(r,t):void U()}function na(r){return r instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${ze(e.value)}`}(r):r instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(na).join(" ,")+"}"}(r):"Filter"}class xl extends ut{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ml extends ut{constructor(t,e){super(t,"in",e),this.keys=ra("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ll extends ut{constructor(t,e){super(t,"not-in",e),this.keys=ra("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ra(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>F.fromName(n.referenceValue))}class Ol extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ws(e)&&Rn(e.arrayValue,this.value)}}class Fl extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class Ul extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Rn(this.value.arrayValue,e)}}class ql extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Rn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function ho(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Bl(r,t,e,n,i,o,u)}function As(r){const t=B(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ls(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ze(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ze(n)).join(",")),t.ue=e}return t.ue}function Rs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!kl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ea(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!co(r.startAt,t.startAt)&&co(r.endAt,t.endAt)}function cs(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jl(r,t,e,n,i,o,u,c){return new Ar(r,t,e,n,i,o,u,c)}function Rr(r){return new Ar(r)}function fo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function zl(r){return r.collectionGroup!==null}function yn(r){const t=B(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ct(gt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new fr(o,n))}),e.has(gt.keyField().canonicalString())||t.ce.push(new fr(gt.keyField(),n))}return t.ce}function Bt(r){const t=B(r);return t.le||(t.le=Gl(t,yn(r))),t.le}function Gl(r,t){if(r.limitType==="F")return ho(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new fr(i.field,o)});const e=r.endAt?new dr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dr(r.startAt.position,r.startAt.inclusive):null;return ho(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function hs(r,t,e){return new Ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Pr(r,t){return Rs(Bt(r),Bt(t))&&r.limitType===t.limitType}function sa(r){return`${As(Bt(r))}|lt:${r.limitType}`}function Le(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>na(i)).join(", ")}]`),Ir(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ze(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ze(i)).join(",")),`Target(${n})`}(Bt(r))}; limitType=${r.limitType})`}function Vr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):F.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of yn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=lo(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,yn(n),i)||n.endAt&&!function(u,c,h){const f=lo(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,yn(n),i))}(r,t)}function Kl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ia(r){return(t,e)=>{let n=!1;for(const i of yn(r)){const o=$l(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function $l(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?je(h,f):U()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ho(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new tt(F.comparator);function Zt(){return Ql}const oa=new tt(F.comparator);function mn(...r){let t=oa;for(const e of r)t=t.insert(e.key,e);return t}function aa(r){let t=oa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Te(){return vn()}function ua(){return vn()}function vn(){return new Re(r=>r.toString(),(r,t)=>r.isEqual(t))}const Wl=new tt(F.comparator),Hl=new ct(F.comparator);function G(...r){let t=Hl;for(const e of r)t=t.add(e);return t}const Xl=new ct(K);function Yl(){return Xl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hr(t)?"-0":t}}function la(r){return{integerValue:""+r}}function Jl(r,t){return Rl(t)?la(t):Ps(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this._=void 0}}function Zl(r,t,e){return r instanceof mr?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Is(o)&&(o=wr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof Pn?ha(r,t):r instanceof Vn?da(r,t):function(i,o){const u=ca(i,o),c=mo(u)+mo(i.Pe);return us(u)&&us(i.Pe)?la(c):Ps(i.serializer,c)}(r,t)}function tc(r,t,e){return r instanceof Pn?ha(r,t):r instanceof Vn?da(r,t):e}function ca(r,t){return r instanceof pr?function(n){return us(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class mr extends Sr{}class Pn extends Sr{constructor(t){super(),this.elements=t}}function ha(r,t){const e=fa(t);for(const n of r.elements)e.some(i=>Gt(i,n))||e.push(n);return{arrayValue:{values:e}}}class Vn extends Sr{constructor(t){super(),this.elements=t}}function da(r,t){let e=fa(t);for(const n of r.elements)e=e.filter(i=>!Gt(i,n));return{arrayValue:{values:e}}}class pr extends Sr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function mo(r){return st(r.integerValue||r.doubleValue)}function fa(r){return ws(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ec(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Pn&&i instanceof Pn||n instanceof Vn&&i instanceof Vn?Be(n.elements,i.elements,Gt):n instanceof pr&&i instanceof pr?Gt(n.Pe,i.Pe):n instanceof mr&&i instanceof mr}(r.transform,t.transform)}class nc{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ur(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Cr{}function ma(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Vs(r.key,jt.none()):new bn(r.key,r.data,jt.none());{const e=r.data,n=Mt.empty();let i=new ct(gt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new Pe(r.key,n,new Ut(i.toArray()),jt.none())}}function rc(r,t,e){r instanceof bn?function(i,o,u){const c=i.value.clone(),h=go(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Pe?function(i,o,u){if(!ur(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=go(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(pa(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function En(r,t,e,n){return r instanceof bn?function(o,u,c,h){if(!ur(o.precondition,u))return c;const f=o.value.clone(),p=_o(o.fieldTransforms,h,u);return f.setAll(p),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Pe?function(o,u,c,h){if(!ur(o.precondition,u))return c;const f=_o(o.fieldTransforms,h,u),p=u.data;return p.setAll(pa(o)),p.setAll(f),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(r,t,e,n):function(o,u,c){return ur(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function sc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ca(n.transform,i||null);o!=null&&(e===null&&(e=Mt.empty()),e.set(n.field,o))}return e||null}function po(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Be(n,i,(o,u)=>ec(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class bn extends Cr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pe extends Cr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function go(r,t,e){const n=new Map;Y(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,tc(u,c,e[i]))}return n}function _o(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Zl(o,u,t))}return n}class Vs extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ic extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&rc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ua();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=ma(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&Be(this.mutations,t.mutations,(e,n)=>po(e,n))&&Be(this.baseMutations,t.baseMutations,(e,n)=>po(e,n))}}class Ss{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Y(t.mutations.length===n.length);let i=function(){return Wl}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Ss(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Q;function lc(r){switch(r){default:return U();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function ga(r){if(r===void 0)return Jt("GRPC error has no .code"),V.UNKNOWN;switch(r){case ot.OK:return V.OK;case ot.CANCELLED:return V.CANCELLED;case ot.UNKNOWN:return V.UNKNOWN;case ot.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ot.INTERNAL:return V.INTERNAL;case ot.UNAVAILABLE:return V.UNAVAILABLE;case ot.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ot.NOT_FOUND:return V.NOT_FOUND;case ot.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ot.ABORTED:return V.ABORTED;case ot.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ot.DATA_LOSS:return V.DATA_LOSS;default:return U()}}(Q=ot||(ot={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Ie([4294967295,4294967295],0);function yo(r){const t=cc().encode(r),e=new Bo;return e.update(t),new Uint8Array(e.digest())}function vo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ie([e,n],0),new Ie([i,o],0)]}class Cs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new pn(`Invalid padding: ${e}`);if(n<0)throw new pn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new pn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=Ie.fromNumber(this.Te)}Ee(t,e,n){let i=t.add(e.multiply(Ie.fromNumber(n)));return i.compare(hc)===1&&(i=new Ie([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=yo(t),[n,i]=vo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Cs(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=yo(t),[n,i]=vo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Dn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new br(q.min(),i,new tt(K),Zt(),G())}}class Dn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Dn(n,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class _a{constructor(t,e){this.targetId=t,this.me=e}}class ya{constructor(t,e,n=_t.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Eo{constructor(){this.fe=0,this.ge=To(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),n=G();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:U()}}),new Dn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=To()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dc{constructor(t){this.Le=t,this.Be=new Map,this.ke=Zt(),this.qe=rr(),this.Qe=rr(),this.Ke=new tt(K)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,n=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(cs(o))if(n===0){const u=new F(o.path);this.We(e,u,wt.newNoDocument(u,q.min()))}else Y(n===1);else{const u=this.Ze(e);if(u!==n){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=le(n).toUint8Array()}catch(h){if(h instanceof Xo)return qe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Cs(u,i,o)}catch(h){return qe(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&cs(c.target)){const h=new F(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,wt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=G();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new br(t,e,this.Ke,this.ke,n);return this.ke=Zt(),this.qe=rr(),this.Qe=rr(),this.Ke=new tt(K),i}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new Eo,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new ct(K),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct(K),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new Eo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function rr(){return new tt(F.comparator)}function To(){return new tt(F.comparator)}const fc={asc:"ASCENDING",desc:"DESCENDING"},mc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pc={and:"AND",or:"OR"};class gc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ds(r,t){return r.useProto3Json||Ir(t)?t:{value:t}}function gr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function va(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function _c(r,t){return gr(r,t.toTimestamp())}function zt(r){return Y(!!r),q.fromTimestamp(function(e){const n=ue(e);return new lt(n.seconds,n.nanos)}(r))}function bs(r,t){return fs(r,t).canonicalString()}function fs(r,t){const e=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ea(r){const t=nt.fromString(r);return Y(Ra(t)),t}function ms(r,t){return bs(r.databaseId,t.path)}function ns(r,t){const e=Ea(t);if(e.get(1)!==r.databaseId.projectId)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(Ia(e))}function Ta(r,t){return bs(r.databaseId,t)}function yc(r){const t=Ea(r);return t.length===4?nt.emptyPath():Ia(t)}function ps(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ia(r){return Y(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Io(r,t,e){return{name:ms(r,t),fields:e.value.mapValue.fields}}function vc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Y(p===void 0||typeof p=="string"),_t.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),_t.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const p=f.code===void 0?V.UNKNOWN:ga(f.code);return new O(p,f.message||"")}(u);e=new ya(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ns(r,n.document.name),o=zt(n.document.updateTime),u=n.document.createTime?zt(n.document.createTime):q.min(),c=new Mt({mapValue:{fields:n.document.fields}}),h=wt.newFoundDocument(i,o,u,c),f=n.targetIds||[],p=n.removedTargetIds||[];e=new lr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ns(r,n.document),o=n.readTime?zt(n.readTime):q.min(),u=wt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new lr([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ns(r,n.document),o=n.removedTargetIds||[];e=new lr([],o,i,null)}else{if(!("filter"in t))return U();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new uc(i,o),c=n.targetId;e=new _a(c,u)}}return e}function Ec(r,t){let e;if(t instanceof bn)e={update:Io(r,t.key,t.value)};else if(t instanceof Vs)e={delete:ms(r,t.key)};else if(t instanceof Pe)e={update:Io(r,t.key,t.data),updateMask:Cc(t.fieldMask)};else{if(!(t instanceof ic))return U();e={verify:ms(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof mr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pr)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw U()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:_c(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(r,t.precondition)),e}function Tc(r,t){return r&&r.length>0?(Y(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?zt(i.updateTime):zt(o);return u.isEqual(q.min())&&(u=zt(o)),new nc(u,i.transformResults||[])}(e,t))):[]}function Ic(r,t){return{documents:[Ta(r,t.path)]}}function wc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ta(r,i);const o=function(f){if(f.length!==0)return Aa(Kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(p=>function(R){return{field:Oe(R.field),direction:Pc(R.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ds(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:i}}function Ac(r){let t=yc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){Y(n===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(I){const R=wa(I);return R instanceof Kt&&ta(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(I){return I.map(R=>function(N){return new fr(Fe(N.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(I){let R;return R=typeof I=="object"?I.value:I,Ir(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(I){const R=!!I.before,S=I.values||[];return new dr(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const R=!I.before,S=I.values||[];return new dr(S,R)}(e.endAt)),jl(t,i,u,o,c,"F",h,f)}function Rc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function wa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Fe(e.unaryFilter.field);return ut.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Fe(e.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Fe(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Fe(e.unaryFilter.field);return ut.create(u,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(r):r.fieldFilter!==void 0?function(e){return ut.create(Fe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Kt.create(e.compositeFilter.filters.map(n=>wa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(r):U()}function Pc(r){return fc[r]}function Vc(r){return mc[r]}function Sc(r){return pc[r]}function Oe(r){return{fieldPath:r.canonicalString()}}function Fe(r){return gt.fromServerFormat(r.fieldPath)}function Aa(r){return r instanceof ut?function(e){if(e.op==="=="){if(uo(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NAN"}};if(ao(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uo(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NAN"}};if(ao(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oe(e.field),op:Vc(e.op),value:e.value}}}(r):r instanceof Kt?function(e){const n=e.getFilters().map(i=>Aa(i));return n.length===1?n[0]:{compositeFilter:{op:Sc(e.op),filters:n}}}(r):U()}function Cc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ra(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e,n,i,o=q.min(),u=q.min(),c=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ie(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.ht=t}}function Dc(r){const t=Ac({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.ln=new Nc}addToCollectionParentIndex(t,e){return this.ln.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(ae.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(ae.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Nc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ct(nt.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ct(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Ge(0)}static Qn(){return new Ge(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao([r,t],[e,n]){const i=K(r,e);return i===0?K(t,n):i}class xc{constructor(t){this.Gn=t,this.buffer=new ct(Ao),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ao(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Mc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){M("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Xe(e)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await He(e)}await this.Yn(3e5)})}}class Lc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Tr.oe);const n=new xc(e);return this.Zn.forEachTarget(t,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(wo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wo):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,i,o,u,c,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(n=I,c=Date.now(),this.removeTargets(t,n,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(I=>(f=Date.now(),Me()<=Xt.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Oc(r,t){return new Lc(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.changes=new Re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&En(n.mutation,i,Ut.empty(),lt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,G()).next(()=>n))}getLocalViewOfDocuments(t,e,n=G()){const i=Te();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=mn();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Te();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,G()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Zt();const u=vn(),c=function(){return vn()}();return e.forEach((h,f)=>{const p=n.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Pe)?o=o.insert(f.key,f):p!==void 0?(u.set(f.key,p.mutation.getFieldMask()),En(p.mutation,f,p.mutation.getFieldMask(),lt.now())):u.set(f.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>u.set(f,p)),e.forEach((f,p)=>{var I;return c.set(f,new Uc(p,(I=u.get(f))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const n=vn();let i=new tt((u,c)=>u-c),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=n.get(h)||Ut.empty();p=c.applyToLocalView(f,p),n.set(h,p);const I=(i.get(c.batchId)||G()).add(h);i=i.insert(c.batchId,I)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,I=ua();p.forEach(R=>{if(!o.has(R)){const S=ma(e.get(R),n.get(R));S!==null&&I.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,I))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return F.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(Te());let c=-1,h=o;return u.next(f=>P.forEach(f,(p,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,G())).next(p=>({batchId:c,changes:aa(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let i=mn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=mn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const f=function(I,R){return new Ar(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(p=>{p.forEach((I,R)=>{u=u.insert(I,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const p=f.getKey();u.get(p)===null&&(u=u.insert(p,wt.newInvalidDocument(p)))});let c=mn();return u.forEach((h,f)=>{const p=o.get(h);p!==void 0&&En(p.mutation,f,Ut.empty(),lt.now()),Vr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return P.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:zt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:Dc(i.bundledQuery),readTime:zt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.overlays=new tt(F.comparator),this.Er=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Te();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Tt(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=Te(),o=e.length+1,u=new F(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new tt((f,p)=>f-p);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let p=o.get(f.largestBatchId);p===null&&(p=Te(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=Te(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return P.resolve(c)}Tt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ac(e,n));let o=this.Er.get(e);o===void 0&&(o=G(),this.Er.set(e,o)),this.Er.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.dr=new ct(ht.Ar),this.Rr=new ct(ht.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new ht(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new ht(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new F(new nt([])),n=new ht(e,t),i=new ht(e,t+1),o=[];return this.Rr.forEachInRange([n,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new F(new nt([])),n=new ht(e,t),i=new ht(e,t+1);let o=G();return this.Rr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new ht(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ht{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return F.comparator(t.key,e.key)||K(t.br,e.br)}static Vr(t,e){return K(t.br,e.br)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new ct(ht.Ar)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new oc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Fr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ht(e,0),i=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([n,i],u=>{const c=this.Cr(u.br);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ct(K);return e.forEach(i=>{const o=new ht(i,0),u=new ht(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{n=n.add(c.br)})}),P.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;F.isDocumentKey(o)||(o=o.child(""));const u=new ht(new F(o),0);let c=new ct(K);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.br)),!0)},u),P.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(n=>{const i=this.Cr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Y(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return P.forEach(e.mutations,i=>{const o=new ht(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new ht(e,0),i=this.vr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.Nr=t,this.docs=function(){return new tt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let n=Zt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():wt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Zt();const u=e.path,c=new F(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Tl(El(p),n)<=0||(i.has(p.key)||Vr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){U()}Lr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new $c(this)}getSize(t){return P.resolve(this.size)}}class $c extends Fc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.persistence=t,this.Br=new Re(e=>As(e),Rs),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ds,this.targetCount=0,this.Qr=Ge.qn()}forEachTarget(t,e){return this.Br.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),P.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Un(e),P.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Tr(0),this.Ur=!1,this.Ur=!0,this.Wr=new zc,this.referenceDelegate=t(this),this.Gr=new Qc(this),this.indexManager=new kc,this.remoteDocumentCache=function(i){return new Kc(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new bc(e),this.jr=new Bc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Gc(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){M("MemoryPersistence","Starting transaction:",t);const i=new Wc(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return P.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class Wc extends wl{constructor(t){super(),this.currentSequenceNumber=t}}class ks{constructor(t){this.persistence=t,this.Zr=new Ds,this.Xr=null}static ei(t){return new ks(t)}get ti(){if(this.Xr)return this.Xr;throw U()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),P.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ti,n=>{const i=F.fromPath(n);return this.ni(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return P.or([()=>P.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.ri=new Re(n=>Pl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Oc(this,e)}static ei(t,e){return new _r(t,e)}Hr(){}Jr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return P.forEach(this.ri,(n,i)=>this.ir(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(n++,o.removeEntry(u,q.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),P.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=or(t.data.value)),e}ir(t,e,n){return P.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=i}static zi(t,e){let n=G(),i=G();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ns(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Wu()?8:Al(Hu())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Hc;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,n,i){return n.documentReadCount<this.Ji?(Me()<=Xt.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),P.resolve()):(Me()<=Xt.DEBUG&&M("QueryEngine","Query:",Le(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(Me()<=Xt.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):P.resolve())}Xi(t,e){if(fo(e))return P.resolve(null);let n=Bt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=hs(e,null,"F"),n=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=G(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.rs(e,c);return this.ss(e,f,u,h.readTime)?this.Xi(t,hs(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,n,i){return fo(e)||i.isEqual(q.min())?P.resolve(null):this.Zi.getDocuments(t,n).next(o=>{const u=this.rs(e,o);return this.ss(e,u,n,i)?P.resolve(null):(Me()<=Xt.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Le(e)),this.os(t,u,e,vl(i,-1)).next(c=>c))})}rs(t,e){let n=new ct(ia(t));return e.forEach((i,o)=>{Vr(t,o)&&(n=n.add(o))}),n}ss(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,n){return Me()<=Xt.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Le(e)),this.Zi.getDocumentsMatchingQuery(t,e,ae.min(),n)}os(t,e,n,i){return this.Zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,e,n,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new tt(K),this.cs=new Re(o=>As(o),Rs),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Jc(r,t,e,n){return new Yc(r,t,e,n)}async function Va(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=G();for(const f of i){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:c}))})})}function Zc(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const I=f.batch,R=I.keys();let S=P.resolve();return R.forEach(N=>{S=S.next(()=>p.getEntry(h,N)).next(k=>{const C=f.docVersions.get(N);Y(C!==null),k.version.compareTo(C)<0&&(I.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),p.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=G();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Sa(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function th(r,t){const e=B(r),n=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((p,I)=>{const R=i.get(I);if(!R)return;c.push(e.Gr.removeMatchingKeys(o,p.removedDocuments,I).next(()=>e.Gr.addMatchingKeys(o,p.addedDocuments,I)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),i=i.insert(I,S),function(k,C,z){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(R,S,p)&&c.push(e.Gr.updateTargetData(o,S))});let h=Zt(),f=G();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(eh(o,u,t.documentUpdates).next(p=>{h=p.Is,f=p.Es})),!n.isEqual(q.min())){const p=e.Gr.getLastRemoteSnapshotVersion(o).next(I=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=i,o))}function eh(r,t,e){let n=G(),i=G();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Zt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(q.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:u,Es:i}})}function nh(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function rh(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Gr.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Gr.allocateTargetId(n).next(u=>(i=new ie(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function gs(r,t,e){const n=B(r),i=n.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Xe(u))throw u;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.us=n.us.remove(t),n.cs.delete(i.target)}function Ro(r,t,e){const n=B(r);let i=q.min(),o=G();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,p){const I=B(h),R=I.cs.get(p);return R!==void 0?P.resolve(I.us.get(R)):I.Gr.getTargetData(f,p)}(n,u,Bt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n._s.getDocumentsMatchingQuery(u,t,e?i:q.min(),e?o:G())).next(c=>(sh(n,Kl(t),c),{documents:c,ds:o})))}function sh(r,t,e){let n=r.ls.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ls.set(t,n)}class Po{constructor(){this.activeTargetIds=Yl()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ih{constructor(){this._o=new Po,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Po,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function rs(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class lh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,n,i,o,u){const c=rs(),h=this.No(e,n.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,u),this.Bo(e,h,f,i).then(p=>(M("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw qe("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}ko(e,n,i,o,u,c){return this.Oo(e,n,i,o,u)}Lo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+We}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,n){const i=ah[e];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,i){const o=rs();return new Promise((u,c)=>{const h=new jo;h.setWithCredentials(!0),h.listenOnce(zo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ir.NO_ERROR:const p=h.getResponseJson();M(Tt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),u(p);break;case ir.TIMEOUT:M(Tt,`RPC '${t}' ${o} timed out`),c(new O(V.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const I=h.getStatus();if(M(Tt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(C){const z=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(z)>=0?z:V.UNKNOWN}(S.status);c(new O(N,S.message))}else c(new O(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new O(V.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{M(Tt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);M(Tt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}qo(t,e,n){const i=rs(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=$o(),c=Ko(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");M(Tt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const I=u.createWebChannel(p,h);let R=!1,S=!1;const N=new uh({Eo:C=>{S?M(Tt,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(R||(M(Tt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),M(Tt,`RPC '${t}' stream ${i} sending:`,C),I.send(C))},Ao:()=>I.close()}),k=(C,z,X)=>{C.listen(z,W=>{try{X(W)}catch(rt){setTimeout(()=>{throw rt},0)}})};return k(I,fn.EventType.OPEN,()=>{S||(M(Tt,`RPC '${t}' stream ${i} transport opened.`),N.So())}),k(I,fn.EventType.CLOSE,()=>{S||(S=!0,M(Tt,`RPC '${t}' stream ${i} transport closed`),N.Do())}),k(I,fn.EventType.ERROR,C=>{S||(S=!0,qe(Tt,`RPC '${t}' stream ${i} transport errored:`,C),N.Do(new O(V.UNAVAILABLE,"The operation could not be completed")))}),k(I,fn.EventType.MESSAGE,C=>{var z;if(!S){const X=C.data[0];Y(!!X);const W=X,rt=(W==null?void 0:W.error)||((z=W[0])===null||z===void 0?void 0:z.error);if(rt){M(Tt,`RPC '${t}' stream ${i} received error:`,rt);const Lt=rt.status;let at=function(_){const y=ot[_];if(y!==void 0)return ga(y)}(Lt),E=rt.message;at===void 0&&(at=V.INTERNAL,E="Unknown error status: "+Lt+" with message "+rt.message),S=!0,N.Do(new O(at,E)),I.close()}else M(Tt,`RPC '${t}' stream ${i} received:`,X),N.vo(X)}}),k(c,Go.STAT_EVENT,C=>{C.stat===os.PROXY?M(Tt,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===os.NOPROXY&&M(Tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){return new gc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e,n=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-n);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e,n,i,o,u,c,h){this.li=t,this.Yo=n,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ca(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Jt(e.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===e&&this.I_(n,i)},n=>{t(()=>{const i=new O(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ch extends ba{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=vc(this.serializer,t),n=function(o){if(!("targetChange"in o))return q.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?q.min():u.readTime?zt(u.readTime):q.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=ps(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=cs(h)?{documents:Ic(o,h)}:{query:wc(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=va(o,u.resumeToken);const f=ds(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(q.min())>0){c.readTime=gr(o,u.snapshotVersion.toTimestamp());const f=ds(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Rc(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=ps(this.serializer),e.removeTarget=t,this.c_(e)}}class hh extends ba{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Tc(t.writeResults,t.commitTime),n=zt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=ps(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ec(this.serializer,n))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,fs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(V.UNKNOWN,o.toString())})}ko(t,e,n,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,fs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(V.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Jt(e),this.C_=!1):M("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{n.enqueueAndForget(async()=>{Ve(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=B(h);f.k_.add(4),await kn(f),f.K_.set("Unknown"),f.k_.delete(4),await kr(f)}(this))})}),this.K_=new fh(n,i)}}async function kr(r){if(Ve(r))for(const t of r.q_)await t(!0)}async function kn(r){for(const t of r.q_)await t(!1)}function Da(r,t){const e=B(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),Os(e)?Ls(e):Ye(e).s_()&&Ms(e,t))}function xs(r,t){const e=B(r),n=Ye(e);e.B_.delete(t),n.s_()&&ka(e,t),e.B_.size===0&&(n.s_()?n.a_():Ve(e)&&e.K_.set("Unknown"))}function Ms(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ye(r).V_(t)}function ka(r,t){r.U_.xe(t),Ye(r).m_(t)}function Ls(r){r.U_=new dc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),Ye(r).start(),r.K_.F_()}function Os(r){return Ve(r)&&!Ye(r).i_()&&r.B_.size>0}function Ve(r){return B(r).k_.size===0}function Na(r){r.U_=void 0}async function ph(r){r.K_.set("Online")}async function gh(r){r.B_.forEach((t,e)=>{Ms(r,t)})}async function _h(r,t){Na(r),Os(r)?(r.K_.O_(t),Ls(r)):r.K_.set("Unknown")}async function yh(r,t,e){if(r.K_.set("Online"),t instanceof ya&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.B_.delete(c),i.U_.removeTarget(c))}(r,t)}catch(n){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yr(r,n)}else if(t instanceof lr?r.U_.$e(t):t instanceof _a?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(q.min()))try{const n=await Sa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.B_.get(f);p&&o.B_.set(f,p.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const p=o.B_.get(h);if(!p)return;o.B_.set(h,p.withResumeToken(_t.EMPTY_BYTE_STRING,p.snapshotVersion)),ka(o,h);const I=new ie(p.target,h,f,p.sequenceNumber);Ms(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){M("RemoteStore","Failed to raise snapshot:",n),await yr(r,n)}}async function yr(r,t,e){if(!Xe(t))throw t;r.k_.add(1),await kn(r),r.K_.set("Offline"),e||(e=()=>Sa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await kr(r)})}function xa(r,t){return t().catch(e=>yr(r,e,t))}async function Nr(r){const t=B(r),e=he(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;vh(t);)try{const i=await nh(t.localStore,n);if(i===null){t.L_.length===0&&e.a_();break}n=i.batchId,Eh(t,i)}catch(i){await yr(t,i)}Ma(t)&&La(t)}function vh(r){return Ve(r)&&r.L_.length<10}function Eh(r,t){r.L_.push(t);const e=he(r);e.s_()&&e.f_&&e.g_(t.mutations)}function Ma(r){return Ve(r)&&!he(r).i_()&&r.L_.length>0}function La(r){he(r).start()}async function Th(r){he(r).w_()}async function Ih(r){const t=he(r);for(const e of r.L_)t.g_(e.mutations)}async function wh(r,t,e){const n=r.L_.shift(),i=Ss.from(n,t,e);await xa(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Nr(r)}async function Ah(r,t){t&&he(r).f_&&await async function(n,i){if(function(u){return lc(u)&&u!==V.ABORTED}(i.code)){const o=n.L_.shift();he(n).__(),await xa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Nr(n)}}(r,t),Ma(r)&&La(r)}async function So(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const n=Ve(e);e.k_.add(3),await kn(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await kr(e)}async function Rh(r,t){const e=B(r);t?(e.k_.delete(2),await kr(e)):t||(e.k_.add(2),await kn(e),e.K_.set("Unknown"))}function Ye(r){return r.W_||(r.W_=function(e,n,i){const o=B(e);return o.b_(),new ch(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:ph.bind(null,r),mo:gh.bind(null,r),po:_h.bind(null,r),R_:yh.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),Os(r)?Ls(r):r.K_.set("Unknown")):(await r.W_.stop(),Na(r))})),r.W_}function he(r){return r.G_||(r.G_=function(e,n,i){const o=B(e);return o.b_(),new hh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Th.bind(null,r),po:Ah.bind(null,r),p_:Ih.bind(null,r),y_:wh.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await Nr(r)):(await r.G_.stop(),r.L_.length>0&&(M("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Fs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Us(r,t){if(Jt("AsyncQueue",`${t}: ${r}`),Xe(r))return new O(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{static emptySet(t){return new Ue(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=mn(),this.sortedSet=new tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ue)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ue;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.z_=new tt(F.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):U():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ke{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ke(t,e,Ue.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Vh{constructor(){this.queries=bo(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const i=B(e),o=i.queries;i.queries=bo(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(n)})})(this,new O(V.ABORTED,"Firestore shutting down"))}}function bo(){return new Re(r=>sa(r),Pr)}async function Oa(r,t){const e=B(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(n=2):(o=new Ph,n=t.Z_()?0:1);try{switch(n){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Us(u,`Initialization of query '${Le(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&qs(e)}async function Fa(r,t){const e=B(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Sh(r,t){const e=B(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(i)&&(n=!0);u.H_=i}}n&&qs(e)}function Ch(r,t,e){const n=B(r),i=n.queries.get(t);if(i)for(const o of i.J_)o.onError(e);n.queries.delete(t)}function qs(r){r.X_.forEach(t=>{t.next()})}var _s,Do;(Do=_s||(_s={})).na="default",Do.Cache="cache";class Ua{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ke(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==_s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class bh{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=G(),this.mutatedKeys=G(),this.Va=ia(t),this.ma=new Ue(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Co,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,I)=>{const R=i.get(p),S=Vr(this.query,I)?I:null,N=!!R&&this.mutatedKeys.has(R.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;R&&S?R.data.isEqual(S.data)?N!==k&&(n.track({type:3,doc:S}),C=!0):this.ya(R,S)||(n.track({type:2,doc:S}),C=!0,(h&&this.Va(S,h)>0||f&&this.Va(S,f)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),C=!0):R&&!S&&(n.track({type:1,doc:R}),C=!0,(h||f)&&(c=!0)),C&&(S?(u=u.add(S),o=k?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{ma:u,pa:n,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((p,I)=>function(S,N){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return k(S)-k(N)}(p.type,I.type)||this.Va(p.doc,I.doc)),this.wa(n),i=i!=null&&i;const c=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,f=h!==this.Aa;return this.Aa=h,u.length!==0||f?{snapshot:new Ke(this.query,t.ma,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Co,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=G(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new Ba(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new qa(n))}),e}va(t){this.da=t.ds,this.Ra=G();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Ke.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Dh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class kh{constructor(t){this.key=t,this.Fa=!1}}class Nh{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new Re(c=>sa(c),Pr),this.Oa=new Map,this.Na=new Set,this.La=new tt(F.comparator),this.Ba=new Map,this.ka=new Ds,this.qa={},this.Qa=new Map,this.Ka=Ge.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xh(r,t,e=!0){const n=Qa(r);let i;const o=n.xa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await ja(n,t,e,!0),i}async function Mh(r,t){const e=Qa(r);await ja(e,t,!0,!1)}async function ja(r,t,e,n){const i=await rh(r.localStore,Bt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Lh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Da(r.remoteStore,i),c}async function Lh(r,t,e,n,i){r.Ua=(I,R,S)=>async function(k,C,z,X){let W=C.view.ga(z);W.ss&&(W=await Ro(k.localStore,C.query,!1).then(({documents:E})=>C.view.ga(E,W)));const rt=X&&X.targetChanges.get(C.targetId),Lt=X&&X.targetMismatches.get(C.targetId)!=null,at=C.view.applyChanges(W,k.isPrimaryClient,rt,Lt);return No(k,C.targetId,at.ba),at.snapshot}(r,I,R,S);const o=await Ro(r.localStore,t,!0),u=new bh(t,o.ds),c=u.ga(o.documents),h=Dn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);No(r,e,f.ba);const p=new Dh(t,e,u);return r.xa.set(t,p),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),f.snapshot}async function Oh(r,t,e){const n=B(r),i=n.xa.get(t),o=n.Oa.get(i.targetId);if(o.length>1)return n.Oa.set(i.targetId,o.filter(u=>!Pr(u,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await gs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&xs(n.remoteStore,i.targetId),ys(n,i.targetId)}).catch(He)):(ys(n,i.targetId),await gs(n.localStore,i.targetId,!0))}async function Fh(r,t){const e=B(r),n=e.xa.get(t),i=e.Oa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),xs(e.remoteStore,n.targetId))}async function Uh(r,t,e){const n=$h(r);try{const i=await function(u,c){const h=B(u),f=lt.now(),p=c.reduce((S,N)=>S.add(N.key),G());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=Zt(),k=G();return h.hs.getEntries(S,p).next(C=>{N=C,N.forEach((z,X)=>{X.isValidDocument()||(k=k.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(C=>{I=C;const z=[];for(const X of c){const W=sc(X,I.get(X.key).overlayedDocument);W!=null&&z.push(new Pe(X.key,W,Yo(W.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,z,c)}).next(C=>{R=C;const z=C.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(S,C.batchId,z)})}).then(()=>({batchId:R.batchId,changes:aa(I)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.qa[u.currentUser.toKey()];f||(f=new tt(K)),f=f.insert(c,h),u.qa[u.currentUser.toKey()]=f}(n,i.batchId,e),await Nn(n,i.changes),await Nr(n.remoteStore)}catch(i){const o=Us(i,"Failed to persist write");e.reject(o)}}async function za(r,t){const e=B(r);try{const n=await th(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ba.get(o);u&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?Y(u.Fa):i.removedDocuments.size>0&&(Y(u.Fa),u.Fa=!1))}),await Nn(e,n,t)}catch(n){await He(n)}}function ko(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=B(u);h.onlineState=c;let f=!1;h.queries.forEach((p,I)=>{for(const R of I.J_)R.ea(c)&&(f=!0)}),f&&qs(h)}(n.eventManager,t),i.length&&n.Ma.R_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function qh(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ba.get(t),o=i&&i.key;if(o){let u=new tt(F.comparator);u=u.insert(o,wt.newNoDocument(o,q.min()));const c=G().add(o),h=new br(q.min(),new Map,new tt(K),u,c);await za(n,h),n.La=n.La.remove(o),n.Ba.delete(t),Bs(n)}else await gs(n.localStore,t,!1).then(()=>ys(n,t,e)).catch(He)}async function Bh(r,t){const e=B(r),n=t.batch.batchId;try{const i=await Zc(e.localStore,t);Ka(e,n,null),Ga(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Nn(e,i)}catch(i){await He(i)}}async function jh(r,t,e){const n=B(r);try{const i=await function(u,c){const h=B(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(I=>(Y(I!==null),p=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(n.localStore,t);Ka(n,t,e),Ga(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Nn(n,i)}catch(i){await He(i)}}function Ga(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function Ka(r,t,e){const n=B(r);let i=n.qa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.qa[n.currentUser.toKey()]=i}}function ys(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||$a(r,n)})}function $a(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(xs(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),Bs(r))}function No(r,t,e){for(const n of e)n instanceof qa?(r.ka.addReference(n.key,t),zh(r,n)):n instanceof Ba?(M("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||$a(r,n.key)):U()}function zh(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(M("SyncEngine","New document in limbo: "+e),r.Na.add(n),Bs(r))}function Bs(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new F(nt.fromString(t)),n=r.Ka.next();r.Ba.set(n,new kh(e)),r.La=r.La.insert(e,n),Da(r.remoteStore,new ie(Bt(Rr(e.path)),n,"TargetPurposeLimboResolution",Tr.oe))}}async function Nn(r,t,e){const n=B(r),i=[],o=[],u=[];n.xa.isEmpty()||(n.xa.forEach((c,h)=>{u.push(n.Ua(h,t,e).then(f=>{var p;if((f||e)&&n.isPrimaryClient){const I=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Ns.zi(h.targetId,f);o.push(I)}}))}),await Promise.all(u),n.Ma.R_(i),await async function(h,f){const p=B(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(f,R=>P.forEach(R.Wi,S=>p.persistence.referenceDelegate.addReference(I,R.targetId,S)).next(()=>P.forEach(R.Gi,S=>p.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))}catch(I){if(!Xe(I))throw I;M("LocalStore","Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const S=p.us.get(R),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);p.us=p.us.insert(R,k)}}}(n.localStore,o))}async function Gh(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const n=await Va(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new O(V.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Nn(e,n.Ts)}}function Kh(r,t){const e=B(r),n=e.Ba.get(t);if(n&&n.Fa)return G().add(n.key);{let i=G();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const c=e.xa.get(u);i=i.unionWith(c.view.fa)}return i}}function Qa(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=za.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qh.bind(null,t),t.Ma.R_=Sh.bind(null,t.eventManager),t.Ma.Wa=Ch.bind(null,t.eventManager),t}function $h(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jh.bind(null,t),t}class vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Jc(this.persistence,new Xc,t.initialUser,this.serializer)}ja(t){return new Pa(ks.ei,this.serializer)}za(t){return new ih}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vr.provider={build:()=>new vr};class Qh extends vr{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){Y(this.persistence.referenceDelegate instanceof _r);const n=this.persistence.referenceDelegate.garbageCollector;return new Mc(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Pa(n=>_r.ei(n,e),this.serializer)}}class vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ko(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gh.bind(null,this.syncEngine),await Rh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Vh}()}createDatastore(t){const e=Dr(t.databaseInfo.databaseId),n=function(o){return new lh(o)}(t.databaseInfo);return function(o,u,c,h){return new dh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new mh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ko(this.syncEngine,e,0),function(){return Vo.p()?new Vo:new oh}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,p){const I=new Nh(i,o,u,c,h,f);return p&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);M("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await kn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}vs.provider={build:()=>new vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Jt("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=Wo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{M("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(M("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Us(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function is(r,t){r.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Va(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function xo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Hh(r);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>So(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>So(t.remoteStore,i)),r._onlineComponents=t}async function Hh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await is(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;qe("Error using user provided cache. Falling back to memory cache: "+e),await is(r,new vr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await is(r,new Qh(void 0));return r._offlineComponents}async function Ha(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await xo(r,r._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await xo(r,new vs))),r._onlineComponents}function Xh(r){return Ha(r).then(t=>t.syncEngine)}async function Es(r){const t=await Ha(r),e=t.eventManager;return e.onListen=xh.bind(null,t.syncEngine),e.onUnlisten=Oh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Fh.bind(null,t.syncEngine),e}function Yh(r,t,e={}){const n=new oe;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const p=new Wa({next:R=>{p.eu(),u.enqueueAndForget(()=>Fa(o,I));const S=R.docs.has(c);!S&&R.fromCache?f.reject(new O(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&h&&h.source==="server"?f.reject(new O(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new Ua(Rr(c.path),p,{includeMetadataChanges:!0,ua:!0});return Oa(o,I)}(await Es(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(r,t,e){if(!e)throw new O(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Zh(r,t,e,n){if(t===!0&&n===!0)throw new O(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Lo(r){if(!F.isDocumentKey(r))throw new O(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function js(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":U()}function Yt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new O(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=js(r);throw new O(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new O(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cl;switch(n.type){case"firstParty":return new ml(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mo.get(e);n&&(M("ComponentProvider","Removing Datastore"),Mo.delete(e),n.terminate())}(this),Promise.resolve()}}function td(r,t,e,n={}){var i;const o=(r=Yt(r,zs))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&qe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=It.MOCK_USER;else{c=$u(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new O(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new It(f)}r._authCredentials=new hl(new Qo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xr(this.firestore,t,this._query)}}class kt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class Sn extends xr{constructor(t,e,n){super(t,e,Rr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new F(t))}withConverter(t){return new Sn(this.firestore,t,this._path)}}function Ht(r,t,...e){if(r=Tn(r),arguments.length===1&&(t=Wo.newId()),Jh("doc","path",t),r instanceof zs){const n=nt.fromString(t,...e);return Lo(n),new kt(r,null,new F(n))}{if(!(r instanceof kt||r instanceof Sn))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(nt.fromString(t,...e));return Lo(n),new kt(r.firestore,r instanceof Sn?r.converter:null,new F(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ca(this,"async_queue_retry"),this.fu=()=>{const n=ss();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new oe;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Xe(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Jt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=Fs.createAndSchedule(this,t,e,n,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&U()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function Uo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class $e extends zs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Fo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fo(t),this._firestoreClient=void 0,await t}}}function ed(r,t){const e=typeof r=="object"?r:zu(),n=typeof r=="string"?r:"(default)",i=Gu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Ku("firestore");o&&td(i,...o)}return i}function Gs(r){if(r._terminated)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||nd(r),r._firestoreClient}function nd(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,p){return new Cl(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Xa(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Wh(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(_t.fromBase64String(t))}catch(e){throw new O(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qe(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=/^__.*__$/;class sd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new bn(t,this.data,e,this.fieldTransforms)}}function Ja(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ws{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Ws(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Lu(t),i}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Er(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Ja(this.Mu)&&rd.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class id{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Dr(t)}$u(t,e,n,i=!1){return new Ws({Mu:t,methodName:e,Ku:n,path:gt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function od(r){const t=r._freezeSettings(),e=Dr(r._databaseId);return new id(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ad(r,t,e,n,i,o={}){const u=r.$u(o.merge||o.mergeFields?2:0,t,e,i);nu("Data must be an object, but it was:",u,n);const c=tu(n,u);let h,f;if(o.merge)h=new Ut(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const R=ud(t,I,e);if(!u.contains(R))throw new O(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);cd(p,R)||p.push(R)}h=new Ut(p),f=u.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=u.fieldTransforms;return new sd(new Mt(c),h,f)}function Za(r,t){if(eu(r=Tn(r)))return nu("Unsupported field value:",t,r),tu(r,t);if(r instanceof Ya)return function(n,i){if(!Ja(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=Za(c,i.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Tn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Jl(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=lt.fromDate(n);return{timestampValue:gr(i.serializer,o)}}if(n instanceof lt){const o=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:gr(i.serializer,o)}}if(n instanceof $s)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qe)return{bytesValue:va(i.serializer,n._byteString)};if(n instanceof kt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:bs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Qs)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Ps(c.serializer,h)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${js(n)}`)}(r,t)}function tu(r,t){const e={};return Ho(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(r,(n,i)=>{const o=Za(i,t.Ou(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function eu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof lt||r instanceof $s||r instanceof Qe||r instanceof kt||r instanceof Ya||r instanceof Qs)}function nu(r,t,e){if(!eu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=js(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function ud(r,t,e){if((t=Tn(t))instanceof Ks)return t._internalPath;if(typeof t=="string")return ru(r,t);throw Er("Field path arguments must be of type string or ",r,!1,void 0,e)}const ld=new RegExp("[~\\*/\\[\\]]");function ru(r,t,e){if(t.search(ld)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ks(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Er(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new O(V.INVALID_ARGUMENT,c+r+h)}function cd(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(iu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hd extends su{data(){return super.data()}}function iu(r,t){return typeof t=="string"?ru(r,t):t instanceof Ks?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fd{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ae(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>st(u.doubleValue));return new Qs(o)}convertGeoPoint(t){return new $s(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=wr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const e=ue(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=nt.fromString(t);Y(Ra(n));const i=new An(n.get(1),n.get(3)),o=new F(n.popFirst(5));return i.isEqual(e)||Jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ou extends su{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class cr extends ou{data(t={}){return super.data(t)}}class pd{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new gn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new cr(this._firestore,this._userDataWriter,n.key,n,new gn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new gn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new gn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),p=u.indexOf(c.doc.key)),{type:gd(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function gd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(r){r=Yt(r,kt);const t=Yt(r.firestore,$e);return Yh(Gs(t),r._key).then(e=>lu(t,r,e))}class au extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function xe(r,t,e){r=Yt(r,kt);const n=Yt(r.firestore,$e),i=md(r.converter,t,e);return uu(n,[ad(od(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,jt.none())])}function _d(r){return uu(Yt(r.firestore,$e),[new Vs(r._key,jt.none())])}function qo(r,...t){var e,n,i;r=Tn(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Uo(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Uo(t[u])){const I=t[u];t[u]=(e=I.next)===null||e===void 0?void 0:e.bind(I),t[u+1]=(n=I.error)===null||n===void 0?void 0:n.bind(I),t[u+2]=(i=I.complete)===null||i===void 0?void 0:i.bind(I)}let h,f,p;if(r instanceof kt)f=Yt(r.firestore,$e),p=Rr(r._key.path),h={next:I=>{t[u]&&t[u](lu(f,r,I))},error:t[u+1],complete:t[u+2]};else{const I=Yt(r,xr);f=Yt(I.firestore,$e),p=I._query;const R=new au(f);h={next:S=>{t[u]&&t[u](new pd(f,R,I,S))},error:t[u+1],complete:t[u+2]},dd(r._query)}return function(R,S,N,k){const C=new Wa(k),z=new Ua(S,C,N);return R.asyncQueue.enqueueAndForget(async()=>Oa(await Es(R),z)),()=>{C.eu(),R.asyncQueue.enqueueAndForget(async()=>Fa(await Es(R),z))}}(Gs(f),p,c,h)}function uu(r,t){return function(n,i){const o=new oe;return n.asyncQueue.enqueueAndForget(async()=>Uh(await Xh(n),i,o)),o.promise}(Gs(r),t)}function lu(r,t,e){const n=e.docs.get(t._key),i=new au(r);return new ou(r,i,t._key,n,new gn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){We=i})(Qu),qu(new Bu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new $e(new dl(n.getProvider("auth-internal")),new gl(n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(f.options.projectId,p)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Wi(eo,"4.7.5",t),Wi(eo,"4.7.5","esm2017")})();const yd={apiKey:"AIzaSyDIrl8-LP0_q4wA2HYqJ4otnLumKwDrgqw",authDomain:"approximot-2-0.firebaseapp.com",projectId:"approximot-2-0",storageBucket:"approximot-2-0.firebasestorage.app",messagingSenderId:"127797921459",appId:"1:127797921459:web:a18b22fac10999c44752c6"};let Cn;Cn||(Cn=Xu(yd,"mobileApp"));const vd=Yu(Cn),Ee=ed(Cn),Ed=Object.freeze(Object.defineProperty({__proto__:null,authMobile:vd,get firebaseAppMobile(){return Cn},firestoreMobile:Ee},Symbol.toStringTag,{value:"Module"})),Td={key:0},Id=["disabled"],wd={key:1},Ad=["disabled"],Rd=["disabled"],Pd={key:0},Vd={key:1},Sd={key:0},Cd={key:1,style:{color:"red"}},bd={key:1},Dd={key:2},Od={__name:"GameOnline",setup(r){const t=il(),e=mt([]);dn(()=>{const D=t.query.results;if(D)try{e.value=JSON.parse(D),console.log("Données reçues et parsées:",e.value)}catch(x){console.error("Erreur lors du parsing des résultats:",x)}else console.log("Aucune donnée reçue.")});const n=ll("http://localhost:3000"),i=mt(""),o=mt(""),u=mt(""),c=mt(""),h=mt(!1),f=mt(""),p=mt([]),I=mt([]),R=mt(0),S=mt("collaboration"),N=mt(""),k=mt(""),C=mt(!1);let z=null;const X=mt(null),W=mt(!1),rt=mt(!1),Lt=async()=>{const D=Wt.currentUser;if(D){const x=Hi(Xi,`users/${D.uid}`);try{const j=await ol(x);j.exists()&&(N.value=j.val().pseudo,k.value=D.uid)}catch(j){console.error("Erreur lors de la récupération du pseudo :",j)}}},at=async()=>{const D=Wt.currentUser;D&&(N.value=D.uid.substring(0,4),k.value=D.uid)};dn(()=>{C.value?at():Lt()});const E=async()=>{var L,$;if(!k.value){k.value=Wt.currentUser.uid;return}const D=Ht(Ee,"users",k.value),x=await se(D),j={activeGame:null,lastSeen:new Date().toISOString(),displayName:N.value||Wt.currentUser.displayName||"User",email:((L=Wt.currentUser)==null?void 0:L.email)||"unknown@example.com",photoURL:(($=Wt.currentUser)==null?void 0:$.photoURL)||"null",singlePlayerGuesses:[]};x.exists()||(j.createdAt=new Date().toISOString());try{await xe(D,j,{merge:!0})}catch(it){console.error("Error registering or updating user:",it)}},m=async(D,x)=>{try{const j=await fetch("https://approximot-1967d63b9545.herokuapp.com/similarity",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word1:D,word2:x})});if(j.status===404)throw new Error(`Word not found: ${D}`);if(j.ok){const L=await j.json();if(L.success)return L.similarity}return null}catch(j){return console.error("Error getting similarity:",j),null}},_=async(D,x,j)=>{const L=Ht(Ee,"game_sessions",D),$=await se(L);if(!$.exists())throw new Error("Session does not exist");const dt=$.data().playerGuesses||{};dt[x]||(dt[x]=[]);const Nt=dt[x];if(Nt.some(xt=>xt.word===j.word))return;const qt=parseFloat(j.similarity);Nt.push({...j,similarity:qt}),await xe(L,{playerGuesses:dt,lastUpdate:Date.now()},{merge:!0})},y=async()=>{const{authMobile:D,firestoreMobile:x}=await ul(async()=>{const{authMobile:L,firestoreMobile:$}=await Promise.resolve().then(()=>Ed);return{authMobile:L,firestoreMobile:$}},void 0),j=prompt("Entrez le code du jeu pour rejoindre:");if(j){await E();const L=Wt.currentUser;if(!L){console.error("User is not signed in."),alert("You must be signed in to join a game.");return}k.value||(k.value=L.uid);const $=Ht(x,"game_sessions",j);try{const it=await se($);if(it.exists()){const dt=it.data();if(dt.isActive){const Nt=dt.playerIds||[];if(Nt.includes(k.value)){i.value=j,I.value=Nt;const pe=Ht(x,"game","currentWord"),Ce=await se(pe);Ce.exists()?u.value=Ce.data().word:console.error("Current word document does not exist!"),C.value=!0,te(),alert("Vous êtes déjà dans cette session !");return}Nt.push(k.value),await xe($,{playerIds:Nt},{merge:!0}),await xe($,{currentUserId:k.value},{merge:!0}),i.value=j;const qt=await se($);if(qt.exists()){const pe=qt.data();I.value=pe.playerIds||[]}const xt=Ht(x,"game","currentWord"),Se=await se(xt);Se.exists()?u.value=Se.data().word:console.error("Current word document does not exist!"),C.value=!0,alert("Session rejointe avec succès !"),te()}else xn(),alert("Cette session n'est plus active !")}else alert("Session non trouvée !")}catch(it){console.error("Erreur lors de la récupération de la session :",it)}}},v=()=>{n.emit("createSession",{mode:S.value,userId:k.value,pseudo:N.value},D=>{D.error?alert(`Erreur : ${D.error}`):(i.value=D.sessionId,u.value=D.randomWord,alert(`Session créée avec succès : ${D.sessionId}`))})},w=()=>{o.value.trim()&&n.emit("joinSession",{sessionId:o.value.trim(),userId:k.value,pseudo:N.value},D=>{D.error?alert(`Erreur : ${D.error}`):(i.value=o.value.trim(),u.value=D.randomWord,alert("Session rejointe avec succès !"),C.value&&(te(),Ln()))})},g=async()=>{const D=c.value.trim();D?(C.value?await fe(D):n.emit("submitWord",{sessionId:i.value,userId:k.value,pseudo:N.value,submittedWord:D}),c.value=""):alert("Veuillez entrer un mot valide.")},Ot=Ju(()=>[...p.value].sort((D,x)=>x.similarity-D.similarity));dn(()=>{n.on("updatePlayers",D=>{I.value=D}),n.on("updateGame",D=>{p.value.push({pseudo:D.pseudo,word:D.word,similarity:D.similarity}),R.value=D.totalAttempts}),n.on("gameEnd",D=>{h.value=!0,f.value=`${D.win} (${D.totalAttempts} ${D.totalAttempts>1?"coups":"coup"} au total !)`,de()}),n.on("resetGame",()=>{R.value=0,p.value=[],h.value=!1,f.value="",c.value=""})});const de=async()=>{const D=Wt.currentUser;if(!D){console.error("Utilisateur non authentifié.");return}const x=new Date().toISOString().split("T")[0],j=new Date().toISOString().replace(/[.:"T]/g,"_"),L=Hi(Xi,`users/${D.uid}/words/${j}`),$={date:x,word:u.value,attempts:R.value};try{await Zu(L,$),console.log("Résultat sauvegardé avec succès pour l'utilisateur :",D.uid)}catch(it){console.error("Erreur lors de la sauvegarde :",it)}};tl(()=>{n.disconnect()});const xn=async()=>{W.value=!1;const D=Ht(Ee,"game_sessions",i.value);try{const x=await se(D);if(x.exists()){const $=(x.data().playerIds||[]).filter(it=>it!==k.value);$.length===0?await _d(D):await xe(D,{playerIds:$},{merge:!0}),i.value="",u.value="",c.value="",p.value=[],C.value=!1,I.value=[],h.value=!1,f.value="",alert("Vous avez quitté la session avec succès !")}z&&(z(),z=null)}catch{i.value="",u.value="",c.value="",p.value=[],C.value=!1,I.value=[],h.value=!1,f.value="",alert("Une erreur s'est produite lors de la tentative de quitter la session. Retour à l'écran d'accueil.")}},fe=async D=>{const x=D.trim().toLowerCase();if(x===""){alert("Le mot est vide ou invalide.");return}if(p.value.find($=>$.word===x))return;const L=await m(x,u.value);if(L!==null){const $={word:x,similarity:L,isCorrect:x===u.value};await _(i.value,k.value,$);const it={pseudo:Wt.currentUser.uid.substring(0,4),word:x,similarity:L};if(p.value.push(it),$.isCorrect&&!W.value){if(C.value){await fetch("https://approximot-1967d63b9545.herokuapp.com/increment-found-count",{method:"POST",headers:{"Content-Type":"application/json"}});const dt=Ht(Ee,"game_sessions",i.value),Nt=await se(dt);if(Nt.exists()){const xt=Nt.data().winners||[];xt.includes(k.value)||xt.push(k.value),await xe(dt,{winners:xt,wordFound:!0},{merge:!0})}}alert(`Félicitations ! Vous avez trouvé le mot : ${u.value}`),W.value=!0}}else alert("Ce mot n'est pas dans le dictionnaire.")},me=()=>{n.on("updateGame",D=>{if(D.guess){const x={pseudo:D.pseudo,word:D.guess.word,similarity:D.guess.similarity,uid:D.userId};p.value.find(L=>L.word===x.word)||p.value.push(x)}})};dn(()=>{me()});const te=()=>{if(!i.value)return;const D=Ht(Ee,"game_sessions",i.value);z=qo(D,x=>{if(x.exists()){const j=x.data();X.value=j;const L=new Set(p.value.map($=>$.word));for(const $ in j.playerGuesses){const it=j.playerGuesses[$];for(const dt of it)$!==k.value&&!dt.isCorrect&&!L.has(dt.word)&&(p.value.push({...dt,pseudo:$.substring(0,4)}),L.add(dt.word))}j.wordFound&&j.winners.length>0&&!rt.value&&!j.winners.includes(k.value)&&(Mn(),rt.value=!0)}else console.error("Session does not exist.")})},Mn=()=>{alert("Un joueur a trouvé le mot secret !")};dn(()=>{C.value&&(te(),Ln())});const Ln=()=>{const D=Ht(Ee,"game","currentWord");let x=null;qo(D,j=>{if(j.exists()){const L=j.data().word;L!==x&&(u.value=L,p.value=[],x=L,W.value=!1)}else console.error("Current word document does not exist.")})};return(D,x)=>{const j=al("router-link");return Ct(),Vt("div",null,[x[5]||(x[5]=Pt("h1",null,"Jeu de Similarité",-1)),i.value?(Ct(),Vt("div",wd,[Pt("p",null,[x[3]||(x[3]=nl("ID de session : ")),Pt("strong",null,St(i.value),1)]),Pt("p",null,"Joueurs connectés : "+St(I.value.length),1),Pt("p",null,"Mot aléatoire : "+St(u.value),1),Pt("p",null,"Nombre total de coups : "+St(R.value+e.value.length),1),es(Pt("input",{"onUpdate:modelValue":x[2]||(x[2]=L=>c.value=L),placeholder:"Entrez un mot",disabled:h.value||I.value.length<2},null,8,Ad),[[Yi,c.value]]),Pt("button",{onClick:g,disabled:h.value||I.value.length<2},"Soumettre",8,Rd),C.value?(Ct(),Vt("button",{key:0,onClick:xn},"Quitter la session")):Zn("",!0),Pt("ul",null,[C.value?Zn("",!0):(Ct(!0),Vt(Ji,{key:0},Zi(e.value,(L,$)=>(Ct(),Vt("li",{key:$},[L.error!==!0?(Ct(),Vt("p",Pd,St(L.word1)+" - "+St(L.word2)+" : "+St((L.similarity*100).toFixed(2))+"°",1)):(Ct(),Vt("p",Vd,'Le mot "'+St(L.word1)+`" n'est pas dans le vocabulaire`,1))]))),128)),(Ct(!0),Vt(Ji,null,Zi(Ot.value,(L,$)=>(Ct(),Vt("li",{key:$},[L.similarity!==void 0?(Ct(),Vt("span",Sd,St(L.pseudo)+' a soumis "'+St(L.word)+'" : '+St((L.similarity*100).toFixed(2))+"°",1)):(Ct(),Vt("span",Cd,'Le mot "'+St(L.word)+`" n'est pas dans le vocabulaire`,1))]))),128))]),h.value?(Ct(),Vt("p",bd,St(f.value)+' Le mot à deviner était "'+St(u.value)+'" !',1)):Zn("",!0),h.value?(Ct(),Vt("div",Dd,[rl(j,{to:"/home"},{default:sl(()=>x[4]||(x[4]=[Pt("button",null,"Retour à l'accueil",-1)])),_:1})])):Zn("",!0)])):(Ct(),Vt("div",Td,[es(Pt("input",{type:"radio",value:"collaboration","onUpdate:modelValue":x[0]||(x[0]=L=>S.value=L),hidden:""},null,512),[[el,S.value]]),Pt("button",{onClick:v},"Créer une session"),es(Pt("input",{"onUpdate:modelValue":x[1]||(x[1]=L=>o.value=L),placeholder:"Entrez un ID de session"},null,512),[[Yi,o.value]]),Pt("button",{onClick:w,disabled:!o.value.trim()},"Rejoindre",8,Id),Pt("button",{onClick:y},"Rejoindre un joueur sur téléphone")]))])}}};export{Od as default};
