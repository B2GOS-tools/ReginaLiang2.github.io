(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(396)),a={id:"network",title:"MozWifiStatusChangeEvent.network"},c={unversionedId:"06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network",id:"06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network",isDocsHomePage:!1,title:"MozWifiStatusChangeEvent.network",description:"Description",source:"@site/docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network.md",slug:"/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network",permalink:"/docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Value",id:"value",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The network property value provides the current network in use when the connection status changes."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var network = instanceOfMozWifiStatusChangeEvent.network\n")),Object(i.b)("h2",{id:"value"},"Value"),Object(i.b)("p",null,"A network object representing the current network in use (null otherwise); see WifiManager.getNetworks for more detail about such objects."))}p.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return w}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,w=l["".concat(a,".").concat(b)]||l[b]||f[b]||i;return n?o.a.createElement(w,c(c({ref:t},s),{},{components:n})):o.a.createElement(w,c({ref:t},s))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);