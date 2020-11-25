(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{320:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(396)),o={id:"clients",title:"Clients"},c={unversionedId:"06.api/web-apis/clients/clients",id:"06.api/web-apis/clients/clients",isDocsHomePage:!1,title:"Clients",description:"Description",source:"@site/docs/06.api/web-apis/clients/clients.md",slug:"/06.api/web-apis/clients/clients",permalink:"/docs/06.api/web-apis/clients/clients",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Methods:",id:"methods",children:[]},{value:"Examples",id:"examples",children:[]},{value:"KaiOS manifest permissions",id:"kaios-manifest-permissions",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Clients interface of the Service Workers API represents a container for a list of Client objects."),Object(a.b)("p",null,"You should include an entry in your manifest.webapp file for Service Worker API including it in a KaiOS app."),Object(a.b)("h2",{id:"methods"},"Methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients/get"}),Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Clients.get()"))),"\nGets a service worker client matching a given id and returns it in a Promise.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll"}),Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Clients.matchAll()"))),"\nGets a list of service worker clients and returns them in a Promise. Include the options parameter to return all service worker clients whose origin is the same as the associated service worker's origin. If options are not included, the method returns only the service worker clients controlled by the service worker.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/06.api/web-apis/clients/01.openapp"}),Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Clients.openApp()"))),Object(a.b)("br",{parentName:"p"}),"\n","Launches a web app with the same origin of its service worker scope.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim"}),Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Clients.claim()"))),"\nAllows an active Service Worker to set itself as the active worker for a client page when the worker and the page are in the same scope."))),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// When the user clicks a notification open the App if it does not exist\nonotificationclick = function(event) {\n  var found = false;\n  clients.matchAll().then(function(clients) {\n    for (i = 0; i < clients.length; i++) {\n      if (clients[i].url === event.data.url) {\n        // do something else involving the matching client\n        found = true;\n        break;\n      }\n    }\n    if (!found) {\n      clients.openApp();\n    }\n  });\n};\n});\n")),Object(a.b)("h2",{id:"kaios-manifest-permissions"},"KaiOS manifest permissions"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"permissions": {\n  "serviceworker": {\n    "description": "Needed for assocating service worker"\n  },\n  "desktop-notification": {\n    "description": "Needed for creating system notifications."\n  }\n},\n"messages": [{"serviceworker-notification": "path/to/your/index.html"}]\n')))}p.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);