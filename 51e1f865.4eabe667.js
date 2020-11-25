(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(396)),i={id:"emulated-cursor",title:"Emulated Cursor"},l={unversionedId:"03.core-developer-topics/emulated-cursor",id:"03.core-developer-topics/emulated-cursor",isDocsHomePage:!1,title:"Emulated Cursor",description:"KaiOS supports emulating a cursor in app, which user can control with d-pad.",source:"@site/docs/03.core-developer-topics/emulated-cursor.md",slug:"/03.core-developer-topics/emulated-cursor",permalink:"/docs/03.core-developer-topics/emulated-cursor",version:"current",sidebar:"docs",previous:{title:"Softkeys",permalink:"/docs/03.core-developer-topics/softkeys"},next:{title:"D-Pad navigation",permalink:"/docs/03.core-developer-topics/dpad-navigation"}},c=[{value:"1. Emulated Cursor Handled by System",id:"1-emulated-cursor-handled-by-system",children:[]},{value:"2. Emulated Cursor Handled by App",id:"2-emulated-cursor-handled-by-app",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"KaiOS supports emulating a cursor in app, which user can control with d-pad.\nThere are two types of settings to invoke emulated cursor in app."),Object(o.b)("h3",{id:"1-emulated-cursor-handled-by-system"},"1. Emulated Cursor Handled by System"),Object(o.b)("p",null,"To enable emulated cursor in app, set cursor to true in ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.webapp")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cursor": true\n}\n')),Object(o.b)("p",null,"App with this setting will have the feature of emulated cursor just as browser tab does.\nFor example, cursor is automatically turned off when focusing on input field, and is turned on after leaving input field."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," This type of cursor usage is strongly recommended.")),Object(o.b)("h3",{id:"2-emulated-cursor-handled-by-app"},"2. Emulated Cursor Handled by App"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," This type of cursor usage by design lets app have ",Object(o.b)("inlineCode",{parentName:"p"},"FULL CONTROL")," of emulated cursor, which means that system will ",Object(o.b)("inlineCode",{parentName:"p"},"NOT")," turn on or off cursor for app.\nThat is, app has full responsibilities of when to show and when to hide the cursor.\nFurthermore, some key events are treated differently when cursor is on, please find more details in the followings:"),Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"Turning on cursor will prevent default and stop propagation on key events of ",Object(o.b)("inlineCode",{parentName:"li"},"Enter"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Up"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Right"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Down"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Left"),"."),Object(o.b)("li",{parentName:"ol"},"Turning on cursor will ",Object(o.b)("inlineCode",{parentName:"li"},"NOT")," prevent default or stop propagation on key event of ",Object(o.b)("inlineCode",{parentName:"li"},"RSK"),", in addition, it will trigger ",Object(o.b)("inlineCode",{parentName:"li"},"contextmenu")," event on key event of ",Object(o.b)("inlineCode",{parentName:"li"},"RSK"),"."),Object(o.b)("li",{parentName:"ol"},"When focus is on an input element (IME is active), app should remember to turn cursor off by itself."),Object(o.b)("li",{parentName:"ol"},"Other than the case of focusing on input elements, there might be other cases that apps need to control."))),Object(o.b)("p",null,"Emulated cursor handled by system makes the emulated cursor exist in the app all the time like browser tab.\nIf app needs to control cursor on their own, another api ",Object(o.b)("inlineCode",{parentName:"p"},"spatialnavigation-app-manage")," is supported."),Object(o.b)("p",null,"To get permissions, app must be at least a privileged app. Set spatialnavigation-app-manage in ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.webapp")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "privileged", // or "certified"\n  "permissions": {\n    "spatialnavigation-app-manage": {}\n  }\n}\n')),Object(o.b)("p",null,"To turn on cursor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.spatialNavigationEnabled = true;\n")),Object(o.b)("p",null,"To turn off cursor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"navigator.spatialNavigationEnabled = false;\n")))}s.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);