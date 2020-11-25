(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{263:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(396)),c={id:"09.remove",title:"DataStore.remove()"},i={unversionedId:"06.api/web-apis/dataStore/datastore/09.remove",id:"06.api/web-apis/dataStore/datastore/09.remove",isDocsHomePage:!1,title:"DataStore.remove()",description:"The remove() method of the DataStore interface deletes one or more objects from the current data store.",source:"@site/docs/06.api/web-apis/dataStore/datastore/09.remove.md",slug:"/06.api/web-apis/dataStore/datastore/09.remove",permalink:"/docs/06.api/web-apis/dataStore/datastore/09.remove",version:"current"},s=[{value:"Syntax",id:"syntax",children:[{value:"Returns",id:"returns",children:[]},{value:"Parameters",id:"parameters",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The remove() method of the DataStore interface deletes one or more objects from the current data store."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"store.remove(1).then(function(success) {\n  // Do something with success, which is a boolean communicating \n  // the result of whether the deletion was successful or not\n});\n")),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,"A Promise object of type Boolean that resolves with a boolean communicating the result of whether the deletion was successful or not."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id"),Object(o.b)("br",{parentName:"li"}),"remove() can be passed one or more ids of specific records that you want to delete from the data store. When you want to delete multiple ids, you pass them in as multiple parameters, rather than an array or object, e.g. remove(1,2,3)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"revisionId"),Object(o.b)("br",{parentName:"li"}),"You can specify an optional second parameter that will be a revisionId (a DOMString). This can be used to prevent conflicts. If the revisionId is not the current revisionId for the current Data Store, the operation is aborted. This means that the developer has a 'old' revisionId and will have to manage the conflict somehow.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,'The following example gets all the data stores on the device called "contacts", then removes the first three records stored in the first "contacts" data store:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  stores[0].remove(1,2,3).then(function(success) {\n    if(success) {\n      console.log('Records successfully removed.');\n    };\n  });\n});\n")))}u.isMDXComponent=!0},396:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);