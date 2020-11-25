(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(398)),o={id:"navigator-vibrate",title:"navigator.vibrate"},c={unversionedId:"09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate",isDocsHomePage:!1,title:"navigator.vibrate",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/readme.md",slug:"/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate",version:"sfp-3.0"},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Navigator.vibrate()")," method pulses the vibration hardware on the device, if such hardware exists.\nIf the device doesn't support vibration, this method has no effect.\nIf a vibration pattern is already in progress when this method is called,\nthe previous pattern is halted and the new one begins instead."),Object(i.b)("p",null,"If the method was unable to vibrate because of invalid parameters,\nit will return false, else it returns true. If the pattern leads to a too long vibration,\nit is truncated: the max length depends on the implementation."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"var successBool = window.navigator.vibrate(pattern);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"pattern"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Provides a pattern of vibration and pause intervals. Each value indicates a number of milliseconds to vibrate or pause,\nin alternation. You may provide either a single value (to vibrate once for that many milliseconds) or an array of values to alternately vibrate, pause, then vibrate again.\nSee ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/WebAPI/Vibration"}),"Vibration API")," for details.")),Object(i.b)("p",null,"Passing a value of 0, an empty array, or an array containing all zeros will cancel any currently ongoing vibration pattern."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"window.navigator.vibrate(200); // vibrate for 200ms\nwindow.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // Vibrate 'SOS' in Morse.\n")))}p.isMDXComponent=!0},398:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),v=r,d=b["".concat(o,".").concat(v)]||b[v]||u[v]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);