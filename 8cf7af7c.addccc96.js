(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),i=(n(0),n(396)),a={id:"BluetoothDeviceEvent",title:"BluetoothDeviceEvent"},c={unversionedId:"09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent",isDocsHomePage:!1,title:"BluetoothDeviceEvent",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/interface.md",slug:"/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent",version:"sfp-3.0"},u=[{value:"Description",id:"description",children:[]},{value:"Interface overview",id:"interface-overview",children:[]},{value:"Properties",id:"properties",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The BluetoothDeviceEvent interface of the Web Bluetooth API provides access to a found/paired device (BluetoothDevice) object or the address or an unpaired device as the parameter of a devicefound, devicepaired or deviceunpaired event handler (see BluetoothDiscoveryHandle.ondevicefound, BluetoothAdapter.ondevicepaired, and BluetoothAdapter.ondeviceunpaired), when fired."),Object(i.b)("h2",{id:"interface-overview"},"Interface overview"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[CheckAnyPermissions="bluetooth"]\ninterface BluetoothDeviceEvent : Event\n{\n  readonly attribute BluetoothDevice? device;\n  readonly attribute DOMString? address;\n};\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothDeviceEvent.device")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns a BluetoothDevice object representing the paired remote device. Returns null for the BluetoothAdapter.ondeviceunpaired event handler since the that only requires the address of the unpaired device."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothDeviceEvent.address")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns a DOMString representing the address of the unpaired remote device. Returns null for the BluetoothDiscoveryHandle.ondevicefound and BluetoothAdapter.ondevicepaired event handlers since a found/paired remote device already has an BluetoothDevice.address property."))}s.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),v=r,f=p["".concat(a,".").concat(v)]||p[v]||d[v]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);