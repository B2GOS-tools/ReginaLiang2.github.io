(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{355:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),o=(a(0),a(398)),i={id:"datastoretask",title:"DataStoreTask"},s={unversionedId:"06.api/web-apis/dataStore/datastoretask",id:"06.api/web-apis/dataStore/datastoretask",isDocsHomePage:!1,title:"DataStoreTask",description:"Description",source:"@site/docs/06.api/web-apis/dataStore/datastoretask.md",slug:"/06.api/web-apis/dataStore/datastoretask",permalink:"/docs/06.api/web-apis/dataStore/datastoretask",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Example",id:"example",children:[]},{value:"Operation types",id:"operation-types",children:[]}],d={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The DataStoreTask interface of the Data Store API represents a record changed in the data store when a DataStoreCursor is used to iterate through the data store's change history."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastoretask/data"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStoreTask.data")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),Object(o.b)("br",{parentName:"li"}),"Returns the data stored in the changed record in the data store. Must return null if the operation is clear or done."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastoretask/id"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStoreTask.id")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),Object(o.b)("br",{parentName:"li"}),"Returns the identifier of the changed record in the data store. Must return null if the operation is clear or done."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastoretask/operation"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStoreTask.operation")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),Object(o.b)("br",{parentName:"li"}),"Returns the type of operation that represents the current change that has been made to the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastoretask/revisionid"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStoreTask.revisionId")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),Object(o.b)("br",{parentName:"li"}),"Returns the id of the current revision of the data store, i.e. the current change that has been made to a data record.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the following example, we use navigator.getDataStores to return a list of DataStore objects representing data stores on the device called contacts. Since there is only one such data store, we can access it inside the outer promise using stores","[0]",". The next promise uses DataStore.getLength to return the number of records in the store. If the value is 0, we populate the data store with records contained in the contactsInit object; if there is already data in the store, we run DataStore.sync to create a DataStoreCursor object allowing us to loop through any additions since the code last accessed the data store and update the data display as necessary."),Object(o.b)("p",null,"The cursor is passed to the runNextTask() function, which calls DataStoreCursor.next to start the process of managing the next task \u2014 the resulting DataStoreTask object is passed to the manageTask() function to work out what to do with it. runNextTask() is then called repeatedly by manageTask() until the cursor has finished working through all the records."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  stores[0].getLength().then(function(storeLength) {\n    if(storeLength == 0) {\n        for(i = 0; i < contactsInit.length; i++) {\n        addContact(stores[0],contactsInit[i]);  \n      };\n    } else {\n      var cursor = stores[0].sync();\n      runNextTask(cursor);\n    }\n  });\n});\n\nfunction runNextTask(cursor) {\n cursor.next().then(function(task) {\n   manageTask(cursor, task);\n });\n}\n\nfunction manageTask(cursor, task) {\n  if (task.operation == 'done') {\n    // Finished adding contacts!\n    return;\n  }\n\n  if (task.operation == 'add') {\n    // Add the contacts that are different to how it was before\n    displayExisting(task.id, task.data);\n  }\n\n  runNextTask(cursor);\n}\n")),Object(o.b)("h2",{id:"operation-types"},"Operation types"),Object(o.b)("p",null,"The different operation types used in DataStoreTask are (see also the spec definitions):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"add"))," - The data record is added into the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"update"))," - The data record is updated in the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"remove"))," - The data record is deleted in the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"clear"))," - All the records are deleted from the data store; a clear operation (plus a list of add operations) is also received when the revision ID is too old for the DataStore to be able to provide all the steps to bring you to the current ID. The DataStore Service has a list of about 100 operations in memory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"done"))," - All changes are finished.")))}l.isMDXComponent=!0},398:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return a?n.a.createElement(h,s(s({ref:t},d),{},{components:a})):n.a.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);