(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),c=(n(0),n(396)),i={id:"daemon-api-settings",title:"SettingsManager service"},s={unversionedId:"09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings",isDocsHomePage:!1,title:"SettingsManager service",description:"Instanciating the service",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/README.md",slug:"/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings",version:"sfp-3.0"},b=[{value:"Instanciating the service",id:"instanciating-the-service",children:[]},{value:"GetErrorReason enumeration",id:"geterrorreason-enumeration",children:[]},{value:"GetError dictionnary",id:"geterror-dictionnary",children:[]},{value:"SettingInfo dictionnary",id:"settinginfo-dictionnary",children:[]},{value:"SettingObserver callback object",id:"settingobserver-callback-object",children:[{value:"Creating a SettingObserver object",id:"creating-a-settingobserver-object",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"SettingsFactory Interface",id:"settingsfactory-interface",children:[{value:"Methods",id:"methods-1",children:[]},{value:"Events",id:"events",children:[]}]}],o={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"instanciating-the-service"},"Instanciating the service"),Object(c.b)("p",null,"Load the following scripts:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="http://127.0.0.1:8081/api/v1/shared/core.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/shared/session.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/apps/service.js"><\/script>\n')),Object(c.b)("p",null,"You can then get an instance of the service with code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'function getService() {\n  return new Promise((resolve, reject) => {\n    let session = new lib_session.Session();\n    let sessionstate = {\n      onsessionconnected() {\n        lib_settings.SettingsManager.get(session).then(resolve, reject);\n      },\n\n      onsessiondisconnected() {\n        reject("Session Disconnected");\n      }\n    };\n\n    // On desktop version, set ENV WS_RUNTIME_TOKEN=secrettoken when running the api-daemon.\n    session.open("websocket", "localhost:8081", "secrettoken", sessionstate);\n  });\n}\n\nlet instance = getService().then(settings => {\n...\n});\n')),Object(c.b)("p",null,"This service implements the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory"}),"SettingsFactory")," interface."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"geterrorreason-enumeration"},"GetErrorReason enumeration"),Object(c.b)("p",null,"{",Object(c.b)("br",null),"\n","\xa0","\xa0","UNKNOWN_ERROR,",Object(c.b)("br",null),"\xa0","\xa0","NON_EXISTING_SETTING,",Object(c.b)("br",null),"\n}"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"geterror-dictionnary"},"GetError dictionnary"),Object(c.b)("p",null,"{",Object(c.b)("br",null),"\n","\xa0","\xa0","name: string,",Object(c.b)("br",null),"\xa0","\xa0","reason: ",Object(c.b)("a",{href:"#enumeration_GetErrorReason"},"GetErrorReason"),",",Object(c.b)("br",null),"\n}"),Object(c.b)("h2",{id:"settinginfo-dictionnary"},"SettingInfo dictionnary"),Object(c.b)("p",null,"{",Object(c.b)("br",null),"\n","\xa0","\xa0","name: string,",Object(c.b)("br",null),"\xa0","\xa0","value: json,",Object(c.b)("br",null),"\n}"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"settingobserver-callback-object"},"SettingObserver callback object"),Object(c.b)("h3",{id:"creating-a-settingobserver-object"},"Creating a SettingObserver object"),Object(c.b)("p",null,"Use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class MyCallbackObject extends lib_settings.SettingObserverBase {\n  constructor(service, session) {\n    super(service.id, session);\n  }\n  \n    callback(...) {\n      ...\n  }\n  \n")),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#callback_SettingObserver_method_callback"}),"callback")),Object(c.b)("p",null,"callback(/",Object(c.b)("em",{parentName:"p"}," , setting "),"/ ",Object(c.b)("a",{href:"#dictionary_SettingInfo"},"SettingInfo"),")"),Object(c.b)("p",null,"Resolves with void"),Object(c.b)("p",null,"Rejects with void"),Object(c.b)("h2",{id:"settingsfactory-interface"},"SettingsFactory Interface"),Object(c.b)("h3",{id:"methods-1"},"Methods"),Object(c.b)("p",null,"\xa0","\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_addObserver"}),"addObserver"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_clear"}),"clear"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_get"}),"get"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_getBatch"}),"getBatch"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_removeObserver"}),"removeObserver"),"  ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_method_set"}),"set"),"  "),Object(c.b)("p",null,"  addObserver(/",Object(c.b)("em",{parentName:"p"}," , name "),"/ string/",Object(c.b)("em",{parentName:"p"}," , observer "),"/ ",Object(c.b)("a",{href:"#callback_SettingObserver"},"SettingObserver"),")"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  clear()"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  get(/",Object(c.b)("em",{parentName:"p"}," , name "),"/ string)"),Object(c.b)("p",null,"  Resolves with ",Object(c.b)("a",{href:"#dictionary_SettingInfo"},"SettingInfo")),Object(c.b)("p",null,"  Rejects with ",Object(c.b)("a",{href:"#dictionary_GetError"},"GetError")),Object(c.b)("hr",null),Object(c.b)("p",null,"  getBatch(/",Object(c.b)("em",{parentName:"p"}," , name "),"/ ","[string]",")"),Object(c.b)("p",null,"  Resolves with ",Object(c.b)("a",{href:"#dictionary_SettingInfo"},"[SettingInfo]")),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  removeObserver(/",Object(c.b)("em",{parentName:"p"}," , name "),"/ string/",Object(c.b)("em",{parentName:"p"}," , observer "),"/ ",Object(c.b)("a",{href:"#callback_SettingObserver"},"SettingObserver"),")"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  set(/",Object(c.b)("em",{parentName:"p"}," , settings "),"/ ",Object(c.b)("a",{href:"#dictionary_SettingInfo"},"[SettingInfo]"),")"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"events"},"Events"),Object(c.b)("p",null,"\xa0","\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#interface_SettingsFactory_event_CHANGE"}),"CHANGE"),"  "),Object(c.b)("p",null,"The CHANGE event emits a ",Object(c.b)("a",{href:"#dictionary_SettingInfo"},"SettingInfo")),Object(c.b)("p",null,"To manage this event, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.CHANGE_EVENT, handleEvent);\ntarget.removeEventListener(target.CHANGE_EVENT, handleEvent);\n")),Object(c.b)("hr",null))}l.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=l(n),j=r,u=p["".concat(i,".").concat(j)]||p[j]||O[j]||c;return n?a.a.createElement(u,s(s({ref:t},o),{},{components:n})):a.a.createElement(u,s({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=j;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);