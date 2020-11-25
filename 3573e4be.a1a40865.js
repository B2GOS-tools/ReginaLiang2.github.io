(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(8),a=(r(0),r(396)),o={id:"forget",title:"WifiManager.forget()"},c={unversionedId:"06.api/web-apis/wifiInformation/wifimanager/forget",id:"06.api/web-apis/wifiInformation/wifimanager/forget",isDocsHomePage:!1,title:"WifiManager.forget()",description:"Description",source:"@site/docs/06.api/web-apis/wifiInformation/wifimanager/forget.md",slug:"/06.api/web-apis/wifiInformation/wifimanager/forget",permalink:"/docs/06.api/web-apis/wifiInformation/wifimanager/forget",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]}],f={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The forget method is used to make a device forget about a given WiFi network. This will remove the network from the list of known networks and will remove all the configuration settings related to that network."),Object(a.b)("p",null,"If the device was connected to that network, it is disconnected from it."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var request = navigator.mozWifiManager.forget(network);\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"network")," - A network object as the ones provided by the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/06.api/web-apis/wifiInformation/wifimanager/getnetworks"}),"getNetworks")," or ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/06.api/web-apis/wifiInformation/wifimanager/getknownnetworks"}),"getKnownNetworks")," methods. ")),Object(a.b)("h3",{id:"returns"},"Returns"),Object(a.b)("p",null,"It returns a DOMRequest to handle the success or error of the operation."))}p.isMDXComponent=!0},396:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=i.a.createContext({}),p=function(e){var t=i.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||l[b]||a;return r?i.a.createElement(m,c(c({ref:t},f),{},{components:r})):i.a.createElement(m,c({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var f=2;f<a;f++)o[f]=r[f];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);