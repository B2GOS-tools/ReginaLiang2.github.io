(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(398)),c={id:"03.readonly",title:"DataStore.readOnly"},i={unversionedId:"06.api/web-apis/dataStore/datastore/03.readonly",id:"06.api/web-apis/dataStore/datastore/03.readonly",isDocsHomePage:!1,title:"DataStore.readOnly",description:"The readOnly read-only property of the DataStore interface returns a boolean indicating whether the current data store is read-only.",source:"@site/docs/06.api/web-apis/dataStore/datastore/03.readonly.md",slug:"/06.api/web-apis/dataStore/datastore/03.readonly",permalink:"/docs/06.api/web-apis/dataStore/datastore/03.readonly",version:"current"},l=[{value:"Syntax",id:"syntax",children:[{value:"Value",id:"value",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"readOnly")," read-only property of the ",Object(o.b)("inlineCode",{parentName:"p"},"DataStore")," interface returns a boolean indicating whether the current data store is read-only."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"myStoreName = store.readOnly;\n")),Object(o.b)("h3",{id:"value"},"Value"),Object(o.b)("p",null,"A boolean."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,'The following example gets all the data stores on the device called "contacts", then logs its read-only status to the console:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  console.log(stores[0].readOnly);\n});\n")))}s.isMDXComponent=!0},398:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,y=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(y,i(i({ref:t},p),{},{components:r})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);