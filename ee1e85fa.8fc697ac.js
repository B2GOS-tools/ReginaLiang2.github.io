(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(396)),a={id:"BluetoothDiscoveryHandle",title:"BluetoothDiscoveryHandle"},c={unversionedId:"09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle",isDocsHomePage:!1,title:"BluetoothDiscoveryHandle",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/interface.md",slug:"/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle",version:"sfp-3.0"},l=[{value:"Description",id:"description",children:[]},{value:"Interface overview",id:"interface-overview",children:[]},{value:"Properties",id:"properties",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The BluetoothDiscoveryHandle interface of the Bluetooth API is used to notify the current application about the discovery of a remote bluetooth device."),Object(i.b)("h2",{id:"interface-overview"},"Interface overview"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[CheckAnyPermissions="bluetooth"]\ninterface BluetoothDiscoveryHandle : EventTarget {\n  attribute EventHandler ondevicefound;\n};\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothDiscoveryHandle.ondevicefound")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Defines an event handler to trigger each time the devicefound event is fired; this occurs when a remote bluetooth device is discovered. Its parameter is either a BluetoothDeviceEvent or BluetoothLeDeviceEvent, depending on the type of device discovered."))}u.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,v=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(v,c(c({ref:t},s),{},{components:n})):o.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);