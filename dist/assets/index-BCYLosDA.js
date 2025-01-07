const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Dw18OzF0.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Home-DnS-3GbB.css","assets/Register-kFmWGwbu.js","assets/Register-R9ddabZU.css","assets/Login-V3Ti76AA.js","assets/fondLetter-DdOmRNGz.js","assets/OldWords-5yTg3it6.js","assets/OldWords-ClLKBWX7.css","assets/Profil-cPFK0eme.js","assets/Profil-0bbw0xpE.css","assets/GameOnline-BM044gtT.js","assets/index-TjCxX7sJ.js","assets/GameOnline-U-1sKgzj.css","assets/GameOnlineAffrontement-80PTWEP7.js","assets/Game-DlOocRPA.js","assets/Game-oIctDRkt.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ca(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},Kn=[],gt=()=>{},_p=()=>!1,Er=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ua=t=>t.startsWith("onUpdate:"),Ce=Object.assign,ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gp=Object.prototype.hasOwnProperty,Z=(t,e)=>gp.call(t,e),V=Array.isArray,qn=t=>hi(t)==="[object Map]",Ou=t=>hi(t)==="[object Set]",Tl=t=>hi(t)==="[object Date]",$=t=>typeof t=="function",_e=t=>typeof t=="string",vt=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",ku=t=>(ue(t)||$(t))&&$(t.then)&&$(t.catch),xu=Object.prototype.toString,hi=t=>xu.call(t),mp=t=>hi(t).slice(8,-1),Du=t=>hi(t)==="[object Object]",da=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vp=/-(\w)/g,Je=wr(t=>t.replace(vp,(e,n)=>n?n.toUpperCase():"")),yp=/\B([A-Z])/g,Dn=wr(t=>t.replace(yp,"-$1").toLowerCase()),Ir=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yr=wr(t=>t?`on${Ir(t)}`:""),Xt=(t,e)=>!Object.is(t,e),ki=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sl;const Cr=()=>Sl||(Sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?Cp(s):fa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||ue(t))return t}const Ep=/;(?![^(]*\))/g,wp=/:([^]+)/,Ip=/\/\*[^]*?\*\//g;function Cp(t){const e={};return t.replace(Ip,"").split(Ep).forEach(n=>{if(n){const s=n.split(wp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pa(t){let e="";if(_e(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=pa(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=ca(bp);function Lu(t){return!!t||t===""}function Sp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Bi(t[s],e[s]);return n}function Bi(t,e){if(t===e)return!0;let n=Tl(t),s=Tl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=vt(t),s=vt(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Sp(t,e):!1;if(n=ue(t),s=ue(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Bi(t[o],e[o]))return!1}}return String(t)===String(e)}const Fu=t=>!!(t&&t.__v_isRef===!0),Rp=t=>_e(t)?t:t==null?"":V(t)||ue(t)&&(t.toString===xu||!$(t.toString))?Fu(t)?Rp(t.value):JSON.stringify(t,Uu,2):String(t),Uu=(t,e)=>Fu(e)?Uu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Qr(s,r)+" =>"]=i,n),{})}:Ou(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qr(n))}:vt(e)?Qr(e):ue(e)&&!V(e)&&!Du(e)?String(e):e,Qr=(t,e="")=>{var n;return vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Pp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ap(){return $e}let le;const Jr=new WeakSet;class Hu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jr.has(this)&&(Jr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rl(this),Bu(this);const e=le,n=rt;le=this,rt=!0;try{return this.fn()}finally{$u(this),le=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ma(e);this.deps=this.depsTail=void 0,Rl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){So(this)&&this.run()}get dirty(){return So(this)}}let Wu=0,xs,Ds;function Vu(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=xs,xs=t}function _a(){Wu++}function ga(){if(--Wu>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xs;){let e=xs;for(xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Bu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $u(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ma(s),Np(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function So(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ju(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ju(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ks))return;t.globalVersion=Ks;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!So(t)){t.flags&=-3;return}const n=le,s=rt;le=t,rt=!0;try{Bu(t);const i=t.fn(t._value);(e.version===0||Xt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,rt=s,$u(t),t.flags&=-3}}function ma(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ma(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Np(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const Gu=[];function ln(){Gu.push(rt),rt=!1}function cn(){const t=Gu.pop();rt=t===void 0?!0:t}function Rl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let Ks=0;class Op{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class va{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!rt||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Op(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Ku(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){_a();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ga()}}}function Ku(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ku(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ro=new WeakMap,Tn=Symbol(""),Po=Symbol(""),qs=Symbol("");function Te(t,e,n){if(rt&&le){let s=Ro.get(t);s||Ro.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new va),i.map=s,i.key=n),i.track()}}function St(t,e,n,s,i,r){const o=Ro.get(t);if(!o){Ks++;return}const a=l=>{l&&l.trigger()};if(_a(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&da(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===qs||!vt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(qs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Tn)),qn(t)&&a(o.get(Po)));break;case"delete":l||(a(o.get(Tn)),qn(t)&&a(o.get(Po)));break;case"set":qn(t)&&a(o.get(Tn));break}}ga()}function Hn(t){const e=X(t);return e===t?e:(Te(e,"iterate",qs),Qe(t)?e:e.map(Se))}function br(t){return Te(t=X(t),"iterate",qs),t}const kp={__proto__:null,[Symbol.iterator](){return Xr(this,Symbol.iterator,Se)},concat(...t){return Hn(this).concat(...t.map(e=>V(e)?Hn(e):e))},entries(){return Xr(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return It(this,"every",t,e,void 0,arguments)},filter(t,e){return It(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return It(this,"find",t,e,Se,arguments)},findIndex(t,e){return It(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return It(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return It(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return It(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zr(this,"includes",t)},indexOf(...t){return Zr(this,"indexOf",t)},join(t){return Hn(this).join(t)},lastIndexOf(...t){return Zr(this,"lastIndexOf",t)},map(t,e){return It(this,"map",t,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...t){return ws(this,"push",t)},reduce(t,...e){return Pl(this,"reduce",t,e)},reduceRight(t,...e){return Pl(this,"reduceRight",t,e)},shift(){return ws(this,"shift")},some(t,e){return It(this,"some",t,e,void 0,arguments)},splice(...t){return ws(this,"splice",t)},toReversed(){return Hn(this).toReversed()},toSorted(t){return Hn(this).toSorted(t)},toSpliced(...t){return Hn(this).toSpliced(...t)},unshift(...t){return ws(this,"unshift",t)},values(){return Xr(this,"values",Se)}};function Xr(t,e,n){const s=br(t),i=s[e]();return s!==t&&!Qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const xp=Array.prototype;function It(t,e,n,s,i,r){const o=br(t),a=o!==t&&!Qe(t),l=o[e];if(l!==xp[e]){const h=l.apply(t,r);return a?Se(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Se(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Pl(t,e,n,s){const i=br(t);let r=n;return i!==t&&(Qe(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Se(a),l,t)}),i[e](r,...s)}function Zr(t,e,n){const s=X(t);Te(s,"iterate",qs);const i=s[e](...n);return(i===-1||i===!1)&&wa(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function ws(t,e,n=[]){ln(),_a();const s=X(t)[e].apply(t,n);return ga(),cn(),s}const Dp=ca("__proto__,__v_isRef,__isVue"),qu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vt));function Mp(t){vt(t)||(t=String(t));const e=X(this);return Te(e,"has",t),e.hasOwnProperty(t)}class zu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Gp:Xu:r?Ju:Qu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=kp[n]))return l;if(n==="hasOwnProperty")return Mp}const a=Reflect.get(e,n,Ae(e)?e:s);return(vt(n)?qu.has(n):Dp(n))||(i||Te(e,"get",n),r)?a:Ae(a)?o&&da(n)?a:a.value:ue(a)?i?eh(a):Tr(a):a}}class Yu extends zu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Sn(r);if(!Qe(s)&&!Sn(s)&&(r=X(r),s=X(s)),!V(e)&&Ae(r)&&!Ae(s))return l?!1:(r.value=s,!0)}const o=V(e)&&da(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,s,Ae(e)?e:i);return e===X(i)&&(o?Xt(s,r)&&St(e,"set",n,s):St(e,"add",n,s)),a}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&St(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!vt(n)||!qu.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",V(e)?"length":Tn),Reflect.ownKeys(e)}}class Lp extends zu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fp=new Yu,Up=new Lp,Hp=new Yu(!0);const Ao=t=>t,Si=t=>Reflect.getPrototypeOf(t);function Wp(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ao:e?No:Se;return!e&&Te(r,"iterate",l?Po:Tn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ri(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vp(t,e){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);t||(Xt(i,a)&&Te(o,"get",i),Te(o,"get",a));const{has:l}=Si(o),c=e?Ao:t?No:Se;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(X(i),"iterate",Tn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return t||(Xt(i,a)&&Te(o,"has",i),Te(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=X(a),c=e?Ao:t?No:Se;return!t&&Te(l,"iterate",Tn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ce(n,t?{add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear")}:{add(i){!e&&!Qe(i)&&!Sn(i)&&(i=X(i));const r=X(this);return Si(r).has.call(r,i)||(r.add(i),St(r,"add",i,i)),this},set(i,r){!e&&!Qe(r)&&!Sn(r)&&(r=X(r));const o=X(this),{has:a,get:l}=Si(o);let c=a.call(o,i);c||(i=X(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Xt(r,u)&&St(o,"set",i,r):St(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=Si(r);let l=o.call(r,i);l||(i=X(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&St(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&St(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Wp(i,t,e)}),n}function ya(t,e){const n=Vp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const Bp={get:ya(!1,!1)},$p={get:ya(!1,!0)},jp={get:ya(!0,!1)};const Qu=new WeakMap,Ju=new WeakMap,Xu=new WeakMap,Gp=new WeakMap;function Kp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qp(t){return t.__v_skip||!Object.isExtensible(t)?0:Kp(mp(t))}function Tr(t){return Sn(t)?t:Ea(t,!1,Fp,Bp,Qu)}function Zu(t){return Ea(t,!1,Hp,$p,Ju)}function eh(t){return Ea(t,!0,Up,jp,Xu)}function Ea(t,e,n,s,i){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function zn(t){return Sn(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function Qe(t){return!!(t&&t.__v_isShallow)}function wa(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function zp(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Mu(t,"__v_skip",!0),t}const Se=t=>ue(t)?Tr(t):t,No=t=>ue(t)?eh(t):t;function Ae(t){return t?t.__v_isRef===!0:!1}function th(t){return nh(t,!1)}function Yp(t){return nh(t,!0)}function nh(t,e){return Ae(t)?t:new Qp(t,e)}class Qp{constructor(e,n){this.dep=new va,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Qe(e)||Sn(e);e=s?e:X(e),Xt(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function Yn(t){return Ae(t)?t.value:t}const Jp={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function sh(t){return zn(t)?t:new Proxy(t,Jp)}class Xp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new va(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Vu(this,!0),!0}get value(){const e=this.dep.track();return ju(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zp(t,e,n=!1){let s,i;return $(t)?s=t:(s=t.get,i=t.set),new Xp(s,i,n)}const Pi={},$i=new WeakMap;let mn;function e_(t,e=!1,n=mn){if(n){let s=$i.get(n);s||$i.set(n,s=[]),s.push(t)}}function t_(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=k=>i?k:Qe(k)||i===!1||i===0?Rt(k,1):Rt(k);let u,h,d,_,m=!1,I=!1;if(Ae(t)?(h=()=>t.value,m=Qe(t)):zn(t)?(h=()=>c(t),m=!0):V(t)?(I=!0,m=t.some(k=>zn(k)||Qe(k)),h=()=>t.map(k=>{if(Ae(k))return k.value;if(zn(k))return c(k);if($(k))return l?l(k,2):k()})):$(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){ln();try{d()}finally{cn()}}const k=mn;mn=u;try{return l?l(t,3,[_]):t(_)}finally{mn=k}}:h=gt,e&&i){const k=h,Y=i===!0?1/0:i;h=()=>Rt(k(),Y)}const x=Ap(),D=()=>{u.stop(),x&&x.active&&ha(x.effects,u)};if(r&&e){const k=e;e=(...Y)=>{k(...Y),D()}}let O=I?new Array(t.length).fill(Pi):Pi;const M=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const Y=u.run();if(i||m||(I?Y.some((pe,oe)=>Xt(pe,O[oe])):Xt(Y,O))){d&&d();const pe=mn;mn=u;try{const oe=[Y,O===Pi?void 0:I&&O[0]===Pi?[]:O,_];l?l(e,3,oe):e(...oe),O=Y}finally{mn=pe}}}else u.run()};return a&&a(M),u=new Hu(h),u.scheduler=o?()=>o(M,!1):M,_=k=>e_(k,!1,u),d=u.onStop=()=>{const k=$i.get(u);if(k){if(l)l(k,4);else for(const Y of k)Y();$i.delete(u)}},e?s?M(!0):O=u.run():o?o(M.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Rt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ae(t))Rt(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)Rt(t[s],e,n);else if(Ou(t)||qn(t))t.forEach(s=>{Rt(s,e,n)});else if(Du(t)){for(const s in t)Rt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Rt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(t,e,n,s){try{return s?t(...s):t()}catch(i){Sr(i,e,n)}}function yt(t,e,n,s){if($(t)){const i=di(t,e,n,s);return i&&ku(i)&&i.catch(r=>{Sr(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(yt(t[r],e,n,s));return i}}function Sr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){ln(),di(r,null,10,[t,l,c]),cn();return}}n_(t,n,i,s,o)}function n_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Oe=[];let pt=-1;const Qn=[];let Gt=null,Vn=0;const ih=Promise.resolve();let ji=null;function rh(t){const e=ji||ih;return t?e.then(this?t.bind(this):t):e}function s_(t){let e=pt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=zs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Ia(t){if(!(t.flags&1)){const e=zs(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=zs(n)?Oe.push(t):Oe.splice(s_(e),0,t),t.flags|=1,oh()}}function oh(){ji||(ji=ih.then(lh))}function i_(t){V(t)?Qn.push(...t):Gt&&t.id===-1?Gt.splice(Vn+1,0,t):t.flags&1||(Qn.push(t),t.flags|=1),oh()}function Al(t,e,n=pt+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ah(t){if(Qn.length){const e=[...new Set(Qn)].sort((n,s)=>zs(n)-zs(s));if(Qn.length=0,Gt){Gt.push(...e);return}for(Gt=e,Vn=0;Vn<Gt.length;Vn++){const n=Gt[Vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gt=null,Vn=0}}const zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lh(t){try{for(pt=0;pt<Oe.length;pt++){const e=Oe[pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pt<Oe.length;pt++){const e=Oe[pt];e&&(e.flags&=-2)}pt=-1,Oe.length=0,ah(),ji=null,(Oe.length||Qn.length)&&lh()}}let je=null,ch=null;function Gi(t){const e=je;return je=t,ch=t&&t.type.__scopeId||null,e}function vn(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Hl(-1);const r=Gi(e);let o;try{o=t(...i)}finally{Gi(r),s._d&&Hl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Kb(t,e){if(je===null)return t;const n=Nr(je),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ie]=e[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function _n(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ln(),yt(l,n,8,[t.el,a,t,e]),cn())}}const r_=Symbol("_vte"),o_=t=>t.__isTeleport;function Ca(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ca(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function uh(t,e){return $(t)?Ce({name:t.name},e,{setup:t}):t}function hh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ki(t,e,n,s,i=!1){if(V(t)){t.forEach((m,I)=>Ki(m,e&&(V(e)?e[I]:e),n,s,i));return}if(Ms(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ki(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Nr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState,d=X(h),_=h===ie?()=>!1:m=>Z(d,m);if(c!=null&&c!==l&&(_e(c)?(u[c]=null,_(c)&&(h[c]=null)):Ae(c)&&(c.value=null)),$(l))di(l,a,12,[o,u]);else{const m=_e(l),I=Ae(l);if(m||I){const x=()=>{if(t.f){const D=m?_(l)?h[l]:u[l]:l.value;i?V(D)&&ha(D,r):V(D)?D.includes(r)||D.push(r):m?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,_(l)&&(h[l]=o)):I&&(l.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,Be(x,n)):x()}}}Cr().requestIdleCallback;Cr().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,dh=t=>t.type.__isKeepAlive;function a_(t,e){fh(t,"a",e)}function l_(t,e){fh(t,"da",e)}function fh(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)dh(i.parent.vnode)&&c_(s,e,n,i),i=i.parent}}function c_(t,e,n,s){const i=Rr(e,t,s,!0);_h(()=>{ha(s[e],i)},n)}function Rr(t,e,n=Pe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ln();const a=fi(n),l=yt(e,n,t,o);return a(),cn(),l});return s?i.unshift(r):i.push(r),r}}const Ft=t=>(e,n=Pe)=>{(!Qs||t==="sp")&&Rr(t,(...s)=>e(...s),n)},u_=Ft("bm"),ph=Ft("m"),h_=Ft("bu"),d_=Ft("u"),f_=Ft("bum"),_h=Ft("um"),p_=Ft("sp"),__=Ft("rtg"),g_=Ft("rtc");function m_(t,e=Pe){Rr("ec",t,e)}const v_="components";function Nl(t,e){return E_(v_,t,!0,e)||t}const y_=Symbol.for("v-ndc");function E_(t,e,n=!0,s=!1){const i=je||Pe;if(i){const r=i.type;{const a=og(r,!1);if(a&&(a===e||a===Je(e)||a===Ir(Je(e))))return r}const o=Ol(i[t]||r[t],e)||Ol(i.appContext[t],e);return!o&&s?r:o}}function Ol(t,e){return t&&(t[e]||t[Je(e)]||t[Ir(Je(e))])}function qb(t,e,n,s){let i;const r=n,o=V(t);if(o||_e(t)){const a=o&&zn(t);let l=!1;a&&(l=!Qe(t),t=br(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Se(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ue(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Oo=t=>t?Mh(t)?Nr(t):Oo(t.parent):null,Ls=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oo(t.parent),$root:t=>Oo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ba(t),$forceUpdate:t=>t.f||(t.f=()=>{Ia(t.update)}),$nextTick:t=>t.n||(t.n=rh.bind(t.proxy)),$watch:t=>V_.bind(t)}),eo=(t,e)=>t!==ie&&!t.__isScriptSetup&&Z(t,e),w_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(eo(s,e))return o[e]=1,s[e];if(i!==ie&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==ie&&Z(n,e))return o[e]=4,n[e];ko&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return eo(i,e)?(i[e]=n,!0):s!==ie&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ie&&Z(t,o)||eo(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(Ls,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kl(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ko=!0;function I_(t){const e=ba(t),n=t.proxy,s=t.ctx;ko=!1,e.beforeCreate&&xl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:I,deactivated:x,beforeDestroy:D,beforeUnmount:O,destroyed:M,unmounted:k,render:Y,renderTracked:pe,renderTriggered:oe,errorCaptured:Ke,serverPrefetch:qe,expose:ze,inheritAttrs:Wt,components:pn,directives:ut,filters:ys}=e;if(c&&C_(c,s,null),o)for(const ne in o){const Q=o[ne];$(Q)&&(s[ne]=Q.bind(n))}if(i){const ne=i.call(n,n);ue(ne)&&(t.data=Tr(ne))}if(ko=!0,r)for(const ne in r){const Q=r[ne],wt=$(Q)?Q.bind(n,n):$(Q.get)?Q.get.bind(n,n):gt,Vt=!$(Q)&&$(Q.set)?Q.set.bind(n):gt,ht=et({get:wt,set:Vt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Me=>ht.value=Me})}if(a)for(const ne in a)gh(a[ne],s,n,ne);if(l){const ne=$(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(Q=>{xi(Q,ne[Q])})}u&&xl(u,t,"c");function ve(ne,Q){V(Q)?Q.forEach(wt=>ne(wt.bind(n))):Q&&ne(Q.bind(n))}if(ve(u_,h),ve(ph,d),ve(h_,_),ve(d_,m),ve(a_,I),ve(l_,x),ve(m_,Ke),ve(g_,pe),ve(__,oe),ve(f_,O),ve(_h,k),ve(p_,qe),V(ze))if(ze.length){const ne=t.exposed||(t.exposed={});ze.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:wt=>n[Q]=wt})})}else t.exposed||(t.exposed={});Y&&t.render===gt&&(t.render=Y),Wt!=null&&(t.inheritAttrs=Wt),pn&&(t.components=pn),ut&&(t.directives=ut),qe&&hh(t)}function C_(t,e,n=gt){V(t)&&(t=xo(t));for(const s in t){const i=t[s];let r;ue(i)?"default"in i?r=ot(i.from||s,i.default,!0):r=ot(i.from||s):r=ot(i),Ae(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function xl(t,e,n){yt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gh(t,e,n,s){let i=s.includes(".")?Nh(n,s):()=>n[s];if(_e(t)){const r=e[t];$(r)&&Di(i,r)}else if($(t))Di(i,t.bind(n));else if(ue(t))if(V(t))t.forEach(r=>gh(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&Di(i,r,t)}}function ba(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qi(l,c,o,!0)),qi(l,e,o)),ue(e)&&r.set(e,l),l}function qi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qi(t,r,n,!0),i&&i.forEach(o=>qi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=b_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const b_={data:Dl,props:Ml,emits:Ml,methods:Ps,computed:Ps,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ps,directives:Ps,watch:S_,provide:Dl,inject:T_};function Dl(t,e){return e?t?function(){return Ce($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function T_(t,e){return Ps(xo(t),xo(e))}function xo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?Ce(Object.create(null),t,e):e}function Ml(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ce(Object.create(null),kl(t),kl(e??{})):e}function S_(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function mh(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R_=0;function P_(t,e){return function(s,i=null){$(s)||(s=Ce({},s)),i!=null&&!ue(i)&&(i=null);const r=mh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:R_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(c,...h)):$(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||Ie(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(_,u):t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,Nr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Jn;Jn=c;try{return u()}finally{Jn=h}}};return c}}let Jn=null;function xi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function ot(t,e,n=!1){const s=Pe||je;if(s||Jn){const i=Jn?Jn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}const vh={},yh=()=>Object.create(vh),Eh=t=>Object.getPrototypeOf(t)===vh;function A_(t,e,n,s=!1){const i={},r=yh();t.propsDefaults=Object.create(null),wh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Zu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function N_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Pr(t.emitsOptions,d))continue;const _=e[d];if(l)if(Z(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Je(d);i[m]=Do(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{wh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=Dn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Do(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&St(t.attrs,"set","")}function wh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ks(l))continue;const c=e[l];let u;i&&Z(i,u=Je(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Do(i,l,h,c[h],t,!Z(c,h))}}return o}function Do(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=fi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}const O_=new WeakMap;function Ih(t,e,n=!1){const s=n?O_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,_]=Ih(h,e,!0);Ce(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ue(t)&&s.set(t,Kn),Kn;if(V(r))for(let u=0;u<r.length;u++){const h=Je(r[u]);Ll(h)&&(o[h]=ie)}else if(r)for(const u in r){const h=Je(u);if(Ll(h)){const d=r[u],_=o[h]=V(d)||$(d)?{type:d}:Ce({},d),m=_.type;let I=!1,x=!0;if(V(m))for(let D=0;D<m.length;++D){const O=m[D],M=$(O)&&O.name;if(M==="Boolean"){I=!0;break}else M==="String"&&(x=!1)}else I=$(m)&&m.name==="Boolean";_[0]=I,_[1]=x,(I||Z(_,"default"))&&a.push(h)}}const c=[o,a];return ue(t)&&s.set(t,c),c}function Ll(t){return t[0]!=="$"&&!ks(t)}const Ch=t=>t[0]==="_"||t==="$stable",Ta=t=>V(t)?t.map(_t):[_t(t)],k_=(t,e,n)=>{if(e._n)return e;const s=vn((...i)=>Ta(e(...i)),n);return s._c=!1,s},bh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ch(i))continue;const r=t[i];if($(r))e[i]=k_(i,r,s);else if(r!=null){const o=Ta(r);e[i]=()=>o}}},Th=(t,e)=>{const n=Ta(e);t.slots.default=()=>n},Sh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},x_=(t,e,n)=>{const s=t.slots=yh();if(t.vnode.shapeFlag&32){const i=e._;i?(Sh(s,e,n),n&&Mu(s,"_",i,!0)):bh(e,s)}else e&&Th(t,e)},D_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Sh(i,e,n):(r=!e.$stable,bh(e,i)),o=e}else e&&(Th(t,e),o={default:1});if(r)for(const a in i)!Ch(a)&&o[a]==null&&delete i[a]},Be=z_;function M_(t){return L_(t)}function L_(t,e){const n=Cr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=gt,insertStaticContent:m}=t,I=(f,p,g,E=null,v=null,w=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Is(f,p)&&(E=y(f),Me(f,v,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:U,shapeFlag:A}=p;switch(C){case Ar:x(f,p,g,E);break;case Rn:D(f,p,g,E);break;case so:f==null&&O(p,g,E,R);break;case Tt:pn(f,p,g,E,v,w,R,S,T);break;default:A&1?Y(f,p,g,E,v,w,R,S,T):A&6?ut(f,p,g,E,v,w,R,S,T):(A&64||A&128)&&C.process(f,p,g,E,v,w,R,S,T,L)}U!=null&&v&&Ki(U,f&&f.ref,w,p||f,!p)},x=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},D=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},O=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},M=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},k=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Y=(f,p,g,E,v,w,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?pe(p,g,E,v,w,R,S,T):qe(f,p,v,w,R,S,T)},pe=(f,p,g,E,v,w,R,S)=>{let T,C;const{props:U,shapeFlag:A,transition:F,dirs:B}=f;if(T=f.el=o(f.type,w,U&&U.is,U),A&8?u(T,f.children):A&16&&Ke(f.children,T,null,E,v,to(f,w),R,S),B&&_n(f,null,E,"created"),oe(T,f,f.scopeId,R,E),U){for(const ae in U)ae!=="value"&&!ks(ae)&&r(T,ae,null,U[ae],w,E);"value"in U&&r(T,"value",null,U.value,w),(C=U.onVnodeBeforeMount)&&ft(C,E,f)}B&&_n(f,null,E,"beforeMount");const q=F_(v,F);q&&F.beforeEnter(T),s(T,p,g),((C=U&&U.onVnodeMounted)||q||B)&&Be(()=>{C&&ft(C,E,f),q&&F.enter(T),B&&_n(f,null,E,"mounted")},v)},oe=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let w=0;w<E.length;w++)_(f,E[w]);if(v){let w=v.subTree;if(p===w||kh(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;oe(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Ke=(f,p,g,E,v,w,R,S,T=0)=>{for(let C=T;C<f.length;C++){const U=f[C]=S?Kt(f[C]):_t(f[C]);I(null,U,p,g,E,v,w,R,S)}},qe=(f,p,g,E,v,w,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:C,dirs:U}=p;T|=f.patchFlag&16;const A=f.props||ie,F=p.props||ie;let B;if(g&&gn(g,!1),(B=F.onVnodeBeforeUpdate)&&ft(B,g,p,f),U&&_n(p,f,g,"beforeUpdate"),g&&gn(g,!0),(A.innerHTML&&F.innerHTML==null||A.textContent&&F.textContent==null)&&u(S,""),C?ze(f.dynamicChildren,C,S,g,E,to(p,v),w):R||Q(f,p,S,null,g,E,to(p,v),w,!1),T>0){if(T&16)Wt(S,A,F,g,v);else if(T&2&&A.class!==F.class&&r(S,"class",null,F.class,v),T&4&&r(S,"style",A.style,F.style,v),T&8){const q=p.dynamicProps;for(let ae=0;ae<q.length;ae++){const te=q[ae],He=A[te],be=F[te];(be!==He||te==="value")&&r(S,te,He,be,v,g)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&C==null&&Wt(S,A,F,g,v);((B=F.onVnodeUpdated)||U)&&Be(()=>{B&&ft(B,g,p,f),U&&_n(p,f,g,"updated")},E)},ze=(f,p,g,E,v,w,R)=>{for(let S=0;S<p.length;S++){const T=f[S],C=p[S],U=T.el&&(T.type===Tt||!Is(T,C)||T.shapeFlag&70)?h(T.el):g;I(T,C,U,null,E,v,w,R,!0)}},Wt=(f,p,g,E,v)=>{if(p!==g){if(p!==ie)for(const w in p)!ks(w)&&!(w in g)&&r(f,w,p[w],null,v,E);for(const w in g){if(ks(w))continue;const R=g[w],S=p[w];R!==S&&w!=="value"&&r(f,w,S,R,v,E)}"value"in g&&r(f,"value",p.value,g.value,v)}},pn=(f,p,g,E,v,w,R,S,T)=>{const C=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:F,slotScopeIds:B}=p;B&&(S=S?S.concat(B):B),f==null?(s(C,g,E),s(U,g,E),Ke(p.children||[],g,U,v,w,R,S,T)):A>0&&A&64&&F&&f.dynamicChildren?(ze(f.dynamicChildren,F,g,v,w,R,S),(p.key!=null||v&&p===v.subTree)&&Rh(f,p,!0)):Q(f,p,g,U,v,w,R,S,T)},ut=(f,p,g,E,v,w,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,R,T):ys(p,g,E,v,w,R,T):Ln(f,p,T)},ys=(f,p,g,E,v,w,R)=>{const S=f.component=tg(f,E,v);if(dh(f)&&(S.ctx.renderer=L),ng(S,!1,R),S.asyncDep){if(v&&v.registerDep(S,ve,R),!f.el){const T=S.subTree=Ie(Rn);D(null,T,p,g)}}else ve(S,f,p,g,v,w,R)},Ln=(f,p,g)=>{const E=p.component=f.component;if(K_(f,p,g))if(E.asyncDep&&!E.asyncResolved){ne(E,p,g);return}else E.next=p,E.update();else p.el=f.el,E.vnode=p},ve=(f,p,g,E,v,w,R)=>{const S=()=>{if(f.isMounted){let{next:A,bu:F,u:B,parent:q,vnode:ae}=f;{const We=Ph(f);if(We){A&&(A.el=ae.el,ne(f,A,R)),We.asyncDep.then(()=>{f.isUnmounted||S()});return}}let te=A,He;gn(f,!1),A?(A.el=ae.el,ne(f,A,R)):A=ae,F&&ki(F),(He=A.props&&A.props.onVnodeBeforeUpdate)&&ft(He,q,A,ae),gn(f,!0);const be=no(f),Ze=f.subTree;f.subTree=be,I(Ze,be,h(Ze.el),y(Ze),f,v,w),A.el=be.el,te===null&&q_(f,be.el),B&&Be(B,v),(He=A.props&&A.props.onVnodeUpdated)&&Be(()=>ft(He,q,A,ae),v)}else{let A;const{el:F,props:B}=p,{bm:q,m:ae,parent:te,root:He,type:be}=f,Ze=Ms(p);if(gn(f,!1),q&&ki(q),!Ze&&(A=B&&B.onVnodeBeforeMount)&&ft(A,te,p),gn(f,!0),F&&de){const We=()=>{f.subTree=no(f),de(F,f.subTree,f,v,null)};Ze&&be.__asyncHydrate?be.__asyncHydrate(F,f,We):We()}else{He.ce&&He.ce._injectChildStyle(be);const We=f.subTree=no(f);I(null,We,g,E,f,v,w),p.el=We.el}if(ae&&Be(ae,v),!Ze&&(A=B&&B.onVnodeMounted)){const We=p;Be(()=>ft(A,te,We),v)}(p.shapeFlag&256||te&&Ms(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&Be(f.a,v),f.isMounted=!0,p=g=E=null}};f.scope.on();const T=f.effect=new Hu(S);f.scope.off();const C=f.update=T.run.bind(T),U=f.job=T.runIfDirty.bind(T);U.i=f,U.id=f.uid,T.scheduler=()=>Ia(U),gn(f,!0),C()},ne=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,N_(f,p.props,E,g),D_(f,p.children,g),ln(),Al(f),cn()},Q=(f,p,g,E,v,w,R,S,T=!1)=>{const C=f&&f.children,U=f?f.shapeFlag:0,A=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){Vt(C,A,g,E,v,w,R,S,T);return}else if(F&256){wt(C,A,g,E,v,w,R,S,T);return}}B&8?(U&16&&Ye(C,v,w),A!==C&&u(g,A)):U&16?B&16?Vt(C,A,g,E,v,w,R,S,T):Ye(C,v,w,!0):(U&8&&u(g,""),B&16&&Ke(A,g,E,v,w,R,S,T))},wt=(f,p,g,E,v,w,R,S,T)=>{f=f||Kn,p=p||Kn;const C=f.length,U=p.length,A=Math.min(C,U);let F;for(F=0;F<A;F++){const B=p[F]=T?Kt(p[F]):_t(p[F]);I(f[F],B,g,null,v,w,R,S,T)}C>U?Ye(f,v,w,!0,!1,A):Ke(p,g,E,v,w,R,S,T,A)},Vt=(f,p,g,E,v,w,R,S,T)=>{let C=0;const U=p.length;let A=f.length-1,F=U-1;for(;C<=A&&C<=F;){const B=f[C],q=p[C]=T?Kt(p[C]):_t(p[C]);if(Is(B,q))I(B,q,g,null,v,w,R,S,T);else break;C++}for(;C<=A&&C<=F;){const B=f[A],q=p[F]=T?Kt(p[F]):_t(p[F]);if(Is(B,q))I(B,q,g,null,v,w,R,S,T);else break;A--,F--}if(C>A){if(C<=F){const B=F+1,q=B<U?p[B].el:E;for(;C<=F;)I(null,p[C]=T?Kt(p[C]):_t(p[C]),g,q,v,w,R,S,T),C++}}else if(C>F)for(;C<=A;)Me(f[C],v,w,!0),C++;else{const B=C,q=C,ae=new Map;for(C=q;C<=F;C++){const Ve=p[C]=T?Kt(p[C]):_t(p[C]);Ve.key!=null&&ae.set(Ve.key,C)}let te,He=0;const be=F-q+1;let Ze=!1,We=0;const Es=new Array(be);for(C=0;C<be;C++)Es[C]=0;for(C=B;C<=A;C++){const Ve=f[C];if(He>=be){Me(Ve,v,w,!0);continue}let dt;if(Ve.key!=null)dt=ae.get(Ve.key);else for(te=q;te<=F;te++)if(Es[te-q]===0&&Is(Ve,p[te])){dt=te;break}dt===void 0?Me(Ve,v,w,!0):(Es[dt-q]=C+1,dt>=We?We=dt:Ze=!0,I(Ve,p[dt],g,null,v,w,R,S,T),He++)}const Cl=Ze?U_(Es):Kn;for(te=Cl.length-1,C=be-1;C>=0;C--){const Ve=q+C,dt=p[Ve],bl=Ve+1<U?p[Ve+1].el:E;Es[C]===0?I(null,dt,g,bl,v,w,R,S,T):Ze&&(te<0||C!==Cl[te]?ht(dt,g,bl,2):te--)}}},ht=(f,p,g,E,v=null)=>{const{el:w,type:R,transition:S,children:T,shapeFlag:C}=f;if(C&6){ht(f.component.subTree,p,g,E);return}if(C&128){f.suspense.move(p,g,E);return}if(C&64){R.move(f,p,g,L);return}if(R===Tt){s(w,p,g);for(let A=0;A<T.length;A++)ht(T[A],p,g,E);s(f.anchor,p,g);return}if(R===so){M(f,p,g);return}if(E!==2&&C&1&&S)if(E===0)S.beforeEnter(w),s(w,p,g),Be(()=>S.enter(w),v);else{const{leave:A,delayLeave:F,afterLeave:B}=S,q=()=>s(w,p,g),ae=()=>{A(w,()=>{q(),B&&B()})};F?F(w,q,ae):ae()}else s(w,p,g)},Me=(f,p,g,E=!1,v=!1)=>{const{type:w,props:R,ref:S,children:T,dynamicChildren:C,shapeFlag:U,patchFlag:A,dirs:F,cacheIndex:B}=f;if(A===-2&&(v=!1),S!=null&&Ki(S,null,g,f,!0),B!=null&&(p.renderCache[B]=void 0),U&256){p.ctx.deactivate(f);return}const q=U&1&&F,ae=!Ms(f);let te;if(ae&&(te=R&&R.onVnodeBeforeUnmount)&&ft(te,p,f),U&6)Ti(f.component,g,E);else{if(U&128){f.suspense.unmount(g,E);return}q&&_n(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,g,L,E):C&&!C.hasOnce&&(w!==Tt||A>0&&A&64)?Ye(C,p,g,!1,!0):(w===Tt&&A&384||!v&&U&16)&&Ye(T,p,g),E&&Fn(f)}(ae&&(te=R&&R.onVnodeUnmounted)||q)&&Be(()=>{te&&ft(te,p,f),q&&_n(f,null,p,"unmounted")},g)},Fn=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===Tt){Un(g,E);return}if(p===so){k(f);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:S}=v,T=()=>R(g,w);S?S(f.el,w,T):T()}else w()},Un=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ti=(f,p,g)=>{const{bum:E,scope:v,job:w,subTree:R,um:S,m:T,a:C}=f;Fl(T),Fl(C),E&&ki(E),v.stop(),w&&(w.flags|=8,Me(R,f,p,g)),S&&Be(S,p),Be(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,g,E=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)Me(f[R],p,g,E,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[r_];return g?d(g):p};let N=!1;const P=(f,p,g)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,g),p._vnode=f,N||(N=!0,Al(),ah(),N=!1)},L={p:I,um:Me,m:ht,r:Fn,mt:ys,mc:Ke,pc:Q,pbc:ze,n:y,o:t};let ee,de;return{render:P,hydrate:ee,createApp:P_(P,ee)}}function to({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function F_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rh(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Rh(o,a)),a.type===Ar&&(a.el=o.el)}}function U_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ph(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ph(e)}function Fl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const H_=Symbol.for("v-scx"),W_=()=>ot(H_);function Di(t,e,n){return Ah(t,e,n)}function Ah(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ce({},n),l=e&&s||!e&&r!=="post";let c;if(Qs){if(r==="sync"){const _=W_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=gt,_.resume=gt,_.pause=gt,_}}const u=Pe;a.call=(_,m,I)=>yt(_,u,m,I);let h=!1;r==="post"?a.scheduler=_=>{Be(_,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(_,m)=>{m?_():Ia(_)}),a.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=t_(t,e,a);return Qs&&(c?c.push(d):l&&d()),d}function V_(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Nh(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=fi(this),a=Ah(i,r.bind(s),n);return o(),a}function Nh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const B_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Je(e)}Modifiers`]||t[`${Dn(e)}Modifiers`];function $_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&B_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>_e(u)?u.trim():u)),o.number&&(i=n.map(To)));let a,l=s[a=Yr(e)]||s[a=Yr(Je(e))];!l&&r&&(l=s[a=Yr(Dn(e))]),l&&yt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(c,t,6,i)}}function Oh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=Oh(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ue(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):Ce(o,r),ue(t)&&s.set(t,o),o)}function Pr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Dn(e))||Z(t,e))}function no(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:I}=t,x=Gi(t);let D,O;try{if(n.shapeFlag&4){const k=i||s,Y=k;D=_t(c.call(Y,k,u,h,_,d,m)),O=a}else{const k=e;D=_t(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),O=e.props?a:j_(a)}}catch(k){Fs.length=0,Sr(k,t,1),D=Ie(Rn)}let M=D;if(O&&I!==!1){const k=Object.keys(O),{shapeFlag:Y}=M;k.length&&Y&7&&(r&&k.some(ua)&&(O=G_(O,r)),M=is(M,O,!1,!0))}return n.dirs&&(M=is(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Ca(M,n.transition),D=M,Gi(x),D}const j_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},G_=(t,e)=>{const n={};for(const s in t)(!ua(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function K_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ul(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Pr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ul(s,o,c):!0:!!o;return!1}function Ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pr(n,r))return!0}return!1}function q_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const kh=t=>t.__isSuspense;function z_(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):i_(t)}const Tt=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),Fs=[];let Ge=null;function As(t=!1){Fs.push(Ge=t?null:[])}function Y_(){Fs.pop(),Ge=Fs[Fs.length-1]||null}let Ys=1;function Hl(t,e=!1){Ys+=t,t<0&&Ge&&e&&(Ge.hasOnce=!0)}function xh(t){return t.dynamicChildren=Ys>0?Ge||Kn:null,Y_(),Ys>0&&Ge&&Ge.push(t),t}function Wl(t,e,n,s,i,r){return xh(jn(t,e,n,s,i,r,!0))}function Mo(t,e,n,s,i){return xh(Ie(t,e,n,s,i,!0))}function zi(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const Dh=({key:t})=>t??null,Mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Ae(t)||$(t)?{i:je,r:t,k:e,f:!!n}:t:null);function jn(t,e=null,n=null,s=0,i=null,r=t===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dh(e),ref:e&&Mi(e),scopeId:ch,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(Sa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Ys>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const Ie=Q_;function Q_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===y_)&&(t=Rn),zi(t)){const a=is(t,e,!0);return n&&Sa(a,n),Ys>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(ag(t)&&(t=t.__vccOpts),e){e=J_(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=pa(a)),ue(l)&&(wa(l)&&!V(l)&&(l=Ce({},l)),e.style=fa(l))}const o=_e(t)?1:kh(t)?128:o_(t)?64:ue(t)?4:$(t)?2:0;return jn(t,e,n,s,i,o,r,!0)}function J_(t){return t?wa(t)||Eh(t)?Ce({},t):t:null}function is(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?X_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Dh(c),ref:e&&e.ref?n&&r?V(r)?r.concat(Mi(e)):[r,Mi(e)]:Mi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ca(u,l.clone(u)),u}function Bn(t=" ",e=0){return Ie(Ar,null,t,e)}function io(t="",e=!1){return e?(As(),Mo(Rn,null,t)):Ie(Rn,null,t)}function _t(t){return t==null||typeof t=="boolean"?Ie(Rn):V(t)?Ie(Tt,null,t.slice()):zi(t)?Kt(t):Ie(Ar,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function Sa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Sa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Eh(e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Bn(e)]):n=8);t.children=e,t.shapeFlag|=n}function X_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=pa([e.class,s.class]));else if(i==="style")e.style=fa([e.style,s.style]);else if(Er(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){yt(t,e,7,[n,s])}const Z_=mh();let eg=0;function tg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Z_,r={uid:eg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(s,i),emitsOptions:Oh(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$_.bind(null,r),t.ce&&t.ce(r),r}let Pe=null,Yi,Lo;{const t=Cr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Yi=e("__VUE_INSTANCE_SETTERS__",n=>Pe=n),Lo=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const fi=t=>{const e=Pe;return Yi(t),t.scope.on(),()=>{t.scope.off(),Yi(e)}},Vl=()=>{Pe&&Pe.scope.off(),Yi(null)};function Mh(t){return t.vnode.shapeFlag&4}let Qs=!1;function ng(t,e=!1,n=!1){e&&Lo(e);const{props:s,children:i}=t.vnode,r=Mh(t);A_(t,s,r,e),x_(t,i,n);const o=r?sg(t,e):void 0;return e&&Lo(!1),o}function sg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,w_);const{setup:s}=n;if(s){ln();const i=t.setupContext=s.length>1?rg(t):null,r=fi(t),o=di(s,t,0,[t.props,i]),a=ku(o);if(cn(),r(),(a||t.sp)&&!Ms(t)&&hh(t),a){if(o.then(Vl,Vl),e)return o.then(l=>{Bl(t,l,e)}).catch(l=>{Sr(l,t,0)});t.asyncDep=o}else Bl(t,o,e)}else Lh(t,e)}function Bl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=sh(e)),Lh(t,n)}let $l;function Lh(t,e,n){const s=t.type;if(!t.render){if(!e&&$l&&!s.render){const i=s.template||ba(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ce(Ce({isCustomElement:r,delimiters:a},o),l);s.render=$l(i,c)}}t.render=s.render||gt}{const i=fi(t);ln();try{I_(t)}finally{cn(),i()}}}const ig={get(t,e){return Te(t,"get",""),t[e]}};function rg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ig),slots:t.slots,emit:t.emit,expose:e}}function Nr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sh(zp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function og(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function ag(t){return $(t)&&"__vccOpts"in t}const et=(t,e)=>Zp(t,e,Qs);function Fh(t,e,n){const s=arguments.length;return s===2?ue(e)&&!V(e)?zi(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zi(n)&&(n=[n]),Ie(t,e,n))}const lg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fo;const jl=typeof window<"u"&&window.trustedTypes;if(jl)try{Fo=jl.createPolicy("vue",{createHTML:t=>t})}catch{}const Uh=Fo?t=>Fo.createHTML(t):t=>t,cg="http://www.w3.org/2000/svg",ug="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,Gl=bt&&bt.createElement("template"),hg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?bt.createElementNS(cg,t):e==="mathml"?bt.createElementNS(ug,t):n?bt.createElement(t,{is:n}):bt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Gl.innerHTML=Uh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Gl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dg=Symbol("_vtc");function fg(t,e,n){const s=t[dg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kl=Symbol("_vod"),pg=Symbol("_vsh"),_g=Symbol(""),gg=/(^|;)\s*display\s*:/;function mg(t,e,n){const s=t.style,i=_e(n);let r=!1;if(n&&!i){if(e)if(_e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Li(s,a,"")}else for(const o in e)n[o]==null&&Li(s,o,"");for(const o in n)o==="display"&&(r=!0),Li(s,o,n[o])}else if(i){if(e!==n){const o=s[_g];o&&(n+=";"+o),s.cssText=n,r=gg.test(n)}}else e&&t.removeAttribute("style");Kl in t&&(t[Kl]=r?s.display:"",t[pg]&&(s.display="none"))}const ql=/\s*!important$/;function Li(t,e,n){if(V(n))n.forEach(s=>Li(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vg(t,e);ql.test(n)?t.setProperty(Dn(s),n.replace(ql,""),"important"):t[s]=n}}const zl=["Webkit","Moz","ms"],ro={};function vg(t,e){const n=ro[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return ro[e]=s;s=Ir(s);for(let i=0;i<zl.length;i++){const r=zl[i]+s;if(r in t)return ro[e]=r}return e}const Yl="http://www.w3.org/1999/xlink";function Ql(t,e,n,s,i,r=Tp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yl,e.slice(6,e.length)):t.setAttributeNS(Yl,e,n):n==null||r&&!Lu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":vt(n)?String(n):n)}function Jl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Uh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function wn(t,e,n,s){t.addEventListener(e,n,s)}function yg(t,e,n,s){t.removeEventListener(e,n,s)}const Xl=Symbol("_vei");function Eg(t,e,n,s,i=null){const r=t[Xl]||(t[Xl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=wg(e);if(s){const c=r[e]=bg(s,i);wn(t,a,c,l)}else o&&(yg(t,a,o,l),r[e]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function wg(t){let e;if(Zl.test(t)){e={};let s;for(;s=t.match(Zl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dn(t.slice(2)),e]}let oo=0;const Ig=Promise.resolve(),Cg=()=>oo||(Ig.then(()=>oo=0),oo=Date.now());function bg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(Tg(s,n.value),e,5,[s])};return n.value=t,n.attached=Cg(),n}function Tg(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ec=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?fg(t,s,o):e==="style"?mg(t,n,s):Er(e)?ua(e)||Eg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rg(t,e,s,o))?(Jl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ql(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(s))?Jl(t,Je(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ql(t,e,s,o))};function Rg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ec(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ec(e)&&_e(n)?!1:e in t}const Qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>ki(e,n):e};function Pg(t){t.target.composing=!0}function tc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn=Symbol("_assign"),zb={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Xn]=Qi(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=To(a)),t[Xn](a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",Pg),wn(t,"compositionend",tc),wn(t,"change",tc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Xn]=Qi(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?To(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Yb={created(t,{value:e},n){t.checked=Bi(e,n.props.value),t[Xn]=Qi(n),wn(t,"change",()=>{t[Xn](Ag(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Xn]=Qi(s),e!==n&&(t.checked=Bi(e,s.props.value))}};function Ag(t){return"_value"in t?t._value:t.value}const Ng=Ce({patchProp:Sg},hg);let nc;function Og(){return nc||(nc=M_(Ng))}const kg=(...t)=>{const e=Og().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Dg(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,xg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dg(t){return _e(t)?document.querySelector(t):t}const Mg="/images/logo.png";var sc={};/**
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
 */const Hh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+Hh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Fg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vh=function(t){const e=Wh(t);return Ra.encodeByteArray(e,!0)},Ji=function(t){return Vh(t).replace(/\./g,"")},Xi=function(t){try{return Ra.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ug(t){return Bh(void 0,t)}function Bh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hg(n)||(t[n]=Bh(t[n],e[n]));return t}function Hg(t){return t!=="__proto__"}/**
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
 */function Wg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Wg().__FIREBASE_DEFAULTS__,Bg=()=>{if(typeof process>"u"||typeof sc>"u")return;const t=sc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xi(t[1]);return e&&JSON.parse(e)},Or=()=>{try{return Vg()||Bg()||$g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$h=t=>{var e,n;return(n=(e=Or())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jg=t=>{const e=$h(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jh=()=>{var t;return(t=Or())===null||t===void 0?void 0:t.config},Gh=t=>{var e;return(e=Or())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Gg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ji(JSON.stringify(n)),Ji(JSON.stringify(o)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Kg(){var t;const e=(t=Or())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yg(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qh(){return Hh.NODE_ADMIN===!0}function Qb(){return!Kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qg(){try{return typeof indexedDB=="object"}catch{return!1}}function Jg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xg="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xg,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Zg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function Zg(t,e){return t.replace(em,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const em=/\{\$([^}]+)}/g;/**
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
 */function Js(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const zh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Js(Xi(r[0])||""),n=Js(Xi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},tm=function(t){const e=zh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nm=function(t){const e=zh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Uo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function er(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ic(r)&&ic(o)){if(!er(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ic(t){return t!==null&&typeof t=="object"}/**
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
 */function fs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class sm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function im(t,e){const n=new rm(t,e);return n.subscribe.bind(n)}class rm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");om(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ao),i.error===void 0&&(i.error=ao),i.complete===void 0&&(i.complete=ao);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function om(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ao(){}function Aa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const am=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class lm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(um(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cm(t){return t===yn?void 0:t}function um(t){return t.instantiationMode==="EAGER"}/**
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
 */class hm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const dm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},fm=se.INFO,pm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},_m=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Na{constructor(e){this.name=e,this._logLevel=fm,this._logHandler=_m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const gm=(t,e)=>e.some(n=>t instanceof n);let rc,oc;function mm(){return rc||(rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vm(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,Ho=new WeakMap,Qh=new WeakMap,lo=new WeakMap,Oa=new WeakMap;function ym(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yh.set(n,t)}).catch(()=>{}),Oa.set(e,t),e}function Em(t){if(Ho.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ho.set(t,e)}let Wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ho.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wm(t){Wo=t(Wo)}function Im(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(co(this),e,...n);return Qh.set(s,e.sort?e.sort():[e]),Zt(s)}:vm().includes(t)?function(...e){return t.apply(co(this),e),Zt(Yh.get(this))}:function(...e){return Zt(t.apply(co(this),e))}}function Cm(t){return typeof t=="function"?Im(t):(t instanceof IDBTransaction&&Em(t),gm(t,mm())?new Proxy(t,Wo):t)}function Zt(t){if(t instanceof IDBRequest)return ym(t);if(lo.has(t))return lo.get(t);const e=Cm(t);return e!==t&&(lo.set(t,e),Oa.set(e,t)),e}const co=t=>Oa.get(t);function bm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Tm=["get","getKey","getAll","getAllKeys","count"],Sm=["put","add","delete","clear"],uo=new Map;function ac(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return uo.set(e,r),r}wm(t=>({...t,get:(e,n,s)=>ac(e,n)||t.get(e,n,s),has:(e,n)=>!!ac(e,n)||t.has(e,n)}));/**
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
 */class Rm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vo="@firebase/app",lc="0.10.16";/**
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
 */const Dt=new Na("@firebase/app"),Am="@firebase/app-compat",Nm="@firebase/analytics-compat",Om="@firebase/analytics",km="@firebase/app-check-compat",xm="@firebase/app-check",Dm="@firebase/auth",Mm="@firebase/auth-compat",Lm="@firebase/database",Fm="@firebase/data-connect",Um="@firebase/database-compat",Hm="@firebase/functions",Wm="@firebase/functions-compat",Vm="@firebase/installations",Bm="@firebase/installations-compat",$m="@firebase/messaging",jm="@firebase/messaging-compat",Gm="@firebase/performance",Km="@firebase/performance-compat",qm="@firebase/remote-config",zm="@firebase/remote-config-compat",Ym="@firebase/storage",Qm="@firebase/storage-compat",Jm="@firebase/firestore",Xm="@firebase/vertexai",Zm="@firebase/firestore-compat",ev="firebase",tv="11.0.2";/**
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
 */const Bo="[DEFAULT]",nv={[Vo]:"fire-core",[Am]:"fire-core-compat",[Om]:"fire-analytics",[Nm]:"fire-analytics-compat",[xm]:"fire-app-check",[km]:"fire-app-check-compat",[Dm]:"fire-auth",[Mm]:"fire-auth-compat",[Lm]:"fire-rtdb",[Fm]:"fire-data-connect",[Um]:"fire-rtdb-compat",[Hm]:"fire-fn",[Wm]:"fire-fn-compat",[Vm]:"fire-iid",[Bm]:"fire-iid-compat",[$m]:"fire-fcm",[jm]:"fire-fcm-compat",[Gm]:"fire-perf",[Km]:"fire-perf-compat",[qm]:"fire-rc",[zm]:"fire-rc-compat",[Ym]:"fire-gcs",[Qm]:"fire-gcs-compat",[Jm]:"fire-fst",[Zm]:"fire-fst-compat",[Xm]:"fire-vertex","fire-js":"fire-js",[ev]:"fire-js-all"};/**
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
 */const tr=new Map,sv=new Map,$o=new Map;function cc(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if($o.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,t);for(const n of tr.values())cc(n,t);for(const n of sv.values())cc(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nt(t){return t.settings!==void 0}/**
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
 */const iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new pi("app","Firebase",iv);/**
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
 */class rv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=tv;function Jh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(n||(n=jh()),!n)throw en.create("no-options");const r=tr.get(i);if(r){if(er(n,r.options)&&er(s,r.config))return r;throw en.create("duplicate-app",{appName:i})}const o=new hm(i);for(const l of $o.values())o.addComponent(l);const a=new rv(n,s,o);return tr.set(i,a),a}function Xh(t=Bo){const e=tr.get(t);if(!e&&t===Bo&&jh())return Jh();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=nv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}os(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ov="firebase-heartbeat-database",av=1,Xs="firebase-heartbeat-store";let ho=null;function Zh(){return ho||(ho=bm(ov,av,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),ho}async function lv(t){try{const n=(await Zh()).transaction(Xs),s=await n.objectStore(Xs).get(ed(t));return await n.done,s}catch(e){if(e instanceof un)Dt.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function uc(t,e){try{const s=(await Zh()).transaction(Xs,"readwrite");await s.objectStore(Xs).put(e,ed(t)),await s.done}catch(n){if(n instanceof un)Dt.warn(n.message);else{const s=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(s.message)}}}function ed(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const cv=1024,uv=30*24*60*60*1e3;class hv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hc(),{heartbeatsToSend:s,unsentEntries:i}=dv(this._heartbeatsCache.heartbeats),r=Ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Dt.warn(n),""}}}function hc(){return new Date().toISOString().substring(0,10)}function dv(t,e=cv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qg()?Jg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dc(t){return Ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pv(t){os(new Pn("platform-logger",e=>new Rm(e),"PRIVATE")),os(new Pn("heartbeat",e=>new hv(e),"PRIVATE")),tn(Vo,lc,t),tn(Vo,lc,"esm2017"),tn("fire-js","")}pv("");var _v="firebase",gv="11.0.2";/**
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
 */tn(_v,gv,"app");function xa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mv=td,nd=new pi("auth","Firebase",td());/**
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
 */const nr=new Na("@firebase/auth");function vv(t,...e){nr.logLevel<=se.WARN&&nr.warn(`Auth (${ps}): ${t}`,...e)}function Fi(t,...e){nr.logLevel<=se.ERROR&&nr.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw Ma(t,...e)}function at(t,...e){return Ma(t,...e)}function Da(t,e,n){const s=Object.assign(Object.assign({},mv()),{[e]:n});return new pi("auth","Firebase",s).create(e,{appName:t.name})}function kt(t){return Da(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yv(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xe(t,"argument-error"),Da(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ma(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return nd.create(t,...e)}function W(t,e,...n){if(!t)throw Ma(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fi(e),new Error(e)}function Mt(t,e){t||Pt(e)}/**
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
 */function jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ev(){return fc()==="http:"||fc()==="https:"}function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ev()||zg()||"connection"in navigator)?navigator.onLine:!0}function Iv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pa()||Kh()}get(){return wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function La(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bv=new _i(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,s,i={}){return id(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return qg()||(c.referrerPolicy="no-referrer"),sd.fetch()(rd(t,t.config.apiHost,n,a),c)})}async function id(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cv),e);try{const i=new Sv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ai(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ai(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ai(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Da(t,u,c);Xe(t,u)}}catch(i){if(i instanceof un)throw i;Xe(t,"network-request-failed",{message:String(i)})}}async function gi(t,e,n,s,i={}){const r=await dn(t,e,n,s,i);return"mfaPendingCredential"in r&&Xe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function rd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?La(t.config,i):`${t.config.apiScheme}://${i}`}function Tv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(at(this.auth,"network-request-failed")),bv.get())})}}function Ai(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=at(t,e,s);return i.customData._tokenResponse=n,i}function pc(t){return t!==void 0&&t.enterprise!==void 0}class Rv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Tv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pv(t,e){return dn(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
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
 */async function Av(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function od(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nv(t,e=!1){const n=De(t),s=await n.getIdToken(e),i=Fa(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Us(fo(i.auth_time)),issuedAtTime:Us(fo(i.iat)),expirationTime:Us(fo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fo(t){return Number(t)*1e3}function Fa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xi(n);return i?JSON.parse(i):(Fi("Failed to decode base64 JWT payload"),null)}catch(i){return Fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _c(t){const e=Fa(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&Ov(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ov({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Go{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Zs(t,od(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ad(r.providerUserInfo):[],a=Dv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Go(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xv(t){const e=De(t);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ad(t){return t.map(e=>{var{providerId:n}=e,s=xa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Mv(t,e){const n=await id(t,{},async()=>{const s=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=rd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lv(t,e){return dn(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=_c(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Mv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Zn;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Bt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Go(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Zs(this,Av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:k,isAnonymous:Y,providerData:pe,stsTokenManager:oe}=n;W(M&&oe,e,"internal-error");const Ke=Zn.fromJSON(this.name,oe);W(typeof M=="string",e,"internal-error"),Bt(h,e.name),Bt(d,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof Y=="boolean",e,"internal-error"),Bt(_,e.name),Bt(m,e.name),Bt(I,e.name),Bt(x,e.name),Bt(D,e.name),Bt(O,e.name);const qe=new At({uid:M,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:_,tenantId:I,stsTokenManager:Ke,createdAt:D,lastLoginAt:O});return pe&&Array.isArray(pe)&&(qe.providerData=pe.map(ze=>Object.assign({},ze))),x&&(qe._redirectEventId=x),qe}static async _fromIdTokenResponse(e,n,s=!1){const i=new Zn;i.updateFromServerResponse(n);const r=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await sr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ad(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Zn;a.updateFromIdToken(s);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Go(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const gc=new Map;function Nt(t){Mt(t instanceof Function,"Expected a class definition");let e=gc.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gc.set(t,e),e)}/**
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
 */class ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ld.type="NONE";const mc=ld;/**
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
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ui("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new es(Nt(mc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Nt(mc);const o=Ui(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=At._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new es(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new es(r,e,s))}}/**
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
 */function vc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pd(e))return"Blackberry";if(_d(e))return"Webos";if(ud(e))return"Safari";if((e.includes("chrome/")||hd(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cd(t=xe()){return/firefox\//i.test(t)}function ud(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hd(t=xe()){return/crios\//i.test(t)}function dd(t=xe()){return/iemobile/i.test(t)}function fd(t=xe()){return/android/i.test(t)}function pd(t=xe()){return/blackberry/i.test(t)}function _d(t=xe()){return/webos/i.test(t)}function Ua(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fv(t=xe()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uv(){return Yg()&&document.documentMode===10}function gd(t=xe()){return Ua(t)||fd(t)||_d(t)||pd(t)||/windows phone/i.test(t)||dd(t)}/**
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
 */function md(t,e=[]){let n;switch(t){case"Browser":n=vc(xe());break;case"Worker":n=`${vc(xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${s}`}/**
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
 */class Hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Wv(t,e={}){return dn(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
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
 */const Vv=6;class Bv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class $v{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yc(this),this.idTokenSubscription=new yc(this),this.beforeStateQueue=new Hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await od(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(kt(this));const n=e?De(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wv(this),n=new Bv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Lv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fn(t){return De(t)}class yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=im(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jv(t){Dr=t}function vd(t){return Dr.loadJS(t)}function Gv(){return Dr.recaptchaEnterpriseScript}function Kv(){return Dr.gapiScript}function qv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zv{constructor(){this.enterprise=new Yv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Yv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Qv="recaptcha-enterprise",yd="NO_RECAPTCHA";class Jv{constructor(e){this.type=Qv,this.auth=fn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Pv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Rv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;pc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(yd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&pc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Gv();l.length!==0&&(l+=a),vd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ec(t,e,n,s=!1,i=!1){const r=new Jv(t);let o;if(i)o=yd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ko(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ec(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ec(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function Xv(t,e){const n=ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(er(r,e??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:e})}function Zv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ey(t,e,n){const s=fn(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ed(e),{host:o,port:a}=ty(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),ny()}function Ed(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ty(t){const e=Ed(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wc(o)}}}function wc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ny(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function sy(t,e){return dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iy(t,e){return gi(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}/**
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
 */async function ry(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function oy(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
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
 */class ei extends Ha{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,n,"signInWithPassword",iy);case"emailLink":return ry(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,s,"signUpPassword",sy);case"emailLink":return oy(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ts(t,e){return gi(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
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
 */const ay="http://localhost";class An extends Ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=xa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new An(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ts(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:ay,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
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
 */function ly(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cy(t){const e=Ns(Os(t)).link,n=e?Ns(Os(e)).deep_link_id:null,s=Ns(Os(t)).deep_link_id;return(s?Ns(Os(s)).link:null)||s||n||e||t}class Wa{constructor(e){var n,s,i,r,o,a;const l=Ns(Os(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=ly((i=l.mode)!==null&&i!==void 0?i:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cy(e);try{return new Wa(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wa.parseLink(n);return W(s,"argument-error"),ei._fromEmailAndCode(e,s.code,s.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends mi{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return An._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Qt extends mi{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Jt extends mi{constructor(){super("twitter.com")}static credential(e,n){return An._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function uy(t,e){return gi(t,"POST","/v1/accounts:signUp",hn(t,e))}/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=Ic(s);return new Nn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ic(s);return new Nn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ic(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ir extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ir(e,n,s,i)}}function wd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ir._fromErrorAndOperation(t,r,e,s):r})}async function hy(t,e,n=!1){const s=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nn._forOperation(t,"link",s)}/**
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
 */async function dy(t,e,n=!1){const{auth:s}=t;if(nt(s.app))return Promise.reject(kt(s));const i="reauthenticate";try{const r=await Zs(t,wd(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=Fa(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Nn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Xe(s,"user-mismatch"),r}}/**
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
 */async function Id(t,e,n=!1){if(nt(t.app))return Promise.reject(kt(t));const s="signIn",i=await wd(t,s,e),r=await Nn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fy(t,e){return Id(fn(t),e)}/**
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
 */async function Cd(t){const e=fn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jb(t,e,n){if(nt(t.app))return Promise.reject(kt(t));const s=fn(t),o=await Ko(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cd(t),l}),a=await Nn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Xb(t,e,n){return nt(t.app)?Promise.reject(kt(t)):fy(De(t),_s.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Cd(t),s})}function py(t,e,n,s){return De(t).onIdTokenChanged(e,n,s)}function _y(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function bd(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function gy(t){return De(t).signOut()}const rr="__sak";/**
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
 */class Td{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const my=1e3,vy=10;class Sd extends Td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Uv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vy):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},my)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const yy=Sd;/**
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
 */class Rd extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rd.type="SESSION";const Pd=Rd;/**
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
 */function Ey(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Mr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Ey(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mr.receivers=[];/**
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
 */function Ba(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ba("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mt(){return window}function Iy(t){mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ad(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Cy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function by(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ty(){return Ad()?self:null}/**
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
 */const Nd="firebaseLocalStorageDb",Sy=1,or="firebaseLocalStorage",Od="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lr(t,e){return t.transaction([or],e?"readwrite":"readonly").objectStore(or)}function Ry(){const t=indexedDB.deleteDatabase(Nd);return new vi(t).toPromise()}function qo(){const t=indexedDB.open(Nd,Sy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(or,{keyPath:Od})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(or)?e(s):(s.close(),await Ry(),e(await qo()))})})}async function Cc(t,e,n){const s=Lr(t,!0).put({[Od]:e,value:n});return new vi(s).toPromise()}async function Py(t,e){const n=Lr(t,!1).get(e),s=await new vi(n).toPromise();return s===void 0?null:s.value}function bc(t,e){const n=Lr(t,!0).delete(e);return new vi(n).toPromise()}const Ay=800,Ny=3;class kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ny)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ad()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mr._getInstance(Ty()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cy(),!this.activeServiceWorker)return;this.sender=new wy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||by()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await Cc(e,rr,"1"),await bc(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Py(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Lr(i,!1).getAll();return new vi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kd.type="LOCAL";const Oy=kd;new _i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function xd(t,e){return e?Nt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $a extends Ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ky(t){return Id(t.auth,new $a(t),t.bypassAuthState)}function xy(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),dy(n,new $a(t),t.bypassAuthState)}async function Dy(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),hy(n,new $a(t),t.bypassAuthState)}/**
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
 */class Dd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ky;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return xy;default:Xe(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const My=new _i(2e3,1e4);async function Zb(t,e,n){if(nt(t.app))return Promise.reject(at(t,"operation-not-supported-in-this-environment"));const s=fn(t);yv(t,e,Va);const i=xd(s,n);return new In(s,"signInViaPopup",e,i).executeNotNull()}class In extends Dd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,My.get())};e()}}In.currentPopupAction=null;/**
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
 */const Ly="pendingRedirect",Hi=new Map;class Fy extends Dd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const s=await Uy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uy(t,e){const n=Vy(e),s=Wy(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Hy(t,e){Hi.set(t._key(),e)}function Wy(t){return Nt(t._redirectPersistence)}function Vy(t){return Ui(Ly,t.config.apiKey,t.name)}async function By(t,e,n=!1){if(nt(t.app))return Promise.reject(kt(t));const s=fn(t),i=xd(s,e),o=await new Fy(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $y=10*60*1e3;class jy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Md(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$y&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tc(e))}saveEventToCache(e){this.cachedEventUids.add(Tc(e)),this.lastProcessedEventTime=Date.now()}}function Tc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Md({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(t);default:return!1}}/**
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
 */async function Ky(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
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
 */const qy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zy=/^https?/;async function Yy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ky(t);for(const n of e)try{if(Qy(n))return}catch{}Xe(t,"unauthorized-domain")}function Qy(t){const e=jo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zy.test(n))return!1;if(qy.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Jy=new _i(3e4,6e4);function Sc(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xy(t){return new Promise((e,n)=>{var s,i,r;function o(){Sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sc(),n(at(t,"network-request-failed"))},timeout:Jy.get()})}if(!((i=(s=mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mt().gapi)===null||r===void 0)&&r.load)o();else{const a=qv("iframefcb");return mt()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},vd(`${Kv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function Zy(t){return Wi=Wi||Xy(t),Wi}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eE=new _i(5e3,15e3),tE="__/auth/iframe",nE="emulator/auth/iframe",sE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rE(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?La(e,nE):`https://${t.config.authDomain}/${tE}`,s={apiKey:e.apiKey,appName:t.name,v:ps},i=iE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${fs(s).slice(1)}`}async function oE(t){const e=await Zy(t),n=mt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:rE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=mt().setTimeout(()=>{r(o)},eE.get());function l(){mt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lE=500,cE=600,uE="_blank",hE="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dE(t,e,n,s=lE,i=cE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=xe().toLowerCase();n&&(a=hd(c)?uE:n),cd(c)&&(e=e||hE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Fv(c)&&a!=="_self")return fE(e||"",a),new Rc(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Rc(h)}function fE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pE="__/auth/handler",_E="emulator/auth/handler",gE=encodeURIComponent("fac");async function Pc(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ps,eventId:i};if(e instanceof Va){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gE}=${encodeURIComponent(l)}`:"";return`${mE(t)}?${fs(a).slice(1)}${c}`}function mE({config:t}){return t.emulator?La(t,_E):`https://${t.authDomain}/${pE}`}/**
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
 */const po="webStorageSupport";class vE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pd,this._completeRedirectFn=By,this._overrideRedirectResult=Hy}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Pc(e,n,s,jo(),i);return dE(e,o,Ba())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Pc(e,n,s,jo(),i);return Iy(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oE(e),s=new jy(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(po,{type:po},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[po];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gd()||ud()||Ua()}}const yE=vE;var Ac="@firebase/auth",Nc="1.8.1";/**
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
 */class EE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IE(t){os(new Pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:md(t)},c=new $v(s,i,r,l);return Zv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),os(new Pn("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(s=>new EE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Ac,Nc,wE(t)),tn(Ac,Nc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const CE=5*60,bE=Gh("authIdTokenMaxAge")||CE;let Oc=null;const TE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bE)return;const i=n==null?void 0:n.token;Oc!==i&&(Oc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ld(t=Xh()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xv(t,{popupRedirectResolver:yE,persistence:[Oy,yy,Pd]}),s=Gh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=TE(r.toString());_y(n,o,()=>o(n.currentUser)),py(n,a=>o(a))}}const i=$h("auth");return i&&ey(n,`http://${i}`),n}function SE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=at("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",SE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IE("Browser");var kc={};const xc="@firebase/database",Dc="1.0.10";/**
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
 */let Fd="";function RE(t){Fd=t}/**
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
 */class PE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class AE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ud=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PE(e)}}catch{}return new AE},Cn=Ud("localStorage"),NE=Ud("sessionStorage");/**
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
 */const ns=new Na("@firebase/database"),OE=function(){let t=1;return function(){return t++}}(),Hd=function(t){const e=am(t),n=new sm;n.update(e);const s=n.digest();return Ra.encodeByteArray(s)},yi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yi.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let Hs=null,Mc=!0;const kE=function(t,e){b(!e,"Can't turn on custom loggers persistently."),ns.logLevel=se.VERBOSE,Hs=ns.log.bind(ns)},Re=function(...t){if(Mc===!0&&(Mc=!1,Hs===null&&NE.get("logging_enabled")===!0&&kE()),Hs){const e=yi.apply(null,t);Hs(e)}},Ei=function(t){return function(...e){Re(t,...e)}},zo=function(...t){const e="FIREBASE INTERNAL ERROR: "+yi(...t);ns.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${yi(...t)}`;throw ns.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+yi(...t);ns.warn(e)},xE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},DE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},as="[MIN_NAME]",On="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===as||e===On)return-1;if(e===as||t===On)return 1;{const n=Lc(t),s=Lc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ME=function(t,e){return t===e?0:t<e?-1:1},Cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},ja=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ge(e[s]),n+=":",n+=ja(t[e[s]]);return n+="}",n},Vd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bd=function(t){b(!Wd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},LE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const HE=new RegExp("^-?(0*)\\d{1,10}$"),WE=-2147483648,VE=2147483647,Lc=function(t){if(HE.test(t)){const e=Number(t);if(e>=WE&&e<=VE)return e}return null},ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},BE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class $E{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class jE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
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
 */const Ga="5",$d="v",jd="s",Gd="r",Kd="f",qd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zd="ls",Yd="p",Yo="ac",Qd="websocket",Jd="long_polling";/**
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
 */class Xd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zd(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Qd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GE(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class KE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ug(this.counters_)}}/**
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
 */const _o={},go={};function Ka(t){const e=t.toString();return _o[e]||(_o[e]=new KE),_o[e]}function qE(t,e){const n=t.toString();return go[n]||(go[n]=e()),go[n]}/**
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
 */class zE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ms(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fc="start",YE="close",QE="pLPCommand",JE="pRTLPCB",ef="id",tf="pw",nf="ser",XE="cb",ZE="seg",ew="ts",tw="d",nw="dframe",sf=1870,rf=30,sw=sf-rf,iw=25e3,rw=3e4;class Gn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=Ka(n),this.urlFn=l=>(this.appCheckToken&&(l[Yo]=this.appCheckToken),Zd(n,Jd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rw)),DE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fc)this.id=a,this.password=l;else if(o===YE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fc]="t",s[nf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[XE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$d]=Ga,this.transportSessionId&&(s[jd]=this.transportSessionId),this.lastSessionId&&(s[zd]=this.lastSessionId),this.applicationId&&(s[Yd]=this.applicationId),this.appCheckToken&&(s[Yo]=this.appCheckToken),typeof location<"u"&&location.hostname&&qd.test(location.hostname)&&(s[Gd]=Kd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gn.forceAllow_=!0}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){return Gn.forceAllow_?!0:!Gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LE()&&!FE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vh(n),i=Vd(s,sw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nw]="t",s[ef]=e,s[tf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OE(),window[QE+this.uniqueCallbackIdentifier]=e,window[JE+this.uniqueCallbackIdentifier]=n,this.myIFrame=qa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ef]=this.myID,e[tf]=this.myPW,e[nf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rf+s.length<=sf;){const o=this.pendingSegs.shift();s=s+"&"+ZE+i+"="+o.seg+"&"+ew+i+"="+o.ts+"&"+tw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(iw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ow=16384,aw=45e3;let ar=null;typeof MozWebSocket<"u"?ar=MozWebSocket:typeof WebSocket<"u"&&(ar=WebSocket);class tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=Ka(n),this.connURL=tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[$d]=Ga,typeof location<"u"&&location.hostname&&qd.test(location.hostname)&&(o[Gd]=Kd),n&&(o[jd]=n),s&&(o[zd]=s),i&&(o[Yo]=i),r&&(o[Yd]=r),Zd(e,Qd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cn.set("previous_websocket_failure",!0);try{let s;qh(),this.mySock=new ar(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ar!==null&&!tt.forceDisallow_}static previouslyFailed(){return Cn.isInMemoryStorage||Cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Js(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vd(n,ow);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
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
 */class ti{static get ALL_TRANSPORTS(){return[Gn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of ti.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ti.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ti.globalTransportInitialized_=!1;/**
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
 */const lw=6e4,cw=5e3,uw=10*1024,hw=100*1024,mo="t",Uc="d",dw="s",Hc="r",fw="e",Wc="o",Vc="a",Bc="n",$c="p",pw="h";class _w{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new ti(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mo in e){const n=e[mo];n===Vc?this.upgradeIfSecondaryHealthy_():n===Hc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$c,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cs(mo,e);if(Uc in e){const s=e[Uc];if(n===pw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dw?this.onConnectionShutdown_(s):n===Hc?this.onReset_(s):n===fw?zo("Server Error: "+s):n===Wc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$c,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class of{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class af{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class lr extends af{static getInstance(){return new lr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jc=32,Gc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new re("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function lf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return ke(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function za(t,e){if(rn(t)!==rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rn(t)>rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class mw{constructor(e,n){this.errorPrefix_=n,this.parts_=cf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=xr(this.parts_[s]);hf(this)}}function vw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xr(e),hf(t)}function yw(t){const e=t.parts_.pop();t.byteLength_-=xr(e),t.parts_.length>0&&(t.byteLength_-=1)}function hf(t){if(t.byteLength_>Gc)throw new Error(t.errorPrefix_+"has a key path longer than "+Gc+" bytes ("+t.byteLength_+").");if(t.parts_.length>jc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jc+") or object contains a cycle "+En(t))}function En(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ya extends af{static getInstance(){return new Ya}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bs=1e3,Ew=60*5*1e3,Kc=30*1e3,ww=1.3,Iw=3e4,Cw="server_kill",qc=3;class xt extends of{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xt.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bs,this.maxReconnectDelay_=Ew,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!qh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ya.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ge(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new kr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const s=rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zo("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Iw&&(this.reconnectDelay_=bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ww)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _w(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uo(this.interruptReasons_)&&(this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ja(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qc&&(this.reconnectDelay_=Kc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fd.replace(/\./g,"-")]=1,Pa()?e["framework.cordova"]=1:Kh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lr.getInstance().currentlyOnline();return Uo(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class Fr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(as,e),i=new G(as,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Ni;class df extends Fr{static get __EMPTY_NODE(){return Ni}static set __EMPTY_NODE(e){Ni=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(On,Ni)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ni)}toString(){return".key"}}const ss=new df;/**
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
 */class Oi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class bw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oi(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new bw;/**
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
 */function Tw(t,e){return gs(t.name,e.name)}function Qa(t,e){return gs(t,e)}/**
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
 */let Qo;function Sw(t){Qo=t}const ff=function(t){return typeof t=="number"?"number:"+Bd(t):"string:"+t},pf=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else b(t===Qo||t.isEmpty(),"priority of unexpected type.");b(t===Qo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zc;class ye{static set __childrenNodeConstructor(e){zc=e}static get __childrenNodeConstructor(){return zc}constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ff(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bd(this.value_):e+=this.value_,this.lazyHash_=Hd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _f,gf;function Rw(t){_f=t}function Pw(t){gf=t}class Aw extends Fr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(On,new ye("[PRIORITY-POST]",gf))}makePost(e,n){const s=_f(e);return new G(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new Aw;/**
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
 */const Nw=Math.log(2);class Ow{constructor(e){const n=r=>parseInt(Math.log(r)/Nw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),I=i(_+1,c);return h=t[_],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,m,I)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,I){const x=h-m,D=h;h-=m;const O=i(x+1,D),M=t[x],k=n?n(M):M;_(new Ee(k,M.node,I,null,O))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const I=l.nextBitIsOne(),x=Math.pow(2,l.count-(m+1));I?d(x,Ee.BLACK):(d(x,Ee.BLACK),d(x,Ee.RED))}return u},o=new Ow(t.length),a=r(o);return new Le(s||e,a)};/**
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
 */let vo;const Wn={};class Ot{static get Default(){return b(Wn&&fe,"ChildrenNode.ts has not been loaded"),vo=vo||new Ot({".priority":Wn},{".priority":fe}),vo}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){b(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=cr(s,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const s=Zi(this.indexes_,(i,r)=>{const o=rs(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),cr(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=Zi(this.indexes_,i=>{if(i===Wn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ot(s,this.indexSet_)}}/**
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
 */let Ts;class H{static get EMPTY_NODE(){return Ts||(Ts=new H(new Le(Qa),null,Ot.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&pf(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ts}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ts:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ts:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{b(j(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ff(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wi?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kw extends H{constructor(){super(new Le(Qa),H.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const wi=new kw;Object.defineProperties(G,{MIN:{value:new G(as,H.EMPTY_NODE)},MAX:{value:new G(On,wi)}});df.__EMPTY_NODE=H.EMPTY_NODE;ye.__childrenNodeConstructor=H;Sw(wi);Pw(wi);/**
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
 */const xw=!0;function we(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,we(e))}if(!(t instanceof Array)&&xw){const n=[];let s=!1;if(Ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=we(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=cr(n,Tw,o=>o.name,Qa);if(s){const o=cr(n,fe.getCompare());return new H(r,we(e),new Ot({".priority":o},{".priority":fe}))}else return new H(r,we(e),Ot.Default)}else{let n=H.EMPTY_NODE;return Ue(t,(s,i)=>{if(Ut(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}Rw(we);/**
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
 */class Dw extends Fr{constructor(e){super(),this.indexPath_=e,b(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}makePost(e,n){const s=we(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,wi);return new G(On,e)}toString(){return cf(this.indexPath_,0).join("/")}}/**
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
 */class Mw extends Fr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=we(e);return new G(n,s)}toString(){return".value"}}const Lw=new Mw;/**
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
 */function mf(t){return{type:"value",snapshotNode:t}}function ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ni(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function si(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ja{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ni(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ls(n,s)):o.trackChildChange(si(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ni(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(si(i,r,o))}else s.trackChildChange(ls(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ii{constructor(e){this.indexedFilter_=new Ja(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ii.getStartPost_(e),this.endPost_=ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Uw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new G(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(si(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ni(n,h));const I=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ls(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ni(c.name,c.node)),r.trackChildChange(ls(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class Xa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:as}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:On}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Xa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hw(t){return t.loadsAllData()?new Ja(t.getIndex()):t.hasLimit()?new Uw(t):new ii(t)}function Yc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===Lw?n="$value":t.index_===ss?n="$key":(b(t.index_ instanceof Dw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ge(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ge(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ge(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class ur extends of{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ei("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ur.getListenId_(e,s),a={};this.listens_[o]=a;const l=Yc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),rs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ur.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yc(e._queryParams),s=e._path.toString(),i=new kr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Js(a.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ww{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function hr(){return{value:null,children:new Map}}function vf(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,hr());const i=t.children.get(s);e=ce(e),vf(i,e,n)}}function Jo(t,e,n){t.value!==null?n(e,t.value):Vw(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Jo(i,r,n)})}function Vw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Bw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Jc=10*1e3,$w=30*1e3,jw=5*60*1e3;class Gw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bw(e);const s=Jc+($w-Jc)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&Ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*jw))}}/**
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
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function yf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Za(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function el(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=yf()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new dr(z(),n,this.revert)}}else return b(j(this.path)===e,"operationForChild called for unrelated child."),new dr(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class ri{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new ri(this.source,z()):new ri(this.source,ce(this.path))}}/**
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
 */class kn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return K(this.path)?new kn(this.source,z(),this.snap.getImmediateChild(e)):new kn(this.source,ce(this.path),this.snap)}}/**
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
 */class oi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new kn(this.source,z(),n.value):new oi(this.source,z(),n)}else return b(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oi(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class on{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Kw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Fw(o.childName,o.snapshotNode))}),Ss(t,i,"child_removed",e,s,n),Ss(t,i,"child_added",e,s,n),Ss(t,i,"child_moved",r,s,n),Ss(t,i,"child_changed",e,s,n),Ss(t,i,"value",e,s,n),i}function Ss(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Yw(t,a,l)),o.forEach(a=>{const l=zw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function zw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Yw(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ur(t,e){return{eventCache:t,serverCache:e}}function Vs(t,e,n,s){return Ur(new on(e,n,s),t.serverCache)}function Ef(t,e,n,s){return Ur(t.eventCache,new on(e,n,s))}function fr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yo;const Qw=()=>(yo||(yo=new Le(ME)),yo);class he{static fromObject(e){let n=new he(null);return Ue(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=Qw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:me(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new he(null)}}set(e,n){if(K(e))return new he(n,this.children);{const s=j(e),r=(this.children.get(s)||new he(null)).set(ce(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new he(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),me(n,i),s):new he(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new he(null))}}function Bs(t,e,n){if(K(e))return new lt(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new lt(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new lt(r)}}}function Xc(t,e,n){let s=t;return Ue(n,(i,r)=>{s=Bs(s,me(e,i),r)}),s}function Zc(t,e){if(K(e))return lt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new lt(n)}}function Xo(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function eu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function nn(t,e){if(K(e))return t;{const n=Mn(t,e);return n!=null?new lt(new he(n)):new lt(t.writeTree_.subtree(e))}}function Zo(t){return t.writeTree_.isEmpty()}function cs(t,e){return wf(z(),t.writeTree_,e)}function wf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wf(me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(me(t,".priority"),s)),n}}/**
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
 */function Hr(t,e){return Tf(e,t)}function Jw(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bs(t.visibleWrites,e,n)),t.lastWriteId=s}function Xw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Zw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eI(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return tI(t),!0;if(s.snap)t.visibleWrites=Zc(t.visibleWrites,s.path);else{const a=s.children;Ue(a,l=>{t.visibleWrites=Zc(t.visibleWrites,me(s.path,l))})}return!0}else return!1}function eI(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(me(t.path,n),e))return!0;return!1}function tI(t){t.visibleWrites=If(t.allWrites,nI,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nI(t){return t.visible}function If(t,e,n){let s=lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=ke(n,o),s=Bs(s,a,r.snap)):st(o,n)&&(a=ke(o,n),s=Bs(s,z(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=ke(n,o),s=Xc(s,a,r.children);else if(st(o,n))if(a=ke(o,n),K(a))s=Xc(s,z(),r.children);else{const l=rs(r.children,j(a));if(l){const c=l.getChild(ce(a));s=Bs(s,z(),c)}}}else throw ds("WriteRecord should have .snap or .children")}}return s}function Cf(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(Zo(o))return n;if(n==null&&!Xo(o,z()))return null;{const a=n||H.EMPTY_NODE;return cs(o,a)}}}else{const r=nn(t.visibleWrites,e);if(!i&&Zo(r))return n;if(!i&&n==null&&!Xo(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=If(t.allWrites,o,e),l=n||H.EMPTY_NODE;return cs(a,l)}}}function sI(t,e,n){let s=H.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=cs(nn(r,new re(o)),a);s=s.updateImmediateChild(o,l)}),eu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nn(t.visibleWrites,e);return eu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iI(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(Xo(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return Zo(o)?i.getChild(n):cs(o,i.getChild(n))}}function rI(t,e,n,s){const i=me(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=nn(t.visibleWrites,i);return cs(o,s.getNode().getImmediateChild(n))}else return null}function oI(t,e){return Mn(t.visibleWrites,e)}function aI(t,e,n,s,i,r,o){let a;const l=nn(t.visibleWrites,e),c=Mn(l,z());if(c!=null)a=c;else if(n!=null)a=cs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function lI(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function pr(t,e,n,s){return Cf(t.writeTree,t.treePath,e,n,s)}function tl(t,e){return sI(t.writeTree,t.treePath,e)}function tu(t,e,n,s){return iI(t.writeTree,t.treePath,e,n,s)}function _r(t,e){return oI(t.writeTree,me(t.treePath,e))}function cI(t,e,n,s,i,r){return aI(t.writeTree,t.treePath,e,n,s,i,r)}function nl(t,e,n){return rI(t.writeTree,t.treePath,e,n)}function bf(t,e){return Tf(me(t.treePath,e),t.writeTree)}function Tf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,si(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ni(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ls(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,si(s,e.snapshotNode,i.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Sf=new hI;class sl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new on(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),r=cI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function dI(t){return{filter:t}}function fI(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pI(t,e,n,s,i){const r=new uI;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=ea(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=gr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=gI(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ta(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=yI(t,e,c.path,s,i,r):o=mI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=vI(t,e,n.path,s,r);else throw ds("Unknown operation type: "+n.type);const l=r.getChanges();return _I(e,o,l),{viewCache:o,changes:l}}function _I(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(mf(fr(e)))}}function Rf(t,e,n,s,i,r){const o=e.eventCache;if(_r(s,n)!=null)return e;{let a,l;if(K(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xn(e),u=c instanceof H?c:H.EMPTY_NODE,h=tl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=pr(s,xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){b(rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=tu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=tu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=nl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Vs(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function gr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&rn(n)>1)return e;const m=ce(n),x=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,m,Sf,null)}const h=Ef(e,c,l.isFullyInitialized()||K(n),u.filtersNodes()),d=new sl(i,h,r);return Rf(t,h,n,i,d,a)}function ea(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new sl(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Vs(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ce(n),_=a.getNode().getImmediateChild(h);let m;if(K(d))m=s;else{const I=u.getCompleteChild(h);I!=null?lf(d)===".priority"&&I.getChild(uf(d)).isEmpty()?m=I:m=I.updateChild(d,s):m=H.EMPTY_NODE}if(_.equals(m))l=e;else{const I=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Vs(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nu(t,e){return t.eventCache.isCompleteForChild(e)}function gI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=me(n,l);nu(e,j(u))&&(a=ea(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=me(n,l);nu(e,j(u))||(a=ea(t,a,u,c,i,r,o))}),a}function su(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ta(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=su(t,_,d);l=gr(t,l,new re(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),I=su(t,m,d);l=gr(t,l,new re(h),I,i,r,o,a)}}),l}function mI(t,e,n,s,i,r,o){if(_r(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(K(n)){let c=new he(null);return l.getNode().forEachChild(ss,(u,h)=>{c=c.set(new re(u),h)}),ta(t,e,n,c,i,r,a,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const d=me(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ta(t,e,n,c,i,r,a,o)}}function vI(t,e,n,s,i){const r=e.serverCache,o=Ef(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Rf(t,o,n,s,Sf,i)}function yI(t,e,n,s,i,r){let o;if(_r(s,n)!=null)return e;{const a=new sl(s,e,i),l=e.eventCache.getNode();let c;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pr(s,xn(e));else{const h=e.serverCache.getNode();b(h instanceof H,"serverChildren would be complete if leaf node"),u=tl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=j(n);let h=nl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pr(s,xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||_r(s,z())!=null,Vs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class EI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ja(s.getIndex()),r=Hw(s);this.processor_=dI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new on(l,o.isFullyInitialized(),i.filtersNodes()),h=new on(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ur(h,u),this.eventGenerator_=new Kw(this.query_)}get query(){return this.query_}}function wI(t){return t.viewCache_.serverCache.getNode()}function II(t){return fr(t.viewCache_)}function CI(t,e){const n=xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function iu(t){return t.eventRegistrations_.length===0}function bI(t,e){t.eventRegistrations_.push(e)}function ru(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ou(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(b(xn(t.viewCache_),"We should always have a full cache before handling merges"),b(fr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=pI(t.processor_,i,e,n,s);return fI(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Pf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function TI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(ls(r,o))}),n.isFullyInitialized()&&s.push(mf(n.getNode())),Pf(t,s,n.getNode(),e)}function Pf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return qw(t.eventGenerator_,e,n,i)}/**
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
 */let mr;class Af{constructor(){this.views=new Map}}function SI(t){b(!mr,"__referenceConstructor has already been defined"),mr=t}function RI(){return b(mr,"Reference.ts has not been loaded"),mr}function PI(t){return t.views.size===0}function il(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),ou(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ou(o,e,n,s));return r}}function Nf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=pr(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=tl(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=Ur(new on(a,l,!1),new on(s,i,!1));return new EI(e,c)}return o}function AI(t,e,n,s,i,r){const o=Nf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bI(o,n),TI(o,n)}function NI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=an(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ru(c,n,s)),iu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ru(l,n,s)),iu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!an(t)&&r.push(new(RI())(e._repo,e._path)),{removed:r,events:o}}function Of(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function sn(t,e){let n=null;for(const s of t.views.values())n=n||CI(s,e);return n}function kf(t,e){if(e._queryParams.loadsAllData())return Wr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xf(t,e){return kf(t,e)!=null}function an(t){return Wr(t)!=null}function Wr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let vr;function OI(t){b(!vr,"__referenceConstructor has already been defined"),vr=t}function kI(){return b(vr,"Reference.ts has not been loaded"),vr}let xI=1;class au{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=lI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Df(t,e,n,s,i){return Jw(t.pendingWriteTree_,e,n,s,i),i?Ci(t,new kn(yf(),e,n)):[]}function bn(t,e,n=!1){const s=Xw(t.pendingWriteTree_,e);if(Zw(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(z(),!0):Ue(s.children,o=>{r=r.set(new re(o),!0)}),Ci(t,new dr(s.path,r,n))}else return[]}function Ii(t,e,n){return Ci(t,new kn(Za(),e,n))}function DI(t,e,n){const s=he.fromObject(n);return Ci(t,new oi(Za(),e,s))}function MI(t,e){return Ci(t,new ri(Za(),e))}function LI(t,e,n){const s=ol(t,n);if(s){const i=al(s),r=i.path,o=i.queryId,a=ke(r,e),l=new ri(el(o),a);return ll(t,r,l)}else return[]}function yr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||xf(o,e))){const l=NI(o,e,n,s);PI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>an(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=HI(d);for(let m=0;m<_.length;++m){const I=_[m],x=I.query,D=Uf(t,I);t.listenProvider_.startListening($s(x),ai(t,x),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening($s(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Vr(d));t.listenProvider_.stopListening($s(d),_)}))}WI(t,c)}return a}function Mf(t,e,n,s){const i=ol(t,s);if(i!=null){const r=al(i),o=r.path,a=r.queryId,l=ke(o,e),c=new kn(el(a),l,n);return ll(t,o,c)}else return[]}function FI(t,e,n,s){const i=ol(t,s);if(i){const r=al(i),o=r.path,a=r.queryId,l=ke(o,e),c=he.fromObject(n),u=new oi(el(a),l,c);return ll(t,o,u)}else return[]}function na(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=ke(d,i);r=r||sn(_,m),o=o||an(_)});let a=t.syncPointTree_.get(i);a?(o=o||an(a),r=r||sn(a,z())):(a=new Af,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const I=sn(m,z());I&&(r=r.updateImmediateChild(_,I))}));const c=xf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Vr(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=VI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Hr(t.pendingWriteTree_,i);let h=AI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=kf(a,e);h=h.concat(BI(t,e,d))}return h}function rl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ke(o,e),c=sn(a,l);if(c)return c});return Cf(i,e,r,n,!0)}function UI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ke(c,n);s=s||sn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||sn(i,z()):(i=new Af,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new on(s,!0,!1):null,a=Hr(t.pendingWriteTree_,e._path),l=Nf(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return II(l)}function Ci(t,e){return Lf(e,t.syncPointTree_,null,Hr(t.pendingWriteTree_,z()))}function Lf(t,e,n,s){if(K(t.path))return Ff(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=sn(i,z()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=bf(s,o);r=r.concat(Lf(a,l,c,u))}return i&&(r=r.concat(il(i,t,s,n))),r}}function Ff(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=sn(i,z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ff(u,a,l,c)))}),i&&(r=r.concat(il(i,t,s,n))),r}function Uf(t,e){const n=e.query,s=ai(t,n);return{hashFn:()=>(wI(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?LI(t,n._path,s):MI(t,n._path);{const r=UE(i,n);return yr(t,n,null,r)}}}}function ai(t,e){const n=Vr(e);return t.queryToTagMap.get(n)}function Vr(t){return t._path.toString()+"$"+t._queryIdentifier}function ol(t,e){return t.tagToQueryMap.get(e)}function al(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function ll(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Hr(t.pendingWriteTree_,e);return il(s,n,i,null)}function HI(t){return t.fold((e,n,s)=>{if(n&&an(n))return[Wr(n)];{let i=[];return n&&(i=Of(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function $s(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kI())(t._repo,t._path):t}function WI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Vr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function VI(){return xI++}function BI(t,e,n){const s=e._path,i=ai(t,e),r=Uf(t,n),o=t.listenProvider_.startListening($s(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!an(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!K(c)&&u&&an(u))return[Wr(u).query];{let d=[];return u&&(d=d.concat(Of(u).map(_=>_.query))),Ue(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening($s(u),ai(t,u))}}return o}/**
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
 */class cl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cl(n)}node(){return this.node_}}class ul{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new ul(this.syncTree_,n)}node(){return rl(this.syncTree_,this.path_)}}const $I=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lu=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return GI(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},GI=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},KI=function(t,e,n,s){return hl(e,new ul(n,t),s)},Hf=function(t,e,n){return hl(t,new cl(e),n)};function hl(t,e,n){const s=t.getPriority().val(),i=lu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=lu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(fe,(a,l)=>{const c=hl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class dl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fl(t,e){let n=e instanceof re?e:new re(e),s=t,i=j(n);for(;i!==null;){const r=rs(s.node.children,i)||{children:{},childCount:0};s=new dl(i,s,r),n=ce(n),i=j(n)}return s}function vs(t){return t.node.value}function Wf(t,e){t.node.value=e,sa(t)}function Vf(t){return t.node.childCount>0}function qI(t){return vs(t)===void 0&&!Vf(t)}function Br(t,e){Ue(t.node.children,(n,s)=>{e(new dl(n,t,s))})}function Bf(t,e,n,s){n&&!s&&e(t),Br(t,i=>{Bf(i,e,!0,s)}),n&&s&&e(t)}function zI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bi(t){return new re(t.parent===null?t.name:bi(t.parent)+"/"+t.name)}function sa(t){t.parent!==null&&YI(t.parent,t.name,t)}function YI(t,e,n){const s=qI(n),i=Ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,sa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sa(t))}/**
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
 */const QI=/[\[\].#$\/\u0000-\u001F\u007F]/,JI=/[\[\].#$\u0000-\u001F\u007F]/,Eo=10*1024*1024,$f=function(t){return typeof t=="string"&&t.length!==0&&!QI.test(t)},jf=function(t){return typeof t=="string"&&t.length!==0&&!JI.test(t)},XI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jf(t)},ZI=function(t,e,n,s){pl(Aa(t,"value"),e,n)},pl=function(t,e,n){const s=n instanceof re?new mw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+En(s));if(typeof e=="function")throw new Error(t+"contains a function "+En(s)+" with contents = "+e.toString());if(Wd(e))throw new Error(t+"contains "+e.toString()+" "+En(s));if(typeof e=="string"&&e.length>Eo/3&&xr(e)>Eo)throw new Error(t+"contains a string greater than "+Eo+" utf8 bytes "+En(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$f(o)))throw new Error(t+" contains an invalid key ("+o+") "+En(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vw(s,o),pl(t,a,s),yw(s)}),i&&r)throw new Error(t+' contains ".value" child '+En(s)+" in addition to actual children.")}},Gf=function(t,e,n,s){if(!jf(n))throw new Error(Aa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gf(t,e,n)},tC=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},nC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$f(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XI(n))throw new Error(Aa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _l(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!za(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kf(t,e,n){_l(t,n),qf(t,s=>za(s,e))}function Et(t,e,n){_l(t,n),qf(t,s=>st(s,e)||st(e,s))}function qf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(iC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Hs&&Re("event: "+n.toString()),ms(s)}}}/**
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
 */const rC="repo_interrupt",oC=25;class aC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hr(),this.transactionQueueTree_=new dl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lC(t,e,n){if(t.stats_=Ka(t.repoInfo_),t.forceRestClient_||BE())t.server_=new ur(t.repoInfo_,(s,i,r,o)=>{cu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new xt(t.repoInfo_,e,(s,i,r,o)=>{cu(t,s,i,r,o)},s=>{uu(t,s)},s=>{uC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=qE(t.repoInfo_,()=>new Gw(t.stats_,t.server_)),t.infoData_=new Ww,t.infoSyncTree_=new au({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ii(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ml(t,"connected",!1),t.serverSyncTree_=new au({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Et(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cC(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gl(t){return $I({timestamp:cC(t)})}function cu(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Zi(n,c=>we(c));o=FI(t.serverSyncTree_,r,l,i)}else{const l=we(n);o=Mf(t.serverSyncTree_,r,l,i)}else if(s){const l=Zi(n,c=>we(c));o=DI(t.serverSyncTree_,r,l)}else{const l=we(n);o=Ii(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jr(t,r)),Et(t.eventQueue_,a,o)}function uu(t,e){ml(t,"connected",e),e===!1&&fC(t)}function uC(t,e){Ue(e,(n,s)=>{ml(t,n,s)})}function ml(t,e,n){const s=new re("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=Ii(t.infoSyncTree_,s,i);Et(t.eventQueue_,s,r)}function zf(t){return t.nextWriteId_++}function hC(t,e,n){const s=UI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());na(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ii(t.serverSyncTree_,e._path,r);else{const a=ai(t.serverSyncTree_,e);o=Mf(t.serverSyncTree_,e._path,r,a)}return Et(t.eventQueue_,e._path,o),yr(t.serverSyncTree_,e,n,null,!0),r},i=>($r(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function dC(t,e,n,s,i){$r(t,"set",{path:e.toString(),value:n,priority:s});const r=gl(t),o=we(n,s),a=rl(t.serverSyncTree_,e),l=Hf(o,a,r),c=zf(t),u=Df(t.serverSyncTree_,e,l,c,!0);_l(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Fe("set at "+e+" failed: "+d);const I=bn(t.serverSyncTree_,c,!m);Et(t.eventQueue_,e,I),mC(t,i,d,_)});const h=Zf(t,e);jr(t,h),Et(t.eventQueue_,h,[])}function fC(t){$r(t,"onDisconnectEvents");const e=gl(t),n=hr();Jo(t.onDisconnect_,z(),(i,r)=>{const o=KI(i,r,t.serverSyncTree_,e);vf(n,i,o)});let s=[];Jo(n,z(),(i,r)=>{s=s.concat(Ii(t.serverSyncTree_,i,r));const o=Zf(t,i);jr(t,o)}),t.onDisconnect_=hr(),Et(t.eventQueue_,z(),s)}function pC(t,e,n){let s;j(e._path)===".info"?s=na(t.infoSyncTree_,e,n):s=na(t.serverSyncTree_,e,n),Kf(t.eventQueue_,e._path,s)}function _C(t,e,n){let s;j(e._path)===".info"?s=yr(t.infoSyncTree_,e,n):s=yr(t.serverSyncTree_,e,n),Kf(t.eventQueue_,e._path,s)}function gC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rC)}function $r(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function mC(t,e,n,s){e&&ms(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yf(t,e,n){return rl(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function vl(t,e=t.transactionQueueTree_){if(e||Gr(t,e),vs(e)){const n=Jf(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vC(t,bi(e),n)}else Vf(e)&&Br(e,n=>{vl(t,n)})}function vC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$r(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(bn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Gr(t,fl(t.transactionQueueTree_,e)),vl(t,t.transactionQueueTree_),Et(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ms(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}jr(t,e)}},o)}function jr(t,e){const n=Qf(t,e),s=bi(n),i=Jf(t,n);return yC(t,i,s),s}function yC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ke(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=oC)u=!0,h="maxretry",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Yf(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){pl("transaction failed: Data returned ",_,l.path);let m=we(_);typeof _=="object"&&_!=null&&Ut(_,".priority")||(m=m.updatePriority(d.getPriority()));const x=l.currentWriteId,D=gl(t),O=Hf(m,d,D);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=zf(t),o.splice(o.indexOf(x),1),i=i.concat(Df(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(bn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Gr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ms(s[a]);vl(t,t.transactionQueueTree_)}function Qf(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&vs(s)===void 0;)s=fl(s,n),e=ce(e),n=j(e);return s}function Jf(t,e){const n=[];return Xf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xf(t,e,n){const s=vs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Br(e,i=>{Xf(t,i,n)})}function Gr(t,e){const n=vs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Wf(e,n.length>0?n:void 0)}Br(e,s=>{Gr(t,s)})}function Zf(t,e){const n=bi(Qf(t,e)),s=fl(t.transactionQueueTree_,e);return zI(s,i=>{wo(t,i)}),wo(t,s),Bf(s,i=>{wo(t,i)}),n}function wo(t,e){const n=vs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wf(e,void 0):n.length=r+1,Et(t.eventQueue_,bi(e),i);for(let o=0;o<s.length;o++)ms(s[o])}}/**
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
 */function EC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const hu=function(t,e){const n=IC(t),s=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},IC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=EC(t.substring(u,h)));const d=wC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class CC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class bC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ep{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:lf(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=Qc(this._queryParams),n=ja(e);return n==="{}"?"default":n}get _queryObject(){return Qc(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof yl))return!1;const n=this._repo===e._repo,s=za(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gw(this._path)}}class Ht extends yl{constructor(e,n){super(e,n,new Xa,!1)}get parent(){const e=uf(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class li{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=ia(this.ref,e);return new li(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new li(i,ia(this.ref,s),fe)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function eT(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?ia(t._root,e):t._root}function ia(t,e){return t=De(t),j(t._path)===null?eC("child","path",e):Gf("child","path",e),new Ht(t._repo,me(t._path,e))}function tT(t,e){t=De(t),tC("set",t._path),ZI("set",e,t._path);const n=new kr;return dC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function nT(t){t=De(t);const e=new ep(()=>{}),n=new Kr(e);return hC(t._repo,t,n).then(s=>new li(s,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class Kr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new CC("value",this,new li(e.snapshotNode,new Ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bC(this,e,n):null}matches(e){return e instanceof Kr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function TC(t,e,n,s,i){const r=new ep(n,void 0),o=new Kr(r);return pC(t._repo,t,o),()=>_C(t._repo,t,o)}function sT(t,e,n,s){return TC(t,"value",e)}SI(Ht);OI(Ht);/**
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
 */const SC="FIREBASE_DATABASE_EMULATOR_HOST",ra={};let RC=!1;function PC(t,e,n,s){t.repoInfo_=new Xd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function AC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hu(r,i),a=o.repoInfo,l;typeof process<"u"&&kc&&(l=kc[SC]),l?(r=`http://${l}?ns=${a.namespace}`,o=hu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new jE(t.name,t.options,e);nC("Invalid Firebase Database URL",o),K(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=OC(a,t,c,new $E(t.name,n));return new kC(u,t)}function NC(t,e){const n=ra[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gC(t),delete n[t.key]}function OC(t,e,n,s){let i=ra[e.name];i||(i={},ra[e.name]=i);let r=i[t.toURLString()];return r&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new aC(t,RC,n,s),i[t.toURLString()]=r,r}class kC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function xC(t=Xh(),e){const n=ka(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=jg("database");s&&DC(n,...s)}return n}function DC(t,e,n,s={}){t=De(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vi(Vi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Gg(s.mockUserToken,t.app.options.projectId);r=new Vi(o)}PC(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function MC(t){RE(ps),os(new Pn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(xc,Dc,t),tn(xc,Dc,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MC();const LC={apiKey:"AIzaSyChPyyxmMkDOrc0yd8bNY4lBYH07Rqm2K4",authDomain:"approximot-test.firebaseapp.com",projectId:"approximot-test",databaseURL:"https://approximot-test-default-rtdb.europe-west1.firebasedatabase.app/",storageBucket:"approximot-test.firebasestorage.app",messagingSenderId:"289911245716",appId:"1:289911245716:web:c977d1e0aa6e8830699d81"},tp=Jh(LC),du=Ld(tp),iT=xC(tp),FC="modulepreload",UC=function(t){return"/"+t},fu={},$t=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=UC(l),l in fu)return;fu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":FC,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof document<"u";function np(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function HC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&np(t.default)}const J=Object.assign;function Io(t,e){const n={};for(const s in e){const i=e[s];n[s]=ct(i)?i.map(t):t(i)}return n}const js=()=>{},ct=Array.isArray,sp=/#/g,WC=/&/g,VC=/\//g,BC=/=/g,$C=/\?/g,ip=/\+/g,jC=/%5B/g,GC=/%5D/g,rp=/%5E/g,KC=/%60/g,op=/%7B/g,qC=/%7C/g,ap=/%7D/g,zC=/%20/g;function El(t){return encodeURI(""+t).replace(qC,"|").replace(jC,"[").replace(GC,"]")}function YC(t){return El(t).replace(op,"{").replace(ap,"}").replace(rp,"^")}function oa(t){return El(t).replace(ip,"%2B").replace(zC,"+").replace(sp,"%23").replace(WC,"%26").replace(KC,"`").replace(op,"{").replace(ap,"}").replace(rp,"^")}function QC(t){return oa(t).replace(BC,"%3D")}function JC(t){return El(t).replace(sp,"%23").replace($C,"%3F")}function XC(t){return t==null?"":JC(t).replace(VC,"%2F")}function ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ZC=/\/$/,eb=t=>t.replace(ZC,"");function Co(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ib(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ci(o)}}function tb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nb(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&us(e.matched[s],n.matched[i])&&lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sb(t[n],e[n]))return!1;return!0}function sb(t,e){return ct(t)?_u(t,e):ct(e)?_u(e,t):t===e}function _u(t,e){return ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ib(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function rb(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eb(t)}const ob=/^[^#]+#/;function ab(t,e){return t.replace(ob,"#")+e}function lb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qr=()=>({left:window.scrollX,top:window.scrollY});function cb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=lb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gu(t,e){return(history.state?history.state.position-e:-1)+t}const aa=new Map;function ub(t,e){aa.set(t,e)}function hb(t){const e=aa.get(t);return aa.delete(t),e}let db=()=>location.protocol+"//"+location.host;function cp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),pu(l,"")}return pu(n,t)+s+i}function fb(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=cp(t,location),m=n.value,I=e.value;let x=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}x=I?d.position-I.position:0}else s(_);i.forEach(D=>{D(n.value,m,{delta:x,type:ui.pop,direction:x?x>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(J({},d.state,{scroll:qr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function mu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?qr():null}}function pb(t){const{history:e,location:n}=window,s={value:cp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:db()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=J({},e.state,mu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=J({},i.value,e.state,{forward:l,scroll:qr()});r(u.current,u,!0);const h=J({},mu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function _b(t){t=rb(t);const e=pb(t),n=fb(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=J({location:"",base:t,go:s,createHref:ab.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function gb(t){return typeof t=="string"||t&&typeof t=="object"}function up(t){return typeof t=="string"||typeof t=="symbol"}const hp=Symbol("");var vu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vu||(vu={}));function hs(t,e){return J(new Error,{type:t,[hp]:!0},e)}function Ct(t,e){return t instanceof Error&&hp in t&&(e==null||!!(t.type&e))}const yu="[^/]+?",mb={sensitive:!1,strict:!1,start:!0,end:!0},vb=/[.+*?^${}()[\]/\\]/g;function yb(t,e){const n=J({},mb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(vb,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:I,optional:x,regexp:D}=d;r.push({name:m,repeatable:I,optional:x});const O=D||yu;if(O!==yu){_+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+k.message)}}let M=I?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(M=x&&c.length<2?`(?:/${M})`:"/"+M),x&&(M+="?"),i+=M,_+=20,x&&(_+=-8),I&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:I,optional:x}=_,D=m in c?c[m]:"";if(ct(D)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=ct(D)?D.join("/"):D;if(!O)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Eb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Eb(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Eu(s))return 1;if(Eu(i))return-1}return i.length-s.length}function Eu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wb={type:0,value:""},Ib=/[a-zA-Z0-9_]/;function Cb(t){if(!t)return[[]];if(t==="/")return[[wb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Ib.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function bb(t,e,n){const s=yb(Cb(t.path),n),i=J(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Tb(t,e){const n=[],s=new Map;e=bu({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const m=!_,I=Iu(h);I.aliasOf=_&&_.record;const x=bu(e,h),D=[I];if("alias"in h){const k=typeof h.alias=="string"?[h.alias]:h.alias;for(const Y of k)D.push(Iu(J({},I,{components:_?_.record.components:I.components,path:Y,aliasOf:_?_.record:I})))}let O,M;for(const k of D){const{path:Y}=k;if(d&&Y[0]!=="/"){const pe=d.record.path,oe=pe[pe.length-1]==="/"?"":"/";k.path=d.record.path+(Y&&oe+Y)}if(O=bb(k,d,x),_?_.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),m&&h.name&&!Cu(O)&&o(h.name)),fp(O)&&l(O),I.children){const pe=I.children;for(let oe=0;oe<pe.length;oe++)r(pe[oe],O,_&&_.children[oe])}_=_||O}return M?()=>{o(M)}:js}function o(h){if(up(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=Pb(h,n);n.splice(d,0,h),h.record.name&&!Cu(h)&&s.set(h.record.name,h)}function c(h,d){let _,m={},I,x;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw hs(1,{location:h});x=_.record.name,m=J(wu(d.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&wu(h.params,_.keys.map(M=>M.name))),I=_.stringify(m)}else if(h.path!=null)I=h.path,_=n.find(M=>M.re.test(I)),_&&(m=_.parse(I),x=_.record.name);else{if(_=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!_)throw hs(1,{location:h,currentLocation:d});x=_.record.name,m=J({},d.params,h.params),I=_.stringify(m)}const D=[];let O=_;for(;O;)D.unshift(O.record),O=O.parent;return{name:x,path:I,params:m,matched:D,meta:Rb(D)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function wu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Iu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Sb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Sb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Cu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rb(t){return t.reduce((e,n)=>J(e,n.meta),{})}function bu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pb(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;dp(t,e[r])<0?s=r:n=r+1}const i=Ab(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Ab(t){let e=t;for(;e=e.parent;)if(fp(e)&&dp(t,e)===0)return e}function fp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Nb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ip," "),o=r.indexOf("="),a=ci(o<0?r:r.slice(0,o)),l=o<0?null:ci(r.slice(o+1));if(a in e){let c=e[a];ct(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tu(t){let e="";for(let n in t){const s=t[n];if(n=QC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ct(s)?s.map(r=>r&&oa(r)):[s&&oa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Ob(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ct(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const kb=Symbol(""),Su=Symbol(""),zr=Symbol(""),wl=Symbol(""),la=Symbol("");function Rs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(hs(4,{from:n,to:e})):d instanceof Error?l(d):gb(d)?l(hs(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function bo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(np(l)){const u=(l.__vccOpts||l)[e];u&&r.push(qt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=HC(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&qt(_,n,s,o,a,i)()}))}}return r}function Ru(t){const e=ot(zr),n=ot(wl),s=et(()=>{const l=Yn(t.to);return e.resolve(l)}),i=et(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(us.bind(null,u));if(d>-1)return d;const _=Pu(l[c-2]);return c>1&&Pu(u)===_&&h[h.length-1].path!==_?h.findIndex(us.bind(null,l[c-2])):d}),r=et(()=>i.value>-1&&Fb(n.params,s.value.params)),o=et(()=>i.value>-1&&i.value===n.matched.length-1&&lp(n.params,s.value.params));function a(l={}){if(Lb(l)){const c=e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(js);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:et(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function xb(t){return t.length===1?t[0]:t}const Db=uh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ru,setup(t,{slots:e}){const n=Tr(Ru(t)),{options:s}=ot(zr),i=et(()=>({[Au(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Au(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&xb(e.default(n));return t.custom?r:Fh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Mb=Db;function Lb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ct(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Pu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Au=(t,e,n)=>t??e??n,Ub=uh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ot(la),i=et(()=>t.route||s.value),r=ot(Su,0),o=et(()=>{let c=Yn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=et(()=>i.value.matched[o.value]);xi(Su,et(()=>o.value+1)),xi(kb,a),xi(la,i);const l=th();return Di(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!us(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Nu(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,x=Fh(d,J({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Nu(n.default,{Component:x,route:c})||x}}});function Nu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hb=Ub;function Wb(t){const e=Tb(t.routes,t),n=t.parseQuery||Nb,s=t.stringifyQuery||Tu,i=t.history,r=Rs(),o=Rs(),a=Rs(),l=Yp(jt);let c=jt;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Io.bind(null,y=>""+y),h=Io.bind(null,XC),d=Io.bind(null,ci);function _(y,N){let P,L;return up(y)?(P=e.getRecordMatcher(y),L=N):L=y,e.addRoute(L,P)}function m(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function D(y,N){if(N=J({},N||l.value),typeof y=="string"){const p=Co(n,y,N.path),g=e.resolve({path:p.path},N),E=i.createHref(p.fullPath);return J(p,g,{params:d(g.params),hash:ci(p.hash),redirectedFrom:void 0,href:E})}let P;if(y.path!=null)P=J({},y,{path:Co(n,y.path,N.path).path});else{const p=J({},y.params);for(const g in p)p[g]==null&&delete p[g];P=J({},y,{params:h(p)}),N.params=h(N.params)}const L=e.resolve(P,N),ee=y.hash||"";L.params=u(d(L.params));const de=tb(s,J({},y,{hash:YC(ee),path:L.path})),f=i.createHref(de);return J({fullPath:de,hash:ee,query:s===Tu?Ob(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function O(y){return typeof y=="string"?Co(n,y,l.value.path):J({},y)}function M(y,N){if(c!==y)return hs(8,{from:N,to:y})}function k(y){return oe(y)}function Y(y){return k(J(O(y),{replace:!0}))}function pe(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let L=typeof P=="function"?P(y):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=O(L):{path:L},L.params={}),J({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function oe(y,N){const P=c=D(y),L=l.value,ee=y.state,de=y.force,f=y.replace===!0,p=pe(P);if(p)return oe(J(O(p),{state:typeof p=="object"?J({},ee,p.state):ee,force:de,replace:f}),N||P);const g=P;g.redirectedFrom=N;let E;return!de&&nb(s,L,P)&&(E=hs(16,{to:g,from:L}),ht(L,L,!0,!1)),(E?Promise.resolve(E):ze(g,L)).catch(v=>Ct(v)?Ct(v,2)?v:Vt(v):Q(v,g,L)).then(v=>{if(v){if(Ct(v,2))return oe(J({replace:f},O(v.to),{state:typeof v.to=="object"?J({},ee,v.to.state):ee,force:de}),N||g)}else v=pn(g,L,!0,f,ee);return Wt(g,L,v),v})}function Ke(y,N){const P=M(y,N);return P?Promise.reject(P):Promise.resolve()}function qe(y){const N=Un.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ze(y,N){let P;const[L,ee,de]=Vb(y,N);P=bo(L.reverse(),"beforeRouteLeave",y,N);for(const p of L)p.leaveGuards.forEach(g=>{P.push(qt(g,y,N))});const f=Ke.bind(null,y,N);return P.push(f),Ye(P).then(()=>{P=[];for(const p of r.list())P.push(qt(p,y,N));return P.push(f),Ye(P)}).then(()=>{P=bo(ee,"beforeRouteUpdate",y,N);for(const p of ee)p.updateGuards.forEach(g=>{P.push(qt(g,y,N))});return P.push(f),Ye(P)}).then(()=>{P=[];for(const p of de)if(p.beforeEnter)if(ct(p.beforeEnter))for(const g of p.beforeEnter)P.push(qt(g,y,N));else P.push(qt(p.beforeEnter,y,N));return P.push(f),Ye(P)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),P=bo(de,"beforeRouteEnter",y,N,qe),P.push(f),Ye(P))).then(()=>{P=[];for(const p of o.list())P.push(qt(p,y,N));return P.push(f),Ye(P)}).catch(p=>Ct(p,8)?p:Promise.reject(p))}function Wt(y,N,P){a.list().forEach(L=>qe(()=>L(y,N,P)))}function pn(y,N,P,L,ee){const de=M(y,N);if(de)return de;const f=N===jt,p=$n?history.state:{};P&&(L||f?i.replace(y.fullPath,J({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,ht(y,N,P,f),Vt()}let ut;function ys(){ut||(ut=i.listen((y,N,P)=>{if(!Ti.listening)return;const L=D(y),ee=pe(L);if(ee){oe(J(ee,{replace:!0,force:!0}),L).catch(js);return}c=L;const de=l.value;$n&&ub(gu(de.fullPath,P.delta),qr()),ze(L,de).catch(f=>Ct(f,12)?f:Ct(f,2)?(oe(J(O(f.to),{force:!0}),L).then(p=>{Ct(p,20)&&!P.delta&&P.type===ui.pop&&i.go(-1,!1)}).catch(js),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Q(f,L,de))).then(f=>{f=f||pn(L,de,!1),f&&(P.delta&&!Ct(f,8)?i.go(-P.delta,!1):P.type===ui.pop&&Ct(f,20)&&i.go(-1,!1)),Wt(L,de,f)}).catch(js)}))}let Ln=Rs(),ve=Rs(),ne;function Q(y,N,P){Vt(y);const L=ve.list();return L.length?L.forEach(ee=>ee(y,N,P)):console.error(y),Promise.reject(y)}function wt(){return ne&&l.value!==jt?Promise.resolve():new Promise((y,N)=>{Ln.add([y,N])})}function Vt(y){return ne||(ne=!y,ys(),Ln.list().forEach(([N,P])=>y?P(y):N()),Ln.reset()),y}function ht(y,N,P,L){const{scrollBehavior:ee}=t;if(!$n||!ee)return Promise.resolve();const de=!P&&hb(gu(y.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return rh().then(()=>ee(y,N,de)).then(f=>f&&cb(f)).catch(f=>Q(f,y,N))}const Me=y=>i.go(y);let Fn;const Un=new Set,Ti={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:I,resolve:D,options:t,push:k,replace:Y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:wt,install(y){const N=this;y.component("RouterLink",Mb),y.component("RouterView",Hb),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),$n&&!Fn&&l.value===jt&&(Fn=!0,k(i.location).catch(ee=>{}));const P={};for(const ee in jt)Object.defineProperty(P,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(zr,N),y.provide(wl,Zu(P)),y.provide(la,l);const L=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=jt,ut&&ut(),ut=null,l.value=jt,Fn=!1,ne=!1),L()}}};function Ye(y){return y.reduce((N,P)=>N.then(()=>qe(P)),Promise.resolve())}return Ti}function Vb(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>us(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>us(c,l))||i.push(l))}return[n,s,i]}function rT(){return ot(zr)}function oT(t){return ot(wl)}const Il=Wb({history:_b(),routes:[{path:"/",redirect:"/home"},{path:"/home",component:()=>$t(()=>import("./Home-Dw18OzF0.js"),__vite__mapDeps([0,1,2]))},{path:"/register",component:()=>$t(()=>import("./Register-kFmWGwbu.js"),__vite__mapDeps([3,4]))},{path:"/login",component:()=>$t(()=>import("./Login-V3Ti76AA.js"),__vite__mapDeps([5,6,4]))},{path:"/oldwords",component:()=>$t(()=>import("./OldWords-5yTg3it6.js"),__vite__mapDeps([7,8]))},{path:"/profil",component:()=>$t(()=>import("./Profil-cPFK0eme.js"),__vite__mapDeps([9,10]))},{path:"/collaboration",component:()=>$t(()=>import("./GameOnline-BM044gtT.js"),__vite__mapDeps([11,12,13])),meta:{requiresAuth:!0}},{path:"/affrontement",component:()=>$t(()=>import("./GameOnlineAffrontement-80PTWEP7.js"),__vite__mapDeps([14,12,13])),meta:{requiresAuth:!0}},{path:"/game",component:()=>$t(()=>import("./Game-DlOocRPA.js"),__vite__mapDeps([15,6,1,16]))}]}),Bb=()=>new Promise((t,e)=>{const n=bd(Ld(),s=>{n(),t(s)},e)});Il.beforeEach(async(t,e,n)=>{const s=await Bb();t.matched.some(i=>i.meta.requiresAuth)?s?n():n("/login"):(t.path==="/login"||t.path==="/register")&&s?n("/game"):n()});const $b={id:"app"},jb={class:"center-links"},Gb={__name:"App",setup(t){const e=th(!1);ph(()=>{bd(du,s=>{e.value=!!s})});const n=()=>{gy(du).then(()=>{Il.push("/")}).catch(s=>{console.error("Erreur lors de la déconnexion :",s)})};return(s,i)=>{const r=Nl("router-link"),o=Nl("router-view");return As(),Wl("div",$b,[jn("nav",null,[Ie(r,{to:"/Home",class:"logo"},{default:vn(()=>i[0]||(i[0]=[jn("img",{src:Mg,alt:"Logo"},null,-1),jn("span",{class:"logo-text"},"Approximot",-1)])),_:1}),jn("div",jb,[Ie(r,{to:"/Game"},{default:vn(()=>i[1]||(i[1]=[Bn("Solo")])),_:1}),Ie(r,{to:"/collaboration"},{default:vn(()=>i[2]||(i[2]=[Bn("Jouer avec un ami")])),_:1}),Ie(r,{to:"/affrontement"},{default:vn(()=>i[3]||(i[3]=[Bn("Affronter un ami")])),_:1}),e.value?io("",!0):(As(),Mo(r,{key:0,to:"/register"},{default:vn(()=>i[4]||(i[4]=[Bn("S'inscrire")])),_:1}))]),e.value?(As(),Wl("button",{key:0,onClick:n,class:"se-connecter"},"Déconnexion")):io("",!0),e.value?io("",!0):(As(),Mo(r,{key:1,to:"/login",class:"se-connecter"},{default:vn(()=>i[5]||(i[5]=[Bn("Se connecter")])),_:1}))]),Ie(o)])}}},pp=kg(Gb);pp.use(Il);pp.mount("#app");export{et as A,pa as B,Pn as C,tn as D,un as E,Tt as F,Yt as G,De as H,Xh as I,ka as J,jg as K,Na as L,se as M,Gg as N,Qb as O,xe as P,Jh as Q,f_ as R,ps as S,Yb as T,oT as U,$t as V,fa as W,os as _,jn as a,Ie as b,Wl as c,th as d,Bn as e,Kb as f,Jb as g,du as h,eT as i,iT as j,Zb as k,io as l,Xb as m,nT as n,As as o,ph as p,qb as q,Nl as r,tT as s,Rp as t,rT as u,zb as v,vn as w,Ld as x,xC as y,sT as z};
