(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),b=(n(0),n(396)),c={id:"daemon-api-appsmanager",title:"AppsManager service"},p={unversionedId:"09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager",isDocsHomePage:!1,title:"AppsManager service",description:"Instanciating the service",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/README.md",slug:"/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager",version:"sfp-3.0"},l=[{value:"Instanciating the service",id:"instanciating-the-service",children:[]},{value:"AppsInstallState enumeration",id:"appsinstallstate-enumeration",children:[]},{value:"AppsServiceError enumeration",id:"appsserviceerror-enumeration",children:[]},{value:"AppsServiceState enumeration",id:"appsservicestate-enumeration",children:[]},{value:"AppsStatus enumeration",id:"appsstatus-enumeration",children:[]},{value:"AppsUpdateState enumeration",id:"appsupdatestate-enumeration",children:[]},{value:"ClearType enumeration",id:"cleartype-enumeration",children:[]},{value:"ConnectionType enumeration",id:"connectiontype-enumeration",children:[]},{value:"AppsObject dictionnary",id:"appsobject-dictionnary",children:[]},{value:"AppsOptions dictionnary",id:"appsoptions-dictionnary",children:[]},{value:"AppsEngine Interface",id:"appsengine-interface",children:[{value:"Methods",id:"methods",children:[]},{value:"Events",id:"events",children:[]}]}],i={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"instanciating-the-service"},"Instanciating the service"),Object(b.b)("p",null,"Load the following scripts:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="http://127.0.0.1:8081/api/v1/shared/core.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/shared/session.js"><\/script>\n<script src="http://127.0.0.1:8081/api/v1/apps/service.js"><\/script>\n')),Object(b.b)("p",null,"You can then get an instance of the service with code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'function getService() {\n  return new Promise((resolve, reject) => {\n    let session = new lib_session.Session();\n    let sessionstate = {\n      onsessionconnected() {\n        lib_apps.AppsManager.get(session).then(resolve, reject);\n      },\n\n      onsessiondisconnected() {\n        reject("Session Disconnected");\n      }\n    };\n\n    // On desktop version, set ENV WS_RUNTIME_TOKEN=secrettoken when running the api-daemon.\n    session.open("websocket", "localhost:8081", "secrettoken", sessionstate);\n  });\n}\n\nlet instance = getService().then(apps => {\n...\n});\n')),Object(b.b)("p",null,"This service implements the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine"}),"AppsEngine")," interface."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"appsinstallstate-enumeration"},"AppsInstallState enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","INSTALLED,",Object(b.b)("br",null),"\xa0","\xa0","INSTALLING,",Object(b.b)("br",null),"\xa0","\xa0","PENDING,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"appsserviceerror-enumeration"},"AppsServiceError enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","APP_NOT_FOUND,",Object(b.b)("br",null),"\xa0","\xa0","CLEAR_DATA_ERROR,",Object(b.b)("br",null),"\xa0","\xa0","DISK_SPACE_NOT_ENOUGH,",Object(b.b)("br",null),"\xa0","\xa0","DOWNLOAD_MANIFEST_FAILED,",Object(b.b)("br",null),"\xa0","\xa0","DOWNLOAD_PACKAGE_FAILED,",Object(b.b)("br",null),"\xa0","\xa0","DUPLICATED_ACTION,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_APP_NAME,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_START_URL,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_STATE,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_MANIFEST,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_PACKAGE,",Object(b.b)("br",null),"\xa0","\xa0","INVALID_SIGNATURE,",Object(b.b)("br",null),"\xa0","\xa0","NETWORK_FAILURE,",Object(b.b)("br",null),"\xa0","\xa0","FILESYSTEM_FAILURE,",Object(b.b)("br",null),"\xa0","\xa0","PACKAGE_CORRUPT,",Object(b.b)("br",null),"\xa0","\xa0","REGISTRATION_ERROR,",Object(b.b)("br",null),"\xa0","\xa0","REINSTALL_FORBIDDEN,",Object(b.b)("br",null),"\xa0","\xa0","UPDATE_ERROR,",Object(b.b)("br",null),"\xa0","\xa0","UNKNOWN_ERROR,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"appsservicestate-enumeration"},"AppsServiceState enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","INITIALIZING,",Object(b.b)("br",null),"\xa0","\xa0","RUNNING,",Object(b.b)("br",null),"\xa0","\xa0","TERMINATING,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"appsstatus-enumeration"},"AppsStatus enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","ENABLED,",Object(b.b)("br",null),"\xa0","\xa0","DISABLED,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"appsupdatestate-enumeration"},"AppsUpdateState enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","IDLE,",Object(b.b)("br",null),"\xa0","\xa0","AVAILABLE,",Object(b.b)("br",null),"\xa0","\xa0","DOWNLOADING,",Object(b.b)("br",null),"\xa0","\xa0","UPDATING,",Object(b.b)("br",null),"\xa0","\xa0","PENDING,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"cleartype-enumeration"},"ClearType enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","BROWSER,",Object(b.b)("br",null),"\xa0","\xa0","STORAGE,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"connectiontype-enumeration"},"ConnectionType enumeration"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","WI_FI_ONLY,",Object(b.b)("br",null),"\xa0","\xa0","ANY,",Object(b.b)("br",null),"\n}"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"appsobject-dictionnary"},"AppsObject dictionnary"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","name: string,",Object(b.b)("br",null),"\xa0","\xa0","installState: ",Object(b.b)("a",{href:"#enumeration_AppsInstallState"},"AppsInstallState"),",",Object(b.b)("br",null),"\xa0","\xa0","manifestUrl: string,",Object(b.b)("br",null),"\xa0","\xa0","status: ",Object(b.b)("a",{href:"#enumeration_AppsStatus"},"AppsStatus"),",",Object(b.b)("br",null),"\xa0","\xa0","updateState: ",Object(b.b)("a",{href:"#enumeration_AppsUpdateState"},"AppsUpdateState"),",",Object(b.b)("br",null),"\xa0","\xa0","updateUrl: string,",Object(b.b)("br",null),"\xa0","\xa0","allowedAutoDownload: boolean,",Object(b.b)("br",null),"\n}"),Object(b.b)("h2",{id:"appsoptions-dictionnary"},"AppsOptions dictionnary"),Object(b.b)("p",null,"{",Object(b.b)("br",null),"\n","\xa0","\xa0","autoInstall: boolean?,",Object(b.b)("br",null),"\n}"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"appsengine-interface"},"AppsEngine Interface"),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_checkForUpdate"}),"checkForUpdate"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_clear"}),"clear"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_getAll"}),"getAll"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_getApp"}),"getApp"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_getState"}),"getState"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_installPackage"}),"installPackage"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_installPwa"}),"installPwa"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_setEnabled"}),"setEnabled"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_setUpdatePolicy"}),"setUpdatePolicy"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_uninstall"}),"uninstall"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_method_update"}),"update"),"  "),Object(b.b)("p",null,"  checkForUpdate(/",Object(b.b)("em",{parentName:"p"}," , updateUrl "),"/ string/",Object(b.b)("em",{parentName:"p"}," , appsOption "),"/ ",Object(b.b)("a",{href:"#dictionary_AppsOptions"},"AppsOptions"),")"),Object(b.b)("p",null,"  Resolves with boolean"),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  clear(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string/",Object(b.b)("em",{parentName:"p"}," , dataType "),"/ ",Object(b.b)("a",{href:"#enumeration_ClearType"},"ClearType"),")"),Object(b.b)("p",null,"  Resolves with boolean"),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  getAll()"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"[AppsObject]","?")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  getApp(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string)"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  getState()"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#enumeration_AppsServiceState"},"AppsServiceState")),Object(b.b)("p",null,"  Rejects with void"),Object(b.b)("hr",null),Object(b.b)("p",null,"  installPackage(/",Object(b.b)("em",{parentName:"p"}," , updateUrl "),"/ string)"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  installPwa(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string)"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  setEnabled(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string/",Object(b.b)("em",{parentName:"p"}," , status "),"/ ",Object(b.b)("a",{href:"#enumeration_AppsStatus"},"AppsStatus"),")"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  setUpdatePolicy(/",Object(b.b)("em",{parentName:"p"}," , enabled "),"/ boolean/",Object(b.b)("em",{parentName:"p"}," , allowedType "),"/ ",Object(b.b)("a",{href:"#enumeration_ConnectionType"},"ConnectionType"),"/",Object(b.b)("em",{parentName:"p"}," , delay "),"/ integer)"),Object(b.b)("p",null,"  Resolves with boolean"),Object(b.b)("p",null,"  Rejects with void"),Object(b.b)("hr",null),Object(b.b)("p",null,"  uninstall(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string)"),Object(b.b)("p",null,"  Resolves with string"),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("p",null,"  update(/",Object(b.b)("em",{parentName:"p"}," , manifestUrl "),"/ string)"),Object(b.b)("p",null,"  Resolves with ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"  Rejects with ",Object(b.b)("a",{href:"#enumeration_AppsServiceError"},"AppsServiceError")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"events"},"Events"),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_DOWNLOAD_FAILED"}),"APP_DOWNLOAD_FAILED"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_INSTALLED"}),"APP_INSTALLED"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_INSTALLING"}),"APP_INSTALLING"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_UNINSTALLED"}),"APP_UNINSTALLED"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_UPDATE_AVAILABLE"}),"APP_UPDATE_AVAILABLE"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APP_UPDATED"}),"APP_UPDATED"),"  ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#interface_AppsEngine_event_APPSTATUS_CHANGED"}),"APPSTATUS_CHANGED"),"  "),Object(b.b)("p",null,"The APP_DOWNLOAD_FAILED event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_DOWNLOAD_FAILED_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_DOWNLOAD_FAILED_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APP_INSTALLED event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_INSTALLED_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_INSTALLED_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APP_INSTALLING event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_INSTALLING_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_INSTALLING_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APP_UNINSTALLED event emits a string"),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_UNINSTALLED_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_UNINSTALLED_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APP_UPDATE_AVAILABLE event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_UPDATE_AVAILABLE_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_UPDATE_AVAILABLE_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APP_UPDATED event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APP_UPDATED_EVENT, handleEvent);\ntarget.removeEventListener(target.APP_UPDATED_EVENT, handleEvent);\n")),Object(b.b)("hr",null),Object(b.b)("p",null,"The APPSTATUS_CHANGED event emits a ",Object(b.b)("a",{href:"#dictionary_AppsObject"},"AppsObject")),Object(b.b)("p",null,"To manage this event, use code similar to:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function handleEvent(value) {\n    ...\n}\ntarget.addEventListener(target.APPSTATUS_CHANGED_EVENT, handleEvent);\ntarget.removeEventListener(target.APPSTATUS_CHANGED_EVENT, handleEvent);\n")),Object(b.b)("hr",null))}s.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=s(n),j=a,u=o["".concat(c,".").concat(j)]||o[j]||O[j]||b;return n?r.a.createElement(u,p(p({ref:t},i),{},{components:n})):r.a.createElement(u,p({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);