(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(396)),i={id:"BluetoothAttributeEvent",title:"BluetoothAttributeEvent"},c={unversionedId:"09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent",isDocsHomePage:!1,title:"BluetoothAttributeEvent",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/interface.md",slug:"/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent",version:"sfp-3.0"},u=[{value:"Description",id:"description",children:[]},{value:"Interface overview",id:"interface-overview",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The BluetoothAttributeEvent interface of the Bluetooth API provides access to changed attributes and their new values as the parameter of attributechanged event handlers (including BluetoothManager.onattributechanged, BluetoothAdapter.onattributechanged, and BluetoothDevice.onattributechanged), when fired."),Object(a.b)("h2",{id:"interface-overview"},"Interface overview"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[CheckAnyPermissions="bluetooth"]\ninterface BluetoothAttributeEvent : Event\n{\n  [Cached, Constant] readonly attribute sequence<DOMString> attrs;\n};\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"BluetoothAttributeEvent.attrs"))," {.read-only .no-link}")),Object(a.b)("p",null,"Returns an array of changed attribute values, which may be BluetoothManagerAttributes, BluetoothAdapterAttributes, or BluetoothDeviceAttributes."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"BluetoothManagerAttributes",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"unknown"')," or ",Object(a.b)("em",{parentName:"p"},'"defaultAdapter"')))),Object(a.b)("li",{parentName:"ul"},"BluetoothAdapterAttributes",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"unknown"'),", ",Object(a.b)("em",{parentName:"p"},'"state"'),", ",Object(a.b)("em",{parentName:"p"},'"address"'),", ",Object(a.b)("em",{parentName:"p"},'"name"'),", ",Object(a.b)("em",{parentName:"p"},'"discoverable"')," or ",Object(a.b)("em",{parentName:"p"},'"discovering"')))),Object(a.b)("li",{parentName:"ul"},"BluetoothDeviceAttributes",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"unknown"'),", ",Object(a.b)("em",{parentName:"p"},'"cod"'),", ",Object(a.b)("em",{parentName:"p"},'"name"'),", ",Object(a.b)("em",{parentName:"p"},'"paired"')," or ",Object(a.b)("em",{parentName:"p"},'"uuids"'))))),Object(a.b)("h2",{id:"example"},"Example"))}p.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,d=l["".concat(i,".").concat(m)]||l[m]||s[m]||a;return n?o.a.createElement(d,c(c({ref:t},b),{},{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);