(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{398:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,j=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(j,o(o({ref:t},s),{},{components:a})):r.a.createElement(j,o({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(8),c=(a(0),a(398)),l={id:"daemon-api-powermanager",title:"PowermanagerService service"},o={unversionedId:"09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager",isDocsHomePage:!1,title:"PowermanagerService service",description:"Instanciating the service",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/README.md",slug:"/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager",version:"sfp-3.0"},b=[{value:"Instanciating the service",id:"instanciating-the-service",children:[]},{value:"FactoryResetReason enumeration",id:"factoryresetreason-enumeration",children:[]},{value:"Powermanager Interface",id:"powermanager-interface",children:[{value:"Members",id:"members",children:[]},{value:"Methods",id:"methods",children:[]}]}],s={rightToc:b};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"instanciating-the-service"},"Instanciating the service"),Object(c.b)("p",null,"Load the following scripts:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="http://127.0.0.1:8081/api/v1/shared/core.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/shared/session.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/apps/service.js"><\/script>\n')),Object(c.b)("p",null,"You can then get an instance of the service with code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'function getService() {\n  return new Promise((resolve, reject) => {\n    let session = new lib_session.Session();\n    let sessionstate = {\n      onsessionconnected() {\n        lib_powermanager.PowermanagerService.get(session).then(resolve, reject);\n      },\n\n      onsessiondisconnected() {\n        reject("Session Disconnected");\n      }\n    };\n\n    // On desktop version, set ENV WS_RUNTIME_TOKEN=secrettoken when running the api-daemon.\n    session.open("websocket", "localhost:8081", "secrettoken", sessionstate);\n  });\n}\n\nlet instance = getService().then(powermanager => {\n...\n});\n')),Object(c.b)("p",null,"This service implements the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager"}),"Powermanager")," interface."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"factoryresetreason-enumeration"},"FactoryResetReason enumeration"),Object(c.b)("p",null,"{",Object(c.b)("br",null),"\n","\xa0","\xa0","NORMAL,",Object(c.b)("br",null),"\xa0","\xa0","WIPE,",Object(c.b)("br",null),"\xa0","\xa0","ROOT,",Object(c.b)("br",null),"\n}"),Object(c.b)("hr",null),Object(c.b)("hr",null),Object(c.b)("h2",{id:"powermanager-interface"},"Powermanager Interface"),Object(c.b)("h3",{id:"members"},"Members"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_cpuSleepAllowed"}),"cpuSleepAllowed")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_extScreenBrightness"}),"extScreenBrightness")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_extScreenEnabled"}),"extScreenEnabled")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_factoryReset"}),"factoryReset")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_keyLightBrightness"}),"keyLightBrightness")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_keyLightEnabled"}),"keyLightEnabled")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_screenBrightness"}),"screenBrightness")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_member_screenEnabled"}),"screenEnabled")),Object(c.b)("p",null,"cpuSleepAllowed is of type boolean"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.cpuSleepAllowed().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.cpuSleepAllowed = value;\n")),Object(c.b)("p",null,"extScreenBrightness is of type integer"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.extScreenBrightness().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.extScreenBrightness = value;\n")),Object(c.b)("p",null,"extScreenEnabled is of type boolean"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.extScreenEnabled().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.extScreenEnabled = value;\n")),Object(c.b)("p",null,"factoryReset is of type ",Object(c.b)("a",{href:"#enumeration_FactoryResetReason"},"FactoryResetReason")),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.factoryReset().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.factoryReset = value;\n")),Object(c.b)("p",null,"keyLightBrightness is of type integer"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.keyLightBrightness().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.keyLightBrightness = value;\n")),Object(c.b)("p",null,"keyLightEnabled is of type boolean"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.keyLightEnabled().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.keyLightEnabled = value;\n")),Object(c.b)("p",null,"screenBrightness is of type integer"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.screenBrightness().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.screenBrightness = value;\n")),Object(c.b)("p",null,"screenEnabled is of type boolean"),Object(c.b)("p",null,"To get  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.screenEnabled().then(value => { ... });\n")),Object(c.b)("p",null,"To set  value, use code similar to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"target.screenEnabled = value;\n")),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("p",null,"\xa0","\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_method_powerOff"}),"powerOff"),"  ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#interface_Powermanager_method_reboot"}),"reboot"),"  "),Object(c.b)("p",null,"  powerOff()"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null),Object(c.b)("p",null,"  reboot()"),Object(c.b)("p",null,"  Resolves with void"),Object(c.b)("p",null,"  Rejects with void"),Object(c.b)("hr",null))}i.isMDXComponent=!0}}]);