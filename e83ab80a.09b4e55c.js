(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{358:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(396)),o={id:"connectioninformation",title:"WifiManager.connectionInformation"},c={unversionedId:"06.api/web-apis/wifiInformation/wifimanager/connectioninformation",id:"06.api/web-apis/wifiInformation/wifimanager/connectioninformation",isDocsHomePage:!1,title:"WifiManager.connectionInformation",description:"Description",source:"@site/docs/06.api/web-apis/wifiInformation/wifimanager/connectioninformation.md",slug:"/06.api/web-apis/wifiInformation/wifimanager/connectioninformation",permalink:"/docs/06.api/web-apis/wifiInformation/wifimanager/connectioninformation",version:"current"},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Value",id:"value",children:[]}],b={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The connectionInformation property value provides extra information about the current connection."),Object(i.b)("p",null,"The value of that property is updated each time the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#"}),"connectionInfoUpdate")," event is triggered."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var info = navigator.mozWifiManager.connectionInformation\n")),Object(i.b)("h2",{id:"value"},"Value"),Object(i.b)("p",null,"Return an object with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"signalStrength"))," ",Object(i.b)("inlineCode",{parentName:"p"},"read-only"),Object(i.b)("br",{parentName:"p"}),"\n","A number indicating the absolute strength of the signal in dBm.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"relSignalStrength"))," ",Object(i.b)("inlineCode",{parentName:"p"},"read-only"),Object(i.b)("br",{parentName:"p"}),"\n","A number in the range ","[0,100]"," indicating the relative strength of the signal.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"linkSpeed"))," ",Object(i.b)("inlineCode",{parentName:"p"},"read-only"),Object(i.b)("br",{parentName:"p"}),"\n","A number representing link speed in Mb/s.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"ipAddress"))," ",Object(i.b)("inlineCode",{parentName:"p"},"read-only"),Object(i.b)("br",{parentName:"p"}),"\n","A string representing the IP address of the device in the dotted quad format. "))))}l.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,s=u["".concat(o,".").concat(f)]||u[f]||m[f]||i;return t?a.a.createElement(s,c(c({ref:n},b),{},{components:t})):a.a.createElement(s,c({ref:n},b))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);