(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{308:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(8),i=(n(0),n(398)),o={id:"getListOfCameras",title:"CameraManager.getListOfCameras()"},c={unversionedId:"09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras",isDocsHomePage:!1,title:"CameraManager.getListOfCameras()",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras.md",slug:"/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras",version:"sfp-3.0"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[{value:"Return Value",id:"return-value",children:[]}]},{value:"Permissions",id:"permissions",children:[]}],p={rightToc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This method is used to get an ",Object(i.b)("inlineCode",{parentName:"p"},"Array")," of identifiers of all the cameras available on the device."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"var cameras = navigator.b2g.cameras.getListOfCameras();\n")),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"camera")),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," an ",Object(i.b)("inlineCode",{parentName:"p"},"Array")," of identifiers of all cameras available."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"permissions"},"Permissions"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'"permissions": {\n  "camera": {\n    "description": "Required for accessing cameras on the device."\n  }\n}\n')))}l.isMDXComponent=!0},398:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,b=u["".concat(o,".").concat(f)]||u[f]||m[f]||i;return n?a.a.createElement(b,c(c({ref:r},p),{},{components:n})):a.a.createElement(b,c({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);