(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(396)),c={id:"15.onscostatuschanged",title:"BluetoothAdapter.onscostatuschanged"},i={unversionedId:"06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged",id:"06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged",isDocsHomePage:!1,title:"BluetoothAdapter.onscostatuschanged",description:"Description",source:"@site/docs/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged.md",slug:"/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged",permalink:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Specifies an event listener to receive ",Object(a.b)("inlineCode",{parentName:"p"},"scostatuschanged")," events. Those events occur when a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Bluetooth_protocols#Synchronous_connection-oriented_.28SCO.29_link",title:"Synchronous Connection Oriented"}),"SCO")," connection status changes."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"instanceOfBluetoothAdapter.onscostatuschanged = funcRef\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"funcRef")," is a function to be called when the scostatuschanged event occurs. That function gets a ",Object(a.b)("inlineCode",{parentName:"p"},"BluetoothStatusChangedEvent")," object as its first parameter."))}p.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);