(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(396)),i={id:"revisionid",title:"DataStoreTask.revisionId"},s={unversionedId:"06.api/web-apis/dataStore/datastoretask/revisionid",id:"06.api/web-apis/dataStore/datastoretask/revisionid",isDocsHomePage:!1,title:"DataStoreTask.revisionId",description:"The revisionId read-only property of the DataStoreTask interface returns the id of the current revision of the data store, i.e. the current change that has been made to a data record.",source:"@site/docs/06.api/web-apis/dataStore/datastoretask/revisionid.md",slug:"/06.api/web-apis/dataStore/datastoretask/revisionid",permalink:"/docs/06.api/web-apis/dataStore/datastoretask/revisionid",version:"current"},c=[{value:"Syntax",id:"syntax",children:[{value:"Value",id:"value",children:[]}]},{value:"Example",id:"example",children:[]}],u={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The revisionId read-only property of the DataStoreTask interface returns the id of the current revision of the data store, i.e. the current change that has been made to a data record."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"myRevision = task.revisionId;\n")),Object(o.b)("h3",{id:"value"},"Value"),Object(o.b)("p",null,"A DOMString."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the following example, we use navigator.getDataStores to return a list of DataStore objects representing data stores on the device called contacts. Since there is only one such data store, we can access it inside the outer promise using stores","[0]",". The next promise uses DataStore.getLength() to return the number of records in the store. If the value is 0, we populate the data store with records contained in the contactsInit object; if there is already data in the store, we run DataStore.sync() to create a DataStoreCursor object allowing us to loop through any additions since the code last accessed the data store and update the data display as necessary."),Object(o.b)("p",null,"The cursor is passed to the runNextTask() function, which calls DataStoreCursor.next() to start the process of managing the next task \u2014 the resulting DataStoreTask object is passed to the manageTask() function to work out what to do with it. runNextTask() is then called repeatedly by manageTask() until the cursor has finished working through all the records."),Object(o.b)("p",null,"task.revisionId is logged to the console inside the runNextTask() function with each iteration."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"    navigator.getDataStores('contacts').then(function(stores) {\n      stores[0].getLength().then(function(storeLength) {\n        if(storeLength == 0) {\n            for(i = 0; i < contactsInit.length; i++) {\n            addContact(stores[0],contactsInit[i]);  \n          };\n        } else {\n          var cursor = stores[0].sync();\n          runNextTask(cursor);\n        }\n      });\n    });\n\n    function runNextTask(cursor) {\n     cursor.next().then(function(task) {\n       console.log(task.revisionId);\n       manageTask(cursor, task);\n     });\n    }\n\n    function manageTask(cursor, task) {\n      if (task.operation == 'done') {\n        // Finished adding contacts!\n        return;\n      }\n\n      if (task.operation == 'add') {\n        // Add the contacts that are different to how it was before\n        displayExisting(task.id, task.data);\n      }\n\n      runNextTask(cursor);\n    }\n")))}d.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(n),h=r,f=l["".concat(i,".").concat(h)]||l[h]||p[h]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);