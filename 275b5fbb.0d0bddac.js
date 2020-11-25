(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),c=(t(0),t(396)),i={id:"onchargingtimechange",title:"BatteryManager.onchargingtimechange"},o={unversionedId:"06.api/web-apis/batterymanager/onchargingtimechange",id:"06.api/web-apis/batterymanager/onchargingtimechange",isDocsHomePage:!1,title:"BatteryManager.onchargingtimechange",description:"Specifies an event listener to receive chargingtimechange events. These events occur when the battery chargingTime is updated.",source:"@site/docs/06.api/web-apis/batterymanager/onchargingtimechange.md",slug:"/06.api/web-apis/batterymanager/onchargingtimechange",permalink:"/docs/06.api/web-apis/batterymanager/onchargingtimechange",version:"current"},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[{value:"HTML Content",id:"html-content",children:[]},{value:"JavaScript Content",id:"javascript-content",children:[]}]}],g={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Specifies an event listener to receive chargingtimechange events. These events occur when the battery chargingTime is updated."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"battery.onchargingtimechange = funcRef\n")),Object(c.b)("p",null,"Where battery is a BatteryManager object, and funcRef is a function to be called when the chargingtimechange event occurs."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("h3",{id:"html-content"},"HTML Content"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div id="level">(battery level unknown)</div>\n<div id="chargingTime">(charging time unknown)</div>\n')),Object(c.b)("h3",{id:"javascript-content"},"JavaScript Content"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.getBattery().then(function(battery) {\n    battery.onchargingtimechange = chargingTimeChange();\n\n    function chargingTimeChange(){\n        document.querySelector('#level').textContent = battery.level;\n        document.querySelector('#chargingTime').textContent = battery.chargingTime;\n    }\n\n});\n")))}u.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=a.a.createContext({}),u=function(e){var n=a.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(g.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,m=p["".concat(i,".").concat(s)]||p[s]||b[s]||c;return t?a.a.createElement(m,o(o({ref:n},g),{},{components:t})):a.a.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var g=2;g<c;g++)i[g]=t[g];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);