(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),i=(n(0),n(396)),a={id:"BluetoothGatt",title:"BluetoothGatt"},c={unversionedId:"09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt",isDocsHomePage:!1,title:"BluetoothGatt",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/interface.md",slug:"/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt",version:"sfp-3.0"},l=[{value:"Description",id:"description",children:[]},{value:"Interface overview",id:"interface-overview",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Event handlers",id:"event-handlers",children:[]},{value:"Methods",id:"methods",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The BluetoothGatt interface of the Bluetooth API handles initial communications and connections with Gatt services."),Object(i.b)("h2",{id:"interface-overview"},"Interface overview"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[CheckAnyPermissions="bluetooth"]\ninterface BluetoothGatt : EventTarget\n{\n  [Cached, Pure]\n  readonly attribute sequence<BluetoothGattService> services;\n  readonly attribute BluetoothConnectionState connectionState;\n\n           attribute EventHandler oncharacteristicchanged;\n           attribute EventHandler onconnectionstatechanged;\n\n  [NewObject] Promise<void> connect();\n  [NewObject] Promise<void> disconnect();\n  [NewObject] Promise<void> discoverServices();\n  [NewObject] Promise<short> readRemoteRssi();\n};\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.services")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns the list of GATT services offered by the remote LE device. This property is set to an empty array by default before a connection is established."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.connectionState")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The current connection state of GATT client to the remote LE device. This property is set to disconnected by default, before a connection is established."),Object(i.b)("h2",{id:"event-handlers"},"Event handlers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.oncharacteristicchanged")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Defines a handler to trigger as a result of the characteristicchanged event firing; this occurs when a remote characteristic changes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.onconnectionstatechanged")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Defines a handler to trigger as a result of the connectionstatechanged event firing; this occurs when the connection state of the GATT client to the remote LE device (i.e. the\nBluetoothGatt.connectionState property) changes."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.connect()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Connects to the remote LE device."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.disconnect()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Disconnects an already-established connection to a remote LE device."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.discoverServices()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Discovers services, characteristics, and descriptors offered by the remote GATT server."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGatt.readRemoteRssi()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Reads the RSSI for a connected remote LE device."))}b.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);