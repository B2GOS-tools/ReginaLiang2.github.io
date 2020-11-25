(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{310:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),a=(r(0),r(396)),i={id:"04.discoverable",title:"BluetoothAdapter.discoverable"},c={unversionedId:"06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable",id:"06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable",isDocsHomePage:!1,title:"BluetoothAdapter.discoverable",description:"Description",source:"@site/docs/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable.md",slug:"/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable",permalink:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Value",id:"value",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"discoverable")," property indicates if the device is discoverable (",Object(a.b)("inlineCode",{parentName:"p"},"true"),") or not (",Object(a.b)("inlineCode",{parentName:"p"},"false"),") by other Bluetooth devices."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," This property can be changed with the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/18.setdiscoverable"}),Object(a.b)("inlineCode",{parentName:"a"},"BluetoothAdapter.setDiscoverable()"))," method.")),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var isDiscoverable = instanceOfBluetoothAdapter.discoverable\n")),Object(a.b)("h2",{id:"value"},"Value"),Object(a.b)("p",null,"Return a boolean."))}b.isMDXComponent=!0},396:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);