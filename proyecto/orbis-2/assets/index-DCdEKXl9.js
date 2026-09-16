(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var qh={exports:{}},jo={};var Fv;function lM(){if(Fv)return jo;Fv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return jo.Fragment=n,jo.jsx=a,jo.jsxs=a,jo}var Hv;function uM(){return Hv||(Hv=1,qh.exports=lM()),qh.exports}var _t=uM(),Yh={exports:{}},Zo={},Wh={exports:{}},jh={};var Gv;function cM(){return Gv||(Gv=1,(function(o){function n(X,$){var W=X.length;X.push($);t:for(;0<W;){var xt=W-1>>>1,yt=X[xt];if(0<u(yt,$))X[xt]=$,X[W]=yt,W=xt;else break t}}function a(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var $=X[0],W=X.pop();if(W!==$){X[0]=W;t:for(var xt=0,yt=X.length,Ft=yt>>>1;xt<Ft;){var ae=2*(xt+1)-1,ve=X[ae],I=ae+1,ft=X[I];if(0>u(ve,W))I<yt&&0>u(ft,ve)?(X[xt]=ft,X[I]=W,xt=I):(X[xt]=ve,X[ae]=W,xt=ae);else if(I<yt&&0>u(ft,W))X[xt]=ft,X[I]=W,xt=I;else break t}}return $}function u(X,$){var W=X.sortIndex-$.sortIndex;return W!==0?W:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,p=null,S=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(X){for(var $=a(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=X)s(g),$.sortIndex=$.expirationTime,n(_,$);else break;$=a(g)}}function G(X){if(R=!1,D(X),!b)if(a(_)!==null)b=!0,B||(B=!0,at());else{var $=a(g);$!==null&&st(G,$.startTime-X)}}var B=!1,O=-1,k=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<k)}function V(){if(y=!1,B){var X=o.unstable_now();w=X;var $=!0;try{t:{b=!1,R&&(R=!1,P(O),O=-1),M=!0;var W=S;try{e:{for(D(X),p=a(_);p!==null&&!(p.expirationTime>X&&C());){var xt=p.callback;if(typeof xt=="function"){p.callback=null,S=p.priorityLevel;var yt=xt(p.expirationTime<=X);if(X=o.unstable_now(),typeof yt=="function"){p.callback=yt,D(X),$=!0;break e}p===a(_)&&s(_),D(X)}else s(_);p=a(_)}if(p!==null)$=!0;else{var Ft=a(g);Ft!==null&&st(G,Ft.startTime-X),$=!1}}break t}finally{p=null,S=W,M=!1}$=void 0}}finally{$?at():B=!1}}}var at;if(typeof z=="function")at=function(){z(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){x(V,0)};function st(X,$){O=x(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var W=S;S=$;try{return X()}finally{S=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var W=S;S=X;try{return $()}finally{S=W}},o.unstable_scheduleCallback=function(X,$,W){var xt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xt+W:xt):W=xt,X){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,X={id:v++,callback:$,priorityLevel:X,startTime:W,expirationTime:yt,sortIndex:-1},W>xt?(X.sortIndex=W,n(g,X),a(_)===null&&X===a(g)&&(R?(P(O),O=-1):R=!0,st(G,W-xt))):(X.sortIndex=yt,n(_,X),b||M||(b=!0,B||(B=!0,at()))),X},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(X){var $=S;return function(){var W=S;S=$;try{return X.apply(this,arguments)}finally{S=W}}}})(jh)),jh}var Vv;function fM(){return Vv||(Vv=1,Wh.exports=cM()),Wh.exports}var Zh={exports:{}},le={};var Xv;function hM(){if(Xv)return le;Xv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=M&&I[M]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function P(I,ft,Q){this.props=I,this.context=ft,this.refs=x,this.updater=Q||R}P.prototype.isReactComponent={},P.prototype.setState=function(I,ft){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ft,"setState")},P.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function z(){}z.prototype=P.prototype;function D(I,ft,Q){this.props=I,this.context=ft,this.refs=x,this.updater=Q||R}var G=D.prototype=new z;G.constructor=D,y(G,P.prototype),G.isPureReactComponent=!0;var B=Array.isArray;function O(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(I,ft,Q){var nt=Q.ref;return{$$typeof:o,type:I,key:ft,ref:nt!==void 0?nt:null,props:Q}}function V(I,ft){return C(I.type,ft,I.props)}function at(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ct(I){var ft={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Q){return ft[Q]})}var gt=/\/+/g;function st(I,ft){return typeof I=="object"&&I!==null&&I.key!=null?ct(""+I.key):ft.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(ft){I.status==="pending"&&(I.status="fulfilled",I.value=ft)},function(ft){I.status==="pending"&&(I.status="rejected",I.reason=ft)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function $(I,ft,Q,nt,Et){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(tt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case o:case n:St=!0;break;case v:return St=I._init,$(St(I._payload),ft,Q,nt,Et)}}if(St)return Et=Et(I),St=nt===""?"."+st(I,0):nt,B(Et)?(Q="",St!=null&&(Q=St.replace(gt,"$&/")+"/"),$(Et,ft,Q,"",function(L){return L})):Et!=null&&(at(Et)&&(Et=V(Et,Q+(Et.key==null||I&&I.key===Et.key?"":(""+Et.key).replace(gt,"$&/")+"/")+St)),ft.push(Et)),1;St=0;var Tt=nt===""?".":nt+":";if(B(I))for(var Vt=0;Vt<I.length;Vt++)nt=I[Vt],tt=Tt+st(nt,Vt),St+=$(nt,ft,Q,tt,Et);else if(Vt=b(I),typeof Vt=="function")for(I=Vt.call(I),Vt=0;!(nt=I.next()).done;)nt=nt.value,tt=Tt+st(nt,Vt++),St+=$(nt,ft,Q,tt,Et);else if(tt==="object"){if(typeof I.then=="function")return $(X(I),ft,Q,nt,Et);throw ft=String(I),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return St}function W(I,ft,Q){if(I==null)return I;var nt=[],Et=0;return $(I,nt,"","",function(tt){return ft.call(Q,tt,Et++)}),nt}function xt(I){if(I._status===-1){var ft=I._result,Q=ft();Q.then(function(nt){(I._status===0||I._status===-1)&&(I._status=1,I._result=nt,Q.status===void 0&&(Q.status="fulfilled",Q.value=nt))},function(nt){(I._status===0||I._status===-1)&&(I._status=2,I._result=nt,Q.status===void 0&&(Q.status="rejected",Q.reason=nt))}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var yt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ft(I){var ft=k.T,Q={};Q.types=ft!==null?ft.types:null,k.T=Q;try{var nt=I(),Et=k.S;Et!==null&&Et(Q,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(O,yt)}catch(tt){yt(tt)}finally{ft!==null&&Q.types!==null&&(ft.types=Q.types),k.T=ft}}function ae(I){var ft=k.T;if(ft!==null){var Q=ft.types;Q===null?ft.types=[I]:Q.indexOf(I)===-1&&Q.push(I)}else Ft(ae.bind(null,I))}var ve={map:W,forEach:function(I,ft,Q){W(I,function(){ft.apply(this,arguments)},Q)},count:function(I){var ft=0;return W(I,function(){ft++}),ft},toArray:function(I){return W(I,function(ft){return ft})||[]},only:function(I){if(!at(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=p,le.Children=ve,le.Component=P,le.Fragment=a,le.Profiler=u,le.PureComponent=D,le.StrictMode=s,le.Suspense=_,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return k.H.useMemoCache(I)}},le.addTransitionType=ae,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ft,Q){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var nt=y({},I.props),Et=I.key;if(ft!=null)for(tt in ft.key!==void 0&&(Et=""+ft.key),ft)!w.call(ft,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&ft.ref===void 0||(nt[tt]=ft[tt]);var tt=arguments.length-2;if(tt===1)nt.children=Q;else if(1<tt){for(var St=Array(tt),Tt=0;Tt<tt;Tt++)St[Tt]=arguments[Tt+2];nt.children=St}return C(I.type,Et,nt)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ft,Q){var nt,Et={},tt=null;if(ft!=null)for(nt in ft.key!==void 0&&(tt=""+ft.key),ft)w.call(ft,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(Et[nt]=ft[nt]);var St=arguments.length-2;if(St===1)Et.children=Q;else if(1<St){for(var Tt=Array(St),Vt=0;Vt<St;Vt++)Tt[Vt]=arguments[Vt+2];Et.children=Tt}if(I&&I.defaultProps)for(nt in St=I.defaultProps,St)Et[nt]===void 0&&(Et[nt]=St[nt]);return C(I,tt,Et)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=at,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:xt}},le.memo=function(I,ft){return{$$typeof:g,type:I,compare:ft===void 0?null:ft}},le.startTransition=Ft,le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(I){return k.H.use(I)},le.useActionState=function(I,ft,Q){return k.H.useActionState(I,ft,Q)},le.useCallback=function(I,ft){return k.H.useCallback(I,ft)},le.useContext=function(I){return k.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ft){return k.H.useDeferredValue(I,ft)},le.useEffect=function(I,ft){return k.H.useEffect(I,ft)},le.useEffectEvent=function(I){return k.H.useEffectEvent(I)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(I,ft,Q){return k.H.useImperativeHandle(I,ft,Q)},le.useInsertionEffect=function(I,ft){return k.H.useInsertionEffect(I,ft)},le.useLayoutEffect=function(I,ft){return k.H.useLayoutEffect(I,ft)},le.useMemo=function(I,ft){return k.H.useMemo(I,ft)},le.useOptimistic=function(I,ft){return k.H.useOptimistic(I,ft)},le.useReducer=function(I,ft,Q){return k.H.useReducer(I,ft,Q)},le.useRef=function(I){return k.H.useRef(I)},le.useState=function(I){return k.H.useState(I)},le.useSyncExternalStore=function(I,ft,Q){return k.H.useSyncExternalStore(I,ft,Q)},le.useTransition=function(){return k.H.useTransition()},le.version="19.3.0",le}var kv;function Sp(){return kv||(kv=1,Zh.exports=hM()),Zh.exports}var Kh={exports:{}},Cn={};var qv;function dM(){if(qv)return Cn;qv=1;var o=Sp();function n(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.browser=function(v){return{$$typeof:f,_reason:v}},Cn.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return d(v,p,null,S)},Cn.flushSync=function(v){var p=_.T,S=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=S,s.d.f()}},Cn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Cn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Cn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,M=g(S,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,R=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:R}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:R,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},Cn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,M=g(S,p.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=g(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},Cn.requestFormReset=function(v){s.d.r(v)},Cn.unstable_batchedUpdates=function(v,p){return v(p)},Cn.useFormState=function(v,p,S){return _.H.useFormState(v,p,S)},Cn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Cn.version="19.3.0",Cn}var Yv;function pM(){if(Yv)return Kh.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kh.exports=dM(),Kh.exports}var Wv;function mM(){if(Wv)return Zo;Wv=1;var o=fM(),n=Sp(),a=pM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function p(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&p(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function b(t){var e=[null,null],i=S(t);return i===null||R(e,t,i.child,{foundSelf:!1}),e}function R(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&R(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function z(t,e,i){return t===i?!0:t===e?(x=t,!0):!1}function D(t,e,i){return t===i?(P=t,!1):t===e?(P!==null&&(x=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var O=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),st=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),ae=Symbol.for("react.legacy_hidden"),ve=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),Q=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ct:return"Profiler";case at:return"StrictMode";case $:return"Suspense";case W:return"SuspenseList";case Ft:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case st:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case X:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return e=t.displayName||null,e!==null?e:tt(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return tt(t(e))}catch{}}return null}var St=Array.isArray,Tt=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},Pe=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=Pe[se],Pe[se]=null,se--)}function ie(t,e){se++,Pe[se]=t.current,t.current=e}var Ht=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,e){switch(ie(qe,e),ie(oe,t),ie(Ht,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?j_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=j_(e),t=Z_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),ie(Ht,t)}function T(){Lt(Ht),Lt(oe),Lt(qe)}function it(t){var e=t.memoizedState;e!==null&&(Ds._currentValue=e.memoizedState,ie(We,t)),e=Ht.current;var i=Z_(e,t.type);e!==i&&(ie(oe,t),ie(Ht,i))}function pt(t){oe.current===t&&(Lt(Ht),Lt(oe)),We.current===t&&(Lt(We),Ds._currentValue=L)}var Mt,ht;function kt(t){if(Mt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Mt=e&&e[1]||"",ht=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+ht}var wt=!1;function jt(t,e){if(!t||wt)return"";wt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Nt){var q=Nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Nt){q=Nt}mt=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){q=Nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Nt){if(Nt&&q&&typeof Nt.stack=="string")return[Nt.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var N=m.split(`
`),j=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===j.length)for(r=N.length-1,l=j.length-1;1<=r&&0<=l&&N[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==j[l]){var rt=`
`+N[r].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=r&&0<=l);break}}}finally{wt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Kt(t,e){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==e&&e!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function Rt(t){try{var e="",i=null;do e+=Kt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ce=o.unstable_requestPaint,H=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,vt=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,ye=null,$e=null;function pn(t){if(typeof ue=="function"&&Ve(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(ye,t)}catch{}}var wn=Math.clz32?Math.clz32:ml,$i=Math.log,io=Math.LN2;function ml(t){return t>>>=0,t===0?32:31-($i(t)/io|0)|0}var ur=256,ta=262144,cr=4194304;function li(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fr(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=li(r):(m&=E,m!==0?l=li(m):i||(i=E&~t,i!==0&&(l=li(i))))):(E=r&~c,E!==0?l=li(E):m!==0?l=li(m):i||(i=r&~t,i!==0&&(l=li(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ea(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gl(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-wn(i),l=1<<r;e|=t[r],i&=~l}return e}function vc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var t=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),t}function ao(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function hr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xc(t,e,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,j=t.hiddenUpdates;for(i=m&~i;0<i;){var rt=31-wn(i),mt=1<<rt;E[rt]=0,N[rt]=-1;var q=j[rt];if(q!==null)for(j[rt]=null,rt=0;rt<q.length;rt++){var et=q[rt];et!==null&&(et.lane&=-536870913)}i&=~mt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~e))}function A(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-wn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Z(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-wn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function ot(t,e){var i=e&-e;return i=(i&42)!==0?1:ut(i),(i&(t.suspendedLanes|e))!==0?0:i}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:Nv(t.type))}function Pt(t,e){var i=Vt.p;try{return Vt.p=t,e()}finally{Vt.p=i}}var Bt=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Bt,qt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,_e="__reactListeners$"+Bt,Ie="__reactHandles$"+Bt,Qe="__reactResources$"+Bt,Ue="__reactMarker$"+Bt,Re="__reactLoad$"+Bt;function te(t){delete t[Dt],delete t[qt],delete t[_e],delete t[Ie]}function Ne(t){var e;if(e=t[Dt])return e;for(var i=t.parentNode;i;){if(e=i[ee]||i[Dt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=hv(t);t!==null;){if(i=t[Dt])return i;t=hv(t)}return e}t=i,i=t.parentNode}return null}function me(t){if(t=t[Dt]||t[ee]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function mn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Kn(t){var e=t[Qe];return e||(e=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ce(t){t[Ue]=!0}function Ta(t){t[Re]=void 0}var je=new Set,zn={};function ln(t,e){en(t,e),en(t+"Capture",e)}function en(t,e){for(zn[t]=e,t=0;t<e.length;t++)je.add(e[t])}var Dn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wr={},Li={};function Rx(t){return Ot.call(Li,t)?!0:Ot.call(Wr,t)?!1:Dn.test(t)?Li[t]=!0:(Wr[t]=!0,!1)}var we=!1;function Op(){var t=we;return we=!1,t}function vl(t,e,i){if(Rx(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function xl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function ea(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Qn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cx(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){if(!t._valueTracker){var e=zp(t)?"checked":"value";t._valueTracker=Cx(t,e,""+t[e])}}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=zp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var wx=/[\n"\\]/g;function ui(t){return t.replace(wx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yc(t,e,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Qn(e)):t.value!==""+Qn(e)&&(t.value=""+Qn(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?m==="number"&&t.value==e?Mc(t,Qn(t.value)):Mc(t,Qn(e)):i!=null?Mc(t,Qn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Qn(E):t.removeAttribute("name")}function Ip(t,e,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Sc(t);return}i=i!=null?""+Qn(i):"",e=e!=null?""+Qn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Sc(t)}function Mc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function jr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Qn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Bp(t,e,i){if(e!=null&&(e=""+Qn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Qn(i):""}function Fp(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(St(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Qn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Sc(t)}function Zr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Dx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||Dx.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Gp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Hp(t,l,r),we=!0)}else for(var c in e)e.hasOwnProperty(c)&&Hp(t,c,e[c])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(t){return Nx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kr=null,Qr=null;function Vp(t){var e=me(t);if(e&&(t=e.stateNode)){var i=t[qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(yc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ui(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[qt]||null;if(!l)throw Error(s(90));yc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Pp(r)}break t;case"textarea":Bp(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&jr(t,!!i.multiple,e,!1)}}}var Ac=!1;function Xp(t,e,i){if(Ac)return t(e,i);Ac=!0;try{var r=t(e);return r}finally{if(Ac=!1,(Kr!==null||Qr!==null)&&(Su(),Kr&&(e=Kr,t=Qr,Qr=Kr=null,Vp(e),t)))for(e=0;e<t.length;e++)Vp(t[e])}}function ro(t,e){var i=t.stateNode;if(i===null)return null;var r=i[qt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(na)try{var so={};Object.defineProperty(so,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Rc=!1}var ba=null,Cc=null,yl=null;function kp(){if(yl)return yl;var t,e=Cc,i=e.length,r,l="value"in ba?ba.value:ba.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&e[i-r]===l[c-r];r++);return yl=l.slice(t,1<r?1-r:void 0)}function Ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function qp(){return!1}function Pn(t){function e(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?El:qp,this.isPropagationStopped=qp,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Pn(Aa),oo=O({},Aa,{view:0,detail:0}),Lx=Pn(oo),wc,Dc,lo,bl=O({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(wc=t.screenX-lo.screenX,Dc=t.screenY-lo.screenY):Dc=wc=0,lo=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Yp=Pn(bl),Ox=O({},bl,{dataTransfer:0}),zx=Pn(Ox),Px=O({},oo,{relatedTarget:0}),Uc=Pn(Px),Ix=O({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=Pn(Ix),Fx=O({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=Pn(Fx),Gx=O({},Aa,{data:0}),Wp=Pn(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kx[t])?!!e[t]:!1}function Nc(){return qx}var Yx=O({},oo,{key:function(t){if(t.key){var e=Vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=Pn(Yx),jx=O({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Pn(jx),Zx=O({},Aa,{submitter:0}),Kx=Pn(Zx),Qx=O({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Jx=Pn(Qx),$x=O({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Pn($x),eS=O({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Pn(eS),iS=O({},Aa,{newState:0,oldState:0,source:0}),aS=Pn(iS),rS=[9,13,27,32],Lc=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var sS=na&&"TextEvent"in window&&!uo,Zp=na&&(!Lc||uo&&8<uo&&11>=uo),Kp=" ",Qp=!1;function Jp(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function oS(t,e){switch(t){case"compositionend":return $p(e);case"keypress":return e.which!==32?null:(Qp=!0,Kp);case"textInput":return t=e.data,t===Kp&&Qp?null:t;default:return null}}function lS(t,e){if(Jr)return t==="compositionend"||!Lc&&Jp(t,e)?(t=kp(),yl=Cc=ba=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zp&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uS[t.type]:e==="textarea"}function em(t,e,i,r){Kr?Qr?Qr.push(r):Qr=[r]:Kr=r,e=Au(e,"onChange"),0<e.length&&(i=new Tl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var co=null,fo=null;function cS(t){V_(t,0)}function Al(t){var e=mn(t);if(Pp(e))return t}function nm(t,e){if(t==="change")return e}var im=!1;if(na){var Oc;if(na){var zc="oninput"in document;if(!zc){var am=document.createElement("div");am.setAttribute("oninput","return;"),zc=typeof am.oninput=="function"}Oc=zc}else Oc=!1;im=Oc&&(!document.documentMode||9<document.documentMode)}function rm(){co&&(co.detachEvent("onpropertychange",sm),fo=co=null)}function sm(t){if(t.propertyName==="value"&&Al(fo)){var e=[];em(e,fo,t,bc(t)),Xp(cS,e)}}function fS(t,e,i){t==="focusin"?(rm(),co=e,fo=i,co.attachEvent("onpropertychange",sm)):t==="focusout"&&rm()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(fo)}function dS(t,e){if(t==="click")return Al(e)}function pS(t,e){if(t==="input"||t==="change")return Al(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:mS;function ho(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(e,l)||!Jn(t[l],e[l]))return!1}return!0}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var i=om(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=om(i)}}function um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Pc(t.document)}return e}function Ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var gS=na&&"documentMode"in document&&11>=document.documentMode,$r=null,Bc=null,po=null,Fc=!1;function fm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Fc||$r==null||$r!==Pc(r)||(r=$r,"selectionStart"in r&&Ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&ho(po,r)||(po=r,r=Au(Bc,"onSelect"),0<r.length&&(e=new Tl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=$r)))}function dr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ts={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Hc={},hm={};na&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function pr(t){if(Hc[t])return Hc[t];if(!ts[t])return t;var e=ts[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in hm)return Hc[t]=e[i];return t}var dm=pr("animationend"),pm=pr("animationiteration"),mm=pr("animationstart"),_S=pr("transitionrun"),vS=pr("transitionstart"),xS=pr("transitioncancel"),gm=pr("transitionend"),_m=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function Mi(t,e){_m.set(t,e),ln(e,[t])}var SS=0;function ia(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ai.identifierPrefix;var i=SS++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function vm(t){if(t==null||typeof t=="string")return t;var e=null,i=Ss;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function aa(t,e){return t=vm(t),e=vm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],es=0,Vc=0;function Cl(){for(var t=es,e=Vc=es=0;e<t;){var i=ci[e];ci[e++]=null;var r=ci[e];ci[e++]=null;var l=ci[e];ci[e++]=null;var c=ci[e];if(ci[e++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&xm(i,l,c)}}function wl(t,e,i,r){ci[es++]=t,ci[es++]=e,ci[es++]=i,ci[es++]=r,Vc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Xc(t,e,i,r){return wl(t,e,i,r),Dl(t)}function mr(t,e){return wl(t,null,null,e),Dl(t)}function xm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-wn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Dl(t){if(50<Po)throw Po=0,xu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ns={};function yS(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,i,r){return new yS(t,e,i,r)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,e){var i=t.alternate;return i===null?(i=Vn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Sm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ul(t,e,i,r,l,c){var m=0;if(r=t,typeof r=="function")kc(r)&&(m=1);else if(typeof r=="string")m=Zy(t,i,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ft:return t=Vn(31,i,e,l),t.elementType=Ft,t.lanes=c,t;case V:return gr(i.children,l,c,e);case at:m=8,l|=24;break;case ct:return t=Vn(12,i,e,l|2),t.elementType=ct,t.lanes=c,t;case $:return t=Vn(13,i,e,l),t.elementType=$,t.lanes=c,t;case W:return t=Vn(19,i,e,l),t.elementType=W,t.lanes=c,t;case ae:case I:return t=l|32,t=Vn(30,i,e,t),t.elementType=I,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case st:m=10;break t;case gt:m=9;break t;case X:m=11;break t;case xt:m=14;break t;case yt:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Vn(m,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function gr(t,e,i,r){return t=Vn(7,t,r,e),t.lanes=i,t}function qc(t,e,i){return t=Vn(6,t,null,e),t.lanes=i,t}function ym(t){var e=Vn(18,null,null,0);return e.stateNode=t,e}function Yc(t,e,i){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Mm=new WeakMap;function fi(t,e){if(typeof t=="object"&&t!==null){var i=Mm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Rt(e)},Mm.set(t,e),e)}return{value:t,source:e,stack:Rt(e)}}var is=[],as=0,Nl=null,mo=0,hi=[],di=0,Ra=null,zi=1,Pi="";function sa(t,e){is[as++]=mo,is[as++]=Nl,Nl=t,mo=e}function Em(t,e,i){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Ra,Ra=t;var r=zi;t=Pi;var l=32-wn(r)-1;r&=~(1<<l),i+=1;var c=32-wn(e)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,zi=1<<32-wn(e)+l|i<<l|r,Pi=c+t}else zi=1<<c|i<<l|r,Pi=t}function Ll(t){t.return!==null&&(sa(t,1),Em(t,1,0))}function Wc(t){for(;t===Nl;)Nl=is[--as],is[as]=null,mo=is[--as],is[as]=null;for(;t===Ra;)Ra=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,zi=hi[--di],hi[di]=null}function Tm(t,e){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Ra,zi=e.id,Pi=e.overflow,Ra=t}var xn=null,Ze=null,ge=!1,Ca=null,pi=!1,jc=Error(s(519));function wa(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(fi(e,t)),jc}function bm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Dt]=t,e[qt]=r,i){case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":case"embed":Se("load",e);break;case"video":case"audio":for(i=0;i<Bo.length;i++)Se(Bo[i],e);break;case"source":Se("error",e);break;case"img":case"image":case"link":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"input":Se("invalid",e),Ip(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",e);break;case"textarea":Se("invalid",e),Fp(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Y_(e.textContent,i)?(r.popover!=null&&(Se("beforetoggle",e),Se("toggle",e)),r.onScroll!=null&&Se("scroll",e),r.onScrollEnd!=null&&Se("scrollend",e),r.onClick!=null&&(e.onclick=Oi),e=!0):e=!1,e||wa(t,!0)}function Ol(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:xn=xn.return}}function rs(t){if(t!==xn)return!1;if(!ge)return Ol(t),ge=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&Ze&&wa(t),Ol(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=fv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=fv(t)}else e===27?(e=Ze,qa(t.type)?(t=Oh,Oh=null,Ze=t):Ze=e):Ze=xn?gi(t.stateNode.nextSibling):null;return!0}function _r(){Ze=xn=null,ge=!1}function Zc(){var t=Ca;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ca=null),t}function go(t){Ca===null?Ca=[t]:Ca.push(t)}var Kc=Qt(null),vr=null,oa=null;function Da(t,e,i){ie(Kc,e._currentValue),e._currentValue=i}function la(t){t._currentValue=Kc.current,Lt(Kc)}function zl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function Qc(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<e.length;N++)if(E.context===e[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),zl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),zl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),zl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function xr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;Jn(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ds):t=[Ds])}l=l.return}return t!==null&&Qc(e,t,i,r),e.flags|=262144,t!==null}function Pl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){vr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Am(vr,t)}function Il(t,e){return vr===null&&Sr(t),Am(t,e)}function Am(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},oa===null){if(t===null)throw Error(s(308));oa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else oa=oa.next=e;return i}var MS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},ES=o.unstable_scheduleCallback,TS=o.unstable_NormalPriority,un={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new MS,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&ES(TS,function(){t.controller.abort()})}function Rm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var vo=null;function bS(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var xo=null,$c=0,yr=0,ss=null;function AS(t,e){if(xo===null){var i=xo=[];$c=0,yr=gh(),ss={status:"pending",value:void 0,then:function(r){i.push(r)}}}return $c++,e.then(Cm,Cm),e}function Cm(){if(--$c===0&&(vo=null,xo!==null)){ss!==null&&(ss.status="fulfilled");var t=xo;xo=null,yr=0,ss=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function RS(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var wm=Tt.S;Tt.S=function(t,e){if(y_=H(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&AS(t,e),vo!==null)for(var i=Ts;i!==null;)Rm(i,vo),i=i.next;if(i=t.types,i!==null){for(var r=Ts;r!==null;)Rm(r,i),r=r.next;if(yr!==0){r=vo,r===null&&(r=vo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}wm!==null&&wm(t,e)};var Mr=Qt(null);function tf(){var t=Mr.current;return t!==null?t:Ye.pooledCache}function Bl(t,e){e===null?ie(Mr,Mr.current):ie(Mr,e.pool)}function Dm(){var t=tf();return t===null?null:{parent:un._currentValue,pool:t}}var os=Error(s(460)),ef=Error(s(474)),Fl=Error(s(542)),Hl={then:function(){}};function Um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Oi,Oi),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Om(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Oi,Oi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Om(t),t}throw Tr=e,os}}function Er(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,os):i}}var Tr=null;function Lm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Om(t){if(t===os||t===Fl)throw Error(s(483))}var ls=null,So=0;function Gl(t){var e=So;return So+=1,ls===null&&(ls=[]),Nm(ls,t,e)}function Ua(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vl(t,e){throw e.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function zm(t){function e(Y,F){if(t){var J=Y.deletions;J===null?(Y.deletions=[F],Y.flags|=16):J.push(F)}}function i(Y,F){if(!t)return null;for(;F!==null;)e(Y,F),F=F.sibling;return null}function r(Y){for(var F=new Map;Y!==null;)Y.key===null?F.set(Y.index,Y):F.set(Y.key,Y),Y=Y.sibling;return F}function l(Y,F){return Y=ra(Y,F),Y.index=0,Y.sibling=null,Y}function c(Y,F,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<F?(Y.flags|=2,F):J):(Y.flags|=134217730,F)):(Y.flags|=1048576,F)}function m(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,F,J,dt){return F===null||F.tag!==6?(F=qc(J,Y.mode,dt),F.return=Y,F):(F=l(F,J),F.return=Y,F)}function N(Y,F,J,dt){var Gt=J.type;return Gt===V?(Y=rt(Y,F,J.props.children,dt,J.key),Ua(Y,J),Y):F!==null&&(F.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Er(Gt)===F.type)?(F=l(F,J.props),Ua(F,J),F.return=Y,F):(F=Ul(J.type,J.key,J.props,null,Y.mode,dt),Ua(F,J),F.return=Y,F)}function j(Y,F,J,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=Yc(J,Y.mode,dt),F.return=Y,F):(F=l(F,J.children||[]),F.return=Y,F)}function rt(Y,F,J,dt,Gt){return F===null||F.tag!==7?(F=gr(J,Y.mode,dt,Gt),F.return=Y,F):(F=l(F,J),F.return=Y,F)}function mt(Y,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=qc(""+F,Y.mode,J),F.return=Y,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return J=Ul(F.type,F.key,F.props,null,Y.mode,J),Ua(J,F),J.return=Y,J;case C:return F=Yc(F,Y.mode,J),F.return=Y,F;case yt:return F=Er(F),mt(Y,F,J)}if(St(F)||nt(F))return F=gr(F,Y.mode,J,null),F.return=Y,F;if(typeof F.then=="function")return mt(Y,Gl(F),J);if(F.$$typeof===st)return mt(Y,Il(Y,F),J);Vl(Y,F)}return null}function q(Y,F,J,dt){var Gt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:E(Y,F,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return J.key===Gt?N(Y,F,J,dt):null;case C:return J.key===Gt?j(Y,F,J,dt):null;case yt:return J=Er(J),q(Y,F,J,dt)}if(St(J)||nt(J))return Gt!==null?null:rt(Y,F,J,dt,null);if(typeof J.then=="function")return q(Y,F,Gl(J),dt);if(J.$$typeof===st)return q(Y,F,Il(Y,J),dt);Vl(Y,J)}return null}function et(Y,F,J,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(J)||null,E(F,Y,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case w:return Y=Y.get(dt.key===null?J:dt.key)||null,N(F,Y,dt,Gt);case C:return Y=Y.get(dt.key===null?J:dt.key)||null,j(F,Y,dt,Gt);case yt:return dt=Er(dt),et(Y,F,J,dt,Gt)}if(St(dt)||nt(dt))return Y=Y.get(J)||null,rt(F,Y,dt,Gt,null);if(typeof dt.then=="function")return et(Y,F,J,Gl(dt),Gt);if(dt.$$typeof===st)return et(Y,F,J,Il(F,dt),Gt);Vl(F,dt)}return null}function Nt(Y,F,J,dt){for(var Gt=null,Ee=null,Jt=F,re=F=0,hn=null;Jt!==null&&re<J.length;re++){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=q(Y,Jt,J[re],dt);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&e(Y,Jt),F=c(Ae,F,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae,Jt=hn}if(re===J.length)return i(Y,Jt),ge&&sa(Y,re),Gt;if(Jt===null){for(;re<J.length;re++)Jt=mt(Y,J[re],dt),Jt!==null&&(F=c(Jt,F,re),Ee===null?Gt=Jt:Ee.sibling=Jt,Ee=Jt);return ge&&sa(Y,re),Gt}for(Jt=r(Jt);re<J.length;re++)hn=et(Jt,Y,re,J[re],dt),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?re:Ae.key)),F=c(hn,F,re),Ee===null?Gt=hn:Ee.sibling=hn,Ee=hn);return t&&Jt.forEach(function(Ka){return e(Y,Ka)}),ge&&sa(Y,re),Gt}function Yt(Y,F,J,dt){if(J==null)throw Error(s(151));for(var Gt=null,Ee=null,Jt=F,re=F=0,hn=null,Ae=J.next();Jt!==null&&!Ae.done;re++,Ae=J.next()){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var Ka=q(Y,Jt,Ae.value,dt);if(Ka===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ka.alternate===null&&e(Y,Jt),F=c(Ka,F,re),Ee===null?Gt=Ka:Ee.sibling=Ka,Ee=Ka,Jt=hn}if(Ae.done)return i(Y,Jt),ge&&sa(Y,re),Gt;if(Jt===null){for(;!Ae.done;re++,Ae=J.next())Ae=mt(Y,Ae.value,dt),Ae!==null&&(F=c(Ae,F,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae);return ge&&sa(Y,re),Gt}for(Jt=r(Jt);!Ae.done;re++,Ae=J.next())Ae=et(Jt,Y,re,Ae.value,dt),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?re:hn.key)),F=c(Ae,F,re),Ee===null?Gt=Ae:Ee.sibling=Ae,Ee=Ae);return t&&Jt.forEach(function(oM){return e(Y,oM)}),ge&&sa(Y,re),Gt}function he(Y,F,J,dt){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case w:t:{for(var Gt=J.key;F!==null;){if(F.key===Gt){if(Gt=J.type,Gt===V){if(F.tag===7){i(Y,F.sibling),dt=l(F,J.props.children),Ua(dt,J),dt.return=Y,Y=dt;break t}}else if(F.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Er(Gt)===F.type){i(Y,F.sibling),dt=l(F,J.props),Ua(dt,J),dt.return=Y,Y=dt;break t}i(Y,F);break}else e(Y,F);F=F.sibling}J.type===V?(dt=gr(J.props.children,Y.mode,dt,J.key),Ua(dt,J),dt.return=Y,Y=dt):(dt=Ul(J.type,J.key,J.props,null,Y.mode,dt),Ua(dt,J),dt.return=Y,Y=dt)}return m(Y);case C:t:{for(Gt=J.key;F!==null;){if(F.key===Gt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){i(Y,F.sibling),dt=l(F,J.children||[]),dt.return=Y,Y=dt;break t}else{i(Y,F);break}else e(Y,F);F=F.sibling}dt=Yc(J,Y.mode,dt),dt.return=Y,Y=dt}return m(Y);case yt:return J=Er(J),he(Y,F,J,dt)}if(St(J))return Nt(Y,F,J,dt);if(nt(J)){if(Gt=nt(J),typeof Gt!="function")throw Error(s(150));return J=Gt.call(J),Yt(Y,F,J,dt)}if(typeof J.then=="function")return he(Y,F,Gl(J),dt);if(J.$$typeof===st)return he(Y,F,Il(Y,J),dt);Vl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(i(Y,F.sibling),dt=l(F,J),dt.return=Y,Y=dt):(i(Y,F),dt=qc(J,Y.mode,dt),dt.return=Y,Y=dt),m(Y)):i(Y,F)}return function(Y,F,J,dt){try{So=0;var Gt=he(Y,F,J,dt);return ls=null,Gt}catch(Jt){if(Jt===os||Jt===Fl)throw Jt;var Ee=Vn(29,Jt,null,Y.mode);return Ee.lanes=dt,Ee.return=Y,Ee}}}var br=zm(!0),Pm=zm(!1),Na=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Dl(t),xm(t,null,i),e}return wl(t,r,e,i),Dl(t)}function yo(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}function rf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var sf=!1;function Mo(){if(sf){var t=ss;if(t!==null)throw t}}function Eo(t,e,i,r){sf=!1;var l=t.updateQueue;Na=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,j=N.next;N.next=null,m===null?c=j:m.next=j,m=N;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,E=rt.lastBaseUpdate,E!==m&&(E===null?rt.firstBaseUpdate=j:E.next=j,rt.lastBaseUpdate=N))}if(c!==null){var mt=l.baseState;m=0,rt=j=N=null,E=c;do{var q=E.lane&-536870913,et=q!==E.lane;if(et?(Me&q)===q:(r&q)===q){q!==0&&q===yr&&(sf=!0),rt!==null&&(rt=rt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,Yt=E;q=e;var he=i;switch(Yt.tag){case 1:if(Nt=Yt.payload,typeof Nt=="function"){mt=Nt.call(he,mt,q);break t}mt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Yt.payload,q=typeof Nt=="function"?Nt.call(he,mt,q):Nt,q==null)break t;mt=O({},mt,q);break t;case 2:Na=!0}}q=E.callback,q!==null&&(t.flags|=64,et&&(t.flags|=8192),et=l.callbacks,et===null?l.callbacks=[q]:et.push(q))}else et={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},rt===null?(j=rt=et,N=mt):rt=rt.next=et,m|=q;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;et=E,E=et.next,et.next=null,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);rt===null&&(N=mt),l.baseState=N,l.firstBaseUpdate=j,l.lastBaseUpdate=rt,c===null&&(l.shared.lanes=0),Ga|=m,t.lanes=m,t.memoizedState=mt}}function Im(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Bm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Im(i[t],e)}var za=Qt(null),Xl=Qt(0);function Fm(t,e){t=da,ie(Xl,t),ie(za,e),da=t|e.baseLanes}function of(){ie(Xl,da),ie(za,za.current)}function lf(){da=Xl.current,Lt(za),Lt(Xl)}var Tn=Qt(null),Un=null;function Pa(t){var e=t.alternate;ie(bn,bn.current&1),ie(Tn,t),Un===null&&(e===null||za.current!==null||e.memoizedState!==null)&&(Un=t)}function uf(t){ie(bn,bn.current),ie(Tn,t),Un===null&&(Un=t)}function Hm(t){t.tag===22?(ie(bn,bn.current),ie(Tn,t),Un===null&&(Un=t)):Ia()}function Ia(){ie(bn,bn.current),ie(Tn,Tn.current)}function $n(t){Lt(Tn),Un===t&&(Un=null),Lt(bn)}var bn=Qt(0);function To(t,e){ie(Tn,Tn.current),ie(bn,e)}function cf(t){Lt(bn),Lt(Tn),Un===t&&(Un=null)}function kl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Nh(i)||Lh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ua=0,fe=null,Xe=null,cn=null,ql=!1,us=!1,Ar=!1,Yl=0,bo=0,cs=null,CS=0;function nn(){throw Error(s(321))}function ff(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Jn(t[i],e[i]))return!1;return!0}function hf(t,e,i,r,l,c){return ua=c,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tt.H=t===null||t.memoizedState===null?Eg:Tg,Ar=!1,c=i(r,l),Ar=!1,us&&(c=Vm(e,i,r,l)),Gm(t),c}function Gm(t){Tt.H=$l;var e=Xe!==null&&Xe.next!==null;if(ua=0,cn=Xe=fe=null,ql=!1,bo=0,cs=null,e)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Pl(t)&&(fn=!0))}function Vm(t,e,i,r){fe=t;var l=0;do{if(us&&(cs=null),bo=0,us=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=PS,c=e(i,r)}while(us);return c}function wS(){var t=Tt.H,e=t.useState()[0];return e=typeof e.then=="function"?Ao(e):e,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(fe.flags|=1024),e}function df(){var t=Yl!==0;return Yl=0,t}function pf(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function mf(t){if(ql){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ql=!1}ua=0,cn=Xe=fe=null,us=!1,bo=Yl=0,cs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Xe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=cn===null?fe.memoizedState:cn.next;if(e!==null)cn=e,Xe=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(t){var e=bo;return bo+=1,cs===null&&(cs=[]),t=Nm(cs,t,e),e=fe,(cn===null?e.memoizedState:cn.next)===null&&(e=e.alternate,Tt.H=e===null||e.memoizedState===null?Eg:Tg),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ao(t);if(t.$$typeof===ft)return;if(t.$$typeof===st)return En(t)}throw Error(s(438,String(t)))}function gf(t){var e=null,i=fe.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Wl(),fe.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=ve;return e.index++,i}function ca(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=sn();return _f(e,Xe,t)}function _f(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=m=null,N=null,j=e,rt=!1;do{var mt=j.lane&-536870913;if(mt!==j.lane?(Me&mt)===mt:(ua&mt)===mt){var q=j.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),mt===yr&&(rt=!0);else if((ua&q)===q){j=j.next,q===yr&&(rt=!0);continue}else mt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=mt,m=c):N=N.next=mt,fe.lanes|=q,Ga|=q;mt=j.action,Ar&&i(c,mt),c=j.hasEagerState?j.eagerState:i(c,mt)}else q={lane:mt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=q,m=c):N=N.next=q,fe.lanes|=mt,Ga|=mt;j=j.next}while(j!==null&&j!==e);if(N===null?m=c:N.next=E,!Jn(c,t.memoizedState)&&(fn=!0,rt&&(i=ss,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function vf(t){var e=sn(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);Jn(c,e.memoizedState)||(fn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Xm(t,e,i){var r=fe,l=sn(),c=ge;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var m=!Jn((Xe||l).memoizedState,i);if(m&&(l.memoizedState=i,fn=!0),l=l.queue,yf(Ym.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||m||cn!==null&&(cn.memoizedState.tag&1)!==0,fs(t?9:8,{destroy:void 0},qm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(ua&127)!==0||km(r,e,i)}return i}function km(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=fe.updateQueue,e===null?(e=Wl(),fe.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function qm(t,e,i,r){e.value=i,e.getSnapshot=r,Wm(e)&&jm(t)}function Ym(t,e,i){return i(function(){Wm(e)&&jm(t)})}function Wm(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Jn(t,i)}catch{return!0}}function jm(t){var e=mr(t,2);e!==null&&Yn(e,t,2)}function xf(t){var e=In();if(typeof t=="function"){var i=t;if(t=i(),Ar){pn(!0);try{i()}finally{pn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e}function Zm(t,e,i,r){return t.baseState=i,_f(t,Xe,typeof r=="function"?r:ca)}function DS(t,e,i,r,l){if(Jl(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Tt.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Km(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Km(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Tt.T,m={};m.types=c!==null?c.types:null,Tt.T=m;try{var E=i(l,r),N=Tt.S;N!==null&&N(m,E),Qm(t,e,E)}catch(j){Sf(t,e,j)}finally{c!==null&&m.types!==null&&(c.types=m.types),Tt.T=c}}else try{c=i(l,r),Qm(t,e,c)}catch(j){Sf(t,e,j)}}function Qm(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Jm(t,e,r)},function(r){return Sf(t,e,r)}):Jm(t,e,i)}function Jm(t,e,i){e.status="fulfilled",e.value=i,$m(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Km(t,i)))}function Sf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,$m(e),e=e.next;while(e!==r)}t.action=null}function $m(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function tg(t,e){return e}function eg(t,e){if(ge){var i=Ye.formState;if(i!==null){t:{var r=fe;if(ge){if(Ze){e:{for(var l=Ze,c=pi;l.nodeType!==8;){if(!c){l=null;break e}if(l=gi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=gi(l.nextSibling),r=l.data==="F!";break t}}wa(r)}r=!1}r&&(e=i[0])}}return i=In(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:e},i.queue=r,i=Sg.bind(null,fe,r),r.dispatch=i,r=xf(!1),c=Af.bind(null,fe,!1,r.queue),r=In(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=DS.bind(null,fe,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function ng(t){var e=sn();return ig(e,Xe,t)}function ig(t,e,i){if(e=_f(t,e,tg)[0],t=Zl(ca)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Ao(e)}catch(m){throw m===os?Fl:m}else r=e;e=sn();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(fe.flags|=2048,fs(9,{destroy:void 0},US.bind(null,l,i),null)),[r,c,t]}function US(t,e){t.action=e}function ag(t){var e=sn(),i=Xe;if(i!==null)return ig(e,i,t);sn(),e=e.memoizedState,i=sn();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function fs(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=fe.updateQueue,e===null&&(e=Wl(),fe.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function rg(){return sn().memoizedState}function Kl(t,e,i,r){var l=In();fe.flags|=t,l.memoizedState=fs(1|e,{destroy:void 0},i,r===void 0?null:r)}function Ql(t,e,i,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&ff(r,Xe.memoizedState.deps)?l.memoizedState=fs(e,c,i,r):(fe.flags|=t,l.memoizedState=fs(1|e,c,i,r))}function sg(t,e){Kl(8390656,8,t,e)}function yf(t,e){Ql(2048,8,t,e)}function NS(t){fe.flags|=4;var e=fe.updateQueue;if(e===null)e=Wl(),fe.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function og(t){var e=sn().memoizedState;return NS({ref:e,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function lg(t,e){return Ql(4,2,t,e)}function ug(t,e){return Ql(4,4,t,e)}function cg(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fg(t,e,i){i=i!=null?i.concat([t]):null,Ql(4,4,cg.bind(null,e,t),i)}function Mf(){}function hg(t,e){var i=sn();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&ff(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function dg(t,e){var i=sn();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&ff(e,r[1]))return r[0];if(r=t(),Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,e],r}function Ef(t,e,i){return i===void 0||(ua&1073741824)!==0&&(Me&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=E_(),fe.lanes|=t,Ga|=t,i)}function pg(t,e,i,r){return Jn(i,e)?i:za.current!==null?(t=Ef(t,i,r),Jn(t,e)||(fn=!0),t):(ua&106)===0||(ua&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=i):(t=E_(),fe.lanes|=t,Ga|=t,e)}function mg(t,e,i,r,l){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var m=Tt.T,E={};E.types=m!==null?m.types:null,Tt.T=E,Af(t,!1,e,i);try{var N=l(),j=Tt.S;if(j!==null&&j(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var rt=RS(N,r);Ro(t,e,rt,ii(t))}else Ro(t,e,r,ii(t))}catch(mt){Ro(t,e,{then:function(){},status:"rejected",reason:mt},ii())}finally{Vt.p=c,m!==null&&E.types!==null&&(m.types=E.types),Tt.T=m}}function LS(){}function Tf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=gg(t).queue;mg(t,l,e,L,i===null?LS:function(){return _g(t),i(r)})}function gg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:L},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function _g(t){var e=gg(t);e.next===null&&(e=t.alternate.memoizedState),Ro(t,e.next.queue,{},ii())}function bf(){return En(Ds)}function vg(){return sn().memoizedState}function xg(){return sn().memoizedState}function OS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ii();t=La(i);var r=Oa(e,t,i);r!==null&&(Yn(r,e,i),yo(r,e,i)),e={cache:Jc()},t.payload=e;return}e=e.return}}function zS(t,e,i){var r=ii();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Jl(t)?yg(e,i):(i=Xc(t,e,i,r),i!==null&&(Yn(i,t,r),Mg(i,e,r)))}function Sg(t,e,i){var r=ii();Ro(t,e,i,r)}function Ro(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jl(t))yg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var m=e.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,Jn(E,m))return wl(t,e,l,0),Ye===null&&Cl(),!1}catch{}if(i=Xc(t,e,l,r),i!==null)return Yn(i,t,r),Mg(i,e,r),!0}return!1}function Af(t,e,i,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Jl(t)){if(e)throw Error(s(479))}else e=Xc(t,i,r,2),e!==null&&Yn(e,t,2)}function Jl(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function yg(t,e){us=ql=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Mg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}var $l={readContext:En,use:jl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},Eg={readContext:En,use:jl,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:sg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Kl(4194308,4,cg.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){Kl(4,2,t,e)},useMemo:function(t,e){var i=In();e=e===void 0?null:e;var r=t();if(Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=In();if(i!==void 0){var l=i(e);if(Ar){pn(!0);try{i(e)}finally{pn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=zS.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:function(t){t=xf(t);var e=t.queue,i=Sg.bind(null,fe,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Mf,useDeferredValue:function(t,e){var i=In();return Ef(i,t,e)},useTransition:function(){var t=xf(!1);return t=mg.bind(null,fe,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=fe,l=In();if(ge){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Ye===null)throw Error(s(349));(Me&127)!==0||km(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,sg(Ym.bind(null,r,c,t),[t]),r.flags|=2048,fs(9,{destroy:void 0},qm.bind(null,r,c,i,e),null),i},useId:function(){var t=In(),e=Ye.identifierPrefix;if(ge){var i=Pi,r=zi;i=(r&~(1<<32-wn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Yl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=CS++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bf,useFormState:eg,useActionState:eg,useOptimistic:function(t){var e=In();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Af.bind(null,fe,!0,i),i.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return In().memoizedState=OS.bind(null,fe)},useEffectEvent:function(t){var e=In(),i={impl:t};return e.memoizedState=i,function(){if((Le&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Tg={readContext:En,use:jl,useCallback:hg,useContext:En,useEffect:yf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:Zl,useRef:rg,useState:function(){return Zl(ca)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=sn();return pg(i,Xe.memoizedState,t,e)},useTransition:function(){var t=Zl(ca)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Ao(t),e]},useSyncExternalStore:Xm,useId:vg,useHostTransitionStatus:bf,useFormState:ng,useActionState:ng,useOptimistic:function(t,e){var i=sn();return Zm(i,Xe,t,e)},useMemoCache:gf,useCacheRefresh:xg,useEffectEvent:og},PS={readContext:En,use:jl,useCallback:hg,useContext:En,useEffect:yf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:vf,useRef:rg,useState:function(){return vf(ca)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=sn();return Xe===null?Ef(i,t,e):pg(i,Xe.memoizedState,t,e)},useTransition:function(){var t=vf(ca)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Ao(t),e]},useSyncExternalStore:Xm,useId:vg,useHostTransitionStatus:bf,useFormState:ag,useActionState:ag,useOptimistic:function(t,e){var i=sn();return Xe!==null?Zm(i,Xe,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:gf,useCacheRefresh:xg,useEffectEvent:og};function Rf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:O({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Cf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ii(),l=La(r);l.payload=e,i!=null&&(l.callback=i),e=Oa(t,l,r),e!==null&&(Yn(e,t,r),yo(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ii(),l=La(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Oa(t,l,r),e!==null&&(Yn(e,t,r),yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ii(),r=La(i);r.tag=2,e!=null&&(r.callback=e),e=Oa(t,r,i),e!==null&&(Yn(e,t,i),yo(e,t,i))}};function bg(t,e,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):e.prototype&&e.prototype.isPureReactComponent?!ho(i,r)||!ho(l,c):!0}function Ag(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Cf.enqueueReplaceState(e,e.state,null)}function Rr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Rg(t){Rl(t)}function Cg(t){console.error(t)}function wg(t){Rl(t)}function tu(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Dg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wf(t,e,i){return i=La(i),i.tag=3,i.payload={element:null},i.callback=function(){tu(t,e)},i}function Ug(t){return t=La(t),t.tag=3,t}function Ng(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Dg(e,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Dg(e,i,r),typeof l!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function IS(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&xr(e,i,l,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Un===null?yu():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Hl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),dh(t,r,l)),!1;case 22:return i.flags|=65536,r===Hl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),dh(t,r,l)),!1}throw Error(s(435,i.tag))}return dh(t,r,l),yu(),!1}if(ge)return e=Tn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==jc&&(t=Error(s(422),{cause:r}),go(fi(t,i)))):(r!==jc&&(e=Error(s(423),{cause:r}),go(fi(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=fi(r,i),l=wf(t.stateNode,r,l),rf(t,l),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=fi(c,i),zo===null?zo=[c]:zo.push(c),an!==4&&(an=2),e===null)return!0;r=fi(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=wf(i.stateNode,r,t),rf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Va===null||!Va.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Ug(l),Ng(l,t,i,r),rf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Df=Error(s(461)),fn=!1;function gn(t,e,i,r){e.child=t===null?Pm(e,null,i,r):br(e,t.child,i,r)}function Lg(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return Sr(e),r=hf(t,e,i,m,c,l),E=df(),t!==null&&!fn?(pf(t,e,l),fa(t,e,l)):(ge&&E&&Ll(e),e.flags|=1,gn(t,e,r,l),e.child)}function Og(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!kc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,zg(t,e,c,r,l)):(t=Ul(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Bf(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:ho,i(m,r)&&t.ref===e.ref)return fa(t,e,l)}return e.flags|=1,t=ra(c,r),t.ref=e.ref,t.return=e,e.child=t}function zg(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(ho(c,r)&&t.ref===e.ref)if(fn=!1,e.pendingProps=r=c,Bf(t,l))(t.flags&131072)!==0&&(fn=!0);else return e.lanes=t.lanes,fa(t,e,l)}return Uf(t,e,i,r,l)}function Pg(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return Ig(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(e,c!==null?c.cachePool:null),c!==null?Fm(e,c):of(),Hm(e);else return r=e.lanes=536870912,Ig(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Bl(e,c.cachePool),Fm(e,c),Ia(),e.memoizedState=null):(t!==null&&Bl(e,null),of(),Ia());return gn(t,e,l,i),e.child}function Co(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ig(t,e,i,r,l){var c=tf();return c=c===null?null:{parent:un._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Bl(e,null),of(),Hm(e),t!==null&&xr(t,e,r,!0),e.childLanes=l,null}function eu(t,e){return e=nu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Bg(t,e,i){return br(e,t.child,null,i),t=eu(e,e.pendingProps),t.flags|=2,$n(e),e.memoizedState=null,t}function BS(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ge){if(r.mode==="hidden")return t=eu(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Co(null,t);if(uf(e),(t=Ze)?(t=cv(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=ym(t),i.return=e,e.child=i,xn=e,Ze=null)):t=null,t===null)throw wa(e);return e.lanes=536870912,null}return eu(e,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(uf(e),l)if(e.flags&256)e.flags&=-257,e=Bg(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(fn||xr(t,e,i,!1),l=(i&t.childLanes)!==0,fn||l){if(za.current===null){if(r=Ye,r!==null&&(m=ot(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,mr(t,m),Yn(r,t,m),Df;yu()}e=Bg(t,e,i)}else t=c.treeContext,Ze=gi(m.nextSibling),xn=e,ge=!0,Ca=null,pi=!1,t!==null&&Tm(e,t),e=eu(e,r),e.flags|=134221824;return e}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Uf(t,e,i,r,l){return Sr(e),i=hf(t,e,i,r,void 0,l),r=df(),t!==null&&!fn?(pf(t,e,l),fa(t,e,l)):(ge&&r&&Ll(e),e.flags|=1,gn(t,e,i,l),e.child)}function Fg(t,e,i,r,l,c){return Sr(e),e.updateQueue=null,i=Vm(e,r,i,l),Gm(t),r=df(),t!==null&&!fn?(pf(t,e,c),fa(t,e,c)):(ge&&r&&Ll(e),e.flags|=1,gn(t,e,i,c),e.child)}function Hg(t,e,i,r,l){if(Sr(e),e.stateNode===null){var c=ns,m=i.contextType;typeof m=="object"&&m!==null&&(c=En(m)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Cf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},nf(e),m=i.contextType,c.context=typeof m=="object"&&m!==null?En(m):ns,c.state=e.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Rf(e,i,m,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Cf.enqueueReplaceState(c,c.state,null),Eo(e,r,c,l),Mo(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,N=Rr(i,E);c.props=N;var j=c.context,rt=i.contextType;m=ns,typeof rt=="object"&&rt!==null&&(m=En(rt));var mt=i.getDerivedStateFromProps;rt=typeof mt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,rt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||j!==m)&&Ag(e,c,r,m),Na=!1;var q=e.memoizedState;c.state=q,Eo(e,r,c,l),Mo(),j=e.memoizedState,E||q!==j||Na?(typeof mt=="function"&&(Rf(e,i,mt,r),j=e.memoizedState),(N=Na||bg(e,i,N,r,q,j,m))?(rt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=j),c.props=r,c.state=j,c.context=m,r=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,af(t,e),m=e.memoizedProps,rt=Rr(i,m),c.props=rt,mt=e.pendingProps,q=c.context,j=i.contextType,N=ns,typeof j=="object"&&j!==null&&(N=En(j)),E=i.getDerivedStateFromProps,(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==mt||q!==N)&&Ag(e,c,r,N),Na=!1,q=e.memoizedState,c.state=q,Eo(e,r,c,l),Mo();var et=e.memoizedState;m!==mt||q!==et||Na||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof E=="function"&&(Rf(e,i,E,r),et=e.memoizedState),(rt=Na||bg(e,i,rt,r,q,et,N)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,et,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,et,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=et),c.props=r,c.state=et,c.context=N,r=rt):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,hs(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=br(e,t.child,null,l),e.child=br(e,null,i,l)):gn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=fa(t,e,l),t}function Gg(t,e,i,r){return _r(),e.flags|=256,gn(t,e,i,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Dm()}}function Of(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ni),t}function Vg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),m&&(l=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(ge){if(l?Pa(e):Ia(),(t=Ze)?(t=cv(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=ym(t),i.return=e,e.child=i,xn=e,Ze=null)):t=null,t===null)throw wa(e);return Lh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ia(),l=e.mode,c=nu({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Lf(i),r.childLanes=Of(t,m,i),e.memoizedState=Nf,Co(null,r)):(Pa(e),zf(e,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return FS(t,e,c,m,r,N,E,i)}return l?(Ia(),l=r.fallback,c=e.mode,E=t.child,N=E.sibling,r=ra(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=ra(N,l):(l=gr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Co(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Lf(i):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Dm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Of(t,m,i),e.memoizedState=Nf,Co(t.child,r)):(Pa(e),i=t.child,t=i.sibling,i=ra(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=i,e.memoizedState=null,i)}function zf(t,e){return e=nu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nu(t,e){return t=Vn(22,t,null,e),t.lanes=0,t}function iu(t,e,i){return br(e,t.child,null,i),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,i,r,l,c,m,E){if(i)return e.flags&256?(Pa(e),e.flags&=-257,iu(t,e,E)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,null):(Ia(),c=l.fallback,m=e.mode,l=nu({mode:"visible",children:l.children},m),c=gr(c,m,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,br(e,t.child,null,E),l=e.child,l.memoizedState=Lf(E),l.childLanes=Of(t,r,E),e.memoizedState=Nf,Co(null,l));if(Pa(e),Lh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,go({value:l,source:null,stack:null})),iu(t,e,E)}if(fn||xr(t,e,E,!1),r=(E&t.childLanes)!==0,fn||r){if(za.current!==null)return iu(t,e,E);if(r=Ye,r!==null&&(l=ot(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,mr(t,l),Yn(r,t,l),Df;return Nh(c)||yu(),iu(t,e,E)}return Nh(c)?(e.flags|=192,e.child=t.child,null):(t=m.treeContext,Ze=gi(c.nextSibling),xn=e,ge=!0,Ca=null,pi=!1,t!==null&&Tm(e,t),e=zf(e,l.children),e.flags|=134221824,e)}function Xg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zl(t.return,e,i)}function kg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&kl(i)===null&&(e=t),t=t.sibling}return e}function au(t,e,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Pf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function If(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=bn.current;if(e.flags&128)return To(e,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,e.flags|=128):m&=1,To(e,m),l==="backwards"&&t!==null?(Pf(t),gn(t,e,r,i),Pf(t)):gn(t,e,r,i),r=ge?mo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,i,e);else if(t.tag===19)Xg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=kg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Pf(e)),au(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&kl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}au(e,!0,i,null,c,r);break;case"together":au(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=kg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),au(e,!1,l,i,c,r)}return e.child}function qg(t,e,i){var r=e.pendingProps;return Da(e,e.type,r.value),gn(t,e,r.children,i),e.child}function fa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ga|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(xr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ra(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ra(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Bf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function HS(t,e,i){switch(e.tag){case 3:U(e,e.stateNode.containerInfo),Da(e,un,t.memoizedState.cache),_r();break;case 27:case 5:it(e);break;case 4:U(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,uf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Pa(e),e.flags|=128,null;r=xr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Vg(t,e,i):(Pa(e),t=fa(t,e,i),t!==null?t.sibling:null)}Pa(e);break;case 19:if(e.flags&128)return If(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(xr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return If(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),To(e,bn.current),r)break;return null;case 22:return e.lanes=0,Pg(t,e,i,e.pendingProps);case 24:Da(e,un,t.memoizedState.cache)}return fa(t,e,i)}function Yg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)fn=!0;else{if(!Bf(t,i)&&(e.flags&128)===0)return fn=!1,HS(t,e,i);fn=(t.flags&131072)!==0}else fn=!1,ge&&(e.flags&1048576)!==0&&Em(e,mo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Er(e.elementType),e.type=t,typeof t=="function")kc(t)?(r=Rr(t,r),e.tag=1,e=Hg(null,e,t,r,i)):(e.tag=0,e=Uf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===X){e.tag=11,e=Lg(null,e,t,r,i);break t}else if(l===xt){e.tag=14,e=Og(null,e,t,r,i);break t}else if(l===st){e.tag=10,e.type=t,e=qg(null,e,i);break t}}throw e=tt(t)||t,Error(s(306,e,""))}}return e;case 0:return Uf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Rr(r,e.pendingProps),Hg(t,e,r,l,i);case 3:t:{if(U(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,af(t,e),Eo(e,r,null,i);var m=e.memoizedState;if(r=m.cache,Da(e,un,r),r!==c.cache&&Qc(e,[un],i,!0),Mo(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Gg(t,e,r,i);break t}else if(r!==l){l=fi(Error(s(424)),e),go(l),e=Gg(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=gi(t.firstChild),xn=e,ge=!0,Ca=null,pi=!0,i=Pm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(_r(),r===l){e=fa(t,e,i);break t}gn(t,e,r,i)}e=e.child}return e;case 26:return hs(t,e),t===null?(i=_v(e.type,null,e.pendingProps,null))?e.memoizedState=i:ge||(e.stateNode=K_(e.type,e.pendingProps,qe.current,e)):e.memoizedState=_v(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return it(e),t===null&&ge&&(r=e.stateNode=dv(e.type,e.pendingProps,qe.current),xn=e,pi=!0,l=Ze,qa(e.type)?(Oh=l,Ze=gi(r.firstChild)):Ze=l),gn(t,e,e.pendingProps.children,i),hs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ge&&((l=r=Ze)&&(r=Oy(r,e.type,e.pendingProps,pi),r!==null?(e.stateNode=r,xn=e,Ze=gi(r.firstChild),pi=!1,l=!0):l=!1),l||wa(e)),it(e),l=e.type,c=e.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,bh(l,c)?r=null:m!==null&&bh(l,m)&&(e.flags|=32),e.memoizedState!==null&&(l=hf(t,e,wS,null,null,i),Ds._currentValue=l),hs(t,e),gn(t,e,r,i),e.child;case 6:return t===null&&ge&&((t=i=Ze)&&(i=zy(i,e.pendingProps,pi),i!==null?(e.stateNode=i,xn=e,Ze=null,t=!0):t=!1),t||wa(e)),null;case 13:return Vg(t,e,i);case 4:return U(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,i):gn(t,e,r,i),e.child;case 11:return Lg(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,hs(t,e),gn(t,e,r,i),e.child;case 8:return gn(t,e,e.pendingProps.children,i),e.child;case 12:return gn(t,e,e.pendingProps.children,i),e.child;case 10:return qg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,Sr(e),l=En(l),r=r(l),e.flags|=1,gn(t,e,r,i),e.child;case 14:return Og(t,e,e.type,e.pendingProps,i);case 15:return zg(t,e,e.type,e.pendingProps,i);case 19:return If(t,e,i);case 31:return BS(t,e,i);case 22:return Pg(t,e,i,e.pendingProps);case 24:return Sr(e),r=En(un),t===null?(l=tf(),l===null&&(l=Ye,c=Jc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},nf(e),Da(e,un,l)):((t.lanes&i)!==0&&(af(t,e),Eo(e,null,null,i),Mo()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Da(e,un,r)):(r=c.cache,Da(e,un,r),r!==l.cache&&Qc(e,[un],i,!0))),gn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:ge&&Ll(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:hs(t,e),gn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ha(t){t.flags|=4}function Ff(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?yv(e,r):yv(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(R_())t.flags|=8192;else throw Tr=Hl,ef}else t.flags&=-16777217}function Wg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mv(e))if(R_())t.flags|=8192;else throw Tr=Hl,ef}function ru(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?_l():536870912,t.lanes|=e,_s|=e)}function wo(t,e){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function GS(t,e,i){var r=e.pendingProps;switch(Wc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return Ke(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),la(un),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rs(e)?ha(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zc())),Ke(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(ha(e),c!==null?(Ke(e),Wg(e,c)):(Ke(e),Ff(e,l,null,r,i))):c?c!==t.memoizedState?(ha(e),Ke(e),Wg(e,c)):(Ke(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&ha(e),Ke(e),Ff(e,l,t,r,i)),null;case 27:if(pt(e),i=qe.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ha(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ke(e),e.subtreeFlags&=-33554433,null}t=Ht.current,rs(e)?bm(e):(t=dv(l,r,i),e.stateNode=t,ha(e))}return Ke(e),e.subtreeFlags&=-33554433,null;case 5:if(pt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ha(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ke(e),e.subtreeFlags&=-33554433,null}if(c=Ht.current,rs(e))bm(e);else{var m=Ho(qe.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[Dt]=e,c[qt]=r;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=c;t:switch(Rn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ha(e)}}return Ke(e),e.subtreeFlags&=-33554433,Ff(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&ha(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=qe.current,rs(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Dt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Y_(t.nodeValue,i)),t||wa(e,!0)}else t=Ho(t).createTextNode(r),t[Dt]=e,e.stateNode=t}return Ke(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=rs(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),t=!1}else i=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?($n(e),e):($n(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ke(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=rs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Dt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),l=!1}else l=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?($n(e),e):($n(e),null)}return $n(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),ru(e,e.updateQueue),Ke(e),null);case 4:return T(),t===null&&Sh(e.stateNode.containerInfo),e.flags|=67108864,Ke(e),null;case 10:return la(e.type),Ke(e),null;case 19:if(cf(e),r=e.memoizedState,r===null)return Ke(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)wo(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=kl(t),c!==null){for(e.flags|=128,wo(r,!1),t=c.updateQueue,e.updateQueue=t,ru(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Sm(i,t),i=i.sibling;return To(e,bn.current&1|2),ge&&sa(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&H()>_u&&(e.flags|=128,l=!0,wo(r,!1),e.lanes=4194304)}else{if(!l)if(t=kl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,ru(e,t),wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ge)return Ke(e),null}else 2*H()-r.renderingStartTime>_u&&i!==536870912&&(e.flags|=128,l=!0,wo(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=bn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||ge?To(e,c):(i=c,ie(Tn,e),ie(bn,i),Un===null&&(Un=e)),ge&&sa(e,r.treeForkCount),t}return Ke(e),null;case 22:case 23:return $n(e),lf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),i=e.updateQueue,i!==null&&ru(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Lt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),la(un),Ke(e),null;case 25:return null;case 30:return e.flags|=33554432,Ke(e),null}throw Error(s(156,e.tag))}function VS(t,e){switch(Wc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return la(un),T(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 31:if(e.memoizedState!==null){if($n(e),e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if($n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return cf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return T(),null;case 10:return la(e.type),null;case 22:case 23:return $n(e),lf(),t!==null&&Lt(Mr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return la(un),null;case 25:return null;default:return null}}function jg(t,e){switch(Wc(e),e.tag){case 3:la(un),T();break;case 26:case 27:case 5:pt(e);break;case 4:T();break;case 31:e.memoizedState!==null&&$n(e);break;case 13:$n(e);break;case 19:cf(e);break;case 10:la(e.type);break;case 22:case 23:$n(e),lf(),t!==null&&Lt(Mr);break;case 24:la(un)}}function Do(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){He(e,e.return,E)}}function Ba(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=e;var N=i,j=E;try{j()}catch(rt){He(l,N,rt)}}}r=r.next}while(r!==c)}}catch(rt){He(e,e.return,rt)}}function Zg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Bm(e,i)}catch(r){He(t,t.return,r)}}}function Kg(t,e,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){He(t,e,r)}}function Ii(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ia(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=iv(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ai(t);p(t.child,!1,Ny,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){He(t,e,E)}}function An(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){He(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){He(t,e,l)}else i.current=null}function su(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)uv(t.stateNode,e[i])}function Qg(t){for(var e=t.return;e!==null&&(Gf(e)&&uv(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Uo(t){for(var e=t.return;e!==null&&(Gf(e)&&Ly(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Hf(t){return t.tag===5||t.tag===3||t.tag===27}function Gf(t){return t&&t.tag===7&&t.stateNode!==null}function Vf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){He(t,t.return,l)}}function Xf(t,e,i){try{var r=t.stateNode;py(r,t.type,i,e),r[qt]=e}catch(l){He(t,t.return,l)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function kf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Oi)),su(t,r),we=!0;else if(l!==4&&(l===27&&(su(t,r),r=null,qa(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(qf(t,e,i,r),t=t.sibling;t!==null;)qf(t,e,i,r),t=t.sibling}function ou(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),su(t,r),we=!0;else if(l!==4&&(l===27&&(su(t,r),r=null,qa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(ou(t,e,i,r),t=t.sibling;t!==null;)ou(t,e,i,r),t=t.sibling}function $g(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Rn(e,r,i),e[Dt]=t,e[qt]=i}catch(c){He(t,t.return,c)}}var lu=!1,ti=null;function t_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(lu=!0)}var Bi=null;function e_(){var t=Bi;return Bi=null,t}var Xn=0;function ds(t,e,i,r,l){return Xn=0,n_(t.child,e,i,r,l)}function n_(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=Ch(m);r.push(E),E.view&&(c=!0)}else c||Ch(m).view&&(c=!0);lu=!0,ev(m,Xn===0?e:e+"_"+Xn,i),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||n_(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Fi(t,e){for(;t!==null;)t.tag===5?nv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Fi(t.child,e)),t=t.sibling}function uu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(uu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=aa(e.default,e.share),e!=="none"&&(ds(t,i,e,null,!1)||Fi(t.child,!1))}t=t.sibling}}function Yf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ia(r,i),c=aa(r.default,i.paired?r.share:r.enter);c!=="none"?ds(t,l,c,null,!1)?(uu(t),i.paired||e||ys(t,r.onEnter)):Fi(t.child,!1):uu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling;else uu(t)}function Wf(t){if(ti!==null&&ti.size!==0){var e=ti;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=aa(i.default,i.share);if(c!=="none"&&(ds(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,ys(t,i.onShare)):Fi(t.child,!1)),e.delete(r),e.size===0)break}}}Wf(t)}t=t.sibling}}}function jf(t){if(t.tag===30){var e=t.memoizedProps,i=ia(e,t.stateNode),r=ti!==null?ti.get(i):void 0,l=aa(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ds(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ti.delete(i),ys(t,e.onShare)):ys(t,e.onExit):Fi(t.child,!1)),ti!==null&&Wf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jf(t),t=t.sibling;else ti!==null&&Wf(t)}function i_(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=ia(e,t.stateNode);e=aa(e.default,e.update),t.flags&=-5,e!=="none"&&ds(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&i_(t);t=t.sibling}}function Zf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Fi(t.child,!1))}Zf(t)}t=t.sibling}}function cu(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),Zf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)cu(t),t=t.sibling;else Zf(t)}function a_(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&a_(t),t=t.sibling}function Kf(t,e,i,r,l,c,m){for(var E=!1;e!==null;){if(e.tag===5){var N=e.stateNode;if(c!==null&&Xn<c.length){var j=c[Xn],rt=Ch(N);(j.view||rt.view)&&(E=!0);var mt;if(mt=(t.flags&4)===0)if(rt.clip)mt=!0;else{mt=j.rect;var q=rt.rect;mt=mt.y!==q.y||mt.x!==q.x||mt.height!==q.height||mt.width!==q.width}mt&&(t.flags|=4),rt.abs?rt=!j.abs:(j=j.rect,rt=rt.rect,rt=j.height!==rt.height||j.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&ev(N,Xn===0?i:i+"_"+Xn,l),E&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(N,Xn===0?r:r+"_"+Xn,e.memoizedProps)),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&m?t.flags|=e.flags&32:Kf(t,e.child,i,r,l,c,m)&&(E=!0));e=e.sibling}return E}function r_(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ia(i,r),c=aa(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Xn=0,l=Kf(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&ys(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&r_(t);t=t.sibling}}var Sn=!1,Be=!1,Hi=!1,Qf=!1,s_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Gi=!1,No=!1,fu=!1,Jf=!1;function XS(t,e,i){if(t=t.containerInfo,Eh=Us,t=cm(t),Ic(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,N=-1,j=-1,rt=0,mt=0,q=t,et=null;e:for(;;){for(var Nt;q!==r||c!==0&&q.nodeType!==3||(N=E+c),q!==m||l!==0&&q.nodeType!==3||(j=E+l),q.nodeType===3&&(E+=q.nodeValue.length),(Nt=q.firstChild)!==null;)et=q,q=Nt;for(;;){if(q===t)break e;if(et===r&&++rt===c&&(N=E),et===m&&++mt===l&&(j=E),(Nt=q.nextSibling)!==null)break;q=et,et=q.parentNode}q=Nt}r=N===-1||j===-1?null:{start:N,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(Th={focusedElem:t,selectionRange:r},Us=!1,i=(i&335544064)===i,yn=e,e=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&jf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&t_(t),hu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&jf(r),hu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&t_(t),hu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,yn=r):(i&&i_(t),hu(i))}}ti=null}function hu(t){for(;yn!==null;){var e=yn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var m=Rr(e.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){He(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Uh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Uh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ia(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=aa(l.default,l.update),l!=="none"&&ds(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,yn=r;break}yn=e.return}}function o_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),r&4&&Do(5,i);break;case 1:if(Vi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(m){He(i,i.return,m)}else{var l=Rr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){He(i,i.return,m)}}r&64&&Zg(i),r&512&&Ii(i,i.return);break;case 3:if(Vi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Bm(t,e)}catch(m){He(i,i.return,m)}}break;case 27:e===null&&r&4&&$g(i);case 26:case 5:Vi(t,i),e===null&&r&4&&Vf(i),r&512&&Ii(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),r&4&&f_(t,i);break;case 13:Vi(t,i),r&4&&h_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=ey.bind(null,i),Py(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var c=e!==null&&e.memoizedState!==null||Be;e=Sn,l=Be,Sn=r,(Be=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(t,i,r)):Vi(t,i),Sn=e,Be=l}break;case 30:Vi(t,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Vi(t,i)}}function $f(t,e){for(t=t.child;t!==null;)l_(t,e),t=t.sibling}function l_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){He(t,t.return,N)}th(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,we=!0}catch(N){He(t,t.return,N)}break;case 18:try{var E=t.stateNode;e?tv(E,!0):tv(t.stateNode,!1)}catch(N){He(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&$f(t,e);break;default:$f(t,e)}}function th(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:l_(i,r);break t;case 22:i.memoizedState===null&&th(i,r);break t;default:th(i,r)}}t=t.sibling}}function u_(t){var e=t.alternate;e!==null&&(t.alternate=null,u_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&te(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function Ei(t,e,i){for(i=i.child;i!==null;)c_(t,e,i),i=i.sibling}function c_(t,e,i){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ye,i)}catch{}switch(i.tag){case 26:Be||An(i,e),Ei(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Be&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Be||An(i,e),Uo(i);var r=Je,l=kn;qa(i.type)&&(Je=i.stateNode,kn=!1),Ei(t,e,i),pv(i.stateNode,i.type,i.memoizedProps),Je=r,kn=l;break;case 5:Be||An(i,e),Uo(i);case 6:if(i.tag===6&&Uo(i),r=Je,l=kn,Je=null,Ei(t,e,i),Je=r,kn=l,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),we=!0}catch(c){He(i,e,c)}else try{Je.removeChild(i.stateNode),we=!0}catch(c){He(i,e,c)}break;case 18:Je!==null&&(kn?(t=Je,$_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ns(t)):$_(Je,i.stateNode));break;case 4:r=Je,l=kn,Je=i.stateNode.containerInfo,kn=!0,Ei(t,e,i),Je=r,kn=l;break;case 0:case 11:case 14:case 15:Ba(2,i,e),Be||Ba(4,i,e),Ei(t,e,i);break;case 1:Be||(An(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Kg(i,e,r)),Ei(t,e,i);break;case 21:Ei(t,e,i);break;case 22:Be=(r=Be)||i.memoizedState!==null,Ei(t,e,i),Be=r;break;case 30:An(i,e),Ei(t,e,i);break;case 7:Be||An(i,e),Ei(t,e,i);break;default:Ei(t,e,i)}}function f_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ns(t)}catch(i){He(e,e.return,i)}}}function h_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ns(t)}catch(i){He(e,e.return,i)}}function kS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new s_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new s_),e;default:throw Error(s(435,t.tag))}}function du(t,e){var i=kS(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=ny.bind(null,t,r);r.then(l,l)}})}function Bn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=e,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(qa(N.type)){Je=N.stateNode,kn=!1;break t}break;case 5:Je=N.stateNode,kn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,kn=!0;break t}N=N.return}if(Je===null)throw Error(s(160));c_(m,E,c),Je=null,kn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)d_(e,t,i),e=e.sibling}var Ti=null;function d_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}Bn(e,t,i),Fn(t),l&4&&(Ba(3,t,t.return),Do(3,t),Ba(5,t,t.return));break;case 1:Bn(e,t,i),Fn(t),l&512&&(Be||r===null||An(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=Ti,Bn(e,t,i),Fn(t),l&512&&(Be||r===null||An(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=K_(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ue]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Rn(r,e,i),r[Dt]=t,Ce(r),e=r;break t;case"link":if(c=Sv("link","href",l).get(e+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(e),Rn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=Sv("meta","content",l).get(e+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(e),Rn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Dt]=t,Ce(r),e=r}t.stateNode=e}else Sn||Bh(c,t.type,t.stateNode);else t.stateNode=xv(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Be||e.parentNode.removeChild(e)):l.count--,i===null?Sn||Bh(c,t.type,t.stateNode):xv(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 27:Bn(e,t,i),Fn(t),l&512&&(Be||r===null||An(r,r.return)),r!==null&&l&4&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Hi,Hi=!1,Bn(e,t,i),Hi=c,Fn(t),l&512&&(Be||r===null||An(r,r.return)),t.flags&32){e=t.stateNode;try{Zr(e,""),we=!0}catch(rt){He(t,t.return,rt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Xf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(Qf=!0);break;case 6:if(Bn(e,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,we=!0}catch(rt){He(t,t.return,rt)}}break;case 3:if(we=!1,Cu=null,c=Ti,Ti=Go(e.containerInfo),Bn(e,t,i),Ti=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(rt){He(t,t.return,rt)}Qf&&(Qf=!1,p_(t)),we=!1;break;case 4:l=Hi,Hi=Sn,r=Op(),c=Ti,Ti=Go(t.stateNode.containerInfo),Bn(e,t,i),Fn(t),Ti=c,we&&No&&(fu=!0),we=r,Hi=l;break;case 12:Bn(e,t,i),Fn(t);break;case 31:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,du(t,e)));break;case 13:Bn(e,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gu=H()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,du(t,e)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=Sn,N=Be,j=Hi;Sn=E||c,Hi=j||c,Be=N||m,Bn(e,t,i),Be=N,Hi=j,Sn=E,Fn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||m||Sn||Be||(e=m||Be,i=Sn,r=Be,Sn=c||Sn,Be=e,Fa(t,2),Sn=i,Be=r),!c&&Hi||$f(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,du(t,i))));break;case 19:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,du(t,e)));break;case 30:l&512&&(Be||r===null||An(r,r.return)),l=Op(),c=No,m=(i&335544064)===i,E=t.memoizedProps,No=m&&aa(E.default,E.update)!=="none",Bn(e,t,i),Fn(t),m&&r!==null&&we&&(t.flags|=4),No=c,we=l;break;case 21:break;case 7:l&512&&(Be||r===null||An(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Bn(e,t,i),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Jg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Gf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Hf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=kf(t);ou(t,N,E,m);break;case 5:var j=i.stateNode;i.flags&32&&(Zr(j,""),i.flags&=-33);var rt=kf(t);ou(t,rt,j,m);break;case 3:case 4:var mt=i.stateNode.containerInfo,q=kf(t);qf(t,q,mt,m);break;default:throw Error(s(161))}}catch(et){He(t,t.return,et)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function p_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;p_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Us=!0,e.reset(),Us=!1),t=t.sibling}}function ps(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)m_(e,t),e=e.sibling;else r_(e)}function m_(t,e){var i=t.alternate;if(i===null)Yf(t,!1);else switch(t.tag){case 3:if(Jf=Gi=!1,e_(),ps(e,t),!Gi&&!fu){if(t=Bi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];nv(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jf=!0}Bi=null;break;case 5:ps(e,t);break;case 4:r=Gi,Gi=!1,ps(e,t),Gi&&(fu=!0),Gi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Yf(t,!1):ps(e,t));break;case 30:r=Gi,l=e_(),Gi=!1,ps(e,t),Gi&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;e=ia(c,m),m=ia(i.memoizedProps,m);var E=aa(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Xn=0,e=Kf(t,i,e,m,E,c,!0),Xn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(ys(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(t.flags&32)!==0?!0:r;break;default:ps(e,t)}}function Vi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)o_(t,e.alternate,e),e=e.sibling}function Fa(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Fa(i,r);break;case 1:An(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Kg(i,i.return,l),Fa(i,r);break;case 27:(r&2)!==0&&pv(i.stateNode,i.type,i.memoizedProps);case 5:An(i,i.return),i.tag!==5&&i.tag!==27||Uo(i),Fa(i,r);break;case 6:Uo(i);break;case 26:An(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),Fa(i,r);break;case 22:i.memoizedState===null&&Fa(i,r);break;case 30:An(i,i.return),Fa(i,r);break;case 7:An(i,i.return);default:Fa(i,r)}t=t.sibling}}function bi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:bi(l,c,i),Do(4,c);break;case 1:if(bi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(rt){He(r,r.return,rt)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)Im(j[l],N)}catch(rt){He(r,r.return,rt)}}E&&m&64&&Zg(c),Ii(c,c.return);break;case 27:(i&2)!==0&&$g(c);case 5:c.tag!==5&&c.tag!==27||Qg(c),bi(l,c,i),E&&r===null&&m&4&&Vf(c),Ii(c,c.return);break;case 6:Qg(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||Sn||Bh(Go(N.ownerDocument),c.type,N),bi(l,c,i),E&&r===null&&m&4&&Vf(c),Ii(c,c.return);break;case 12:bi(l,c,i);break;case 31:bi(l,c,i),E&&m&4&&f_(l,c);break;case 13:bi(l,c,i),E&&m&4&&h_(l,c);break;case 22:c.memoizedState===null&&bi(l,c,i),Ii(c,c.return);break;case 30:bi(l,c,i),Ii(c,c.return);break;case 7:Ii(c,c.return);default:bi(l,c,i)}e=e.sibling}}function eh(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&_o(i))}function nh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t))}function mi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)g_(t,e,i,r),e=e.sibling;else l&&a_(e)}function g_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&cu(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:mi(t,e,i,r),c&2048&&Do(9,e);break;case 1:mi(t,e,i,r);break;case 3:mi(t,e,i,r),l&&Jf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&_o(c)));break;case 12:if(c&2048){mi(t,e,i,r),c=e.stateNode;try{var m=e.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){He(e,e.return,j)}}else mi(t,e,i,r);break;case 31:mi(t,e,i,r);break;case 13:mi(t,e,i,r);break;case 23:break;case 22:m=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&cu(E),m._visibility&2?mi(t,e,i,r):Lo(t,e)):(l&&E!==null&&E.memoizedState!==null&&cu(e),m._visibility&2?mi(t,e,i,r):(m._visibility|=2,ms(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&eh(E,e);break;case 24:mi(t,e,i,r),c&2048&&nh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Fi(c.child,!0),Fi(e.child,!0))),mi(t,e,i,r);break;default:mi(t,e,i,r)}}function ms(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,m=e,E=i,N=r,j=m.flags;switch(m.tag){case 0:case 11:case 15:ms(c,m,E,N,l),Do(8,m);break;case 23:break;case 22:var rt=m.stateNode;m.memoizedState!==null?rt._visibility&2?ms(c,m,E,N,l):Lo(c,m):(rt._visibility|=2,ms(c,m,E,N,l)),l&&j&2048&&eh(m.alternate,m);break;case 24:ms(c,m,E,N,l),l&&j&2048&&nh(m.alternate,m);break;default:ms(c,m,E,N,l)}e=e.sibling}}function Lo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Lo(i,r),l&2048&&eh(r.alternate,r);break;case 24:Lo(i,r),l&2048&&nh(r.alternate,r);break;default:Lo(i,r)}e=e.sibling}}var Cr=8192;function wr(t,e,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)__(t,e,i),t=t.sibling}function __(t,e,i){switch(t.tag){case 26:wr(t,e,i),t.flags&Cr&&(t.memoizedState!==null?Ky(i,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Tv(i,t)));break;case 5:wr(t,e,i),t.flags&Cr&&(t=t.stateNode,(e&335544128)===e&&Tv(i,t));break;case 3:case 4:var r=Ti;Ti=Go(t.stateNode.containerInfo),wr(t,e,i),Ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(t,e,i),Cr=r):wr(t,e,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ti===null&&(ti=new Map),ti.set(r,l)}wr(t,e,i);break;default:wr(t,e,i)}}function v_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Oo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,S_(r,t)}v_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x_(t),t=t.sibling}function x_(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,pu(t)):Oo(t);break;default:Oo(t)}}function pu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,S_(r,t)}v_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ba(8,e,e.return),pu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,pu(e));break;default:pu(e)}t=t.sibling}}function S_(t,e){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Ba(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_o(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(u_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var qS={getCacheForType:function(t){var e=En(un),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return En(un).controller.signal}},YS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,xe=null,Me=0,Fe=0,ei=null,Ha=!1,gs=!1,ih=!1,da=0,an=0,Ga=0,Dr=0,mu=0,ni=0,_s=0,zo=null,qn=null,ah=!1,gu=0,y_=0,_u=1/0,vu=null,Va=null,tn=0,Ai=null,Ur=null,Xi=0,rh=0,sh=null,M_=null,vs=null,xs=null,Ss=null,Po=0,xu=null;function ii(){return(Le&2)!==0&&Me!==0?Me&-Me:Tt.T!==null?gh():At()}function E_(){if(ni===0)if((Me&536870912)===0||ge){var t=ta;ta<<=1,(ta&3932160)===0&&(ta=262144),ni=t}else ni=536870912;return t=Tn.current,t!==null&&(t.flags|=32),ni}function ys(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=iv(ia(t.memoizedProps,i))),xs===null&&(xs=[]),xs.push(e.bind(null,r))}}function Yn(t,e,i){(t===Ye&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Ms(t,0),Xa(t,Me,ni,!1)),hr(t,i),((Le&2)===0||t!==Ye)&&(t===Ye&&((Le&2)===0&&(Dr|=i),an===4&&Xa(t,Me,ni,!1)),ki(t))}function T_(t,e,i){if((Le&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ea(t,e),l=r?ZS(t,e):lh(t,e,!0),c=r;do{if(l===0){gs&&!r&&Xa(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!WS(i)){l=lh(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var E=t;l=zo;var N=E.current.memoizedState.isDehydrated;if(N&&(Ms(E,m).flags|=256),m=lh(E,m,!1),m!==2&&m!==6){if(ih&&!N){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=qn,qn=l,c!==null&&(qn===null?qn=c:qn.push.apply(qn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Ms(t,0),Xa(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xa(r,e,ni,!Ha);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=gu+300-H(),10<l)){if(Xa(r,e,ni,!Ha),fr(r,0,!0)!==0)break t;Xi=e,r.timeoutHandle=Rh(b_.bind(null,r,i,qn,vu,ah,e,ni,Dr,_s,Ha,c,"Throttled",-0,0),l);break t}b_(r,i,qn,vu,ah,e,ni,Dr,_s,Ha,c,null,-0,0)}}break}while(!0);ki(t)}function b_(t,e,i,r,l,c,m,E,N,j,rt,mt,q,et){t.timeoutHandle=-1;var Nt=e.subtreeFlags,Yt=(c&335544064)===c;if(mt=null,(Yt||Nt&8192||(Nt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},ti=null,__(e,c,mt),Yt&&(Nt=mt,Yt=t.containerInfo,Yt=(Yt.nodeType===9?Yt:Yt.ownerDocument).__reactViewTransition,Yt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=ko.bind(Nt),Yt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?gu-H():(c&4194048)===c?y_-H():0,Nt=Qy(mt,Nt),Nt!==null)){Xi=c,t.cancelPendingCommit=Nt(L_.bind(null,t,e,c,i,r,l,m,E,N,j,rt,mt,null,q,et)),Xa(t,c,m,!j);return}L_(t,e,c,i,r,l,m,E,N,j,rt,mt)}function WS(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Jn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,i,r){e=gl(t,e),e&=~mu,e&=~Dr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-wn(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&A(t,i,e)}function Su(){return(Le&6)===0?(Io(0),!1):!0}function oh(){if(xe!==null){if(Fe===0)var t=xe.return;else t=xe,oa=vr=null,mf(t),ls=null,So=0,t=xe;for(;t!==null;)jg(t.alternate,t),t=t.return;xe=null}}function Ms(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,_y(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Xi=0,oh(),Ye=t,xe=i=ra(t.current,null),Me=e,Fe=0,ei=null,Ha=!1,gs=Ea(t,e),ih=!1,_s=ni=mu=Dr=Ga=an=0,qn=zo=null,ah=!1,da=gl(t,e),Cl(),i}function A_(t,e){fe=null,Tt.H=$l,e===os||e===Fl?(e=Lm(),Fe=3):e===ef?(e=Lm(),Fe=4):Fe=e===Df?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ei=e,xe===null&&(an=1,tu(t,fi(e,t.current)))}function R_(){var t=Tn.current;return t===null?!0:(Me&4194048)===Me?Un===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Un:!1}function C_(){var t=Tt.H;return Tt.H=$l,t===null?$l:t}function w_(){var t=Tt.A;return Tt.A=qS,t}function yu(){an=4,Ha||(Me&4194048)!==Me&&Tn.current!==null||(gs=!0),(Ga&134217727)===0&&(Dr&134217727)===0||Ye===null||Xa(Ye,Me,ni,!1)}function lh(t,e,i){var r=Le;Le|=2;var l=C_(),c=w_();(Ye!==t||Me!==e)&&(vu=null,Ms(t,e)),e=!1;var m=an;t:do try{if(Fe!==0&&xe!==null){var E=xe,N=ei;switch(Fe){case 8:oh(),m=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(e=!0);var j=Fe;if(Fe=0,ei=null,Es(t,E,N,j),i&&gs){m=0;break t}break;default:j=Fe,Fe=0,ei=null,Es(t,E,N,j)}}jS(),m=an;break}catch(rt){A_(t,rt)}while(!0);return e&&t.shellSuspendCounter++,oa=vr=null,Le=r,Tt.H=l,Tt.A=c,xe===null&&(Ye=null,Me=0,Cl()),m}function jS(){for(;xe!==null;)D_(xe)}function ZS(t,e){var i=Le;Le|=2;var r=C_(),l=w_();Ye!==t||Me!==e?(vu=null,_u=H()+500,Ms(t,e)):gs=Ea(t,e);t:do try{if(Fe!==0&&xe!==null){e=xe;var c=ei;e:switch(Fe){case 1:Fe=0,ei=null,Es(t,e,c,1);break;case 2:case 9:if(Um(c)){Fe=0,ei=null,U_(e);break}e=function(){Fe!==2&&Fe!==9||Ye!==t||(Fe=7),ki(t)},c.then(e,e);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Um(c)?(Fe=0,ei=null,U_(e)):(Fe=0,ei=null,Es(t,e,c,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var E=xe;if(m?Mv(m):E.stateNode.complete){Fe=0,ei=null;var N=E.sibling;if(N!==null)xe=N;else{var j=E.return;j!==null?(xe=j,Mu(j)):xe=null}break e}}Fe=0,ei=null,Es(t,e,c,5);break;case 6:Fe=0,ei=null,Es(t,e,c,6);break;case 8:oh(),an=6;break t;default:throw Error(s(462))}}KS();break}catch(rt){A_(t,rt)}while(!0);return oa=vr=null,Tt.H=r,Tt.A=l,Le=i,xe!==null?0:(Ye=null,Me=0,Cl(),an)}function KS(){for(;xe!==null&&!zt();)D_(xe)}function D_(t){var e=Yg(t.alternate,t,da);t.memoizedProps=t.pendingProps,e===null?Mu(t):xe=e}function U_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Fg(i,e,e.pendingProps,e.type,void 0,Me);break;case 11:e=Fg(i,e,e.pendingProps,e.type.render,e.ref,Me);break;case 5:mf(e);var r=e;r===xn&&(ge?(Ol(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Ol(r),ge=!0));default:jg(i,e),e=xe=Sm(e,da),e=Yg(i,e,da)}t.memoizedProps=t.pendingProps,e===null?Mu(t):xe=e}function Es(t,e,i,r){oa=vr=null,mf(e),ls=null,So=0;var l=e.return;try{if(IS(t,l,e,i,Me)){an=1,tu(t,fi(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;an=1,tu(t,fi(i,t.current)),xe=null;return}e.flags&32768?(ge||r===1?t=!0:gs||(Me&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=Tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),N_(e,t)):Mu(e)}function Mu(t){var e=t;do{if((e.flags&32768)!==0){N_(e,Ha);return}t=e.return;var i=GS(e.alternate,e,da);if(i!==null){xe=i;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);an===0&&(an=5)}function N_(t,e){do{var i=VS(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);an=6,xe=null}function L_(t,e,i,r,l,c,m,E,N,j,rt,mt){t.cancelPendingCommit=null;do Eu();while(tn!==0);if((Le&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Ye&&(xe=Ye=null,Me=0),Ur=e,Ai=t,Xi=i,sh=l,M_=r,QS(t,e,i,m,E,N,mt)}}function QS(t,e,i,r,l,c,m){var E=e.lanes|e.childLanes;if(rh=E,E|=Vc,xc(t,i,E,r,l,c),xs=null,(i&335544064)===i?(Ss=bS(t),r=10262):(Ss=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,iy(bt,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),lu=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,l=Vt.p,Vt.p=2,c=Le,Le|=4;try{XS(t,e,i)}finally{Le=c,Vt.p=l,Tt.T=r}}tn=1,lu?vs=Ey(m,t.containerInfo,Ss,uh,ch,$S,fh,hh,JS):(uh(),ch(),fh())}function JS(t){if(tn!==0){var e=Ai.onRecoverableError;e(t,{componentStack:null})}}function $S(){tn===3&&(tn=0,m_(Ur,Ai),tn=4)}function uh(){if(tn===1){tn=0;var t=Ai,e=Ur,i=Xi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var l=Vt.p;Vt.p=2;var c=Le;Le|=4;try{No=fu=!1,d_(e,t,i),i=Th;var m=cm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&um(E.ownerDocument.documentElement,E)){if(N!==null&&Ic(E)){var j=N.start,rt=N.end;if(rt===void 0&&(rt=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(rt,E.value.length);else{var mt=E.ownerDocument||document,q=mt&&mt.defaultView||window;if(q.getSelection){var et=q.getSelection(),Nt=E.textContent.length,Yt=Math.min(N.start,Nt),he=N.end===void 0?Yt:Math.min(N.end,Nt);!et.extend&&Yt>he&&(m=he,he=Yt,Yt=m);var Y=lm(E,Yt),F=lm(E,he);if(Y&&F&&(et.rangeCount!==1||et.anchorNode!==Y.node||et.anchorOffset!==Y.offset||et.focusNode!==F.node||et.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(Y.node,Y.offset),et.removeAllRanges(),Yt>he?(et.addRange(J),et.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),et.addRange(J))}}}}for(mt=[],et=E;et=et.parentNode;)et.nodeType===1&&mt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Us=!!Eh,Th=Eh=null}finally{Le=c,Vt.p=l,Tt.T=r}}t.current=e,tn=2}}function ch(){if(tn===2){tn=0;var t=Ai,e=Ur,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var r=Vt.p;Vt.p=2;var l=Le;Le|=4;try{o_(t,e.alternate,e)}finally{Le=l,Vt.p=r,Tt.T=i}}tn=3}}function fh(){if(tn===4||tn===3){tn=0;var t=vs;vs=null,ce();var e=Ai,i=Ur,r=Xi,l=M_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Ur=Ai=null,O_(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Va=null),K(r),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,c=Vt.p,Vt.p=2,Tt.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{Tt.T=i,Vt.p=c}}if(l=xs,m=Ss,Ss=null,l!==null&&(xs=null,m===null&&(m=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(m),i!==void 0&&t.finished.finally(i);(Xi&3)!==0&&Eu(),ki(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===xu?Po++:(Po=0,xu=e):(Po=0,xu=null),Io(0)}}function O_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_o(e)))}function Eu(){return vs!==null&&(vs.skipTransition(),vs=null),uh(),ch(),fh(),hh()}function hh(){if(tn!==5)return!1;var t=Ai,e=rh;rh=0;var i=K(Xi),r=Tt.T,l=Vt.p;try{Vt.p=32>i?32:i,Tt.T=null,i=sh,sh=null;var c=Ai,m=Xi;if(tn=0,Ur=Ai=null,Xi=0,(Le&6)!==0)throw Error(s(331));var E=Le;if(Le|=4,x_(c.current),g_(c,c.current,m,i),Le=E,Io(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Vt.p=l,Tt.T=r,O_(t,e)}}function z_(t,e,i){e=fi(i,e),e=wf(t.stateNode,e,2),t=Oa(t,e,2),t!==null&&(hr(t,2),ki(t))}function He(t,e,i){if(t.tag===3)z_(t,t,i);else for(;e!==null;){if(e.tag===3){z_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=fi(i,t),i=Ug(2),r=Oa(e,i,2),r!==null&&(Ng(i,r,e,t),hr(r,2),ki(r));break}}e=e.return}}function dh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new YS;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(ih=!0,l.add(i),t=ty.bind(null,t,e,i),e.then(t,t))}function ty(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ye===t&&(Me&i)===i&&((an===4||an===3&&(Me&62914560)===Me&&300>H()-gu)&&(Le&2)===0?Ms(t,0):mu|=i,_s===Me&&(_s=0)),ki(t)}function P_(t,e){e===0&&(e=_l()),t=mr(t,e),t!==null&&(hr(t,e),ki(t))}function ey(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),P_(t,i)}function ny(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),P_(t,i)}function iy(t,e){return ne(t,e)}var Ts=null,bs=null,ph=!1,Tu=!1,mh=!1,ka=0;function ki(t){t!==bs&&t.next===null&&(bs===null?Ts=bs=t:bs=bs.next=t),Tu=!0,ph||(ph=!0,ry())}function Io(t,e){if(!mh&&Tu){mh=!0;do for(var i=!1,r=Ts;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-wn(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,H_(r,c))}else c=Me,c=fr(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ea(r,c)||(i=!0,H_(r,c));r=r.next}while(i);mh=!1}}function ay(){I_()}function I_(){Tu=ph=!1;var t=0;ka!==0&&gy()&&(t=ka);for(var e=H(),i=null,r=Ts;r!==null;){var l=r.next,c=B_(r,e);c===0?(r.next=null,i===null?Ts=l:i.next=l,l===null&&(bs=i)):(i=r,(t!==0||(c&3)!==0)&&(Tu=!0)),r=l}tn!==0&&tn!==5||Io(t),ka!==0&&(ka=0)}function B_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-wn(c),E=1<<m,N=l[m];N===-1?((E&i)===0||(E&r)!==0)&&(l[m]=vc(E,e)):N<=e&&(t.expiredLanes|=E),c&=~E}if(e=Ye,i=Me,i=fr(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ea(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&Zt(r),K(i)){case 2:case 8:i=Xt;break;case 32:i=bt;break;case 268435456:i=Wt;break;default:i=bt}return r=F_.bind(null,t),i=ne(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function F_(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Eu()&&t.callbackNode!==i)return null;var r=Me;return r=fr(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(T_(t,r,e),B_(t,H()),t.callbackNode!=null&&t.callbackNode===i?F_.bind(null,t):null)}function H_(t,e){if(Eu())return null;T_(t,e,!0)}function ry(){vy(function(){(Le&6)!==0?ne(Ut,ay):I_()})}function gh(){if(ka===0){var t=yr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),ka=t}return ka}function G_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sl(t)}function sy(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=G_((l[qt]||null).action),m=r.submitter;m&&(e=(e=m[qt]||null)?G_(e.formAction):m.getAttribute("formAction"),e!==null&&(c=e,m=null));var E=new Tl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var N=new FormData(l,m);Tf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,m),Tf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var _h=0;_h<Gc.length;_h++){var vh=Gc[_h],oy=vh.toLowerCase(),ly=vh[0].toUpperCase()+vh.slice(1);Mi(oy,"on"+ly)}Mi(dm,"onAnimationEnd"),Mi(pm,"onAnimationIteration"),Mi(mm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(_S,"onTransitionRun"),Mi(vS,"onTransitionStart"),Mi(xS,"onTransitionCancel"),Mi(gm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function V_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var m=r.length-1;0<=m;m--){var E=r[m],N=E.instance,j=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(rt){Rl(rt)}l.currentTarget=null,c=N}else for(m=0;m<r.length;m++){if(E=r[m],N=E.instance,j=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(rt){Rl(rt)}l.currentTarget=null,c=N}}}}function Se(t,e){var i=e[$t];i===void 0&&(i=e[$t]=new Set);var r=t+"__bubble";i.has(r)||(X_(e,t,2,!1),i.add(r))}function xh(t,e,i){var r=0;e&&(r|=4),X_(i,t,r,e)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Sh(t){if(!t[bu]){t[bu]=!0,je.forEach(function(i){i!=="selectionchange"&&(uy.has(i)||xh(i,!1,t),xh(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bu]||(e[bu]=!0,xh("selectionchange",!1,e))}}function X_(t,e,i,r){switch(Nv(e)){case 2:var l=eM;break;case 8:l=nM;break;default:l=Hh}i=l.bind(null,e,i,t),l=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function yh(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var N=m.tag;if((N===3||N===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=Ne(E),m===null)return;if(N=m.tag,N===5||N===6||N===26||N===27){r=c=m;continue t}E=E.parentNode}}r=r.return}Xp(function(){var j=c,rt=bc(i),mt=[];t:{var q=_m.get(t);if(q!==void 0){var et=Tl,Nt=t;switch(t){case"keypress":if(Ml(i)===0)break t;case"keydown":case"keyup":et=Wx;break;case"focusin":Nt="focus",et=Uc;break;case"focusout":Nt="blur",et=Uc;break;case"beforeblur":case"afterblur":et=Uc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Jx;break;case dm:case pm:case mm:et=Bx;break;case gm:et=tS;break;case"scroll":case"scrollend":et=Lx;break;case"wheel":et=nS;break;case"copy":case"cut":case"paste":et=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=jp;break;case"submit":et=Kx;break;case"toggle":case"beforetoggle":et=aS}var Yt=(e&4)!==0,he=!Yt&&(t==="scroll"||t==="scrollend"),Y=Yt?q!==null?q+"Capture":null:q;Yt=[];for(var F=j,J;F!==null;){var dt=F;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Y===null||(dt=ro(F,Y),dt!=null&&Yt.push(Fo(F,dt,J))),he)break;F=F.return}0<Yt.length&&(q=new et(q,Nt,null,i,rt),mt.push({event:q,listeners:Yt}))}}if((e&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",et&&i!==Tc&&(Nt=i.relatedTarget||i.fromElement)&&(Ne(Nt)||Nt[ee]))break t;(q||et)&&(Nt=rt.window===rt?rt:(et=rt.ownerDocument)?et.defaultView||et.parentWindow:window,q?(et=i.relatedTarget||i.toElement,q=j,et=et?Ne(et):null,et!==null&&(he=f(et),Yt=et.tag,et!==he||Yt!==5&&Yt!==27&&Yt!==6)&&(et=null)):(q=null,et=j),q!==et&&(Yt=Yp,dt="onMouseLeave",Y="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=jp,dt="onPointerLeave",Y="onPointerEnter",F="pointer"),he=q==null?Nt:mn(q),J=et==null?Nt:mn(et),Nt=new Yt(dt,F+"leave",q,i,rt),Nt.target=he,Nt.relatedTarget=J,dt=null,Ne(rt)===j&&(Yt=new Yt(Y,F+"enter",et,i,rt),Yt.target=J,Yt.relatedTarget=he,dt=Yt),he=dt,Yt=q&&et?B(q,et,cy):null,q!==null&&k_(mt,Nt,q,Yt,!1),et!==null&&he!==null&&k_(mt,he,et,Yt,!0)))}t:{if(q=j?mn(j):window,et=q.nodeName&&q.nodeName.toLowerCase(),et==="select"||et==="input"&&q.type==="file")var Gt=nm;else if(tm(q))if(im)Gt=pS;else{Gt=hS;var Ee=fS}else et=q.nodeName,!et||et.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&Ec(j.elementType)&&(Gt=nm):Gt=dS;if(Gt&&(Gt=Gt(t,j))){em(mt,Gt,i,rt);break t}Ee&&Ee(t,q,j)}switch(Ee=j?mn(j):window,t){case"focusin":(tm(Ee)||Ee.contentEditable==="true")&&($r=Ee,Bc=j,po=null);break;case"focusout":po=Bc=$r=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,fm(mt,i,rt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":fm(mt,i,rt)}var Jt;if(Lc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else Jr?Jp(t,i)&&(re="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&(Zp&&i.locale!=="ko"&&(Jr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Jr&&(Jt=kp()):(ba=rt,Cc="value"in ba?ba.value:ba.textContent,Jr=!0)),Ee=Au(j,re),0<Ee.length&&(re=new Wp(re,t,null,i,rt),mt.push({event:re,listeners:Ee}),Jt?re.data=Jt:(Jt=$p(i),Jt!==null&&(re.data=Jt)))),(Jt=sS?oS(t,i):lS(t,i))&&(re=Au(j,"onBeforeInput"),0<re.length&&(Ee=new Wp("onBeforeInput","beforeinput",null,i,rt),mt.push({event:Ee,listeners:re}),Ee.data=Jt)),sy(mt,t,j,i,rt)}V_(mt,e)})}function Fo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Au(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ro(t,i),l!=null&&r.unshift(Fo(t,l,c)),l=ro(t,e),l!=null&&r.push(Fo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function cy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k_(t,e,i,r,l){for(var c=e._reactName,m=[];i!==null&&i!==r;){var E=i,N=E.alternate,j=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||j===null||(N=j,l?(j=ro(i,c),j!=null&&m.unshift(Fo(i,j,N))):l||(j=ro(i,c),j!=null&&m.push(Fo(i,j,N)))),i=i.return}m.length!==0&&t.push({event:e,listeners:m})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(hy,"")}function Y_(t,e){return e=q_(e),q_(t)===e}function Ge(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Zr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Zr(t,""+r);else return;break;case"className":xl(t,"class",r);break;case"tabIndex":xl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":xl(t,i,r);break;case"style":Gp(t,r,c);return;case"data":if(e!=="object"){xl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Sl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Ge(t,e,"name",l.name,l,null),Ge(t,e,"formEncType",l.formEncType,l,null),Ge(t,e,"formMethod",l.formMethod,l,null),Ge(t,e,"formTarget",l.formTarget,l,null)):(Ge(t,e,"encType",l.encType,l,null),Ge(t,e,"method",l.method,l,null),Ge(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Sl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Oi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Sl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),vl(t,"popover",r);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":vl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Ux.get(i)||i,vl(t,i,r);else return}we=!0}function Mh(t,e,i,r,l,c){switch(i){case"style":Gp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Zr(t,r);else if(typeof r=="number"||typeof r=="bigint")Zr(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[qt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):vl(t,i,r)}return}we=!0}function Rn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ge(t,e,c,m,i,null)}}l&&Ge(t,e,"srcSet",i.srcSet,i,null),r&&Ge(t,e,"src",i.src,i,null);return;case"input":Se("invalid",t);var E=c=m=l=null,N=null,j=null;for(r in i)if(i.hasOwnProperty(r)){var rt=i[r];if(rt!=null)switch(r){case"name":l=rt;break;case"type":m=rt;break;case"checked":N=rt;break;case"defaultChecked":j=rt;break;case"value":c=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,e));break;default:Ge(t,e,r,rt,i,null)}}Ip(t,c,E,N,j,m,l,!1);return;case"select":Se("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:Ge(t,e,l,E,i,null)}e=c,i=m,t.multiple=!!r,e!=null?jr(t,!!r,e,!1):i!=null&&jr(t,!!r,i,!0);return;case"textarea":Se("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ge(t,e,m,E,i,null)}Fp(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,e,N,r,i,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<Bo.length;r++)Se(Bo[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in i)if(i.hasOwnProperty(j)&&(r=i[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ge(t,e,j,r,i,null)}return;default:if(Ec(e)){for(rt in i)i.hasOwnProperty(rt)&&(r=i[rt],r!==void 0&&Mh(t,e,rt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Ge(t,e,E,r,i,null))}var dy={};function py(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,N=null,j=null,rt=null;for(et in i){var mt=i[et];if(i.hasOwnProperty(et)&&mt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":N=mt;default:r.hasOwnProperty(et)||Ge(t,e,et,null,r,mt)}}for(var q in r){var et=r[q];if(mt=i[q],r.hasOwnProperty(q)&&(et!=null||mt!=null))switch(q){case"type":et!==mt&&(we=!0),c=et;break;case"name":et!==mt&&(we=!0),l=et;break;case"checked":et!==mt&&(we=!0),j=et;break;case"defaultChecked":et!==mt&&(we=!0),rt=et;break;case"value":et!==mt&&(we=!0),m=et;break;case"defaultValue":et!==mt&&(we=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,e));break;default:et!==mt&&Ge(t,e,q,et,r,mt)}}yc(t,m,E,N,j,rt,c,l);return;case"select":et=m=E=q=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":et=N;default:r.hasOwnProperty(c)||Ge(t,e,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(we=!0),q=c;break;case"defaultValue":c!==N&&(we=!0),E=c;break;case"multiple":c!==N&&(we=!0),m=c;default:c!==N&&Ge(t,e,l,c,r,N)}e=E,i=m,r=et,q!=null?jr(t,!!i,q,!1):!!r!=!!i&&(e!=null?jr(t,!!i,e,!0):jr(t,!!i,i?[]:"",!1));return;case"textarea":et=q=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,e,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(we=!0),q=l;break;case"defaultValue":l!==c&&(we=!0),et=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ge(t,e,m,l,r,c)}Bp(t,q,et);return;case"option":for(var Nt in i)q=i[Nt],i.hasOwnProperty(Nt)&&q!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:Ge(t,e,Nt,null,r,q));for(N in r)q=r[N],et=i[N],r.hasOwnProperty(N)&&q!==et&&(q!=null||et!=null)&&(N==="selected"?(q!==et&&(we=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol"):Ge(t,e,N,q,r,et));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in i)q=i[Yt],i.hasOwnProperty(Yt)&&q!=null&&!r.hasOwnProperty(Yt)&&Ge(t,e,Yt,null,r,q);for(j in r)if(q=r[j],et=i[j],r.hasOwnProperty(j)&&q!==et&&(q!=null||et!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,e));break;default:Ge(t,e,j,q,r,et)}return;default:if(Ec(e)){for(var he in i)q=i[he],i.hasOwnProperty(he)&&q!==void 0&&!r.hasOwnProperty(he)&&Mh(t,e,he,void 0,r,q);for(rt in r)q=r[rt],et=i[rt],!r.hasOwnProperty(rt)||q===et||q===void 0&&et===void 0||Mh(t,e,rt,q,r,et);return}}for(var Y in i)q=i[Y],i.hasOwnProperty(Y)&&q!=null&&!r.hasOwnProperty(Y)&&Ge(t,e,Y,null,r,q);for(mt in r)q=r[mt],et=i[mt],!r.hasOwnProperty(mt)||q===et||q==null&&et==null||Ge(t,e,mt,q,r,et)}function W_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&W_(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],j=N.startTime;if(j>E)break;var rt=N.transferSize,mt=N.initiatorType;rt&&W_(mt)&&(N=N.responseEnd,m+=rt*(N<E?1:(E-j)/(N-j)))}if(--r,e+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function Ho(t){return t.nodeType===9?t:t.ownerDocument}function j_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function K_(t,e,i,r){return i=Ho(i).createElement(t),i[Dt]=r,i[qt]=e,Rn(i,t,e),Ce(i),i}function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,J_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rh,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(xy)}:Rh;function xy(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function $_(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ns(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")zh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,zh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Ue]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&zh(t.ownerDocument.body);i=l}while(i);Ns(e)}function tv(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function ev(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function nv(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Sy(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ch(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return Sy(e,i,t)}function yy(t){return t.documentElement.clientHeight}function My(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ey(t,e,i,r,l,c,m,E,N){var j=e.nodeType===9?e:e.ownerDocument;try{var rt=j.startViewTransition({update:function(){var q=j.defaultView,et=q.navigation&&q.navigation.transition,Nt=j.fonts.status;r();var Yt=[];if(Nt==="loaded"&&(yy(j),j.fonts.status==="loading"&&Yt.push(j.fonts.ready)),Nt=Yt.length,t!==null)for(var he=t.suspenseyImages,Y=0,F=0;F<he.length;F++){var J=he[F];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<q.innerHeight&&dt.left<q.innerWidth){if(Y+=Ev(J),Y>wu){Yt.length=Nt;break}J=new Promise(My.bind(J)),Yt.push(J)}}}if(0<Yt.length)return q=Promise.race([Promise.all(Yt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(l,l),(et?Promise.allSettled([et.finished,q]):q).then(c,c);if(l(),et)return et.finished.then(c,c);c()},types:i});j.__reactViewTransition=rt;var mt=[];return rt.ready.then(function(){for(var q=j.documentElement.getAnimations({subtree:!0}),et=0;et<q.length;et++){var Nt=q[et],Yt=Nt.effect,he=Yt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Nt),Nt=Yt.getKeyframes();for(var Y=he=void 0,F=!0,J=0;J<Nt.length;J++){var dt=Nt[J],Gt=dt.width;if(he===void 0)he=Gt;else if(he!==Gt){F=!1;break}if(Gt=dt.height,Y===void 0)Y=Gt;else if(Y!==Gt){F=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}F&&he!==void 0&&Y!==void 0&&(Yt.setKeyframes(Nt),F=getComputedStyle(Yt.target,Yt.pseudoElement),F.width!==he||F.height!==Y)&&(F=Nt[0],F.width=he,F.height=Y,F=Nt[Nt.length-1],F.width=he,F.height=Y,Yt.setKeyframes(Nt))}}m()},function(q){j.__reactViewTransition===rt&&(j.__reactViewTransition=null);try{typeof q=="object"&&q!==null&&q.name==="InvalidStateError"&&(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null),q!==null&&N(q)}finally{r(),l(),m()}}),rt.finished.finally(function(){for(var q=0;q<mt.length;q++)mt[q].cancel();j.__reactViewTransition===rt&&(j.__reactViewTransition=null),E()}),rt}catch{return r(),l(),m(),null}}function Nr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Nr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:O({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Nr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function iv(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(rv(c,t,e,i)===-1){var m=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){m.removeEventListener(t,e,i),typeof e=="function"?e.call(this,N):e.handleEvent(N)}),r!==null&&(l=m.removeEventListener.bind(m,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=As(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Ty,t,E,r)}this._eventListeners=c}};function Ty(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ai.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=rv(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=As(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,by,t,i,l),r.splice(e,1),c!==null&&c()}};function by(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function As(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function av(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function rv(t,e,i,r){if(t.length===0)return-1;r=av(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&av(c.optionsOrUseCapture)===r)return l}return-1}ai.prototype.dispatchEvent=function(t){var e=S(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,As(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,As(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ai.prototype.focus=function(t){p(this._fragmentFiber.child,!0,sv,t,void 0,void 0)};function sv(t,e){return t.tag===6?!1:(t=y(t),Iy(t,e))}ai.prototype.focusLast=function(t){var e=[];p(this._fragmentFiber.child,!0,wh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!sv(e[i],t);i--);};function wh(t,e){return e.push(t),!1}ai.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=Ho(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Ay,t,void 0,void 0))};function Ay(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Ry,t,void 0,void 0)};function Ry(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ai.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),p(this._fragmentFiber.child,!1,Cy,t,void 0,void 0);for(var i=e=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ri[e++]=r}Ri.length=e}};function Cy(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ri=[],Dh=!1;function wy(t,e,i){Ri.push({fragmentInstance:t,observer:e,instance:i}),Dh||(Dh=!0,By(function(){Dh=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ai.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Dy,t,void 0,void 0),t};function Dy(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ai.prototype.getRootNode=function(t){var e=S(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ai.prototype.compareDocumentPosition=function(t){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,wh,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Uy(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Uy(t,e,i,r,l){var c=Ne(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=S(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=B(i,c,G),e===null?e=!1:(p(e,!0,z,c,i),c=x,x=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=B(r,c,G),e===null?e=!1:(p(e,!0,D,c,r),c=x,P=x=null,e=c!==null)),e):!1}function ov(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];p(this._fragmentFiber.child,!1,wh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),ov(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),ov(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Ny(t,e){return t=y(t),lv(t,e),!1}function lv(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function uv(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,As(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ri.length;E++){var N=Ri[E];(N.fragmentInstance!==e||N.observer!==c||N.instance!==t)&&(Ri[m++]=N)}Ri.length=m,c.observe(t)}),lv(t,e))}function Ly(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,As(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?wy(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Uh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Uh(i),te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Oy(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ue])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function zy(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=gi(t.nextSibling),t===null))return null;return t}function cv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=gi(t.nextSibling),t===null))return null;return t}function Nh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Py(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Oh=null;function fv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return gi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Iy(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function By(t){J_(function(){J_(function(e){return t(e)})})}function dv(t,e,i){switch(e=Ho(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pv(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Ge(t,e,r,null,dy,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),te(t)}function zh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);te(t)}var _i=new Map,mv=new Set;function Go(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var pa=Vt.d;Vt.d={f:Fy,r:Hy,D:Gy,C:Vy,L:Xy,m:ky,X:Yy,S:qy,M:Wy};function Fy(){var t=pa.f(),e=Su();return t||e}function Hy(t){var e=me(t);e!==null&&e.tag===5&&e.type==="form"?_g(e):pa.r(t)}var Rs=typeof document>"u"?null:document;function gv(t,e,i){var r=Rs;if(r&&typeof e=="string"&&e){var l=ui(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),mv.has(l)||(mv.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Rn(e,"link",t),Ce(e),r.head.appendChild(e)))}}function Gy(t){pa.D(t),gv("dns-prefetch",t,null)}function Vy(t,e){pa.C(t,e),gv("preconnect",t,e)}function Xy(t,e,i){pa.L(t,e,i);var r=Rs;if(r&&t&&e){var l='link[rel="preload"][as="'+ui(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+ui(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+ui(i.imageSizes)+'"]')):l+='[href="'+ui(t)+'"]';var c=l;switch(e){case"style":c=Cs(t);break;case"script":c=ws(t)}if(!(_i.has(c)||(t=O({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),_i.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Vo(c))||e==="script"&&r.querySelector(Xo(c))))){var m=r.createElement("link");Rn(m,"link",t),e==="style"&&(m[Re]=!0,m.onload=m.onerror=function(){Ta(m)}),Ce(m),r.head.appendChild(m)}}}function ky(t,e){pa.m(t,e);var i=Rs;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ui(r)+'"][href="'+ui(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ws(t)}if(!_i.has(c)&&(t=O({rel:"modulepreload",href:t},e),_i.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Xo(c)))return}r=i.createElement("link"),Rn(r,"link",t),Ce(r),i.head.appendChild(r)}}}function qy(t,e,i){pa.S(t,e,i);var r=Rs;if(r&&t){var l=Kn(r).hoistableStyles,c=Cs(t);e=e||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Vo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},i),(i=_i.get(c))&&Ph(t,i);var N=m=r.createElement("link");Ce(N),Rn(N,"link",t),N._p=new Promise(function(j,rt){N.onload=j,N.onerror=rt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ru(m,e,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function Yy(t,e){pa.X(t,e);var i=Rs;if(i&&t){var r=Kn(i).hoistableScripts,l=ws(t),c=r.get(l);c||(c=i.querySelector(Xo(l)),c||(t=O({src:t,async:!0},e),(e=_i.get(l))&&Ih(t,e),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Wy(t,e){pa.M(t,e);var i=Rs;if(i&&t){var r=Kn(i).hoistableScripts,l=ws(t),c=r.get(l);c||(c=i.querySelector(Xo(l)),c||(t=O({src:t,async:!0,type:"module"},e),(e=_i.get(l))&&Ih(t,e),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function _v(t,e,i,r){var l=(l=qe.current)?Go(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Cs(i.href),e=Kn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Cs(i.href);var c=Kn(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Vo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=_i.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},_i.set(t,c)),jy(l,t,c,m.state))),e&&r===null)throw Error(s(528,""));return m}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=ws(i),e=Kn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Cs(t){return'href="'+ui(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function vv(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function jy(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Re]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Re]=!0,e.onload=e.onerror=Ta.bind(null,e),Rn(e,"link",i),Ce(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function ws(t){return'[src="'+ui(t)+'"]'}function Xo(t){return"script[async]"+t}function xv(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+ui(i.href)+'"]');if(r)return e.instance=r,Ce(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ce(r),Rn(r,"style",l),Ru(r,i.precedence,t),e.instance=r;case"stylesheet":l=Cs(i.href);var c=t.querySelector(Vo(l));if(c)return e.state.loading|=4,e.instance=c,Ce(c),c;r=vv(i),(l=_i.get(l))&&Ph(r,l),c=(t.ownerDocument||t).createElement("link"),Ce(c);var m=c;return m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),Rn(c,"link",r),e.state.loading|=4,Ru(c,i.precedence,t),e.instance=c;case"script":return c=ws(i.src),(l=t.querySelector(Xo(c)))?(e.instance=l,Ce(l),l):(r=i,(l=_i.get(c))&&(r=O({},i),Ih(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),Rn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Ru(r,i.precedence,t));return e.instance}function Ru(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Ph(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ih(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Cu=null;function Sv(t,e,i){if(Cu===null){var r=new Map,l=Cu=new Map;l.set(i,r)}else l=Cu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ue]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(e)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function Bh(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Zy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function yv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ev(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Tv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Ev(e),t.suspenseyImages.push(e)),t=Jy.bind(t),e.decode().then(t,t))}function Ky(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Cs(r.href),c=e.querySelector(Vo(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ko.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Ce(c);return}c=e.ownerDocument||e,r=vv(r),(l=_i.get(l))&&Ph(r,l),c=c.createElement("link"),Ce(c);var m=c;m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),Rn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=ko.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var wu=0;function Qy(t,e){return t.stylesheets&&t.count===0&&Uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&wu===0&&(wu=62500*my());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>wu?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function bv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Uu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function ko(){this.count--,bv(this)}function Jy(){this.imgCount--,bv(this)}var Du=null;function Uu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Du=new Map,e.forEach($y,t),Du=null,ko.call(t))}function $y(t,e){if(!(e.state.loading&4)){var i=Du.get(t);if(i)var r=i.get(null);else{i=new Map,Du.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=e.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=ko.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ds={$$typeof:st,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function tM(t,e,i,r,l,c,m,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ao(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.hiddenUpdates=ao(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function Av(t,e,i,r,l,c,m,E,N,j,rt,mt){return t=new tM(t,e,i,m,N,j,rt,mt,E),e=1,c===!0&&(e|=24),c=Vn(3,null,null,e),t.current=c,c.stateNode=t,e=Jc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},nf(c),t}function Rv(t){return t?(t=ns,t):ns}function Cv(t,e,i,r,l,c){l=Rv(l),r.context===null?r.context=l:r.pendingContext=l,r=La(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Oa(t,r,e),i!==null&&(Yn(i,t,e),yo(i,t,e))}function wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Fh(t,e){wv(t,e),(t=t.alternate)&&wv(t,e)}function Dv(t){if(t.tag===13||t.tag===31){var e=mr(t,67108864);e!==null&&Yn(e,t,67108864),Fh(t,67108864)}}function Uv(t){if(t.tag===13||t.tag===31){var e=ii();e=ut(e);var i=mr(t,e);i!==null&&Yn(i,t,e),Fh(t,e)}}var Us=!0;function eM(t,e,i,r){var l=Tt.T;Tt.T=null;var c=Vt.p;try{Vt.p=2,Hh(t,e,i,r)}finally{Vt.p=c,Tt.T=l}}function nM(t,e,i,r){var l=Tt.T;Tt.T=null;var c=Vt.p;try{Vt.p=8,Hh(t,e,i,r)}finally{Vt.p=c,Tt.T=l}}function Hh(t,e,i,r){if(Us){var l=Gh(r);if(l===null)yh(t,e,r,Nu,i),Lv(t,r);else if(aM(l,t,e,i,r))r.stopPropagation();else if(Lv(t,r),e&4&&-1<iM.indexOf(t)){for(;l!==null;){var c=me(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=li(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var N=1<<31-wn(m);E.entanglements[1]|=N,m&=~N}ki(c),(Le&6)===0&&(_u=H()+500,Io(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&Yn(E,c,2),Su(),Fh(c,2)}if(c=Gh(r),c===null&&yh(t,e,r,Nu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else yh(t,e,r,null,i)}}function Gh(t){return t=bc(t),Vh(t)}var Nu=null;function Vh(t){if(Nu=null,t=Ne(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Nu=t,null}function Nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ut:return 2;case Xt:return 8;case bt:case vt:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Xh=!1,Ya=null,Wa=null,ja=null,qo=new Map,Yo=new Map,Za=[],iM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(t,e){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function Wo(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=me(e),e!==null&&Dv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function aM(t,e,i,r,l){switch(e){case"focusin":return Ya=Wo(Ya,t,e,i,r,l),!0;case"dragenter":return Wa=Wo(Wa,t,e,i,r,l),!0;case"mouseover":return ja=Wo(ja,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return qo.set(c,Wo(qo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Yo.set(c,Wo(Yo.get(c)||null,t,e,i,r,l)),!0}return!1}function Ov(t){var e=Ne(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,Pt(t.priority,function(){Uv(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,Pt(t.priority,function(){Uv(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Gh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Tc=r,i.target.dispatchEvent(r),Tc=null}else return e=me(i),e!==null&&Dv(e),t.blockedOn=i,!1;e.shift()}return!0}function zv(t,e,i){Lu(t)&&i.delete(e)}function rM(){Xh=!1,Ya!==null&&Lu(Ya)&&(Ya=null),Wa!==null&&Lu(Wa)&&(Wa=null),ja!==null&&Lu(ja)&&(ja=null),qo.forEach(zv),Yo.forEach(zv)}function Ou(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rM)))}var zu=null;function Pv(t){zu!==t&&(zu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zu===t&&(zu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Vh(r||i)===null)continue;break}var c=me(i);c!==null&&(t.splice(e,3),e-=3,Tf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ns(t){function e(N){return Ou(N,t)}Ya!==null&&Ou(Ya,t),Wa!==null&&Ou(Wa,t),ja!==null&&Ou(ja,t),qo.forEach(e),Yo.forEach(e);for(var i=0;i<Za.length;i++){var r=Za[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Za.length&&(i=Za[0],i.blockedOn===null);)Ov(i),i.blockedOn===null&&Za.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[qt]||null;if(typeof c=="function")m||Pv(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[qt]||null)E=m.formAction;else if(Vh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Pv(i)}}}function Iv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function kh(t){this._internalRoot=t}Pu.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ii();Cv(i,r,t,e,null,null)},Pu.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cv(t.current,2,null,t,null,null),Su(),e[ee]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=At();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Za.length&&e!==0&&e<Za[i].priority;i++);Za.splice(i,0,t),i===0&&Ov(t)}};var Bv=n.version;if(Bv!=="19.3.0")throw Error(s(527,Bv,"19.3.0"));Vt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var sM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{ye=Iu.inject(sM),$e=Iu}catch{}}return Zo.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=Rg,c=Cg,m=wg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=Av(t,1,!1,null,null,i,r,null,l,c,m,Iv),t[ee]=e.current,Sh(t),new kh(e)},Zo.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Rg,m=Cg,E=wg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),e=Av(t,1,!0,e,i??null,r,l,N,c,m,E,Iv),e.context=Rv(null),i=e.current,r=ii(),r=ut(r),l=La(r),l.callback=null,Oa(i,l,r),i=r,e.current.lanes=i,hr(e,i),ki(e),t[ee]=e.current,Sh(t),new Pu(e)},Zo.version="19.3.0",Zo}var jv;function gM(){if(jv)return Yh.exports;jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Yh.exports=mM(),Yh.exports}var _M=gM(),Te=Sp();const vM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j0=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();var xM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const SM=Te.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},_)=>Te.createElement("svg",{ref:_,...xM,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:j0("lucide",u),...d},[...h.map(([g,v])=>Te.createElement(g,v)),...Array.isArray(f)?f:[f]]));const Zn=(o,n)=>{const a=Te.forwardRef(({className:s,...u},f)=>Te.createElement(SM,{ref:f,iconNode:n,className:j0(`lucide-${vM(o)}`,s),...u}));return a.displayName=`${o}`,a};const yM=Zn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const MM=Zn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const EM=Zn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const TM=Zn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);const bM=Zn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);const AM=Zn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const RM=Zn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const CM=Zn("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);const Zv=Zn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const wM=Zn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const Kv=Zn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);const DM=Zn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const UM=Zn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);const Qh=Zn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const yp="180",NM=0,Qv=1,LM=2,Z0=1,OM=2,Sa=3,sr=0,jn=1,ya=2,ar=0,js=1,Jv=2,$v=3,t0=4,zM=5,Gr=100,PM=101,IM=102,BM=103,FM=104,HM=200,GM=201,VM=202,XM=203,Ud=204,Nd=205,kM=206,qM=207,YM=208,WM=209,jM=210,ZM=211,KM=212,QM=213,JM=214,Ld=0,Od=1,zd=2,Ks=3,Pd=4,Id=5,Bd=6,Fd=7,K0=0,$M=1,tE=2,rr=0,eE=1,nE=2,iE=3,Q0=4,aE=5,rE=6,sE=7,J0=300,Qs=301,Js=302,fc=303,Hd=304,mc=306,Gd=1e3,Xr=1001,Vd=1002,oi=1003,oE=1004,Bu=1005,Si=1006,Jh=1007,kr=1008,Qi=1009,$0=1010,tx=1011,al=1012,Mp=1013,qr=1014,Yi=1015,ul=1016,Ep=1017,Tp=1018,rl=1020,ex=35902,nx=35899,ix=1021,ax=1022,yi=1023,sl=1026,ol=1027,rx=1028,bp=1029,sx=1030,Ap=1031,Rp=1033,sc=33776,oc=33777,lc=33778,uc=33779,Xd=35840,kd=35841,qd=35842,Yd=35843,Wd=36196,jd=37492,Zd=37496,Kd=37808,Qd=37809,Jd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,up=37821,cp=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,lE=3200,uE=3201,ox=0,cE=1,ir="",xi="srgb",$s="srgb-linear",hc="linear",ke="srgb",Ls=7680,e0=519,fE=512,hE=513,dE=514,lx=515,pE=516,mE=517,gE=518,_E=519,n0=35044,i0="300 es",Wi=2e3,dc=2001;class eo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const u=s[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=Math.PI/180,_p=180/Math.PI;function cl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[n&255]+Nn[n>>8&255]+"-"+Nn[n>>16&15|64]+Nn[n>>24&255]+"-"+Nn[a&63|128]+Nn[a>>8&255]+"-"+Nn[a>>16&255]+Nn[a>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function be(o,n,a){return Math.max(n,Math.min(a,o))}function vE(o,n){return(o%n+n)%n}function td(o,n,a){return(1-a)*o+a*n}function Ko(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(n=0,a=0){ze.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let _=s[u+0],g=s[u+1],v=s[u+2],p=s[u+3];const S=f[h+0],M=f[h+1],b=f[h+2],R=f[h+3];if(d===0){n[a+0]=_,n[a+1]=g,n[a+2]=v,n[a+3]=p;return}if(d===1){n[a+0]=S,n[a+1]=M,n[a+2]=b,n[a+3]=R;return}if(p!==R||_!==S||g!==M||v!==b){let y=1-d;const x=_*S+g*M+v*b+p*R,P=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const G=Math.sqrt(z),B=Math.atan2(G,x*P);y=Math.sin(y*B)/G,d=Math.sin(d*B)/G}const D=d*P;if(_=_*y+S*D,g=g*y+M*D,v=v*y+b*D,p=p*y+R*D,y===1-d){const G=1/Math.sqrt(_*_+g*g+v*v+p*p);_*=G,g*=G,v*=G,p*=G}}n[a]=_,n[a+1]=g,n[a+2]=v,n[a+3]=p}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],_=s[u+1],g=s[u+2],v=s[u+3],p=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return n[a]=d*b+v*p+_*M-g*S,n[a+1]=_*b+v*S+g*p-d*M,n[a+2]=g*b+v*M+d*S-_*p,n[a+3]=v*b-d*p-_*S-g*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,_=Math.sin,g=d(s/2),v=d(u/2),p=d(f/2),S=_(s/2),M=_(u/2),b=_(f/2);switch(h){case"XYZ":this._x=S*v*p+g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p-S*M*b;break;case"YXZ":this._x=S*v*p+g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p+S*M*b;break;case"ZXY":this._x=S*v*p-g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p-S*M*b;break;case"ZYX":this._x=S*v*p-g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p+S*M*b;break;case"YZX":this._x=S*v*p+g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p-S*M*b;break;case"XZY":this._x=S*v*p-g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],_=a[9],g=a[2],v=a[6],p=a[10],S=s+d+p;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-g)*M,this._z=(h-u)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(v-_)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-g)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-u)/M,this._x=(f+g)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<1e-8?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(be(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,_=a._y,g=a._z,v=a._w;return this._x=s*v+h*d+u*g-f*_,this._y=u*v+h*_+f*d-s*g,this._z=f*v+h*g+s*_-u*d,this._w=h*v-s*d-u*_-f*g,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,d),p=Math.sin((1-a)*v)/g,S=Math.sin(a*v)/g;return this._w=h*p+this._w*S,this._x=s*p+this._x*S,this._y=u*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(n=0,a=0,s=0){lt.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(a0.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(a0.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,_=n.w,g=2*(h*u-d*s),v=2*(d*a-f*u),p=2*(f*s-h*a);return this.x=a+_*g+h*p-d*v,this.y=s+_*v+d*g-f*p,this.z=u+_*p+f*v-h*g,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,_=a.z;return this.x=u*_-f*d,this.y=f*h-s*_,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return ed.copy(this).projectOnVector(n),this.sub(ed)}reflect(n){return this.sub(ed.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new lt,a0=new fl;class de{constructor(n,a,s,u,f,h,d,_,g){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g)}set(n,a,s,u,f,h,d,_,g){const v=this.elements;return v[0]=n,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],_=s[6],g=s[1],v=s[4],p=s[7],S=s[2],M=s[5],b=s[8],R=u[0],y=u[3],x=u[6],P=u[1],z=u[4],D=u[7],G=u[2],B=u[5],O=u[8];return f[0]=h*R+d*P+_*G,f[3]=h*y+d*z+_*B,f[6]=h*x+d*D+_*O,f[1]=g*R+v*P+p*G,f[4]=g*y+v*z+p*B,f[7]=g*x+v*D+p*O,f[2]=S*R+M*P+b*G,f[5]=S*y+M*z+b*B,f[8]=S*x+M*D+b*O,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8];return a*h*v-a*d*g-s*f*v+s*d*_+u*f*g-u*h*_}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],p=v*h-d*g,S=d*_-v*f,M=g*f-h*_,b=a*p+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return n[0]=p*R,n[1]=(u*g-v*s)*R,n[2]=(d*s-u*h)*R,n[3]=S*R,n[4]=(v*a-u*_)*R,n[5]=(u*f-d*a)*R,n[6]=M*R,n[7]=(s*_-g*a)*R,n[8]=(h*a-s*f)*R,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const _=Math.cos(f),g=Math.sin(f);return this.set(s*_,s*g,-s*(_*h+g*d)+h+n,-u*g,u*_,-u*(-g*h+_*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(nd.makeScale(n,a)),this}rotate(n){return this.premultiply(nd.makeRotation(-n)),this}translate(n,a){return this.premultiply(nd.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new de;function ux(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xE(){const o=pc("canvas");return o.style.display="block",o}const r0={};function ll(o){o in r0||(r0[o]=!0,console.warn(o))}function SE(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const s0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const o={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Ma(u.r),u.g=Ma(u.g),u.b=Ma(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=Zs(u.r),u.g=Zs(u.g),u.b=Zs(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===ir?hc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[$s]:{primaries:n,whitePoint:s,transfer:hc,toXYZ:s0,fromXYZ:o0,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:n,whitePoint:s,transfer:ke,toXYZ:s0,fromXYZ:o0,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const De=yE();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Os;class ME{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{Os===void 0&&(Os=pc("canvas")),Os.width=n.width,Os.height=n.height;const u=Os.getContext("2d");n instanceof ImageData?u.putImageData(n,0,0):u.drawImage(n,0,0,n.width,n.height),s=Os}return s.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=pc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ma(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let EE=0;class Cp{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=cl(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?n.set(a.displayHeight,a.displayWidth,0):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(id(u[h].image)):f.push(id(u[h]))}else f=id(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ME.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TE=0;const ad=new lt;class Gn extends eo{constructor(n=Gn.DEFAULT_IMAGE,a=Gn.DEFAULT_MAPPING,s=Xr,u=Xr,f=Si,h=kr,d=yi,_=Qi,g=Gn.DEFAULT_ANISOTROPY,v=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=cl(),this.name="",this.source=new Cp(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=_,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==J0)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Gd:n.x=n.x-Math.floor(n.x);break;case Xr:n.x=n.x<0?0:1;break;case Vd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Gd:n.y=n.y-Math.floor(n.y);break;case Xr:n.y=n.y<0?0:1;break;case Vd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=J0;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(n=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const _=n.elements,g=_[0],v=_[4],p=_[8],S=_[1],M=_[5],b=_[9],R=_[2],y=_[6],x=_[10];if(Math.abs(v-S)<.01&&Math.abs(p-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(p+R)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(g+1)/2,D=(M+1)/2,G=(x+1)/2,B=(v+S)/4,O=(p+R)/4,k=(b+y)/4;return z>D&&z>G?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=B/s,f=O/s):D>G?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=B/u,f=k/u):G<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(G),s=O/f,u=k/f),this.set(s,u,f,a),this}let P=Math.sqrt((y-b)*(y-b)+(p-R)*(p-R)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(p-R)/P,this.z=(S-v)/P,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this.w=be(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this.w=be(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bE extends eo{constructor(n=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,n,a),this.scissorTest=!1,this.viewport=new rn(0,0,n,a);const u={width:n,height:a,depth:s.depth},f=new Gn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(n={}){const a={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},n.textures[a].image);this.textures[a].source=new Cp(u)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends bE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class cx extends Gn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class AE extends Gn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(n=new lt(1/0,1/0,1/0),a=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,Ci):Ci.fromBufferAttribute(f,h),Ci.applyMatrix4(n.matrixWorld),this.expandByPoint(Ci);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fu.copy(s.boundingBox)),Fu.applyMatrix4(n.matrixWorld),this.union(Fu)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ci),Ci.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(Qo),Hu.subVectors(this.max,Qo),zs.subVectors(n.a,Qo),Ps.subVectors(n.b,Qo),Is.subVectors(n.c,Qo),Qa.subVectors(Ps,zs),Ja.subVectors(Is,Ps),Lr.subVectors(zs,Is);let a=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Lr.z,Lr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Lr.z,0,-Lr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Lr.y,Lr.x,0];return!rd(a,zs,Ps,Is,Hu)||(a=[1,0,0,0,1,0,0,0,1],!rd(a,zs,Ps,Is,Hu))?!1:(Gu.crossVectors(Qa,Ja),a=[Gu.x,Gu.y,Gu.z],rd(a,zs,Ps,Is,Hu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ci).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ci).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ma),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const ma=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ci=new lt,Fu=new hl,zs=new lt,Ps=new lt,Is=new lt,Qa=new lt,Ja=new lt,Lr=new lt,Qo=new lt,Hu=new lt,Gu=new lt,Or=new lt;function rd(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Or.fromArray(o,f);const d=u.x*Math.abs(Or.x)+u.y*Math.abs(Or.y)+u.z*Math.abs(Or.z),_=n.dot(Or),g=a.dot(Or),v=s.dot(Or);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>d)return!1}return!0}const RE=new hl,Jo=new lt,sd=new lt;class wp{constructor(n=new lt,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):RE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;Jo.subVectors(n,this.center);const a=Jo.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(Jo,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(sd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(Jo.copy(n.center).add(sd)),this.expandByPoint(Jo.copy(n.center).sub(sd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const ga=new lt,od=new lt,Vu=new lt,$a=new lt,ld=new lt,Xu=new lt,ud=new lt;class CE{constructor(n=new lt,a=new lt(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ga)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ga.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){od.copy(n).add(a).multiplyScalar(.5),Vu.copy(a).sub(n).normalize(),$a.copy(this.origin).sub(od);const f=n.distanceTo(a)*.5,h=-this.direction.dot(Vu),d=$a.dot(this.direction),_=-$a.dot(Vu),g=$a.lengthSq(),v=Math.abs(1-h*h);let p,S,M,b;if(v>0)if(p=h*_-d,S=h*d-_,b=f*v,p>=0)if(S>=-b)if(S<=b){const R=1/v;p*=R,S*=R,M=p*(p+h*S+2*d)+S*(h*p+S+2*_)+g}else S=f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*_)+g;else S=-f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*_)+g;else S<=-b?(p=Math.max(0,-(-h*f+d)),S=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+S*(S+2*_)+g):S<=b?(p=0,S=Math.min(Math.max(-f,-_),f),M=S*(S+2*_)+g):(p=Math.max(0,-(h*f+d)),S=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+S*(S+2*_)+g);else S=h>0?-f:f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*_)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(od).addScaledVector(Vu,S),M}intersectSphere(n,a){ga.subVectors(n.center,this.origin);const s=ga.dot(this.direction),u=ga.dot(ga)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,_=s+h;return _<0?null:d<0?this.at(_,a):this.at(d,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,_;const g=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,S=this.origin;return g>=0?(s=(n.min.x-S.x)*g,u=(n.max.x-S.x)*g):(s=(n.max.x-S.x)*g,u=(n.min.x-S.x)*g),v>=0?(f=(n.min.y-S.y)*v,h=(n.max.y-S.y)*v):(f=(n.max.y-S.y)*v,h=(n.min.y-S.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(n.min.z-S.z)*p,_=(n.max.z-S.z)*p):(d=(n.max.z-S.z)*p,_=(n.min.z-S.z)*p),s>_||d>u)||((d>s||s!==s)&&(s=d),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,ga)!==null}intersectTriangle(n,a,s,u,f){ld.subVectors(a,n),Xu.subVectors(s,n),ud.crossVectors(ld,Xu);let h=this.direction.dot(ud),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,n);const _=d*this.direction.dot(Xu.crossVectors($a,Xu));if(_<0)return null;const g=d*this.direction.dot(ld.cross($a));if(g<0||_+g>h)return null;const v=-d*$a.dot(ud);return v<0?null:this.at(v/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(n,a,s,u,f,h,d,_,g,v,p,S,M,b,R,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g,v,p,S,M,b,R,y)}set(n,a,s,u,f,h,d,_,g,v,p,S,M,b,R,y){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=_,x[2]=g,x[6]=v,x[10]=p,x[14]=S,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Bs.setFromMatrixColumn(n,0).length(),f=1/Bs.setFromMatrixColumn(n,1).length(),h=1/Bs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(n.order==="XYZ"){const S=h*v,M=h*p,b=d*v,R=d*p;a[0]=_*v,a[4]=-_*p,a[8]=g,a[1]=M+b*g,a[5]=S-R*g,a[9]=-d*_,a[2]=R-S*g,a[6]=b+M*g,a[10]=h*_}else if(n.order==="YXZ"){const S=_*v,M=_*p,b=g*v,R=g*p;a[0]=S+R*d,a[4]=b*d-M,a[8]=h*g,a[1]=h*p,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=R+S*d,a[10]=h*_}else if(n.order==="ZXY"){const S=_*v,M=_*p,b=g*v,R=g*p;a[0]=S-R*d,a[4]=-h*p,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=R-S*d,a[2]=-h*g,a[6]=d,a[10]=h*_}else if(n.order==="ZYX"){const S=h*v,M=h*p,b=d*v,R=d*p;a[0]=_*v,a[4]=b*g-M,a[8]=S*g+R,a[1]=_*p,a[5]=R*g+S,a[9]=M*g-b,a[2]=-g,a[6]=d*_,a[10]=h*_}else if(n.order==="YZX"){const S=h*_,M=h*g,b=d*_,R=d*g;a[0]=_*v,a[4]=R-S*p,a[8]=b*p+M,a[1]=p,a[5]=h*v,a[9]=-d*v,a[2]=-g*v,a[6]=M*p+b,a[10]=S-R*p}else if(n.order==="XZY"){const S=h*_,M=h*g,b=d*_,R=d*g;a[0]=_*v,a[4]=-p,a[8]=g*v,a[1]=S*p+R,a[5]=h*v,a[9]=M*p-b,a[2]=b*p-M,a[6]=d*v,a[10]=R*p+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(wE,n,DE)}lookAt(n,a,s){const u=this.elements;return ri.subVectors(n,a),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),tr.crossVectors(s,ri),tr.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),tr.crossVectors(s,ri)),tr.normalize(),ku.crossVectors(ri,tr),u[0]=tr.x,u[4]=ku.x,u[8]=ri.x,u[1]=tr.y,u[5]=ku.y,u[9]=ri.y,u[2]=tr.z,u[6]=ku.z,u[10]=ri.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],_=s[8],g=s[12],v=s[1],p=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],x=s[14],P=s[3],z=s[7],D=s[11],G=s[15],B=u[0],O=u[4],k=u[8],w=u[12],C=u[1],V=u[5],at=u[9],ct=u[13],gt=u[2],st=u[6],X=u[10],$=u[14],W=u[3],xt=u[7],yt=u[11],Ft=u[15];return f[0]=h*B+d*C+_*gt+g*W,f[4]=h*O+d*V+_*st+g*xt,f[8]=h*k+d*at+_*X+g*yt,f[12]=h*w+d*ct+_*$+g*Ft,f[1]=v*B+p*C+S*gt+M*W,f[5]=v*O+p*V+S*st+M*xt,f[9]=v*k+p*at+S*X+M*yt,f[13]=v*w+p*ct+S*$+M*Ft,f[2]=b*B+R*C+y*gt+x*W,f[6]=b*O+R*V+y*st+x*xt,f[10]=b*k+R*at+y*X+x*yt,f[14]=b*w+R*ct+y*$+x*Ft,f[3]=P*B+z*C+D*gt+G*W,f[7]=P*O+z*V+D*st+G*xt,f[11]=P*k+z*at+D*X+G*yt,f[15]=P*w+z*ct+D*$+G*Ft,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],_=n[9],g=n[13],v=n[2],p=n[6],S=n[10],M=n[14],b=n[3],R=n[7],y=n[11],x=n[15];return b*(+f*_*p-u*g*p-f*d*S+s*g*S+u*d*M-s*_*M)+R*(+a*_*M-a*g*S+f*h*S-u*h*M+u*g*v-f*_*v)+y*(+a*g*p-a*d*M-f*h*p+s*h*M+f*d*v-s*g*v)+x*(-u*d*v-a*_*p+a*d*S+u*h*p-s*h*S+s*_*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],p=n[9],S=n[10],M=n[11],b=n[12],R=n[13],y=n[14],x=n[15],P=p*y*g-R*S*g+R*_*M-d*y*M-p*_*x+d*S*x,z=b*S*g-v*y*g-b*_*M+h*y*M+v*_*x-h*S*x,D=v*R*g-b*p*g+b*d*M-h*R*M-v*d*x+h*p*x,G=b*p*_-v*R*_-b*d*S+h*R*S+v*d*y-h*p*y,B=a*P+s*z+u*D+f*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return n[0]=P*O,n[1]=(R*S*f-p*y*f-R*u*M+s*y*M+p*u*x-s*S*x)*O,n[2]=(d*y*f-R*_*f+R*u*g-s*y*g-d*u*x+s*_*x)*O,n[3]=(p*_*f-d*S*f-p*u*g+s*S*g+d*u*M-s*_*M)*O,n[4]=z*O,n[5]=(v*y*f-b*S*f+b*u*M-a*y*M-v*u*x+a*S*x)*O,n[6]=(b*_*f-h*y*f-b*u*g+a*y*g+h*u*x-a*_*x)*O,n[7]=(h*S*f-v*_*f+v*u*g-a*S*g-h*u*M+a*_*M)*O,n[8]=D*O,n[9]=(b*p*f-v*R*f-b*s*M+a*R*M+v*s*x-a*p*x)*O,n[10]=(h*R*f-b*d*f+b*s*g-a*R*g-h*s*x+a*d*x)*O,n[11]=(v*d*f-h*p*f-v*s*g+a*p*g+h*s*M-a*d*M)*O,n[12]=G*O,n[13]=(v*R*u-b*p*u+b*s*S-a*R*S-v*s*y+a*p*y)*O,n[14]=(b*d*u-h*R*u-b*s*_+a*R*_+h*s*y-a*d*y)*O,n[15]=(h*p*u-v*d*u+v*s*_-a*p*_-h*s*S+a*d*S)*O,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,_=n.z,g=f*h,v=f*d;return this.set(g*h+s,g*d-u*_,g*_+u*d,0,g*d+u*_,v*d+s,v*_-u*h,0,g*_-u*d,v*_+u*h,f*_*_+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,_=a._w,g=f+f,v=h+h,p=d+d,S=f*g,M=f*v,b=f*p,R=h*v,y=h*p,x=d*p,P=_*g,z=_*v,D=_*p,G=s.x,B=s.y,O=s.z;return u[0]=(1-(R+x))*G,u[1]=(M+D)*G,u[2]=(b-z)*G,u[3]=0,u[4]=(M-D)*B,u[5]=(1-(S+x))*B,u[6]=(y+P)*B,u[7]=0,u[8]=(b+z)*O,u[9]=(y-P)*O,u[10]=(1-(S+R))*O,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Bs.set(u[0],u[1],u[2]).length();const h=Bs.set(u[4],u[5],u[6]).length(),d=Bs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],wi.copy(this);const g=1/f,v=1/h,p=1/d;return wi.elements[0]*=g,wi.elements[1]*=g,wi.elements[2]*=g,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,a.setFromRotationMatrix(wi),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=Wi,_=!1){const g=this.elements,v=2*f/(a-n),p=2*f/(s-u),S=(a+n)/(a-n),M=(s+u)/(s-u);let b,R;if(_)b=f/(h-f),R=h*f/(h-f);else if(d===Wi)b=-(h+f)/(h-f),R=-2*h*f/(h-f);else if(d===dc)b=-h/(h-f),R=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=S,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=R,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=Wi,_=!1){const g=this.elements,v=2/(a-n),p=2/(s-u),S=-(a+n)/(a-n),M=-(s+u)/(s-u);let b,R;if(_)b=1/(h-f),R=h/(h-f);else if(d===Wi)b=-2/(h-f),R=-(h+f)/(h-f);else if(d===dc)b=-1/(h-f),R=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=S,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=R,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Bs=new lt,wi=new on,wE=new lt(0,0,0),DE=new lt(1,1,1),tr=new lt,ku=new lt,ri=new lt,l0=new on,u0=new fl;class Ji{constructor(n=0,a=0,s=0,u=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],_=u[1],g=u[5],v=u[9],p=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return l0.makeRotationFromQuaternion(n),this.setFromRotationMatrix(l0,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return u0.setFromEuler(this),this.setFromQuaternion(u0,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let UE=0;const c0=new lt,Fs=new fl,_a=new on,qu=new lt,$o=new lt,NE=new lt,LE=new fl,f0=new lt(1,0,0),h0=new lt(0,1,0),d0=new lt(0,0,1),p0={type:"added"},OE={type:"removed"},Hs={type:"childadded",child:null},cd={type:"childremoved",child:null};class On extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const n=new lt,a=new Ji,s=new fl,u=new lt(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new on},normalMatrix:{value:new de}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Fs.setFromAxisAngle(n,a),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(n,a){return Fs.setFromAxisAngle(n,a),this.quaternion.premultiply(Fs),this}rotateX(n){return this.rotateOnAxis(f0,n)}rotateY(n){return this.rotateOnAxis(h0,n)}rotateZ(n){return this.rotateOnAxis(d0,n)}translateOnAxis(n,a){return c0.copy(n).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(f0,n)}translateY(n){return this.translateOnAxis(h0,n)}translateZ(n){return this.translateOnAxis(d0,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?qu.copy(n):qu.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt($o,qu,this.up):_a.lookAt(qu,$o,this.up),this.quaternion.setFromRotationMatrix(_a),u&&(_a.extractRotation(u.matrixWorld),Fs.setFromRotationMatrix(_a),this.quaternion.premultiply(Fs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(p0),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(OE),cd.child=n,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),_a.multiply(n.parent.matrixWorld)),n.applyMatrix4(_a),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(p0),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,n,NE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,LE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(n),u.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(n)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const p=_[g];f(n.shapes,p)}else f(n.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,g=this.material.length;_<g;_++)d.push(f(n.materials,this.material[_]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];u.animations.push(f(n.animations,_))}}if(a){const d=h(n.geometries),_=h(n.materials),g=h(n.textures),v=h(n.images),p=h(n.shapes),S=h(n.skeletons),M=h(n.animations),b=h(n.nodes);d.length>0&&(s.geometries=d),_.length>0&&(s.materials=_),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const _=[];for(const g in d){const v=d[g];delete v.metadata,_.push(v)}return _}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}On.DEFAULT_UP=new lt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new lt,va=new lt,fd=new lt,xa=new lt,Gs=new lt,Vs=new lt,m0=new lt,hd=new lt,dd=new lt,pd=new lt,md=new rn,gd=new rn,_d=new rn;class Ni{constructor(n=new lt,a=new lt,s=new lt){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),Di.subVectors(n,a),u.cross(Di);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){Di.subVectors(u,a),va.subVectors(s,a),fd.subVectors(n,a);const h=Di.dot(Di),d=Di.dot(va),_=Di.dot(fd),g=va.dot(va),v=va.dot(fd),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const S=1/p,M=(g*_-d*v)*S,b=(h*v-d*_)*S;return f.set(1-M-b,b,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(n,a,s,u,f,h,d,_){return this.getBarycoord(n,a,s,u,xa)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,xa.x),_.addScaledVector(h,xa.y),_.addScaledVector(d,xa.z),_)}static getInterpolatedAttribute(n,a,s,u,f,h){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(n,a),gd.fromBufferAttribute(n,s),_d.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(md,f.x),h.addScaledVector(gd,f.y),h.addScaledVector(_d,f.z),h}static isFrontFacing(n,a,s,u){return Di.subVectors(s,a),va.subVectors(n,a),Di.cross(va).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ni.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ni.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ni.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ni.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ni.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Gs.subVectors(u,s),Vs.subVectors(f,s),hd.subVectors(n,s);const _=Gs.dot(hd),g=Vs.dot(hd);if(_<=0&&g<=0)return a.copy(s);dd.subVectors(n,u);const v=Gs.dot(dd),p=Vs.dot(dd);if(v>=0&&p<=v)return a.copy(u);const S=_*p-v*g;if(S<=0&&_>=0&&v<=0)return h=_/(_-v),a.copy(s).addScaledVector(Gs,h);pd.subVectors(n,f);const M=Gs.dot(pd),b=Vs.dot(pd);if(b>=0&&M<=b)return a.copy(f);const R=M*g-_*b;if(R<=0&&g>=0&&b<=0)return d=g/(g-b),a.copy(s).addScaledVector(Vs,d);const y=v*b-M*p;if(y<=0&&p-v>=0&&M-b>=0)return m0.subVectors(f,u),d=(p-v)/(p-v+(M-b)),a.copy(u).addScaledVector(m0,d);const x=1/(y+R+S);return h=R*x,d=S*x,a.copy(s).addScaledVector(Gs,h).addScaledVector(Vs,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function vd(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Oe{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=xi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(n,a,s,u=De.workingColorSpace){return this.r=n,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(n,a,s,u=De.workingColorSpace){if(n=vE(n,1),a=be(a,0,1),s=be(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=vd(h,f,n+1/3),this.g=vd(h,f,n),this.b=vd(h,f,n-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(n,a=xi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=xi){const s=hx[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ma(n.r),this.g=Ma(n.g),this.b=Ma(n.b),this}copyLinearToSRGB(n){return this.r=Zs(n.r),this.g=Zs(n.g),this.b=Zs(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=xi){return De.workingToColorSpace(Ln.copy(this),n),Math.round(be(Ln.r*255,0,255))*65536+Math.round(be(Ln.g*255,0,255))*256+Math.round(be(Ln.b*255,0,255))}getHexString(n=xi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=De.workingColorSpace){De.workingToColorSpace(Ln.copy(this),a);const s=Ln.r,u=Ln.g,f=Ln.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let _,g;const v=(d+h)/2;if(d===h)_=0,g=0;else{const p=h-d;switch(g=v<=.5?p/(h+d):p/(2-h-d),h){case s:_=(u-f)/p+(u<f?6:0);break;case u:_=(f-s)/p+2;break;case f:_=(s-u)/p+4;break}_/=6}return n.h=_,n.s=g,n.l=v,n}getRGB(n,a=De.workingColorSpace){return De.workingToColorSpace(Ln.copy(this),a),n.r=Ln.r,n.g=Ln.g,n.b=Ln.b,n}getStyle(n=xi){De.workingToColorSpace(Ln.copy(this),n);const a=Ln.r,s=Ln.g,u=Ln.b;return n!==xi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(er),this.setHSL(er.h+n,er.s+a,er.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(er),n.getHSL(Yu);const s=td(er.h,Yu.h,a),u=td(er.s,Yu.s,a),f=td(er.l,Yu.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Oe;Oe.NAMES=hx;let zE=0;class dl extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=js,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(n).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(n).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ud&&(s.blendSrc=this.blendSrc),this.blendDst!==Nd&&(s.blendDst=this.blendDst),this.blendEquation!==Gr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class dx extends dl{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const dn=new lt,Wu=new ze;let PE=0;class Zi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=n0,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Wu.fromBufferAttribute(this,a),Wu.applyMatrix3(n),this.setXY(a,Wu.x,Wu.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Wn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Ko(a,this.array)),a}setX(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Ko(a,this.array)),a}setY(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Ko(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Ko(a,this.array)),a}setW(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array),u=Wn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array),u=Wn(u,this.array),f=Wn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==n0&&(n.usage=this.usage),n}}class px extends Zi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class mx extends Zi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Ki extends Zi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let IE=0;const vi=new on,xd=new On,Xs=new lt,si=new hl,tl=new hl,Mn=new lt;class lr extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(ux(n)?mx:px)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return vi.makeRotationFromQuaternion(n),this.applyMatrix4(vi),this}rotateX(n){return vi.makeRotationX(n),this.applyMatrix4(vi),this}rotateY(n){return vi.makeRotationY(n),this.applyMatrix4(vi),this}rotateZ(n){return vi.makeRotationZ(n),this.applyMatrix4(vi),this}translate(n,a,s){return vi.makeTranslation(n,a,s),this.applyMatrix4(vi),this}scale(n,a,s){return vi.makeScale(n,a,s),this.applyMatrix4(vi),this}lookAt(n){return xd.lookAt(n),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ki(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];si.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(n){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(si.min,tl.min),si.expandByPoint(Mn),Mn.addVectors(si.max,tl.max),si.expandByPoint(Mn)):(si.expandByPoint(tl.min),si.expandByPoint(tl.max))}si.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)Mn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],_=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Mn.fromBufferAttribute(d,g),_&&(Xs.fromBufferAttribute(n,g),Mn.add(Xs)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let k=0;k<s.count;k++)d[k]=new lt,_[k]=new lt;const g=new lt,v=new lt,p=new lt,S=new ze,M=new ze,b=new ze,R=new lt,y=new lt;function x(k,w,C){g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),S.fromBufferAttribute(f,k),M.fromBufferAttribute(f,w),b.fromBufferAttribute(f,C),v.sub(g),p.sub(g),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),d[k].add(R),d[w].add(R),d[C].add(R),_[k].add(y),_[w].add(y),_[C].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.count}]);for(let k=0,w=P.length;k<w;++k){const C=P[k],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)x(n.getX(ct+0),n.getX(ct+1),n.getX(ct+2))}const z=new lt,D=new lt,G=new lt,B=new lt;function O(k){G.fromBufferAttribute(u,k),B.copy(G);const w=d[k];z.copy(w),z.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(B,w);const V=D.dot(_[k])<0?-1:1;h.setXYZW(k,z.x,z.y,z.z,V)}for(let k=0,w=P.length;k<w;++k){const C=P[k],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)O(n.getX(ct+0)),O(n.getX(ct+1)),O(n.getX(ct+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Zi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new lt,f=new lt,h=new lt,d=new lt,_=new lt,g=new lt,v=new lt,p=new lt;if(n)for(let S=0,M=n.count;S<M;S+=3){const b=n.getX(S+0),R=n.getX(S+1),y=n.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,R),h.fromBufferAttribute(a,y),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,R),g.fromBufferAttribute(s,y),d.add(v),_.add(v),g.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,_.x,_.y,_.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),h.fromBufferAttribute(a,S+2),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)Mn.fromBufferAttribute(n,a),Mn.normalize(),n.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function n(d,_){const g=d.array,v=d.itemSize,p=d.normalized,S=new g.constructor(_.length*v);let M=0,b=0;for(let R=0,y=_.length;R<y;R++){d.isInterleavedBufferAttribute?M=_[R]*d.data.stride+d.offset:M=_[R]*v;for(let x=0;x<v;x++)S[b++]=g[M++]}return new Zi(S,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new lr,s=this.index.array,u=this.attributes;for(const d in u){const _=u[d],g=n(_,s);a.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const _=[],g=f[d];for(let v=0,p=g.length;v<p;v++){const S=g[v],M=n(S,s);_.push(M)}a.morphAttributes[d]=_}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.addGroup(g.start,g.count,g.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(n[g]=_[g]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const g=s[_];n.data.attributes[_]=g.toJSON(n.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let p=0,S=g.length;p<S;p++){const M=g[p];v.push(M.toJSON(n.data))}v.length>0&&(u[_]=v,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere=d.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone());const u=n.attributes;for(const g in u){const v=u[g];this.setAttribute(g,v.clone(a))}const f=n.morphAttributes;for(const g in f){const v=[],p=f[g];for(let S=0,M=p.length;S<M;S++)v.push(p[S].clone(a));this.morphAttributes[g]=v}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let g=0,v=h.length;g<v;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=n.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g0=new on,zr=new CE,ju=new wp,_0=new lt,Zu=new lt,Ku=new lt,Qu=new lt,Sd=new lt,Ju=new lt,v0=new lt,$u=new lt;class ji extends On{constructor(n=new lr,a=new dx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){Ju.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const v=d[_],p=f[_];v!==0&&(Sd.fromBufferAttribute(p,n),h?Ju.addScaledVector(Sd,v):Ju.addScaledVector(Sd.sub(a),v))}a.add(Ju)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ju.copy(s.boundingSphere),ju.applyMatrix4(f),zr.copy(n.ray).recast(n.near),!(ju.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ju,_0)===null||zr.origin.distanceToSquared(_0)>(n.far-n.near)**2))&&(g0.copy(f).invert(),zr.copy(n.ray).applyMatrix4(g0),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,zr)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,g=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,G=z;D<G;D+=3){const B=d.getX(D),O=d.getX(D+1),k=d.getX(D+2);u=tc(this,x,n,s,g,v,p,B,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const P=d.getX(y),z=d.getX(y+1),D=d.getX(y+2);u=tc(this,h,n,s,g,v,p,P,z,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),z=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,G=z;D<G;D+=3){const B=D,O=D+1,k=D+2;u=tc(this,x,n,s,g,v,p,B,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(_.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const P=y,z=y+1,D=y+2;u=tc(this,h,n,s,g,v,p,P,z,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function BE(o,n,a,s,u,f,h,d){let _;if(n.side===jn?_=s.intersectTriangle(h,f,u,!0,d):_=s.intersectTriangle(u,f,h,n.side===sr,d),_===null)return null;$u.copy(d),$u.applyMatrix4(o.matrixWorld);const g=a.ray.origin.distanceTo($u);return g<a.near||g>a.far?null:{distance:g,point:$u.clone(),object:o}}function tc(o,n,a,s,u,f,h,d,_,g){o.getVertexPosition(d,Zu),o.getVertexPosition(_,Ku),o.getVertexPosition(g,Qu);const v=BE(o,n,a,s,Zu,Ku,Qu,v0);if(v){const p=new lt;Ni.getBarycoord(v0,Zu,Ku,Qu,p),u&&(v.uv=Ni.getInterpolatedAttribute(u,d,_,g,p,new ze)),f&&(v.uv1=Ni.getInterpolatedAttribute(f,d,_,g,p,new ze)),h&&(v.normal=Ni.getInterpolatedAttribute(h,d,_,g,p,new lt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:_,c:g,normal:new lt,materialIndex:0};Ni.getNormal(Zu,Ku,Qu,S.normal),v.face=S,v.barycoord=p}return v}class pl extends lr{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const _=[],g=[],v=[],p=[];let S=0,M=0;b("z","y","x",-1,-1,s,a,n,h,f,0),b("z","y","x",1,-1,s,a,-n,h,f,1),b("x","z","y",1,1,n,s,a,u,h,2),b("x","z","y",1,-1,n,s,-a,u,h,3),b("x","y","z",1,-1,n,a,s,u,f,4),b("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(p,2));function b(R,y,x,P,z,D,G,B,O,k,w){const C=D/O,V=G/k,at=D/2,ct=G/2,gt=B/2,st=O+1,X=k+1;let $=0,W=0;const xt=new lt;for(let yt=0;yt<X;yt++){const Ft=yt*V-ct;for(let ae=0;ae<st;ae++){const ve=ae*C-at;xt[R]=ve*P,xt[y]=Ft*z,xt[x]=gt,g.push(xt.x,xt.y,xt.z),xt[R]=0,xt[y]=0,xt[x]=B>0?1:-1,v.push(xt.x,xt.y,xt.z),p.push(ae/O),p.push(1-yt/k),$+=1}}for(let yt=0;yt<k;yt++)for(let Ft=0;Ft<O;Ft++){const ae=S+Ft+st*yt,ve=S+Ft+st*(yt+1),I=S+(Ft+1)+st*(yt+1),ft=S+(Ft+1)+st*yt;_.push(ae,ve,ft),_.push(ve,I,ft),W+=6}d.addGroup(M,W,w),M+=W,S+=$}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new pl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function to(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Hn(o){const n={};for(let a=0;a<o.length;a++){const s=to(o[a]);for(const u in s)n[u]=s[u]}return n}function FE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function gx(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:De.workingColorSpace}const HE={clone:to,merge:Hn};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends dl{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=to(n.uniforms),this.uniformsGroups=FE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class _x extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new lt,x0=new ze,S0=new ze;class Ui extends _x{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=_p*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return _p*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(nr.x,nr.y).multiplyScalar(-n/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-n/nr.z)}getViewSize(n,a){return this.getViewBounds(n,x0,S0),a.subVectors(S0,x0)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan($h*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,g=h.fullHeight;f+=h.offsetX*u/_,a-=h.offsetY*s/g,u*=h.width/_,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const ks=-90,qs=1;class XE extends On{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ui(ks,qs,n,a);u.layers=this.layers,this.add(u);const f=new Ui(ks,qs,n,a);f.layers=this.layers,this.add(f);const h=new Ui(ks,qs,n,a);h.layers=this.layers,this.add(h);const d=new Ui(ks,qs,n,a);d.layers=this.layers,this.add(d);const _=new Ui(ks,qs,n,a);_.layers=this.layers,this.add(_);const g=new Ui(ks,qs,n,a);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,_]=a;for(const g of a)this.remove(g);if(n===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(n===dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const g of a)this.add(g),g.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,g,v]=this.children,p=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),b=n.xr.enabled;n.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,_),n.setRenderTarget(s,4,u),n.render(a,g),s.texture.generateMipmaps=R,n.setRenderTarget(s,5,u),n.render(a,v),n.setRenderTarget(p,S,M),n.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class vx extends Gn{constructor(n=[],a=Qs,s,u,f,h,d,_,g,v){super(n,a,s,u,f,h,d,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class kE extends Yr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new vx(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new pl(5,5,5),f=new or({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:ar});f.uniforms.tEquirect.value=a;const h=new ji(u,f),d=a.minFilter;return a.minFilter===kr&&(a.minFilter=Si),new XE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a=!0,s=!0,u=!0){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}class ec extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,_=this._grip,g=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(g&&n.hand){h=!0;for(const R of n.hand.values()){const y=a.getJointPose(R,s),x=this._getHandJoint(g,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],S=v.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&S>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!g.inputState.pinching&&S<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else _!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return d!==null&&(d.visible=u!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new ec;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class YE extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class WE extends Gn{constructor(n=null,a=1,s=1,u,f,h,d,_,g=oi,v=oi,p,S){super(null,h,d,_,g,v,u,f,p,S),this.isDataTexture=!0,this.image={data:n,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new lt,jE=new lt,ZE=new de;class Fr{constructor(n=new lt(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=Md.subVectors(s,a).cross(jE.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Md),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||ZE.getNormalMatrix(n),u=this.coplanarPoint(Md).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new wp,KE=new ze(.5,.5),nc=new lt;class Dp{constructor(n=new Fr,a=new Fr,s=new Fr,u=new Fr,f=new Fr,h=new Fr){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=Wi,s=!1){const u=this.planes,f=n.elements,h=f[0],d=f[1],_=f[2],g=f[3],v=f[4],p=f[5],S=f[6],M=f[7],b=f[8],R=f[9],y=f[10],x=f[11],P=f[12],z=f[13],D=f[14],G=f[15];if(u[0].setComponents(g-h,M-v,x-b,G-P).normalize(),u[1].setComponents(g+h,M+v,x+b,G+P).normalize(),u[2].setComponents(g+d,M+p,x+R,G+z).normalize(),u[3].setComponents(g-d,M-p,x-R,G-z).normalize(),s)u[4].setComponents(_,S,y,D).normalize(),u[5].setComponents(g-_,M-S,x-y,G-D).normalize();else if(u[4].setComponents(g-_,M-S,x-y,G-D).normalize(),a===Wi)u[5].setComponents(g+_,M+S,x+y,G+D).normalize();else if(a===dc)u[5].setComponents(_,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){Pr.center.set(0,0,0);const a=KE.distanceTo(n.center);return Pr.radius=.7071067811865476+a,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(nc.x=u.normal.x>0?n.max.x:n.min.x,nc.y=u.normal.y>0?n.max.y:n.min.y,nc.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(nc)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xx extends Gn{constructor(n,a,s=qr,u,f,h,d=oi,_=oi,g,v=sl,p=1){if(v!==sl&&v!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:n,height:a,depth:p};super(S,u,f,h,d,_,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Cp(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Sx extends Gn{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}copy(n){return super.copy(n),this.sourceTexture=n.sourceTexture,this}}class gc extends lr{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),_=Math.floor(u),g=d+1,v=_+1,p=n/d,S=a/_,M=[],b=[],R=[],y=[];for(let x=0;x<v;x++){const P=x*S-h;for(let z=0;z<g;z++){const D=z*p-f;b.push(D,-P,0),R.push(0,0,1),y.push(z/d),y.push(1-x/_)}}for(let x=0;x<_;x++)for(let P=0;P<d;P++){const z=P+g*x,D=P+g*(x+1),G=P+1+g*(x+1),B=P+1+g*x;M.push(z,D,B),M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(R,3)),this.setAttribute("uv",new Ki(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gc(n.width,n.height,n.widthSegments,n.heightSegments)}}class Up extends lr{constructor(n=1,a=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:n,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const _=Math.min(h+d,Math.PI);let g=0;const v=[],p=new lt,S=new lt,M=[],b=[],R=[],y=[];for(let x=0;x<=s;x++){const P=[],z=x/s;let D=0;x===0&&h===0?D=.5/a:x===s&&_===Math.PI&&(D=-.5/a);for(let G=0;G<=a;G++){const B=G/a;p.x=-n*Math.cos(u+B*f)*Math.sin(h+z*d),p.y=n*Math.cos(h+z*d),p.z=n*Math.sin(u+B*f)*Math.sin(h+z*d),b.push(p.x,p.y,p.z),S.copy(p).normalize(),R.push(S.x,S.y,S.z),y.push(B+D,1-z),P.push(g++)}v.push(P)}for(let x=0;x<s;x++)for(let P=0;P<a;P++){const z=v[x][P+1],D=v[x][P],G=v[x+1][P],B=v[x+1][P+1];(x!==0||h>0)&&M.push(z,D,B),(x!==s-1||_<Math.PI)&&M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(R,3)),this.setAttribute("uv",new Ki(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Up(n.radius,n.widthSegments,n.heightSegments,n.phiStart,n.phiLength,n.thetaStart,n.thetaLength)}}class QE extends dl{constructor(n){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ox,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.envMapIntensity=n.envMapIntensity,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class JE extends dl{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class $E extends dl{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class tT extends On{constructor(n,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(n),this.intensity=a}dispose(){}copy(n,a){return super.copy(n,a),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const a=super.toJSON(n);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const Ed=new on,y0=new lt,M0=new lt;class eT{constructor(n){this.camera=n,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const a=this.camera,s=this.matrix;y0.setFromMatrixPosition(n.matrixWorld),a.position.copy(y0),M0.setFromMatrixPosition(n.target.matrixWorld),a.lookAt(M0),a.updateMatrixWorld(),Ed.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ed)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.intensity=n.intensity,this.bias=n.bias,this.radius=n.radius,this.autoUpdate=n.autoUpdate,this.needsUpdate=n.needsUpdate,this.normalBias=n.normalBias,this.blurSamples=n.blurSamples,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.intensity!==1&&(n.intensity=this.intensity),this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}class Np extends _x{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class nT extends eT{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iT extends tT{constructor(n,a){super(n,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new nT}dispose(){this.shadow.dispose()}copy(n){return super.copy(n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}}class aT extends Ui{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}function E0(o,n,a,s){const u=rT(s);switch(a){case ix:return o*n;case rx:return o*n/u.components*u.byteLength;case bp:return o*n/u.components*u.byteLength;case sx:return o*n*2/u.components*u.byteLength;case Ap:return o*n*2/u.components*u.byteLength;case ax:return o*n*3/u.components*u.byteLength;case yi:return o*n*4/u.components*u.byteLength;case Rp:return o*n*4/u.components*u.byteLength;case sc:case oc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case lc:case uc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case kd:case Yd:return Math.max(o,16)*Math.max(n,8)/4;case Xd:case qd:return Math.max(o,8)*Math.max(n,8)/2;case Wd:case jd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Zd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case tp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case np:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case ip:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case sp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case up:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case cp:case fp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case dp:case pp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case mp:case gp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function rT(o){switch(o){case Qi:case $0:return{byteLength:1,components:1};case al:case tx:case ul:return{byteLength:2,components:1};case Ep:case Tp:return{byteLength:2,components:4};case qr:case Mp:case Yi:return{byteLength:4,components:1};case ex:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);function yx(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function sT(o){const n=new WeakMap;function a(d,_){const g=d.array,v=d.usage,p=g.byteLength,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,_,g){const v=_.array,p=_.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,v);else{p.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<p.length;M++){const b=p[S],R=p[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,p[S]=R)}p.length=S+1;for(let M=0,b=p.length;M<b;M++){const R=p[M];o.bufferSubData(g,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=n.get(d);_&&(o.deleteBuffer(_.buffer),n.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=n.get(d);if(g===void 0)n.set(d,a(d,_));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,_),g.version=d.version}}return{get:u,remove:f,update:h}}var oT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lT=`#ifdef USE_ALPHAHASH
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
#endif`,uT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dT=`#ifdef USE_AOMAP
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
#endif`,pT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mT=`#ifdef USE_BATCHING
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
#endif`,gT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ST=`#ifdef USE_IRIDESCENCE
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
#endif`,yT=`#ifdef USE_BUMPMAP
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DT=`#define PI 3.141592653589793
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
} // validated`,UT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NT=`vec3 transformedNormal = objectNormal;
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
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",BT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
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
}`,ZT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JT=`uniform bool receiveShadow;
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
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,r1=`struct PhysicalMaterial {
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
}`,s1=`
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q1=`float getShadowMask() {
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
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
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
}`,db=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,mb=`#define DISTANCE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Cb=`#define PHONG
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
}`,wb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,Nb=`#define TOON
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
}`,Lb=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Ib=`uniform vec3 color;
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
}`,Bb=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:oT,alphahash_pars_fragment:lT,alphamap_fragment:uT,alphamap_pars_fragment:cT,alphatest_fragment:fT,alphatest_pars_fragment:hT,aomap_fragment:dT,aomap_pars_fragment:pT,batching_pars_vertex:mT,batching_vertex:gT,begin_vertex:_T,beginnormal_vertex:vT,bsdfs:xT,iridescence_fragment:ST,bumpmap_pars_fragment:yT,clipping_planes_fragment:MT,clipping_planes_pars_fragment:ET,clipping_planes_pars_vertex:TT,clipping_planes_vertex:bT,color_fragment:AT,color_pars_fragment:RT,color_pars_vertex:CT,color_vertex:wT,common:DT,cube_uv_reflection_fragment:UT,defaultnormal_vertex:NT,displacementmap_pars_vertex:LT,displacementmap_vertex:OT,emissivemap_fragment:zT,emissivemap_pars_fragment:PT,colorspace_fragment:IT,colorspace_pars_fragment:BT,envmap_fragment:FT,envmap_common_pars_fragment:HT,envmap_pars_fragment:GT,envmap_pars_vertex:VT,envmap_physical_pars_fragment:$T,envmap_vertex:XT,fog_vertex:kT,fog_pars_vertex:qT,fog_fragment:YT,fog_pars_fragment:WT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:ZT,lights_lambert_fragment:KT,lights_lambert_pars_fragment:QT,lights_pars_begin:JT,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:r1,lights_fragment_begin:s1,lights_fragment_maps:o1,lights_fragment_end:l1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:c1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:d1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:S1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:E1,normal_fragment_begin:T1,normal_fragment_maps:b1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:C1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:L1,opaque_fragment:O1,packing:z1,premultiplied_alpha_fragment:P1,project_vertex:I1,dithering_fragment:B1,dithering_pars_fragment:F1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:X1,shadowmap_vertex:k1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:W1,skinning_vertex:j1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:$1,transmission_fragment:tb,transmission_pars_fragment:eb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:ab,worldpos_vertex:rb,background_vert:sb,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:ub,cube_vert:cb,cube_frag:fb,depth_vert:hb,depth_frag:db,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:Sb,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:bb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:wb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Nb,meshtoon_frag:Lb,points_vert:Ob,points_frag:zb,shadow_vert:Pb,shadow_frag:Ib,sprite_vert:Bb,sprite_frag:Fb},It={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},qi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};qi.physical={uniforms:Hn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ic={r:0,b:0,g:0},Ir=new Ji,Hb=new on;function Gb(o,n,a,s,u,f,h){const d=new Oe(0);let _=f===!0?0:1,g,v,p=null,S=0,M=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?a:n).get(D)),D}function R(z){let D=!1;const G=b(z);G===null?x(d,_):G&&G.isColor&&(x(G,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,D){const G=b(D);G&&(G.isCubeTexture||G.mapping===mc)?(v===void 0&&(v=new ji(new pl(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:to(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Ir.copy(D.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Ir)),v.material.toneMapped=De.getTransfer(G.colorSpace)!==ke,(p!==G||S!==G.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=G,S=G.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new ji(new gc(2,2),new or({name:"BackgroundMaterial",uniforms:to(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=De.getTransfer(G.colorSpace)!==ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(p!==G||S!==G.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=G,S=G.version,M=o.toneMapping),g.layers.enableAll(),z.unshift(g,g.geometry,g.material,0,0,null))}function x(z,D){z.getRGB(ic,gx(o)),s.buffers.color.setClear(ic.r,ic.g,ic.b,D,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),_=D,x(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(z){_=z,x(d,_)},render:R,addToRenderList:y,dispose:P}}function Vb(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,h=!1;function d(C,V,at,ct,gt){let st=!1;const X=p(ct,at,V);f!==X&&(f=X,g(f.object)),st=M(C,ct,at,gt),st&&b(C,ct,at,gt),gt!==null&&n.update(gt,o.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,D(C,V,at,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(gt).buffer))}function _(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function p(C,V,at){const ct=at.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let st=gt[V.id];st===void 0&&(st={},gt[V.id]=st);let X=st[ct];return X===void 0&&(X=S(_()),st[ct]=X),X}function S(C){const V=[],at=[],ct=[];for(let gt=0;gt<a;gt++)V[gt]=0,at[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ct,object:C,attributes:{},index:null}}function M(C,V,at,ct){const gt=f.attributes,st=V.attributes;let X=0;const $=at.getAttributes();for(const W in $)if($[W].location>=0){const yt=gt[W];let Ft=st[W];if(Ft===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Ft=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Ft=C.instanceColor)),yt===void 0||yt.attribute!==Ft||Ft&&yt.data!==Ft.data)return!0;X++}return f.attributesNum!==X||f.index!==ct}function b(C,V,at,ct){const gt={},st=V.attributes;let X=0;const $=at.getAttributes();for(const W in $)if($[W].location>=0){let yt=st[W];yt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Ft={};Ft.attribute=yt,yt&&yt.data&&(Ft.data=yt.data),gt[W]=Ft,X++}f.attributes=gt,f.attributesNum=X,f.index=ct}function R(){const C=f.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function y(C){x(C,0)}function x(C,V){const at=f.newAttributes,ct=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function P(){const C=f.newAttributes,V=f.enabledAttributes;for(let at=0,ct=V.length;at<ct;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function z(C,V,at,ct,gt,st,X){X===!0?o.vertexAttribIPointer(C,V,at,gt,st):o.vertexAttribPointer(C,V,at,ct,gt,st)}function D(C,V,at,ct){R();const gt=ct.attributes,st=at.getAttributes(),X=V.defaultAttributeValues;for(const $ in st){const W=st[$];if(W.location>=0){let xt=gt[$];if(xt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,Ft=xt.itemSize,ae=n.get(xt);if(ae===void 0)continue;const ve=ae.buffer,I=ae.type,ft=ae.bytesPerElement,Q=I===o.INT||I===o.UNSIGNED_INT||xt.gpuType===Mp;if(xt.isInterleavedBufferAttribute){const nt=xt.data,Et=nt.stride,tt=xt.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<W.locationSize;St++)x(W.location+St,nt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<W.locationSize;St++)y(W.location+St);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let St=0;St<W.locationSize;St++)z(W.location+St,Ft/W.locationSize,I,yt,Et*ft,(tt+Ft/W.locationSize*St)*ft,Q)}else{if(xt.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)x(W.location+nt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let nt=0;nt<W.locationSize;nt++)y(W.location+nt);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let nt=0;nt<W.locationSize;nt++)z(W.location+nt,Ft/W.locationSize,I,yt,Ft*ft,Ft/W.locationSize*nt*ft,Q)}}else if(X!==void 0){const yt=X[$];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(W.location,yt);break;case 3:o.vertexAttrib3fv(W.location,yt);break;case 4:o.vertexAttrib4fv(W.location,yt);break;default:o.vertexAttrib1fv(W.location,yt)}}}}P()}function G(){k();for(const C in s){const V=s[C];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete s[C.id]}function O(C){for(const V in s){const at=s[V];if(at[C.id]===void 0)continue;const ct=at[C.id];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete at[C.id]}}function k(){w(),h=!0,f!==u&&(f=u,g(f.object))}function w(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:P}}function Xb(o,n,a){let s;function u(g){s=g}function f(g,v){o.drawArrays(s,g,v),a.update(v,s,1)}function h(g,v,p){p!==0&&(o.drawArraysInstanced(s,g,v,p),a.update(v,s,p))}function d(g,v,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,p);let M=0;for(let b=0;b<p;b++)M+=v[b];a.update(M,s,1)}function _(g,v,p,S){if(p===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,v,0,S,0,p);let b=0;for(let R=0;R<p;R++)b+=v[R]*S[R];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function kb(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==yi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===ul&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Qi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!k)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=a.precision!==void 0?a.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const p=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:G,maxSamples:B}}function qb(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Fr,d=new de,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const M=p.length!==0||S||s!==0||u;return u=S,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){a=v(p,S,0)},this.setState=function(p,S,M){const b=p.clippingPlanes,R=p.clipIntersection,y=p.clipShadows,x=o.get(p);if(!u||b===null||b.length===0||f&&!y)f?v(null):g();else{const P=f?0:s,z=P*4;let D=x.clippingState||null;_.value=D,D=v(b,S,z,M);for(let G=0;G!==z;++G)D[G]=a[G];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function g(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(p,S,M,b){const R=p!==null?p.length:0;let y=null;if(R!==0){if(y=_.value,b!==!0||y===null){const x=M+R*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let z=0,D=M;z!==R;++z,D+=4)h.copy(p[z]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}_.value=y,_.needsUpdate=!0}return n.numPlanes=R,n.numIntersection=0,y}}function Yb(o){let n=new WeakMap;function a(h,d){return d===fc?h.mapping=Qs:d===Hd&&(h.mapping=Js),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===fc||d===Hd)if(n.has(h)){const _=n.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new kE(_.height);return g.fromEquirectangularTexture(o,h),n.set(h,g),h.addEventListener("dispose",u),a(g.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Ws=4,T0=[.125,.215,.35,.446,.526,.582],Vr=20,Td=new Np,b0=new Oe;let bd=null,Ad=0,Rd=0,Cd=!1;const Hr=(1+Math.sqrt(5))/2,Ys=1/Hr,A0=[new lt(-Hr,Ys,0),new lt(Hr,Ys,0),new lt(-Ys,0,Hr),new lt(Ys,0,Hr),new lt(0,Hr,-Ys),new lt(0,Hr,Ys),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],Wb=new lt;class vp{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=Wb}=f;bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,s,u,_,d),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(bd,Ad,Rd),this._renderer.xr.enabled=Cd,n.scissorTest=!1,ac(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===Qs||n.mapping===Js?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:ul,format:yi,colorSpace:$s,depthBuffer:!1},u=R0(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(f)),this._blurMaterial=Zb(f,n,a)}return u}_compileMaterial(n){const a=new ji(this._lodPlanes[0],n);this._renderer.compile(a,Td)}_sceneToCubeUV(n,a,s,u,f){const _=new Ui(90,1,a,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,M=p.toneMapping;p.getClearColor(b0),p.toneMapping=rr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const R=new dx({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),y=new ji(new pl,R);let x=!1;const P=n.background;P?P.isColor&&(R.color.copy(P),n.background=null,x=!0):(R.color.copy(b0),x=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[z],f.y,f.z)):D===1?(_.up.set(0,0,g[z]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[z],f.z)):(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[z]));const G=this._cubeSize;ac(u,D*G,z>2?G:0,G,G),p.setRenderTarget(u),x&&p.render(y,_),p.render(n,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=S,n.background=P}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===Qs||n.mapping===Js;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new ji(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const _=this._cubeSize;ac(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(h,Td)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=A0[(u-f-1)%A0.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const _=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new ji(this._lodPlanes[u],g),S=g.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),R=f/b,y=isFinite(f)?1+Math.floor(v*R):Vr;y>Vr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const x=[];let P=0;for(let O=0;O<Vr;++O){const k=O/R,w=Math.exp(-k*k/2);x.push(w),O===0?P+=w:O<y&&(P+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/P;S.envMap.value=n.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:z}=this;S.dTheta.value=b,S.mipInt.value=z-s;const D=this._sizeLods[u],G=3*D*(u>z-Ws?u-z+Ws:0),B=4*(this._cubeSize-D);ac(a,G,B,3*D,2*D),_.setRenderTarget(a),_.render(p,Td)}}function jb(o){const n=[],a=[],s=[];let u=o;const f=o-Ws+1+T0.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let _=1/d;h>o-Ws?_=T0[h-o+Ws-1]:h===0&&(_=0),s.push(_);const g=1/(d-2),v=-g,p=1+g,S=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,b=6,R=3,y=2,x=1,P=new Float32Array(R*b*M),z=new Float32Array(y*b*M),D=new Float32Array(x*b*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,k=B>2?0:-1,w=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];P.set(w,R*b*B),z.set(S,y*b*B);const C=[B,B,B,B,B,B];D.set(C,x*b*B)}const G=new lr;G.setAttribute("position",new Zi(P,R)),G.setAttribute("uv",new Zi(z,y)),G.setAttribute("faceIndex",new Zi(D,x)),n.push(G),u>Ws&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function R0(o,n,a){const s=new Yr(o,n,a);return s.texture.mapping=mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ac(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function Zb(o,n,a){const s=new Float32Array(Vr),u=new lt(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function C0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function w0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Lp(){return`

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
	`}function Kb(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const _=d.mapping,g=_===fc||_===Hd,v=_===Qs||_===Js;if(g||v){let p=n.get(d);const S=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return a===null&&(a=new vp(o)),p=g?a.fromEquirectangular(d,p):a.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new vp(o)),p=g?a.fromEquirectangular(d):a.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let _=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&_++;return _===g}function f(d){const _=d.target;_.removeEventListener("dispose",f);const g=n.get(_);g!==void 0&&(n.delete(_),g.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function Qb(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&ll("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function Jb(o,n,a,s){const u={},f=new WeakMap;function h(p){const S=p.target;S.index!==null&&n.remove(S.index);for(const b in S.attributes)n.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete u[S.id];const M=f.get(S);M&&(n.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function d(p,S){return u[S.id]===!0||(S.addEventListener("dispose",h),u[S.id]=!0,a.memory.geometries++),S}function _(p){const S=p.attributes;for(const M in S)n.update(S[M],o.ARRAY_BUFFER)}function g(p){const S=[],M=p.index,b=p.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let z=0,D=P.length;z<D;z+=3){const G=P[z+0],B=P[z+1],O=P[z+2];S.push(G,B,B,O,O,G)}}else if(b!==void 0){const P=b.array;R=b.version;for(let z=0,D=P.length/3-1;z<D;z+=3){const G=z+0,B=z+1,O=z+2;S.push(G,B,B,O,O,G)}}else return;const y=new(ux(S)?mx:px)(S,1);y.version=R;const x=f.get(p);x&&n.remove(x),f.set(p,y)}function v(p){const S=f.get(p);if(S){const M=p.index;M!==null&&S.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:v}}function $b(o,n,a){let s;function u(S){s=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function _(S,M){o.drawElements(s,M,f,S*h),a.update(M,s,1)}function g(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*h,b),a.update(M,s,b))}function v(S,M,b){if(b===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];a.update(y,s,1)}function p(S,M,b,R){if(b===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)g(S[x]/h,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,R,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*R[P];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function tA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function eA(o,n,a){const s=new WeakMap,u=new rn;function f(h,d,_){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==p){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let G=d.attributes.position.count*D,B=1;G>n.maxTextureSize&&(B=Math.ceil(G/n.maxTextureSize),G=n.maxTextureSize);const O=new Float32Array(G*B*4*p),k=new cx(O,G,B,p);k.type=Yi,k.needsUpdate=!0;const w=D*4;for(let V=0;V<p;V++){const at=x[V],ct=P[V],gt=z[V],st=G*B*4*V;for(let X=0;X<at.count;X++){const $=X*w;b===!0&&(u.fromBufferAttribute(at,X),O[st+$+0]=u.x,O[st+$+1]=u.y,O[st+$+2]=u.z,O[st+$+3]=0),R===!0&&(u.fromBufferAttribute(ct,X),O[st+$+4]=u.x,O[st+$+5]=u.y,O[st+$+6]=u.z,O[st+$+7]=0),y===!0&&(u.fromBufferAttribute(gt,X),O[st+$+8]=u.x,O[st+$+9]=u.y,O[st+$+10]=u.z,O[st+$+11]=gt.itemSize===4?u.w:1)}}S={count:p,texture:k,size:new ze(G,B)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const R=d.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",R),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function nA(o,n,a,s){let u=new WeakMap;function f(_){const g=s.render.frame,v=_.geometry,p=n.get(_,v);if(u.get(p)!==g&&(n.update(p),u.set(p,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),u.get(_)!==g&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,g))),_.isSkinnedMesh){const S=_.skeleton;u.get(S)!==g&&(S.update(),u.set(S,g))}return p}function h(){u=new WeakMap}function d(_){const g=_.target;g.removeEventListener("dispose",d),a.remove(g.instanceMatrix),g.instanceColor!==null&&a.remove(g.instanceColor)}return{update:f,dispose:h}}const Mx=new Gn,D0=new xx(1,1),Ex=new cx,Tx=new AE,bx=new vx,U0=[],N0=[],L0=new Float32Array(16),O0=new Float32Array(9),z0=new Float32Array(4);function no(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=U0[u];if(f===void 0&&(f=new Float32Array(u),U0[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function _n(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function vn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function _c(o,n){let a=N0[n];a===void 0&&(a=new Int32Array(n),N0[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function iA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function aA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(_n(a,n))return;o.uniform2fv(this.addr,n),vn(a,n)}}function rA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(_n(a,n))return;o.uniform3fv(this.addr,n),vn(a,n)}}function sA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(_n(a,n))return;o.uniform4fv(this.addr,n),vn(a,n)}}function oA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(_n(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),vn(a,n)}else{if(_n(a,s))return;z0.set(s),o.uniformMatrix2fv(this.addr,!1,z0),vn(a,s)}}function lA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(_n(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),vn(a,n)}else{if(_n(a,s))return;O0.set(s),o.uniformMatrix3fv(this.addr,!1,O0),vn(a,s)}}function uA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(_n(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),vn(a,n)}else{if(_n(a,s))return;L0.set(s),o.uniformMatrix4fv(this.addr,!1,L0),vn(a,s)}}function cA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function fA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(_n(a,n))return;o.uniform2iv(this.addr,n),vn(a,n)}}function hA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(_n(a,n))return;o.uniform3iv(this.addr,n),vn(a,n)}}function dA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(_n(a,n))return;o.uniform4iv(this.addr,n),vn(a,n)}}function pA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function mA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(_n(a,n))return;o.uniform2uiv(this.addr,n),vn(a,n)}}function gA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(_n(a,n))return;o.uniform3uiv(this.addr,n),vn(a,n)}}function _A(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(_n(a,n))return;o.uniform4uiv(this.addr,n),vn(a,n)}}function vA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(D0.compareFunction=lx,f=D0):f=Mx,a.setTexture2D(n||f,u)}function xA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||Tx,u)}function SA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||bx,u)}function yA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||Ex,u)}function MA(o){switch(o){case 5126:return iA;case 35664:return aA;case 35665:return rA;case 35666:return sA;case 35674:return oA;case 35675:return lA;case 35676:return uA;case 5124:case 35670:return cA;case 35667:case 35671:return fA;case 35668:case 35672:return hA;case 35669:case 35673:return dA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return yA}}function EA(o,n){o.uniform1fv(this.addr,n)}function TA(o,n){const a=no(n,this.size,2);o.uniform2fv(this.addr,a)}function bA(o,n){const a=no(n,this.size,3);o.uniform3fv(this.addr,a)}function AA(o,n){const a=no(n,this.size,4);o.uniform4fv(this.addr,a)}function RA(o,n){const a=no(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function CA(o,n){const a=no(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function wA(o,n){const a=no(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function DA(o,n){o.uniform1iv(this.addr,n)}function UA(o,n){o.uniform2iv(this.addr,n)}function NA(o,n){o.uniform3iv(this.addr,n)}function LA(o,n){o.uniform4iv(this.addr,n)}function OA(o,n){o.uniform1uiv(this.addr,n)}function zA(o,n){o.uniform2uiv(this.addr,n)}function PA(o,n){o.uniform3uiv(this.addr,n)}function IA(o,n){o.uniform4uiv(this.addr,n)}function BA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||Mx,f[h])}function FA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||Tx,f[h])}function HA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||bx,f[h])}function GA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||Ex,f[h])}function VA(o){switch(o){case 5126:return EA;case 35664:return TA;case 35665:return bA;case 35666:return AA;case 35674:return RA;case 35675:return CA;case 35676:return wA;case 5124:case 35670:return DA;case 35667:case 35671:return UA;case 35668:case 35672:return NA;case 35669:case 35673:return LA;case 5125:return OA;case 36294:return zA;case 36295:return PA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}class XA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=MA(a.type)}}class kA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=VA(a.type)}}class qA{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function P0(o,n){o.seq.push(n),o.map[n.id]=n}function YA(o,n,a){const s=o.name,u=s.length;for(wd.lastIndex=0;;){const f=wd.exec(s),h=wd.lastIndex;let d=f[1];const _=f[2]==="]",g=f[3];if(_&&(d=d|0),g===void 0||g==="["&&h+2===u){P0(a,g===void 0?new XA(d,o,n):new kA(d,o,n));break}else{let p=a.map[d];p===void 0&&(p=new qA(d),P0(a,p)),a=p}}}class cc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);YA(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],_=s[d.id];_.needsUpdate!==!1&&d.setValue(n,_.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function I0(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const WA=37297;let jA=0;function ZA(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const B0=new de;function KA(o){De._getMatrix(B0,De.workingColorSpace,o);const n=`mat3( ${B0.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case hc:return[n,"LinearTransferOETF"];case ke:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function F0(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),f=(o.getShaderInfoLog(n)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+ZA(o.getShaderSource(n),d)}else return f}function QA(o,n){const a=KA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function JA(o,n){let a;switch(n){case eE:a="Linear";break;case nE:a="Reinhard";break;case iE:a="Cineon";break;case Q0:a="ACESFilmic";break;case rE:a="AgX";break;case sE:a="Neutral";break;case aE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const rc=new lt;function $A(){De.getLuminanceCoefficients(rc);const o=rc.x.toFixed(4),n=rc.y.toFixed(4),a=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function eR(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function nR(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function el(o){return o!==""}function H0(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function G0(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(o){return o.replace(iR,rR)}const aR=new Map;function rR(o,n){let a=pe[n];if(a===void 0){const s=aR.get(n);if(s!==void 0)a=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return xp(a)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(o){return o.replace(sR,oR)}function oR(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function X0(o){let n=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function lR(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Z0?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===OM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(n="SHADOWMAP_TYPE_VSM"),n}function uR(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qs:case Js:n="ENVMAP_TYPE_CUBE";break;case mc:n="ENVMAP_TYPE_CUBE_UV";break}return n}function cR(o){let n="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Js&&(n="ENVMAP_MODE_REFRACTION"),n}function fR(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case K0:n="ENVMAP_BLENDING_MULTIPLY";break;case $M:n="ENVMAP_BLENDING_MIX";break;case tE:n="ENVMAP_BLENDING_ADD";break}return n}function hR(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function dR(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const _=lR(a),g=uR(a),v=cR(a),p=fR(a),S=hR(a),M=tR(a),b=eR(f),R=u.createProgram();let y,x,P=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(el).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(el).join(`
`),x.length>0&&(x+=`
`)):(y=[X0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[X0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==rr?"#define TONE_MAPPING":"",a.toneMapping!==rr?pe.tonemapping_pars_fragment:"",a.toneMapping!==rr?JA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,QA("linearToOutputTexel",a.outputColorSpace),$A(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(el).join(`
`)),h=xp(h),h=H0(h,a),h=G0(h,a),d=xp(d),d=H0(d,a),d=G0(d,a),h=V0(h),d=V0(d),a.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=P+y+h,D=P+x+d,G=I0(u,u.VERTEX_SHADER,z),B=I0(u,u.FRAGMENT_SHADER,D);u.attachShader(R,G),u.attachShader(R,B),a.index0AttributeName!==void 0?u.bindAttribLocation(R,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(R,0,"position"),u.linkProgram(R);function O(V){if(o.debug.checkShaderErrors){const at=u.getProgramInfoLog(R)||"",ct=u.getShaderInfoLog(G)||"",gt=u.getShaderInfoLog(B)||"",st=at.trim(),X=ct.trim(),$=gt.trim();let W=!0,xt=!0;if(u.getProgramParameter(R,u.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,R,G,B);else{const yt=F0(u,G,"vertex"),Ft=F0(u,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(R,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+st+`
`+yt+`
`+Ft)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(X===""||$==="")&&(xt=!1);xt&&(V.diagnostics={runnable:W,programLog:st,vertexShader:{log:X,prefix:y},fragmentShader:{log:$,prefix:x}})}u.deleteShader(G),u.deleteShader(B),k=new cc(u,R),w=nR(u,R)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(R,WA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(R),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=jA++,this.cacheKey=n,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let pR=0;class mR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new gR(n),a.set(n,s)),s}}class gR{constructor(n){this.id=pR++,this.code=n,this.usedTimes=0}}function _R(o,n,a,s,u,f,h){const d=new fx,_=new mR,g=new Set,v=[],p=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,at,ct){const gt=at.fog,st=ct.geometry,X=w.isMeshStandardMaterial?at.environment:null,$=(w.isMeshStandardMaterial?a:n).get(w.envMap||X),W=$&&$.mapping===mc?$.image.height:null,xt=b[w.type];w.precision!==null&&(M=u.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ft=yt!==void 0?yt.length:0;let ae=0;st.morphAttributes.position!==void 0&&(ae=1),st.morphAttributes.normal!==void 0&&(ae=2),st.morphAttributes.color!==void 0&&(ae=3);let ve,I,ft,Q;if(xt){const ye=qi[xt];ve=ye.vertexShader,I=ye.fragmentShader}else ve=w.vertexShader,I=w.fragmentShader,_.update(w),ft=_.getVertexShaderID(w),Q=_.getFragmentShaderID(w);const nt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),tt=ct.isInstancedMesh===!0,St=ct.isBatchedMesh===!0,Tt=!!w.map,Vt=!!w.matcap,L=!!$,Pe=!!w.aoMap,se=!!w.lightMap,Qt=!!w.bumpMap,Lt=!!w.normalMap,ie=!!w.displacementMap,Ht=!!w.emissiveMap,oe=!!w.metalnessMap,qe=!!w.roughnessMap,We=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,it=w.iridescence>0,pt=w.sheen>0,Mt=w.transmission>0,ht=We&&!!w.anisotropyMap,kt=U&&!!w.clearcoatMap,wt=U&&!!w.clearcoatNormalMap,jt=U&&!!w.clearcoatRoughnessMap,Kt=it&&!!w.iridescenceMap,Rt=it&&!!w.iridescenceThicknessMap,Ot=pt&&!!w.sheenColorMap,ne=pt&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,zt=!!w.specularColorMap,ce=!!w.specularIntensityMap,H=Mt&&!!w.transmissionMap,Ct=Mt&&!!w.thicknessMap,Ut=!!w.gradientMap,Xt=!!w.alphaMap,bt=w.alphaTest>0,vt=!!w.alphaHash,Wt=!!w.extensions;let ue=rr;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:I,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:St,batchingColor:St&&ct._colorsTexture!==null,instancing:tt,instancingColor:tt&&ct.instanceColor!==null,instancingMorph:tt&&ct.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$s,alphaToCoverage:!!w.alphaToCoverage,map:Tt,matcap:Vt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:W,aoMap:Pe,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:S&&ie,emissiveMap:Ht,normalMapObjectSpace:Lt&&w.normalMapType===cE,normalMapTangentSpace:Lt&&w.normalMapType===ox,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ht,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:wt,clearcoatRoughnessMap:jt,dispersion:T,iridescence:it,iridescenceMap:Kt,iridescenceThicknessMap:Rt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:zt,specularIntensityMap:ce,transmission:Mt,transmissionMap:H,thicknessMap:Ct,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===js&&w.alphaToCoverage===!1,alphaMap:Xt,alphaTest:bt,alphaHash:vt,combine:w.combine,mapUv:Tt&&R(w.map.channel),aoMapUv:Pe&&R(w.aoMap.channel),lightMapUv:se&&R(w.lightMap.channel),bumpMapUv:Qt&&R(w.bumpMap.channel),normalMapUv:Lt&&R(w.normalMap.channel),displacementMapUv:ie&&R(w.displacementMap.channel),emissiveMapUv:Ht&&R(w.emissiveMap.channel),metalnessMapUv:oe&&R(w.metalnessMap.channel),roughnessMapUv:qe&&R(w.roughnessMap.channel),anisotropyMapUv:ht&&R(w.anisotropyMap.channel),clearcoatMapUv:kt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:ne&&R(w.sheenRoughnessMap.channel),specularMapUv:Zt&&R(w.specularMap.channel),specularColorMapUv:zt&&R(w.specularColorMap.channel),specularIntensityMapUv:ce&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:Ct&&R(w.thicknessMap.channel),alphaMapUv:Xt&&R(w.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Lt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!st.attributes.uv&&(Tt||Xt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Et,skinning:ct.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Tt&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ya,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||St)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=g.has(1),Ve.vertexUv2s=g.has(2),Ve.vertexUv3s=g.has(3),g.clear(),Ve}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(P(C,w),z(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function z(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let V;if(C){const at=qi[C];V=HE.clone(at.uniforms)}else V=w.uniforms;return V}function G(w,C){let V;for(let at=0,ct=v.length;at<ct;at++){const gt=v[at];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new dR(o,C,w,f),v.push(V)),V}function B(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function O(w){_.remove(w)}function k(){_.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:G,releaseProgram:B,releaseShaderCache:O,programs:v,dispose:k}}function vR(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function xR(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function k0(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function q0(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(p,S,M,b,R,y){let x=o[n];return x===void 0?(x={id:p.id,object:p,geometry:S,material:M,groupOrder:b,renderOrder:p.renderOrder,z:R,group:y},o[n]=x):(x.id=p.id,x.object=p,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=p.renderOrder,x.z=R,x.group=y),n++,x}function d(p,S,M,b,R,y){const x=h(p,S,M,b,R,y);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function _(p,S,M,b,R,y){const x=h(p,S,M,b,R,y);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function g(p,S){a.length>1&&a.sort(p||xR),s.length>1&&s.sort(S||k0),u.length>1&&u.sort(S||k0)}function v(){for(let p=n,S=o.length;p<S;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:_,finish:v,sort:g}}function SR(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new q0,o.set(s,[h])):u>=f.length?(h=new q0,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function yR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new lt,color:new Oe};break;case"SpotLight":a={position:new lt,direction:new lt,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new lt,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":a={direction:new lt,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":a={color:new Oe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[n.id]=a,a}}}function MR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let ER=0;function TR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function bR(o){const n=new yR,a=MR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new lt);const u=new lt,f=new on,h=new on;function d(g){let v=0,p=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,P=0,z=0,D=0,G=0,B=0,O=0;g.sort(TR);for(let w=0,C=g.length;w<C;w++){const V=g[w],at=V.color,ct=V.intensity,gt=V.distance,st=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ct,p+=at.g*ct,S+=at.b*ct;else if(V.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(V.sh.coefficients[X],ct);O++}else if(V.isDirectionalLight){const X=n.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,W=a.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=st,s.directionalShadowMatrix[M]=V.shadow.matrix,P++}s.directional[M]=X,M++}else if(V.isSpotLight){const X=n.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(at).multiplyScalar(ct),X.distance=gt,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,s.spot[R]=X;const $=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,$.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[R]=$.matrix,V.castShadow){const W=a.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.spotShadow[R]=W,s.spotShadowMap[R]=st,D++}R++}else if(V.isRectAreaLight){const X=n.get(V);X.color.copy(at).multiplyScalar(ct),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=X,y++}else if(V.isPointLight){const X=n.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),X.distance=V.distance,X.decay=V.decay,V.castShadow){const $=V.shadow,W=a.get(V);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,s.pointShadow[b]=W,s.pointShadowMap[b]=st,s.pointShadowMatrix[b]=V.shadow.matrix,z++}s.point[b]=X,b++}else if(V.isHemisphereLight){const X=n.get(V);X.skyColor.copy(V.color).multiplyScalar(ct),X.groundColor.copy(V.groundColor).multiplyScalar(ct),s.hemi[x]=X,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=S;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==P||k.numPointShadows!==z||k.numSpotShadows!==D||k.numSpotMaps!==G||k.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=P,k.numPointShadows=z,k.numSpotShadows=D,k.numSpotMaps=G,k.numLightProbes=O,s.version=ER++)}function _(g,v){let p=0,S=0,M=0,b=0,R=0;const y=v.matrixWorldInverse;for(let x=0,P=g.length;x<P;x++){const z=g[x];if(z.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),p++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),h.identity(),f.copy(z.matrixWorld),f.premultiply(y),h.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:_,state:s}}function Y0(o){const n=new bR(o),a=[],s=[];function u(v){g.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){n.setup(a)}function _(v){n.setupView(a,v)}const g={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:g,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function AR(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new Y0(o),n.set(u,[d])):f>=h.length?(d=new Y0(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const RR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CR=`uniform sampler2D shadow_pass;
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
}`;function wR(o,n,a){let s=new Dp;const u=new ze,f=new ze,h=new rn,d=new JE({depthPacking:uE}),_=new $E,g={},v=a.maxTextureSize,p={[sr]:jn,[jn]:sr,[ya]:ya},S=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:RR,fragmentShader:CR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new lr;b.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ji(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let x=this.type;this.render=function(B,O,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(ar),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ct=x!==Sa&&this.type===Sa,gt=x===Sa&&this.type!==Sa;for(let st=0,X=B.length;st<X;st++){const $=B[st],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const xt=W.getFrameExtents();if(u.multiply(xt),f.copy(W.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/xt.x),u.x=f.x*xt.x,W.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/xt.y),u.y=f.y*xt.y,W.mapSize.y=f.y)),W.map===null||ct===!0||gt===!0){const Ft=this.type!==Sa?{minFilter:oi,magFilter:oi}:{};W.map!==null&&W.map.dispose(),W.map=new Yr(u.x,u.y,Ft),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const yt=W.getViewportCount();for(let Ft=0;Ft<yt;Ft++){const ae=W.getViewport(Ft);h.set(f.x*ae.x,f.y*ae.y,f.x*ae.z,f.y*ae.w),at.viewport(h),W.updateMatrices($,Ft),s=W.getFrustum(),D(O,k,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Sa&&P(W,k),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,V)};function P(B,O){const k=n.update(R);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yr(u.x,u.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,k,S,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,k,M,R,null)}function z(B,O,k,w){let C=null;const V=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=k.isPointLight===!0?_:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const at=C.uuid,ct=O.uuid;let gt=g[at];gt===void 0&&(gt={},g[at]=gt);let st=gt[ct];st===void 0&&(st=C.clone(),gt[ct]=st,O.addEventListener("dispose",G)),C=st}if(C.visible=O.visible,C.wireframe=O.wireframe,w===Sa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:p[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=k}return C}function D(B,O,k,w,C){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Sa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const ct=n.update(B),gt=B.material;if(Array.isArray(gt)){const st=ct.groups;for(let X=0,$=st.length;X<$;X++){const W=st[X],xt=gt[W.materialIndex];if(xt&&xt.visible){const yt=z(B,xt,w,C);B.onBeforeShadow(o,B,O,k,ct,yt,W),o.renderBufferDirect(k,null,ct,yt,B,W),B.onAfterShadow(o,B,O,k,ct,yt,W)}}}else if(gt.visible){const st=z(B,gt,w,C);B.onBeforeShadow(o,B,O,k,ct,st,null),o.renderBufferDirect(k,null,ct,st,B,null),B.onAfterShadow(o,B,O,k,ct,st,null)}}const at=B.children;for(let ct=0,gt=at.length;ct<gt;ct++)D(at[ct],O,k,w,C)}function G(B){B.target.removeEventListener("dispose",G);for(const k in g){const w=g[k],C=B.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const DR={[Ld]:Od,[zd]:Bd,[Pd]:Fd,[Ks]:Id,[Od]:Ld,[Bd]:zd,[Fd]:Pd,[Id]:Ks};function UR(o,n){function a(){let H=!1;const Ct=new rn;let Ut=null;const Xt=new rn(0,0,0,0);return{setMask:function(bt){Ut!==bt&&!H&&(o.colorMask(bt,bt,bt,bt),Ut=bt)},setLocked:function(bt){H=bt},setClear:function(bt,vt,Wt,ue,Ve){Ve===!0&&(bt*=ue,vt*=ue,Wt*=ue),Ct.set(bt,vt,Wt,ue),Xt.equals(Ct)===!1&&(o.clearColor(bt,vt,Wt,ue),Xt.copy(Ct))},reset:function(){H=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let H=!1,Ct=!1,Ut=null,Xt=null,bt=null;return{setReversed:function(vt){if(Ct!==vt){const Wt=n.get("EXT_clip_control");vt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ct=vt;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return Ct},setTest:function(vt){vt?nt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(vt){Ut!==vt&&!H&&(o.depthMask(vt),Ut=vt)},setFunc:function(vt){if(Ct&&(vt=DR[vt]),Xt!==vt){switch(vt){case Ld:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case zd:o.depthFunc(o.LESS);break;case Ks:o.depthFunc(o.LEQUAL);break;case Pd:o.depthFunc(o.EQUAL);break;case Id:o.depthFunc(o.GEQUAL);break;case Bd:o.depthFunc(o.GREATER);break;case Fd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=vt}},setLocked:function(vt){H=vt},setClear:function(vt){bt!==vt&&(Ct&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){H=!1,Ut=null,Xt=null,bt=null,Ct=!1}}}function u(){let H=!1,Ct=null,Ut=null,Xt=null,bt=null,vt=null,Wt=null,ue=null,Ve=null;return{setTest:function(ye){H||(ye?nt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ye){Ct!==ye&&!H&&(o.stencilMask(ye),Ct=ye)},setFunc:function(ye,$e,pn){(Ut!==ye||Xt!==$e||bt!==pn)&&(o.stencilFunc(ye,$e,pn),Ut=ye,Xt=$e,bt=pn)},setOp:function(ye,$e,pn){(vt!==ye||Wt!==$e||ue!==pn)&&(o.stencilOp(ye,$e,pn),vt=ye,Wt=$e,ue=pn)},setLocked:function(ye){H=ye},setClear:function(ye){Ve!==ye&&(o.clearStencil(ye),Ve=ye)},reset:function(){H=!1,Ct=null,Ut=null,Xt=null,bt=null,vt=null,Wt=null,ue=null,Ve=null}}}const f=new a,h=new s,d=new u,_=new WeakMap,g=new WeakMap;let v={},p={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,P=null,z=null,D=null,G=null,B=null,O=new Oe(0,0,0),k=0,w=!1,C=null,V=null,at=null,ct=null,gt=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=$>=2);let xt=null,yt={};const Ft=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),ve=new rn().fromArray(Ft),I=new rn().fromArray(ae);function ft(H,Ct,Ut,Xt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(H,vt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ut;Wt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ct+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const Q={};Q[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),nt(o.DEPTH_TEST),h.setFunc(Ks),Qt(!1),Lt(Qv),nt(o.CULL_FACE),Pe(ar);function nt(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Et(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function tt(H,Ct){return p[H]!==Ct?(o.bindFramebuffer(H,Ct),p[H]=Ct,H===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Ct),H===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function St(H,Ct){let Ut=M,Xt=!1;if(H){Ut=S.get(Ct),Ut===void 0&&(Ut=[],S.set(Ct,Ut));const bt=H.textures;if(Ut.length!==bt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Wt=bt.length;vt<Wt;vt++)Ut[vt]=o.COLOR_ATTACHMENT0+vt;Ut.length=bt.length,Xt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ut)}function Tt(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const Vt={[Gr]:o.FUNC_ADD,[PM]:o.FUNC_SUBTRACT,[IM]:o.FUNC_REVERSE_SUBTRACT};Vt[BM]=o.MIN,Vt[FM]=o.MAX;const L={[HM]:o.ZERO,[GM]:o.ONE,[VM]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[jM]:o.SRC_ALPHA_SATURATE,[YM]:o.DST_COLOR,[kM]:o.DST_ALPHA,[XM]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[WM]:o.ONE_MINUS_DST_COLOR,[qM]:o.ONE_MINUS_DST_ALPHA,[ZM]:o.CONSTANT_COLOR,[KM]:o.ONE_MINUS_CONSTANT_COLOR,[QM]:o.CONSTANT_ALPHA,[JM]:o.ONE_MINUS_CONSTANT_ALPHA};function Pe(H,Ct,Ut,Xt,bt,vt,Wt,ue,Ve,ye){if(H===ar){R===!0&&(Et(o.BLEND),R=!1);return}if(R===!1&&(nt(o.BLEND),R=!0),H!==zM){if(H!==y||ye!==w){if((x!==Gr||D!==Gr)&&(o.blendEquation(o.FUNC_ADD),x=Gr,D=Gr),ye)switch(H){case js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFunc(o.ONE,o.ONE);break;case $v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $v:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,z=null,G=null,B=null,O.set(0,0,0),k=0,y=H,w=ye}return}bt=bt||Ct,vt=vt||Ut,Wt=Wt||Xt,(Ct!==x||bt!==D)&&(o.blendEquationSeparate(Vt[Ct],Vt[bt]),x=Ct,D=bt),(Ut!==P||Xt!==z||vt!==G||Wt!==B)&&(o.blendFuncSeparate(L[Ut],L[Xt],L[vt],L[Wt]),P=Ut,z=Xt,G=vt,B=Wt),(ue.equals(O)===!1||Ve!==k)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),O.copy(ue),k=Ve),y=H,w=!1}function se(H,Ct){H.side===ya?Et(o.CULL_FACE):nt(o.CULL_FACE);let Ut=H.side===jn;Ct&&(Ut=!Ut),Qt(Ut),H.blending===js&&H.transparent===!1?Pe(ar):Pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const Xt=H.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function Lt(H){H!==NM?(nt(o.CULL_FACE),H!==V&&(H===Qv?o.cullFace(o.BACK):H===LM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),V=H}function ie(H){H!==at&&(X&&o.lineWidth(H),at=H)}function Ht(H,Ct,Ut){H?(nt(o.POLYGON_OFFSET_FILL),(ct!==Ct||gt!==Ut)&&(o.polygonOffset(Ct,Ut),ct=Ct,gt=Ut)):Et(o.POLYGON_OFFSET_FILL)}function oe(H){H?nt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function qe(H){H===void 0&&(H=o.TEXTURE0+st-1),xt!==H&&(o.activeTexture(H),xt=H)}function We(H,Ct,Ut){Ut===void 0&&(xt===null?Ut=o.TEXTURE0+st-1:Ut=xt);let Xt=yt[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},yt[Ut]=Xt),(Xt.type!==H||Xt.texture!==Ct)&&(xt!==Ut&&(o.activeTexture(Ut),xt=Ut),o.bindTexture(H,Ct||Q[H]),Xt.type=H,Xt.texture=Ct)}function U(){const H=yt[xt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Kt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(H){ve.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ve.copy(H))}function ne(H){I.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),I.copy(H))}function Zt(H,Ct){let Ut=g.get(Ct);Ut===void 0&&(Ut=new WeakMap,g.set(Ct,Ut));let Xt=Ut.get(H);Xt===void 0&&(Xt=o.getUniformBlockIndex(Ct,H.name),Ut.set(H,Xt))}function zt(H,Ct){const Xt=g.get(Ct).get(H);_.get(Ct)!==Xt&&(o.uniformBlockBinding(Ct,Xt,H.__bindingPointIndex),_.set(Ct,Xt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,yt={},p={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,P=null,z=null,D=null,G=null,B=null,O=new Oe(0,0,0),k=0,w=!1,C=null,V=null,at=null,ct=null,gt=null,ve.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:nt,disable:Et,bindFramebuffer:tt,drawBuffers:St,useProgram:Tt,setBlending:Pe,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ht,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Kt,texImage3D:Rt,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:wt,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:kt,scissor:Ot,viewport:ne,reset:ce}}function NR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ze,v=new WeakMap;let p;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):pc("canvas")}function R(U,T,it){let pt=1;const Mt=We(U);if((Mt.width>it||Mt.height>it)&&(pt=it/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(pt*Mt.width),kt=Math.floor(pt*Mt.height);p===void 0&&(p=b(ht,kt));const wt=T?b(ht,kt):p;return wt.width=ht,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,ht,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,it,pt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=T;if(T===o.RED&&(it===o.FLOAT&&(ht=o.R32F),it===o.HALF_FLOAT&&(ht=o.R16F),it===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(ht=o.R8UI),it===o.UNSIGNED_SHORT&&(ht=o.R16UI),it===o.UNSIGNED_INT&&(ht=o.R32UI),it===o.BYTE&&(ht=o.R8I),it===o.SHORT&&(ht=o.R16I),it===o.INT&&(ht=o.R32I)),T===o.RG&&(it===o.FLOAT&&(ht=o.RG32F),it===o.HALF_FLOAT&&(ht=o.RG16F),it===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(ht=o.RG8UI),it===o.UNSIGNED_SHORT&&(ht=o.RG16UI),it===o.UNSIGNED_INT&&(ht=o.RG32UI),it===o.BYTE&&(ht=o.RG8I),it===o.SHORT&&(ht=o.RG16I),it===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),it===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),it===o.UNSIGNED_INT&&(ht=o.RGB32UI),it===o.BYTE&&(ht=o.RGB8I),it===o.SHORT&&(ht=o.RGB16I),it===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),it===o.UNSIGNED_INT&&(ht=o.RGBA32UI),it===o.BYTE&&(ht=o.RGBA8I),it===o.SHORT&&(ht=o.RGBA16I),it===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const kt=Mt?hc:De.getTransfer(pt);it===o.FLOAT&&(ht=o.RGBA32F),it===o.HALF_FLOAT&&(ht=o.RGBA16F),it===o.UNSIGNED_BYTE&&(ht=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ht}function D(U,T){let it;return U?T===null||T===qr||T===rl?it=o.DEPTH24_STENCIL8:T===Yi?it=o.DEPTH32F_STENCIL8:T===al&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===rl?it=o.DEPTH_COMPONENT24:T===Yi?it=o.DEPTH_COMPONENT32F:T===al&&(it=o.DEPTH_COMPONENT16),it}function G(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==oi&&U.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),k(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),C(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const it=U.source,pt=S.get(it);if(pt){const Mt=pt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(pt).length===0&&S.delete(it)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const it=U.source,pt=S.get(it);delete pt[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let Mt=0;Mt<T.__webglFramebuffer[pt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[pt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=U.textures;for(let pt=0,Mt=it.length;pt<Mt;pt++){const ht=s.get(it[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(it[pt])}s.remove(U)}let V=0;function at(){V=0}function ct(){const U=V;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),V+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function st(U,T){const it=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(it,U,T);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function X(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Q(it,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function $(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Q(it,U,T);return}a.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function W(U,T){const it=s.get(U);if(U.version>0&&it.__version!==U.version){nt(it,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const xt={[Gd]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},yt={[oi]:o.NEAREST,[oE]:o.NEAREST_MIPMAP_NEAREST,[Bu]:o.NEAREST_MIPMAP_LINEAR,[Si]:o.LINEAR,[Jh]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},Ft={[fE]:o.NEVER,[_E]:o.ALWAYS,[hE]:o.LESS,[lx]:o.LEQUAL,[dE]:o.EQUAL,[gE]:o.GEQUAL,[pE]:o.GREATER,[mE]:o.NOTEQUAL};function ae(U,T){if(T.type===Yi&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Jh||T.magFilter===Bu||T.magFilter===kr||T.minFilter===Si||T.minFilter===Jh||T.minFilter===Bu||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ft[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Bu&&T.minFilter!==kr||T.type===Yi&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=n.get("EXT_texture_filter_anisotropic");o.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ve(U,T){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const pt=T.source;let Mt=S.get(pt);Mt===void 0&&(Mt={},S.set(pt,Mt));const ht=gt(T);if(ht!==U.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Mt[ht].usedTimes++;const kt=Mt[U.__cacheKey];kt!==void 0&&(Mt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(T)),U.__cacheKey=ht,U.__webglTexture=Mt[ht].texture}return it}function I(U,T,it){return Math.floor(Math.floor(U/it)/T)}function ft(U,T,it,pt){const ht=U.updateRanges;if(ht.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,pt,T.data);else{ht.sort((Rt,Ot)=>Rt.start-Ot.start);let kt=0;for(let Rt=1;Rt<ht.length;Rt++){const Ot=ht[kt],ne=ht[Rt],Zt=Ot.start+Ot.count,zt=I(ne.start,T.width,4),ce=I(Ot.start,T.width,4);ne.start<=Zt+1&&zt===ce&&I(ne.start+ne.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++kt,ht[kt]=ne)}ht.length=kt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Ot=ht.length;Rt<Ot;Rt++){const ne=ht[Rt],Zt=Math.floor(ne.start/4),zt=Math.ceil(ne.count/4),ce=Zt%T.width,H=Math.floor(Zt/T.width),Ct=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),a.texSubImage2D(o.TEXTURE_2D,0,ce,H,Ct,Ut,it,pt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function Q(U,T,it){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const Mt=ve(U,T),ht=T.source;a.bindTexture(pt,U.__webglTexture,o.TEXTURE0+it);const kt=s.get(ht);if(ht.version!==kt.__version||Mt===!0){a.activeTexture(o.TEXTURE0+it);const wt=De.getPrimaries(De.workingColorSpace),jt=T.colorSpace===ir?null:De.getPrimaries(T.colorSpace),Kt=T.colorSpace===ir||wt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Rt=R(T.image,!1,u.maxTextureSize);Rt=qe(T,Rt);const Ot=f.convert(T.format,T.colorSpace),ne=f.convert(T.type);let Zt=z(T.internalFormat,Ot,ne,T.colorSpace,T.isVideoTexture);ae(pt,T);let zt;const ce=T.mipmaps,H=T.isVideoTexture!==!0,Ct=kt.__version===void 0||Mt===!0,Ut=ht.dataReady,Xt=G(T,Rt);if(T.isDepthTexture)Zt=D(T.format===ol,T.type),Ct&&(H?a.texStorage2D(o.TEXTURE_2D,1,Zt,Rt.width,Rt.height):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ne,null));else if(T.isDataTexture)if(ce.length>0){H&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,ce[0].width,ce[0].height);for(let bt=0,vt=ce.length;bt<vt;bt++)zt=ce[bt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,Ot,ne,zt.data);T.generateMipmaps=!1}else H?(Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height),Ut&&ft(T,Rt,Ot,ne)):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ne,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,ce[0].width,ce[0].height,Rt.depth);for(let bt=0,vt=ce.length;bt<vt;bt++)if(zt=ce[bt],T.format!==yi)if(Ot!==null)if(H){if(Ut)if(T.layerUpdates.size>0){const Wt=E0(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=zt.data.subarray(ue*Wt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Wt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ue,zt.width,zt.height,1,Ot,Ve)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Rt.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,zt.width,zt.height,Rt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Rt.depth,Ot,ne,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,zt.width,zt.height,Rt.depth,0,Ot,ne,zt.data)}else{H&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,ce[0].width,ce[0].height);for(let bt=0,vt=ce.length;bt<vt;bt++)zt=ce[bt],T.format!==yi?Ot!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,bt,Zt,zt.width,zt.height,0,Ot,ne,zt.data)}else if(T.isDataArrayTexture)if(H){if(Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut)if(T.layerUpdates.size>0){const bt=E0(Rt.width,Rt.height,T.format,T.type);for(const vt of T.layerUpdates){const Wt=Rt.data.subarray(vt*bt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*bt/Rt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ot,ne,Wt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ne,Rt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ne,Rt.data);else if(T.isData3DTexture)H?(Ct&&a.texStorage3D(o.TEXTURE_3D,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ne,Rt.data)):a.texImage3D(o.TEXTURE_3D,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ne,Rt.data);else if(T.isFramebufferTexture){if(Ct)if(H)a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height);else{let bt=Rt.width,vt=Rt.height;for(let Wt=0;Wt<Xt;Wt++)a.texImage2D(o.TEXTURE_2D,Wt,Zt,bt,vt,0,Ot,ne,null),bt>>=1,vt>>=1}}else if(ce.length>0){if(H&&Ct){const bt=We(ce[0]);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,bt.width,bt.height)}for(let bt=0,vt=ce.length;bt<vt;bt++)zt=ce[bt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot,ne,zt):a.texImage2D(o.TEXTURE_2D,bt,Zt,Ot,ne,zt);T.generateMipmaps=!1}else if(H){if(Ct){const bt=We(Rt);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,bt.width,bt.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,Rt)}else a.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,Rt);y(T)&&x(pt),kt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function nt(U,T,it){if(T.image.length!==6)return;const pt=ve(U,T),Mt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+it);const ht=s.get(Mt);if(Mt.version!==ht.__version||pt===!0){a.activeTexture(o.TEXTURE0+it);const kt=De.getPrimaries(De.workingColorSpace),wt=T.colorSpace===ir?null:De.getPrimaries(T.colorSpace),jt=T.colorSpace===ir||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let vt=0;vt<6;vt++)!Kt&&!Rt?Ot[vt]=R(T.image[vt],!0,u.maxCubemapSize):Ot[vt]=Rt?T.image[vt].image:T.image[vt],Ot[vt]=qe(T,Ot[vt]);const ne=Ot[0],Zt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),ce=z(T.internalFormat,Zt,zt,T.colorSpace),H=T.isVideoTexture!==!0,Ct=ht.__version===void 0||pt===!0,Ut=Mt.dataReady;let Xt=G(T,ne);ae(o.TEXTURE_CUBE_MAP,T);let bt;if(Kt){H&&Ct&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ce,ne.width,ne.height);for(let vt=0;vt<6;vt++){bt=Ot[vt].mipmaps;for(let Wt=0;Wt<bt.length;Wt++){const ue=bt[Wt];T.format!==yi?Zt!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,ue.width,ue.height,Zt,ue.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,ue.width,ue.height,Zt,zt,ue.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,ce,ue.width,ue.height,0,Zt,zt,ue.data)}}}else{if(bt=T.mipmaps,H&&Ct){bt.length>0&&Xt++;const vt=We(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot[vt].width,Ot[vt].height,Zt,zt,Ot[vt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Ot[vt].width,Ot[vt].height,0,Zt,zt,Ot[vt].data);for(let Wt=0;Wt<bt.length;Wt++){const Ve=bt[Wt].image[vt].image;H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Ve.width,Ve.height,Zt,zt,Ve.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,ce,Ve.width,Ve.height,0,Zt,zt,Ve.data)}}else{H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,zt,Ot[vt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Zt,zt,Ot[vt]);for(let Wt=0;Wt<bt.length;Wt++){const ue=bt[Wt];H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Zt,zt,ue.image[vt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,ce,Zt,zt,ue.image[vt])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,it,pt,Mt,ht){const kt=f.convert(it.format,it.colorSpace),wt=f.convert(it.type),jt=z(it.internalFormat,kt,wt,it.colorSpace),Kt=s.get(T),Rt=s.get(it);if(Rt.__renderTarget=T,!Kt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ht),ne=Math.max(1,T.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?a.texImage3D(Mt,ht,jt,Ot,ne,T.depth,0,kt,wt,null):a.texImage2D(Mt,ht,jt,Ot,ne,0,kt,wt,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Mt,Rt.__webglTexture,0,ie(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Mt,Rt.__webglTexture,ht),a.bindFramebuffer(o.FRAMEBUFFER,null)}function tt(U,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const pt=T.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,ht=D(T.stencilBuffer,Mt),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ie(T);Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ht,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const pt=T.textures;for(let Mt=0;Mt<pt.length;Mt++){const ht=pt[Mt],kt=f.convert(ht.format,ht.colorSpace),wt=f.convert(ht.type),jt=z(ht.internalFormat,kt,wt,ht.colorSpace),Kt=ie(T);it&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,jt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function St(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),st(T.depthTexture,0);const Mt=pt.__webglTexture,ht=ie(T);if(T.depthTexture.format===sl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===ol)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Tt(U){const T=s.get(U),it=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=pt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?St(T.__webglFramebuffer[0],U):St(T.__webglFramebuffer,U)}else if(it){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),tt(T.__webglDepthbuffer[pt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),tt(T.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,T,it){const pt=s.get(U);T!==void 0&&Et(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Tt(U)}function L(U){const T=U.texture,it=s.get(U),pt=s.get(T);U.addEventListener("dispose",O);const Mt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,kt=Mt.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ht){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)it.__webglFramebuffer[wt][jt]=o.createFramebuffer()}else it.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)it.__webglFramebuffer[wt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,jt=Mt.length;wt<jt;wt++){const Kt=s.get(Mt[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const jt=Mt[wt];it.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const Kt=f.convert(jt.format,jt.colorSpace),Rt=f.convert(jt.type),Ot=z(jt.internalFormat,Kt,Rt,jt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),tt(it.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){a.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ae(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Et(it.__webglFramebuffer[wt][jt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,jt);else Et(it.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let wt=0,jt=Mt.length;wt<jt;wt++){const Kt=Mt[wt],Rt=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,Rt.__webglTexture),ae(Ot,Kt),Et(it.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+wt,Ot,0),y(Kt)&&x(Ot)}a.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(wt,pt.__webglTexture),ae(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Et(it.__webglFramebuffer[jt],U,T,o.COLOR_ATTACHMENT0,wt,jt);else Et(it.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&x(wt),a.unbindTexture()}U.depthBuffer&&Tt(U)}function Pe(U){const T=U.textures;for(let it=0,pt=T.length;it<pt;it++){const Mt=T[it];if(y(Mt)){const ht=P(U),kt=s.get(Mt).__webglTexture;a.bindTexture(ht,kt),x(ht),a.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,it=U.width,pt=U.height;let Mt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),wt=T.length>1;if(wt)for(let Kt=0;Kt<T.length;Kt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const Rt=s.get(T[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,it,pt,0,0,it,pt,Mt,o.NEAREST),_===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ht),Qt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Kt=0;Kt<T.length;Kt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const Rt=s.get(T[Kt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Rt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(U){return Math.min(u.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const it=U.colorSpace,pt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==$s&&it!==ir&&(De.getTransfer(it)===ke?(pt!==yi||Mt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=st,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Vt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ht}function LR(o,n){function a(s,u=ir){let f;const h=De.getTransfer(u);if(s===Qi)return o.UNSIGNED_BYTE;if(s===Ep)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Tp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ex)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$0)return o.BYTE;if(s===tx)return o.SHORT;if(s===al)return o.UNSIGNED_SHORT;if(s===Mp)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===Yi)return o.FLOAT;if(s===ul)return o.HALF_FLOAT;if(s===ix)return o.ALPHA;if(s===ax)return o.RGB;if(s===yi)return o.RGBA;if(s===sl)return o.DEPTH_COMPONENT;if(s===ol)return o.DEPTH_STENCIL;if(s===rx)return o.RED;if(s===bp)return o.RED_INTEGER;if(s===sx)return o.RG;if(s===Ap)return o.RG_INTEGER;if(s===Rp)return o.RGBA_INTEGER;if(s===sc||s===oc||s===lc||s===uc)if(h===ke)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===sc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===sc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===kd||s===qd||s===Yd)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Xd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd||s===jd||s===Zd)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Wd||s===jd)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Zd)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Kd)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cp||s===fp||s===hp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===cp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===mp||s===gp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===dp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
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

}`;class PR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a){if(this.texture===null){const s=new Sx(n.texture);(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new or({vertexShader:OR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ji(new gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IR extends eo{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",_=1,g=null,v=null,p=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new PR,x={},P=a.getContextAttributes();let z=null,D=null;const G=[],B=[],O=new ze;let k=null;const w=new Ui;w.viewport=new rn;const C=new Ui;C.viewport=new rn;const V=[w,C],at=new aT;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=G[Q];return nt===void 0&&(nt=new yd,G[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=G[Q];return nt===void 0&&(nt=new yd,G[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=G[Q];return nt===void 0&&(nt=new yd,G[Q]=nt),nt.getHandSpace()};function st(Q){const nt=B.indexOf(Q.inputSource);if(nt===-1)return;const Et=G[nt];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,g||h),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){u.removeEventListener("select",st),u.removeEventListener("selectstart",st),u.removeEventListener("selectend",st),u.removeEventListener("squeeze",st),u.removeEventListener("squeezestart",st),u.removeEventListener("squeezeend",st),u.removeEventListener("end",X),u.removeEventListener("inputsourceschange",$);for(let Q=0;Q<G.length;Q++){const nt=B[Q];nt!==null&&(B[Q]=null,G[Q].disconnect(nt))}ct=null,gt=null,y.reset();for(const Q in x)delete x[Q];n.setRenderTarget(z),M=null,S=null,p=null,u=null,D=null,ft.stop(),s.isPresenting=!1,n.setPixelRatio(k),n.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return p===null&&R&&(p=new XRWebGLBinding(u,a)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(z=n.getRenderTarget(),u.addEventListener("select",st),u.addEventListener("selectstart",st),u.addEventListener("selectend",st),u.addEventListener("squeeze",st),u.addEventListener("squeezestart",st),u.addEventListener("squeezeend",st),u.addEventListener("end",X),u.addEventListener("inputsourceschange",$),P.xrCompatible!==!0&&await a.makeXRCompatible(),k=n.getPixelRatio(),n.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,tt=null,St=null;P.depth&&(St=P.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Et=P.stencil?ol:sl,tt=P.stencil?rl:qr);const Tt={colorFormat:a.RGBA8,depthFormat:St,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(Tt),u.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),D=new Yr(S.textureWidth,S.textureHeight,{format:yi,type:Qi,depthTexture:new xx(S.textureWidth,S.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:n.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Et),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Yr(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Qi,colorSpace:n.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),g=null,h=await u.requestReferenceSpace(d),ft.setContext(u),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(Q){for(let nt=0;nt<Q.removed.length;nt++){const Et=Q.removed[nt],tt=B.indexOf(Et);tt>=0&&(B[tt]=null,G[tt].disconnect(Et))}for(let nt=0;nt<Q.added.length;nt++){const Et=Q.added[nt];let tt=B.indexOf(Et);if(tt===-1){for(let Tt=0;Tt<G.length;Tt++)if(Tt>=B.length){B.push(Et),tt=Tt;break}else if(B[Tt]===null){B[Tt]=Et,tt=Tt;break}if(tt===-1)break}const St=G[tt];St&&St.connect(Et)}}const W=new lt,xt=new lt;function yt(Q,nt,Et){W.setFromMatrixPosition(nt.matrixWorld),xt.setFromMatrixPosition(Et.matrixWorld);const tt=W.distanceTo(xt),St=nt.projectionMatrix.elements,Tt=Et.projectionMatrix.elements,Vt=St[14]/(St[10]-1),L=St[14]/(St[10]+1),Pe=(St[9]+1)/St[5],se=(St[9]-1)/St[5],Qt=(St[8]-1)/St[0],Lt=(Tt[8]+1)/Tt[0],ie=Vt*Qt,Ht=Vt*Lt,oe=tt/(-Qt+Lt),qe=oe*-Qt;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qe),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const We=Vt+oe,U=L+oe,T=ie-qe,it=Ht+(tt-qe),pt=Pe*L/U*We,Mt=se*L/U*We;Q.projectionMatrix.makePerspective(T,it,pt,Mt,We,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ft(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let nt=Q.near,Et=Q.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),at.near=C.near=w.near=nt,at.far=C.far=w.far=Et,(ct!==at.near||gt!==at.far)&&(u.updateRenderState({depthNear:at.near,depthFar:at.far}),ct=at.near,gt=at.far),at.layers.mask=Q.layers.mask|6,w.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const tt=Q.parent,St=at.cameras;Ft(at,tt);for(let Tt=0;Tt<St.length;Tt++)Ft(St[Tt],tt);St.length===2?yt(at,w,C):at.projectionMatrix.copy(w.projectionMatrix),ae(Q,at,tt)};function ae(Q,nt,Et){Et===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_p*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&M===null))return _},this.setFoveation=function(Q){_=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function(Q){return x[Q]};let ve=null;function I(Q,nt){if(v=nt.getViewerPose(g||h),b=nt,v!==null){const Et=v.views;M!==null&&(n.setRenderTargetFramebuffer(D,M.framebuffer),n.setRenderTarget(D));let tt=!1;Et.length!==at.cameras.length&&(at.cameras.length=0,tt=!0);for(let L=0;L<Et.length;L++){const Pe=Et[L];let se=null;if(M!==null)se=M.getViewport(Pe);else{const Lt=p.getViewSubImage(S,Pe);se=Lt.viewport,L===0&&(n.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),n.setRenderTarget(D))}let Qt=V[L];Qt===void 0&&(Qt=new Ui,Qt.layers.enable(L),Qt.viewport=new rn,V[L]=Qt),Qt.matrix.fromArray(Pe.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Pe.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),L===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),tt===!0&&at.cameras.push(Qt)}const St=u.enabledFeatures;if(St&&St.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&R){p=s.getBinding();const L=p.getDepthInformation(Et[0]);L&&L.isValid&&L.texture&&y.init(L,u.renderState)}if(St&&St.includes("camera-access")&&R){n.state.unbindTexture(),p=s.getBinding();for(let L=0;L<Et.length;L++){const Pe=Et[L].camera;if(Pe){let se=x[Pe];se||(se=new Sx,x[Pe]=se);const Qt=p.getCameraImage(Pe);se.sourceTexture=Qt}}}}for(let Et=0;Et<G.length;Et++){const tt=B[Et],St=G[Et];tt!==null&&St!==void 0&&St.update(tt,nt,g||h)}ve&&ve(Q,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),b=null}const ft=new yx;ft.setAnimationLoop(I),this.setAnimationLoop=function(Q){ve=Q},this.dispose=function(){}}}const Br=new Ji,BR=new on;function FR(o,n){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,gx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function u(y,x,P,z,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),p(y,x)):x.isMeshPhongMaterial?(f(y,x),v(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,D)):x.isMeshMatcapMaterial?(f(y,x),b(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),R(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?_(y,x,P,z):x.isSpriteMaterial?g(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=n.get(x),z=P.envMap,D=P.envMapRotation;z&&(y.envMap.value=z,Br.copy(D),Br.x*=-1,Br.y*=-1,Br.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(BR.makeRotationFromEuler(Br)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function _(y,x,P,z){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=z*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const P=n.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function HR(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(P,z){const D=z.program;s.uniformBlockBinding(P,D)}function g(P,z){let D=u[P.id];D===void 0&&(b(P),D=v(P),u[P.id]=D,P.addEventListener("dispose",y));const G=z.program;s.updateUBOMapping(P,G);const B=n.render.frame;f[P.id]!==B&&(S(P),f[P.id]=B)}function v(P){const z=p();P.__bindingPointIndex=z;const D=o.createBuffer(),G=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function p(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const z=u[P.id],D=P.uniforms,G=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let B=0,O=D.length;B<O;B++){const k=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,C=k.length;w<C;w++){const V=k[w];if(M(V,B,w,G)===!0){const at=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let st=0;st<ct.length;st++){const X=ct[st],$=R(X);typeof X=="number"||typeof X=="boolean"?(V.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):X.isMatrix3?(V.__data[0]=X.elements[0],V.__data[1]=X.elements[1],V.__data[2]=X.elements[2],V.__data[3]=0,V.__data[4]=X.elements[3],V.__data[5]=X.elements[4],V.__data[6]=X.elements[5],V.__data[7]=0,V.__data[8]=X.elements[6],V.__data[9]=X.elements[7],V.__data[10]=X.elements[8],V.__data[11]=0):(X.toArray(V.__data,gt),gt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,z,D,G){const B=P.value,O=z+"_"+D;if(G[O]===void 0)return typeof B=="number"||typeof B=="boolean"?G[O]=B:G[O]=B.clone(),!0;{const k=G[O];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return G[O]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function b(P){const z=P.uniforms;let D=0;const G=16;for(let O=0,k=z.length;O<k;O++){const w=Array.isArray(z[O])?z[O]:[z[O]];for(let C=0,V=w.length;C<V;C++){const at=w[C],ct=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,st=ct.length;gt<st;gt++){const X=ct[gt],$=R(X),W=D%G,xt=W%$.boundary,yt=W+xt;D+=xt,yt!==0&&G-yt<$.storage&&(D+=G-yt),at.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=$.storage}}}const B=D%G;return B>0&&(D+=G-B),P.__size=D,P.__cache={},this}function R(P){const z={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(z.boundary=4,z.storage=4):P.isVector2?(z.boundary=8,z.storage=8):P.isVector3||P.isColor?(z.boundary=16,z.storage=12):P.isVector4?(z.boundary=16,z.storage=16):P.isMatrix3?(z.boundary=48,z.storage=48):P.isMatrix4?(z.boundary=64,z.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),z}function y(P){const z=P.target;z.removeEventListener("dispose",y);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function x(){for(const P in u)o.deleteBuffer(u[P]);h=[],u={},f={}}return{bind:_,update:g,dispose:x}}class GR{constructor(n={}){const{canvas:a=xE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,x=null;const P=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=xi;let B=0,O=0,k=null,w=-1,C=null;const V=new rn,at=new rn;let ct=null;const gt=new Oe(0);let st=0,X=a.width,$=a.height,W=1,xt=null,yt=null;const Ft=new rn(0,0,X,$),ae=new rn(0,0,X,$);let ve=!1;const I=new Dp;let ft=!1,Q=!1;const nt=new on,Et=new lt,tt=new rn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Vt(){return k===null?W:1}let L=s;function Pe(A,Z){return a.getContext(A,Z)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${yp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",Xt,!1),a.addEventListener("webglcontextcreationerror",bt,!1),L===null){const Z="webgl2";if(L=Pe(Z,A),L===null)throw Pe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,Qt,Lt,ie,Ht,oe,qe,We,U,T,it,pt,Mt,ht,kt,wt,jt,Kt,Rt,Ot,ne,Zt,zt,ce;function H(){se=new Qb(L),se.init(),Zt=new LR(L,se),Qt=new kb(L,se,n,Zt),Lt=new UR(L,se),Qt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ie=new tA(L),Ht=new vR,oe=new NR(L,se,Lt,Ht,Qt,Zt,ie),qe=new Yb(D),We=new Kb(D),U=new sT(L),zt=new Vb(L,U),T=new Jb(L,U,ie,zt),it=new nA(L,T,U,ie),Rt=new eA(L,Qt,oe),wt=new qb(Ht),pt=new _R(D,qe,We,se,Qt,zt,wt),Mt=new FR(D,Ht),ht=new SR,kt=new AR(se),Kt=new Gb(D,qe,We,Lt,it,M,_),jt=new wR(D,it,Qt),ce=new HR(L,ie,Qt,Lt),Ot=new Xb(L,se,ie),ne=new $b(L,se,ie),ie.programs=pt.programs,D.capabilities=Qt,D.extensions=se,D.properties=Ht,D.renderLists=ht,D.shadowMap=jt,D.state=Lt,D.info=ie}H();const Ct=new IR(D,L);this.xr=Ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(X,$,!1))},this.getSize=function(A){return A.set(X,$)},this.setSize=function(A,Z,ot=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,$=Z,a.width=Math.floor(A*W),a.height=Math.floor(Z*W),ot===!0&&(a.style.width=A+"px",a.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(X*W,$*W).floor()},this.setDrawingBufferSize=function(A,Z,ot){X=A,$=Z,W=ot,a.width=Math.floor(A*ot),a.height=Math.floor(Z*ot),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Ft)},this.setViewport=function(A,Z,ot,ut){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,Z,ot,ut),Lt.viewport(V.copy(Ft).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,Z,ot,ut){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,Z,ot,ut),Lt.scissor(at.copy(ae).multiplyScalar(W).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){Lt.setScissorTest(ve=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ot=!0){let ut=0;if(A){let K=!1;if(k!==null){const At=k.texture.format;K=At===Rp||At===Ap||At===bp}if(K){const At=k.texture.type,Pt=At===Qi||At===qr||At===al||At===rl||At===Ep||At===Tp,Bt=Kt.getClearColor(),Dt=Kt.getClearAlpha(),qt=Bt.r,ee=Bt.g,$t=Bt.b;Pt?(b[0]=qt,b[1]=ee,b[2]=$t,b[3]=Dt,L.clearBufferuiv(L.COLOR,0,b)):(R[0]=qt,R[1]=ee,R[2]=$t,R[3]=Dt,L.clearBufferiv(L.COLOR,0,R))}else ut|=L.COLOR_BUFFER_BIT}Z&&(ut|=L.DEPTH_BUFFER_BIT),ot&&(ut|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",Xt,!1),a.removeEventListener("webglcontextcreationerror",bt,!1),Kt.dispose(),ht.dispose(),kt.dispose(),Ht.dispose(),qe.dispose(),We.dispose(),it.dispose(),zt.dispose(),ce.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",pn),Ct.removeEventListener("sessionend",wn),$i.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ie.autoReset,Z=jt.enabled,ot=jt.autoUpdate,ut=jt.needsUpdate,K=jt.type;H(),ie.autoReset=A,jt.enabled=Z,jt.autoUpdate=ot,jt.needsUpdate=ut,jt.type=K}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){const Z=A.target;Z.removeEventListener("dispose",vt),Wt(Z)}function Wt(A){ue(A),Ht.remove(A)}function ue(A){const Z=Ht.get(A).programs;Z!==void 0&&(Z.forEach(function(ot){pt.releaseProgram(ot)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ot,ut,K,At){Z===null&&(Z=St);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=gl(A,Z,ot,ut,K);Lt.setMaterial(ut,Pt);let Dt=ot.index,qt=1;if(ut.wireframe===!0){if(Dt=T.getWireframeAttribute(ot),Dt===void 0)return;qt=2}const ee=ot.drawRange,$t=ot.attributes.position;let _e=ee.start*qt,Ie=(ee.start+ee.count)*qt;At!==null&&(_e=Math.max(_e,At.start*qt),Ie=Math.min(Ie,(At.start+At.count)*qt)),Dt!==null?(_e=Math.max(_e,0),Ie=Math.min(Ie,Dt.count)):$t!=null&&(_e=Math.max(_e,0),Ie=Math.min(Ie,$t.count));const Qe=Ie-_e;if(Qe<0||Qe===1/0)return;zt.setup(K,ut,Bt,ot,Dt);let Ue,Re=Ot;if(Dt!==null&&(Ue=U.get(Dt),Re=ne,Re.setIndex(Ue)),K.isMesh)ut.wireframe===!0?(Lt.setLineWidth(ut.wireframeLinewidth*Vt()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(K.isLine){let te=ut.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Vt()),K.isLineSegments?Re.setMode(L.LINES):K.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else K.isPoints?Re.setMode(L.POINTS):K.isSprite&&Re.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const te=K._multiDrawStarts,Ne=K._multiDrawCounts,me=K._multiDrawCount,mn=Dt?U.get(Dt).bytesPerElement:1,Kn=Ht.get(ut).currentProgram.getUniforms();for(let Ce=0;Ce<me;Ce++)Kn.setValue(L,"_gl_DrawID",Ce),Re.render(te[Ce]/mn,Ne[Ce])}else if(K.isInstancedMesh)Re.renderInstances(_e,Qe,K.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ne=Math.min(ot.instanceCount,te);Re.renderInstances(_e,Qe,Ne)}else Re.render(_e,Qe)};function Ve(A,Z,ot){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,li(A,Z,ot),A.side=sr,A.needsUpdate=!0,li(A,Z,ot),A.side=ya):li(A,Z,ot)}this.compile=function(A,Z,ot=null){ot===null&&(ot=A),x=kt.get(ot),x.init(Z),z.push(x),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),A!==ot&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ut=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const At=K.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Bt=At[Pt];Ve(Bt,ot,K),ut.add(Bt)}else Ve(At,ot,K),ut.add(At)}),x=z.pop(),ut},this.compileAsync=function(A,Z,ot=null){const ut=this.compile(A,Z,ot);return new Promise(K=>{function At(){if(ut.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&ut.delete(Pt)}),ut.size===0){K(A);return}setTimeout(At,10)}se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function $e(A){ye&&ye(A)}function pn(){$i.stop()}function wn(){$i.start()}const $i=new yx;$i.setAnimationLoop($e),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){ye=A,Ct.setAnimationLoop(A),A===null?$i.stop():$i.start()},Ct.addEventListener("sessionstart",pn),Ct.addEventListener("sessionend",wn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Z),Z=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Z,k),x=kt.get(A,z.length),x.init(Z),z.push(x),nt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(nt,Wi,Z.reversedDepth),Q=this.localClippingEnabled,ft=wt.init(this.clippingPlanes,Q),y=ht.get(A,P.length),y.init(),P.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&io(At,Z,-1/0,D.sortObjects)}io(A,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,yt),Tt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Tt&&Kt.addToRenderList(y,A),this.info.render.frame++,ft===!0&&wt.beginShadows();const ot=x.state.shadowsArray;jt.render(ot,A,Z),ft===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=y.opaque,K=y.transmissive;if(x.setupLights(),Z.isArrayCamera){const At=Z.cameras;if(K.length>0)for(let Pt=0,Bt=At.length;Pt<Bt;Pt++){const Dt=At[Pt];ur(ut,K,A,Dt)}Tt&&Kt.render(A);for(let Pt=0,Bt=At.length;Pt<Bt;Pt++){const Dt=At[Pt];ml(y,A,Dt,Dt.viewport)}}else K.length>0&&ur(ut,K,A,Z),Tt&&Kt.render(A),ml(y,A,Z);k!==null&&O===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,Z),zt.resetDefaultState(),w=-1,C=null,z.pop(),z.length>0?(x=z[z.length-1],ft===!0&&wt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function io(A,Z,ot,ut){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){ut&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const Pt=it.update(A),Bt=A.material;Bt.visible&&y.push(A,Pt,Bt,ot,tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const Pt=it.update(A),Bt=A.material;if(ut&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),tt.copy(Pt.boundingSphere.center)),tt.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(Bt)){const Dt=Pt.groups;for(let qt=0,ee=Dt.length;qt<ee;qt++){const $t=Dt[qt],_e=Bt[$t.materialIndex];_e&&_e.visible&&y.push(A,Pt,_e,ot,tt.z,$t)}}else Bt.visible&&y.push(A,Pt,Bt,ot,tt.z,null)}}const At=A.children;for(let Pt=0,Bt=At.length;Pt<Bt;Pt++)io(At[Pt],Z,ot,ut)}function ml(A,Z,ot,ut){const K=A.opaque,At=A.transmissive,Pt=A.transparent;x.setupLightsView(ot),ft===!0&&wt.setGlobalState(D.clippingPlanes,ot),ut&&Lt.viewport(V.copy(ut)),K.length>0&&ta(K,Z,ot),At.length>0&&ta(At,Z,ot),Pt.length>0&&ta(Pt,Z,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ur(A,Z,ot,ut){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new Yr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ul:Qi,minFilter:kr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=x.state.transmissionRenderTarget[ut.id],Pt=ut.viewport||V;At.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget(),Dt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(gt),st=D.getClearAlpha(),st<1&&D.setClearColor(16777215,.5),D.clear(),Tt&&Kt.render(ot);const ee=D.toneMapping;D.toneMapping=rr;const $t=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),ft===!0&&wt.setGlobalState(D.clippingPlanes,ut),ta(A,ot,ut),oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At),se.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ie=0,Qe=Z.length;Ie<Qe;Ie++){const Ue=Z[Ie],Re=Ue.object,te=Ue.geometry,Ne=Ue.material,me=Ue.group;if(Ne.side===ya&&Re.layers.test(ut.layers)){const mn=Ne.side;Ne.side=jn,Ne.needsUpdate=!0,cr(Re,ot,ut,te,Ne,me),Ne.side=mn,Ne.needsUpdate=!0,_e=!0}}_e===!0&&(oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At))}D.setRenderTarget(Bt,Dt,qt),D.setClearColor(gt,st),$t!==void 0&&(ut.viewport=$t),D.toneMapping=ee}function ta(A,Z,ot){const ut=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,At=A.length;K<At;K++){const Pt=A[K],Bt=Pt.object,Dt=Pt.geometry,qt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ut!==null&&(ee=ut),Bt.layers.test(ot.layers)&&cr(Bt,Z,ot,Dt,ee,qt)}}function cr(A,Z,ot,ut,K,At){A.onBeforeRender(D,Z,ot,ut,K,At),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(D,Z,ot,ut,A,At),K.transparent===!0&&K.side===ya&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,D.renderBufferDirect(ot,Z,ut,K,A,At),K.side=sr,K.needsUpdate=!0,D.renderBufferDirect(ot,Z,ut,K,A,At),K.side=ya):D.renderBufferDirect(ot,Z,ut,K,A,At),A.onAfterRender(D,Z,ot,ut,K,At)}function li(A,Z,ot){Z.isScene!==!0&&(Z=St);const ut=Ht.get(A),K=x.state.lights,At=x.state.shadowsArray,Pt=K.state.version,Bt=pt.getParameters(A,K.state,At,Z,ot),Dt=pt.getProgramCacheKey(Bt);let qt=ut.programs;ut.environment=A.isMeshStandardMaterial?Z.environment:null,ut.fog=Z.fog,ut.envMap=(A.isMeshStandardMaterial?We:qe).get(A.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",vt),qt=new Map,ut.programs=qt);let ee=qt.get(Dt);if(ee!==void 0){if(ut.currentProgram===ee&&ut.lightsStateVersion===Pt)return Ea(A,Bt),ee}else Bt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Bt,D),ee=pt.acquireProgram(Bt,Dt),qt.set(Dt,ee),ut.uniforms=Bt.uniforms;const $t=ut.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=wt.uniform),Ea(A,Bt),ut.needsLights=_l(A),ut.lightsStateVersion=Pt,ut.needsLights&&($t.ambientLightColor.value=K.state.ambient,$t.lightProbe.value=K.state.probe,$t.directionalLights.value=K.state.directional,$t.directionalLightShadows.value=K.state.directionalShadow,$t.spotLights.value=K.state.spot,$t.spotLightShadows.value=K.state.spotShadow,$t.rectAreaLights.value=K.state.rectArea,$t.ltc_1.value=K.state.rectAreaLTC1,$t.ltc_2.value=K.state.rectAreaLTC2,$t.pointLights.value=K.state.point,$t.pointLightShadows.value=K.state.pointShadow,$t.hemisphereLights.value=K.state.hemi,$t.directionalShadowMap.value=K.state.directionalShadowMap,$t.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$t.spotShadowMap.value=K.state.spotShadowMap,$t.spotLightMatrix.value=K.state.spotLightMatrix,$t.spotLightMap.value=K.state.spotLightMap,$t.pointShadowMap.value=K.state.pointShadowMap,$t.pointShadowMatrix.value=K.state.pointShadowMatrix),ut.currentProgram=ee,ut.uniformsList=null,ee}function fr(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=cc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ea(A,Z){const ot=Ht.get(A);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function gl(A,Z,ot,ut,K){Z.isScene!==!0&&(Z=St),oe.resetTextureUnits();const At=Z.fog,Pt=ut.isMeshStandardMaterial?Z.environment:null,Bt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$s,Dt=(ut.isMeshStandardMaterial?We:qe).get(ut.envMap||Pt),qt=ut.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),$t=!!ot.morphAttributes.position,_e=!!ot.morphAttributes.normal,Ie=!!ot.morphAttributes.color;let Qe=rr;ut.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ue=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,te=Ht.get(ut),Ne=x.state.lights;if(ft===!0&&(Q===!0||A!==C)){const en=A===C&&ut.id===w;wt.setState(ut,A,en)}let me=!1;ut.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ne.state.version||te.outputColorSpace!==Bt||K.isBatchedMesh&&te.batching===!1||!K.isBatchedMesh&&te.batching===!0||K.isBatchedMesh&&te.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&te.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&te.instancing===!1||!K.isInstancedMesh&&te.instancing===!0||K.isSkinnedMesh&&te.skinning===!1||!K.isSkinnedMesh&&te.skinning===!0||K.isInstancedMesh&&te.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&te.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&te.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&te.instancingMorph===!1&&K.morphTexture!==null||te.envMap!==Dt||ut.fog===!0&&te.fog!==At||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==wt.numPlanes||te.numIntersection!==wt.numIntersection)||te.vertexAlphas!==qt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==_e||te.morphColors!==Ie||te.toneMapping!==Qe||te.morphTargetsCount!==Re)&&(me=!0):(me=!0,te.__version=ut.version);let mn=te.currentProgram;me===!0&&(mn=li(ut,Z,K));let Kn=!1,Ce=!1,Ta=!1;const je=mn.getUniforms(),zn=te.uniforms;if(Lt.useProgram(mn.program)&&(Kn=!0,Ce=!0,Ta=!0),ut.id!==w&&(w=ut.id,Ce=!0),Kn||C!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(L,"projectionMatrix",A.projectionMatrix),je.setValue(L,"viewMatrix",A.matrixWorldInverse);const Dn=je.map.cameraPosition;Dn!==void 0&&Dn.setValue(L,Et.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&je.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ce=!0,Ta=!0)}if(K.isSkinnedMesh){je.setOptional(L,K,"bindMatrix"),je.setOptional(L,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),je.setValue(L,"boneTexture",en.boneTexture,oe))}K.isBatchedMesh&&(je.setOptional(L,K,"batchingTexture"),je.setValue(L,"batchingTexture",K._matricesTexture,oe),je.setOptional(L,K,"batchingIdTexture"),je.setValue(L,"batchingIdTexture",K._indirectTexture,oe),je.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&je.setValue(L,"batchingColorTexture",K._colorsTexture,oe));const ln=ot.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Rt.update(K,ot,mn),(Ce||te.receiveShadow!==K.receiveShadow)&&(te.receiveShadow=K.receiveShadow,je.setValue(L,"receiveShadow",K.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(zn.envMap.value=Dt,zn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),Ce&&(je.setValue(L,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&vc(zn,Ta),At&&ut.fog===!0&&Mt.refreshFogUniforms(zn,At),Mt.refreshMaterialUniforms(zn,ut,W,$,x.state.transmissionRenderTarget[A.id]),cc.upload(L,fr(te),zn,oe)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(cc.upload(L,fr(te),zn,oe),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&je.setValue(L,"center",K.center),je.setValue(L,"modelViewMatrix",K.modelViewMatrix),je.setValue(L,"normalMatrix",K.normalMatrix),je.setValue(L,"modelMatrix",K.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const en=ut.uniformsGroups;for(let Dn=0,Wr=en.length;Dn<Wr;Dn++){const Li=en[Dn];ce.update(Li,mn),ce.bind(Li,mn)}}return mn}function vc(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function _l(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,Z,ot){const ut=Ht.get(A);ut.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=Z,Ht.get(A.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ot,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const ot=Ht.get(A);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const ao=L.createFramebuffer();this.setRenderTarget=function(A,Z=0,ot=0){k=A,B=Z,O=ot;let ut=!0,K=null,At=!1,Pt=!1;if(A){const Dt=Ht.get(A);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(L.FRAMEBUFFER,null),ut=!1;else if(Dt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Dt.__hasExternalTextures)oe.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(Dt.__boundDepthTexture!==$t){if($t!==null&&Ht.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const ee=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?K=ee[Z][ot]:K=ee[Z],At=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?K=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[ot]:K=ee,V.copy(A.viewport),at.copy(A.scissor),ct=A.scissorTest}else V.copy(Ft).multiplyScalar(W).floor(),at.copy(ae).multiplyScalar(W).floor(),ct=ve;if(ot!==0&&(K=ao),Lt.bindFramebuffer(L.FRAMEBUFFER,K)&&ut&&Lt.drawBuffers(A,K),Lt.viewport(V),Lt.scissor(at),Lt.setScissorTest(ct),At){const Dt=Ht.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Dt.__webglTexture,ot)}else if(Pt){const Dt=Z;for(let qt=0;qt<A.textures.length;qt++){const ee=Ht.get(A.textures[qt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qt,ee.__webglTexture,ot,Dt)}}else if(A!==null&&ot!==0){const Dt=Ht.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(A,Z,ot,ut,K,At,Pt,Bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){Lt.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const qt=A.textures[Bt],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ut&&ot>=0&&ot<=A.height-K&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,ot,ut,K,Zt.convert(ee),Zt.convert($t),At))}finally{const qt=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ot,ut,K,At,Pt,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(Z>=0&&Z<=A.width-ut&&ot>=0&&ot<=A.height-K){Lt.bindFramebuffer(L.FRAMEBUFFER,Dt);const qt=A.textures[Bt],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_e),L.bufferData(L.PIXEL_PACK_BUFFER,At.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,ot,ut,K,Zt.convert(ee),Zt.convert($t),0);const Ie=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,Ie);const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await SE(L,Qe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,_e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,At),L.deleteBuffer(_e),L.deleteSync(Qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,ot=0){const ut=Math.pow(2,-ot),K=Math.floor(A.image.width*ut),At=Math.floor(A.image.height*ut),Pt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ot,0,0,Pt,Bt,K,At),Lt.unbindTexture()};const hr=L.createFramebuffer(),xc=L.createFramebuffer();this.copyTextureToTexture=function(A,Z,ot=null,ut=null,K=0,At=null){At===null&&(K!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=K,K=0):At=0);let Pt,Bt,Dt,qt,ee,$t,_e,Ie,Qe;const Ue=A.isCompressedTexture?A.mipmaps[At]:A.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,Dt=ot.isBox3?ot.max.z-ot.min.z:1,qt=ot.min.x,ee=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const ln=Math.pow(2,-K);Pt=Math.floor(Ue.width*ln),Bt=Math.floor(Ue.height*ln),A.isDataArrayTexture?Dt=Ue.depth:A.isData3DTexture?Dt=Math.floor(Ue.depth*ln):Dt=1,qt=0,ee=0,$t=0}ut!==null?(_e=ut.x,Ie=ut.y,Qe=ut.z):(_e=0,Ie=0,Qe=0);const Re=Zt.convert(Z.format),te=Zt.convert(Z.type);let Ne;Z.isData3DTexture?(oe.setTexture3D(Z,0),Ne=L.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Ne=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const me=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ce=L.getParameter(L.UNPACK_SKIP_ROWS),Ta=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);const je=A.isDataArrayTexture||A.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),en=Ht.get(Z),Dn=Ht.get(ln.__renderTarget),Wr=Ht.get(en.__renderTarget);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Li=0;Li<Dt;Li++)je&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,K,$t+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.get(Z).__webglTexture,At,Qe+Li)),L.blitFramebuffer(qt,ee,Pt,Bt,_e,Ie,Pt,Bt,L.DEPTH_BUFFER_BIT,L.NEAREST);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),en=Ht.get(Z);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,hr),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,xc);for(let Dn=0;Dn<Dt;Dn++)je?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,K,$t+Dn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,K),zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,At,Qe+Dn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,At),K!==0?L.blitFramebuffer(qt,ee,Pt,Bt,_e,Ie,Pt,Bt,L.COLOR_BUFFER_BIT,L.NEAREST):zn?L.copyTexSubImage3D(Ne,At,_e,Ie,Qe+Dn,qt,ee,Pt,Bt):L.copyTexSubImage2D(Ne,At,_e,Ie,qt,ee,Pt,Bt);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ne,At,_e,Ie,Qe,Pt,Bt,Dt,Re,te,Ue.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,At,_e,Ie,Qe,Pt,Bt,Dt,Re,Ue.data):L.texSubImage3D(Ne,At,_e,Ie,Qe,Pt,Bt,Dt,Re,te,Ue):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,At,_e,Ie,Pt,Bt,Re,te,Ue.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,At,_e,Ie,Ue.width,Ue.height,Re,Ue.data):L.texSubImage2D(L.TEXTURE_2D,At,_e,Ie,Pt,Bt,Re,te,Ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,me),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ta),At===0&&Z.generateMipmaps&&L.generateMipmap(Ne),Lt.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){B=0,O=0,k=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(n),a.unpackColorSpace=De._getUnpackColorSpace()}}const nl=()=>({low:0,mid:0,high:0,rms:0,dominant:0});function VR(o,n,a,s){let u=0;for(const v of n)u+=v*v;const f=Math.sqrt(u/Math.max(1,n.length));if(f<1e-4)return nl();const h=[0,0,0];let d=-1/0,_=0;for(let v=1;v<o.length;v++){const p=v*a/s;if(p<20||p>2e4)continue;const S=o[v];Number.isFinite(S)&&(h[p<250?0:p<2e3?1:2]+=10**(S/10),S>d&&(d=S,_=v))}const g=h.map(v=>Math.min(1,Math.sqrt(v)*4.8));return{low:g[0],mid:g[1],high:g[2],rms:f,dominant:_*a/s}}function XR(o,n){const a=Math.tanh((o.low-o.high)*n),s=Math.exp(a*.15),u=Math.exp(-a*.025);return{x:s,y:u,z:1/(s*u),flow:Math.tanh((o.low*.4+o.mid*.8+o.high*.35)*n),detail:Math.tanh(o.high*n)}}function Ax(o,n){let a=0;for(let s=0;s<n.length;s+=3){const u=n[s]*3,f=n[s+1]*3,h=n[s+2]*3;a+=o[u]*(o[f+1]*o[h+2]-o[f+2]*o[h+1])+o[u+1]*(o[f+2]*o[h]-o[f]*o[h+2])+o[u+2]*(o[f]*o[h+1]-o[f+1]*o[h])}return Math.abs(a/6)}function kR(o,n,a,s,u,f,h){const d=XR(u,f),_=.008+d.flow*.105;for(let p=0;p<o.length;p+=3){const S=o[p],M=o[p+1],b=o[p+2],R=Math.sin(S*3.1+M*1.8+h*.82)*Math.cos(b*2.9-M*1.2-h*.58),y=Math.sin(S*5.4-b*3.2-h*.7)*Math.cos(M*4.1+b*2.3+h*.42),x=Math.sin(S*8.2+M*5.5+b*3.8+h*1.1)*Math.cos(b*6.1-M*3.7-h*.73),P=_*(R*.72+y*.28)+d.detail*.009*x;n[p]=S*(1+P)*d.x,n[p+1]=M*(1+P*.48)*d.y,n[p+2]=b*(1+P)*d.z}const g=Ax(n,a),v=Math.cbrt(s/Math.max(g,1e-12));for(let p=0;p<n.length;p++)n[p]*=v}const il={color:"#ffffff",material:"metal",background:"light",sensitivity:1.2,movement:.45,smoothing:.65};function qR(o){const s=new Float32Array(2097152);for(let d=0;d<512;d++)for(let _=0;_<1024;_++){const g=_/1024,p=d/512+.055*Math.sin(g*Math.PI*2)+.025*Math.sin(g*Math.PI*4+.7),S=(y,x)=>Math.exp(-(((p-y)/x)**2));let M=(.3+1.4*S(.76,.24)+.85*S(.25,.085))*(1-.998*S(.49,.09));const b=Math.exp(-(((g-.22)/.025)**2))+Math.exp(-(((g-.74)/.05)**2));M+=b*1.7*S(.6,.3);const R=(d*1024+_)*4;s[R]=s[R+1]=s[R+2]=Math.max(.008,M),s[R+3]=1}const u=new WE(s,1024,512,yi,Yi);o.extensions.has("OES_texture_float_linear")&&(u.minFilter=Si,u.magFilter=Si),u.mapping=fc,u.needsUpdate=!0;const f=new vp(o),h=f.fromEquirectangular(u);return u.dispose(),f.dispose(),h}function YR({engine:o,settings:n}){const a=Te.useRef(null),s=Te.useRef(n),[u,f]=Te.useState("");return s.current=n,Te.useEffect(()=>{const h=a.current;let d;try{d=new GR({antialias:!0,alpha:!0})}catch{f("No se ha podido iniciar la esfera 3D. Activa la aceleración gráfica de tu navegador y recarga la página.");return}d.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),d.setClearColor(0,0),d.toneMapping=Q0,d.toneMappingExposure=1.05,d.domElement.setAttribute("aria-label","Esfera 3D reactiva al audio"),d.domElement.setAttribute("role","img"),h.appendChild(d.domElement);const _=new YE,g=qR(d);_.environment=g.texture;const v=new Np(-2,2,2,-2,.1,30);v.position.set(0,0,6);const p=new Up(1,128,96),S=p.attributes.position,M=new Float32Array(S.array),b=p.index.array,R=Ax(M,b),y=new QE({color:"#ffffff",metalness:1,roughness:.055,envMapIntensity:1}),x=new ji(p,y);_.add(x);const P=new iT(16777215,2);P.position.set(-3,4,4),_.add(P);const z=()=>{const{width:st,height:X}=h.getBoundingClientRect();d.setSize(st,X);const $=st/Math.max(X,1),W=1.55;v.left=-W*Math.max($,1),v.right=-v.left,v.top=W*Math.max(1/$,1),v.bottom=-v.top,v.updateProjectionMatrix()},D=new ResizeObserver(z);D.observe(h),z();const G=window.matchMedia("(prefers-reduced-motion: reduce)");let B=performance.now(),O=0,k=0,w=0,C=performance.now(),V=!document.hidden;const at=()=>{V=!document.hidden,C=performance.now()};document.addEventListener("visibilitychange",at);const ct=st=>{st.preventDefault(),f("Se ha interrumpido la aceleración gráfica. Recarga la página para recuperar la esfera.")};d.domElement.addEventListener("webglcontextlost",ct);const gt=st=>{k=requestAnimationFrame(gt);const X=Math.min((st-C)/1e3,.05);if(C=st,!V)return;const $=s.current,W=o.sample(X,$.smoothing);if(w+=X*$.movement*1.6*(G.matches?.15:1),kR(M,S.array,b,R,W,$.sensitivity,w),S.needsUpdate=!0,p.computeVertexNormals(),x.rotation.y=w*.06,y.color.set($.color),y.wireframe=$.material==="wire",y.metalness=$.material==="metal"?1:$.material==="pearl"?.18:0,y.roughness=$.material==="metal"?.055:.38,y.envMapIntensity=$.material==="metal"?1:1.3,d.render(_,v),O++,st-B>1800){const xt=O*1e3/(st-B),yt=d.getPixelRatio();xt<32&&yt>.65&&(d.setPixelRatio(Math.max(.65,yt*.8)),z()),B=st,O=0}};return k=requestAnimationFrame(gt),()=>{cancelAnimationFrame(k),D.disconnect(),document.removeEventListener("visibilitychange",at),d.domElement.removeEventListener("webglcontextlost",ct),p.dispose(),y.dispose(),g.dispose(),d.dispose(),d.domElement.remove()}},[o]),_t.jsx("div",{className:"orb-render",ref:a,children:u&&_t.jsx("div",{className:"graphics-error",role:"alert",children:u})})}class WR{element=new Audio;context;analyser;gain;frequency=new Float32Array(2048);signal=new Float32Array(4096);objectUrl;volume=.65;revision=0;levels=nl();constructor(){this.element.preload="metadata"}async initialize(){this.context||(this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=4096,this.analyser.smoothingTimeConstant=0,this.gain=this.context.createGain(),this.gain.gain.value=this.volume,this.context.createMediaElementSource(this.element).connect(this.analyser),this.analyser.connect(this.gain).connect(this.context.destination)),this.context.state!=="running"&&await this.context.resume()}load(n){this.revision++,this.element.pause(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.objectUrl=typeof n=="string"?void 0:URL.createObjectURL(n),this.element.src=typeof n=="string"?n:this.objectUrl,this.levels=nl(),this.element.load()}async play(){const n=this.revision;if(await this.initialize(),n===this.revision)try{await this.element.play()}catch(a){if(n===this.revision&&!(a instanceof DOMException&&a.name==="AbortError"))throw a}}pause(){this.element.pause()}setVolume(n){this.volume=n,this.gain&&this.context&&this.gain.gain.setTargetAtTime(n,this.context.currentTime,.025)}sample(n,a){let s=nl();this.analyser&&this.context&&!this.element.paused&&!this.element.ended&&(this.analyser.getFloatFrequencyData(this.frequency),this.analyser.getFloatTimeDomainData(this.signal),s=VR(this.frequency,this.signal,this.context.sampleRate,this.analyser.fftSize));for(const u of["low","mid","high","rms"]){const f=s[u]>this.levels[u]?.025+a*.12:.06+a*.35;this.levels[u]+=(s[u]-this.levels[u])*(1-Math.exp(-n/f))}return this.levels.dominant=s.dominant,this.levels}dispose(){this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.context?.close()}}const jR=[{color:"#ffffff",name:"Cromo"},{color:"#dba58e",name:"Cobre"},{color:"#8ba9d8",name:"Azul"},{color:"#b6a0db",name:"Violeta"},{color:"#99c4ad",name:"Jade"}],ZR=[{name:"Cromo",settings:il},{name:"Nácar",settings:{...il,material:"pearl",color:"#ffffff"}},{name:"Trama",settings:{...il,material:"wire",color:"#526477"}}],W0=o=>`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`;function Dd({label:o,value:n,min:a=0,max:s=1,step:u=.01,text:f,onChange:h}){return _t.jsxs("label",{className:"slider-field",children:[_t.jsxs("span",{children:[o,_t.jsx("output",{children:f})]}),_t.jsx("input",{"aria-label":o,type:"range",min:a,max:s,step:u,value:n,onChange:d=>h(Number(d.target.value))})]})}function KR(){const[o]=Te.useState(()=>new WR),[n,a]=Te.useState({...il}),[s,u]=Te.useState("Cromo"),[f,h]=Te.useState(""),[d,_]=Te.useState(!1),[g,v]=Te.useState(!1),[p,S]=Te.useState(0),[M,b]=Te.useState(0),[R,y]=Te.useState(.65),[x,P]=Te.useState(!1),[z,D]=Te.useState(nl()),[G,B]=Te.useState(""),[O,k]=Te.useState(!1),[w,C]=Te.useState(!1),[V,at]=Te.useState(!1),[ct,gt]=Te.useState(!1),st=Te.useRef(null),X=Te.useRef(null),$=Te.useRef(null),W=Te.useRef(null),xt=Te.useRef(null),yt=Te.useRef(.65);Te.useEffect(()=>{const tt=o.element,St=()=>{v(!1),S(Number.isFinite(tt.duration)?tt.duration:0)},Tt=()=>{v(!1),_(!1),S(0),k(!0),B("No se ha podido reproducir este archivo. Prueba con un MP3 o WAV válido.")},Vt=()=>_(!0),L=()=>_(!1);tt.addEventListener("loadedmetadata",St),tt.addEventListener("error",Tt),tt.addEventListener("playing",Vt),tt.addEventListener("pause",L),tt.addEventListener("ended",L);const Pe=setInterval(()=>{b(tt.currentTime||0),D({...o.levels})},100);return()=>{clearInterval(Pe),tt.removeEventListener("loadedmetadata",St),tt.removeEventListener("error",Tt),tt.removeEventListener("playing",Vt),tt.removeEventListener("pause",L),tt.removeEventListener("ended",L),o.dispose()}},[o]),Te.useEffect(()=>{const tt=()=>C(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",tt),()=>document.removeEventListener("fullscreenchange",tt)},[]),Te.useEffect(()=>{ct&&xt.current?.focus()},[ct]);const Ft=()=>{gt(!1),W.current?.focus()},ae=async()=>{if(!(!f||g||O)){if(!o.element.paused){o.pause();return}try{await o.play()}catch{B("El navegador no ha iniciado el audio. Vuelve a intentarlo o carga otro archivo.")}}},ve=async()=>{try{document.fullscreenElement?await document.exitFullscreen():X.current?.requestFullscreen?await X.current.requestFullscreen():B("Este navegador no admite pantalla completa. El lienzo ya ocupa toda la ventana.")}catch{B("No se ha podido activar la pantalla completa. Puedes seguir usando el lienzo en esta ventana.")}};Te.useEffect(()=>{const tt=St=>{if(!$.current?.open){if(St.key==="Escape"&&ct){Ft();return}St.ctrlKey||St.metaKey||St.altKey||St.target.closest("button,input,select,a,textarea")||(St.code==="Space"&&(St.preventDefault(),ae()),St.key.toLowerCase()==="f"&&(St.preventDefault(),ve()))}};return window.addEventListener("keydown",tt),()=>window.removeEventListener("keydown",tt)});function I(tt,St){B(""),k(!1),v(!0),_(!1),b(0),S(0),h(St),o.load(tt)}function ft(tt){if(tt){if(!tt.type.startsWith("audio/")&&!/\.(mp3|wav|ogg|m4a|aac|flac|aif|aiff|opus|webm)$/i.test(tt.name)){B("Selecciona un archivo de audio: MP3, WAV, FLAC, OGG o M4A.");return}I(tt,tt.name)}}const Q=()=>I("./demo.wav","Órbita nocturna · demo"),nt=tt=>{a(St=>({...St,...tt})),u("Personalizado")},Et=tt=>{y(tt),o.setVolume(tt)};return _t.jsxs("div",{ref:X,className:`app theme-${n.background}`,onDragOver:tt=>{tt.preventDefault(),tt.dataTransfer.types.includes("Files")&&at(!0)},onDragLeave:tt=>{tt.currentTarget.contains(tt.relatedTarget)||at(!1)},onDrop:tt=>{tt.preventDefault(),at(!1),ft(tt.dataTransfer.files[0])},children:[_t.jsx("main",{className:"canvas-stage","aria-label":"Visualizador",children:_t.jsx(YR,{engine:o,settings:n})}),_t.jsxs("header",{className:"identity",children:[_t.jsxs("h1",{children:["ORBIS",_t.jsx("span",{children:"2"})]}),_t.jsx("p",{children:"El sonido toma forma."}),_t.jsxs("div",{className:"file-actions",children:[_t.jsxs("button",{onClick:()=>st.current?.click(),children:[_t.jsx(Kv,{size:14}),"Subir archivo"]}),_t.jsx("span",{children:"/"}),_t.jsx("button",{onClick:Q,children:"Probar demo"})]})]}),_t.jsxs("a",{className:"back-link",href:"https://www.pedrogomez.dev/",children:[_t.jsx(yM,{size:14}),_t.jsx("span",{children:"Portfolio"})]}),_t.jsxs("div",{className:"session-status",children:[_t.jsx("i",{className:d?"active":""}),g?"Preparando audio":d?"Reproduciendo":f?"En pausa":"Escucha. Observa."]}),ct&&_t.jsxs("section",{id:"settings",className:"settings-sheet","aria-label":"Ajustes",children:[_t.jsxs("div",{className:"sheet-heading",children:[_t.jsx("h2",{children:"Ajustes"}),_t.jsx("span",{children:"Hazlo tuyo."}),_t.jsx("button",{ref:xt,className:"icon-button",onClick:Ft,"aria-label":"Cerrar ajustes",children:_t.jsx(Qh,{size:18})})]}),_t.jsxs("div",{className:"settings-columns",children:[_t.jsxs("div",{className:"settings-group",children:[_t.jsx("h3",{children:"Apariencia"}),_t.jsx("div",{className:"presets",children:ZR.map(tt=>_t.jsx("button",{"aria-label":`Estilo ${tt.name}`,"aria-pressed":s===tt.name,onClick:()=>{a({...tt.settings,background:n.background}),u(tt.name)},children:tt.name},tt.name))}),_t.jsxs("label",{className:"select-field",children:["Material",_t.jsxs("select",{"aria-label":"Material",value:n.material,onChange:tt=>nt({material:tt.target.value}),children:[_t.jsx("option",{value:"metal",children:"Cromado"}),_t.jsx("option",{value:"pearl",children:"Nácar"}),_t.jsx("option",{value:"wire",children:"Malla"})]})]}),_t.jsxs("div",{className:"color-field",children:[_t.jsx("span",{children:"Color"}),_t.jsxs("div",{className:"colors",children:[jR.map(tt=>_t.jsx("button",{title:tt.name,"aria-label":`Color ${tt.name}`,"aria-pressed":n.color===tt.color,style:{background:tt.color},onClick:()=>nt({color:tt.color}),children:n.color===tt.color&&_t.jsx(MM,{size:12})},tt.name)),_t.jsx("input",{type:"color","aria-label":"Color personalizado",value:n.color,onChange:tt=>nt({color:tt.target.value})})]})]}),_t.jsxs("label",{className:"select-field",children:["Fondo",_t.jsxs("select",{"aria-label":"Fondo",value:n.background,onChange:tt=>nt({background:tt.target.value}),children:[_t.jsx("option",{value:"light",children:"Blanco"}),_t.jsx("option",{value:"dark",children:"Oscuro"})]})]})]}),_t.jsxs("div",{className:"settings-group",children:[_t.jsx("h3",{children:"Movimiento"}),_t.jsx(Dd,{label:"Sensibilidad",min:.2,max:3,step:.1,value:n.sensitivity,text:`${n.sensitivity.toFixed(1)}×`,onChange:tt=>nt({sensitivity:tt})}),_t.jsx(Dd,{label:"Fluidez",value:n.movement,text:`${Math.round(n.movement*100)}%`,onChange:tt=>nt({movement:tt})}),_t.jsx(Dd,{label:"Suavizado",value:n.smoothing,text:`${Math.round(n.smoothing*100)}%`,onChange:tt=>nt({smoothing:tt})})]}),_t.jsxs("div",{className:"settings-group",children:[_t.jsx("h3",{children:"Sonido"}),_t.jsx("div",{className:"bands",children:[{key:"low",name:"Graves"},{key:"mid",name:"Medios"},{key:"high",name:"Agudos"}].map(tt=>_t.jsxs("div",{className:"band",children:[_t.jsx("span",{children:tt.name}),_t.jsx("div",{className:"meter",role:"meter","aria-label":tt.name,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(z[tt.key]*100),children:_t.jsx("i",{style:{width:`${z[tt.key]*100}%`}})})]},tt.key))}),_t.jsxs("p",{className:"quiet-note",children:["Tu audio se queda en tu dispositivo.",_t.jsx("br",{}),"La forma cambia. El volumen se conserva."]}),_t.jsxs("button",{className:"reset-button",onClick:()=>{a({...il}),u("Cromo")},children:[_t.jsx(Zv,{size:13}),"Restablecer ajustes"]})]})]})]}),_t.jsxs("footer",{className:"player",children:[_t.jsxs("div",{className:"track-info",children:[_t.jsx("strong",{title:f,children:f||"Sin archivo"}),_t.jsx("span",{children:g?"Preparando…":f?"Audio local":"Sube una canción o prueba la demo"})]}),_t.jsxs("div",{className:"transport",children:[_t.jsx("button",{className:"play-button",disabled:!f||g||O,onClick:()=>{ae()},"aria-label":d?"Pausar":"Reproducir",children:d?_t.jsx(AM,{size:17,fill:"currentColor"}):_t.jsx(RM,{size:17,fill:"currentColor"})}),_t.jsx("button",{className:"icon-button restart",disabled:!p,onClick:()=>{o.element.currentTime=0,b(0)},"aria-label":"Volver al inicio",children:_t.jsx(Zv,{size:16})}),_t.jsx("span",{className:"time",children:W0(M)}),_t.jsx("input",{className:"seek","aria-label":"Posición de reproducción",type:"range",min:"0",max:p||1,step:".1",value:Math.min(M,p||1),disabled:!p,onChange:tt=>{o.element.currentTime=Number(tt.target.value),b(Number(tt.target.value))}}),_t.jsx("span",{className:"time",children:W0(p)})]}),_t.jsxs("div",{className:"player-tools",children:[_t.jsx("button",{className:"icon-button loop","aria-label":"Repetir pista","aria-pressed":x,onClick:()=>{o.element.loop=!x,P(!x)},children:_t.jsx(CM,{size:17})}),_t.jsxs("div",{className:"volume",children:[_t.jsx("button",{className:"icon-button","aria-label":R?"Silenciar":"Activar sonido",onClick:()=>{R?(yt.current=R,Et(0)):Et(yt.current||.65)},children:R?_t.jsx(DM,{size:17}):_t.jsx(UM,{size:17})}),_t.jsx("input",{"aria-label":"Volumen",type:"range",min:"0",max:"1",step:".01",value:R,onChange:tt=>Et(Number(tt.target.value))})]}),_t.jsx("span",{className:"tool-divider"}),_t.jsxs("button",{ref:W,className:"settings-button","aria-expanded":ct,"aria-controls":"settings",onClick:()=>{ct?Ft():gt(!0)},children:[_t.jsx(wM,{size:16}),_t.jsx("span",{children:"Ajustes"})]}),_t.jsx("button",{className:"icon-button help-button",onClick:()=>$.current?.showModal(),"aria-label":"Cómo se mueve",children:_t.jsx(EM,{size:16})}),_t.jsx("button",{className:"icon-button fullscreen",onClick:()=>{ve()},"aria-label":w?"Salir de pantalla completa":"Pantalla completa",children:w?_t.jsx(bM,{size:17}):_t.jsx(TM,{size:17})})]})]}),_t.jsx("input",{ref:st,type:"file",accept:"audio/*,.mp3,.wav,.flac,.ogg,.m4a",hidden:!0,onChange:tt=>{ft(tt.target.files?.[0]),tt.target.value=""}}),G&&_t.jsxs("div",{className:"error-toast",role:"alert",children:[_t.jsx("span",{children:G}),_t.jsx("button",{className:"icon-button","aria-label":"Cerrar aviso",onClick:()=>B(""),children:_t.jsx(Qh,{size:17})})]}),V&&_t.jsxs("div",{className:"drop-overlay",children:[_t.jsx(Kv,{size:32}),_t.jsx("p",{children:"Suelta el audio."})]}),_t.jsx("dialog",{ref:$,className:"help-modal","aria-labelledby":"help-title",onClick:tt=>{tt.target===$.current&&$.current.close()},children:_t.jsxs("div",{className:"help-content",children:[_t.jsx("button",{className:"icon-button",onClick:()=>$.current?.close(),"aria-label":"Cerrar explicación",children:_t.jsx(Qh,{size:18})}),_t.jsx("h2",{id:"help-title",children:"Sonido en movimiento."}),_t.jsx("p",{children:"Los graves expanden la esfera hacia los lados; los agudos la recogen. Los medios dibujan ondas que fluyen por su superficie. La altura cambia suavemente y el volumen de la figura se mantiene constante."}),_t.jsx("p",{children:"En Ajustes puedes cambiar el material, el color, el fondo y la respuesta al sonido. Silenciar la escucha no detiene la visualización."}),_t.jsx("p",{children:"Espacio: reproducir o pausar · F: pantalla completa · Esc: cerrar."}),_t.jsxs("small",{children:["La compatibilidad de los formatos depende del navegador. La demo es una composición sintetizada. Los medidores son orientativos.",_t.jsx("br",{}),_t.jsx("br",{}),"Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García Arenas."]})]})})]})}_M.createRoot(document.getElementById("root")).render(_t.jsx(KR,{}));
