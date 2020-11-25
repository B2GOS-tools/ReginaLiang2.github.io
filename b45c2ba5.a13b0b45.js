(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),c=(n(0),n(396)),i={id:"daemon-api-timeservices",title:"TimeService service"},b={unversionedId:"09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices",isDocsHomePage:!1,title:"TimeService service",description:"Instanciating the service",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/README.md",slug:"/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices",version:"sfp-3.0"},s=[{value:"Instanciating the service",id:"instanciating-the-service",children:[]},{value:"CallbackReason enumeration",id:"callbackreason-enumeration",children:[]},{value:"TimeObserver callback object",id:"timeobserver-callback-object",children:[{value:"Creating a TimeObserver object",id:"creating-a-timeobserver-object",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Time Interface",id:"time-interface",children:[{value:"Methods",id:"methods-1",children:[]},{value:"Events",id:"events",children:[]}]}],l={rightToc:s};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"instanciating-the-service"},"Instanciating the service"),Object(c.b)("p",null,"Load the following scripts:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="http://127.0.0.1:8081/api/v1/shared/core.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/shared/session.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/apps/service.js"><\/script>\n')),Object(c.b)("p",null,"You can then get an instance of the service with code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'function getService() {\n  return new Promise((resolve, reject) => {\n    let session = new lib_session.Session();\n    let sessionstate = {\n      onsessionconnected() {\n        lib_time.TimeService.get(session).then(resolve, reject);\n      },\n\n      onsessiondisconnected() {\n        reject("Session Disconnected");\n      }\n    };\n\n    // On desktop version, set ENV WS_RUNTIME_TOKEN=secrettoken when running the api-daemon.\n    session.open("websocket", "localhost:8081", "secrettoken", sessionstate);\n  });\n}\n\nlet instance = getService().then(time => {\n...\n});\n')),Object(c.b)("p",null,"This service implements the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time"}),"Time")," interface."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"callbackreason-enumeration"},"CallbackReason enumeration"),Object(c.b)("p",null,"{",Object(c.b)("br",null),"\n","\xa0","\xa0","NONE,",Object(c.b)("br",null),"\xa0","\xa0","TIME_CHANGED,",Object(c.b)("br",null),"\xa0","\xa0","TIMEZONE_CHANGED,",Object(c.b)("br",null),"\n}"),Object(c.b)("hr",null),Object(c.b)("hr",null),Object(c.b)("h2",{id:"timeobserver-callback-object"},"TimeObserver callback object"),Object(c.b)("h3",{id:"creating-a-timeobserver-object"},"Creating a TimeObserver object"),Object(c.b)("p",null,"Use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class MyCallbackObject extends lib_time.TimeObserverBase {\n  constructor(service, session) {\n    super(service.id, session);\n  }\n  \n    callback(...) {\n      ...\n  }\n  \n")),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#callback_TimeObserver_method_callback"}),"callback")),Object(c.b)("p",null,"callback(/",Object(c.b)("em",{parentName:"p"}," , reason "),"/ ",Object(c.b)("a",{href:"#enumeration_CallbackReason"},"CallbackReason"),")"),Object(c.b)("p",null,"Resolves with void"),Object(c.b)("p",null,"Rejects with void"),Object(c.b)("h2",{id:"time-interface"},"Time Interface"),Object(c.b)("h3",{id:"methods-1"},"Methods"),Object(c.b)("p",null,"\xa0","\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_addObserver"}),"addObserver"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_get"}),"get"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_getElapsedRealTime"}),"getElapsedRealTime"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_removeObserver"}),"removeObserver"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_set"}),"set"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_method_setTimezone"}),"setTimezone"),"  "),Object(c.b)("p",null,"  addObserver(/",Object(c.b)("em",{parentName:"p"}," , reason "),"/ ",Object(c.b)("a",{href:"#enumeration_CallbackReason"},"CallbackReason"),"/",Object(c.b)("em",{parentName:"p"}," , observer "),"/ ",Object(c.b)("a",{href:"#callback_TimeObserver"},"TimeObserver"),")"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  get()"),Object(c.b)("p",null,"  Resolves with Date"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  getElapsedRealTime()"),Object(c.b)("p",null,"  Resolves with integer"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  removeObserver(/",Object(c.b)("em",{parentName:"p"}," , reason "),"/ ",Object(c.b)("a",{href:"#enumeration_CallbackReason"},"CallbackReason"),"/",Object(c.b)("em",{parentName:"p"}," , observer "),"/ ",Object(c.b)("a",{href:"#callback_TimeObserver"},"TimeObserver"),")"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  set(/",Object(c.b)("em",{parentName:"p"}," , time "),"/ Date)"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  setTimezone(/",Object(c.b)("em",{parentName:"p"}," , timezone "),"/ string)"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"events"},"Events"),Object(c.b)("p",null,"\xa0","\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_event_TIME_CHANGED"}),"TIME_CHANGED"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_Time_event_TIMEZONE_CHANGED"}),"TIMEZONE_CHANGED"),"  "),Object(c.b)("p",null,"The TIME_CHANGED event emits a void"),Object(c.b)("p",null,"To manage this event, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.TIME_CHANGED_EVENT, handleEvent);\ntarget.removeEventListener(target.TIME_CHANGED_EVENT, handleEvent);\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"The TIMEZONE_CHANGED event emits a void"),Object(c.b)("p",null,"To manage this event, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.TIMEZONE_CHANGED_EVENT, handleEvent);\ntarget.removeEventListener(target.TIMEZONE_CHANGED_EVENT, handleEvent);\n")),Object(c.b)("hr",null))}o.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=o(n),O=r,u=p["".concat(i,".").concat(O)]||p[O]||m[O]||c;return n?a.a.createElement(u,b(b({ref:t},l),{},{components:n})):a.a.createElement(u,b({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=O;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);