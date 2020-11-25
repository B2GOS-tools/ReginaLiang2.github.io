(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(8),o=(a(0),a(396)),i={id:"datastore",title:"DataStore"},c={unversionedId:"06.api/web-apis/dataStore/datastore",id:"06.api/web-apis/dataStore/datastore",isDocsHomePage:!1,title:"DataStore",description:"Description",source:"@site/docs/06.api/web-apis/dataStore/datastore.md",slug:"/06.api/web-apis/dataStore/datastore",permalink:"/docs/06.api/web-apis/dataStore/datastore",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Properties",id:"properties",children:[{value:"Event handlers",id:"event-handlers",children:[]}]},{value:"Methods",id:"methods",children:[]},{value:"Example",id:"example",children:[]}],d={rightToc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DataStore")," interface of the Data Store API represents a retrieved set of data, and includes standard properties for accessing the store's name, owner, etc., methods for reading, modifying and syncing data, and the onchange event handler for reacting to changes to the data."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/01.name"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.name")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),"\nReturns the name of the current data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/02.owner"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.owner")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),"\nReturns the name of the app that owns the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/03.readonly"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.readOnly")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),"\nReturns a boolean that signifies whether the data store is read only or not."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/04.revisionid"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.revisionId")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),"\nReturns the current revision ID of the data store.")),Object(o.b)("h3",{id:"event-handlers"},"Event handlers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/05.onchange"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.onchange")))," ",Object(o.b)("inlineCode",{parentName:"li"},"read-only"),"\nFired when a change is made to the data store, by any app that has permission to modify it.")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/06.get"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.get()"))),"\nReturns a specific record (or list of records) from the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/07.add"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.add()"))),"\nAdds a new record to the data store; if the record you are attempting to add already exists, it will throw an exception."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/08.put"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.put()"))),"\nUpdates an existing record in the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/09.remove"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.remove()"))),"\nDeletes a record (or list of records) from the data store"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/10.clear"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.clear()"))),"\nDeletes all records from the data store, leaving it empty."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/11.getlength"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.getLength()"))," "),"\nReturns the number of records currently in the data store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/06.api/web-apis/dataStore/datastore/12.sync"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"DataStore.sync()"))),"\nOpens a cursor that allows you to step through any changes that have taken place in the data store going back to a particular revision ID, and run code in response to different types of change.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the following example, we use navigator.getDataStores to return a list of ",Object(o.b)("inlineCode",{parentName:"p"},"DataStore")," objects representing data stores on the device called contacts. Since there is only one such data store, we can access it inside the outer promise using ",Object(o.b)("inlineCode",{parentName:"p"},"stores[0]"),". The next promise uses ",Object(o.b)("inlineCode",{parentName:"p"},"DataStore.getLength")," to return the number of records in the store. If the value is 0, we populate the data store with records contained in the ",Object(o.b)("inlineCode",{parentName:"p"},"contactsInit")," object; if there is already data in the store, we run ",Object(o.b)("inlineCode",{parentName:"p"},"DataStore.sync")," to loop through any additions since the code last accessed the data store and update the data display as necessary."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.getDataStores('contacts').then(function(stores) {\n  stores[0].getLength().then(function(storeLength) {\n    if(storeLength == 0) {\n        for(i = 0; i < contactsInit.length; i++) {\n        addContact(stores[0],contactsInit[i]);\n      };\n    } else {\n      var cursor = stores[0].sync();\n      runNextTask(cursor);\n    }\n  });\n});\n")))}b.isMDXComponent=!0},396:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),b=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,m=p["".concat(i,".").concat(u)]||p[u]||l[u]||o;return a?n.a.createElement(m,c(c({ref:t},d),{},{components:a})):n.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);