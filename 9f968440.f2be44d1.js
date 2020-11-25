(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(396)),c={id:"02.owner",title:"DataStore.owner"},i={unversionedId:"06.api/web-apis/dataStore/datastore/02.owner",id:"06.api/web-apis/dataStore/datastore/02.owner",isDocsHomePage:!1,title:"DataStore.owner",description:"The owner read-only property of the DataStore interface returns the name of the app that owns the current data store.",source:"@site/docs/06.api/web-apis/dataStore/datastore/02.owner.md",slug:"/06.api/web-apis/dataStore/datastore/02.owner",permalink:"/docs/06.api/web-apis/dataStore/datastore/02.owner",version:"current"},p=[{value:"Syntax",id:"syntax",children:[{value:"Value",id:"value",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"owner")," read-only property of the DataStore interface returns the name of the app that owns the current data store."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"myStoreOwner = store.owner;\n")),Object(o.b)("h3",{id:"value"},"Value"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"DOMString"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,'The following example gets all the data stores on the device called "contacts", then logs the data store owner to the console:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  console.log(stores[0].owner);\n});\n")))}u.isMDXComponent=!0},396:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);