var O=Object.defineProperty;var c=(e,o)=>O(e,"name",{value:o,configurable:!0});import{g as I}from"./iframe-2763bc4f.js";var b={exports:{}},k="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",j=k,M=j;function P(){}c(P,"emptyFunction");function _(){}c(_,"emptyFunctionWithReset");_.resetWarningCache=P;var W=c(function(){function e(Y,x,J,K,Q,F){if(F!==M){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}c(e,"shim"),e.isRequired=e;function o(){return e}c(o,"getShim");var h={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:_,resetWarningCache:P};return h.PropTypes=h,h},"factoryWithThrowingShims");b.exports=W();var z=b.exports;const ee=I(z);var g={exports:{}},t={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=60103,v=60106,s=60107,p=60108,i=60114,a=60109,u=60110,f=60112,y=60113,$=60120,l=60115,m=60116,S=60121,C=60122,E=60117,R=60129,w=60131;if(typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;d=r("react.element"),v=r("react.portal"),s=r("react.fragment"),p=r("react.strict_mode"),i=r("react.profiler"),a=r("react.provider"),u=r("react.context"),f=r("react.forward_ref"),y=r("react.suspense"),$=r("react.suspense_list"),l=r("react.memo"),m=r("react.lazy"),S=r("react.block"),C=r("react.server.block"),E=r("react.fundamental"),R=r("react.debug_trace_mode"),w=r("react.legacy_hidden")}function n(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case d:switch(e=e.type,e){case s:case i:case p:case y:case $:return e;default:switch(e=e&&e.$$typeof,e){case u:case f:case m:case l:case a:return e;default:return o}}case v:return o}}}c(n,"y");var D=a,L=d,N=f,A=s,q=m,B=l,H=v,U=i,V=p,G=y;t.ContextConsumer=u;t.ContextProvider=D;t.Element=L;t.ForwardRef=N;t.Fragment=A;t.Lazy=q;t.Memo=B;t.Portal=H;t.Profiler=U;t.StrictMode=V;t.Suspense=G;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return n(e)===u};t.isContextProvider=function(e){return n(e)===a};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===d};t.isForwardRef=function(e){return n(e)===f};t.isFragment=function(e){return n(e)===s};t.isLazy=function(e){return n(e)===m};t.isMemo=function(e){return n(e)===l};t.isPortal=function(e){return n(e)===v};t.isProfiler=function(e){return n(e)===i};t.isStrictMode=function(e){return n(e)===p};t.isSuspense=function(e){return n(e)===y};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===s||e===i||e===R||e===p||e===y||e===$||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===l||e.$$typeof===a||e.$$typeof===u||e.$$typeof===f||e.$$typeof===E||e.$$typeof===S||e[0]===C)};t.typeOf=n;g.exports=t;var te=g.exports;export{ee as P,te as r};
//# sourceMappingURL=index-5aa49b9b.js.map