(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{396:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return a?n.a.createElement(m,c(c({ref:t},o),{},{components:a})):n.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<i;o++)p[o]=a[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},397:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(23);t.default=function(){var e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},398:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return p}));var r=a(397),n=a(399);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,p=i.forcePrependBaseUrl,c=void 0!==p&&p,s=i.absolute,o=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+l:l}(i,a,e,t)}}}function p(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},399:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),i=(a(0),a(396)),p=a(398),c={id:"test-your-apps",title:"Testing your apps"},s={unversionedId:"02.getting-started/03.build-your-first-package-app/test-your-apps",id:"version-sfp-3.0/02.getting-started/03.build-your-first-package-app/test-your-apps",isDocsHomePage:!1,title:"Testing your apps",description:"There are two ways to test your application. with the Real device and Simulator as alternative.",source:"@site/versioned_docs/version-sfp-3.0/02.getting-started/03.build-your-first-package-app/test-your-apps.md",slug:"/02.getting-started/03.build-your-first-package-app/test-your-apps",permalink:"/docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/test-your-apps",version:"sfp-3.0",sidebar:"version-sfp-3.0/docs",previous:{title:"Sample code",permalink:"/docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/sample-code"},next:{title:"Packaged or hosted App",permalink:"/docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted"}},o=[{value:"Install App via appscmd",id:"install-app-via-appscmd",children:[{value:"Download appscmd",id:"download-appscmd",children:[]},{value:"Verify appscmd",id:"verify-appscmd",children:[]},{value:"appscmd script usage",id:"appscmd-script-usage",children:[]}]},{value:"Debug App via firefox",id:"debug-app-via-firefox",children:[]}],l={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways to test your application. with the Real device and Simulator as alternative. "),Object(i.b)("h2",{id:"install-app-via-appscmd"},"Install App via appscmd"),Object(i.b)("h3",{id:"download-appscmd"},"Download appscmd"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd appcmd\n")),Object(i.b)("h3",{id:"verify-appscmd"},"Verify appscmd"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd appscmd\n./appscmd --help\n")),Object(i.b)("p",null,"The output should be like below"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"appscmd 0.2.0\nManages apps installed on a b2g device, simulator or desktop.\n\nUSAGE:\n    appscmd [FLAGS] [OPTIONS] [SUBCOMMAND]\n\nFLAGS:\n    -h, --help       Prints help information\n    -j, --json       Set output as json format\n    -V, --version    Prints version information\n\nOPTIONS:\n        --socket <socket>    Socket path to connect\n\nSUBCOMMANDS:\n    help         Prints this message or the help of the given subcommand(s)\n    install      Install an application\n    list         List installed applications\n    uninstall    Uninstall an application\n")),Object(i.b)("h3",{id:"appscmd-script-usage"},"appscmd script usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"List all apps installed in device",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"appscmd_path/appscmd list  \n"))),Object(i.b)("li",{parentName:"ul"},"Install app",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"appscmd_path/appscmd install your_app_path\n"))),Object(i.b)("li",{parentName:"ul"},"Uninstall app",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"appscmd_path/appscmd uninstall your_app_name\n")))),Object(i.b)("h2",{id:"debug-app-via-firefox"},"Debug App via firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/"}),"firefox nightly build version")),Object(i.b)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable"),Object(i.b)("li",{parentName:"ul"},"Verify device information",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"adb devices\nadb root  \n"))),Object(i.b)("li",{parentName:"ul"},"Open firefox ",Object(i.b)("strong",{parentName:"li"},"RemoteDebugger"))),Object(i.b)("div",{className:"media-block"},Object(i.b)("img",{src:Object(p.a)("img/test-your-app/remotedebugger1.png")}),Object(i.b)("img",{src:Object(p.a)("img/test-your-app/remotedebugger2.png")})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Device should be visible in left panel of the RemoteDebugger "),Object(i.b)("li",{parentName:"ul"},"Click the Connect button right of your device. The device should be connected with the Firefox RemoteDebugger")),Object(i.b)("img",{alt:"WebIDE - Remote runtime",className:"responsive-img",src:Object(p.a)("img/test-your-app/remotedebugger3.png")}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Tabs show all apps running in device except System App, which can be found in the bottom of the page) "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apps running in device")),Object(i.b)("img",{alt:"WebIDE - Remote runtime",className:"responsive-img",src:Object(p.a)("img/test-your-app/remotedebugger4.png")}),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"System apps running in device")),Object(i.b)("img",{alt:"WebIDE - Remote runtime",className:"responsive-img",src:Object(p.a)("img/test-your-app/remotedebugger5.png")})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Inspect button will go to app. Then you can debug and modify via RemoteDebugger"))),Object(i.b)("img",{alt:"WebIDE - Remote runtime",className:"responsive-img",src:Object(p.a)("img/test-your-app/remotedebugger6.png")}))}u.isMDXComponent=!0}}]);