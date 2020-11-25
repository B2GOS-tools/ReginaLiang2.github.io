(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(398)),i=a(400),c={id:"test-your-apps",title:"Testing your apps"},p={unversionedId:"02.getting-started/03.build-your-first-package-app/test-your-apps",id:"02.getting-started/03.build-your-first-package-app/test-your-apps",isDocsHomePage:!1,title:"Testing your apps",description:"There are two ways to test your application. with the Real device and Simulator as alternative.",source:"@site/docs/02.getting-started/03.build-your-first-package-app/test-your-apps.md",slug:"/02.getting-started/03.build-your-first-package-app/test-your-apps",permalink:"/docs/02.getting-started/03.build-your-first-package-app/test-your-apps",version:"current",sidebar:"docs",previous:{title:"Sample code",permalink:"/docs/02.getting-started/03.build-your-first-package-app/sample-code"},next:{title:"Packaged or hosted App",permalink:"/docs/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted"}},s=[{value:"WebIDE with real device",id:"webide-with-real-device",children:[{value:"Connect by remote runtime",id:"connect-by-remote-runtime",children:[]}]},{value:"Simulator as alternative",id:"simulator-as-alternative",children:[{value:"Running and debugging apps",id:"running-and-debugging-apps",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two ways to test your application. with the Real device and Simulator as alternative. "),Object(o.b)("h2",{id:"webide-with-real-device"},"WebIDE with real device"),Object(o.b)("p",null,"Open your WebIDE to connect in your device"),Object(o.b)("h3",{id:"connect-by-remote-runtime"},"Connect by remote runtime"),Object(o.b)("p",null,"First, check if your device is on the list of ",Object(o.b)("inlineCode",{parentName:"p"},"adb devices")," command."),Object(o.b)("p",null,"Connect your device to your computer using a USB port, then run the following command from your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ adb root && adb forward tcp:6000 localfilesystem:/data/local/debugger-socket\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," You can change the port, changing the tcp value of the command (",Object(o.b)("inlineCode",{parentName:"p"},"tcp:PORT"),").")),Object(o.b)("p",null,"Then click in ",Object(o.b)("inlineCode",{parentName:"p"},"Remote runtime")," option"),Object(o.b)("img",{alt:"WebIDE - Remote runtime",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime.png")}),Object(o.b)("p",null,"Insert the IP and port (",Object(o.b)("inlineCode",{parentName:"p"},"localhost:PORT"),") and click on OK button"),Object(o.b)("img",{alt:"WebIDE - Remote runtime port",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime-port.png")}),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Open Package App")," option and open the folder with your project, after opening your project it will be added in the session my projects."),Object(o.b)("img",{alt:"WebIDE - Remote runtime project",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime-project.png")}),Object(o.b)("p",null,"Click on the play icon to open the app on the device"),Object(o.b)("img",{alt:"WebIDE - Remote runtime play",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime-play.png")}),Object(o.b)("p",null,"Click the button with the wrench icon to open the debugging tools"),Object(o.b)("img",{alt:"WebIDE - Remote runtime debug",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime-debug.png")}),Object(o.b)("p",null,"The basic tools available in your WebIDE are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector"}),"Inspector")," to examine and modify the HTML and CSS of a page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Web_Console"}),"Console")," for logs information associated with a web page and enables you to interact with a web page by executing JavaScript expressions in the context of the page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Debugger"}),"JavaScript Debugger")," enables you to step through JavaScript code and examine or modify its state to help track down bugs.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Style_Editor"}),"Style Editor")," enables you to view and edit all the stylesheets associated with a page, create new stylesheets from scratch and import existing stylesheets and apply them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Scratchpad"}),"Scratchpad")," provides an environment for experimenting with JavaScript code. You can write, run, and examine the results of code that interacts with the web page."))),Object(o.b)("p",null,"Just as in a web page, any changes you make in the tools are visible immediately in the app, but are not persistent. Conversely, any changes you make in the editor pane can be saved straight back to disk, but are not visible without restarting the app."),Object(o.b)("img",{alt:"WebIDE - Remote runtime debugging",className:"responsive-img",src:Object(i.a)("img/test-your-app/webide-remote-runtime-debugging.png")}),Object(o.b)("h2",{id:"simulator-as-alternative"},"Simulator as alternative"),Object(o.b)("p",null,"The simulator lets you run Gaia and Web apps in a Gecko-based environment somewhat similar to an actual device, for more details and to download the simulator consult the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/env-setup/simulator"}),"page of the simulator"),"."),Object(o.b)("h3",{id:"running-and-debugging-apps"},"Running and debugging apps"),Object(o.b)("p",null,"Open the simulator"),Object(o.b)("img",{alt:"Simulator",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator.png")}),Object(o.b)("p",null,"Click the simulator option on the right side of the screen"),Object(o.b)("img",{alt:"Simulator",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-simulator.png")}),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Open Package App")," option and open the folder with your project"),Object(o.b)("img",{alt:"Simulator - Package",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-package.png")}),Object(o.b)("p",null,"Your project will open, displaying a tree with the files"),Object(o.b)("img",{alt:"Simulator - Package",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-project.png")}),Object(o.b)("p",null,"Click on the play icon to open the app on simulator"),Object(o.b)("img",{alt:"Simulator - Play",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-play.png")}),Object(o.b)("img",{alt:"Simulator - Play",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-play.gif")}),Object(o.b)("p",null,"Click the button with the wrench icon to open the debugging tools"),Object(o.b)("img",{alt:"Simulator - Debugging",className:"responsive-img",src:Object(i.a)("img/test-your-app/simulator-debugging.gif")}))}u.isMDXComponent=!0},398:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(23);t.default=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},400:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(399),r=a(401);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,p=o.absolute,s=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+l:l}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},401:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);