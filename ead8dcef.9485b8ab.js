(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{362:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(8),o=(t(0),t(396)),i={id:"navigator-b2g-audioChannelManager",title:"navigator.b2g.audioChannelManager"},l={unversionedId:"09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager",isDocsHomePage:!1,title:"navigator.b2g.audioChannelManager",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/readme.md",slug:"/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager",version:"sfp-3.0"},c=[{value:"Description",id:"description",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Properties",id:"properties",children:[{value:"Event handlers",id:"event-handlers",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"AudioChannelManager")," interface of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioChannels_API"}),"AudioChannels API")," includes features for managing your device's audio channels,\nincluding setting what channel's volume to affect when the volume buttons are pressed inside a particular app."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Inherits methods from its parent, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"}),"EventTarget"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Inherits methods from its parent, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"}),"EventTarget"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AudioChannelManager.headphones")),Object(o.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","A boolean that indicates whether headphones are plugged into the device."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AudioChannelManager.telephonySpeaker")),Object(o.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'A boolean that allows you to set whether the "telephony" audio channel should be played out of the device\'s speakers.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AudioChannelManager.volumeControlChannel")),Object(o.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMString"}),"DOMString")," that allows you to set which audio channel should have its volume changed when you press the device's hardware volume controls."),Object(o.b)("h3",{id:"event-handlers"},"Event handlers"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AudioChannelManager.onheadphoneschange")),Object(o.b)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Fired when the device's headphones are plugged in or unplugged."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"In the following simple example, we use the ",Object(o.b)("strong",{parentName:"p"},"navigator.b2g.audioChannelManager")," property to access the app's AudioChannelManager object,\nfirst to do some rudimentary feature detection, and then to set value of the AudioChannelManager.volumeControlChannel property, based on a received variable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigator.b2g.AudioChannelManager.volumeControlChannel = 'normal'\nAudioChannelClient('normal')\nHTMLMediaElement.mozAudioChannelType = 'normal'\nAudioContext.mozAudioChannelType = 'normal'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigator.b2g.AudioChannelManager.volumeControlChannel = 'content'\nAudioChannelClient('content')\nHTMLMediaElement.mozAudioChannelType = 'content'\nAudioContext.mozAudioChannelType = 'content'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigator.b2g.AudioChannelManager.volumeControlChannel = 'notification'\nAudioChannelClient('notification')\nHTMLMediaElement.mozAudioChannelType = 'notification'\nAudioContext.mozAudioChannelType = 'notification'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigator.b2g.AudioChannelManager.volumeControlChannel = 'alarm'\nAudioChannelClient('alarm')\nHTMLMediaElement.mozAudioChannelType = 'alarm'\nAudioContext.mozAudioChannelType = 'alarm'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"navigator.b2g.AudioChannelManager.volumeControlChannel = 'system'\nAudioChannelClient('system')\nHTMLMediaElement.mozAudioChannelType = 'system'\nAudioContext.mozAudioChannelType = 'system'\n")))}u.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,h=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return t?r.a.createElement(h,l(l({ref:n},p),{},{components:t})):r.a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);