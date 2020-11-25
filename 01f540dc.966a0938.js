(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{398:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),h=r,b=l["".concat(i,".").concat(h)]||l[h]||d[h]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(398)),i={id:"operation",title:"DataStoreChangeEvent.operation"},c={unversionedId:"06.api/web-apis/dataStore/datastorechangeevent/operation",id:"06.api/web-apis/dataStore/datastorechangeevent/operation",isDocsHomePage:!1,title:"DataStoreChangeEvent.operation",description:"The operation read-only property of the DataStoreChangeEvent interface returns the type of operation that represents the current change that has been made to the data store.",source:"@site/docs/06.api/web-apis/dataStore/datastorechangeevent/operation.md",slug:"/06.api/web-apis/dataStore/datastorechangeevent/operation",permalink:"/docs/06.api/web-apis/dataStore/datastorechangeevent/operation",version:"current"},p=[{value:"Syntax",id:"syntax",children:[{value:"Value",id:"value",children:[]}]},{value:"Example",id:"example",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The operation read-only property of the DataStoreChangeEvent interface returns the type of operation that represents the current change that has been made to the data store."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The Data Store API is available in Web Workers, from Firefox 32 onwards")),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"myOperation = e.operation;\n")),Object(o.b)("h3",{id:"value"},"Value"),Object(o.b)("p",null,"A DataStoreOperation (see Operation types)."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,'In the following snippet we retrieve all the data stores on the device with the name "contacts", then we use DataStore.sync to create a cursor to use for syncing the app with the current "content" data store (displaying new items, etc.) This cursor is passed to the runNextTask() function that will deal with running through the updates in some way. Next, we include some code inside an onchange function so that when a change is made we return the DataStoreChangeEvent (e in this case), find out what type of operation the change is, and then take action based on this type (either adding or deleting a contact\'s information.)'),Object(o.b)("p",null,"e.operation is used to check what type of operation the current change is."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  var cursor = stores[0].sync();\n  runNextTask(cursor);\n\n  stores[0].onchange = function(e) {\n    if (e.operation == 'removed') {\n      // Delete the contact\n      deleteContact(e.id);\n    }\n\n    if (e.operation == 'added') {\n      stores[0].get(e.id).then(function(obj) {\n        // Add the new contact\n        loadData(obj,e.id);\n      });\n    }\n  }\n});\n")))}u.isMDXComponent=!0}}]);