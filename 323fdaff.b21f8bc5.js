(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(396)),o={id:"setstaticipmode",title:"WifiManager.setStaticIpMode()"},c={unversionedId:"06.api/web-apis/wifiInformation/wifimanager/setstaticipmode",id:"06.api/web-apis/wifiInformation/wifimanager/setstaticipmode",isDocsHomePage:!1,title:"WifiManager.setStaticIpMode()",description:"Description",source:"@site/docs/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode.md",slug:"/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode",permalink:"/docs/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode",version:"current"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The setStaticIpMod method is used to define a static or dynamic (if the network has a DHCP server) IP address for the device on a given network."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var request = navigator.mozWifiManager.setStaticIpMode(param);\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"param"),Object(i.b)("br",{parentName:"p"}),"\n","A configuration object with the following properties:       "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"enabled"),":")," A boolean requesting if the static IP mode must be turned on (true) or off (false). If it's turned off and the current WiFi network is DHCP enabled, the device will get a dynamic IP."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"ipaddr"),":")," A string representing the IP address of the device in the dotted quad format."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"proxy"),":"),"  A string representing the proxy server address (if any, otherwise an empty string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"maskLength"),":")," A number representing the length of the network mask."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"gateway"),":")," A string representing a gateway address (if any, otherwise an empty string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"dns1"),":")," A string representing the first DNS server address."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"dns2"),":")," A string representing the second DNS server address.")),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"It returns a ",Object(i.b)("inlineCode",{parentName:"p"},"DOMRequest")," to handle the success or error of the operation."))}b.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,m=l["".concat(o,".").concat(u)]||l[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);