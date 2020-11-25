(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(396)),i={id:"10.ona2dpstatuschanged",title:"BluetoothAdapter.ona2dpstatuschanged"},c={unversionedId:"06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged",id:"06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged",isDocsHomePage:!1,title:"BluetoothAdapter.ona2dpstatuschanged",description:"Description",source:"@site/docs/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged.md",slug:"/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged",permalink:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged",version:"current"},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Specifies an event listener to receive ",Object(o.b)("inlineCode",{parentName:"p"},"a2dpstatuschanged")," events. Those events occur when an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Bluetooth_profile#Advanced_Audio_Distribution_Profile_.28A2DP.29",title:"Advanced Audio Distribution Profile"}),"A2DP")," connection status changes."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"instanceOfBluetoothAdapter.ona2dpstatuschanged = funcRef\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"funcRef")," is a function to be called when the ",Object(o.b)("inlineCode",{parentName:"p"},"a2dpstatuschanged")," event occurs. That function gets a ",Object(o.b)("inlineCode",{parentName:"p"},"BluetoothStatusChangedEvent")," object as its first parameter."))}s.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);