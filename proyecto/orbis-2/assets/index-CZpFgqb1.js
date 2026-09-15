(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var td={exports:{}},nl={};var $0;function RM(){if($0)return nl;$0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return nl.Fragment=e,nl.jsx=a,nl.jsxs=a,nl}var tv;function CM(){return tv||(tv=1,td.exports=RM()),td.exports}var tt=CM(),ed={exports:{}},il={},nd={exports:{}},id={};var ev;function wM(){return ev||(ev=1,(function(o){function e(X,nt){var j=X.length;X.push(nt);t:for(;0<j;){var vt=j-1>>>1,St=X[vt];if(0<u(St,nt))X[vt]=nt,X[j]=St,j=vt;else break t}}function a(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var nt=X[0],j=X.pop();if(j!==nt){X[0]=j;t:for(var vt=0,St=X.length,Bt=St>>>1;vt<Bt;){var ne=2*(vt+1)-1,me=X[ne],L=ne+1,ht=X[L];if(0>u(me,j))L<St&&0>u(ht,me)?(X[vt]=ht,X[L]=j,vt=L):(X[vt]=me,X[ne]=j,vt=ne);else if(L<St&&0>u(ht,j))X[vt]=ht,X[L]=j,vt=L;else break t}}return nt}function u(X,nt){var j=X.sortIndex-nt.sortIndex;return j!==0?j:X.id-nt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var _=[],m=[],v=1,p=null,S=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(X){for(var nt=a(m);nt!==null;){if(nt.callback===null)s(m);else if(nt.startTime<=X)s(m),nt.sortIndex=nt.expirationTime,e(_,nt);else break;nt=a(m)}}function G(X){if(R=!1,D(X),!b)if(a(_)!==null)b=!0,B||(B=!0,st());else{var nt=a(m);nt!==null&&ut(G,nt.startTime-X)}}var B=!1,P=-1,k=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<k)}function V(){if(y=!1,B){var X=o.unstable_now();w=X;var nt=!0;try{t:{b=!1,R&&(R=!1,I(P),P=-1),M=!0;var j=S;try{e:{for(D(X),p=a(_);p!==null&&!(p.expirationTime>X&&C());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,S=p.priorityLevel;var St=vt(p.expirationTime<=X);if(X=o.unstable_now(),typeof St=="function"){p.callback=St,D(X),nt=!0;break e}p===a(_)&&s(_),D(X)}else s(_);p=a(_)}if(p!==null)nt=!0;else{var Bt=a(m);Bt!==null&&ut(G,Bt.startTime-X),nt=!1}}break t}finally{p=null,S=j,M=!1}nt=void 0}}finally{nt?st():B=!1}}}var st;if(typeof O=="function")st=function(){O(V)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,_t=ft.port2;ft.port1.onmessage=V,st=function(){_t.postMessage(null)}}else st=function(){x(V,0)};function ut(X,nt){P=x(function(){X(o.unstable_now())},nt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var nt=3;break;default:nt=S}var j=S;S=nt;try{return X()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,nt){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var j=S;S=X;try{return nt()}finally{S=j}},o.unstable_scheduleCallback=function(X,nt,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,X){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=j+St,X={id:v++,callback:nt,priorityLevel:X,startTime:j,expirationTime:St,sortIndex:-1},j>vt?(X.sortIndex=j,e(m,X),a(_)===null&&X===a(m)&&(R?(I(P),P=-1):R=!0,ut(G,j-vt))):(X.sortIndex=St,e(_,X),b||M||(b=!0,B||(B=!0,st()))),X},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(X){var nt=S;return function(){var j=S;S=nt;try{return X.apply(this,arguments)}finally{S=j}}}})(id)),id}var nv;function DM(){return nv||(nv=1,nd.exports=wM()),nd.exports}var ad={exports:{}},le={};var iv;function UM(){if(iv)return le;iv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=M&&L[M]||L["@@iterator"],typeof L=="function"?L:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function I(L,ht,Q){this.props=L,this.context=ht,this.refs=x,this.updater=Q||R}I.prototype.isReactComponent={},I.prototype.setState=function(L,ht){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ht,"setState")},I.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=I.prototype;function D(L,ht,Q){this.props=L,this.context=ht,this.refs=x,this.updater=Q||R}var G=D.prototype=new O;G.constructor=D,y(G,I.prototype),G.isPureReactComponent=!0;var B=Array.isArray;function P(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(L,ht,Q){var it=Q.ref;return{$$typeof:o,type:L,key:ht,ref:it!==void 0?it:null,props:Q}}function V(L,ht){return C(L.type,ht,L.props)}function st(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ft(L){var ht={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Q){return ht[Q]})}var _t=/\/+/g;function ut(L,ht){return typeof L=="object"&&L!==null&&L.key!=null?ft(""+L.key):ht.toString(36)}function X(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(ht){L.status==="pending"&&(L.status="fulfilled",L.value=ht)},function(ht){L.status==="pending"&&(L.status="rejected",L.reason=ht)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function nt(L,ht,Q,it,q){var Mt=typeof L;(Mt==="undefined"||Mt==="boolean")&&(L=null);var bt=!1;if(L===null)bt=!0;else switch(Mt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(L.$$typeof){case o:case e:bt=!0;break;case v:return bt=L._init,nt(bt(L._payload),ht,Q,it,q)}}if(bt)return q=q(L),bt=it===""?"."+ut(L,0):it,B(q)?(Q="",bt!=null&&(Q=bt.replace(_t,"$&/")+"/"),nt(q,ht,Q,"",function(z){return z})):q!=null&&(st(q)&&(q=V(q,Q+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(_t,"$&/")+"/")+bt)),ht.push(q)),1;bt=0;var Et=it===""?".":it+":";if(B(L))for(var Gt=0;Gt<L.length;Gt++)it=L[Gt],Mt=Et+ut(it,Gt),bt+=nt(it,ht,Q,Mt,q);else if(Gt=b(L),typeof Gt=="function")for(L=Gt.call(L),Gt=0;!(it=L.next()).done;)it=it.value,Mt=Et+ut(it,Gt++),bt+=nt(it,ht,Q,Mt,q);else if(Mt==="object"){if(typeof L.then=="function")return nt(X(L),ht,Q,it,q);throw ht=String(L),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return bt}function j(L,ht,Q){if(L==null)return L;var it=[],q=0;return nt(L,it,"","",function(Mt){return ht.call(Q,Mt,q++)}),it}function vt(L){if(L._status===-1){var ht=L._result,Q=ht();Q.then(function(it){(L._status===0||L._status===-1)&&(L._status=1,L._result=it,Q.status===void 0&&(Q.status="fulfilled",Q.value=it))},function(it){(L._status===0||L._status===-1)&&(L._status=2,L._result=it,Q.status===void 0&&(Q.status="rejected",Q.reason=it))}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Bt(L){var ht=k.T,Q={};Q.types=ht!==null?ht.types:null,k.T=Q;try{var it=L(),q=k.S;q!==null&&q(Q,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(P,St)}catch(Mt){St(Mt)}finally{ht!==null&&Q.types!==null&&(ht.types=Q.types),k.T=ht}}function ne(L){var ht=k.T;if(ht!==null){var Q=ht.types;Q===null?ht.types=[L]:Q.indexOf(L)===-1&&Q.push(L)}else Bt(ne.bind(null,L))}var me={map:j,forEach:function(L,ht,Q){j(L,function(){ht.apply(this,arguments)},Q)},count:function(L){var ht=0;return j(L,function(){ht++}),ht},toArray:function(L){return j(L,function(ht){return ht})||[]},only:function(L){if(!st(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=p,le.Children=me,le.Component=I,le.Fragment=a,le.Profiler=u,le.PureComponent=D,le.StrictMode=s,le.Suspense=_,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return k.H.useMemoCache(L)}},le.addTransitionType=ne,le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,ht,Q){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var it=y({},L.props),q=L.key;if(ht!=null)for(Mt in ht.key!==void 0&&(q=""+ht.key),ht)!w.call(ht,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&ht.ref===void 0||(it[Mt]=ht[Mt]);var Mt=arguments.length-2;if(Mt===1)it.children=Q;else if(1<Mt){for(var bt=Array(Mt),Et=0;Et<Mt;Et++)bt[Et]=arguments[Et+2];it.children=bt}return C(L.type,q,it)},le.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:f,_context:L},L},le.createElement=function(L,ht,Q){var it,q={},Mt=null;if(ht!=null)for(it in ht.key!==void 0&&(Mt=""+ht.key),ht)w.call(ht,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(q[it]=ht[it]);var bt=arguments.length-2;if(bt===1)q.children=Q;else if(1<bt){for(var Et=Array(bt),Gt=0;Gt<bt;Gt++)Et[Gt]=arguments[Gt+2];q.children=Et}if(L&&L.defaultProps)for(it in bt=L.defaultProps,bt)q[it]===void 0&&(q[it]=bt[it]);return C(L,Mt,q)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:h,render:L}},le.isValidElement=st,le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:vt}},le.memo=function(L,ht){return{$$typeof:m,type:L,compare:ht===void 0?null:ht}},le.startTransition=Bt,le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(L){return k.H.use(L)},le.useActionState=function(L,ht,Q){return k.H.useActionState(L,ht,Q)},le.useCallback=function(L,ht){return k.H.useCallback(L,ht)},le.useContext=function(L){return k.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,ht){return k.H.useDeferredValue(L,ht)},le.useEffect=function(L,ht){return k.H.useEffect(L,ht)},le.useEffectEvent=function(L){return k.H.useEffectEvent(L)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(L,ht,Q){return k.H.useImperativeHandle(L,ht,Q)},le.useInsertionEffect=function(L,ht){return k.H.useInsertionEffect(L,ht)},le.useLayoutEffect=function(L,ht){return k.H.useLayoutEffect(L,ht)},le.useMemo=function(L,ht){return k.H.useMemo(L,ht)},le.useOptimistic=function(L,ht){return k.H.useOptimistic(L,ht)},le.useReducer=function(L,ht,Q){return k.H.useReducer(L,ht,Q)},le.useRef=function(L){return k.H.useRef(L)},le.useState=function(L){return k.H.useState(L)},le.useSyncExternalStore=function(L,ht,Q){return k.H.useSyncExternalStore(L,ht,Q)},le.useTransition=function(){return k.H.useTransition()},le.version="19.3.0",le}var av;function Np(){return av||(av=1,ad.exports=UM()),ad.exports}var rd={exports:{}},wn={};var rv;function NM(){if(rv)return wn;rv=1;var o=Np();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,p,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===d?d:""+M,children:v,containerInfo:p,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.browser=function(v){return{$$typeof:f,_reason:v}},wn.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(v,p,null,S)},wn.flushSync=function(v){var p=_.T,S=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=S,s.d.f()}},wn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},wn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},wn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,M=m(S,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,R=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:R}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:R,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},wn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,M=m(S,p.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=m(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},wn.requestFormReset=function(v){s.d.r(v)},wn.unstable_batchedUpdates=function(v,p){return v(p)},wn.useFormState=function(v,p,S){return _.H.useFormState(v,p,S)},wn.useFormStatus=function(){return _.H.useHostTransitionStatus()},wn.version="19.3.0",wn}var sv;function LM(){if(sv)return rd.exports;sv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=NM(),rd.exports}var ov;function OM(){if(ov)return il;ov=1;var o=DM(),e=Np(),a=LM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var g=!1,E=l.child;E;){if(E===i){g=!0,i=l,r=c;break}if(E===r){g=!0,r=l,i=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===i){g=!0,i=c,r=l;break}if(E===r){g=!0,r=c,i=l;break}E=E.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=S(t);return i===null||R(n,t,i.child,{foundSelf:!1}),n}function R(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&R(t,n,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,I=null;function O(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function D(t,n,i){return t===i?(I=t,!1):t===n?(I!==null&&(x=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var P=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),me=Symbol.for("react.memo_cache_sentinel"),L=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),Q=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var q=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ft:return"Profiler";case st:return"StrictMode";case nt:return"Suspense";case j:return"SuspenseList";case Bt:return"Activity";case L:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ut:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Mt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Mt(t(n))}catch{}}return null}var bt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Ge=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=Ge[se],Ge[se]=null,se--)}function ae(t,n){se++,Ge[se]=t.current,t.current=n}var Ht=Qt(null),oe=Qt(null),Ye=Qt(null),je=Qt(null);function U(t,n){switch(ae(Ye,n),ae(oe,t),ae(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?l0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=l0(n),t=u0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),ae(Ht,t)}function T(){Lt(Ht),Lt(oe),Lt(Ye)}function at(t){var n=t.memoizedState;n!==null&&(Us._currentValue=n.memoizedState,ae(je,t)),n=Ht.current;var i=u0(n,t.type);n!==i&&(ae(oe,t),ae(Ht,i))}function mt(t){oe.current===t&&(Lt(Ht),Lt(oe)),je.current===t&&(Lt(je),Us._currentValue=z)}var yt,dt;function kt(t){if(yt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",dt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+dt}var wt=!1;function jt(t,n){if(!t||wt)return"";wt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Nt){var Y=Nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Nt){Y=Nt}gt=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){Y=Nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Nt){if(Nt&&Y&&typeof Nt.stack=="string")return[Nt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var N=g.split(`
`),Z=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===Z.length)for(r=N.length-1,l=Z.length-1;1<=r&&0<=l&&N[r]!==Z[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==Z[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==Z[l]){var ot=`
`+N[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=l);break}}}finally{wt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function Rt(t){try{var n="",i=null;do n+=Kt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ce=o.unstable_requestPaint,H=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,ye=null,en=null;function pn(t){if(typeof ue=="function"&&Ve(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(ye,t)}catch{}}var Un=Math.clz32?Math.clz32:Tl,$i=Math.log,fo=Math.LN2;function Tl(t){return t>>>=0,t===0?32:31-($i(t)/fo|0)|0}var ur=256,ta=262144,cr=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ci(r):(g&=E,g!==0?l=ci(g):i||(i=E&~t,i!==0&&(l=ci(i))))):(E=r&~c,E!==0?l=ci(E):g!==0?l=ci(g):i||(i=r&~t,i!==0&&(l=ci(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Ea(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function bl(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Un(i),l=1<<r;n|=t[r],i&=~l}return n}function Rc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var t=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),t}function ho(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function hr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cc(t,n,i,r,l,c){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,Z=t.hiddenUpdates;for(i=g&~i;0<i;){var ot=31-Un(i),gt=1<<ot;E[ot]=0,N[ot]=-1;var Y=Z[ot];if(Y!==null)for(Z[ot]=null,ot=0;ot<Y.length;ot++){var et=Y[ot];et!==null&&(et.lane&=-536870913)}i&=~gt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function A(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Un(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function K(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Un(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function lt(t,n){var i=n&-n;return i=(i&42)!==0?1:ct(i),(i&(t.suspendedLanes|n))!==0?0:i}function ct(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function Pt(t,n){var i=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=i}}var Ft=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ft,qt="__reactProps$"+Ft,ee="__reactContainer$"+Ft,$t="__reactEvents$"+Ft,ve="__reactListeners$"+Ft,Pe="__reactHandles$"+Ft,Je="__reactResources$"+Ft,Le="__reactMarker$"+Ft,we="__reactLoad$"+Ft;function te(t){delete t[Dt],delete t[qt],delete t[ve],delete t[Pe]}function Oe(t){var n;if(n=t[Dt])return n;for(var i=t.parentNode;i;){if(n=i[ee]||i[Dt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=A0(t);t!==null;){if(i=t[Dt])return i;t=A0(t)}return n}t=i,i=t.parentNode}return null}function ge(t){if(t=t[Dt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Qn(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Ta(t){t[we]=void 0}var Ze=new Set,In={};function ln(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(In[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jr={},zi={};function Yx(t){return Ot.call(zi,t)?!0:Ot.call(jr,t)?!1:Nn.test(t)?zi[t]=!0:(jr[t]=!0,!1)}var Ue=!1;function jp(){var t=Ue;return Ue=!1,t}function Rl(t,n,i){if(Yx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Cl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ea(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wx(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wc(t){if(!t._valueTracker){var n=Zp(t)?"checked":"value";t._valueTracker=Wx(t,n,""+t[n])}}function Kp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Zp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var jx=/[\n"\\]/g;function fi(t){return t.replace(jx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dc(t,n,i,r,l,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jn(n)):t.value!==""+Jn(n)&&(t.value=""+Jn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Uc(t,Jn(t.value)):Uc(t,Jn(n)):i!=null?Uc(t,Jn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jn(E):t.removeAttribute("name")}function Qp(t,n,i,r,l,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){wc(t);return}i=i!=null?""+Jn(i):"",n=n!=null?""+Jn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),wc(t)}function Uc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Zr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Jn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Jp(t,n,i){if(n!=null&&(n=""+Jn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Jn(i):""}function $p(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=Jn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),wc(t)}function Kr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Zx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||Zx.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function em(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(tm(t,l,r),Ue=!0)}else for(var c in n)n.hasOwnProperty(c)&&tm(t,c,n[c])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return Qx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function nm(t){var n=ge(t);if(n&&(t=n.stateNode)){var i=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Dc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[qt]||null;if(!l)throw Error(s(90));Dc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Kp(r)}break t;case"textarea":Jp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Zr(t,!!i.multiple,n,!1)}}}var zc=!1;function im(t,n,i){if(zc)return t(n,i);zc=!0;try{var r=t(n);return r}finally{if(zc=!1,(Qr!==null||Jr!==null)&&(wu(),Qr&&(n=Qr,t=Jr,Jr=Qr=null,nm(n),t)))for(n=0;n<t.length;n++)nm(t[n])}}function po(t,n){var i=t.stateNode;if(i===null)return null;var r=i[qt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(na)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Pc=!1}var ba=null,Ic=null,Dl=null;function am(){if(Dl)return Dl;var t,n=Ic,i=n.length,r,l="value"in ba?ba.value:ba.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var g=i-t;for(r=1;r<=g&&n[i-r]===l[c-r];r++);return Dl=l.slice(t,1<r?1-r:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function rm(){return!1}function Bn(t){function n(i,r,l,c,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Nl:rm,this.isPropagationStopped=rm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Bn(Aa),go=P({},Aa,{view:0,detail:0}),Jx=Bn(go),Bc,Fc,_o,Ol=P({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Bc=t.screenX-_o.screenX,Fc=t.screenY-_o.screenY):Fc=Bc=0,_o=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),sm=Bn(Ol),$x=P({},Ol,{dataTransfer:0}),tS=Bn($x),eS=P({},go,{relatedTarget:0}),Hc=Bn(eS),nS=P({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Bn(nS),aS=P({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Bn(aS),sS=P({},Aa,{data:0}),om=Bn(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uS[t])?!!n[t]:!1}function Gc(){return cS}var fS=P({},go,{key:function(t){if(t.key){var n=oS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=Bn(fS),dS=P({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=Bn(dS),pS=P({},Aa,{submitter:0}),mS=Bn(pS),gS=P({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),_S=Bn(gS),vS=P({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=Bn(vS),SS=P({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Bn(SS),MS=P({},Aa,{newState:0,oldState:0,source:0}),ES=Bn(MS),TS=[9,13,27,32],Vc=na&&"CompositionEvent"in window,vo=null;na&&"documentMode"in document&&(vo=document.documentMode);var bS=na&&"TextEvent"in window&&!vo,um=na&&(!Vc||vo&&8<vo&&11>=vo),cm=" ",fm=!1;function hm(t,n){switch(t){case"keyup":return TS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function AS(t,n){switch(t){case"compositionend":return dm(n);case"keypress":return n.which!==32?null:(fm=!0,cm);case"textInput":return t=n.data,t===cm&&fm?null:t;default:return null}}function RS(t,n){if($r)return t==="compositionend"||!Vc&&hm(t,n)?(t=am(),Dl=Ic=ba=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return um&&n.locale!=="ko"?null:n.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!CS[t.type]:n==="textarea"}function mm(t,n,i,r){Qr?Jr?Jr.push(r):Jr=[r]:Qr=r,n=zu(n,"onChange"),0<n.length&&(i=new Ll("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var xo=null,So=null;function wS(t){n0(t,0)}function zl(t){var n=mn(t);if(Kp(n))return t}function gm(t,n){if(t==="change")return n}var _m=!1;if(na){var Xc;if(na){var kc="oninput"in document;if(!kc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),kc=typeof vm.oninput=="function"}Xc=kc}else Xc=!1;_m=Xc&&(!document.documentMode||9<document.documentMode)}function xm(){xo&&(xo.detachEvent("onpropertychange",Sm),So=xo=null)}function Sm(t){if(t.propertyName==="value"&&zl(So)){var n=[];mm(n,So,t,Oc(t)),im(wS,n)}}function DS(t,n,i){t==="focusin"?(xm(),xo=n,So=i,xo.attachEvent("onpropertychange",Sm)):t==="focusout"&&xm()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(So)}function NS(t,n){if(t==="click")return zl(n)}function LS(t,n){if(t==="input"||t==="change")return zl(n)}function OS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:OS;function yo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(n,l)||!$n(t[l],n[l]))return!1}return!0}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,n){var i=ym(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=ym(i)}}function Em(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Em(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=qc(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zS=na&&"documentMode"in document&&11>=document.documentMode,ts=null,Wc=null,Mo=null,jc=!1;function bm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;jc||ts==null||ts!==qc(r)||(r=ts,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&yo(Mo,r)||(Mo=r,r=zu(Wc,"onSelect"),0<r.length&&(n=new Ll("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=ts)))}function dr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var es={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Zc={},Am={};na&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function pr(t){if(Zc[t])return Zc[t];if(!es[t])return t;var n=es[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Am)return Zc[t]=n[i];return t}var Rm=pr("animationend"),Cm=pr("animationiteration"),wm=pr("animationstart"),PS=pr("transitionrun"),IS=pr("transitionstart"),BS=pr("transitioncancel"),Dm=pr("transitionend"),Um=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function Mi(t,n){Um.set(t,n),ln(n,[t])}var FS=0;function ia(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ai.identifierPrefix;var i=FS++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Nm(t){if(t==null||typeof t=="string")return t;var n=null,i=ys;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function aa(t,n){return t=Nm(t),n=Nm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],ns=0,Qc=0;function Il(){for(var t=ns,n=Qc=ns=0;n<t;){var i=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&Lm(i,l,c)}}function Bl(t,n,i,r){hi[ns++]=t,hi[ns++]=n,hi[ns++]=i,hi[ns++]=r,Qc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jc(t,n,i,r){return Bl(t,n,i,r),Fl(t)}function mr(t,n){return Bl(t,null,null,n),Fl(t)}function Lm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Un(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Fl(t){if(50<ko)throw ko=0,Cu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var is={};function HS(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,i,r){return new HS(t,n,i,r)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var i=t.alternate;return i===null?(i=Yn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Om(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,i,r,l,c){var g=0;if(r=t,typeof r=="function")$c(r)&&(g=1);else if(typeof r=="string")g=pM(t,i,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Bt:return t=Yn(31,i,n,l),t.elementType=Bt,t.lanes=c,t;case V:return gr(i.children,l,c,n);case st:g=8,l|=24;break;case ft:return t=Yn(12,i,n,l|2),t.elementType=ft,t.lanes=c,t;case nt:return t=Yn(13,i,n,l),t.elementType=nt,t.lanes=c,t;case j:return t=Yn(19,i,n,l),t.elementType=j,t.lanes=c,t;case ne:case L:return t=l|32,t=Yn(30,i,n,t),t.elementType=L,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ut:g=10;break t;case _t:g=9;break t;case X:g=11;break t;case vt:g=14;break t;case St:g=16,r=null;break t}g=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(g,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function gr(t,n,i,r){return t=Yn(7,t,r,n),t.lanes=i,t}function tf(t,n,i){return t=Yn(6,t,null,n),t.lanes=i,t}function zm(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function ef(t,n,i){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var i=Pm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Rt(n)},Pm.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var as=[],rs=0,Gl=null,Eo=0,pi=[],mi=0,Ra=null,Ii=1,Bi="";function sa(t,n){as[rs++]=Eo,as[rs++]=Gl,Gl=t,Eo=n}function Im(t,n,i){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Ra,Ra=t;var r=Ii;t=Bi;var l=32-Un(r)-1;r&=~(1<<l),i+=1;var c=32-Un(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Ii=1<<32-Un(n)+l|i<<l|r,Bi=c+t}else Ii=1<<c|i<<l|r,Bi=t}function Vl(t){t.return!==null&&(sa(t,1),Im(t,1,0))}function nf(t){for(;t===Gl;)Gl=as[--rs],as[rs]=null,Eo=as[--rs],as[rs]=null;for(;t===Ra;)Ra=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null}function Bm(t,n){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Ra,Ii=n.id,Bi=n.overflow,Ra=t}var Sn=null,Ke=null,_e=!1,Ca=null,gi=!1,af=Error(s(519));function wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(di(n,t)),af}function Fm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[Dt]=t,n[qt]=r,i){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Yo.length;i++)Se(Yo[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Qp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),$p(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||s0(n.textContent,i)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||wa(t,!0)}function Xl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Sn=Sn.return}}function ss(t){if(t!==Sn)return!1;if(!_e)return Xl(t),_e=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Oh(t.type,t.memoizedProps)),i=!i),i&&Ke&&wa(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=b0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=b0(t)}else n===27?(n=Ke,qa(t.type)?(t=Xh,Xh=null,Ke=t):Ke=n):Ke=Sn?vi(t.stateNode.nextSibling):null;return!0}function _r(){Ke=Sn=null,_e=!1}function rf(){var t=Ca;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ca=null),t}function To(t){Ca===null?Ca=[t]:Ca.push(t)}var sf=Qt(null),vr=null,oa=null;function Da(t,n,i){ae(sf,n._currentValue),n._currentValue=i}function la(t){t._currentValue=sf.current,Lt(sf)}function kl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function of(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),kl(c.return,i,t),r||(g=null);break t}c=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,c=g.alternate,c!==null&&(c.lanes|=i),kl(g,i,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),kl(l.return,i,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function xr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=l.type;$n(l.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(l===je.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Us):t=[Us])}l=l.return}return t!==null&&of(n,t,i,r),n.flags|=262144,t!==null}function ql(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){vr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Hm(vr,t)}function Yl(t,n){return vr===null&&Sr(t),Hm(t,n)}function Hm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return i}var GS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},VS=o.unstable_scheduleCallback,XS=o.unstable_NormalPriority,un={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new GS,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&VS(XS,function(){t.controller.abort()})}function Gm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var Ao=null;function kS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ro=null,uf=0,yr=0,os=null;function qS(t,n){if(Ro===null){var i=Ro=[];uf=0,yr=bh(),os={status:"pending",value:void 0,then:function(r){i.push(r)}}}return uf++,n.then(Vm,Vm),n}function Vm(){if(--uf===0&&(Ao=null,Ro!==null)){os!==null&&(os.status="fulfilled");var t=Ro;Ro=null,yr=0,os=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function YS(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Xm=Et.S;Et.S=function(t,n){if(z_=H(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qS(t,n),Ao!==null)for(var i=bs;i!==null;)Gm(i,Ao),i=i.next;if(i=t.types,i!==null){for(var r=bs;r!==null;)Gm(r,i),r=r.next;if(yr!==0){r=Ao,r===null&&(r=Ao=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Xm!==null&&Xm(t,n)};var Mr=Qt(null);function cf(){var t=Mr.current;return t!==null?t:We.pooledCache}function Wl(t,n){n===null?ae(Mr,Mr.current):ae(Mr,n.pool)}function km(){var t=cf();return t===null?null:{parent:un._currentValue,pool:t}}var ls=Error(s(460)),ff=Error(s(474)),jl=Error(s(542)),Zl={then:function(){}};function qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ym(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Pi,Pi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jm(t),t}throw Tr=n,ls}}function Er(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,ls):i}}var Tr=null;function Wm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function jm(t){if(t===ls||t===jl)throw Error(s(483))}var us=null,Co=0;function Kl(t){var n=Co;return Co+=1,us===null&&(us=[]),Ym(us,t,n)}function Ua(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zm(t){function n(W,F){if(t){var $=W.deletions;$===null?(W.deletions=[F],W.flags|=16):$.push(F)}}function i(W,F){if(!t)return null;for(;F!==null;)n(W,F),F=F.sibling;return null}function r(W){for(var F=new Map;W!==null;)W.key===null?F.set(W.index,W):F.set(W.key,W),W=W.sibling;return F}function l(W,F){return W=ra(W,F),W.index=0,W.sibling=null,W}function c(W,F,$){return W.index=$,t?($=W.alternate,$!==null?($=$.index,$<F?(W.flags|=2,F):$):(W.flags|=134217730,F)):(W.flags|=1048576,F)}function g(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,F,$,pt){return F===null||F.tag!==6?(F=tf($,W.mode,pt),F.return=W,F):(F=l(F,$),F.return=W,F)}function N(W,F,$,pt){var Vt=$.type;return Vt===V?(W=ot(W,F,$.props.children,pt,$.key),Ua(W,$),W):F!==null&&(F.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===St&&Er(Vt)===F.type)?(F=l(F,$.props),Ua(F,$),F.return=W,F):(F=Hl($.type,$.key,$.props,null,W.mode,pt),Ua(F,$),F.return=W,F)}function Z(W,F,$,pt){return F===null||F.tag!==4||F.stateNode.containerInfo!==$.containerInfo||F.stateNode.implementation!==$.implementation?(F=ef($,W.mode,pt),F.return=W,F):(F=l(F,$.children||[]),F.return=W,F)}function ot(W,F,$,pt,Vt){return F===null||F.tag!==7?(F=gr($,W.mode,pt,Vt),F.return=W,F):(F=l(F,$),F.return=W,F)}function gt(W,F,$){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=tf(""+F,W.mode,$),F.return=W,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return $=Hl(F.type,F.key,F.props,null,W.mode,$),Ua($,F),$.return=W,$;case C:return F=ef(F,W.mode,$),F.return=W,F;case St:return F=Er(F),gt(W,F,$)}if(bt(F)||it(F))return F=gr(F,W.mode,$,null),F.return=W,F;if(typeof F.then=="function")return gt(W,Kl(F),$);if(F.$$typeof===ut)return gt(W,Yl(W,F),$);Ql(W,F)}return null}function Y(W,F,$,pt){var Vt=F!==null?F.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Vt!==null?null:E(W,F,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return $.key===Vt?N(W,F,$,pt):null;case C:return $.key===Vt?Z(W,F,$,pt):null;case St:return $=Er($),Y(W,F,$,pt)}if(bt($)||it($))return Vt!==null?null:ot(W,F,$,pt,null);if(typeof $.then=="function")return Y(W,F,Kl($),pt);if($.$$typeof===ut)return Y(W,F,Yl(W,$),pt);Ql(W,$)}return null}function et(W,F,$,pt,Vt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get($)||null,E(F,W,""+pt,Vt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case w:return W=W.get(pt.key===null?$:pt.key)||null,N(F,W,pt,Vt);case C:return W=W.get(pt.key===null?$:pt.key)||null,Z(F,W,pt,Vt);case St:return pt=Er(pt),et(W,F,$,pt,Vt)}if(bt(pt)||it(pt))return W=W.get($)||null,ot(F,W,pt,Vt,null);if(typeof pt.then=="function")return et(W,F,$,Kl(pt),Vt);if(pt.$$typeof===ut)return et(W,F,$,Yl(F,pt),Vt);Ql(F,pt)}return null}function Nt(W,F,$,pt){for(var Vt=null,Ee=null,Jt=F,re=F=0,hn=null;Jt!==null&&re<$.length;re++){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var be=Y(W,Jt,$[re],pt);if(be===null){Jt===null&&(Jt=hn);break}t&&Jt&&be.alternate===null&&n(W,Jt),F=c(be,F,re),Ee===null?Vt=be:Ee.sibling=be,Ee=be,Jt=hn}if(re===$.length)return i(W,Jt),_e&&sa(W,re),Vt;if(Jt===null){for(;re<$.length;re++)Jt=gt(W,$[re],pt),Jt!==null&&(F=c(Jt,F,re),Ee===null?Vt=Jt:Ee.sibling=Jt,Ee=Jt);return _e&&sa(W,re),Vt}for(Jt=r(Jt);re<$.length;re++)hn=et(Jt,W,re,$[re],pt),hn!==null&&(t&&(be=hn.alternate,be!==null&&Jt.delete(be.key===null?re:be.key)),F=c(hn,F,re),Ee===null?Vt=hn:Ee.sibling=hn,Ee=hn);return t&&Jt.forEach(function(Ka){return n(W,Ka)}),_e&&sa(W,re),Vt}function Yt(W,F,$,pt){if($==null)throw Error(s(151));for(var Vt=null,Ee=null,Jt=F,re=F=0,hn=null,be=$.next();Jt!==null&&!be.done;re++,be=$.next()){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var Ka=Y(W,Jt,be.value,pt);if(Ka===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ka.alternate===null&&n(W,Jt),F=c(Ka,F,re),Ee===null?Vt=Ka:Ee.sibling=Ka,Ee=Ka,Jt=hn}if(be.done)return i(W,Jt),_e&&sa(W,re),Vt;if(Jt===null){for(;!be.done;re++,be=$.next())be=gt(W,be.value,pt),be!==null&&(F=c(be,F,re),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return _e&&sa(W,re),Vt}for(Jt=r(Jt);!be.done;re++,be=$.next())be=et(Jt,W,re,be.value,pt),be!==null&&(t&&(hn=be.alternate,hn!==null&&Jt.delete(hn.key===null?re:hn.key)),F=c(be,F,re),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return t&&Jt.forEach(function(AM){return n(W,AM)}),_e&&sa(W,re),Vt}function he(W,F,$,pt){if(typeof $=="object"&&$!==null&&$.type===V&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case w:t:{for(var Vt=$.key;F!==null;){if(F.key===Vt){if(Vt=$.type,Vt===V){if(F.tag===7){i(W,F.sibling),pt=l(F,$.props.children),Ua(pt,$),pt.return=W,W=pt;break t}}else if(F.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===St&&Er(Vt)===F.type){i(W,F.sibling),pt=l(F,$.props),Ua(pt,$),pt.return=W,W=pt;break t}i(W,F);break}else n(W,F);F=F.sibling}$.type===V?(pt=gr($.props.children,W.mode,pt,$.key),Ua(pt,$),pt.return=W,W=pt):(pt=Hl($.type,$.key,$.props,null,W.mode,pt),Ua(pt,$),pt.return=W,W=pt)}return g(W);case C:t:{for(Vt=$.key;F!==null;){if(F.key===Vt)if(F.tag===4&&F.stateNode.containerInfo===$.containerInfo&&F.stateNode.implementation===$.implementation){i(W,F.sibling),pt=l(F,$.children||[]),pt.return=W,W=pt;break t}else{i(W,F);break}else n(W,F);F=F.sibling}pt=ef($,W.mode,pt),pt.return=W,W=pt}return g(W);case St:return $=Er($),he(W,F,$,pt)}if(bt($))return Nt(W,F,$,pt);if(it($)){if(Vt=it($),typeof Vt!="function")throw Error(s(150));return $=Vt.call($),Yt(W,F,$,pt)}if(typeof $.then=="function")return he(W,F,Kl($),pt);if($.$$typeof===ut)return he(W,F,Yl(W,$),pt);Ql(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,F!==null&&F.tag===6?(i(W,F.sibling),pt=l(F,$),pt.return=W,W=pt):(i(W,F),pt=tf($,W.mode,pt),pt.return=W,W=pt),g(W)):i(W,F)}return function(W,F,$,pt){try{Co=0;var Vt=he(W,F,$,pt);return us=null,Vt}catch(Jt){if(Jt===ls||Jt===jl)throw Jt;var Ee=Yn(29,Jt,null,W.mode);return Ee.lanes=pt,Ee.return=W,Ee}}}var br=Zm(!0),Km=Zm(!1),Na=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Fl(t),Lm(t,null,i),n}return Bl(t,r,n,i),Fl(t)}function wo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,K(t,i)}}function pf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var mf=!1;function Do(){if(mf){var t=os;if(t!==null)throw t}}function Uo(t,n,i,r){mf=!1;var l=t.updateQueue;Na=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,Z=N.next;N.next=null,g===null?c=Z:g.next=Z,g=N;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,E=ot.lastBaseUpdate,E!==g&&(E===null?ot.firstBaseUpdate=Z:E.next=Z,ot.lastBaseUpdate=N))}if(c!==null){var gt=l.baseState;g=0,ot=Z=N=null,E=c;do{var Y=E.lane&-536870913,et=Y!==E.lane;if(et?(Me&Y)===Y:(r&Y)===Y){Y!==0&&Y===yr&&(mf=!0),ot!==null&&(ot=ot.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,Yt=E;Y=n;var he=i;switch(Yt.tag){case 1:if(Nt=Yt.payload,typeof Nt=="function"){gt=Nt.call(he,gt,Y);break t}gt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Yt.payload,Y=typeof Nt=="function"?Nt.call(he,gt,Y):Nt,Y==null)break t;gt=P({},gt,Y);break t;case 2:Na=!0}}Y=E.callback,Y!==null&&(t.flags|=64,et&&(t.flags|=8192),et=l.callbacks,et===null?l.callbacks=[Y]:et.push(Y))}else et={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ot===null?(Z=ot=et,N=gt):ot=ot.next=et,g|=Y;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;et=E,E=et.next,et.next=null,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);ot===null&&(N=gt),l.baseState=N,l.firstBaseUpdate=Z,l.lastBaseUpdate=ot,c===null&&(l.shared.lanes=0),Ga|=g,t.lanes=g,t.memoizedState=gt}}function Qm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Jm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Qm(i[t],n)}var za=Qt(null),Jl=Qt(0);function $m(t,n){t=da,ae(Jl,t),ae(za,n),da=t|n.baseLanes}function gf(){ae(Jl,da),ae(za,za.current)}function _f(){da=Jl.current,Lt(za),Lt(Jl)}var bn=Qt(null),Ln=null;function Pa(t){var n=t.alternate;ae(An,An.current&1),ae(bn,t),Ln===null&&(n===null||za.current!==null||n.memoizedState!==null)&&(Ln=t)}function vf(t){ae(An,An.current),ae(bn,t),Ln===null&&(Ln=t)}function tg(t){t.tag===22?(ae(An,An.current),ae(bn,t),Ln===null&&(Ln=t)):Ia()}function Ia(){ae(An,An.current),ae(bn,bn.current)}function ti(t){Lt(bn),Ln===t&&(Ln=null),Lt(An)}var An=Qt(0);function No(t,n){ae(bn,bn.current),ae(An,n)}function xf(t){Lt(An),Lt(bn),Ln===t&&(Ln=null)}function $l(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Gh(i)||Vh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,fe=null,Xe=null,cn=null,tu=!1,cs=!1,Ar=!1,eu=0,Lo=0,fs=null,WS=0;function rn(){throw Error(s(321))}function Sf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!$n(t[i],n[i]))return!1;return!0}function yf(t,n,i,r,l,c){return ua=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Ig:Bg,Ar=!1,c=i(r,l),Ar=!1,cs&&(c=ng(n,i,r,l)),eg(t),c}function eg(t){Et.H=lu;var n=Xe!==null&&Xe.next!==null;if(ua=0,cn=Xe=fe=null,tu=!1,Lo=0,fs=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&ql(t)&&(fn=!0))}function ng(t,n,i,r){fe=t;var l=0;do{if(cs&&(fs=null),Lo=0,cs=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=ey,c=n(i,r)}while(cs);return c}function jS(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Oo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(fe.flags|=1024),n}function Mf(){var t=eu!==0;return eu=0,t}function Ef(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Tf(t){if(tu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tu=!1}ua=0,cn=Xe=fe=null,cs=!1,Lo=eu=0,fs=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Xe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Xe=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(t){var n=Lo;return Lo+=1,fs===null&&(fs=[]),t=Ym(fs,t,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Ig:Bg),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Oo(t);if(t.$$typeof===ht)return;if(t.$$typeof===ut)return Tn(t)}throw Error(s(438,String(t)))}function bf(t){var n=null,i=fe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=nu(),fe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=me;return n.index++,i}function ca(t,n){return typeof n=="function"?n(t):n}function au(t){var n=on();return Af(n,Xe,t)}function Af(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=g=null,N=null,Z=n,ot=!1;do{var gt=Z.lane&-536870913;if(gt!==Z.lane?(Me&gt)===gt:(ua&gt)===gt){var Y=Z.revertLane;if(Y===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),gt===yr&&(ot=!0);else if((ua&Y)===Y){Z=Z.next,Y===yr&&(ot=!0);continue}else gt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=gt,g=c):N=N.next=gt,fe.lanes|=Y,Ga|=Y;gt=Z.action,Ar&&i(c,gt),c=Z.hasEagerState?Z.eagerState:i(c,gt)}else Y={lane:gt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=Y,g=c):N=N.next=Y,fe.lanes|=gt,Ga|=gt;Z=Z.next}while(Z!==null&&Z!==n);if(N===null?g=c:N.next=E,!$n(c,t.memoizedState)&&(fn=!0,ot&&(i=os,i!==null)))throw i;t.memoizedState=c,t.baseState=g,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Rf(t){var n=on(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);$n(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function ig(t,n,i){var r=fe,l=on(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var g=!$n((Xe||l).memoizedState,i);if(g&&(l.memoizedState=i,fn=!0),l=l.queue,Df(sg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||cn!==null&&(cn.memoizedState.tag&1)!==0,hs(t?9:8,{destroy:void 0},rg.bind(null,r,l,i,n),null),t){if(r.flags|=2048,We===null)throw Error(s(349));c||(ua&127)!==0||ag(r,n,i)}return i}function ag(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=fe.updateQueue,n===null?(n=nu(),fe.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function rg(t,n,i,r){n.value=i,n.getSnapshot=r,og(n)&&lg(t)}function sg(t,n,i){return i(function(){og(n)&&lg(t)})}function og(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!$n(t,i)}catch{return!0}}function lg(t){var n=mr(t,2);n!==null&&Kn(n,t,2)}function Cf(t){var n=Fn();if(typeof t=="function"){var i=t;if(t=i(),Ar){pn(!0);try{i()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function ug(t,n,i,r){return t.baseState=i,Af(t,Xe,typeof r=="function"?r:ca)}function ZS(t,n,i,r,l){if(ou(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Et.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,cg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function cg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Et.T,g={};g.types=c!==null?c.types:null,Et.T=g;try{var E=i(l,r),N=Et.S;N!==null&&N(g,E),fg(t,n,E)}catch(Z){wf(t,n,Z)}finally{c!==null&&g.types!==null&&(c.types=g.types),Et.T=c}}else try{c=i(l,r),fg(t,n,c)}catch(Z){wf(t,n,Z)}}function fg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){hg(t,n,r)},function(r){return wf(t,n,r)}):hg(t,n,i)}function hg(t,n,i){n.status="fulfilled",n.value=i,dg(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,cg(t,i)))}function wf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,dg(n),n=n.next;while(n!==r)}t.action=null}function dg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pg(t,n){return n}function mg(t,n){if(_e){var i=We.formState;if(i!==null){t:{var r=fe;if(_e){if(Ke){e:{for(var l=Ke,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ke=vi(l.nextSibling),r=l.data==="F!";break t}}wa(r)}r=!1}r&&(n=i[0])}}return i=Fn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:n},i.queue=r,i=Og.bind(null,fe,r),r.dispatch=i,r=Cf(!1),c=zf.bind(null,fe,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=ZS.bind(null,fe,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function gg(t){var n=on();return _g(n,Xe,t)}function _g(t,n,i){if(n=Af(t,n,pg)[0],t=au(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Oo(n)}catch(g){throw g===ls?jl:g}else r=n;n=on();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(fe.flags|=2048,hs(9,{destroy:void 0},KS.bind(null,l,i),null)),[r,c,t]}function KS(t,n){t.action=n}function vg(t){var n=on(),i=Xe;if(i!==null)return _g(n,i,t);on(),n=n.memoizedState,i=on();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function hs(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=nu(),fe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function xg(){return on().memoizedState}function ru(t,n,i,r){var l=Fn();fe.flags|=t,l.memoizedState=hs(1|n,{destroy:void 0},i,r===void 0?null:r)}function su(t,n,i,r){var l=on();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&Sf(r,Xe.memoizedState.deps)?l.memoizedState=hs(n,c,i,r):(fe.flags|=t,l.memoizedState=hs(1|n,c,i,r))}function Sg(t,n){ru(8390656,8,t,n)}function Df(t,n){su(2048,8,t,n)}function QS(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=nu(),fe.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function yg(t){var n=on().memoizedState;return QS({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mg(t,n){return su(4,2,t,n)}function Eg(t,n){return su(4,4,t,n)}function Tg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bg(t,n,i){i=i!=null?i.concat([t]):null,su(4,4,Tg.bind(null,n,t),i)}function Uf(){}function Ag(t,n){var i=on();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&Sf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function Rg(t,n){var i=on();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&Sf(n,r[1]))return r[0];if(r=t(),Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r}function Nf(t,n,i){return i===void 0||(ua&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=I_(),fe.lanes|=t,Ga|=t,i)}function Cg(t,n,i,r){return $n(i,n)?i:za.current!==null?(t=Nf(t,i,r),$n(t,n)||(fn=!0),t):(ua&106)===0||(ua&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=i):(t=I_(),fe.lanes|=t,Ga|=t,n)}function wg(t,n,i,r,l){var c=Gt.p;Gt.p=c!==0&&8>c?c:8;var g=Et.T,E={};E.types=g!==null?g.types:null,Et.T=E,zf(t,!1,n,i);try{var N=l(),Z=Et.S;if(Z!==null&&Z(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ot=YS(N,r);zo(t,n,ot,ai(t))}else zo(t,n,r,ai(t))}catch(gt){zo(t,n,{then:function(){},status:"rejected",reason:gt},ai())}finally{Gt.p=c,g!==null&&E.types!==null&&(g.types=E.types),Et.T=g}}function JS(){}function Lf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=Dg(t).queue;wg(t,l,n,z,i===null?JS:function(){return Ug(t),i(r)})}function Dg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:z},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ug(t){var n=Dg(t);n.next===null&&(n=t.alternate.memoizedState),zo(t,n.next.queue,{},ai())}function Of(){return Tn(Us)}function Ng(){return on().memoizedState}function Lg(){return on().memoizedState}function $S(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ai();t=La(i);var r=Oa(n,t,i);r!==null&&(Kn(r,n,i),wo(r,n,i)),n={cache:lf()},t.payload=n;return}n=n.return}}function ty(t,n,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ou(t)?zg(n,i):(i=Jc(t,n,i,r),i!==null&&(Kn(i,t,r),Pg(i,n,r)))}function Og(t,n,i){var r=ai();zo(t,n,i,r)}function zo(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ou(t))zg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,i);if(l.hasEagerState=!0,l.eagerState=E,$n(E,g))return Bl(t,n,l,0),We===null&&Il(),!1}catch{}if(i=Jc(t,n,l,r),i!==null)return Kn(i,t,r),Pg(i,n,r),!0}return!1}function zf(t,n,i,r){if(r={lane:2,revertLane:bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ou(t)){if(n)throw Error(s(479))}else n=Jc(t,i,r,2),n!==null&&Kn(n,t,2)}function ou(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function zg(t,n){cs=tu=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Pg(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,K(t,i)}}var lu={readContext:Tn,use:iu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},Ig={readContext:Tn,use:iu,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Sg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,ru(4194308,4,Tg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return ru(4194308,4,t,n)},useInsertionEffect:function(t,n){ru(4,2,t,n)},useMemo:function(t,n){var i=Fn();n=n===void 0?null:n;var r=t();if(Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Fn();if(i!==void 0){var l=i(n);if(Ar){pn(!0);try{i(n)}finally{pn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=ty.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,i=Og.bind(null,fe,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Uf,useDeferredValue:function(t,n){var i=Fn();return Nf(i,t,n)},useTransition:function(){var t=Cf(!1);return t=wg.bind(null,fe,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=fe,l=Fn();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),We===null)throw Error(s(349));(Me&127)!==0||ag(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,Sg(sg.bind(null,r,c,t),[t]),r.flags|=2048,hs(9,{destroy:void 0},rg.bind(null,r,c,i,n),null),i},useId:function(){var t=Fn(),n=We.identifierPrefix;if(_e){var i=Bi,r=Ii;i=(r&~(1<<32-Un(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=eu++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=WS++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:mg,useActionState:mg,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=zf.bind(null,fe,!0,i),i.dispatch=n,[t,n]},useMemoCache:bf,useCacheRefresh:function(){return Fn().memoizedState=$S.bind(null,fe)},useEffectEvent:function(t){var n=Fn(),i={impl:t};return n.memoizedState=i,function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Bg={readContext:Tn,use:iu,useCallback:Ag,useContext:Tn,useEffect:Df,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:au,useRef:xg,useState:function(){return au(ca)},useDebugValue:Uf,useDeferredValue:function(t,n){var i=on();return Cg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=au(ca)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Oo(t),n]},useSyncExternalStore:ig,useId:Ng,useHostTransitionStatus:Of,useFormState:gg,useActionState:gg,useOptimistic:function(t,n){var i=on();return ug(i,Xe,t,n)},useMemoCache:bf,useCacheRefresh:Lg,useEffectEvent:yg},ey={readContext:Tn,use:iu,useCallback:Ag,useContext:Tn,useEffect:Df,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:Rf,useRef:xg,useState:function(){return Rf(ca)},useDebugValue:Uf,useDeferredValue:function(t,n){var i=on();return Xe===null?Nf(i,t,n):Cg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=Rf(ca)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Oo(t),n]},useSyncExternalStore:ig,useId:Ng,useHostTransitionStatus:Of,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var i=on();return Xe!==null?ug(i,Xe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:bf,useCacheRefresh:Lg,useEffectEvent:yg};function Pf(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:P({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var If={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ai(),l=La(r);l.payload=n,i!=null&&(l.callback=i),n=Oa(t,l,r),n!==null&&(Kn(n,t,r),wo(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ai(),l=La(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Oa(t,l,r),n!==null&&(Kn(n,t,r),wo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ai(),r=La(i);r.tag=2,n!=null&&(r.callback=n),n=Oa(t,r,i),n!==null&&(Kn(n,t,i),wo(n,t,i))}};function Fg(t,n,i,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!yo(i,r)||!yo(l,c):!0}function Hg(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&If.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Gg(t){Pl(t)}function Vg(t){console.error(t)}function Xg(t){Pl(t)}function uu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function kg(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bf(t,n,i){return i=La(i),i.tag=3,i.payload={element:null},i.callback=function(){uu(t,n)},i}function qg(t){return t=La(t),t.tag=3,t}function Yg(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){kg(n,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){kg(n,i,r),typeof l!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ny(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&xr(n,i,l,!0),i=bn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?Du():i.alternate===null&&sn===0&&(sn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Zl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),Mh(t,r,l)),!1;case 22:return i.flags|=65536,r===Zl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),Mh(t,r,l)),!1}throw Error(s(435,i.tag))}return Mh(t,r,l),Du(),!1}if(_e)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==af&&(t=Error(s(422),{cause:r}),To(di(t,i)))):(r!==af&&(n=Error(s(423),{cause:r}),To(di(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,i),l=Bf(t.stateNode,r,l),pf(t,l),sn!==4&&(sn=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,i),Xo===null?Xo=[c]:Xo.push(c),sn!==4&&(sn=2),n===null)return!0;r=di(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Bf(i.stateNode,r,t),pf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Va===null||!Va.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=qg(l),Yg(l,t,i,r),pf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Ff=Error(s(461)),fn=!1;function gn(t,n,i,r){n.child=t===null?Km(n,null,i,r):br(n,t.child,i,r)}function Wg(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Sr(n),r=yf(t,n,i,g,c,l),E=Mf(),t!==null&&!fn?(Ef(t,n,l),fa(t,n,l)):(_e&&E&&Vl(n),n.flags|=1,gn(t,n,r,l),n.child)}function jg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!$c(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Zg(t,n,c,r,l)):(t=Hl(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Wf(t,l)){var g=c.memoizedProps;if(i=i.compare,i=i!==null?i:yo,i(g,r)&&t.ref===n.ref)return fa(t,n,l)}return n.flags|=1,t=ra(c,r),t.ref=n.ref,t.return=n,n.child=t}function Zg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(yo(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,Wf(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,fa(t,n,l)}return Hf(t,n,i,r,l)}function Kg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Qg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,c!==null?c.cachePool:null),c!==null?$m(n,c):gf(),tg(n);else return r=n.lanes=536870912,Qg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Wl(n,c.cachePool),$m(n,c),Ia(),n.memoizedState=null):(t!==null&&Wl(n,null),gf(),Ia());return gn(t,n,l,i),n.child}function Po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qg(t,n,i,r,l){var c=cf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Wl(n,null),gf(),tg(n),t!==null&&xr(t,n,r,!0),n.childLanes=l,null}function cu(t,n){return n=fu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Jg(t,n,i){return br(n,t.child,null,i),t=cu(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function iy(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=cu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Po(null,t);if(vf(n),(t=Ke)?(t=T0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},i=zm(t),i.return=n,n.child=i,Sn=n,Ke=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return cu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(vf(n),l)if(n.flags&256)n.flags&=-257,n=Jg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||xr(t,n,i,!1),l=(i&t.childLanes)!==0,fn||l){if(za.current===null){if(r=We,r!==null&&(g=lt(r,i),g!==0&&g!==c.retryLane))throw c.retryLane=g,mr(t,g),Kn(r,t,g),Ff;Du()}n=Jg(t,n,i)}else t=c.treeContext,Ke=vi(g.nextSibling),Sn=n,_e=!0,Ca=null,gi=!1,t!==null&&Bm(n,t),n=cu(n,r),n.flags|=134221824;return n}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ds(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Hf(t,n,i,r,l){return Sr(n),i=yf(t,n,i,r,void 0,l),r=Mf(),t!==null&&!fn?(Ef(t,n,l),fa(t,n,l)):(_e&&r&&Vl(n),n.flags|=1,gn(t,n,i,l),n.child)}function $g(t,n,i,r,l,c){return Sr(n),n.updateQueue=null,i=ng(n,r,i,l),eg(t),r=Mf(),t!==null&&!fn?(Ef(t,n,c),fa(t,n,c)):(_e&&r&&Vl(n),n.flags|=1,gn(t,n,i,c),n.child)}function t_(t,n,i,r,l){if(Sr(n),n.stateNode===null){var c=is,g=i.contextType;typeof g=="object"&&g!==null&&(c=Tn(g)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=If,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},hf(n),g=i.contextType,c.context=typeof g=="object"&&g!==null?Tn(g):is,c.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Pf(n,i,g,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&If.enqueueReplaceState(c,c.state,null),Uo(n,r,c,l),Do(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Rr(i,E);c.props=N;var Z=c.context,ot=i.contextType;g=is,typeof ot=="object"&&ot!==null&&(g=Tn(ot));var gt=i.getDerivedStateFromProps;ot=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ot||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Z!==g)&&Hg(n,c,r,g),Na=!1;var Y=n.memoizedState;c.state=Y,Uo(n,r,c,l),Do(),Z=n.memoizedState,E||Y!==Z||Na?(typeof gt=="function"&&(Pf(n,i,gt,r),Z=n.memoizedState),(N=Na||Fg(n,i,N,r,Y,Z,g))?(ot||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),c.props=r,c.state=Z,c.context=g,r=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,df(t,n),g=n.memoizedProps,ot=Rr(i,g),c.props=ot,gt=n.pendingProps,Y=c.context,Z=i.contextType,N=is,typeof Z=="object"&&Z!==null&&(N=Tn(Z)),E=i.getDerivedStateFromProps,(Z=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==gt||Y!==N)&&Hg(n,c,r,N),Na=!1,Y=n.memoizedState,c.state=Y,Uo(n,r,c,l),Do();var et=n.memoizedState;g!==gt||Y!==et||Na||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof E=="function"&&(Pf(n,i,E,r),et=n.memoizedState),(ot=Na||Fg(n,i,ot,r,Y,et,N)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,et,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,et,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),c.props=r,c.state=et,c.context=N,r=ot):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,ds(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=br(n,t.child,null,l),n.child=br(n,null,i,l)):gn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=fa(t,n,l),t}function e_(t,n,i,r){return _r(),n.flags|=256,gn(t,n,i,r),n.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(t){return{baseLanes:t,cachePool:km()}}function Xf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ii),t}function n_(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(l?Pa(n):Ia(),(t=Ke)?(t=T0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},i=zm(t),i.return=n,n.child=i,Sn=n,Ke=null)):t=null,t===null)throw wa(n);return Vh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ia(),l=n.mode,c=fu({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Vf(i),r.childLanes=Xf(t,g,i),n.memoizedState=Gf,Po(null,r)):(Pa(n),kf(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return ay(t,n,c,g,r,N,E,i)}return l?(Ia(),l=r.fallback,c=n.mode,E=t.child,N=E.sibling,r=ra(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=ra(N,l):(l=gr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Po(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Vf(i):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=km(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Xf(t,g,i),n.memoizedState=Gf,Po(t.child,r)):(Pa(n),i=t.child,t=i.sibling,i=ra(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=i,n.memoizedState=null,i)}function kf(t,n){return n=fu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fu(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function hu(t,n,i){return br(n,t.child,null,i),t=kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ay(t,n,i,r,l,c,g,E){if(i)return n.flags&256?(Pa(n),n.flags&=-257,hu(t,n,E)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,null):(Ia(),c=l.fallback,g=n.mode,l=fu({mode:"visible",children:l.children},g),c=gr(c,g,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,br(n,t.child,null,E),l=n.child,l.memoizedState=Vf(E),l.childLanes=Xf(t,r,E),n.memoizedState=Gf,Po(null,l));if(Pa(n),Vh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,To({value:l,source:null,stack:null})),hu(t,n,E)}if(fn||xr(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(za.current!==null)return hu(t,n,E);if(r=We,r!==null&&(l=lt(r,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,mr(t,l),Kn(r,t,l),Ff;return Gh(c)||Du(),hu(t,n,E)}return Gh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Ke=vi(c.nextSibling),Sn=n,_e=!0,Ca=null,gi=!1,t!==null&&Bm(n,t),n=kf(n,l.children),n.flags|=134221824,n)}function i_(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),kl(t.return,n,i)}function a_(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&$l(i)===null&&(n=t),t=t.sibling}return n}function du(t,n,i,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=c)}function qf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Yf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=An.current;if(n.flags&128)return No(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,No(n,g),l==="backwards"&&t!==null?(qf(t),gn(t,n,r,i),qf(t)):gn(t,n,r,i),r=_e?Eo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i_(t,i,n);else if(t.tag===19)i_(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=a_(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,qf(n)),du(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&$l(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}du(n,!0,i,null,c,r);break;case"together":du(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=a_(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),du(n,!1,l,i,c,r)}return n.child}function r_(t,n,i){var r=n.pendingProps;return Da(n,n.type,r.value),gn(t,n,r.children,i),n.child}function fa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(xr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=ra(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ra(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function ry(t,n,i){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Da(n,un,t.memoizedState.cache),_r();break;case 27:case 5:at(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Pa(n),n.flags|=128,null;r=xr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?n_(t,n,i):(Pa(n),t=fa(t,n,i),t!==null?t.sibling:null)}Pa(n);break;case 19:if(n.flags&128)return Yf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(xr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return Yf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),No(n,An.current),r)break;return null;case 22:return n.lanes=0,Kg(t,n,i,n.pendingProps);case 24:Da(n,un,t.memoizedState.cache)}return fa(t,n,i)}function s_(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Wf(t,i)&&(n.flags&128)===0)return fn=!1,ry(t,n,i);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Im(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")$c(t)?(r=Rr(t,r),n.tag=1,n=t_(null,n,t,r,i)):(n.tag=0,n=Hf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===X){n.tag=11,n=Wg(null,n,t,r,i);break t}else if(l===vt){n.tag=14,n=jg(null,n,t,r,i);break t}else if(l===ut){n.tag=10,n.type=t,n=r_(null,n,i);break t}}throw n=Mt(t)||t,Error(s(306,n,""))}}return n;case 0:return Hf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Rr(r,n.pendingProps),t_(t,n,r,l,i);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,df(t,n),Uo(n,r,null,i);var g=n.memoizedState;if(r=g.cache,Da(n,un,r),r!==c.cache&&of(n,[un],i,!0),Do(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=e_(t,n,r,i);break t}else if(r!==l){l=di(Error(s(424)),n),To(l),n=e_(t,n,r,i);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=vi(t.firstChild),Sn=n,_e=!0,Ca=null,gi=!0,i=Km(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(_r(),r===l){n=fa(t,n,i);break t}gn(t,n,r,i)}n=n.child}return n;case 26:return ds(t,n),t===null?(i=U0(n.type,null,n.pendingProps,null))?n.memoizedState=i:_e||(n.stateNode=c0(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=U0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&_e&&(r=n.stateNode=R0(n.type,n.pendingProps,Ye.current),Sn=n,gi=!0,l=Ke,qa(n.type)?(Xh=l,Ke=vi(r.firstChild)):Ke=l),gn(t,n,n.pendingProps.children,i),ds(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((l=r=Ke)&&(r=$y(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,Sn=n,Ke=vi(r.firstChild),gi=!1,l=!0):l=!1),l||wa(n)),at(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Oh(l,c)?r=null:g!==null&&Oh(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=yf(t,n,jS,null,null,i),Us._currentValue=l),ds(t,n),gn(t,n,r,i),n.child;case 6:return t===null&&_e&&((t=i=Ke)&&(i=tM(i,n.pendingProps,gi),i!==null?(n.stateNode=i,Sn=n,Ke=null,t=!0):t=!1),t||wa(n)),null;case 13:return n_(t,n,i);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=br(n,null,r,i):gn(t,n,r,i),n.child;case 11:return Wg(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,ds(t,n),gn(t,n,r,i),n.child;case 8:return gn(t,n,n.pendingProps.children,i),n.child;case 12:return gn(t,n,n.pendingProps.children,i),n.child;case 10:return r_(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,Sr(n),l=Tn(l),r=r(l),n.flags|=1,gn(t,n,r,i),n.child;case 14:return jg(t,n,n.type,n.pendingProps,i);case 15:return Zg(t,n,n.type,n.pendingProps,i);case 19:return Yf(t,n,i);case 31:return iy(t,n,i);case 22:return Kg(t,n,i,n.pendingProps);case 24:return Sr(n),r=Tn(un),t===null?(l=cf(),l===null&&(l=We,c=lf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},hf(n),Da(n,un,l)):((t.lanes&i)!==0&&(df(t,n),Uo(n,null,null,i),Do()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Da(n,un,r)):(r=c.cache,Da(n,un,r),r!==l.cache&&of(n,[un],i,!0))),gn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Vl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:ds(t,n),gn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function jf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?z0(n,r):z0(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(G_())t.flags|=8192;else throw Tr=Zl,ff}else t.flags&=-16777217}function o_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P0(n))if(G_())t.flags|=8192;else throw Tr=Zl,ff}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Al():536870912,t.lanes|=n,vs|=n)}function Io(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function sy(t,n,i){var r=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),la(un),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ss(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rf())),Qe(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ha(n),c!==null?(Qe(n),o_(n,c)):(Qe(n),jf(n,l,null,r,i))):c?c!==t.memoizedState?(ha(n),Qe(n),o_(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ha(n),Qe(n),jf(n,l,t,r,i)),null;case 27:if(mt(n),i=Ye.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Ht.current,ss(n)?Fm(n):(t=R0(l,r,i),n.stateNode=t,ha(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,ss(n))Fm(n);else{var g=jo(Ye.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[Dt]=n,c[qt]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Cn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ha(n)}}return Qe(n),n.subtreeFlags&=-33554433,jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ha(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ye.current,ss(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=Sn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||s0(t.nodeValue,i)),t||wa(n,!0)}else t=jo(t).createTextNode(r),t[Dt]=n,n.stateNode=t}return Qe(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=ss(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else i=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ss(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Dt]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),l=!1}else l=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),pu(n,n.updateQueue),Qe(n),null);case 4:return T(),t===null&&wh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return la(n.type),Qe(n),null;case 19:if(xf(n),r=n.memoizedState,r===null)return Qe(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Io(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=$l(t),c!==null){for(n.flags|=128,Io(r,!1),t=c.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Om(i,t),i=i.sibling;return No(n,An.current&1|2),_e&&sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&H()>Au&&(n.flags|=128,l=!0,Io(r,!1),n.lanes=4194304)}else{if(!l)if(t=$l(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),Io(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Qe(n),null}else 2*H()-r.renderingStartTime>Au&&i!==536870912&&(n.flags|=128,l=!0,Io(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=An.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?No(n,c):(i=c,ae(bn,n),ae(An,i),Ln===null&&(Ln=n)),_e&&sa(n,r.treeForkCount),t}return Qe(n),null;case 22:case 23:return ti(n),_f(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),i=n.updateQueue,i!==null&&pu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Lt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),la(un),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(s(156,n.tag))}function oy(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return la(n.type),null;case 22:case 23:return ti(n),_f(),t!==null&&Lt(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(un),null;case 25:return null;default:return null}}function l_(t,n){switch(nf(n),n.tag){case 3:la(un),T();break;case 26:case 27:case 5:mt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:xf(n);break;case 10:la(n.type);break;case 22:case 23:ti(n),_f(),t!==null&&Lt(Mr);break;case 24:la(un)}}function Bo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,g=i.inst;r=c(),g.destroy=r}i=i.next}while(i!==l)}}catch(E){Fe(n,n.return,E)}}function Ba(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=n;var N=i,Z=E;try{Z()}catch(ot){Fe(l,N,ot)}}}r=r.next}while(r!==c)}}catch(ot){Fe(n,n.return,ot)}}function u_(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Jm(n,i)}catch(r){Fe(t,t.return,r)}}}function c_(t,n,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Fe(t,n,r)}}function Fi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ia(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=_0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ri(t);p(t.child,!1,Qy,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Fe(t,n,E)}}function Rn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Fe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Fe(t,n,l)}else i.current=null}function mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)E0(t.stateNode,n[i])}function f_(t){for(var n=t.return;n!==null&&(Kf(n)&&E0(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function Fo(t){for(var n=t.return;n!==null&&(Kf(n)&&Jy(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function Zf(t){return t.tag===5||t.tag===3||t.tag===27}function Kf(t){return t&&t.tag===7&&t.stateNode!==null}function Qf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Fe(t,t.return,l)}}function Jf(t,n,i){try{var r=t.stateNode;Ly(r,t.type,i,n),r[qt]=n}catch(l){Fe(t,t.return,l)}}function h_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function $f(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||h_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Pi)),mu(t,r),Ue=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,qa(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(th(t,n,i,r),t=t.sibling;t!==null;)th(t,n,i,r),t=t.sibling}function gu(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),mu(t,r),Ue=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,qa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(gu(t,n,i,r),t=t.sibling;t!==null;)gu(t,n,i,r),t=t.sibling}function d_(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Cn(n,r,i),n[Dt]=t,n[qt]=i}catch(c){Fe(t,t.return,c)}}var _u=!1,ei=null;function p_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(_u=!0)}var Hi=null;function m_(){var t=Hi;return Hi=null,t}var Wn=0;function ps(t,n,i,r,l){return Wn=0,g_(t.child,n,i,r,l)}function g_(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=Ih(g);r.push(E),E.view&&(c=!0)}else c||Ih(g).view&&(c=!0);_u=!0,m0(g,Wn===0?n:n+"_"+Wn,i),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||g_(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Gi(t,n){for(;t!==null;)t.tag===5?g0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Gi(t.child,n)),t=t.sibling}function vu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=aa(n.default,n.share),n!=="none"&&(ps(t,i,n,null,!1)||Gi(t.child,!1))}t=t.sibling}}function eh(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ia(r,i),c=aa(r.default,i.paired?r.share:r.enter);c!=="none"?ps(t,l,c,null,!1)?(vu(t),i.paired||n||Ms(t,r.onEnter)):Gi(t.child,!1):vu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t,n),t=t.sibling;else vu(t)}function nh(t){if(ei!==null&&ei.size!==0){var n=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=aa(i.default,i.share);if(c!=="none"&&(ps(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Ms(t,i.onShare)):Gi(t.child,!1)),n.delete(r),n.size===0)break}}}nh(t)}t=t.sibling}}}function ih(t){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode),r=ei!==null?ei.get(i):void 0,l=aa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(ps(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(i),Ms(t,n.onShare)):Ms(t,n.onExit):Gi(t.child,!1)),ei!==null&&nh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ih(t),t=t.sibling;else ei!==null&&nh(t)}function __(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode);n=aa(n.default,n.update),t.flags&=-5,n!=="none"&&ps(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&__(t);t=t.sibling}}function ah(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Gi(t.child,!1))}ah(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,Gi(t.child,!1),ah(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else ah(t)}function v_(t){for(t=t.child;t!==null;)t.tag===30?Gi(t.child,!1):(t.subtreeFlags&33554432)!==0&&v_(t),t=t.sibling}function rh(t,n,i,r,l,c,g){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&Wn<c.length){var Z=c[Wn],ot=Ih(N);(Z.view||ot.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(ot.clip)gt=!0;else{gt=Z.rect;var Y=ot.rect;gt=gt.y!==Y.y||gt.x!==Y.x||gt.height!==Y.height||gt.width!==Y.width}gt&&(t.flags|=4),ot.abs?ot=!Z.abs:(Z=Z.rect,ot=ot.rect,ot=Z.height!==ot.height||Z.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&m0(N,Wn===0?i:i+"_"+Wn,l),E&&(t.flags&4)!==0||(Hi===null&&(Hi=[]),Hi.push(N,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:rh(t,n.child,i,r,l,c,g)&&(E=!0));n=n.sibling}return E}function x_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ia(i,r),c=aa(i.default,i.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Wn=0,l=rh(r,E,l,l,c,g,!1),(t.flags&4)!==0&&l&&Ms(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&x_(t);t=t.sibling}}var yn=!1,Ie=!1,Vi=!1,sh=!1,S_=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Xi=!1,Ho=!1,Su=!1,oh=!1;function ly(t,n,i){if(t=t.containerInfo,Nh=Ns,t=Tm(t),Yc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,N=-1,Z=-1,ot=0,gt=0,Y=t,et=null;e:for(;;){for(var Nt;Y!==r||c!==0&&Y.nodeType!==3||(N=E+c),Y!==g||l!==0&&Y.nodeType!==3||(Z=E+l),Y.nodeType===3&&(E+=Y.nodeValue.length),(Nt=Y.firstChild)!==null;)et=Y,Y=Nt;for(;;){if(Y===t)break e;if(et===r&&++ot===c&&(N=E),et===g&&++gt===l&&(Z=E),(Nt=Y.nextSibling)!==null)break;Y=et,et=Y.parentNode}Y=Nt}r=N===-1||Z===-1?null:{start:N,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lh={focusedElem:t,selectionRange:r},Ns=!1,i=(i&335544064)===i,Mn=n,n=i?9270:1024;Mn!==null;){if(t=Mn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&ih(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&p_(t),yu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&ih(r),yu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&p_(t),yu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Mn=r):(i&&__(t),yu(i))}}ei=null}function yu(t){for(;Mn!==null;){var n=Mn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Rr(n.type,l);i=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Fe(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Hh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Hh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ia(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=aa(l.default,l.update),l!=="none"&&ps(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Mn=r;break}Mn=n.return}}function y_(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:ki(t,i),r&4&&Bo(5,i);break;case 1:if(ki(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(i,i.return,g)}else{var l=Rr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(i,i.return,g)}}r&64&&u_(i),r&512&&Fi(i,i.return);break;case 3:if(ki(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Jm(t,n)}catch(g){Fe(i,i.return,g)}}break;case 27:n===null&&r&4&&d_(i);case 26:case 5:ki(t,i),n===null&&r&4&&Qf(i),r&512&&Fi(i,i.return);break;case 12:ki(t,i);break;case 31:ki(t,i),r&4&&b_(t,i);break;case 13:ki(t,i),r&4&&A_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Sy.bind(null,i),eM(t,i))));break;case 22:if(r=i.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||Ie;n=yn,l=Ie,yn=r,(Ie=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(t,i,r)):ki(t,i),yn=n,Ie=l}break;case 30:ki(t,i),r&512&&Fi(i,i.return);break;case 7:r&512&&Fi(i,i.return);default:ki(t,i)}}function lh(t,n){for(t=t.child;t!==null;)M_(t,n),t=t.sibling}function M_(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(N){Fe(t,t.return,N)}uh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(N){Fe(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?p0(E,!0):p0(t.stateNode,!1)}catch(N){Fe(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&lh(t,n);break;default:lh(t,n)}}function uh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:M_(i,r);break t;case 22:i.memoizedState===null&&uh(i,r);break t;default:uh(i,r)}}t=t.sibling}}function E_(t){var n=t.alternate;n!==null&&(t.alternate=null,E_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,jn=!1;function Ei(t,n,i){for(i=i.child;i!==null;)T_(t,n,i),i=i.sibling}function T_(t,n,i){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(ye,i)}catch{}switch(i.tag){case 26:Ie||Rn(i,n),Ei(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ie&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ie||Rn(i,n),Fo(i);var r=tn,l=jn;qa(i.type)&&(tn=i.stateNode,jn=!1),Ei(t,n,i),C0(i.stateNode,i.type,i.memoizedProps),tn=r,jn=l;break;case 5:Ie||Rn(i,n),Fo(i);case 6:if(i.tag===6&&Fo(i),r=tn,l=jn,tn=null,Ei(t,n,i),tn=r,jn=l,tn!==null)if(jn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(i.stateNode),Ue=!0}catch(c){Fe(i,n,c)}else try{tn.removeChild(i.stateNode),Ue=!0}catch(c){Fe(i,n,c)}break;case 18:tn!==null&&(jn?(t=tn,d0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ls(t)):d0(tn,i.stateNode));break;case 4:r=tn,l=jn,tn=i.stateNode.containerInfo,jn=!0,Ei(t,n,i),tn=r,jn=l;break;case 0:case 11:case 14:case 15:Ba(2,i,n),Ie||Ba(4,i,n),Ei(t,n,i);break;case 1:Ie||(Rn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&c_(i,n,r)),Ei(t,n,i);break;case 21:Ei(t,n,i);break;case 22:Ie=(r=Ie)||i.memoizedState!==null,Ei(t,n,i),Ie=r;break;case 30:Rn(i,n),Ei(t,n,i);break;case 7:Ie||Rn(i,n),Ei(t,n,i);break;default:Ei(t,n,i)}}function b_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(i){Fe(n,n.return,i)}}}function A_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(i){Fe(n,n.return,i)}}function uy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new S_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new S_),n;default:throw Error(s(435,t.tag))}}function Mu(t,n){var i=uy(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=yy.bind(null,t,r);r.then(l,l)}})}function Hn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(qa(N.type)){tn=N.stateNode,jn=!1;break t}break;case 5:tn=N.stateNode,jn=!1;break t;case 3:case 4:tn=N.stateNode.containerInfo,jn=!0;break t}N=N.return}if(tn===null)throw Error(s(160));T_(g,E,c),tn=null,jn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R_(n,t,i),n=n.sibling}var Ti=null;function R_(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Hn(n,t,i),Gn(t),l&4&&(Ba(3,t,t.return),Bo(3,t),Ba(5,t,t.return));break;case 1:Hn(n,t,i),Gn(t),l&512&&(Ie||r===null||Rn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=Ti,Hn(n,t,i),Gn(t),l&512&&(Ie||r===null||Rn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(yn)t.stateNode=c0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Le]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Cn(r,n,i),r[Dt]=t,De(r),n=r;break t;case"link":if(c=O0("link","href",l).get(n+(i.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Cn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=O0("meta","content",l).get(n+(i.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Cn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[Dt]=t,De(r),n=r}t.stateNode=n}else yn||Wh(c,t.type,t.stateNode);else t.stateNode=L0(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Ie||n.parentNode.removeChild(n)):l.count--,i===null?yn||Wh(c,t.type,t.stateNode):L0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,i),Gn(t),l&512&&(Ie||r===null||Rn(r,r.return)),r!==null&&l&4&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Vi,Vi=!1,Hn(n,t,i),Vi=c,Gn(t),l&512&&(Ie||r===null||Rn(r,r.return)),t.flags&32){n=t.stateNode;try{Kr(n,""),Ue=!0}catch(ot){Fe(t,t.return,ot)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Jf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(sh=!0);break;case 6:if(Hn(n,t,i),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,Ue=!0}catch(ot){Fe(t,t.return,ot)}}break;case 3:if(Ue=!1,Iu=null,c=Ti,Ti=Zo(n.containerInfo),Hn(n,t,i),Ti=c,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ls(n.containerInfo)}catch(ot){Fe(t,t.return,ot)}sh&&(sh=!1,C_(t)),Ue=!1;break;case 4:l=Vi,Vi=yn,r=jp(),c=Ti,Ti=Zo(t.stateNode.containerInfo),Hn(n,t,i),Gn(t),Ti=c,Ue&&Ho&&(Su=!0),Ue=r,Vi=l;break;case 12:Hn(n,t,i),Gn(t);break;case 31:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mu(t,n)));break;case 13:Hn(n,t,i),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bu=H()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=yn,N=Ie,Z=Vi;yn=E||c,Vi=Z||c,Ie=N||g,Hn(n,t,i),Ie=N,Vi=Z,yn=E,Gn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||yn||Ie||(n=g||Ie,i=yn,r=Ie,yn=c||yn,Ie=n,Fa(t,2),yn=i,Ie=r),!c&&Vi||lh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Mu(t,i))));break;case 19:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mu(t,n)));break;case 30:l&512&&(Ie||r===null||Rn(r,r.return)),l=jp(),c=Ho,g=(i&335544064)===i,E=t.memoizedProps,Ho=g&&aa(E.default,E.update)!=="none",Hn(n,t,i),Gn(t),g&&r!==null&&Ue&&(t.flags|=4),Ho=c,Ue=l;break;case 21:break;case 7:l&512&&(Ie||r===null||Rn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,i),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(h_(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Kf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Zf(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=$f(t);gu(t,N,E,g);break;case 5:var Z=i.stateNode;i.flags&32&&(Kr(Z,""),i.flags&=-33);var ot=$f(t);gu(t,ot,Z,g);break;case 3:case 4:var gt=i.stateNode.containerInfo,Y=$f(t);th(t,Y,gt,g);break;default:throw Error(s(161))}}catch(et){Fe(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function C_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;C_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ns=!0,n.reset(),Ns=!1),t=t.sibling}}function ms(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)w_(n,t),n=n.sibling;else x_(n)}function w_(t,n){var i=t.alternate;if(i===null)eh(t,!1);else switch(t.tag){case 3:if(oh=Xi=!1,m_(),ms(n,t),!Xi&&!Su){if(t=Hi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];g0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),oh=!0}Hi=null;break;case 5:ms(n,t);break;case 4:r=Xi,Xi=!1,ms(n,t),Xi&&(Su=!0),Xi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?eh(t,!1):ms(n,t));break;case 30:r=Xi,l=m_(),Xi=!1,ms(n,t),Xi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ia(c,g),g=ia(i.memoizedProps,g);var E=aa(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Wn=0,n=rh(t,i,n,g,E,c,!0),Wn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ms(t,t.memoizedProps.onUpdate),Hi=l):l!==null&&(l.push.apply(l,Hi),Hi=l),Xi=(t.flags&32)!==0?!0:r;break;default:ms(n,t)}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y_(t,n.alternate,n),n=n.sibling}function Fa(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Fa(i,r);break;case 1:Rn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&c_(i,i.return,l),Fa(i,r);break;case 27:(r&2)!==0&&C0(i.stateNode,i.type,i.memoizedProps);case 5:Rn(i,i.return),i.tag!==5&&i.tag!==27||Fo(i),Fa(i,r);break;case 6:Fo(i);break;case 26:Rn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ie||l.parentNode.removeChild(l),Fa(i,r);break;case 22:i.memoizedState===null&&Fa(i,r);break;case 30:Rn(i,i.return),Fa(i,r);break;case 7:Rn(i,i.return);default:Fa(i,r)}t=t.sibling}}function bi(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:bi(l,c,i),Bo(4,c);break;case 1:if(bi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ot){Fe(r,r.return,ot)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var Z=l.shared.hiddenCallbacks;if(Z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Z.length;l++)Qm(Z[l],N)}catch(ot){Fe(r,r.return,ot)}}E&&g&64&&u_(c),Fi(c,c.return);break;case 27:(i&2)!==0&&d_(c);case 5:c.tag!==5&&c.tag!==27||f_(c),bi(l,c,i),E&&r===null&&g&4&&Qf(c),Fi(c,c.return);break;case 6:f_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||yn||Wh(Zo(N.ownerDocument),c.type,N),bi(l,c,i),E&&r===null&&g&4&&Qf(c),Fi(c,c.return);break;case 12:bi(l,c,i);break;case 31:bi(l,c,i),E&&g&4&&b_(l,c);break;case 13:bi(l,c,i),E&&g&4&&A_(l,c);break;case 22:c.memoizedState===null&&bi(l,c,i),Fi(c,c.return);break;case 30:bi(l,c,i),Fi(c,c.return);break;case 7:Fi(c,c.return);default:bi(l,c,i)}n=n.sibling}}function ch(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&bo(i))}function fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t))}function _i(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)D_(t,n,i,r),n=n.sibling;else l&&v_(n)}function D_(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,i,r),c&2048&&Bo(9,n);break;case 1:_i(t,n,i,r);break;case 3:_i(t,n,i,r),l&&oh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&bo(c)));break;case 12:if(c&2048){_i(t,n,i,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,N=g.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Z){Fe(n,n.return,Z)}}else _i(t,n,i,r);break;case 31:_i(t,n,i,r);break;case 13:_i(t,n,i,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&xu(E),g._visibility&2?_i(t,n,i,r):Go(t,n)):(l&&E!==null&&E.memoizedState!==null&&xu(n),g._visibility&2?_i(t,n,i,r):(g._visibility|=2,gs(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&ch(E,n);break;case 24:_i(t,n,i,r),c&2048&&fh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Gi(c.child,!0),Gi(n.child,!0))),_i(t,n,i,r);break;default:_i(t,n,i,r)}}function gs(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=i,N=r,Z=g.flags;switch(g.tag){case 0:case 11:case 15:gs(c,g,E,N,l),Bo(8,g);break;case 23:break;case 22:var ot=g.stateNode;g.memoizedState!==null?ot._visibility&2?gs(c,g,E,N,l):Go(c,g):(ot._visibility|=2,gs(c,g,E,N,l)),l&&Z&2048&&ch(g.alternate,g);break;case 24:gs(c,g,E,N,l),l&&Z&2048&&fh(g.alternate,g);break;default:gs(c,g,E,N,l)}n=n.sibling}}function Go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Go(i,r),l&2048&&ch(r.alternate,r);break;case 24:Go(i,r),l&2048&&fh(r.alternate,r);break;default:Go(i,r)}n=n.sibling}}var Cr=8192;function wr(t,n,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)U_(t,n,i),t=t.sibling}function U_(t,n,i){switch(t.tag){case 26:wr(t,n,i),t.flags&Cr&&(t.memoizedState!==null?mM(i,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&B0(i,t)));break;case 5:wr(t,n,i),t.flags&Cr&&(t=t.stateNode,(n&335544128)===n&&B0(i,t));break;case 3:case 4:var r=Ti;Ti=Zo(t.stateNode.containerInfo),wr(t,n,i),Ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(t,n,i),Cr=r):wr(t,n,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}wr(t,n,i);break;default:wr(t,n,i)}}function N_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Mn=r,O_(r,t)}N_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)L_(t),t=t.sibling}function L_(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Eu(t)):Vo(t);break;default:Vo(t)}}function Eu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Mn=r,O_(r,t)}N_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Eu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Eu(n));break;default:Eu(n)}t=t.sibling}}function O_(t,n){for(;Mn!==null;){var i=Mn;switch(i.tag){case 0:case 11:case 15:Ba(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Mn=r;else t:for(i=t;Mn!==null;){r=Mn;var l=r.sibling,c=r.return;if(E_(r),r===i){Mn=null;break t}if(l!==null){l.return=c,Mn=l;break t}Mn=c}}}var cy={getCacheForType:function(t){var n=Tn(un),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Tn(un).controller.signal}},fy=typeof WeakMap=="function"?WeakMap:Map,ze=0,We=null,xe=null,Me=0,Be=0,ni=null,Ha=!1,_s=!1,hh=!1,da=0,sn=0,Ga=0,Dr=0,Tu=0,ii=0,vs=0,Xo=null,Zn=null,dh=!1,bu=0,z_=0,Au=1/0,Ru=null,Va=null,nn=0,Ai=null,Ur=null,qi=0,ph=0,mh=null,P_=null,xs=null,Ss=null,ys=null,ko=0,Cu=null;function ai(){return(ze&2)!==0&&Me!==0?Me&-Me:Et.T!==null?bh():At()}function I_(){if(ii===0)if((Me&536870912)===0||_e){var t=ta;ta<<=1,(ta&3932160)===0&&(ta=262144),ii=t}else ii=536870912;return t=bn.current,t!==null&&(t.flags|=32),ii}function Ms(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=_0(ia(t.memoizedProps,i))),Ss===null&&(Ss=[]),Ss.push(n.bind(null,r))}}function Kn(t,n,i){(t===We&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(Es(t,0),Xa(t,Me,ii,!1)),hr(t,i),((ze&2)===0||t!==We)&&(t===We&&((ze&2)===0&&(Dr|=i),sn===4&&Xa(t,Me,ii,!1)),Yi(t))}function B_(t,n,i){if((ze&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ea(t,n),l=r?py(t,n):_h(t,n,!0),c=r;do{if(l===0){_s&&!r&&Xa(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!hy(i)){l=_h(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;l=Xo;var N=E.current.memoizedState.isDehydrated;if(N&&(Es(E,g).flags|=256),g=_h(E,g,!1),g!==2&&g!==6){if(hh&&!N){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Es(t,0),Xa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Xa(r,n,ii,!Ha);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=bu+300-H(),10<l)){if(Xa(r,n,ii,!Ha),fr(r,0,!0)!==0)break t;qi=n,r.timeoutHandle=Ph(F_.bind(null,r,i,Zn,Ru,dh,n,ii,Dr,vs,Ha,c,"Throttled",-0,0),l);break t}F_(r,i,Zn,Ru,dh,n,ii,Dr,vs,Ha,c,null,-0,0)}}break}while(!0);Yi(t)}function F_(t,n,i,r,l,c,g,E,N,Z,ot,gt,Y,et){t.timeoutHandle=-1;var Nt=n.subtreeFlags,Yt=(c&335544064)===c;if(gt=null,(Yt||Nt&8192||(Nt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ei=null,U_(n,c,gt),Yt&&(Nt=gt,Yt=t.containerInfo,Yt=(Yt.nodeType===9?Yt:Yt.ownerDocument).__reactViewTransition,Yt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=Jo.bind(Nt),Yt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?bu-H():(c&4194048)===c?z_-H():0,Nt=gM(gt,Nt),Nt!==null)){qi=c,t.cancelPendingCommit=Nt(W_.bind(null,t,n,c,i,r,l,g,E,N,Z,ot,gt,null,Y,et)),Xa(t,c,g,!Z);return}W_(t,n,c,i,r,l,g,E,N,Z,ot,gt)}function hy(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!$n(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,i,r){n=bl(t,n),n&=~Tu,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Un(l),g=1<<c;r[c]=-1,l&=~g}i!==0&&A(t,i,n)}function wu(){return(ze&6)===0?(qo(0),!1):!0}function gh(){if(xe!==null){if(Be===0)var t=xe.return;else t=xe,oa=vr=null,Tf(t),us=null,Co=0,t=xe;for(;t!==null;)l_(t.alternate,t),t=t.return;xe=null}}function Es(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Py(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),qi=0,gh(),We=t,xe=i=ra(t.current,null),Me=n,Be=0,ni=null,Ha=!1,_s=Ea(t,n),hh=!1,vs=ii=Tu=Dr=Ga=sn=0,Zn=Xo=null,dh=!1,da=bl(t,n),Il(),i}function H_(t,n){fe=null,Et.H=lu,n===ls||n===jl?(n=Wm(),Be=3):n===ff?(n=Wm(),Be=4):Be=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xe===null&&(sn=1,uu(t,di(n,t.current)))}function G_(){var t=bn.current;return t===null?!0:(Me&4194048)===Me?Ln===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Ln:!1}function V_(){var t=Et.H;return Et.H=lu,t===null?lu:t}function X_(){var t=Et.A;return Et.A=cy,t}function Du(){sn=4,Ha||(Me&4194048)!==Me&&bn.current!==null||(_s=!0),(Ga&134217727)===0&&(Dr&134217727)===0||We===null||Xa(We,Me,ii,!1)}function _h(t,n,i){var r=ze;ze|=2;var l=V_(),c=X_();(We!==t||Me!==n)&&(Ru=null,Es(t,n)),n=!1;var g=sn;t:do try{if(Be!==0&&xe!==null){var E=xe,N=ni;switch(Be){case 8:gh(),g=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var Z=Be;if(Be=0,ni=null,Ts(t,E,N,Z),i&&_s){g=0;break t}break;default:Z=Be,Be=0,ni=null,Ts(t,E,N,Z)}}dy(),g=sn;break}catch(ot){H_(t,ot)}while(!0);return n&&t.shellSuspendCounter++,oa=vr=null,ze=r,Et.H=l,Et.A=c,xe===null&&(We=null,Me=0,Il()),g}function dy(){for(;xe!==null;)k_(xe)}function py(t,n){var i=ze;ze|=2;var r=V_(),l=X_();We!==t||Me!==n?(Ru=null,Au=H()+500,Es(t,n)):_s=Ea(t,n);t:do try{if(Be!==0&&xe!==null){n=xe;var c=ni;e:switch(Be){case 1:Be=0,ni=null,Ts(t,n,c,1);break;case 2:case 9:if(qm(c)){Be=0,ni=null,q_(n);break}n=function(){Be!==2&&Be!==9||We!==t||(Be=7),Yi(t)},c.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:qm(c)?(Be=0,ni=null,q_(n)):(Be=0,ni=null,Ts(t,n,c,7));break;case 5:var g=null;switch(xe.tag){case 26:g=xe.memoizedState;case 5:case 27:var E=xe;if(g?P0(g):E.stateNode.complete){Be=0,ni=null;var N=E.sibling;if(N!==null)xe=N;else{var Z=E.return;Z!==null?(xe=Z,Uu(Z)):xe=null}break e}}Be=0,ni=null,Ts(t,n,c,5);break;case 6:Be=0,ni=null,Ts(t,n,c,6);break;case 8:gh(),sn=6;break t;default:throw Error(s(462))}}my();break}catch(ot){H_(t,ot)}while(!0);return oa=vr=null,Et.H=r,Et.A=l,ze=i,xe!==null?0:(We=null,Me=0,Il(),sn)}function my(){for(;xe!==null&&!zt();)k_(xe)}function k_(t){var n=s_(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?Uu(t):xe=n}function q_(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=$g(i,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=$g(i,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Tf(n);var r=n;r===Sn&&(_e?(Xl(r),r.tag===5&&r.stateNode!=null&&(Ke=r.stateNode)):(Xl(r),_e=!0));default:l_(i,n),n=xe=Om(n,da),n=s_(i,n,da)}t.memoizedProps=t.pendingProps,n===null?Uu(t):xe=n}function Ts(t,n,i,r){oa=vr=null,Tf(n),us=null,Co=0;var l=n.return;try{if(ny(t,l,n,i,Me)){sn=1,uu(t,di(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;sn=1,uu(t,di(i,t.current)),xe=null;return}n.flags&32768?(_e||r===1?t=!0:_s||(Me&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=bn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Y_(n,t)):Uu(n)}function Uu(t){var n=t;do{if((n.flags&32768)!==0){Y_(n,Ha);return}t=n.return;var i=sy(n.alternate,n,da);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);sn===0&&(sn=5)}function Y_(t,n){do{var i=oy(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);sn=6,xe=null}function W_(t,n,i,r,l,c,g,E,N,Z,ot,gt){t.cancelPendingCommit=null;do Nu();while(nn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===We&&(xe=We=null,Me=0),Ur=n,Ai=t,qi=i,mh=l,P_=r,gy(t,n,i,g,E,N,gt)}}function gy(t,n,i,r,l,c,g){var E=n.lanes|n.childLanes;if(ph=E,E|=Qc,Cc(t,i,E,r,l,c),Ss=null,(i&335544064)===i?(ys=kS(t),r=10262):(ys=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,My(Tt,function(){return yh(),null})):(t.callbackNode=null,t.callbackPriority=0),_u=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,l=Gt.p,Gt.p=2,c=ze,ze|=4;try{ly(t,n,i)}finally{ze=c,Gt.p=l,Et.T=r}}nn=1,_u?xs=Vy(g,t.containerInfo,ys,vh,xh,vy,Sh,yh,_y):(vh(),xh(),Sh())}function _y(t){if(nn!==0){var n=Ai.onRecoverableError;n(t,{componentStack:null})}}function vy(){nn===3&&(nn=0,w_(Ur,Ai),nn=4)}function vh(){if(nn===1){nn=0;var t=Ai,n=Ur,i=qi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var l=Gt.p;Gt.p=2;var c=ze;ze|=4;try{Ho=Su=!1,R_(n,t,i),i=Lh;var g=Tm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(g!==E&&E&&E.ownerDocument&&Em(E.ownerDocument.documentElement,E)){if(N!==null&&Yc(E)){var Z=N.start,ot=N.end;if(ot===void 0&&(ot=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(ot,E.value.length);else{var gt=E.ownerDocument||document,Y=gt&&gt.defaultView||window;if(Y.getSelection){var et=Y.getSelection(),Nt=E.textContent.length,Yt=Math.min(N.start,Nt),he=N.end===void 0?Yt:Math.min(N.end,Nt);!et.extend&&Yt>he&&(g=he,he=Yt,Yt=g);var W=Mm(E,Yt),F=Mm(E,he);if(W&&F&&(et.rangeCount!==1||et.anchorNode!==W.node||et.anchorOffset!==W.offset||et.focusNode!==F.node||et.focusOffset!==F.offset)){var $=gt.createRange();$.setStart(W.node,W.offset),et.removeAllRanges(),Yt>he?(et.addRange($),et.extend(F.node,F.offset)):($.setEnd(F.node,F.offset),et.addRange($))}}}}for(gt=[],et=E;et=et.parentNode;)et.nodeType===1&&gt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ns=!!Nh,Lh=Nh=null}finally{ze=c,Gt.p=l,Et.T=r}}t.current=n,nn=2}}function xh(){if(nn===2){nn=0;var t=Ai,n=Ur,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Et.T,Et.T=null;var r=Gt.p;Gt.p=2;var l=ze;ze|=4;try{y_(t,n.alternate,n)}finally{ze=l,Gt.p=r,Et.T=i}}nn=3}}function Sh(){if(nn===4||nn===3){nn=0;var t=xs;xs=null,ce();var n=Ai,i=Ur,r=qi,l=P_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?nn=5:(nn=0,Ur=Ai=null,j_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Va=null),J(r),i=i.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Et.T,c=Gt.p,Gt.p=2,Et.T=null;try{for(var g=n.onRecoverableError,E=0;E<l.length;E++){var N=l[E];g(N.value,{componentStack:N.stack})}}finally{Et.T=i,Gt.p=c}}if(l=Ss,g=ys,ys=null,l!==null&&(Ss=null,g===null&&(g=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(g),i!==void 0&&t.finished.finally(i);(qi&3)!==0&&Nu(),Yi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Cu?ko++:(ko=0,Cu=n):(ko=0,Cu=null),qo(0)}}function j_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,bo(n)))}function Nu(){return xs!==null&&(xs.skipTransition(),xs=null),vh(),xh(),Sh(),yh()}function yh(){if(nn!==5)return!1;var t=Ai,n=ph;ph=0;var i=J(qi),r=Et.T,l=Gt.p;try{Gt.p=32>i?32:i,Et.T=null,i=mh,mh=null;var c=Ai,g=qi;if(nn=0,Ur=Ai=null,qi=0,(ze&6)!==0)throw Error(s(331));var E=ze;if(ze|=4,L_(c.current),D_(c,c.current,g,i),ze=E,qo(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Gt.p=l,Et.T=r,j_(t,n)}}function Z_(t,n,i){n=di(i,n),n=Bf(t.stateNode,n,2),t=Oa(t,n,2),t!==null&&(hr(t,2),Yi(t))}function Fe(t,n,i){if(t.tag===3)Z_(t,t,i);else for(;n!==null;){if(n.tag===3){Z_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=di(i,t),i=qg(2),r=Oa(n,i,2),r!==null&&(Yg(i,r,n,t),hr(r,2),Yi(r));break}}n=n.return}}function Mh(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new fy;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(hh=!0,l.add(i),t=xy.bind(null,t,n,i),n.then(t,t))}function xy(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,We===t&&(Me&i)===i&&((sn===4||sn===3&&(Me&62914560)===Me&&300>H()-bu)&&(ze&2)===0?Es(t,0):Tu|=i,vs===Me&&(vs=0)),Yi(t)}function K_(t,n){n===0&&(n=Al()),t=mr(t,n),t!==null&&(hr(t,n),Yi(t))}function Sy(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),K_(t,i)}function yy(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),K_(t,i)}function My(t,n){return ie(t,n)}var bs=null,As=null,Eh=!1,Lu=!1,Th=!1,ka=0;function Yi(t){t!==As&&t.next===null&&(As===null?bs=As=t:As=As.next=t),Lu=!0,Eh||(Eh=!0,Ty())}function qo(t,n){if(!Th&&Lu){Th=!0;do for(var i=!1,r=bs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=l&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,t0(r,c))}else c=Me,c=fr(r,r===We?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ea(r,c)||(i=!0,t0(r,c));r=r.next}while(i);Th=!1}}function Ey(){Q_()}function Q_(){Lu=Eh=!1;var t=0;ka!==0&&zy()&&(t=ka);for(var n=H(),i=null,r=bs;r!==null;){var l=r.next,c=J_(r,n);c===0?(r.next=null,i===null?bs=l:i.next=l,l===null&&(As=i)):(i=r,(t!==0||(c&3)!==0)&&(Lu=!0)),r=l}nn!==0&&nn!==5||qo(t),ka!==0&&(ka=0)}function J_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Un(c),E=1<<g,N=l[g];N===-1?((E&i)===0||(E&r)!==0)&&(l[g]=Rc(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=We,i=Me,i=fr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ea(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),J(i)){case 2:case 8:i=Xt;break;case 32:i=Tt;break;case 268435456:i=Wt;break;default:i=Tt}return r=$_.bind(null,t),i=ie(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function $_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Nu()&&t.callbackNode!==i)return null;var r=Me;return r=fr(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(B_(t,r,n),J_(t,H()),t.callbackNode!=null&&t.callbackNode===i?$_.bind(null,t):null)}function t0(t,n){if(Nu())return null;B_(t,n,!0)}function Ty(){Iy(function(){(ze&6)!==0?ie(Ut,Ey):Q_()})}function bh(){if(ka===0){var t=yr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),ka=t}return ka}function e0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(t)}function by(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=e0((l[qt]||null).action),g=r.submitter;g&&(n=(n=g[qt]||null)?e0(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Ll("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var N=new FormData(l,g);Lf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,g),Lf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Ah=0;Ah<Kc.length;Ah++){var Rh=Kc[Ah],Ay=Rh.toLowerCase(),Ry=Rh[0].toUpperCase()+Rh.slice(1);Mi(Ay,"on"+Ry)}Mi(Rm,"onAnimationEnd"),Mi(Cm,"onAnimationIteration"),Mi(wm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(PS,"onTransitionRun"),Mi(IS,"onTransitionStart"),Mi(BS,"onTransitionCancel"),Mi(Dm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function n0(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],N=E.instance,Z=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(ot){Pl(ot)}l.currentTarget=null,c=N}else for(g=0;g<r.length;g++){if(E=r[g],N=E.instance,Z=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(ot){Pl(ot)}l.currentTarget=null,c=N}}}}function Se(t,n){var i=n[$t];i===void 0&&(i=n[$t]=new Set);var r=t+"__bubble";i.has(r)||(i0(n,t,2,!1),i.add(r))}function Ch(t,n,i){var r=0;n&&(r|=4),i0(i,t,r,n)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function wh(t){if(!t[Ou]){t[Ou]=!0,Ze.forEach(function(i){i!=="selectionchange"&&(Cy.has(i)||Ch(i,!1,t),Ch(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ou]||(n[Ou]=!0,Ch("selectionchange",!1,n))}}function i0(t,n,i,r){switch(Y0(n)){case 2:var l=SM;break;case 8:l=yM;break;default:l=Zh}i=l.bind(null,n,i,t),l=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Dh(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=r.return;g!==null;){var N=g.tag;if((N===3||N===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=Oe(E),g===null)return;if(N=g.tag,N===5||N===6||N===26||N===27){r=c=g;continue t}E=E.parentNode}}r=r.return}im(function(){var Z=c,ot=Oc(i),gt=[];t:{var Y=Um.get(t);if(Y!==void 0){var et=Ll,Nt=t;switch(t){case"keypress":if(Ul(i)===0)break t;case"keydown":case"keyup":et=hS;break;case"focusin":Nt="focus",et=Hc;break;case"focusout":Nt="blur",et=Hc;break;case"beforeblur":case"afterblur":et=Hc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=_S;break;case Rm:case Cm:case wm:et=iS;break;case Dm:et=xS;break;case"scroll":case"scrollend":et=Jx;break;case"wheel":et=yS;break;case"copy":case"cut":case"paste":et=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=lm;break;case"submit":et=mS;break;case"toggle":case"beforetoggle":et=ES}var Yt=(n&4)!==0,he=!Yt&&(t==="scroll"||t==="scrollend"),W=Yt?Y!==null?Y+"Capture":null:Y;Yt=[];for(var F=Z,$;F!==null;){var pt=F;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||W===null||(pt=po(F,W),pt!=null&&Yt.push(Wo(F,pt,$))),he)break;F=F.return}0<Yt.length&&(Y=new et(Y,Nt,null,i,ot),gt.push({event:Y,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",et&&i!==Lc&&(Nt=i.relatedTarget||i.fromElement)&&(Oe(Nt)||Nt[ee]))break t;(Y||et)&&(Nt=ot.window===ot?ot:(et=ot.ownerDocument)?et.defaultView||et.parentWindow:window,Y?(et=i.relatedTarget||i.toElement,Y=Z,et=et?Oe(et):null,et!==null&&(he=f(et),Yt=et.tag,et!==he||Yt!==5&&Yt!==27&&Yt!==6)&&(et=null)):(Y=null,et=Z),Y!==et&&(Yt=sm,pt="onMouseLeave",W="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=lm,pt="onPointerLeave",W="onPointerEnter",F="pointer"),he=Y==null?Nt:mn(Y),$=et==null?Nt:mn(et),Nt=new Yt(pt,F+"leave",Y,i,ot),Nt.target=he,Nt.relatedTarget=$,pt=null,Oe(ot)===Z&&(Yt=new Yt(W,F+"enter",et,i,ot),Yt.target=$,Yt.relatedTarget=he,pt=Yt),he=pt,Yt=Y&&et?B(Y,et,wy):null,Y!==null&&a0(gt,Nt,Y,Yt,!1),et!==null&&he!==null&&a0(gt,he,et,Yt,!0)))}t:{if(Y=Z?mn(Z):window,et=Y.nodeName&&Y.nodeName.toLowerCase(),et==="select"||et==="input"&&Y.type==="file")var Vt=gm;else if(pm(Y))if(_m)Vt=LS;else{Vt=US;var Ee=DS}else et=Y.nodeName,!et||et.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Z&&Nc(Z.elementType)&&(Vt=gm):Vt=NS;if(Vt&&(Vt=Vt(t,Z))){mm(gt,Vt,i,ot);break t}Ee&&Ee(t,Y,Z)}switch(Ee=Z?mn(Z):window,t){case"focusin":(pm(Ee)||Ee.contentEditable==="true")&&(ts=Ee,Wc=Z,Mo=null);break;case"focusout":Mo=Wc=ts=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,bm(gt,i,ot);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":bm(gt,i,ot)}var Jt;if(Vc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else $r?hm(t,i)&&(re="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&(um&&i.locale!=="ko"&&($r||re!=="onCompositionStart"?re==="onCompositionEnd"&&$r&&(Jt=am()):(ba=ot,Ic="value"in ba?ba.value:ba.textContent,$r=!0)),Ee=zu(Z,re),0<Ee.length&&(re=new om(re,t,null,i,ot),gt.push({event:re,listeners:Ee}),Jt?re.data=Jt:(Jt=dm(i),Jt!==null&&(re.data=Jt)))),(Jt=bS?AS(t,i):RS(t,i))&&(re=zu(Z,"onBeforeInput"),0<re.length&&(Ee=new om("onBeforeInput","beforeinput",null,i,ot),gt.push({event:Ee,listeners:re}),Ee.data=Jt)),by(gt,t,Z,i,ot)}n0(gt,n)})}function Wo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function zu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=po(t,i),l!=null&&r.unshift(Wo(t,l,c)),l=po(t,n),l!=null&&r.push(Wo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function wy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a0(t,n,i,r,l){for(var c=n._reactName,g=[];i!==null&&i!==r;){var E=i,N=E.alternate,Z=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||Z===null||(N=Z,l?(Z=po(i,c),Z!=null&&g.unshift(Wo(i,Z,N))):l||(Z=po(i,c),Z!=null&&g.push(Wo(i,Z,N)))),i=i.return}g.length!==0&&t.push({event:n,listeners:g})}var Dy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function r0(t){return(typeof t=="string"?t:""+t).replace(Dy,`
`).replace(Uy,"")}function s0(t,n){return n=r0(n),r0(t)===n}function He(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Kr(t,""+r);else return;break;case"className":Cl(t,"class",r);break;case"tabIndex":Cl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(t,i,r);break;case"style":em(t,r,c);return;case"data":if(n!=="object"){Cl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=wl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&He(t,n,"name",l.name,l,null),He(t,n,"formEncType",l.formEncType,l,null),He(t,n,"formMethod",l.formMethod,l,null),He(t,n,"formTarget",l.formTarget,l,null)):(He(t,n,"encType",l.encType,l,null),He(t,n,"method",l.method,l,null),He(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=wl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Pi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=wl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),Rl(t,"popover",r);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Rl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Kx.get(i)||i,Rl(t,i,r);else return}Ue=!0}function Uh(t,n,i,r,l,c){switch(i){case"style":em(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")Kr(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Pi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[qt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Ue=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Rl(t,i,r)}return}Ue=!0}function Cn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var g=i[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,c,g,i,null)}}l&&He(t,n,"srcSet",i.srcSet,i,null),r&&He(t,n,"src",i.src,i,null);return;case"input":Se("invalid",t);var E=c=g=l=null,N=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var ot=i[r];if(ot!=null)switch(r){case"name":l=ot;break;case"type":g=ot;break;case"checked":N=ot;break;case"defaultChecked":Z=ot;break;case"value":c=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:He(t,n,r,ot,i,null)}}Qp(t,c,E,N,Z,g,l,!1);return;case"select":Se("invalid",t),r=g=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:He(t,n,l,E,i,null)}n=c,i=g,t.multiple=!!r,n!=null?Zr(t,!!r,n,!1):i!=null&&Zr(t,!!r,i,!0);return;case"textarea":Se("invalid",t),c=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(E=i[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,g,E,i,null)}$p(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,N,r,i,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<Yo.length;r++)Se(Yo[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,Z,r,i,null)}return;default:if(Nc(n)){for(ot in i)i.hasOwnProperty(ot)&&(r=i[ot],r!==void 0&&Uh(t,n,ot,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&He(t,n,E,r,i,null))}var Ny={};function Ly(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,E=null,N=null,Z=null,ot=null;for(et in i){var gt=i[et];if(i.hasOwnProperty(et)&&gt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":N=gt;default:r.hasOwnProperty(et)||He(t,n,et,null,r,gt)}}for(var Y in r){var et=r[Y];if(gt=i[Y],r.hasOwnProperty(Y)&&(et!=null||gt!=null))switch(Y){case"type":et!==gt&&(Ue=!0),c=et;break;case"name":et!==gt&&(Ue=!0),l=et;break;case"checked":et!==gt&&(Ue=!0),Z=et;break;case"defaultChecked":et!==gt&&(Ue=!0),ot=et;break;case"value":et!==gt&&(Ue=!0),g=et;break;case"defaultValue":et!==gt&&(Ue=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==gt&&He(t,n,Y,et,r,gt)}}Dc(t,g,E,N,Z,ot,c,l);return;case"select":et=g=E=Y=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":et=N;default:r.hasOwnProperty(c)||He(t,n,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(Ue=!0),Y=c;break;case"defaultValue":c!==N&&(Ue=!0),E=c;break;case"multiple":c!==N&&(Ue=!0),g=c;default:c!==N&&He(t,n,l,c,r,N)}n=E,i=g,r=et,Y!=null?Zr(t,!!i,Y,!1):!!r!=!!i&&(n!=null?Zr(t,!!i,n,!0):Zr(t,!!i,i?[]:"",!1));return;case"textarea":et=Y=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,l)}for(g in r)if(l=r[g],c=i[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(Ue=!0),Y=l;break;case"defaultValue":l!==c&&(Ue=!0),et=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&He(t,n,g,l,r,c)}Jp(t,Y,et);return;case"option":for(var Nt in i)Y=i[Nt],i.hasOwnProperty(Nt)&&Y!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:He(t,n,Nt,null,r,Y));for(N in r)Y=r[N],et=i[N],r.hasOwnProperty(N)&&Y!==et&&(Y!=null||et!=null)&&(N==="selected"?(Y!==et&&(Ue=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol"):He(t,n,N,Y,r,et));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in i)Y=i[Yt],i.hasOwnProperty(Yt)&&Y!=null&&!r.hasOwnProperty(Yt)&&He(t,n,Yt,null,r,Y);for(Z in r)if(Y=r[Z],et=i[Z],r.hasOwnProperty(Z)&&Y!==et&&(Y!=null||et!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:He(t,n,Z,Y,r,et)}return;default:if(Nc(n)){for(var he in i)Y=i[he],i.hasOwnProperty(he)&&Y!==void 0&&!r.hasOwnProperty(he)&&Uh(t,n,he,void 0,r,Y);for(ot in r)Y=r[ot],et=i[ot],!r.hasOwnProperty(ot)||Y===et||Y===void 0&&et===void 0||Uh(t,n,ot,Y,r,et);return}}for(var W in i)Y=i[W],i.hasOwnProperty(W)&&Y!=null&&!r.hasOwnProperty(W)&&He(t,n,W,null,r,Y);for(gt in r)Y=r[gt],et=i[gt],!r.hasOwnProperty(gt)||Y===et||Y==null&&et==null||He(t,n,gt,Y,r,et)}function o0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Oy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,g=l.initiatorType,E=l.duration;if(c&&E&&o0(g)){for(g=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],Z=N.startTime;if(Z>E)break;var ot=N.transferSize,gt=N.initiatorType;ot&&o0(gt)&&(N=N.responseEnd,g+=ot*(N<E?1:(E-Z)/(N-Z)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nh=null,Lh=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function l0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function c0(t,n,i,r){return i=jo(i).createElement(t),i[Dt]=r,i[qt]=n,Cn(i,t,n),De(i),i}function Oh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zh=null;function zy(){var t=window.event;return t&&t.type==="popstate"?t===zh?!1:(zh=t,!0):(zh=null,!1)}var Ph=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,h0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ph,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(t){return f0.resolve(null).then(t).catch(By)}:Ph;function By(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function d0(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ls(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")kh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,kh(i);for(var c=i.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Le]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=g}}else i==="body"&&kh(t.ownerDocument.body);i=l}while(i);Ls(n)}function p0(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function m0(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function g0(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Fy(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ih(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return Fy(n,i,t)}function Hy(t){return t.documentElement.clientHeight}function Gy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Vy(t,n,i,r,l,c,g,E,N){var Z=n.nodeType===9?n:n.ownerDocument;try{var ot=Z.startViewTransition({update:function(){var Y=Z.defaultView,et=Y.navigation&&Y.navigation.transition,Nt=Z.fonts.status;r();var Yt=[];if(Nt==="loaded"&&(Hy(Z),Z.fonts.status==="loading"&&Yt.push(Z.fonts.ready)),Nt=Yt.length,t!==null)for(var he=t.suspenseyImages,W=0,F=0;F<he.length;F++){var $=he[F];if(!$.complete){var pt=$.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(W+=I0($),W>Bu){Yt.length=Nt;break}$=new Promise(Gy.bind($)),Yt.push($)}}}if(0<Yt.length)return Y=Promise.race([Promise.all(Yt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(l,l),(et?Promise.allSettled([et.finished,Y]):Y).then(c,c);if(l(),et)return et.finished.then(c,c);c()},types:i});Z.__reactViewTransition=ot;var gt=[];return ot.ready.then(function(){for(var Y=Z.documentElement.getAnimations({subtree:!0}),et=0;et<Y.length;et++){var Nt=Y[et],Yt=Nt.effect,he=Yt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){gt.push(Nt),Nt=Yt.getKeyframes();for(var W=he=void 0,F=!0,$=0;$<Nt.length;$++){var pt=Nt[$],Vt=pt.width;if(he===void 0)he=Vt;else if(he!==Vt){F=!1;break}if(Vt=pt.height,W===void 0)W=Vt;else if(W!==Vt){F=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}F&&he!==void 0&&W!==void 0&&(Yt.setKeyframes(Nt),F=getComputedStyle(Yt.target,Yt.pseudoElement),F.width!==he||F.height!==W)&&(F=Nt[0],F.width=he,F.height=W,F=Nt[Nt.length-1],F.width=he,F.height=W,Yt.setKeyframes(Nt))}}g()},function(Y){Z.__reactViewTransition===ot&&(Z.__reactViewTransition=null);try{typeof Y=="object"&&Y!==null&&Y.name==="InvalidStateError"&&(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null),Y!==null&&N(Y)}finally{r(),l(),g()}}),ot.finished.finally(function(){for(var Y=0;Y<gt.length;Y++)gt[Y].cancel();Z.__reactViewTransition===ot&&(Z.__reactViewTransition=null),E()}),ot}catch{return r(),l(),g(),null}}function Nr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Nr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Nr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function _0(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(x0(c,t,n,i)===-1){var g=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){g.removeEventListener(t,n,i),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Rs(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Xy,t,E,r)}this._eventListeners=c}};function Xy(t,n,i,r){return y(t).addEventListener(n,i,r),!1}ri.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=x0(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Rs(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,ky,t,i,l),r.splice(n,1),c!==null&&c()}};function ky(t,n,i,r){return y(t).removeEventListener(n,i,r),!1}function Rs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function v0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function x0(t,n,i,r){if(t.length===0)return-1;r=v0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&v0(c.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Rs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Rs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){p(this._fragmentFiber.child,!0,S0,t,void 0,void 0)};function S0(t,n){return t.tag===6?!1:(t=y(t),nM(t,n))}ri.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Bh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!S0(n[i],t);i--);};function Bh(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=jo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,qy,t,void 0,void 0))};function qy(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Yy,t,void 0,void 0)};function Yy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,Wy,t,void 0,void 0);for(var i=n=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ri[n++]=r}Ri.length=n}};function Wy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ri=[],Fh=!1;function jy(t,n,i){Ri.push({fragmentInstance:t,observer:n,instance:i}),Fh||(Fh=!0,iM(function(){Fh=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Zy,t,void 0,void 0),t};function Zy(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,Bh,i,void 0,void 0);var r=y(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ky(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ky(t,n,i,r,l){var c=Oe(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=B(i,c,G),n===null?n=!1:(p(n,!0,O,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=B(r,c,G),n===null?n=!1:(p(n,!0,D,c,r),c=x,I=x=null,n=c!==null)),n):!1}function y0(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Bh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),y0(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),y0(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Qy(t,n){return t=y(t),M0(t,n),!1}function M0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function E0(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var g=0,E=0;E<Ri.length;E++){var N=Ri[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Ri[g++]=N)}Ri.length=g,c.observe(t)}),M0(t,n))}function Jy(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?jy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Hh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Hh(i),te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function $y(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function tM(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function T0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Gh(t){return t.data==="$?"||t.data==="$~"}function Vh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eM(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Xh=null;function b0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return vi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function A0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function nM(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function iM(t){h0(function(){h0(function(n){return t(n)})})}function R0(t,n,i){switch(n=jo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function C0(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&He(t,n,r,null,Ny,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Pi&&(t.onclick=null),te(t)}function kh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var xi=new Map,w0=new Set;function Zo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var pa=Gt.d;Gt.d={f:aM,r:rM,D:sM,C:oM,L:lM,m:uM,X:fM,S:cM,M:hM};function aM(){var t=pa.f(),n=wu();return t||n}function rM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Ug(n):pa.r(t)}var Cs=typeof document>"u"?null:document;function D0(t,n,i){var r=Cs;if(r&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),w0.has(l)||(w0.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Cn(n,"link",t),De(n),r.head.appendChild(n)))}}function sM(t){pa.D(t),D0("dns-prefetch",t,null)}function oM(t,n){pa.C(t,n),D0("preconnect",t,n)}function lM(t,n,i){pa.L(t,n,i);var r=Cs;if(r&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=ws(t);break;case"script":c=Ds(t)}if(!(xi.has(c)||(t=P({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),xi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ko(c))||n==="script"&&r.querySelector(Qo(c))))){var g=r.createElement("link");Cn(g,"link",t),n==="style"&&(g[we]=!0,g.onload=g.onerror=function(){Ta(g)}),De(g),r.head.appendChild(g)}}}function uM(t,n){pa.m(t,n);var i=Cs;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ds(t)}if(!xi.has(c)&&(t=P({rel:"modulepreload",href:t},n),xi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Qo(c)))return}r=i.createElement("link"),Cn(r,"link",t),De(r),i.head.appendChild(r)}}}function cM(t,n,i){pa.S(t,n,i);var r=Cs;if(r&&t){var l=Qn(r).hoistableStyles,c=ws(t);n=n||"default";var g=l.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Ko(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},i),(i=xi.get(c))&&qh(t,i);var N=g=r.createElement("link");De(N),Cn(N,"link",t),N._p=new Promise(function(Z,ot){N.onload=Z,N.onerror=ot}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Pu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(c,g)}}}function fM(t,n){pa.X(t,n);var i=Cs;if(i&&t){var r=Qn(i).hoistableScripts,l=Ds(t),c=r.get(l);c||(c=i.querySelector(Qo(l)),c||(t=P({src:t,async:!0},n),(n=xi.get(l))&&Yh(t,n),c=i.createElement("script"),De(c),Cn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function hM(t,n){pa.M(t,n);var i=Cs;if(i&&t){var r=Qn(i).hoistableScripts,l=Ds(t),c=r.get(l);c||(c=i.querySelector(Qo(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&Yh(t,n),c=i.createElement("script"),De(c),Cn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function U0(t,n,i,r){var l=(l=Ye.current)?Zo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=ws(i.href),n=Qn(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ws(i.href);var c=Qn(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(Ko(t)))?c._p||(g.instance=c,g.state.loading=5):(c=xi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},xi.set(t,c)),dM(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Ds(i),n=Qn(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ws(t){return'href="'+fi(t)+'"'}function Ko(t){return'link[rel="stylesheet"]['+t+"]"}function N0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function dM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Ta.bind(null,n),Cn(n,"link",i),De(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ds(t){return'[src="'+fi(t)+'"]'}function Qo(t){return"script[async]"+t}function L0(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return n.instance=r,De(r),r;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),De(r),Cn(r,"style",l),Pu(r,i.precedence,t),n.instance=r;case"stylesheet":l=ws(i.href);var c=t.querySelector(Ko(l));if(c)return n.state.loading|=4,n.instance=c,De(c),c;r=N0(i),(l=xi.get(l))&&qh(r,l),c=(t.ownerDocument||t).createElement("link"),De(c);var g=c;return g._p=new Promise(function(E,N){g.onload=E,g.onerror=N}),Cn(c,"link",r),n.state.loading|=4,Pu(c,i.precedence,t),n.instance=c;case"script":return c=Ds(i.src),(l=t.querySelector(Qo(c)))?(n.instance=l,De(l),l):(r=i,(l=xi.get(c))&&(r=P({},i),Yh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),De(l),Cn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Pu(r,i.precedence,t));return n.instance}function Pu(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Iu=null;function O0(t,n,i){if(Iu===null){var r=new Map,l=Iu=new Map;l.set(i,r)}else l=Iu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Le]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function Wh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function pM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function P0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function I0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function B0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=I0(n),t.suspenseyImages.push(n)),t=_M.bind(t),n.decode().then(t,t))}function mM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ws(r.href),c=n.querySelector(Ko(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,De(c);return}c=n.ownerDocument||n,r=N0(r),(l=xi.get(l))&&qh(r,l),c=c.createElement("link"),De(c);var g=c;g._p=new Promise(function(E,N){g.onload=E,g.onerror=N}),Cn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Jo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Bu=0;function gM(t,n){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Bu===0&&(Bu=62500*Oy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Bu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function F0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Jo(){this.count--,F0(this)}function _M(){this.imgCount--,F0(this)}var Fu=null;function Hu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,n.forEach(vM,t),Fu=null,Jo.call(t))}function vM(t,n){if(!(n.state.loading&4)){var i=Fu.get(t);if(i)var r=i.get(null);else{i=new Map,Fu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=i.get(g)||r,c===r&&i.set(null,l),i.set(g,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Us={$$typeof:ut,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function xM(t,n,i,r,l,c,g,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function H0(t,n,i,r,l,c,g,E,N,Z,ot,gt){return t=new xM(t,n,i,g,N,Z,ot,gt,E),n=1,c===!0&&(n|=24),c=Yn(3,null,null,n),t.current=c,c.stateNode=t,n=lf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},hf(c),t}function G0(t){return t?(t=is,t):is}function V0(t,n,i,r,l,c){l=G0(l),r.context===null?r.context=l:r.pendingContext=l,r=La(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Oa(t,r,n),i!==null&&(Kn(i,t,n),wo(i,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function jh(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function k0(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Kn(n,t,67108864),jh(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=ai();n=ct(n);var i=mr(t,n);i!==null&&Kn(i,t,n),jh(t,n)}}var Ns=!0;function SM(t,n,i,r){var l=Et.T;Et.T=null;var c=Gt.p;try{Gt.p=2,Zh(t,n,i,r)}finally{Gt.p=c,Et.T=l}}function yM(t,n,i,r){var l=Et.T;Et.T=null;var c=Gt.p;try{Gt.p=8,Zh(t,n,i,r)}finally{Gt.p=c,Et.T=l}}function Zh(t,n,i,r){if(Ns){var l=Kh(r);if(l===null)Dh(t,n,r,Gu,i),W0(t,r);else if(EM(l,t,n,i,r))r.stopPropagation();else if(W0(t,r),n&4&&-1<MM.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ci(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var N=1<<31-Un(g);E.entanglements[1]|=N,g&=~N}Yi(c),(ze&6)===0&&(Au=H()+500,qo(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&Kn(E,c,2),wu(),jh(c,2)}if(c=Kh(r),c===null&&Dh(t,n,r,Gu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Dh(t,n,r,null,i)}}function Kh(t){return t=Oc(t),Qh(t)}var Gu=null;function Qh(t){if(Gu=null,t=Oe(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===31){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gu=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ut:return 2;case Xt:return 8;case Tt:case xt:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Jh=!1,Ya=null,Wa=null,ja=null,$o=new Map,tl=new Map,Za=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function el(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ge(n),n!==null&&k0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function EM(t,n,i,r,l){switch(n){case"focusin":return Ya=el(Ya,t,n,i,r,l),!0;case"dragenter":return Wa=el(Wa,t,n,i,r,l),!0;case"mouseover":return ja=el(ja,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return $o.set(c,el($o.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,tl.set(c,el(tl.get(c)||null,t,n,i,r,l)),!0}return!1}function j0(t){var n=Oe(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){q0(i)});return}}else if(n===31){if(n=h(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){q0(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Kh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Lc=r,i.target.dispatchEvent(r),Lc=null}else return n=ge(i),n!==null&&k0(n),t.blockedOn=i,!1;n.shift()}return!0}function Z0(t,n,i){Vu(t)&&i.delete(n)}function TM(){Jh=!1,Ya!==null&&Vu(Ya)&&(Ya=null),Wa!==null&&Vu(Wa)&&(Wa=null),ja!==null&&Vu(ja)&&(ja=null),$o.forEach(Z0),tl.forEach(Z0)}function Xu(t,n){t.blockedOn===n&&(t.blockedOn=null,Jh||(Jh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TM)))}var ku=null;function K0(t){ku!==t&&(ku=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ku===t&&(ku=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Qh(r||i)===null)continue;break}var c=ge(i);c!==null&&(t.splice(n,3),n-=3,Lf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ls(t){function n(N){return Xu(N,t)}Ya!==null&&Xu(Ya,t),Wa!==null&&Xu(Wa,t),ja!==null&&Xu(ja,t),$o.forEach(n),tl.forEach(n);for(var i=0;i<Za.length;i++){var r=Za[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Za.length&&(i=Za[0],i.blockedOn===null);)j0(i),i.blockedOn===null&&Za.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],g=l[qt]||null;if(typeof c=="function")g||K0(i);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[qt]||null)E=g.formAction;else if(Qh(l)!==null)continue}else E=g.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),K0(i)}}}function Q0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function $h(t){this._internalRoot=t}qu.prototype.render=$h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ai();V0(i,r,t,n,null,null)},qu.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;V0(t.current,2,null,t,null,null),wu(),n[ee]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Za.length&&n!==0&&n<Za[i].priority;i++);Za.splice(i,0,t),i===0&&j0(t)}};var J0=e.version;if(J0!=="19.3.0")throw Error(s(527,J0,"19.3.0"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var bM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{ye=Yu.inject(bM),en=Yu}catch{}}return il.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Gg,c=Vg,g=Xg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=H0(t,1,!1,null,null,i,r,null,l,c,g,Q0),t[ee]=n.current,wh(t),new $h(n)},il.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Gg,g=Vg,E=Xg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),n=H0(t,1,!0,n,i??null,r,l,N,c,g,E,Q0),n.context=G0(null),i=n.current,r=ai(),r=ct(r),l=La(r),l.callback=null,Oa(i,l,r),i=r,n.current.lanes=i,hr(n,i),Yi(n),t[ee]=n.current,wh(t),new qu(n)},il.version="19.3.0",il}var lv;function zM(){if(lv)return ed.exports;lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=OM(),ed.exports}var PM=zM(),Ae=Np();const IM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dx=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();var BM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const FM=Ae.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:d,...h},_)=>Ae.createElement("svg",{ref:_,...BM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:dx("lucide",u),...h},[...d.map(([m,v])=>Ae.createElement(m,v)),...Array.isArray(f)?f:[f]]));const Pn=(o,e)=>{const a=Ae.forwardRef(({className:s,...u},f)=>Ae.createElement(FM,{ref:f,iconNode:e,className:dx(`lucide-${IM(o)}`,s),...u}));return a.displayName=`${o}`,a};const HM=Pn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const sd=Pn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const GM=Pn("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);const VM=Pn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const XM=Pn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const kM=Pn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);const qM=Pn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);const YM=Pn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const od=Pn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const WM=Pn("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);const uv=Pn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const jM=Pn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const ld=Pn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);const ZM=Pn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const KM=Pn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);const cv=Pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Lp="180",QM=0,fv=1,JM=2,px=1,$M=2,Sa=3,sr=0,kn=1,ya=2,ar=0,Js=1,hv=2,dv=3,pv=4,tE=5,Gr=100,eE=101,nE=102,iE=103,aE=104,rE=200,sE=201,oE=202,lE=203,Vd=204,Xd=205,uE=206,cE=207,fE=208,hE=209,dE=210,pE=211,mE=212,gE=213,_E=214,kd=0,qd=1,Yd=2,eo=3,Wd=4,jd=5,Zd=6,Kd=7,Op=0,vE=1,xE=2,rr=0,SE=1,yE=2,ME=3,mx=4,EE=5,TE=6,bE=7,gx=300,no=301,io=302,Qd=303,Jd=304,Tc=306,$d=1e3,Xr=1001,tp=1002,ui=1003,AE=1004,Wu=1005,ji=1006,ud=1007,kr=1008,Ji=1009,_x=1010,vx=1011,ml=1012,zp=1013,qr=1014,Zi=1015,yl=1016,Pp=1017,Ip=1018,gl=1020,xx=35902,Sx=35899,yx=1021,Mx=1022,Ni=1023,_l=1026,vl=1027,Bp=1028,Fp=1029,Ex=1030,Hp=1031,Gp=1033,gc=33776,_c=33777,vc=33778,xc=33779,ep=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37808,up=37809,cp=37810,fp=37811,hp=37812,dp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,Sp=37820,yp=37821,Mp=36492,Ep=36494,Tp=36495,bp=36283,Ap=36284,Rp=36285,Cp=36286,RE=3200,CE=3201,Vp=0,wE=1,ir="",yi="srgb",ao="srgb-linear",yc="linear",ke="srgb",Os=7680,mv=519,DE=512,UE=513,NE=514,Tx=515,LE=516,OE=517,zE=518,PE=519,gv=35044,_v="300 es",Ki=2e3,Mc=2001;class so{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vv=1234567;const hl=Math.PI/180,xl=180/Math.PI;function oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Te(o,e,a){return Math.max(e,Math.min(a,o))}function Xp(o,e){return(o%e+e)%e}function IE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function BE(o,e,a){return o!==e?(a-o)/(e-o):0}function dl(o,e,a){return(1-a)*o+a*e}function FE(o,e,a,s){return dl(o,e,1-Math.exp(-a*s))}function HE(o,e=1){return e-Math.abs(Xp(o,e*2)-e)}function GE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function VE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function XE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kE(o,e){return o+Math.random()*(e-o)}function qE(o){return o*(.5-Math.random())}function YE(o){o!==void 0&&(vv=o);let e=vv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WE(o){return o*hl}function jE(o){return o*xl}function ZE(o){return(o&o-1)===0&&o!==0}function KE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function QE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function JE(o,e,a,s,u){const f=Math.cos,d=Math.sin,h=f(a/2),_=d(a/2),m=f((e+s)/2),v=d((e+s)/2),p=f((e-s)/2),S=d((e-s)/2),M=f((s-e)/2),b=d((s-e)/2);switch(u){case"XYX":o.set(h*v,_*p,_*S,h*m);break;case"YZY":o.set(_*S,h*v,_*p,h*m);break;case"ZXZ":o.set(_*p,_*S,h*v,h*m);break;case"XZX":o.set(h*v,_*b,_*M,h*m);break;case"YXY":o.set(_*M,h*v,_*b,h*m);break;case"ZYZ":o.set(_*b,_*M,h*v,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Ks(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const $E={DEG2RAD:hl,RAD2DEG:xl,generateUUID:oo,clamp:Te,euclideanModulo:Xp,mapLinear:IE,inverseLerp:BE,lerp:dl,damp:FE,pingpong:HE,smoothstep:GE,smootherstep:VE,randInt:XE,randFloat:kE,randFloatSpread:qE,seededRandom:YE,degToRad:WE,radToDeg:jE,isPowerOfTwo:ZE,ceilPowerOfTwo:KE,floorPowerOfTwo:QE,setQuaternionFromProperEuler:JE,normalize:Vn,denormalize:Ks};class Ce{constructor(e=0,a=0){Ce.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,d,h){let _=s[u+0],m=s[u+1],v=s[u+2],p=s[u+3];const S=f[d+0],M=f[d+1],b=f[d+2],R=f[d+3];if(h===0){e[a+0]=_,e[a+1]=m,e[a+2]=v,e[a+3]=p;return}if(h===1){e[a+0]=S,e[a+1]=M,e[a+2]=b,e[a+3]=R;return}if(p!==R||_!==S||m!==M||v!==b){let y=1-h;const x=_*S+m*M+v*b+p*R,I=x>=0?1:-1,O=1-x*x;if(O>Number.EPSILON){const G=Math.sqrt(O),B=Math.atan2(G,x*I);y=Math.sin(y*B)/G,h=Math.sin(h*B)/G}const D=h*I;if(_=_*y+S*D,m=m*y+M*D,v=v*y+b*D,p=p*y+R*D,y===1-h){const G=1/Math.sqrt(_*_+m*m+v*v+p*p);_*=G,m*=G,v*=G,p*=G}}e[a]=_,e[a+1]=m,e[a+2]=v,e[a+3]=p}static multiplyQuaternionsFlat(e,a,s,u,f,d){const h=s[u],_=s[u+1],m=s[u+2],v=s[u+3],p=f[d],S=f[d+1],M=f[d+2],b=f[d+3];return e[a]=h*b+v*p+_*M-m*S,e[a+1]=_*b+v*S+m*p-h*M,e[a+2]=m*b+v*M+h*S-_*p,e[a+3]=v*b-h*p-_*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,_=Math.sin,m=h(s/2),v=h(u/2),p=h(f/2),S=_(s/2),M=_(u/2),b=_(f/2);switch(d){case"XYZ":this._x=S*v*p+m*M*b,this._y=m*M*p-S*v*b,this._z=m*v*b+S*M*p,this._w=m*v*p-S*M*b;break;case"YXZ":this._x=S*v*p+m*M*b,this._y=m*M*p-S*v*b,this._z=m*v*b-S*M*p,this._w=m*v*p+S*M*b;break;case"ZXY":this._x=S*v*p-m*M*b,this._y=m*M*p+S*v*b,this._z=m*v*b+S*M*p,this._w=m*v*p-S*M*b;break;case"ZYX":this._x=S*v*p-m*M*b,this._y=m*M*p+S*v*b,this._z=m*v*b-S*M*p,this._w=m*v*p+S*M*b;break;case"YZX":this._x=S*v*p+m*M*b,this._y=m*M*p+S*v*b,this._z=m*v*b-S*M*p,this._w=m*v*p-S*M*b;break;case"XZY":this._x=S*v*p-m*M*b,this._y=m*M*p-S*v*b,this._z=m*v*b+S*M*p,this._w=m*v*p+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],d=a[1],h=a[5],_=a[9],m=a[2],v=a[6],p=a[10],S=s+h+p;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-m)*M,this._z=(d-u)*M}else if(s>h&&s>p){const M=2*Math.sqrt(1+s-h-p);this._w=(v-_)/M,this._x=.25*M,this._y=(u+d)/M,this._z=(f+m)/M}else if(h>p){const M=2*Math.sqrt(1+h-s-p);this._w=(f-m)/M,this._x=(u+d)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+p-s-h);this._w=(d-u)/M,this._x=(f+m)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,d=e._w,h=a._x,_=a._y,m=a._z,v=a._w;return this._x=s*v+d*h+u*m-f*_,this._y=u*v+d*_+f*h-s*m,this._z=f*v+d*m+s*_-u*h,this._w=d*v-s*h-u*_-f*m,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,d=this._w;let h=d*e._w+s*e._x+u*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=u,this._z=f,this;const _=1-h*h;if(_<=Number.EPSILON){const M=1-a;return this._w=M*d+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const m=Math.sqrt(_),v=Math.atan2(m,h),p=Math.sin((1-a)*v)/m,S=Math.sin(a*v)/m;return this._w=d*p+this._w*S,this._x=s*p+this._x*S,this._y=u*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,a=0,s=0){rt.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(xv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,_=e.w,m=2*(d*u-h*s),v=2*(h*a-f*u),p=2*(f*s-d*a);return this.x=a+_*m+d*p-h*v,this.y=s+_*v+h*m-f*p,this.z=u+_*p+f*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this.z=Te(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this.z=Te(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,d=a.x,h=a.y,_=a.z;return this.x=u*_-f*h,this.y=f*d-s*_,this.z=s*h-u*d,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new rt,xv=new Ml;class de{constructor(e,a,s,u,f,d,h,_,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,_,m)}set(e,a,s,u,f,d,h,_,m){const v=this.elements;return v[0]=e,v[1]=u,v[2]=h,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[3],_=s[6],m=s[1],v=s[4],p=s[7],S=s[2],M=s[5],b=s[8],R=u[0],y=u[3],x=u[6],I=u[1],O=u[4],D=u[7],G=u[2],B=u[5],P=u[8];return f[0]=d*R+h*I+_*G,f[3]=d*y+h*O+_*B,f[6]=d*x+h*D+_*P,f[1]=m*R+v*I+p*G,f[4]=m*y+v*O+p*B,f[7]=m*x+v*D+p*P,f[2]=S*R+M*I+b*G,f[5]=S*y+M*O+b*B,f[8]=S*x+M*D+b*P,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8];return a*d*v-a*h*m-s*f*v+s*h*_+u*f*m-u*d*_}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8],p=v*d-h*m,S=h*_-v*f,M=m*f-d*_,b=a*p+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=p*R,e[1]=(u*m-v*s)*R,e[2]=(h*s-u*d)*R,e[3]=S*R,e[4]=(v*a-u*_)*R,e[5]=(u*f-h*a)*R,e[6]=M*R,e[7]=(s*_-m*a)*R,e[8]=(d*a-s*f)*R,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,d,h){const _=Math.cos(f),m=Math.sin(f);return this.set(s*_,s*m,-s*(_*d+m*h)+d+e,-u*m,u*_,-u*(-m*d+_*h)+h+a,0,0,1),this}scale(e,a){return this.premultiply(fd.makeScale(e,a)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,a){return this.premultiply(fd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new de;function bx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tT(){const o=Ec("canvas");return o.style.display="block",o}const Sv={};function Sl(o){o in Sv||(Sv[o]=!0,console.warn(o))}function eT(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const yv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nT(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===ke&&(u.r=Ma(u.r),u.g=Ma(u.g),u.b=Ma(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(u.r=$s(u.r),u.g=$s(u.g),u.b=$s(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===ir?yc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return Sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return Sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ao]:{primaries:e,whitePoint:s,transfer:yc,toXYZ:yv,fromXYZ:Mv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:yv,fromXYZ:Mv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Ne=nT();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zs;class iT{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zs===void 0&&(zs=Ec("canvas")),zs.width=e.width,zs.height=e.height;const u=zs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=zs}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Ec("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Ma(f[d]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(hd(u[d].image)):f.push(hd(u[d]))}else f=hd(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function hd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rT=0;const dd=new rt;class qn extends so{constructor(e=qn.DEFAULT_IMAGE,a=qn.DEFAULT_MAPPING,s=Xr,u=Xr,f=ji,d=kr,h=Ni,_=Ji,m=qn.DEFAULT_ANISOTROPY,v=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=oo(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=_,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=gx;qn.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,a=0,s=0,u=1){qe.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*a+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const _=e.elements,m=_[0],v=_[4],p=_[8],S=_[1],M=_[5],b=_[9],R=_[2],y=_[6],x=_[10];if(Math.abs(v-S)<.01&&Math.abs(p-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(p+R)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(m+1)/2,D=(M+1)/2,G=(x+1)/2,B=(v+S)/4,P=(p+R)/4,k=(b+y)/4;return O>D&&O>G?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=B/s,f=P/s):D>G?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=B/u,f=k/u):G<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(G),s=P/f,u=k/f),this.set(s,u,f,a),this}let I=Math.sqrt((y-b)*(y-b)+(p-R)*(p-R)+(S-v)*(S-v));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(p-R)/I,this.z=(S-v)/I,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Te(this.x,e.x,a.x),this.y=Te(this.y,e.y,a.y),this.z=Te(this.z,e.z,a.z),this.w=Te(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Te(this.x,e,a),this.y=Te(this.y,e,a),this.z=Te(this.z,e,a),this.w=Te(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sT extends so{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new qe(0,0,e,a),this.scissorTest=!1,this.viewport=new qe(0,0,e,a);const u={width:e,height:a,depth:s.depth},f=new qn(u);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const a={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new kp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends sT{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class Ax extends qn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends qn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=new rt(1/0,1/0,1/0),a=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(f,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ju.copy(s.boundingBox)),ju.applyMatrix4(e.matrixWorld),this.union(ju)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Zu.subVectors(this.max,al),Ps.subVectors(e.a,al),Is.subVectors(e.b,al),Bs.subVectors(e.c,al),Qa.subVectors(Is,Ps),Ja.subVectors(Bs,Is),Lr.subVectors(Ps,Bs);let a=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Lr.z,Lr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Lr.z,0,-Lr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Lr.y,Lr.x,0];return!pd(a,Ps,Is,Bs,Zu)||(a=[1,0,0,0,1,0,0,0,1],!pd(a,Ps,Is,Bs,Zu))?!1:(Ku.crossVectors(Qa,Ja),a=[Ku.x,Ku.y,Ku.z],pd(a,Ps,Is,Bs,Zu))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Ci=new rt,ju=new Wr,Ps=new rt,Is=new rt,Bs=new rt,Qa=new rt,Ja=new rt,Lr=new rt,al=new rt,Zu=new rt,Ku=new rt,Or=new rt;function pd(o,e,a,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Or.fromArray(o,f);const h=u.x*Math.abs(Or.x)+u.y*Math.abs(Or.y)+u.z*Math.abs(Or.z),_=e.dot(Or),m=a.dot(Or),v=s.dot(Or);if(Math.max(-Math.max(_,m,v),Math.min(_,m,v))>h)return!1}return!0}const lT=new Wr,rl=new rt,md=new rt;class El{constructor(e=new rt,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):lT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const a=rl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(rl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(md)),this.expandByPoint(rl.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new rt,gd=new rt,Qu=new rt,$a=new rt,_d=new rt,Ju=new rt,vd=new rt;class uT{constructor(e=new rt,a=new rt(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ga.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){gd.copy(e).add(a).multiplyScalar(.5),Qu.copy(a).sub(e).normalize(),$a.copy(this.origin).sub(gd);const f=e.distanceTo(a)*.5,d=-this.direction.dot(Qu),h=$a.dot(this.direction),_=-$a.dot(Qu),m=$a.lengthSq(),v=Math.abs(1-d*d);let p,S,M,b;if(v>0)if(p=d*_-h,S=d*h-_,b=f*v,p>=0)if(S>=-b)if(S<=b){const R=1/v;p*=R,S*=R,M=p*(p+d*S+2*h)+S*(d*p+S+2*_)+m}else S=f,p=Math.max(0,-(d*S+h)),M=-p*p+S*(S+2*_)+m;else S=-f,p=Math.max(0,-(d*S+h)),M=-p*p+S*(S+2*_)+m;else S<=-b?(p=Math.max(0,-(-d*f+h)),S=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+S*(S+2*_)+m):S<=b?(p=0,S=Math.min(Math.max(-f,-_),f),M=S*(S+2*_)+m):(p=Math.max(0,-(d*f+h)),S=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+S*(S+2*_)+m);else S=d>0?-f:f,p=Math.max(0,-(d*S+h)),M=-p*p+S*(S+2*_)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(gd).addScaledVector(Qu,S),M}intersectSphere(e,a){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),u=ga.dot(ga)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,_=s+d;return _<0?null:h<0?this.at(_,a):this.at(h,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,d,h,_;const m=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,u=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,u=(e.min.x-S.x)*m),v>=0?(f=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),p>=0?(h=(e.min.z-S.z)*p,_=(e.max.z-S.z)*p):(h=(e.max.z-S.z)*p,_=(e.min.z-S.z)*p),s>_||h>u)||((h>s||s!==s)&&(s=h),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,a,s,u,f){_d.subVectors(a,e),Ju.subVectors(s,e),vd.crossVectors(_d,Ju);let d=this.direction.dot(vd),h;if(d>0){if(u)return null;h=1}else if(d<0)h=-1,d=-d;else return null;$a.subVectors(this.origin,e);const _=h*this.direction.dot(Ju.crossVectors($a,Ju));if(_<0)return null;const m=h*this.direction.dot(_d.cross($a));if(m<0||_+m>d)return null;const v=-h*$a.dot(vd);return v<0?null:this.at(v/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,a,s,u,f,d,h,_,m,v,p,S,M,b,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,_,m,v,p,S,M,b,R,y)}set(e,a,s,u,f,d,h,_,m,v,p,S,M,b,R,y){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=_,x[2]=m,x[6]=v,x[10]=p,x[14]=S,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Fs.setFromMatrixColumn(e,0).length(),f=1/Fs.setFromMatrixColumn(e,1).length(),d=1/Fs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),_=Math.cos(u),m=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const S=d*v,M=d*p,b=h*v,R=h*p;a[0]=_*v,a[4]=-_*p,a[8]=m,a[1]=M+b*m,a[5]=S-R*m,a[9]=-h*_,a[2]=R-S*m,a[6]=b+M*m,a[10]=d*_}else if(e.order==="YXZ"){const S=_*v,M=_*p,b=m*v,R=m*p;a[0]=S+R*h,a[4]=b*h-M,a[8]=d*m,a[1]=d*p,a[5]=d*v,a[9]=-h,a[2]=M*h-b,a[6]=R+S*h,a[10]=d*_}else if(e.order==="ZXY"){const S=_*v,M=_*p,b=m*v,R=m*p;a[0]=S-R*h,a[4]=-d*p,a[8]=b+M*h,a[1]=M+b*h,a[5]=d*v,a[9]=R-S*h,a[2]=-d*m,a[6]=h,a[10]=d*_}else if(e.order==="ZYX"){const S=d*v,M=d*p,b=h*v,R=h*p;a[0]=_*v,a[4]=b*m-M,a[8]=S*m+R,a[1]=_*p,a[5]=R*m+S,a[9]=M*m-b,a[2]=-m,a[6]=h*_,a[10]=d*_}else if(e.order==="YZX"){const S=d*_,M=d*m,b=h*_,R=h*m;a[0]=_*v,a[4]=R-S*p,a[8]=b*p+M,a[1]=p,a[5]=d*v,a[9]=-h*v,a[2]=-m*v,a[6]=M*p+b,a[10]=S-R*p}else if(e.order==="XZY"){const S=d*_,M=d*m,b=h*_,R=h*m;a[0]=_*v,a[4]=-p,a[8]=m*v,a[1]=S*p+R,a[5]=d*v,a[9]=M*p-b,a[2]=b*p-M,a[6]=h*v,a[10]=R*p+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,fT)}lookAt(e,a,s){const u=this.elements;return si.subVectors(e,a),si.lengthSq()===0&&(si.z=1),si.normalize(),tr.crossVectors(s,si),tr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),tr.crossVectors(s,si)),tr.normalize(),$u.crossVectors(si,tr),u[0]=tr.x,u[4]=$u.x,u[8]=si.x,u[1]=tr.y,u[5]=$u.y,u[9]=si.y,u[2]=tr.z,u[6]=$u.z,u[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[4],_=s[8],m=s[12],v=s[1],p=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],x=s[14],I=s[3],O=s[7],D=s[11],G=s[15],B=u[0],P=u[4],k=u[8],w=u[12],C=u[1],V=u[5],st=u[9],ft=u[13],_t=u[2],ut=u[6],X=u[10],nt=u[14],j=u[3],vt=u[7],St=u[11],Bt=u[15];return f[0]=d*B+h*C+_*_t+m*j,f[4]=d*P+h*V+_*ut+m*vt,f[8]=d*k+h*st+_*X+m*St,f[12]=d*w+h*ft+_*nt+m*Bt,f[1]=v*B+p*C+S*_t+M*j,f[5]=v*P+p*V+S*ut+M*vt,f[9]=v*k+p*st+S*X+M*St,f[13]=v*w+p*ft+S*nt+M*Bt,f[2]=b*B+R*C+y*_t+x*j,f[6]=b*P+R*V+y*ut+x*vt,f[10]=b*k+R*st+y*X+x*St,f[14]=b*w+R*ft+y*nt+x*Bt,f[3]=I*B+O*C+D*_t+G*j,f[7]=I*P+O*V+D*ut+G*vt,f[11]=I*k+O*st+D*X+G*St,f[15]=I*w+O*ft+D*nt+G*Bt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],_=e[9],m=e[13],v=e[2],p=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],x=e[15];return b*(+f*_*p-u*m*p-f*h*S+s*m*S+u*h*M-s*_*M)+R*(+a*_*M-a*m*S+f*d*S-u*d*M+u*m*v-f*_*v)+y*(+a*m*p-a*h*M-f*d*p+s*d*M+f*h*v-s*m*v)+x*(-u*h*v-a*_*p+a*h*S+u*d*p-s*d*S+s*_*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8],p=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],x=e[15],I=p*y*m-R*S*m+R*_*M-h*y*M-p*_*x+h*S*x,O=b*S*m-v*y*m-b*_*M+d*y*M+v*_*x-d*S*x,D=v*R*m-b*p*m+b*h*M-d*R*M-v*h*x+d*p*x,G=b*p*_-v*R*_-b*h*S+d*R*S+v*h*y-d*p*y,B=a*I+s*O+u*D+f*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=I*P,e[1]=(R*S*f-p*y*f-R*u*M+s*y*M+p*u*x-s*S*x)*P,e[2]=(h*y*f-R*_*f+R*u*m-s*y*m-h*u*x+s*_*x)*P,e[3]=(p*_*f-h*S*f-p*u*m+s*S*m+h*u*M-s*_*M)*P,e[4]=O*P,e[5]=(v*y*f-b*S*f+b*u*M-a*y*M-v*u*x+a*S*x)*P,e[6]=(b*_*f-d*y*f-b*u*m+a*y*m+d*u*x-a*_*x)*P,e[7]=(d*S*f-v*_*f+v*u*m-a*S*m-d*u*M+a*_*M)*P,e[8]=D*P,e[9]=(b*p*f-v*R*f-b*s*M+a*R*M+v*s*x-a*p*x)*P,e[10]=(d*R*f-b*h*f+b*s*m-a*R*m-d*s*x+a*h*x)*P,e[11]=(v*h*f-d*p*f-v*s*m+a*p*m+d*s*M-a*h*M)*P,e[12]=G*P,e[13]=(v*R*u-b*p*u+b*s*S-a*R*S-v*s*y+a*p*y)*P,e[14]=(b*h*u-d*R*u-b*s*_+a*R*_+d*s*y-a*h*y)*P,e[15]=(d*p*u-v*h*u+v*s*_-a*p*_-d*s*S+a*h*S)*P,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,d=e.x,h=e.y,_=e.z,m=f*d,v=f*h;return this.set(m*d+s,m*h-u*_,m*_+u*h,0,m*h+u*_,v*h+s,v*_-u*d,0,m*_-u*h,v*_+u*d,f*_*_+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,d=a._y,h=a._z,_=a._w,m=f+f,v=d+d,p=h+h,S=f*m,M=f*v,b=f*p,R=d*v,y=d*p,x=h*p,I=_*m,O=_*v,D=_*p,G=s.x,B=s.y,P=s.z;return u[0]=(1-(R+x))*G,u[1]=(M+D)*G,u[2]=(b-O)*G,u[3]=0,u[4]=(M-D)*B,u[5]=(1-(S+x))*B,u[6]=(y+I)*B,u[7]=0,u[8]=(b+O)*P,u[9]=(y-I)*P,u[10]=(1-(S+R))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Fs.set(u[0],u[1],u[2]).length();const d=Fs.set(u[4],u[5],u[6]).length(),h=Fs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],wi.copy(this);const m=1/f,v=1/d,p=1/h;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,a.setFromRotationMatrix(wi),s.x=f,s.y=d,s.z=h,this}makePerspective(e,a,s,u,f,d,h=Ki,_=!1){const m=this.elements,v=2*f/(a-e),p=2*f/(s-u),S=(a+e)/(a-e),M=(s+u)/(s-u);let b,R;if(_)b=f/(d-f),R=d*f/(d-f);else if(h===Ki)b=-(d+f)/(d-f),R=-2*d*f/(d-f);else if(h===Mc)b=-d/(d-f),R=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=p,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,a,s,u,f,d,h=Ki,_=!1){const m=this.elements,v=2/(a-e),p=2/(s-u),S=-(a+e)/(a-e),M=-(s+u)/(s-u);let b,R;if(_)b=1/(d-f),R=d/(d-f);else if(h===Ki)b=-2/(d-f),R=-(d+f)/(d-f);else if(h===Mc)b=-1/(d-f),R=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=p,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Fs=new rt,wi=new $e,cT=new rt(0,0,0),fT=new rt(1,1,1),tr=new rt,$u=new rt,si=new rt,Ev=new $e,Tv=new Ml;class Oi{constructor(e=0,a=0,s=0,u=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],_=u[1],m=u[5],v=u[9],p=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(_,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hT=0;const bv=new rt,Hs=new Ml,_a=new $e,tc=new rt,sl=new rt,dT=new rt,pT=new Ml,Av=new rt(1,0,0),Rv=new rt(0,1,0),Cv=new rt(0,0,1),wv={type:"added"},mT={type:"removed"},Gs={type:"childadded",child:null},xd={type:"childremoved",child:null};class Dn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new rt,a=new Oi,s=new Ml,u=new rt(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Hs.setFromAxisAngle(e,a),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,a){return Hs.setFromAxisAngle(e,a),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,a){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?tc.copy(e):tc.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(sl,tc,this.up):_a.lookAt(tc,sl,this.up),this.quaternion.setFromRotationMatrix(_a),u&&(_a.extractRotation(u.matrixWorld),Hs.setFromRotationMatrix(_a),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(mT),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,a);if(d!==void 0)return d}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,_){return h[_.uuid]===void 0&&(h[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const _=h.shapes;if(Array.isArray(_))for(let m=0,v=_.length;m<v;m++){const p=_[m];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let _=0,m=this.material.length;_<m;_++)h.push(f(e.materials,this.material[_]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const _=this.animations[h];u.animations.push(f(e.animations,_))}}if(a){const h=d(e.geometries),_=d(e.materials),m=d(e.textures),v=d(e.images),p=d(e.shapes),S=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),_.length>0&&(s.materials=_),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function d(h){const _=[];for(const m in h){const v=h[m];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}Dn.DEFAULT_UP=new rt(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new rt,va=new rt,Sd=new rt,xa=new rt,Vs=new rt,Xs=new rt,Dv=new rt,yd=new rt,Md=new rt,Ed=new rt,Td=new qe,bd=new qe,Ad=new qe;class Ui{constructor(e=new rt,a=new rt,s=new rt){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Di.subVectors(e,a),u.cross(Di);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Di.subVectors(u,a),va.subVectors(s,a),Sd.subVectors(e,a);const d=Di.dot(Di),h=Di.dot(va),_=Di.dot(Sd),m=va.dot(va),v=va.dot(Sd),p=d*m-h*h;if(p===0)return f.set(0,0,0),null;const S=1/p,M=(m*_-h*v)*S,b=(d*v-h*_)*S;return f.set(1-M-b,b,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,a,s,u,f,d,h,_){return this.getBarycoord(e,a,s,u,xa)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,xa.x),_.addScaledVector(d,xa.y),_.addScaledVector(h,xa.z),_)}static getInterpolatedAttribute(e,a,s,u,f,d){return Td.setScalar(0),bd.setScalar(0),Ad.setScalar(0),Td.fromBufferAttribute(e,a),bd.fromBufferAttribute(e,s),Ad.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Td,f.x),d.addScaledVector(bd,f.y),d.addScaledVector(Ad,f.z),d}static isFrontFacing(e,a,s,u){return Di.subVectors(s,a),va.subVectors(e,a),Di.cross(va).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Ui.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Ui.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let d,h;Vs.subVectors(u,s),Xs.subVectors(f,s),yd.subVectors(e,s);const _=Vs.dot(yd),m=Xs.dot(yd);if(_<=0&&m<=0)return a.copy(s);Md.subVectors(e,u);const v=Vs.dot(Md),p=Xs.dot(Md);if(v>=0&&p<=v)return a.copy(u);const S=_*p-v*m;if(S<=0&&_>=0&&v<=0)return d=_/(_-v),a.copy(s).addScaledVector(Vs,d);Ed.subVectors(e,f);const M=Vs.dot(Ed),b=Xs.dot(Ed);if(b>=0&&M<=b)return a.copy(f);const R=M*m-_*b;if(R<=0&&m>=0&&b<=0)return h=m/(m-b),a.copy(s).addScaledVector(Xs,h);const y=v*b-M*p;if(y<=0&&p-v>=0&&M-b>=0)return Dv.subVectors(f,u),h=(p-v)/(p-v+(M-b)),a.copy(u).addScaledVector(Dv,h);const x=1/(y+R+S);return d=R*x,h=S*x,a.copy(s).addScaledVector(Vs,d).addScaledVector(Xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Rd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Re{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=Ne.workingColorSpace){return this.r=e,this.g=a,this.b=s,Ne.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=Ne.workingColorSpace){if(e=Xp(e,1),a=Te(a,0,1),s=Te(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Rd(d,f,e+1/3),this.g=Rd(d,f,e),this.b=Rd(d,f,e-1/3)}return Ne.colorSpaceToWorking(this,u),this}setStyle(e,a=yi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=yi){const s=Cx[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Ne.workingToColorSpace(zn.copy(this),e),Math.round(Te(zn.r*255,0,255))*65536+Math.round(Te(zn.g*255,0,255))*256+Math.round(Te(zn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ne.workingColorSpace){Ne.workingToColorSpace(zn.copy(this),a);const s=zn.r,u=zn.g,f=zn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let _,m;const v=(h+d)/2;if(h===d)_=0,m=0;else{const p=d-h;switch(m=v<=.5?p/(d+h):p/(2-d-h),d){case s:_=(u-f)/p+(u<f?6:0);break;case u:_=(f-s)/p+2;break;case f:_=(s-u)/p+4;break}_/=6}return e.h=_,e.s=m,e.l=v,e}getRGB(e,a=Ne.workingColorSpace){return Ne.workingToColorSpace(zn.copy(this),a),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=yi){Ne.workingToColorSpace(zn.copy(this),e);const a=zn.r,s=zn.g,u=zn.b;return e!==yi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(er),this.setHSL(er.h+e,er.s+a,er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(er),e.getHSL(ec);const s=dl(er.h,ec.h,a),u=dl(er.s,ec.s,a),f=dl(er.l,ec.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Re;Re.NAMES=Cx;let gT=0;class lo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Js,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Xd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==Gr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const _=f[h];delete _.metadata,d.push(_)}return d}if(a){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wx extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new rt,nc=new Ce;let _T=0;class Li{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_T++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=gv,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)nc.fromBufferAttribute(this,a),nc.applyMatrix3(e),this.setXY(a,nc.x,nc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=Ks(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Ks(a,this.array)),a}setX(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Ks(a,this.array)),a}setY(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Ks(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Ks(a,this.array)),a}setW(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array),f=Vn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gv&&(e.usage=this.usage),e}}class Dx extends Li{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Ux extends Li{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Qi extends Li{constructor(e,a,s){super(new Float32Array(e),a,s)}}let vT=0;const Si=new $e,Cd=new Dn,ks=new rt,oi=new Wr,ol=new Wr,En=new rt;class lr extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Ux:Dx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,a,s){return Si.makeTranslation(e,a,s),this.applyMatrix4(Si),this}scale(e,a,s){return Si.makeScale(e,a,s),this.applyMatrix4(Si),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Qi(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ol.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(oi.min,ol.min),oi.expandByPoint(En),En.addVectors(oi.max,ol.max),oi.expandByPoint(En)):(oi.expandByPoint(ol.min),oi.expandByPoint(ol.max))}oi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)En.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(En));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],_=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)En.fromBufferAttribute(h,m),_&&(ks.fromBufferAttribute(e,m),En.add(ks)),u=Math.max(u,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],_=[];for(let k=0;k<s.count;k++)h[k]=new rt,_[k]=new rt;const m=new rt,v=new rt,p=new rt,S=new Ce,M=new Ce,b=new Ce,R=new rt,y=new rt;function x(k,w,C){m.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),S.fromBufferAttribute(f,k),M.fromBufferAttribute(f,w),b.fromBufferAttribute(f,C),v.sub(m),p.sub(m),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),h[k].add(R),h[w].add(R),h[C].add(R),_[k].add(y),_[w].add(y),_[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,w=I.length;k<w;++k){const C=I[k],V=C.start,st=C.count;for(let ft=V,_t=V+st;ft<_t;ft+=3)x(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const O=new rt,D=new rt,G=new rt,B=new rt;function P(k){G.fromBufferAttribute(u,k),B.copy(G);const w=h[k];O.copy(w),O.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(B,w);const V=D.dot(_[k])<0?-1:1;d.setXYZW(k,O.x,O.y,O.z,V)}for(let k=0,w=I.length;k<w;++k){const C=I[k],V=C.start,st=C.count;for(let ft=V,_t=V+st;ft<_t;ft+=3)P(e.getX(ft+0)),P(e.getX(ft+1)),P(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new rt,f=new rt,d=new rt,h=new rt,_=new rt,m=new rt,v=new rt,p=new rt;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,R),d.fromBufferAttribute(a,y),v.subVectors(d,f),p.subVectors(u,f),v.cross(p),h.fromBufferAttribute(s,b),_.fromBufferAttribute(s,R),m.fromBufferAttribute(s,y),h.add(v),_.add(v),m.add(v),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(R,_.x,_.y,_.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),d.fromBufferAttribute(a,S+2),v.subVectors(d,f),p.subVectors(u,f),v.cross(p),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)En.fromBufferAttribute(e,a),En.normalize(),e.setXYZ(a,En.x,En.y,En.z)}toNonIndexed(){function e(h,_){const m=h.array,v=h.itemSize,p=h.normalized,S=new m.constructor(_.length*v);let M=0,b=0;for(let R=0,y=_.length;R<y;R++){h.isInterleavedBufferAttribute?M=_[R]*h.data.stride+h.offset:M=_[R]*v;for(let x=0;x<v;x++)S[b++]=m[M++]}return new Li(S,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new lr,s=this.index.array,u=this.attributes;for(const h in u){const _=u[h],m=e(_,s);a.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const _=[],m=f[h];for(let v=0,p=m.length;v<p;v++){const S=m[v],M=e(S,s);_.push(M)}a.morphAttributes[h]=_}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,_=d.length;h<_;h++){const m=d[h];a.addGroup(m.start,m.count,m.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const m in _)_[m]!==void 0&&(e[m]=_[m]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const m=s[_];e.data.attributes[_]=m.toJSON(e.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const m=this.morphAttributes[_],v=[];for(let p=0,S=m.length;p<S;p++){const M=m[p];v.push(M.toJSON(e.data))}v.length>0&&(u[_]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const v=u[m];this.setAttribute(m,v.clone(a))}const f=e.morphAttributes;for(const m in f){const v=[],p=f[m];for(let S=0,M=p.length;S<M;S++)v.push(p[S].clone(a));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const p=d[m];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new $e,zr=new uT,ic=new El,Nv=new rt,ac=new rt,rc=new rt,sc=new rt,wd=new rt,oc=new rt,Lv=new rt,lc=new rt;class _n extends Dn{constructor(e=new lr,a=new wx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){oc.set(0,0,0);for(let _=0,m=f.length;_<m;_++){const v=h[_],p=f[_];v!==0&&(wd.fromBufferAttribute(p,e),d?oc.addScaledVector(wd,v):oc.addScaledVector(wd.sub(a),v))}a.add(oc)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ic.copy(s.boundingSphere),ic.applyMatrix4(f),zr.copy(e.ray).recast(e.near),!(ic.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ic,Nv)===null||zr.origin.distanceToSquared(Nv)>(e.far-e.near)**2))&&(Uv.copy(f).invert(),zr.copy(e.ray).applyMatrix4(Uv),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,zr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,d=this.material,h=f.index,_=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,S=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=d[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const B=h.getX(D),P=h.getX(D+1),k=h.getX(D+2);u=uc(this,x,e,s,m,v,p,B,P,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const I=h.getX(y),O=h.getX(y+1),D=h.getX(y+2);u=uc(this,d,e,s,m,v,p,I,O,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(d))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=d[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const B=D,P=D+1,k=D+2;u=uc(this,x,e,s,m,v,p,B,P,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(_.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const I=y,O=y+1,D=y+2;u=uc(this,d,e,s,m,v,p,I,O,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function xT(o,e,a,s,u,f,d,h){let _;if(e.side===kn?_=s.intersectTriangle(d,f,u,!0,h):_=s.intersectTriangle(u,f,d,e.side===sr,h),_===null)return null;lc.copy(h),lc.applyMatrix4(o.matrixWorld);const m=a.ray.origin.distanceTo(lc);return m<a.near||m>a.far?null:{distance:m,point:lc.clone(),object:o}}function uc(o,e,a,s,u,f,d,h,_,m){o.getVertexPosition(h,ac),o.getVertexPosition(_,rc),o.getVertexPosition(m,sc);const v=xT(o,e,a,s,ac,rc,sc,Lv);if(v){const p=new rt;Ui.getBarycoord(Lv,ac,rc,sc,p),u&&(v.uv=Ui.getInterpolatedAttribute(u,h,_,m,p,new Ce)),f&&(v.uv1=Ui.getInterpolatedAttribute(f,h,_,m,p,new Ce)),d&&(v.normal=Ui.getInterpolatedAttribute(d,h,_,m,p,new rt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:_,c:m,normal:new rt,materialIndex:0};Ui.getNormal(ac,rc,sc,S.normal),v.face=S,v.barycoord=p}return v}class uo extends lr{constructor(e=1,a=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const _=[],m=[],v=[],p=[];let S=0,M=0;b("z","y","x",-1,-1,s,a,e,d,f,0),b("z","y","x",1,-1,s,a,-e,d,f,1),b("x","z","y",1,1,e,s,a,u,d,2),b("x","z","y",1,-1,e,s,-a,u,d,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new Qi(m,3)),this.setAttribute("normal",new Qi(v,3)),this.setAttribute("uv",new Qi(p,2));function b(R,y,x,I,O,D,G,B,P,k,w){const C=D/P,V=G/k,st=D/2,ft=G/2,_t=B/2,ut=P+1,X=k+1;let nt=0,j=0;const vt=new rt;for(let St=0;St<X;St++){const Bt=St*V-ft;for(let ne=0;ne<ut;ne++){const me=ne*C-st;vt[R]=me*I,vt[y]=Bt*O,vt[x]=_t,m.push(vt.x,vt.y,vt.z),vt[R]=0,vt[y]=0,vt[x]=B>0?1:-1,v.push(vt.x,vt.y,vt.z),p.push(ne/P),p.push(1-St/k),nt+=1}}for(let St=0;St<k;St++)for(let Bt=0;Bt<P;Bt++){const ne=S+Bt+ut*St,me=S+Bt+ut*(St+1),L=S+(Bt+1)+ut*(St+1),ht=S+(Bt+1)+ut*St;_.push(ne,me,ht),_.push(me,L,ht),j+=6}h.addGroup(M,j,w),M+=j,S+=nt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Xn(o){const e={};for(let a=0;a<o.length;a++){const s=ro(o[a]);for(const u in s)e[u]=s[u]}return e}function ST(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function Nx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const yT={clone:ro,merge:Xn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=ST(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?a.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?a.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[u]={type:"m4",value:d.toArray()}:a.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Lx extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new rt,Ov=new Ce,zv=new Ce;class li extends Lx{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,a){return this.getViewBounds(e,Ov,zv),a.subVectors(zv,Ov)}setViewOffset(e,a,s,u,f,d){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(hl*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const _=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/_,a-=d.offsetY*s/m,u*=d.width/_,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const qs=-90,Ys=1;class TT extends Dn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new li(qs,Ys,e,a);u.layers=this.layers,this.add(u);const f=new li(qs,Ys,e,a);f.layers=this.layers,this.add(f);const d=new li(qs,Ys,e,a);d.layers=this.layers,this.add(d);const h=new li(qs,Ys,e,a);h.layers=this.layers,this.add(h);const _=new li(qs,Ys,e,a);_.layers=this.layers,this.add(_);const m=new li(qs,Ys,e,a);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,d,h,_]=a;for(const m of a)this.remove(m);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of a)this.add(m),m.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,_,m,v]=this.children,p=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,d),e.setRenderTarget(s,2,u),e.render(a,h),e.setRenderTarget(s,3,u),e.render(a,_),e.setRenderTarget(s,4,u),e.render(a,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(p,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ox extends qn{constructor(e=[],a=no,s,u,f,d,h,_,m,v){super(e,a,s,u,f,d,h,_,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bT extends Yr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Ox(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new uo(5,5,5),f=new or({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:ar});f.uniforms.tEquirect.value=a;const d=new _n(u,f),h=a.minFilter;return a.minFilter===kr&&(a.minFilter=ji),new TT(1,10,this).update(e,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(a,s,u);e.setRenderTarget(f)}}class cc extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,d=null;const h=this._targetRay,_=this._grip,m=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const y=a.getJointPose(R,s),x=this._getHandJoint(m,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],S=v.position.distanceTo(p.position),M=.02,b=.005;m.inputState.pinching&&S>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));h!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return h!==null&&(h.visible=u!==null),_!==null&&(_.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new cc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}class zx extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class RT extends qn{constructor(e=null,a=1,s=1,u,f,d,h,_,m=ui,v=ui,p,S){super(null,d,h,_,m,v,u,f,p,S),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pv extends Li{constructor(e,a,s,u=1){super(e,a,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new $e,Iv=new $e,fc=[],Bv=new Wr,CT=new $e,ll=new _n,ul=new El;class wT extends _n{constructor(e,a,s){super(e,a),this.isInstancedMesh=!0,this.instanceMatrix=new Pv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<s;u++)this.setMatrixAt(u,CT)}computeBoundingBox(){const e=this.geometry,a=this.count;this.boundingBox===null&&(this.boundingBox=new Wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ws),Bv.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Bv)}computeBoundingSphere(){const e=this.geometry,a=this.count;this.boundingSphere===null&&(this.boundingSphere=new El),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ws),ul.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(ul)}copy(e,a){return super.copy(e,a),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,a){a.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,a){a.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,a){const s=a.morphTargetInfluences,u=this.morphTexture.source.data.data,f=s.length+1,d=e*f+1;for(let h=0;h<s.length;h++)s[h]=u[d+h]}raycast(e,a){const s=this.matrixWorld,u=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),e.ray.intersectsSphere(ul)!==!1))for(let f=0;f<u;f++){this.getMatrixAt(f,Ws),Iv.multiplyMatrices(s,Ws),ll.matrixWorld=Iv,ll.raycast(e,fc);for(let d=0,h=fc.length;d<h;d++){const _=fc[d];_.instanceId=f,_.object=this,a.push(_)}fc.length=0}}setColorAt(e,a){this.instanceColor===null&&(this.instanceColor=new Pv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),a.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,a){a.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,a){const s=a.morphTargetInfluences,u=s.length+1;this.morphTexture===null&&(this.morphTexture=new RT(new Float32Array(u*this.count),u,this.count,Bp,Zi));const f=this.morphTexture.source.data.data;let d=0;for(let m=0;m<s.length;m++)d+=s[m];const h=this.geometry.morphTargetsRelative?1:1-d,_=u*e;f[_]=h,f.set(s,_+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ud=new rt,DT=new rt,UT=new de;class Fr{constructor(e=new rt(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Ud.subVectors(s,a).cross(DT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Ud),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||UT.getNormalMatrix(e),u=this.coplanarPoint(Ud).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new El,NT=new Ce(.5,.5),hc=new rt;class qp{constructor(e=new Fr,a=new Fr,s=new Fr,u=new Fr,f=new Fr,d=new Fr){this.planes=[e,a,s,u,f,d]}set(e,a,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(a),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=Ki,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],_=f[2],m=f[3],v=f[4],p=f[5],S=f[6],M=f[7],b=f[8],R=f[9],y=f[10],x=f[11],I=f[12],O=f[13],D=f[14],G=f[15];if(u[0].setComponents(m-d,M-v,x-b,G-I).normalize(),u[1].setComponents(m+d,M+v,x+b,G+I).normalize(),u[2].setComponents(m+h,M+p,x+R,G+O).normalize(),u[3].setComponents(m-h,M-p,x-R,G-O).normalize(),s)u[4].setComponents(_,S,y,D).normalize(),u[5].setComponents(m-_,M-S,x-y,G-D).normalize();else if(u[4].setComponents(m-_,M-S,x-y,G-D).normalize(),a===Ki)u[5].setComponents(m+_,M+S,x+y,G+D).normalize();else if(a===Mc)u[5].setComponents(_,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const a=NT.distanceTo(e.center);return Pr.radius=.7071067811865476+a,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(hc.x=u.normal.x>0?e.max.x:e.min.x,hc.y=u.normal.y>0?e.max.y:e.min.y,hc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends qn{constructor(e,a,s=qr,u,f,d,h=ui,_=ui,m,v=_l,p=1){if(v!==_l&&v!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:a,depth:p};super(S,u,f,d,h,_,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Ix extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bc extends lr{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,d=a/2,h=Math.floor(s),_=Math.floor(u),m=h+1,v=_+1,p=e/h,S=a/_,M=[],b=[],R=[],y=[];for(let x=0;x<v;x++){const I=x*S-d;for(let O=0;O<m;O++){const D=O*p-f;b.push(D,-I,0),R.push(0,0,1),y.push(O/h),y.push(1-x/_)}}for(let x=0;x<_;x++)for(let I=0;I<h;I++){const O=I+m*x,D=I+m*(x+1),G=I+1+m*(x+1),B=I+1+m*x;M.push(O,D,B),M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new Qi(b,3)),this.setAttribute("normal",new Qi(R,3)),this.setAttribute("uv",new Qi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yp extends lr{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:d,thetaLength:h},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const _=Math.min(d+h,Math.PI);let m=0;const v=[],p=new rt,S=new rt,M=[],b=[],R=[],y=[];for(let x=0;x<=s;x++){const I=[],O=x/s;let D=0;x===0&&d===0?D=.5/a:x===s&&_===Math.PI&&(D=-.5/a);for(let G=0;G<=a;G++){const B=G/a;p.x=-e*Math.cos(u+B*f)*Math.sin(d+O*h),p.y=e*Math.cos(d+O*h),p.z=e*Math.sin(u+B*f)*Math.sin(d+O*h),b.push(p.x,p.y,p.z),S.copy(p).normalize(),R.push(S.x,S.y,S.z),y.push(B+D,1-O),I.push(m++)}v.push(I)}for(let x=0;x<s;x++)for(let I=0;I<a;I++){const O=v[x][I+1],D=v[x][I],G=v[x+1][I],B=v[x+1][I+1];(x!==0||d>0)&&M.push(O,D,B),(x!==s-1||_<Math.PI)&&M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new Qi(b,3)),this.setAttribute("normal",new Qi(R,3)),this.setAttribute("uv",new Qi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wp extends lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LT extends lo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OT extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zT extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bx extends Dn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const Nd=new $e,Fv=new rt,Hv=new rt;class Fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ji,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Fv.setFromMatrixPosition(e.matrixWorld),a.position.copy(Fv),Hv.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(Hv),a.updateMatrixWorld(),Nd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gv=new $e,cl=new rt,Ld=new rt;class PT extends Fx{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new rt(1,0,0),new rt(-1,0,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,1,0),new rt(0,-1,0)],this._cubeUps=[new rt(0,1,0),new rt(0,1,0),new rt(0,1,0),new rt(0,1,0),new rt(0,0,1),new rt(0,0,-1)]}updateMatrices(e,a=0){const s=this.camera,u=this.matrix,f=e.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),cl.setFromMatrixPosition(e.matrixWorld),s.position.copy(cl),Ld.copy(s.position),Ld.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Ld),s.updateMatrixWorld(),u.makeTranslation(-cl.x,-cl.y,-cl.z),Gv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gv,s.coordinateSystem,s.reversedDepth)}}class IT extends Bx{constructor(e,a,s=0,u=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new PT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hx extends Lx{constructor(e=-1,a=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=v*this.view.offsetY,_=h-v*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class BT extends Fx{constructor(){super(new Hx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends Bx{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new BT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FT extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vv(o,e,a,s){const u=HT(s);switch(a){case yx:return o*e;case Bp:return o*e/u.components*u.byteLength;case Fp:return o*e/u.components*u.byteLength;case Ex:return o*e*2/u.components*u.byteLength;case Hp:return o*e*2/u.components*u.byteLength;case Mx:return o*e*3/u.components*u.byteLength;case Ni:return o*e*4/u.components*u.byteLength;case Gp:return o*e*4/u.components*u.byteLength;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:case ap:return Math.max(o,16)*Math.max(e,8)/4;case ep:case ip:return Math.max(o,8)*Math.max(e,8)/2;case rp:case sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case fp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case mp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case gp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Mp:case Ep:case Tp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case bp:case Ap:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rp:case Cp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function HT(o){switch(o){case Ji:case _x:return{byteLength:1,components:1};case ml:case vx:case yl:return{byteLength:2,components:1};case Pp:case Ip:return{byteLength:2,components:4};case qr:case zp:case Zi:return{byteLength:4,components:1};case xx:case Sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function Gx(){let o=null,e=!1,a=null,s=null;function u(f,d){a(f,d),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function GT(o){const e=new WeakMap;function a(h,_){const m=h.array,v=h.usage,p=m.byteLength,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:p}}function s(h,_,m){const v=_.array,p=_.updateRanges;if(o.bindBuffer(m,h),p.length===0)o.bufferSubData(m,0,v);else{p.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<p.length;M++){const b=p[S],R=p[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,p[S]=R)}p.length=S+1;for(let M=0,b=p.length;M<b;M++){const R=p[M];o.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const _=e.get(h);_&&(o.deleteBuffer(_.buffer),e.delete(h))}function d(h,_){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,a(h,_));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,_),m.version=h.version}}return{get:u,remove:f,update:d}}var VT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XT=`#ifdef USE_ALPHAHASH
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
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jT=`#ifdef USE_AOMAP
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
#endif`,ZT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KT=`#ifdef USE_BATCHING
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
#endif`,QT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f1=`#define PI 3.141592653589793
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
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
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
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,H1=`struct PhysicalMaterial {
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
}`,G1=`
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q1=`#if defined( USE_POINTS_UV )
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
#endif`,J1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
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
#endif`,ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cb=`#ifdef USE_NORMALMAP
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
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ab=`float getShadowMask() {
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
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
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
#endif`,wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`#include <common>
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
}`,jb=`#if DEPTH_PACKING == 3200
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
}`,Zb=`#define DISTANCE
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
}`,Kb=`#define DISTANCE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`uniform float scale;
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
}`,tA=`uniform vec3 diffuse;
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
}`,eA=`#include <common>
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#define LAMBERT
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
}`,aA=`#define LAMBERT
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
}`,rA=`#define MATCAP
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
}`,sA=`#define MATCAP
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
}`,oA=`#define NORMAL
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
}`,lA=`#define NORMAL
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
}`,uA=`#define PHONG
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
}`,cA=`#define PHONG
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
}`,fA=`#define STANDARD
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
}`,hA=`#define STANDARD
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
}`,dA=`#define TOON
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
}`,pA=`#define TOON
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
}`,mA=`uniform float size;
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,vA=`uniform vec3 color;
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
}`,xA=`uniform float rotation;
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
}`,SA=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:VT,alphahash_pars_fragment:XT,alphamap_fragment:kT,alphamap_pars_fragment:qT,alphatest_fragment:YT,alphatest_pars_fragment:WT,aomap_fragment:jT,aomap_pars_fragment:ZT,batching_pars_vertex:KT,batching_vertex:QT,begin_vertex:JT,beginnormal_vertex:$T,bsdfs:t1,iridescence_fragment:e1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:s1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:u1,color_vertex:c1,common:f1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:d1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:y1,envmap_pars_fragment:M1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:O1,envmap_vertex:T1,fog_vertex:b1,fog_pars_vertex:A1,fog_fragment:R1,fog_pars_fragment:C1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:D1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:N1,lights_pars_begin:L1,lights_toon_fragment:z1,lights_toon_pars_fragment:P1,lights_phong_fragment:I1,lights_phong_pars_fragment:B1,lights_physical_fragment:F1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:V1,lights_fragment_end:X1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:W1,map_fragment:j1,map_pars_fragment:Z1,map_particle_fragment:K1,map_particle_pars_fragment:Q1,metalnessmap_fragment:J1,metalnessmap_pars_fragment:$1,morphinstance_vertex:tb,morphcolor_vertex:eb,morphnormal_vertex:nb,morphtarget_pars_vertex:ib,morphtarget_vertex:ab,normal_fragment_begin:rb,normal_fragment_maps:sb,normal_pars_fragment:ob,normal_pars_vertex:lb,normal_vertex:ub,normalmap_pars_fragment:cb,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:db,iridescence_pars_fragment:pb,opaque_fragment:mb,packing:gb,premultiplied_alpha_fragment:_b,project_vertex:vb,dithering_fragment:xb,dithering_pars_fragment:Sb,roughnessmap_fragment:yb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:bb,shadowmask_pars_fragment:Ab,skinbase_vertex:Rb,skinning_pars_vertex:Cb,skinning_vertex:wb,skinnormal_vertex:Db,specularmap_fragment:Ub,specularmap_pars_fragment:Nb,tonemapping_fragment:Lb,tonemapping_pars_fragment:Ob,transmission_fragment:zb,transmission_pars_fragment:Pb,uv_pars_fragment:Ib,uv_pars_vertex:Bb,uv_vertex:Fb,worldpos_vertex:Hb,background_vert:Gb,background_frag:Vb,backgroundCube_vert:Xb,backgroundCube_frag:kb,cube_vert:qb,cube_frag:Yb,depth_vert:Wb,depth_frag:jb,distanceRGBA_vert:Zb,distanceRGBA_frag:Kb,equirect_vert:Qb,equirect_frag:Jb,linedashed_vert:$b,linedashed_frag:tA,meshbasic_vert:eA,meshbasic_frag:nA,meshlambert_vert:iA,meshlambert_frag:aA,meshmatcap_vert:rA,meshmatcap_frag:sA,meshnormal_vert:oA,meshnormal_frag:lA,meshphong_vert:uA,meshphong_frag:cA,meshphysical_vert:fA,meshphysical_frag:hA,meshtoon_vert:dA,meshtoon_frag:pA,points_vert:mA,points_frag:gA,shadow_vert:_A,shadow_frag:vA,sprite_vert:xA,sprite_frag:SA},It={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Wi={basic:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Xn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Xn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Xn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Xn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Xn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Xn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Xn([It.common,It.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Xn([It.lights,It.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Wi.physical={uniforms:Xn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const dc={r:0,b:0,g:0},Ir=new Oi,yA=new $e;function MA(o,e,a,s,u,f,d){const h=new Re(0);let _=f===!0?0:1,m,v,p=null,S=0,M=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?a:e).get(D)),D}function R(O){let D=!1;const G=b(O);G===null?x(h,_):G&&G.isColor&&(x(G,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const G=b(D);G&&(G.isCubeTexture||G.mapping===Tc)?(v===void 0&&(v=new _n(new uo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ro(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Ir.copy(D.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yA.makeRotationFromEuler(Ir)),v.material.toneMapped=Ne.getTransfer(G.colorSpace)!==ke,(p!==G||S!==G.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=G,S=G.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new _n(new bc(2,2),new or({name:"BackgroundMaterial",uniforms:ro(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(G.colorSpace)!==ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(p!==G||S!==G.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,p=G,S=G.version,M=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function x(O,D){O.getRGB(dc,Nx(o)),s.buffers.color.setClear(dc.r,dc.g,dc.b,D,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),_=D,x(h,_)},getClearAlpha:function(){return _},setClearAlpha:function(O){_=O,x(h,_)},render:R,addToRenderList:y,dispose:I}}function EA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,d=!1;function h(C,V,st,ft,_t){let ut=!1;const X=p(ft,st,V);f!==X&&(f=X,m(f.object)),ut=M(C,ft,st,_t),ut&&b(C,ft,st,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,D(C,V,st,ft),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function _(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function p(C,V,st){const ft=st.wireframe===!0;let _t=s[C.id];_t===void 0&&(_t={},s[C.id]=_t);let ut=_t[V.id];ut===void 0&&(ut={},_t[V.id]=ut);let X=ut[ft];return X===void 0&&(X=S(_()),ut[ft]=X),X}function S(C){const V=[],st=[],ft=[];for(let _t=0;_t<a;_t++)V[_t]=0,st[_t]=0,ft[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:ft,object:C,attributes:{},index:null}}function M(C,V,st,ft){const _t=f.attributes,ut=V.attributes;let X=0;const nt=st.getAttributes();for(const j in nt)if(nt[j].location>=0){const St=_t[j];let Bt=ut[j];if(Bt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Bt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Bt=C.instanceColor)),St===void 0||St.attribute!==Bt||Bt&&St.data!==Bt.data)return!0;X++}return f.attributesNum!==X||f.index!==ft}function b(C,V,st,ft){const _t={},ut=V.attributes;let X=0;const nt=st.getAttributes();for(const j in nt)if(nt[j].location>=0){let St=ut[j];St===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Bt={};Bt.attribute=St,St&&St.data&&(Bt.data=St.data),_t[j]=Bt,X++}f.attributes=_t,f.attributesNum=X,f.index=ft}function R(){const C=f.newAttributes;for(let V=0,st=C.length;V<st;V++)C[V]=0}function y(C){x(C,0)}function x(C,V){const st=f.newAttributes,ft=f.enabledAttributes,_t=f.attributeDivisors;st[C]=1,ft[C]===0&&(o.enableVertexAttribArray(C),ft[C]=1),_t[C]!==V&&(o.vertexAttribDivisor(C,V),_t[C]=V)}function I(){const C=f.newAttributes,V=f.enabledAttributes;for(let st=0,ft=V.length;st<ft;st++)V[st]!==C[st]&&(o.disableVertexAttribArray(st),V[st]=0)}function O(C,V,st,ft,_t,ut,X){X===!0?o.vertexAttribIPointer(C,V,st,_t,ut):o.vertexAttribPointer(C,V,st,ft,_t,ut)}function D(C,V,st,ft){R();const _t=ft.attributes,ut=st.getAttributes(),X=V.defaultAttributeValues;for(const nt in ut){const j=ut[nt];if(j.location>=0){let vt=_t[nt];if(vt===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const St=vt.normalized,Bt=vt.itemSize,ne=e.get(vt);if(ne===void 0)continue;const me=ne.buffer,L=ne.type,ht=ne.bytesPerElement,Q=L===o.INT||L===o.UNSIGNED_INT||vt.gpuType===zp;if(vt.isInterleavedBufferAttribute){const it=vt.data,q=it.stride,Mt=vt.offset;if(it.isInstancedInterleavedBuffer){for(let bt=0;bt<j.locationSize;bt++)x(j.location+bt,it.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let bt=0;bt<j.locationSize;bt++)y(j.location+bt);o.bindBuffer(o.ARRAY_BUFFER,me);for(let bt=0;bt<j.locationSize;bt++)O(j.location+bt,Bt/j.locationSize,L,St,q*ht,(Mt+Bt/j.locationSize*bt)*ht,Q)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)x(j.location+it,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<j.locationSize;it++)y(j.location+it);o.bindBuffer(o.ARRAY_BUFFER,me);for(let it=0;it<j.locationSize;it++)O(j.location+it,Bt/j.locationSize,L,St,Bt*ht,Bt/j.locationSize*it*ht,Q)}}else if(X!==void 0){const St=X[nt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(j.location,St);break;case 3:o.vertexAttrib3fv(j.location,St);break;case 4:o.vertexAttrib4fv(j.location,St);break;default:o.vertexAttrib1fv(j.location,St)}}}}I()}function G(){k();for(const C in s){const V=s[C];for(const st in V){const ft=V[st];for(const _t in ft)v(ft[_t].object),delete ft[_t];delete V[st]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const st in V){const ft=V[st];for(const _t in ft)v(ft[_t].object),delete ft[_t];delete V[st]}delete s[C.id]}function P(C){for(const V in s){const st=s[V];if(st[C.id]===void 0)continue;const ft=st[C.id];for(const _t in ft)v(ft[_t].object),delete ft[_t];delete st[C.id]}}function k(){w(),d=!0,f!==u&&(f=u,m(f.object))}function w(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:k,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:I}}function TA(o,e,a){let s;function u(m){s=m}function f(m,v){o.drawArrays(s,m,v),a.update(v,s,1)}function d(m,v,p){p!==0&&(o.drawArraysInstanced(s,m,v,p),a.update(v,s,p))}function h(m,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,p);let M=0;for(let b=0;b<p;b++)M+=v[b];a.update(M,s,1)}function _(m,v,p,S){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)d(m[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,S,0,p);let b=0;for(let R=0;R<p;R++)b+=v[R]*S[R];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=_}function bA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(P){return!(P!==Ni&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===yl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ji&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zi&&!k)}function _(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=a.precision!==void 0?a.precision:"highp";const v=_(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const p=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:G,maxSamples:B}}function AA(o){const e=this;let a=null,s=0,u=!1,f=!1;const d=new Fr,h=new de,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const M=p.length!==0||S||s!==0||u;return u=S,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){a=v(p,S,0)},this.setState=function(p,S,M){const b=p.clippingPlanes,R=p.clipIntersection,y=p.clipShadows,x=o.get(p);if(!u||b===null||b.length===0||f&&!y)f?v(null):m();else{const I=f?0:s,O=I*4;let D=x.clippingState||null;_.value=D,D=v(b,S,O,M);for(let G=0;G!==O;++G)D[G]=a[G];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(p,S,M,b){const R=p!==null?p.length:0;let y=null;if(R!==0){if(y=_.value,b!==!0||y===null){const x=M+R*4,I=S.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,D=M;O!==R;++O,D+=4)d.copy(p[O]).applyMatrix4(I,h),d.normal.toArray(y,D),y[D+3]=d.constant}_.value=y,_.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function RA(o){let e=new WeakMap;function a(d,h){return h===Qd?d.mapping=no:h===Jd&&(d.mapping=io),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Qd||h===Jd)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const m=new bT(_.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",u),a(m.texture,d.mapping)}else return null}}return d}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const Qs=4,Xv=[.125,.215,.35,.446,.526,.582],Vr=20,zd=new Hx,kv=new Re;let Pd=null,Id=0,Bd=0,Fd=!1;const Hr=(1+Math.sqrt(5))/2,js=1/Hr,qv=[new rt(-Hr,js,0),new rt(Hr,js,0),new rt(-js,0,Hr),new rt(js,0,Hr),new rt(0,Hr,-js),new rt(0,Hr,js),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],CA=new rt;class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100,f={}){const{size:d=256,position:h=CA}=f;Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,s,u,_,h),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Id,Bd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:yl,format:Ni,colorSpace:ao,depthBuffer:!1},u=Yv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wA(f)),this._blurMaterial=DA(f,e,a)}return u}_compileMaterial(e){const a=new _n(this._lodPlanes[0],e);this._renderer.compile(a,zd)}_sceneToCubeUV(e,a,s,u,f){const _=new li(90,1,a,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,M=p.toneMapping;p.getClearColor(kv),p.toneMapping=rr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const R=new wx({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new _n(new uo,R);let x=!1;const I=e.background;I?I.isColor&&(R.color.copy(I),e.background=null,x=!0):(R.color.copy(kv),x=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(_.up.set(0,m[O],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[O],f.y,f.z)):D===1?(_.up.set(0,0,m[O]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[O],f.z)):(_.up.set(0,m[O],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[O]));const G=this._cubeSize;pc(u,D*G,O>2?G:0,G,G),p.setRenderTarget(u),x&&p.render(y,_),p.render(e,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=S,e.background=I}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===no||e.mapping===io;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const f=u?this._cubemapMaterial:this._equirectMaterial,d=new _n(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const _=this._cubeSize;pc(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(d,zd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=qv[(u-f-1)%qv.length];this._blur(e,f-1,f,d,h)}a.autoClear=s}_blur(e,a,s,u,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,a,s,u,"latitudinal",f),this._halfBlur(d,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,d,h){const _=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new _n(this._lodPlanes[u],m),S=m.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),R=f/b,y=isFinite(f)?1+Math.floor(v*R):Vr;y>Vr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const x=[];let I=0;for(let P=0;P<Vr;++P){const k=P/R,w=Math.exp(-k*k/2);x.push(w),P===0?I+=w:P<y&&(I+=2*w)}for(let P=0;P<x.length;P++)x[P]=x[P]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const D=this._sizeLods[u],G=3*D*(u>O-Qs?u-O+Qs:0),B=4*(this._cubeSize-D);pc(a,G,B,3*D,2*D),_.setRenderTarget(a),_.render(p,zd)}}function wA(o){const e=[],a=[],s=[];let u=o;const f=o-Qs+1+Xv.length;for(let d=0;d<f;d++){const h=Math.pow(2,u);a.push(h);let _=1/h;d>o-Qs?_=Xv[d-o+Qs-1]:d===0&&(_=0),s.push(_);const m=1/(h-2),v=-m,p=1+m,S=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,b=6,R=3,y=2,x=1,I=new Float32Array(R*b*M),O=new Float32Array(y*b*M),D=new Float32Array(x*b*M);for(let B=0;B<M;B++){const P=B%3*2/3-1,k=B>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];I.set(w,R*b*B),O.set(S,y*b*B);const C=[B,B,B,B,B,B];D.set(C,x*b*B)}const G=new lr;G.setAttribute("position",new Li(I,R)),G.setAttribute("uv",new Li(O,y)),G.setAttribute("faceIndex",new Li(D,x)),e.push(G),u>Qs&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function Yv(o,e,a){const s=new Yr(o,e,a);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function pc(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function DA(o,e,a){const s=new Float32Array(Vr),u=new rt(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Wp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Wv(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function jv(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Wp(){return`

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
	`}function UA(o){let e=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const _=h.mapping,m=_===Qd||_===Jd,v=_===no||_===io;if(m||v){let p=e.get(h);const S=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return a===null&&(a=new Dp(o)),p=m?a.fromEquirectangular(h,p):a.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new Dp(o)),p=m?a.fromEquirectangular(h):a.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function u(h){let _=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&_++;return _===m}function f(h){const _=h.target;_.removeEventListener("dispose",f);const m=e.get(_);m!==void 0&&(e.delete(_),m.dispose())}function d(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function NA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&Sl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function LA(o,e,a,s){const u={},f=new WeakMap;function d(p){const S=p.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete u[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function h(p,S){return u[S.id]===!0||(S.addEventListener("dispose",d),u[S.id]=!0,a.memory.geometries++),S}function _(p){const S=p.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function m(p){const S=[],M=p.index,b=p.attributes.position;let R=0;if(M!==null){const I=M.array;R=M.version;for(let O=0,D=I.length;O<D;O+=3){const G=I[O+0],B=I[O+1],P=I[O+2];S.push(G,B,B,P,P,G)}}else if(b!==void 0){const I=b.array;R=b.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const G=O+0,B=O+1,P=O+2;S.push(G,B,B,P,P,G)}}else return;const y=new(bx(S)?Ux:Dx)(S,1);y.version=R;const x=f.get(p);x&&e.remove(x),f.set(p,y)}function v(p){const S=f.get(p);if(S){const M=p.index;M!==null&&S.version<M.version&&m(p)}else m(p);return f.get(p)}return{get:h,update:_,getWireframeAttribute:v}}function OA(o,e,a){let s;function u(S){s=S}let f,d;function h(S){f=S.type,d=S.bytesPerElement}function _(S,M){o.drawElements(s,M,f,S*d),a.update(M,s,1)}function m(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*d,b),a.update(M,s,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];a.update(y,s,1)}function p(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)m(S[x]/d,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,R,0,b);let x=0;for(let I=0;I<b;I++)x+=M[I]*R[I];a.update(x,s,1)}}this.setMode=u,this.setIndex=h,this.render=_,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function zA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function PA(o,e,a){const s=new WeakMap,u=new qe;function f(d,h,_){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==p){let C=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let G=h.attributes.position.count*D,B=1;G>e.maxTextureSize&&(B=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const P=new Float32Array(G*B*4*p),k=new Ax(P,G,B,p);k.type=Zi,k.needsUpdate=!0;const w=D*4;for(let V=0;V<p;V++){const st=x[V],ft=I[V],_t=O[V],ut=G*B*4*V;for(let X=0;X<st.count;X++){const nt=X*w;b===!0&&(u.fromBufferAttribute(st,X),P[ut+nt+0]=u.x,P[ut+nt+1]=u.y,P[ut+nt+2]=u.z,P[ut+nt+3]=0),R===!0&&(u.fromBufferAttribute(ft,X),P[ut+nt+4]=u.x,P[ut+nt+5]=u.y,P[ut+nt+6]=u.z,P[ut+nt+7]=0),y===!0&&(u.fromBufferAttribute(_t,X),P[ut+nt+8]=u.x,P[ut+nt+9]=u.y,P[ut+nt+10]=u.z,P[ut+nt+11]=_t.itemSize===4?u.w:1)}}S={count:p,texture:k,size:new Ce(G,B)},s.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const R=h.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",R),_.getUniforms().setValue(o,"morphTargetInfluences",m)}_.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function IA(o,e,a,s){let u=new WeakMap;function f(_){const m=s.render.frame,v=_.geometry,p=e.get(_,v);if(u.get(p)!==m&&(e.update(p),u.set(p,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",h)===!1&&_.addEventListener("dispose",h),u.get(_)!==m&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,m))),_.isSkinnedMesh){const S=_.skeleton;u.get(S)!==m&&(S.update(),u.set(S,m))}return p}function d(){u=new WeakMap}function h(_){const m=_.target;m.removeEventListener("dispose",h),a.remove(m.instanceMatrix),m.instanceColor!==null&&a.remove(m.instanceColor)}return{update:f,dispose:d}}const Vx=new qn,Zv=new Px(1,1),Xx=new Ax,kx=new oT,qx=new Ox,Kv=[],Qv=[],Jv=new Float32Array(16),$v=new Float32Array(9),tx=new Float32Array(4);function co(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=Kv[u];if(f===void 0&&(f=new Float32Array(u),Kv[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=a,o[d].toArray(f,h)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function xn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Ac(o,e){let a=Qv[e];a===void 0&&(a=new Int32Array(e),Qv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function BA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function FA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(vn(a,e))return;o.uniform2fv(this.addr,e),xn(a,e)}}function HA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(vn(a,e))return;o.uniform3fv(this.addr,e),xn(a,e)}}function GA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(vn(a,e))return;o.uniform4fv(this.addr,e),xn(a,e)}}function VA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(vn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(a,e)}else{if(vn(a,s))return;tx.set(s),o.uniformMatrix2fv(this.addr,!1,tx),xn(a,s)}}function XA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(vn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(a,e)}else{if(vn(a,s))return;$v.set(s),o.uniformMatrix3fv(this.addr,!1,$v),xn(a,s)}}function kA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(vn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(a,e)}else{if(vn(a,s))return;Jv.set(s),o.uniformMatrix4fv(this.addr,!1,Jv),xn(a,s)}}function qA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function YA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(vn(a,e))return;o.uniform2iv(this.addr,e),xn(a,e)}}function WA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(vn(a,e))return;o.uniform3iv(this.addr,e),xn(a,e)}}function jA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(vn(a,e))return;o.uniform4iv(this.addr,e),xn(a,e)}}function ZA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function KA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(vn(a,e))return;o.uniform2uiv(this.addr,e),xn(a,e)}}function QA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(vn(a,e))return;o.uniform3uiv(this.addr,e),xn(a,e)}}function JA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(vn(a,e))return;o.uniform4uiv(this.addr,e),xn(a,e)}}function $A(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Zv.compareFunction=Tx,f=Zv):f=Vx,a.setTexture2D(e||f,u)}function tR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||kx,u)}function eR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||qx,u)}function nR(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||Xx,u)}function iR(o){switch(o){case 5126:return BA;case 35664:return FA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return XA;case 35676:return kA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return WA;case 35669:case 35673:return jA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return nR}}function aR(o,e){o.uniform1fv(this.addr,e)}function rR(o,e){const a=co(e,this.size,2);o.uniform2fv(this.addr,a)}function sR(o,e){const a=co(e,this.size,3);o.uniform3fv(this.addr,a)}function oR(o,e){const a=co(e,this.size,4);o.uniform4fv(this.addr,a)}function lR(o,e){const a=co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function uR(o,e){const a=co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function cR(o,e){const a=co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function fR(o,e){o.uniform1iv(this.addr,e)}function hR(o,e){o.uniform2iv(this.addr,e)}function dR(o,e){o.uniform3iv(this.addr,e)}function pR(o,e){o.uniform4iv(this.addr,e)}function mR(o,e){o.uniform1uiv(this.addr,e)}function gR(o,e){o.uniform2uiv(this.addr,e)}function _R(o,e){o.uniform3uiv(this.addr,e)}function vR(o,e){o.uniform4uiv(this.addr,e)}function xR(o,e,a){const s=this.cache,u=e.length,f=Ac(a,u);vn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)a.setTexture2D(e[d]||Vx,f[d])}function SR(o,e,a){const s=this.cache,u=e.length,f=Ac(a,u);vn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)a.setTexture3D(e[d]||kx,f[d])}function yR(o,e,a){const s=this.cache,u=e.length,f=Ac(a,u);vn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)a.setTextureCube(e[d]||qx,f[d])}function MR(o,e,a){const s=this.cache,u=e.length,f=Ac(a,u);vn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)a.setTexture2DArray(e[d]||Xx,f[d])}function ER(o){switch(o){case 5126:return aR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return lR;case 35675:return uR;case 35676:return cR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return dR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return _R;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return MR}}class TR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=iR(a.type)}}class bR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=ER(a.type)}}class AR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,a[h.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function ex(o,e){o.seq.push(e),o.map[e.id]=e}function RR(o,e,a){const s=o.name,u=s.length;for(Hd.lastIndex=0;;){const f=Hd.exec(s),d=Hd.lastIndex;let h=f[1];const _=f[2]==="]",m=f[3];if(_&&(h=h|0),m===void 0||m==="["&&d+2===u){ex(a,m===void 0?new TR(h,o,e):new bR(h,o,e));break}else{let p=a.map[h];p===void 0&&(p=new AR(h),ex(a,p)),a=p}}}class Sc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),d=e.getUniformLocation(a,f.name);RR(f,d,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,d=a.length;f!==d;++f){const h=a[f],_=s[h.id];_.needsUpdate!==!1&&h.setValue(e,_.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in a&&s.push(d)}return s}}function nx(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const CR=37297;let wR=0;function DR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const ix=new de;function UR(o){Ne._getMatrix(ix,Ne.workingColorSpace,o);const e=`mat3( ${ix.elements.map(a=>a.toFixed(4))} )`;switch(Ne.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ax(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return a.toUpperCase()+`

`+f+`

`+DR(o.getShaderSource(e),h)}else return f}function NR(o,e){const a=UR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function LR(o,e){let a;switch(e){case SE:a="Linear";break;case yE:a="Reinhard";break;case ME:a="Cineon";break;case mx:a="ACESFilmic";break;case TE:a="AgX";break;case bE:a="Neutral";break;case EE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const mc=new rt;function OR(){Ne.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),e=mc.y.toFixed(4),a=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function PR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function IR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return a}function fl(o){return o!==""}function rx(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(o){return o.replace(BR,HR)}const FR=new Map;function HR(o,e){let a=pe[e];if(a===void 0){const s=FR.get(e);if(s!==void 0)a=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Up(a)}const GR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(o){return o.replace(GR,VR)}function VR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function lx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function XR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===px?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(e="SHADOWMAP_TYPE_VSM"),e}function kR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===io&&(e="ENVMAP_MODE_REFRACTION"),e}function YR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case vE:e="ENVMAP_BLENDING_MIX";break;case xE:e="ENVMAP_BLENDING_ADD";break}return e}function WR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function jR(o,e,a,s){const u=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const _=XR(a),m=kR(a),v=qR(a),p=YR(a),S=WR(a),M=zR(a),b=PR(f),R=u.createProgram();let y,x,I=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(fl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(fl).join(`
`),x.length>0&&(x+=`
`)):(y=[lx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),x=[lx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+m:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==rr?"#define TONE_MAPPING":"",a.toneMapping!==rr?pe.tonemapping_pars_fragment:"",a.toneMapping!==rr?LR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,NR("linearToOutputTexel",a.outputColorSpace),OR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(fl).join(`
`)),d=Up(d),d=rx(d,a),d=sx(d,a),h=Up(h),h=rx(h,a),h=sx(h,a),d=ox(d),h=ox(h),a.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=I+y+d,D=I+x+h,G=nx(u,u.VERTEX_SHADER,O),B=nx(u,u.FRAGMENT_SHADER,D);u.attachShader(R,G),u.attachShader(R,B),a.index0AttributeName!==void 0?u.bindAttribLocation(R,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(R,0,"position"),u.linkProgram(R);function P(V){if(o.debug.checkShaderErrors){const st=u.getProgramInfoLog(R)||"",ft=u.getShaderInfoLog(G)||"",_t=u.getShaderInfoLog(B)||"",ut=st.trim(),X=ft.trim(),nt=_t.trim();let j=!0,vt=!0;if(u.getProgramParameter(R,u.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,R,G,B);else{const St=ax(u,G,"vertex"),Bt=ax(u,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(R,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+St+`
`+Bt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(X===""||nt==="")&&(vt=!1);vt&&(V.diagnostics={runnable:j,programLog:ut,vertexShader:{log:X,prefix:y},fragmentShader:{log:nt,prefix:x}})}u.deleteShader(G),u.deleteShader(B),k=new Sc(u,R),w=IR(u,R)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(R,CR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(R),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=wR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let ZR=0;class KR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(u)===!1&&(d.add(u),u.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new QR(e),a.set(e,s)),s}}class QR{constructor(e){this.id=ZR++,this.code=e,this.usedTimes=0}}function JR(o,e,a,s,u,f,d){const h=new Rx,_=new KR,m=new Set,v=[],p=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,st,ft){const _t=st.fog,ut=ft.geometry,X=w.isMeshStandardMaterial?st.environment:null,nt=(w.isMeshStandardMaterial?a:e).get(w.envMap||X),j=nt&&nt.mapping===Tc?nt.image.height:null,vt=b[w.type];w.precision!==null&&(M=u.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Bt=St!==void 0?St.length:0;let ne=0;ut.morphAttributes.position!==void 0&&(ne=1),ut.morphAttributes.normal!==void 0&&(ne=2),ut.morphAttributes.color!==void 0&&(ne=3);let me,L,ht,Q;if(vt){const ye=Wi[vt];me=ye.vertexShader,L=ye.fragmentShader}else me=w.vertexShader,L=w.fragmentShader,_.update(w),ht=_.getVertexShaderID(w),Q=_.getFragmentShaderID(w);const it=o.getRenderTarget(),q=o.state.buffers.depth.getReversed(),Mt=ft.isInstancedMesh===!0,bt=ft.isBatchedMesh===!0,Et=!!w.map,Gt=!!w.matcap,z=!!nt,Ge=!!w.aoMap,se=!!w.lightMap,Qt=!!w.bumpMap,Lt=!!w.normalMap,ae=!!w.displacementMap,Ht=!!w.emissiveMap,oe=!!w.metalnessMap,Ye=!!w.roughnessMap,je=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,at=w.iridescence>0,mt=w.sheen>0,yt=w.transmission>0,dt=je&&!!w.anisotropyMap,kt=U&&!!w.clearcoatMap,wt=U&&!!w.clearcoatNormalMap,jt=U&&!!w.clearcoatRoughnessMap,Kt=at&&!!w.iridescenceMap,Rt=at&&!!w.iridescenceThicknessMap,Ot=mt&&!!w.sheenColorMap,ie=mt&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,zt=!!w.specularColorMap,ce=!!w.specularIntensityMap,H=yt&&!!w.transmissionMap,Ct=yt&&!!w.thicknessMap,Ut=!!w.gradientMap,Xt=!!w.alphaMap,Tt=w.alphaTest>0,xt=!!w.alphaHash,Wt=!!w.extensions;let ue=rr;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:L,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:bt,batchingColor:bt&&ft._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&ft.instanceColor!==null,instancingMorph:Mt&&ft.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ao,alphaToCoverage:!!w.alphaToCoverage,map:Et,matcap:Gt,envMap:z,envMapMode:z&&nt.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:S&&ae,emissiveMap:Ht,normalMapObjectSpace:Lt&&w.normalMapType===wE,normalMapTangentSpace:Lt&&w.normalMapType===Vp,metalnessMap:oe,roughnessMap:Ye,anisotropy:je,anisotropyMap:dt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:wt,clearcoatRoughnessMap:jt,dispersion:T,iridescence:at,iridescenceMap:Kt,iridescenceThicknessMap:Rt,sheen:mt,sheenColorMap:Ot,sheenRoughnessMap:ie,specularMap:Zt,specularColorMap:zt,specularIntensityMap:ce,transmission:yt,transmissionMap:H,thicknessMap:Ct,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Tt,alphaHash:xt,combine:w.combine,mapUv:Et&&R(w.map.channel),aoMapUv:Ge&&R(w.aoMap.channel),lightMapUv:se&&R(w.lightMap.channel),bumpMapUv:Qt&&R(w.bumpMap.channel),normalMapUv:Lt&&R(w.normalMap.channel),displacementMapUv:ae&&R(w.displacementMap.channel),emissiveMapUv:Ht&&R(w.emissiveMap.channel),metalnessMapUv:oe&&R(w.metalnessMap.channel),roughnessMapUv:Ye&&R(w.roughnessMap.channel),anisotropyMapUv:dt&&R(w.anisotropyMap.channel),clearcoatMapUv:kt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&R(w.sheenRoughnessMap.channel),specularMapUv:Zt&&R(w.specularMap.channel),specularColorMapUv:zt&&R(w.specularColorMap.channel),specularIntensityMapUv:ce&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:Ct&&R(w.thicknessMap.channel),alphaMapUv:Xt&&R(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Lt||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ut.attributes.uv&&(Et||Xt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:q,skinning:ft.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ya,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=b[w.type];let V;if(C){const st=Wi[C];V=yT.clone(st.uniforms)}else V=w.uniforms;return V}function G(w,C){let V;for(let st=0,ft=v.length;st<ft;st++){const _t=v[st];if(_t.cacheKey===C){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new jR(o,C,w,f),v.push(V)),V}function B(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function P(w){_.remove(w)}function k(){_.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:G,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:k}}function $R(){let o=new WeakMap;function e(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,_){o.get(d)[h]=_}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function t2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ux(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function cx(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function d(p,S,M,b,R,y){let x=o[e];return x===void 0?(x={id:p.id,object:p,geometry:S,material:M,groupOrder:b,renderOrder:p.renderOrder,z:R,group:y},o[e]=x):(x.id=p.id,x.object=p,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=p.renderOrder,x.z=R,x.group=y),e++,x}function h(p,S,M,b,R,y){const x=d(p,S,M,b,R,y);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function _(p,S,M,b,R,y){const x=d(p,S,M,b,R,y);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function m(p,S){a.length>1&&a.sort(p||t2),s.length>1&&s.sort(S||ux),u.length>1&&u.sort(S||ux)}function v(){for(let p=e,S=o.length;p<S;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:h,unshift:_,finish:v,sort:m}}function e2(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new cx,o.set(s,[d])):u>=f.length?(d=new cx,f.push(d)):d=f[u],d}function a(){o=new WeakMap}return{get:e,dispose:a}}function n2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new rt,color:new Re};break;case"SpotLight":a={position:new rt,direction:new rt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new rt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":a={direction:new rt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":a={color:new Re,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=a,a}}}function i2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let a2=0;function r2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function s2(o){const e=new n2,a=i2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new rt);const u=new rt,f=new $e,d=new $e;function h(m){let v=0,p=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,I=0,O=0,D=0,G=0,B=0,P=0;m.sort(r2);for(let w=0,C=m.length;w<C;w++){const V=m[w],st=V.color,ft=V.intensity,_t=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=st.r*ft,p+=st.g*ft,S+=st.b*ft;else if(V.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(V.sh.coefficients[X],ft);P++}else if(V.isDirectionalLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const nt=V.shadow,j=a.get(V);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,I++}s.directional[M]=X,M++}else if(V.isSpotLight){const X=e.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(st).multiplyScalar(ft),X.distance=_t,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,s.spot[R]=X;const nt=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,nt.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[R]=nt.matrix,V.castShadow){const j=a.get(V);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,s.spotShadow[R]=j,s.spotShadowMap[R]=ut,D++}R++}else if(V.isRectAreaLight){const X=e.get(V);X.color.copy(st).multiplyScalar(ft),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=X,y++}else if(V.isPointLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),X.distance=V.distance,X.decay=V.decay,V.castShadow){const nt=V.shadow,j=a.get(V);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=V.shadow.matrix,O++}s.point[b]=X,b++}else if(V.isHemisphereLight){const X=e.get(V);X.skyColor.copy(V.color).multiplyScalar(ft),X.groundColor.copy(V.groundColor).multiplyScalar(ft),s.hemi[x]=X,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=S;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==I||k.numPointShadows!==O||k.numSpotShadows!==D||k.numSpotMaps!==G||k.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=I,k.numPointShadows=O,k.numSpotShadows=D,k.numSpotMaps=G,k.numLightProbes=P,s.version=a2++)}function _(m,v){let p=0,S=0,M=0,b=0,R=0;const y=v.matrixWorldInverse;for(let x=0,I=m.length;x<I;x++){const O=m[x];if(O.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),p++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),d.identity(),f.copy(O.matrixWorld),f.premultiply(y),d.extractRotation(f),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(O.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:h,setupView:_,state:s}}function fx(o){const e=new s2(o),a=[],s=[];function u(v){m.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function d(v){s.push(v)}function h(){e.setup(a)}function _(v){e.setupView(a,v)}const m={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:m,setupLights:h,setupLightsView:_,pushLight:f,pushShadow:d}}function o2(o){let e=new WeakMap;function a(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new fx(o),e.set(u,[h])):f>=d.length?(h=new fx(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:a,dispose:s}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`;function c2(o,e,a){let s=new qp;const u=new Ce,f=new Ce,d=new qe,h=new OT({depthPacking:CE}),_=new zT,m={},v=a.maxTextureSize,p={[sr]:kn,[kn]:sr,[ya]:ya},S=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:l2,fragmentShader:u2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new lr;b.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _n(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=px;let x=this.type;this.render=function(B,P,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),st=o.state;st.setBlending(ar),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ft=x!==Sa&&this.type===Sa,_t=x===Sa&&this.type!==Sa;for(let ut=0,X=B.length;ut<X;ut++){const nt=B[ut],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;u.copy(j.mapSize);const vt=j.getFrameExtents();if(u.multiply(vt),f.copy(j.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/vt.x),u.x=f.x*vt.x,j.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/vt.y),u.y=f.y*vt.y,j.mapSize.y=f.y)),j.map===null||ft===!0||_t===!0){const Bt=this.type!==Sa?{minFilter:ui,magFilter:ui}:{};j.map!==null&&j.map.dispose(),j.map=new Yr(u.x,u.y,Bt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const St=j.getViewportCount();for(let Bt=0;Bt<St;Bt++){const ne=j.getViewport(Bt);d.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),st.viewport(d),j.updateMatrices(nt,Bt),s=j.getFrustum(),D(P,k,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===Sa&&I(j,k),j.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,V)};function I(B,P){const k=e.update(R);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yr(u.x,u.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,k,S,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,k,M,R,null)}function O(B,P,k,w){let C=null;const V=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=k.isPointLight===!0?_:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const st=C.uuid,ft=P.uuid;let _t=m[st];_t===void 0&&(_t={},m[st]=_t);let ut=_t[ft];ut===void 0&&(ut=C.clone(),_t[ft]=ut,P.addEventListener("dispose",G)),C=ut}if(C.visible=P.visible,C.wireframe=P.wireframe,w===Sa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:p[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=o.properties.get(C);st.light=k}return C}function D(B,P,k,w,C){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Sa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const ft=e.update(B),_t=B.material;if(Array.isArray(_t)){const ut=ft.groups;for(let X=0,nt=ut.length;X<nt;X++){const j=ut[X],vt=_t[j.materialIndex];if(vt&&vt.visible){const St=O(B,vt,w,C);B.onBeforeShadow(o,B,P,k,ft,St,j),o.renderBufferDirect(k,null,ft,St,B,j),B.onAfterShadow(o,B,P,k,ft,St,j)}}}else if(_t.visible){const ut=O(B,_t,w,C);B.onBeforeShadow(o,B,P,k,ft,ut,null),o.renderBufferDirect(k,null,ft,ut,B,null),B.onAfterShadow(o,B,P,k,ft,ut,null)}}const st=B.children;for(let ft=0,_t=st.length;ft<_t;ft++)D(st[ft],P,k,w,C)}function G(B){B.target.removeEventListener("dispose",G);for(const k in m){const w=m[k],C=B.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const f2={[kd]:qd,[Yd]:Zd,[Wd]:Kd,[eo]:jd,[qd]:kd,[Zd]:Yd,[Kd]:Wd,[jd]:eo};function h2(o,e){function a(){let H=!1;const Ct=new qe;let Ut=null;const Xt=new qe(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!H&&(o.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,xt,Wt,ue,Ve){Ve===!0&&(Tt*=ue,xt*=ue,Wt*=ue),Ct.set(Tt,xt,Wt,ue),Xt.equals(Ct)===!1&&(o.clearColor(Tt,xt,Wt,ue),Xt.copy(Ct))},reset:function(){H=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let H=!1,Ct=!1,Ut=null,Xt=null,Tt=null;return{setReversed:function(xt){if(Ct!==xt){const Wt=e.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ct=xt;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Ct},setTest:function(xt){xt?it(o.DEPTH_TEST):q(o.DEPTH_TEST)},setMask:function(xt){Ut!==xt&&!H&&(o.depthMask(xt),Ut=xt)},setFunc:function(xt){if(Ct&&(xt=f2[xt]),Xt!==xt){switch(xt){case kd:o.depthFunc(o.NEVER);break;case qd:o.depthFunc(o.ALWAYS);break;case Yd:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Wd:o.depthFunc(o.EQUAL);break;case jd:o.depthFunc(o.GEQUAL);break;case Zd:o.depthFunc(o.GREATER);break;case Kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Tt!==xt&&(Ct&&(xt=1-xt),o.clearDepth(xt),Tt=xt)},reset:function(){H=!1,Ut=null,Xt=null,Tt=null,Ct=!1}}}function u(){let H=!1,Ct=null,Ut=null,Xt=null,Tt=null,xt=null,Wt=null,ue=null,Ve=null;return{setTest:function(ye){H||(ye?it(o.STENCIL_TEST):q(o.STENCIL_TEST))},setMask:function(ye){Ct!==ye&&!H&&(o.stencilMask(ye),Ct=ye)},setFunc:function(ye,en,pn){(Ut!==ye||Xt!==en||Tt!==pn)&&(o.stencilFunc(ye,en,pn),Ut=ye,Xt=en,Tt=pn)},setOp:function(ye,en,pn){(xt!==ye||Wt!==en||ue!==pn)&&(o.stencilOp(ye,en,pn),xt=ye,Wt=en,ue=pn)},setLocked:function(ye){H=ye},setClear:function(ye){Ve!==ye&&(o.clearStencil(ye),Ve=ye)},reset:function(){H=!1,Ct=null,Ut=null,Xt=null,Tt=null,xt=null,Wt=null,ue=null,Ve=null}}}const f=new a,d=new s,h=new u,_=new WeakMap,m=new WeakMap;let v={},p={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,I=null,O=null,D=null,G=null,B=null,P=new Re(0,0,0),k=0,w=!1,C=null,V=null,st=null,ft=null,_t=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,nt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=nt>=2);let vt=null,St={};const Bt=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),me=new qe().fromArray(Bt),L=new qe().fromArray(ne);function ht(H,Ct,Ut,Xt){const Tt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ut;Wt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ct+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return xt}const Q={};Q[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),it(o.DEPTH_TEST),d.setFunc(eo),Qt(!1),Lt(fv),it(o.CULL_FACE),Ge(ar);function it(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function q(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Mt(H,Ct){return p[H]!==Ct?(o.bindFramebuffer(H,Ct),p[H]=Ct,H===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Ct),H===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function bt(H,Ct){let Ut=M,Xt=!1;if(H){Ut=S.get(Ct),Ut===void 0&&(Ut=[],S.set(Ct,Ut));const Tt=H.textures;if(Ut.length!==Tt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Wt=Tt.length;xt<Wt;xt++)Ut[xt]=o.COLOR_ATTACHMENT0+xt;Ut.length=Tt.length,Xt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ut)}function Et(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const Gt={[Gr]:o.FUNC_ADD,[eE]:o.FUNC_SUBTRACT,[nE]:o.FUNC_REVERSE_SUBTRACT};Gt[iE]=o.MIN,Gt[aE]=o.MAX;const z={[rE]:o.ZERO,[sE]:o.ONE,[oE]:o.SRC_COLOR,[Vd]:o.SRC_ALPHA,[dE]:o.SRC_ALPHA_SATURATE,[fE]:o.DST_COLOR,[uE]:o.DST_ALPHA,[lE]:o.ONE_MINUS_SRC_COLOR,[Xd]:o.ONE_MINUS_SRC_ALPHA,[hE]:o.ONE_MINUS_DST_COLOR,[cE]:o.ONE_MINUS_DST_ALPHA,[pE]:o.CONSTANT_COLOR,[mE]:o.ONE_MINUS_CONSTANT_COLOR,[gE]:o.CONSTANT_ALPHA,[_E]:o.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,Ct,Ut,Xt,Tt,xt,Wt,ue,Ve,ye){if(H===ar){R===!0&&(q(o.BLEND),R=!1);return}if(R===!1&&(it(o.BLEND),R=!0),H!==tE){if(H!==y||ye!==w){if((x!==Gr||D!==Gr)&&(o.blendEquation(o.FUNC_ADD),x=Gr,D=Gr),ye)switch(H){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFunc(o.ONE,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,O=null,G=null,B=null,P.set(0,0,0),k=0,y=H,w=ye}return}Tt=Tt||Ct,xt=xt||Ut,Wt=Wt||Xt,(Ct!==x||Tt!==D)&&(o.blendEquationSeparate(Gt[Ct],Gt[Tt]),x=Ct,D=Tt),(Ut!==I||Xt!==O||xt!==G||Wt!==B)&&(o.blendFuncSeparate(z[Ut],z[Xt],z[xt],z[Wt]),I=Ut,O=Xt,G=xt,B=Wt),(ue.equals(P)===!1||Ve!==k)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),P.copy(ue),k=Ve),y=H,w=!1}function se(H,Ct){H.side===ya?q(o.CULL_FACE):it(o.CULL_FACE);let Ut=H.side===kn;Ct&&(Ut=!Ut),Qt(Ut),H.blending===Js&&H.transparent===!1?Ge(ar):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),f.setMask(H.colorWrite);const Xt=H.stencilWrite;h.setTest(Xt),Xt&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):q(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function Lt(H){H!==QM?(it(o.CULL_FACE),H!==V&&(H===fv?o.cullFace(o.BACK):H===JM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):q(o.CULL_FACE),V=H}function ae(H){H!==st&&(X&&o.lineWidth(H),st=H)}function Ht(H,Ct,Ut){H?(it(o.POLYGON_OFFSET_FILL),(ft!==Ct||_t!==Ut)&&(o.polygonOffset(Ct,Ut),ft=Ct,_t=Ut)):q(o.POLYGON_OFFSET_FILL)}function oe(H){H?it(o.SCISSOR_TEST):q(o.SCISSOR_TEST)}function Ye(H){H===void 0&&(H=o.TEXTURE0+ut-1),vt!==H&&(o.activeTexture(H),vt=H)}function je(H,Ct,Ut){Ut===void 0&&(vt===null?Ut=o.TEXTURE0+ut-1:Ut=vt);let Xt=St[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},St[Ut]=Xt),(Xt.type!==H||Xt.texture!==Ct)&&(vt!==Ut&&(o.activeTexture(Ut),vt=Ut),o.bindTexture(H,Ct||Q[H]),Xt.type=H,Xt.texture=Ct)}function U(){const H=St[vt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Kt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(H){me.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),me.copy(H))}function ie(H){L.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),L.copy(H))}function Zt(H,Ct){let Ut=m.get(Ct);Ut===void 0&&(Ut=new WeakMap,m.set(Ct,Ut));let Xt=Ut.get(H);Xt===void 0&&(Xt=o.getUniformBlockIndex(Ct,H.name),Ut.set(H,Xt))}function zt(H,Ct){const Xt=m.get(Ct).get(H);_.get(Ct)!==Xt&&(o.uniformBlockBinding(Ct,Xt,H.__bindingPointIndex),_.set(Ct,Xt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,St={},p={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,I=null,O=null,D=null,G=null,B=null,P=new Re(0,0,0),k=0,w=!1,C=null,V=null,st=null,ft=null,_t=null,me.set(0,0,o.canvas.width,o.canvas.height),L.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:it,disable:q,bindFramebuffer:Mt,drawBuffers:bt,useProgram:Et,setBlending:Ge,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ae,setPolygonOffset:Ht,setScissorTest:oe,activeTexture:Ye,bindTexture:je,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:Kt,texImage3D:Rt,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:wt,texStorage3D:jt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:kt,scissor:Ot,viewport:ie,reset:ce}}function d2(o,e,a,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ce,v=new WeakMap;let p;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Ec("canvas")}function R(U,T,at){let mt=1;const yt=je(U);if((yt.width>at||yt.height>at)&&(mt=at/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(mt*yt.width),kt=Math.floor(mt*yt.height);p===void 0&&(p=b(dt,kt));const wt=T?b(dt,kt):p;return wt.width=dt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,at,mt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===o.RED&&(at===o.FLOAT&&(dt=o.R32F),at===o.HALF_FLOAT&&(dt=o.R16F),at===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(dt=o.R8UI),at===o.UNSIGNED_SHORT&&(dt=o.R16UI),at===o.UNSIGNED_INT&&(dt=o.R32UI),at===o.BYTE&&(dt=o.R8I),at===o.SHORT&&(dt=o.R16I),at===o.INT&&(dt=o.R32I)),T===o.RG&&(at===o.FLOAT&&(dt=o.RG32F),at===o.HALF_FLOAT&&(dt=o.RG16F),at===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(dt=o.RG8UI),at===o.UNSIGNED_SHORT&&(dt=o.RG16UI),at===o.UNSIGNED_INT&&(dt=o.RG32UI),at===o.BYTE&&(dt=o.RG8I),at===o.SHORT&&(dt=o.RG16I),at===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),at===o.UNSIGNED_INT&&(dt=o.RGB32UI),at===o.BYTE&&(dt=o.RGB8I),at===o.SHORT&&(dt=o.RGB16I),at===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),at===o.UNSIGNED_INT&&(dt=o.RGBA32UI),at===o.BYTE&&(dt=o.RGBA8I),at===o.SHORT&&(dt=o.RGBA16I),at===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&(at===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),T===o.RGBA){const kt=yt?yc:Ne.getTransfer(mt);at===o.FLOAT&&(dt=o.RGBA32F),at===o.HALF_FLOAT&&(dt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(dt=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,T){let at;return U?T===null||T===qr||T===gl?at=o.DEPTH24_STENCIL8:T===Zi?at=o.DEPTH32F_STENCIL8:T===ml&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===gl?at=o.DEPTH_COMPONENT24:T===Zi?at=o.DEPTH_COMPONENT32F:T===ml&&(at=o.DEPTH_COMPONENT16),at}function G(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ui&&U.minFilter!==ji?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),k(T),T.isVideoTexture&&v.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),C(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const at=U.source,mt=S.get(at);if(mt){const yt=mt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(mt).length===0&&S.delete(at)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const at=U.source,mt=S.get(at);delete mt[T.__cacheKey],d.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let yt=0;yt<T.__webglFramebuffer[mt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=U.textures;for(let mt=0,yt=at.length;mt<yt;mt++){const dt=s.get(at[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),d.memory.textures--),s.remove(at[mt])}s.remove(U)}let V=0;function st(){V=0}function ft(){const U=V;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),V+=1,U}function _t(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const at=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&at.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(at,U,T);return}}else U.isExternalTexture&&(at.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function X(U,T){const at=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){Q(at,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function nt(U,T){const at=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){Q(at,U,T);return}a.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function j(U,T){const at=s.get(U);if(U.version>0&&at.__version!==U.version){it(at,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const vt={[$d]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[tp]:o.MIRRORED_REPEAT},St={[ui]:o.NEAREST,[AE]:o.NEAREST_MIPMAP_NEAREST,[Wu]:o.NEAREST_MIPMAP_LINEAR,[ji]:o.LINEAR,[ud]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},Bt={[DE]:o.NEVER,[PE]:o.ALWAYS,[UE]:o.LESS,[Tx]:o.LEQUAL,[NE]:o.EQUAL,[zE]:o.GEQUAL,[LE]:o.GREATER,[OE]:o.NOTEQUAL};function ne(U,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ji||T.magFilter===ud||T.magFilter===Wu||T.magFilter===kr||T.minFilter===ji||T.minFilter===ud||T.minFilter===Wu||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Bt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==Wu&&T.minFilter!==kr||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function me(U,T){let at=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const mt=T.source;let yt=S.get(mt);yt===void 0&&(yt={},S.set(mt,yt));const dt=_t(T);if(dt!==U.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),yt[dt].usedTimes++;const kt=yt[U.__cacheKey];kt!==void 0&&(yt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(T)),U.__cacheKey=dt,U.__webglTexture=yt[dt].texture}return at}function L(U,T,at){return Math.floor(Math.floor(U/at)/T)}function ht(U,T,at,mt){const dt=U.updateRanges;if(dt.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,at,mt,T.data);else{dt.sort((Rt,Ot)=>Rt.start-Ot.start);let kt=0;for(let Rt=1;Rt<dt.length;Rt++){const Ot=dt[kt],ie=dt[Rt],Zt=Ot.start+Ot.count,zt=L(ie.start,T.width,4),ce=L(Ot.start,T.width,4);ie.start<=Zt+1&&zt===ce&&L(ie.start+ie.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ie.start+ie.count-Ot.start):(++kt,dt[kt]=ie)}dt.length=kt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Ot=dt.length;Rt<Ot;Rt++){const ie=dt[Rt],Zt=Math.floor(ie.start/4),zt=Math.ceil(ie.count/4),ce=Zt%T.width,H=Math.floor(Zt/T.width),Ct=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),a.texSubImage2D(o.TEXTURE_2D,0,ce,H,Ct,Ut,at,mt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function Q(U,T,at){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const yt=me(U,T),dt=T.source;a.bindTexture(mt,U.__webglTexture,o.TEXTURE0+at);const kt=s.get(dt);if(dt.version!==kt.__version||yt===!0){a.activeTexture(o.TEXTURE0+at);const wt=Ne.getPrimaries(Ne.workingColorSpace),jt=T.colorSpace===ir?null:Ne.getPrimaries(T.colorSpace),Kt=T.colorSpace===ir||wt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Rt=R(T.image,!1,u.maxTextureSize);Rt=Ye(T,Rt);const Ot=f.convert(T.format,T.colorSpace),ie=f.convert(T.type);let Zt=O(T.internalFormat,Ot,ie,T.colorSpace,T.isVideoTexture);ne(mt,T);let zt;const ce=T.mipmaps,H=T.isVideoTexture!==!0,Ct=kt.__version===void 0||yt===!0,Ut=dt.dataReady,Xt=G(T,Rt);if(T.isDepthTexture)Zt=D(T.format===vl,T.type),Ct&&(H?a.texStorage2D(o.TEXTURE_2D,1,Zt,Rt.width,Rt.height):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ie,null));else if(T.isDataTexture)if(ce.length>0){H&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,ce[0].width,ce[0].height);for(let Tt=0,xt=ce.length;Tt<xt;Tt++)zt=ce[Tt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,Ot,ie,zt.data);T.generateMipmaps=!1}else H?(Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height),Ut&&ht(T,Rt,Ot,ie)):a.texImage2D(o.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Ot,ie,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,ce[0].width,ce[0].height,Rt.depth);for(let Tt=0,xt=ce.length;Tt<xt;Tt++)if(zt=ce[Tt],T.format!==Ni)if(Ot!==null)if(H){if(Ut)if(T.layerUpdates.size>0){const Wt=Vv(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=zt.data.subarray(ue*Wt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Wt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ue,zt.width,zt.height,1,Ot,Ve)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Rt.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Zt,zt.width,zt.height,Rt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Rt.depth,Ot,ie,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Zt,zt.width,zt.height,Rt.depth,0,Ot,ie,zt.data)}else{H&&Ct&&a.texStorage2D(o.TEXTURE_2D,Xt,Zt,ce[0].width,ce[0].height);for(let Tt=0,xt=ce.length;Tt<xt;Tt++)zt=ce[Tt],T.format!==Ni?Ot!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,Ot,ie,zt.data)}else if(T.isDataArrayTexture)if(H){if(Ct&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut)if(T.layerUpdates.size>0){const Tt=Vv(Rt.width,Rt.height,T.format,T.type);for(const xt of T.layerUpdates){const Wt=Rt.data.subarray(xt*Tt/Rt.data.BYTES_PER_ELEMENT,(xt+1)*Tt/Rt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Rt.width,Rt.height,1,Ot,ie,Wt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ie,Rt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ie,Rt.data);else if(T.isData3DTexture)H?(Ct&&a.texStorage3D(o.TEXTURE_3D,Xt,Zt,Rt.width,Rt.height,Rt.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ot,ie,Rt.data)):a.texImage3D(o.TEXTURE_3D,0,Zt,Rt.width,Rt.height,Rt.depth,0,Ot,ie,Rt.data);else if(T.isFramebufferTexture){if(Ct)if(H)a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Rt.width,Rt.height);else{let Tt=Rt.width,xt=Rt.height;for(let Wt=0;Wt<Xt;Wt++)a.texImage2D(o.TEXTURE_2D,Wt,Zt,Tt,xt,0,Ot,ie,null),Tt>>=1,xt>>=1}}else if(ce.length>0){if(H&&Ct){const Tt=je(ce[0]);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Tt.width,Tt.height)}for(let Tt=0,xt=ce.length;Tt<xt;Tt++)zt=ce[Tt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ot,ie,zt):a.texImage2D(o.TEXTURE_2D,Tt,Zt,Ot,ie,zt);T.generateMipmaps=!1}else if(H){if(Ct){const Tt=je(Rt);a.texStorage2D(o.TEXTURE_2D,Xt,Zt,Tt.width,Tt.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ie,Rt)}else a.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ie,Rt);y(T)&&x(mt),kt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,at){if(T.image.length!==6)return;const mt=me(U,T),yt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+at);const dt=s.get(yt);if(yt.version!==dt.__version||mt===!0){a.activeTexture(o.TEXTURE0+at);const kt=Ne.getPrimaries(Ne.workingColorSpace),wt=T.colorSpace===ir?null:Ne.getPrimaries(T.colorSpace),jt=T.colorSpace===ir||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!Kt&&!Rt?Ot[xt]=R(T.image[xt],!0,u.maxCubemapSize):Ot[xt]=Rt?T.image[xt].image:T.image[xt],Ot[xt]=Ye(T,Ot[xt]);const ie=Ot[0],Zt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),ce=O(T.internalFormat,Zt,zt,T.colorSpace),H=T.isVideoTexture!==!0,Ct=dt.__version===void 0||mt===!0,Ut=yt.dataReady;let Xt=G(T,ie);ne(o.TEXTURE_CUBE_MAP,T);let Tt;if(Kt){H&&Ct&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ce,ie.width,ie.height);for(let xt=0;xt<6;xt++){Tt=Ot[xt].mipmaps;for(let Wt=0;Wt<Tt.length;Wt++){const ue=Tt[Wt];T.format!==Ni?Zt!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,ue.width,ue.height,Zt,ue.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,ue.width,ue.height,Zt,zt,ue.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ce,ue.width,ue.height,0,Zt,zt,ue.data)}}}else{if(Tt=T.mipmaps,H&&Ct){Tt.length>0&&Xt++;const xt=je(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Rt){H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,Zt,zt,Ot[xt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Ot[xt].width,Ot[xt].height,0,Zt,zt,Ot[xt].data);for(let Wt=0;Wt<Tt.length;Wt++){const Ve=Tt[Wt].image[xt].image;H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Ve.width,Ve.height,Zt,zt,Ve.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ce,Ve.width,Ve.height,0,Zt,zt,Ve.data)}}else{H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,zt,Ot[xt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Zt,zt,Ot[xt]);for(let Wt=0;Wt<Tt.length;Wt++){const ue=Tt[Wt];H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Zt,zt,ue.image[xt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ce,Zt,zt,ue.image[xt])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),dt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function q(U,T,at,mt,yt,dt){const kt=f.convert(at.format,at.colorSpace),wt=f.convert(at.type),jt=O(at.internalFormat,kt,wt,at.colorSpace),Kt=s.get(T),Rt=s.get(at);if(Rt.__renderTarget=T,!Kt.__hasExternalTextures){const Ot=Math.max(1,T.width>>dt),ie=Math.max(1,T.height>>dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,dt,jt,Ot,ie,T.depth,0,kt,wt,null):a.texImage2D(yt,dt,jt,Ot,ie,0,kt,wt,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,yt,Rt.__webglTexture,0,ae(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,yt,Rt.__webglTexture,dt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(U,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const mt=T.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,dt=D(T.stencilBuffer,yt),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ae(T);Ht(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const mt=T.textures;for(let yt=0;yt<mt.length;yt++){const dt=mt[yt],kt=f.convert(dt.format,dt.colorSpace),wt=f.convert(dt.type),jt=O(dt.internalFormat,kt,wt,dt.colorSpace),Kt=ae(T);at&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,jt,T.width,T.height):Ht(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const yt=mt.__webglTexture,dt=ae(T);if(T.depthTexture.format===_l)Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===vl)Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const T=s.get(U),at=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=mt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?bt(T.__webglFramebuffer[0],U):bt(T.__webglFramebuffer,U)}else if(at){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),Mt(T.__webglDepthbuffer[mt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Mt(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(U,T,at){const mt=s.get(U);T!==void 0&&q(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Et(U)}function z(U){const T=U.texture,at=s.get(U),mt=s.get(T);U.addEventListener("dispose",P);const yt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=yt.length>1;if(kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,d.memory.textures++),dt){at.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[wt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)at.__webglFramebuffer[wt][jt]=o.createFramebuffer()}else at.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)at.__webglFramebuffer[wt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,jt=yt.length;wt<jt;wt++){const Kt=s.get(yt[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ht(U)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];at.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[wt]);const Kt=f.convert(jt.format,jt.colorSpace),Rt=f.convert(jt.type),Ot=O(jt.internalFormat,Kt,Rt,jt.colorSpace,U.isXRRenderTarget===!0),ie=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,at.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(at.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)q(at.__webglFramebuffer[wt][jt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,jt);else q(at.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let wt=0,jt=yt.length;wt<jt;wt++){const Kt=yt[wt],Rt=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,Rt.__webglTexture),ne(Ot,Kt),q(at.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+wt,Ot,0),y(Kt)&&x(Ot)}a.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(wt,mt.__webglTexture),ne(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)q(at.__webglFramebuffer[jt],U,T,o.COLOR_ATTACHMENT0,wt,jt);else q(at.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&x(wt),a.unbindTexture()}U.depthBuffer&&Et(U)}function Ge(U){const T=U.textures;for(let at=0,mt=T.length;at<mt;at++){const yt=T[at];if(y(yt)){const dt=I(U),kt=s.get(yt).__webglTexture;a.bindTexture(dt,kt),x(dt),a.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,at=U.width,mt=U.height;let yt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),wt=T.length>1;if(wt)for(let Kt=0;Kt<T.length;Kt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const Rt=s.get(T[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,at,mt,0,0,at,mt,yt,o.NEAREST),_===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(dt),Qt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Kt=0;Kt<T.length;Kt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const Rt=s.get(T[Kt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Rt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(U){return Math.min(u.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=d.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function Ye(U,T){const at=U.colorSpace,mt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||at!==ao&&at!==ir&&(Ne.getTransfer(at)===ke?(mt!==Ni||yt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ft,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=Gt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ht}function p2(o,e){function a(s,u=ir){let f;const d=Ne.getTransfer(u);if(s===Ji)return o.UNSIGNED_BYTE;if(s===Pp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return o.UNSIGNED_SHORT_5_5_5_1;if(s===xx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Sx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===_x)return o.BYTE;if(s===vx)return o.SHORT;if(s===ml)return o.UNSIGNED_SHORT;if(s===zp)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===Zi)return o.FLOAT;if(s===yl)return o.HALF_FLOAT;if(s===yx)return o.ALPHA;if(s===Mx)return o.RGB;if(s===Ni)return o.RGBA;if(s===_l)return o.DEPTH_COMPONENT;if(s===vl)return o.DEPTH_STENCIL;if(s===Bp)return o.RED;if(s===Fp)return o.RED_INTEGER;if(s===Ex)return o.RG;if(s===Hp)return o.RG_INTEGER;if(s===Gp)return o.RGBA_INTEGER;if(s===gc||s===_c||s===vc||s===xc)if(d===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===gc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===gc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===np||s===ip||s===ap)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rp||s===sp||s===op)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===rp||s===sp)return d===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===op)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===lp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===up)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_p)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mp||s===Ep||s===Tp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Mp)return d===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ep)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bp||s===Ap||s===Rp||s===Cp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===bp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const m2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new Ix(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new or({vertexShader:m2,fragmentShader:g2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new _n(new bc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends so{constructor(e,a){super();const s=this;let u=null,f=1,d=null,h="local-floor",_=1,m=null,v=null,p=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new _2,x={},I=a.getContextAttributes();let O=null,D=null;const G=[],B=[],P=new Ce;let k=null;const w=new li;w.viewport=new qe;const C=new li;C.viewport=new qe;const V=[w,C],st=new FT;let ft=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=G[Q];return it===void 0&&(it=new Dd,G[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=G[Q];return it===void 0&&(it=new Dd,G[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=G[Q];return it===void 0&&(it=new Dd,G[Q]=it),it.getHandSpace()};function ut(Q){const it=B.indexOf(Q.inputSource);if(it===-1)return;const q=G[it];q!==void 0&&(q.update(Q.inputSource,Q.frame,m||d),q.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){u.removeEventListener("select",ut),u.removeEventListener("selectstart",ut),u.removeEventListener("selectend",ut),u.removeEventListener("squeeze",ut),u.removeEventListener("squeezestart",ut),u.removeEventListener("squeezeend",ut),u.removeEventListener("end",X),u.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<G.length;Q++){const it=B[Q];it!==null&&(B[Q]=null,G[Q].disconnect(it))}ft=null,_t=null,y.reset();for(const Q in x)delete x[Q];e.setRenderTarget(O),M=null,S=null,p=null,u=null,D=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return p===null&&R&&(p=new XRWebGLBinding(u,a)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(O=e.getRenderTarget(),u.addEventListener("select",ut),u.addEventListener("selectstart",ut),u.addEventListener("selectend",ut),u.addEventListener("squeeze",ut),u.addEventListener("squeezestart",ut),u.addEventListener("squeezeend",ut),u.addEventListener("end",X),u.addEventListener("inputsourceschange",nt),I.xrCompatible!==!0&&await a.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,Mt=null,bt=null;I.depth&&(bt=I.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,q=I.stencil?vl:_l,Mt=I.stencil?gl:qr);const Et={colorFormat:a.RGBA8,depthFormat:bt,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(Et),u.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Yr(S.textureWidth,S.textureHeight,{format:Ni,type:Ji,depthTexture:new Px(S.textureWidth,S.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const q={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,q),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Yr(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),m=null,d=await u.requestReferenceSpace(h),ht.setContext(u),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function nt(Q){for(let it=0;it<Q.removed.length;it++){const q=Q.removed[it],Mt=B.indexOf(q);Mt>=0&&(B[Mt]=null,G[Mt].disconnect(q))}for(let it=0;it<Q.added.length;it++){const q=Q.added[it];let Mt=B.indexOf(q);if(Mt===-1){for(let Et=0;Et<G.length;Et++)if(Et>=B.length){B.push(q),Mt=Et;break}else if(B[Et]===null){B[Et]=q,Mt=Et;break}if(Mt===-1)break}const bt=G[Mt];bt&&bt.connect(q)}}const j=new rt,vt=new rt;function St(Q,it,q){j.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(q.matrixWorld);const Mt=j.distanceTo(vt),bt=it.projectionMatrix.elements,Et=q.projectionMatrix.elements,Gt=bt[14]/(bt[10]-1),z=bt[14]/(bt[10]+1),Ge=(bt[9]+1)/bt[5],se=(bt[9]-1)/bt[5],Qt=(bt[8]-1)/bt[0],Lt=(Et[8]+1)/Et[0],ae=Gt*Qt,Ht=Gt*Lt,oe=Mt/(-Qt+Lt),Ye=oe*-Qt;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),bt[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const je=Gt+oe,U=z+oe,T=ae-Ye,at=Ht+(Mt-Ye),mt=Ge*z/U*je,yt=se*z/U*je;Q.projectionMatrix.makePerspective(T,at,mt,yt,je,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Bt(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let it=Q.near,q=Q.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(q=y.depthFar)),st.near=C.near=w.near=it,st.far=C.far=w.far=q,(ft!==st.near||_t!==st.far)&&(u.updateRenderState({depthNear:st.near,depthFar:st.far}),ft=st.near,_t=st.far),st.layers.mask=Q.layers.mask|6,w.layers.mask=st.layers.mask&3,C.layers.mask=st.layers.mask&5;const Mt=Q.parent,bt=st.cameras;Bt(st,Mt);for(let Et=0;Et<bt.length;Et++)Bt(bt[Et],Mt);bt.length===2?St(st,w,C):st.projectionMatrix.copy(w.projectionMatrix),ne(Q,st,Mt)};function ne(Q,it,q){q===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(q.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&M===null))return _},this.setFoveation=function(Q){_=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(st)},this.getCameraTexture=function(Q){return x[Q]};let me=null;function L(Q,it){if(v=it.getViewerPose(m||d),b=it,v!==null){const q=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Mt=!1;q.length!==st.cameras.length&&(st.cameras.length=0,Mt=!0);for(let z=0;z<q.length;z++){const Ge=q[z];let se=null;if(M!==null)se=M.getViewport(Ge);else{const Lt=p.getViewSubImage(S,Ge);se=Lt.viewport,z===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let Qt=V[z];Qt===void 0&&(Qt=new li,Qt.layers.enable(z),Qt.viewport=new qe,V[z]=Qt),Qt.matrix.fromArray(Ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),z===0&&(st.matrix.copy(Qt.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Mt===!0&&st.cameras.push(Qt)}const bt=u.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&R){p=s.getBinding();const z=p.getDepthInformation(q[0]);z&&z.isValid&&z.texture&&y.init(z,u.renderState)}if(bt&&bt.includes("camera-access")&&R){e.state.unbindTexture(),p=s.getBinding();for(let z=0;z<q.length;z++){const Ge=q[z].camera;if(Ge){let se=x[Ge];se||(se=new Ix,x[Ge]=se);const Qt=p.getCameraImage(Ge);se.sourceTexture=Qt}}}}for(let q=0;q<G.length;q++){const Mt=B[q],bt=G[q];Mt!==null&&bt!==void 0&&bt.update(Mt,it,m||d)}me&&me(Q,it),it.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:it}),b=null}const ht=new Gx;ht.setAnimationLoop(L),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const Br=new Oi,x2=new $e;function S2(o,e){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Nx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function u(y,x,I,O,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),p(y,x)):x.isMeshPhongMaterial?(f(y,x),v(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,D)):x.isMeshMatcapMaterial?(f(y,x),b(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),R(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?_(y,x,I,O):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),O=I.envMap,D=I.envMapRotation;O&&(y.envMap.value=O,Br.copy(D),Br.x*=-1,Br.y*=-1,Br.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(Br)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function _(y,x,I,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=O*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function y2(o,e,a,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(I,O){const D=O.program;s.uniformBlockBinding(I,D)}function m(I,O){let D=u[I.id];D===void 0&&(b(I),D=v(I),u[I.id]=D,I.addEventListener("dispose",y));const G=O.program;s.updateUBOMapping(I,G);const B=e.render.frame;f[I.id]!==B&&(S(I),f[I.id]=B)}function v(I){const O=p();I.__bindingPointIndex=O;const D=o.createBuffer(),G=I.__size,B=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function p(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const O=u[I.id],D=I.uniforms,G=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,P=D.length;B<P;B++){const k=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,C=k.length;w<C;w++){const V=k[w];if(M(V,B,w,G)===!0){const st=V.__offset,ft=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let ut=0;ut<ft.length;ut++){const X=ft[ut],nt=R(X);typeof X=="number"||typeof X=="boolean"?(V.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,st+_t,V.__data)):X.isMatrix3?(V.__data[0]=X.elements[0],V.__data[1]=X.elements[1],V.__data[2]=X.elements[2],V.__data[3]=0,V.__data[4]=X.elements[3],V.__data[5]=X.elements[4],V.__data[6]=X.elements[5],V.__data[7]=0,V.__data[8]=X.elements[6],V.__data[9]=X.elements[7],V.__data[10]=X.elements[8],V.__data[11]=0):(X.toArray(V.__data,_t),_t+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,O,D,G){const B=I.value,P=O+"_"+D;if(G[P]===void 0)return typeof B=="number"||typeof B=="boolean"?G[P]=B:G[P]=B.clone(),!0;{const k=G[P];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return G[P]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function b(I){const O=I.uniforms;let D=0;const G=16;for(let P=0,k=O.length;P<k;P++){const w=Array.isArray(O[P])?O[P]:[O[P]];for(let C=0,V=w.length;C<V;C++){const st=w[C],ft=Array.isArray(st.value)?st.value:[st.value];for(let _t=0,ut=ft.length;_t<ut;_t++){const X=ft[_t],nt=R(X),j=D%G,vt=j%nt.boundary,St=j+vt;D+=vt,St!==0&&G-St<nt.storage&&(D+=G-St),st.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=nt.storage}}}const B=D%G;return B>0&&(D+=G-B),I.__size=D,I.__cache={},this}function R(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function y(I){const O=I.target;O.removeEventListener("dispose",y);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function x(){for(const I in u)o.deleteBuffer(u[I]);d=[],u={},f={}}return{bind:_,update:m,dispose:x}}class M2{constructor(e={}){const{canvas:a=tT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,x=null;const I=[],O=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=yi;let B=0,P=0,k=null,w=-1,C=null;const V=new qe,st=new qe;let ft=null;const _t=new Re(0);let ut=0,X=a.width,nt=a.height,j=1,vt=null,St=null;const Bt=new qe(0,0,X,nt),ne=new qe(0,0,X,nt);let me=!1;const L=new qp;let ht=!1,Q=!1;const it=new $e,q=new rt,Mt=new qe,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Gt(){return k===null?j:1}let z=s;function Ge(A,K){return a.getContext(A,K)}try{const A={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Lp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",Xt,!1),a.addEventListener("webglcontextcreationerror",Tt,!1),z===null){const K="webgl2";if(z=Ge(K,A),z===null)throw Ge(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,Qt,Lt,ae,Ht,oe,Ye,je,U,T,at,mt,yt,dt,kt,wt,jt,Kt,Rt,Ot,ie,Zt,zt,ce;function H(){se=new NA(z),se.init(),Zt=new p2(z,se),Qt=new bA(z,se,e,Zt),Lt=new h2(z,se),Qt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ae=new zA(z),Ht=new $R,oe=new d2(z,se,Lt,Ht,Qt,Zt,ae),Ye=new RA(D),je=new UA(D),U=new GT(z),zt=new EA(z,U),T=new LA(z,U,ae,zt),at=new IA(z,T,U,ae),Rt=new PA(z,Qt,oe),wt=new AA(Ht),mt=new JR(D,Ye,je,se,Qt,zt,wt),yt=new S2(D,Ht),dt=new e2,kt=new o2(se),Kt=new MA(D,Ye,je,Lt,at,M,_),jt=new c2(D,at,Qt),ce=new y2(z,ae,Qt,Lt),Ot=new TA(z,se,ae),ie=new OA(z,se,ae),ae.programs=mt.programs,D.capabilities=Qt,D.extensions=se,D.properties=Ht,D.renderLists=dt,D.shadowMap=jt,D.state=Lt,D.info=ae}H();const Ct=new v2(D,z);this.xr=Ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(X,nt,!1))},this.getSize=function(A){return A.set(X,nt)},this.setSize=function(A,K,lt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,nt=K,a.width=Math.floor(A*j),a.height=Math.floor(K*j),lt===!0&&(a.style.width=A+"px",a.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(X*j,nt*j).floor()},this.setDrawingBufferSize=function(A,K,lt){X=A,nt=K,j=lt,a.width=Math.floor(A*lt),a.height=Math.floor(K*lt),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Bt)},this.setViewport=function(A,K,lt,ct){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,K,lt,ct),Lt.viewport(V.copy(Bt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,K,lt,ct){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,K,lt,ct),Lt.scissor(st.copy(ne).multiplyScalar(j).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Lt.setScissorTest(me=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,lt=!0){let ct=0;if(A){let J=!1;if(k!==null){const At=k.texture.format;J=At===Gp||At===Hp||At===Fp}if(J){const At=k.texture.type,Pt=At===Ji||At===qr||At===ml||At===gl||At===Pp||At===Ip,Ft=Kt.getClearColor(),Dt=Kt.getClearAlpha(),qt=Ft.r,ee=Ft.g,$t=Ft.b;Pt?(b[0]=qt,b[1]=ee,b[2]=$t,b[3]=Dt,z.clearBufferuiv(z.COLOR,0,b)):(R[0]=qt,R[1]=ee,R[2]=$t,R[3]=Dt,z.clearBufferiv(z.COLOR,0,R))}else ct|=z.COLOR_BUFFER_BIT}K&&(ct|=z.DEPTH_BUFFER_BIT),lt&&(ct|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",Xt,!1),a.removeEventListener("webglcontextcreationerror",Tt,!1),Kt.dispose(),dt.dispose(),kt.dispose(),Ht.dispose(),Ye.dispose(),je.dispose(),at.dispose(),zt.dispose(),ce.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",pn),Ct.removeEventListener("sessionend",Un),$i.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ae.autoReset,K=jt.enabled,lt=jt.autoUpdate,ct=jt.needsUpdate,J=jt.type;H(),ae.autoReset=A,jt.enabled=K,jt.autoUpdate=lt,jt.needsUpdate=ct,jt.type=J}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const K=A.target;K.removeEventListener("dispose",xt),Wt(K)}function Wt(A){ue(A),Ht.remove(A)}function ue(A){const K=Ht.get(A).programs;K!==void 0&&(K.forEach(function(lt){mt.releaseProgram(lt)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,lt,ct,J,At){K===null&&(K=bt);const Pt=J.isMesh&&J.matrixWorld.determinant()<0,Ft=bl(A,K,lt,ct,J);Lt.setMaterial(ct,Pt);let Dt=lt.index,qt=1;if(ct.wireframe===!0){if(Dt=T.getWireframeAttribute(lt),Dt===void 0)return;qt=2}const ee=lt.drawRange,$t=lt.attributes.position;let ve=ee.start*qt,Pe=(ee.start+ee.count)*qt;At!==null&&(ve=Math.max(ve,At.start*qt),Pe=Math.min(Pe,(At.start+At.count)*qt)),Dt!==null?(ve=Math.max(ve,0),Pe=Math.min(Pe,Dt.count)):$t!=null&&(ve=Math.max(ve,0),Pe=Math.min(Pe,$t.count));const Je=Pe-ve;if(Je<0||Je===1/0)return;zt.setup(J,ct,Ft,lt,Dt);let Le,we=Ot;if(Dt!==null&&(Le=U.get(Dt),we=ie,we.setIndex(Le)),J.isMesh)ct.wireframe===!0?(Lt.setLineWidth(ct.wireframeLinewidth*Gt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(J.isLine){let te=ct.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Gt()),J.isLineSegments?we.setMode(z.LINES):J.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else J.isPoints?we.setMode(z.POINTS):J.isSprite&&we.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const te=J._multiDrawStarts,Oe=J._multiDrawCounts,ge=J._multiDrawCount,mn=Dt?U.get(Dt).bytesPerElement:1,Qn=Ht.get(ct).currentProgram.getUniforms();for(let De=0;De<ge;De++)Qn.setValue(z,"_gl_DrawID",De),we.render(te[De]/mn,Oe[De])}else if(J.isInstancedMesh)we.renderInstances(ve,Je,J.count);else if(lt.isInstancedBufferGeometry){const te=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Oe=Math.min(lt.instanceCount,te);we.renderInstances(ve,Je,Oe)}else we.render(ve,Je)};function Ve(A,K,lt){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,ci(A,K,lt),A.side=sr,A.needsUpdate=!0,ci(A,K,lt),A.side=ya):ci(A,K,lt)}this.compile=function(A,K,lt=null){lt===null&&(lt=A),x=kt.get(lt),x.init(K),O.push(x),lt.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),A!==lt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ct=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Ft=At[Pt];Ve(Ft,lt,J),ct.add(Ft)}else Ve(At,lt,J),ct.add(At)}),x=O.pop(),ct},this.compileAsync=function(A,K,lt=null){const ct=this.compile(A,K,lt);return new Promise(J=>{function At(){if(ct.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&ct.delete(Pt)}),ct.size===0){J(A);return}setTimeout(At,10)}se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function en(A){ye&&ye(A)}function pn(){$i.stop()}function Un(){$i.start()}const $i=new Gx;$i.setAnimationLoop(en),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){ye=A,Ct.setAnimationLoop(A),A===null?$i.stop():$i.start()},Ct.addEventListener("sessionstart",pn),Ct.addEventListener("sessionend",Un),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,K,k),x=kt.get(A,O.length),x.init(K),O.push(x),it.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),L.setFromProjectionMatrix(it,Ki,K.reversedDepth),Q=this.localClippingEnabled,ht=wt.init(this.clippingPlanes,Q),y=dt.get(A,I.length),y.init(),I.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&fo(At,K,-1/0,D.sortObjects)}fo(A,K,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,St),Et=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Et&&Kt.addToRenderList(y,A),this.info.render.frame++,ht===!0&&wt.beginShadows();const lt=x.state.shadowsArray;jt.render(lt,A,K),ht===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=y.opaque,J=y.transmissive;if(x.setupLights(),K.isArrayCamera){const At=K.cameras;if(J.length>0)for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];ur(ct,J,A,Dt)}Et&&Kt.render(A);for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];Tl(y,A,Dt,Dt.viewport)}}else J.length>0&&ur(ct,J,A,K),Et&&Kt.render(A),Tl(y,A,K);k!==null&&P===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,K),zt.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(x=O[O.length-1],ht===!0&&wt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function fo(A,K,lt,ct){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||L.intersectsSprite(A)){ct&&Mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(it);const Pt=at.update(A),Ft=A.material;Ft.visible&&y.push(A,Pt,Ft,lt,Mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||L.intersectsObject(A))){const Pt=at.update(A),Ft=A.material;if(ct&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Mt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Mt.copy(Pt.boundingSphere.center)),Mt.applyMatrix4(A.matrixWorld).applyMatrix4(it)),Array.isArray(Ft)){const Dt=Pt.groups;for(let qt=0,ee=Dt.length;qt<ee;qt++){const $t=Dt[qt],ve=Ft[$t.materialIndex];ve&&ve.visible&&y.push(A,Pt,ve,lt,Mt.z,$t)}}else Ft.visible&&y.push(A,Pt,Ft,lt,Mt.z,null)}}const At=A.children;for(let Pt=0,Ft=At.length;Pt<Ft;Pt++)fo(At[Pt],K,lt,ct)}function Tl(A,K,lt,ct){const J=A.opaque,At=A.transmissive,Pt=A.transparent;x.setupLightsView(lt),ht===!0&&wt.setGlobalState(D.clippingPlanes,lt),ct&&Lt.viewport(V.copy(ct)),J.length>0&&ta(J,K,lt),At.length>0&&ta(At,K,lt),Pt.length>0&&ta(Pt,K,lt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ur(A,K,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new Yr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?yl:Ji,minFilter:kr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const At=x.state.transmissionRenderTarget[ct.id],Pt=ct.viewport||V;At.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Dt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(_t),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Et&&Kt.render(lt);const ee=D.toneMapping;D.toneMapping=rr;const $t=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),ht===!0&&wt.setGlobalState(D.clippingPlanes,ct),ta(A,lt,ct),oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At),se.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Pe=0,Je=K.length;Pe<Je;Pe++){const Le=K[Pe],we=Le.object,te=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===ya&&we.layers.test(ct.layers)){const mn=Oe.side;Oe.side=kn,Oe.needsUpdate=!0,cr(we,lt,ct,te,Oe,ge),Oe.side=mn,Oe.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At))}D.setRenderTarget(Ft,Dt,qt),D.setClearColor(_t,ut),$t!==void 0&&(ct.viewport=$t),D.toneMapping=ee}function ta(A,K,lt){const ct=K.isScene===!0?K.overrideMaterial:null;for(let J=0,At=A.length;J<At;J++){const Pt=A[J],Ft=Pt.object,Dt=Pt.geometry,qt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ct!==null&&(ee=ct),Ft.layers.test(lt.layers)&&cr(Ft,K,lt,Dt,ee,qt)}}function cr(A,K,lt,ct,J,At){A.onBeforeRender(D,K,lt,ct,J,At),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(D,K,lt,ct,A,At),J.transparent===!0&&J.side===ya&&J.forceSinglePass===!1?(J.side=kn,J.needsUpdate=!0,D.renderBufferDirect(lt,K,ct,J,A,At),J.side=sr,J.needsUpdate=!0,D.renderBufferDirect(lt,K,ct,J,A,At),J.side=ya):D.renderBufferDirect(lt,K,ct,J,A,At),A.onAfterRender(D,K,lt,ct,J,At)}function ci(A,K,lt){K.isScene!==!0&&(K=bt);const ct=Ht.get(A),J=x.state.lights,At=x.state.shadowsArray,Pt=J.state.version,Ft=mt.getParameters(A,J.state,At,K,lt),Dt=mt.getProgramCacheKey(Ft);let qt=ct.programs;ct.environment=A.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(A.isMeshStandardMaterial?je:Ye).get(A.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",xt),qt=new Map,ct.programs=qt);let ee=qt.get(Dt);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===Pt)return Ea(A,Ft),ee}else Ft.uniforms=mt.getUniforms(A),A.onBeforeCompile(Ft,D),ee=mt.acquireProgram(Ft,Dt),qt.set(Dt,ee),ct.uniforms=Ft.uniforms;const $t=ct.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=wt.uniform),Ea(A,Ft),ct.needsLights=Al(A),ct.lightsStateVersion=Pt,ct.needsLights&&($t.ambientLightColor.value=J.state.ambient,$t.lightProbe.value=J.state.probe,$t.directionalLights.value=J.state.directional,$t.directionalLightShadows.value=J.state.directionalShadow,$t.spotLights.value=J.state.spot,$t.spotLightShadows.value=J.state.spotShadow,$t.rectAreaLights.value=J.state.rectArea,$t.ltc_1.value=J.state.rectAreaLTC1,$t.ltc_2.value=J.state.rectAreaLTC2,$t.pointLights.value=J.state.point,$t.pointLightShadows.value=J.state.pointShadow,$t.hemisphereLights.value=J.state.hemi,$t.directionalShadowMap.value=J.state.directionalShadowMap,$t.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$t.spotShadowMap.value=J.state.spotShadowMap,$t.spotLightMatrix.value=J.state.spotLightMatrix,$t.spotLightMap.value=J.state.spotLightMap,$t.pointShadowMap.value=J.state.pointShadowMap,$t.pointShadowMatrix.value=J.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function fr(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Ea(A,K){const lt=Ht.get(A);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function bl(A,K,lt,ct,J){K.isScene!==!0&&(K=bt),oe.resetTextureUnits();const At=K.fog,Pt=ct.isMeshStandardMaterial?K.environment:null,Ft=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ao,Dt=(ct.isMeshStandardMaterial?je:Ye).get(ct.envMap||Pt),qt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),$t=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,Pe=!!lt.morphAttributes.color;let Je=rr;ct.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Je=D.toneMapping);const Le=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,we=Le!==void 0?Le.length:0,te=Ht.get(ct),Oe=x.state.lights;if(ht===!0&&(Q===!0||A!==C)){const an=A===C&&ct.id===w;wt.setState(ct,A,an)}let ge=!1;ct.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Oe.state.version||te.outputColorSpace!==Ft||J.isBatchedMesh&&te.batching===!1||!J.isBatchedMesh&&te.batching===!0||J.isBatchedMesh&&te.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&te.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&te.instancing===!1||!J.isInstancedMesh&&te.instancing===!0||J.isSkinnedMesh&&te.skinning===!1||!J.isSkinnedMesh&&te.skinning===!0||J.isInstancedMesh&&te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&te.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&te.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&te.instancingMorph===!1&&J.morphTexture!==null||te.envMap!==Dt||ct.fog===!0&&te.fog!==At||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==wt.numPlanes||te.numIntersection!==wt.numIntersection)||te.vertexAlphas!==qt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==ve||te.morphColors!==Pe||te.toneMapping!==Je||te.morphTargetsCount!==we)&&(ge=!0):(ge=!0,te.__version=ct.version);let mn=te.currentProgram;ge===!0&&(mn=ci(ct,K,J));let Qn=!1,De=!1,Ta=!1;const Ze=mn.getUniforms(),In=te.uniforms;if(Lt.useProgram(mn.program)&&(Qn=!0,De=!0,Ta=!0),ct.id!==w&&(w=ct.id,De=!0),Qn||C!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ze.setValue(z,"projectionMatrix",A.projectionMatrix),Ze.setValue(z,"viewMatrix",A.matrixWorldInverse);const Nn=Ze.map.cameraPosition;Nn!==void 0&&Nn.setValue(z,q.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&Ze.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ze.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,De=!0,Ta=!0)}if(J.isSkinnedMesh){Ze.setOptional(z,J,"bindMatrix"),Ze.setOptional(z,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ze.setValue(z,"boneTexture",an.boneTexture,oe))}J.isBatchedMesh&&(Ze.setOptional(z,J,"batchingTexture"),Ze.setValue(z,"batchingTexture",J._matricesTexture,oe),Ze.setOptional(z,J,"batchingIdTexture"),Ze.setValue(z,"batchingIdTexture",J._indirectTexture,oe),Ze.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Ze.setValue(z,"batchingColorTexture",J._colorsTexture,oe));const ln=lt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Rt.update(J,lt,mn),(De||te.receiveShadow!==J.receiveShadow)&&(te.receiveShadow=J.receiveShadow,Ze.setValue(z,"receiveShadow",J.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(In.envMap.value=Dt,In.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(In.envMapIntensity.value=K.environmentIntensity),De&&(Ze.setValue(z,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&Rc(In,Ta),At&&ct.fog===!0&&yt.refreshFogUniforms(In,At),yt.refreshMaterialUniforms(In,ct,j,nt,x.state.transmissionRenderTarget[A.id]),Sc.upload(z,fr(te),In,oe)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Sc.upload(z,fr(te),In,oe),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ze.setValue(z,"center",J.center),Ze.setValue(z,"modelViewMatrix",J.modelViewMatrix),Ze.setValue(z,"normalMatrix",J.normalMatrix),Ze.setValue(z,"modelMatrix",J.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const an=ct.uniformsGroups;for(let Nn=0,jr=an.length;Nn<jr;Nn++){const zi=an[Nn];ce.update(zi,mn),ce.bind(zi,mn)}}return mn}function Rc(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Al(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,K,lt){const ct=Ht.get(A);ct.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=K,Ht.get(A.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const lt=Ht.get(A);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0};const ho=z.createFramebuffer();this.setRenderTarget=function(A,K=0,lt=0){k=A,B=K,P=lt;let ct=!0,J=null,At=!1,Pt=!1;if(A){const Dt=Ht.get(A);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),ct=!1;else if(Dt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Dt.__hasExternalTextures)oe.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(Dt.__boundDepthTexture!==$t){if($t!==null&&Ht.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const ee=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[K])?J=ee[K][lt]:J=ee[K],At=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?J=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[lt]:J=ee,V.copy(A.viewport),st.copy(A.scissor),ft=A.scissorTest}else V.copy(Bt).multiplyScalar(j).floor(),st.copy(ne).multiplyScalar(j).floor(),ft=me;if(lt!==0&&(J=ho),Lt.bindFramebuffer(z.FRAMEBUFFER,J)&&ct&&Lt.drawBuffers(A,J),Lt.viewport(V),Lt.scissor(st),Lt.setScissorTest(ft),At){const Dt=Ht.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,lt)}else if(Pt){const Dt=K;for(let qt=0;qt<A.textures.length;qt++){const ee=Ht.get(A.textures[qt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+qt,ee.__webglTexture,lt,Dt)}}else if(A!==null&&lt!==0){const Dt=Ht.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Dt.__webglTexture,lt)}w=-1},this.readRenderTargetPixels=function(A,K,lt,ct,J,At,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){Lt.bindFramebuffer(z.FRAMEBUFFER,Dt);try{const qt=A.textures[Ft],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ct&&lt>=0&&lt<=A.height-J&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(K,lt,ct,J,Zt.convert(ee),Zt.convert($t),At))}finally{const qt=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,K,lt,ct,J,At,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(K>=0&&K<=A.width-ct&&lt>=0&&lt<=A.height-J){Lt.bindFramebuffer(z.FRAMEBUFFER,Dt);const qt=A.textures[Ft],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.bufferData(z.PIXEL_PACK_BUFFER,At.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(K,lt,ct,J,Zt.convert(ee),Zt.convert($t),0);const Pe=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Pe);const Je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await eT(z,Je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,At),z.deleteBuffer(ve),z.deleteSync(Je),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,lt=0){const ct=Math.pow(2,-lt),J=Math.floor(A.image.width*ct),At=Math.floor(A.image.height*ct),Pt=K!==null?K.x:0,Ft=K!==null?K.y:0;oe.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,Pt,Ft,J,At),Lt.unbindTexture()};const hr=z.createFramebuffer(),Cc=z.createFramebuffer();this.copyTextureToTexture=function(A,K,lt=null,ct=null,J=0,At=null){At===null&&(J!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=J,J=0):At=0);let Pt,Ft,Dt,qt,ee,$t,ve,Pe,Je;const Le=A.isCompressedTexture?A.mipmaps[At]:A.image;if(lt!==null)Pt=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Dt=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,ee=lt.min.y,$t=lt.isBox3?lt.min.z:0;else{const ln=Math.pow(2,-J);Pt=Math.floor(Le.width*ln),Ft=Math.floor(Le.height*ln),A.isDataArrayTexture?Dt=Le.depth:A.isData3DTexture?Dt=Math.floor(Le.depth*ln):Dt=1,qt=0,ee=0,$t=0}ct!==null?(ve=ct.x,Pe=ct.y,Je=ct.z):(ve=0,Pe=0,Je=0);const we=Zt.convert(K.format),te=Zt.convert(K.type);let Oe;K.isData3DTexture?(oe.setTexture3D(K,0),Oe=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(oe.setTexture2DArray(K,0),Oe=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(K,0),Oe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qn=z.getParameter(z.UNPACK_SKIP_PIXELS),De=z.getParameter(z.UNPACK_SKIP_ROWS),Ta=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const Ze=A.isDataArrayTexture||A.isData3DTexture,In=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),an=Ht.get(K),Nn=Ht.get(ln.__renderTarget),jr=Ht.get(an.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let zi=0;zi<Dt;zi++)Ze&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,J,$t+zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(K).__webglTexture,At,Je+zi)),z.blitFramebuffer(qt,ee,Pt,Ft,ve,Pe,Pt,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),an=Ht.get(K);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,hr),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Cc);for(let Nn=0;Nn<Dt;Nn++)Ze?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,J,$t+Nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,J),In?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,At,Je+Nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,At),J!==0?z.blitFramebuffer(qt,ee,Pt,Ft,ve,Pe,Pt,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):In?z.copyTexSubImage3D(Oe,At,ve,Pe,Je+Nn,qt,ee,Pt,Ft):z.copyTexSubImage2D(Oe,At,ve,Pe,qt,ee,Pt,Ft);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Oe,At,ve,Pe,Je,Pt,Ft,Dt,we,te,Le.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,At,ve,Pe,Je,Pt,Ft,Dt,we,Le.data):z.texSubImage3D(Oe,At,ve,Pe,Je,Pt,Ft,Dt,we,te,Le):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,At,ve,Pe,Pt,Ft,we,te,Le.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,At,ve,Pe,Le.width,Le.height,we,Le.data):z.texSubImage2D(z.TEXTURE_2D,At,ve,Pe,Pt,Ft,we,te,Le);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qn),z.pixelStorei(z.UNPACK_SKIP_ROWS,De),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ta),At===0&&K.generateMipmaps&&z.generateMipmap(Oe),Lt.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){B=0,P=0,k=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ne._getUnpackColorSpace()}}class E2 extends zx{constructor(){super();const e=new uo;e.deleteAttribute("uv");const a=new wp({side:kn}),s=new wp,u=new IT(16777215,900,28,2);u.position.set(.418,16.199,.3),this.add(u);const f=new _n(e,a);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const d=new wT(e,s,6),h=new Dn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),d.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),d.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),d.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),d.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),d.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),d.setMatrixAt(5,h.matrix),this.add(d);const _=new _n(e,Zs(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const m=new _n(e,Zs(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const v=new _n(e,Zs(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const p=new _n(e,Zs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const S=new _n(e,Zs(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const M=new _n(e,Zs(100));M.position.set(0,20,0),M.scale.set(1,.1,1),this.add(M)}dispose(){const e=new Set;this.traverse(a=>{a.isMesh&&(e.add(a.geometry),e.add(a.material))});for(const a of e)a.dispose()}}function Zs(o){return new LT({color:0,emissive:16777215,emissiveIntensity:o})}const pl=()=>({low:0,mid:0,high:0,rms:0,dominant:0});function T2(o,e,a,s){let u=0;for(const v of e)u+=v*v;const f=Math.sqrt(u/Math.max(1,e.length));if(f<1e-4)return pl();const d=[0,0,0];let h=-1/0,_=0;for(let v=1;v<o.length;v++){const p=v*a/s;if(p<20||p>2e4)continue;const S=o[v];Number.isFinite(S)&&(d[p<250?0:p<2e3?1:2]+=10**(S/10),S>h&&(h=S,_=v))}const m=d.map(v=>Math.min(1,Math.sqrt(v)*4.8));return{low:m[0],mid:m[1],high:m[2],rms:f,dominant:_*a/s}}function b2(o,e){const a=Math.min(1.3,o.low*e),s=Math.min(1.3,o.high*e);return{x:1+a*.52-s*.25,y:1-a*.32+s*.58,roughness:Math.min(.28,o.mid*e*.22+s*.045),pulse:Math.min(.16,o.rms*e*.28)}}const to={color:"#dba58e",material:"metal",sensitivity:1.2,movement:.35,smoothing:.5};function A2({engine:o,settings:e}){const a=Ae.useRef(null),s=Ae.useRef(e),[u,f]=Ae.useState("");return s.current=e,Ae.useEffect(()=>{const d=a.current;let h;try{h=new M2({antialias:!0,alpha:!0})}catch{f("No se ha podido iniciar la esfera 3D. Activa la aceleración gráfica de tu navegador y recarga la página.");return}h.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),h.setClearColor(0,0),h.toneMapping=mx,h.toneMappingExposure=1.35,h.domElement.setAttribute("aria-label","Esfera 3D reactiva al audio"),h.domElement.setAttribute("role","img"),d.appendChild(h.domElement);const _=new zx,m=new li(37,1,.1,50);m.position.set(0,0,5.4);const v=new Dp(h),p=new E2,S=v.fromScene(p,.04);p.dispose(),v.dispose(),_.environment=S.texture;const M=new Yp(1,112,80),b=M.attributes.position,R=new Float32Array(b.array),y=new wp({color:to.color,metalness:1,roughness:.23,envMapIntensity:2}),x=new _n(M,y);_.add(x);const I=new Od(16771286,3.5);I.position.set(-3,4,3),_.add(I);const O=new Od(10864383,3);O.position.set(3,-1,-2),_.add(O);const D=new Od(16777215,1);D.position.set(1,0,4),_.add(D);const G=()=>{const{width:ut,height:X}=d.getBoundingClientRect();h.setSize(ut,X),m.aspect=ut/Math.max(1,X),m.position.z=m.aspect<.9?6.2:5.4,m.updateProjectionMatrix()},B=new ResizeObserver(G);B.observe(d),G();const P=window.matchMedia("(prefers-reduced-motion: reduce)");let k=performance.now(),w=0,C=0,V=!0;const st=()=>{V=!document.hidden,k=performance.now()};document.addEventListener("visibilitychange",st);const ft=ut=>{ut.preventDefault(),f("Se ha interrumpido la aceleración gráfica. Recarga la página para recuperar la esfera.")};h.domElement.addEventListener("webglcontextlost",ft);const _t=ut=>{C=requestAnimationFrame(_t);const X=Math.min((ut-k)/1e3,.05);if(k=ut,!V)return;const nt=s.current,j=o.sample(X,nt.smoothing),vt=b2(j,nt.sensitivity),St=1+vt.pulse+vt.roughness+.045,Bt=Math.max(vt.y,vt.x/m.aspect)*St/Math.tan($E.degToRad(18.5))*1.3,ne=m.aspect<.9?6.2:5.4;m.position.z+=(Math.max(ne,Bt)-m.position.z)*(1-Math.exp(-X*8)),w+=X*nt.movement*(P.matches?.2:1);const me=Math.min(1,j.low+j.mid+j.high);for(let L=0;L<b.count;L++){const ht=R[L*3],Q=R[L*3+1],it=R[L*3+2],q=Math.sin(ht*5+w)*Math.cos(Q*4-w*.7)*Math.sin(it*5+w*.5),Mt=Math.sin(Q*22+ht*8+w*2)*Math.cos(it*12-w),bt=1+q*(.025+vt.roughness)+Mt*me*.016+vt.pulse;b.setXYZ(L,ht*bt,Q*bt,it*bt)}b.needsUpdate=!0,M.computeVertexNormals(),x.scale.set(vt.x,vt.y,vt.x),x.rotation.y=w*.22,y.color.set(nt.color),y.wireframe=nt.material==="wire",y.metalness=nt.material==="metal"?1:nt.material==="pearl"?.12:.3,y.roughness=nt.material==="pearl"?.35:.23,y.envMapIntensity=nt.material==="metal"?2:1.1,h.render(_,m)};return C=requestAnimationFrame(_t),()=>{cancelAnimationFrame(C),B.disconnect(),document.removeEventListener("visibilitychange",st),h.domElement.removeEventListener("webglcontextlost",ft),M.dispose(),y.dispose(),S.dispose(),h.dispose(),h.domElement.remove()}},[o]),tt.jsx("div",{className:"orb-render",ref:a,children:u&&tt.jsx("div",{className:"graphics-error",role:"alert",children:u})})}class R2{element=new Audio;context;analyser;gain;frequency=new Float32Array(2048);signal=new Float32Array(4096);objectUrl;volume=.65;revision=0;levels=pl();constructor(){this.element.preload="metadata"}async initialize(){this.context||(this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=4096,this.analyser.smoothingTimeConstant=0,this.gain=this.context.createGain(),this.gain.gain.value=this.volume,this.context.createMediaElementSource(this.element).connect(this.analyser),this.analyser.connect(this.gain).connect(this.context.destination)),this.context.state!=="running"&&await this.context.resume()}load(e){this.revision++,this.element.pause(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.objectUrl=typeof e=="string"?void 0:URL.createObjectURL(e),this.element.src=typeof e=="string"?e:this.objectUrl,this.levels=pl(),this.element.load()}async play(){const e=this.revision;if(await this.initialize(),e===this.revision)try{await this.element.play()}catch(a){if(e===this.revision&&!(a instanceof DOMException&&a.name==="AbortError"))throw a}}pause(){this.element.pause()}setVolume(e){this.volume=e,this.gain&&this.context&&this.gain.gain.setTargetAtTime(e,this.context.currentTime,.025)}sample(e,a){let s=pl();this.analyser&&this.context&&!this.element.paused&&!this.element.ended&&(this.analyser.getFloatFrequencyData(this.frequency),this.analyser.getFloatTimeDomainData(this.signal),s=T2(this.frequency,this.signal,this.context.sampleRate,this.analyser.fftSize));for(const u of["low","mid","high","rms"]){const f=s[u]>this.levels[u]?.025+a*.12:.06+a*.35;this.levels[u]+=(s[u]-this.levels[u])*(1-Math.exp(-e/f))}return this.levels.dominant=s.dominant,this.levels}dispose(){this.element.pause(),this.element.removeAttribute("src"),this.element.load(),this.objectUrl&&URL.revokeObjectURL(this.objectUrl),this.context?.close()}}const C2=[{color:"#dba58e",name:"Cobre"},{color:"#c4d0df",name:"Plata"},{color:"#8ba9d8",name:"Azul"},{color:"#b6a0db",name:"Violeta"},{color:"#99c4ad",name:"Jade"}],w2=[{name:"Órbita",label:"Metal · orgánico",settings:to},{name:"Nácar",label:"Suave · luminoso",settings:{...to,color:"#c4d0df",material:"pearl",smoothing:.8,movement:.2}},{name:"Trama",label:"Malla · eléctrica",settings:{...to,color:"#8ba9d8",material:"wire",sensitivity:1.6,movement:.6}}],hx=o=>`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`;function Gd({label:o,value:e,min:a=0,max:s=1,step:u=.01,text:f,onChange:d}){return tt.jsxs("label",{className:"slider-field",children:[tt.jsxs("span",{children:[o,tt.jsx("output",{children:f})]}),tt.jsx("input",{"aria-label":o,type:"range",min:a,max:s,step:u,value:e,onChange:h=>d(Number(h.target.value)),style:{"--progress":`${(e-a)/(s-a)*100}%`}})]})}function D2(){const[o]=Ae.useState(()=>new R2),[e,a]=Ae.useState(to),[s,u]=Ae.useState("Órbita"),[f,d]=Ae.useState(""),[h,_]=Ae.useState(!1),[m,v]=Ae.useState(!1),[p,S]=Ae.useState(0),[M,b]=Ae.useState(0),[R,y]=Ae.useState(.65),[x,I]=Ae.useState(!1),[O,D]=Ae.useState(pl()),[G,B]=Ae.useState(""),[P,k]=Ae.useState(!1),[w,C]=Ae.useState(!1),[V,st]=Ae.useState(!1),[ft,_t]=Ae.useState(!1),ut=Ae.useRef(null),X=Ae.useRef(null),nt=Ae.useRef(null),j=Ae.useRef(null),vt=Ae.useRef(.65);Ae.useEffect(()=>{const q=o.element,Mt=()=>{v(!1),S(Number.isFinite(q.duration)?q.duration:0)},bt=()=>{v(!1),_(!1),S(0),k(!0),B("No se ha podido reproducir este archivo. Prueba con un MP3 o WAV válido.")},Et=()=>_(!0),Gt=()=>_(!1);q.addEventListener("loadedmetadata",Mt),q.addEventListener("error",bt),q.addEventListener("playing",Et),q.addEventListener("pause",Gt),q.addEventListener("ended",Gt);const z=window.setInterval(()=>{b(q.currentTime||0),D({...o.levels})},100);return()=>{window.clearInterval(z),q.removeEventListener("loadedmetadata",Mt),q.removeEventListener("error",bt),q.removeEventListener("playing",Et),q.removeEventListener("pause",Gt),q.removeEventListener("ended",Gt),o.dispose()}},[o]),Ae.useEffect(()=>{const q=()=>{document.fullscreenElement||C(!1)};return document.addEventListener("fullscreenchange",q),()=>document.removeEventListener("fullscreenchange",q)},[]),Ae.useEffect(()=>{ft&&nt.current?.focus()},[ft]);const St=async()=>{if(!(!f||m||P)){if(!o.element.paused){o.pause();return}try{await o.play()}catch{B("El navegador no ha iniciado el audio. Comprueba el archivo o vuelve a cargarlo.")}}},Bt=async()=>{if(w)document.fullscreenElement&&await document.exitFullscreen(),C(!1);else{C(!0);try{await X.current?.requestFullscreen?.()}catch{}}};Ae.useEffect(()=>{const q=Mt=>{Mt.key==="Escape"&&(_t(!1),document.fullscreenElement||C(!1)),!(ft||Mt.ctrlKey||Mt.metaKey||Mt.altKey||Mt.target.closest("button,input,select,a,textarea"))&&(Mt.code==="Space"&&(Mt.preventDefault(),St()),Mt.key.toLowerCase()==="f"&&(Mt.preventDefault(),Bt()))};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)});function ne(q,Mt){B(""),k(!1),v(!0),_(!1),b(0),S(0),d(Mt),o.load(q)}function me(q){if(q){if(!q.type.startsWith("audio/")&&!/\.(mp3|wav|ogg|m4a|aac|flac|aif|aiff|opus|webm)$/i.test(q.name)){B("Selecciona un archivo de audio: MP3, WAV, FLAC, OGG o M4A.");return}ne(q,q.name)}}const L=q=>{a(Mt=>({...Mt,...q})),u("Personalizado")},ht=q=>{y(q),o.setVolume(q)},Q=()=>{_t(!1),j.current?.focus()},it=O.rms>1e-4?`${(20*Math.log10(O.rms)).toFixed(1)}`:"−∞";return tt.jsxs("div",{className:`app ${w?"immersive":""}`,ref:X,onDragOver:q=>{q.preventDefault(),q.dataTransfer.types.includes("Files")&&st(!0)},onDragLeave:q=>{q.currentTarget.contains(q.relatedTarget)||st(!1)},onDrop:q=>{q.preventDefault(),st(!1),me(q.dataTransfer.files[0])},children:[tt.jsxs("header",{className:"topbar",children:[tt.jsxs("a",{className:"portfolio",href:"https://www.pedrogomez.dev/",children:[tt.jsx(HM,{size:15})," Pedro Gómez",tt.jsx("span",{className:"breadcrumb",children:" / Herramientas"})]}),tt.jsxs("div",{className:"top-right",children:[tt.jsx("span",{className:"edition",children:"EXPERIMENTO AUDIOVISUAL / 002"}),tt.jsx("a",{href:"https://github.com/CODIGOAFRX/ORBIS",target:"_blank",rel:"noreferrer","aria-label":"Ver el proyecto ORBIS original en GitHub",children:tt.jsx(sd,{size:19})})]})]}),tt.jsxs("main",{children:[tt.jsxs("div",{className:"heading",children:[tt.jsxs("div",{className:"brand",children:[tt.jsxs("h1",{children:["ORBIS",tt.jsx("span",{children:"2"})]}),tt.jsx("div",{className:"brand-line"}),tt.jsxs("p",{children:["El sonido",tt.jsx("br",{}),tt.jsx("em",{children:"toma forma."})]})]}),tt.jsxs("button",{ref:j,className:"text-button",onClick:()=>_t(!0),children:["Cómo se mueve ",tt.jsx(sd,{size:16})]})]}),tt.jsxs("div",{className:"workspace",children:[tt.jsxs("section",{className:"stage","aria-label":"Visualizador",children:[tt.jsxs("div",{className:"stage-top",children:[tt.jsx("span",{className:"eyebrow",children:"01 / VISUALIZACIÓN EN VIVO"}),tt.jsxs("span",{className:`status ${h?"active":""}`,children:[tt.jsx("i",{}),h?"REPRODUCIENDO":f?"EN PAUSA":"EN ESPERA"]})]}),tt.jsxs("div",{className:"orb-area",children:[tt.jsx("div",{className:"axis horizontal"}),tt.jsx("div",{className:"axis vertical"}),tt.jsx("div",{className:"orbit-ring"}),tt.jsx(A2,{engine:o,settings:e}),tt.jsx("div",{className:"coordinate coord-top",children:"AGUDOS / TENSIÓN"}),tt.jsxs("div",{className:"coordinate coord-left",children:["GRAVES",tt.jsx("br",{}),"EXPANSIÓN"]}),tt.jsx("div",{className:"coordinate coord-bottom",children:"SONIDO → GEOMETRÍA"})]}),tt.jsxs("div",{className:"stage-bottom",children:[tt.jsxs("div",{className:"stage-caption",children:[tt.jsx("span",{className:"small-cross",children:"+"}),tt.jsxs("div",{children:[tt.jsx("b",{children:s}),tt.jsx("span",{children:e.material==="metal"?"Superficie metálica":e.material==="pearl"?"Superficie nacarada":"Malla de frecuencias"})]})]}),tt.jsx("button",{className:"icon-button fullscreen",onClick:()=>{Bt()},"aria-label":w?"Salir de pantalla completa":"Pantalla completa",title:"Pantalla completa (F)",children:w?tt.jsx(qM,{size:19}):tt.jsx(kM,{size:19})})]}),tt.jsxs("div",{className:"audio-player",children:[tt.jsxs("div",{className:"track-row",children:[tt.jsx("span",{className:"track-symbol",children:tt.jsx(GM,{size:21})}),tt.jsxs("div",{className:"track-info",children:[tt.jsx("strong",{children:f||"Tu próxima canción, en otra dimensión."}),tt.jsx("span",{children:m?"Preparando audio…":f?"Audio local · listo para escuchar":tt.jsxs("button",{className:"quick-demo",onClick:()=>ne("./demo.wav","Órbita nocturna · demo sintetizada"),children:["Probar demo sin cargar un archivo ",tt.jsx(od,{size:10})]})})]}),tt.jsx("button",{className:"icon-button",onClick:()=>ut.current?.click(),"aria-label":"Cargar otro audio",title:"Cargar audio",children:tt.jsx(ld,{size:18})})]}),tt.jsxs("div",{className:"transport",children:[tt.jsx("button",{className:"play-button",disabled:!f||m||P,onClick:()=>{St()},"aria-label":h?"Pausar":"Reproducir",children:h?tt.jsx(YM,{size:21,fill:"currentColor"}):tt.jsx(od,{size:21,fill:"currentColor"})}),tt.jsx("button",{className:"icon-button restart",disabled:!p,onClick:()=>{o.element.currentTime=0,b(0)},"aria-label":"Volver al inicio",children:tt.jsx(uv,{size:17})}),tt.jsx("span",{className:"time",children:hx(M)}),tt.jsx("input",{className:"seek","aria-label":"Posición de reproducción",type:"range",min:"0",max:p||1,step:"0.1",value:Math.min(M,p||1),disabled:!p,onChange:q=>{o.element.currentTime=Number(q.target.value),b(Number(q.target.value))},style:{"--progress":`${p?M/p*100:0}%`}}),tt.jsx("span",{className:"time",children:hx(p)}),tt.jsx("button",{className:`icon-button loop ${x?"selected":""}`,"aria-label":"Repetir pista","aria-pressed":x,onClick:()=>{o.element.loop=!x,I(!x)},children:tt.jsx(WM,{size:18})}),tt.jsxs("div",{className:"volume",children:[tt.jsx("button",{className:"icon-button","aria-label":R?"Silenciar":"Activar sonido",onClick:()=>{R?(vt.current=R,ht(0)):ht(vt.current||.65)},children:R?tt.jsx(ZM,{size:18}):tt.jsx(KM,{size:18})}),tt.jsx("input",{"aria-label":"Volumen",type:"range",min:"0",max:"1",step:"0.01",value:R,onChange:q=>ht(Number(q.target.value)),style:{"--progress":`${R*100}%`}})]})]})]})]}),tt.jsxs("aside",{className:"panel","aria-label":"Controles del visualizador",children:[tt.jsxs("div",{className:"panel-heading",children:[tt.jsx("span",{className:"eyebrow",children:"02 / TU SESIÓN"}),tt.jsx(jM,{size:16})]}),tt.jsxs("button",{className:"upload-zone",onClick:()=>ut.current?.click(),children:[tt.jsx(ld,{size:21}),tt.jsx("strong",{children:"Arrastra tu audio aquí"}),tt.jsx("span",{children:"o selecciona un archivo"}),tt.jsx("small",{children:"MP3, WAV, FLAC, OGG, M4A*"})]}),tt.jsxs("button",{className:"demo-button",onClick:()=>ne("./demo.wav","Órbita nocturna · demo sintetizada"),children:[tt.jsx(od,{size:14})," Probar con una demo ",tt.jsx("span",{children:"0:32"})]}),tt.jsxs("div",{className:"section-heading",children:[tt.jsx("h2",{children:"Apariencia"}),tt.jsx("span",{children:"01—03"})]}),tt.jsx("div",{className:"presets",children:w2.map((q,Mt)=>tt.jsxs("button",{className:s===q.name?"chosen":"",onClick:()=>{a({...q.settings}),u(q.name)},"aria-pressed":s===q.name,children:[tt.jsx("span",{className:`preset-orb orb-${Mt}`}),tt.jsx("span",{children:q.name})]},q.name))}),tt.jsxs("label",{className:"select-field",children:["Material",tt.jsxs("div",{children:[tt.jsxs("select",{"aria-label":"Material",value:e.material,onChange:q=>L({material:q.target.value}),children:[tt.jsx("option",{value:"metal",children:"Metal líquido"}),tt.jsx("option",{value:"pearl",children:"Nácar"}),tt.jsx("option",{value:"wire",children:"Malla"})]}),tt.jsx(XM,{size:14})]})]}),tt.jsxs("div",{className:"color-field",children:[tt.jsx("span",{children:"Color"}),tt.jsxs("div",{className:"colors",children:[C2.map(q=>tt.jsx("button",{"aria-label":q.name,"aria-pressed":e.color===q.color,title:q.name,style:{background:q.color},onClick:()=>L({color:q.color}),children:e.color===q.color&&tt.jsx(VM,{size:14})},q.name)),tt.jsx("input",{type:"color","aria-label":"Color personalizado",value:e.color,onChange:q=>L({color:q.target.value})})]})]}),tt.jsx("div",{className:"section-heading motion-title",children:tt.jsx("h2",{children:"Respuesta al sonido"})}),tt.jsx(Gd,{label:"Sensibilidad",min:.2,max:3,step:.1,value:e.sensitivity,text:`${e.sensitivity.toFixed(1)}×`,onChange:q=>L({sensitivity:q})}),tt.jsx(Gd,{label:"Movimiento",value:e.movement,text:`${Math.round(e.movement*100)}%`,onChange:q=>L({movement:q})}),tt.jsx(Gd,{label:"Suavizado",value:e.smoothing,text:`${Math.round(e.smoothing*100)}%`,onChange:q=>L({smoothing:q})}),tt.jsxs("button",{className:"reset-button",onClick:()=>{a({...to}),u("Órbita")},children:[tt.jsx(uv,{size:13})," Restablecer ajustes"]})]})]}),tt.jsxs("section",{className:"analysis","aria-label":"Análisis espectral",children:[tt.jsxs("div",{className:"analysis-title",children:[tt.jsx("span",{className:"eyebrow",children:"03 / HUELLA SONORA"}),tt.jsx("span",{children:"Análisis en tiempo real"})]}),[{key:"low",name:"Graves",range:"20 — 250 Hz"},{key:"mid",name:"Medios",range:"250 Hz — 2 kHz"},{key:"high",name:"Agudos",range:"2 — 20 kHz"}].map(q=>tt.jsxs("div",{className:`band band-${q.key}`,children:[tt.jsxs("div",{children:[tt.jsx("b",{children:q.name}),tt.jsx("span",{children:q.range}),tt.jsxs("output",{"aria-label":`Energía de ${q.name.toLowerCase()}`,children:[Math.round(O[q.key]*100),"%"]})]}),tt.jsx("div",{className:"meter",role:"meter","aria-label":q.name,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(O[q.key]*100),children:tt.jsx("i",{style:{width:`${Math.min(100,O[q.key]*100)}%`}})})]},q.key)),tt.jsxs("div",{className:"rms",children:[tt.jsx("span",{children:"Nivel RMS"}),tt.jsxs("strong",{children:[it," ",tt.jsx("small",{children:"dBFS"})]})]})]}),tt.jsxs("footer",{children:[tt.jsxs("span",{children:["ORBIS 2 ",tt.jsx("span",{className:"footer-dot",children:"/"})," Un experimento de Pedro Gómez"]}),tt.jsx("span",{children:"Tu audio se queda en tu dispositivo."}),tt.jsxs("a",{href:"https://github.com/CODIGOAFRX/ORBIS",target:"_blank",rel:"noreferrer",children:["El origen de ORBIS ",tt.jsx(sd,{size:13})]})]})]}),tt.jsx("input",{ref:ut,type:"file",accept:"audio/*,.mp3,.wav,.flac,.ogg,.m4a",hidden:!0,onChange:q=>{me(q.target.files?.[0]),q.target.value=""}}),G&&tt.jsxs("div",{className:"error-toast",role:"alert",children:[tt.jsx("span",{children:G}),tt.jsx("button",{"aria-label":"Cerrar aviso",onClick:()=>B(""),children:tt.jsx(cv,{size:18})})]}),V&&tt.jsxs("div",{className:"drop-overlay",children:[tt.jsx(ld,{size:40}),tt.jsx("h2",{children:"Suelta el audio."}),tt.jsx("p",{children:"Vamos a darle forma."})]}),ft&&tt.jsx("div",{className:"modal-backdrop",onClick:q=>{q.target===q.currentTarget&&Q()},children:tt.jsxs("section",{className:"help-modal",role:"dialog","aria-modal":"true","aria-labelledby":"help-title",onKeyDown:q=>{q.key==="Tab"&&(q.preventDefault(),nt.current?.focus()),q.key==="Escape"&&Q()},children:[tt.jsx("button",{className:"icon-button",ref:nt,onClick:Q,"aria-label":"Cerrar explicación",children:tt.jsx(cv,{size:20})}),tt.jsx("span",{className:"eyebrow",children:"EL LENGUAJE DE ORBIS"}),tt.jsx("h2",{id:"help-title",children:"Escuchar con los ojos."}),tt.jsx("p",{children:"La esfera responde al sonido que estás reproduciendo."}),tt.jsxs("dl",{children:[tt.jsx("dt",{children:"Graves · expansión"}),tt.jsx("dd",{children:"Ensanchan la esfera y la comprimen verticalmente."}),tt.jsx("dt",{children:"Medios · relieve"}),tt.jsx("dd",{children:"Crean ondulaciones sobre la superficie."}),tt.jsx("dt",{children:"Agudos · tensión"}),tt.jsx("dd",{children:"Estrechan la esfera y la estiran hacia arriba."})]}),tt.jsx("p",{children:"La energía general hace que pulse. Sensibilidad amplifica la deformación; Suavizado hace las transiciones más lentas. Movimiento controla el giro y el desplazamiento de las ondas."}),tt.jsxs("p",{className:"help-note",children:["Espacio: reproducir o pausar · F: pantalla completa · Esc: salir.",tt.jsx("br",{}),"* La compatibilidad de formatos depende del navegador. La demo es una composición sintetizada para este prototipo. Los medidores son orientativos, no una evaluación de la calidad de mezcla."]}),tt.jsx("p",{className:"credits",children:"Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García Arenas."})]})})]})}PM.createRoot(document.getElementById("root")).render(tt.jsx(D2,{}));
