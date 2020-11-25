(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(396)),o={id:"wps",title:"WifiManager.wps()"},s={unversionedId:"06.api/web-apis/wifiInformation/wifimanager/wps",id:"06.api/web-apis/wifiInformation/wifimanager/wps",isDocsHomePage:!1,title:"WifiManager.wps()",description:"Description",source:"@site/docs/06.api/web-apis/wifiInformation/wifimanager/wps.md",slug:"/06.api/web-apis/wifiInformation/wifimanager/wps",permalink:"/docs/06.api/web-apis/wifiInformation/wifimanager/wps",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The wps method is used to handle a WPS connection with networks supporting that feature."),Object(a.b)("p",null,"A network supporting a WPS connection has the string WPS available within the WifiManager.capabilities Array."),Object(a.b)("p",null,"A WPS connection is a simpler way to connect a device to a network. It requires less knowledge from the user and makes things easier for him. Basically, when a user has a WPS-enabled WiFi router, he can choose that method to connect his device to the network instead of typing its password."),Object(a.b)("p",null,"There are two ways of initiating a WPS connection up to the user:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The easiest one is by pressing a dedicated button on the WiFi router.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"An alternative is by entering a PIN number provided by the WiFi router. There are two use cases here:"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The WiFi router will send a PIN number to the device and the user has to type it on the WiFi router interface.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The WiFi router expects the user to type a PIN number on his device (usually, such a PIN number is displayed on the WiFi router itself)."))))),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var request = navigator.mozWifiManager.wps(param);\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"param"),"\nA configuration object with the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"method")),": A string, one of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cancel")," to abort a WPS connection attempt."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pbs")," to try a connection by pushing the physical button on the WiFi router."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pin")," to try a connection with a pin number."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"bssid")),": A string representing the bssid of the network to connect to. It is mandatory if the method property is set to pin."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"pin")),": A string representing the pin number typed by the user. It is mandatory if the method property is set to pin and the user had to type the pin on his device.")),Object(a.b)("h3",{id:"returns"},"Returns"),Object(a.b)("p",null,"It returns a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#"}),"DOMRequest")," to handle the success or error of the operation."),Object(a.b)("p",null,"When the method property is set to pin, if the operation is successful and if the user must type a pin number on his WiFi router interface, the request's result is a string representing the PIN number to type."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var wifi = navigator.mozWifiManager;\n\nvar request = wifi.getNetworks();\n\nrequest.onsuccess = function () {\n  // Let's get the first network\n  var network = this.result[0];\n  var isWPSEnabled = network.capabilities.indexOf('WPS') > -1;\n  var wpsRequest;\n\n  if (isWPSEnabled) {\n    if (comfirm('Do you want to use the push button to connect your device?')) {\n      wpsRequest = wifi.wps({\n        method : 'pbs'\n      });\n    }\n\n    else if (confirm('Do you want to type a PIN number on your WiFI router interface?')){\n      wpsRequest = wifi.wps({\n        method : 'pin',\n        bssid  : network.bssid\n      })\n\n      wpsRequest.onsuccess = function () {\n        alert('Please, type that number on your WiFi router interface: ' + this.result)\n      }\n    }\n\n    else {\n      wpsRequest = wifi.wps({\n        method : 'pin',\n        bssid  : network.bssid\n        pin    : prompt('Please, provide the PIN number of your WiFi router.')\n      })\n    }\n  }\n}\n")))}u.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||a;return n?i.a.createElement(d,s(s({ref:t},p),{},{components:n})):i.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);