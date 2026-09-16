(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var Zh={exports:{}},Qo={};var k0;function mM(){if(k0)return Qo;k0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Qo.Fragment=e,Qo.jsx=a,Qo.jsxs=a,Qo}var q0;function gM(){return q0||(q0=1,Zh.exports=mM()),Zh.exports}var V=gM(),Kh={exports:{}},Jo={},Qh={exports:{}},Jh={};var j0;function _M(){return j0||(j0=1,(function(o){function e(F,K){var j=F.length;F.push(K);t:for(;0<j;){var vt=j-1>>>1,yt=F[vt];if(0<u(yt,K))F[vt]=K,F[j]=yt,j=vt;else break t}}function a(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var K=F[0],j=F.pop();if(j!==K){F[0]=j;t:for(var vt=0,yt=F.length,Bt=yt>>>1;vt<Bt;){var Zt=2*(vt+1)-1,oe=F[Zt],H=Zt+1,dt=F[H];if(0>u(oe,j))H<yt&&0>u(dt,oe)?(F[vt]=dt,F[H]=j,vt=H):(F[vt]=oe,F[Zt]=j,vt=Zt);else if(H<yt&&0>u(dt,j))F[vt]=dt,F[H]=j,vt=H;else break t}}return K}function u(F,K){var j=F.sortIndex-K.sortIndex;return j!==0?j:F.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],p=[],v=1,m=null,y=3,M=!1,b=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var K=a(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=F)s(p),K.sortIndex=K.expirationTime,e(g,K);else break;K=a(p)}}function X(F){if(w=!1,D(F),!b)if(a(g)!==null)b=!0,G||(G=!0,J());else{var K=a(p);K!==null&&nt(X,K.startTime-F)}}var G=!1,O=-1,P=5,C=-1;function R(){return S?!0:!(o.unstable_now()-C<P)}function B(){if(S=!1,G){var F=o.unstable_now();C=F;var K=!0;try{t:{b=!1,w&&(w=!1,L(O),O=-1),M=!0;var j=y;try{e:{for(D(F),m=a(g);m!==null&&!(m.expirationTime>F&&R());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,y=m.priorityLevel;var yt=vt(m.expirationTime<=F);if(F=o.unstable_now(),typeof yt=="function"){m.callback=yt,D(F),K=!0;break e}m===a(g)&&s(g),D(F)}else s(g);m=a(g)}if(m!==null)K=!0;else{var Bt=a(p);Bt!==null&&nt(X,Bt.startTime-F),K=!1}}break t}finally{m=null,y=j,M=!1}K=void 0}}finally{K?J():G=!1}}}var J;if(typeof z=="function")J=function(){z(B)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ut=rt.port2;rt.port1.onmessage=B,J=function(){ut.postMessage(null)}}else J=function(){x(B,0)};function nt(F,K){O=x(function(){F(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var j=y;y=K;try{return F()}finally{y=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=y;y=F;try{return K()}finally{y=j}},o.unstable_scheduleCallback=function(F,K,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,F){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=j+yt,F={id:v++,callback:K,priorityLevel:F,startTime:j,expirationTime:yt,sortIndex:-1},j>vt?(F.sortIndex=j,e(p,F),a(g)===null&&F===a(p)&&(w?(L(O),O=-1):w=!0,nt(X,j-vt))):(F.sortIndex=yt,e(g,F),b||M||(b=!0,G||(G=!0,J()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var K=y;return function(){var j=y;y=K;try{return F.apply(this,arguments)}finally{y=j}}}})(Jh)),Jh}var Y0;function vM(){return Y0||(Y0=1,Qh.exports=_M()),Qh.exports}var $h={exports:{}},ue={};var W0;function xM(){if(W0)return ue;W0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function L(H,dt,et){this.props=H,this.context=dt,this.refs=x,this.updater=et||w}L.prototype.isReactComponent={},L.prototype.setState=function(H,dt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,dt,"setState")},L.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function z(){}z.prototype=L.prototype;function D(H,dt,et){this.props=H,this.context=dt,this.refs=x,this.updater=et||w}var X=D.prototype=new z;X.constructor=D,S(X,L.prototype),X.isPureReactComponent=!0;var G=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function R(H,dt,et){var ot=et.ref;return{$$typeof:o,type:H,key:dt,ref:ot!==void 0?ot:null,props:et}}function B(H,dt){return R(H.type,dt,H.props)}function J(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function rt(H){var dt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(et){return dt[et]})}var ut=/\/+/g;function nt(H,dt){return typeof H=="object"&&H!==null&&H.key!=null?rt(""+H.key):dt.toString(36)}function F(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(O,O):(H.status="pending",H.then(function(dt){H.status==="pending"&&(H.status="fulfilled",H.value=dt)},function(dt){H.status==="pending"&&(H.status="rejected",H.reason=dt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function K(H,dt,et,ot,Mt){var Dt=typeof H;(Dt==="undefined"||Dt==="boolean")&&(H=null);var tt=!1;if(H===null)tt=!0;else switch(Dt){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(H.$$typeof){case o:case e:tt=!0;break;case v:return tt=H._init,K(tt(H._payload),dt,et,ot,Mt)}}if(tt)return Mt=Mt(H),tt=ot===""?"."+nt(H,0):ot,G(Mt)?(et="",tt!=null&&(et=tt.replace(ut,"$&/")+"/"),K(Mt,dt,et,"",function(I){return I})):Mt!=null&&(J(Mt)&&(Mt=B(Mt,et+(Mt.key==null||H&&H.key===Mt.key?"":(""+Mt.key).replace(ut,"$&/")+"/")+tt)),dt.push(Mt)),1;tt=0;var xt=ot===""?".":ot+":";if(G(H))for(var Vt=0;Vt<H.length;Vt++)ot=H[Vt],Dt=xt+nt(ot,Vt),tt+=K(ot,dt,et,Dt,Mt);else if(Vt=b(H),typeof Vt=="function")for(H=Vt.call(H),Vt=0;!(ot=H.next()).done;)ot=ot.value,Dt=xt+nt(ot,Vt++),tt+=K(ot,dt,et,Dt,Mt);else if(Dt==="object"){if(typeof H.then=="function")return K(F(H),dt,et,ot,Mt);throw dt=String(H),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return tt}function j(H,dt,et){if(H==null)return H;var ot=[],Mt=0;return K(H,ot,"","",function(Dt){return dt.call(et,Dt,Mt++)}),ot}function vt(H){if(H._status===-1){var dt=H._result,et=dt();et.then(function(ot){(H._status===0||H._status===-1)&&(H._status=1,H._result=ot,et.status===void 0&&(et.status="fulfilled",et.value=ot))},function(ot){(H._status===0||H._status===-1)&&(H._status=2,H._result=ot,et.status===void 0&&(et.status="rejected",et.reason=ot))}),H._status===-1&&(H._status=0,H._result=et)}if(H._status===1)return H._result.default;throw H._result}var yt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Bt(H){var dt=P.T,et={};et.types=dt!==null?dt.types:null,P.T=et;try{var ot=H(),Mt=P.S;Mt!==null&&Mt(et,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(O,yt)}catch(Dt){yt(Dt)}finally{dt!==null&&et.types!==null&&(dt.types=et.types),P.T=dt}}function Zt(H){var dt=P.T;if(dt!==null){var et=dt.types;et===null?dt.types=[H]:et.indexOf(H)===-1&&et.push(H)}else Bt(Zt.bind(null,H))}var oe={map:j,forEach:function(H,dt,et){j(H,function(){dt.apply(this,arguments)},et)},count:function(H){var dt=0;return j(H,function(){dt++}),dt},toArray:function(H){return j(H,function(dt){return dt})||[]},only:function(H){if(!J(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ue.Activity=m,ue.Children=oe,ue.Component=L,ue.Fragment=a,ue.Profiler=u,ue.PureComponent=D,ue.StrictMode=s,ue.Suspense=g,ue.ViewTransition=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ue.__COMPILER_RUNTIME={__proto__:null,c:function(H){return P.H.useMemoCache(H)}},ue.addTransitionType=Zt,ue.cache=function(H){return function(){return H.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(H,dt,et){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ot=S({},H.props),Mt=H.key;if(dt!=null)for(Dt in dt.key!==void 0&&(Mt=""+dt.key),dt)!C.call(dt,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&dt.ref===void 0||(ot[Dt]=dt[Dt]);var Dt=arguments.length-2;if(Dt===1)ot.children=et;else if(1<Dt){for(var tt=Array(Dt),xt=0;xt<Dt;xt++)tt[xt]=arguments[xt+2];ot.children=tt}return R(H.type,Mt,ot)},ue.createContext=function(H){return H={$$typeof:h,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},ue.createElement=function(H,dt,et){var ot,Mt={},Dt=null;if(dt!=null)for(ot in dt.key!==void 0&&(Dt=""+dt.key),dt)C.call(dt,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(Mt[ot]=dt[ot]);var tt=arguments.length-2;if(tt===1)Mt.children=et;else if(1<tt){for(var xt=Array(tt),Vt=0;Vt<tt;Vt++)xt[Vt]=arguments[Vt+2];Mt.children=xt}if(H&&H.defaultProps)for(ot in tt=H.defaultProps,tt)Mt[ot]===void 0&&(Mt[ot]=tt[ot]);return R(H,Dt,Mt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(H){return{$$typeof:d,render:H}},ue.isValidElement=J,ue.lazy=function(H){return{$$typeof:v,_payload:{_status:-1,_result:H},_init:vt}},ue.memo=function(H,dt){return{$$typeof:p,type:H,compare:dt===void 0?null:dt}},ue.startTransition=Bt,ue.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ue.use=function(H){return P.H.use(H)},ue.useActionState=function(H,dt,et){return P.H.useActionState(H,dt,et)},ue.useCallback=function(H,dt){return P.H.useCallback(H,dt)},ue.useContext=function(H){return P.H.useContext(H)},ue.useDebugValue=function(){},ue.useDeferredValue=function(H,dt){return P.H.useDeferredValue(H,dt)},ue.useEffect=function(H,dt){return P.H.useEffect(H,dt)},ue.useEffectEvent=function(H){return P.H.useEffectEvent(H)},ue.useId=function(){return P.H.useId()},ue.useImperativeHandle=function(H,dt,et){return P.H.useImperativeHandle(H,dt,et)},ue.useInsertionEffect=function(H,dt){return P.H.useInsertionEffect(H,dt)},ue.useLayoutEffect=function(H,dt){return P.H.useLayoutEffect(H,dt)},ue.useMemo=function(H,dt){return P.H.useMemo(H,dt)},ue.useOptimistic=function(H,dt){return P.H.useOptimistic(H,dt)},ue.useReducer=function(H,dt,et){return P.H.useReducer(H,dt,et)},ue.useRef=function(H){return P.H.useRef(H)},ue.useState=function(H){return P.H.useState(H)},ue.useSyncExternalStore=function(H,dt,et){return P.H.useSyncExternalStore(H,dt,et)},ue.useTransition=function(){return P.H.useTransition()},ue.version="19.3.0",ue}var Z0;function Tp(){return Z0||(Z0=1,$h.exports=xM()),$h.exports}var td={exports:{}},Cn={};var K0;function yM(){if(K0)return Cn;K0=1;var o=Tp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:y}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.browser=function(v){return{$$typeof:f,_reason:v}},Cn.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,y)},Cn.flushSync=function(v){var m=g.T,y=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=m,s.p=y,s.d.f()}},Cn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Cn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Cn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:w}):y==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Cn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin);s.d.L(v,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=p(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Cn.requestFormReset=function(v){s.d.r(v)},Cn.unstable_batchedUpdates=function(v,m){return v(m)},Cn.useFormState=function(v,m,y){return g.H.useFormState(v,m,y)},Cn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Cn.version="19.3.0",Cn}var Q0;function SM(){if(Q0)return td.exports;Q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=yM(),td.exports}var J0;function MM(){if(J0)return Jo;J0=1;var o=vM(),e=Tp(),a=SM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var _=!1,E=l.child;E;){if(E===i){_=!0,i=l,r=c;break}if(E===r){_=!0,r=l,i=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===i){_=!0,i=c,r=l;break}if(E===r){_=!0,r=c,i=l;break}E=E.sibling}if(!_)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=y(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,r))return!0;i=i.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,L=null;function z(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function D(t,n,i){return t===i?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var O=Object.assign,P=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ut=Symbol.for("react.consumer"),nt=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),et=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case rt:return"Profiler";case J:return"StrictMode";case K:return"Suspense";case j:return"SuspenseList";case Bt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case nt:return t.displayName||"Context";case ut:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Dt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Dt(t(n))}catch{}}return null}var tt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Re=[],ae=-1;function Jt(t){return{current:t}}function Lt(t){0>ae||(t.current=Re[ae],Re[ae]=null,ae--)}function re(t,n){ae++,Re[ae]=t.current,t.current=n}var Ht=Jt(null),le=Jt(null),qe=Jt(null),Ye=Jt(null);function U(t,n){switch(re(qe,n),re(le,t),re(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$_(n),t=t0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),re(Ht,t)}function T(){Lt(Ht),Lt(le),Lt(qe)}function st(t){var n=t.memoizedState;n!==null&&(Os._currentValue=n.memoizedState,re(Ye,t)),n=Ht.current;var i=t0(n,t.type);n!==i&&(re(le,t),re(Ht,i))}function gt(t){le.current===t&&(Lt(Ht),Lt(le)),Ye.current===t&&(Lt(Ye),Os._currentValue=I)}var Et,pt;function kt(t){if(Et===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",pt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+pt}var Ct=!1;function Wt(t,n){if(!t||Ct)return"";Ct=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Nt){var Y=Nt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Nt){Y=Nt}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){Y=Nt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Nt){if(Nt&&Y&&typeof Nt.stack=="string")return[Nt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var N=_.split(`
`),Z=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===Z.length)for(r=N.length-1,l=Z.length-1;1<=r&&0<=l&&N[r]!==Z[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==Z[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==Z[l]){var lt=`
`+N[r].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=r&&0<=l);break}}}finally{Ct=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function At(t){try{var n="",i=null;do n+=Qt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,Kt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,fe=o.unstable_requestPaint,q=o.unstable_now,Rt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ce=o.log,Ve=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof ce=="function"&&Ve(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Un=Math.clz32?Math.clz32:vl,$i=Math.log,so=Math.LN2;function vl(t){return t>>>=0,t===0?32:31-($i(t)/so|0)|0}var pr=256,ta=262144,mr=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ci(r):(_&=E,_!==0?l=ci(_):i||(i=E&~t,i!==0&&(l=ci(i))))):(E=r&~c,E!==0?l=ci(E):_!==0?l=ci(_):i||(i=r&~t,i!==0&&(l=ci(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Ra(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xl(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Un(i),l=1<<r;n|=t[r],i&=~l}return n}function Mc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var t=mr;return mr<<=1,(mr&62914560)===0&&(mr=4194304),t}function oo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function _r(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ec(t,n,i,r,l,c){var _=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,Z=t.hiddenUpdates;for(i=_&~i;0<i;){var lt=31-Un(i),_t=1<<lt;E[lt]=0,N[lt]=-1;var Y=Z[lt];if(Y!==null)for(Z[lt]=null,lt=0;lt<Y.length;lt++){var at=Y[lt];at!==null&&(at.lane&=-536870913)}i&=~_t}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function A(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Un(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Q(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Un(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function ct(t,n){var i=n&-n;return i=(i&42)!==0?1:ht(i),(i&(t.suspendedLanes|n))!==0?0:i}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function Pt(t,n){var i=Vt.p;try{return Vt.p=t,n()}finally{Vt.p=i}}var Ft=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ft,qt="__reactProps$"+Ft,ne="__reactContainer$"+Ft,te="__reactEvents$"+Ft,ve="__reactListeners$"+Ft,Ie="__reactHandles$"+Ft,Qe="__reactResources$"+Ft,Ne="__reactMarker$"+Ft,Ce="__reactLoad$"+Ft;function ee(t){delete t[wt],delete t[qt],delete t[ve],delete t[Ie]}function Le(t){var n;if(n=t[wt])return n;for(var i=t.parentNode;i;){if(n=i[ne]||i[wt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=_0(t);t!==null;){if(i=t[wt])return i;t=_0(t)}return n}t=i,i=t.parentNode}return null}function ge(t){if(t=t[wt]||t[ne]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Jn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ca(t){t[Ce]=void 0}var We=new Set,In={};function ln(t,n){en(t,n),en(t+"Capture",n)}function en(t,n){for(In[t]=n,t=0;t<n.length;t++)We.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Oi={};function Ox(t){return Ot.call(Oi,t)?!0:Ot.call(Qr,t)?!1:Nn.test(t)?Oi[t]=!0:(Qr[t]=!0,!1)}var De=!1;function Fp(){var t=De;return De=!1,t}function Sl(t,n,i){if(Ox(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Ml(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ea(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zx(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){i=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(_){i=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tc(t){if(!t._valueTracker){var n=Hp(t)?"checked":"value";t._valueTracker=zx(t,n,""+t[n])}}function Gp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Hp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var Px=/[\n"\\]/g;function fi(t){return t.replace(Px,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bc(t,n,i,r,l,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Ac(t,$n(t.value)):Ac(t,$n(n)):i!=null?Ac(t,$n(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$n(E):t.removeAttribute("name")}function Vp(t,n,i,r,l,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Tc(t);return}i=i!=null?""+$n(i):"",n=n!=null?""+$n(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Tc(t)}function Ac(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Jr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+$n(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Xp(t,n,i){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+$n(i):""}function kp(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=$n(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Tc(t)}function $r(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qp(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||Ix.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function jp(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",De=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(qp(t,l,r),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&qp(t,c,n[c])}function Rc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Fx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Cc=null;function wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,es=null;function Yp(t){var n=ge(t);if(n&&(t=n.stateNode)){var i=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(bc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[qt]||null;if(!l)throw Error(s(90));bc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Gp(r)}break t;case"textarea":Xp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Jr(t,!!i.multiple,n,!1)}}}var Dc=!1;function Wp(t,n,i){if(Dc)return t(n,i);Dc=!0;try{var r=t(n);return r}finally{if(Dc=!1,(ts!==null||es!==null)&&(Eu(),ts&&(n=ts,t=es,es=ts=null,Yp(n),t)))for(n=0;n<t.length;n++)Yp(t[n])}}function lo(t,n){var i=t.stateNode;if(i===null)return null;var r=i[qt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=!1;if(na)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Uc=!1}var wa=null,Nc=null,Tl=null;function Zp(){if(Tl)return Tl;var t,n=Nc,i=n.length,r,l="value"in wa?wa.value:wa.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var _=i-t;for(r=1;r<=_&&n[i-r]===l[c-r];r++);return Tl=l.slice(t,1<r?1-r:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Kp(){return!1}function Bn(t){function n(i,r,l,c,_){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Al:Kp,this.isPropagationStopped=Kp,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Bn(Da),co=O({},Da,{view:0,detail:0}),Hx=Bn(co),Lc,Oc,fo,Cl=O({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Lc=t.screenX-fo.screenX,Oc=t.screenY-fo.screenY):Oc=Lc=0,fo=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Qp=Bn(Cl),Gx=O({},Cl,{dataTransfer:0}),Vx=Bn(Gx),Xx=O({},co,{relatedTarget:0}),zc=Bn(Xx),kx=O({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=Bn(kx),jx=O({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yx=Bn(jx),Wx=O({},Da,{data:0}),Jp=Bn(Wx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qx[t])?!!n[t]:!1}function Pc(){return Jx}var $x=O({},co,{key:function(t){if(t.key){var n=Zx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=Bn($x),ey=O({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Bn(ey),ny=O({},Da,{submitter:0}),iy=Bn(ny),ay=O({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),ry=Bn(ay),sy=O({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Bn(sy),ly=O({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=Bn(ly),cy=O({},Da,{newState:0,oldState:0,source:0}),fy=Bn(cy),hy=[9,13,27,32],Ic=na&&"CompositionEvent"in window,ho=null;na&&"documentMode"in document&&(ho=document.documentMode);var dy=na&&"TextEvent"in window&&!ho,tm=na&&(!Ic||ho&&8<ho&&11>=ho),em=" ",nm=!1;function im(t,n){switch(t){case"keyup":return hy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function py(t,n){switch(t){case"compositionend":return am(n);case"keypress":return n.which!==32?null:(nm=!0,em);case"textInput":return t=n.data,t===em&&nm?null:t;default:return null}}function my(t,n){if(ns)return t==="compositionend"||!Ic&&im(t,n)?(t=Zp(),Tl=Nc=wa=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tm&&n.locale!=="ko"?null:n.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!gy[t.type]:n==="textarea"}function sm(t,n,i,r){ts?es?es.push(r):es=[r]:ts=r,n=wu(n,"onChange"),0<n.length&&(i=new Rl("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var po=null,mo=null;function _y(t){Y_(t,0)}function wl(t){var n=mn(t);if(Gp(n))return t}function om(t,n){if(t==="change")return n}var lm=!1;if(na){var Bc;if(na){var Fc="oninput"in document;if(!Fc){var um=document.createElement("div");um.setAttribute("oninput","return;"),Fc=typeof um.oninput=="function"}Bc=Fc}else Bc=!1;lm=Bc&&(!document.documentMode||9<document.documentMode)}function cm(){po&&(po.detachEvent("onpropertychange",fm),mo=po=null)}function fm(t){if(t.propertyName==="value"&&wl(mo)){var n=[];sm(n,mo,t,wc(t)),Wp(_y,n)}}function vy(t,n,i){t==="focusin"?(cm(),po=n,mo=i,po.attachEvent("onpropertychange",fm)):t==="focusout"&&cm()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(mo)}function yy(t,n){if(t==="click")return wl(n)}function Sy(t,n){if(t==="input"||t==="change")return wl(n)}function My(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:My;function go(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(n,l)||!ti(t[l],n[l]))return!1}return!0}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,n){var i=hm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=hm(i)}}function pm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Hc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Hc(t.document)}return n}function Gc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ey=na&&"documentMode"in document&&11>=document.documentMode,is=null,Vc=null,_o=null,Xc=!1;function gm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Xc||is==null||is!==Hc(r)||(r=is,"selectionStart"in r&&Gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&go(_o,r)||(_o=r,r=wu(Vc,"onSelect"),0<r.length&&(n=new Rl("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=is)))}function vr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var as={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},kc={},_m={};na&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function xr(t){if(kc[t])return kc[t];if(!as[t])return t;var n=as[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in _m)return kc[t]=n[i];return t}var vm=xr("animationend"),xm=xr("animationiteration"),ym=xr("animationstart"),Ty=xr("transitionrun"),by=xr("transitionstart"),Ay=xr("transitioncancel"),Sm=xr("transitionend"),Mm=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function Ei(t,n){Mm.set(t,n),ln(n,[t])}var Ry=0;function ia(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var i=Ry++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Em(t){if(t==null||typeof t=="string")return t;var n=null,i=Ts;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function aa(t,n){return t=Em(t),n=Em(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],rs=0,jc=0;function Ul(){for(var t=rs,n=jc=rs=0;n<t;){var i=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var _=r.pending;_===null?l.next=l:(l.next=_.next,_.next=l),r.pending=l}c!==0&&Tm(i,l,c)}}function Nl(t,n,i,r){hi[rs++]=t,hi[rs++]=n,hi[rs++]=i,hi[rs++]=r,jc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Yc(t,n,i,r){return Nl(t,n,i,r),Ll(t)}function yr(t,n){return Nl(t,null,null,n),Ll(t)}function Tm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Un(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Ll(t){if(50<Fo)throw Fo=0,Mu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function Cy(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,i,r){return new Cy(t,n,i,r)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var i=t.alternate;return i===null?(i=kn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function bm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ol(t,n,i,r,l,c){var _=0;if(r=t,typeof r=="function")Wc(r)&&(_=1);else if(typeof r=="string")_=nM(t,i,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Bt:return t=kn(31,i,n,l),t.elementType=Bt,t.lanes=c,t;case B:return Sr(i.children,l,c,n);case J:_=8,l|=24;break;case rt:return t=kn(12,i,n,l|2),t.elementType=rt,t.lanes=c,t;case K:return t=kn(13,i,n,l),t.elementType=K,t.lanes=c,t;case j:return t=kn(19,i,n,l),t.elementType=j,t.lanes=c,t;case Zt:case H:return t=l|32,t=kn(30,i,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case nt:_=10;break t;case ut:_=9;break t;case F:_=11;break t;case vt:_=14;break t;case yt:_=16,r=null;break t}_=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(_,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Sr(t,n,i,r){return t=kn(7,t,r,n),t.lanes=i,t}function Zc(t,n,i){return t=kn(6,t,null,n),t.lanes=i,t}function Am(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function Kc(t,n,i){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var i=Rm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:At(n)},Rm.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var os=[],ls=0,zl=null,vo=0,pi=[],mi=0,Ua=null,Pi=1,Ii="";function sa(t,n){os[ls++]=vo,os[ls++]=zl,zl=t,vo=n}function Cm(t,n,i){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Ua=t;var r=Pi;t=Ii;var l=32-Un(r)-1;r&=~(1<<l),i+=1;var c=32-Un(n)+l;if(30<c){var _=l-l%5;c=(r&(1<<_)-1).toString(32),r>>=_,l-=_,Pi=1<<32-Un(n)+l|i<<l|r,Ii=c+t}else Pi=1<<c|i<<l|r,Ii=t}function Pl(t){t.return!==null&&(sa(t,1),Cm(t,1,0))}function Qc(t){for(;t===zl;)zl=os[--ls],os[ls]=null,vo=os[--ls],os[ls]=null;for(;t===Ua;)Ua=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function wm(t,n){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Pi=n.id,Ii=n.overflow,Ua=t}var xn=null,Ze=null,_e=!1,Na=null,gi=!1,Jc=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(di(n,t)),Jc}function Dm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[wt]=t,n[qt]=r,i){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<Go.length;i++)ye(Go[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Vp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),kp(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||Q_(n.textContent,i)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||La(t,!0)}function Il(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:xn=xn.return}}function us(t){if(t!==xn)return!1;if(!_e)return Il(t),_e=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||wh(t.type,t.memoizedProps)),i=!i),i&&Ze&&La(t),Il(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=g0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=g0(t)}else n===27?(n=Ze,Za(t.type)?(t=Bh,Bh=null,Ze=t):Ze=n):Ze=xn?vi(t.stateNode.nextSibling):null;return!0}function Mr(){Ze=xn=null,_e=!1}function $c(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function xo(t){Na===null?Na=[t]:Na.push(t)}var tf=Jt(null),Er=null,oa=null;function Oa(t,n,i){re(tf,n._currentValue),n._currentValue=i}function la(t){t._currentValue=tf.current,Lt(tf)}function Bl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function ef(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Bl(c.return,i,t),r||(_=null);break t}c=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(s(341));_.lanes|=i,c=_.alternate,c!==null&&(c.lanes|=i),Bl(_,i,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,_=l.alternate,_!==null&&(_.lanes|=i),Bl(l.return,i,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function Tr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=l.type;ti(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===Ye.current){if(_=l.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}l=l.return}return t!==null&&ef(n,t,i,r),n.flags|=262144,t!==null}function Fl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Um(Er,t)}function Hl(t,n){return Er===null&&br(t),Um(t,n)}function Um(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return i}var wy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Dy=o.unstable_scheduleCallback,Uy=o.unstable_NormalPriority,un={$$typeof:nt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new wy,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&Dy(Uy,function(){t.controller.abort()})}function Nm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var So=null;function Ny(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Mo=null,af=0,Ar=0,cs=null;function Ly(t,n){if(Mo===null){var i=Mo=[];af=0,Ar=yh(),cs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return af++,n.then(Lm,Lm),n}function Lm(){if(--af===0&&(So=null,Mo!==null)){cs!==null&&(cs.status="fulfilled");var t=Mo;Mo=null,Ar=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Oy(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Om=xt.S;xt.S=function(t,n){if(A_=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ly(t,n),So!==null)for(var i=Cs;i!==null;)Nm(i,So),i=i.next;if(i=t.types,i!==null){for(var r=Cs;r!==null;)Nm(r,i),r=r.next;if(Ar!==0){r=So,r===null&&(r=So=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Om!==null&&Om(t,n)};var Rr=Jt(null);function rf(){var t=Rr.current;return t!==null?t:je.pooledCache}function Gl(t,n){n===null?re(Rr,Rr.current):re(Rr,n.pool)}function zm(){var t=rf();return t===null?null:{parent:un._currentValue,pool:t}}var fs=Error(s(460)),sf=Error(s(474)),Vl=Error(s(542)),Xl={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(zi,zi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t}throw wr=n,fs}}function Cr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(wr=i,fs):i}}var wr=null;function Bm(){if(wr===null)throw Error(s(459));var t=wr;return wr=null,t}function Fm(t){if(t===fs||t===Vl)throw Error(s(483))}var hs=null,Eo=0;function kl(t){var n=Eo;return Eo+=1,hs===null&&(hs=[]),Im(hs,t,n)}function za(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ql(t,n){throw n.$$typeof===P?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hm(t){function n(W,k){if(t){var it=W.deletions;it===null?(W.deletions=[k],W.flags|=16):it.push(k)}}function i(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function r(W){for(var k=new Map;W!==null;)W.key===null?k.set(W.index,W):k.set(W.key,W),W=W.sibling;return k}function l(W,k){return W=ra(W,k),W.index=0,W.sibling=null,W}function c(W,k,it){return W.index=it,t?(it=W.alternate,it!==null?(it=it.index,it<k?(W.flags|=2,k):it):(W.flags|=134217730,k)):(W.flags|=1048576,k)}function _(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,k,it,mt){return k===null||k.tag!==6?(k=Zc(it,W.mode,mt),k.return=W,k):(k=l(k,it),k.return=W,k)}function N(W,k,it,mt){var Gt=it.type;return Gt===B?(W=lt(W,k,it.props.children,mt,it.key),za(W,it),W):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Cr(Gt)===k.type)?(k=l(k,it.props),za(k,it),k.return=W,k):(k=Ol(it.type,it.key,it.props,null,W.mode,mt),za(k,it),k.return=W,k)}function Z(W,k,it,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==it.containerInfo||k.stateNode.implementation!==it.implementation?(k=Kc(it,W.mode,mt),k.return=W,k):(k=l(k,it.children||[]),k.return=W,k)}function lt(W,k,it,mt,Gt){return k===null||k.tag!==7?(k=Sr(it,W.mode,mt,Gt),k.return=W,k):(k=l(k,it),k.return=W,k)}function _t(W,k,it){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Zc(""+k,W.mode,it),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return it=Ol(k.type,k.key,k.props,null,W.mode,it),za(it,k),it.return=W,it;case R:return k=Kc(k,W.mode,it),k.return=W,k;case yt:return k=Cr(k),_t(W,k,it)}if(tt(k)||ot(k))return k=Sr(k,W.mode,it,null),k.return=W,k;if(typeof k.then=="function")return _t(W,kl(k),it);if(k.$$typeof===nt)return _t(W,Hl(W,k),it);ql(W,k)}return null}function Y(W,k,it,mt){var Gt=k!==null?k.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Gt!==null?null:E(W,k,""+it,mt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case C:return it.key===Gt?N(W,k,it,mt):null;case R:return it.key===Gt?Z(W,k,it,mt):null;case yt:return it=Cr(it),Y(W,k,it,mt)}if(tt(it)||ot(it))return Gt!==null?null:lt(W,k,it,mt,null);if(typeof it.then=="function")return Y(W,k,kl(it),mt);if(it.$$typeof===nt)return Y(W,k,Hl(W,it),mt);ql(W,it)}return null}function at(W,k,it,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return W=W.get(it)||null,E(k,W,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case C:return W=W.get(mt.key===null?it:mt.key)||null,N(k,W,mt,Gt);case R:return W=W.get(mt.key===null?it:mt.key)||null,Z(k,W,mt,Gt);case yt:return mt=Cr(mt),at(W,k,it,mt,Gt)}if(tt(mt)||ot(mt))return W=W.get(it)||null,lt(k,W,mt,Gt,null);if(typeof mt.then=="function")return at(W,k,it,kl(mt),Gt);if(mt.$$typeof===nt)return at(W,k,it,Hl(k,mt),Gt);ql(k,mt)}return null}function Nt(W,k,it,mt){for(var Gt=null,Te=null,$t=k,se=k=0,hn=null;$t!==null&&se<it.length;se++){$t.index>se?(hn=$t,$t=null):hn=$t.sibling;var Ae=Y(W,$t,it[se],mt);if(Ae===null){$t===null&&($t=hn);break}t&&$t&&Ae.alternate===null&&n(W,$t),k=c(Ae,k,se),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae,$t=hn}if(se===it.length)return i(W,$t),_e&&sa(W,se),Gt;if($t===null){for(;se<it.length;se++)$t=_t(W,it[se],mt),$t!==null&&(k=c($t,k,se),Te===null?Gt=$t:Te.sibling=$t,Te=$t);return _e&&sa(W,se),Gt}for($t=r($t);se<it.length;se++)hn=at($t,W,se,it[se],mt),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&$t.delete(Ae.key===null?se:Ae.key)),k=c(hn,k,se),Te===null?Gt=hn:Te.sibling=hn,Te=hn);return t&&$t.forEach(function(tr){return n(W,tr)}),_e&&sa(W,se),Gt}function jt(W,k,it,mt){if(it==null)throw Error(s(151));for(var Gt=null,Te=null,$t=k,se=k=0,hn=null,Ae=it.next();$t!==null&&!Ae.done;se++,Ae=it.next()){$t.index>se?(hn=$t,$t=null):hn=$t.sibling;var tr=Y(W,$t,Ae.value,mt);if(tr===null){$t===null&&($t=hn);break}t&&$t&&tr.alternate===null&&n(W,$t),k=c(tr,k,se),Te===null?Gt=tr:Te.sibling=tr,Te=tr,$t=hn}if(Ae.done)return i(W,$t),_e&&sa(W,se),Gt;if($t===null){for(;!Ae.done;se++,Ae=it.next())Ae=_t(W,Ae.value,mt),Ae!==null&&(k=c(Ae,k,se),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return _e&&sa(W,se),Gt}for($t=r($t);!Ae.done;se++,Ae=it.next())Ae=at($t,W,se,Ae.value,mt),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&$t.delete(hn.key===null?se:hn.key)),k=c(Ae,k,se),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return t&&$t.forEach(function(pM){return n(W,pM)}),_e&&sa(W,se),Gt}function de(W,k,it,mt){if(typeof it=="object"&&it!==null&&it.type===B&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case C:t:{for(var Gt=it.key;k!==null;){if(k.key===Gt){if(Gt=it.type,Gt===B){if(k.tag===7){i(W,k.sibling),mt=l(k,it.props.children),za(mt,it),mt.return=W,W=mt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Cr(Gt)===k.type){i(W,k.sibling),mt=l(k,it.props),za(mt,it),mt.return=W,W=mt;break t}i(W,k);break}else n(W,k);k=k.sibling}it.type===B?(mt=Sr(it.props.children,W.mode,mt,it.key),za(mt,it),mt.return=W,W=mt):(mt=Ol(it.type,it.key,it.props,null,W.mode,mt),za(mt,it),mt.return=W,W=mt)}return _(W);case R:t:{for(Gt=it.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===it.containerInfo&&k.stateNode.implementation===it.implementation){i(W,k.sibling),mt=l(k,it.children||[]),mt.return=W,W=mt;break t}else{i(W,k);break}else n(W,k);k=k.sibling}mt=Kc(it,W.mode,mt),mt.return=W,W=mt}return _(W);case yt:return it=Cr(it),de(W,k,it,mt)}if(tt(it))return Nt(W,k,it,mt);if(ot(it)){if(Gt=ot(it),typeof Gt!="function")throw Error(s(150));return it=Gt.call(it),jt(W,k,it,mt)}if(typeof it.then=="function")return de(W,k,kl(it),mt);if(it.$$typeof===nt)return de(W,k,Hl(W,it),mt);ql(W,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,k!==null&&k.tag===6?(i(W,k.sibling),mt=l(k,it),mt.return=W,W=mt):(i(W,k),mt=Zc(it,W.mode,mt),mt.return=W,W=mt),_(W)):i(W,k)}return function(W,k,it,mt){try{Eo=0;var Gt=de(W,k,it,mt);return hs=null,Gt}catch($t){if($t===fs||$t===Vl)throw $t;var Te=kn(29,$t,null,W.mode);return Te.lanes=mt,Te.return=W,Te}}}var Dr=Hm(!0),Gm=Hm(!1),Pa=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Ll(t),Tm(t,null,i),n}return Nl(t,r,n,i),Ll(t)}function To(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Q(t,i)}}function uf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var _={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var cf=!1;function bo(){if(cf){var t=cs;if(t!==null)throw t}}function Ao(t,n,i,r){cf=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,Z=N.next;N.next=null,_===null?c=Z:_.next=Z,_=N;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,E=lt.lastBaseUpdate,E!==_&&(E===null?lt.firstBaseUpdate=Z:E.next=Z,lt.lastBaseUpdate=N))}if(c!==null){var _t=l.baseState;_=0,lt=Z=N=null,E=c;do{var Y=E.lane&-536870913,at=Y!==E.lane;if(at?(Ee&Y)===Y:(r&Y)===Y){Y!==0&&Y===Ar&&(cf=!0),lt!==null&&(lt=lt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,jt=E;Y=n;var de=i;switch(jt.tag){case 1:if(Nt=jt.payload,typeof Nt=="function"){_t=Nt.call(de,_t,Y);break t}_t=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=jt.payload,Y=typeof Nt=="function"?Nt.call(de,_t,Y):Nt,Y==null)break t;_t=O({},_t,Y);break t;case 2:Pa=!0}}Y=E.callback,Y!==null&&(t.flags|=64,at&&(t.flags|=8192),at=l.callbacks,at===null?l.callbacks=[Y]:at.push(Y))}else at={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},lt===null?(Z=lt=at,N=_t):lt=lt.next=at,_|=Y;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;at=E,E=at.next,at.next=null,l.lastBaseUpdate=at,l.shared.pending=null}}while(!0);lt===null&&(N=_t),l.baseState=N,l.firstBaseUpdate=Z,l.lastBaseUpdate=lt,c===null&&(l.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=_t}}function Vm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Xm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Vm(i[t],n)}var Fa=Jt(null),jl=Jt(0);function km(t,n){t=da,re(jl,t),re(Fa,n),da=t|n.baseLanes}function ff(){re(jl,da),re(Fa,Fa.current)}function hf(){da=jl.current,Lt(Fa),Lt(jl)}var Tn=Jt(null),Ln=null;function Ha(t){var n=t.alternate;re(bn,bn.current&1),re(Tn,t),Ln===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(Ln=t)}function df(t){re(bn,bn.current),re(Tn,t),Ln===null&&(Ln=t)}function qm(t){t.tag===22?(re(bn,bn.current),re(Tn,t),Ln===null&&(Ln=t)):Ga()}function Ga(){re(bn,bn.current),re(Tn,Tn.current)}function ei(t){Lt(Tn),Ln===t&&(Ln=null),Lt(bn)}var bn=Jt(0);function Ro(t,n){re(Tn,Tn.current),re(bn,n)}function pf(t){Lt(bn),Lt(Tn),Ln===t&&(Ln=null)}function Yl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Ph(i)||Ih(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,he=null,Xe=null,cn=null,Wl=!1,ds=!1,Ur=!1,Zl=0,Co=0,ps=null,zy=0;function nn(){throw Error(s(321))}function mf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!ti(t[i],n[i]))return!1;return!0}function gf(t,n,i,r,l,c){return ua=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?Cg:wg,Ur=!1,c=i(r,l),Ur=!1,ds&&(c=Ym(n,i,r,l)),jm(t),c}function jm(t){xt.H=nu;var n=Xe!==null&&Xe.next!==null;if(ua=0,cn=Xe=he=null,Wl=!1,Co=0,ps=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Fl(t)&&(fn=!0))}function Ym(t,n,i,r){he=t;var l=0;do{if(ds&&(ps=null),Co=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=Xy,c=n(i,r)}while(ds);return c}function Py(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(he.flags|=1024),n}function _f(){var t=Zl!==0;return Zl=0,t}function vf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function xf(t){if(Wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Wl=!1}ua=0,cn=Xe=he=null,ds=!1,Co=Zl=0,ps=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Xe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Xe=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?he.memoizedState=cn=t:cn=cn.next=t}return cn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Co;return Co+=1,ps===null&&(ps=[]),t=Im(ps,t,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?Cg:wg),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===dt)return;if(t.$$typeof===nt)return En(t)}throw Error(s(438,String(t)))}function yf(t){var n=null,i=he.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Kl(),he.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=oe;return n.index++,i}function ca(t,n){return typeof n=="function"?n(t):n}function Jl(t){var n=sn();return Sf(n,Xe,t)}function Sf(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=_=null,N=null,Z=n,lt=!1;do{var _t=Z.lane&-536870913;if(_t!==Z.lane?(Ee&_t)===_t:(ua&_t)===_t){var Y=Z.revertLane;if(Y===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),_t===Ar&&(lt=!0);else if((ua&Y)===Y){Z=Z.next,Y===Ar&&(lt=!0);continue}else _t={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=_t,_=c):N=N.next=_t,he.lanes|=Y,qa|=Y;_t=Z.action,Ur&&i(c,_t),c=Z.hasEagerState?Z.eagerState:i(c,_t)}else Y={lane:_t,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=Y,_=c):N=N.next=Y,he.lanes|=_t,qa|=_t;Z=Z.next}while(Z!==null&&Z!==n);if(N===null?_=c:N.next=E,!ti(c,t.memoizedState)&&(fn=!0,lt&&(i=cs,i!==null)))throw i;t.memoizedState=c,t.baseState=_,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Mf(t){var n=sn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ti(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function Wm(t,n,i){var r=he,l=sn(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var _=!ti((Xe||l).memoizedState,i);if(_&&(l.memoizedState=i,fn=!0),l=l.queue,bf(Qm.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||_||cn!==null&&(cn.memoizedState.tag&1)!==0,ms(t?9:8,{destroy:void 0},Km.bind(null,r,l,i,n),null),t){if(r.flags|=2048,je===null)throw Error(s(349));c||(ua&127)!==0||Zm(r,n,i)}return i}function Zm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=he.updateQueue,n===null?(n=Kl(),he.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Km(t,n,i,r){n.value=i,n.getSnapshot=r,Jm(n)&&$m(t)}function Qm(t,n,i){return i(function(){Jm(n)&&$m(t)})}function Jm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!ti(t,i)}catch{return!0}}function $m(t){var n=yr(t,2);n!==null&&Wn(n,t,2)}function Ef(t){var n=Fn();if(typeof t=="function"){var i=t;if(t=i(),Ur){pn(!0);try{i()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function tg(t,n,i,r){return t.baseState=i,Sf(t,Xe,typeof r=="function"?r:ca)}function Iy(t,n,i,r,l){if(eu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};xt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,eg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function eg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=xt.T,_={};_.types=c!==null?c.types:null,xt.T=_;try{var E=i(l,r),N=xt.S;N!==null&&N(_,E),ng(t,n,E)}catch(Z){Tf(t,n,Z)}finally{c!==null&&_.types!==null&&(c.types=_.types),xt.T=c}}else try{c=i(l,r),ng(t,n,c)}catch(Z){Tf(t,n,Z)}}function ng(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){ig(t,n,r)},function(r){return Tf(t,n,r)}):ig(t,n,i)}function ig(t,n,i){n.status="fulfilled",n.value=i,ag(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,eg(t,i)))}function Tf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,ag(n),n=n.next;while(n!==r)}t.action=null}function ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rg(t,n){return n}function sg(t,n){if(_e){var i=je.formState;if(i!==null){t:{var r=he;if(_e){if(Ze){e:{for(var l=Ze,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=vi(l.nextSibling),r=l.data==="F!";break t}}La(r)}r=!1}r&&(n=i[0])}}return i=Fn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:n},i.queue=r,i=bg.bind(null,he,r),r.dispatch=i,r=Ef(!1),c=Df.bind(null,he,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=Iy.bind(null,he,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function og(t){var n=sn();return lg(n,Xe,t)}function lg(t,n,i){if(n=Sf(t,n,rg)[0],t=Jl(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=wo(n)}catch(_){throw _===fs?Vl:_}else r=n;n=sn();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(he.flags|=2048,ms(9,{destroy:void 0},By.bind(null,l,i),null)),[r,c,t]}function By(t,n){t.action=n}function ug(t){var n=sn(),i=Xe;if(i!==null)return lg(n,i,t);sn(),n=n.memoizedState,i=sn();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function ms(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=Kl(),he.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function cg(){return sn().memoizedState}function $l(t,n,i,r){var l=Fn();he.flags|=t,l.memoizedState=ms(1|n,{destroy:void 0},i,r===void 0?null:r)}function tu(t,n,i,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&mf(r,Xe.memoizedState.deps)?l.memoizedState=ms(n,c,i,r):(he.flags|=t,l.memoizedState=ms(1|n,c,i,r))}function fg(t,n){$l(8390656,8,t,n)}function bf(t,n){tu(2048,8,t,n)}function Fy(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Kl(),he.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function hg(t){var n=sn().memoizedState;return Fy({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dg(t,n){return tu(4,2,t,n)}function pg(t,n){return tu(4,4,t,n)}function mg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gg(t,n,i){i=i!=null?i.concat([t]):null,tu(4,4,mg.bind(null,n,t),i)}function Af(){}function _g(t,n){var i=sn();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&mf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function vg(t,n){var i=sn();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&mf(n,r[1]))return r[0];if(r=t(),Ur){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r}function Rf(t,n,i){return i===void 0||(ua&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=C_(),he.lanes|=t,qa|=t,i)}function xg(t,n,i,r){return ti(i,n)?i:Fa.current!==null?(t=Rf(t,i,r),ti(t,n)||(fn=!0),t):(ua&106)===0||(ua&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=i):(t=C_(),he.lanes|=t,qa|=t,n)}function yg(t,n,i,r,l){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var _=xt.T,E={};E.types=_!==null?_.types:null,xt.T=E,Df(t,!1,n,i);try{var N=l(),Z=xt.S;if(Z!==null&&Z(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=Oy(N,r);Do(t,n,lt,ri(t))}else Do(t,n,r,ri(t))}catch(_t){Do(t,n,{then:function(){},status:"rejected",reason:_t},ri())}finally{Vt.p=c,_!==null&&E.types!==null&&(_.types=E.types),xt.T=_}}function Hy(){}function Cf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=Sg(t).queue;yg(t,l,n,I,i===null?Hy:function(){return Mg(t),i(r)})}function Sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:I},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mg(t){var n=Sg(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},ri())}function wf(){return En(Os)}function Eg(){return sn().memoizedState}function Tg(){return sn().memoizedState}function Gy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ri();t=Ia(i);var r=Ba(n,t,i);r!==null&&(Wn(r,n,i),To(r,n,i)),n={cache:nf()},t.payload=n;return}n=n.return}}function Vy(t,n,i){var r=ri();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},eu(t)?Ag(n,i):(i=Yc(t,n,i,r),i!==null&&(Wn(i,t,r),Rg(i,n,r)))}function bg(t,n,i){var r=ri();Do(t,n,i,r)}function Do(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(eu(t))Ag(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,i);if(l.hasEagerState=!0,l.eagerState=E,ti(E,_))return Nl(t,n,l,0),je===null&&Ul(),!1}catch{}if(i=Yc(t,n,l,r),i!==null)return Wn(i,t,r),Rg(i,n,r),!0}return!1}function Df(t,n,i,r){if(r={lane:2,revertLane:yh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},eu(t)){if(n)throw Error(s(479))}else n=Yc(t,i,r,2),n!==null&&Wn(n,t,2)}function eu(t){var n=t.alternate;return t===he||n!==null&&n===he}function Ag(t,n){ds=Wl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Rg(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Q(t,i)}}var nu={readContext:En,use:Ql,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},Cg={readContext:En,use:Ql,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:fg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,$l(4194308,4,mg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return $l(4194308,4,t,n)},useInsertionEffect:function(t,n){$l(4,2,t,n)},useMemo:function(t,n){var i=Fn();n=n===void 0?null:n;var r=t();if(Ur){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Fn();if(i!==void 0){var l=i(n);if(Ur){pn(!0);try{i(n)}finally{pn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Vy.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ef(t);var n=t.queue,i=bg.bind(null,he,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Af,useDeferredValue:function(t,n){var i=Fn();return Rf(i,t,n)},useTransition:function(){var t=Ef(!1);return t=yg.bind(null,he,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=he,l=Fn();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),je===null)throw Error(s(349));(Ee&127)!==0||Zm(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,fg(Qm.bind(null,r,c,t),[t]),r.flags|=2048,ms(9,{destroy:void 0},Km.bind(null,r,c,i,n),null),i},useId:function(){var t=Fn(),n=je.identifierPrefix;if(_e){var i=Ii,r=Pi;i=(r&~(1<<32-Un(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Zl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=zy++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Df.bind(null,he,!0,i),i.dispatch=n,[t,n]},useMemoCache:yf,useCacheRefresh:function(){return Fn().memoizedState=Gy.bind(null,he)},useEffectEvent:function(t){var n=Fn(),i={impl:t};return n.memoizedState=i,function(){if((Oe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},wg={readContext:En,use:Ql,useCallback:_g,useContext:En,useEffect:bf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:Jl,useRef:cg,useState:function(){return Jl(ca)},useDebugValue:Af,useDeferredValue:function(t,n){var i=sn();return xg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=Jl(ca)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Wm,useId:Eg,useHostTransitionStatus:wf,useFormState:og,useActionState:og,useOptimistic:function(t,n){var i=sn();return tg(i,Xe,t,n)},useMemoCache:yf,useCacheRefresh:Tg,useEffectEvent:hg},Xy={readContext:En,use:Ql,useCallback:_g,useContext:En,useEffect:bf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:Mf,useRef:cg,useState:function(){return Mf(ca)},useDebugValue:Af,useDeferredValue:function(t,n){var i=sn();return Xe===null?Rf(i,t,n):xg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=Mf(ca)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Wm,useId:Eg,useHostTransitionStatus:wf,useFormState:ug,useActionState:ug,useOptimistic:function(t,n){var i=sn();return Xe!==null?tg(i,Xe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:yf,useCacheRefresh:Tg,useEffectEvent:hg};function Uf(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:O({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Nf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ri(),l=Ia(r);l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(Wn(n,t,r),To(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ri(),l=Ia(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(Wn(n,t,r),To(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ri(),r=Ia(i);r.tag=2,n!=null&&(r.callback=n),n=Ba(t,r,i),n!==null&&(Wn(n,t,i),To(n,t,i))}};function Dg(t,n,i,r,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!go(i,r)||!go(l,c):!0}function Ug(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Nf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ng(t){Dl(t)}function Lg(t){console.error(t)}function Og(t){Dl(t)}function iu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zg(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Lf(t,n,i){return i=Ia(i),i.tag=3,i.payload={element:null},i.callback=function(){iu(t,n)},i}function Pg(t){return t=Ia(t),t.tag=3,t}function Ig(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){zg(n,i,r)}}var _=i.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){zg(n,i,r),typeof l!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ky(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&Tr(n,i,l,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?Tu():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Xl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),_h(t,r,l)),!1;case 22:return i.flags|=65536,r===Xl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),_h(t,r,l)),!1}throw Error(s(435,i.tag))}return _h(t,r,l),Tu(),!1}if(_e)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Jc&&(t=Error(s(422),{cause:r}),xo(di(t,i)))):(r!==Jc&&(n=Error(s(423),{cause:r}),xo(di(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,i),l=Lf(t.stateNode,r,l),uf(t,l),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,i),Bo===null?Bo=[c]:Bo.push(c),an!==4&&(an=2),n===null)return!0;r=di(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Lf(i.stateNode,r,t),uf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ja===null||!ja.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Pg(l),Ig(l,t,i,r),uf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Of=Error(s(461)),fn=!1;function gn(t,n,i,r){n.child=t===null?Gm(n,null,i,r):Dr(n,t.child,i,r)}function Bg(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return br(n),r=gf(t,n,i,_,c,l),E=_f(),t!==null&&!fn?(vf(t,n,l),fa(t,n,l)):(_e&&E&&Pl(n),n.flags|=1,gn(t,n,r,l),n.child)}function Fg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Wc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Hg(t,n,c,r,l)):(t=Ol(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Vf(t,l)){var _=c.memoizedProps;if(i=i.compare,i=i!==null?i:go,i(_,r)&&t.ref===n.ref)return fa(t,n,l)}return n.flags|=1,t=ra(c,r),t.ref=n.ref,t.return=n,n.child=t}function Hg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(go(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,Vf(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,fa(t,n,l)}return zf(t,n,i,r,l)}function Gg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Vg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,c!==null?c.cachePool:null),c!==null?km(n,c):ff(),qm(n);else return r=n.lanes=536870912,Vg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Gl(n,c.cachePool),km(n,c),Ga(),n.memoizedState=null):(t!==null&&Gl(n,null),ff(),Ga());return gn(t,n,l,i),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(t,n,i,r,l){var c=rf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Gl(n,null),ff(),qm(n),t!==null&&Tr(t,n,r,!0),n.childLanes=l,null}function au(t,n){return n=ru({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xg(t,n,i){return Dr(n,t.child,null,i),t=au(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function qy(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=au(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(df(n),(t=Ze)?(t=m0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Am(t),i.return=n,n.child=i,xn=n,Ze=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return au(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(df(n),l)if(n.flags&256)n.flags&=-257,n=Xg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Tr(t,n,i,!1),l=(i&t.childLanes)!==0,fn||l){if(Fa.current===null){if(r=je,r!==null&&(_=ct(r,i),_!==0&&_!==c.retryLane))throw c.retryLane=_,yr(t,_),Wn(r,t,_),Of;Tu()}n=Xg(t,n,i)}else t=c.treeContext,Ze=vi(_.nextSibling),xn=n,_e=!0,Na=null,gi=!1,t!==null&&wm(n,t),n=au(n,r),n.flags|=134221824;return n}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function zf(t,n,i,r,l){return br(n),i=gf(t,n,i,r,void 0,l),r=_f(),t!==null&&!fn?(vf(t,n,l),fa(t,n,l)):(_e&&r&&Pl(n),n.flags|=1,gn(t,n,i,l),n.child)}function kg(t,n,i,r,l,c){return br(n),n.updateQueue=null,i=Ym(n,r,i,l),jm(t),r=_f(),t!==null&&!fn?(vf(t,n,c),fa(t,n,c)):(_e&&r&&Pl(n),n.flags|=1,gn(t,n,i,c),n.child)}function qg(t,n,i,r,l){if(br(n),n.stateNode===null){var c=ss,_=i.contextType;typeof _=="object"&&_!==null&&(c=En(_)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Nf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},of(n),_=i.contextType,c.context=typeof _=="object"&&_!==null?En(_):ss,c.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Uf(n,i,_,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&Nf.enqueueReplaceState(c,c.state,null),Ao(n,r,c,l),bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Nr(i,E);c.props=N;var Z=c.context,lt=i.contextType;_=ss,typeof lt=="object"&&lt!==null&&(_=En(lt));var _t=i.getDerivedStateFromProps;lt=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,lt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Z!==_)&&Ug(n,c,r,_),Pa=!1;var Y=n.memoizedState;c.state=Y,Ao(n,r,c,l),bo(),Z=n.memoizedState,E||Y!==Z||Pa?(typeof _t=="function"&&(Uf(n,i,_t,r),Z=n.memoizedState),(N=Pa||Dg(n,i,N,r,Y,Z,_))?(lt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),c.props=r,c.state=Z,c.context=_,r=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,lf(t,n),_=n.memoizedProps,lt=Nr(i,_),c.props=lt,_t=n.pendingProps,Y=c.context,Z=i.contextType,N=ss,typeof Z=="object"&&Z!==null&&(N=En(Z)),E=i.getDerivedStateFromProps,(Z=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==_t||Y!==N)&&Ug(n,c,r,N),Pa=!1,Y=n.memoizedState,c.state=Y,Ao(n,r,c,l),bo();var at=n.memoizedState;_!==_t||Y!==at||Pa||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof E=="function"&&(Uf(n,i,E,r),at=n.memoizedState),(lt=Pa||Dg(n,i,lt,r,Y,at,N)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,at,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,at,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),c.props=r,c.state=at,c.context=N,r=lt):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,gs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Dr(n,t.child,null,l),n.child=Dr(n,null,i,l)):gn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=fa(t,n,l),t}function jg(t,n,i,r){return Mr(),n.flags|=256,gn(t,n,i,r),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:zm()}}function Bf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ai),t}function Yg(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(l?Ha(n):Ga(),(t=Ze)?(t=m0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Am(t),i.return=n,n.child=i,xn=n,Ze=null)):t=null,t===null)throw La(n);return Ih(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ga(),l=n.mode,c=ru({mode:"hidden",children:c},l),r=Sr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=If(i),r.childLanes=Bf(t,_,i),n.memoizedState=Pf,Uo(null,r)):(Ha(n),Ff(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return jy(t,n,c,_,r,N,E,i)}return l?(Ga(),l=r.fallback,c=n.mode,E=t.child,N=E.sibling,r=ra(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=ra(N,l):(l=Sr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Uo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=If(i):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=zm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Bf(t,_,i),n.memoizedState=Pf,Uo(t.child,r)):(Ha(n),i=t.child,t=i.sibling,i=ra(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=i,n.memoizedState=null,i)}function Ff(t,n){return n=ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ru(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function su(t,n,i){return Dr(n,t.child,null,i),t=Ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jy(t,n,i,r,l,c,_,E){if(i)return n.flags&256?(Ha(n),n.flags&=-257,su(t,n,E)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,null):(Ga(),c=l.fallback,_=n.mode,l=ru({mode:"visible",children:l.children},_),c=Sr(c,_,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Dr(n,t.child,null,E),l=n.child,l.memoizedState=If(E),l.childLanes=Bf(t,r,E),n.memoizedState=Pf,Uo(null,l));if(Ha(n),Ih(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,xo({value:l,source:null,stack:null})),su(t,n,E)}if(fn||Tr(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(Fa.current!==null)return su(t,n,E);if(r=je,r!==null&&(l=ct(r,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,yr(t,l),Wn(r,t,l),Of;return Ph(c)||Tu(),su(t,n,E)}return Ph(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=vi(c.nextSibling),xn=n,_e=!0,Na=null,gi=!1,t!==null&&wm(n,t),n=Ff(n,l.children),n.flags|=134221824,n)}function Wg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Bl(t.return,n,i)}function Zg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Yl(i)===null&&(n=t),t=t.sibling}return n}function ou(t,n,i,r,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=i,_.tailMode=l,_.treeForkCount=c)}function Hf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Gf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var _=bn.current;if(n.flags&128)return Ro(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Ro(n,_),l==="backwards"&&t!==null?(Hf(t),gn(t,n,r,i),Hf(t)):gn(t,n,r,i),r=_e?vo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,i,n);else if(t.tag===19)Wg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Zg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Hf(n)),ou(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Yl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}ou(n,!0,i,null,c,r);break;case"together":ou(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=Zg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),ou(n,!1,l,i,c,r)}return n.child}function Kg(t,n,i){var r=n.pendingProps;return Oa(n,n.type,r.value),gn(t,n,r.children,i),n.child}function fa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Tr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=ra(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ra(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function Yy(t,n,i){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Oa(n,un,t.memoizedState.cache),Mr();break;case 27:case 5:st(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ha(n),n.flags|=128,null;r=Tr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?Yg(t,n,i):(Ha(n),t=fa(t,n,i),t!==null?t.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return Gf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(Tr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return Gf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ro(n,bn.current),r)break;return null;case 22:return n.lanes=0,Gg(t,n,i,n.pendingProps);case 24:Oa(n,un,t.memoizedState.cache)}return fa(t,n,i)}function Qg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Vf(t,i)&&(n.flags&128)===0)return fn=!1,Yy(t,n,i);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Cm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Cr(n.elementType),n.type=t,typeof t=="function")Wc(t)?(r=Nr(t,r),n.tag=1,n=qg(null,n,t,r,i)):(n.tag=0,n=zf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===F){n.tag=11,n=Bg(null,n,t,r,i);break t}else if(l===vt){n.tag=14,n=Fg(null,n,t,r,i);break t}else if(l===nt){n.tag=10,n.type=t,n=Kg(null,n,i);break t}}throw n=Dt(t)||t,Error(s(306,n,""))}}return n;case 0:return zf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Nr(r,n.pendingProps),qg(t,n,r,l,i);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,lf(t,n),Ao(n,r,null,i);var _=n.memoizedState;if(r=_.cache,Oa(n,un,r),r!==c.cache&&ef(n,[un],i,!0),bo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=jg(t,n,r,i);break t}else if(r!==l){l=di(Error(s(424)),n),xo(l),n=jg(t,n,r,i);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=vi(t.firstChild),xn=n,_e=!0,Na=null,gi=!0,i=Gm(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(Mr(),r===l){n=fa(t,n,i);break t}gn(t,n,r,i)}n=n.child}return n;case 26:return gs(t,n),t===null?(i=M0(n.type,null,n.pendingProps,null))?n.memoizedState=i:_e||(n.stateNode=e0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&_e&&(r=n.stateNode=v0(n.type,n.pendingProps,qe.current),xn=n,gi=!0,l=Ze,Za(n.type)?(Bh=l,Ze=vi(r.firstChild)):Ze=l),gn(t,n,n.pendingProps.children,i),gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((l=r=Ze)&&(r=GS(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,xn=n,Ze=vi(r.firstChild),gi=!1,l=!0):l=!1),l||La(n)),st(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,wh(l,c)?r=null:_!==null&&wh(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=gf(t,n,Py,null,null,i),Os._currentValue=l),gs(t,n),gn(t,n,r,i),n.child;case 6:return t===null&&_e&&((t=i=Ze)&&(i=VS(i,n.pendingProps,gi),i!==null?(n.stateNode=i,xn=n,Ze=null,t=!0):t=!1),t||La(n)),null;case 13:return Yg(t,n,i);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Dr(n,null,r,i):gn(t,n,r,i),n.child;case 11:return Bg(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,gs(t,n),gn(t,n,r,i),n.child;case 8:return gn(t,n,n.pendingProps.children,i),n.child;case 12:return gn(t,n,n.pendingProps.children,i),n.child;case 10:return Kg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,br(n),l=En(l),r=r(l),n.flags|=1,gn(t,n,r,i),n.child;case 14:return Fg(t,n,n.type,n.pendingProps,i);case 15:return Hg(t,n,n.type,n.pendingProps,i);case 19:return Gf(t,n,i);case 31:return qy(t,n,i);case 22:return Gg(t,n,i,n.pendingProps);case 24:return br(n),r=En(un),t===null?(l=rf(),l===null&&(l=je,c=nf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},of(n),Oa(n,un,l)):((t.lanes&i)!==0&&(lf(t,n),Ao(n,null,null,i),bo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Oa(n,un,r)):(r=c.cache,Oa(n,un,r),r!==l.cache&&ef(n,[un],i,!0))),gn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Pl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:gs(t,n),gn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function Xf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?A0(n,r):A0(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(N_())t.flags|=8192;else throw wr=Xl,sf}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(n))if(N_())t.flags|=8192;else throw wr=Xl,sf}function lu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yl():536870912,t.lanes|=n,Ss|=n)}function No(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function Wy(t,n,i){var r=n.pendingProps;switch(Qc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),la(un),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(us(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$c())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ha(n),c!==null?(Ke(n),Jg(n,c)):(Ke(n),Xf(n,l,null,r,i))):c?c!==t.memoizedState?(ha(n),Ke(n),Jg(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ha(n),Ke(n),Xf(n,l,t,r,i)),null;case 27:if(gt(n),i=qe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ht.current,us(n)?Dm(n):(t=v0(l,r,i),n.stateNode=t,ha(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,us(n))Dm(n);else{var _=Xo(qe.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(l,{is:r.is}):_.createElement(l)}}c[wt]=n,c[qt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Rn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ha(n)}}return Ke(n),n.subtreeFlags&=-33554433,Xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qe.current,us(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[wt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Q_(t.nodeValue,i)),t||La(n,!0)}else t=Xo(t).createTextNode(r),t[wt]=n,n.stateNode=t}return Ke(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=us(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[wt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else i=$c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[wt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=$c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),lu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Th(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return la(n.type),Ke(n),null;case 19:if(pf(n),r=n.memoizedState,r===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)No(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Yl(t),c!==null){for(n.flags|=128,No(r,!1),t=c.updateQueue,n.updateQueue=t,lu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)bm(i,t),i=i.sibling;return Ro(n,bn.current&1|2),_e&&sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&q()>yu&&(n.flags|=128,l=!0,No(r,!1),n.lanes=4194304)}else{if(!l)if(t=Yl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,lu(n,t),No(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Ke(n),null}else 2*q()-r.renderingStartTime>yu&&i!==536870912&&(n.flags|=128,l=!0,No(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=q(),t.sibling=null,c=bn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?Ro(n,c):(i=c,re(Tn,n),re(bn,i),Ln===null&&(Ln=n)),_e&&sa(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ei(n),hf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),i=n.updateQueue,i!==null&&lu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Lt(Rr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),la(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function Zy(t,n){switch(Qc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return la(n.type),null;case 22:case 23:return ei(n),hf(),t!==null&&Lt(Rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(un),null;case 25:return null;default:return null}}function $g(t,n){switch(Qc(n),n.tag){case 3:la(un),T();break;case 26:case 27:case 5:gt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:pf(n);break;case 10:la(n.type);break;case 22:case 23:ei(n),hf(),t!==null&&Lt(Rr);break;case 24:la(un)}}function Lo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,_=i.inst;r=c(),_.destroy=r}i=i.next}while(i!==l)}}catch(E){He(n,n.return,E)}}function Va(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var N=i,Z=E;try{Z()}catch(lt){He(l,N,lt)}}}r=r.next}while(r!==c)}}catch(lt){He(n,n.return,lt)}}function t_(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Xm(n,i)}catch(r){He(t,t.return,r)}}}function e_(t,n,i){i.props=Nr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){He(t,n,r)}}function Bi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ia(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=l0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var _=new si(t);m(t.child,!1,FS,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){He(t,n,E)}}function An(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){He(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){He(t,n,l)}else i.current=null}function uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)p0(t.stateNode,n[i])}function n_(t){for(var n=t.return;n!==null&&(qf(n)&&p0(t.stateNode,n.stateNode),!kf(n));)n=n.return}function Oo(t){for(var n=t.return;n!==null&&(qf(n)&&HS(t.stateNode,n.stateNode),!kf(n));)n=n.return}function kf(t){return t.tag===5||t.tag===3||t.tag===27}function qf(t){return t&&t.tag===7&&t.stateNode!==null}function jf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){He(t,t.return,l)}}function Yf(t,n,i){try{var r=t.stateNode;SS(r,t.type,i,n),r[qt]=n}catch(l){He(t,t.return,l)}}function i_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Wf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=zi)),uu(t,r),De=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Za(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(Zf(t,n,i,r),t=t.sibling;t!==null;)Zf(t,n,i,r),t=t.sibling}function cu(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),uu(t,r),De=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Za(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(cu(t,n,i,r),t=t.sibling;t!==null;)cu(t,n,i,r),t=t.sibling}function a_(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Rn(n,r,i),n[wt]=t,n[qt]=i}catch(c){He(t,t.return,c)}}var fu=!1,ni=null;function r_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(fu=!0)}var Fi=null;function s_(){var t=Fi;return Fi=null,t}var qn=0;function _s(t,n,i,r,l){return qn=0,o_(t.child,n,i,r,l)}function o_(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var E=Nh(_);r.push(E),E.view&&(c=!0)}else c||Nh(_).view&&(c=!0);fu=!0,s0(_,qn===0?n:n+"_"+qn,i),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||o_(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Hi(t,n){for(;t!==null;)t.tag===5?o0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=aa(n.default,n.share),n!=="none"&&(_s(t,i,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function Kf(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ia(r,i),c=aa(r.default,i.paired?r.share:r.enter);c!=="none"?_s(t,l,c,null,!1)?(hu(t),i.paired||n||bs(t,r.onEnter)):Hi(t.child,!1):hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Kf(t,n),t=t.sibling;else hu(t)}function Qf(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=aa(i.default,i.share);if(c!=="none"&&(_s(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,bs(t,i.onShare)):Hi(t.child,!1)),n.delete(r),n.size===0)break}}}Qf(t)}t=t.sibling}}}function Jf(t){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode),r=ni!==null?ni.get(i):void 0,l=aa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(_s(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ni.delete(i),bs(t,n.onShare)):bs(t,n.onExit):Hi(t.child,!1)),ni!==null&&Qf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Jf(t),t=t.sibling;else ni!==null&&Qf(t)}function l_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode);n=aa(n.default,n.update),t.flags&=-5,n!=="none"&&_s(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&l_(t);t=t.sibling}}function $f(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}$f(t)}t=t.sibling}}function du(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),$f(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)du(t),t=t.sibling;else $f(t)}function u_(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&u_(t),t=t.sibling}function th(t,n,i,r,l,c,_){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&qn<c.length){var Z=c[qn],lt=Nh(N);(Z.view||lt.view)&&(E=!0);var _t;if(_t=(t.flags&4)===0)if(lt.clip)_t=!0;else{_t=Z.rect;var Y=lt.rect;_t=_t.y!==Y.y||_t.x!==Y.x||_t.height!==Y.height||_t.width!==Y.width}_t&&(t.flags|=4),lt.abs?lt=!Z.abs:(Z=Z.rect,lt=lt.rect,lt=Z.height!==lt.height||Z.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&s0(N,qn===0?i:i+"_"+qn,l),E&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(N,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:th(t,n.child,i,r,l,c,_)&&(E=!0));n=n.sibling}return E}function c_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ia(i,r),c=aa(i.default,i.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;qn=0,l=th(r,E,l,l,c,_,!1),(t.flags&4)!==0&&l&&bs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&c_(t);t=t.sibling}}var yn=!1,Be=!1,Gi=!1,eh=!1,f_=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Vi=!1,zo=!1,pu=!1,nh=!1;function Ky(t,n,i){if(t=t.containerInfo,Rh=zs,t=mm(t),Gc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var E=0,N=-1,Z=-1,lt=0,_t=0,Y=t,at=null;e:for(;;){for(var Nt;Y!==r||c!==0&&Y.nodeType!==3||(N=E+c),Y!==_||l!==0&&Y.nodeType!==3||(Z=E+l),Y.nodeType===3&&(E+=Y.nodeValue.length),(Nt=Y.firstChild)!==null;)at=Y,Y=Nt;for(;;){if(Y===t)break e;if(at===r&&++lt===c&&(N=E),at===_&&++_t===l&&(Z=E),(Nt=Y.nextSibling)!==null)break;Y=at,at=Y.parentNode}Y=Nt}r=N===-1||Z===-1?null:{start:N,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ch={focusedElem:t,selectionRange:r},zs=!1,i=(i&335544064)===i,Sn=n,n=i?9270:1024;Sn!==null;){if(t=Sn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&Jf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&r_(t),mu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Jf(r),mu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&r_(t),mu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Sn=r):(i&&l_(t),mu(i))}}ni=null}function mu(t){for(;Sn!==null;){var n=Sn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=Nr(n.type,l);i=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){He(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)zh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":zh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ia(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=aa(l.default,l.update),l!=="none"&&_s(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Sn=r;break}Sn=n.return}}function h_(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),r&4&&Lo(5,i);break;case 1:if(Xi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(_){He(i,i.return,_)}else{var l=Nr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){He(i,i.return,_)}}r&64&&t_(i),r&512&&Bi(i,i.return);break;case 3:if(Xi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Xm(t,n)}catch(_){He(i,i.return,_)}}break;case 27:n===null&&r&4&&a_(i);case 26:case 5:Xi(t,i),n===null&&r&4&&jf(i),r&512&&Bi(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),r&4&&g_(t,i);break;case 13:Xi(t,i),r&4&&__(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=lS.bind(null,i),XS(t,i))));break;case 22:if(r=i.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||Be;n=yn,l=Be,yn=r,(Be=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ai(t,i,r)):Xi(t,i),yn=n,Be=l}break;case 30:Xi(t,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Xi(t,i)}}function ih(t,n){for(t=t.child;t!==null;)d_(t,n),t=t.sibling}function d_(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){He(t,t.return,N)}ah(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(N){He(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?r0(E,!0):r0(t.stateNode,!1)}catch(N){He(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&ih(t,n);break;default:ih(t,n)}}function ah(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:d_(i,r);break t;case 22:i.memoizedState===null&&ah(i,r);break t;default:ah(i,r)}}t=t.sibling}}function p_(t){var n=t.alternate;n!==null&&(t.alternate=null,p_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,jn=!1;function Ti(t,n,i){for(i=i.child;i!==null;)m_(t,n,i),i=i.sibling}function m_(t,n,i){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,i)}catch{}switch(i.tag){case 26:Be||An(i,n),Ti(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Be&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Be||An(i,n),Oo(i);var r=Je,l=jn;Za(i.type)&&(Je=i.stateNode,jn=!1),Ti(t,n,i),x0(i.stateNode,i.type,i.memoizedProps),Je=r,jn=l;break;case 5:Be||An(i,n),Oo(i);case 6:if(i.tag===6&&Oo(i),r=Je,l=jn,Je=null,Ti(t,n,i),Je=r,jn=l,Je!==null)if(jn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),De=!0}catch(c){He(i,n,c)}else try{Je.removeChild(i.stateNode),De=!0}catch(c){He(i,n,c)}break;case 18:Je!==null&&(jn?(t=Je,a0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ps(t)):a0(Je,i.stateNode));break;case 4:r=Je,l=jn,Je=i.stateNode.containerInfo,jn=!0,Ti(t,n,i),Je=r,jn=l;break;case 0:case 11:case 14:case 15:Va(2,i,n),Be||Va(4,i,n),Ti(t,n,i);break;case 1:Be||(An(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&e_(i,n,r)),Ti(t,n,i);break;case 21:Ti(t,n,i);break;case 22:Be=(r=Be)||i.memoizedState!==null,Ti(t,n,i),Be=r;break;case 30:An(i,n),Ti(t,n,i);break;case 7:Be||An(i,n),Ti(t,n,i);break;default:Ti(t,n,i)}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ps(t)}catch(i){He(n,n.return,i)}}}function __(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ps(t)}catch(i){He(n,n.return,i)}}function Qy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f_),n;default:throw Error(s(435,t.tag))}}function gu(t,n){var i=Qy(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=uS.bind(null,t,r);r.then(l,l)}})}function Hn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],_=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(Za(N.type)){Je=N.stateNode,jn=!1;break t}break;case 5:Je=N.stateNode,jn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,jn=!0;break t}N=N.return}if(Je===null)throw Error(s(160));m_(_,E,c),Je=null,jn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v_(n,t,i),n=n.sibling}var bi=null;function v_(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}Hn(n,t,i),Gn(t),l&4&&(Va(3,t,t.return),Lo(3,t),Va(5,t,t.return));break;case 1:Hn(n,t,i),Gn(t),l&512&&(Be||r===null||An(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=bi,Hn(n,t,i),Gn(t),l&512&&(Be||r===null||An(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(yn)t.stateNode=e0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ne]||r[wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Rn(r,n,i),r[wt]=t,we(r),n=r;break t;case"link":if(c=b0("link","href",l).get(n+(i.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(_,1);break e}}r=l.createElement(n),Rn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=b0("meta","content",l).get(n+(i.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(_,1);break e}}r=l.createElement(n),Rn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[wt]=t,we(r),n=r}t.stateNode=n}else yn||Vh(c,t.type,t.stateNode);else t.stateNode=T0(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):l.count--,i===null?yn||Vh(c,t.type,t.stateNode):T0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,i),Gn(t),l&512&&(Be||r===null||An(r,r.return)),r!==null&&l&4&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Gi,Gi=!1,Hn(n,t,i),Gi=c,Gn(t),l&512&&(Be||r===null||An(r,r.return)),t.flags&32){n=t.stateNode;try{$r(n,""),De=!0}catch(lt){He(t,t.return,lt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Yf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(eh=!0);break;case 6:if(Hn(n,t,i),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,De=!0}catch(lt){He(t,t.return,lt)}}break;case 3:if(De=!1,Uu=null,c=bi,bi=ko(n.containerInfo),Hn(n,t,i),bi=c,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ps(n.containerInfo)}catch(lt){He(t,t.return,lt)}eh&&(eh=!1,x_(t)),De=!1;break;case 4:l=Gi,Gi=yn,r=Fp(),c=bi,bi=ko(t.stateNode.containerInfo),Hn(n,t,i),Gn(t),bi=c,De&&zo&&(pu=!0),De=r,Gi=l;break;case 12:Hn(n,t,i),Gn(t);break;case 31:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 13:Hn(n,t,i),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=q()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var E=yn,N=Be,Z=Gi;yn=E||c,Gi=Z||c,Be=N||_,Hn(n,t,i),Be=N,Gi=Z,yn=E,Gn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||yn||Be||(n=_||Be,i=yn,r=Be,yn=c||yn,Be=n,Xa(t,2),yn=i,Be=r),!c&&Gi||ih(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,gu(t,i))));break;case 19:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 30:l&512&&(Be||r===null||An(r,r.return)),l=Fp(),c=zo,_=(i&335544064)===i,E=t.memoizedProps,zo=_&&aa(E.default,E.update)!=="none",Hn(n,t,i),Gn(t),_&&r!==null&&De&&(t.flags|=4),zo=c,De=l;break;case 21:break;case 7:l&512&&(Be||r===null||An(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,i),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(i_(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(qf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(kf(l))break;l=l.return}var _=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=Wf(t);cu(t,N,E,_);break;case 5:var Z=i.stateNode;i.flags&32&&($r(Z,""),i.flags&=-33);var lt=Wf(t);cu(t,lt,Z,_);break;case 3:case 4:var _t=i.stateNode.containerInfo,Y=Wf(t);Zf(t,Y,_t,_);break;default:throw Error(s(161))}}catch(at){He(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function x_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;x_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),t=t.sibling}}function vs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)y_(n,t),n=n.sibling;else c_(n)}function y_(t,n){var i=t.alternate;if(i===null)Kf(t,!1);else switch(t.tag){case 3:if(nh=Vi=!1,s_(),vs(n,t),!Vi&&!pu){if(t=Fi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];o0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nh=!0}Fi=null;break;case 5:vs(n,t);break;case 4:r=Vi,Vi=!1,vs(n,t),Vi&&(pu=!0),Vi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Kf(t,!1):vs(n,t));break;case 30:r=Vi,l=s_(),Vi=!1,vs(n,t),Vi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ia(c,_),_=ia(i.memoizedProps,_);var E=aa(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,qn=0,n=th(t,i,n,_,E,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(bs(t,t.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(t.flags&32)!==0?!0:r;break;default:vs(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h_(t,n.alternate,n),n=n.sibling}function Xa(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Va(4,i,i.return),Xa(i,r);break;case 1:An(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&e_(i,i.return,l),Xa(i,r);break;case 27:(r&2)!==0&&x0(i.stateNode,i.type,i.memoizedProps);case 5:An(i,i.return),i.tag!==5&&i.tag!==27||Oo(i),Xa(i,r);break;case 6:Oo(i);break;case 26:An(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),Xa(i,r);break;case 22:i.memoizedState===null&&Xa(i,r);break;case 30:An(i,i.return),Xa(i,r);break;case 7:An(i,i.return);default:Xa(i,r)}t=t.sibling}}function Ai(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,_=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ai(l,c,i),Lo(4,c);break;case 1:if(Ai(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(lt){He(r,r.return,lt)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var Z=l.shared.hiddenCallbacks;if(Z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Z.length;l++)Vm(Z[l],N)}catch(lt){He(r,r.return,lt)}}E&&_&64&&t_(c),Bi(c,c.return);break;case 27:(i&2)!==0&&a_(c);case 5:c.tag!==5&&c.tag!==27||n_(c),Ai(l,c,i),E&&r===null&&_&4&&jf(c),Bi(c,c.return);break;case 6:n_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||yn||Vh(ko(N.ownerDocument),c.type,N),Ai(l,c,i),E&&r===null&&_&4&&jf(c),Bi(c,c.return);break;case 12:Ai(l,c,i);break;case 31:Ai(l,c,i),E&&_&4&&g_(l,c);break;case 13:Ai(l,c,i),E&&_&4&&__(l,c);break;case 22:c.memoizedState===null&&Ai(l,c,i),Bi(c,c.return);break;case 30:Ai(l,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:Ai(l,c,i)}n=n.sibling}}function rh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&yo(i))}function sh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t))}function _i(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)S_(t,n,i,r),n=n.sibling;else l&&u_(n)}function S_(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&du(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,i,r),c&2048&&Lo(9,n);break;case 1:_i(t,n,i,r);break;case 3:_i(t,n,i,r),l&&nh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&yo(c)));break;case 12:if(c&2048){_i(t,n,i,r),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,N=_.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Z){He(n,n.return,Z)}}else _i(t,n,i,r);break;case 31:_i(t,n,i,r);break;case 13:_i(t,n,i,r);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&du(E),_._visibility&2?_i(t,n,i,r):Po(t,n)):(l&&E!==null&&E.memoizedState!==null&&du(n),_._visibility&2?_i(t,n,i,r):(_._visibility|=2,xs(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&rh(E,n);break;case 24:_i(t,n,i,r),c&2048&&sh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Hi(c.child,!0),Hi(n.child,!0))),_i(t,n,i,r);break;default:_i(t,n,i,r)}}function xs(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=i,N=r,Z=_.flags;switch(_.tag){case 0:case 11:case 15:xs(c,_,E,N,l),Lo(8,_);break;case 23:break;case 22:var lt=_.stateNode;_.memoizedState!==null?lt._visibility&2?xs(c,_,E,N,l):Po(c,_):(lt._visibility|=2,xs(c,_,E,N,l)),l&&Z&2048&&rh(_.alternate,_);break;case 24:xs(c,_,E,N,l),l&&Z&2048&&sh(_.alternate,_);break;default:xs(c,_,E,N,l)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Po(i,r),l&2048&&rh(r.alternate,r);break;case 24:Po(i,r),l&2048&&sh(r.alternate,r);break;default:Po(i,r)}n=n.sibling}}var Lr=8192;function Or(t,n,i){if(t.subtreeFlags&Lr)for(t=t.child;t!==null;)M_(t,n,i),t=t.sibling}function M_(t,n,i){switch(t.tag){case 26:Or(t,n,i),t.flags&Lr&&(t.memoizedState!==null?iM(i,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&w0(i,t)));break;case 5:Or(t,n,i),t.flags&Lr&&(t=t.stateNode,(n&335544128)===n&&w0(i,t));break;case 3:case 4:var r=bi;bi=ko(t.stateNode.containerInfo),Or(t,n,i),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Lr,Lr=16777216,Or(t,n,i),Lr=r):Or(t,n,i));break;case 30:if((t.flags&Lr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Or(t,n,i);break;default:Or(t,n,i)}}function E_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Sn=r,b_(r,t)}E_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T_(t),t=t.sibling}function T_(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_u(t)):Io(t);break;default:Io(t)}}function _u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Sn=r,b_(r,t)}E_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),_u(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,_u(n));break;default:_u(n)}t=t.sibling}}function b_(t,n){for(;Sn!==null;){var i=Sn;switch(i.tag){case 0:case 11:case 15:Va(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:yo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Sn=r;else t:for(i=t;Sn!==null;){r=Sn;var l=r.sibling,c=r.return;if(p_(r),r===i){Sn=null;break t}if(l!==null){l.return=c,Sn=l;break t}Sn=c}}}var Jy={getCacheForType:function(t){var n=En(un),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return En(un).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,xe=null,Ee=0,Fe=0,ii=null,ka=!1,ys=!1,oh=!1,da=0,an=0,qa=0,zr=0,vu=0,ai=0,Ss=0,Bo=null,Yn=null,lh=!1,xu=0,A_=0,yu=1/0,Su=null,ja=null,tn=0,Ri=null,Pr=null,ki=0,uh=0,ch=null,R_=null,Ms=null,Es=null,Ts=null,Fo=0,Mu=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:xt.T!==null?yh():bt()}function C_(){if(ai===0)if((Ee&536870912)===0||_e){var t=ta;ta<<=1,(ta&3932160)===0&&(ta=262144),ai=t}else ai=536870912;return t=Tn.current,t!==null&&(t.flags|=32),ai}function bs(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=l0(ia(t.memoizedProps,i))),Es===null&&(Es=[]),Es.push(n.bind(null,r))}}function Wn(t,n,i){(t===je&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(As(t,0),Ya(t,Ee,ai,!1)),_r(t,i),((Oe&2)===0||t!==je)&&(t===je&&((Oe&2)===0&&(zr|=i),an===4&&Ya(t,Ee,ai,!1)),qi(t))}function w_(t,n,i){if((Oe&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ra(t,n),l=r?nS(t,n):hh(t,n,!0),c=r;do{if(l===0){ys&&!r&&Ya(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!tS(i)){l=hh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=Bo;var N=E.current.memoizedState.isDehydrated;if(N&&(As(E,_).flags|=256),_=hh(E,_,!1),_!==2&&_!==6){if(oh&&!N){E.errorRecoveryDisabledLanes|=c,zr|=c,l=4;break t}c=Yn,Yn=l,c!==null&&(Yn===null?Yn=c:Yn.push.apply(Yn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){As(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=xu+300-q(),10<l)){if(Ya(r,n,ai,!ka),gr(r,0,!0)!==0)break t;ki=n,r.timeoutHandle=Uh(D_.bind(null,r,i,Yn,Su,lh,n,ai,zr,Ss,ka,c,"Throttled",-0,0),l);break t}D_(r,i,Yn,Su,lh,n,ai,zr,Ss,ka,c,null,-0,0)}}break}while(!0);qi(t)}function D_(t,n,i,r,l,c,_,E,N,Z,lt,_t,Y,at){t.timeoutHandle=-1;var Nt=n.subtreeFlags,jt=(c&335544064)===c;if(_t=null,(jt||Nt&8192||(Nt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ni=null,M_(n,c,_t),jt&&(Nt=_t,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=Yo.bind(Nt),jt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?xu-q():(c&4194048)===c?A_-q():0,Nt=aM(_t,Nt),Nt!==null)){ki=c,t.cancelPendingCommit=Nt(B_.bind(null,t,n,c,i,r,l,_,E,N,Z,lt,_t,null,Y,at)),Ya(t,c,_,!Z);return}B_(t,n,c,i,r,l,_,E,N,Z,lt,_t)}function tS(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!ti(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,i,r){n=xl(t,n),n&=~vu,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Un(l),_=1<<c;r[c]=-1,l&=~_}i!==0&&A(t,i,n)}function Eu(){return(Oe&6)===0?(Ho(0),!1):!0}function fh(){if(xe!==null){if(Fe===0)var t=xe.return;else t=xe,oa=Er=null,xf(t),hs=null,Eo=0,t=xe;for(;t!==null;)$g(t.alternate,t),t=t.return;xe=null}}function As(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,TS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ki=0,fh(),je=t,xe=i=ra(t.current,null),Ee=n,Fe=0,ii=null,ka=!1,ys=Ra(t,n),oh=!1,Ss=ai=vu=zr=qa=an=0,Yn=Bo=null,lh=!1,da=xl(t,n),Ul(),i}function U_(t,n){he=null,xt.H=nu,n===fs||n===Vl?(n=Bm(),Fe=3):n===sf?(n=Bm(),Fe=4):Fe=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(an=1,iu(t,di(n,t.current)))}function N_(){var t=Tn.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function L_(){var t=xt.H;return xt.H=nu,t===null?nu:t}function O_(){var t=xt.A;return xt.A=Jy,t}function Tu(){an=4,ka||(Ee&4194048)!==Ee&&Tn.current!==null||(ys=!0),(qa&134217727)===0&&(zr&134217727)===0||je===null||Ya(je,Ee,ai,!1)}function hh(t,n,i){var r=Oe;Oe|=2;var l=L_(),c=O_();(je!==t||Ee!==n)&&(Su=null,As(t,n)),n=!1;var _=an;t:do try{if(Fe!==0&&xe!==null){var E=xe,N=ii;switch(Fe){case 8:fh(),_=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var Z=Fe;if(Fe=0,ii=null,Rs(t,E,N,Z),i&&ys){_=0;break t}break;default:Z=Fe,Fe=0,ii=null,Rs(t,E,N,Z)}}eS(),_=an;break}catch(lt){U_(t,lt)}while(!0);return n&&t.shellSuspendCounter++,oa=Er=null,Oe=r,xt.H=l,xt.A=c,xe===null&&(je=null,Ee=0,Ul()),_}function eS(){for(;xe!==null;)z_(xe)}function nS(t,n){var i=Oe;Oe|=2;var r=L_(),l=O_();je!==t||Ee!==n?(Su=null,yu=q()+500,As(t,n)):ys=Ra(t,n);t:do try{if(Fe!==0&&xe!==null){n=xe;var c=ii;e:switch(Fe){case 1:Fe=0,ii=null,Rs(t,n,c,1);break;case 2:case 9:if(Pm(c)){Fe=0,ii=null,P_(n);break}n=function(){Fe!==2&&Fe!==9||je!==t||(Fe=7),qi(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Pm(c)?(Fe=0,ii=null,P_(n)):(Fe=0,ii=null,Rs(t,n,c,7));break;case 5:var _=null;switch(xe.tag){case 26:_=xe.memoizedState;case 5:case 27:var E=xe;if(_?R0(_):E.stateNode.complete){Fe=0,ii=null;var N=E.sibling;if(N!==null)xe=N;else{var Z=E.return;Z!==null?(xe=Z,bu(Z)):xe=null}break e}}Fe=0,ii=null,Rs(t,n,c,5);break;case 6:Fe=0,ii=null,Rs(t,n,c,6);break;case 8:fh(),an=6;break t;default:throw Error(s(462))}}iS();break}catch(lt){U_(t,lt)}while(!0);return oa=Er=null,xt.H=r,xt.A=l,Oe=i,xe!==null?0:(je=null,Ee=0,Ul(),an)}function iS(){for(;xe!==null&&!zt();)z_(xe)}function z_(t){var n=Qg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?bu(t):xe=n}function P_(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=kg(i,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=kg(i,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:xf(n);var r=n;r===xn&&(_e?(Il(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Il(r),_e=!0));default:$g(i,n),n=xe=bm(n,da),n=Qg(i,n,da)}t.memoizedProps=t.pendingProps,n===null?bu(t):xe=n}function Rs(t,n,i,r){oa=Er=null,xf(n),hs=null,Eo=0;var l=n.return;try{if(ky(t,l,n,i,Ee)){an=1,iu(t,di(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;an=1,iu(t,di(i,t.current)),xe=null;return}n.flags&32768?(_e||r===1?t=!0:ys||(Ee&536870912)!==0?t=!1:(ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),I_(n,t)):bu(n)}function bu(t){var n=t;do{if((n.flags&32768)!==0){I_(n,ka);return}t=n.return;var i=Wy(n.alternate,n,da);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);an===0&&(an=5)}function I_(t,n){do{var i=Zy(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);an=6,xe=null}function B_(t,n,i,r,l,c,_,E,N,Z,lt,_t){t.cancelPendingCommit=null;do Au();while(tn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===je&&(xe=je=null,Ee=0),Pr=n,Ri=t,ki=i,ch=l,R_=r,aS(t,n,i,_,E,N,_t)}}function aS(t,n,i,r,l,c,_){var E=n.lanes|n.childLanes;if(uh=E,E|=jc,Ec(t,i,E,r,l,c),Es=null,(i&335544064)===i?(Ts=Ny(t),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,cS(Tt,function(){return gh(),null})):(t.callbackNode=null,t.callbackPriority=0),fu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=xt.T,xt.T=null,l=Vt.p,Vt.p=2,c=Oe,Oe|=4;try{Ky(t,n,i)}finally{Oe=c,Vt.p=l,xt.T=r}}tn=1,fu?Ms=DS(_,t.containerInfo,Ts,dh,ph,sS,mh,gh,rS):(dh(),ph(),mh())}function rS(t){if(tn!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function sS(){tn===3&&(tn=0,y_(Pr,Ri),tn=4)}function dh(){if(tn===1){tn=0;var t=Ri,n=Pr,i=ki,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=xt.T,xt.T=null;var l=Vt.p;Vt.p=2;var c=Oe;Oe|=4;try{zo=pu=!1,v_(n,t,i),i=Ch;var _=mm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(_!==E&&E&&E.ownerDocument&&pm(E.ownerDocument.documentElement,E)){if(N!==null&&Gc(E)){var Z=N.start,lt=N.end;if(lt===void 0&&(lt=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(lt,E.value.length);else{var _t=E.ownerDocument||document,Y=_t&&_t.defaultView||window;if(Y.getSelection){var at=Y.getSelection(),Nt=E.textContent.length,jt=Math.min(N.start,Nt),de=N.end===void 0?jt:Math.min(N.end,Nt);!at.extend&&jt>de&&(_=de,de=jt,jt=_);var W=dm(E,jt),k=dm(E,de);if(W&&k&&(at.rangeCount!==1||at.anchorNode!==W.node||at.anchorOffset!==W.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var it=_t.createRange();it.setStart(W.node,W.offset),at.removeAllRanges(),jt>de?(at.addRange(it),at.extend(k.node,k.offset)):(it.setEnd(k.node,k.offset),at.addRange(it))}}}}for(_t=[],at=E;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var mt=_t[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}zs=!!Rh,Ch=Rh=null}finally{Oe=c,Vt.p=l,xt.T=r}}t.current=n,tn=2}}function ph(){if(tn===2){tn=0;var t=Ri,n=Pr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=xt.T,xt.T=null;var r=Vt.p;Vt.p=2;var l=Oe;Oe|=4;try{h_(t,n.alternate,n)}finally{Oe=l,Vt.p=r,xt.T=i}}tn=3}}function mh(){if(tn===4||tn===3){tn=0;var t=Ms;Ms=null,fe();var n=Ri,i=Pr,r=ki,l=R_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Pr=Ri=null,F_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ja=null),$(r),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=xt.T,c=Vt.p,Vt.p=2,xt.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var N=l[E];_(N.value,{componentStack:N.stack})}}finally{xt.T=i,Vt.p=c}}if(l=Es,_=Ts,Ts=null,l!==null&&(Es=null,_===null&&(_=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(_),i!==void 0&&t.finished.finally(i);(ki&3)!==0&&Au(),qi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Mu?Fo++:(Fo=0,Mu=n):(Fo=0,Mu=null),Ho(0)}}function F_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,yo(n)))}function Au(){return Ms!==null&&(Ms.skipTransition(),Ms=null),dh(),ph(),mh(),gh()}function gh(){if(tn!==5)return!1;var t=Ri,n=uh;uh=0;var i=$(ki),r=xt.T,l=Vt.p;try{Vt.p=32>i?32:i,xt.T=null,i=ch,ch=null;var c=Ri,_=ki;if(tn=0,Pr=Ri=null,ki=0,(Oe&6)!==0)throw Error(s(331));var E=Oe;if(Oe|=4,T_(c.current),S_(c,c.current,_,i),Oe=E,Ho(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{Vt.p=l,xt.T=r,F_(t,n)}}function H_(t,n,i){n=di(i,n),n=Lf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(_r(t,2),qi(t))}function He(t,n,i){if(t.tag===3)H_(t,t,i);else for(;n!==null;){if(n.tag===3){H_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){t=di(i,t),i=Pg(2),r=Ba(n,i,2),r!==null&&(Ig(i,r,n,t),_r(r,2),qi(r));break}}n=n.return}}function _h(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new $y;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(oh=!0,l.add(i),t=oS.bind(null,t,n,i),n.then(t,t))}function oS(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,je===t&&(Ee&i)===i&&((an===4||an===3&&(Ee&62914560)===Ee&&300>q()-xu)&&(Oe&2)===0?As(t,0):vu|=i,Ss===Ee&&(Ss=0)),qi(t)}function G_(t,n){n===0&&(n=yl()),t=yr(t,n),t!==null&&(_r(t,n),qi(t))}function lS(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),G_(t,i)}function uS(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G_(t,i)}function cS(t,n){return ie(t,n)}var Cs=null,ws=null,vh=!1,Ru=!1,xh=!1,Wa=0;function qi(t){t!==ws&&t.next===null&&(ws===null?Cs=ws=t:ws=ws.next=t),Ru=!0,vh||(vh=!0,hS())}function Ho(t,n){if(!xh&&Ru){xh=!0;do for(var i=!1,r=Cs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var _=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=l&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,q_(r,c))}else c=Ee,c=gr(r,r===je?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ra(r,c)||(i=!0,q_(r,c));r=r.next}while(i);xh=!1}}function fS(){V_()}function V_(){Ru=vh=!1;var t=0;Wa!==0&&ES()&&(t=Wa);for(var n=q(),i=null,r=Cs;r!==null;){var l=r.next,c=X_(r,n);c===0?(r.next=null,i===null?Cs=l:i.next=l,l===null&&(ws=i)):(i=r,(t!==0||(c&3)!==0)&&(Ru=!0)),r=l}tn!==0&&tn!==5||Ho(t),Wa!==0&&(Wa=0)}function X_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Un(c),E=1<<_,N=l[_];N===-1?((E&i)===0||(E&r)!==0)&&(l[_]=Mc(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=je,i=Ee,i=gr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Kt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ra(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Kt(r),$(i)){case 2:case 8:i=Xt;break;case 32:i=Tt;break;case 268435456:i=Yt;break;default:i=Tt}return r=k_.bind(null,t),i=ie(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Kt(r),t.callbackPriority=2,t.callbackNode=null,2}function k_(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Au()&&t.callbackNode!==i)return null;var r=Ee;return r=gr(t,t===je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w_(t,r,n),X_(t,q()),t.callbackNode!=null&&t.callbackNode===i?k_.bind(null,t):null)}function q_(t,n){if(Au())return null;w_(t,n,!0)}function hS(){bS(function(){(Oe&6)!==0?ie(Ut,fS):V_()})}function yh(){if(Wa===0){var t=Ar;t===0&&(t=pr,pr<<=1,(pr&261888)===0&&(pr=256)),Wa=t}return Wa}function j_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(t)}function dS(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=j_((l[qt]||null).action),_=r.submitter;_&&(n=(n=_[qt]||null)?j_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Rl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var N=new FormData(l,_);Cf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,_),Cf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Sh=0;Sh<qc.length;Sh++){var Mh=qc[Sh],pS=Mh.toLowerCase(),mS=Mh[0].toUpperCase()+Mh.slice(1);Ei(pS,"on"+mS)}Ei(vm,"onAnimationEnd"),Ei(xm,"onAnimationIteration"),Ei(ym,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Ty,"onTransitionRun"),Ei(by,"onTransitionStart"),Ei(Ay,"onTransitionCancel"),Ei(Sm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Y_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],N=E.instance,Z=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(lt){Dl(lt)}l.currentTarget=null,c=N}else for(_=0;_<r.length;_++){if(E=r[_],N=E.instance,Z=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(lt){Dl(lt)}l.currentTarget=null,c=N}}}}function ye(t,n){var i=n[te];i===void 0&&(i=n[te]=new Set);var r=t+"__bubble";i.has(r)||(W_(n,t,2,!1),i.add(r))}function Eh(t,n,i){var r=0;n&&(r|=4),W_(i,t,r,n)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Th(t){if(!t[Cu]){t[Cu]=!0,We.forEach(function(i){i!=="selectionchange"&&(gS.has(i)||Eh(i,!1,t),Eh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cu]||(n[Cu]=!0,Eh("selectionchange",!1,n))}}function W_(t,n,i,r){switch(I0(n)){case 2:var l=lM;break;case 8:l=uM;break;default:l=kh}i=l.bind(null,n,i,t),l=void 0,!Uc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function bh(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=r.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=Le(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){r=c=_;continue t}E=E.parentNode}}r=r.return}Wp(function(){var Z=c,lt=wc(i),_t=[];t:{var Y=Mm.get(t);if(Y!==void 0){var at=Rl,Nt=t;switch(t){case"keypress":if(bl(i)===0)break t;case"keydown":case"keyup":at=ty;break;case"focusin":Nt="focus",at=zc;break;case"focusout":Nt="blur",at=zc;break;case"beforeblur":case"afterblur":at=zc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=ry;break;case vm:case xm:case ym:at=qx;break;case Sm:at=oy;break;case"scroll":case"scrollend":at=Hx;break;case"wheel":at=uy;break;case"copy":case"cut":case"paste":at=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=$p;break;case"submit":at=iy;break;case"toggle":case"beforetoggle":at=fy}var jt=(n&4)!==0,de=!jt&&(t==="scroll"||t==="scrollend"),W=jt?Y!==null?Y+"Capture":null:Y;jt=[];for(var k=Z,it;k!==null;){var mt=k;if(it=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||it===null||W===null||(mt=lo(k,W),mt!=null&&jt.push(Vo(k,mt,it))),de)break;k=k.return}0<jt.length&&(Y=new at(Y,Nt,null,i,lt),_t.push({event:Y,listeners:jt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",at&&i!==Cc&&(Nt=i.relatedTarget||i.fromElement)&&(Le(Nt)||Nt[ne]))break t;(Y||at)&&(Nt=lt.window===lt?lt:(at=lt.ownerDocument)?at.defaultView||at.parentWindow:window,Y?(at=i.relatedTarget||i.toElement,Y=Z,at=at?Le(at):null,at!==null&&(de=f(at),jt=at.tag,at!==de||jt!==5&&jt!==27&&jt!==6)&&(at=null)):(Y=null,at=Z),Y!==at&&(jt=Qp,mt="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(jt=$p,mt="onPointerLeave",W="onPointerEnter",k="pointer"),de=Y==null?Nt:mn(Y),it=at==null?Nt:mn(at),Nt=new jt(mt,k+"leave",Y,i,lt),Nt.target=de,Nt.relatedTarget=it,mt=null,Le(lt)===Z&&(jt=new jt(W,k+"enter",at,i,lt),jt.target=it,jt.relatedTarget=de,mt=jt),de=mt,jt=Y&&at?G(Y,at,_S):null,Y!==null&&Z_(_t,Nt,Y,jt,!1),at!==null&&de!==null&&Z_(_t,de,at,jt,!0)))}t:{if(Y=Z?mn(Z):window,at=Y.nodeName&&Y.nodeName.toLowerCase(),at==="select"||at==="input"&&Y.type==="file")var Gt=om;else if(rm(Y))if(lm)Gt=Sy;else{Gt=xy;var Te=vy}else at=Y.nodeName,!at||at.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Z&&Rc(Z.elementType)&&(Gt=om):Gt=yy;if(Gt&&(Gt=Gt(t,Z))){sm(_t,Gt,i,lt);break t}Te&&Te(t,Y,Z)}switch(Te=Z?mn(Z):window,t){case"focusin":(rm(Te)||Te.contentEditable==="true")&&(is=Te,Vc=Z,_o=null);break;case"focusout":_o=Vc=is=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,gm(_t,i,lt);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":gm(_t,i,lt)}var $t;if(Ic)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else ns?im(t,i)&&(se="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(se="onCompositionStart");se&&(tm&&i.locale!=="ko"&&(ns||se!=="onCompositionStart"?se==="onCompositionEnd"&&ns&&($t=Zp()):(wa=lt,Nc="value"in wa?wa.value:wa.textContent,ns=!0)),Te=wu(Z,se),0<Te.length&&(se=new Jp(se,t,null,i,lt),_t.push({event:se,listeners:Te}),$t?se.data=$t:($t=am(i),$t!==null&&(se.data=$t)))),($t=dy?py(t,i):my(t,i))&&(se=wu(Z,"onBeforeInput"),0<se.length&&(Te=new Jp("onBeforeInput","beforeinput",null,i,lt),_t.push({event:Te,listeners:se}),Te.data=$t)),dS(_t,t,Z,i,lt)}Y_(_t,n)})}function Vo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function wu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=lo(t,i),l!=null&&r.unshift(Vo(t,l,c)),l=lo(t,n),l!=null&&r.push(Vo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function _S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z_(t,n,i,r,l){for(var c=n._reactName,_=[];i!==null&&i!==r;){var E=i,N=E.alternate,Z=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||Z===null||(N=Z,l?(Z=lo(i,c),Z!=null&&_.unshift(Vo(i,Z,N))):l||(Z=lo(i,c),Z!=null&&_.push(Vo(i,Z,N)))),i=i.return}_.length!==0&&t.push({event:n,listeners:_})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(xS,"")}function Q_(t,n){return n=K_(n),K_(t)===n}function Ge(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||$r(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&$r(t,""+r);else return;break;case"className":Ml(t,"class",r);break;case"tabIndex":Ml(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(t,i,r);break;case"style":jp(t,r,c);return;case"data":if(n!=="object"){Ml(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Ge(t,n,"name",l.name,l,null),Ge(t,n,"formEncType",l.formEncType,l,null),Ge(t,n,"formMethod",l.formMethod,l,null),Ge(t,n,"formTarget",l.formTarget,l,null)):(Ge(t,n,"encType",l.encType,l,null),Ge(t,n,"method",l.method,l,null),Ge(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=zi);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=El(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Sl(t,"popover",r);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Sl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Bx.get(i)||i,Sl(t,i,r);else return}De=!0}function Ah(t,n,i,r,l,c){switch(i){case"style":jp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")$r(t,r);else if(typeof r=="number"||typeof r=="bigint")$r(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[qt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}De=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Sl(t,i,r)}return}De=!0}function Rn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var _=i[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,c,_,i,null)}}l&&Ge(t,n,"srcSet",i.srcSet,i,null),r&&Ge(t,n,"src",i.src,i,null);return;case"input":ye("invalid",t);var E=c=_=l=null,N=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var lt=i[r];if(lt!=null)switch(r){case"name":l=lt;break;case"type":_=lt;break;case"checked":N=lt;break;case"defaultChecked":Z=lt;break;case"value":c=lt;break;case"defaultValue":E=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ge(t,n,r,lt,i,null)}}Vp(t,c,E,N,Z,_,l,!1);return;case"select":ye("invalid",t),r=_=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Ge(t,n,l,E,i,null)}n=c,i=_,t.multiple=!!r,n!=null?Jr(t,!!r,n,!1):i!=null&&Jr(t,!!r,i,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(_ in i)if(i.hasOwnProperty(_)&&(E=i[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ge(t,n,_,E,i,null)}kp(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,N,r,i,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<Go.length;r++)ye(Go[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,Z,r,i,null)}return;default:if(Rc(n)){for(lt in i)i.hasOwnProperty(lt)&&(r=i[lt],r!==void 0&&Ah(t,n,lt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Ge(t,n,E,r,i,null))}var yS={};function SS(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,E=null,N=null,Z=null,lt=null;for(at in i){var _t=i[at];if(i.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":N=_t;default:r.hasOwnProperty(at)||Ge(t,n,at,null,r,_t)}}for(var Y in r){var at=r[Y];if(_t=i[Y],r.hasOwnProperty(Y)&&(at!=null||_t!=null))switch(Y){case"type":at!==_t&&(De=!0),c=at;break;case"name":at!==_t&&(De=!0),l=at;break;case"checked":at!==_t&&(De=!0),Z=at;break;case"defaultChecked":at!==_t&&(De=!0),lt=at;break;case"value":at!==_t&&(De=!0),_=at;break;case"defaultValue":at!==_t&&(De=!0),E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==_t&&Ge(t,n,Y,at,r,_t)}}bc(t,_,E,N,Z,lt,c,l);return;case"select":at=_=E=Y=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":at=N;default:r.hasOwnProperty(c)||Ge(t,n,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(De=!0),Y=c;break;case"defaultValue":c!==N&&(De=!0),E=c;break;case"multiple":c!==N&&(De=!0),_=c;default:c!==N&&Ge(t,n,l,c,r,N)}n=E,i=_,r=at,Y!=null?Jr(t,!!i,Y,!1):!!r!=!!i&&(n!=null?Jr(t,!!i,n,!0):Jr(t,!!i,i?[]:"",!1));return;case"textarea":at=Y=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,r,l)}for(_ in r)if(l=r[_],c=i[_],r.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(De=!0),Y=l;break;case"defaultValue":l!==c&&(De=!0),at=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ge(t,n,_,l,r,c)}Xp(t,Y,at);return;case"option":for(var Nt in i)Y=i[Nt],i.hasOwnProperty(Nt)&&Y!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:Ge(t,n,Nt,null,r,Y));for(N in r)Y=r[N],at=i[N],r.hasOwnProperty(N)&&Y!==at&&(Y!=null||at!=null)&&(N==="selected"?(Y!==at&&(De=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol"):Ge(t,n,N,Y,r,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in i)Y=i[jt],i.hasOwnProperty(jt)&&Y!=null&&!r.hasOwnProperty(jt)&&Ge(t,n,jt,null,r,Y);for(Z in r)if(Y=r[Z],at=i[Z],r.hasOwnProperty(Z)&&Y!==at&&(Y!=null||at!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Ge(t,n,Z,Y,r,at)}return;default:if(Rc(n)){for(var de in i)Y=i[de],i.hasOwnProperty(de)&&Y!==void 0&&!r.hasOwnProperty(de)&&Ah(t,n,de,void 0,r,Y);for(lt in r)Y=r[lt],at=i[lt],!r.hasOwnProperty(lt)||Y===at||Y===void 0&&at===void 0||Ah(t,n,lt,Y,r,at);return}}for(var W in i)Y=i[W],i.hasOwnProperty(W)&&Y!=null&&!r.hasOwnProperty(W)&&Ge(t,n,W,null,r,Y);for(_t in r)Y=r[_t],at=i[_t],!r.hasOwnProperty(_t)||Y===at||Y==null&&at==null||Ge(t,n,_t,Y,r,at)}function J_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,_=l.initiatorType,E=l.duration;if(c&&E&&J_(_)){for(_=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],Z=N.startTime;if(Z>E)break;var lt=N.transferSize,_t=N.initiatorType;lt&&J_(_t)&&(N=N.responseEnd,_+=lt*(N<E?1:(E-Z)/(N-Z)))}if(--r,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rh=null,Ch=null;function Xo(t){return t.nodeType===9?t:t.ownerDocument}function $_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function e0(t,n,i,r){return i=Xo(i).createElement(t),i[wt]=r,i[qt]=n,Rn(i,t,n),we(i),i}function wh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dh=null;function ES(){var t=window.event;return t&&t.type==="popstate"?t===Dh?!1:(Dh=t,!0):(Dh=null,!1)}var Uh=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,i0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Uh,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(AS)}:Uh;function AS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function a0(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ps(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Fh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Fh(i);for(var c=i.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=_}}else i==="body"&&Fh(t.ownerDocument.body);i=l}while(i);Ps(n)}function r0(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function s0(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function o0(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function RS(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Nh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return RS(n,i,t)}function CS(t){return t.documentElement.clientHeight}function wS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function DS(t,n,i,r,l,c,_,E,N){var Z=n.nodeType===9?n:n.ownerDocument;try{var lt=Z.startViewTransition({update:function(){var Y=Z.defaultView,at=Y.navigation&&Y.navigation.transition,Nt=Z.fonts.status;r();var jt=[];if(Nt==="loaded"&&(CS(Z),Z.fonts.status==="loading"&&jt.push(Z.fonts.ready)),Nt=jt.length,t!==null)for(var de=t.suspenseyImages,W=0,k=0;k<de.length;k++){var it=de[k];if(!it.complete){var mt=it.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<Y.innerHeight&&mt.left<Y.innerWidth){if(W+=C0(it),W>Nu){jt.length=Nt;break}it=new Promise(wS.bind(it)),jt.push(it)}}}if(0<jt.length)return Y=Promise.race([Promise.all(jt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(l,l),(at?Promise.allSettled([at.finished,Y]):Y).then(c,c);if(l(),at)return at.finished.then(c,c);c()},types:i});Z.__reactViewTransition=lt;var _t=[];return lt.ready.then(function(){for(var Y=Z.documentElement.getAnimations({subtree:!0}),at=0;at<Y.length;at++){var Nt=Y[at],jt=Nt.effect,de=jt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){_t.push(Nt),Nt=jt.getKeyframes();for(var W=de=void 0,k=!0,it=0;it<Nt.length;it++){var mt=Nt[it],Gt=mt.width;if(de===void 0)de=Gt;else if(de!==Gt){k=!1;break}if(Gt=mt.height,W===void 0)W=Gt;else if(W!==Gt){k=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}k&&de!==void 0&&W!==void 0&&(jt.setKeyframes(Nt),k=getComputedStyle(jt.target,jt.pseudoElement),k.width!==de||k.height!==W)&&(k=Nt[0],k.width=de,k.height=W,k=Nt[Nt.length-1],k.width=de,k.height=W,jt.setKeyframes(Nt))}}_()},function(Y){Z.__reactViewTransition===lt&&(Z.__reactViewTransition=null);try{typeof Y=="object"&&Y!==null&&Y.name==="InvalidStateError"&&(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null),Y!==null&&N(Y)}finally{r(),l(),_()}}),lt.finished.finally(function(){for(var Y=0;Y<_t.length;Y++)_t[Y].cancel();Z.__reactViewTransition===lt&&(Z.__reactViewTransition=null),E()}),lt}catch{return r(),l(),_(),null}}function Ir(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ir.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ir.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function l0(t){return{name:t,group:new Ir("group",t),imagePair:new Ir("image-pair",t),old:new Ir("old",t),new:new Ir("new",t)}}function si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(c0(c,t,n,i)===-1){var _=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){_.removeEventListener(t,n,i),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),r!==null&&(l=_.removeEventListener.bind(_,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,US,t,E,r)}this._eventListeners=c}};function US(t,n,i,r){return S(t).addEventListener(n,i,r),!1}si.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=c0(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Ds(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,NS,t,i,l),r.splice(n,1),c!==null&&c()}};function NS(t,n,i,r){return S(t).removeEventListener(n,i,r),!1}function Ds(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function u0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function c0(t,n,i,r){if(t.length===0)return-1;r=u0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&u0(c.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},si.prototype.focus=function(t){m(this._fragmentFiber.child,!0,f0,t,void 0,void 0)};function f0(t,n){return t.tag===6?!1:(t=S(t),kS(t,n))}si.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Lh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!f0(n[i],t);i--);};function Lh(t,n){return n.push(t),!1}si.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=Xo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,LS,t,void 0,void 0))};function LS(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,OS,t,void 0,void 0)};function OS(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,zS,t,void 0,void 0);for(var i=n=0;i<Ci.length;i++){var r=Ci[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ci[n++]=r}Ci.length=n}};function zS(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ci=[],Oh=!1;function PS(t,n,i){Ci.push({fragmentInstance:t,observer:n,instance:i}),Oh||(Oh=!0,qS(function(){Oh=!1;var r=Ci;Ci=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}si.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,IS,t,void 0,void 0),t};function IS(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}si.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},si.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Lh,i,void 0,void 0);var r=S(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(i[0]),l=S(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||BS(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function BS(t,n,i,r,l){var c=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=G(i,c,X),n===null?n=!1:(m(n,!0,z,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=G(r,c,X),n===null?n=!1:(m(n,!0,D,c,r),c=x,L=x=null,n=c!==null)),n):!1}function h0(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Lh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),h0(t,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=S(l),h0(l,i)):S(l).scrollIntoView(t),r+=i?-1:1}};function FS(t,n){return t=S(t),d0(t,n),!1}function d0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function p0(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var _=0,E=0;E<Ci.length;E++){var N=Ci[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Ci[_++]=N)}Ci.length=_,c.observe(t)}),d0(t,n))}function HS(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?PS(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function zh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":zh(i),ee(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function GS(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function VS(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function m0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Ph(t){return t.data==="$?"||t.data==="$~"}function Ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function XS(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bh=null;function g0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return vi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function _0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function kS(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function qS(t){i0(function(){i0(function(n){return t(n)})})}function v0(t,n,i){switch(n=Xo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function x0(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Ge(t,n,r,null,yS,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),ee(t)}function Fh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var xi=new Map,y0=new Set;function ko(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var pa=Vt.d;Vt.d={f:jS,r:YS,D:WS,C:ZS,L:KS,m:QS,X:$S,S:JS,M:tM};function jS(){var t=pa.f(),n=Eu();return t||n}function YS(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Mg(n):pa.r(t)}var Us=typeof document>"u"?null:document;function S0(t,n,i){var r=Us;if(r&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),y0.has(l)||(y0.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Rn(n,"link",t),we(n),r.head.appendChild(n)))}}function WS(t){pa.D(t),S0("dns-prefetch",t,null)}function ZS(t,n){pa.C(t,n),S0("preconnect",t,n)}function KS(t,n,i){pa.L(t,n,i);var r=Us;if(r&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=Ns(t);break;case"script":c=Ls(t)}if(!(xi.has(c)||(t=O({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),xi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(qo(c))||n==="script"&&r.querySelector(jo(c))))){var _=r.createElement("link");Rn(_,"link",t),n==="style"&&(_[Ce]=!0,_.onload=_.onerror=function(){Ca(_)}),we(_),r.head.appendChild(_)}}}function QS(t,n){pa.m(t,n);var i=Us;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ls(t)}if(!xi.has(c)&&(t=O({rel:"modulepreload",href:t},n),xi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(jo(c)))return}r=i.createElement("link"),Rn(r,"link",t),we(r),i.head.appendChild(r)}}}function JS(t,n,i){pa.S(t,n,i);var r=Us;if(r&&t){var l=Jn(r).hoistableStyles,c=Ns(t);n=n||"default";var _=l.get(c);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(qo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},i),(i=xi.get(c))&&Hh(t,i);var N=_=r.createElement("link");we(N),Rn(N,"link",t),N._p=new Promise(function(Z,lt){N.onload=Z,N.onerror=lt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Du(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(c,_)}}}function $S(t,n){pa.X(t,n);var i=Us;if(i&&t){var r=Jn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(jo(l)),c||(t=O({src:t,async:!0},n),(n=xi.get(l))&&Gh(t,n),c=i.createElement("script"),we(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function tM(t,n){pa.M(t,n);var i=Us;if(i&&t){var r=Jn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(jo(l)),c||(t=O({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&Gh(t,n),c=i.createElement("script"),we(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function M0(t,n,i,r){var l=(l=qe.current)?ko(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ns(i.href),n=Jn(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ns(i.href);var c=Jn(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(qo(t)))?c._p||(_.instance=c,_.state.loading=5):(c=xi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},xi.set(t,c)),eM(l,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Ls(i),n=Jn(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ns(t){return'href="'+fi(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function E0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function eM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ca.bind(null,n),Rn(n,"link",i),we(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ls(t){return'[src="'+fi(t)+'"]'}function jo(t){return"script[async]"+t}function T0(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return n.instance=r,we(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),we(r),Rn(r,"style",l),Du(r,i.precedence,t),n.instance=r;case"stylesheet":l=Ns(i.href);var c=t.querySelector(qo(l));if(c)return n.state.loading|=4,n.instance=c,we(c),c;r=E0(i),(l=xi.get(l))&&Hh(r,l),c=(t.ownerDocument||t).createElement("link"),we(c);var _=c;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Rn(c,"link",r),n.state.loading|=4,Du(c,i.precedence,t),n.instance=c;case"script":return c=Ls(i.src),(l=t.querySelector(jo(c)))?(n.instance=l,we(l),l):(r=i,(l=xi.get(c))&&(r=O({},i),Gh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),we(l),Rn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Du(r,i.precedence,t));return n.instance}function Du(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uu=null;function b0(t,n,i){if(Uu===null){var r=new Map,l=Uu=new Map;l.set(i,r)}else l=Uu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ne]||c[wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(c):r.set(_,[c])}}return r}function Vh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function nM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function A0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function C0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function w0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=C0(n),t.suspenseyImages.push(n)),t=rM.bind(t),n.decode().then(t,t))}function iM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ns(r.href),c=n.querySelector(qo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Yo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,we(c);return}c=n.ownerDocument||n,r=E0(r),(l=xi.get(l))&&Hh(r,l),c=c.createElement("link"),we(c);var _=c;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Rn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Yo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Nu=0;function aM(t,n){return t.stylesheets&&t.count===0&&Ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Nu===0&&(Nu=62500*MS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Nu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function D0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ou(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Yo(){this.count--,D0(this)}function rM(){this.imgCount--,D0(this)}var Lu=null;function Ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,n.forEach(sM,t),Lu=null,Yo.call(t))}function sM(t,n){if(!(n.state.loading&4)){var i=Lu.get(t);if(i)var r=i.get(null);else{i=new Map,Lu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(i.set(_.dataset.precedence,_),r=_)}r&&i.set(null,r)}l=n.instance,_=l.getAttribute("data-precedence"),c=i.get(_)||r,c===r&&i.set(null,l),i.set(_,l),this.count++,r=Yo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Os={$$typeof:nt,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function oM(t,n,i,r,l,c,_,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.hiddenUpdates=oo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function U0(t,n,i,r,l,c,_,E,N,Z,lt,_t){return t=new oM(t,n,i,_,N,Z,lt,_t,E),n=1,c===!0&&(n|=24),c=kn(3,null,null,n),t.current=c,c.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},of(c),t}function N0(t){return t?(t=ss,t):ss}function L0(t,n,i,r,l,c){l=N0(l),r.context===null?r.context=l:r.pendingContext=l,r=Ia(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ba(t,r,n),i!==null&&(Wn(i,t,n),To(i,t,n))}function O0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Xh(t,n){O0(t,n),(t=t.alternate)&&O0(t,n)}function z0(t){if(t.tag===13||t.tag===31){var n=yr(t,67108864);n!==null&&Wn(n,t,67108864),Xh(t,67108864)}}function P0(t){if(t.tag===13||t.tag===31){var n=ri();n=ht(n);var i=yr(t,n);i!==null&&Wn(i,t,n),Xh(t,n)}}var zs=!0;function lM(t,n,i,r){var l=xt.T;xt.T=null;var c=Vt.p;try{Vt.p=2,kh(t,n,i,r)}finally{Vt.p=c,xt.T=l}}function uM(t,n,i,r){var l=xt.T;xt.T=null;var c=Vt.p;try{Vt.p=8,kh(t,n,i,r)}finally{Vt.p=c,xt.T=l}}function kh(t,n,i,r){if(zs){var l=qh(r);if(l===null)bh(t,n,r,zu,i),B0(t,r);else if(fM(l,t,n,i,r))r.stopPropagation();else if(B0(t,r),n&4&&-1<cM.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ci(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Un(_);E.entanglements[1]|=N,_&=~N}qi(c),(Oe&6)===0&&(yu=q()+500,Ho(0))}}break;case 31:case 13:E=yr(c,2),E!==null&&Wn(E,c,2),Eu(),Xh(c,2)}if(c=qh(r),c===null&&bh(t,n,r,zu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else bh(t,n,r,null,i)}}function qh(t){return t=wc(t),jh(t)}var zu=null;function jh(t){if(zu=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zu=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case Ut:return 2;case Xt:return 8;case Tt:case St:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var Yh=!1,Ka=null,Qa=null,Ja=null,Wo=new Map,Zo=new Map,$a=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ge(n),n!==null&&z0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function fM(t,n,i,r,l){switch(n){case"focusin":return Ka=Ko(Ka,t,n,i,r,l),!0;case"dragenter":return Qa=Ko(Qa,t,n,i,r,l),!0;case"mouseover":return Ja=Ko(Ja,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return Wo.set(c,Ko(Wo.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Zo.set(c,Ko(Zo.get(c)||null,t,n,i,r,l)),!0}return!1}function F0(t){var n=Le(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){P0(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){P0(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=qh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Cc=r,i.target.dispatchEvent(r),Cc=null}else return n=ge(i),n!==null&&z0(n),t.blockedOn=i,!1;n.shift()}return!0}function H0(t,n,i){Pu(t)&&i.delete(n)}function hM(){Yh=!1,Ka!==null&&Pu(Ka)&&(Ka=null),Qa!==null&&Pu(Qa)&&(Qa=null),Ja!==null&&Pu(Ja)&&(Ja=null),Wo.forEach(H0),Zo.forEach(H0)}function Iu(t,n){t.blockedOn===n&&(t.blockedOn=null,Yh||(Yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hM)))}var Bu=null;function G0(t){Bu!==t&&(Bu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bu===t&&(Bu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(jh(r||i)===null)continue;break}var c=ge(i);c!==null&&(t.splice(n,3),n-=3,Cf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ps(t){function n(N){return Iu(N,t)}Ka!==null&&Iu(Ka,t),Qa!==null&&Iu(Qa,t),Ja!==null&&Iu(Ja,t),Wo.forEach(n),Zo.forEach(n);for(var i=0;i<$a.length;i++){var r=$a[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<$a.length&&(i=$a[0],i.blockedOn===null);)F0(i),i.blockedOn===null&&$a.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],_=l[qt]||null;if(typeof c=="function")_||G0(i);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[qt]||null)E=_.formAction;else if(jh(l)!==null)continue}else E=_.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),G0(i)}}}function V0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Wh(t){this._internalRoot=t}Fu.prototype.render=Wh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ri();L0(i,r,t,n,null,null)},Fu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;L0(t.current,2,null,t,null,null),Eu(),n[ne]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<$a.length&&n!==0&&n<$a[i].priority;i++);$a.splice(i,0,t),i===0&&F0(t)}};var X0=e.version;if(X0!=="19.3.0")throw Error(s(527,X0,"19.3.0"));Vt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var dM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{Me=Hu.inject(dM),$e=Hu}catch{}}return Jo.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Ng,c=Lg,_=Og;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=U0(t,1,!1,null,null,i,r,null,l,c,_,V0),t[ne]=n.current,Th(t),new Wh(n)},Jo.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ng,_=Lg,E=Og,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),n=U0(t,1,!0,n,i??null,r,l,N,c,_,E,V0),n.context=N0(null),i=n.current,r=ri(),r=ht(r),l=Ia(r),l.callback=null,Ba(i,l,r),i=r,n.current.lanes=i,_r(n,i),qi(n),t[ne]=n.current,Th(t),new Fu(n)},Jo.version="19.3.0",Jo}var $0;function EM(){if($0)return Kh.exports;$0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kh.exports=MM(),Kh.exports}var TM=EM(),Se=Tp();const bM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tx=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();var AM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const RM=Se.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},g)=>Se.createElement("svg",{ref:g,...AM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:tx("lucide",u),...d},[...h.map(([p,v])=>Se.createElement(p,v)),...Array.isArray(f)?f:[f]]));const Dn=(o,e)=>{const a=Se.forwardRef(({className:s,...u},f)=>Se.createElement(RM,{ref:f,iconNode:e,className:tx(`lucide-${bM(o)}`,s),...u}));return a.displayName=`${o}`,a};const CM=Dn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);const wM=Dn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Gu=Dn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const DM=Dn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);const UM=Dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const NM=Dn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const LM=Dn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);const OM=Dn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);const zM=Dn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const PM=Dn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const IM=Dn("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);const tv=Dn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const BM=Dn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const ev=Dn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);const FM=Dn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const HM=Dn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);const ed=Dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const bp="180",GM=0,nv=1,VM=2,ex=1,XM=2,Sa=3,fr=0,Qn=1,Ma=2,ur=0,Js=1,iv=2,av=3,rv=4,kM=5,jr=100,qM=101,jM=102,YM=103,WM=104,ZM=200,KM=201,QM=202,JM=203,zd=204,Pd=205,$M=206,tE=207,eE=208,nE=209,iE=210,aE=211,rE=212,sE=213,oE=214,Id=0,Bd=1,Fd=2,to=3,Hd=4,Gd=5,Vd=6,Xd=7,nx=0,lE=1,uE=2,cr=0,cE=1,fE=2,hE=3,ix=4,dE=5,pE=6,mE=7,ax=300,eo=301,no=302,ol=303,kd=304,xc=306,qd=1e3,Ta=1001,jd=1002,ui=1003,gE=1004,Vu=1005,wn=1006,nd=1007,lr=1008,Qi=1009,rx=1010,sx=1011,ll=1012,Ap=1013,Wr=1014,Kn=1015,ba=1016,Rp=1017,Cp=1018,ul=1020,ox=35902,lx=35899,ux=1021,cx=1022,Mi=1023,cl=1026,fl=1027,fx=1028,wp=1029,hx=1030,Dp=1031,Up=1033,fc=33776,hc=33777,dc=33778,pc=33779,Yd=35840,Wd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37808,ep=37809,np=37810,ip=37811,ap=37812,rp=37813,sp=37814,op=37815,lp=37816,up=37817,cp=37818,fp=37819,hp=37820,dp=37821,pp=36492,mp=36494,gp=36495,_p=36283,vp=36284,xp=36285,yp=36286,_E=3200,vE=3201,dx=0,xE=1,or="",Si="srgb",Zr="srgb-linear",gc="linear",ke="srgb",Is=7680,sv=519,yE=512,SE=513,ME=514,px=515,EE=516,TE=517,bE=518,AE=519,ov=35044,lv="300 es",Yi=2e3,_c=2001;class ao{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Sp=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function be(o,e,a){return Math.max(e,Math.min(a,o))}function RE(o,e){return(o%e+e)%e}function ad(o,e,a){return(1-a)*o+a*e}function $o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,a=0){Pe.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,h,d){let g=s[u+0],p=s[u+1],v=s[u+2],m=s[u+3];const y=f[h+0],M=f[h+1],b=f[h+2],w=f[h+3];if(d===0){e[a+0]=g,e[a+1]=p,e[a+2]=v,e[a+3]=m;return}if(d===1){e[a+0]=y,e[a+1]=M,e[a+2]=b,e[a+3]=w;return}if(m!==w||g!==y||p!==M||v!==b){let S=1-d;const x=g*y+p*M+v*b+m*w,L=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const X=Math.sqrt(z),G=Math.atan2(X,x*L);S=Math.sin(S*G)/X,d=Math.sin(d*G)/X}const D=d*L;if(g=g*S+y*D,p=p*S+M*D,v=v*S+b*D,m=m*S+w*D,S===1-d){const X=1/Math.sqrt(g*g+p*p+v*v+m*m);g*=X,p*=X,v*=X,m*=X}}e[a]=g,e[a+1]=p,e[a+2]=v,e[a+3]=m}static multiplyQuaternionsFlat(e,a,s,u,f,h){const d=s[u],g=s[u+1],p=s[u+2],v=s[u+3],m=f[h],y=f[h+1],M=f[h+2],b=f[h+3];return e[a]=d*b+v*m+g*M-p*y,e[a+1]=g*b+v*y+p*m-d*M,e[a+2]=p*b+v*M+d*y-g*m,e[a+3]=v*b-d*m-g*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(s/2),v=d(u/2),m=d(f/2),y=g(s/2),M=g(u/2),b=g(f/2);switch(h){case"XYZ":this._x=y*v*m+p*M*b,this._y=p*M*m-y*v*b,this._z=p*v*b+y*M*m,this._w=p*v*m-y*M*b;break;case"YXZ":this._x=y*v*m+p*M*b,this._y=p*M*m-y*v*b,this._z=p*v*b-y*M*m,this._w=p*v*m+y*M*b;break;case"ZXY":this._x=y*v*m-p*M*b,this._y=p*M*m+y*v*b,this._z=p*v*b+y*M*m,this._w=p*v*m-y*M*b;break;case"ZYX":this._x=y*v*m-p*M*b,this._y=p*M*m+y*v*b,this._z=p*v*b-y*M*m,this._w=p*v*m+y*M*b;break;case"YZX":this._x=y*v*m+p*M*b,this._y=p*M*m+y*v*b,this._z=p*v*b-y*M*m,this._w=p*v*m-y*M*b;break;case"XZY":this._x=y*v*m-p*M*b,this._y=p*M*m-y*v*b,this._z=p*v*b+y*M*m,this._w=p*v*m+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],g=a[9],p=a[2],v=a[6],m=a[10],y=s+d+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-g)*M,this._y=(f-p)*M,this._z=(h-u)*M}else if(s>d&&s>m){const M=2*Math.sqrt(1+s-d-m);this._w=(v-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+p)/M}else if(d>m){const M=2*Math.sqrt(1+d-s-m);this._w=(f-p)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+m-s-d);this._w=(h-u)/M,this._x=(f+p)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,h=e._w,d=a._x,g=a._y,p=a._z,v=a._w;return this._x=s*v+h*d+u*p-f*g,this._y=u*v+h*g+f*d-s*p,this._z=f*v+h*p+s*g-u*d,this._w=h*v-s*d-u*g-f*p,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const p=Math.sqrt(g),v=Math.atan2(p,d),m=Math.sin((1-a)*v)/p,y=Math.sin(a*v)/p;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=u*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(e=0,a=0,s=0){ft.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(uv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*u-d*s),v=2*(d*a-f*u),m=2*(f*s-h*a);return this.x=a+g*p+h*m-d*v,this.y=s+g*v+d*p-f*m,this.z=u+g*m+f*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this.z=be(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this.z=be(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,h=a.x,d=a.y,g=a.z;return this.x=u*g-f*d,this.y=f*h-s*g,this.z=s*d-u*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new ft,uv=new pl;class pe{constructor(e,a,s,u,f,h,d,g,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,g,p)}set(e,a,s,u,f,h,d,g,p){const v=this.elements;return v[0]=e,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=g,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],g=s[6],p=s[1],v=s[4],m=s[7],y=s[2],M=s[5],b=s[8],w=u[0],S=u[3],x=u[6],L=u[1],z=u[4],D=u[7],X=u[2],G=u[5],O=u[8];return f[0]=h*w+d*L+g*X,f[3]=h*S+d*z+g*G,f[6]=h*x+d*D+g*O,f[1]=p*w+v*L+m*X,f[4]=p*S+v*z+m*G,f[7]=p*x+v*D+m*O,f[2]=y*w+M*L+b*X,f[5]=y*S+M*z+b*G,f[8]=y*x+M*D+b*O,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8];return a*h*v-a*d*p-s*f*v+s*d*g+u*f*p-u*h*g}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8],m=v*h-d*p,y=d*g-v*f,M=p*f-h*g,b=a*m+s*y+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=m*w,e[1]=(u*p-v*s)*w,e[2]=(d*s-u*h)*w,e[3]=y*w,e[4]=(v*a-u*g)*w,e[5]=(u*f-d*a)*w,e[6]=M*w,e[7]=(s*g-p*a)*w,e[8]=(h*a-s*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,h,d){const g=Math.cos(f),p=Math.sin(f);return this.set(s*g,s*p,-s*(g*h+p*d)+h+e,-u*p,u*g,-u*(-p*h+g*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(sd.makeScale(e,a)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,a){return this.premultiply(sd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new pe;function mx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CE(){const o=vc("canvas");return o.style.display="block",o}const cv={};function hl(o){o in cv||(cv[o]=!0,console.warn(o))}function wE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const fv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const o={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Aa(u.r),u.g=Aa(u.g),u.b=Aa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=$s(u.r),u.g=$s(u.g),u.b=$s(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===or?gc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Zr]:{primaries:e,whitePoint:s,transfer:gc,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),o}const Ue=DE();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class UE{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=vc("canvas")),Bs.width=e.width,Bs.height=e.height;const u=Bs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=vc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Aa(a[s]/255)*255):a[s]=Aa(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(od(u[h].image)):f.push(od(u[h]))}else f=od(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LE=0;const ld=new ft;class Xn extends ao{constructor(e=Xn.DEFAULT_IMAGE,a=Xn.DEFAULT_MAPPING,s=Ta,u=Ta,f=wn,h=lr,d=Mi,g=Qi,p=Xn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=dl(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ax;Xn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const g=e.elements,p=g[0],v=g[4],m=g[8],y=g[1],M=g[5],b=g[9],w=g[2],S=g[6],x=g[10];if(Math.abs(v-y)<.01&&Math.abs(m-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(m+w)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(p+1)/2,D=(M+1)/2,X=(x+1)/2,G=(v+y)/4,O=(m+w)/4,P=(b+S)/4;return z>D&&z>X?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=G/s,f=O/s):D>X?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=G/u,f=P/u):X<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(X),s=O/f,u=P/f),this.set(s,u,f,a),this}let L=Math.sqrt((S-b)*(S-b)+(m-w)*(m-w)+(y-v)*(y-v));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(m-w)/L,this.z=(y-v)/L,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this.z=be(this.z,e.z,a.z),this.w=be(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this.z=be(this.z,e,a),this.w=be(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends ao{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,e,a),this.scissorTest=!1,this.viewport=new rn(0,0,e,a);const u={width:e,height:a,depth:s.depth},f=new Xn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const a={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new Np(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends OE{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class gx extends Xn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends Xn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=new ft(1/0,1/0,1/0),a=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(wi.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(wi.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=wi.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(f,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xu.copy(s.boundingBox)),Xu.applyMatrix4(e.matrixWorld),this.union(Xu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),ku.subVectors(this.max,tl),Fs.subVectors(e.a,tl),Hs.subVectors(e.b,tl),Gs.subVectors(e.c,tl),er.subVectors(Hs,Fs),nr.subVectors(Gs,Hs),Br.subVectors(Fs,Gs);let a=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Br.z,Br.y,er.z,0,-er.x,nr.z,0,-nr.x,Br.z,0,-Br.x,-er.y,er.x,0,-nr.y,nr.x,0,-Br.y,Br.x,0];return!ud(a,Fs,Hs,Gs,ku)||(a=[1,0,0,0,1,0,0,0,1],!ud(a,Fs,Hs,Gs,ku))?!1:(qu.crossVectors(er,nr),a=[qu.x,qu.y,qu.z],ud(a,Fs,Hs,Gs,ku))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],wi=new ft,Xu=new ml,Fs=new ft,Hs=new ft,Gs=new ft,er=new ft,nr=new ft,Br=new ft,tl=new ft,ku=new ft,qu=new ft,Fr=new ft;function ud(o,e,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Fr.fromArray(o,f);const d=u.x*Math.abs(Fr.x)+u.y*Math.abs(Fr.y)+u.z*Math.abs(Fr.z),g=e.dot(Fr),p=a.dot(Fr),v=s.dot(Fr);if(Math.max(-Math.max(g,p,v),Math.min(g,p,v))>d)return!1}return!0}const PE=new ml,el=new ft,cd=new ft;class Lp{constructor(e=new ft,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):PE.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const a=el.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(el,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(cd)),this.expandByPoint(el.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new ft,fd=new ft,ju=new ft,ir=new ft,hd=new ft,Yu=new ft,dd=new ft;class IE{constructor(e=new ft,a=new ft(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ga.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){fd.copy(e).add(a).multiplyScalar(.5),ju.copy(a).sub(e).normalize(),ir.copy(this.origin).sub(fd);const f=e.distanceTo(a)*.5,h=-this.direction.dot(ju),d=ir.dot(this.direction),g=-ir.dot(ju),p=ir.lengthSq(),v=Math.abs(1-h*h);let m,y,M,b;if(v>0)if(m=h*g-d,y=h*d-g,b=f*v,m>=0)if(y>=-b)if(y<=b){const w=1/v;m*=w,y*=w,M=m*(m+h*y+2*d)+y*(h*m+y+2*g)+p}else y=f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y=-f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y<=-b?(m=Math.max(0,-(-h*f+d)),y=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p):y<=b?(m=0,y=Math.min(Math.max(-f,-g),f),M=y*(y+2*g)+p):(m=Math.max(0,-(h*f+d)),y=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p);else y=h>0?-f:f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(fd).addScaledVector(ju,y),M}intersectSphere(e,a){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),u=ga.dot(ga)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,a):this.at(d,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,h,d,g;const p=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,u=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,u=(e.min.x-y.x)*p),v>=0?(f=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(f=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(e.min.z-y.z)*m,g=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,g=(e.min.z-y.z)*m),s>g||d>u)||((d>s||s!==s)&&(s=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,a,s,u,f){hd.subVectors(a,e),Yu.subVectors(s,e),dd.crossVectors(hd,Yu);let h=this.direction.dot(dd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ir.subVectors(this.origin,e);const g=d*this.direction.dot(Yu.crossVectors(ir,Yu));if(g<0)return null;const p=d*this.direction.dot(hd.cross(ir));if(p<0||g+p>h)return null;const v=-d*ir.dot(dd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,a,s,u,f,h,d,g,p,v,m,y,M,b,w,S){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,g,p,v,m,y,M,b,w,S)}set(e,a,s,u,f,h,d,g,p,v,m,y,M,b,w,S){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=g,x[2]=p,x[6]=v,x[10]=m,x[14]=y,x[3]=M,x[7]=b,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Vs.setFromMatrixColumn(e,0).length(),f=1/Vs.setFromMatrixColumn(e,1).length(),h=1/Vs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(u),p=Math.sin(u),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const y=h*v,M=h*m,b=d*v,w=d*m;a[0]=g*v,a[4]=-g*m,a[8]=p,a[1]=M+b*p,a[5]=y-w*p,a[9]=-d*g,a[2]=w-y*p,a[6]=b+M*p,a[10]=h*g}else if(e.order==="YXZ"){const y=g*v,M=g*m,b=p*v,w=p*m;a[0]=y+w*d,a[4]=b*d-M,a[8]=h*p,a[1]=h*m,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=w+y*d,a[10]=h*g}else if(e.order==="ZXY"){const y=g*v,M=g*m,b=p*v,w=p*m;a[0]=y-w*d,a[4]=-h*m,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=w-y*d,a[2]=-h*p,a[6]=d,a[10]=h*g}else if(e.order==="ZYX"){const y=h*v,M=h*m,b=d*v,w=d*m;a[0]=g*v,a[4]=b*p-M,a[8]=y*p+w,a[1]=g*m,a[5]=w*p+y,a[9]=M*p-b,a[2]=-p,a[6]=d*g,a[10]=h*g}else if(e.order==="YZX"){const y=h*g,M=h*p,b=d*g,w=d*p;a[0]=g*v,a[4]=w-y*m,a[8]=b*m+M,a[1]=m,a[5]=h*v,a[9]=-d*v,a[2]=-p*v,a[6]=M*m+b,a[10]=y-w*m}else if(e.order==="XZY"){const y=h*g,M=h*p,b=d*g,w=d*p;a[0]=g*v,a[4]=-m,a[8]=p*v,a[1]=y*m+w,a[5]=h*v,a[9]=M*m-b,a[2]=b*m-M,a[6]=d*v,a[10]=w*m+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,FE)}lookAt(e,a,s){const u=this.elements;return oi.subVectors(e,a),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ar.crossVectors(s,oi),ar.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ar.crossVectors(s,oi)),ar.normalize(),Wu.crossVectors(oi,ar),u[0]=ar.x,u[4]=Wu.x,u[8]=oi.x,u[1]=ar.y,u[5]=Wu.y,u[9]=oi.y,u[2]=ar.z,u[6]=Wu.z,u[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],g=s[8],p=s[12],v=s[1],m=s[5],y=s[9],M=s[13],b=s[2],w=s[6],S=s[10],x=s[14],L=s[3],z=s[7],D=s[11],X=s[15],G=u[0],O=u[4],P=u[8],C=u[12],R=u[1],B=u[5],J=u[9],rt=u[13],ut=u[2],nt=u[6],F=u[10],K=u[14],j=u[3],vt=u[7],yt=u[11],Bt=u[15];return f[0]=h*G+d*R+g*ut+p*j,f[4]=h*O+d*B+g*nt+p*vt,f[8]=h*P+d*J+g*F+p*yt,f[12]=h*C+d*rt+g*K+p*Bt,f[1]=v*G+m*R+y*ut+M*j,f[5]=v*O+m*B+y*nt+M*vt,f[9]=v*P+m*J+y*F+M*yt,f[13]=v*C+m*rt+y*K+M*Bt,f[2]=b*G+w*R+S*ut+x*j,f[6]=b*O+w*B+S*nt+x*vt,f[10]=b*P+w*J+S*F+x*yt,f[14]=b*C+w*rt+S*K+x*Bt,f[3]=L*G+z*R+D*ut+X*j,f[7]=L*O+z*B+D*nt+X*vt,f[11]=L*P+z*J+D*F+X*yt,f[15]=L*C+z*rt+D*K+X*Bt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],g=e[9],p=e[13],v=e[2],m=e[6],y=e[10],M=e[14],b=e[3],w=e[7],S=e[11],x=e[15];return b*(+f*g*m-u*p*m-f*d*y+s*p*y+u*d*M-s*g*M)+w*(+a*g*M-a*p*y+f*h*y-u*h*M+u*p*v-f*g*v)+S*(+a*p*m-a*d*M-f*h*m+s*h*M+f*d*v-s*p*v)+x*(-u*d*v-a*g*m+a*d*y+u*h*m-s*h*y+s*g*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],v=e[8],m=e[9],y=e[10],M=e[11],b=e[12],w=e[13],S=e[14],x=e[15],L=m*S*p-w*y*p+w*g*M-d*S*M-m*g*x+d*y*x,z=b*y*p-v*S*p-b*g*M+h*S*M+v*g*x-h*y*x,D=v*w*p-b*m*p+b*d*M-h*w*M-v*d*x+h*m*x,X=b*m*g-v*w*g-b*d*y+h*w*y+v*d*S-h*m*S,G=a*L+s*z+u*D+f*X;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=L*O,e[1]=(w*y*f-m*S*f-w*u*M+s*S*M+m*u*x-s*y*x)*O,e[2]=(d*S*f-w*g*f+w*u*p-s*S*p-d*u*x+s*g*x)*O,e[3]=(m*g*f-d*y*f-m*u*p+s*y*p+d*u*M-s*g*M)*O,e[4]=z*O,e[5]=(v*S*f-b*y*f+b*u*M-a*S*M-v*u*x+a*y*x)*O,e[6]=(b*g*f-h*S*f-b*u*p+a*S*p+h*u*x-a*g*x)*O,e[7]=(h*y*f-v*g*f+v*u*p-a*y*p-h*u*M+a*g*M)*O,e[8]=D*O,e[9]=(b*m*f-v*w*f-b*s*M+a*w*M+v*s*x-a*m*x)*O,e[10]=(h*w*f-b*d*f+b*s*p-a*w*p-h*s*x+a*d*x)*O,e[11]=(v*d*f-h*m*f-v*s*p+a*m*p+h*s*M-a*d*M)*O,e[12]=X*O,e[13]=(v*w*u-b*m*u+b*s*y-a*w*y-v*s*S+a*m*S)*O,e[14]=(b*d*u-h*w*u-b*s*g+a*w*g+h*s*S-a*d*S)*O,e[15]=(h*m*u-v*d*u+v*s*g-a*m*g-h*s*y+a*d*y)*O,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=e.x,d=e.y,g=e.z,p=f*h,v=f*d;return this.set(p*h+s,p*d-u*g,p*g+u*d,0,p*d+u*g,v*d+s,v*g-u*h,0,p*g-u*d,v*g+u*h,f*g*g+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,g=a._w,p=f+f,v=h+h,m=d+d,y=f*p,M=f*v,b=f*m,w=h*v,S=h*m,x=d*m,L=g*p,z=g*v,D=g*m,X=s.x,G=s.y,O=s.z;return u[0]=(1-(w+x))*X,u[1]=(M+D)*X,u[2]=(b-z)*X,u[3]=0,u[4]=(M-D)*G,u[5]=(1-(y+x))*G,u[6]=(S+L)*G,u[7]=0,u[8]=(b+z)*O,u[9]=(S-L)*O,u[10]=(1-(y+w))*O,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Vs.set(u[0],u[1],u[2]).length();const h=Vs.set(u[4],u[5],u[6]).length(),d=Vs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Di.copy(this);const p=1/f,v=1/h,m=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=m,Di.elements[9]*=m,Di.elements[10]*=m,a.setFromRotationMatrix(Di),s.x=f,s.y=h,s.z=d,this}makePerspective(e,a,s,u,f,h,d=Yi,g=!1){const p=this.elements,v=2*f/(a-e),m=2*f/(s-u),y=(a+e)/(a-e),M=(s+u)/(s-u);let b,w;if(g)b=f/(h-f),w=h*f/(h-f);else if(d===Yi)b=-(h+f)/(h-f),w=-2*h*f/(h-f);else if(d===_c)b=-h/(h-f),w=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=m,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,s,u,f,h,d=Yi,g=!1){const p=this.elements,v=2/(a-e),m=2/(s-u),y=-(a+e)/(a-e),M=-(s+u)/(s-u);let b,w;if(g)b=1/(h-f),w=h/(h-f);else if(d===Yi)b=-2/(h-f),w=-(h+f)/(h-f);else if(d===_c)b=-1/(h-f),w=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=m,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Vs=new ft,Di=new on,BE=new ft(0,0,0),FE=new ft(1,1,1),ar=new ft,Wu=new ft,oi=new ft,dv=new on,pv=new pl;class Ji{constructor(e=0,a=0,s=0,u=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],g=u[1],p=u[5],v=u[9],m=u[2],y=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const mv=new ft,Xs=new pl,_a=new on,Zu=new ft,nl=new ft,GE=new ft,VE=new pl,gv=new ft(1,0,0),_v=new ft(0,1,0),vv=new ft(0,0,1),xv={type:"added"},XE={type:"removed"},ks={type:"childadded",child:null},pd={type:"childremoved",child:null};class Pn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ft,a=new Ji,s=new pl,u=new ft(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new on},normalMatrix:{value:new pe}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(_v,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,a){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(_v,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?Zu.copy(e):Zu.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(nl,Zu,this.up):_a.lookAt(Zu,nl,this.up),this.quaternion.setFromRotationMatrix(_a),u&&(_a.extractRotation(u.matrixWorld),Xs.setFromRotationMatrix(_a),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(XE),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,v=g.length;p<v;p++){const m=g[p];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(f(e.materials,this.material[g]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(e.animations,g))}}if(a){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),v=h(e.images),m=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const g=[];for(const p in d){const v=d[p];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}Pn.DEFAULT_UP=new ft(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ft,va=new ft,md=new ft,xa=new ft,qs=new ft,js=new ft,yv=new ft,gd=new ft,_d=new ft,vd=new ft,xd=new rn,yd=new rn,Sd=new rn;class Li{constructor(e=new ft,a=new ft,s=new ft){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Ui.subVectors(e,a),u.cross(Ui);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Ui.subVectors(u,a),va.subVectors(s,a),md.subVectors(e,a);const h=Ui.dot(Ui),d=Ui.dot(va),g=Ui.dot(md),p=va.dot(va),v=va.dot(md),m=h*p-d*d;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(p*g-d*v)*y,b=(h*v-d*g)*y;return f.set(1-M-b,b,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,a,s,u,f,h,d,g){return this.getBarycoord(e,a,s,u,xa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,xa.x),g.addScaledVector(h,xa.y),g.addScaledVector(d,xa.z),g)}static getInterpolatedAttribute(e,a,s,u,f,h){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,s),Sd.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(xd,f.x),h.addScaledVector(yd,f.y),h.addScaledVector(Sd,f.z),h}static isFrontFacing(e,a,s,u){return Ui.subVectors(s,a),va.subVectors(e,a),Ui.cross(va).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Li.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Li.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let h,d;qs.subVectors(u,s),js.subVectors(f,s),gd.subVectors(e,s);const g=qs.dot(gd),p=js.dot(gd);if(g<=0&&p<=0)return a.copy(s);_d.subVectors(e,u);const v=qs.dot(_d),m=js.dot(_d);if(v>=0&&m<=v)return a.copy(u);const y=g*m-v*p;if(y<=0&&g>=0&&v<=0)return h=g/(g-v),a.copy(s).addScaledVector(qs,h);vd.subVectors(e,f);const M=qs.dot(vd),b=js.dot(vd);if(b>=0&&M<=b)return a.copy(f);const w=M*p-g*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),a.copy(s).addScaledVector(js,d);const S=v*b-M*m;if(S<=0&&m-v>=0&&M-b>=0)return yv.subVectors(f,u),d=(m-v)/(m-v+(M-b)),a.copy(u).addScaledVector(yv,d);const x=1/(S+w+y);return h=w*x,d=y*x,a.copy(s).addScaledVector(qs,h).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function Md(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class ze{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=Ue.workingColorSpace){return this.r=e,this.g=a,this.b=s,Ue.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=Ue.workingColorSpace){if(e=RE(e,1),a=be(a,0,1),s=be(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=Md(h,f,e+1/3),this.g=Md(h,f,e),this.b=Md(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,a=Si){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=Si){const s=vx[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ue.workingToColorSpace(zn.copy(this),e),Math.round(be(zn.r*255,0,255))*65536+Math.round(be(zn.g*255,0,255))*256+Math.round(be(zn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ue.workingColorSpace){Ue.workingToColorSpace(zn.copy(this),a);const s=zn.r,u=zn.g,f=zn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let g,p;const v=(d+h)/2;if(d===h)g=0,p=0;else{const m=h-d;switch(p=v<=.5?m/(h+d):m/(2-h-d),h){case s:g=(u-f)/m+(u<f?6:0);break;case u:g=(f-s)/m+2;break;case f:g=(s-u)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=v,e}getRGB(e,a=Ue.workingColorSpace){return Ue.workingToColorSpace(zn.copy(this),a),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Si){Ue.workingToColorSpace(zn.copy(this),e);const a=zn.r,s=zn.g,u=zn.b;return e!==Si?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+a,rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(rr),e.getHSL(Ku);const s=ad(rr.h,Ku.h,a),u=ad(rr.s,Ku.s,a),f=ad(rr.l,Ku.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ze;ze.NAMES=vx;let kE=0;class gl extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Js,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(a){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xx extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ea=qE();function qE(){const o=new ArrayBuffer(4),e=new Float32Array(o),a=new Uint32Array(o),s=new Uint32Array(512),u=new Uint32Array(512);for(let g=0;g<256;++g){const p=g-127;p<-27?(s[g]=0,s[g|256]=32768,u[g]=24,u[g|256]=24):p<-14?(s[g]=1024>>-p-14,s[g|256]=1024>>-p-14|32768,u[g]=-p-1,u[g|256]=-p-1):p<=15?(s[g]=p+15<<10,s[g|256]=p+15<<10|32768,u[g]=13,u[g|256]=13):p<128?(s[g]=31744,s[g|256]=64512,u[g]=24,u[g|256]=24):(s[g]=31744,s[g|256]=64512,u[g]=13,u[g|256]=13)}const f=new Uint32Array(2048),h=new Uint32Array(64),d=new Uint32Array(64);for(let g=1;g<1024;++g){let p=g<<13,v=0;for(;(p&8388608)===0;)p<<=1,v-=8388608;p&=-8388609,v+=947912704,f[g]=p|v}for(let g=1024;g<2048;++g)f[g]=939524096+(g-1024<<13);for(let g=1;g<31;++g)h[g]=g<<23;h[31]=1199570944,h[32]=2147483648;for(let g=33;g<63;++g)h[g]=2147483648+(g-32<<23);h[63]=3347054592;for(let g=1;g<64;++g)g!==32&&(d[g]=1024);return{floatView:e,uint32View:a,baseTable:s,shiftTable:u,mantissaTable:f,exponentTable:h,offsetTable:d}}function jE(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=be(o,-65504,65504),Ea.floatView[0]=o;const e=Ea.uint32View[0],a=e>>23&511;return Ea.baseTable[a]+((e&8388607)>>Ea.shiftTable[a])}function YE(o){const e=o>>10;return Ea.uint32View[0]=Ea.mantissaTable[Ea.offsetTable[e]+(o&1023)]+Ea.exponentTable[e],Ea.floatView[0]}class Qu{static toHalfFloat(e){return jE(e)}static fromHalfFloat(e){return YE(e)}}const dn=new ft,Ju=new Pe;let WE=0;class Zi{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=ov,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Ju.fromBufferAttribute(this,a),Ju.applyMatrix3(e),this.setXY(a,Ju.x,Ju.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=$o(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=$o(a,this.array)),a}setX(e,a){return this.normalized&&(a=Zn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=$o(a,this.array)),a}setY(e,a){return this.normalized&&(a=Zn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=$o(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Zn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=$o(a,this.array)),a}setW(e,a){return this.normalized&&(a=Zn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),u=Zn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),u=Zn(u,this.array),f=Zn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}}class yx extends Zi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Sx extends Zi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Ki extends Zi{constructor(e,a,s){super(new Float32Array(e),a,s)}}let ZE=0;const yi=new on,Ed=new Pn,Ys=new ft,li=new ml,il=new ml,Mn=new ft;class dr extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?Sx:yx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new pe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,a,s){return yi.makeTranslation(e,a,s),this.applyMatrix4(yi),this}scale(e,a,s){return yi.makeScale(e,a,s),this.applyMatrix4(yi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ki(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lp);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];il.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(li.min,il.min),li.expandByPoint(Mn),Mn.addVectors(li.max,il.max),li.expandByPoint(Mn)):(li.expandByPoint(il.min),li.expandByPoint(il.max))}li.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)Mn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],g=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Mn.fromBufferAttribute(d,p),g&&(Ys.fromBufferAttribute(e,p),Mn.add(Ys)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let P=0;P<s.count;P++)d[P]=new ft,g[P]=new ft;const p=new ft,v=new ft,m=new ft,y=new Pe,M=new Pe,b=new Pe,w=new ft,S=new ft;function x(P,C,R){p.fromBufferAttribute(s,P),v.fromBufferAttribute(s,C),m.fromBufferAttribute(s,R),y.fromBufferAttribute(f,P),M.fromBufferAttribute(f,C),b.fromBufferAttribute(f,R),v.sub(p),m.sub(p),M.sub(y),b.sub(y);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(m,-M.y).multiplyScalar(B),S.copy(m).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(B),d[P].add(w),d[C].add(w),d[R].add(w),g[P].add(S),g[C].add(S),g[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let P=0,C=L.length;P<C;++P){const R=L[P],B=R.start,J=R.count;for(let rt=B,ut=B+J;rt<ut;rt+=3)x(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const z=new ft,D=new ft,X=new ft,G=new ft;function O(P){X.fromBufferAttribute(u,P),G.copy(X);const C=d[P];z.copy(C),z.sub(X.multiplyScalar(X.dot(C))).normalize(),D.crossVectors(G,C);const B=D.dot(g[P])<0?-1:1;h.setXYZW(P,z.x,z.y,z.z,B)}for(let P=0,C=L.length;P<C;++P){const R=L[P],B=R.start,J=R.count;for(let rt=B,ut=B+J;rt<ut;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Zi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const u=new ft,f=new ft,h=new ft,d=new ft,g=new ft,p=new ft,v=new ft,m=new ft;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,w),h.fromBufferAttribute(a,S),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,w),p.fromBufferAttribute(s,S),d.add(v),g.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=a.count;y<M;y+=3)u.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),h.fromBufferAttribute(a,y+2),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)Mn.fromBufferAttribute(e,a),Mn.normalize(),e.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,g){const p=d.array,v=d.itemSize,m=d.normalized,y=new p.constructor(g.length*v);let M=0,b=0;for(let w=0,S=g.length;w<S;w++){d.isInterleavedBufferAttribute?M=g[w]*d.data.stride+d.offset:M=g[w]*v;for(let x=0;x<v;x++)y[b++]=p[M++]}return new Zi(y,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new dr,s=this.index.array,u=this.attributes;for(const d in u){const g=u[d],p=e(g,s);a.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const g=[],p=f[d];for(let v=0,m=p.length;v<m;v++){const y=p[v],M=e(y,s);g.push(M)}a.morphAttributes[d]=g}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];a.addGroup(p.start,p.count,p.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],v=[];for(let m=0,y=p.length;m<y;m++){const M=p[m];v.push(M.toJSON(e.data))}v.length>0&&(u[g]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const p in u){const v=u[p];this.setAttribute(p,v.clone(a))}const f=e.morphAttributes;for(const p in f){const v=[],m=f[p];for(let y=0,M=m.length;y<M;y++)v.push(m[y].clone(a));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new on,Hr=new IE,$u=new Lp,Mv=new ft,tc=new ft,ec=new ft,nc=new ft,Td=new ft,ic=new ft,Ev=new ft,ac=new ft;class Wi extends Pn{constructor(e=new dr,a=new xx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){ic.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const v=d[g],m=f[g];v!==0&&(Td.fromBufferAttribute(m,e),h?ic.addScaledVector(Td,v):ic.addScaledVector(Td.sub(a),v))}a.add(ic)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$u.copy(s.boundingSphere),$u.applyMatrix4(f),Hr.copy(e.ray).recast(e.near),!($u.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere($u,Mv)===null||Hr.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(Sv.copy(f).invert(),Hr.copy(e.ray).applyMatrix4(Sv),!(s.boundingBox!==null&&Hr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Hr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,p=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=h[S.materialIndex],L=Math.max(S.start,M.start),z=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,X=z;D<X;D+=3){const G=d.getX(D),O=d.getX(D+1),P=d.getX(D+2);u=rc(this,x,e,s,p,v,m,G,O,P),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const L=d.getX(S),z=d.getX(S+1),D=d.getX(S+2);u=rc(this,h,e,s,p,v,m,L,z,D),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=h[S.materialIndex],L=Math.max(S.start,M.start),z=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let D=L,X=z;D<X;D+=3){const G=D,O=D+1,P=D+2;u=rc(this,x,e,s,p,v,m,G,O,P),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),w=Math.min(g.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const L=S,z=S+1,D=S+2;u=rc(this,h,e,s,p,v,m,L,z,D),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}}}function KE(o,e,a,s,u,f,h,d){let g;if(e.side===Qn?g=s.intersectTriangle(h,f,u,!0,d):g=s.intersectTriangle(u,f,h,e.side===fr,d),g===null)return null;ac.copy(d),ac.applyMatrix4(o.matrixWorld);const p=a.ray.origin.distanceTo(ac);return p<a.near||p>a.far?null:{distance:p,point:ac.clone(),object:o}}function rc(o,e,a,s,u,f,h,d,g,p){o.getVertexPosition(d,tc),o.getVertexPosition(g,ec),o.getVertexPosition(p,nc);const v=KE(o,e,a,s,tc,ec,nc,Ev);if(v){const m=new ft;Li.getBarycoord(Ev,tc,ec,nc,m),u&&(v.uv=Li.getInterpolatedAttribute(u,d,g,p,m,new Pe)),f&&(v.uv1=Li.getInterpolatedAttribute(f,d,g,p,m,new Pe)),h&&(v.normal=Li.getInterpolatedAttribute(h,d,g,p,m,new ft),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:g,c:p,normal:new ft,materialIndex:0};Li.getNormal(tc,ec,nc,y.normal),v.face=y,v.barycoord=m}return v}class _l extends dr{constructor(e=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],p=[],v=[],m=[];let y=0,M=0;b("z","y","x",-1,-1,s,a,e,h,f,0),b("z","y","x",1,-1,s,a,-e,h,f,1),b("x","z","y",1,1,e,s,a,u,h,2),b("x","z","y",1,-1,e,s,-a,u,h,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new Ki(p,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(m,2));function b(w,S,x,L,z,D,X,G,O,P,C){const R=D/O,B=X/P,J=D/2,rt=X/2,ut=G/2,nt=O+1,F=P+1;let K=0,j=0;const vt=new ft;for(let yt=0;yt<F;yt++){const Bt=yt*B-rt;for(let Zt=0;Zt<nt;Zt++){const oe=Zt*R-J;vt[w]=oe*L,vt[S]=Bt*z,vt[x]=ut,p.push(vt.x,vt.y,vt.z),vt[w]=0,vt[S]=0,vt[x]=G>0?1:-1,v.push(vt.x,vt.y,vt.z),m.push(Zt/O),m.push(1-yt/P),K+=1}}for(let yt=0;yt<P;yt++)for(let Bt=0;Bt<O;Bt++){const Zt=y+Bt+nt*yt,oe=y+Bt+nt*(yt+1),H=y+(Bt+1)+nt*(yt+1),dt=y+(Bt+1)+nt*yt;g.push(Zt,oe,dt),g.push(oe,H,dt),j+=6}d.addGroup(M,j,C),M+=j,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Vn(o){const e={};for(let a=0;a<o.length;a++){const s=io(o[a]);for(const u in s)e[u]=s[u]}return e}function QE(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function Mx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const JE={clone:io,merge:Vn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Ex extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new ft,Tv=new Pe,bv=new Pe;class Ni extends Ex{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,a){return this.getViewBounds(e,Tv,bv),a.subVectors(bv,Tv)}setViewOffset(e,a,s,u,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(id*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/g,a-=h.offsetY*s/p,u*=h.width/g,s*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ws=-90,Zs=1;class eT extends Pn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ni(Ws,Zs,e,a);u.layers=this.layers,this.add(u);const f=new Ni(Ws,Zs,e,a);f.layers=this.layers,this.add(f);const h=new Ni(Ws,Zs,e,a);h.layers=this.layers,this.add(h);const d=new Ni(Ws,Zs,e,a);d.layers=this.layers,this.add(d);const g=new Ni(Ws,Zs,e,a);g.layers=this.layers,this.add(g);const p=new Ni(Ws,Zs,e,a);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,g]=a;for(const p of a)this.remove(p);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===_c)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of a)this.add(p),p.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,p,v]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,h),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,g),e.setRenderTarget(s,4,u),e.render(a,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(m,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Tx extends Xn{constructor(e=[],a=eo,s,u,f,h,d,g,p,v){super(e,a,s,u,f,h,d,g,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nT extends Kr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Tx(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new _l(5,5,5),f=new hr({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ur});f.uniforms.tEquirect.value=a;const h=new Wi(u,f),d=a.minFilter;return a.minFilter===lr&&(a.minFilter=wn),new eT(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,s,u);e.setRenderTarget(f)}}class sc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const S=a.getJointPose(w,s),x=this._getHandJoint(p,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],y=v.position.distanceTo(m.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new sc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}class aT extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class bx extends Xn{constructor(e=null,a=1,s=1,u,f,h,d,g,p=ui,v=ui,m,y){super(null,h,d,g,p,v,u,f,m,y),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new ft,rT=new ft,sT=new pe;class kr{constructor(e=new ft(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Ad.subVectors(s,a).cross(rT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Ad),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||sT.getNormalMatrix(e),u=this.coplanarPoint(Ad).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Lp,oT=new Pe(.5,.5),oc=new ft;class Op{constructor(e=new kr,a=new kr,s=new kr,u=new kr,f=new kr,h=new kr){this.planes=[e,a,s,u,f,h]}set(e,a,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=Yi,s=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],p=f[3],v=f[4],m=f[5],y=f[6],M=f[7],b=f[8],w=f[9],S=f[10],x=f[11],L=f[12],z=f[13],D=f[14],X=f[15];if(u[0].setComponents(p-h,M-v,x-b,X-L).normalize(),u[1].setComponents(p+h,M+v,x+b,X+L).normalize(),u[2].setComponents(p+d,M+m,x+w,X+z).normalize(),u[3].setComponents(p-d,M-m,x-w,X-z).normalize(),s)u[4].setComponents(g,y,S,D).normalize(),u[5].setComponents(p-g,M-y,x-S,X-D).normalize();else if(u[4].setComponents(p-g,M-y,x-S,X-D).normalize(),a===Yi)u[5].setComponents(p+g,M+y,x+S,X+D).normalize();else if(a===_c)u[5].setComponents(g,y,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Gr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const a=oT.distanceTo(e.center);return Gr.radius=.7071067811865476+a,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(oc.x=u.normal.x>0?e.max.x:e.min.x,oc.y=u.normal.y>0?e.max.y:e.min.y,oc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ax extends Xn{constructor(e,a,s=Wr,u,f,h,d=ui,g=ui,p,v=cl,m=1){if(v!==cl&&v!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:a,depth:m};super(y,u,f,h,d,g,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Rx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yc extends dr{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,h=a/2,d=Math.floor(s),g=Math.floor(u),p=d+1,v=g+1,m=e/d,y=a/g,M=[],b=[],w=[],S=[];for(let x=0;x<v;x++){const L=x*y-h;for(let z=0;z<p;z++){const D=z*m-f;b.push(D,-L,0),w.push(0,0,1),S.push(z/d),S.push(1-x/g)}}for(let x=0;x<g;x++)for(let L=0;L<d;L++){const z=L+p*x,D=L+p*(x+1),X=L+1+p*(x+1),G=L+1+p*x;M.push(z,D,G),M.push(D,X,G)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(w,3)),this.setAttribute("uv",new Ki(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class zp extends dr{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const g=Math.min(h+d,Math.PI);let p=0;const v=[],m=new ft,y=new ft,M=[],b=[],w=[],S=[];for(let x=0;x<=s;x++){const L=[],z=x/s;let D=0;x===0&&h===0?D=.5/a:x===s&&g===Math.PI&&(D=-.5/a);for(let X=0;X<=a;X++){const G=X/a;m.x=-e*Math.cos(u+G*f)*Math.sin(h+z*d),m.y=e*Math.cos(h+z*d),m.z=e*Math.sin(u+G*f)*Math.sin(h+z*d),b.push(m.x,m.y,m.z),y.copy(m).normalize(),w.push(y.x,y.y,y.z),S.push(G+D,1-z),L.push(p++)}v.push(L)}for(let x=0;x<s;x++)for(let L=0;L<a;L++){const z=v[x][L+1],D=v[x][L],X=v[x+1][L],G=v[x+1][L+1];(x!==0||h>0)&&M.push(z,D,G),(x!==s-1||g<Math.PI)&&M.push(D,X,G)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(w,3)),this.setAttribute("uv",new Ki(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lT extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dx,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uT extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cT extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Av={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class fT{constructor(e,a,s){const u=this;let f=!1,h=0,d=0,g;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=s,this.abortController=new AbortController,this.itemStart=function(v){d++,f===!1&&u.onStart!==void 0&&u.onStart(v,h,d),f=!0},this.itemEnd=function(v){h++,u.onProgress!==void 0&&u.onProgress(v,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(v){u.onError!==void 0&&u.onError(v)},this.resolveURL=function(v){return g?g(v):v},this.setURLModifier=function(v){return g=v,this},this.addHandler=function(v,m){return p.push(v,m),this},this.removeHandler=function(v){const m=p.indexOf(v);return m!==-1&&p.splice(m,2),this},this.getHandler=function(v){for(let m=0,y=p.length;m<y;m+=2){const M=p[m],b=p[m+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hT=new fT;class Pp{constructor(e){this.manager=e!==void 0?e:hT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,a){const s=this;return new Promise(function(u,f){s.load(e,u,a,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pp.DEFAULT_MATERIAL_NAME="__DEFAULT";const ya={};class dT extends Error{constructor(e,a){super(e),this.response=a}}class pT extends Pp{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,a,s,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=Av.get(`file:${e}`);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{a&&a(f),this.manager.itemEnd(e)},0),f;if(ya[e]!==void 0){ya[e].push({onLoad:a,onProgress:s,onError:u});return}ya[e]=[],ya[e].push({onLoad:a,onProgress:s,onError:u});const h=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,g=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=ya[e],m=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=y?parseInt(y):0,b=M!==0;let w=0;const S=new ReadableStream({start(x){L();function L(){m.read().then(({done:z,value:D})=>{if(z)x.close();else{w+=D.byteLength;const X=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:M});for(let G=0,O=v.length;G<O;G++){const P=v[G];P.onProgress&&P.onProgress(X)}x.enqueue(D),L()}},z=>{x.error(z)})}}});return new Response(S)}else throw new dT(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(g){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(d),y=m&&m[1]?m[1].toLowerCase():void 0,M=new TextDecoder(y);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{Av.add(`file:${e}`,p);const v=ya[e];delete ya[e];for(let m=0,y=v.length;m<y;m++){const M=v[m];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=ya[e];if(v===void 0)throw this.manager.itemError(e),p;delete ya[e];for(let m=0,y=v.length;m<y;m++){const M=v[m];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class mT extends Pp{constructor(e){super(e)}load(e,a,s,u){const f=this,h=new bx,d=new pT(this.manager);return d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setPath(this.path),d.setWithCredentials(f.withCredentials),d.load(e,function(g){let p;try{p=f.parse(g)}catch(v){if(u!==void 0)u(v);else{console.error(v);return}}p.image!==void 0?h.image=p.image:p.data!==void 0&&(h.image.width=p.width,h.image.height=p.height,h.image.data=p.data),h.wrapS=p.wrapS!==void 0?p.wrapS:Ta,h.wrapT=p.wrapT!==void 0?p.wrapT:Ta,h.magFilter=p.magFilter!==void 0?p.magFilter:wn,h.minFilter=p.minFilter!==void 0?p.minFilter:wn,h.anisotropy=p.anisotropy!==void 0?p.anisotropy:1,p.colorSpace!==void 0&&(h.colorSpace=p.colorSpace),p.flipY!==void 0&&(h.flipY=p.flipY),p.format!==void 0&&(h.format=p.format),p.type!==void 0&&(h.type=p.type),p.mipmaps!==void 0&&(h.mipmaps=p.mipmaps,h.minFilter=lr),p.mipmapCount===1&&(h.minFilter=wn),p.generateMipmaps!==void 0&&(h.generateMipmaps=p.generateMipmaps),h.needsUpdate=!0,a&&a(h,p)},s,u),h}}class gT extends Pn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const Rd=new on,Rv=new ft,Cv=new ft;class _T{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Rv.setFromMatrixPosition(e.matrixWorld),a.position.copy(Rv),Cv.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(Cv),a.updateMatrixWorld(),Rd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ip extends Ex{constructor(e=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+a,g=u-a;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=v*this.view.offsetY,g=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class vT extends _T{constructor(){super(new Ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xT extends gT{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new vT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yT extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function wv(o,e,a,s){const u=ST(s);switch(a){case ux:return o*e;case fx:return o*e/u.components*u.byteLength;case wp:return o*e/u.components*u.byteLength;case hx:return o*e*2/u.components*u.byteLength;case Dp:return o*e*2/u.components*u.byteLength;case cx:return o*e*3/u.components*u.byteLength;case Mi:return o*e*4/u.components*u.byteLength;case Up:return o*e*4/u.components*u.byteLength;case fc:case hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dc:case pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Kd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(o,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case pp:case mp:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _p:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xp:case yp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function ST(o){switch(o){case Qi:case rx:return{byteLength:1,components:1};case ll:case sx:case ba:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Wr:case Ap:case Kn:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);function Cx(){let o=null,e=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function MT(o){const e=new WeakMap;function a(d,g){const p=d.array,v=d.usage,m=p.byteLength,y=o.createBuffer();o.bindBuffer(g,y),o.bufferData(g,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,g,p){const v=g.array,m=g.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,v);else{m.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<m.length;M++){const b=m[y],w=m[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,m[y]=w)}m.length=y+1;for(let M=0,b=m.length;M<b;M++){const w=m[M];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,a(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,g),p.version=d.version}}return{get:u,remove:f,update:h}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TT=`#ifdef USE_ALPHAHASH
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
#endif`,bT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
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
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PT=`#ifdef USE_IRIDESCENCE
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
#endif`,IT=`#ifdef USE_BUMPMAP
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jT=`#define PI 3.141592653589793
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WT=`vec3 transformedNormal = objectNormal;
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
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
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
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
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
#endif`,S1=`struct PhysicalMaterial {
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
}`,M1=`
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
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
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ob=`float getShadowMask() {
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
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,wb=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Ub=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Bb=`#define LAMBERT
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
}`,Fb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Gb=`#define MATCAP
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
}`,Vb=`#define NORMAL
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
}`,Xb=`#define NORMAL
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
}`,kb=`#define PHONG
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
}`,qb=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,Wb=`#define TOON
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
}`,Zb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,tA=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:ET,alphahash_pars_fragment:TT,alphamap_fragment:bT,alphamap_pars_fragment:AT,alphatest_fragment:RT,alphatest_pars_fragment:CT,aomap_fragment:wT,aomap_pars_fragment:DT,batching_pars_vertex:UT,batching_vertex:NT,begin_vertex:LT,beginnormal_vertex:OT,bsdfs:zT,iridescence_fragment:PT,bumpmap_pars_fragment:IT,clipping_planes_fragment:BT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:VT,color_pars_fragment:XT,color_pars_vertex:kT,color_vertex:qT,common:jT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:WT,displacementmap_pars_vertex:ZT,displacementmap_vertex:KT,emissivemap_fragment:QT,emissivemap_pars_fragment:JT,colorspace_fragment:$T,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:l1,fog_pars_fragment:u1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:f1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:d1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:_1,lights_phong_fragment:v1,lights_phong_pars_fragment:x1,lights_physical_fragment:y1,lights_physical_pars_fragment:S1,lights_fragment_begin:M1,lights_fragment_maps:E1,lights_fragment_end:T1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:C1,map_fragment:w1,map_pars_fragment:D1,map_particle_fragment:U1,map_particle_pars_fragment:N1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:O1,morphinstance_vertex:z1,morphcolor_vertex:P1,morphnormal_vertex:I1,morphtarget_pars_vertex:B1,morphtarget_vertex:F1,normal_fragment_begin:H1,normal_fragment_maps:G1,normal_pars_fragment:V1,normal_pars_vertex:X1,normal_vertex:k1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:Z1,opaque_fragment:K1,packing:Q1,premultiplied_alpha_fragment:J1,project_vertex:$1,dithering_fragment:tb,dithering_pars_fragment:eb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:rb,shadowmap_vertex:sb,shadowmask_pars_fragment:ob,skinbase_vertex:lb,skinning_pars_vertex:ub,skinning_vertex:cb,skinnormal_vertex:fb,specularmap_fragment:hb,specularmap_pars_fragment:db,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:_b,uv_pars_fragment:vb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:Sb,background_vert:Mb,background_frag:Eb,backgroundCube_vert:Tb,backgroundCube_frag:bb,cube_vert:Ab,cube_frag:Rb,depth_vert:Cb,depth_frag:wb,distanceRGBA_vert:Db,distanceRGBA_frag:Ub,equirect_vert:Nb,equirect_frag:Lb,linedashed_vert:Ob,linedashed_frag:zb,meshbasic_vert:Pb,meshbasic_frag:Ib,meshlambert_vert:Bb,meshlambert_frag:Fb,meshmatcap_vert:Hb,meshmatcap_frag:Gb,meshnormal_vert:Vb,meshnormal_frag:Xb,meshphong_vert:kb,meshphong_frag:qb,meshphysical_vert:jb,meshphysical_frag:Yb,meshtoon_vert:Wb,meshtoon_frag:Zb,points_vert:Kb,points_frag:Qb,shadow_vert:Jb,shadow_frag:$b,sprite_vert:tA,sprite_frag:eA},It={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ji={basic:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ze(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Vn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Vn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ze(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Vn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Vn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Vn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Vn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Vn([It.common,It.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Vn([It.lights,It.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ji.physical={uniforms:Vn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const lc={r:0,b:0,g:0},Vr=new Ji,nA=new on;function iA(o,e,a,s,u,f,h){const d=new ze(0);let g=f===!0?0:1,p,v,m=null,y=0,M=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?a:e).get(D)),D}function w(z){let D=!1;const X=b(z);X===null?x(d,g):X&&X.isColor&&(x(X,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,D){const X=b(D);X&&(X.isCubeTexture||X.mapping===xc)?(v===void 0&&(v=new Wi(new _l(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:io(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,O,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Vr.copy(D.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(nA.makeRotationFromEuler(Vr)),v.material.toneMapped=Ue.getTransfer(X.colorSpace)!==ke,(m!==X||y!==X.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=X,y=X.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Wi(new yc(2,2),new hr({name:"BackgroundMaterial",uniforms:io(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(X.colorSpace)!==ke,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(m!==X||y!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,m=X,y=X.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function x(z,D){z.getRGB(lc,Mx(o)),s.buffers.color.setClear(lc.r,lc.g,lc.b,D,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),g=D,x(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(z){g=z,x(d,g)},render:w,addToRenderList:S,dispose:L}}function aA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=y(null);let f=u,h=!1;function d(R,B,J,rt,ut){let nt=!1;const F=m(rt,J,B);f!==F&&(f=F,p(f.object)),nt=M(R,rt,J,ut),nt&&b(R,rt,J,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(nt||h)&&(h=!1,D(R,B,J,rt),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function g(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function m(R,B,J){const rt=J.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let nt=ut[B.id];nt===void 0&&(nt={},ut[B.id]=nt);let F=nt[rt];return F===void 0&&(F=y(g()),nt[rt]=F),F}function y(R){const B=[],J=[],rt=[];for(let ut=0;ut<a;ut++)B[ut]=0,J[ut]=0,rt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:rt,object:R,attributes:{},index:null}}function M(R,B,J,rt){const ut=f.attributes,nt=B.attributes;let F=0;const K=J.getAttributes();for(const j in K)if(K[j].location>=0){const yt=ut[j];let Bt=nt[j];if(Bt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Bt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Bt=R.instanceColor)),yt===void 0||yt.attribute!==Bt||Bt&&yt.data!==Bt.data)return!0;F++}return f.attributesNum!==F||f.index!==rt}function b(R,B,J,rt){const ut={},nt=B.attributes;let F=0;const K=J.getAttributes();for(const j in K)if(K[j].location>=0){let yt=nt[j];yt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor));const Bt={};Bt.attribute=yt,yt&&yt.data&&(Bt.data=yt.data),ut[j]=Bt,F++}f.attributes=ut,f.attributesNum=F,f.index=rt}function w(){const R=f.newAttributes;for(let B=0,J=R.length;B<J;B++)R[B]=0}function S(R){x(R,0)}function x(R,B){const J=f.newAttributes,rt=f.enabledAttributes,ut=f.attributeDivisors;J[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),ut[R]!==B&&(o.vertexAttribDivisor(R,B),ut[R]=B)}function L(){const R=f.newAttributes,B=f.enabledAttributes;for(let J=0,rt=B.length;J<rt;J++)B[J]!==R[J]&&(o.disableVertexAttribArray(J),B[J]=0)}function z(R,B,J,rt,ut,nt,F){F===!0?o.vertexAttribIPointer(R,B,J,ut,nt):o.vertexAttribPointer(R,B,J,rt,ut,nt)}function D(R,B,J,rt){w();const ut=rt.attributes,nt=J.getAttributes(),F=B.defaultAttributeValues;for(const K in nt){const j=nt[K];if(j.location>=0){let vt=ut[K];if(vt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),vt!==void 0){const yt=vt.normalized,Bt=vt.itemSize,Zt=e.get(vt);if(Zt===void 0)continue;const oe=Zt.buffer,H=Zt.type,dt=Zt.bytesPerElement,et=H===o.INT||H===o.UNSIGNED_INT||vt.gpuType===Ap;if(vt.isInterleavedBufferAttribute){const ot=vt.data,Mt=ot.stride,Dt=vt.offset;if(ot.isInstancedInterleavedBuffer){for(let tt=0;tt<j.locationSize;tt++)x(j.location+tt,ot.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let tt=0;tt<j.locationSize;tt++)S(j.location+tt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let tt=0;tt<j.locationSize;tt++)z(j.location+tt,Bt/j.locationSize,H,yt,Mt*dt,(Dt+Bt/j.locationSize*tt)*dt,et)}else{if(vt.isInstancedBufferAttribute){for(let ot=0;ot<j.locationSize;ot++)x(j.location+ot,vt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ot=0;ot<j.locationSize;ot++)S(j.location+ot);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let ot=0;ot<j.locationSize;ot++)z(j.location+ot,Bt/j.locationSize,H,yt,Bt*dt,Bt/j.locationSize*ot*dt,et)}}else if(F!==void 0){const yt=F[K];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(j.location,yt);break;case 3:o.vertexAttrib3fv(j.location,yt);break;case 4:o.vertexAttrib4fv(j.location,yt);break;default:o.vertexAttrib1fv(j.location,yt)}}}}L()}function X(){P();for(const R in s){const B=s[R];for(const J in B){const rt=B[J];for(const ut in rt)v(rt[ut].object),delete rt[ut];delete B[J]}delete s[R]}}function G(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const J in B){const rt=B[J];for(const ut in rt)v(rt[ut].object),delete rt[ut];delete B[J]}delete s[R.id]}function O(R){for(const B in s){const J=s[B];if(J[R.id]===void 0)continue;const rt=J[R.id];for(const ut in rt)v(rt[ut].object),delete rt[ut];delete J[R.id]}}function P(){C(),h=!0,f!==u&&(f=u,p(f.object))}function C(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:P,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:L}}function rA(o,e,a){let s;function u(p){s=p}function f(p,v){o.drawArrays(s,p,v),a.update(v,s,1)}function h(p,v,m){m!==0&&(o.drawArraysInstanced(s,p,v,m),a.update(v,s,m))}function d(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,m);let M=0;for(let b=0;b<m;b++)M+=v[b];a.update(M,s,1)}function g(p,v,m,y){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,m);let b=0;for(let w=0;w<m;w++)b+=v[w]*y[w];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function sA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==Mi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const P=O===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Qi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Kn&&!P)}function g(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=a.precision!==void 0?a.precision:"highp";const v=g(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const m=a.logarithmicDepthBuffer===!0,y=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:X,maxSamples:G}}function oA(o){const e=this;let a=null,s=0,u=!1,f=!1;const h=new kr,d=new pe,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||s!==0||u;return u=y,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){a=v(m,y,0)},this.setState=function(m,y,M){const b=m.clippingPlanes,w=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!u||b===null||b.length===0||f&&!S)f?v(null):p();else{const L=f?0:s,z=L*4;let D=x.clippingState||null;g.value=D,D=v(b,y,z,M);for(let X=0;X!==z;++X)D[X]=a[X];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){g.value!==a&&(g.value=a,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,y,M,b){const w=m!==null?m.length:0;let S=null;if(w!==0){if(S=g.value,b!==!0||S===null){const x=M+w*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let z=0,D=M;z!==w;++z,D+=4)h.copy(m[z]).applyMatrix4(L,d),h.normal.toArray(S,D),S[D+3]=h.constant}g.value=S,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function lA(o){let e=new WeakMap;function a(h,d){return d===ol?h.mapping=eo:d===kd&&(h.mapping=no),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ol||d===kd)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new nT(g.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",u),a(p.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const Qs=4,Dv=[.125,.215,.35,.446,.526,.582],Yr=20,Cd=new Ip,Uv=new ze;let wd=null,Dd=0,Ud=0,Nd=!1;const qr=(1+Math.sqrt(5))/2,Ks=1/qr,Nv=[new ft(-qr,Ks,0),new ft(qr,Ks,0),new ft(-Ks,0,qr),new ft(Ks,0,qr),new ft(0,qr,-Ks),new ft(0,qr,Ks),new ft(-1,1,-1),new ft(1,1,-1),new ft(-1,1,1),new ft(1,1,1)],uA=new ft;class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=uA}=f;wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,u,g,d),a>0&&this._blur(g,0,0,a),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Dd,Ud),this._renderer.xr.enabled=Nd,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===eo||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ba,format:Mi,colorSpace:Zr,depthBuffer:!1},u=Lv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cA(f)),this._blurMaterial=fA(f,e,a)}return u}_compileMaterial(e){const a=new Wi(this._lodPlanes[0],e);this._renderer.compile(a,Cd)}_sceneToCubeUV(e,a,s,u,f){const g=new Ni(90,1,a,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,M=m.toneMapping;m.getClearColor(Uv),m.toneMapping=cr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const w=new xx({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),S=new Wi(new _l,w);let x=!1;const L=e.background;L?L.isColor&&(w.color.copy(L),e.background=null,x=!0):(w.color.copy(Uv),x=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(g.up.set(0,p[z],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+v[z],f.y,f.z)):D===1?(g.up.set(0,0,p[z]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+v[z],f.z)):(g.up.set(0,p[z],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+v[z]));const X=this._cubeSize;uc(u,D*X,z>2?X:0,X,X),m.setRenderTarget(u),x&&m.render(S,g),m.render(e,g)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=M,m.autoClear=y,e.background=L}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===eo||e.mapping===no;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Wi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;uc(a,0,0,3*g,2*g),s.setRenderTarget(a),s.render(h,Cd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Nv[(u-f-1)%Nv.length];this._blur(e,f-1,f,h,d)}a.autoClear=s}_blur(e,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Wi(this._lodPlanes[u],p),y=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),w=f/b,S=isFinite(f)?1+Math.floor(v*w):Yr;S>Yr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Yr}`);const x=[];let L=0;for(let O=0;O<Yr;++O){const P=O/w,C=Math.exp(-P*P/2);x.push(C),O===0?L+=C:O<S&&(L+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:z}=this;y.dTheta.value=b,y.mipInt.value=z-s;const D=this._sizeLods[u],X=3*D*(u>z-Qs?u-z+Qs:0),G=4*(this._cubeSize-D);uc(a,X,G,3*D,2*D),g.setRenderTarget(a),g.render(m,Cd)}}function cA(o){const e=[],a=[],s=[];let u=o;const f=o-Qs+1+Dv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let g=1/d;h>o-Qs?g=Dv[h-o+Qs-1]:h===0&&(g=0),s.push(g);const p=1/(d-2),v=-p,m=1+p,y=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,b=6,w=3,S=2,x=1,L=new Float32Array(w*b*M),z=new Float32Array(S*b*M),D=new Float32Array(x*b*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,P=G>2?0:-1,C=[O,P,0,O+2/3,P,0,O+2/3,P+1,0,O,P,0,O+2/3,P+1,0,O,P+1,0];L.set(C,w*b*G),z.set(y,S*b*G);const R=[G,G,G,G,G,G];D.set(R,x*b*G)}const X=new dr;X.setAttribute("position",new Zi(L,w)),X.setAttribute("uv",new Zi(z,S)),X.setAttribute("faceIndex",new Zi(D,x)),e.push(X),u>Qs&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function Lv(o,e,a){const s=new Kr(o,e,a);return s.texture.mapping=xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function uc(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function fA(o,e,a){const s=new Float32Array(Yr),u=new ft(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ov(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function zv(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function hA(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const g=d.mapping,p=g===ol||g===kd,v=g===eo||g===no;if(p||v){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return a===null&&(a=new Mp(o)),m=p?a.fromEquirectangular(d,m):a.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new Mp(o)),m=p?a.fromEquirectangular(d):a.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let g=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&g++;return g===p}function f(d){const g=d.target;g.removeEventListener("dispose",f);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function dA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&hl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function pA(o,e,a,s){const u={},f=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function d(m,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,a.memory.geometries++),y}function g(m){const y=m.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(m){const y=[],M=m.index,b=m.attributes.position;let w=0;if(M!==null){const L=M.array;w=M.version;for(let z=0,D=L.length;z<D;z+=3){const X=L[z+0],G=L[z+1],O=L[z+2];y.push(X,G,G,O,O,X)}}else if(b!==void 0){const L=b.array;w=b.version;for(let z=0,D=L.length/3-1;z<D;z+=3){const X=z+0,G=z+1,O=z+2;y.push(X,G,G,O,O,X)}}else return;const S=new(mx(y)?Sx:yx)(y,1);S.version=w;const x=f.get(m);x&&e.remove(x),f.set(m,S)}function v(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&p(m)}else p(m);return f.get(m)}return{get:d,update:g,getWireframeAttribute:v}}function mA(o,e,a){let s;function u(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function g(y,M){o.drawElements(s,M,f,y*h),a.update(M,s,1)}function p(y,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,y*h,b),a.update(M,s,b))}function v(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,b);let S=0;for(let x=0;x<b;x++)S+=M[x];a.update(S,s,1)}function m(y,M,b,w){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)p(y[x]/h,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,w,0,b);let x=0;for(let L=0;L<b;L++)x+=M[L]*w[L];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function gA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function _A(o,e,a){const s=new WeakMap,u=new rn;function f(h,d,g){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let R=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),S===!0&&(D=3);let X=d.attributes.position.count*D,G=1;X>e.maxTextureSize&&(G=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*G*4*m),P=new gx(O,X,G,m);P.type=Kn,P.needsUpdate=!0;const C=D*4;for(let B=0;B<m;B++){const J=x[B],rt=L[B],ut=z[B],nt=X*G*4*B;for(let F=0;F<J.count;F++){const K=F*C;b===!0&&(u.fromBufferAttribute(J,F),O[nt+K+0]=u.x,O[nt+K+1]=u.y,O[nt+K+2]=u.z,O[nt+K+3]=0),w===!0&&(u.fromBufferAttribute(rt,F),O[nt+K+4]=u.x,O[nt+K+5]=u.y,O[nt+K+6]=u.z,O[nt+K+7]=0),S===!0&&(u.fromBufferAttribute(ut,F),O[nt+K+8]=u.x,O[nt+K+9]=u.y,O[nt+K+10]=u.z,O[nt+K+11]=ut.itemSize===4?u.w:1)}}y={count:m,texture:P,size:new Pe(X,G)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const w=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function vA(o,e,a,s){let u=new WeakMap;function f(g){const p=s.render.frame,v=g.geometry,m=e.get(g,v);if(u.get(m)!==p&&(e.update(m),u.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==p&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,p))),g.isSkinnedMesh){const y=g.skeleton;u.get(y)!==p&&(y.update(),u.set(y,p))}return m}function h(){u=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),a.remove(p.instanceMatrix),p.instanceColor!==null&&a.remove(p.instanceColor)}return{update:f,dispose:h}}const wx=new Xn,Pv=new Ax(1,1),Dx=new gx,Ux=new zE,Nx=new Tx,Iv=[],Bv=[],Fv=new Float32Array(16),Hv=new Float32Array(9),Gv=new Float32Array(4);function ro(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=Iv[u];if(f===void 0&&(f=new Float32Array(u),Iv[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function _n(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function vn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Sc(o,e){let a=Bv[e];a===void 0&&(a=new Int32Array(e),Bv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function xA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function yA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2fv(this.addr,e),vn(a,e)}}function SA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(_n(a,e))return;o.uniform3fv(this.addr,e),vn(a,e)}}function MA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4fv(this.addr,e),vn(a,e)}}function EA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Gv.set(s),o.uniformMatrix2fv(this.addr,!1,Gv),vn(a,s)}}function TA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Hv.set(s),o.uniformMatrix3fv(this.addr,!1,Hv),vn(a,s)}}function bA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Fv.set(s),o.uniformMatrix4fv(this.addr,!1,Fv),vn(a,s)}}function AA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function RA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2iv(this.addr,e),vn(a,e)}}function CA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3iv(this.addr,e),vn(a,e)}}function wA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4iv(this.addr,e),vn(a,e)}}function DA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function UA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2uiv(this.addr,e),vn(a,e)}}function NA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3uiv(this.addr,e),vn(a,e)}}function LA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4uiv(this.addr,e),vn(a,e)}}function OA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Pv.compareFunction=px,f=Pv):f=wx,a.setTexture2D(e||f,u)}function zA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Ux,u)}function PA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||Nx,u)}function IA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||Dx,u)}function BA(o){switch(o){case 5126:return xA;case 35664:return yA;case 35665:return SA;case 35666:return MA;case 35674:return EA;case 35675:return TA;case 35676:return bA;case 5124:case 35670:return AA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return wA;case 5125:return DA;case 36294:return UA;case 36295:return NA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return IA}}function FA(o,e){o.uniform1fv(this.addr,e)}function HA(o,e){const a=ro(e,this.size,2);o.uniform2fv(this.addr,a)}function GA(o,e){const a=ro(e,this.size,3);o.uniform3fv(this.addr,a)}function VA(o,e){const a=ro(e,this.size,4);o.uniform4fv(this.addr,a)}function XA(o,e){const a=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function kA(o,e){const a=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function qA(o,e){const a=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function jA(o,e){o.uniform1iv(this.addr,e)}function YA(o,e){o.uniform2iv(this.addr,e)}function WA(o,e){o.uniform3iv(this.addr,e)}function ZA(o,e){o.uniform4iv(this.addr,e)}function KA(o,e){o.uniform1uiv(this.addr,e)}function QA(o,e){o.uniform2uiv(this.addr,e)}function JA(o,e){o.uniform3uiv(this.addr,e)}function $A(o,e){o.uniform4uiv(this.addr,e)}function tR(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(e[h]||wx,f[h])}function eR(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(e[h]||Ux,f[h])}function nR(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(e[h]||Nx,f[h])}function iR(o,e,a){const s=this.cache,u=e.length,f=Sc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(e[h]||Dx,f[h])}function aR(o){switch(o){case 5126:return FA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return kA;case 35676:return qA;case 5124:case 35670:return jA;case 35667:case 35671:return YA;case 35668:case 35672:return WA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class rR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=BA(a.type)}}class sR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=aR(a.type)}}class oR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,a[d.id],s)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function Vv(o,e){o.seq.push(e),o.map[e.id]=e}function lR(o,e,a){const s=o.name,u=s.length;for(Ld.lastIndex=0;;){const f=Ld.exec(s),h=Ld.lastIndex;let d=f[1];const g=f[2]==="]",p=f[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===u){Vv(a,p===void 0?new rR(d,o,e):new sR(d,o,e));break}else{let m=a.map[d];m===void 0&&(m=new oR(d),Vv(a,m)),a=m}}}class mc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),h=e.getUniformLocation(a,f.name);lR(f,h,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in a&&s.push(h)}return s}}function Xv(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const uR=37297;let cR=0;function fR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const kv=new pe;function hR(o){Ue._getMatrix(kv,Ue.workingColorSpace,o);const e=`mat3( ${kv.elements.map(a=>a.toFixed(4))} )`;switch(Ue.getTransfer(o)){case gc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function qv(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+fR(o.getShaderSource(e),d)}else return f}function dR(o,e){const a=hR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function pR(o,e){let a;switch(e){case cE:a="Linear";break;case fE:a="Reinhard";break;case hE:a="Cineon";break;case ix:a="ACESFilmic";break;case pE:a="AgX";break;case mE:a="Neutral";break;case dE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const cc=new ft;function mR(){Ue.getLuminanceCoefficients(cc);const o=cc.x.toFixed(4),e=cc.y.toFixed(4),a=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function _R(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function vR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function al(o){return o!==""}function jv(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(o){return o.replace(xR,SR)}const yR=new Map;function SR(o,e){let a=me[e];if(a===void 0){const s=yR.get(e);if(s!==void 0)a=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ep(a)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(o){return o.replace(MR,ER)}function ER(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Zv(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function TR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ex?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===XM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(e="SHADOWMAP_TYPE_VSM"),e}function bR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===no&&(e="ENVMAP_MODE_REFRACTION"),e}function RR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case nx:e="ENVMAP_BLENDING_MULTIPLY";break;case lE:e="ENVMAP_BLENDING_MIX";break;case uE:e="ENVMAP_BLENDING_ADD";break}return e}function CR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function wR(o,e,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const g=TR(a),p=bR(a),v=AR(a),m=RR(a),y=CR(a),M=gR(a),b=_R(f),w=u.createProgram();let S,x,L=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),x.length>0&&(x+=`
`)):(S=[Zv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[Zv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.envMap?"#define "+v:"",a.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==cr?"#define TONE_MAPPING":"",a.toneMapping!==cr?me.tonemapping_pars_fragment:"",a.toneMapping!==cr?pR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,dR("linearToOutputTexel",a.outputColorSpace),mR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(al).join(`
`)),h=Ep(h),h=jv(h,a),h=Yv(h,a),d=Ep(d),d=jv(d,a),d=Yv(d,a),h=Wv(h),d=Wv(d),a.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=L+S+h,D=L+x+d,X=Xv(u,u.VERTEX_SHADER,z),G=Xv(u,u.FRAGMENT_SHADER,D);u.attachShader(w,X),u.attachShader(w,G),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function O(B){if(o.debug.checkShaderErrors){const J=u.getProgramInfoLog(w)||"",rt=u.getShaderInfoLog(X)||"",ut=u.getShaderInfoLog(G)||"",nt=J.trim(),F=rt.trim(),K=ut.trim();let j=!0,vt=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,X,G);else{const yt=qv(u,X,"vertex"),Bt=qv(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+nt+`
`+yt+`
`+Bt)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(F===""||K==="")&&(vt=!1);vt&&(B.diagnostics={runnable:j,programLog:nt,vertexShader:{log:F,prefix:S},fragmentShader:{log:K,prefix:x}})}u.deleteShader(X),u.deleteShader(G),P=new mc(u,w),C=vR(u,w)}let P;this.getUniforms=function(){return P===void 0&&O(this),P};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(w,uR)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=cR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=G,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new NR(e),a.set(e,s)),s}}class NR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function LR(o,e,a,s,u,f,h){const d=new _x,g=new UR,p=new Set,v=[],m=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,B,J,rt){const ut=J.fog,nt=rt.geometry,F=C.isMeshStandardMaterial?J.environment:null,K=(C.isMeshStandardMaterial?a:e).get(C.envMap||F),j=K&&K.mapping===xc?K.image.height:null,vt=b[C.type];C.precision!==null&&(M=u.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const yt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Bt=yt!==void 0?yt.length:0;let Zt=0;nt.morphAttributes.position!==void 0&&(Zt=1),nt.morphAttributes.normal!==void 0&&(Zt=2),nt.morphAttributes.color!==void 0&&(Zt=3);let oe,H,dt,et;if(vt){const Me=ji[vt];oe=Me.vertexShader,H=Me.fragmentShader}else oe=C.vertexShader,H=C.fragmentShader,g.update(C),dt=g.getVertexShaderID(C),et=g.getFragmentShaderID(C);const ot=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Dt=rt.isInstancedMesh===!0,tt=rt.isBatchedMesh===!0,xt=!!C.map,Vt=!!C.matcap,I=!!K,Re=!!C.aoMap,ae=!!C.lightMap,Jt=!!C.bumpMap,Lt=!!C.normalMap,re=!!C.displacementMap,Ht=!!C.emissiveMap,le=!!C.metalnessMap,qe=!!C.roughnessMap,Ye=C.anisotropy>0,U=C.clearcoat>0,T=C.dispersion>0,st=C.iridescence>0,gt=C.sheen>0,Et=C.transmission>0,pt=Ye&&!!C.anisotropyMap,kt=U&&!!C.clearcoatMap,Ct=U&&!!C.clearcoatNormalMap,Wt=U&&!!C.clearcoatRoughnessMap,Qt=st&&!!C.iridescenceMap,At=st&&!!C.iridescenceThicknessMap,Ot=gt&&!!C.sheenColorMap,ie=gt&&!!C.sheenRoughnessMap,Kt=!!C.specularMap,zt=!!C.specularColorMap,fe=!!C.specularIntensityMap,q=Et&&!!C.transmissionMap,Rt=Et&&!!C.thicknessMap,Ut=!!C.gradientMap,Xt=!!C.alphaMap,Tt=C.alphaTest>0,St=!!C.alphaHash,Yt=!!C.extensions;let ce=cr;C.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ve={shaderID:vt,shaderType:C.type,shaderName:C.name,vertexShader:oe,fragmentShader:H,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:tt,batchingColor:tt&&rt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&rt.instanceColor!==null,instancingMorph:Dt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Zr,alphaToCoverage:!!C.alphaToCoverage,map:xt,matcap:Vt,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:j,aoMap:Re,lightMap:ae,bumpMap:Jt,normalMap:Lt,displacementMap:y&&re,emissiveMap:Ht,normalMapObjectSpace:Lt&&C.normalMapType===xE,normalMapTangentSpace:Lt&&C.normalMapType===dx,metalnessMap:le,roughnessMap:qe,anisotropy:Ye,anisotropyMap:pt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:st,iridescenceMap:Qt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Ot,sheenRoughnessMap:ie,specularMap:Kt,specularColorMap:zt,specularIntensityMap:fe,transmission:Et,transmissionMap:q,thicknessMap:Rt,gradientMap:Ut,opaque:C.transparent===!1&&C.blending===Js&&C.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Tt,alphaHash:St,combine:C.combine,mapUv:xt&&w(C.map.channel),aoMapUv:Re&&w(C.aoMap.channel),lightMapUv:ae&&w(C.lightMap.channel),bumpMapUv:Jt&&w(C.bumpMap.channel),normalMapUv:Lt&&w(C.normalMap.channel),displacementMapUv:re&&w(C.displacementMap.channel),emissiveMapUv:Ht&&w(C.emissiveMap.channel),metalnessMapUv:le&&w(C.metalnessMap.channel),roughnessMapUv:qe&&w(C.roughnessMap.channel),anisotropyMapUv:pt&&w(C.anisotropyMap.channel),clearcoatMapUv:kt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:At&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ie&&w(C.sheenRoughnessMap.channel),specularMapUv:Kt&&w(C.specularMap.channel),specularColorMapUv:zt&&w(C.specularColorMap.channel),specularIntensityMapUv:fe&&w(C.specularIntensityMap.channel),transmissionMapUv:q&&w(C.transmissionMap.channel),thicknessMapUv:Rt&&w(C.thicknessMap.channel),alphaMapUv:Xt&&w(C.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Lt||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!nt.attributes.uv&&(xt||Xt),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:rt.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Zt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===ke,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ma,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Yt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&C.extensions.multiDraw===!0||tt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(L(R,C),z(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function L(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function z(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=b[C.type];let B;if(R){const J=ji[R];B=JE.clone(J.uniforms)}else B=C.uniforms;return B}function X(C,R){let B;for(let J=0,rt=v.length;J<rt;J++){const ut=v[J];if(ut.cacheKey===R){B=ut,++B.usedTimes;break}}return B===void 0&&(B=new wR(o,R,C,f),v.push(B)),B}function G(C){if(--C.usedTimes===0){const R=v.indexOf(C);v[R]=v[v.length-1],v.pop(),C.destroy()}}function O(C){g.remove(C)}function P(){g.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:X,releaseProgram:G,releaseShaderCache:O,programs:v,dispose:P}}function OR(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function zR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Kv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Qv(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function h(m,y,M,b,w,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:y,material:M,groupOrder:b,renderOrder:m.renderOrder,z:w,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=y,x.material=M,x.groupOrder=b,x.renderOrder=m.renderOrder,x.z=w,x.group=S),e++,x}function d(m,y,M,b,w,S){const x=h(m,y,M,b,w,S);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function g(m,y,M,b,w,S){const x=h(m,y,M,b,w,S);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function p(m,y){a.length>1&&a.sort(m||zR),s.length>1&&s.sort(y||Kv),u.length>1&&u.sort(y||Kv)}function v(){for(let m=e,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:g,finish:v,sort:p}}function PR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new Qv,o.set(s,[h])):u>=f.length?(h=new Qv,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function IR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new ft,color:new ze};break;case"SpotLight":a={position:new ft,direction:new ft,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ft,color:new ze,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ft,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":a={color:new ze,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[e.id]=a,a}}}function BR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let FR=0;function HR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function GR(o){const e=new IR,a=BR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ft);const u=new ft,f=new on,h=new on;function d(p){let v=0,m=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,w=0,S=0,x=0,L=0,z=0,D=0,X=0,G=0,O=0;p.sort(HR);for(let C=0,R=p.length;C<R;C++){const B=p[C],J=B.color,rt=B.intensity,ut=B.distance,nt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=J.r*rt,m+=J.g*rt,y+=J.b*rt;else if(B.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(B.sh.coefficients[F],rt);O++}else if(B.isDirectionalLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,j=a.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=nt,s.directionalShadowMatrix[M]=B.shadow.matrix,L++}s.directional[M]=F,M++}else if(B.isSpotLight){const F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(J).multiplyScalar(rt),F.distance=ut,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,s.spot[w]=F;const K=B.shadow;if(B.map&&(s.spotLightMap[X]=B.map,X++,K.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[w]=K.matrix,B.castShadow){const j=a.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,s.spotShadow[w]=j,s.spotShadowMap[w]=nt,D++}w++}else if(B.isRectAreaLight){const F=e.get(B);F.color.copy(J).multiplyScalar(rt),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=F,S++}else if(B.isPointLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){const K=B.shadow,j=a.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=nt,s.pointShadowMatrix[b]=B.shadow.matrix,z++}s.point[b]=F,b++}else if(B.isHemisphereLight){const F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(rt),F.groundColor.copy(B.groundColor).multiplyScalar(rt),s.hemi[x]=F,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=y;const P=s.hash;(P.directionalLength!==M||P.pointLength!==b||P.spotLength!==w||P.rectAreaLength!==S||P.hemiLength!==x||P.numDirectionalShadows!==L||P.numPointShadows!==z||P.numSpotShadows!==D||P.numSpotMaps!==X||P.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+X-G,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,P.directionalLength=M,P.pointLength=b,P.spotLength=w,P.rectAreaLength=S,P.hemiLength=x,P.numDirectionalShadows=L,P.numPointShadows=z,P.numSpotShadows=D,P.numSpotMaps=X,P.numLightProbes=O,s.version=FR++)}function g(p,v){let m=0,y=0,M=0,b=0,w=0;const S=v.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const z=p[x];if(z.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(S),m++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(S),M++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),h.identity(),f.copy(z.matrixWorld),f.premultiply(S),h.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),y++}else if(z.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(S),w++}}}return{setup:d,setupView:g,state:s}}function Jv(o){const e=new GR(o),a=[],s=[];function u(v){p.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){e.setup(a)}function g(v){e.setupView(a,v)}const p={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function VR(o){let e=new WeakMap;function a(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new Jv(o),e.set(u,[d])):f>=h.length?(d=new Jv(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:a,dispose:s}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`;function qR(o,e,a){let s=new Op;const u=new Pe,f=new Pe,h=new rn,d=new uT({depthPacking:vE}),g=new cT,p={},v=a.maxTextureSize,m={[fr]:Qn,[Qn]:fr,[Ma]:Ma},y=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:XR,fragmentShader:kR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new dr;b.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wi(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ex;let x=this.type;this.render=function(G,O,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ur),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const rt=x!==Sa&&this.type===Sa,ut=x===Sa&&this.type!==Sa;for(let nt=0,F=G.length;nt<F;nt++){const K=G[nt],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;u.copy(j.mapSize);const vt=j.getFrameExtents();if(u.multiply(vt),f.copy(j.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/vt.x),u.x=f.x*vt.x,j.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/vt.y),u.y=f.y*vt.y,j.mapSize.y=f.y)),j.map===null||rt===!0||ut===!0){const Bt=this.type!==Sa?{minFilter:ui,magFilter:ui}:{};j.map!==null&&j.map.dispose(),j.map=new Kr(u.x,u.y,Bt),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const yt=j.getViewportCount();for(let Bt=0;Bt<yt;Bt++){const Zt=j.getViewport(Bt);h.set(f.x*Zt.x,f.y*Zt.y,f.x*Zt.z,f.y*Zt.w),J.viewport(h),j.updateMatrices(K,Bt),s=j.getFrustum(),D(O,P,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Sa&&L(j,P),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,R,B)};function L(G,O){const P=e.update(w);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Kr(u.x,u.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,P,y,w,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,P,M,w,null)}function z(G,O,P,C){let R=null;const B=P.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)R=B;else if(R=P.isPointLight===!0?g:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=R.uuid,rt=O.uuid;let ut=p[J];ut===void 0&&(ut={},p[J]=ut);let nt=ut[rt];nt===void 0&&(nt=R.clone(),ut[rt]=nt,O.addEventListener("dispose",X)),R=nt}if(R.visible=O.visible,R.wireframe=O.wireframe,C===Sa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:m[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=o.properties.get(R);J.light=P}return R}function D(G,O,P,C,R){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Sa)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,G.matrixWorld);const rt=e.update(G),ut=G.material;if(Array.isArray(ut)){const nt=rt.groups;for(let F=0,K=nt.length;F<K;F++){const j=nt[F],vt=ut[j.materialIndex];if(vt&&vt.visible){const yt=z(G,vt,C,R);G.onBeforeShadow(o,G,O,P,rt,yt,j),o.renderBufferDirect(P,null,rt,yt,G,j),G.onAfterShadow(o,G,O,P,rt,yt,j)}}}else if(ut.visible){const nt=z(G,ut,C,R);G.onBeforeShadow(o,G,O,P,rt,nt,null),o.renderBufferDirect(P,null,rt,nt,G,null),G.onAfterShadow(o,G,O,P,rt,nt,null)}}const J=G.children;for(let rt=0,ut=J.length;rt<ut;rt++)D(J[rt],O,P,C,R)}function X(G){G.target.removeEventListener("dispose",X);for(const P in p){const C=p[P],R=G.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const jR={[Id]:Bd,[Fd]:Vd,[Hd]:Xd,[to]:Gd,[Bd]:Id,[Vd]:Fd,[Xd]:Hd,[Gd]:to};function YR(o,e){function a(){let q=!1;const Rt=new rn;let Ut=null;const Xt=new rn(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!q&&(o.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){q=Tt},setClear:function(Tt,St,Yt,ce,Ve){Ve===!0&&(Tt*=ce,St*=ce,Yt*=ce),Rt.set(Tt,St,Yt,ce),Xt.equals(Rt)===!1&&(o.clearColor(Tt,St,Yt,ce),Xt.copy(Rt))},reset:function(){q=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let q=!1,Rt=!1,Ut=null,Xt=null,Tt=null;return{setReversed:function(St){if(Rt!==St){const Yt=e.get("EXT_clip_control");St?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=St;const ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return Rt},setTest:function(St){St?ot(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(St){Ut!==St&&!q&&(o.depthMask(St),Ut=St)},setFunc:function(St){if(Rt&&(St=jR[St]),Xt!==St){switch(St){case Id:o.depthFunc(o.NEVER);break;case Bd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case to:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=St}},setLocked:function(St){q=St},setClear:function(St){Tt!==St&&(Rt&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){q=!1,Ut=null,Xt=null,Tt=null,Rt=!1}}}function u(){let q=!1,Rt=null,Ut=null,Xt=null,Tt=null,St=null,Yt=null,ce=null,Ve=null;return{setTest:function(Me){q||(Me?ot(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!q&&(o.stencilMask(Me),Rt=Me)},setFunc:function(Me,$e,pn){(Ut!==Me||Xt!==$e||Tt!==pn)&&(o.stencilFunc(Me,$e,pn),Ut=Me,Xt=$e,Tt=pn)},setOp:function(Me,$e,pn){(St!==Me||Yt!==$e||ce!==pn)&&(o.stencilOp(Me,$e,pn),St=Me,Yt=$e,ce=pn)},setLocked:function(Me){q=Me},setClear:function(Me){Ve!==Me&&(o.clearStencil(Me),Ve=Me)},reset:function(){q=!1,Rt=null,Ut=null,Xt=null,Tt=null,St=null,Yt=null,ce=null,Ve=null}}}const f=new a,h=new s,d=new u,g=new WeakMap,p=new WeakMap;let v={},m={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,L=null,z=null,D=null,X=null,G=null,O=new ze(0,0,0),P=0,C=!1,R=null,B=null,J=null,rt=null,ut=null;const nt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,K=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=K>=2);let vt=null,yt={};const Bt=o.getParameter(o.SCISSOR_BOX),Zt=o.getParameter(o.VIEWPORT),oe=new rn().fromArray(Bt),H=new rn().fromArray(Zt);function dt(q,Rt,Ut,Xt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(q,St),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Ut;Yt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Rt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const et={};et[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(o.DEPTH_TEST),h.setFunc(to),Jt(!1),Lt(nv),ot(o.CULL_FACE),Re(ur);function ot(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function Mt(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function Dt(q,Rt){return m[q]!==Rt?(o.bindFramebuffer(q,Rt),m[q]=Rt,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Rt),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function tt(q,Rt){let Ut=M,Xt=!1;if(q){Ut=y.get(Rt),Ut===void 0&&(Ut=[],y.set(Rt,Ut));const Tt=q.textures;if(Ut.length!==Tt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Yt=Tt.length;St<Yt;St++)Ut[St]=o.COLOR_ATTACHMENT0+St;Ut.length=Tt.length,Xt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ut)}function xt(q){return b!==q?(o.useProgram(q),b=q,!0):!1}const Vt={[jr]:o.FUNC_ADD,[qM]:o.FUNC_SUBTRACT,[jM]:o.FUNC_REVERSE_SUBTRACT};Vt[YM]=o.MIN,Vt[WM]=o.MAX;const I={[ZM]:o.ZERO,[KM]:o.ONE,[QM]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[iE]:o.SRC_ALPHA_SATURATE,[eE]:o.DST_COLOR,[$M]:o.DST_ALPHA,[JM]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[nE]:o.ONE_MINUS_DST_COLOR,[tE]:o.ONE_MINUS_DST_ALPHA,[aE]:o.CONSTANT_COLOR,[rE]:o.ONE_MINUS_CONSTANT_COLOR,[sE]:o.CONSTANT_ALPHA,[oE]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(q,Rt,Ut,Xt,Tt,St,Yt,ce,Ve,Me){if(q===ur){w===!0&&(Mt(o.BLEND),w=!1);return}if(w===!1&&(ot(o.BLEND),w=!0),q!==kM){if(q!==S||Me!==C){if((x!==jr||D!==jr)&&(o.blendEquation(o.FUNC_ADD),x=jr,D=jr),Me)switch(q){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case iv:o.blendFunc(o.ONE,o.ONE);break;case av:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case iv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case av:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,z=null,X=null,G=null,O.set(0,0,0),P=0,S=q,C=Me}return}Tt=Tt||Rt,St=St||Ut,Yt=Yt||Xt,(Rt!==x||Tt!==D)&&(o.blendEquationSeparate(Vt[Rt],Vt[Tt]),x=Rt,D=Tt),(Ut!==L||Xt!==z||St!==X||Yt!==G)&&(o.blendFuncSeparate(I[Ut],I[Xt],I[St],I[Yt]),L=Ut,z=Xt,X=St,G=Yt),(ce.equals(O)===!1||Ve!==P)&&(o.blendColor(ce.r,ce.g,ce.b,Ve),O.copy(ce),P=Ve),S=q,C=!1}function ae(q,Rt){q.side===Ma?Mt(o.CULL_FACE):ot(o.CULL_FACE);let Ut=q.side===Qn;Rt&&(Ut=!Ut),Jt(Ut),q.blending===Js&&q.transparent===!1?Re(ur):Re(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),f.setMask(q.colorWrite);const Xt=q.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ht(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function Lt(q){q!==GM?(ot(o.CULL_FACE),q!==B&&(q===nv?o.cullFace(o.BACK):q===VM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),B=q}function re(q){q!==J&&(F&&o.lineWidth(q),J=q)}function Ht(q,Rt,Ut){q?(ot(o.POLYGON_OFFSET_FILL),(rt!==Rt||ut!==Ut)&&(o.polygonOffset(Rt,Ut),rt=Rt,ut=Ut)):Mt(o.POLYGON_OFFSET_FILL)}function le(q){q?ot(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qe(q){q===void 0&&(q=o.TEXTURE0+nt-1),vt!==q&&(o.activeTexture(q),vt=q)}function Ye(q,Rt,Ut){Ut===void 0&&(vt===null?Ut=o.TEXTURE0+nt-1:Ut=vt);let Xt=yt[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},yt[Ut]=Xt),(Xt.type!==q||Xt.texture!==Rt)&&(vt!==Ut&&(o.activeTexture(Ut),vt=Ut),o.bindTexture(q,Rt||et[q]),Xt.type=q,Xt.texture=Rt)}function U(){const q=yt[vt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(q){oe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),oe.copy(q))}function ie(q){H.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),H.copy(q))}function Kt(q,Rt){let Ut=p.get(Rt);Ut===void 0&&(Ut=new WeakMap,p.set(Rt,Ut));let Xt=Ut.get(q);Xt===void 0&&(Xt=o.getUniformBlockIndex(Rt,q.name),Ut.set(q,Xt))}function zt(q,Rt){const Xt=p.get(Rt).get(q);g.get(Rt)!==Xt&&(o.uniformBlockBinding(Rt,Xt,q.__bindingPointIndex),g.set(Rt,Xt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,yt={},m={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,L=null,z=null,D=null,X=null,G=null,O=new ze(0,0,0),P=0,C=!1,R=null,B=null,J=null,rt=null,ut=null,oe.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ot,disable:Mt,bindFramebuffer:Dt,drawBuffers:tt,useProgram:xt,setBlending:Re,setMaterial:ae,setFlipSided:Jt,setCullFace:Lt,setLineWidth:re,setPolygonOffset:Ht,setScissorTest:le,activeTexture:qe,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:st,texImage2D:Qt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:kt,scissor:Ot,viewport:ie,reset:fe}}function WR(o,e,a,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,v=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):vc("canvas")}function w(U,T,st){let gt=1;const Et=Ye(U);if((Et.width>st||Et.height>st)&&(gt=st/Math.max(Et.width,Et.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(gt*Et.width),kt=Math.floor(gt*Et.height);m===void 0&&(m=b(pt,kt));const Ct=T?b(pt,kt):m;return Ct.width=pt,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,pt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+kt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,st,gt,Et=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=T;if(T===o.RED&&(st===o.FLOAT&&(pt=o.R32F),st===o.HALF_FLOAT&&(pt=o.R16F),st===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.R8UI),st===o.UNSIGNED_SHORT&&(pt=o.R16UI),st===o.UNSIGNED_INT&&(pt=o.R32UI),st===o.BYTE&&(pt=o.R8I),st===o.SHORT&&(pt=o.R16I),st===o.INT&&(pt=o.R32I)),T===o.RG&&(st===o.FLOAT&&(pt=o.RG32F),st===o.HALF_FLOAT&&(pt=o.RG16F),st===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RG8UI),st===o.UNSIGNED_SHORT&&(pt=o.RG16UI),st===o.UNSIGNED_INT&&(pt=o.RG32UI),st===o.BYTE&&(pt=o.RG8I),st===o.SHORT&&(pt=o.RG16I),st===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),st===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),st===o.UNSIGNED_INT&&(pt=o.RGB32UI),st===o.BYTE&&(pt=o.RGB8I),st===o.SHORT&&(pt=o.RGB16I),st===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),st===o.UNSIGNED_INT&&(pt=o.RGBA32UI),st===o.BYTE&&(pt=o.RGBA8I),st===o.SHORT&&(pt=o.RGBA16I),st===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const kt=Et?gc:Ue.getTransfer(gt);st===o.FLOAT&&(pt=o.RGBA32F),st===o.HALF_FLOAT&&(pt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(pt=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function D(U,T){let st;return U?T===null||T===Wr||T===ul?st=o.DEPTH24_STENCIL8:T===Kn?st=o.DEPTH32F_STENCIL8:T===ll&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===ul?st=o.DEPTH_COMPONENT24:T===Kn?st=o.DEPTH_COMPONENT32F:T===ll&&(st=o.DEPTH_COMPONENT16),st}function X(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==ui&&U.minFilter!==wn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),P(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T)}function P(U){const T=s.get(U);if(T.__webglInit===void 0)return;const st=U.source,gt=y.get(st);if(gt){const Et=gt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(U),Object.keys(gt).length===0&&y.delete(st)}s.remove(U)}function C(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const st=U.source,gt=y.get(st);delete gt[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Et=0;Et<T.__webglFramebuffer[gt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[gt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const st=U.textures;for(let gt=0,Et=st.length;gt<Et;gt++){const pt=s.get(st[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(st[gt])}s.remove(U)}let B=0;function J(){B=0}function rt(){const U=B;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),B+=1,U}function ut(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function nt(U,T){const st=s.get(U);if(U.isVideoTexture&&le(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&st.__version!==U.version){const gt=U.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(st,U,T);return}}else U.isExternalTexture&&(st.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+T)}function F(U,T){const st=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){et(st,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+T)}function K(U,T){const st=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){et(st,U,T);return}a.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+T)}function j(U,T){const st=s.get(U);if(U.version>0&&st.__version!==U.version){ot(st,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+T)}const vt={[qd]:o.REPEAT,[Ta]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},yt={[ui]:o.NEAREST,[gE]:o.NEAREST_MIPMAP_NEAREST,[Vu]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[nd]:o.LINEAR_MIPMAP_NEAREST,[lr]:o.LINEAR_MIPMAP_LINEAR},Bt={[yE]:o.NEVER,[AE]:o.ALWAYS,[SE]:o.LESS,[px]:o.LEQUAL,[ME]:o.EQUAL,[bE]:o.GEQUAL,[EE]:o.GREATER,[TE]:o.NOTEQUAL};function Zt(U,T){if(T.type===Kn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wn||T.magFilter===nd||T.magFilter===Vu||T.magFilter===lr||T.minFilter===wn||T.minFilter===nd||T.minFilter===Vu||T.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Bt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==Vu&&T.minFilter!==lr||T.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function oe(U,T){let st=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const gt=T.source;let Et=y.get(gt);Et===void 0&&(Et={},y.set(gt,Et));const pt=ut(T);if(pt!==U.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Et[pt].usedTimes++;const kt=Et[U.__cacheKey];kt!==void 0&&(Et[U.__cacheKey].usedTimes--,kt.usedTimes===0&&C(T)),U.__cacheKey=pt,U.__webglTexture=Et[pt].texture}return st}function H(U,T,st){return Math.floor(Math.floor(U/st)/T)}function dt(U,T,st,gt){const pt=U.updateRanges;if(pt.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,st,gt,T.data);else{pt.sort((At,Ot)=>At.start-Ot.start);let kt=0;for(let At=1;At<pt.length;At++){const Ot=pt[kt],ie=pt[At],Kt=Ot.start+Ot.count,zt=H(ie.start,T.width,4),fe=H(Ot.start,T.width,4);ie.start<=Kt+1&&zt===fe&&H(ie.start+ie.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ie.start+ie.count-Ot.start):(++kt,pt[kt]=ie)}pt.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let At=0,Ot=pt.length;At<Ot;At++){const ie=pt[At],Kt=Math.floor(ie.start/4),zt=Math.ceil(ie.count/4),fe=Kt%T.width,q=Math.floor(Kt/T.width),Rt=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),a.texSubImage2D(o.TEXTURE_2D,0,fe,q,Rt,Ut,st,gt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function et(U,T,st){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const Et=oe(U,T),pt=T.source;a.bindTexture(gt,U.__webglTexture,o.TEXTURE0+st);const kt=s.get(pt);if(pt.version!==kt.__version||Et===!0){a.activeTexture(o.TEXTURE0+st);const Ct=Ue.getPrimaries(Ue.workingColorSpace),Wt=T.colorSpace===or?null:Ue.getPrimaries(T.colorSpace),Qt=T.colorSpace===or||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let At=w(T.image,!1,u.maxTextureSize);At=qe(T,At);const Ot=f.convert(T.format,T.colorSpace),ie=f.convert(T.type);let Kt=z(T.internalFormat,Ot,ie,T.colorSpace,T.isVideoTexture);Zt(gt,T);let zt;const fe=T.mipmaps,q=T.isVideoTexture!==!0,Rt=kt.__version===void 0||Et===!0,Ut=pt.dataReady,Xt=X(T,At);if(T.isDepthTexture)Kt=D(T.format===fl,T.type),Rt&&(q?a.texStorage2D(o.TEXTURE_2D,1,Kt,At.width,At.height):a.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Ot,ie,null));else if(T.isDataTexture)if(fe.length>0){q&&Rt&&a.texStorage2D(o.TEXTURE_2D,Xt,Kt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)zt=fe[Tt],q?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Tt,Kt,zt.width,zt.height,0,Ot,ie,zt.data);T.generateMipmaps=!1}else q?(Rt&&a.texStorage2D(o.TEXTURE_2D,Xt,Kt,At.width,At.height),Ut&&dt(T,At,Ot,ie)):a.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Ot,ie,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,fe[0].width,fe[0].height,At.depth);for(let Tt=0,St=fe.length;Tt<St;Tt++)if(zt=fe[Tt],T.format!==Mi)if(Ot!==null)if(q){if(Ut)if(T.layerUpdates.size>0){const Yt=wv(zt.width,zt.height,T.format,T.type);for(const ce of T.layerUpdates){const Ve=zt.data.subarray(ce*Yt/zt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ce,zt.width,zt.height,1,Ot,Ve)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,At.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Kt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,At.depth,Ot,ie,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Kt,zt.width,zt.height,At.depth,0,Ot,ie,zt.data)}else{q&&Rt&&a.texStorage2D(o.TEXTURE_2D,Xt,Kt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)zt=fe[Tt],T.format!==Mi?Ot!==null?q?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,Tt,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Tt,Kt,zt.width,zt.height,0,Ot,ie,zt.data)}else if(T.isDataArrayTexture)if(q){if(Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,At.width,At.height,At.depth),Ut)if(T.layerUpdates.size>0){const Tt=wv(At.width,At.height,T.format,T.type);for(const St of T.layerUpdates){const Yt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Ot,ie,Yt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,ie,At.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Ot,ie,At.data);else if(T.isData3DTexture)q?(Rt&&a.texStorage3D(o.TEXTURE_3D,Xt,Kt,At.width,At.height,At.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,ie,At.data)):a.texImage3D(o.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Ot,ie,At.data);else if(T.isFramebufferTexture){if(Rt)if(q)a.texStorage2D(o.TEXTURE_2D,Xt,Kt,At.width,At.height);else{let Tt=At.width,St=At.height;for(let Yt=0;Yt<Xt;Yt++)a.texImage2D(o.TEXTURE_2D,Yt,Kt,Tt,St,0,Ot,ie,null),Tt>>=1,St>>=1}}else if(fe.length>0){if(q&&Rt){const Tt=Ye(fe[0]);a.texStorage2D(o.TEXTURE_2D,Xt,Kt,Tt.width,Tt.height)}for(let Tt=0,St=fe.length;Tt<St;Tt++)zt=fe[Tt],q?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ot,ie,zt):a.texImage2D(o.TEXTURE_2D,Tt,Kt,Ot,ie,zt);T.generateMipmaps=!1}else if(q){if(Rt){const Tt=Ye(At);a.texStorage2D(o.TEXTURE_2D,Xt,Kt,Tt.width,Tt.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ie,At)}else a.texImage2D(o.TEXTURE_2D,0,Kt,Ot,ie,At);S(T)&&x(gt),kt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ot(U,T,st){if(T.image.length!==6)return;const gt=oe(U,T),Et=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+st);const pt=s.get(Et);if(Et.version!==pt.__version||gt===!0){a.activeTexture(o.TEXTURE0+st);const kt=Ue.getPrimaries(Ue.workingColorSpace),Ct=T.colorSpace===or?null:Ue.getPrimaries(T.colorSpace),Wt=T.colorSpace===or||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let St=0;St<6;St++)!Qt&&!At?Ot[St]=w(T.image[St],!0,u.maxCubemapSize):Ot[St]=At?T.image[St].image:T.image[St],Ot[St]=qe(T,Ot[St]);const ie=Ot[0],Kt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),fe=z(T.internalFormat,Kt,zt,T.colorSpace),q=T.isVideoTexture!==!0,Rt=pt.__version===void 0||gt===!0,Ut=Et.dataReady;let Xt=X(T,ie);Zt(o.TEXTURE_CUBE_MAP,T);let Tt;if(Qt){q&&Rt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,ie.width,ie.height);for(let St=0;St<6;St++){Tt=Ot[St].mipmaps;for(let Yt=0;Yt<Tt.length;Yt++){const ce=Tt[Yt];T.format!==Mi?Kt!==null?q?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt,0,0,ce.width,ce.height,Kt,ce.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt,0,0,ce.width,ce.height,Kt,zt,ce.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt,fe,ce.width,ce.height,0,Kt,zt,ce.data)}}}else{if(Tt=T.mipmaps,q&&Rt){Tt.length>0&&Xt++;const St=Ye(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(At){q?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ot[St].width,Ot[St].height,Kt,zt,Ot[St].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Ot[St].width,Ot[St].height,0,Kt,zt,Ot[St].data);for(let Yt=0;Yt<Tt.length;Yt++){const Ve=Tt[Yt].image[St].image;q?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt+1,0,0,Ve.width,Ve.height,Kt,zt,Ve.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt+1,fe,Ve.width,Ve.height,0,Kt,zt,Ve.data)}}else{q?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,zt,Ot[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Kt,zt,Ot[St]);for(let Yt=0;Yt<Tt.length;Yt++){const ce=Tt[Yt];q?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt+1,0,0,Kt,zt,ce.image[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Yt+1,fe,Kt,zt,ce.image[St])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),pt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,st,gt,Et,pt){const kt=f.convert(st.format,st.colorSpace),Ct=f.convert(st.type),Wt=z(st.internalFormat,kt,Ct,st.colorSpace),Qt=s.get(T),At=s.get(st);if(At.__renderTarget=T,!Qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>pt),ie=Math.max(1,T.height>>pt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?a.texImage3D(Et,pt,Wt,Ot,ie,T.depth,0,kt,Ct,null):a.texImage2D(Et,pt,Wt,Ot,ie,0,kt,Ct,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,Et,At.__webglTexture,0,re(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,Et,At.__webglTexture,pt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(U,T,st){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const gt=T.depthTexture,Et=gt&&gt.isDepthTexture?gt.type:null,pt=D(T.stencilBuffer,Et),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=re(T);Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,pt,T.width,T.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const gt=T.textures;for(let Et=0;Et<gt.length;Et++){const pt=gt[Et],kt=f.convert(pt.format,pt.colorSpace),Ct=f.convert(pt.type),Wt=z(pt.internalFormat,kt,Ct,pt.colorSpace),Qt=re(T);st&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Wt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function tt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),nt(T.depthTexture,0);const Et=gt.__webglTexture,pt=re(T);if(T.depthTexture.format===cl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===fl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function xt(U){const T=s.get(U),st=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Et)};gt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=gt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const gt=U.texture.mipmaps;gt&&gt.length>0?tt(T.__webglFramebuffer[0],U):tt(T.__webglFramebuffer,U)}else if(st){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),Dt(T.__webglDepthbuffer[gt],U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}else{const gt=U.texture.mipmaps;if(gt&&gt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Dt(T.__webglDepthbuffer,U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,T,st){const gt=s.get(U);T!==void 0&&Mt(gt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&xt(U)}function I(U){const T=U.texture,st=s.get(U),gt=s.get(T);U.addEventListener("dispose",O);const Et=U.textures,pt=U.isWebGLCubeRenderTarget===!0,kt=Et.length>1;if(kt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),pt){st.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)st.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else st.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)st.__webglFramebuffer[Ct]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,Wt=Et.length;Ct<Wt;Ct++){const Qt=s.get(Et[Ct]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Wt=Et[Ct];st.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Ct]);const Qt=f.convert(Wt.format,Wt.colorSpace),At=f.convert(Wt.type),Ot=z(Wt.internalFormat,Qt,At,Wt.colorSpace,U.isXRRenderTarget===!0),ie=re(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,st.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(st.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){a.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),Zt(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(st.__webglFramebuffer[Ct][Wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Mt(st.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let Ct=0,Wt=Et.length;Ct<Wt;Ct++){const Qt=Et[Ct],At=s.get(Qt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,At.__webglTexture),Zt(Ot,Qt),Mt(st.__webglFramebuffer,U,Qt,o.COLOR_ATTACHMENT0+Ct,Ot,0),S(Qt)&&x(Ot)}a.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ct,gt.__webglTexture),Zt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(st.__webglFramebuffer[Wt],U,T,o.COLOR_ATTACHMENT0,Ct,Wt);else Mt(st.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);S(T)&&x(Ct),a.unbindTexture()}U.depthBuffer&&xt(U)}function Re(U){const T=U.textures;for(let st=0,gt=T.length;st<gt;st++){const Et=T[st];if(S(Et)){const pt=L(U),kt=s.get(Et).__webglTexture;a.bindTexture(pt,kt),x(pt),a.unbindTexture()}}}const ae=[],Jt=[];function Lt(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,st=U.width,gt=U.height;let Et=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),Ct=T.length>1;if(Ct)for(let Qt=0;Qt<T.length;Qt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const At=s.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,st,gt,0,0,st,gt,Et,o.NEAREST),g===!0&&(ae.length=0,Jt.length=0,ae.push(o.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(pt),Jt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Qt=0;Qt<T.length;Qt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const At=s.get(T[Qt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,At,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function re(U){return Math.min(u.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const st=U.colorSpace,gt=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||st!==Zr&&st!==or&&(Ue.getTransfer(st)===ke?(gt!==Mi||Et!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),T}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=J,this.setTexture2D=nt,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ht}function ZR(o,e){function a(s,u=or){let f;const h=Ue.getTransfer(u);if(s===Qi)return o.UNSIGNED_BYTE;if(s===Rp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===lx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===rx)return o.BYTE;if(s===sx)return o.SHORT;if(s===ll)return o.UNSIGNED_SHORT;if(s===Ap)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===Kn)return o.FLOAT;if(s===ba)return o.HALF_FLOAT;if(s===ux)return o.ALPHA;if(s===cx)return o.RGB;if(s===Mi)return o.RGBA;if(s===cl)return o.DEPTH_COMPONENT;if(s===fl)return o.DEPTH_STENCIL;if(s===fx)return o.RED;if(s===wp)return o.RED_INTEGER;if(s===hx)return o.RG;if(s===Dp)return o.RG_INTEGER;if(s===Up)return o.RGBA_INTEGER;if(s===fc||s===hc||s===dc||s===pc)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===fc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===fc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===Wd||s===Zd||s===Kd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Yd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===$d)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Qd||s===Jd)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===$d)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pp||s===mp||s===gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===pp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_p||s===vp||s===xp||s===yp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===_p)return f.COMPRESSED_RED_RGTC1_EXT;if(s===vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const KR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class JR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new Rx(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new hr({vertexShader:KR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Wi(new yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $R extends ao{constructor(e,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",g=1,p=null,v=null,m=null,y=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",S=new JR,x={},L=a.getContextAttributes();let z=null,D=null;const X=[],G=[],O=new Pe;let P=null;const C=new Ni;C.viewport=new rn;const R=new Ni;R.viewport=new rn;const B=[C,R],J=new yT;let rt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=X[et];return ot===void 0&&(ot=new bd,X[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=X[et];return ot===void 0&&(ot=new bd,X[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=X[et];return ot===void 0&&(ot=new bd,X[et]=ot),ot.getHandSpace()};function nt(et){const ot=G.indexOf(et.inputSource);if(ot===-1)return;const Mt=X[ot];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,p||h),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){u.removeEventListener("select",nt),u.removeEventListener("selectstart",nt),u.removeEventListener("selectend",nt),u.removeEventListener("squeeze",nt),u.removeEventListener("squeezestart",nt),u.removeEventListener("squeezeend",nt),u.removeEventListener("end",F),u.removeEventListener("inputsourceschange",K);for(let et=0;et<X.length;et++){const ot=G[et];ot!==null&&(G[et]=null,X[et].disconnect(ot))}rt=null,ut=null,S.reset();for(const et in x)delete x[et];e.setRenderTarget(z),M=null,y=null,m=null,u=null,D=null,dt.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){f=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(u,a)),m},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(et){if(u=et,u!==null){if(z=e.getRenderTarget(),u.addEventListener("select",nt),u.addEventListener("selectstart",nt),u.addEventListener("selectend",nt),u.addEventListener("squeeze",nt),u.addEventListener("squeezestart",nt),u.addEventListener("squeezeend",nt),u.addEventListener("end",F),u.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await a.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Dt=null,tt=null;L.depth&&(tt=L.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Mt=L.stencil?fl:cl,Dt=L.stencil?ul:Wr);const xt={colorFormat:a.RGBA8,depthFormat:tt,scaleFactor:f};m=this.getBinding(),y=m.createProjectionLayer(xt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Kr(y.textureWidth,y.textureHeight,{format:Mi,type:Qi,depthTexture:new Ax(y.textureWidth,y.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Mt),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Kr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await u.requestReferenceSpace(d),dt.setContext(u),dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(et){for(let ot=0;ot<et.removed.length;ot++){const Mt=et.removed[ot],Dt=G.indexOf(Mt);Dt>=0&&(G[Dt]=null,X[Dt].disconnect(Mt))}for(let ot=0;ot<et.added.length;ot++){const Mt=et.added[ot];let Dt=G.indexOf(Mt);if(Dt===-1){for(let xt=0;xt<X.length;xt++)if(xt>=G.length){G.push(Mt),Dt=xt;break}else if(G[xt]===null){G[xt]=Mt,Dt=xt;break}if(Dt===-1)break}const tt=X[Dt];tt&&tt.connect(Mt)}}const j=new ft,vt=new ft;function yt(et,ot,Mt){j.setFromMatrixPosition(ot.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Dt=j.distanceTo(vt),tt=ot.projectionMatrix.elements,xt=Mt.projectionMatrix.elements,Vt=tt[14]/(tt[10]-1),I=tt[14]/(tt[10]+1),Re=(tt[9]+1)/tt[5],ae=(tt[9]-1)/tt[5],Jt=(tt[8]-1)/tt[0],Lt=(xt[8]+1)/xt[0],re=Vt*Jt,Ht=Vt*Lt,le=Dt/(-Jt+Lt),qe=le*-Jt;if(ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(qe),et.translateZ(le),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),tt[10]===-1)et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Ye=Vt+le,U=I+le,T=re-qe,st=Ht+(Dt-qe),gt=Re*I/U*Ye,Et=ae*I/U*Ye;et.projectionMatrix.makePerspective(T,st,gt,Et,Ye,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Bt(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(u===null)return;let ot=et.near,Mt=et.far;S.texture!==null&&(S.depthNear>0&&(ot=S.depthNear),S.depthFar>0&&(Mt=S.depthFar)),J.near=R.near=C.near=ot,J.far=R.far=C.far=Mt,(rt!==J.near||ut!==J.far)&&(u.updateRenderState({depthNear:J.near,depthFar:J.far}),rt=J.near,ut=J.far),J.layers.mask=et.layers.mask|6,C.layers.mask=J.layers.mask&3,R.layers.mask=J.layers.mask&5;const Dt=et.parent,tt=J.cameras;Bt(J,Dt);for(let xt=0;xt<tt.length;xt++)Bt(tt[xt],Dt);tt.length===2?yt(J,C,R):J.projectionMatrix.copy(C.projectionMatrix),Zt(et,J,Dt)};function Zt(et,ot,Mt){Mt===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Sp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(y===null&&M===null))return g},this.setFoveation=function(et){g=et,y!==null&&(y.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(et){return x[et]};let oe=null;function H(et,ot){if(v=ot.getViewerPose(p||h),b=ot,v!==null){const Mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Dt=!1;Mt.length!==J.cameras.length&&(J.cameras.length=0,Dt=!0);for(let I=0;I<Mt.length;I++){const Re=Mt[I];let ae=null;if(M!==null)ae=M.getViewport(Re);else{const Lt=m.getViewSubImage(y,Re);ae=Lt.viewport,I===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let Jt=B[I];Jt===void 0&&(Jt=new Ni,Jt.layers.enable(I),Jt.viewport=new rn,B[I]=Jt),Jt.matrix.fromArray(Re.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Re.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&(J.matrix.copy(Jt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Dt===!0&&J.cameras.push(Jt)}const tt=u.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){m=s.getBinding();const I=m.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&S.init(I,u.renderState)}if(tt&&tt.includes("camera-access")&&w){e.state.unbindTexture(),m=s.getBinding();for(let I=0;I<Mt.length;I++){const Re=Mt[I].camera;if(Re){let ae=x[Re];ae||(ae=new Rx,x[Re]=ae);const Jt=m.getCameraImage(Re);ae.sourceTexture=Jt}}}}for(let Mt=0;Mt<X.length;Mt++){const Dt=G[Mt],tt=X[Mt];Dt!==null&&tt!==void 0&&tt.update(Dt,ot,p||h)}oe&&oe(et,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),b=null}const dt=new Cx;dt.setAnimationLoop(H),this.setAnimationLoop=function(et){oe=et},this.dispose=function(){}}}const Xr=new Ji,t2=new on;function e2(o,e){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Mx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function u(S,x,L,z,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),m(S,x)):x.isMeshPhongMaterial?(f(S,x),v(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,D)):x.isMeshMatcapMaterial?(f(S,x),b(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),w(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?g(S,x,L,z):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),z=L.envMap,D=L.envMapRotation;z&&(S.envMap.value=z,Xr.copy(D),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),S.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Xr)),S.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function g(S,x,L,z){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=z*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function n2(o,e,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,z){const D=z.program;s.uniformBlockBinding(L,D)}function p(L,z){let D=u[L.id];D===void 0&&(b(L),D=v(L),u[L.id]=D,L.addEventListener("dispose",S));const X=z.program;s.updateUBOMapping(L,X);const G=e.render.frame;f[L.id]!==G&&(y(L),f[L.id]=G)}function v(L){const z=m();L.__bindingPointIndex=z;const D=o.createBuffer(),X=L.__size,G=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,X,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function m(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const z=u[L.id],D=L.uniforms,X=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,O=D.length;G<O;G++){const P=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,R=P.length;C<R;C++){const B=P[C];if(M(B,G,C,X)===!0){const J=B.__offset,rt=Array.isArray(B.value)?B.value:[B.value];let ut=0;for(let nt=0;nt<rt.length;nt++){const F=rt[nt],K=w(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,J+ut,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,ut),ut+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,z,D,X){const G=L.value,O=z+"_"+D;if(X[O]===void 0)return typeof G=="number"||typeof G=="boolean"?X[O]=G:X[O]=G.clone(),!0;{const P=X[O];if(typeof G=="number"||typeof G=="boolean"){if(P!==G)return X[O]=G,!0}else if(P.equals(G)===!1)return P.copy(G),!0}return!1}function b(L){const z=L.uniforms;let D=0;const X=16;for(let O=0,P=z.length;O<P;O++){const C=Array.isArray(z[O])?z[O]:[z[O]];for(let R=0,B=C.length;R<B;R++){const J=C[R],rt=Array.isArray(J.value)?J.value:[J.value];for(let ut=0,nt=rt.length;ut<nt;ut++){const F=rt[ut],K=w(F),j=D%X,vt=j%K.boundary,yt=j+vt;D+=vt,yt!==0&&X-yt<K.storage&&(D+=X-yt),J.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=K.storage}}}const G=D%X;return G>0&&(D+=X-G),L.__size=D,L.__cache={},this}function w(L){const z={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(z.boundary=4,z.storage=4):L.isVector2?(z.boundary=8,z.storage=8):L.isVector3||L.isColor?(z.boundary=16,z.storage=12):L.isVector4?(z.boundary=16,z.storage=16):L.isMatrix3?(z.boundary=48,z.storage=48):L.isMatrix4?(z.boundary=64,z.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),z}function S(L){const z=L.target;z.removeEventListener("dispose",S);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function x(){for(const L in u)o.deleteBuffer(u[L]);h=[],u={},f={}}return{bind:g,update:p,dispose:x}}class i2{constructor(e={}){const{canvas:a=CE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const L=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let X=!1;this._outputColorSpace=Si;let G=0,O=0,P=null,C=-1,R=null;const B=new rn,J=new rn;let rt=null;const ut=new ze(0);let nt=0,F=a.width,K=a.height,j=1,vt=null,yt=null;const Bt=new rn(0,0,F,K),Zt=new rn(0,0,F,K);let oe=!1;const H=new Op;let dt=!1,et=!1;const ot=new on,Mt=new ft,Dt=new rn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Vt(){return P===null?j:1}let I=s;function Re(A,Q){return a.getContext(A,Q)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${bp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",Xt,!1),a.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const Q="webgl2";if(I=Re(Q,A),I===null)throw Re(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,Jt,Lt,re,Ht,le,qe,Ye,U,T,st,gt,Et,pt,kt,Ct,Wt,Qt,At,Ot,ie,Kt,zt,fe;function q(){ae=new dA(I),ae.init(),Kt=new ZR(I,ae),Jt=new sA(I,ae,e,Kt),Lt=new YR(I,ae),Jt.reversedDepthBuffer&&y&&Lt.buffers.depth.setReversed(!0),re=new gA(I),Ht=new OR,le=new WR(I,ae,Lt,Ht,Jt,Kt,re),qe=new lA(D),Ye=new hA(D),U=new MT(I),zt=new aA(I,U),T=new pA(I,U,re,zt),st=new vA(I,T,U,re),At=new _A(I,Jt,le),Ct=new oA(Ht),gt=new LR(D,qe,Ye,ae,Jt,zt,Ct),Et=new e2(D,Ht),pt=new PR,kt=new VR(ae),Qt=new iA(D,qe,Ye,Lt,st,M,g),Wt=new qR(D,st,Jt),fe=new n2(I,re,Jt,Lt),Ot=new rA(I,ae,re),ie=new mA(I,ae,re),re.programs=gt.programs,D.capabilities=Jt,D.extensions=ae,D.properties=Ht,D.renderLists=pt,D.shadowMap=Wt,D.state=Lt,D.info=re}q();const Rt=new $R(D,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(F,K,!1))},this.getSize=function(A){return A.set(F,K)},this.setSize=function(A,Q,ct=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,K=Q,a.width=Math.floor(A*j),a.height=Math.floor(Q*j),ct===!0&&(a.style.width=A+"px",a.style.height=Q+"px"),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(F*j,K*j).floor()},this.setDrawingBufferSize=function(A,Q,ct){F=A,K=Q,j=ct,a.width=Math.floor(A*ct),a.height=Math.floor(Q*ct),this.setViewport(0,0,A,Q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Bt)},this.setViewport=function(A,Q,ct,ht){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,Q,ct,ht),Lt.viewport(B.copy(Bt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,Q,ct,ht){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,Q,ct,ht),Lt.scissor(J.copy(Zt).multiplyScalar(j).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Lt.setScissorTest(oe=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,ct=!0){let ht=0;if(A){let $=!1;if(P!==null){const bt=P.texture.format;$=bt===Up||bt===Dp||bt===wp}if($){const bt=P.texture.type,Pt=bt===Qi||bt===Wr||bt===ll||bt===ul||bt===Rp||bt===Cp,Ft=Qt.getClearColor(),wt=Qt.getClearAlpha(),qt=Ft.r,ne=Ft.g,te=Ft.b;Pt?(b[0]=qt,b[1]=ne,b[2]=te,b[3]=wt,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=qt,w[1]=ne,w[2]=te,w[3]=wt,I.clearBufferiv(I.COLOR,0,w))}else ht|=I.COLOR_BUFFER_BIT}Q&&(ht|=I.DEPTH_BUFFER_BIT),ct&&(ht|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",Xt,!1),a.removeEventListener("webglcontextcreationerror",Tt,!1),Qt.dispose(),pt.dispose(),kt.dispose(),Ht.dispose(),qe.dispose(),Ye.dispose(),st.dispose(),zt.dispose(),fe.dispose(),gt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pn),Rt.removeEventListener("sessionend",Un),$i.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=re.autoReset,Q=Wt.enabled,ct=Wt.autoUpdate,ht=Wt.needsUpdate,$=Wt.type;q(),re.autoReset=A,Wt.enabled=Q,Wt.autoUpdate=ct,Wt.needsUpdate=ht,Wt.type=$}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const Q=A.target;Q.removeEventListener("dispose",St),Yt(Q)}function Yt(A){ce(A),Ht.remove(A)}function ce(A){const Q=Ht.get(A).programs;Q!==void 0&&(Q.forEach(function(ct){gt.releaseProgram(ct)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,ct,ht,$,bt){Q===null&&(Q=tt);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,Ft=xl(A,Q,ct,ht,$);Lt.setMaterial(ht,Pt);let wt=ct.index,qt=1;if(ht.wireframe===!0){if(wt=T.getWireframeAttribute(ct),wt===void 0)return;qt=2}const ne=ct.drawRange,te=ct.attributes.position;let ve=ne.start*qt,Ie=(ne.start+ne.count)*qt;bt!==null&&(ve=Math.max(ve,bt.start*qt),Ie=Math.min(Ie,(bt.start+bt.count)*qt)),wt!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,wt.count)):te!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,te.count));const Qe=Ie-ve;if(Qe<0||Qe===1/0)return;zt.setup($,ht,Ft,ct,wt);let Ne,Ce=Ot;if(wt!==null&&(Ne=U.get(wt),Ce=ie,Ce.setIndex(Ne)),$.isMesh)ht.wireframe===!0?(Lt.setLineWidth(ht.wireframeLinewidth*Vt()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if($.isLine){let ee=ht.linewidth;ee===void 0&&(ee=1),Lt.setLineWidth(ee*Vt()),$.isLineSegments?Ce.setMode(I.LINES):$.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else $.isPoints?Ce.setMode(I.POINTS):$.isSprite&&Ce.setMode(I.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ee=$._multiDrawStarts,Le=$._multiDrawCounts,ge=$._multiDrawCount,mn=wt?U.get(wt).bytesPerElement:1,Jn=Ht.get(ht).currentProgram.getUniforms();for(let we=0;we<ge;we++)Jn.setValue(I,"_gl_DrawID",we),Ce.render(ee[we]/mn,Le[we])}else if($.isInstancedMesh)Ce.renderInstances(ve,Qe,$.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Le=Math.min(ct.instanceCount,ee);Ce.renderInstances(ve,Qe,Le)}else Ce.render(ve,Qe)};function Ve(A,Q,ct){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,ci(A,Q,ct),A.side=fr,A.needsUpdate=!0,ci(A,Q,ct),A.side=Ma):ci(A,Q,ct)}this.compile=function(A,Q,ct=null){ct===null&&(ct=A),x=kt.get(ct),x.init(Q),z.push(x),ct.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),A!==ct&&A.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const ht=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const bt=$.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const Ft=bt[Pt];Ve(Ft,ct,$),ht.add(Ft)}else Ve(bt,ct,$),ht.add(bt)}),x=z.pop(),ht},this.compileAsync=function(A,Q,ct=null){const ht=this.compile(A,Q,ct);return new Promise($=>{function bt(){if(ht.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&ht.delete(Pt)}),ht.size===0){$(A);return}setTimeout(bt,10)}ae.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Me=null;function $e(A){Me&&Me(A)}function pn(){$i.stop()}function Un(){$i.start()}const $i=new Cx;$i.setAnimationLoop($e),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){Me=A,Rt.setAnimationLoop(A),A===null?$i.stop():$i.start()},Rt.addEventListener("sessionstart",pn),Rt.addEventListener("sessionend",Un),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Q),Q=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Q,P),x=kt.get(A,z.length),x.init(Q),z.push(x),ot.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H.setFromProjectionMatrix(ot,Yi,Q.reversedDepth),et=this.localClippingEnabled,dt=Ct.init(this.clippingPlanes,et),S=pt.get(A,L.length),S.init(),L.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&so(bt,Q,-1/0,D.sortObjects)}so(A,Q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(vt,yt),xt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,xt&&Qt.addToRenderList(S,A),this.info.render.frame++,dt===!0&&Ct.beginShadows();const ct=x.state.shadowsArray;Wt.render(ct,A,Q),dt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=S.opaque,$=S.transmissive;if(x.setupLights(),Q.isArrayCamera){const bt=Q.cameras;if($.length>0)for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++){const wt=bt[Pt];pr(ht,$,A,wt)}xt&&Qt.render(A);for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++){const wt=bt[Pt];vl(S,A,wt,wt.viewport)}}else $.length>0&&pr(ht,$,A,Q),xt&&Qt.render(A),vl(S,A,Q);P!==null&&O===0&&(le.updateMultisampleRenderTarget(P),le.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(D,A,Q),zt.resetDefaultState(),C=-1,R=null,z.pop(),z.length>0?(x=z[z.length-1],dt===!0&&Ct.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function so(A,Q,ct,ht){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)ct=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){ht&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Pt=st.update(A),Ft=A.material;Ft.visible&&S.push(A,Pt,Ft,ct,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const Pt=st.update(A),Ft=A.material;if(ht&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Dt.copy(Pt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Ft)){const wt=Pt.groups;for(let qt=0,ne=wt.length;qt<ne;qt++){const te=wt[qt],ve=Ft[te.materialIndex];ve&&ve.visible&&S.push(A,Pt,ve,ct,Dt.z,te)}}else Ft.visible&&S.push(A,Pt,Ft,ct,Dt.z,null)}}const bt=A.children;for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++)so(bt[Pt],Q,ct,ht)}function vl(A,Q,ct,ht){const $=A.opaque,bt=A.transmissive,Pt=A.transparent;x.setupLightsView(ct),dt===!0&&Ct.setGlobalState(D.clippingPlanes,ct),ht&&Lt.viewport(B.copy(ht)),$.length>0&&ta($,Q,ct),bt.length>0&&ta(bt,Q,ct),Pt.length>0&&ta(Pt,Q,ct),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function pr(A,Q,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ht.id]===void 0&&(x.state.transmissionRenderTarget[ht.id]=new Kr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ba:Qi,minFilter:lr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const bt=x.state.transmissionRenderTarget[ht.id],Pt=ht.viewport||B;bt.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),wt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(ut),nt=D.getClearAlpha(),nt<1&&D.setClearColor(16777215,.5),D.clear(),xt&&Qt.render(ct);const ne=D.toneMapping;D.toneMapping=cr;const te=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),x.setupLightsView(ht),dt===!0&&Ct.setGlobalState(D.clippingPlanes,ht),ta(A,ct,ht),le.updateMultisampleRenderTarget(bt),le.updateRenderTargetMipmap(bt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ie=0,Qe=Q.length;Ie<Qe;Ie++){const Ne=Q[Ie],Ce=Ne.object,ee=Ne.geometry,Le=Ne.material,ge=Ne.group;if(Le.side===Ma&&Ce.layers.test(ht.layers)){const mn=Le.side;Le.side=Qn,Le.needsUpdate=!0,mr(Ce,ct,ht,ee,Le,ge),Le.side=mn,Le.needsUpdate=!0,ve=!0}}ve===!0&&(le.updateMultisampleRenderTarget(bt),le.updateRenderTargetMipmap(bt))}D.setRenderTarget(Ft,wt,qt),D.setClearColor(ut,nt),te!==void 0&&(ht.viewport=te),D.toneMapping=ne}function ta(A,Q,ct){const ht=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,bt=A.length;$<bt;$++){const Pt=A[$],Ft=Pt.object,wt=Pt.geometry,qt=Pt.group;let ne=Pt.material;ne.allowOverride===!0&&ht!==null&&(ne=ht),Ft.layers.test(ct.layers)&&mr(Ft,Q,ct,wt,ne,qt)}}function mr(A,Q,ct,ht,$,bt){A.onBeforeRender(D,Q,ct,ht,$,bt),A.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(D,Q,ct,ht,A,bt),$.transparent===!0&&$.side===Ma&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,D.renderBufferDirect(ct,Q,ht,$,A,bt),$.side=fr,$.needsUpdate=!0,D.renderBufferDirect(ct,Q,ht,$,A,bt),$.side=Ma):D.renderBufferDirect(ct,Q,ht,$,A,bt),A.onAfterRender(D,Q,ct,ht,$,bt)}function ci(A,Q,ct){Q.isScene!==!0&&(Q=tt);const ht=Ht.get(A),$=x.state.lights,bt=x.state.shadowsArray,Pt=$.state.version,Ft=gt.getParameters(A,$.state,bt,Q,ct),wt=gt.getProgramCacheKey(Ft);let qt=ht.programs;ht.environment=A.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(A.isMeshStandardMaterial?Ye:qe).get(A.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",St),qt=new Map,ht.programs=qt);let ne=qt.get(wt);if(ne!==void 0){if(ht.currentProgram===ne&&ht.lightsStateVersion===Pt)return Ra(A,Ft),ne}else Ft.uniforms=gt.getUniforms(A),A.onBeforeCompile(Ft,D),ne=gt.acquireProgram(Ft,wt),qt.set(wt,ne),ht.uniforms=Ft.uniforms;const te=ht.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=Ct.uniform),Ra(A,Ft),ht.needsLights=yl(A),ht.lightsStateVersion=Pt,ht.needsLights&&(te.ambientLightColor.value=$.state.ambient,te.lightProbe.value=$.state.probe,te.directionalLights.value=$.state.directional,te.directionalLightShadows.value=$.state.directionalShadow,te.spotLights.value=$.state.spot,te.spotLightShadows.value=$.state.spotShadow,te.rectAreaLights.value=$.state.rectArea,te.ltc_1.value=$.state.rectAreaLTC1,te.ltc_2.value=$.state.rectAreaLTC2,te.pointLights.value=$.state.point,te.pointLightShadows.value=$.state.pointShadow,te.hemisphereLights.value=$.state.hemi,te.directionalShadowMap.value=$.state.directionalShadowMap,te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,te.spotShadowMap.value=$.state.spotShadowMap,te.spotLightMatrix.value=$.state.spotLightMatrix,te.spotLightMap.value=$.state.spotLightMap,te.pointShadowMap.value=$.state.pointShadowMap,te.pointShadowMatrix.value=$.state.pointShadowMatrix),ht.currentProgram=ne,ht.uniformsList=null,ne}function gr(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=mc.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function Ra(A,Q){const ct=Ht.get(A);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.batchingColor=Q.batchingColor,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function xl(A,Q,ct,ht,$){Q.isScene!==!0&&(Q=tt),le.resetTextureUnits();const bt=Q.fog,Pt=ht.isMeshStandardMaterial?Q.environment:null,Ft=P===null?D.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zr,wt=(ht.isMeshStandardMaterial?Ye:qe).get(ht.envMap||Pt),qt=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ne=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),te=!!ct.morphAttributes.position,ve=!!ct.morphAttributes.normal,Ie=!!ct.morphAttributes.color;let Qe=cr;ht.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ne=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,ee=Ht.get(ht),Le=x.state.lights;if(dt===!0&&(et===!0||A!==R)){const en=A===R&&ht.id===C;Ct.setState(ht,A,en)}let ge=!1;ht.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Le.state.version||ee.outputColorSpace!==Ft||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isBatchedMesh&&ee.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ee.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ee.instancingMorph===!1&&$.morphTexture!==null||ee.envMap!==wt||ht.fog===!0&&ee.fog!==bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ct.numPlanes||ee.numIntersection!==Ct.numIntersection)||ee.vertexAlphas!==qt||ee.vertexTangents!==ne||ee.morphTargets!==te||ee.morphNormals!==ve||ee.morphColors!==Ie||ee.toneMapping!==Qe||ee.morphTargetsCount!==Ce)&&(ge=!0):(ge=!0,ee.__version=ht.version);let mn=ee.currentProgram;ge===!0&&(mn=ci(ht,Q,$));let Jn=!1,we=!1,Ca=!1;const We=mn.getUniforms(),In=ee.uniforms;if(Lt.useProgram(mn.program)&&(Jn=!0,we=!0,Ca=!0),ht.id!==C&&(C=ht.id,we=!0),Jn||R!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(I,"projectionMatrix",A.projectionMatrix),We.setValue(I,"viewMatrix",A.matrixWorldInverse);const Nn=We.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,Mt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&We.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&We.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,we=!0,Ca=!0)}if($.isSkinnedMesh){We.setOptional(I,$,"bindMatrix"),We.setOptional(I,$,"bindMatrixInverse");const en=$.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),We.setValue(I,"boneTexture",en.boneTexture,le))}$.isBatchedMesh&&(We.setOptional(I,$,"batchingTexture"),We.setValue(I,"batchingTexture",$._matricesTexture,le),We.setOptional(I,$,"batchingIdTexture"),We.setValue(I,"batchingIdTexture",$._indirectTexture,le),We.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&We.setValue(I,"batchingColorTexture",$._colorsTexture,le));const ln=ct.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&At.update($,ct,mn),(we||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,We.setValue(I,"receiveShadow",$.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(In.envMap.value=wt,In.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(In.envMapIntensity.value=Q.environmentIntensity),we&&(We.setValue(I,"toneMappingExposure",D.toneMappingExposure),ee.needsLights&&Mc(In,Ca),bt&&ht.fog===!0&&Et.refreshFogUniforms(In,bt),Et.refreshMaterialUniforms(In,ht,j,K,x.state.transmissionRenderTarget[A.id]),mc.upload(I,gr(ee),In,le)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(mc.upload(I,gr(ee),In,le),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&We.setValue(I,"center",$.center),We.setValue(I,"modelViewMatrix",$.modelViewMatrix),We.setValue(I,"normalMatrix",$.normalMatrix),We.setValue(I,"modelMatrix",$.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const en=ht.uniformsGroups;for(let Nn=0,Qr=en.length;Nn<Qr;Nn++){const Oi=en[Nn];fe.update(Oi,mn),fe.bind(Oi,mn)}}return mn}function Mc(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Q,ct){const ht=Ht.get(A);ht.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=Q,Ht.get(A.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ct,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const ct=Ht.get(A);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0};const oo=I.createFramebuffer();this.setRenderTarget=function(A,Q=0,ct=0){P=A,G=Q,O=ct;let ht=!0,$=null,bt=!1,Pt=!1;if(A){const wt=Ht.get(A);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),ht=!1;else if(wt.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(wt.__hasExternalTextures)le.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(wt.__boundDepthTexture!==te){if(te!==null&&Ht.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const ne=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[Q])?$=ne[Q][ct]:$=ne[Q],bt=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?$=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?$=ne[ct]:$=ne,B.copy(A.viewport),J.copy(A.scissor),rt=A.scissorTest}else B.copy(Bt).multiplyScalar(j).floor(),J.copy(Zt).multiplyScalar(j).floor(),rt=oe;if(ct!==0&&($=oo),Lt.bindFramebuffer(I.FRAMEBUFFER,$)&&ht&&Lt.drawBuffers(A,$),Lt.viewport(B),Lt.scissor(J),Lt.setScissorTest(rt),bt){const wt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt.__webglTexture,ct)}else if(Pt){const wt=Q;for(let qt=0;qt<A.textures.length;qt++){const ne=Ht.get(A.textures[qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qt,ne.__webglTexture,ct,wt)}}else if(A!==null&&ct!==0){const wt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,ct)}C=-1},this.readRenderTargetPixels=function(A,Q,ct,ht,$,bt,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const qt=A.textures[Ft],ne=qt.format,te=qt.type;if(!Jt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-ht&&ct>=0&&ct<=A.height-$&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(Q,ct,ht,$,Kt.convert(ne),Kt.convert(te),bt))}finally{const qt=P!==null?Ht.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,Q,ct,ht,$,bt,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt)if(Q>=0&&Q<=A.width-ht&&ct>=0&&ct<=A.height-$){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);const qt=A.textures[Ft],ne=qt.format,te=qt.type;if(!Jt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(Q,ct,ht,$,Kt.convert(ne),Kt.convert(te),0);const Ie=P!==null?Ht.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Ie);const Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wE(I,Qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(ve),I.deleteSync(Qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,ct=0){const ht=Math.pow(2,-ct),$=Math.floor(A.image.width*ht),bt=Math.floor(A.image.height*ht),Pt=Q!==null?Q.x:0,Ft=Q!==null?Q.y:0;le.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ct,0,0,Pt,Ft,$,bt),Lt.unbindTexture()};const _r=I.createFramebuffer(),Ec=I.createFramebuffer();this.copyTextureToTexture=function(A,Q,ct=null,ht=null,$=0,bt=null){bt===null&&($!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=$,$=0):bt=0);let Pt,Ft,wt,qt,ne,te,ve,Ie,Qe;const Ne=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(ct!==null)Pt=ct.max.x-ct.min.x,Ft=ct.max.y-ct.min.y,wt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,ne=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const ln=Math.pow(2,-$);Pt=Math.floor(Ne.width*ln),Ft=Math.floor(Ne.height*ln),A.isDataArrayTexture?wt=Ne.depth:A.isData3DTexture?wt=Math.floor(Ne.depth*ln):wt=1,qt=0,ne=0,te=0}ht!==null?(ve=ht.x,Ie=ht.y,Qe=ht.z):(ve=0,Ie=0,Qe=0);const Ce=Kt.convert(Q.format),ee=Kt.convert(Q.type);let Le;Q.isData3DTexture?(le.setTexture3D(Q,0),Le=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(le.setTexture2DArray(Q,0),Le=I.TEXTURE_2D_ARRAY):(le.setTexture2D(Q,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),we=I.getParameter(I.UNPACK_SKIP_ROWS),Ca=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const We=A.isDataArrayTexture||A.isData3DTexture,In=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),en=Ht.get(Q),Nn=Ht.get(ln.__renderTarget),Qr=Ht.get(en.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Oi=0;Oi<wt;Oi++)We&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,$,te+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(Q).__webglTexture,bt,Qe+Oi)),I.blitFramebuffer(qt,ne,Pt,Ft,ve,Ie,Pt,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),en=Ht.get(Q);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,_r),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ec);for(let Nn=0;Nn<wt;Nn++)We?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,$,te+Nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,$),In?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,bt,Qe+Nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,bt),$!==0?I.blitFramebuffer(qt,ne,Pt,Ft,ve,Ie,Pt,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):In?I.copyTexSubImage3D(Le,bt,ve,Ie,Qe+Nn,qt,ne,Pt,Ft):I.copyTexSubImage2D(Le,bt,ve,Ie,qt,ne,Pt,Ft);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Le,bt,ve,Ie,Qe,Pt,Ft,wt,Ce,ee,Ne.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,bt,ve,Ie,Qe,Pt,Ft,wt,Ce,Ne.data):I.texSubImage3D(Le,bt,ve,Ie,Qe,Pt,Ft,wt,Ce,ee,Ne):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,ve,Ie,Pt,Ft,Ce,ee,Ne.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,ve,Ie,Ne.width,Ne.height,Ce,Ne.data):I.texSubImage2D(I.TEXTURE_2D,bt,ve,Ie,Pt,Ft,Ce,ee,Ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ca),bt===0&&Q.generateMipmaps&&I.generateMipmap(Le),Lt.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){G=0,O=0,P=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ue._getUnpackColorSpace()}}class a2 extends mT{constructor(e){super(e),this.type=ba}parse(e){const h=function(P,C){switch(P){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},m=function(P,C,R){C=C||1024;let J=P.pos,rt=-1,ut=0,nt="",F=String.fromCharCode.apply(null,new Uint16Array(P.subarray(J,J+128)));for(;0>(rt=F.indexOf(`
`))&&ut<C&&J<P.byteLength;)nt+=F,ut+=F.length,J+=128,F+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(J,J+128)));return-1<rt?(P.pos+=ut+rt+1,nt+F.slice(0,rt)):!1},y=function(P){const C=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,J=/^\s*FORMAT=(\S+)\s*$/,rt=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,ut={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let nt,F;for((P.pos>=P.byteLength||!(nt=m(P)))&&h(1,"no header found"),(F=nt.match(C))||h(3,"bad initial token"),ut.valid|=1,ut.programtype=F[1],ut.string+=nt+`
`;nt=m(P),nt!==!1;){if(ut.string+=nt+`
`,nt.charAt(0)==="#"){ut.comments+=nt+`
`;continue}if((F=nt.match(R))&&(ut.gamma=parseFloat(F[1])),(F=nt.match(B))&&(ut.exposure=parseFloat(F[1])),(F=nt.match(J))&&(ut.valid|=2,ut.format=F[1]),(F=nt.match(rt))&&(ut.valid|=4,ut.height=parseInt(F[1],10),ut.width=parseInt(F[2],10)),ut.valid&2&&ut.valid&4)break}return ut.valid&2||h(3,"missing format specifier"),ut.valid&4||h(3,"missing image size specifier"),ut},M=function(P,C,R){const B=C;if(B<8||B>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);B!==(P[2]<<8|P[3])&&h(3,"wrong scanline width");const J=new Uint8Array(4*C*R);J.length||h(4,"unable to allocate buffer space");let rt=0,ut=0;const nt=4*B,F=new Uint8Array(4),K=new Uint8Array(nt);let j=R;for(;j>0&&ut<P.byteLength;){ut+4>P.byteLength&&h(1),F[0]=P[ut++],F[1]=P[ut++],F[2]=P[ut++],F[3]=P[ut++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=B)&&h(3,"bad rgbe scanline format");let vt=0,yt;for(;vt<nt&&ut<P.byteLength;){yt=P[ut++];const Zt=yt>128;if(Zt&&(yt-=128),(yt===0||vt+yt>nt)&&h(3,"bad scanline data"),Zt){const oe=P[ut++];for(let H=0;H<yt;H++)K[vt++]=oe}else K.set(P.subarray(ut,ut+yt),vt),vt+=yt,ut+=yt}const Bt=B;for(let Zt=0;Zt<Bt;Zt++){let oe=0;J[rt]=K[Zt+oe],oe+=B,J[rt+1]=K[Zt+oe],oe+=B,J[rt+2]=K[Zt+oe],oe+=B,J[rt+3]=K[Zt+oe],rt+=4}j--}return J},b=function(P,C,R,B){const J=P[C+3],rt=Math.pow(2,J-128)/255;R[B+0]=P[C+0]*rt,R[B+1]=P[C+1]*rt,R[B+2]=P[C+2]*rt,R[B+3]=1},w=function(P,C,R,B){const J=P[C+3],rt=Math.pow(2,J-128)/255;R[B+0]=Qu.toHalfFloat(Math.min(P[C+0]*rt,65504)),R[B+1]=Qu.toHalfFloat(Math.min(P[C+1]*rt,65504)),R[B+2]=Qu.toHalfFloat(Math.min(P[C+2]*rt,65504)),R[B+3]=Qu.toHalfFloat(1)},S=new Uint8Array(e);S.pos=0;const x=y(S),L=x.width,z=x.height,D=M(S.subarray(S.pos),L,z);let X,G,O;switch(this.type){case Kn:O=D.length/4;const P=new Float32Array(O*4);for(let R=0;R<O;R++)b(D,R*4,P,R*4);X=P,G=Kn;break;case ba:O=D.length/4;const C=new Uint16Array(O*4);for(let R=0;R<O;R++)w(D,R*4,C,R*4);X=C,G=ba;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:L,height:z,data:X,header:x.string,gamma:x.gamma,exposure:x.exposure,type:G}}setDataType(e){return this.type=e,this}load(e,a,s,u){function f(h,d){switch(h.type){case Kn:case ba:h.colorSpace=Zr,h.minFilter=wn,h.magFilter=wn,h.generateMipmaps=!1,h.flipY=!0;break}a&&a(h,d)}return super.load(e,f,s,u)}}class r2 extends a2{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const rl=()=>({low:0,mid:0,high:0,rms:0,dominant:0});function s2(o,e,a,s){let u=0;for(const v of e)u+=v*v;const f=Math.sqrt(u/Math.max(1,e.length));if(f<1e-4)return rl();const h=[0,0,0];let d=-1/0,g=0;for(let v=1;v<o.length;v++){const m=v*a/s;if(m<20||m>2e4)continue;const y=o[v];Number.isFinite(y)&&(h[m<250?0:m<2e3?1:2]+=10**(y/10),y>d&&(d=y,g=v))}const p=h.map(v=>Math.min(1,Math.sqrt(v)*4.8));return{low:p[0],mid:p[1],high:p[2],rms:f,dominant:g*a/s}}function o2(o,e){const a=Math.tanh((o.low-o.high)*e),s=Math.exp(a*.15),u=Math.exp(-a*.025);return{x:s,y:u,z:1/(s*u),flow:Math.tanh((o.low*.65+o.mid*.85+o.high*.5)*e*2.4),detail:Math.tanh(o.high*e*2)}}function Lx(o,e){let a=0;for(let s=0;s<e.length;s+=3){const u=e[s]*3,f=e[s+1]*3,h=e[s+2]*3;a+=o[u]*(o[f+1]*o[h+2]-o[f+2]*o[h+1])+o[u+1]*(o[f+2]*o[h]-o[f]*o[h+2])+o[u+2]*(o[f]*o[h+1]-o[f+1]*o[h])}return Math.abs(a/6)}function l2(o,e,a,s,u,f,h){const d=o2(u,f),g=.008+d.flow*.46;for(let m=0;m<o.length;m+=3){const y=o[m],M=o[m+1],b=o[m+2],w=Math.sin(y*3.1+M*1.8+h*.82)*Math.cos(b*2.9-M*1.2-h*.58),S=Math.sin(y*5.4-b*3.2-h*.7)*Math.cos(M*4.1+b*2.3+h*.42),x=Math.sin(y*8.2+M*5.5+b*3.8+h*1.1)*Math.cos(b*6.1-M*3.7-h*.73),L=g*(w*.6+S*.4)+d.detail*.055*x;e[m]=y*(1+L)*d.x,e[m+1]=M*(1+L*.12)*d.y,e[m+2]=b*(1+L)*d.z}const p=Lx(e,a),v=Math.sqrt(s/Math.max(p,1e-12));for(let m=0;m<e.length;m+=3)e[m]*=v,e[m+2]*=v}const sl={color:"#ffffff",material:"metal",background:"light",sensitivity:1.2,movement:.45,smoothing:.65};function u2(o){const s=new Float32Array(2097152);for(let d=0;d<512;d++)for(let g=0;g<1024;g++){const p=g/1024,m=d/512+.055*Math.sin(p*Math.PI*2)+.025*Math.sin(p*Math.PI*4+.7),y=(S,x)=>Math.exp(-(((m-S)/x)**2));let M=(.3+1.4*y(.76,.24)+.85*y(.25,.085))*(1-.998*y(.49,.09));const b=Math.exp(-(((p-.22)/.025)**2))+Math.exp(-(((p-.74)/.05)**2));M+=b*1.7*y(.6,.3);const w=(d*1024+g)*4;s[w]=s[w+1]=s[w+2]=Math.max(.008,M),s[w+3]=1}const u=new bx(s,1024,512,Mi,Kn);o.extensions.has("OES_texture_float_linear")&&(u.minFilter=wn,u.magFilter=wn),u.mapping=ol,u.needsUpdate=!0;const f=new Mp(o),h=f.fromEquirectangular(u);return u.dispose(),f.dispose(),h}function c2({engine:o,settings:e}){const a=Se.useRef(null),s=Se.useRef(e),[u,f]=Se.useState("");return s.current=e,Se.useEffect(()=>{const h=a.current;let d;try{d=new i2({antialias:!0,alpha:!0})}catch{f("No se ha podido iniciar la esfera 3D. Activa la aceleración gráfica de tu navegador y recarga la página.");return}d.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),d.setClearColor(0,0),d.toneMapping=ix,d.toneMappingExposure=1.05,d.domElement.setAttribute("aria-label","Esfera 3D reactiva al audio"),d.domElement.setAttribute("role","img"),h.appendChild(d.domElement);const g=new aT,p=u2(d);g.environment=p.texture;let v=!1,m;new r2().setDataType(Kn).load("./environment/venice-sunset-2k.hdr",nt=>{if(v){nt.dispose();return}const F=nt.image.data;for(let K=0;K<F.length;K+=4){const j=F[K]*.2126+F[K+1]*.7152+F[K+2]*.0722;for(let vt=0;vt<3;vt++)F[K+vt]=Math.pow(Math.max(0,j*.7+F[K+vt]*.3),1.15)}nt.needsUpdate=!0,nt.mapping=ol,m=nt,g.environment=nt,g.environmentRotation.set(0,1.7,0)});const y=new Ip(-2,2,2,-2,.1,30);y.position.set(0,0,6);const M=new zp(1,192,128),b=M.attributes.position,w=new Float32Array(b.array),S=M.index.array,x=Lx(w,S),L=new lT({color:"#ffffff",metalness:1,roughness:.018,envMapIntensity:1}),z=new Wi(M,L);g.add(z);const D=new xT(16777215,2);D.position.set(-3,4,4),g.add(D);const X=()=>{const{width:nt,height:F}=h.getBoundingClientRect();d.setSize(nt,F);const K=nt/Math.max(F,1),j=1.55;y.left=-j*Math.max(K,1),y.right=-y.left,y.top=j*Math.max(1/K,1),y.bottom=-y.top,y.updateProjectionMatrix()},G=new ResizeObserver(X);G.observe(h),X();const O=window.matchMedia("(prefers-reduced-motion: reduce)");let P=0,C=0,R=performance.now(),B=!document.hidden;const J=()=>{B=!document.hidden,R=performance.now()};document.addEventListener("visibilitychange",J);const rt=nt=>{nt.preventDefault(),f("Se ha interrumpido la aceleración gráfica. Recarga la página para recuperar la esfera.")};d.domElement.addEventListener("webglcontextlost",rt);const ut=nt=>{P=requestAnimationFrame(ut);const F=Math.min((nt-R)/1e3,.05);if(R=nt,!B)return;const K=s.current,j=o.sample(F,K.smoothing);C+=F*K.movement*(1.6+j.low*2.5+j.mid*2)*(O.matches?.15:1),l2(w,b.array,S,x,j,K.sensitivity,C),b.needsUpdate=!0,M.computeVertexNormals(),z.rotation.y=C*.06,L.color.set(K.color),L.wireframe=K.material==="wire",L.metalness=K.material==="metal"?1:K.material==="pearl"?.18:0,L.roughness=K.material==="metal"?.018:.38,L.envMapIntensity=K.material==="metal"?1:1.3,d.render(g,y)};return P=requestAnimationFrame(ut),()=>{v=!0,m?.dispose(),cancelAnimationFrame(P),G.disconnect(),document.removeEventListener("visibilitychange",J),d.domElement.removeEventListener("webglcontextlost",rt),M.dispose(),L.dispose(),p.dispose(),d.dispose(),d.domElement.remove()}},[o]),V.jsx("div",{className:"orb-render",ref:a,children:u&&V.jsx("div",{className:"graphics-error",role:"alert",children:u})})}class f2{element=new Audio;context;analyser;gain;frequency=new Float32Array(2048);signal=new Float32Array(4096);objectUrl;volume=.65;revision=0;levels=rl();constructor(){this.element.preload="metadata"}async initialize(){this.context||(this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=4096,this.analyser.smoothingTimeConstant=0,this.gain=this.context.createGain(),this.gain.gain.value=this.volume,this.context.createMediaElementSource(this.element).connect(this.analyser),this.analyser.connect(this.gain).connect(this.context.destination)),this.context.state!=="running"&&await this.context.resume()}load(e){this.revision++,this.element.pause(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.objectUrl=typeof e=="string"?void 0:URL.createObjectURL(e),this.element.src=typeof e=="string"?e:this.objectUrl,this.levels=rl(),this.element.load()}async play(){const e=this.revision;if(await this.initialize(),e===this.revision)try{await this.element.play()}catch(a){if(e===this.revision&&!(a instanceof DOMException&&a.name==="AbortError"))throw a}}pause(){this.element.pause()}setVolume(e){this.volume=e,this.gain&&this.context&&this.gain.gain.setTargetAtTime(e,this.context.currentTime,.025)}sample(e,a){let s=rl();this.analyser&&this.context&&!this.element.paused&&!this.element.ended&&(this.analyser.getFloatFrequencyData(this.frequency),this.analyser.getFloatTimeDomainData(this.signal),s=s2(this.frequency,this.signal,this.context.sampleRate,this.analyser.fftSize));for(const u of["low","mid","high","rms"]){const f=s[u]>this.levels[u]?.008+a*.035:.055+a*.15;this.levels[u]+=(s[u]-this.levels[u])*(1-Math.exp(-e/f))}return this.levels.dominant=s.dominant,this.levels}dispose(){this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.context?.close()}}function h2(){return V.jsxs(V.Fragment,{children:[V.jsxs("a",{className:"discover-project",href:"#proyecto",children:["Descubre el proyecto ",V.jsx(CM,{size:15})]}),V.jsx("div",{className:"hero-spacer","aria-hidden":"true"}),V.jsxs("main",{className:"project-story",id:"proyecto","aria-label":"El proyecto ORBIS",children:[V.jsxs("section",{className:"story-section story-intro","aria-labelledby":"story-title",children:[V.jsx("span",{className:"story-eyebrow",children:"01 / La idea"}),V.jsxs("h2",{id:"story-title",children:["Otra forma de",V.jsx("br",{}),V.jsx("em",{children:"escuchar."})]}),V.jsx("p",{className:"story-lead",children:"¿Y si una canción pudiera convertirse en un objeto que cambia delante de ti?"}),V.jsx("p",{children:"ORBIS nace de esa pregunta: traducir el sonido en una forma orgánica. Una esfera que permite explorar la relación entre lo que escuchamos y lo que vemos, conectando música, programación y diseño tridimensional."}),V.jsxs("div",{className:"story-tags",children:[V.jsx("span",{children:"Audio reactivo"}),V.jsx("span",{children:"Geometría 3D"}),V.jsx("span",{children:"Diseño interactivo"})]})]}),V.jsxs("section",{className:"story-section","aria-labelledby":"origin-title",children:[V.jsx("span",{className:"story-eyebrow",children:"02 / El origen"}),V.jsxs("h2",{id:"origin-title",children:["Ver una mezcla.",V.jsx("br",{}),V.jsx("em",{children:"Explorar su equilibrio."})]}),V.jsx("p",{children:"El proyecto original se planteó como una herramienta de visualización por frecuencias, con posibles aplicaciones en educación, performance y mezcla musical. La intención era hacer visible el comportamiento del audio a través de la geometría."}),V.jsx("p",{children:"Nació como proyecto final de Desarrollo de Aplicaciones Multiplataforma, en el curso 2024/2025. El repositorio documenta un prototipo alpha, su investigación técnica y sus conceptos visuales."}),V.jsxs("a",{className:"story-link",href:"https://github.com/CODIGOAFRX/ORBIS#readme",target:"_blank",rel:"noreferrer",children:["Leer la documentación original ",V.jsx(Gu,{size:16})]})]}),V.jsxs("section",{className:"story-section","aria-labelledby":"system-title",children:[V.jsx("span",{className:"story-eyebrow",children:"03 / Dentro del sistema"}),V.jsxs("h2",{id:"system-title",children:["Del audio",V.jsx("br",{}),V.jsx("em",{children:"a la geometría."})]}),V.jsxs("ol",{className:"story-pipeline",children:[V.jsxs("li",{children:[V.jsx("span",{children:"01"}),V.jsxs("div",{children:[V.jsx("h3",{children:"Escuchar"}),V.jsx("p",{children:"Python recibe el audio y obtiene su energía, frecuencia dominante y distribución por bandas mediante análisis espectral."})]})]}),V.jsxs("li",{children:[V.jsx("span",{children:"02"}),V.jsxs("div",{children:[V.jsx("h3",{children:"Traducir"}),V.jsx("p",{children:"Esos parámetros se convierten en datos JSON. El enlace con Blender calcula balances entre graves, medios y agudos y actualiza los controles de la escena."})]})]}),V.jsxs("li",{children:[V.jsx("span",{children:"03"}),V.jsxs("div",{children:[V.jsx("h3",{children:"Dar forma"}),V.jsx("p",{children:"Geometry Nodes transforma los datos en cambios de la malla. El reto es conectar dos lenguajes: una señal que evoluciona en el tiempo y un objeto que responde a ella."})]})]})]}),V.jsxs("div",{className:"story-tags",children:[V.jsx("span",{children:"Python"}),V.jsx("span",{children:"FFT / RMS"}),V.jsx("span",{children:"JSON"}),V.jsx("span",{children:"Blender"}),V.jsx("span",{children:"Geometry Nodes"})]}),V.jsxs("a",{className:"story-link",href:"https://github.com/CODIGOAFRX/ORBIS/blob/main/orbis_live_blender/orbis_live_link.py",target:"_blank",rel:"noreferrer",children:["Explorar el enlace con Blender ",V.jsx(Gu,{size:16})]})]}),V.jsxs("section",{className:"story-section","aria-labelledby":"web-title",children:[V.jsx("span",{className:"story-eyebrow",children:"04 / ORBIS 2"}),V.jsxs("h2",{id:"web-title",children:["La experiencia,",V.jsx("br",{}),V.jsx("em",{children:"ahora en tu navegador."})]}),V.jsx("p",{className:"story-lead",children:"La esfera que te acompaña es una reinterpretación web del proyecto."}),V.jsx("p",{children:"Esta versión explora su lado más expresivo: una superficie cromada que se deforma con tu música. Puedes cargar un archivo, probar la demo y ajustar el material o la respuesta mientras recorres la página."}),V.jsx("p",{children:"React organiza la interfaz, Web Audio analiza la señal y Three.js dibuja la malla en tiempo real. El audio se procesa en tu dispositivo. La deformación conserva el volumen de la figura y combina las bandas del sonido con ondas suaves."}),V.jsx("p",{children:"El resultado es una experiencia audiovisual para explorar y disfrutar. Sus medidores son orientativos: esta adaptación no evalúa la calidad de una mezcla."}),V.jsxs("div",{className:"story-tags",children:[V.jsx("span",{children:"React"}),V.jsx("span",{children:"TypeScript"}),V.jsx("span",{children:"Three.js"}),V.jsx("span",{children:"Web Audio"})]})]}),V.jsxs("section",{className:"story-section","aria-labelledby":"process-title",children:[V.jsx("span",{className:"story-eyebrow",children:"05 / Diseño y desarrollo"}),V.jsxs("h2",{id:"process-title",children:["Una idea que se",V.jsx("br",{}),V.jsx("em",{children:"construye probando."})]}),V.jsx("p",{children:"ORBIS reúne análisis de sonido, integración entre herramientas, programación gráfica y diseño de interacción. Pasar de un prototipo de escritorio a una experiencia web permite compartir esa exploración sin instalar el entorno original."}),V.jsx("p",{children:"La adaptación web se ha desarrollado con asistencia de inteligencia artificial para implementar, revisar y probar distintas soluciones. La dirección creativa, la selección del comportamiento visual y las decisiones de producto forman parte de un proceso de iteración guiado por Pedro Gómez."}),V.jsx("p",{children:"El objetivo de esta página es mostrar tanto el resultado como el recorrido: convertir una intuición visual en un sistema que puedes tocar, escuchar y poner a prueba."})]}),V.jsxs("footer",{className:"story-section story-credits",children:[V.jsx("span",{className:"story-eyebrow",children:"06 / Créditos y código"}),V.jsxs("h2",{children:["Detrás de",V.jsx("br",{}),V.jsx("em",{children:"la esfera."})]}),V.jsxs("dl",{children:[V.jsxs("div",{children:[V.jsx("dt",{children:"Proyecto original"}),V.jsxs("dd",{children:["Pedro Jesús Gómez Pérez",V.jsx("br",{}),"David Erik García Arenas"]})]}),V.jsxs("div",{children:[V.jsx("dt",{children:"Formación"}),V.jsxs("dd",{children:["DAM · MEDAC Nevada",V.jsx("br",{}),"Curso 2024/2025"]})]}),V.jsxs("div",{children:[V.jsx("dt",{children:"Adaptación web y dirección"}),V.jsx("dd",{children:"Pedro Gómez"})]})]}),V.jsxs("div",{className:"story-end-links",children:[V.jsxs("a",{className:"story-link",href:"https://github.com/CODIGOAFRX/ORBIS",target:"_blank",rel:"noreferrer",children:["GitHub · ORBIS original ",V.jsx(Gu,{size:16})]}),V.jsxs("a",{className:"story-link",href:"https://github.com/CODIGOAFRX/portfolio/tree/main/proyecto/orbis-2/source",target:"_blank",rel:"noreferrer",children:["Código de esta versión ",V.jsx(Gu,{size:16})]}),V.jsxs("a",{className:"story-link",href:"#inicio",children:["Volver al visualizador ",V.jsx(DM,{size:16})]})]})]})]})]})}function d2(o,e){Se.useEffect(()=>{let a=0;const s=()=>{if(a=0,!o.current||!e.current)return;const f=document.documentElement.clientWidth,h=window.innerHeight,d=f<=700,g=h<=600&&!d,p=d?125:g?12:35,v=d?134:g?65:79,m=document.fullscreenElement?0:Math.min(1,window.scrollY/(h*.8)),y=m*m*(3-2*m),M=d?120:Math.min(470,f*.34,h*.55),b=d?0:24,w=h-v-M-(d?4:24),S=(x,L)=>x+(L-x)*y;Object.assign(e.current.style,{left:`${S(0,f-M-b)}px`,top:`${S(p,w)}px`,width:`${S(f,M)}px`,height:`${S(h-p-v,M)}px`}),o.current.dataset.reading=m>.85?"true":"false"},u=()=>{a||(a=requestAnimationFrame(s))};return s(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),document.addEventListener("fullscreenchange",u),()=>{cancelAnimationFrame(a),window.removeEventListener("scroll",u),window.removeEventListener("resize",u),document.removeEventListener("fullscreenchange",u)}},[o,e])}const p2=[{color:"#ffffff",name:"Cromo"},{color:"#dba58e",name:"Cobre"},{color:"#8ba9d8",name:"Azul"},{color:"#b6a0db",name:"Violeta"},{color:"#99c4ad",name:"Jade"}],m2=[{name:"Cromo",settings:sl},{name:"Nácar",settings:{...sl,material:"pearl",color:"#ffffff"}},{name:"Trama",settings:{...sl,material:"wire",color:"#526477"}}],$v=o=>`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`;function Od({label:o,value:e,min:a=0,max:s=1,step:u=.01,text:f,onChange:h}){return V.jsxs("label",{className:"slider-field",children:[V.jsxs("span",{children:[o,V.jsx("output",{children:f})]}),V.jsx("input",{"aria-label":o,type:"range",min:a,max:s,step:u,value:e,onChange:d=>h(Number(d.target.value))})]})}function g2(){const[o]=Se.useState(()=>new f2),[e,a]=Se.useState({...sl}),[s,u]=Se.useState("Cromo"),[f,h]=Se.useState(""),[d,g]=Se.useState(!1),[p,v]=Se.useState(!1),[m,y]=Se.useState(0),[M,b]=Se.useState(0),[w,S]=Se.useState(.65),[x,L]=Se.useState(!1),[z,D]=Se.useState(rl()),[X,G]=Se.useState(""),[O,P]=Se.useState(!1),[C,R]=Se.useState(!1),[B,J]=Se.useState(!1),[rt,ut]=Se.useState(!1),nt=Se.useRef(null),F=Se.useRef(null),K=Se.useRef(null),j=Se.useRef(null),vt=Se.useRef(null),yt=Se.useRef(.65),Bt=Se.useRef(null);d2(F,Bt),Se.useEffect(()=>{const tt=o.element,xt=()=>{v(!1),y(Number.isFinite(tt.duration)?tt.duration:0)},Vt=()=>{v(!1),g(!1),y(0),P(!0),G("No se ha podido reproducir este archivo. Prueba con un MP3 o WAV válido.")},I=()=>g(!0),Re=()=>g(!1);tt.addEventListener("loadedmetadata",xt),tt.addEventListener("error",Vt),tt.addEventListener("playing",I),tt.addEventListener("pause",Re),tt.addEventListener("ended",Re);const ae=setInterval(()=>{b(tt.currentTime||0),D({...o.levels})},100);return()=>{clearInterval(ae),tt.removeEventListener("loadedmetadata",xt),tt.removeEventListener("error",Vt),tt.removeEventListener("playing",I),tt.removeEventListener("pause",Re),tt.removeEventListener("ended",Re),o.dispose()}},[o]),Se.useEffect(()=>{const tt=()=>R(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",tt),()=>document.removeEventListener("fullscreenchange",tt)},[]),Se.useEffect(()=>{rt&&vt.current?.focus()},[rt]);const Zt=()=>{ut(!1),j.current?.focus()},oe=async()=>{if(!(!f||p||O)){if(!o.element.paused){o.pause();return}try{await o.play()}catch{G("El navegador no ha iniciado el audio. Vuelve a intentarlo o carga otro archivo.")}}},H=async()=>{try{document.fullscreenElement?await document.exitFullscreen():F.current?.requestFullscreen?await F.current.requestFullscreen():G("Este navegador no admite pantalla completa. El lienzo ya ocupa toda la ventana.")}catch{G("No se ha podido activar la pantalla completa. Puedes seguir usando el lienzo en esta ventana.")}};Se.useEffect(()=>{const tt=xt=>{if(!K.current?.open){if(xt.key==="Escape"&&rt){Zt();return}xt.ctrlKey||xt.metaKey||xt.altKey||xt.target.closest("button,input,select,a,textarea")||(xt.code==="Space"&&(xt.preventDefault(),oe()),xt.key.toLowerCase()==="f"&&(xt.preventDefault(),H()))}};return window.addEventListener("keydown",tt),()=>window.removeEventListener("keydown",tt)});function dt(tt,xt){G(""),P(!1),v(!0),g(!1),b(0),y(0),h(xt),o.load(tt)}function et(tt){if(tt){if(!tt.type.startsWith("audio/")&&!/\.(mp3|wav|ogg|m4a|aac|flac|aif|aiff|opus|webm)$/i.test(tt.name)){G("Selecciona un archivo de audio: MP3, WAV, FLAC, OGG o M4A.");return}dt(tt,tt.name)}}const ot=()=>dt("./demo.wav","Órbita nocturna · demo"),Mt=tt=>{a(xt=>({...xt,...tt})),u("Personalizado")},Dt=tt=>{S(tt),o.setVolume(tt)};return V.jsxs("div",{ref:F,id:"inicio",className:`app theme-${e.background}`,onDragOver:tt=>{tt.preventDefault(),tt.dataTransfer.types.includes("Files")&&J(!0)},onDragLeave:tt=>{tt.currentTarget.contains(tt.relatedTarget)||J(!1)},onDrop:tt=>{tt.preventDefault(),J(!1),et(tt.dataTransfer.files[0])},children:[V.jsx("section",{ref:Bt,className:"canvas-stage","aria-label":"Visualizador",children:V.jsx(c2,{engine:o,settings:e})}),V.jsx(h2,{}),V.jsxs("header",{className:"identity",children:[V.jsxs("h1",{children:["ORBIS",V.jsx("span",{children:"2"})]}),V.jsx("p",{children:"El sonido toma forma."}),V.jsxs("div",{className:"file-actions",children:[V.jsxs("button",{onClick:()=>nt.current?.click(),children:[V.jsx(ev,{size:14}),"Subir archivo"]}),V.jsx("span",{children:"/"}),V.jsx("button",{onClick:ot,children:"Probar demo"})]})]}),V.jsxs("a",{className:"back-link",href:"https://www.pedrogomez.dev/",children:[V.jsx(wM,{size:14}),V.jsx("span",{children:"Portfolio"})]}),V.jsxs("div",{className:"session-status",children:[V.jsx("i",{className:d?"active":""}),p?"Preparando audio":d?"Reproduciendo":f?"En pausa":"Escucha. Observa."]}),rt&&V.jsxs("section",{id:"settings",className:"settings-sheet","aria-label":"Ajustes",children:[V.jsxs("div",{className:"sheet-heading",children:[V.jsx("h2",{children:"Ajustes"}),V.jsx("span",{children:"Hazlo tuyo."}),V.jsx("button",{ref:vt,className:"icon-button",onClick:Zt,"aria-label":"Cerrar ajustes",children:V.jsx(ed,{size:18})})]}),V.jsxs("div",{className:"settings-columns",children:[V.jsxs("div",{className:"settings-group",children:[V.jsx("h3",{children:"Apariencia"}),V.jsx("div",{className:"presets",children:m2.map(tt=>V.jsx("button",{"aria-label":`Estilo ${tt.name}`,"aria-pressed":s===tt.name,onClick:()=>{a({...tt.settings,background:e.background}),u(tt.name)},children:tt.name},tt.name))}),V.jsxs("label",{className:"select-field",children:["Material",V.jsxs("select",{"aria-label":"Material",value:e.material,onChange:tt=>Mt({material:tt.target.value}),children:[V.jsx("option",{value:"metal",children:"Cromado"}),V.jsx("option",{value:"pearl",children:"Nácar"}),V.jsx("option",{value:"wire",children:"Malla"})]})]}),V.jsxs("div",{className:"color-field",children:[V.jsx("span",{children:"Color"}),V.jsxs("div",{className:"colors",children:[p2.map(tt=>V.jsx("button",{title:tt.name,"aria-label":`Color ${tt.name}`,"aria-pressed":e.color===tt.color,style:{background:tt.color},onClick:()=>Mt({color:tt.color}),children:e.color===tt.color&&V.jsx(UM,{size:12})},tt.name)),V.jsx("input",{type:"color","aria-label":"Color personalizado",value:e.color,onChange:tt=>Mt({color:tt.target.value})})]})]}),V.jsxs("label",{className:"select-field",children:["Fondo",V.jsxs("select",{"aria-label":"Fondo",value:e.background,onChange:tt=>Mt({background:tt.target.value}),children:[V.jsx("option",{value:"light",children:"Blanco"}),V.jsx("option",{value:"dark",children:"Oscuro"})]})]})]}),V.jsxs("div",{className:"settings-group",children:[V.jsx("h3",{children:"Movimiento"}),V.jsx(Od,{label:"Sensibilidad",min:.2,max:3,step:.1,value:e.sensitivity,text:`${e.sensitivity.toFixed(1)}×`,onChange:tt=>Mt({sensitivity:tt})}),V.jsx(Od,{label:"Fluidez",value:e.movement,text:`${Math.round(e.movement*100)}%`,onChange:tt=>Mt({movement:tt})}),V.jsx(Od,{label:"Suavizado",value:e.smoothing,text:`${Math.round(e.smoothing*100)}%`,onChange:tt=>Mt({smoothing:tt})})]}),V.jsxs("div",{className:"settings-group",children:[V.jsx("h3",{children:"Sonido"}),V.jsx("div",{className:"bands",children:[{key:"low",name:"Graves"},{key:"mid",name:"Medios"},{key:"high",name:"Agudos"}].map(tt=>V.jsxs("div",{className:"band",children:[V.jsx("span",{children:tt.name}),V.jsx("div",{className:"meter",role:"meter","aria-label":tt.name,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(z[tt.key]*100),children:V.jsx("i",{style:{width:`${z[tt.key]*100}%`}})})]},tt.key))}),V.jsxs("p",{className:"quiet-note",children:["Tu audio se queda en tu dispositivo.",V.jsx("br",{}),"La forma cambia. El volumen se conserva."]}),V.jsxs("button",{className:"reset-button",onClick:()=>{a({...sl}),u("Cromo")},children:[V.jsx(tv,{size:13}),"Restablecer ajustes"]})]})]})]}),V.jsxs("footer",{className:"player",children:[V.jsxs("div",{className:"track-info",children:[V.jsx("strong",{title:f,children:f||"Sin archivo"}),V.jsx("span",{children:p?"Preparando…":f?"Audio local":"Sube una canción o prueba la demo"})]}),V.jsxs("div",{className:"transport",children:[V.jsx("button",{className:"play-button",disabled:!f||p||O,onClick:()=>{oe()},"aria-label":d?"Pausar":"Reproducir",children:d?V.jsx(zM,{size:17,fill:"currentColor"}):V.jsx(PM,{size:17,fill:"currentColor"})}),V.jsx("button",{className:"icon-button restart",disabled:!m,onClick:()=>{o.element.currentTime=0,b(0)},"aria-label":"Volver al inicio",children:V.jsx(tv,{size:16})}),V.jsx("span",{className:"time",children:$v(M)}),V.jsx("input",{className:"seek","aria-label":"Posición de reproducción",type:"range",min:"0",max:m||1,step:".1",value:Math.min(M,m||1),disabled:!m,onChange:tt=>{o.element.currentTime=Number(tt.target.value),b(Number(tt.target.value))}}),V.jsx("span",{className:"time",children:$v(m)})]}),V.jsxs("div",{className:"player-tools",children:[V.jsx("button",{className:"icon-button loop","aria-label":"Repetir pista","aria-pressed":x,onClick:()=>{o.element.loop=!x,L(!x)},children:V.jsx(IM,{size:17})}),V.jsxs("div",{className:"volume",children:[V.jsx("button",{className:"icon-button","aria-label":w?"Silenciar":"Activar sonido",onClick:()=>{w?(yt.current=w,Dt(0)):Dt(yt.current||.65)},children:w?V.jsx(FM,{size:17}):V.jsx(HM,{size:17})}),V.jsx("input",{"aria-label":"Volumen",type:"range",min:"0",max:"1",step:".01",value:w,onChange:tt=>Dt(Number(tt.target.value))})]}),V.jsx("span",{className:"tool-divider"}),V.jsxs("button",{ref:j,className:"settings-button","aria-expanded":rt,"aria-controls":"settings",onClick:()=>{rt?Zt():ut(!0)},children:[V.jsx(BM,{size:16}),V.jsx("span",{children:"Ajustes"})]}),V.jsx("button",{className:"icon-button help-button",onClick:()=>K.current?.showModal(),"aria-label":"Cómo se mueve",children:V.jsx(NM,{size:16})}),V.jsx("button",{className:"icon-button fullscreen",onClick:()=>{H()},"aria-label":C?"Salir de pantalla completa":"Pantalla completa",children:C?V.jsx(OM,{size:17}):V.jsx(LM,{size:17})})]})]}),V.jsx("input",{ref:nt,type:"file",accept:"audio/*,.mp3,.wav,.flac,.ogg,.m4a",hidden:!0,onChange:tt=>{et(tt.target.files?.[0]),tt.target.value=""}}),X&&V.jsxs("div",{className:"error-toast",role:"alert",children:[V.jsx("span",{children:X}),V.jsx("button",{className:"icon-button","aria-label":"Cerrar aviso",onClick:()=>G(""),children:V.jsx(ed,{size:17})})]}),B&&V.jsxs("div",{className:"drop-overlay",children:[V.jsx(ev,{size:32}),V.jsx("p",{children:"Suelta el audio."})]}),V.jsx("dialog",{ref:K,className:"help-modal","aria-labelledby":"help-title",onClick:tt=>{tt.target===K.current&&K.current.close()},children:V.jsxs("div",{className:"help-content",children:[V.jsx("button",{className:"icon-button",onClick:()=>K.current?.close(),"aria-label":"Cerrar explicación",children:V.jsx(ed,{size:18})}),V.jsx("h2",{id:"help-title",children:"Sonido en movimiento."}),V.jsx("p",{children:"Los graves expanden la esfera hacia los lados; los agudos la recogen. Los medios dibujan ondas que fluyen por su superficie. La altura cambia suavemente y el volumen de la figura se mantiene constante."}),V.jsx("p",{children:"En Ajustes puedes cambiar el material, el color, el fondo y la respuesta al sonido. Silenciar la escucha no detiene la visualización."}),V.jsx("p",{children:"Espacio: reproducir o pausar · F: pantalla completa · Esc: cerrar."}),V.jsxs("small",{children:["La compatibilidad de los formatos depende del navegador. La demo es una composición sintetizada. Los medidores son orientativos.",V.jsx("br",{}),V.jsx("br",{}),"Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García Arenas."]})]})})]})}TM.createRoot(document.getElementById("root")).render(V.jsx(g2,{}));
