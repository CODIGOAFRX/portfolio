(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var jh={exports:{}},Qo={};var X0;function pM(){if(X0)return Qo;X0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Qo.Fragment=e,Qo.jsx=a,Qo.jsxs=a,Qo}var k0;function mM(){return k0||(k0=1,jh.exports=pM()),jh.exports}var vt=mM(),Zh={exports:{}},Jo={},Kh={exports:{}},Qh={};var q0;function gM(){return q0||(q0=1,(function(o){function e(H,Z){var q=H.length;H.push(Z);t:for(;0<q;){var _t=q-1>>>1,xt=H[_t];if(0<u(xt,Z))H[_t]=Z,H[q]=xt,q=_t;else break t}}function a(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var Z=H[0],q=H.pop();if(q!==Z){H[0]=q;t:for(var _t=0,xt=H.length,Bt=xt>>>1;_t<Bt;){var Kt=2*(_t+1)-1,oe=H[Kt],F=Kt+1,ht=H[F];if(0>u(oe,q))F<xt&&0>u(ht,oe)?(H[_t]=ht,H[F]=q,_t=F):(H[_t]=oe,H[Kt]=q,_t=Kt);else if(F<xt&&0>u(ht,q))H[_t]=ht,H[F]=q,_t=F;else break t}}return Z}function u(H,Z){var q=H.sortIndex-Z.sortIndex;return q!==0?q:H.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],p=[],v=1,m=null,S=3,M=!1,b=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(H){for(var Z=a(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=H)s(p),Z.sortIndex=Z.expirationTime,e(g,Z);else break;Z=a(p)}}function V(H){if(w=!1,D(H),!b)if(a(g)!==null)b=!0,G||(G=!0,Q());else{var Z=a(p);Z!==null&&tt(V,Z.startTime-H)}}var G=!1,O=-1,P=5,C=-1;function R(){return y?!0:!(o.unstable_now()-C<P)}function B(){if(y=!1,G){var H=o.unstable_now();C=H;var Z=!0;try{t:{b=!1,w&&(w=!1,L(O),O=-1),M=!0;var q=S;try{e:{for(D(H),m=a(g);m!==null&&!(m.expirationTime>H&&R());){var _t=m.callback;if(typeof _t=="function"){m.callback=null,S=m.priorityLevel;var xt=_t(m.expirationTime<=H);if(H=o.unstable_now(),typeof xt=="function"){m.callback=xt,D(H),Z=!0;break e}m===a(g)&&s(g),D(H)}else s(g);m=a(g)}if(m!==null)Z=!0;else{var Bt=a(p);Bt!==null&&tt(V,Bt.startTime-H),Z=!1}}break t}finally{m=null,S=q,M=!1}Z=void 0}}finally{Z?Q():G=!1}}}var Q;if(typeof z=="function")Q=function(){z(B)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lt=rt.port2;rt.port1.onmessage=B,Q=function(){lt.postMessage(null)}}else Q=function(){x(B,0)};function tt(H,Z){O=x(function(){H(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(H){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var q=S;S=Z;try{return H()}finally{S=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var q=S;S=H;try{return Z()}finally{S=q}},o.unstable_scheduleCallback=function(H,Z,q){var _t=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?_t+q:_t):q=_t,H){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=q+xt,H={id:v++,callback:Z,priorityLevel:H,startTime:q,expirationTime:xt,sortIndex:-1},q>_t?(H.sortIndex=q,e(p,H),a(g)===null&&H===a(p)&&(w?(L(O),O=-1):w=!0,tt(V,q-_t))):(H.sortIndex=xt,e(g,H),b||M||(b=!0,G||(G=!0,Q()))),H},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(H){var Z=S;return function(){var q=S;S=Z;try{return H.apply(this,arguments)}finally{S=q}}}})(Qh)),Qh}var Y0;function _M(){return Y0||(Y0=1,Kh.exports=gM()),Kh.exports}var Jh={exports:{}},ue={};var W0;function vM(){if(W0)return ue;W0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function L(F,ht,$){this.props=F,this.context=ht,this.refs=x,this.updater=$||w}L.prototype.isReactComponent={},L.prototype.setState=function(F,ht){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ht,"setState")},L.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function z(){}z.prototype=L.prototype;function D(F,ht,$){this.props=F,this.context=ht,this.refs=x,this.updater=$||w}var V=D.prototype=new z;V.constructor=D,y(V,L.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function R(F,ht,$){var at=$.ref;return{$$typeof:o,type:F,key:ht,ref:at!==void 0?at:null,props:$}}function B(F,ht){return R(F.type,ht,F.props)}function Q(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function rt(F){var ht={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function($){return ht[$]})}var lt=/\/+/g;function tt(F,ht){return typeof F=="object"&&F!==null&&F.key!=null?rt(""+F.key):ht.toString(36)}function H(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function(ht){F.status==="pending"&&(F.status="fulfilled",F.value=ht)},function(ht){F.status==="pending"&&(F.status="rejected",F.reason=ht)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function Z(F,ht,$,at,Et){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var yt=!1;if(F===null)yt=!0;else switch(nt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(F.$$typeof){case o:case e:yt=!0;break;case v:return yt=F._init,Z(yt(F._payload),ht,$,at,Et)}}if(yt)return Et=Et(F),yt=at===""?"."+tt(F,0):at,G(Et)?($="",yt!=null&&($=yt.replace(lt,"$&/")+"/"),Z(Et,ht,$,"",function(I){return I})):Et!=null&&(Q(Et)&&(Et=B(Et,$+(Et.key==null||F&&F.key===Et.key?"":(""+Et.key).replace(lt,"$&/")+"/")+yt)),ht.push(Et)),1;yt=0;var Tt=at===""?".":at+":";if(G(F))for(var Vt=0;Vt<F.length;Vt++)at=F[Vt],nt=Tt+tt(at,Vt),yt+=Z(at,ht,$,nt,Et);else if(Vt=b(F),typeof Vt=="function")for(F=Vt.call(F),Vt=0;!(at=F.next()).done;)at=at.value,nt=Tt+tt(at,Vt++),yt+=Z(at,ht,$,nt,Et);else if(nt==="object"){if(typeof F.then=="function")return Z(H(F),ht,$,at,Et);throw ht=String(F),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return yt}function q(F,ht,$){if(F==null)return F;var at=[],Et=0;return Z(F,at,"","",function(nt){return ht.call($,nt,Et++)}),at}function _t(F){if(F._status===-1){var ht=F._result,$=ht();$.then(function(at){(F._status===0||F._status===-1)&&(F._status=1,F._result=at,$.status===void 0&&($.status="fulfilled",$.value=at))},function(at){(F._status===0||F._status===-1)&&(F._status=2,F._result=at,$.status===void 0&&($.status="rejected",$.reason=at))}),F._status===-1&&(F._status=0,F._result=$)}if(F._status===1)return F._result.default;throw F._result}var xt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Bt(F){var ht=P.T,$={};$.types=ht!==null?ht.types:null,P.T=$;try{var at=F(),Et=P.S;Et!==null&&Et($,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(O,xt)}catch(nt){xt(nt)}finally{ht!==null&&$.types!==null&&(ht.types=$.types),P.T=ht}}function Kt(F){var ht=P.T;if(ht!==null){var $=ht.types;$===null?ht.types=[F]:$.indexOf(F)===-1&&$.push(F)}else Bt(Kt.bind(null,F))}var oe={map:q,forEach:function(F,ht,$){q(F,function(){ht.apply(this,arguments)},$)},count:function(F){var ht=0;return q(F,function(){ht++}),ht},toArray:function(F){return q(F,function(ht){return ht})||[]},only:function(F){if(!Q(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ue.Activity=m,ue.Children=oe,ue.Component=L,ue.Fragment=a,ue.Profiler=u,ue.PureComponent=D,ue.StrictMode=s,ue.Suspense=g,ue.ViewTransition=S,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ue.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},ue.addTransitionType=Kt,ue.cache=function(F){return function(){return F.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(F,ht,$){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var at=y({},F.props),Et=F.key;if(ht!=null)for(nt in ht.key!==void 0&&(Et=""+ht.key),ht)!C.call(ht,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&ht.ref===void 0||(at[nt]=ht[nt]);var nt=arguments.length-2;if(nt===1)at.children=$;else if(1<nt){for(var yt=Array(nt),Tt=0;Tt<nt;Tt++)yt[Tt]=arguments[Tt+2];at.children=yt}return R(F.type,Et,at)},ue.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ue.createElement=function(F,ht,$){var at,Et={},nt=null;if(ht!=null)for(at in ht.key!==void 0&&(nt=""+ht.key),ht)C.call(ht,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(Et[at]=ht[at]);var yt=arguments.length-2;if(yt===1)Et.children=$;else if(1<yt){for(var Tt=Array(yt),Vt=0;Vt<yt;Vt++)Tt[Vt]=arguments[Vt+2];Et.children=Tt}if(F&&F.defaultProps)for(at in yt=F.defaultProps,yt)Et[at]===void 0&&(Et[at]=yt[at]);return R(F,nt,Et)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(F){return{$$typeof:d,render:F}},ue.isValidElement=Q,ue.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:_t}},ue.memo=function(F,ht){return{$$typeof:p,type:F,compare:ht===void 0?null:ht}},ue.startTransition=Bt,ue.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ue.use=function(F){return P.H.use(F)},ue.useActionState=function(F,ht,$){return P.H.useActionState(F,ht,$)},ue.useCallback=function(F,ht){return P.H.useCallback(F,ht)},ue.useContext=function(F){return P.H.useContext(F)},ue.useDebugValue=function(){},ue.useDeferredValue=function(F,ht){return P.H.useDeferredValue(F,ht)},ue.useEffect=function(F,ht){return P.H.useEffect(F,ht)},ue.useEffectEvent=function(F){return P.H.useEffectEvent(F)},ue.useId=function(){return P.H.useId()},ue.useImperativeHandle=function(F,ht,$){return P.H.useImperativeHandle(F,ht,$)},ue.useInsertionEffect=function(F,ht){return P.H.useInsertionEffect(F,ht)},ue.useLayoutEffect=function(F,ht){return P.H.useLayoutEffect(F,ht)},ue.useMemo=function(F,ht){return P.H.useMemo(F,ht)},ue.useOptimistic=function(F,ht){return P.H.useOptimistic(F,ht)},ue.useReducer=function(F,ht,$){return P.H.useReducer(F,ht,$)},ue.useRef=function(F){return P.H.useRef(F)},ue.useState=function(F){return P.H.useState(F)},ue.useSyncExternalStore=function(F,ht,$){return P.H.useSyncExternalStore(F,ht,$)},ue.useTransition=function(){return P.H.useTransition()},ue.version="19.3.0",ue}var j0;function Ep(){return j0||(j0=1,Jh.exports=vM()),Jh.exports}var $h={exports:{}},Cn={};var Z0;function xM(){if(Z0)return Cn;Z0=1;var o=Ep();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:S}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.browser=function(v){return{$$typeof:f,_reason:v}},Cn.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,S)},Cn.flushSync=function(v){var m=g.T,S=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=m,s.p=S,s.d.f()}},Cn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Cn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Cn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,M=p(S,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:w}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=p(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Cn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,M=p(S,m.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=p(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Cn.requestFormReset=function(v){s.d.r(v)},Cn.unstable_batchedUpdates=function(v,m){return v(m)},Cn.useFormState=function(v,m,S){return g.H.useFormState(v,m,S)},Cn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Cn.version="19.3.0",Cn}var K0;function SM(){if(K0)return $h.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$h.exports=xM(),$h.exports}var Q0;function yM(){if(Q0)return Jo;Q0=1;var o=_M(),e=Ep(),a=SM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var _=!1,E=l.child;E;){if(E===i){_=!0,i=l,r=c;break}if(E===r){_=!0,r=l,i=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===i){_=!0,i=c,r=l;break}if(E===r){_=!0,r=c,i=l;break}E=E.sibling}if(!_)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=S(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,L=null;function z(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function D(t,n,i){return t===i?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function V(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var O=Object.assign,P=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),lt=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),Kt=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),$=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case rt:return"Profiler";case Q:return"StrictMode";case Z:return"Suspense";case q:return"SuspenseList";case Bt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case tt:return t.displayName||"Context";case lt:return(t._context.displayName||"Context")+".Consumer";case H:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:nt(t.type)||"Memo";case xt:n=t._payload,t=t._init;try{return nt(t(n))}catch{}}return null}var yt=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Pe=[],se=-1;function Jt(t){return{current:t}}function Lt(t){0>se||(t.current=Pe[se],Pe[se]=null,se--)}function ae(t,n){se++,Pe[se]=t.current,t.current=n}var Ht=Jt(null),le=Jt(null),qe=Jt(null),We=Jt(null);function U(t,n){switch(ae(qe,n),ae(le,t),ae(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J_(n),t=$_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),ae(Ht,t)}function T(){Lt(Ht),Lt(le),Lt(qe)}function st(t){var n=t.memoizedState;n!==null&&(Os._currentValue=n.memoizedState,ae(We,t)),n=Ht.current;var i=$_(n,t.type);n!==i&&(ae(le,t),ae(Ht,i))}function mt(t){le.current===t&&(Lt(Ht),Lt(le)),We.current===t&&(Lt(We),Os._currentValue=I)}var Mt,dt;function kt(t){if(Mt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",dt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+dt}var wt=!1;function jt(t,n){if(!t||wt)return"";wt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Nt){var Y=Nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Nt){Y=Nt}gt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){Y=Nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Nt){if(Nt&&Y&&typeof Nt.stack=="string")return[Nt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var N=_.split(`
`),j=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===j.length)for(r=N.length-1,l=j.length-1;1<=r&&0<=l&&N[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==j[l]){var ot=`
`+N[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=l);break}}}finally{wt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function Rt(t){try{var n="",i=null;do n+=Qt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,fe=o.unstable_requestPaint,k=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ce=o.log,Ve=o.unstable_setDisableYieldValue,ye=null,$e=null;function pn(t){if(typeof ce=="function"&&Ve(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(ye,t)}catch{}}var Dn=Math.clz32?Math.clz32:vl,$i=Math.log,so=Math.LN2;function vl(t){return t>>>=0,t===0?32:31-($i(t)/so|0)|0}var pr=256,ta=262144,mr=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ci(r):(_&=E,_!==0?l=ci(_):i||(i=E&~t,i!==0&&(l=ci(i))))):(E=r&~c,E!==0?l=ci(E):_!==0?l=ci(_):i||(i=r&~t,i!==0&&(l=ci(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Ra(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xl(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Dn(i),l=1<<r;n|=t[r],i&=~l}return n}function yc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var t=mr;return mr<<=1,(mr&62914560)===0&&(mr=4194304),t}function oo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function _r(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mc(t,n,i,r,l,c){var _=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,j=t.hiddenUpdates;for(i=_&~i;0<i;){var ot=31-Dn(i),gt=1<<ot;E[ot]=0,N[ot]=-1;var Y=j[ot];if(Y!==null)for(j[ot]=null,ot=0;ot<Y.length;ot++){var it=Y[ot];it!==null&&(it.lane&=-536870913)}i&=~gt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function A(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Dn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function K(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Dn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function ut(t,n){var i=n&-n;return i=(i&42)!==0?1:ft(i),(i&(t.suspendedLanes|n))!==0?0:i}function ft(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function Pt(t,n){var i=Vt.p;try{return Vt.p=t,n()}finally{Vt.p=i}}var Ft=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ft,qt="__reactProps$"+Ft,ne="__reactContainer$"+Ft,te="__reactEvents$"+Ft,ve="__reactListeners$"+Ft,Ie="__reactHandles$"+Ft,Qe="__reactResources$"+Ft,Ue="__reactMarker$"+Ft,Re="__reactLoad$"+Ft;function ee(t){delete t[Dt],delete t[qt],delete t[ve],delete t[Ie]}function Ne(t){var n;if(n=t[Dt])return n;for(var i=t.parentNode;i;){if(n=i[ne]||i[Dt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=g0(t);t!==null;){if(i=t[Dt])return i;t=g0(t)}return n}t=i,i=t.parentNode}return null}function ge(t){if(t=t[Dt]||t[ne]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Jn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ce(t){t[Ue]=!0}function Ca(t){t[Re]=void 0}var je=new Set,Pn={};function ln(t,n){en(t,n),en(t+"Capture",n)}function en(t,n){for(Pn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Oi={};function Lx(t){return Ot.call(Oi,t)?!0:Ot.call(Qr,t)?!1:Un.test(t)?Oi[t]=!0:(Qr[t]=!0,!1)}var we=!1;function Bp(){var t=we;return we=!1,t}function yl(t,n,i){if(Lx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Ml(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ea(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ox(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){i=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(_){i=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ec(t){if(!t._valueTracker){var n=Fp(t)?"checked":"value";t._valueTracker=Ox(t,n,""+t[n])}}function Hp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Fp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var zx=/[\n"\\]/g;function fi(t){return t.replace(zx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tc(t,n,i,r,l,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?bc(t,$n(t.value)):bc(t,$n(n)):i!=null?bc(t,$n(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$n(E):t.removeAttribute("name")}function Gp(t,n,i,r,l,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Ec(t);return}i=i!=null?""+$n(i):"",n=n!=null?""+$n(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ec(t)}function bc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Jr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+$n(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Vp(t,n,i){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+$n(i):""}function Xp(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(yt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=$n(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Ec(t)}function $r(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kp(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||Px.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function qp(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(kp(t,l,r),we=!0)}else for(var c in n)n.hasOwnProperty(c)&&kp(t,c,n[c])}function Ac(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Rc=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,es=null;function Yp(t){var n=ge(t);if(n&&(t=n.stateNode)){var i=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Tc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[qt]||null;if(!l)throw Error(s(90));Tc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Hp(r)}break t;case"textarea":Vp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Jr(t,!!i.multiple,n,!1)}}}var wc=!1;function Wp(t,n,i){if(wc)return t(n,i);wc=!0;try{var r=t(n);return r}finally{if(wc=!1,(ts!==null||es!==null)&&(Eu(),ts&&(n=ts,t=es,es=ts=null,Yp(n),t)))for(n=0;n<t.length;n++)Yp(t[n])}}function lo(t,n){var i=t.stateNode;if(i===null)return null;var r=i[qt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=!1;if(na)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Dc=!1}var wa=null,Uc=null,Tl=null;function jp(){if(Tl)return Tl;var t,n=Uc,i=n.length,r,l="value"in wa?wa.value:wa.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var _=i-t;for(r=1;r<=_&&n[i-r]===l[c-r];r++);return Tl=l.slice(t,1<r?1-r:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Zp(){return!1}function In(t){function n(i,r,l,c,_){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Al:Zp,this.isPropagationStopped=Zp,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=In(Da),co=O({},Da,{view:0,detail:0}),Fx=In(co),Nc,Lc,fo,Cl=O({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Nc=t.screenX-fo.screenX,Lc=t.screenY-fo.screenY):Lc=Nc=0,fo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Kp=In(Cl),Hx=O({},Cl,{dataTransfer:0}),Gx=In(Hx),Vx=O({},co,{relatedTarget:0}),Oc=In(Vx),Xx=O({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=In(Xx),qx=O({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yx=In(qx),Wx=O({},Da,{data:0}),Qp=In(Wx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kx[t])?!!n[t]:!1}function zc(){return Qx}var Jx=O({},co,{key:function(t){if(t.key){var n=jx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=In(Jx),tS=O({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=In(tS),eS=O({},Da,{submitter:0}),nS=In(eS),iS=O({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),aS=In(iS),rS=O({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=In(rS),oS=O({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=In(oS),uS=O({},Da,{newState:0,oldState:0,source:0}),cS=In(uS),fS=[9,13,27,32],Pc=na&&"CompositionEvent"in window,ho=null;na&&"documentMode"in document&&(ho=document.documentMode);var hS=na&&"TextEvent"in window&&!ho,$p=na&&(!Pc||ho&&8<ho&&11>=ho),tm=" ",em=!1;function nm(t,n){switch(t){case"keyup":return fS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function dS(t,n){switch(t){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(em=!0,tm);case"textInput":return t=n.data,t===tm&&em?null:t;default:return null}}function pS(t,n){if(ns)return t==="compositionend"||!Pc&&nm(t,n)?(t=jp(),Tl=Uc=wa=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $p&&n.locale!=="ko"?null:n.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mS[t.type]:n==="textarea"}function rm(t,n,i,r){ts?es?es.push(r):es=[r]:ts=r,n=wu(n,"onChange"),0<n.length&&(i=new Rl("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var po=null,mo=null;function gS(t){Y_(t,0)}function wl(t){var n=mn(t);if(Hp(n))return t}function sm(t,n){if(t==="change")return n}var om=!1;if(na){var Ic;if(na){var Bc="oninput"in document;if(!Bc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Bc=typeof lm.oninput=="function"}Ic=Bc}else Ic=!1;om=Ic&&(!document.documentMode||9<document.documentMode)}function um(){po&&(po.detachEvent("onpropertychange",cm),mo=po=null)}function cm(t){if(t.propertyName==="value"&&wl(mo)){var n=[];rm(n,mo,t,Cc(t)),Wp(gS,n)}}function _S(t,n,i){t==="focusin"?(um(),po=n,mo=i,po.attachEvent("onpropertychange",cm)):t==="focusout"&&um()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(mo)}function xS(t,n){if(t==="click")return wl(n)}function SS(t,n){if(t==="input"||t==="change")return wl(n)}function yS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:yS;function go(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(n,l)||!ti(t[l],n[l]))return!1}return!0}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,n){var i=fm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=fm(i)}}function dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Fc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Fc(t.document)}return n}function Hc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var MS=na&&"documentMode"in document&&11>=document.documentMode,is=null,Gc=null,_o=null,Vc=!1;function mm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vc||is==null||is!==Fc(r)||(r=is,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&go(_o,r)||(_o=r,r=wu(Gc,"onSelect"),0<r.length&&(n=new Rl("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=is)))}function vr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var as={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},Xc={},gm={};na&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function xr(t){if(Xc[t])return Xc[t];if(!as[t])return t;var n=as[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in gm)return Xc[t]=n[i];return t}var _m=xr("animationend"),vm=xr("animationiteration"),xm=xr("animationstart"),ES=xr("transitionrun"),TS=xr("transitionstart"),bS=xr("transitioncancel"),Sm=xr("transitionend"),ym=new Map,kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kc.push("scrollEnd");function Ei(t,n){ym.set(t,n),ln(n,[t])}var AS=0;function ia(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var i=AS++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Mm(t){if(t==null||typeof t=="string")return t;var n=null,i=Ts;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function aa(t,n){return t=Mm(t),n=Mm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],rs=0,qc=0;function Ul(){for(var t=rs,n=qc=rs=0;n<t;){var i=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var _=r.pending;_===null?l.next=l:(l.next=_.next,_.next=l),r.pending=l}c!==0&&Em(i,l,c)}}function Nl(t,n,i,r){hi[rs++]=t,hi[rs++]=n,hi[rs++]=i,hi[rs++]=r,qc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Yc(t,n,i,r){return Nl(t,n,i,r),Ll(t)}function Sr(t,n){return Nl(t,null,null,n),Ll(t)}function Em(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Dn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Ll(t){if(50<Fo)throw Fo=0,Mu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function RS(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,i,r){return new RS(t,n,i,r)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var i=t.alternate;return i===null?(i=Xn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Tm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ol(t,n,i,r,l,c){var _=0;if(r=t,typeof r=="function")Wc(r)&&(_=1);else if(typeof r=="string")_=eM(t,i,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Bt:return t=Xn(31,i,n,l),t.elementType=Bt,t.lanes=c,t;case B:return yr(i.children,l,c,n);case Q:_=8,l|=24;break;case rt:return t=Xn(12,i,n,l|2),t.elementType=rt,t.lanes=c,t;case Z:return t=Xn(13,i,n,l),t.elementType=Z,t.lanes=c,t;case q:return t=Xn(19,i,n,l),t.elementType=q,t.lanes=c,t;case Kt:case F:return t=l|32,t=Xn(30,i,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:_=10;break t;case lt:_=9;break t;case H:_=11;break t;case _t:_=14;break t;case xt:_=16,r=null;break t}_=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Xn(_,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function yr(t,n,i,r){return t=Xn(7,t,r,n),t.lanes=i,t}function jc(t,n,i){return t=Xn(6,t,null,n),t.lanes=i,t}function bm(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function Zc(t,n,i){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Am=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var i=Am.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Rt(n)},Am.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var os=[],ls=0,zl=null,vo=0,pi=[],mi=0,Ua=null,Pi=1,Ii="";function sa(t,n){os[ls++]=vo,os[ls++]=zl,zl=t,vo=n}function Rm(t,n,i){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Ua=t;var r=Pi;t=Ii;var l=32-Dn(r)-1;r&=~(1<<l),i+=1;var c=32-Dn(n)+l;if(30<c){var _=l-l%5;c=(r&(1<<_)-1).toString(32),r>>=_,l-=_,Pi=1<<32-Dn(n)+l|i<<l|r,Ii=c+t}else Pi=1<<c|i<<l|r,Ii=t}function Pl(t){t.return!==null&&(sa(t,1),Rm(t,1,0))}function Kc(t){for(;t===zl;)zl=os[--ls],os[ls]=null,vo=os[--ls],os[ls]=null;for(;t===Ua;)Ua=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function Cm(t,n){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Pi=n.id,Ii=n.overflow,Ua=t}var xn=null,Ze=null,_e=!1,Na=null,gi=!1,Qc=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(di(n,t)),Qc}function wm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[Dt]=t,n[qt]=r,i){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Go.length;i++)Se(Go[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Gp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Xp(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||K_(n.textContent,i)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||La(t,!0)}function Il(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:xn=xn.return}}function us(t){if(t!==xn)return!1;if(!_e)return Il(t),_e=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Ch(t.type,t.memoizedProps)),i=!i),i&&Ze&&La(t),Il(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=m0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=m0(t)}else n===27?(n=Ze,Za(t.type)?(t=Ih,Ih=null,Ze=t):Ze=n):Ze=xn?vi(t.stateNode.nextSibling):null;return!0}function Mr(){Ze=xn=null,_e=!1}function Jc(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function xo(t){Na===null?Na=[t]:Na.push(t)}var $c=Jt(null),Er=null,oa=null;function Oa(t,n,i){ae($c,n._currentValue),n._currentValue=i}function la(t){t._currentValue=$c.current,Lt($c)}function Bl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function tf(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Bl(c.return,i,t),r||(_=null);break t}c=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(s(341));_.lanes|=i,c=_.alternate,c!==null&&(c.lanes|=i),Bl(_,i,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,_=l.alternate,_!==null&&(_.lanes|=i),Bl(l.return,i,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function Tr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=l.type;ti(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(_=l.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}l=l.return}return t!==null&&tf(n,t,i,r),n.flags|=262144,t!==null}function Fl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Dm(Er,t)}function Hl(t,n){return Er===null&&br(t),Dm(t,n)}function Dm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return i}var CS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},wS=o.unstable_scheduleCallback,DS=o.unstable_NormalPriority,un={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new CS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&wS(DS,function(){t.controller.abort()})}function Um(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var yo=null;function US(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Mo=null,nf=0,Ar=0,cs=null;function NS(t,n){if(Mo===null){var i=Mo=[];nf=0,Ar=xh(),cs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return nf++,n.then(Nm,Nm),n}function Nm(){if(--nf===0&&(yo=null,Mo!==null)){cs!==null&&(cs.status="fulfilled");var t=Mo;Mo=null,Ar=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function LS(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Lm=Tt.S;Tt.S=function(t,n){if(b_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&NS(t,n),yo!==null)for(var i=Cs;i!==null;)Um(i,yo),i=i.next;if(i=t.types,i!==null){for(var r=Cs;r!==null;)Um(r,i),r=r.next;if(Ar!==0){r=yo,r===null&&(r=yo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Lm!==null&&Lm(t,n)};var Rr=Jt(null);function af(){var t=Rr.current;return t!==null?t:Ye.pooledCache}function Gl(t,n){n===null?ae(Rr,Rr.current):ae(Rr,n.pool)}function Om(){var t=af();return t===null?null:{parent:un._currentValue,pool:t}}var fs=Error(s(460)),rf=Error(s(474)),Vl=Error(s(542)),Xl={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(zi,zi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t}throw wr=n,fs}}function Cr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(wr=i,fs):i}}var wr=null;function Im(){if(wr===null)throw Error(s(459));var t=wr;return wr=null,t}function Bm(t){if(t===fs||t===Vl)throw Error(s(483))}var hs=null,Eo=0;function kl(t){var n=Eo;return Eo+=1,hs===null&&(hs=[]),Pm(hs,t,n)}function za(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ql(t,n){throw n.$$typeof===P?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){function n(W,X){if(t){var et=W.deletions;et===null?(W.deletions=[X],W.flags|=16):et.push(X)}}function i(W,X){if(!t)return null;for(;X!==null;)n(W,X),X=X.sibling;return null}function r(W){for(var X=new Map;W!==null;)W.key===null?X.set(W.index,W):X.set(W.key,W),W=W.sibling;return X}function l(W,X){return W=ra(W,X),W.index=0,W.sibling=null,W}function c(W,X,et){return W.index=et,t?(et=W.alternate,et!==null?(et=et.index,et<X?(W.flags|=2,X):et):(W.flags|=134217730,X)):(W.flags|=1048576,X)}function _(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,X,et,pt){return X===null||X.tag!==6?(X=jc(et,W.mode,pt),X.return=W,X):(X=l(X,et),X.return=W,X)}function N(W,X,et,pt){var Gt=et.type;return Gt===B?(W=ot(W,X,et.props.children,pt,et.key),za(W,et),W):X!==null&&(X.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===xt&&Cr(Gt)===X.type)?(X=l(X,et.props),za(X,et),X.return=W,X):(X=Ol(et.type,et.key,et.props,null,W.mode,pt),za(X,et),X.return=W,X)}function j(W,X,et,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Zc(et,W.mode,pt),X.return=W,X):(X=l(X,et.children||[]),X.return=W,X)}function ot(W,X,et,pt,Gt){return X===null||X.tag!==7?(X=yr(et,W.mode,pt,Gt),X.return=W,X):(X=l(X,et),X.return=W,X)}function gt(W,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=jc(""+X,W.mode,et),X.return=W,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case C:return et=Ol(X.type,X.key,X.props,null,W.mode,et),za(et,X),et.return=W,et;case R:return X=Zc(X,W.mode,et),X.return=W,X;case xt:return X=Cr(X),gt(W,X,et)}if(yt(X)||at(X))return X=yr(X,W.mode,et,null),X.return=W,X;if(typeof X.then=="function")return gt(W,kl(X),et);if(X.$$typeof===tt)return gt(W,Hl(W,X),et);ql(W,X)}return null}function Y(W,X,et,pt){var Gt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Gt!==null?null:E(W,X,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case C:return et.key===Gt?N(W,X,et,pt):null;case R:return et.key===Gt?j(W,X,et,pt):null;case xt:return et=Cr(et),Y(W,X,et,pt)}if(yt(et)||at(et))return Gt!==null?null:ot(W,X,et,pt,null);if(typeof et.then=="function")return Y(W,X,kl(et),pt);if(et.$$typeof===tt)return Y(W,X,Hl(W,et),pt);ql(W,et)}return null}function it(W,X,et,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(et)||null,E(X,W,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case C:return W=W.get(pt.key===null?et:pt.key)||null,N(X,W,pt,Gt);case R:return W=W.get(pt.key===null?et:pt.key)||null,j(X,W,pt,Gt);case xt:return pt=Cr(pt),it(W,X,et,pt,Gt)}if(yt(pt)||at(pt))return W=W.get(et)||null,ot(X,W,pt,Gt,null);if(typeof pt.then=="function")return it(W,X,et,kl(pt),Gt);if(pt.$$typeof===tt)return it(W,X,et,Hl(X,pt),Gt);ql(X,pt)}return null}function Nt(W,X,et,pt){for(var Gt=null,Ee=null,$t=X,re=X=0,hn=null;$t!==null&&re<et.length;re++){$t.index>re?(hn=$t,$t=null):hn=$t.sibling;var Ae=Y(W,$t,et[re],pt);if(Ae===null){$t===null&&($t=hn);break}t&&$t&&Ae.alternate===null&&n(W,$t),X=c(Ae,X,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae,$t=hn}if(re===et.length)return i(W,$t),_e&&sa(W,re),Gt;if($t===null){for(;re<et.length;re++)$t=gt(W,et[re],pt),$t!==null&&(X=c($t,X,re),Ee===null?Gt=$t:Ee.sibling=$t,Ee=$t);return _e&&sa(W,re),Gt}for($t=r($t);re<et.length;re++)hn=it($t,W,re,et[re],pt),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&$t.delete(Ae.key===null?re:Ae.key)),X=c(hn,X,re),Ee===null?Gt=hn:Ee.sibling=hn,Ee=hn);return t&&$t.forEach(function(tr){return n(W,tr)}),_e&&sa(W,re),Gt}function Yt(W,X,et,pt){if(et==null)throw Error(s(151));for(var Gt=null,Ee=null,$t=X,re=X=0,hn=null,Ae=et.next();$t!==null&&!Ae.done;re++,Ae=et.next()){$t.index>re?(hn=$t,$t=null):hn=$t.sibling;var tr=Y(W,$t,Ae.value,pt);if(tr===null){$t===null&&($t=hn);break}t&&$t&&tr.alternate===null&&n(W,$t),X=c(tr,X,re),Ee===null?Gt=tr:Ee.sibling=tr,Ee=tr,$t=hn}if(Ae.done)return i(W,$t),_e&&sa(W,re),Gt;if($t===null){for(;!Ae.done;re++,Ae=et.next())Ae=gt(W,Ae.value,pt),Ae!==null&&(X=c(Ae,X,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae);return _e&&sa(W,re),Gt}for($t=r($t);!Ae.done;re++,Ae=et.next())Ae=it($t,W,re,Ae.value,pt),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&$t.delete(hn.key===null?re:hn.key)),X=c(Ae,X,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae);return t&&$t.forEach(function(dM){return n(W,dM)}),_e&&sa(W,re),Gt}function de(W,X,et,pt){if(typeof et=="object"&&et!==null&&et.type===B&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case C:t:{for(var Gt=et.key;X!==null;){if(X.key===Gt){if(Gt=et.type,Gt===B){if(X.tag===7){i(W,X.sibling),pt=l(X,et.props.children),za(pt,et),pt.return=W,W=pt;break t}}else if(X.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===xt&&Cr(Gt)===X.type){i(W,X.sibling),pt=l(X,et.props),za(pt,et),pt.return=W,W=pt;break t}i(W,X);break}else n(W,X);X=X.sibling}et.type===B?(pt=yr(et.props.children,W.mode,pt,et.key),za(pt,et),pt.return=W,W=pt):(pt=Ol(et.type,et.key,et.props,null,W.mode,pt),za(pt,et),pt.return=W,W=pt)}return _(W);case R:t:{for(Gt=et.key;X!==null;){if(X.key===Gt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){i(W,X.sibling),pt=l(X,et.children||[]),pt.return=W,W=pt;break t}else{i(W,X);break}else n(W,X);X=X.sibling}pt=Zc(et,W.mode,pt),pt.return=W,W=pt}return _(W);case xt:return et=Cr(et),de(W,X,et,pt)}if(yt(et))return Nt(W,X,et,pt);if(at(et)){if(Gt=at(et),typeof Gt!="function")throw Error(s(150));return et=Gt.call(et),Yt(W,X,et,pt)}if(typeof et.then=="function")return de(W,X,kl(et),pt);if(et.$$typeof===tt)return de(W,X,Hl(W,et),pt);ql(W,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(i(W,X.sibling),pt=l(X,et),pt.return=W,W=pt):(i(W,X),pt=jc(et,W.mode,pt),pt.return=W,W=pt),_(W)):i(W,X)}return function(W,X,et,pt){try{Eo=0;var Gt=de(W,X,et,pt);return hs=null,Gt}catch($t){if($t===fs||$t===Vl)throw $t;var Ee=Xn(29,$t,null,W.mode);return Ee.lanes=pt,Ee.return=W,Ee}}}var Dr=Fm(!0),Hm=Fm(!1),Pa=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Ll(t),Em(t,null,i),n}return Nl(t,r,n,i),Ll(t)}function To(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,K(t,i)}}function lf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var _={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var uf=!1;function bo(){if(uf){var t=cs;if(t!==null)throw t}}function Ao(t,n,i,r){uf=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,j=N.next;N.next=null,_===null?c=j:_.next=j,_=N;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,E=ot.lastBaseUpdate,E!==_&&(E===null?ot.firstBaseUpdate=j:E.next=j,ot.lastBaseUpdate=N))}if(c!==null){var gt=l.baseState;_=0,ot=j=N=null,E=c;do{var Y=E.lane&-536870913,it=Y!==E.lane;if(it?(Me&Y)===Y:(r&Y)===Y){Y!==0&&Y===Ar&&(uf=!0),ot!==null&&(ot=ot.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,Yt=E;Y=n;var de=i;switch(Yt.tag){case 1:if(Nt=Yt.payload,typeof Nt=="function"){gt=Nt.call(de,gt,Y);break t}gt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Yt.payload,Y=typeof Nt=="function"?Nt.call(de,gt,Y):Nt,Y==null)break t;gt=O({},gt,Y);break t;case 2:Pa=!0}}Y=E.callback,Y!==null&&(t.flags|=64,it&&(t.flags|=8192),it=l.callbacks,it===null?l.callbacks=[Y]:it.push(Y))}else it={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ot===null?(j=ot=it,N=gt):ot=ot.next=it,_|=Y;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;it=E,E=it.next,it.next=null,l.lastBaseUpdate=it,l.shared.pending=null}}while(!0);ot===null&&(N=gt),l.baseState=N,l.firstBaseUpdate=j,l.lastBaseUpdate=ot,c===null&&(l.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=gt}}function Gm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Gm(i[t],n)}var Fa=Jt(null),Yl=Jt(0);function Xm(t,n){t=da,ae(Yl,t),ae(Fa,n),da=t|n.baseLanes}function cf(){ae(Yl,da),ae(Fa,Fa.current)}function ff(){da=Yl.current,Lt(Fa),Lt(Yl)}var Tn=Jt(null),Nn=null;function Ha(t){var n=t.alternate;ae(bn,bn.current&1),ae(Tn,t),Nn===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(Nn=t)}function hf(t){ae(bn,bn.current),ae(Tn,t),Nn===null&&(Nn=t)}function km(t){t.tag===22?(ae(bn,bn.current),ae(Tn,t),Nn===null&&(Nn=t)):Ga()}function Ga(){ae(bn,bn.current),ae(Tn,Tn.current)}function ei(t){Lt(Tn),Nn===t&&(Nn=null),Lt(bn)}var bn=Jt(0);function Ro(t,n){ae(Tn,Tn.current),ae(bn,n)}function df(t){Lt(bn),Lt(Tn),Nn===t&&(Nn=null)}function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||zh(i)||Ph(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,he=null,Xe=null,cn=null,jl=!1,ds=!1,Ur=!1,Zl=0,Co=0,ps=null,OS=0;function nn(){throw Error(s(321))}function pf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!ti(t[i],n[i]))return!1;return!0}function mf(t,n,i,r,l,c){return ua=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?Rg:Cg,Ur=!1,c=i(r,l),Ur=!1,ds&&(c=Ym(n,i,r,l)),qm(t),c}function qm(t){Tt.H=nu;var n=Xe!==null&&Xe.next!==null;if(ua=0,cn=Xe=he=null,jl=!1,Co=0,ps=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Fl(t)&&(fn=!0))}function Ym(t,n,i,r){he=t;var l=0;do{if(ds&&(ps=null),Co=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=VS,c=n(i,r)}while(ds);return c}function zS(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(he.flags|=1024),n}function gf(){var t=Zl!==0;return Zl=0,t}function _f(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function vf(t){if(jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jl=!1}ua=0,cn=Xe=he=null,ds=!1,Co=Zl=0,ps=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Xe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Xe=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?he.memoizedState=cn=t:cn=cn.next=t}return cn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Co;return Co+=1,ps===null&&(ps=[]),t=Pm(ps,t,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?Rg:Cg),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===ht)return;if(t.$$typeof===tt)return En(t)}throw Error(s(438,String(t)))}function xf(t){var n=null,i=he.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Kl(),he.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=oe;return n.index++,i}function ca(t,n){return typeof n=="function"?n(t):n}function Jl(t){var n=sn();return Sf(n,Xe,t)}function Sf(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=_=null,N=null,j=n,ot=!1;do{var gt=j.lane&-536870913;if(gt!==j.lane?(Me&gt)===gt:(ua&gt)===gt){var Y=j.revertLane;if(Y===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),gt===Ar&&(ot=!0);else if((ua&Y)===Y){j=j.next,Y===Ar&&(ot=!0);continue}else gt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=gt,_=c):N=N.next=gt,he.lanes|=Y,qa|=Y;gt=j.action,Ur&&i(c,gt),c=j.hasEagerState?j.eagerState:i(c,gt)}else Y={lane:gt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=Y,_=c):N=N.next=Y,he.lanes|=gt,qa|=gt;j=j.next}while(j!==null&&j!==n);if(N===null?_=c:N.next=E,!ti(c,t.memoizedState)&&(fn=!0,ot&&(i=cs,i!==null)))throw i;t.memoizedState=c,t.baseState=_,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function yf(t){var n=sn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ti(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function Wm(t,n,i){var r=he,l=sn(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var _=!ti((Xe||l).memoizedState,i);if(_&&(l.memoizedState=i,fn=!0),l=l.queue,Tf(Km.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||_||cn!==null&&(cn.memoizedState.tag&1)!==0,ms(t?9:8,{destroy:void 0},Zm.bind(null,r,l,i,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(ua&127)!==0||jm(r,n,i)}return i}function jm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=he.updateQueue,n===null?(n=Kl(),he.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Zm(t,n,i,r){n.value=i,n.getSnapshot=r,Qm(n)&&Jm(t)}function Km(t,n,i){return i(function(){Qm(n)&&Jm(t)})}function Qm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!ti(t,i)}catch{return!0}}function Jm(t){var n=Sr(t,2);n!==null&&Wn(n,t,2)}function Mf(t){var n=Bn();if(typeof t=="function"){var i=t;if(t=i(),Ur){pn(!0);try{i()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function $m(t,n,i,r){return t.baseState=i,Sf(t,Xe,typeof r=="function"?r:ca)}function PS(t,n,i,r,l){if(eu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};Tt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,tg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function tg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Tt.T,_={};_.types=c!==null?c.types:null,Tt.T=_;try{var E=i(l,r),N=Tt.S;N!==null&&N(_,E),eg(t,n,E)}catch(j){Ef(t,n,j)}finally{c!==null&&_.types!==null&&(c.types=_.types),Tt.T=c}}else try{c=i(l,r),eg(t,n,c)}catch(j){Ef(t,n,j)}}function eg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){ng(t,n,r)},function(r){return Ef(t,n,r)}):ng(t,n,i)}function ng(t,n,i){n.status="fulfilled",n.value=i,ig(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,tg(t,i)))}function Ef(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,ig(n),n=n.next;while(n!==r)}t.action=null}function ig(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ag(t,n){return n}function rg(t,n){if(_e){var i=Ye.formState;if(i!==null){t:{var r=he;if(_e){if(Ze){e:{for(var l=Ze,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=vi(l.nextSibling),r=l.data==="F!";break t}}La(r)}r=!1}r&&(n=i[0])}}return i=Bn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:n},i.queue=r,i=Tg.bind(null,he,r),r.dispatch=i,r=Mf(!1),c=wf.bind(null,he,!1,r.queue),r=Bn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=PS.bind(null,he,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function sg(t){var n=sn();return og(n,Xe,t)}function og(t,n,i){if(n=Sf(t,n,ag)[0],t=Jl(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=wo(n)}catch(_){throw _===fs?Vl:_}else r=n;n=sn();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(he.flags|=2048,ms(9,{destroy:void 0},IS.bind(null,l,i),null)),[r,c,t]}function IS(t,n){t.action=n}function lg(t){var n=sn(),i=Xe;if(i!==null)return og(n,i,t);sn(),n=n.memoizedState,i=sn();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function ms(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=Kl(),he.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function ug(){return sn().memoizedState}function $l(t,n,i,r){var l=Bn();he.flags|=t,l.memoizedState=ms(1|n,{destroy:void 0},i,r===void 0?null:r)}function tu(t,n,i,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&pf(r,Xe.memoizedState.deps)?l.memoizedState=ms(n,c,i,r):(he.flags|=t,l.memoizedState=ms(1|n,c,i,r))}function cg(t,n){$l(8390656,8,t,n)}function Tf(t,n){tu(2048,8,t,n)}function BS(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Kl(),he.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function fg(t){var n=sn().memoizedState;return BS({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hg(t,n){return tu(4,2,t,n)}function dg(t,n){return tu(4,4,t,n)}function pg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mg(t,n,i){i=i!=null?i.concat([t]):null,tu(4,4,pg.bind(null,n,t),i)}function bf(){}function gg(t,n){var i=sn();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&pf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function _g(t,n){var i=sn();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&pf(n,r[1]))return r[0];if(r=t(),Ur){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r}function Af(t,n,i){return i===void 0||(ua&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=R_(),he.lanes|=t,qa|=t,i)}function vg(t,n,i,r){return ti(i,n)?i:Fa.current!==null?(t=Af(t,i,r),ti(t,n)||(fn=!0),t):(ua&106)===0||(ua&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=i):(t=R_(),he.lanes|=t,qa|=t,n)}function xg(t,n,i,r,l){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var _=Tt.T,E={};E.types=_!==null?_.types:null,Tt.T=E,wf(t,!1,n,i);try{var N=l(),j=Tt.S;if(j!==null&&j(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ot=LS(N,r);Do(t,n,ot,ri(t))}else Do(t,n,r,ri(t))}catch(gt){Do(t,n,{then:function(){},status:"rejected",reason:gt},ri())}finally{Vt.p=c,_!==null&&E.types!==null&&(_.types=E.types),Tt.T=_}}function FS(){}function Rf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=Sg(t).queue;xg(t,l,n,I,i===null?FS:function(){return yg(t),i(r)})}function Sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:I},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function yg(t){var n=Sg(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},ri())}function Cf(){return En(Os)}function Mg(){return sn().memoizedState}function Eg(){return sn().memoizedState}function HS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ri();t=Ia(i);var r=Ba(n,t,i);r!==null&&(Wn(r,n,i),To(r,n,i)),n={cache:ef()},t.payload=n;return}n=n.return}}function GS(t,n,i){var r=ri();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},eu(t)?bg(n,i):(i=Yc(t,n,i,r),i!==null&&(Wn(i,t,r),Ag(i,n,r)))}function Tg(t,n,i){var r=ri();Do(t,n,i,r)}function Do(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(eu(t))bg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,i);if(l.hasEagerState=!0,l.eagerState=E,ti(E,_))return Nl(t,n,l,0),Ye===null&&Ul(),!1}catch{}if(i=Yc(t,n,l,r),i!==null)return Wn(i,t,r),Ag(i,n,r),!0}return!1}function wf(t,n,i,r){if(r={lane:2,revertLane:xh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},eu(t)){if(n)throw Error(s(479))}else n=Yc(t,i,r,2),n!==null&&Wn(n,t,2)}function eu(t){var n=t.alternate;return t===he||n!==null&&n===he}function bg(t,n){ds=jl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Ag(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,K(t,i)}}var nu={readContext:En,use:Ql,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},Rg={readContext:En,use:Ql,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:cg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,$l(4194308,4,pg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return $l(4194308,4,t,n)},useInsertionEffect:function(t,n){$l(4,2,t,n)},useMemo:function(t,n){var i=Bn();n=n===void 0?null:n;var r=t();if(Ur){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Bn();if(i!==void 0){var l=i(n);if(Ur){pn(!0);try{i(n)}finally{pn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=GS.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Mf(t);var n=t.queue,i=Tg.bind(null,he,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:bf,useDeferredValue:function(t,n){var i=Bn();return Af(i,t,n)},useTransition:function(){var t=Mf(!1);return t=xg.bind(null,he,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=he,l=Bn();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),Ye===null)throw Error(s(349));(Me&127)!==0||jm(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,cg(Km.bind(null,r,c,t),[t]),r.flags|=2048,ms(9,{destroy:void 0},Zm.bind(null,r,c,i,n),null),i},useId:function(){var t=Bn(),n=Ye.identifierPrefix;if(_e){var i=Ii,r=Pi;i=(r&~(1<<32-Dn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Zl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=OS++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Cf,useFormState:rg,useActionState:rg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=wf.bind(null,he,!0,i),i.dispatch=n,[t,n]},useMemoCache:xf,useCacheRefresh:function(){return Bn().memoizedState=HS.bind(null,he)},useEffectEvent:function(t){var n=Bn(),i={impl:t};return n.memoizedState=i,function(){if((Le&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Cg={readContext:En,use:Ql,useCallback:gg,useContext:En,useEffect:Tf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:Jl,useRef:ug,useState:function(){return Jl(ca)},useDebugValue:bf,useDeferredValue:function(t,n){var i=sn();return vg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=Jl(ca)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Wm,useId:Mg,useHostTransitionStatus:Cf,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var i=sn();return $m(i,Xe,t,n)},useMemoCache:xf,useCacheRefresh:Eg,useEffectEvent:fg},VS={readContext:En,use:Ql,useCallback:gg,useContext:En,useEffect:Tf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:yf,useRef:ug,useState:function(){return yf(ca)},useDebugValue:bf,useDeferredValue:function(t,n){var i=sn();return Xe===null?Af(i,t,n):vg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=yf(ca)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Wm,useId:Mg,useHostTransitionStatus:Cf,useFormState:lg,useActionState:lg,useOptimistic:function(t,n){var i=sn();return Xe!==null?$m(i,Xe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:xf,useCacheRefresh:Eg,useEffectEvent:fg};function Df(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:O({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Uf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ri(),l=Ia(r);l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(Wn(n,t,r),To(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ri(),l=Ia(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(Wn(n,t,r),To(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ri(),r=Ia(i);r.tag=2,n!=null&&(r.callback=n),n=Ba(t,r,i),n!==null&&(Wn(n,t,i),To(n,t,i))}};function wg(t,n,i,r,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!go(i,r)||!go(l,c):!0}function Dg(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Uf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ug(t){Dl(t)}function Ng(t){console.error(t)}function Lg(t){Dl(t)}function iu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Og(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Nf(t,n,i){return i=Ia(i),i.tag=3,i.payload={element:null},i.callback=function(){iu(t,n)},i}function zg(t){return t=Ia(t),t.tag=3,t}function Pg(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Og(n,i,r)}}var _=i.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Og(n,i,r),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function XS(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&Tr(n,i,l,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Nn===null?Tu():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Xl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),gh(t,r,l)),!1;case 22:return i.flags|=65536,r===Xl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),gh(t,r,l)),!1}throw Error(s(435,i.tag))}return gh(t,r,l),Tu(),!1}if(_e)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Qc&&(t=Error(s(422),{cause:r}),xo(di(t,i)))):(r!==Qc&&(n=Error(s(423),{cause:r}),xo(di(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,i),l=Nf(t.stateNode,r,l),lf(t,l),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,i),Bo===null?Bo=[c]:Bo.push(c),an!==4&&(an=2),n===null)return!0;r=di(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Nf(i.stateNode,r,t),lf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=zg(l),Pg(l,t,i,r),lf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Lf=Error(s(461)),fn=!1;function gn(t,n,i,r){n.child=t===null?Hm(n,null,i,r):Dr(n,t.child,i,r)}function Ig(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return br(n),r=mf(t,n,i,_,c,l),E=gf(),t!==null&&!fn?(_f(t,n,l),fa(t,n,l)):(_e&&E&&Pl(n),n.flags|=1,gn(t,n,r,l),n.child)}function Bg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Wc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Fg(t,n,c,r,l)):(t=Ol(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Gf(t,l)){var _=c.memoizedProps;if(i=i.compare,i=i!==null?i:go,i(_,r)&&t.ref===n.ref)return fa(t,n,l)}return n.flags|=1,t=ra(c,r),t.ref=n.ref,t.return=n,n.child=t}function Fg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(go(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,Gf(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,fa(t,n,l)}return Of(t,n,i,r,l)}function Hg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Gg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,c!==null?c.cachePool:null),c!==null?Xm(n,c):cf(),km(n);else return r=n.lanes=536870912,Gg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Gl(n,c.cachePool),Xm(n,c),Ga(),n.memoizedState=null):(t!==null&&Gl(n,null),cf(),Ga());return gn(t,n,l,i),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gg(t,n,i,r,l){var c=af();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Gl(n,null),cf(),km(n),t!==null&&Tr(t,n,r,!0),n.childLanes=l,null}function au(t,n){return n=ru({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vg(t,n,i){return Dr(n,t.child,null,i),t=au(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function kS(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=au(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(hf(n),(t=Ze)?(t=p0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,xn=n,Ze=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return au(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(hf(n),l)if(n.flags&256)n.flags&=-257,n=Vg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Tr(t,n,i,!1),l=(i&t.childLanes)!==0,fn||l){if(Fa.current===null){if(r=Ye,r!==null&&(_=ut(r,i),_!==0&&_!==c.retryLane))throw c.retryLane=_,Sr(t,_),Wn(r,t,_),Lf;Tu()}n=Vg(t,n,i)}else t=c.treeContext,Ze=vi(_.nextSibling),xn=n,_e=!0,Na=null,gi=!1,t!==null&&Cm(n,t),n=au(n,r),n.flags|=134221824;return n}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Of(t,n,i,r,l){return br(n),i=mf(t,n,i,r,void 0,l),r=gf(),t!==null&&!fn?(_f(t,n,l),fa(t,n,l)):(_e&&r&&Pl(n),n.flags|=1,gn(t,n,i,l),n.child)}function Xg(t,n,i,r,l,c){return br(n),n.updateQueue=null,i=Ym(n,r,i,l),qm(t),r=gf(),t!==null&&!fn?(_f(t,n,c),fa(t,n,c)):(_e&&r&&Pl(n),n.flags|=1,gn(t,n,i,c),n.child)}function kg(t,n,i,r,l){if(br(n),n.stateNode===null){var c=ss,_=i.contextType;typeof _=="object"&&_!==null&&(c=En(_)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Uf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},sf(n),_=i.contextType,c.context=typeof _=="object"&&_!==null?En(_):ss,c.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Df(n,i,_,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&Uf.enqueueReplaceState(c,c.state,null),Ao(n,r,c,l),bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Nr(i,E);c.props=N;var j=c.context,ot=i.contextType;_=ss,typeof ot=="object"&&ot!==null&&(_=En(ot));var gt=i.getDerivedStateFromProps;ot=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ot||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||j!==_)&&Dg(n,c,r,_),Pa=!1;var Y=n.memoizedState;c.state=Y,Ao(n,r,c,l),bo(),j=n.memoizedState,E||Y!==j||Pa?(typeof gt=="function"&&(Df(n,i,gt,r),j=n.memoizedState),(N=Pa||wg(n,i,N,r,Y,j,_))?(ot||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=_,r=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,of(t,n),_=n.memoizedProps,ot=Nr(i,_),c.props=ot,gt=n.pendingProps,Y=c.context,j=i.contextType,N=ss,typeof j=="object"&&j!==null&&(N=En(j)),E=i.getDerivedStateFromProps,(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==gt||Y!==N)&&Dg(n,c,r,N),Pa=!1,Y=n.memoizedState,c.state=Y,Ao(n,r,c,l),bo();var it=n.memoizedState;_!==gt||Y!==it||Pa||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof E=="function"&&(Df(n,i,E,r),it=n.memoizedState),(ot=Pa||wg(n,i,ot,r,Y,it,N)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,it,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,it,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),c.props=r,c.state=it,c.context=N,r=ot):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,gs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Dr(n,t.child,null,l),n.child=Dr(n,null,i,l)):gn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=fa(t,n,l),t}function qg(t,n,i,r){return Mr(),n.flags|=256,gn(t,n,i,r),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(t){return{baseLanes:t,cachePool:Om()}}function If(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ai),t}function Yg(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(l?Ha(n):Ga(),(t=Ze)?(t=p0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,xn=n,Ze=null)):t=null,t===null)throw La(n);return Ph(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ga(),l=n.mode,c=ru({mode:"hidden",children:c},l),r=yr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Pf(i),r.childLanes=If(t,_,i),n.memoizedState=zf,Uo(null,r)):(Ha(n),Bf(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return qS(t,n,c,_,r,N,E,i)}return l?(Ga(),l=r.fallback,c=n.mode,E=t.child,N=E.sibling,r=ra(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=ra(N,l):(l=yr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Uo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Pf(i):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Om(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=If(t,_,i),n.memoizedState=zf,Uo(t.child,r)):(Ha(n),i=t.child,t=i.sibling,i=ra(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=i,n.memoizedState=null,i)}function Bf(t,n){return n=ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ru(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function su(t,n,i){return Dr(n,t.child,null,i),t=Bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qS(t,n,i,r,l,c,_,E){if(i)return n.flags&256?(Ha(n),n.flags&=-257,su(t,n,E)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,null):(Ga(),c=l.fallback,_=n.mode,l=ru({mode:"visible",children:l.children},_),c=yr(c,_,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Dr(n,t.child,null,E),l=n.child,l.memoizedState=Pf(E),l.childLanes=If(t,r,E),n.memoizedState=zf,Uo(null,l));if(Ha(n),Ph(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,xo({value:l,source:null,stack:null})),su(t,n,E)}if(fn||Tr(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(Fa.current!==null)return su(t,n,E);if(r=Ye,r!==null&&(l=ut(r,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,Sr(t,l),Wn(r,t,l),Lf;return zh(c)||Tu(),su(t,n,E)}return zh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=vi(c.nextSibling),xn=n,_e=!0,Na=null,gi=!1,t!==null&&Cm(n,t),n=Bf(n,l.children),n.flags|=134221824,n)}function Wg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Bl(t.return,n,i)}function jg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Wl(i)===null&&(n=t),t=t.sibling}return n}function ou(t,n,i,r,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=i,_.tailMode=l,_.treeForkCount=c)}function Ff(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Hf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var _=bn.current;if(n.flags&128)return Ro(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Ro(n,_),l==="backwards"&&t!==null?(Ff(t),gn(t,n,r,i),Ff(t)):gn(t,n,r,i),r=_e?vo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,i,n);else if(t.tag===19)Wg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=jg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Ff(n)),ou(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Wl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}ou(n,!0,i,null,c,r);break;case"together":ou(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=jg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),ou(n,!1,l,i,c,r)}return n.child}function Zg(t,n,i){var r=n.pendingProps;return Oa(n,n.type,r.value),gn(t,n,r.children,i),n.child}function fa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Tr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=ra(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ra(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function YS(t,n,i){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Oa(n,un,t.memoizedState.cache),Mr();break;case 27:case 5:st(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ha(n),n.flags|=128,null;r=Tr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?Yg(t,n,i):(Ha(n),t=fa(t,n,i),t!==null?t.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return Hf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(Tr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return Hf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ro(n,bn.current),r)break;return null;case 22:return n.lanes=0,Hg(t,n,i,n.pendingProps);case 24:Oa(n,un,t.memoizedState.cache)}return fa(t,n,i)}function Kg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Gf(t,i)&&(n.flags&128)===0)return fn=!1,YS(t,n,i);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Rm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Cr(n.elementType),n.type=t,typeof t=="function")Wc(t)?(r=Nr(t,r),n.tag=1,n=kg(null,n,t,r,i)):(n.tag=0,n=Of(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===H){n.tag=11,n=Ig(null,n,t,r,i);break t}else if(l===_t){n.tag=14,n=Bg(null,n,t,r,i);break t}else if(l===tt){n.tag=10,n.type=t,n=Zg(null,n,i);break t}}throw n=nt(t)||t,Error(s(306,n,""))}}return n;case 0:return Of(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Nr(r,n.pendingProps),kg(t,n,r,l,i);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,of(t,n),Ao(n,r,null,i);var _=n.memoizedState;if(r=_.cache,Oa(n,un,r),r!==c.cache&&tf(n,[un],i,!0),bo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=qg(t,n,r,i);break t}else if(r!==l){l=di(Error(s(424)),n),xo(l),n=qg(t,n,r,i);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=vi(t.firstChild),xn=n,_e=!0,Na=null,gi=!0,i=Hm(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(Mr(),r===l){n=fa(t,n,i);break t}gn(t,n,r,i)}n=n.child}return n;case 26:return gs(t,n),t===null?(i=y0(n.type,null,n.pendingProps,null))?n.memoizedState=i:_e||(n.stateNode=t0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=y0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&_e&&(r=n.stateNode=_0(n.type,n.pendingProps,qe.current),xn=n,gi=!0,l=Ze,Za(n.type)?(Ih=l,Ze=vi(r.firstChild)):Ze=l),gn(t,n,n.pendingProps.children,i),gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((l=r=Ze)&&(r=Hy(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,xn=n,Ze=vi(r.firstChild),gi=!1,l=!0):l=!1),l||La(n)),st(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,Ch(l,c)?r=null:_!==null&&Ch(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=mf(t,n,zS,null,null,i),Os._currentValue=l),gs(t,n),gn(t,n,r,i),n.child;case 6:return t===null&&_e&&((t=i=Ze)&&(i=Gy(i,n.pendingProps,gi),i!==null?(n.stateNode=i,xn=n,Ze=null,t=!0):t=!1),t||La(n)),null;case 13:return Yg(t,n,i);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Dr(n,null,r,i):gn(t,n,r,i),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,gs(t,n),gn(t,n,r,i),n.child;case 8:return gn(t,n,n.pendingProps.children,i),n.child;case 12:return gn(t,n,n.pendingProps.children,i),n.child;case 10:return Zg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,br(n),l=En(l),r=r(l),n.flags|=1,gn(t,n,r,i),n.child;case 14:return Bg(t,n,n.type,n.pendingProps,i);case 15:return Fg(t,n,n.type,n.pendingProps,i);case 19:return Hf(t,n,i);case 31:return kS(t,n,i);case 22:return Hg(t,n,i,n.pendingProps);case 24:return br(n),r=En(un),t===null?(l=af(),l===null&&(l=Ye,c=ef(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},sf(n),Oa(n,un,l)):((t.lanes&i)!==0&&(of(t,n),Ao(n,null,null,i),bo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Oa(n,un,r)):(r=c.cache,Oa(n,un,r),r!==l.cache&&tf(n,[un],i,!0))),gn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Pl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:gs(t,n),gn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function Vf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?b0(n,r):b0(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(U_())t.flags|=8192;else throw wr=Xl,rf}else t.flags&=-16777217}function Qg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!A0(n))if(U_())t.flags|=8192;else throw wr=Xl,rf}function lu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Sl():536870912,t.lanes|=n,ys|=n)}function No(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function WS(t,n,i){var r=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),la(un),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(us(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jc())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ha(n),c!==null?(Ke(n),Qg(n,c)):(Ke(n),Vf(n,l,null,r,i))):c?c!==t.memoizedState?(ha(n),Ke(n),Qg(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ha(n),Ke(n),Vf(n,l,t,r,i)),null;case 27:if(mt(n),i=qe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ht.current,us(n)?wm(n):(t=_0(l,r,i),n.stateNode=t,ha(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,us(n))wm(n);else{var _=Xo(qe.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(l,{is:r.is}):_.createElement(l)}}c[Dt]=n,c[qt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Rn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ha(n)}}return Ke(n),n.subtreeFlags&=-33554433,Vf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qe.current,us(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||K_(t.nodeValue,i)),t||La(n,!0)}else t=Xo(t).createTextNode(r),t[Dt]=n,n.stateNode=t}return Ke(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=us(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else i=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Dt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),lu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Eh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return la(n.type),Ke(n),null;case 19:if(df(n),r=n.memoizedState,r===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)No(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Wl(t),c!==null){for(n.flags|=128,No(r,!1),t=c.updateQueue,n.updateQueue=t,lu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Tm(i,t),i=i.sibling;return Ro(n,bn.current&1|2),_e&&sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&k()>Su&&(n.flags|=128,l=!0,No(r,!1),n.lanes=4194304)}else{if(!l)if(t=Wl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,lu(n,t),No(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Ke(n),null}else 2*k()-r.renderingStartTime>Su&&i!==536870912&&(n.flags|=128,l=!0,No(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=k(),t.sibling=null,c=bn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?Ro(n,c):(i=c,ae(Tn,n),ae(bn,i),Nn===null&&(Nn=n)),_e&&sa(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ei(n),ff(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),i=n.updateQueue,i!==null&&lu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Lt(Rr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),la(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function jS(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return la(n.type),null;case 22:case 23:return ei(n),ff(),t!==null&&Lt(Rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(un),null;case 25:return null;default:return null}}function Jg(t,n){switch(Kc(n),n.tag){case 3:la(un),T();break;case 26:case 27:case 5:mt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:df(n);break;case 10:la(n.type);break;case 22:case 23:ei(n),ff(),t!==null&&Lt(Rr);break;case 24:la(un)}}function Lo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,_=i.inst;r=c(),_.destroy=r}i=i.next}while(i!==l)}}catch(E){He(n,n.return,E)}}function Va(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var N=i,j=E;try{j()}catch(ot){He(l,N,ot)}}}r=r.next}while(r!==c)}}catch(ot){He(n,n.return,ot)}}function $g(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Vm(n,i)}catch(r){He(t,t.return,r)}}}function t_(t,n,i){i.props=Nr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){He(t,n,r)}}function Bi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ia(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=o0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var _=new si(t);m(t.child,!1,By,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){He(t,n,E)}}function An(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){He(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){He(t,n,l)}else i.current=null}function uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)d0(t.stateNode,n[i])}function e_(t){for(var n=t.return;n!==null&&(kf(n)&&d0(t.stateNode,n.stateNode),!Xf(n));)n=n.return}function Oo(t){for(var n=t.return;n!==null&&(kf(n)&&Fy(t.stateNode,n.stateNode),!Xf(n));)n=n.return}function Xf(t){return t.tag===5||t.tag===3||t.tag===27}function kf(t){return t&&t.tag===7&&t.stateNode!==null}function qf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){He(t,t.return,l)}}function Yf(t,n,i){try{var r=t.stateNode;Sy(r,t.type,i,n),r[qt]=n}catch(l){He(t,t.return,l)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Wf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=zi)),uu(t,r),we=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Za(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(jf(t,n,i,r),t=t.sibling;t!==null;)jf(t,n,i,r),t=t.sibling}function cu(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),uu(t,r),we=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Za(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(cu(t,n,i,r),t=t.sibling;t!==null;)cu(t,n,i,r),t=t.sibling}function i_(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Rn(n,r,i),n[Dt]=t,n[qt]=i}catch(c){He(t,t.return,c)}}var fu=!1,ni=null;function a_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(fu=!0)}var Fi=null;function r_(){var t=Fi;return Fi=null,t}var kn=0;function _s(t,n,i,r,l){return kn=0,s_(t.child,n,i,r,l)}function s_(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var E=Uh(_);r.push(E),E.view&&(c=!0)}else c||Uh(_).view&&(c=!0);fu=!0,r0(_,kn===0?n:n+"_"+kn,i),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||s_(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Hi(t,n){for(;t!==null;)t.tag===5?s0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=aa(n.default,n.share),n!=="none"&&(_s(t,i,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function Zf(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ia(r,i),c=aa(r.default,i.paired?r.share:r.enter);c!=="none"?_s(t,l,c,null,!1)?(hu(t),i.paired||n||bs(t,r.onEnter)):Hi(t.child,!1):hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zf(t,n),t=t.sibling;else hu(t)}function Kf(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=aa(i.default,i.share);if(c!=="none"&&(_s(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,bs(t,i.onShare)):Hi(t.child,!1)),n.delete(r),n.size===0)break}}}Kf(t)}t=t.sibling}}}function Qf(t){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode),r=ni!==null?ni.get(i):void 0,l=aa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(_s(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ni.delete(i),bs(t,n.onShare)):bs(t,n.onExit):Hi(t.child,!1)),ni!==null&&Kf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qf(t),t=t.sibling;else ni!==null&&Kf(t)}function o_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode);n=aa(n.default,n.update),t.flags&=-5,n!=="none"&&_s(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}function Jf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}Jf(t)}t=t.sibling}}function du(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),Jf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)du(t),t=t.sibling;else Jf(t)}function l_(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&l_(t),t=t.sibling}function $f(t,n,i,r,l,c,_){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&kn<c.length){var j=c[kn],ot=Uh(N);(j.view||ot.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(ot.clip)gt=!0;else{gt=j.rect;var Y=ot.rect;gt=gt.y!==Y.y||gt.x!==Y.x||gt.height!==Y.height||gt.width!==Y.width}gt&&(t.flags|=4),ot.abs?ot=!j.abs:(j=j.rect,ot=ot.rect,ot=j.height!==ot.height||j.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&r0(N,kn===0?i:i+"_"+kn,l),E&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(N,kn===0?r:r+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:$f(t,n.child,i,r,l,c,_)&&(E=!0));n=n.sibling}return E}function u_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ia(i,r),c=aa(i.default,i.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;kn=0,l=$f(r,E,l,l,c,_,!1),(t.flags&4)!==0&&l&&bs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&u_(t);t=t.sibling}}var Sn=!1,Be=!1,Gi=!1,th=!1,c_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Vi=!1,zo=!1,pu=!1,eh=!1;function ZS(t,n,i){if(t=t.containerInfo,Ah=zs,t=pm(t),Hc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var E=0,N=-1,j=-1,ot=0,gt=0,Y=t,it=null;e:for(;;){for(var Nt;Y!==r||c!==0&&Y.nodeType!==3||(N=E+c),Y!==_||l!==0&&Y.nodeType!==3||(j=E+l),Y.nodeType===3&&(E+=Y.nodeValue.length),(Nt=Y.firstChild)!==null;)it=Y,Y=Nt;for(;;){if(Y===t)break e;if(it===r&&++ot===c&&(N=E),it===_&&++gt===l&&(j=E),(Nt=Y.nextSibling)!==null)break;Y=it,it=Y.parentNode}Y=Nt}r=N===-1||j===-1?null:{start:N,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rh={focusedElem:t,selectionRange:r},zs=!1,i=(i&335544064)===i,yn=n,n=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&Qf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&a_(t),mu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Qf(r),mu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&a_(t),mu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,yn=r):(i&&o_(t),mu(i))}}ni=null}function mu(t){for(;yn!==null;){var n=yn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=Nr(n.type,l);i=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){He(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Oh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Oh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ia(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=aa(l.default,l.update),l!=="none"&&_s(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,yn=r;break}yn=n.return}}function f_(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),r&4&&Lo(5,i);break;case 1:if(Xi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(_){He(i,i.return,_)}else{var l=Nr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){He(i,i.return,_)}}r&64&&$g(i),r&512&&Bi(i,i.return);break;case 3:if(Xi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Vm(t,n)}catch(_){He(i,i.return,_)}}break;case 27:n===null&&r&4&&i_(i);case 26:case 5:Xi(t,i),n===null&&r&4&&qf(i),r&512&&Bi(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),r&4&&m_(t,i);break;case 13:Xi(t,i),r&4&&g_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=oy.bind(null,i),Vy(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var c=n!==null&&n.memoizedState!==null||Be;n=Sn,l=Be,Sn=r,(Be=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ai(t,i,r)):Xi(t,i),Sn=n,Be=l}break;case 30:Xi(t,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Xi(t,i)}}function nh(t,n){for(t=t.child;t!==null;)h_(t,n),t=t.sibling}function h_(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){He(t,t.return,N)}ih(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,we=!0}catch(N){He(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?a0(E,!0):a0(t.stateNode,!1)}catch(N){He(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&nh(t,n);break;default:nh(t,n)}}function ih(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:h_(i,r);break t;case 22:i.memoizedState===null&&ih(i,r);break t;default:ih(i,r)}}t=t.sibling}}function d_(t){var n=t.alternate;n!==null&&(t.alternate=null,d_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Ti(t,n,i){for(i=i.child;i!==null;)p_(t,n,i),i=i.sibling}function p_(t,n,i){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ye,i)}catch{}switch(i.tag){case 26:Be||An(i,n),Ti(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Be&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Be||An(i,n),Oo(i);var r=Je,l=qn;Za(i.type)&&(Je=i.stateNode,qn=!1),Ti(t,n,i),v0(i.stateNode,i.type,i.memoizedProps),Je=r,qn=l;break;case 5:Be||An(i,n),Oo(i);case 6:if(i.tag===6&&Oo(i),r=Je,l=qn,Je=null,Ti(t,n,i),Je=r,qn=l,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),we=!0}catch(c){He(i,n,c)}else try{Je.removeChild(i.stateNode),we=!0}catch(c){He(i,n,c)}break;case 18:Je!==null&&(qn?(t=Je,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ps(t)):i0(Je,i.stateNode));break;case 4:r=Je,l=qn,Je=i.stateNode.containerInfo,qn=!0,Ti(t,n,i),Je=r,qn=l;break;case 0:case 11:case 14:case 15:Va(2,i,n),Be||Va(4,i,n),Ti(t,n,i);break;case 1:Be||(An(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&t_(i,n,r)),Ti(t,n,i);break;case 21:Ti(t,n,i);break;case 22:Be=(r=Be)||i.memoizedState!==null,Ti(t,n,i),Be=r;break;case 30:An(i,n),Ti(t,n,i);break;case 7:Be||An(i,n),Ti(t,n,i);break;default:Ti(t,n,i)}}function m_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ps(t)}catch(i){He(n,n.return,i)}}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ps(t)}catch(i){He(n,n.return,i)}}function KS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new c_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new c_),n;default:throw Error(s(435,t.tag))}}function gu(t,n){var i=KS(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=ly.bind(null,t,r);r.then(l,l)}})}function Fn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],_=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(Za(N.type)){Je=N.stateNode,qn=!1;break t}break;case 5:Je=N.stateNode,qn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,qn=!0;break t}N=N.return}if(Je===null)throw Error(s(160));p_(_,E,c),Je=null,qn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)__(n,t,i),n=n.sibling}var bi=null;function __(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}Fn(n,t,i),Hn(t),l&4&&(Va(3,t,t.return),Lo(3,t),Va(5,t,t.return));break;case 1:Fn(n,t,i),Hn(t),l&512&&(Be||r===null||An(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=bi,Fn(n,t,i),Hn(t),l&512&&(Be||r===null||An(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=t0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ue]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Rn(r,n,i),r[Dt]=t,Ce(r),n=r;break t;case"link":if(c=T0("link","href",l).get(n+(i.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(_,1);break e}}r=l.createElement(n),Rn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=T0("meta","content",l).get(n+(i.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(_,1);break e}}r=l.createElement(n),Rn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[Dt]=t,Ce(r),n=r}t.stateNode=n}else Sn||Gh(c,t.type,t.stateNode);else t.stateNode=E0(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):l.count--,i===null?Sn||Gh(c,t.type,t.stateNode):E0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 27:Fn(n,t,i),Hn(t),l&512&&(Be||r===null||An(r,r.return)),r!==null&&l&4&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Gi,Gi=!1,Fn(n,t,i),Gi=c,Hn(t),l&512&&(Be||r===null||An(r,r.return)),t.flags&32){n=t.stateNode;try{$r(n,""),we=!0}catch(ot){He(t,t.return,ot)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Yf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(th=!0);break;case 6:if(Fn(n,t,i),Hn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,we=!0}catch(ot){He(t,t.return,ot)}}break;case 3:if(we=!1,Uu=null,c=bi,bi=ko(n.containerInfo),Fn(n,t,i),bi=c,Hn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ps(n.containerInfo)}catch(ot){He(t,t.return,ot)}th&&(th=!1,v_(t)),we=!1;break;case 4:l=Gi,Gi=Sn,r=Bp(),c=bi,bi=ko(t.stateNode.containerInfo),Fn(n,t,i),Hn(t),bi=c,we&&zo&&(pu=!0),we=r,Gi=l;break;case 12:Fn(n,t,i),Hn(t);break;case 31:Fn(n,t,i),Hn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 13:Fn(n,t,i),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=k()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var E=Sn,N=Be,j=Gi;Sn=E||c,Gi=j||c,Be=N||_,Fn(n,t,i),Be=N,Gi=j,Sn=E,Hn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||Sn||Be||(n=_||Be,i=Sn,r=Be,Sn=c||Sn,Be=n,Xa(t,2),Sn=i,Be=r),!c&&Gi||nh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,gu(t,i))));break;case 19:Fn(n,t,i),Hn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 30:l&512&&(Be||r===null||An(r,r.return)),l=Bp(),c=zo,_=(i&335544064)===i,E=t.memoizedProps,zo=_&&aa(E.default,E.update)!=="none",Fn(n,t,i),Hn(t),_&&r!==null&&we&&(t.flags|=4),zo=c,we=l;break;case 21:break;case 7:l&512&&(Be||r===null||An(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Fn(n,t,i),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(n_(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(kf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Xf(l))break;l=l.return}var _=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=Wf(t);cu(t,N,E,_);break;case 5:var j=i.stateNode;i.flags&32&&($r(j,""),i.flags&=-33);var ot=Wf(t);cu(t,ot,j,_);break;case 3:case 4:var gt=i.stateNode.containerInfo,Y=Wf(t);jf(t,Y,gt,_);break;default:throw Error(s(161))}}catch(it){He(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),t=t.sibling}}function vs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)x_(n,t),n=n.sibling;else u_(n)}function x_(t,n){var i=t.alternate;if(i===null)Zf(t,!1);else switch(t.tag){case 3:if(eh=Vi=!1,r_(),vs(n,t),!Vi&&!pu){if(t=Fi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];s0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),eh=!0}Fi=null;break;case 5:vs(n,t);break;case 4:r=Vi,Vi=!1,vs(n,t),Vi&&(pu=!0),Vi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Zf(t,!1):vs(n,t));break;case 30:r=Vi,l=r_(),Vi=!1,vs(n,t),Vi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ia(c,_),_=ia(i.memoizedProps,_);var E=aa(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,kn=0,n=$f(t,i,n,_,E,c,!0),kn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(bs(t,t.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(t.flags&32)!==0?!0:r;break;default:vs(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(t,n.alternate,n),n=n.sibling}function Xa(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Va(4,i,i.return),Xa(i,r);break;case 1:An(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&t_(i,i.return,l),Xa(i,r);break;case 27:(r&2)!==0&&v0(i.stateNode,i.type,i.memoizedProps);case 5:An(i,i.return),i.tag!==5&&i.tag!==27||Oo(i),Xa(i,r);break;case 6:Oo(i);break;case 26:An(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),Xa(i,r);break;case 22:i.memoizedState===null&&Xa(i,r);break;case 30:An(i,i.return),Xa(i,r);break;case 7:An(i,i.return);default:Xa(i,r)}t=t.sibling}}function Ai(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,_=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ai(l,c,i),Lo(4,c);break;case 1:if(Ai(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ot){He(r,r.return,ot)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)Gm(j[l],N)}catch(ot){He(r,r.return,ot)}}E&&_&64&&$g(c),Bi(c,c.return);break;case 27:(i&2)!==0&&i_(c);case 5:c.tag!==5&&c.tag!==27||e_(c),Ai(l,c,i),E&&r===null&&_&4&&qf(c),Bi(c,c.return);break;case 6:e_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||Sn||Gh(ko(N.ownerDocument),c.type,N),Ai(l,c,i),E&&r===null&&_&4&&qf(c),Bi(c,c.return);break;case 12:Ai(l,c,i);break;case 31:Ai(l,c,i),E&&_&4&&m_(l,c);break;case 13:Ai(l,c,i),E&&_&4&&g_(l,c);break;case 22:c.memoizedState===null&&Ai(l,c,i),Bi(c,c.return);break;case 30:Ai(l,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:Ai(l,c,i)}n=n.sibling}}function ah(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&So(i))}function rh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function _i(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)S_(t,n,i,r),n=n.sibling;else l&&l_(n)}function S_(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&du(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,i,r),c&2048&&Lo(9,n);break;case 1:_i(t,n,i,r);break;case 3:_i(t,n,i,r),l&&eh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&So(c)));break;case 12:if(c&2048){_i(t,n,i,r),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,N=_.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){He(n,n.return,j)}}else _i(t,n,i,r);break;case 31:_i(t,n,i,r);break;case 13:_i(t,n,i,r);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&du(E),_._visibility&2?_i(t,n,i,r):Po(t,n)):(l&&E!==null&&E.memoizedState!==null&&du(n),_._visibility&2?_i(t,n,i,r):(_._visibility|=2,xs(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&ah(E,n);break;case 24:_i(t,n,i,r),c&2048&&rh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Hi(c.child,!0),Hi(n.child,!0))),_i(t,n,i,r);break;default:_i(t,n,i,r)}}function xs(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=i,N=r,j=_.flags;switch(_.tag){case 0:case 11:case 15:xs(c,_,E,N,l),Lo(8,_);break;case 23:break;case 22:var ot=_.stateNode;_.memoizedState!==null?ot._visibility&2?xs(c,_,E,N,l):Po(c,_):(ot._visibility|=2,xs(c,_,E,N,l)),l&&j&2048&&ah(_.alternate,_);break;case 24:xs(c,_,E,N,l),l&&j&2048&&rh(_.alternate,_);break;default:xs(c,_,E,N,l)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Po(i,r),l&2048&&ah(r.alternate,r);break;case 24:Po(i,r),l&2048&&rh(r.alternate,r);break;default:Po(i,r)}n=n.sibling}}var Lr=8192;function Or(t,n,i){if(t.subtreeFlags&Lr)for(t=t.child;t!==null;)y_(t,n,i),t=t.sibling}function y_(t,n,i){switch(t.tag){case 26:Or(t,n,i),t.flags&Lr&&(t.memoizedState!==null?nM(i,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&C0(i,t)));break;case 5:Or(t,n,i),t.flags&Lr&&(t=t.stateNode,(n&335544128)===n&&C0(i,t));break;case 3:case 4:var r=bi;bi=ko(t.stateNode.containerInfo),Or(t,n,i),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Lr,Lr=16777216,Or(t,n,i),Lr=r):Or(t,n,i));break;case 30:if((t.flags&Lr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Or(t,n,i);break;default:Or(t,n,i)}}function M_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];yn=r,T_(r,t)}M_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E_(t),t=t.sibling}function E_(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_u(t)):Io(t);break;default:Io(t)}}function _u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];yn=r,T_(r,t)}M_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),_u(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,_u(n));break;default:_u(n)}t=t.sibling}}function T_(t,n){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Va(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:So(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(d_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var QS={getCacheForType:function(t){var n=En(un),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return En(un).controller.signal}},JS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,xe=null,Me=0,Fe=0,ii=null,ka=!1,Ss=!1,sh=!1,da=0,an=0,qa=0,zr=0,vu=0,ai=0,ys=0,Bo=null,Yn=null,oh=!1,xu=0,b_=0,Su=1/0,yu=null,Ya=null,tn=0,Ri=null,Pr=null,ki=0,lh=0,uh=null,A_=null,Ms=null,Es=null,Ts=null,Fo=0,Mu=null;function ri(){return(Le&2)!==0&&Me!==0?Me&-Me:Tt.T!==null?xh():At()}function R_(){if(ai===0)if((Me&536870912)===0||_e){var t=ta;ta<<=1,(ta&3932160)===0&&(ta=262144),ai=t}else ai=536870912;return t=Tn.current,t!==null&&(t.flags|=32),ai}function bs(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=o0(ia(t.memoizedProps,i))),Es===null&&(Es=[]),Es.push(n.bind(null,r))}}function Wn(t,n,i){(t===Ye&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(As(t,0),Wa(t,Me,ai,!1)),_r(t,i),((Le&2)===0||t!==Ye)&&(t===Ye&&((Le&2)===0&&(zr|=i),an===4&&Wa(t,Me,ai,!1)),qi(t))}function C_(t,n,i){if((Le&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ra(t,n),l=r?ey(t,n):fh(t,n,!0),c=r;do{if(l===0){Ss&&!r&&Wa(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!$S(i)){l=fh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=Bo;var N=E.current.memoizedState.isDehydrated;if(N&&(As(E,_).flags|=256),_=fh(E,_,!1),_!==2&&_!==6){if(sh&&!N){E.errorRecoveryDisabledLanes|=c,zr|=c,l=4;break t}c=Yn,Yn=l,c!==null&&(Yn===null?Yn=c:Yn.push.apply(Yn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){As(t,0),Wa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Wa(r,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=xu+300-k(),10<l)){if(Wa(r,n,ai,!ka),gr(r,0,!0)!==0)break t;ki=n,r.timeoutHandle=Dh(w_.bind(null,r,i,Yn,yu,oh,n,ai,zr,ys,ka,c,"Throttled",-0,0),l);break t}w_(r,i,Yn,yu,oh,n,ai,zr,ys,ka,c,null,-0,0)}}break}while(!0);qi(t)}function w_(t,n,i,r,l,c,_,E,N,j,ot,gt,Y,it){t.timeoutHandle=-1;var Nt=n.subtreeFlags,Yt=(c&335544064)===c;if(gt=null,(Yt||Nt&8192||(Nt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ni=null,y_(n,c,gt),Yt&&(Nt=gt,Yt=t.containerInfo,Yt=(Yt.nodeType===9?Yt:Yt.ownerDocument).__reactViewTransition,Yt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=Wo.bind(Nt),Yt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?xu-k():(c&4194048)===c?b_-k():0,Nt=iM(gt,Nt),Nt!==null)){ki=c,t.cancelPendingCommit=Nt(I_.bind(null,t,n,c,i,r,l,_,E,N,j,ot,gt,null,Y,it)),Wa(t,c,_,!j);return}I_(t,n,c,i,r,l,_,E,N,j,ot,gt)}function $S(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!ti(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,i,r){n=xl(t,n),n&=~vu,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Dn(l),_=1<<c;r[c]=-1,l&=~_}i!==0&&A(t,i,n)}function Eu(){return(Le&6)===0?(Ho(0),!1):!0}function ch(){if(xe!==null){if(Fe===0)var t=xe.return;else t=xe,oa=Er=null,vf(t),hs=null,Eo=0,t=xe;for(;t!==null;)Jg(t.alternate,t),t=t.return;xe=null}}function As(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Ey(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ki=0,ch(),Ye=t,xe=i=ra(t.current,null),Me=n,Fe=0,ii=null,ka=!1,Ss=Ra(t,n),sh=!1,ys=ai=vu=zr=qa=an=0,Yn=Bo=null,oh=!1,da=xl(t,n),Ul(),i}function D_(t,n){he=null,Tt.H=nu,n===fs||n===Vl?(n=Im(),Fe=3):n===rf?(n=Im(),Fe=4):Fe=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(an=1,iu(t,di(n,t.current)))}function U_(){var t=Tn.current;return t===null?!0:(Me&4194048)===Me?Nn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Nn:!1}function N_(){var t=Tt.H;return Tt.H=nu,t===null?nu:t}function L_(){var t=Tt.A;return Tt.A=QS,t}function Tu(){an=4,ka||(Me&4194048)!==Me&&Tn.current!==null||(Ss=!0),(qa&134217727)===0&&(zr&134217727)===0||Ye===null||Wa(Ye,Me,ai,!1)}function fh(t,n,i){var r=Le;Le|=2;var l=N_(),c=L_();(Ye!==t||Me!==n)&&(yu=null,As(t,n)),n=!1;var _=an;t:do try{if(Fe!==0&&xe!==null){var E=xe,N=ii;switch(Fe){case 8:ch(),_=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var j=Fe;if(Fe=0,ii=null,Rs(t,E,N,j),i&&Ss){_=0;break t}break;default:j=Fe,Fe=0,ii=null,Rs(t,E,N,j)}}ty(),_=an;break}catch(ot){D_(t,ot)}while(!0);return n&&t.shellSuspendCounter++,oa=Er=null,Le=r,Tt.H=l,Tt.A=c,xe===null&&(Ye=null,Me=0,Ul()),_}function ty(){for(;xe!==null;)O_(xe)}function ey(t,n){var i=Le;Le|=2;var r=N_(),l=L_();Ye!==t||Me!==n?(yu=null,Su=k()+500,As(t,n)):Ss=Ra(t,n);t:do try{if(Fe!==0&&xe!==null){n=xe;var c=ii;e:switch(Fe){case 1:Fe=0,ii=null,Rs(t,n,c,1);break;case 2:case 9:if(zm(c)){Fe=0,ii=null,z_(n);break}n=function(){Fe!==2&&Fe!==9||Ye!==t||(Fe=7),qi(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:zm(c)?(Fe=0,ii=null,z_(n)):(Fe=0,ii=null,Rs(t,n,c,7));break;case 5:var _=null;switch(xe.tag){case 26:_=xe.memoizedState;case 5:case 27:var E=xe;if(_?A0(_):E.stateNode.complete){Fe=0,ii=null;var N=E.sibling;if(N!==null)xe=N;else{var j=E.return;j!==null?(xe=j,bu(j)):xe=null}break e}}Fe=0,ii=null,Rs(t,n,c,5);break;case 6:Fe=0,ii=null,Rs(t,n,c,6);break;case 8:ch(),an=6;break t;default:throw Error(s(462))}}ny();break}catch(ot){D_(t,ot)}while(!0);return oa=Er=null,Tt.H=r,Tt.A=l,Le=i,xe!==null?0:(Ye=null,Me=0,Ul(),an)}function ny(){for(;xe!==null&&!zt();)O_(xe)}function O_(t){var n=Kg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?bu(t):xe=n}function z_(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Xg(i,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Xg(i,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:vf(n);var r=n;r===xn&&(_e?(Il(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Il(r),_e=!0));default:Jg(i,n),n=xe=Tm(n,da),n=Kg(i,n,da)}t.memoizedProps=t.pendingProps,n===null?bu(t):xe=n}function Rs(t,n,i,r){oa=Er=null,vf(n),hs=null,Eo=0;var l=n.return;try{if(XS(t,l,n,i,Me)){an=1,iu(t,di(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;an=1,iu(t,di(i,t.current)),xe=null;return}n.flags&32768?(_e||r===1?t=!0:Ss||(Me&536870912)!==0?t=!1:(ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),P_(n,t)):bu(n)}function bu(t){var n=t;do{if((n.flags&32768)!==0){P_(n,ka);return}t=n.return;var i=WS(n.alternate,n,da);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);an===0&&(an=5)}function P_(t,n){do{var i=jS(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);an=6,xe=null}function I_(t,n,i,r,l,c,_,E,N,j,ot,gt){t.cancelPendingCommit=null;do Au();while(tn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(xe=Ye=null,Me=0),Pr=n,Ri=t,ki=i,uh=l,A_=r,iy(t,n,i,_,E,N,gt)}}function iy(t,n,i,r,l,c,_){var E=n.lanes|n.childLanes;if(lh=E,E|=qc,Mc(t,i,E,r,l,c),Es=null,(i&335544064)===i?(Ts=US(t),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,uy(bt,function(){return mh(),null})):(t.callbackNode=null,t.callbackPriority=0),fu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,l=Vt.p,Vt.p=2,c=Le,Le|=4;try{ZS(t,n,i)}finally{Le=c,Vt.p=l,Tt.T=r}}tn=1,fu?Ms=wy(_,t.containerInfo,Ts,hh,dh,ry,ph,mh,ay):(hh(),dh(),ph())}function ay(t){if(tn!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function ry(){tn===3&&(tn=0,x_(Pr,Ri),tn=4)}function hh(){if(tn===1){tn=0;var t=Ri,n=Pr,i=ki,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var l=Vt.p;Vt.p=2;var c=Le;Le|=4;try{zo=pu=!1,__(n,t,i),i=Rh;var _=pm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(_!==E&&E&&E.ownerDocument&&dm(E.ownerDocument.documentElement,E)){if(N!==null&&Hc(E)){var j=N.start,ot=N.end;if(ot===void 0&&(ot=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(ot,E.value.length);else{var gt=E.ownerDocument||document,Y=gt&&gt.defaultView||window;if(Y.getSelection){var it=Y.getSelection(),Nt=E.textContent.length,Yt=Math.min(N.start,Nt),de=N.end===void 0?Yt:Math.min(N.end,Nt);!it.extend&&Yt>de&&(_=de,de=Yt,Yt=_);var W=hm(E,Yt),X=hm(E,de);if(W&&X&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==X.node||it.focusOffset!==X.offset)){var et=gt.createRange();et.setStart(W.node,W.offset),it.removeAllRanges(),Yt>de?(it.addRange(et),it.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),it.addRange(et))}}}}for(gt=[],it=E;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}zs=!!Ah,Rh=Ah=null}finally{Le=c,Vt.p=l,Tt.T=r}}t.current=n,tn=2}}function dh(){if(tn===2){tn=0;var t=Ri,n=Pr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var r=Vt.p;Vt.p=2;var l=Le;Le|=4;try{f_(t,n.alternate,n)}finally{Le=l,Vt.p=r,Tt.T=i}}tn=3}}function ph(){if(tn===4||tn===3){tn=0;var t=Ms;Ms=null,fe();var n=Ri,i=Pr,r=ki,l=A_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Pr=Ri=null,B_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ya=null),J(r),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,c=Vt.p,Vt.p=2,Tt.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var N=l[E];_(N.value,{componentStack:N.stack})}}finally{Tt.T=i,Vt.p=c}}if(l=Es,_=Ts,Ts=null,l!==null&&(Es=null,_===null&&(_=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(_),i!==void 0&&t.finished.finally(i);(ki&3)!==0&&Au(),qi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Mu?Fo++:(Fo=0,Mu=n):(Fo=0,Mu=null),Ho(0)}}function B_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function Au(){return Ms!==null&&(Ms.skipTransition(),Ms=null),hh(),dh(),ph(),mh()}function mh(){if(tn!==5)return!1;var t=Ri,n=lh;lh=0;var i=J(ki),r=Tt.T,l=Vt.p;try{Vt.p=32>i?32:i,Tt.T=null,i=uh,uh=null;var c=Ri,_=ki;if(tn=0,Pr=Ri=null,ki=0,(Le&6)!==0)throw Error(s(331));var E=Le;if(Le|=4,E_(c.current),S_(c,c.current,_,i),Le=E,Ho(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Vt.p=l,Tt.T=r,B_(t,n)}}function F_(t,n,i){n=di(i,n),n=Nf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(_r(t,2),qi(t))}function He(t,n,i){if(t.tag===3)F_(t,t,i);else for(;n!==null;){if(n.tag===3){F_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){t=di(i,t),i=zg(2),r=Ba(n,i,2),r!==null&&(Pg(i,r,n,t),_r(r,2),qi(r));break}}n=n.return}}function gh(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(sh=!0,l.add(i),t=sy.bind(null,t,n,i),n.then(t,t))}function sy(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ye===t&&(Me&i)===i&&((an===4||an===3&&(Me&62914560)===Me&&300>k()-xu)&&(Le&2)===0?As(t,0):vu|=i,ys===Me&&(ys=0)),qi(t)}function H_(t,n){n===0&&(n=Sl()),t=Sr(t,n),t!==null&&(_r(t,n),qi(t))}function oy(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),H_(t,i)}function ly(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),H_(t,i)}function uy(t,n){return ie(t,n)}var Cs=null,ws=null,_h=!1,Ru=!1,vh=!1,ja=0;function qi(t){t!==ws&&t.next===null&&(ws===null?Cs=ws=t:ws=ws.next=t),Ru=!0,_h||(_h=!0,fy())}function Ho(t,n){if(!vh&&Ru){vh=!0;do for(var i=!1,r=Cs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var _=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Dn(42|t)+1)-1,c&=l&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,k_(r,c))}else c=Me,c=gr(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ra(r,c)||(i=!0,k_(r,c));r=r.next}while(i);vh=!1}}function cy(){G_()}function G_(){Ru=_h=!1;var t=0;ja!==0&&My()&&(t=ja);for(var n=k(),i=null,r=Cs;r!==null;){var l=r.next,c=V_(r,n);c===0?(r.next=null,i===null?Cs=l:i.next=l,l===null&&(ws=i)):(i=r,(t!==0||(c&3)!==0)&&(Ru=!0)),r=l}tn!==0&&tn!==5||Ho(t),ja!==0&&(ja=0)}function V_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Dn(c),E=1<<_,N=l[_];N===-1?((E&i)===0||(E&r)!==0)&&(l[_]=yc(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ye,i=Me,i=gr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ra(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),J(i)){case 2:case 8:i=Xt;break;case 32:i=bt;break;case 268435456:i=Wt;break;default:i=bt}return r=X_.bind(null,t),i=ie(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Au()&&t.callbackNode!==i)return null;var r=Me;return r=gr(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(C_(t,r,n),V_(t,k()),t.callbackNode!=null&&t.callbackNode===i?X_.bind(null,t):null)}function k_(t,n){if(Au())return null;C_(t,n,!0)}function fy(){Ty(function(){(Le&6)!==0?ie(Ut,cy):G_()})}function xh(){if(ja===0){var t=Ar;t===0&&(t=pr,pr<<=1,(pr&261888)===0&&(pr=256)),ja=t}return ja}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(t)}function hy(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=q_((l[qt]||null).action),_=r.submitter;_&&(n=(n=_[qt]||null)?q_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Rl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var N=new FormData(l,_);Rf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,_),Rf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Sh=0;Sh<kc.length;Sh++){var yh=kc[Sh],dy=yh.toLowerCase(),py=yh[0].toUpperCase()+yh.slice(1);Ei(dy,"on"+py)}Ei(_m,"onAnimationEnd"),Ei(vm,"onAnimationIteration"),Ei(xm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(ES,"onTransitionRun"),Ei(TS,"onTransitionStart"),Ei(bS,"onTransitionCancel"),Ei(Sm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Y_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],N=E.instance,j=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(ot){Dl(ot)}l.currentTarget=null,c=N}else for(_=0;_<r.length;_++){if(E=r[_],N=E.instance,j=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(ot){Dl(ot)}l.currentTarget=null,c=N}}}}function Se(t,n){var i=n[te];i===void 0&&(i=n[te]=new Set);var r=t+"__bubble";i.has(r)||(W_(n,t,2,!1),i.add(r))}function Mh(t,n,i){var r=0;n&&(r|=4),W_(i,t,r,n)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Eh(t){if(!t[Cu]){t[Cu]=!0,je.forEach(function(i){i!=="selectionchange"&&(my.has(i)||Mh(i,!1,t),Mh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cu]||(n[Cu]=!0,Mh("selectionchange",!1,n))}}function W_(t,n,i,r){switch(P0(n)){case 2:var l=oM;break;case 8:l=lM;break;default:l=Xh}i=l.bind(null,n,i,t),l=void 0,!Dc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Th(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=r.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=Ne(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){r=c=_;continue t}E=E.parentNode}}r=r.return}Wp(function(){var j=c,ot=Cc(i),gt=[];t:{var Y=ym.get(t);if(Y!==void 0){var it=Rl,Nt=t;switch(t){case"keypress":if(bl(i)===0)break t;case"keydown":case"keyup":it=$x;break;case"focusin":Nt="focus",it=Oc;break;case"focusout":Nt="blur",it=Oc;break;case"beforeblur":case"afterblur":it=Oc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=aS;break;case _m:case vm:case xm:it=kx;break;case Sm:it=sS;break;case"scroll":case"scrollend":it=Fx;break;case"wheel":it=lS;break;case"copy":case"cut":case"paste":it=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Jp;break;case"submit":it=nS;break;case"toggle":case"beforetoggle":it=cS}var Yt=(n&4)!==0,de=!Yt&&(t==="scroll"||t==="scrollend"),W=Yt?Y!==null?Y+"Capture":null:Y;Yt=[];for(var X=j,et;X!==null;){var pt=X;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||W===null||(pt=lo(X,W),pt!=null&&Yt.push(Vo(X,pt,et))),de)break;X=X.return}0<Yt.length&&(Y=new it(Y,Nt,null,i,ot),gt.push({event:Y,listeners:Yt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",it&&i!==Rc&&(Nt=i.relatedTarget||i.fromElement)&&(Ne(Nt)||Nt[ne]))break t;(Y||it)&&(Nt=ot.window===ot?ot:(it=ot.ownerDocument)?it.defaultView||it.parentWindow:window,Y?(it=i.relatedTarget||i.toElement,Y=j,it=it?Ne(it):null,it!==null&&(de=f(it),Yt=it.tag,it!==de||Yt!==5&&Yt!==27&&Yt!==6)&&(it=null)):(Y=null,it=j),Y!==it&&(Yt=Kp,pt="onMouseLeave",W="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Jp,pt="onPointerLeave",W="onPointerEnter",X="pointer"),de=Y==null?Nt:mn(Y),et=it==null?Nt:mn(it),Nt=new Yt(pt,X+"leave",Y,i,ot),Nt.target=de,Nt.relatedTarget=et,pt=null,Ne(ot)===j&&(Yt=new Yt(W,X+"enter",it,i,ot),Yt.target=et,Yt.relatedTarget=de,pt=Yt),de=pt,Yt=Y&&it?G(Y,it,gy):null,Y!==null&&j_(gt,Nt,Y,Yt,!1),it!==null&&de!==null&&j_(gt,de,it,Yt,!0)))}t:{if(Y=j?mn(j):window,it=Y.nodeName&&Y.nodeName.toLowerCase(),it==="select"||it==="input"&&Y.type==="file")var Gt=sm;else if(am(Y))if(om)Gt=SS;else{Gt=vS;var Ee=_S}else it=Y.nodeName,!it||it.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?j&&Ac(j.elementType)&&(Gt=sm):Gt=xS;if(Gt&&(Gt=Gt(t,j))){rm(gt,Gt,i,ot);break t}Ee&&Ee(t,Y,j)}switch(Ee=j?mn(j):window,t){case"focusin":(am(Ee)||Ee.contentEditable==="true")&&(is=Ee,Gc=j,_o=null);break;case"focusout":_o=Gc=is=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,mm(gt,i,ot);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":mm(gt,i,ot)}var $t;if(Pc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else ns?nm(t,i)&&(re="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&($p&&i.locale!=="ko"&&(ns||re!=="onCompositionStart"?re==="onCompositionEnd"&&ns&&($t=jp()):(wa=ot,Uc="value"in wa?wa.value:wa.textContent,ns=!0)),Ee=wu(j,re),0<Ee.length&&(re=new Qp(re,t,null,i,ot),gt.push({event:re,listeners:Ee}),$t?re.data=$t:($t=im(i),$t!==null&&(re.data=$t)))),($t=hS?dS(t,i):pS(t,i))&&(re=wu(j,"onBeforeInput"),0<re.length&&(Ee=new Qp("onBeforeInput","beforeinput",null,i,ot),gt.push({event:Ee,listeners:re}),Ee.data=$t)),hy(gt,t,j,i,ot)}Y_(gt,n)})}function Vo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function wu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=lo(t,i),l!=null&&r.unshift(Vo(t,l,c)),l=lo(t,n),l!=null&&r.push(Vo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j_(t,n,i,r,l){for(var c=n._reactName,_=[];i!==null&&i!==r;){var E=i,N=E.alternate,j=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||j===null||(N=j,l?(j=lo(i,c),j!=null&&_.unshift(Vo(i,j,N))):l||(j=lo(i,c),j!=null&&_.push(Vo(i,j,N)))),i=i.return}_.length!==0&&t.push({event:n,listeners:_})}var _y=/\r\n?/g,vy=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(vy,"")}function K_(t,n){return n=Z_(n),Z_(t)===n}function Ge(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||$r(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&$r(t,""+r);else return;break;case"className":Ml(t,"class",r);break;case"tabIndex":Ml(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(t,i,r);break;case"style":qp(t,r,c);return;case"data":if(n!=="object"){Ml(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Ge(t,n,"name",l.name,l,null),Ge(t,n,"formEncType",l.formEncType,l,null),Ge(t,n,"formMethod",l.formMethod,l,null),Ge(t,n,"formTarget",l.formTarget,l,null)):(Ge(t,n,"encType",l.encType,l,null),Ge(t,n,"method",l.method,l,null),Ge(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=zi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=El(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),yl(t,"popover",r);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Ix.get(i)||i,yl(t,i,r);else return}we=!0}function bh(t,n,i,r,l,c){switch(i){case"style":qp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")$r(t,r);else if(typeof r=="number"||typeof r=="bigint")$r(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Pn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[qt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):yl(t,i,r)}return}we=!0}function Rn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var _=i[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,c,_,i,null)}}l&&Ge(t,n,"srcSet",i.srcSet,i,null),r&&Ge(t,n,"src",i.src,i,null);return;case"input":Se("invalid",t);var E=c=_=l=null,N=null,j=null;for(r in i)if(i.hasOwnProperty(r)){var ot=i[r];if(ot!=null)switch(r){case"name":l=ot;break;case"type":_=ot;break;case"checked":N=ot;break;case"defaultChecked":j=ot;break;case"value":c=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ge(t,n,r,ot,i,null)}}Gp(t,c,E,N,j,_,l,!1);return;case"select":Se("invalid",t),r=_=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Ge(t,n,l,E,i,null)}n=c,i=_,t.multiple=!!r,n!=null?Jr(t,!!r,n,!1):i!=null&&Jr(t,!!r,i,!0);return;case"textarea":Se("invalid",t),c=l=r=null;for(_ in i)if(i.hasOwnProperty(_)&&(E=i[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ge(t,n,_,E,i,null)}Xp(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,N,r,i,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<Go.length;r++)Se(Go[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in i)if(i.hasOwnProperty(j)&&(r=i[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,j,r,i,null)}return;default:if(Ac(n)){for(ot in i)i.hasOwnProperty(ot)&&(r=i[ot],r!==void 0&&bh(t,n,ot,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Ge(t,n,E,r,i,null))}var xy={};function Sy(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,E=null,N=null,j=null,ot=null;for(it in i){var gt=i[it];if(i.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":N=gt;default:r.hasOwnProperty(it)||Ge(t,n,it,null,r,gt)}}for(var Y in r){var it=r[Y];if(gt=i[Y],r.hasOwnProperty(Y)&&(it!=null||gt!=null))switch(Y){case"type":it!==gt&&(we=!0),c=it;break;case"name":it!==gt&&(we=!0),l=it;break;case"checked":it!==gt&&(we=!0),j=it;break;case"defaultChecked":it!==gt&&(we=!0),ot=it;break;case"value":it!==gt&&(we=!0),_=it;break;case"defaultValue":it!==gt&&(we=!0),E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==gt&&Ge(t,n,Y,it,r,gt)}}Tc(t,_,E,N,j,ot,c,l);return;case"select":it=_=E=Y=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":it=N;default:r.hasOwnProperty(c)||Ge(t,n,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(we=!0),Y=c;break;case"defaultValue":c!==N&&(we=!0),E=c;break;case"multiple":c!==N&&(we=!0),_=c;default:c!==N&&Ge(t,n,l,c,r,N)}n=E,i=_,r=it,Y!=null?Jr(t,!!i,Y,!1):!!r!=!!i&&(n!=null?Jr(t,!!i,n,!0):Jr(t,!!i,i?[]:"",!1));return;case"textarea":it=Y=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,r,l)}for(_ in r)if(l=r[_],c=i[_],r.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(we=!0),Y=l;break;case"defaultValue":l!==c&&(we=!0),it=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ge(t,n,_,l,r,c)}Vp(t,Y,it);return;case"option":for(var Nt in i)Y=i[Nt],i.hasOwnProperty(Nt)&&Y!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:Ge(t,n,Nt,null,r,Y));for(N in r)Y=r[N],it=i[N],r.hasOwnProperty(N)&&Y!==it&&(Y!=null||it!=null)&&(N==="selected"?(Y!==it&&(we=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol"):Ge(t,n,N,Y,r,it));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in i)Y=i[Yt],i.hasOwnProperty(Yt)&&Y!=null&&!r.hasOwnProperty(Yt)&&Ge(t,n,Yt,null,r,Y);for(j in r)if(Y=r[j],it=i[j],r.hasOwnProperty(j)&&Y!==it&&(Y!=null||it!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Ge(t,n,j,Y,r,it)}return;default:if(Ac(n)){for(var de in i)Y=i[de],i.hasOwnProperty(de)&&Y!==void 0&&!r.hasOwnProperty(de)&&bh(t,n,de,void 0,r,Y);for(ot in r)Y=r[ot],it=i[ot],!r.hasOwnProperty(ot)||Y===it||Y===void 0&&it===void 0||bh(t,n,ot,Y,r,it);return}}for(var W in i)Y=i[W],i.hasOwnProperty(W)&&Y!=null&&!r.hasOwnProperty(W)&&Ge(t,n,W,null,r,Y);for(gt in r)Y=r[gt],it=i[gt],!r.hasOwnProperty(gt)||Y===it||Y==null&&it==null||Ge(t,n,gt,Y,r,it)}function Q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,_=l.initiatorType,E=l.duration;if(c&&E&&Q_(_)){for(_=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],j=N.startTime;if(j>E)break;var ot=N.transferSize,gt=N.initiatorType;ot&&Q_(gt)&&(N=N.responseEnd,_+=ot*(N<E?1:(E-j)/(N-j)))}if(--r,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ah=null,Rh=null;function Xo(t){return t.nodeType===9?t:t.ownerDocument}function J_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function t0(t,n,i,r){return i=Xo(i).createElement(t),i[Dt]=r,i[qt]=n,Rn(i,t,n),Ce(i),i}function Ch(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wh=null;function My(){var t=window.event;return t&&t.type==="popstate"?t===wh?!1:(wh=t,!0):(wh=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,n0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Dh,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(by)}:Dh;function by(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function i0(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ps(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Bh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Bh(i);for(var c=i.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Ue]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=_}}else i==="body"&&Bh(t.ownerDocument.body);i=l}while(i);Ps(n)}function a0(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function r0(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function s0(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ay(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Uh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return Ay(n,i,t)}function Ry(t){return t.documentElement.clientHeight}function Cy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function wy(t,n,i,r,l,c,_,E,N){var j=n.nodeType===9?n:n.ownerDocument;try{var ot=j.startViewTransition({update:function(){var Y=j.defaultView,it=Y.navigation&&Y.navigation.transition,Nt=j.fonts.status;r();var Yt=[];if(Nt==="loaded"&&(Ry(j),j.fonts.status==="loading"&&Yt.push(j.fonts.ready)),Nt=Yt.length,t!==null)for(var de=t.suspenseyImages,W=0,X=0;X<de.length;X++){var et=de[X];if(!et.complete){var pt=et.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(W+=R0(et),W>Nu){Yt.length=Nt;break}et=new Promise(Cy.bind(et)),Yt.push(et)}}}if(0<Yt.length)return Y=Promise.race([Promise.all(Yt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(l,l),(it?Promise.allSettled([it.finished,Y]):Y).then(c,c);if(l(),it)return it.finished.then(c,c);c()},types:i});j.__reactViewTransition=ot;var gt=[];return ot.ready.then(function(){for(var Y=j.documentElement.getAnimations({subtree:!0}),it=0;it<Y.length;it++){var Nt=Y[it],Yt=Nt.effect,de=Yt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){gt.push(Nt),Nt=Yt.getKeyframes();for(var W=de=void 0,X=!0,et=0;et<Nt.length;et++){var pt=Nt[et],Gt=pt.width;if(de===void 0)de=Gt;else if(de!==Gt){X=!1;break}if(Gt=pt.height,W===void 0)W=Gt;else if(W!==Gt){X=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}X&&de!==void 0&&W!==void 0&&(Yt.setKeyframes(Nt),X=getComputedStyle(Yt.target,Yt.pseudoElement),X.width!==de||X.height!==W)&&(X=Nt[0],X.width=de,X.height=W,X=Nt[Nt.length-1],X.width=de,X.height=W,Yt.setKeyframes(Nt))}}_()},function(Y){j.__reactViewTransition===ot&&(j.__reactViewTransition=null);try{typeof Y=="object"&&Y!==null&&Y.name==="InvalidStateError"&&(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null),Y!==null&&N(Y)}finally{r(),l(),_()}}),ot.finished.finally(function(){for(var Y=0;Y<gt.length;Y++)gt[Y].cancel();j.__reactViewTransition===ot&&(j.__reactViewTransition=null),E()}),ot}catch{return r(),l(),_(),null}}function Ir(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ir.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ir.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function o0(t){return{name:t,group:new Ir("group",t),imagePair:new Ir("image-pair",t),old:new Ir("old",t),new:new Ir("new",t)}}function si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(u0(c,t,n,i)===-1){var _=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){_.removeEventListener(t,n,i),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),r!==null&&(l=_.removeEventListener.bind(_,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,Dy,t,E,r)}this._eventListeners=c}};function Dy(t,n,i,r){return y(t).addEventListener(n,i,r),!1}si.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=u0(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Ds(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Uy,t,i,l),r.splice(n,1),c!==null&&c()}};function Uy(t,n,i,r){return y(t).removeEventListener(n,i,r),!1}function Ds(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function l0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function u0(t,n,i,r){if(t.length===0)return-1;r=l0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&l0(c.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},si.prototype.focus=function(t){m(this._fragmentFiber.child,!0,c0,t,void 0,void 0)};function c0(t,n){return t.tag===6?!1:(t=y(t),Xy(t,n))}si.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Nh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!c0(n[i],t);i--);};function Nh(t,n){return n.push(t),!1}si.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=Xo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,Ny,t,void 0,void 0))};function Ny(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,Ly,t,void 0,void 0)};function Ly(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,Oy,t,void 0,void 0);for(var i=n=0;i<Ci.length;i++){var r=Ci[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ci[n++]=r}Ci.length=n}};function Oy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ci=[],Lh=!1;function zy(t,n,i){Ci.push({fragmentInstance:t,observer:n,instance:i}),Lh||(Lh=!0,ky(function(){Lh=!1;var r=Ci;Ci=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}si.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,Py,t,void 0,void 0),t};function Py(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}si.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},si.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Nh,i,void 0,void 0);var r=y(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Iy(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Iy(t,n,i,r,l){var c=Ne(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=G(i,c,V),n===null?n=!1:(m(n,!0,z,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=G(r,c,V),n===null?n=!1:(m(n,!0,D,c,r),c=x,L=x=null,n=c!==null)),n):!1}function f0(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Nh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),f0(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),f0(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function By(t,n){return t=y(t),h0(t,n),!1}function h0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function d0(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var _=0,E=0;E<Ci.length;E++){var N=Ci[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Ci[_++]=N)}Ci.length=_,c.observe(t)}),h0(t,n))}function Fy(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?zy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Oh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Oh(i),ee(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Hy(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Gy(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function p0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function zh(t){return t.data==="$?"||t.data==="$~"}function Ph(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vy(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ih=null;function m0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return vi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function g0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function Xy(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function ky(t){n0(function(){n0(function(n){return t(n)})})}function _0(t,n,i){switch(n=Xo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function v0(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Ge(t,n,r,null,xy,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),ee(t)}function Bh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var xi=new Map,x0=new Set;function ko(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var pa=Vt.d;Vt.d={f:qy,r:Yy,D:Wy,C:jy,L:Zy,m:Ky,X:Jy,S:Qy,M:$y};function qy(){var t=pa.f(),n=Eu();return t||n}function Yy(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?yg(n):pa.r(t)}var Us=typeof document>"u"?null:document;function S0(t,n,i){var r=Us;if(r&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),x0.has(l)||(x0.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Rn(n,"link",t),Ce(n),r.head.appendChild(n)))}}function Wy(t){pa.D(t),S0("dns-prefetch",t,null)}function jy(t,n){pa.C(t,n),S0("preconnect",t,n)}function Zy(t,n,i){pa.L(t,n,i);var r=Us;if(r&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=Ns(t);break;case"script":c=Ls(t)}if(!(xi.has(c)||(t=O({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),xi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(qo(c))||n==="script"&&r.querySelector(Yo(c))))){var _=r.createElement("link");Rn(_,"link",t),n==="style"&&(_[Re]=!0,_.onload=_.onerror=function(){Ca(_)}),Ce(_),r.head.appendChild(_)}}}function Ky(t,n){pa.m(t,n);var i=Us;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ls(t)}if(!xi.has(c)&&(t=O({rel:"modulepreload",href:t},n),xi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Yo(c)))return}r=i.createElement("link"),Rn(r,"link",t),Ce(r),i.head.appendChild(r)}}}function Qy(t,n,i){pa.S(t,n,i);var r=Us;if(r&&t){var l=Jn(r).hoistableStyles,c=Ns(t);n=n||"default";var _=l.get(c);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(qo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},i),(i=xi.get(c))&&Fh(t,i);var N=_=r.createElement("link");Ce(N),Rn(N,"link",t),N._p=new Promise(function(j,ot){N.onload=j,N.onerror=ot}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Du(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(c,_)}}}function Jy(t,n){pa.X(t,n);var i=Us;if(i&&t){var r=Jn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=O({src:t,async:!0},n),(n=xi.get(l))&&Hh(t,n),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function $y(t,n){pa.M(t,n);var i=Us;if(i&&t){var r=Jn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=O({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&Hh(t,n),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function y0(t,n,i,r){var l=(l=qe.current)?ko(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ns(i.href),n=Jn(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ns(i.href);var c=Jn(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(qo(t)))?c._p||(_.instance=c,_.state.loading=5):(c=xi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},xi.set(t,c)),tM(l,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Ls(i),n=Jn(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ns(t){return'href="'+fi(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function tM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Re]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Re]=!0,n.onload=n.onerror=Ca.bind(null,n),Rn(n,"link",i),Ce(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ls(t){return'[src="'+fi(t)+'"]'}function Yo(t){return"script[async]"+t}function E0(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return n.instance=r,Ce(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ce(r),Rn(r,"style",l),Du(r,i.precedence,t),n.instance=r;case"stylesheet":l=Ns(i.href);var c=t.querySelector(qo(l));if(c)return n.state.loading|=4,n.instance=c,Ce(c),c;r=M0(i),(l=xi.get(l))&&Fh(r,l),c=(t.ownerDocument||t).createElement("link"),Ce(c);var _=c;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Rn(c,"link",r),n.state.loading|=4,Du(c,i.precedence,t),n.instance=c;case"script":return c=Ls(i.src),(l=t.querySelector(Yo(c)))?(n.instance=l,Ce(l),l):(r=i,(l=xi.get(c))&&(r=O({},i),Hh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),Rn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Du(r,i.precedence,t));return n.instance}function Du(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uu=null;function T0(t,n,i){if(Uu===null){var r=new Map,l=Uu=new Map;l.set(i,r)}else l=Uu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ue]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(c):r.set(_,[c])}}return r}function Gh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function eM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function A0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function R0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function C0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=R0(n),t.suspenseyImages.push(n)),t=aM.bind(t),n.decode().then(t,t))}function nM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ns(r.href),c=n.querySelector(qo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,Ce(c);return}c=n.ownerDocument||n,r=M0(r),(l=xi.get(l))&&Fh(r,l),c=c.createElement("link"),Ce(c);var _=c;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Rn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Wo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Nu=0;function iM(t,n){return t.stylesheets&&t.count===0&&Ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Nu===0&&(Nu=62500*yy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Nu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function w0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ou(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Wo(){this.count--,w0(this)}function aM(){this.imgCount--,w0(this)}var Lu=null;function Ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,n.forEach(rM,t),Lu=null,Wo.call(t))}function rM(t,n){if(!(n.state.loading&4)){var i=Lu.get(t);if(i)var r=i.get(null);else{i=new Map,Lu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(i.set(_.dataset.precedence,_),r=_)}r&&i.set(null,r)}l=n.instance,_=l.getAttribute("data-precedence"),c=i.get(_)||r,c===r&&i.set(null,l),i.set(_,l),this.count++,r=Wo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Os={$$typeof:tt,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function sM(t,n,i,r,l,c,_,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.hiddenUpdates=oo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function D0(t,n,i,r,l,c,_,E,N,j,ot,gt){return t=new sM(t,n,i,_,N,j,ot,gt,E),n=1,c===!0&&(n|=24),c=Xn(3,null,null,n),t.current=c,c.stateNode=t,n=ef(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},sf(c),t}function U0(t){return t?(t=ss,t):ss}function N0(t,n,i,r,l,c){l=U0(l),r.context===null?r.context=l:r.pendingContext=l,r=Ia(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ba(t,r,n),i!==null&&(Wn(i,t,n),To(i,t,n))}function L0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Vh(t,n){L0(t,n),(t=t.alternate)&&L0(t,n)}function O0(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&Wn(n,t,67108864),Vh(t,67108864)}}function z0(t){if(t.tag===13||t.tag===31){var n=ri();n=ft(n);var i=Sr(t,n);i!==null&&Wn(i,t,n),Vh(t,n)}}var zs=!0;function oM(t,n,i,r){var l=Tt.T;Tt.T=null;var c=Vt.p;try{Vt.p=2,Xh(t,n,i,r)}finally{Vt.p=c,Tt.T=l}}function lM(t,n,i,r){var l=Tt.T;Tt.T=null;var c=Vt.p;try{Vt.p=8,Xh(t,n,i,r)}finally{Vt.p=c,Tt.T=l}}function Xh(t,n,i,r){if(zs){var l=kh(r);if(l===null)Th(t,n,r,zu,i),I0(t,r);else if(cM(l,t,n,i,r))r.stopPropagation();else if(I0(t,r),n&4&&-1<uM.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ci(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Dn(_);E.entanglements[1]|=N,_&=~N}qi(c),(Le&6)===0&&(Su=k()+500,Ho(0))}}break;case 31:case 13:E=Sr(c,2),E!==null&&Wn(E,c,2),Eu(),Vh(c,2)}if(c=kh(r),c===null&&Th(t,n,r,zu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Th(t,n,r,null,i)}}function kh(t){return t=Cc(t),qh(t)}var zu=null;function qh(t){if(zu=null,t=Ne(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zu=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ut:return 2;case Xt:return 8;case bt:case St:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Yh=!1,Ka=null,Qa=null,Ja=null,jo=new Map,Zo=new Map,$a=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ge(n),n!==null&&O0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function cM(t,n,i,r,l){switch(n){case"focusin":return Ka=Ko(Ka,t,n,i,r,l),!0;case"dragenter":return Qa=Ko(Qa,t,n,i,r,l),!0;case"mouseover":return Ja=Ko(Ja,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return jo.set(c,Ko(jo.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Zo.set(c,Ko(Zo.get(c)||null,t,n,i,r,l)),!0}return!1}function B0(t){var n=Ne(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){z0(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){z0(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=kh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Rc=r,i.target.dispatchEvent(r),Rc=null}else return n=ge(i),n!==null&&O0(n),t.blockedOn=i,!1;n.shift()}return!0}function F0(t,n,i){Pu(t)&&i.delete(n)}function fM(){Yh=!1,Ka!==null&&Pu(Ka)&&(Ka=null),Qa!==null&&Pu(Qa)&&(Qa=null),Ja!==null&&Pu(Ja)&&(Ja=null),jo.forEach(F0),Zo.forEach(F0)}function Iu(t,n){t.blockedOn===n&&(t.blockedOn=null,Yh||(Yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fM)))}var Bu=null;function H0(t){Bu!==t&&(Bu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bu===t&&(Bu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(qh(r||i)===null)continue;break}var c=ge(i);c!==null&&(t.splice(n,3),n-=3,Rf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ps(t){function n(N){return Iu(N,t)}Ka!==null&&Iu(Ka,t),Qa!==null&&Iu(Qa,t),Ja!==null&&Iu(Ja,t),jo.forEach(n),Zo.forEach(n);for(var i=0;i<$a.length;i++){var r=$a[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<$a.length&&(i=$a[0],i.blockedOn===null);)B0(i),i.blockedOn===null&&$a.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],_=l[qt]||null;if(typeof c=="function")_||H0(i);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[qt]||null)E=_.formAction;else if(qh(l)!==null)continue}else E=_.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),H0(i)}}}function G0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Wh(t){this._internalRoot=t}Fu.prototype.render=Wh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ri();N0(i,r,t,n,null,null)},Fu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N0(t.current,2,null,t,null,null),Eu(),n[ne]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var i=0;i<$a.length&&n!==0&&n<$a[i].priority;i++);$a.splice(i,0,t),i===0&&B0(t)}};var V0=e.version;if(V0!=="19.3.0")throw Error(s(527,V0,"19.3.0"));Vt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var hM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{ye=Hu.inject(hM),$e=Hu}catch{}}return Jo.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Ug,c=Ng,_=Lg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=D0(t,1,!1,null,null,i,r,null,l,c,_,G0),t[ne]=n.current,Eh(t),new Wh(n)},Jo.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ug,_=Ng,E=Lg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),n=D0(t,1,!0,n,i??null,r,l,N,c,_,E,G0),n.context=U0(null),i=n.current,r=ri(),r=ft(r),l=Ia(r),l.callback=null,Ba(i,l,r),i=r,n.current.lanes=i,_r(n,i),qi(n),t[ne]=n.current,Eh(t),new Fu(n)},Jo.version="19.3.0",Jo}var J0;function MM(){if(J0)return Zh.exports;J0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zh.exports=yM(),Zh.exports}var EM=MM(),be=Ep();const TM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$v=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();var bM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const AM=be.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},g)=>be.createElement("svg",{ref:g,...bM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:$v("lucide",u),...d},[...h.map(([p,v])=>be.createElement(p,v)),...Array.isArray(f)?f:[f]]));const Qn=(o,e)=>{const a=be.forwardRef(({className:s,...u},f)=>be.createElement(AM,{ref:f,iconNode:e,className:$v(`lucide-${TM(o)}`,s),...u}));return a.displayName=`${o}`,a};const RM=Qn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const CM=Qn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const wM=Qn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const DM=Qn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);const UM=Qn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);const NM=Qn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const LM=Qn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const OM=Qn("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);const $0=Qn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const zM=Qn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const tv=Qn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);const PM=Qn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const IM=Qn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);const td=Qn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Tp="180",BM=0,ev=1,FM=2,tx=1,HM=2,ya=3,fr=0,Kn=1,Ma=2,ur=0,Js=1,nv=2,iv=3,av=4,GM=5,Yr=100,VM=101,XM=102,kM=103,qM=104,YM=200,WM=201,jM=202,ZM=203,Od=204,zd=205,KM=206,QM=207,JM=208,$M=209,tE=210,eE=211,nE=212,iE=213,aE=214,Pd=0,Id=1,Bd=2,to=3,Fd=4,Hd=5,Gd=6,Vd=7,ex=0,rE=1,sE=2,cr=0,oE=1,lE=2,uE=3,nx=4,cE=5,fE=6,hE=7,ix=300,eo=301,no=302,ol=303,Xd=304,vc=306,kd=1e3,Ta=1001,qd=1002,ui=1003,dE=1004,Gu=1005,wn=1006,ed=1007,lr=1008,Qi=1009,ax=1010,rx=1011,ll=1012,bp=1013,jr=1014,Zn=1015,ba=1016,Ap=1017,Rp=1018,ul=1020,sx=35902,ox=35899,lx=1021,ux=1022,Mi=1023,cl=1026,fl=1027,cx=1028,Cp=1029,fx=1030,wp=1031,Dp=1033,cc=33776,fc=33777,hc=33778,dc=33779,Yd=35840,Wd=35841,jd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,tp=37809,ep=37810,np=37811,ip=37812,ap=37813,rp=37814,sp=37815,op=37816,lp=37817,up=37818,cp=37819,fp=37820,hp=37821,dp=36492,pp=36494,mp=36495,gp=36283,_p=36284,vp=36285,xp=36286,pE=3200,mE=3201,hx=0,gE=1,or="",yi="srgb",Zr="srgb-linear",mc="linear",ke="srgb",Is=7680,rv=519,_E=512,vE=513,xE=514,dx=515,SE=516,yE=517,ME=518,EE=519,sv=35044,ov="300 es",Wi=2e3,gc=2001;class ao{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Sp=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[a&63|128]+Ln[a>>8&255]+"-"+Ln[a>>16&255]+Ln[a>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Te(o,e,a){return Math.max(e,Math.min(a,o))}function TE(o,e){return(o%e+e)%e}function id(o,e,a){return(1-a)*o+a*e}function $o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,a=0){ze.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,h,d){let g=s[u+0],p=s[u+1],v=s[u+2],m=s[u+3];const S=f[h+0],M=f[h+1],b=f[h+2],w=f[h+3];if(d===0){e[a+0]=g,e[a+1]=p,e[a+2]=v,e[a+3]=m;return}if(d===1){e[a+0]=S,e[a+1]=M,e[a+2]=b,e[a+3]=w;return}if(m!==w||g!==S||p!==M||v!==b){let y=1-d;const x=g*S+p*M+v*b+m*w,L=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const V=Math.sqrt(z),G=Math.atan2(V,x*L);y=Math.sin(y*G)/V,d=Math.sin(d*G)/V}const D=d*L;if(g=g*y+S*D,p=p*y+M*D,v=v*y+b*D,m=m*y+w*D,y===1-d){const V=1/Math.sqrt(g*g+p*p+v*v+m*m);g*=V,p*=V,v*=V,m*=V}}e[a]=g,e[a+1]=p,e[a+2]=v,e[a+3]=m}static multiplyQuaternionsFlat(e,a,s,u,f,h){const d=s[u],g=s[u+1],p=s[u+2],v=s[u+3],m=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return e[a]=d*b+v*m+g*M-p*S,e[a+1]=g*b+v*S+p*m-d*M,e[a+2]=p*b+v*M+d*S-g*m,e[a+3]=v*b-d*m-g*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(s/2),v=d(u/2),m=d(f/2),S=g(s/2),M=g(u/2),b=g(f/2);switch(h){case"XYZ":this._x=S*v*m+p*M*b,this._y=p*M*m-S*v*b,this._z=p*v*b+S*M*m,this._w=p*v*m-S*M*b;break;case"YXZ":this._x=S*v*m+p*M*b,this._y=p*M*m-S*v*b,this._z=p*v*b-S*M*m,this._w=p*v*m+S*M*b;break;case"ZXY":this._x=S*v*m-p*M*b,this._y=p*M*m+S*v*b,this._z=p*v*b+S*M*m,this._w=p*v*m-S*M*b;break;case"ZYX":this._x=S*v*m-p*M*b,this._y=p*M*m+S*v*b,this._z=p*v*b-S*M*m,this._w=p*v*m+S*M*b;break;case"YZX":this._x=S*v*m+p*M*b,this._y=p*M*m+S*v*b,this._z=p*v*b-S*M*m,this._w=p*v*m-S*M*b;break;case"XZY":this._x=S*v*m-p*M*b,this._y=p*M*m-S*v*b,this._z=p*v*b+S*M*m,this._w=p*v*m+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],g=a[9],p=a[2],v=a[6],m=a[10],S=s+d+m;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-g)*M,this._y=(f-p)*M,this._z=(h-u)*M}else if(s>d&&s>m){const M=2*Math.sqrt(1+s-d-m);this._w=(v-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+p)/M}else if(d>m){const M=2*Math.sqrt(1+d-s-m);this._w=(f-p)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+m-s-d);this._w=(h-u)/M,this._x=(f+p)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,h=e._w,d=a._x,g=a._y,p=a._z,v=a._w;return this._x=s*v+h*d+u*p-f*g,this._y=u*v+h*g+f*d-s*p,this._z=f*v+h*p+s*g-u*d,this._w=h*v-s*d-u*g-f*p,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const p=Math.sqrt(g),v=Math.atan2(p,d),m=Math.sin((1-a)*v)/p,S=Math.sin(a*v)/p;return this._w=h*m+this._w*S,this._x=s*m+this._x*S,this._y=u*m+this._y*S,this._z=f*m+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,a=0,s=0){ct.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(lv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(lv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*u-d*s),v=2*(d*a-f*u),m=2*(f*s-h*a);return this.x=a+g*p+h*m-d*v,this.y=s+g*v+d*p-f*m,this.z=u+g*m+f*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this.z=Te(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this.z=Te(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,h=a.x,d=a.y,g=a.z;return this.x=u*g-f*d,this.y=f*h-s*g,this.z=s*d-u*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new ct,lv=new pl;class pe{constructor(e,a,s,u,f,h,d,g,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,g,p)}set(e,a,s,u,f,h,d,g,p){const v=this.elements;return v[0]=e,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=g,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],g=s[6],p=s[1],v=s[4],m=s[7],S=s[2],M=s[5],b=s[8],w=u[0],y=u[3],x=u[6],L=u[1],z=u[4],D=u[7],V=u[2],G=u[5],O=u[8];return f[0]=h*w+d*L+g*V,f[3]=h*y+d*z+g*G,f[6]=h*x+d*D+g*O,f[1]=p*w+v*L+m*V,f[4]=p*y+v*z+m*G,f[7]=p*x+v*D+m*O,f[2]=S*w+M*L+b*V,f[5]=S*y+M*z+b*G,f[8]=S*x+M*D+b*O,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8];return a*h*v-a*d*p-s*f*v+s*d*g+u*f*p-u*h*g}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8],m=v*h-d*p,S=d*g-v*f,M=p*f-h*g,b=a*m+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=m*w,e[1]=(u*p-v*s)*w,e[2]=(d*s-u*h)*w,e[3]=S*w,e[4]=(v*a-u*g)*w,e[5]=(u*f-d*a)*w,e[6]=M*w,e[7]=(s*g-p*a)*w,e[8]=(h*a-s*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,h,d){const g=Math.cos(f),p=Math.sin(f);return this.set(s*g,s*p,-s*(g*h+p*d)+h+e,-u*p,u*g,-u*(-p*h+g*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(rd.makeScale(e,a)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,a){return this.premultiply(rd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new pe;function px(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bE(){const o=_c("canvas");return o.style.display="block",o}const uv={};function hl(o){o in uv||(uv[o]=!0,console.warn(o))}function AE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const cv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const o={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Aa(u.r),u.g=Aa(u.g),u.b=Aa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=$s(u.r),u.g=$s(u.g),u.b=$s(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===or?mc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Zr]:{primaries:e,whitePoint:s,transfer:mc,toXYZ:cv,fromXYZ:fv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:cv,fromXYZ:fv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const De=RE();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class CE{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=_c("canvas")),Bs.width=e.width,Bs.height=e.height;const u=Bs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=_c("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Aa(a[s]/255)*255):a[s]=Aa(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(sd(u[h].image)):f.push(sd(u[h]))}else f=sd(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DE=0;const od=new ct;class Vn extends ao{constructor(e=Vn.DEFAULT_IMAGE,a=Vn.DEFAULT_MAPPING,s=Ta,u=Ta,f=wn,h=lr,d=Mi,g=Qi,p=Vn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=dl(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ix;Vn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const g=e.elements,p=g[0],v=g[4],m=g[8],S=g[1],M=g[5],b=g[9],w=g[2],y=g[6],x=g[10];if(Math.abs(v-S)<.01&&Math.abs(m-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(m+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(p+1)/2,D=(M+1)/2,V=(x+1)/2,G=(v+S)/4,O=(m+w)/4,P=(b+y)/4;return z>D&&z>V?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=G/s,f=O/s):D>V?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=G/u,f=P/u):V<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(V),s=O/f,u=P/f),this.set(s,u,f,a),this}let L=Math.sqrt((y-b)*(y-b)+(m-w)*(m-w)+(S-v)*(S-v));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(m-w)/L,this.z=(S-v)/L,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this.z=Te(this.z,e.z,a.z),this.w=Te(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this.z=Te(this.z,e,a),this.w=Te(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends ao{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,e,a),this.scissorTest=!1,this.viewport=new rn(0,0,e,a);const u={width:e,height:a,depth:s.depth},f=new Vn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const a={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new Up(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends UE{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class mx extends Vn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NE extends Vn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=new ct(1/0,1/0,1/0),a=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(wi.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(wi.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=wi.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(f,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vu.copy(s.boundingBox)),Vu.applyMatrix4(e.matrixWorld),this.union(Vu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),Xu.subVectors(this.max,tl),Fs.subVectors(e.a,tl),Hs.subVectors(e.b,tl),Gs.subVectors(e.c,tl),er.subVectors(Hs,Fs),nr.subVectors(Gs,Hs),Br.subVectors(Fs,Gs);let a=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Br.z,Br.y,er.z,0,-er.x,nr.z,0,-nr.x,Br.z,0,-Br.x,-er.y,er.x,0,-nr.y,nr.x,0,-Br.y,Br.x,0];return!ld(a,Fs,Hs,Gs,Xu)||(a=[1,0,0,0,1,0,0,0,1],!ld(a,Fs,Hs,Gs,Xu))?!1:(ku.crossVectors(er,nr),a=[ku.x,ku.y,ku.z],ld(a,Fs,Hs,Gs,Xu))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],wi=new ct,Vu=new ml,Fs=new ct,Hs=new ct,Gs=new ct,er=new ct,nr=new ct,Br=new ct,tl=new ct,Xu=new ct,ku=new ct,Fr=new ct;function ld(o,e,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Fr.fromArray(o,f);const d=u.x*Math.abs(Fr.x)+u.y*Math.abs(Fr.y)+u.z*Math.abs(Fr.z),g=e.dot(Fr),p=a.dot(Fr),v=s.dot(Fr);if(Math.max(-Math.max(g,p,v),Math.min(g,p,v))>d)return!1}return!0}const LE=new ml,el=new ct,ud=new ct;class Np{constructor(e=new ct,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):LE.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const a=el.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(el,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(ud)),this.expandByPoint(el.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new ct,cd=new ct,qu=new ct,ir=new ct,fd=new ct,Yu=new ct,hd=new ct;class OE{constructor(e=new ct,a=new ct(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ga.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){cd.copy(e).add(a).multiplyScalar(.5),qu.copy(a).sub(e).normalize(),ir.copy(this.origin).sub(cd);const f=e.distanceTo(a)*.5,h=-this.direction.dot(qu),d=ir.dot(this.direction),g=-ir.dot(qu),p=ir.lengthSq(),v=Math.abs(1-h*h);let m,S,M,b;if(v>0)if(m=h*g-d,S=h*d-g,b=f*v,m>=0)if(S>=-b)if(S<=b){const w=1/v;m*=w,S*=w,M=m*(m+h*S+2*d)+S*(h*m+S+2*g)+p}else S=f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+p;else S=-f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+p;else S<=-b?(m=Math.max(0,-(-h*f+d)),S=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+p):S<=b?(m=0,S=Math.min(Math.max(-f,-g),f),M=S*(S+2*g)+p):(m=Math.max(0,-(h*f+d)),S=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+p);else S=h>0?-f:f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(cd).addScaledVector(qu,S),M}intersectSphere(e,a){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),u=ga.dot(ga)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,a):this.at(d,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,h,d,g;const p=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,u=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,u=(e.min.x-S.x)*p),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(e.min.z-S.z)*m,g=(e.max.z-S.z)*m):(d=(e.max.z-S.z)*m,g=(e.min.z-S.z)*m),s>g||d>u)||((d>s||s!==s)&&(s=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,a,s,u,f){fd.subVectors(a,e),Yu.subVectors(s,e),hd.crossVectors(fd,Yu);let h=this.direction.dot(hd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ir.subVectors(this.origin,e);const g=d*this.direction.dot(Yu.crossVectors(ir,Yu));if(g<0)return null;const p=d*this.direction.dot(fd.cross(ir));if(p<0||g+p>h)return null;const v=-d*ir.dot(hd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,a,s,u,f,h,d,g,p,v,m,S,M,b,w,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,g,p,v,m,S,M,b,w,y)}set(e,a,s,u,f,h,d,g,p,v,m,S,M,b,w,y){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=g,x[2]=p,x[6]=v,x[10]=m,x[14]=S,x[3]=M,x[7]=b,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Vs.setFromMatrixColumn(e,0).length(),f=1/Vs.setFromMatrixColumn(e,1).length(),h=1/Vs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(u),p=Math.sin(u),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const S=h*v,M=h*m,b=d*v,w=d*m;a[0]=g*v,a[4]=-g*m,a[8]=p,a[1]=M+b*p,a[5]=S-w*p,a[9]=-d*g,a[2]=w-S*p,a[6]=b+M*p,a[10]=h*g}else if(e.order==="YXZ"){const S=g*v,M=g*m,b=p*v,w=p*m;a[0]=S+w*d,a[4]=b*d-M,a[8]=h*p,a[1]=h*m,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=w+S*d,a[10]=h*g}else if(e.order==="ZXY"){const S=g*v,M=g*m,b=p*v,w=p*m;a[0]=S-w*d,a[4]=-h*m,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=w-S*d,a[2]=-h*p,a[6]=d,a[10]=h*g}else if(e.order==="ZYX"){const S=h*v,M=h*m,b=d*v,w=d*m;a[0]=g*v,a[4]=b*p-M,a[8]=S*p+w,a[1]=g*m,a[5]=w*p+S,a[9]=M*p-b,a[2]=-p,a[6]=d*g,a[10]=h*g}else if(e.order==="YZX"){const S=h*g,M=h*p,b=d*g,w=d*p;a[0]=g*v,a[4]=w-S*m,a[8]=b*m+M,a[1]=m,a[5]=h*v,a[9]=-d*v,a[2]=-p*v,a[6]=M*m+b,a[10]=S-w*m}else if(e.order==="XZY"){const S=h*g,M=h*p,b=d*g,w=d*p;a[0]=g*v,a[4]=-m,a[8]=p*v,a[1]=S*m+w,a[5]=h*v,a[9]=M*m-b,a[2]=b*m-M,a[6]=d*v,a[10]=w*m+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zE,e,PE)}lookAt(e,a,s){const u=this.elements;return oi.subVectors(e,a),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ar.crossVectors(s,oi),ar.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ar.crossVectors(s,oi)),ar.normalize(),Wu.crossVectors(oi,ar),u[0]=ar.x,u[4]=Wu.x,u[8]=oi.x,u[1]=ar.y,u[5]=Wu.y,u[9]=oi.y,u[2]=ar.z,u[6]=Wu.z,u[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],g=s[8],p=s[12],v=s[1],m=s[5],S=s[9],M=s[13],b=s[2],w=s[6],y=s[10],x=s[14],L=s[3],z=s[7],D=s[11],V=s[15],G=u[0],O=u[4],P=u[8],C=u[12],R=u[1],B=u[5],Q=u[9],rt=u[13],lt=u[2],tt=u[6],H=u[10],Z=u[14],q=u[3],_t=u[7],xt=u[11],Bt=u[15];return f[0]=h*G+d*R+g*lt+p*q,f[4]=h*O+d*B+g*tt+p*_t,f[8]=h*P+d*Q+g*H+p*xt,f[12]=h*C+d*rt+g*Z+p*Bt,f[1]=v*G+m*R+S*lt+M*q,f[5]=v*O+m*B+S*tt+M*_t,f[9]=v*P+m*Q+S*H+M*xt,f[13]=v*C+m*rt+S*Z+M*Bt,f[2]=b*G+w*R+y*lt+x*q,f[6]=b*O+w*B+y*tt+x*_t,f[10]=b*P+w*Q+y*H+x*xt,f[14]=b*C+w*rt+y*Z+x*Bt,f[3]=L*G+z*R+D*lt+V*q,f[7]=L*O+z*B+D*tt+V*_t,f[11]=L*P+z*Q+D*H+V*xt,f[15]=L*C+z*rt+D*Z+V*Bt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],g=e[9],p=e[13],v=e[2],m=e[6],S=e[10],M=e[14],b=e[3],w=e[7],y=e[11],x=e[15];return b*(+f*g*m-u*p*m-f*d*S+s*p*S+u*d*M-s*g*M)+w*(+a*g*M-a*p*S+f*h*S-u*h*M+u*p*v-f*g*v)+y*(+a*p*m-a*d*M-f*h*m+s*h*M+f*d*v-s*p*v)+x*(-u*d*v-a*g*m+a*d*S+u*h*m-s*h*S+s*g*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8],m=e[9],S=e[10],M=e[11],b=e[12],w=e[13],y=e[14],x=e[15],L=m*y*p-w*S*p+w*g*M-d*y*M-m*g*x+d*S*x,z=b*S*p-v*y*p-b*g*M+h*y*M+v*g*x-h*S*x,D=v*w*p-b*m*p+b*d*M-h*w*M-v*d*x+h*m*x,V=b*m*g-v*w*g-b*d*S+h*w*S+v*d*y-h*m*y,G=a*L+s*z+u*D+f*V;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=L*O,e[1]=(w*S*f-m*y*f-w*u*M+s*y*M+m*u*x-s*S*x)*O,e[2]=(d*y*f-w*g*f+w*u*p-s*y*p-d*u*x+s*g*x)*O,e[3]=(m*g*f-d*S*f-m*u*p+s*S*p+d*u*M-s*g*M)*O,e[4]=z*O,e[5]=(v*y*f-b*S*f+b*u*M-a*y*M-v*u*x+a*S*x)*O,e[6]=(b*g*f-h*y*f-b*u*p+a*y*p+h*u*x-a*g*x)*O,e[7]=(h*S*f-v*g*f+v*u*p-a*S*p-h*u*M+a*g*M)*O,e[8]=D*O,e[9]=(b*m*f-v*w*f-b*s*M+a*w*M+v*s*x-a*m*x)*O,e[10]=(h*w*f-b*d*f+b*s*p-a*w*p-h*s*x+a*d*x)*O,e[11]=(v*d*f-h*m*f-v*s*p+a*m*p+h*s*M-a*d*M)*O,e[12]=V*O,e[13]=(v*w*u-b*m*u+b*s*S-a*w*S-v*s*y+a*m*y)*O,e[14]=(b*d*u-h*w*u-b*s*g+a*w*g+h*s*y-a*d*y)*O,e[15]=(h*m*u-v*d*u+v*s*g-a*m*g-h*s*S+a*d*S)*O,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=e.x,d=e.y,g=e.z,p=f*h,v=f*d;return this.set(p*h+s,p*d-u*g,p*g+u*d,0,p*d+u*g,v*d+s,v*g-u*h,0,p*g-u*d,v*g+u*h,f*g*g+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,g=a._w,p=f+f,v=h+h,m=d+d,S=f*p,M=f*v,b=f*m,w=h*v,y=h*m,x=d*m,L=g*p,z=g*v,D=g*m,V=s.x,G=s.y,O=s.z;return u[0]=(1-(w+x))*V,u[1]=(M+D)*V,u[2]=(b-z)*V,u[3]=0,u[4]=(M-D)*G,u[5]=(1-(S+x))*G,u[6]=(y+L)*G,u[7]=0,u[8]=(b+z)*O,u[9]=(y-L)*O,u[10]=(1-(S+w))*O,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Vs.set(u[0],u[1],u[2]).length();const h=Vs.set(u[4],u[5],u[6]).length(),d=Vs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Di.copy(this);const p=1/f,v=1/h,m=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=m,Di.elements[9]*=m,Di.elements[10]*=m,a.setFromRotationMatrix(Di),s.x=f,s.y=h,s.z=d,this}makePerspective(e,a,s,u,f,h,d=Wi,g=!1){const p=this.elements,v=2*f/(a-e),m=2*f/(s-u),S=(a+e)/(a-e),M=(s+u)/(s-u);let b,w;if(g)b=f/(h-f),w=h*f/(h-f);else if(d===Wi)b=-(h+f)/(h-f),w=-2*h*f/(h-f);else if(d===gc)b=-h/(h-f),w=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=m,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,s,u,f,h,d=Wi,g=!1){const p=this.elements,v=2/(a-e),m=2/(s-u),S=-(a+e)/(a-e),M=-(s+u)/(s-u);let b,w;if(g)b=1/(h-f),w=h/(h-f);else if(d===Wi)b=-2/(h-f),w=-(h+f)/(h-f);else if(d===gc)b=-1/(h-f),w=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=m,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Vs=new ct,Di=new on,zE=new ct(0,0,0),PE=new ct(1,1,1),ar=new ct,Wu=new ct,oi=new ct,hv=new on,dv=new pl;class Ji{constructor(e=0,a=0,s=0,u=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],g=u[1],p=u[5],v=u[9],m=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IE=0;const pv=new ct,Xs=new pl,_a=new on,ju=new ct,nl=new ct,BE=new ct,FE=new pl,mv=new ct(1,0,0),gv=new ct(0,1,0),_v=new ct(0,0,1),vv={type:"added"},HE={type:"removed"},ks={type:"childadded",child:null},dd={type:"childremoved",child:null};class zn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ct,a=new Ji,s=new pl,u=new ct(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new on},normalMatrix:{value:new pe}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,a){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?ju.copy(e):ju.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(nl,ju,this.up):_a.lookAt(ju,nl,this.up),this.quaternion.setFromRotationMatrix(_a),u&&(_a.extractRotation(u.matrixWorld),Xs.setFromRotationMatrix(_a),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(HE),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,FE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,v=g.length;p<v;p++){const m=g[p];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(f(e.materials,this.material[g]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(e.animations,g))}}if(a){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),v=h(e.images),m=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const g=[];for(const p in d){const v=d[p];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}zn.DEFAULT_UP=new ct(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ct,va=new ct,pd=new ct,xa=new ct,qs=new ct,Ys=new ct,xv=new ct,md=new ct,gd=new ct,_d=new ct,vd=new rn,xd=new rn,Sd=new rn;class Li{constructor(e=new ct,a=new ct,s=new ct){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Ui.subVectors(e,a),u.cross(Ui);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Ui.subVectors(u,a),va.subVectors(s,a),pd.subVectors(e,a);const h=Ui.dot(Ui),d=Ui.dot(va),g=Ui.dot(pd),p=va.dot(va),v=va.dot(pd),m=h*p-d*d;if(m===0)return f.set(0,0,0),null;const S=1/m,M=(p*g-d*v)*S,b=(h*v-d*g)*S;return f.set(1-M-b,b,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,a,s,u,f,h,d,g){return this.getBarycoord(e,a,s,u,xa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,xa.x),g.addScaledVector(h,xa.y),g.addScaledVector(d,xa.z),g)}static getInterpolatedAttribute(e,a,s,u,f,h){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,a),xd.fromBufferAttribute(e,s),Sd.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(vd,f.x),h.addScaledVector(xd,f.y),h.addScaledVector(Sd,f.z),h}static isFrontFacing(e,a,s,u){return Ui.subVectors(s,a),va.subVectors(e,a),Ui.cross(va).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Li.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Li.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let h,d;qs.subVectors(u,s),Ys.subVectors(f,s),md.subVectors(e,s);const g=qs.dot(md),p=Ys.dot(md);if(g<=0&&p<=0)return a.copy(s);gd.subVectors(e,u);const v=qs.dot(gd),m=Ys.dot(gd);if(v>=0&&m<=v)return a.copy(u);const S=g*m-v*p;if(S<=0&&g>=0&&v<=0)return h=g/(g-v),a.copy(s).addScaledVector(qs,h);_d.subVectors(e,f);const M=qs.dot(_d),b=Ys.dot(_d);if(b>=0&&M<=b)return a.copy(f);const w=M*p-g*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),a.copy(s).addScaledVector(Ys,d);const y=v*b-M*m;if(y<=0&&m-v>=0&&M-b>=0)return xv.subVectors(f,u),d=(m-v)/(m-v+(M-b)),a.copy(u).addScaledVector(xv,d);const x=1/(y+w+S);return h=w*x,d=S*x,a.copy(s).addScaledVector(qs,h).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Zu={h:0,s:0,l:0};function yd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Oe{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=De.workingColorSpace){return this.r=e,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=De.workingColorSpace){if(e=TE(e,1),a=Te(a,0,1),s=Te(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=yd(h,f,e+1/3),this.g=yd(h,f,e),this.b=yd(h,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,a=yi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=yi){const s=_x[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return De.workingToColorSpace(On.copy(this),e),Math.round(Te(On.r*255,0,255))*65536+Math.round(Te(On.g*255,0,255))*256+Math.round(Te(On.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=De.workingColorSpace){De.workingToColorSpace(On.copy(this),a);const s=On.r,u=On.g,f=On.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let g,p;const v=(d+h)/2;if(d===h)g=0,p=0;else{const m=h-d;switch(p=v<=.5?m/(h+d):m/(2-h-d),h){case s:g=(u-f)/m+(u<f?6:0);break;case u:g=(f-s)/m+2;break;case f:g=(s-u)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=v,e}getRGB(e,a=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),a),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=yi){De.workingToColorSpace(On.copy(this),e);const a=On.r,s=On.g,u=On.b;return e!==yi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+a,rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(rr),e.getHSL(Zu);const s=id(rr.h,Zu.h,a),u=id(rr.s,Zu.s,a),f=id(rr.l,Zu.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Oe;Oe.NAMES=_x;let GE=0;class gl extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Js,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=zd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Od&&(s.blendSrc=this.blendSrc),this.blendDst!==zd&&(s.blendDst=this.blendDst),this.blendEquation!==Yr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(a){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vx extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ea=VE();function VE(){const o=new ArrayBuffer(4),e=new Float32Array(o),a=new Uint32Array(o),s=new Uint32Array(512),u=new Uint32Array(512);for(let g=0;g<256;++g){const p=g-127;p<-27?(s[g]=0,s[g|256]=32768,u[g]=24,u[g|256]=24):p<-14?(s[g]=1024>>-p-14,s[g|256]=1024>>-p-14|32768,u[g]=-p-1,u[g|256]=-p-1):p<=15?(s[g]=p+15<<10,s[g|256]=p+15<<10|32768,u[g]=13,u[g|256]=13):p<128?(s[g]=31744,s[g|256]=64512,u[g]=24,u[g|256]=24):(s[g]=31744,s[g|256]=64512,u[g]=13,u[g|256]=13)}const f=new Uint32Array(2048),h=new Uint32Array(64),d=new Uint32Array(64);for(let g=1;g<1024;++g){let p=g<<13,v=0;for(;(p&8388608)===0;)p<<=1,v-=8388608;p&=-8388609,v+=947912704,f[g]=p|v}for(let g=1024;g<2048;++g)f[g]=939524096+(g-1024<<13);for(let g=1;g<31;++g)h[g]=g<<23;h[31]=1199570944,h[32]=2147483648;for(let g=33;g<63;++g)h[g]=2147483648+(g-32<<23);h[63]=3347054592;for(let g=1;g<64;++g)g!==32&&(d[g]=1024);return{floatView:e,uint32View:a,baseTable:s,shiftTable:u,mantissaTable:f,exponentTable:h,offsetTable:d}}function XE(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=Te(o,-65504,65504),Ea.floatView[0]=o;const e=Ea.uint32View[0],a=e>>23&511;return Ea.baseTable[a]+((e&8388607)>>Ea.shiftTable[a])}function kE(o){const e=o>>10;return Ea.uint32View[0]=Ea.mantissaTable[Ea.offsetTable[e]+(o&1023)]+Ea.exponentTable[e],Ea.floatView[0]}class Ku{static toHalfFloat(e){return XE(e)}static fromHalfFloat(e){return kE(e)}}const dn=new ct,Qu=new ze;let qE=0;class Zi{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qE++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=sv,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Qu.fromBufferAttribute(this,a),Qu.applyMatrix3(e),this.setXY(a,Qu.x,Qu.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=$o(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=$o(a,this.array)),a}setX(e,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=$o(a,this.array)),a}setY(e,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=$o(a,this.array)),a}setZ(e,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=$o(a,this.array)),a}setW(e,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array),u=jn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array),u=jn(u,this.array),f=jn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class xx extends Zi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Sx extends Zi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Ki extends Zi{constructor(e,a,s){super(new Float32Array(e),a,s)}}let YE=0;const Si=new on,Md=new zn,Ws=new ct,li=new ml,il=new ml,Mn=new ct;class dr extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?Sx:xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new pe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,a,s){return Si.makeTranslation(e,a,s),this.applyMatrix4(Si),this}scale(e,a,s){return Si.makeScale(e,a,s),this.applyMatrix4(Si),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ki(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Np);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];il.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(li.min,il.min),li.expandByPoint(Mn),Mn.addVectors(li.max,il.max),li.expandByPoint(Mn)):(li.expandByPoint(il.min),li.expandByPoint(il.max))}li.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)Mn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],g=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Mn.fromBufferAttribute(d,p),g&&(Ws.fromBufferAttribute(e,p),Mn.add(Ws)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let P=0;P<s.count;P++)d[P]=new ct,g[P]=new ct;const p=new ct,v=new ct,m=new ct,S=new ze,M=new ze,b=new ze,w=new ct,y=new ct;function x(P,C,R){p.fromBufferAttribute(s,P),v.fromBufferAttribute(s,C),m.fromBufferAttribute(s,R),S.fromBufferAttribute(f,P),M.fromBufferAttribute(f,C),b.fromBufferAttribute(f,R),v.sub(p),m.sub(p),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(m,-M.y).multiplyScalar(B),y.copy(m).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(B),d[P].add(w),d[C].add(w),d[R].add(w),g[P].add(y),g[C].add(y),g[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let P=0,C=L.length;P<C;++P){const R=L[P],B=R.start,Q=R.count;for(let rt=B,lt=B+Q;rt<lt;rt+=3)x(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const z=new ct,D=new ct,V=new ct,G=new ct;function O(P){V.fromBufferAttribute(u,P),G.copy(V);const C=d[P];z.copy(C),z.sub(V.multiplyScalar(V.dot(C))).normalize(),D.crossVectors(G,C);const B=D.dot(g[P])<0?-1:1;h.setXYZW(P,z.x,z.y,z.z,B)}for(let P=0,C=L.length;P<C;++P){const R=L[P],B=R.start,Q=R.count;for(let rt=B,lt=B+Q;rt<lt;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Zi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new ct,f=new ct,h=new ct,d=new ct,g=new ct,p=new ct,v=new ct,m=new ct;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,w),h.fromBufferAttribute(a,y),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(v),g.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),h.fromBufferAttribute(a,S+2),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)Mn.fromBufferAttribute(e,a),Mn.normalize(),e.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,g){const p=d.array,v=d.itemSize,m=d.normalized,S=new p.constructor(g.length*v);let M=0,b=0;for(let w=0,y=g.length;w<y;w++){d.isInterleavedBufferAttribute?M=g[w]*d.data.stride+d.offset:M=g[w]*v;for(let x=0;x<v;x++)S[b++]=p[M++]}return new Zi(S,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new dr,s=this.index.array,u=this.attributes;for(const d in u){const g=u[d],p=e(g,s);a.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const g=[],p=f[d];for(let v=0,m=p.length;v<m;v++){const S=p[v],M=e(S,s);g.push(M)}a.morphAttributes[d]=g}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];a.addGroup(p.start,p.count,p.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],v=[];for(let m=0,S=p.length;m<S;m++){const M=p[m];v.push(M.toJSON(e.data))}v.length>0&&(u[g]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const p in u){const v=u[p];this.setAttribute(p,v.clone(a))}const f=e.morphAttributes;for(const p in f){const v=[],m=f[p];for(let S=0,M=m.length;S<M;S++)v.push(m[S].clone(a));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new on,Hr=new OE,Ju=new Np,yv=new ct,$u=new ct,tc=new ct,ec=new ct,Ed=new ct,nc=new ct,Mv=new ct,ic=new ct;class ji extends zn{constructor(e=new dr,a=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){nc.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const v=d[g],m=f[g];v!==0&&(Ed.fromBufferAttribute(m,e),h?nc.addScaledVector(Ed,v):nc.addScaledVector(Ed.sub(a),v))}a.add(nc)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ju.copy(s.boundingSphere),Ju.applyMatrix4(f),Hr.copy(e.ray).recast(e.near),!(Ju.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ju,yv)===null||Hr.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(Sv.copy(f).invert(),Hr.copy(e.ray).applyMatrix4(Sv),!(s.boundingBox!==null&&Hr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Hr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,p=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],x=h[y.materialIndex],L=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,V=z;D<V;D+=3){const G=d.getX(D),O=d.getX(D+1),P=d.getX(D+2);u=ac(this,x,e,s,p,v,m,G,O,P),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=b,x=w;y<x;y+=3){const L=d.getX(y),z=d.getX(y+1),D=d.getX(y+2);u=ac(this,h,e,s,p,v,m,L,z,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],x=h[y.materialIndex],L=Math.max(y.start,M.start),z=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,V=z;D<V;D+=3){const G=D,O=D+1,P=D+2;u=ac(this,x,e,s,p,v,m,G,O,P),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(g.count,M.start+M.count);for(let y=b,x=w;y<x;y+=3){const L=y,z=y+1,D=y+2;u=ac(this,h,e,s,p,v,m,L,z,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function WE(o,e,a,s,u,f,h,d){let g;if(e.side===Kn?g=s.intersectTriangle(h,f,u,!0,d):g=s.intersectTriangle(u,f,h,e.side===fr,d),g===null)return null;ic.copy(d),ic.applyMatrix4(o.matrixWorld);const p=a.ray.origin.distanceTo(ic);return p<a.near||p>a.far?null:{distance:p,point:ic.clone(),object:o}}function ac(o,e,a,s,u,f,h,d,g,p){o.getVertexPosition(d,$u),o.getVertexPosition(g,tc),o.getVertexPosition(p,ec);const v=WE(o,e,a,s,$u,tc,ec,Mv);if(v){const m=new ct;Li.getBarycoord(Mv,$u,tc,ec,m),u&&(v.uv=Li.getInterpolatedAttribute(u,d,g,p,m,new ze)),f&&(v.uv1=Li.getInterpolatedAttribute(f,d,g,p,m,new ze)),h&&(v.normal=Li.getInterpolatedAttribute(h,d,g,p,m,new ct),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:g,c:p,normal:new ct,materialIndex:0};Li.getNormal($u,tc,ec,S.normal),v.face=S,v.barycoord=m}return v}class _l extends dr{constructor(e=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],p=[],v=[],m=[];let S=0,M=0;b("z","y","x",-1,-1,s,a,e,h,f,0),b("z","y","x",1,-1,s,a,-e,h,f,1),b("x","z","y",1,1,e,s,a,u,h,2),b("x","z","y",1,-1,e,s,-a,u,h,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new Ki(p,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(m,2));function b(w,y,x,L,z,D,V,G,O,P,C){const R=D/O,B=V/P,Q=D/2,rt=V/2,lt=G/2,tt=O+1,H=P+1;let Z=0,q=0;const _t=new ct;for(let xt=0;xt<H;xt++){const Bt=xt*B-rt;for(let Kt=0;Kt<tt;Kt++){const oe=Kt*R-Q;_t[w]=oe*L,_t[y]=Bt*z,_t[x]=lt,p.push(_t.x,_t.y,_t.z),_t[w]=0,_t[y]=0,_t[x]=G>0?1:-1,v.push(_t.x,_t.y,_t.z),m.push(Kt/O),m.push(1-xt/P),Z+=1}}for(let xt=0;xt<P;xt++)for(let Bt=0;Bt<O;Bt++){const Kt=S+Bt+tt*xt,oe=S+Bt+tt*(xt+1),F=S+(Bt+1)+tt*(xt+1),ht=S+(Bt+1)+tt*xt;g.push(Kt,oe,ht),g.push(oe,F,ht),q+=6}d.addGroup(M,q,C),M+=q,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Gn(o){const e={};for(let a=0;a<o.length;a++){const s=io(o[a]);for(const u in s)e[u]=s[u]}return e}function jE(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function yx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const ZE={clone:io,merge:Gn};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Mx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new ct,Ev=new ze,Tv=new ze;class Ni extends Mx{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,a){return this.getViewBounds(e,Ev,Tv),a.subVectors(Tv,Ev)}setViewOffset(e,a,s,u,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(nd*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/g,a-=h.offsetY*s/p,u*=h.width/g,s*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const js=-90,Zs=1;class JE extends zn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ni(js,Zs,e,a);u.layers=this.layers,this.add(u);const f=new Ni(js,Zs,e,a);f.layers=this.layers,this.add(f);const h=new Ni(js,Zs,e,a);h.layers=this.layers,this.add(h);const d=new Ni(js,Zs,e,a);d.layers=this.layers,this.add(d);const g=new Ni(js,Zs,e,a);g.layers=this.layers,this.add(g);const p=new Ni(js,Zs,e,a);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,g]=a;for(const p of a)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of a)this.add(p),p.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,p,v]=this.children,m=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,h),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,g),e.setRenderTarget(s,4,u),e.render(a,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(m,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ex extends Vn{constructor(e=[],a=eo,s,u,f,h,d,g,p,v){super(e,a,s,u,f,h,d,g,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $E extends Kr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Ex(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new _l(5,5,5),f=new hr({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ur});f.uniforms.tEquirect.value=a;const h=new ji(u,f),d=a.minFilter;return a.minFilter===lr&&(a.minFilter=wn),new JE(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,s,u);e.setRenderTarget(f)}}class rc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tT={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const y=a.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],S=v.position.distanceTo(m.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new rc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}class eT extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class Tx extends Vn{constructor(e=null,a=1,s=1,u,f,h,d,g,p=ui,v=ui,m,S){super(null,h,d,g,p,v,u,f,m,S),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new ct,nT=new ct,iT=new pe;class kr{constructor(e=new ct(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=bd.subVectors(s,a).cross(nT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(bd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||iT.getNormalMatrix(e),u=this.coplanarPoint(bd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Np,aT=new ze(.5,.5),sc=new ct;class Lp{constructor(e=new kr,a=new kr,s=new kr,u=new kr,f=new kr,h=new kr){this.planes=[e,a,s,u,f,h]}set(e,a,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=Wi,s=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],p=f[3],v=f[4],m=f[5],S=f[6],M=f[7],b=f[8],w=f[9],y=f[10],x=f[11],L=f[12],z=f[13],D=f[14],V=f[15];if(u[0].setComponents(p-h,M-v,x-b,V-L).normalize(),u[1].setComponents(p+h,M+v,x+b,V+L).normalize(),u[2].setComponents(p+d,M+m,x+w,V+z).normalize(),u[3].setComponents(p-d,M-m,x-w,V-z).normalize(),s)u[4].setComponents(g,S,y,D).normalize(),u[5].setComponents(p-g,M-S,x-y,V-D).normalize();else if(u[4].setComponents(p-g,M-S,x-y,V-D).normalize(),a===Wi)u[5].setComponents(p+g,M+S,x+y,V+D).normalize();else if(a===gc)u[5].setComponents(g,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Gr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const a=aT.distanceTo(e.center);return Gr.radius=.7071067811865476+a,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(sc.x=u.normal.x>0?e.max.x:e.min.x,sc.y=u.normal.y>0?e.max.y:e.min.y,sc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bx extends Vn{constructor(e,a,s=jr,u,f,h,d=ui,g=ui,p,v=cl,m=1){if(v!==cl&&v!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:a,depth:m};super(S,u,f,h,d,g,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Ax extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xc extends dr{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,h=a/2,d=Math.floor(s),g=Math.floor(u),p=d+1,v=g+1,m=e/d,S=a/g,M=[],b=[],w=[],y=[];for(let x=0;x<v;x++){const L=x*S-h;for(let z=0;z<p;z++){const D=z*m-f;b.push(D,-L,0),w.push(0,0,1),y.push(z/d),y.push(1-x/g)}}for(let x=0;x<g;x++)for(let L=0;L<d;L++){const z=L+p*x,D=L+p*(x+1),V=L+1+p*(x+1),G=L+1+p*x;M.push(z,D,G),M.push(D,V,G)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(w,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Op extends dr{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const g=Math.min(h+d,Math.PI);let p=0;const v=[],m=new ct,S=new ct,M=[],b=[],w=[],y=[];for(let x=0;x<=s;x++){const L=[],z=x/s;let D=0;x===0&&h===0?D=.5/a:x===s&&g===Math.PI&&(D=-.5/a);for(let V=0;V<=a;V++){const G=V/a;m.x=-e*Math.cos(u+G*f)*Math.sin(h+z*d),m.y=e*Math.cos(h+z*d),m.z=e*Math.sin(u+G*f)*Math.sin(h+z*d),b.push(m.x,m.y,m.z),S.copy(m).normalize(),w.push(S.x,S.y,S.z),y.push(G+D,1-z),L.push(p++)}v.push(L)}for(let x=0;x<s;x++)for(let L=0;L<a;L++){const z=v[x][L+1],D=v[x][L],V=v[x+1][L],G=v[x+1][L+1];(x!==0||h>0)&&M.push(z,D,G),(x!==s-1||g<Math.PI)&&M.push(D,V,G)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(w,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rT extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hx,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sT extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bv={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class lT{constructor(e,a,s){const u=this;let f=!1,h=0,d=0,g;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=s,this.abortController=new AbortController,this.itemStart=function(v){d++,f===!1&&u.onStart!==void 0&&u.onStart(v,h,d),f=!0},this.itemEnd=function(v){h++,u.onProgress!==void 0&&u.onProgress(v,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(v){u.onError!==void 0&&u.onError(v)},this.resolveURL=function(v){return g?g(v):v},this.setURLModifier=function(v){return g=v,this},this.addHandler=function(v,m){return p.push(v,m),this},this.removeHandler=function(v){const m=p.indexOf(v);return m!==-1&&p.splice(m,2),this},this.getHandler=function(v){for(let m=0,S=p.length;m<S;m+=2){const M=p[m],b=p[m+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const uT=new lT;class zp{constructor(e){this.manager=e!==void 0?e:uT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,a){const s=this;return new Promise(function(u,f){s.load(e,u,a,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sa={};class cT extends Error{constructor(e,a){super(e),this.response=a}}class fT extends zp{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,a,s,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=bv.get(`file:${e}`);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{a&&a(f),this.manager.itemEnd(e)},0),f;if(Sa[e]!==void 0){Sa[e].push({onLoad:a,onProgress:s,onError:u});return}Sa[e]=[],Sa[e].push({onLoad:a,onProgress:s,onError:u});const h=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,g=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=Sa[e],m=p.body.getReader(),S=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=S?parseInt(S):0,b=M!==0;let w=0;const y=new ReadableStream({start(x){L();function L(){m.read().then(({done:z,value:D})=>{if(z)x.close();else{w+=D.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:M});for(let G=0,O=v.length;G<O;G++){const P=v[G];P.onProgress&&P.onProgress(V)}x.enqueue(D),L()}},z=>{x.error(z)})}}});return new Response(y)}else throw new cT(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(g){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(d),S=m&&m[1]?m[1].toLowerCase():void 0,M=new TextDecoder(S);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{bv.add(`file:${e}`,p);const v=Sa[e];delete Sa[e];for(let m=0,S=v.length;m<S;m++){const M=v[m];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=Sa[e];if(v===void 0)throw this.manager.itemError(e),p;delete Sa[e];for(let m=0,S=v.length;m<S;m++){const M=v[m];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class hT extends zp{constructor(e){super(e)}load(e,a,s,u){const f=this,h=new Tx,d=new fT(this.manager);return d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setPath(this.path),d.setWithCredentials(f.withCredentials),d.load(e,function(g){let p;try{p=f.parse(g)}catch(v){if(u!==void 0)u(v);else{console.error(v);return}}p.image!==void 0?h.image=p.image:p.data!==void 0&&(h.image.width=p.width,h.image.height=p.height,h.image.data=p.data),h.wrapS=p.wrapS!==void 0?p.wrapS:Ta,h.wrapT=p.wrapT!==void 0?p.wrapT:Ta,h.magFilter=p.magFilter!==void 0?p.magFilter:wn,h.minFilter=p.minFilter!==void 0?p.minFilter:wn,h.anisotropy=p.anisotropy!==void 0?p.anisotropy:1,p.colorSpace!==void 0&&(h.colorSpace=p.colorSpace),p.flipY!==void 0&&(h.flipY=p.flipY),p.format!==void 0&&(h.format=p.format),p.type!==void 0&&(h.type=p.type),p.mipmaps!==void 0&&(h.mipmaps=p.mipmaps,h.minFilter=lr),p.mipmapCount===1&&(h.minFilter=wn),p.generateMipmaps!==void 0&&(h.generateMipmaps=p.generateMipmaps),h.needsUpdate=!0,a&&a(h,p)},s,u),h}}class dT extends zn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const Ad=new on,Av=new ct,Rv=new ct;class pT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lp,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Av.setFromMatrixPosition(e.matrixWorld),a.position.copy(Av),Rv.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(Rv),a.updateMatrixWorld(),Ad.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pp extends Mx{constructor(e=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+a,g=u-a;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=v*this.view.offsetY,g=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class mT extends pT{constructor(){super(new Pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gT extends dT{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new mT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _T extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cv(o,e,a,s){const u=vT(s);switch(a){case lx:return o*e;case cx:return o*e/u.components*u.byteLength;case Cp:return o*e/u.components*u.byteLength;case fx:return o*e*2/u.components*u.byteLength;case wp:return o*e*2/u.components*u.byteLength;case ux:return o*e*3/u.components*u.byteLength;case Mi:return o*e*4/u.components*u.byteLength;case Dp:return o*e*4/u.components*u.byteLength;case cc:case fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Zd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case jd:return Math.max(o,8)*Math.max(e,8)/2;case Kd:case Qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dp:case pp:case mp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case gp:case _p:return Math.ceil(o/4)*Math.ceil(e/4)*8;case vp:case xp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function vT(o){switch(o){case Qi:case ax:return{byteLength:1,components:1};case ll:case rx:case ba:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case jr:case bp:case Zn:return{byteLength:4,components:1};case sx:case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);function Rx(){let o=null,e=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function xT(o){const e=new WeakMap;function a(d,g){const p=d.array,v=d.usage,m=p.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,g,p){const v=g.array,m=g.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,v);else{m.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<m.length;M++){const b=m[S],w=m[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,m[S]=w)}m.length=S+1;for(let M=0,b=m.length;M<b;M++){const w=m[M];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,a(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,g),p.version=d.version}}return{get:u,remove:f,update:h}}var ST=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:ST,alphahash_pars_fragment:yT,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:bT,aomap_fragment:AT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:wT,begin_vertex:DT,beginnormal_vertex:UT,bsdfs:NT,iridescence_fragment:LT,bumpmap_pars_fragment:OT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:BT,color_fragment:FT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:VT,common:XT,cube_uv_reflection_fragment:kT,defaultnormal_vertex:qT,displacementmap_pars_vertex:YT,displacementmap_vertex:WT,emissivemap_fragment:jT,emissivemap_pars_fragment:ZT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:JT,envmap_common_pars_fragment:$T,envmap_pars_fragment:t1,envmap_pars_vertex:e1,envmap_physical_pars_fragment:h1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:c1,lights_pars_begin:f1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:v1,lights_fragment_begin:x1,lights_fragment_maps:S1,lights_fragment_end:y1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:b1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:w1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:N1,morphcolor_vertex:L1,morphnormal_vertex:O1,morphtarget_pars_vertex:z1,morphtarget_vertex:P1,normal_fragment_begin:I1,normal_fragment_maps:B1,normal_pars_fragment:F1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:X1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:q1,iridescence_pars_fragment:Y1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:ab,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:ub,specularmap_pars_fragment:cb,tonemapping_fragment:fb,tonemapping_pars_fragment:hb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:Sb,backgroundCube_vert:yb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:Tb,depth_vert:bb,depth_frag:Ab,distanceRGBA_vert:Rb,distanceRGBA_frag:Cb,equirect_vert:wb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Lb,meshbasic_frag:Ob,meshlambert_vert:zb,meshlambert_frag:Pb,meshmatcap_vert:Ib,meshmatcap_frag:Bb,meshnormal_vert:Fb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Vb,meshphysical_vert:Xb,meshphysical_frag:kb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:Wb,points_frag:jb,shadow_vert:Zb,shadow_frag:Kb,sprite_vert:Qb,sprite_frag:Jb},It={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Yi={basic:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Oe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Oe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([It.common,It.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([It.lights,It.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Yi.physical={uniforms:Gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const oc={r:0,b:0,g:0},Vr=new Ji,$b=new on;function tA(o,e,a,s,u,f,h){const d=new Oe(0);let g=f===!0?0:1,p,v,m=null,S=0,M=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?a:e).get(D)),D}function w(z){let D=!1;const V=b(z);V===null?x(d,g):V&&V.isColor&&(x(V,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,D){const V=b(D);V&&(V.isCubeTexture||V.mapping===vc)?(v===void 0&&(v=new ji(new _l(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:io(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,O,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Vr.copy(D.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(Vr)),v.material.toneMapped=De.getTransfer(V.colorSpace)!==ke,(m!==V||S!==V.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=V,S=V.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new ji(new xc(2,2),new hr({name:"BackgroundMaterial",uniforms:io(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(V.colorSpace)!==ke,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||S!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,m=V,S=V.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function x(z,D){z.getRGB(oc,yx(o)),s.buffers.color.setClear(oc.r,oc.g,oc.b,D,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),g=D,x(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(z){g=z,x(d,g)},render:w,addToRenderList:y,dispose:L}}function eA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,h=!1;function d(R,B,Q,rt,lt){let tt=!1;const H=m(rt,Q,B);f!==H&&(f=H,p(f.object)),tt=M(R,rt,Q,lt),tt&&b(R,rt,Q,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,D(R,B,Q,rt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function g(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function m(R,B,Q){const rt=Q.wireframe===!0;let lt=s[R.id];lt===void 0&&(lt={},s[R.id]=lt);let tt=lt[B.id];tt===void 0&&(tt={},lt[B.id]=tt);let H=tt[rt];return H===void 0&&(H=S(g()),tt[rt]=H),H}function S(R){const B=[],Q=[],rt=[];for(let lt=0;lt<a;lt++)B[lt]=0,Q[lt]=0,rt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:rt,object:R,attributes:{},index:null}}function M(R,B,Q,rt){const lt=f.attributes,tt=B.attributes;let H=0;const Z=Q.getAttributes();for(const q in Z)if(Z[q].location>=0){const xt=lt[q];let Bt=tt[q];if(Bt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Bt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Bt=R.instanceColor)),xt===void 0||xt.attribute!==Bt||Bt&&xt.data!==Bt.data)return!0;H++}return f.attributesNum!==H||f.index!==rt}function b(R,B,Q,rt){const lt={},tt=B.attributes;let H=0;const Z=Q.getAttributes();for(const q in Z)if(Z[q].location>=0){let xt=tt[q];xt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const Bt={};Bt.attribute=xt,xt&&xt.data&&(Bt.data=xt.data),lt[q]=Bt,H++}f.attributes=lt,f.attributesNum=H,f.index=rt}function w(){const R=f.newAttributes;for(let B=0,Q=R.length;B<Q;B++)R[B]=0}function y(R){x(R,0)}function x(R,B){const Q=f.newAttributes,rt=f.enabledAttributes,lt=f.attributeDivisors;Q[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),lt[R]!==B&&(o.vertexAttribDivisor(R,B),lt[R]=B)}function L(){const R=f.newAttributes,B=f.enabledAttributes;for(let Q=0,rt=B.length;Q<rt;Q++)B[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),B[Q]=0)}function z(R,B,Q,rt,lt,tt,H){H===!0?o.vertexAttribIPointer(R,B,Q,lt,tt):o.vertexAttribPointer(R,B,Q,rt,lt,tt)}function D(R,B,Q,rt){w();const lt=rt.attributes,tt=Q.getAttributes(),H=B.defaultAttributeValues;for(const Z in tt){const q=tt[Z];if(q.location>=0){let _t=lt[Z];if(_t===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),_t!==void 0){const xt=_t.normalized,Bt=_t.itemSize,Kt=e.get(_t);if(Kt===void 0)continue;const oe=Kt.buffer,F=Kt.type,ht=Kt.bytesPerElement,$=F===o.INT||F===o.UNSIGNED_INT||_t.gpuType===bp;if(_t.isInterleavedBufferAttribute){const at=_t.data,Et=at.stride,nt=_t.offset;if(at.isInstancedInterleavedBuffer){for(let yt=0;yt<q.locationSize;yt++)x(q.location+yt,at.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let yt=0;yt<q.locationSize;yt++)y(q.location+yt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let yt=0;yt<q.locationSize;yt++)z(q.location+yt,Bt/q.locationSize,F,xt,Et*ht,(nt+Bt/q.locationSize*yt)*ht,$)}else{if(_t.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)x(q.location+at,_t.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let at=0;at<q.locationSize;at++)y(q.location+at);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let at=0;at<q.locationSize;at++)z(q.location+at,Bt/q.locationSize,F,xt,Bt*ht,Bt/q.locationSize*at*ht,$)}}else if(H!==void 0){const xt=H[Z];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(q.location,xt);break;case 3:o.vertexAttrib3fv(q.location,xt);break;case 4:o.vertexAttrib4fv(q.location,xt);break;default:o.vertexAttrib1fv(q.location,xt)}}}}L()}function V(){P();for(const R in s){const B=s[R];for(const Q in B){const rt=B[Q];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete B[Q]}delete s[R]}}function G(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const Q in B){const rt=B[Q];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete B[Q]}delete s[R.id]}function O(R){for(const B in s){const Q=s[B];if(Q[R.id]===void 0)continue;const rt=Q[R.id];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete Q[R.id]}}function P(){C(),h=!0,f!==u&&(f=u,p(f.object))}function C(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:P,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function nA(o,e,a){let s;function u(p){s=p}function f(p,v){o.drawArrays(s,p,v),a.update(v,s,1)}function h(p,v,m){m!==0&&(o.drawArraysInstanced(s,p,v,m),a.update(v,s,m))}function d(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,m);let M=0;for(let b=0;b<m;b++)M+=v[b];a.update(M,s,1)}function g(p,v,m,S){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,m);let b=0;for(let w=0;w<m;w++)b+=v[w]*S[w];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function iA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==Mi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const P=O===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Qi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Zn&&!P)}function g(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=a.precision!==void 0?a.precision:"highp";const v=g(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const m=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:V,maxSamples:G}}function aA(o){const e=this;let a=null,s=0,u=!1,f=!1;const h=new kr,d=new pe,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const M=m.length!==0||S||s!==0||u;return u=S,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){a=v(m,S,0)},this.setState=function(m,S,M){const b=m.clippingPlanes,w=m.clipIntersection,y=m.clipShadows,x=o.get(m);if(!u||b===null||b.length===0||f&&!y)f?v(null):p();else{const L=f?0:s,z=L*4;let D=x.clippingState||null;g.value=D,D=v(b,S,z,M);for(let V=0;V!==z;++V)D[V]=a[V];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){g.value!==a&&(g.value=a,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,S,M,b){const w=m!==null?m.length:0;let y=null;if(w!==0){if(y=g.value,b!==!0||y===null){const x=M+w*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let z=0,D=M;z!==w;++z,D+=4)h.copy(m[z]).applyMatrix4(L,d),h.normal.toArray(y,D),y[D+3]=h.constant}g.value=y,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function rA(o){let e=new WeakMap;function a(h,d){return d===ol?h.mapping=eo:d===Xd&&(h.mapping=no),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ol||d===Xd)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new $E(g.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",u),a(p.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const Qs=4,wv=[.125,.215,.35,.446,.526,.582],Wr=20,Rd=new Pp,Dv=new Oe;let Cd=null,wd=0,Dd=0,Ud=!1;const qr=(1+Math.sqrt(5))/2,Ks=1/qr,Uv=[new ct(-qr,Ks,0),new ct(qr,Ks,0),new ct(-Ks,0,qr),new ct(Ks,0,qr),new ct(0,qr,-Ks),new ct(0,qr,Ks),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],sA=new ct;class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=sA}=f;Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,u,g,d),a>0&&this._blur(g,0,0,a),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,wd,Dd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===eo||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ba,format:Mi,colorSpace:Zr,depthBuffer:!1},u=Nv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oA(f)),this._blurMaterial=lA(f,e,a)}return u}_compileMaterial(e){const a=new ji(this._lodPlanes[0],e);this._renderer.compile(a,Rd)}_sceneToCubeUV(e,a,s,u,f){const g=new Ni(90,1,a,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,M=m.toneMapping;m.getClearColor(Dv),m.toneMapping=cr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const w=new vx({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),y=new ji(new _l,w);let x=!1;const L=e.background;L?L.isColor&&(w.color.copy(L),e.background=null,x=!0):(w.color.copy(Dv),x=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(g.up.set(0,p[z],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+v[z],f.y,f.z)):D===1?(g.up.set(0,0,p[z]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+v[z],f.z)):(g.up.set(0,p[z],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+v[z]));const V=this._cubeSize;lc(u,D*V,z>2?V:0,V,V),m.setRenderTarget(u),x&&m.render(y,g),m.render(e,g)}y.geometry.dispose(),y.material.dispose(),m.toneMapping=M,m.autoClear=S,e.background=L}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===eo||e.mapping===no;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new ji(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;lc(a,0,0,3*g,2*g),s.setRenderTarget(a),s.render(h,Rd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Uv[(u-f-1)%Uv.length];this._blur(e,f-1,f,h,d)}a.autoClear=s}_blur(e,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ji(this._lodPlanes[u],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Wr-1),w=f/b,y=isFinite(f)?1+Math.floor(v*w):Wr;y>Wr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const x=[];let L=0;for(let O=0;O<Wr;++O){const P=O/w,C=Math.exp(-P*P/2);x.push(C),O===0?L+=C:O<y&&(L+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:z}=this;S.dTheta.value=b,S.mipInt.value=z-s;const D=this._sizeLods[u],V=3*D*(u>z-Qs?u-z+Qs:0),G=4*(this._cubeSize-D);lc(a,V,G,3*D,2*D),g.setRenderTarget(a),g.render(m,Rd)}}function oA(o){const e=[],a=[],s=[];let u=o;const f=o-Qs+1+wv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let g=1/d;h>o-Qs?g=wv[h-o+Qs-1]:h===0&&(g=0),s.push(g);const p=1/(d-2),v=-p,m=1+p,S=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,b=6,w=3,y=2,x=1,L=new Float32Array(w*b*M),z=new Float32Array(y*b*M),D=new Float32Array(x*b*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,P=G>2?0:-1,C=[O,P,0,O+2/3,P,0,O+2/3,P+1,0,O,P,0,O+2/3,P+1,0,O,P+1,0];L.set(C,w*b*G),z.set(S,y*b*G);const R=[G,G,G,G,G,G];D.set(R,x*b*G)}const V=new dr;V.setAttribute("position",new Zi(L,w)),V.setAttribute("uv",new Zi(z,y)),V.setAttribute("faceIndex",new Zi(D,x)),e.push(V),u>Qs&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function Nv(o,e,a){const s=new Kr(o,e,a);return s.texture.mapping=vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lc(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function lA(o,e,a){const s=new Float32Array(Wr),u=new ct(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Lv(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ov(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ip(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uA(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const g=d.mapping,p=g===ol||g===Xd,v=g===eo||g===no;if(p||v){let m=e.get(d);const S=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return a===null&&(a=new yp(o)),m=p?a.fromEquirectangular(d,m):a.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new yp(o)),m=p?a.fromEquirectangular(d):a.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let g=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&g++;return g===p}function f(d){const g=d.target;g.removeEventListener("dispose",f);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function cA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&hl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function fA(o,e,a,s){const u={},f=new WeakMap;function h(m){const S=m.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete u[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function d(m,S){return u[S.id]===!0||(S.addEventListener("dispose",h),u[S.id]=!0,a.memory.geometries++),S}function g(m){const S=m.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(m){const S=[],M=m.index,b=m.attributes.position;let w=0;if(M!==null){const L=M.array;w=M.version;for(let z=0,D=L.length;z<D;z+=3){const V=L[z+0],G=L[z+1],O=L[z+2];S.push(V,G,G,O,O,V)}}else if(b!==void 0){const L=b.array;w=b.version;for(let z=0,D=L.length/3-1;z<D;z+=3){const V=z+0,G=z+1,O=z+2;S.push(V,G,G,O,O,V)}}else return;const y=new(px(S)?Sx:xx)(S,1);y.version=w;const x=f.get(m);x&&e.remove(x),f.set(m,y)}function v(m){const S=f.get(m);if(S){const M=m.index;M!==null&&S.version<M.version&&p(m)}else p(m);return f.get(m)}return{get:d,update:g,getWireframeAttribute:v}}function hA(o,e,a){let s;function u(S){s=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function g(S,M){o.drawElements(s,M,f,S*h),a.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*h,b),a.update(M,s,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];a.update(y,s,1)}function m(S,M,b,w){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,w,0,b);let x=0;for(let L=0;L<b;L++)x+=M[L]*w[L];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function dA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function pA(o,e,a){const s=new WeakMap,u=new rn;function f(h,d,g){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==m){let R=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let V=d.attributes.position.count*D,G=1;V>e.maxTextureSize&&(G=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*G*4*m),P=new mx(O,V,G,m);P.type=Zn,P.needsUpdate=!0;const C=D*4;for(let B=0;B<m;B++){const Q=x[B],rt=L[B],lt=z[B],tt=V*G*4*B;for(let H=0;H<Q.count;H++){const Z=H*C;b===!0&&(u.fromBufferAttribute(Q,H),O[tt+Z+0]=u.x,O[tt+Z+1]=u.y,O[tt+Z+2]=u.z,O[tt+Z+3]=0),w===!0&&(u.fromBufferAttribute(rt,H),O[tt+Z+4]=u.x,O[tt+Z+5]=u.y,O[tt+Z+6]=u.z,O[tt+Z+7]=0),y===!0&&(u.fromBufferAttribute(lt,H),O[tt+Z+8]=u.x,O[tt+Z+9]=u.y,O[tt+Z+10]=u.z,O[tt+Z+11]=lt.itemSize===4?u.w:1)}}S={count:m,texture:P,size:new ze(V,G)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function mA(o,e,a,s){let u=new WeakMap;function f(g){const p=s.render.frame,v=g.geometry,m=e.get(g,v);if(u.get(m)!==p&&(e.update(m),u.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==p&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,p))),g.isSkinnedMesh){const S=g.skeleton;u.get(S)!==p&&(S.update(),u.set(S,p))}return m}function h(){u=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),a.remove(p.instanceMatrix),p.instanceColor!==null&&a.remove(p.instanceColor)}return{update:f,dispose:h}}const Cx=new Vn,zv=new bx(1,1),wx=new mx,Dx=new NE,Ux=new Ex,Pv=[],Iv=[],Bv=new Float32Array(16),Fv=new Float32Array(9),Hv=new Float32Array(4);function ro(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=Pv[u];if(f===void 0&&(f=new Float32Array(u),Pv[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function _n(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function vn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Sc(o,e){let a=Iv[e];a===void 0&&(a=new Int32Array(e),Iv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function gA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function _A(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2fv(this.addr,e),vn(a,e)}}function vA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(_n(a,e))return;o.uniform3fv(this.addr,e),vn(a,e)}}function xA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4fv(this.addr,e),vn(a,e)}}function SA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Hv.set(s),o.uniformMatrix2fv(this.addr,!1,Hv),vn(a,s)}}function yA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Fv.set(s),o.uniformMatrix3fv(this.addr,!1,Fv),vn(a,s)}}function MA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Bv.set(s),o.uniformMatrix4fv(this.addr,!1,Bv),vn(a,s)}}function EA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function TA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2iv(this.addr,e),vn(a,e)}}function bA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3iv(this.addr,e),vn(a,e)}}function AA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4iv(this.addr,e),vn(a,e)}}function RA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function CA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2uiv(this.addr,e),vn(a,e)}}function wA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3uiv(this.addr,e),vn(a,e)}}function DA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4uiv(this.addr,e),vn(a,e)}}function UA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(zv.compareFunction=dx,f=zv):f=Cx,a.setTexture2D(e||f,u)}function NA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Dx,u)}function LA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||Ux,u)}function OA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||wx,u)}function zA(o){switch(o){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return SA;case 35675:return yA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return bA;case 35669:case 35673:return AA;case 5125:return RA;case 36294:return CA;case 36295:return wA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return OA}}function PA(o,e){o.uniform1fv(this.addr,e)}function IA(o,e){const a=ro(e,this.size,2);o.uniform2fv(this.addr,a)}function BA(o,e){const a=ro(e,this.size,3);o.uniform3fv(this.addr,a)}function FA(o,e){const a=ro(e,this.size,4);o.uniform4fv(this.addr,a)}function HA(o,e){const a=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function GA(o,e){const a=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function VA(o,e){const a=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function XA(o,e){o.uniform1iv(this.addr,e)}function kA(o,e){o.uniform2iv(this.addr,e)}function qA(o,e){o.uniform3iv(this.addr,e)}function YA(o,e){o.uniform4iv(this.addr,e)}function WA(o,e){o.uniform1uiv(this.addr,e)}function jA(o,e){o.uniform2uiv(this.addr,e)}function ZA(o,e){o.uniform3uiv(this.addr,e)}function KA(o,e){o.uniform4uiv(this.addr,e)}function QA(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(e[h]||Cx,f[h])}function JA(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(e[h]||Dx,f[h])}function $A(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(e[h]||Ux,f[h])}function tR(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(e[h]||wx,f[h])}function eR(o){switch(o){case 5126:return PA;case 35664:return IA;case 35665:return BA;case 35666:return FA;case 35674:return HA;case 35675:return GA;case 35676:return VA;case 5124:case 35670:return XA;case 35667:case 35671:return kA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return WA;case 36294:return jA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return tR}}class nR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=zA(a.type)}}class iR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=eR(a.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,a[d.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function Gv(o,e){o.seq.push(e),o.map[e.id]=e}function rR(o,e,a){const s=o.name,u=s.length;for(Nd.lastIndex=0;;){const f=Nd.exec(s),h=Nd.lastIndex;let d=f[1];const g=f[2]==="]",p=f[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===u){Gv(a,p===void 0?new nR(d,o,e):new iR(d,o,e));break}else{let m=a.map[d];m===void 0&&(m=new aR(d),Gv(a,m)),a=m}}}class pc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),h=e.getUniformLocation(a,f.name);rR(f,h,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in a&&s.push(h)}return s}}function Vv(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const sR=37297;let oR=0;function lR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const Xv=new pe;function uR(o){De._getMatrix(Xv,De.workingColorSpace,o);const e=`mat3( ${Xv.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case mc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function kv(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+lR(o.getShaderSource(e),d)}else return f}function cR(o,e){const a=uR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function fR(o,e){let a;switch(e){case oE:a="Linear";break;case lE:a="Reinhard";break;case uE:a="Cineon";break;case nx:a="ACESFilmic";break;case fE:a="AgX";break;case hE:a="Neutral";break;case cE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const uc=new ct;function hR(){De.getLuminanceCoefficients(uc);const o=uc.x.toFixed(4),e=uc.y.toFixed(4),a=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function pR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function mR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function al(o){return o!==""}function qv(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(o){return o.replace(gR,vR)}const _R=new Map;function vR(o,e){let a=me[e];if(a===void 0){const s=_R.get(e);if(s!==void 0)a=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Mp(a)}const xR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(o){return o.replace(xR,SR)}function SR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function jv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ya&&(e="SHADOWMAP_TYPE_VSM"),e}function MR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ER(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===no&&(e="ENVMAP_MODE_REFRACTION"),e}function TR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case rE:e="ENVMAP_BLENDING_MIX";break;case sE:e="ENVMAP_BLENDING_ADD";break}return e}function bR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function AR(o,e,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const g=yR(a),p=MR(a),v=ER(a),m=TR(a),S=bR(a),M=dR(a),b=pR(f),w=u.createProgram();let y,x,L=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),x.length>0&&(x+=`
`)):(y=[jv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[jv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.envMap?"#define "+v:"",a.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==cr?"#define TONE_MAPPING":"",a.toneMapping!==cr?me.tonemapping_pars_fragment:"",a.toneMapping!==cr?fR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,cR("linearToOutputTexel",a.outputColorSpace),hR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(al).join(`
`)),h=Mp(h),h=qv(h,a),h=Yv(h,a),d=Mp(d),d=qv(d,a),d=Yv(d,a),h=Wv(h),d=Wv(d),a.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=L+y+h,D=L+x+d,V=Vv(u,u.VERTEX_SHADER,z),G=Vv(u,u.FRAGMENT_SHADER,D);u.attachShader(w,V),u.attachShader(w,G),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function O(B){if(o.debug.checkShaderErrors){const Q=u.getProgramInfoLog(w)||"",rt=u.getShaderInfoLog(V)||"",lt=u.getShaderInfoLog(G)||"",tt=Q.trim(),H=rt.trim(),Z=lt.trim();let q=!0,_t=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,V,G);else{const xt=kv(u,V,"vertex"),Bt=kv(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+xt+`
`+Bt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(H===""||Z==="")&&(_t=!1);_t&&(B.diagnostics={runnable:q,programLog:tt,vertexShader:{log:H,prefix:y},fragmentShader:{log:Z,prefix:x}})}u.deleteShader(V),u.deleteShader(G),P=new pc(u,w),C=mR(u,w)}let P;this.getUniforms=function(){return P===void 0&&O(this),P};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(w,sR)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=G,this}let RR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new wR(e),a.set(e,s)),s}}class wR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function DR(o,e,a,s,u,f,h){const d=new gx,g=new CR,p=new Set,v=[],m=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,Q,rt){const lt=Q.fog,tt=rt.geometry,H=C.isMeshStandardMaterial?Q.environment:null,Z=(C.isMeshStandardMaterial?a:e).get(C.envMap||H),q=Z&&Z.mapping===vc?Z.image.height:null,_t=b[C.type];C.precision!==null&&(M=u.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Bt=xt!==void 0?xt.length:0;let Kt=0;tt.morphAttributes.position!==void 0&&(Kt=1),tt.morphAttributes.normal!==void 0&&(Kt=2),tt.morphAttributes.color!==void 0&&(Kt=3);let oe,F,ht,$;if(_t){const ye=Yi[_t];oe=ye.vertexShader,F=ye.fragmentShader}else oe=C.vertexShader,F=C.fragmentShader,g.update(C),ht=g.getVertexShaderID(C),$=g.getFragmentShaderID(C);const at=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),nt=rt.isInstancedMesh===!0,yt=rt.isBatchedMesh===!0,Tt=!!C.map,Vt=!!C.matcap,I=!!Z,Pe=!!C.aoMap,se=!!C.lightMap,Jt=!!C.bumpMap,Lt=!!C.normalMap,ae=!!C.displacementMap,Ht=!!C.emissiveMap,le=!!C.metalnessMap,qe=!!C.roughnessMap,We=C.anisotropy>0,U=C.clearcoat>0,T=C.dispersion>0,st=C.iridescence>0,mt=C.sheen>0,Mt=C.transmission>0,dt=We&&!!C.anisotropyMap,kt=U&&!!C.clearcoatMap,wt=U&&!!C.clearcoatNormalMap,jt=U&&!!C.clearcoatRoughnessMap,Qt=st&&!!C.iridescenceMap,Rt=st&&!!C.iridescenceThicknessMap,Ot=mt&&!!C.sheenColorMap,ie=mt&&!!C.sheenRoughnessMap,Zt=!!C.specularMap,zt=!!C.specularColorMap,fe=!!C.specularIntensityMap,k=Mt&&!!C.transmissionMap,Ct=Mt&&!!C.thicknessMap,Ut=!!C.gradientMap,Xt=!!C.alphaMap,bt=C.alphaTest>0,St=!!C.alphaHash,Wt=!!C.extensions;let ce=cr;C.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ve={shaderID:_t,shaderType:C.type,shaderName:C.name,vertexShader:oe,fragmentShader:F,defines:C.defines,customVertexShaderID:ht,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:yt,batchingColor:yt&&rt._colorsTexture!==null,instancing:nt,instancingColor:nt&&rt.instanceColor!==null,instancingMorph:nt&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Zr,alphaToCoverage:!!C.alphaToCoverage,map:Tt,matcap:Vt,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:q,aoMap:Pe,lightMap:se,bumpMap:Jt,normalMap:Lt,displacementMap:S&&ae,emissiveMap:Ht,normalMapObjectSpace:Lt&&C.normalMapType===gE,normalMapTangentSpace:Lt&&C.normalMapType===hx,metalnessMap:le,roughnessMap:qe,anisotropy:We,anisotropyMap:dt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:wt,clearcoatRoughnessMap:jt,dispersion:T,iridescence:st,iridescenceMap:Qt,iridescenceThicknessMap:Rt,sheen:mt,sheenColorMap:Ot,sheenRoughnessMap:ie,specularMap:Zt,specularColorMap:zt,specularIntensityMap:fe,transmission:Mt,transmissionMap:k,thicknessMap:Ct,gradientMap:Ut,opaque:C.transparent===!1&&C.blending===Js&&C.alphaToCoverage===!1,alphaMap:Xt,alphaTest:bt,alphaHash:St,combine:C.combine,mapUv:Tt&&w(C.map.channel),aoMapUv:Pe&&w(C.aoMap.channel),lightMapUv:se&&w(C.lightMap.channel),bumpMapUv:Jt&&w(C.bumpMap.channel),normalMapUv:Lt&&w(C.normalMap.channel),displacementMapUv:ae&&w(C.displacementMap.channel),emissiveMapUv:Ht&&w(C.emissiveMap.channel),metalnessMapUv:le&&w(C.metalnessMap.channel),roughnessMapUv:qe&&w(C.roughnessMap.channel),anisotropyMapUv:dt&&w(C.anisotropyMap.channel),clearcoatMapUv:kt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:wt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ie&&w(C.sheenRoughnessMap.channel),specularMapUv:Zt&&w(C.specularMap.channel),specularColorMapUv:zt&&w(C.specularColorMap.channel),specularIntensityMapUv:fe&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Ct&&w(C.thicknessMap.channel),alphaMapUv:Xt&&w(C.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Lt||We),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!tt.attributes.uv&&(Tt||Xt),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Et,skinning:rt.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Kt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Tt&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===ke,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ma,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Wt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&C.extensions.multiDraw===!0||yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(L(R,C),z(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function L(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function z(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=b[C.type];let B;if(R){const Q=Yi[R];B=ZE.clone(Q.uniforms)}else B=C.uniforms;return B}function V(C,R){let B;for(let Q=0,rt=v.length;Q<rt;Q++){const lt=v[Q];if(lt.cacheKey===R){B=lt,++B.usedTimes;break}}return B===void 0&&(B=new AR(o,R,C,f),v.push(B)),B}function G(C){if(--C.usedTimes===0){const R=v.indexOf(C);v[R]=v[v.length-1],v.pop(),C.destroy()}}function O(C){g.remove(C)}function P(){g.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:V,releaseProgram:G,releaseShaderCache:O,programs:v,dispose:P}}function UR(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function NR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Zv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Kv(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function h(m,S,M,b,w,y){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:S,material:M,groupOrder:b,renderOrder:m.renderOrder,z:w,group:y},o[e]=x):(x.id=m.id,x.object=m,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=m.renderOrder,x.z=w,x.group=y),e++,x}function d(m,S,M,b,w,y){const x=h(m,S,M,b,w,y);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function g(m,S,M,b,w,y){const x=h(m,S,M,b,w,y);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function p(m,S){a.length>1&&a.sort(m||NR),s.length>1&&s.sort(S||Zv),u.length>1&&u.sort(S||Zv)}function v(){for(let m=e,S=o.length;m<S;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:g,finish:v,sort:p}}function LR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new Kv,o.set(s,[h])):u>=f.length?(h=new Kv,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function OR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new ct,color:new Oe};break;case"SpotLight":a={position:new ct,direction:new ct,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ct,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ct,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":a={color:new Oe,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=a,a}}}function zR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let PR=0;function IR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function BR(o){const e=new OR,a=zR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ct);const u=new ct,f=new on,h=new on;function d(p){let v=0,m=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,w=0,y=0,x=0,L=0,z=0,D=0,V=0,G=0,O=0;p.sort(IR);for(let C=0,R=p.length;C<R;C++){const B=p[C],Q=B.color,rt=B.intensity,lt=B.distance,tt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=Q.r*rt,m+=Q.g*rt,S+=Q.b*rt;else if(B.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(B.sh.coefficients[H],rt);O++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,q=a.get(B);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=B.shadow.matrix,L++}s.directional[M]=H,M++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(Q).multiplyScalar(rt),H.distance=lt,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,s.spot[w]=H;const Z=B.shadow;if(B.map&&(s.spotLightMap[V]=B.map,V++,Z.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[w]=Z.matrix,B.castShadow){const q=a.get(B);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[w]=q,s.spotShadowMap[w]=tt,D++}w++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(Q).multiplyScalar(rt),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=H,y++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,q=a.get(B);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=tt,s.pointShadowMatrix[b]=B.shadow.matrix,z++}s.point[b]=H,b++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(rt),H.groundColor.copy(B.groundColor).multiplyScalar(rt),s.hemi[x]=H,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=S;const P=s.hash;(P.directionalLength!==M||P.pointLength!==b||P.spotLength!==w||P.rectAreaLength!==y||P.hemiLength!==x||P.numDirectionalShadows!==L||P.numPointShadows!==z||P.numSpotShadows!==D||P.numSpotMaps!==V||P.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+V-G,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,P.directionalLength=M,P.pointLength=b,P.spotLength=w,P.rectAreaLength=y,P.hemiLength=x,P.numDirectionalShadows=L,P.numPointShadows=z,P.numSpotShadows=D,P.numSpotMaps=V,P.numLightProbes=O,s.version=PR++)}function g(p,v){let m=0,S=0,M=0,b=0,w=0;const y=v.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const z=p[x];if(z.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),m++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),h.identity(),f.copy(z.matrixWorld),f.premultiply(y),h.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:g,state:s}}function Qv(o){const e=new BR(o),a=[],s=[];function u(v){p.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){e.setup(a)}function g(v){e.setupView(a,v)}const p={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function FR(o){let e=new WeakMap;function a(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new Qv(o),e.set(u,[d])):f>=h.length?(d=new Qv(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:a,dispose:s}}const HR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VR(o,e,a){let s=new Lp;const u=new ze,f=new ze,h=new rn,d=new sT({depthPacking:mE}),g=new oT,p={},v=a.maxTextureSize,m={[fr]:Kn,[Kn]:fr,[Ma]:Ma},S=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:HR,fragmentShader:GR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new dr;b.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ji(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let x=this.type;this.render=function(G,O,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ur),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=x!==ya&&this.type===ya,lt=x===ya&&this.type!==ya;for(let tt=0,H=G.length;tt<H;tt++){const Z=G[tt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;u.copy(q.mapSize);const _t=q.getFrameExtents();if(u.multiply(_t),f.copy(q.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/_t.x),u.x=f.x*_t.x,q.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/_t.y),u.y=f.y*_t.y,q.mapSize.y=f.y)),q.map===null||rt===!0||lt===!0){const Bt=this.type!==ya?{minFilter:ui,magFilter:ui}:{};q.map!==null&&q.map.dispose(),q.map=new Kr(u.x,u.y,Bt),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const xt=q.getViewportCount();for(let Bt=0;Bt<xt;Bt++){const Kt=q.getViewport(Bt);h.set(f.x*Kt.x,f.y*Kt.y,f.x*Kt.z,f.y*Kt.w),Q.viewport(h),q.updateMatrices(Z,Bt),s=q.getFrustum(),D(O,P,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ya&&L(q,P),q.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(C,R,B)};function L(G,O){const P=e.update(w);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Kr(u.x,u.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,P,S,w,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,P,M,w,null)}function z(G,O,P,C){let R=null;const B=P.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)R=B;else if(R=P.isPointLight===!0?g:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=R.uuid,rt=O.uuid;let lt=p[Q];lt===void 0&&(lt={},p[Q]=lt);let tt=lt[rt];tt===void 0&&(tt=R.clone(),lt[rt]=tt,O.addEventListener("dispose",V)),R=tt}if(R.visible=O.visible,R.wireframe=O.wireframe,C===ya?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:m[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=P}return R}function D(G,O,P,C,R){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===ya)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,G.matrixWorld);const rt=e.update(G),lt=G.material;if(Array.isArray(lt)){const tt=rt.groups;for(let H=0,Z=tt.length;H<Z;H++){const q=tt[H],_t=lt[q.materialIndex];if(_t&&_t.visible){const xt=z(G,_t,C,R);G.onBeforeShadow(o,G,O,P,rt,xt,q),o.renderBufferDirect(P,null,rt,xt,G,q),G.onAfterShadow(o,G,O,P,rt,xt,q)}}}else if(lt.visible){const tt=z(G,lt,C,R);G.onBeforeShadow(o,G,O,P,rt,tt,null),o.renderBufferDirect(P,null,rt,tt,G,null),G.onAfterShadow(o,G,O,P,rt,tt,null)}}const Q=G.children;for(let rt=0,lt=Q.length;rt<lt;rt++)D(Q[rt],O,P,C,R)}function V(G){G.target.removeEventListener("dispose",V);for(const P in p){const C=p[P],R=G.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const XR={[Pd]:Id,[Bd]:Gd,[Fd]:Vd,[to]:Hd,[Id]:Pd,[Gd]:Bd,[Vd]:Fd,[Hd]:to};function kR(o,e){function a(){let k=!1;const Ct=new rn;let Ut=null;const Xt=new rn(0,0,0,0);return{setMask:function(bt){Ut!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Ut=bt)},setLocked:function(bt){k=bt},setClear:function(bt,St,Wt,ce,Ve){Ve===!0&&(bt*=ce,St*=ce,Wt*=ce),Ct.set(bt,St,Wt,ce),Xt.equals(Ct)===!1&&(o.clearColor(bt,St,Wt,ce),Xt.copy(Ct))},reset:function(){k=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let k=!1,Ct=!1,Ut=null,Xt=null,bt=null;return{setReversed:function(St){if(Ct!==St){const Wt=e.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ct=St;const ce=bt;bt=null,this.setClear(ce)}},getReversed:function(){return Ct},setTest:function(St){St?at(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(St){Ut!==St&&!k&&(o.depthMask(St),Ut=St)},setFunc:function(St){if(Ct&&(St=XR[St]),Xt!==St){switch(St){case Pd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case to:o.depthFunc(o.LEQUAL);break;case Fd:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case Gd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=St}},setLocked:function(St){k=St},setClear:function(St){bt!==St&&(Ct&&(St=1-St),o.clearDepth(St),bt=St)},reset:function(){k=!1,Ut=null,Xt=null,bt=null,Ct=!1}}}function u(){let k=!1,Ct=null,Ut=null,Xt=null,bt=null,St=null,Wt=null,ce=null,Ve=null;return{setTest:function(ye){k||(ye?at(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ye){Ct!==ye&&!k&&(o.stencilMask(ye),Ct=ye)},setFunc:function(ye,$e,pn){(Ut!==ye||Xt!==$e||bt!==pn)&&(o.stencilFunc(ye,$e,pn),Ut=ye,Xt=$e,bt=pn)},setOp:function(ye,$e,pn){(St!==ye||Wt!==$e||ce!==pn)&&(o.stencilOp(ye,$e,pn),St=ye,Wt=$e,ce=pn)},setLocked:function(ye){k=ye},setClear:function(ye){Ve!==ye&&(o.clearStencil(ye),Ve=ye)},reset:function(){k=!1,Ct=null,Ut=null,Xt=null,bt=null,St=null,Wt=null,ce=null,Ve=null}}}const f=new a,h=new s,d=new u,g=new WeakMap,p=new WeakMap;let v={},m={},S=new WeakMap,M=[],b=null,w=!1,y=null,x=null,L=null,z=null,D=null,V=null,G=null,O=new Oe(0,0,0),P=0,C=!1,R=null,B=null,Q=null,rt=null,lt=null;const tt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Z>=2);let _t=null,xt={};const Bt=o.getParameter(o.SCISSOR_BOX),Kt=o.getParameter(o.VIEWPORT),oe=new rn().fromArray(Bt),F=new rn().fromArray(Kt);function ht(k,Ct,Ut,Xt){const bt=new Uint8Array(4),St=o.createTexture();o.bindTexture(k,St),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ut;Wt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ct+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return St}const $={};$[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(o.DEPTH_TEST),h.setFunc(to),Jt(!1),Lt(ev),at(o.CULL_FACE),Pe(ur);function at(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Et(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function nt(k,Ct){return m[k]!==Ct?(o.bindFramebuffer(k,Ct),m[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function yt(k,Ct){let Ut=M,Xt=!1;if(k){Ut=S.get(Ct),Ut===void 0&&(Ut=[],S.set(Ct,Ut));const bt=k.textures;if(Ut.length!==bt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Wt=bt.length;St<Wt;St++)Ut[St]=o.COLOR_ATTACHMENT0+St;Ut.length=bt.length,Xt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ut)}function Tt(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Vt={[Yr]:o.FUNC_ADD,[VM]:o.FUNC_SUBTRACT,[XM]:o.FUNC_REVERSE_SUBTRACT};Vt[kM]=o.MIN,Vt[qM]=o.MAX;const I={[YM]:o.ZERO,[WM]:o.ONE,[jM]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[tE]:o.SRC_ALPHA_SATURATE,[JM]:o.DST_COLOR,[KM]:o.DST_ALPHA,[ZM]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[$M]:o.ONE_MINUS_DST_COLOR,[QM]:o.ONE_MINUS_DST_ALPHA,[eE]:o.CONSTANT_COLOR,[nE]:o.ONE_MINUS_CONSTANT_COLOR,[iE]:o.CONSTANT_ALPHA,[aE]:o.ONE_MINUS_CONSTANT_ALPHA};function Pe(k,Ct,Ut,Xt,bt,St,Wt,ce,Ve,ye){if(k===ur){w===!0&&(Et(o.BLEND),w=!1);return}if(w===!1&&(at(o.BLEND),w=!0),k!==GM){if(k!==y||ye!==C){if((x!==Yr||D!==Yr)&&(o.blendEquation(o.FUNC_ADD),x=Yr,D=Yr),ye)switch(k){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.ONE,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case iv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,z=null,V=null,G=null,O.set(0,0,0),P=0,y=k,C=ye}return}bt=bt||Ct,St=St||Ut,Wt=Wt||Xt,(Ct!==x||bt!==D)&&(o.blendEquationSeparate(Vt[Ct],Vt[bt]),x=Ct,D=bt),(Ut!==L||Xt!==z||St!==V||Wt!==G)&&(o.blendFuncSeparate(I[Ut],I[Xt],I[St],I[Wt]),L=Ut,z=Xt,V=St,G=Wt),(ce.equals(O)===!1||Ve!==P)&&(o.blendColor(ce.r,ce.g,ce.b,Ve),O.copy(ce),P=Ve),y=k,C=!1}function se(k,Ct){k.side===Ma?Et(o.CULL_FACE):at(o.CULL_FACE);let Ut=k.side===Kn;Ct&&(Ut=!Ut),Jt(Ut),k.blending===Js&&k.transparent===!1?Pe(ur):Pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const Xt=k.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function Lt(k){k!==BM?(at(o.CULL_FACE),k!==B&&(k===ev?o.cullFace(o.BACK):k===FM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),B=k}function ae(k){k!==Q&&(H&&o.lineWidth(k),Q=k)}function Ht(k,Ct,Ut){k?(at(o.POLYGON_OFFSET_FILL),(rt!==Ct||lt!==Ut)&&(o.polygonOffset(Ct,Ut),rt=Ct,lt=Ut)):Et(o.POLYGON_OFFSET_FILL)}function le(k){k?at(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function qe(k){k===void 0&&(k=o.TEXTURE0+tt-1),_t!==k&&(o.activeTexture(k),_t=k)}function We(k,Ct,Ut){Ut===void 0&&(_t===null?Ut=o.TEXTURE0+tt-1:Ut=_t);let Xt=xt[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},xt[Ut]=Xt),(Xt.type!==k||Xt.texture!==Ct)&&(_t!==Ut&&(o.activeTexture(Ut),_t=Ut),o.bindTexture(k,Ct||$[k]),Xt.type=k,Xt.texture=Ct)}function U(){const k=xt[_t];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){oe.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function ie(k){F.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function Zt(k,Ct){let Ut=p.get(Ct);Ut===void 0&&(Ut=new WeakMap,p.set(Ct,Ut));let Xt=Ut.get(k);Xt===void 0&&(Xt=o.getUniformBlockIndex(Ct,k.name),Ut.set(k,Xt))}function zt(k,Ct){const Xt=p.get(Ct).get(k);g.get(Ct)!==Xt&&(o.uniformBlockBinding(Ct,Xt,k.__bindingPointIndex),g.set(Ct,Xt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_t=null,xt={},m={},S=new WeakMap,M=[],b=null,w=!1,y=null,x=null,L=null,z=null,D=null,V=null,G=null,O=new Oe(0,0,0),P=0,C=!1,R=null,B=null,Q=null,rt=null,lt=null,oe.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:at,disable:Et,bindFramebuffer:nt,drawBuffers:yt,useProgram:Tt,setBlending:Pe,setMaterial:se,setFlipSided:Jt,setCullFace:Lt,setLineWidth:ae,setPolygonOffset:Ht,setScissorTest:le,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:st,texImage2D:Qt,texImage3D:Rt,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:wt,texStorage3D:jt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:kt,scissor:Ot,viewport:ie,reset:fe}}function qR(o,e,a,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,v=new WeakMap;let m;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):_c("canvas")}function w(U,T,st){let mt=1;const Mt=We(U);if((Mt.width>st||Mt.height>st)&&(mt=st/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(mt*Mt.width),kt=Math.floor(mt*Mt.height);m===void 0&&(m=b(dt,kt));const wt=T?b(dt,kt):m;return wt.width=dt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+dt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,st,mt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===o.RED&&(st===o.FLOAT&&(dt=o.R32F),st===o.HALF_FLOAT&&(dt=o.R16F),st===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(dt=o.R8UI),st===o.UNSIGNED_SHORT&&(dt=o.R16UI),st===o.UNSIGNED_INT&&(dt=o.R32UI),st===o.BYTE&&(dt=o.R8I),st===o.SHORT&&(dt=o.R16I),st===o.INT&&(dt=o.R32I)),T===o.RG&&(st===o.FLOAT&&(dt=o.RG32F),st===o.HALF_FLOAT&&(dt=o.RG16F),st===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(dt=o.RG8UI),st===o.UNSIGNED_SHORT&&(dt=o.RG16UI),st===o.UNSIGNED_INT&&(dt=o.RG32UI),st===o.BYTE&&(dt=o.RG8I),st===o.SHORT&&(dt=o.RG16I),st===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),st===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),st===o.UNSIGNED_INT&&(dt=o.RGB32UI),st===o.BYTE&&(dt=o.RGB8I),st===o.SHORT&&(dt=o.RGB16I),st===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),st===o.UNSIGNED_INT&&(dt=o.RGBA32UI),st===o.BYTE&&(dt=o.RGBA8I),st===o.SHORT&&(dt=o.RGBA16I),st===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),T===o.RGBA){const kt=Mt?mc:De.getTransfer(mt);st===o.FLOAT&&(dt=o.RGBA32F),st===o.HALF_FLOAT&&(dt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(dt=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,T){let st;return U?T===null||T===jr||T===ul?st=o.DEPTH24_STENCIL8:T===Zn?st=o.DEPTH32F_STENCIL8:T===ll&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===ul?st=o.DEPTH_COMPONENT24:T===Zn?st=o.DEPTH_COMPONENT32F:T===ll&&(st=o.DEPTH_COMPONENT16),st}function V(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ui&&U.minFilter!==wn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),P(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T)}function P(U){const T=s.get(U);if(T.__webglInit===void 0)return;const st=U.source,mt=S.get(st);if(mt){const Mt=mt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(U),Object.keys(mt).length===0&&S.delete(st)}s.remove(U)}function C(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const st=U.source,mt=S.get(st);delete mt[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Mt=0;Mt<T.__webglFramebuffer[mt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const st=U.textures;for(let mt=0,Mt=st.length;mt<Mt;mt++){const dt=s.get(st[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(st[mt])}s.remove(U)}let B=0;function Q(){B=0}function rt(){const U=B;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),B+=1,U}function lt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function tt(U,T){const st=s.get(U);if(U.isVideoTexture&&le(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&st.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(st,U,T);return}}else U.isExternalTexture&&(st.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+T)}function H(U,T){const st=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){$(st,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const st=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){$(st,U,T);return}a.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+T)}function q(U,T){const st=s.get(U);if(U.version>0&&st.__version!==U.version){at(st,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+T)}const _t={[kd]:o.REPEAT,[Ta]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},xt={[ui]:o.NEAREST,[dE]:o.NEAREST_MIPMAP_NEAREST,[Gu]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[lr]:o.LINEAR_MIPMAP_LINEAR},Bt={[_E]:o.NEVER,[EE]:o.ALWAYS,[vE]:o.LESS,[dx]:o.LEQUAL,[xE]:o.EQUAL,[ME]:o.GEQUAL,[SE]:o.GREATER,[yE]:o.NOTEQUAL};function Kt(U,T){if(T.type===Zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wn||T.magFilter===ed||T.magFilter===Gu||T.magFilter===lr||T.minFilter===wn||T.minFilter===ed||T.minFilter===Gu||T.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Bt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==Gu&&T.minFilter!==lr||T.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function oe(U,T){let st=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const mt=T.source;let Mt=S.get(mt);Mt===void 0&&(Mt={},S.set(mt,Mt));const dt=lt(T);if(dt!==U.__cacheKey){Mt[dt]===void 0&&(Mt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Mt[dt].usedTimes++;const kt=Mt[U.__cacheKey];kt!==void 0&&(Mt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&C(T)),U.__cacheKey=dt,U.__webglTexture=Mt[dt].texture}return st}function F(U,T,st){return Math.floor(Math.floor(U/st)/T)}function ht(U,T,st,mt){const dt=U.updateRanges;if(dt.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,st,mt,T.data);else{dt.sort((Rt,Ot)=>Rt.start-Ot.start);let kt=0;for(let Rt=1;Rt<dt.length;Rt++){const Ot=dt[kt],ie=dt[Rt],Zt=Ot.start+Ot.count,zt=F(ie.start,T.width,4),fe=F(Ot.start,T.width,4);ie.start<=Zt+1&&zt===fe&&F(ie.start+ie.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ie.start+ie.count-Ot.start):(++kt,dt[kt]=ie)}dt.length=kt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Ot=dt.length;Rt<Ot;Rt++){const ie=dt[Rt],Zt=Math.floor(ie.start/4),zt=Math.ceil(ie.count/4),fe=Zt%T.width,k=Math.floor(Zt/T.width),Ct=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),a.texSubImage2D(o.TEXTURE_2D,0,fe,k,Ct,Ut,st,mt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function $(U,T,st){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const Mt=oe(U,T),dt=T.source;a.bindTexture(mt,U.__webglTexture,o.TEXTURE0+st);const kt=s.get(dt);if(dt.version!==kt.__version||Mt===!0){a.activeTexture(o.TEXTURE0+st);const wt=De.getPrimaries(De.workingColorSpace),jt=T.colorSpace===or?null:De.getPrimaries(T.colorSpace),Qt=T.colorSpace===or||wt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Rt=w(T.image,!1,u.maxTextureSize);Rt=qe(T,Rt);const Ot=f.convert(T.format,T.colorSpace),ie=f.convert(T.type);let Zt=z(T.internalFormat,Ot,ie,T.colorSpace,T.isVideoTexture);Kt(mt,T);let zt;const fe=T.mipmaps,k=T.isVideoTexture!==!0,Ct=kt.__version===void 0||Mt===!0,Ut=dt.dataReady,Xt=V(T,Rt);if(T.isDepthTexture)Zt=D(T.format===fl,T.type),Ct&&(k?a.texStorage2D(o.TEXTURE_2D,1,Zt,Rt.width,Rt.height):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ie,null));else if(T.isDataTexture)if(fe.length>0){k&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,fe[0].width,fe[0].height);for(let bt=0,St=fe.length;bt<St;bt++)zt=fe[bt],k?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,Ot,ie,zt.data);T.generateMipmaps=!1}else k?(Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height),Ut&&ht(T,Rt,Ot,ie)):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ie,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,fe[0].width,fe[0].height,Rt.depth);for(let bt=0,St=fe.length;bt<St;bt++)if(zt=fe[bt],T.format!==Mi)if(Ot!==null)if(k){if(Ut)if(T.layerUpdates.size>0){const Wt=Cv(zt.width,zt.height,T.format,T.type);for(const ce of T.layerUpdates){const Ve=zt.data.subarray(ce*Wt/zt.data.BYTES_PER_ELEMENT,(ce+1)*Wt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ce,zt.width,zt.height,1,Ot,Ve)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Rt.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,zt.width,zt.height,Rt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Rt.depth,Ot,ie,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,zt.width,zt.height,Rt.depth,0,Ot,ie,zt.data)}else{k&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,fe[0].width,fe[0].height);for(let bt=0,St=fe.length;bt<St;bt++)zt=fe[bt],T.format!==Mi?Ot!==null?k?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,Ot,ie,zt.data)}else if(T.isDataArrayTexture)if(k){if(Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut)if(T.layerUpdates.size>0){const bt=Cv(Rt.width,Rt.height,T.format,T.type);for(const St of T.layerUpdates){const Wt=Rt.data.subarray(St*bt/Rt.data.BYTES_PER_ELEMENT,(St+1)*bt/Rt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Rt.width,Rt.height,1,Ot,ie,Wt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ie,Rt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ie,Rt.data);else if(T.isData3DTexture)k?(Ct&&a.texStorage3D(o.TEXTURE_3D,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ie,Rt.data)):a.texImage3D(o.TEXTURE_3D,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ie,Rt.data);else if(T.isFramebufferTexture){if(Ct)if(k)a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height);else{let bt=Rt.width,St=Rt.height;for(let Wt=0;Wt<Xt;Wt++)a.texImage2D(o.TEXTURE_2D,Wt,Zt,bt,St,0,Ot,ie,null),bt>>=1,St>>=1}}else if(fe.length>0){if(k&&Ct){const bt=We(fe[0]);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,bt.width,bt.height)}for(let bt=0,St=fe.length;bt<St;bt++)zt=fe[bt],k?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot,ie,zt):a.texImage2D(o.TEXTURE_2D,bt,Zt,Ot,ie,zt);T.generateMipmaps=!1}else if(k){if(Ct){const bt=We(Rt);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,bt.width,bt.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ie,Rt)}else a.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ie,Rt);y(T)&&x(mt),kt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function at(U,T,st){if(T.image.length!==6)return;const mt=oe(U,T),Mt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+st);const dt=s.get(Mt);if(Mt.version!==dt.__version||mt===!0){a.activeTexture(o.TEXTURE0+st);const kt=De.getPrimaries(De.workingColorSpace),wt=T.colorSpace===or?null:De.getPrimaries(T.colorSpace),jt=T.colorSpace===or||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let St=0;St<6;St++)!Qt&&!Rt?Ot[St]=w(T.image[St],!0,u.maxCubemapSize):Ot[St]=Rt?T.image[St].image:T.image[St],Ot[St]=qe(T,Ot[St]);const ie=Ot[0],Zt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),fe=z(T.internalFormat,Zt,zt,T.colorSpace),k=T.isVideoTexture!==!0,Ct=dt.__version===void 0||mt===!0,Ut=Mt.dataReady;let Xt=V(T,ie);Kt(o.TEXTURE_CUBE_MAP,T);let bt;if(Qt){k&&Ct&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,ie.width,ie.height);for(let St=0;St<6;St++){bt=Ot[St].mipmaps;for(let Wt=0;Wt<bt.length;Wt++){const ce=bt[Wt];T.format!==Mi?Zt!==null?k?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,ce.width,ce.height,Zt,ce.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,ce.width,ce.height,Zt,zt,ce.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,fe,ce.width,ce.height,0,Zt,zt,ce.data)}}}else{if(bt=T.mipmaps,k&&Ct){bt.length>0&&Xt++;const St=We(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(Rt){k?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ot[St].width,Ot[St].height,Zt,zt,Ot[St].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Ot[St].width,Ot[St].height,0,Zt,zt,Ot[St].data);for(let Wt=0;Wt<bt.length;Wt++){const Ve=bt[Wt].image[St].image;k?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Ve.width,Ve.height,Zt,zt,Ve.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,fe,Ve.width,Ve.height,0,Zt,zt,Ve.data)}}else{k?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Zt,zt,Ot[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Zt,zt,Ot[St]);for(let Wt=0;Wt<bt.length;Wt++){const ce=bt[Wt];k?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Zt,zt,ce.image[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,fe,Zt,zt,ce.image[St])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),dt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,st,mt,Mt,dt){const kt=f.convert(st.format,st.colorSpace),wt=f.convert(st.type),jt=z(st.internalFormat,kt,wt,st.colorSpace),Qt=s.get(T),Rt=s.get(st);if(Rt.__renderTarget=T,!Qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>dt),ie=Math.max(1,T.height>>dt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?a.texImage3D(Mt,dt,jt,Ot,ie,T.depth,0,kt,wt,null):a.texImage2D(Mt,dt,jt,Ot,ie,0,kt,wt,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Mt,Rt.__webglTexture,0,ae(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Mt,Rt.__webglTexture,dt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(U,T,st){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const mt=T.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,dt=D(T.stencilBuffer,Mt),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ae(T);Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,T.width,T.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const mt=T.textures;for(let Mt=0;Mt<mt.length;Mt++){const dt=mt[Mt],kt=f.convert(dt.format,dt.colorSpace),wt=f.convert(dt.type),jt=z(dt.internalFormat,kt,wt,dt.colorSpace),Qt=ae(T);st&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,jt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function yt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt(T.depthTexture,0);const Mt=mt.__webglTexture,dt=ae(T);if(T.depthTexture.format===cl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===fl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Tt(U){const T=s.get(U),st=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=mt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?yt(T.__webglFramebuffer[0],U):yt(T.__webglFramebuffer,U)}else if(st){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),nt(T.__webglDepthbuffer[mt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),nt(T.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,T,st){const mt=s.get(U);T!==void 0&&Et(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&Tt(U)}function I(U){const T=U.texture,st=s.get(U),mt=s.get(T);U.addEventListener("dispose",O);const Mt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=Mt.length>1;if(kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),dt){st.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[wt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)st.__webglFramebuffer[wt][jt]=o.createFramebuffer()}else st.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)st.__webglFramebuffer[wt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,jt=Mt.length;wt<jt;wt++){const Qt=s.get(Mt[wt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const jt=Mt[wt];st.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[wt]);const Qt=f.convert(jt.format,jt.colorSpace),Rt=f.convert(jt.type),Ot=z(jt.internalFormat,Qt,Rt,jt.colorSpace,U.isXRRenderTarget===!0),ie=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,st.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),nt(st.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),Kt(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Et(st.__webglFramebuffer[wt][jt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,jt);else Et(st.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let wt=0,jt=Mt.length;wt<jt;wt++){const Qt=Mt[wt],Rt=s.get(Qt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,Rt.__webglTexture),Kt(Ot,Qt),Et(st.__webglFramebuffer,U,Qt,o.COLOR_ATTACHMENT0+wt,Ot,0),y(Qt)&&x(Ot)}a.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(wt,mt.__webglTexture),Kt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Et(st.__webglFramebuffer[jt],U,T,o.COLOR_ATTACHMENT0,wt,jt);else Et(st.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&x(wt),a.unbindTexture()}U.depthBuffer&&Tt(U)}function Pe(U){const T=U.textures;for(let st=0,mt=T.length;st<mt;st++){const Mt=T[st];if(y(Mt)){const dt=L(U),kt=s.get(Mt).__webglTexture;a.bindTexture(dt,kt),x(dt),a.unbindTexture()}}}const se=[],Jt=[];function Lt(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,st=U.width,mt=U.height;let Mt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),wt=T.length>1;if(wt)for(let Qt=0;Qt<T.length;Qt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const Rt=s.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,st,mt,0,0,st,mt,Mt,o.NEAREST),g===!0&&(se.length=0,Jt.length=0,se.push(o.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(dt),Jt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Qt=0;Qt<T.length;Qt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const Rt=s.get(T[Qt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Rt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(U){return Math.min(u.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const st=U.colorSpace,mt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||st!==Zr&&st!==or&&(De.getTransfer(st)===ke?(mt!==Mi||Mt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=tt,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ht}function YR(o,e){function a(s,u=or){let f;const h=De.getTransfer(u);if(s===Qi)return o.UNSIGNED_BYTE;if(s===Ap)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===sx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ox)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ax)return o.BYTE;if(s===rx)return o.SHORT;if(s===ll)return o.UNSIGNED_SHORT;if(s===bp)return o.INT;if(s===jr)return o.UNSIGNED_INT;if(s===Zn)return o.FLOAT;if(s===ba)return o.HALF_FLOAT;if(s===lx)return o.ALPHA;if(s===ux)return o.RGB;if(s===Mi)return o.RGBA;if(s===cl)return o.DEPTH_COMPONENT;if(s===fl)return o.DEPTH_STENCIL;if(s===cx)return o.RED;if(s===Cp)return o.RED_INTEGER;if(s===fx)return o.RG;if(s===wp)return o.RG_INTEGER;if(s===Dp)return o.RGBA_INTEGER;if(s===cc||s===fc||s===hc||s===dc)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===cc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===cc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===Wd||s===jd||s===Zd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Yd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Qd||s===Jd)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Kd||s===Qd)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Jd)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===$d)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dp||s===pp||s===mp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===dp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gp||s===_p||s===vp||s===xp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===gp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===_p)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new Ax(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new hr({vertexShader:WR,fragmentShader:jR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ji(new xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KR extends ao{constructor(e,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",g=1,p=null,v=null,m=null,S=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new ZR,x={},L=a.getContextAttributes();let z=null,D=null;const V=[],G=[],O=new ze;let P=null;const C=new Ni;C.viewport=new rn;const R=new Ni;R.viewport=new rn;const B=[C,R],Q=new _T;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=V[$];return at===void 0&&(at=new Td,V[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=V[$];return at===void 0&&(at=new Td,V[$]=at),at.getGripSpace()},this.getHand=function($){let at=V[$];return at===void 0&&(at=new Td,V[$]=at),at.getHandSpace()};function tt($){const at=G.indexOf($.inputSource);if(at===-1)return;const Et=V[at];Et!==void 0&&(Et.update($.inputSource,$.frame,p||h),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){u.removeEventListener("select",tt),u.removeEventListener("selectstart",tt),u.removeEventListener("selectend",tt),u.removeEventListener("squeeze",tt),u.removeEventListener("squeezestart",tt),u.removeEventListener("squeezeend",tt),u.removeEventListener("end",H),u.removeEventListener("inputsourceschange",Z);for(let $=0;$<V.length;$++){const at=G[$];at!==null&&(G[$]=null,V[$].disconnect(at))}rt=null,lt=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(z),M=null,S=null,m=null,u=null,D=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(u,a)),m},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function($){if(u=$,u!==null){if(z=e.getRenderTarget(),u.addEventListener("select",tt),u.addEventListener("selectstart",tt),u.addEventListener("selectend",tt),u.addEventListener("squeeze",tt),u.addEventListener("squeezestart",tt),u.addEventListener("squeezeend",tt),u.addEventListener("end",H),u.addEventListener("inputsourceschange",Z),L.xrCompatible!==!0&&await a.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,nt=null,yt=null;L.depth&&(yt=L.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Et=L.stencil?fl:cl,nt=L.stencil?ul:jr);const Tt={colorFormat:a.RGBA8,depthFormat:yt,scaleFactor:f};m=this.getBinding(),S=m.createProjectionLayer(Tt),u.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Kr(S.textureWidth,S.textureHeight,{format:Mi,type:Qi,depthTexture:new bx(S.textureWidth,S.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Et),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Kr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await u.requestReferenceSpace(d),ht.setContext(u),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z($){for(let at=0;at<$.removed.length;at++){const Et=$.removed[at],nt=G.indexOf(Et);nt>=0&&(G[nt]=null,V[nt].disconnect(Et))}for(let at=0;at<$.added.length;at++){const Et=$.added[at];let nt=G.indexOf(Et);if(nt===-1){for(let Tt=0;Tt<V.length;Tt++)if(Tt>=G.length){G.push(Et),nt=Tt;break}else if(G[Tt]===null){G[Tt]=Et,nt=Tt;break}if(nt===-1)break}const yt=V[nt];yt&&yt.connect(Et)}}const q=new ct,_t=new ct;function xt($,at,Et){q.setFromMatrixPosition(at.matrixWorld),_t.setFromMatrixPosition(Et.matrixWorld);const nt=q.distanceTo(_t),yt=at.projectionMatrix.elements,Tt=Et.projectionMatrix.elements,Vt=yt[14]/(yt[10]-1),I=yt[14]/(yt[10]+1),Pe=(yt[9]+1)/yt[5],se=(yt[9]-1)/yt[5],Jt=(yt[8]-1)/yt[0],Lt=(Tt[8]+1)/Tt[0],ae=Vt*Jt,Ht=Vt*Lt,le=nt/(-Jt+Lt),qe=le*-Jt;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const We=Vt+le,U=I+le,T=ae-qe,st=Ht+(nt-qe),mt=Pe*I/U*We,Mt=se*I/U*We;$.projectionMatrix.makePerspective(T,st,mt,Mt,We,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Bt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(u===null)return;let at=$.near,Et=$.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),Q.near=R.near=C.near=at,Q.far=R.far=C.far=Et,(rt!==Q.near||lt!==Q.far)&&(u.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,lt=Q.far),Q.layers.mask=$.layers.mask|6,C.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const nt=$.parent,yt=Q.cameras;Bt(Q,nt);for(let Tt=0;Tt<yt.length;Tt++)Bt(yt[Tt],nt);yt.length===2?xt(Q,C,R):Q.projectionMatrix.copy(C.projectionMatrix),Kt($,Q,nt)};function Kt($,at,Et){Et===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return g},this.setFoveation=function($){g=$,S!==null&&(S.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function($){return x[$]};let oe=null;function F($,at){if(v=at.getViewerPose(p||h),b=at,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let nt=!1;Et.length!==Q.cameras.length&&(Q.cameras.length=0,nt=!0);for(let I=0;I<Et.length;I++){const Pe=Et[I];let se=null;if(M!==null)se=M.getViewport(Pe);else{const Lt=m.getViewSubImage(S,Pe);se=Lt.viewport,I===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let Jt=B[I];Jt===void 0&&(Jt=new Ni,Jt.layers.enable(I),Jt.viewport=new rn,B[I]=Jt),Jt.matrix.fromArray(Pe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Pe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(se.x,se.y,se.width,se.height),I===0&&(Q.matrix.copy(Jt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),nt===!0&&Q.cameras.push(Jt)}const yt=u.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){m=s.getBinding();const I=m.getDepthInformation(Et[0]);I&&I.isValid&&I.texture&&y.init(I,u.renderState)}if(yt&&yt.includes("camera-access")&&w){e.state.unbindTexture(),m=s.getBinding();for(let I=0;I<Et.length;I++){const Pe=Et[I].camera;if(Pe){let se=x[Pe];se||(se=new Ax,x[Pe]=se);const Jt=m.getCameraImage(Pe);se.sourceTexture=Jt}}}}for(let Et=0;Et<V.length;Et++){const nt=G[Et],yt=V[Et];nt!==null&&yt!==void 0&&yt.update(nt,at,p||h)}oe&&oe($,at),at.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:at}),b=null}const ht=new Rx;ht.setAnimationLoop(F),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Xr=new Ji,QR=new on;function JR(o,e){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,yx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function u(y,x,L,z,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),m(y,x)):x.isMeshPhongMaterial?(f(y,x),v(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,D)):x.isMeshMatcapMaterial?(f(y,x),b(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),w(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?g(y,x,L,z):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),z=L.envMap,D=L.envMapRotation;z&&(y.envMap.value=z,Xr.copy(D),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(QR.makeRotationFromEuler(Xr)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function g(y,x,L,z){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=z*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function $R(o,e,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,z){const D=z.program;s.uniformBlockBinding(L,D)}function p(L,z){let D=u[L.id];D===void 0&&(b(L),D=v(L),u[L.id]=D,L.addEventListener("dispose",y));const V=z.program;s.updateUBOMapping(L,V);const G=e.render.frame;f[L.id]!==G&&(S(L),f[L.id]=G)}function v(L){const z=m();L.__bindingPointIndex=z;const D=o.createBuffer(),V=L.__size,G=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function m(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const z=u[L.id],D=L.uniforms,V=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,O=D.length;G<O;G++){const P=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,R=P.length;C<R;C++){const B=P[C];if(M(B,G,C,V)===!0){const Q=B.__offset,rt=Array.isArray(B.value)?B.value:[B.value];let lt=0;for(let tt=0;tt<rt.length;tt++){const H=rt[tt],Z=w(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,Q+lt,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,lt),lt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,z,D,V){const G=L.value,O=z+"_"+D;if(V[O]===void 0)return typeof G=="number"||typeof G=="boolean"?V[O]=G:V[O]=G.clone(),!0;{const P=V[O];if(typeof G=="number"||typeof G=="boolean"){if(P!==G)return V[O]=G,!0}else if(P.equals(G)===!1)return P.copy(G),!0}return!1}function b(L){const z=L.uniforms;let D=0;const V=16;for(let O=0,P=z.length;O<P;O++){const C=Array.isArray(z[O])?z[O]:[z[O]];for(let R=0,B=C.length;R<B;R++){const Q=C[R],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let lt=0,tt=rt.length;lt<tt;lt++){const H=rt[lt],Z=w(H),q=D%V,_t=q%Z.boundary,xt=q+_t;D+=_t,xt!==0&&V-xt<Z.storage&&(D+=V-xt),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=Z.storage}}}const G=D%V;return G>0&&(D+=V-G),L.__size=D,L.__cache={},this}function w(L){const z={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(z.boundary=4,z.storage=4):L.isVector2?(z.boundary=8,z.storage=8):L.isVector3||L.isColor?(z.boundary=16,z.storage=12):L.isVector4?(z.boundary=16,z.storage=16):L.isMatrix3?(z.boundary=48,z.storage=48):L.isMatrix4?(z.boundary=64,z.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),z}function y(L){const z=L.target;z.removeEventListener("dispose",y);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function x(){for(const L in u)o.deleteBuffer(u[L]);h=[],u={},f={}}return{bind:g,update:p,dispose:x}}class t2{constructor(e={}){const{canvas:a=bE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=yi;let G=0,O=0,P=null,C=-1,R=null;const B=new rn,Q=new rn;let rt=null;const lt=new Oe(0);let tt=0,H=a.width,Z=a.height,q=1,_t=null,xt=null;const Bt=new rn(0,0,H,Z),Kt=new rn(0,0,H,Z);let oe=!1;const F=new Lp;let ht=!1,$=!1;const at=new on,Et=new ct,nt=new rn,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Vt(){return P===null?q:1}let I=s;function Pe(A,K){return a.getContext(A,K)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Tp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",Xt,!1),a.addEventListener("webglcontextcreationerror",bt,!1),I===null){const K="webgl2";if(I=Pe(K,A),I===null)throw Pe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,Jt,Lt,ae,Ht,le,qe,We,U,T,st,mt,Mt,dt,kt,wt,jt,Qt,Rt,Ot,ie,Zt,zt,fe;function k(){se=new cA(I),se.init(),Zt=new YR(I,se),Jt=new iA(I,se,e,Zt),Lt=new kR(I,se),Jt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ae=new dA(I),Ht=new UR,le=new qR(I,se,Lt,Ht,Jt,Zt,ae),qe=new rA(D),We=new uA(D),U=new xT(I),zt=new eA(I,U),T=new fA(I,U,ae,zt),st=new mA(I,T,U,ae),Rt=new pA(I,Jt,le),wt=new aA(Ht),mt=new DR(D,qe,We,se,Jt,zt,wt),Mt=new JR(D,Ht),dt=new LR,kt=new FR(se),Qt=new tA(D,qe,We,Lt,st,M,g),jt=new VR(D,st,Jt),fe=new $R(I,ae,Jt,Lt),Ot=new nA(I,se,ae),ie=new hA(I,se,ae),ae.programs=mt.programs,D.capabilities=Jt,D.extensions=se,D.properties=Ht,D.renderLists=dt,D.shadowMap=jt,D.state=Lt,D.info=ae}k();const Ct=new KR(D,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(H,Z,!1))},this.getSize=function(A){return A.set(H,Z)},this.setSize=function(A,K,ut=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,Z=K,a.width=Math.floor(A*q),a.height=Math.floor(K*q),ut===!0&&(a.style.width=A+"px",a.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(H*q,Z*q).floor()},this.setDrawingBufferSize=function(A,K,ut){H=A,Z=K,q=ut,a.width=Math.floor(A*ut),a.height=Math.floor(K*ut),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Bt)},this.setViewport=function(A,K,ut,ft){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,K,ut,ft),Lt.viewport(B.copy(Bt).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(Kt)},this.setScissor=function(A,K,ut,ft){A.isVector4?Kt.set(A.x,A.y,A.z,A.w):Kt.set(A,K,ut,ft),Lt.scissor(Q.copy(Kt).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Lt.setScissorTest(oe=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ut=!0){let ft=0;if(A){let J=!1;if(P!==null){const At=P.texture.format;J=At===Dp||At===wp||At===Cp}if(J){const At=P.texture.type,Pt=At===Qi||At===jr||At===ll||At===ul||At===Ap||At===Rp,Ft=Qt.getClearColor(),Dt=Qt.getClearAlpha(),qt=Ft.r,ne=Ft.g,te=Ft.b;Pt?(b[0]=qt,b[1]=ne,b[2]=te,b[3]=Dt,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=qt,w[1]=ne,w[2]=te,w[3]=Dt,I.clearBufferiv(I.COLOR,0,w))}else ft|=I.COLOR_BUFFER_BIT}K&&(ft|=I.DEPTH_BUFFER_BIT),ut&&(ft|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",Xt,!1),a.removeEventListener("webglcontextcreationerror",bt,!1),Qt.dispose(),dt.dispose(),kt.dispose(),Ht.dispose(),qe.dispose(),We.dispose(),st.dispose(),zt.dispose(),fe.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",pn),Ct.removeEventListener("sessionend",Dn),$i.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=ae.autoReset,K=jt.enabled,ut=jt.autoUpdate,ft=jt.needsUpdate,J=jt.type;k(),ae.autoReset=A,jt.enabled=K,jt.autoUpdate=ut,jt.needsUpdate=ft,jt.type=J}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const K=A.target;K.removeEventListener("dispose",St),Wt(K)}function Wt(A){ce(A),Ht.remove(A)}function ce(A){const K=Ht.get(A).programs;K!==void 0&&(K.forEach(function(ut){mt.releaseProgram(ut)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ut,ft,J,At){K===null&&(K=yt);const Pt=J.isMesh&&J.matrixWorld.determinant()<0,Ft=xl(A,K,ut,ft,J);Lt.setMaterial(ft,Pt);let Dt=ut.index,qt=1;if(ft.wireframe===!0){if(Dt=T.getWireframeAttribute(ut),Dt===void 0)return;qt=2}const ne=ut.drawRange,te=ut.attributes.position;let ve=ne.start*qt,Ie=(ne.start+ne.count)*qt;At!==null&&(ve=Math.max(ve,At.start*qt),Ie=Math.min(Ie,(At.start+At.count)*qt)),Dt!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,Dt.count)):te!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,te.count));const Qe=Ie-ve;if(Qe<0||Qe===1/0)return;zt.setup(J,ft,Ft,ut,Dt);let Ue,Re=Ot;if(Dt!==null&&(Ue=U.get(Dt),Re=ie,Re.setIndex(Ue)),J.isMesh)ft.wireframe===!0?(Lt.setLineWidth(ft.wireframeLinewidth*Vt()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(J.isLine){let ee=ft.linewidth;ee===void 0&&(ee=1),Lt.setLineWidth(ee*Vt()),J.isLineSegments?Re.setMode(I.LINES):J.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else J.isPoints?Re.setMode(I.POINTS):J.isSprite&&Re.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Re.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ee=J._multiDrawStarts,Ne=J._multiDrawCounts,ge=J._multiDrawCount,mn=Dt?U.get(Dt).bytesPerElement:1,Jn=Ht.get(ft).currentProgram.getUniforms();for(let Ce=0;Ce<ge;Ce++)Jn.setValue(I,"_gl_DrawID",Ce),Re.render(ee[Ce]/mn,Ne[Ce])}else if(J.isInstancedMesh)Re.renderInstances(ve,Qe,J.count);else if(ut.isInstancedBufferGeometry){const ee=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ne=Math.min(ut.instanceCount,ee);Re.renderInstances(ve,Qe,Ne)}else Re.render(ve,Qe)};function Ve(A,K,ut){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,ci(A,K,ut),A.side=fr,A.needsUpdate=!0,ci(A,K,ut),A.side=Ma):ci(A,K,ut)}this.compile=function(A,K,ut=null){ut===null&&(ut=A),x=kt.get(ut),x.init(K),z.push(x),ut.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),A!==ut&&A.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ft=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Ft=At[Pt];Ve(Ft,ut,J),ft.add(Ft)}else Ve(At,ut,J),ft.add(At)}),x=z.pop(),ft},this.compileAsync=function(A,K,ut=null){const ft=this.compile(A,K,ut);return new Promise(J=>{function At(){if(ft.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&ft.delete(Pt)}),ft.size===0){J(A);return}setTimeout(At,10)}se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function $e(A){ye&&ye(A)}function pn(){$i.stop()}function Dn(){$i.start()}const $i=new Rx;$i.setAnimationLoop($e),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){ye=A,Ct.setAnimationLoop(A),A===null?$i.stop():$i.start()},Ct.addEventListener("sessionstart",pn),Ct.addEventListener("sessionend",Dn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,K,P),x=kt.get(A,z.length),x.init(K),z.push(x),at.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F.setFromProjectionMatrix(at,Wi,K.reversedDepth),$=this.localClippingEnabled,ht=wt.init(this.clippingPlanes,$),y=dt.get(A,L.length),y.init(),L.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&so(At,K,-1/0,D.sortObjects)}so(A,K,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(_t,xt),Tt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Tt&&Qt.addToRenderList(y,A),this.info.render.frame++,ht===!0&&wt.beginShadows();const ut=x.state.shadowsArray;jt.render(ut,A,K),ht===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=y.opaque,J=y.transmissive;if(x.setupLights(),K.isArrayCamera){const At=K.cameras;if(J.length>0)for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];pr(ft,J,A,Dt)}Tt&&Qt.render(A);for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];vl(y,A,Dt,Dt.viewport)}}else J.length>0&&pr(ft,J,A,K),Tt&&Qt.render(A),vl(y,A,K);P!==null&&O===0&&(le.updateMultisampleRenderTarget(P),le.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(D,A,K),zt.resetDefaultState(),C=-1,R=null,z.pop(),z.length>0?(x=z[z.length-1],ht===!0&&wt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function so(A,K,ut,ft){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){ft&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const Pt=st.update(A),Ft=A.material;Ft.visible&&y.push(A,Pt,Ft,ut,nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const Pt=st.update(A),Ft=A.material;if(ft&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),nt.copy(Pt.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Ft)){const Dt=Pt.groups;for(let qt=0,ne=Dt.length;qt<ne;qt++){const te=Dt[qt],ve=Ft[te.materialIndex];ve&&ve.visible&&y.push(A,Pt,ve,ut,nt.z,te)}}else Ft.visible&&y.push(A,Pt,Ft,ut,nt.z,null)}}const At=A.children;for(let Pt=0,Ft=At.length;Pt<Ft;Pt++)so(At[Pt],K,ut,ft)}function vl(A,K,ut,ft){const J=A.opaque,At=A.transmissive,Pt=A.transparent;x.setupLightsView(ut),ht===!0&&wt.setGlobalState(D.clippingPlanes,ut),ft&&Lt.viewport(B.copy(ft)),J.length>0&&ta(J,K,ut),At.length>0&&ta(At,K,ut),Pt.length>0&&ta(Pt,K,ut),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function pr(A,K,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ft.id]===void 0&&(x.state.transmissionRenderTarget[ft.id]=new Kr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ba:Qi,minFilter:lr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=x.state.transmissionRenderTarget[ft.id],Pt=ft.viewport||B;At.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Dt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(lt),tt=D.getClearAlpha(),tt<1&&D.setClearColor(16777215,.5),D.clear(),Tt&&Qt.render(ut);const ne=D.toneMapping;D.toneMapping=cr;const te=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),x.setupLightsView(ft),ht===!0&&wt.setGlobalState(D.clippingPlanes,ft),ta(A,ut,ft),le.updateMultisampleRenderTarget(At),le.updateRenderTargetMipmap(At),se.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ie=0,Qe=K.length;Ie<Qe;Ie++){const Ue=K[Ie],Re=Ue.object,ee=Ue.geometry,Ne=Ue.material,ge=Ue.group;if(Ne.side===Ma&&Re.layers.test(ft.layers)){const mn=Ne.side;Ne.side=Kn,Ne.needsUpdate=!0,mr(Re,ut,ft,ee,Ne,ge),Ne.side=mn,Ne.needsUpdate=!0,ve=!0}}ve===!0&&(le.updateMultisampleRenderTarget(At),le.updateRenderTargetMipmap(At))}D.setRenderTarget(Ft,Dt,qt),D.setClearColor(lt,tt),te!==void 0&&(ft.viewport=te),D.toneMapping=ne}function ta(A,K,ut){const ft=K.isScene===!0?K.overrideMaterial:null;for(let J=0,At=A.length;J<At;J++){const Pt=A[J],Ft=Pt.object,Dt=Pt.geometry,qt=Pt.group;let ne=Pt.material;ne.allowOverride===!0&&ft!==null&&(ne=ft),Ft.layers.test(ut.layers)&&mr(Ft,K,ut,Dt,ne,qt)}}function mr(A,K,ut,ft,J,At){A.onBeforeRender(D,K,ut,ft,J,At),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(D,K,ut,ft,A,At),J.transparent===!0&&J.side===Ma&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,D.renderBufferDirect(ut,K,ft,J,A,At),J.side=fr,J.needsUpdate=!0,D.renderBufferDirect(ut,K,ft,J,A,At),J.side=Ma):D.renderBufferDirect(ut,K,ft,J,A,At),A.onAfterRender(D,K,ut,ft,J,At)}function ci(A,K,ut){K.isScene!==!0&&(K=yt);const ft=Ht.get(A),J=x.state.lights,At=x.state.shadowsArray,Pt=J.state.version,Ft=mt.getParameters(A,J.state,At,K,ut),Dt=mt.getProgramCacheKey(Ft);let qt=ft.programs;ft.environment=A.isMeshStandardMaterial?K.environment:null,ft.fog=K.fog,ft.envMap=(A.isMeshStandardMaterial?We:qe).get(A.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",St),qt=new Map,ft.programs=qt);let ne=qt.get(Dt);if(ne!==void 0){if(ft.currentProgram===ne&&ft.lightsStateVersion===Pt)return Ra(A,Ft),ne}else Ft.uniforms=mt.getUniforms(A),A.onBeforeCompile(Ft,D),ne=mt.acquireProgram(Ft,Dt),qt.set(Dt,ne),ft.uniforms=Ft.uniforms;const te=ft.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=wt.uniform),Ra(A,Ft),ft.needsLights=Sl(A),ft.lightsStateVersion=Pt,ft.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),ft.currentProgram=ne,ft.uniformsList=null,ne}function gr(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=pc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Ra(A,K){const ut=Ht.get(A);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function xl(A,K,ut,ft,J){K.isScene!==!0&&(K=yt),le.resetTextureUnits();const At=K.fog,Pt=ft.isMeshStandardMaterial?K.environment:null,Ft=P===null?D.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zr,Dt=(ft.isMeshStandardMaterial?We:qe).get(ft.envMap||Pt),qt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ne=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),te=!!ut.morphAttributes.position,ve=!!ut.morphAttributes.normal,Ie=!!ut.morphAttributes.color;let Qe=cr;ft.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ue=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,ee=Ht.get(ft),Ne=x.state.lights;if(ht===!0&&($===!0||A!==R)){const en=A===R&&ft.id===C;wt.setState(ft,A,en)}let ge=!1;ft.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ne.state.version||ee.outputColorSpace!==Ft||J.isBatchedMesh&&ee.batching===!1||!J.isBatchedMesh&&ee.batching===!0||J.isBatchedMesh&&ee.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ee.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ee.instancing===!1||!J.isInstancedMesh&&ee.instancing===!0||J.isSkinnedMesh&&ee.skinning===!1||!J.isSkinnedMesh&&ee.skinning===!0||J.isInstancedMesh&&ee.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ee.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ee.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ee.instancingMorph===!1&&J.morphTexture!==null||ee.envMap!==Dt||ft.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==qt||ee.vertexTangents!==ne||ee.morphTargets!==te||ee.morphNormals!==ve||ee.morphColors!==Ie||ee.toneMapping!==Qe||ee.morphTargetsCount!==Re)&&(ge=!0):(ge=!0,ee.__version=ft.version);let mn=ee.currentProgram;ge===!0&&(mn=ci(ft,K,J));let Jn=!1,Ce=!1,Ca=!1;const je=mn.getUniforms(),Pn=ee.uniforms;if(Lt.useProgram(mn.program)&&(Jn=!0,Ce=!0,Ca=!0),ft.id!==C&&(C=ft.id,Ce=!0),Jn||R!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(I,"projectionMatrix",A.projectionMatrix),je.setValue(I,"viewMatrix",A.matrixWorldInverse);const Un=je.map.cameraPosition;Un!==void 0&&Un.setValue(I,Et.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&je.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&je.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ce=!0,Ca=!0)}if(J.isSkinnedMesh){je.setOptional(I,J,"bindMatrix"),je.setOptional(I,J,"bindMatrixInverse");const en=J.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),je.setValue(I,"boneTexture",en.boneTexture,le))}J.isBatchedMesh&&(je.setOptional(I,J,"batchingTexture"),je.setValue(I,"batchingTexture",J._matricesTexture,le),je.setOptional(I,J,"batchingIdTexture"),je.setValue(I,"batchingIdTexture",J._indirectTexture,le),je.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&je.setValue(I,"batchingColorTexture",J._colorsTexture,le));const ln=ut.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Rt.update(J,ut,mn),(Ce||ee.receiveShadow!==J.receiveShadow)&&(ee.receiveShadow=J.receiveShadow,je.setValue(I,"receiveShadow",J.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Pn.envMap.value=Dt,Pn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&K.environment!==null&&(Pn.envMapIntensity.value=K.environmentIntensity),Ce&&(je.setValue(I,"toneMappingExposure",D.toneMappingExposure),ee.needsLights&&yc(Pn,Ca),At&&ft.fog===!0&&Mt.refreshFogUniforms(Pn,At),Mt.refreshMaterialUniforms(Pn,ft,q,Z,x.state.transmissionRenderTarget[A.id]),pc.upload(I,gr(ee),Pn,le)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(pc.upload(I,gr(ee),Pn,le),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&je.setValue(I,"center",J.center),je.setValue(I,"modelViewMatrix",J.modelViewMatrix),je.setValue(I,"normalMatrix",J.normalMatrix),je.setValue(I,"modelMatrix",J.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const en=ft.uniformsGroups;for(let Un=0,Qr=en.length;Un<Qr;Un++){const Oi=en[Un];fe.update(Oi,mn),fe.bind(Oi,mn)}}return mn}function yc(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,K,ut){const ft=Ht.get(A);ft.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=K,Ht.get(A.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const ut=Ht.get(A);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const oo=I.createFramebuffer();this.setRenderTarget=function(A,K=0,ut=0){P=A,G=K,O=ut;let ft=!0,J=null,At=!1,Pt=!1;if(A){const Dt=Ht.get(A);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),ft=!1;else if(Dt.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(Dt.__hasExternalTextures)le.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(Dt.__boundDepthTexture!==te){if(te!==null&&Ht.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const ne=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?J=ne[K][ut]:J=ne[K],At=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?J=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?J=ne[ut]:J=ne,B.copy(A.viewport),Q.copy(A.scissor),rt=A.scissorTest}else B.copy(Bt).multiplyScalar(q).floor(),Q.copy(Kt).multiplyScalar(q).floor(),rt=oe;if(ut!==0&&(J=oo),Lt.bindFramebuffer(I.FRAMEBUFFER,J)&&ft&&Lt.drawBuffers(A,J),Lt.viewport(B),Lt.scissor(Q),Lt.setScissorTest(rt),At){const Dt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,ut)}else if(Pt){const Dt=K;for(let qt=0;qt<A.textures.length;qt++){const ne=Ht.get(A.textures[qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qt,ne.__webglTexture,ut,Dt)}}else if(A!==null&&ut!==0){const Dt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,ut)}C=-1},this.readRenderTargetPixels=function(A,K,ut,ft,J,At,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){Lt.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const qt=A.textures[Ft],ne=qt.format,te=qt.type;if(!Jt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ft&&ut>=0&&ut<=A.height-J&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,ut,ft,J,Zt.convert(ne),Zt.convert(te),At))}finally{const qt=P!==null?Ht.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,K,ut,ft,J,At,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(K>=0&&K<=A.width-ft&&ut>=0&&ut<=A.height-J){Lt.bindFramebuffer(I.FRAMEBUFFER,Dt);const qt=A.textures[Ft],ne=qt.format,te=qt.type;if(!Jt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,ut,ft,J,Zt.convert(ne),Zt.convert(te),0);const Ie=P!==null?Ht.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Ie);const Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await AE(I,Qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer(ve),I.deleteSync(Qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ut=0){const ft=Math.pow(2,-ut),J=Math.floor(A.image.width*ft),At=Math.floor(A.image.height*ft),Pt=K!==null?K.x:0,Ft=K!==null?K.y:0;le.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ut,0,0,Pt,Ft,J,At),Lt.unbindTexture()};const _r=I.createFramebuffer(),Mc=I.createFramebuffer();this.copyTextureToTexture=function(A,K,ut=null,ft=null,J=0,At=null){At===null&&(J!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=J,J=0):At=0);let Pt,Ft,Dt,qt,ne,te,ve,Ie,Qe;const Ue=A.isCompressedTexture?A.mipmaps[At]:A.image;if(ut!==null)Pt=ut.max.x-ut.min.x,Ft=ut.max.y-ut.min.y,Dt=ut.isBox3?ut.max.z-ut.min.z:1,qt=ut.min.x,ne=ut.min.y,te=ut.isBox3?ut.min.z:0;else{const ln=Math.pow(2,-J);Pt=Math.floor(Ue.width*ln),Ft=Math.floor(Ue.height*ln),A.isDataArrayTexture?Dt=Ue.depth:A.isData3DTexture?Dt=Math.floor(Ue.depth*ln):Dt=1,qt=0,ne=0,te=0}ft!==null?(ve=ft.x,Ie=ft.y,Qe=ft.z):(ve=0,Ie=0,Qe=0);const Re=Zt.convert(K.format),ee=Zt.convert(K.type);let Ne;K.isData3DTexture?(le.setTexture3D(K,0),Ne=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(le.setTexture2DArray(K,0),Ne=I.TEXTURE_2D_ARRAY):(le.setTexture2D(K,0),Ne=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ce=I.getParameter(I.UNPACK_SKIP_ROWS),Ca=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const je=A.isDataArrayTexture||A.isData3DTexture,Pn=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),en=Ht.get(K),Un=Ht.get(ln.__renderTarget),Qr=Ht.get(en.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Oi=0;Oi<Dt;Oi++)je&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,J,te+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(K).__webglTexture,At,Qe+Oi)),I.blitFramebuffer(qt,ne,Pt,Ft,ve,Ie,Pt,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),en=Ht.get(K);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,_r),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mc);for(let Un=0;Un<Dt;Un++)je?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,J,te+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,J),Pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,At,Qe+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,At),J!==0?I.blitFramebuffer(qt,ne,Pt,Ft,ve,Ie,Pt,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):Pn?I.copyTexSubImage3D(Ne,At,ve,Ie,Qe+Un,qt,ne,Pt,Ft):I.copyTexSubImage2D(Ne,At,ve,Ie,qt,ne,Pt,Ft);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ne,At,ve,Ie,Qe,Pt,Ft,Dt,Re,ee,Ue.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,At,ve,Ie,Qe,Pt,Ft,Dt,Re,Ue.data):I.texSubImage3D(Ne,At,ve,Ie,Qe,Pt,Ft,Dt,Re,ee,Ue):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,ve,Ie,Pt,Ft,Re,ee,Ue.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,ve,Ie,Ue.width,Ue.height,Re,Ue.data):I.texSubImage2D(I.TEXTURE_2D,At,ve,Ie,Pt,Ft,Re,ee,Ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ca),At===0&&K.generateMipmaps&&I.generateMipmap(Ne),Lt.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){G=0,O=0,P=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),a.unpackColorSpace=De._getUnpackColorSpace()}}class e2 extends hT{constructor(e){super(e),this.type=ba}parse(e){const h=function(P,C){switch(P){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},m=function(P,C,R){C=C||1024;let Q=P.pos,rt=-1,lt=0,tt="",H=String.fromCharCode.apply(null,new Uint16Array(P.subarray(Q,Q+128)));for(;0>(rt=H.indexOf(`
`))&&lt<C&&Q<P.byteLength;)tt+=H,lt+=H.length,Q+=128,H+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(Q,Q+128)));return-1<rt?(P.pos+=lt+rt+1,tt+H.slice(0,rt)):!1},S=function(P){const C=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Q=/^\s*FORMAT=(\S+)\s*$/,rt=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,lt={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let tt,H;for((P.pos>=P.byteLength||!(tt=m(P)))&&h(1,"no header found"),(H=tt.match(C))||h(3,"bad initial token"),lt.valid|=1,lt.programtype=H[1],lt.string+=tt+`
`;tt=m(P),tt!==!1;){if(lt.string+=tt+`
`,tt.charAt(0)==="#"){lt.comments+=tt+`
`;continue}if((H=tt.match(R))&&(lt.gamma=parseFloat(H[1])),(H=tt.match(B))&&(lt.exposure=parseFloat(H[1])),(H=tt.match(Q))&&(lt.valid|=2,lt.format=H[1]),(H=tt.match(rt))&&(lt.valid|=4,lt.height=parseInt(H[1],10),lt.width=parseInt(H[2],10)),lt.valid&2&&lt.valid&4)break}return lt.valid&2||h(3,"missing format specifier"),lt.valid&4||h(3,"missing image size specifier"),lt},M=function(P,C,R){const B=C;if(B<8||B>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);B!==(P[2]<<8|P[3])&&h(3,"wrong scanline width");const Q=new Uint8Array(4*C*R);Q.length||h(4,"unable to allocate buffer space");let rt=0,lt=0;const tt=4*B,H=new Uint8Array(4),Z=new Uint8Array(tt);let q=R;for(;q>0&&lt<P.byteLength;){lt+4>P.byteLength&&h(1),H[0]=P[lt++],H[1]=P[lt++],H[2]=P[lt++],H[3]=P[lt++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=B)&&h(3,"bad rgbe scanline format");let _t=0,xt;for(;_t<tt&&lt<P.byteLength;){xt=P[lt++];const Kt=xt>128;if(Kt&&(xt-=128),(xt===0||_t+xt>tt)&&h(3,"bad scanline data"),Kt){const oe=P[lt++];for(let F=0;F<xt;F++)Z[_t++]=oe}else Z.set(P.subarray(lt,lt+xt),_t),_t+=xt,lt+=xt}const Bt=B;for(let Kt=0;Kt<Bt;Kt++){let oe=0;Q[rt]=Z[Kt+oe],oe+=B,Q[rt+1]=Z[Kt+oe],oe+=B,Q[rt+2]=Z[Kt+oe],oe+=B,Q[rt+3]=Z[Kt+oe],rt+=4}q--}return Q},b=function(P,C,R,B){const Q=P[C+3],rt=Math.pow(2,Q-128)/255;R[B+0]=P[C+0]*rt,R[B+1]=P[C+1]*rt,R[B+2]=P[C+2]*rt,R[B+3]=1},w=function(P,C,R,B){const Q=P[C+3],rt=Math.pow(2,Q-128)/255;R[B+0]=Ku.toHalfFloat(Math.min(P[C+0]*rt,65504)),R[B+1]=Ku.toHalfFloat(Math.min(P[C+1]*rt,65504)),R[B+2]=Ku.toHalfFloat(Math.min(P[C+2]*rt,65504)),R[B+3]=Ku.toHalfFloat(1)},y=new Uint8Array(e);y.pos=0;const x=S(y),L=x.width,z=x.height,D=M(y.subarray(y.pos),L,z);let V,G,O;switch(this.type){case Zn:O=D.length/4;const P=new Float32Array(O*4);for(let R=0;R<O;R++)b(D,R*4,P,R*4);V=P,G=Zn;break;case ba:O=D.length/4;const C=new Uint16Array(O*4);for(let R=0;R<O;R++)w(D,R*4,C,R*4);V=C,G=ba;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:L,height:z,data:V,header:x.string,gamma:x.gamma,exposure:x.exposure,type:G}}setDataType(e){return this.type=e,this}load(e,a,s,u){function f(h,d){switch(h.type){case Zn:case ba:h.colorSpace=Zr,h.minFilter=wn,h.magFilter=wn,h.generateMipmaps=!1,h.flipY=!0;break}a&&a(h,d)}return super.load(e,f,s,u)}}class n2 extends e2{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const rl=()=>({low:0,mid:0,high:0,rms:0,dominant:0});function i2(o,e,a,s){let u=0;for(const v of e)u+=v*v;const f=Math.sqrt(u/Math.max(1,e.length));if(f<1e-4)return rl();const h=[0,0,0];let d=-1/0,g=0;for(let v=1;v<o.length;v++){const m=v*a/s;if(m<20||m>2e4)continue;const S=o[v];Number.isFinite(S)&&(h[m<250?0:m<2e3?1:2]+=10**(S/10),S>d&&(d=S,g=v))}const p=h.map(v=>Math.min(1,Math.sqrt(v)*4.8));return{low:p[0],mid:p[1],high:p[2],rms:f,dominant:g*a/s}}function a2(o,e){const a=Math.tanh((o.low-o.high)*e),s=Math.exp(a*.15),u=Math.exp(-a*.025);return{x:s,y:u,z:1/(s*u),flow:Math.tanh((o.low*.65+o.mid*.85+o.high*.5)*e*2.4),detail:Math.tanh(o.high*e*2)}}function Nx(o,e){let a=0;for(let s=0;s<e.length;s+=3){const u=e[s]*3,f=e[s+1]*3,h=e[s+2]*3;a+=o[u]*(o[f+1]*o[h+2]-o[f+2]*o[h+1])+o[u+1]*(o[f+2]*o[h]-o[f]*o[h+2])+o[u+2]*(o[f]*o[h+1]-o[f+1]*o[h])}return Math.abs(a/6)}function r2(o,e,a,s,u,f,h){const d=a2(u,f),g=.008+d.flow*.46;for(let m=0;m<o.length;m+=3){const S=o[m],M=o[m+1],b=o[m+2],w=Math.sin(S*3.1+M*1.8+h*.82)*Math.cos(b*2.9-M*1.2-h*.58),y=Math.sin(S*5.4-b*3.2-h*.7)*Math.cos(M*4.1+b*2.3+h*.42),x=Math.sin(S*8.2+M*5.5+b*3.8+h*1.1)*Math.cos(b*6.1-M*3.7-h*.73),L=g*(w*.6+y*.4)+d.detail*.055*x;e[m]=S*(1+L)*d.x,e[m+1]=M*(1+L*.12)*d.y,e[m+2]=b*(1+L)*d.z}const p=Nx(e,a),v=Math.sqrt(s/Math.max(p,1e-12));for(let m=0;m<e.length;m+=3)e[m]*=v,e[m+2]*=v}const sl={color:"#ffffff",material:"metal",background:"light",sensitivity:1.2,movement:.45,smoothing:.65};function s2(o){const s=new Float32Array(2097152);for(let d=0;d<512;d++)for(let g=0;g<1024;g++){const p=g/1024,m=d/512+.055*Math.sin(p*Math.PI*2)+.025*Math.sin(p*Math.PI*4+.7),S=(y,x)=>Math.exp(-(((m-y)/x)**2));let M=(.3+1.4*S(.76,.24)+.85*S(.25,.085))*(1-.998*S(.49,.09));const b=Math.exp(-(((p-.22)/.025)**2))+Math.exp(-(((p-.74)/.05)**2));M+=b*1.7*S(.6,.3);const w=(d*1024+g)*4;s[w]=s[w+1]=s[w+2]=Math.max(.008,M),s[w+3]=1}const u=new Tx(s,1024,512,Mi,Zn);o.extensions.has("OES_texture_float_linear")&&(u.minFilter=wn,u.magFilter=wn),u.mapping=ol,u.needsUpdate=!0;const f=new yp(o),h=f.fromEquirectangular(u);return u.dispose(),f.dispose(),h}function o2({engine:o,settings:e}){const a=be.useRef(null),s=be.useRef(e),[u,f]=be.useState("");return s.current=e,be.useEffect(()=>{const h=a.current;let d;try{d=new t2({antialias:!0,alpha:!0})}catch{f("No se ha podido iniciar la esfera 3D. Activa la aceleración gráfica de tu navegador y recarga la página.");return}d.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),d.setClearColor(0,0),d.toneMapping=nx,d.toneMappingExposure=1.05,d.domElement.setAttribute("aria-label","Esfera 3D reactiva al audio"),d.domElement.setAttribute("role","img"),h.appendChild(d.domElement);const g=new eT,p=s2(d);g.environment=p.texture;let v=!1,m;new n2().setDataType(Zn).load("./environment/venice-sunset-2k.hdr",tt=>{if(v){tt.dispose();return}const H=tt.image.data;for(let Z=0;Z<H.length;Z+=4){const q=H[Z]*.2126+H[Z+1]*.7152+H[Z+2]*.0722;for(let _t=0;_t<3;_t++)H[Z+_t]=Math.pow(Math.max(0,q*.7+H[Z+_t]*.3),1.15)}tt.needsUpdate=!0,tt.mapping=ol,m=tt,g.environment=tt,g.environmentRotation.set(0,1.7,0)});const S=new Pp(-2,2,2,-2,.1,30);S.position.set(0,0,6);const M=new Op(1,192,128),b=M.attributes.position,w=new Float32Array(b.array),y=M.index.array,x=Nx(w,y),L=new rT({color:"#ffffff",metalness:1,roughness:.018,envMapIntensity:1}),z=new ji(M,L);g.add(z);const D=new gT(16777215,2);D.position.set(-3,4,4),g.add(D);const V=()=>{const{width:tt,height:H}=h.getBoundingClientRect();d.setSize(tt,H);const Z=tt/Math.max(H,1),q=1.55;S.left=-q*Math.max(Z,1),S.right=-S.left,S.top=q*Math.max(1/Z,1),S.bottom=-S.top,S.updateProjectionMatrix()},G=new ResizeObserver(V);G.observe(h),V();const O=window.matchMedia("(prefers-reduced-motion: reduce)");let P=0,C=0,R=performance.now(),B=!document.hidden;const Q=()=>{B=!document.hidden,R=performance.now()};document.addEventListener("visibilitychange",Q);const rt=tt=>{tt.preventDefault(),f("Se ha interrumpido la aceleración gráfica. Recarga la página para recuperar la esfera.")};d.domElement.addEventListener("webglcontextlost",rt);const lt=tt=>{P=requestAnimationFrame(lt);const H=Math.min((tt-R)/1e3,.05);if(R=tt,!B)return;const Z=s.current,q=o.sample(H,Z.smoothing);C+=H*Z.movement*(1.6+q.low*2.5+q.mid*2)*(O.matches?.15:1),r2(w,b.array,y,x,q,Z.sensitivity,C),b.needsUpdate=!0,M.computeVertexNormals(),z.rotation.y=C*.06,L.color.set(Z.color),L.wireframe=Z.material==="wire",L.metalness=Z.material==="metal"?1:Z.material==="pearl"?.18:0,L.roughness=Z.material==="metal"?.018:.38,L.envMapIntensity=Z.material==="metal"?1:1.3,d.render(g,S)};return P=requestAnimationFrame(lt),()=>{v=!0,m?.dispose(),cancelAnimationFrame(P),G.disconnect(),document.removeEventListener("visibilitychange",Q),d.domElement.removeEventListener("webglcontextlost",rt),M.dispose(),L.dispose(),p.dispose(),d.dispose(),d.domElement.remove()}},[o]),vt.jsx("div",{className:"orb-render",ref:a,children:u&&vt.jsx("div",{className:"graphics-error",role:"alert",children:u})})}class l2{element=new Audio;context;analyser;gain;frequency=new Float32Array(2048);signal=new Float32Array(4096);objectUrl;volume=.65;revision=0;levels=rl();constructor(){this.element.preload="metadata"}async initialize(){this.context||(this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=4096,this.analyser.smoothingTimeConstant=0,this.gain=this.context.createGain(),this.gain.gain.value=this.volume,this.context.createMediaElementSource(this.element).connect(this.analyser),this.analyser.connect(this.gain).connect(this.context.destination)),this.context.state!=="running"&&await this.context.resume()}load(e){this.revision++,this.element.pause(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.objectUrl=typeof e=="string"?void 0:URL.createObjectURL(e),this.element.src=typeof e=="string"?e:this.objectUrl,this.levels=rl(),this.element.load()}async play(){const e=this.revision;if(await this.initialize(),e===this.revision)try{await this.element.play()}catch(a){if(e===this.revision&&!(a instanceof DOMException&&a.name==="AbortError"))throw a}}pause(){this.element.pause()}setVolume(e){this.volume=e,this.gain&&this.context&&this.gain.gain.setTargetAtTime(e,this.context.currentTime,.025)}sample(e,a){let s=rl();this.analyser&&this.context&&!this.element.paused&&!this.element.ended&&(this.analyser.getFloatFrequencyData(this.frequency),this.analyser.getFloatTimeDomainData(this.signal),s=i2(this.frequency,this.signal,this.context.sampleRate,this.analyser.fftSize));for(const u of["low","mid","high","rms"]){const f=s[u]>this.levels[u]?.008+a*.035:.055+a*.15;this.levels[u]+=(s[u]-this.levels[u])*(1-Math.exp(-e/f))}return this.levels.dominant=s.dominant,this.levels}dispose(){this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.context?.close()}}const u2=[{color:"#ffffff",name:"Cromo"},{color:"#dba58e",name:"Cobre"},{color:"#8ba9d8",name:"Azul"},{color:"#b6a0db",name:"Violeta"},{color:"#99c4ad",name:"Jade"}],c2=[{name:"Cromo",settings:sl},{name:"Nácar",settings:{...sl,material:"pearl",color:"#ffffff"}},{name:"Trama",settings:{...sl,material:"wire",color:"#526477"}}],Jv=o=>`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`;function Ld({label:o,value:e,min:a=0,max:s=1,step:u=.01,text:f,onChange:h}){return vt.jsxs("label",{className:"slider-field",children:[vt.jsxs("span",{children:[o,vt.jsx("output",{children:f})]}),vt.jsx("input",{"aria-label":o,type:"range",min:a,max:s,step:u,value:e,onChange:d=>h(Number(d.target.value))})]})}function f2(){const[o]=be.useState(()=>new l2),[e,a]=be.useState({...sl}),[s,u]=be.useState("Cromo"),[f,h]=be.useState(""),[d,g]=be.useState(!1),[p,v]=be.useState(!1),[m,S]=be.useState(0),[M,b]=be.useState(0),[w,y]=be.useState(.65),[x,L]=be.useState(!1),[z,D]=be.useState(rl()),[V,G]=be.useState(""),[O,P]=be.useState(!1),[C,R]=be.useState(!1),[B,Q]=be.useState(!1),[rt,lt]=be.useState(!1),tt=be.useRef(null),H=be.useRef(null),Z=be.useRef(null),q=be.useRef(null),_t=be.useRef(null),xt=be.useRef(.65);be.useEffect(()=>{const nt=o.element,yt=()=>{v(!1),S(Number.isFinite(nt.duration)?nt.duration:0)},Tt=()=>{v(!1),g(!1),S(0),P(!0),G("No se ha podido reproducir este archivo. Prueba con un MP3 o WAV válido.")},Vt=()=>g(!0),I=()=>g(!1);nt.addEventListener("loadedmetadata",yt),nt.addEventListener("error",Tt),nt.addEventListener("playing",Vt),nt.addEventListener("pause",I),nt.addEventListener("ended",I);const Pe=setInterval(()=>{b(nt.currentTime||0),D({...o.levels})},100);return()=>{clearInterval(Pe),nt.removeEventListener("loadedmetadata",yt),nt.removeEventListener("error",Tt),nt.removeEventListener("playing",Vt),nt.removeEventListener("pause",I),nt.removeEventListener("ended",I),o.dispose()}},[o]),be.useEffect(()=>{const nt=()=>R(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",nt),()=>document.removeEventListener("fullscreenchange",nt)},[]),be.useEffect(()=>{rt&&_t.current?.focus()},[rt]);const Bt=()=>{lt(!1),q.current?.focus()},Kt=async()=>{if(!(!f||p||O)){if(!o.element.paused){o.pause();return}try{await o.play()}catch{G("El navegador no ha iniciado el audio. Vuelve a intentarlo o carga otro archivo.")}}},oe=async()=>{try{document.fullscreenElement?await document.exitFullscreen():H.current?.requestFullscreen?await H.current.requestFullscreen():G("Este navegador no admite pantalla completa. El lienzo ya ocupa toda la ventana.")}catch{G("No se ha podido activar la pantalla completa. Puedes seguir usando el lienzo en esta ventana.")}};be.useEffect(()=>{const nt=yt=>{if(!Z.current?.open){if(yt.key==="Escape"&&rt){Bt();return}yt.ctrlKey||yt.metaKey||yt.altKey||yt.target.closest("button,input,select,a,textarea")||(yt.code==="Space"&&(yt.preventDefault(),Kt()),yt.key.toLowerCase()==="f"&&(yt.preventDefault(),oe()))}};return window.addEventListener("keydown",nt),()=>window.removeEventListener("keydown",nt)});function F(nt,yt){G(""),P(!1),v(!0),g(!1),b(0),S(0),h(yt),o.load(nt)}function ht(nt){if(nt){if(!nt.type.startsWith("audio/")&&!/\.(mp3|wav|ogg|m4a|aac|flac|aif|aiff|opus|webm)$/i.test(nt.name)){G("Selecciona un archivo de audio: MP3, WAV, FLAC, OGG o M4A.");return}F(nt,nt.name)}}const $=()=>F("./demo.wav","Órbita nocturna · demo"),at=nt=>{a(yt=>({...yt,...nt})),u("Personalizado")},Et=nt=>{y(nt),o.setVolume(nt)};return vt.jsxs("div",{ref:H,className:`app theme-${e.background}`,onDragOver:nt=>{nt.preventDefault(),nt.dataTransfer.types.includes("Files")&&Q(!0)},onDragLeave:nt=>{nt.currentTarget.contains(nt.relatedTarget)||Q(!1)},onDrop:nt=>{nt.preventDefault(),Q(!1),ht(nt.dataTransfer.files[0])},children:[vt.jsx("main",{className:"canvas-stage","aria-label":"Visualizador",children:vt.jsx(o2,{engine:o,settings:e})}),vt.jsxs("header",{className:"identity",children:[vt.jsxs("h1",{children:["ORBIS",vt.jsx("span",{children:"2"})]}),vt.jsx("p",{children:"El sonido toma forma."}),vt.jsxs("div",{className:"file-actions",children:[vt.jsxs("button",{onClick:()=>tt.current?.click(),children:[vt.jsx(tv,{size:14}),"Subir archivo"]}),vt.jsx("span",{children:"/"}),vt.jsx("button",{onClick:$,children:"Probar demo"})]})]}),vt.jsxs("a",{className:"back-link",href:"https://www.pedrogomez.dev/",children:[vt.jsx(RM,{size:14}),vt.jsx("span",{children:"Portfolio"})]}),vt.jsxs("div",{className:"session-status",children:[vt.jsx("i",{className:d?"active":""}),p?"Preparando audio":d?"Reproduciendo":f?"En pausa":"Escucha. Observa."]}),rt&&vt.jsxs("section",{id:"settings",className:"settings-sheet","aria-label":"Ajustes",children:[vt.jsxs("div",{className:"sheet-heading",children:[vt.jsx("h2",{children:"Ajustes"}),vt.jsx("span",{children:"Hazlo tuyo."}),vt.jsx("button",{ref:_t,className:"icon-button",onClick:Bt,"aria-label":"Cerrar ajustes",children:vt.jsx(td,{size:18})})]}),vt.jsxs("div",{className:"settings-columns",children:[vt.jsxs("div",{className:"settings-group",children:[vt.jsx("h3",{children:"Apariencia"}),vt.jsx("div",{className:"presets",children:c2.map(nt=>vt.jsx("button",{"aria-label":`Estilo ${nt.name}`,"aria-pressed":s===nt.name,onClick:()=>{a({...nt.settings,background:e.background}),u(nt.name)},children:nt.name},nt.name))}),vt.jsxs("label",{className:"select-field",children:["Material",vt.jsxs("select",{"aria-label":"Material",value:e.material,onChange:nt=>at({material:nt.target.value}),children:[vt.jsx("option",{value:"metal",children:"Cromado"}),vt.jsx("option",{value:"pearl",children:"Nácar"}),vt.jsx("option",{value:"wire",children:"Malla"})]})]}),vt.jsxs("div",{className:"color-field",children:[vt.jsx("span",{children:"Color"}),vt.jsxs("div",{className:"colors",children:[u2.map(nt=>vt.jsx("button",{title:nt.name,"aria-label":`Color ${nt.name}`,"aria-pressed":e.color===nt.color,style:{background:nt.color},onClick:()=>at({color:nt.color}),children:e.color===nt.color&&vt.jsx(CM,{size:12})},nt.name)),vt.jsx("input",{type:"color","aria-label":"Color personalizado",value:e.color,onChange:nt=>at({color:nt.target.value})})]})]}),vt.jsxs("label",{className:"select-field",children:["Fondo",vt.jsxs("select",{"aria-label":"Fondo",value:e.background,onChange:nt=>at({background:nt.target.value}),children:[vt.jsx("option",{value:"light",children:"Blanco"}),vt.jsx("option",{value:"dark",children:"Oscuro"})]})]})]}),vt.jsxs("div",{className:"settings-group",children:[vt.jsx("h3",{children:"Movimiento"}),vt.jsx(Ld,{label:"Sensibilidad",min:.2,max:3,step:.1,value:e.sensitivity,text:`${e.sensitivity.toFixed(1)}×`,onChange:nt=>at({sensitivity:nt})}),vt.jsx(Ld,{label:"Fluidez",value:e.movement,text:`${Math.round(e.movement*100)}%`,onChange:nt=>at({movement:nt})}),vt.jsx(Ld,{label:"Suavizado",value:e.smoothing,text:`${Math.round(e.smoothing*100)}%`,onChange:nt=>at({smoothing:nt})})]}),vt.jsxs("div",{className:"settings-group",children:[vt.jsx("h3",{children:"Sonido"}),vt.jsx("div",{className:"bands",children:[{key:"low",name:"Graves"},{key:"mid",name:"Medios"},{key:"high",name:"Agudos"}].map(nt=>vt.jsxs("div",{className:"band",children:[vt.jsx("span",{children:nt.name}),vt.jsx("div",{className:"meter",role:"meter","aria-label":nt.name,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(z[nt.key]*100),children:vt.jsx("i",{style:{width:`${z[nt.key]*100}%`}})})]},nt.key))}),vt.jsxs("p",{className:"quiet-note",children:["Tu audio se queda en tu dispositivo.",vt.jsx("br",{}),"La forma cambia. El volumen se conserva."]}),vt.jsxs("button",{className:"reset-button",onClick:()=>{a({...sl}),u("Cromo")},children:[vt.jsx($0,{size:13}),"Restablecer ajustes"]})]})]})]}),vt.jsxs("footer",{className:"player",children:[vt.jsxs("div",{className:"track-info",children:[vt.jsx("strong",{title:f,children:f||"Sin archivo"}),vt.jsx("span",{children:p?"Preparando…":f?"Audio local":"Sube una canción o prueba la demo"})]}),vt.jsxs("div",{className:"transport",children:[vt.jsx("button",{className:"play-button",disabled:!f||p||O,onClick:()=>{Kt()},"aria-label":d?"Pausar":"Reproducir",children:d?vt.jsx(NM,{size:17,fill:"currentColor"}):vt.jsx(LM,{size:17,fill:"currentColor"})}),vt.jsx("button",{className:"icon-button restart",disabled:!m,onClick:()=>{o.element.currentTime=0,b(0)},"aria-label":"Volver al inicio",children:vt.jsx($0,{size:16})}),vt.jsx("span",{className:"time",children:Jv(M)}),vt.jsx("input",{className:"seek","aria-label":"Posición de reproducción",type:"range",min:"0",max:m||1,step:".1",value:Math.min(M,m||1),disabled:!m,onChange:nt=>{o.element.currentTime=Number(nt.target.value),b(Number(nt.target.value))}}),vt.jsx("span",{className:"time",children:Jv(m)})]}),vt.jsxs("div",{className:"player-tools",children:[vt.jsx("button",{className:"icon-button loop","aria-label":"Repetir pista","aria-pressed":x,onClick:()=>{o.element.loop=!x,L(!x)},children:vt.jsx(OM,{size:17})}),vt.jsxs("div",{className:"volume",children:[vt.jsx("button",{className:"icon-button","aria-label":w?"Silenciar":"Activar sonido",onClick:()=>{w?(xt.current=w,Et(0)):Et(xt.current||.65)},children:w?vt.jsx(PM,{size:17}):vt.jsx(IM,{size:17})}),vt.jsx("input",{"aria-label":"Volumen",type:"range",min:"0",max:"1",step:".01",value:w,onChange:nt=>Et(Number(nt.target.value))})]}),vt.jsx("span",{className:"tool-divider"}),vt.jsxs("button",{ref:q,className:"settings-button","aria-expanded":rt,"aria-controls":"settings",onClick:()=>{rt?Bt():lt(!0)},children:[vt.jsx(zM,{size:16}),vt.jsx("span",{children:"Ajustes"})]}),vt.jsx("button",{className:"icon-button help-button",onClick:()=>Z.current?.showModal(),"aria-label":"Cómo se mueve",children:vt.jsx(wM,{size:16})}),vt.jsx("button",{className:"icon-button fullscreen",onClick:()=>{oe()},"aria-label":C?"Salir de pantalla completa":"Pantalla completa",children:C?vt.jsx(UM,{size:17}):vt.jsx(DM,{size:17})})]})]}),vt.jsx("input",{ref:tt,type:"file",accept:"audio/*,.mp3,.wav,.flac,.ogg,.m4a",hidden:!0,onChange:nt=>{ht(nt.target.files?.[0]),nt.target.value=""}}),V&&vt.jsxs("div",{className:"error-toast",role:"alert",children:[vt.jsx("span",{children:V}),vt.jsx("button",{className:"icon-button","aria-label":"Cerrar aviso",onClick:()=>G(""),children:vt.jsx(td,{size:17})})]}),B&&vt.jsxs("div",{className:"drop-overlay",children:[vt.jsx(tv,{size:32}),vt.jsx("p",{children:"Suelta el audio."})]}),vt.jsx("dialog",{ref:Z,className:"help-modal","aria-labelledby":"help-title",onClick:nt=>{nt.target===Z.current&&Z.current.close()},children:vt.jsxs("div",{className:"help-content",children:[vt.jsx("button",{className:"icon-button",onClick:()=>Z.current?.close(),"aria-label":"Cerrar explicación",children:vt.jsx(td,{size:18})}),vt.jsx("h2",{id:"help-title",children:"Sonido en movimiento."}),vt.jsx("p",{children:"Los graves expanden la esfera hacia los lados; los agudos la recogen. Los medios dibujan ondas que fluyen por su superficie. La altura cambia suavemente y el volumen de la figura se mantiene constante."}),vt.jsx("p",{children:"En Ajustes puedes cambiar el material, el color, el fondo y la respuesta al sonido. Silenciar la escucha no detiene la visualización."}),vt.jsx("p",{children:"Espacio: reproducir o pausar · F: pantalla completa · Esc: cerrar."}),vt.jsxs("small",{children:["La compatibilidad de los formatos depende del navegador. La demo es una composición sintetizada. Los medidores son orientativos.",vt.jsx("br",{}),vt.jsx("br",{}),"Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García Arenas."]})]})})]})}EM.createRoot(document.getElementById("root")).render(vt.jsx(f2,{}));
