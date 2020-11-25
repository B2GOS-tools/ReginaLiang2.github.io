(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{243:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(8),o=(t(0),t(396)),a=t(398),c={id:"key",title:"Key"},l={unversionedId:"04.design-guide/key",id:"version-sfp-3.0/04.design-guide/key",isDocsHomePage:!1,title:"Key",description:"Overview",source:"@site/versioned_docs/version-sfp-3.0/04.design-guide/key.md",slug:"/04.design-guide/key",permalink:"/docs/sfp-3.0/04.design-guide/key",version:"sfp-3.0",sidebar:"version-sfp-3.0/docs",previous:{title:"Basic Navigation",permalink:"/docs/sfp-3.0/04.design-guide/basic-navigation"},next:{title:"Typography",permalink:"/docs/sfp-3.0/04.design-guide/typography"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Software Key (LSK, CSK, RSK)",id:"software-key-lsk-csk-rsk",children:[]},{value:"D-Pad (UP, DOWN, LEFT, RIGHT)",id:"d-pad-up-down-left-right",children:[]},{value:"Call Key",id:"call-key",children:[]},{value:"Independent Back Key Type And Combined Key Type",id:"independent-back-key-type-and-combined-key-type",children:[{value:"Independent Back Key Type",id:"independent-back-key-type",children:[]},{value:"Combined Key Type",id:"combined-key-type",children:[]}]},{value:"Number Pad",id:"number-pad",children:[]},{value:"Volume Key",id:"volume-key",children:[]}],p={rightToc:s};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("div",{className:"media-block"},Object(o.b)("img",{className:"unique",src:Object(a.a)("img/key/overview.png")})),Object(o.b)("h2",{id:"software-key-lsk-csk-rsk"},"Software Key (LSK, CSK, RSK)"),Object(o.b)("p",null,"When a software key (LSK, CSK or RSK) has a function, there should be an indicator on software key bar to inform user what it will do when pressed."),Object(o.b)("div",{className:"media-block"},Object(o.b)("img",{className:"unique",src:Object(a.a)("img/key/softkey.png")})),Object(o.b)("h2",{id:"d-pad-up-down-left-right"},"D-Pad (UP, DOWN, LEFT, RIGHT)"),Object(o.b)("p",null,"D-pad is used to move highlight to different items on list views or grid views, switch tabs, adjust spinners or sliders, move text cursor, and move browser cursor. Long pressing a directional key will send keyDown event continuously and it speeds up."),Object(o.b)("h2",{id:"call-key"},"Call Key"),Object(o.b)("p",null,"Call key is used to make a call or answer an incoming call."),Object(o.b)("h2",{id:"independent-back-key-type-and-combined-key-type"},"Independent Back Key Type And Combined Key Type"),Object(o.b)("h3",{id:"independent-back-key-type"},"Independent Back Key Type"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Back/Clear Key")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In an input, BACK/CLEAR key is used to clear one character. If the input is empty, pressing BACK/CLEAR key works like normal case."),Object(o.b)("li",{parentName:"ol"},"In normal case (not in an input), pressing BACK/CLEAR key goes to the upper level of an app. At the top level of the app, pressing BACK/CLEAR key leaves the app."),Object(o.b)("li",{parentName:"ol"},"In a dialog, if LSK is Cancel, BACK/CLEAR key works like LSK. Otherwise, pressing BACK/CLEAR key does nothing.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"End/Power Key")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"END/POWER key is used to end a call, reject an incoming call, or leave an app."),Object(o.b)("li",{parentName:"ol"},"Long pressing END/POWER key invokes the sleep menu with actions including Lock, Restart, Power off, etc."),Object(o.b)("li",{parentName:"ol"},"When the device is off, long pressing END/POWER key powers on the device.")),Object(o.b)("div",{className:"media-block"},Object(o.b)("img",{className:"unique",src:Object(a.a)("img/key/back_clear.png")})),Object(o.b)("h3",{id:"combined-key-type"},"Combined Key Type"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Back/Clear/End/Power Key")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In an input, BACK/CLEAR/END/POWER key is used to clear one character. If the input is empty, pressing BACK/CLEAR/END/POWER key works like normal case."),Object(o.b)("li",{parentName:"ol"},"In normal case (not in an input), pressing BACK/CLEAR/END/POWER key goes to the upper level of an app. At the top level of the app, pressing BACK/CLEAR/END/POWER key leaves the app."),Object(o.b)("li",{parentName:"ol"},"In a dialog, if LSK is Cancel, BACK/CLEAR/END/POWER key works like LSK. Otherwise, pressing BACK/CLEAR/END/POWER key does nothing."),Object(o.b)("li",{parentName:"ol"},"BACK/CLEAR/END/POWER key is used to end a call, reject an incoming call."),Object(o.b)("li",{parentName:"ol"},"In Homescreen, long pressing BACK/CLEAR/END/POWER key invokes the sleep menu with actions including Lock, Restart, Power off, etc."),Object(o.b)("li",{parentName:"ol"},"In an app, long pressing BACK/CLEAR/END/POWER key leaves the app."),Object(o.b)("li",{parentName:"ol"},"When the device is off, long pressing BACK/CLEAR/END/POWER key powers on the device.")),Object(o.b)("div",{className:"media-block"},Object(o.b)("img",{className:"unique",src:Object(a.a)("img/key/back_clear_end_power.png")})),Object(o.b)("h2",{id:"number-pad"},"Number Pad"),Object(o.b)("p",null,"Number pad is used to enter numbers or characters with certain input methods."),Object(o.b)("h2",{id:"volume-key"},"Volume Key"),Object(o.b)("p",null,"Volume key is used to control volume directly. There are 4 types of volume: Ringtones & Notice Alerts, Media, Alarm, and Telephony. When pressing volume key, system will adjust the proper type of volume by context."),Object(o.b)("p",null,"For devices without volume keys, app should provide at least one way to adjust volume. It is recommended to use UP/DOWN key to invoke volume panel directly and then user can adjust volume. Fallback solution is to use Options > Volume to invoke volume panel."))}u.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,y=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return t?i.a.createElement(y,c(c({ref:n},s),{},{components:t})):i.a.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},397:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(23);n.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},398:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a}));var r=t(397),i=t(399);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,l=o.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+p:p}(o,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},399:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))}}]);