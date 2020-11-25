(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{314:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),i=(r(0),r(398)),a={id:"BluetoothGattDescriptor",title:"BluetoothGattDescriptor"},c={unversionedId:"09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor",isDocsHomePage:!1,title:"BluetoothGattDescriptor",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/interface.md",slug:"/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor",version:"sfp-3.0"},l=[{value:"Description",id:"description",children:[]},{value:"Interface overview",id:"interface-overview",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The BluetoothGattDescriptor interface of the Web Bluetooth API represents a GATT descriptor, which contains related information about a characteristic value."),Object(i.b)("h2",{id:"interface-overview"},"Interface overview"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'[CheckAnyPermissions="bluetooth"]\ninterface BluetoothGattDescriptor\n{\n  readonly attribute BluetoothGattCharacteristic characteristic;\n  readonly attribute DOMString uuid;\n  readonly attribute ArrayBuffer? value;\n  [Cached, Constant] readonly attribute GattPermissions permissions;\n\n  [NewObject] Promise<ArrayBuffer> readValue();\n  [NewObject] Promise<void> writeValue(ArrayBuffer value);\n};\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.characteristic")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns the BluetoothGattCharacteristic object representing the characteristic this descriptor belongs to."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.uuid")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns the UUID of this descriptor."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.value")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Stores the cached value of this descriptor. This value can be updated via the BluetoothGattDescriptor.readValue() method."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.permissions")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Returns a bit mask that describes the operations allowed on the characteristic."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.readValue()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Reads the descriptor value from the remote device. The cached BluetoothGattDescriptor.value is also updated after retrieving the value."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"BluetoothGattDescriptor.writeValue()")))),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Writes the descriptor value to the GATT server. If the local device is the GATT client, the value will be written to the remote GATT server. On the other hand, if the local device is the GATT server, the value will be written to BluetoothGattDescriptor.value."))}u.isMDXComponent=!0},398:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,d=p["".concat(a,".").concat(h)]||p[h]||b[h]||i;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);