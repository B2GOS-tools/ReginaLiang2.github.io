(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(396)),i={id:"storage",title:"Storage"},s={unversionedId:"03.core-developer-topics/storage",id:"version-sfp-3.0/03.core-developer-topics/storage",isDocsHomePage:!1,title:"Storage",description:"There is no limit to application size or storage size, except for physical",source:"@site/versioned_docs/version-sfp-3.0/03.core-developer-topics/storage.md",slug:"/03.core-developer-topics/storage",permalink:"/docs/sfp-3.0/03.core-developer-topics/storage",version:"sfp-3.0",sidebar:"version-sfp-3.0/docs",previous:{title:"Network State Changes",permalink:"/docs/sfp-3.0/03.core-developer-topics/network-state-changes"},next:{title:"Notifications",permalink:"/docs/sfp-3.0/03.core-developer-topics/using-push-notifications"}},l=[{value:"Data Storage",id:"data-storage",children:[]},{value:"Device Storage",id:"device-storage",children:[]},{value:"MDN Resource",id:"mdn-resource",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There is no limit to application size or storage size, except for physical\nstorage constraints."),Object(o.b)("p",null,"App size range depends on the complexity of the app. Below some internal ",Object(o.b)("strong",{parentName:"p"},"KaiOS")," apps\u2019 sizes for your reference:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Calculator: 200KB"),Object(o.b)("li",{parentName:"ul"},"Settings: 10MB")),Object(o.b)("h2",{id:"data-storage"},"Data Storage"),Object(o.b)("p",null,"The aim of this guideline is to provide information for app developer saving data in a better way due to smart feature phone is not like smart phone usually with large data storage."),Object(o.b)("p",null,"To prevent user hit storage full issue with unexpected scenario, KaiOS needs app developer\u2019s support to follow the guideline below for better user experience."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Media file should be saved in media storage, NOT in application data as indexedDB.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"KaiOS system will block DB writing once remaining data storage size is lower than 30MB",Object(o.b)("em",{parentName:"p"},", so each app must do error handling. ("),"the number may be difference based on device)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"App developer should handle the content carefully and set some limitation especially for low storage devices. For example, to limit the total size of content such as the number of messages to 10000 or contact number to 1000, once the number is close to the limit, to show the error message or overwrite the older data.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"KaiOS provides a preventive action to keep device working normal as usual when storage is full by large size of indexedDB. It will perform data storage clean up by deleting old, removable indexedDB.\nTo delete the object properly, KaiOS needs app to mark indexedDB when creating DB for those data which is considered \u201ccan be deleted\u201d while storage full. App Developer should be aware of:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'* The storage type for these IDB is "temporary" which will be all removed when available space is lower than a threshold.\n\n* For IDB guideline, developer could refer [this link](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase) since the rest of usage is the same as normal database.\n\n* App should support error handling and upgrade situation when the indexedDB is removed.\n\n* Method to Create/Delete removable indexedDB as following:\n')))),Object(o.b)("p",null,"To request opening a connection to a database that able to be deleted when space needed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Syntax: var IDBOpenDBRequest = indexedDB.open(name, { version, storageType });\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var db;\nvar DBOpenRequest = indexedDB.open('MyTestDatabase');\n\nDBOpenRequest.onerror = function(event) {\n  alert(\"Why didn't you allow my web app to use IndexedDB?!\");\n};\n\nDBOpenRequest.onsuccess = function(event) {\n  db = event.target.result;\n};\n")),Object(o.b)("p",null,"To request deletion of a database which in temporary storage type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Syntax: var IDBOpenDBRequest = indexedDB.deleteDatabase(name, {\n  version,\n  storageType\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var DBDeleteRequest = window.indexedDB.deleteDatabase('toDoList', {\n  version: 4,\n  storage: 'temporary'\n});\n\nDBDeleteRequest.onerror = function(event) {\n  console.log('Error deleting database.');\n};\n\nDBDeleteRequest.onsuccess = function(event) {\n  console.log('Database deleted successfully');\n  console.log(event.result); // should be undefined\n};\n")),Object(o.b)("p",null,"For small size records and application data, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"}),"Web Storage API"),"\nprovides access to session storage or local storage, allowing you\nto add, modify, or delete stored items."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Session storage: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),Object(o.b)("inlineCode",{parentName:"a"},"Window.sessionStorage"))),Object(o.b)("li",{parentName:"ul"},"Local storage: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),Object(o.b)("inlineCode",{parentName:"a"},"Window.localStorage")))),Object(o.b)("h2",{id:"device-storage"},"Device Storage"),Object(o.b)("p",null,"For access to specific files in a specific storage area on the\ndevice, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../api/device-storage/devicestorage"}),Object(o.b)("inlineCode",{parentName:"a"},"DeviceStorage")," interface")," is used."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"navigator.getDeviceStorage()")," will return a ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceStorage")," object\nwhich you can then use to access content of the storage area."),Object(o.b)("h2",{id:"mdn-resource"},"MDN Resource"),Object(o.b)("p",null,"You can refer ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB"}),"Using IndexedDB")," for more information."))}p.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);