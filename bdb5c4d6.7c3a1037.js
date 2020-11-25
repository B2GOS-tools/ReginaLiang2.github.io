(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{306:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(398)),i={id:"19.startdiscovery",title:"BluetoothAdapter.startDiscovery"},c={unversionedId:"06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery",id:"06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery",isDocsHomePage:!1,title:"BluetoothAdapter.startDiscovery",description:"Description",source:"@site/docs/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery.md",slug:"/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery",permalink:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Returns",id:"returns",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"startDiscovery")," method is used to have the device's adapter start seeking for remote devices."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var request = instanceOfBluetoothAdapter.startDiscovery();\n")),Object(a.b)("h2",{id:"returns"},"Returns"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"DOMRequest")," object to handle the success or error of the operation. In case of success, the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/05.discovering"}),Object(a.b)("inlineCode",{parentName:"a"},"BluetoothAdapter.discovering"))," property is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."))}u.isMDXComponent=!0},398:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);